import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, AlertController, Modal, ModalOptions, ModalController } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CountryandrolelistProvider } from '../../providers/countryandrolelist/countryandrolelist';
import { GooglePlus } from '@ionic-native/google-plus';
//import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { LoadingService } from '../../services/loading-service';
import { HttpService } from '../../services/HttpService';
import * as _ from 'underscore/underscore';
import { Http } from '@angular/http';

import { Device } from '@ionic-native/device';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { CleverTap } from '@ionic-native/clevertap';
import { Port } from '../../types';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
/**
 * Generated class for the SignupwithgooglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupwithgoogle',
  templateUrl: 'signupwithgoogle.html',
})
export class SignupwithgooglePage {
	ports: any = [];
	myuserRoles: any = [];
	displayName: any;
	email: any;
	familyName: any;
	givenName: any;
	userId: any;
	imageUrl: any;
	isLoggedIn:boolean = false;
	myuserRole: string;
	port: string;
	error_msg :string = '';
	googleUserId:any;
	limit_device_count: any;
	userType: any;
	userRoleparams: any;
    googleDetails: any = [];
    localapi: any;
	dtStr:any;
	clevertapDate:any;
	userConsent2:any;
	doctorport: string;
	doctorports: any = [];
	doctorRoles: any = [];
	myStates: any = [];
	myState: string;
	isShow:boolean = false;
	country_and_role_list_provider_object: CountryandrolelistProvider;
	google_plus_object: GooglePlus;
	loading_service_object: LoadingService;
	http_service_object: HttpService;
	http_object: Http;
	device_object: Device;
	database_provider_object: DatabaseProvider;
	alert_controller_object: AlertController;
	storage_object: Storage;
	in_app_browser_object: InAppBrowser;
	modal_controllar_object: ModalController;
	clevertap_object: CleverTap;
	network_check_object: NetworkCheckProvider;

	specilitiesDropDown:boolean;
	constructor(public navCtrl: NavController, public injector: Injector) {

		this.country_and_role_list_provider_object = injector.get<CountryandrolelistProvider>(CountryandrolelistProvider);
		this.google_plus_object = injector.get<GooglePlus>(GooglePlus);
		this.loading_service_object = injector.get<LoadingService>(LoadingService);
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.http_object = injector.get<Http>(Http);
		this.device_object  = injector.get<Device>(Device);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.alert_controller_object = injector.get<AlertController>(AlertController);
		this.storage_object = injector.get<Storage>(Storage);
		this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);4
		this.clevertap_object = new CleverTap();
		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);

		this.localapi = this.http_service_object.getApi();
		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();
		setTimeout(() => { 
			this.network_check_object.getPageAction('SignupwithgooglePage','start','',localStorage.getItem('cv5usrType'));
		}, 1000); 
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupwithgooglePage');
		this.specilitiesDropDown = true;
		this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
		this.myStates = this.country_and_role_list_provider_object.getUSstate();
		this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); // This will log "I do something useful!"
		this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
		//this.doctorports = '';

	}

	ionViewWillLeave(){
		this.network_check_object.getPageAction('SignupwithgooglePage','end','','All');

	}

	portChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		console.log('port:'+ event.value);
		//alert('port:'+JSON.stringify(event.value));
		if (event.value['name'] == "United States of America") {
			// code...
			//alert('event.value[name]-->'+event.value['name']);
			this.isShow = true;
		}else{
			//alert('else');
			this.isShow = false;
		}
	}

	stateChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		console.log('stateChange value:'+JSON.stringify( event.value));
	}

	docPortChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		console.log('doc port:'+ event.value);
	}

	getGroupText(port: Port, portIndex: number, ports: Port[]) {

		if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
			return port.country.name;
		}
		return null;
	}

	roleChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		console.log('role:', event.value);
	}

	goBack() {
		this.navCtrl.push('LoginPage');
	}

	googleSignIn(){
		//alert('googleSignIn');
		this.google_plus_object.login({})
		.then(res => {
			this.loading_service_object.googleSignInLoading();
			console.log(res);
			
			this.googleLoginSuccess(res);
			//alert('res-->'+JSON.stringify(res));

			this.displayName = res.displayName;
			this.email = res.email;
			this.familyName = res.familyName;
			this.givenName = res.givenName;
			this.userId = res.userId;
			this.imageUrl = res.imageUrl;

			this.isLoggedIn = true;
		})
		.catch(err => {
			console.error(err);
			//alert('err-->'+JSON.stringify(err));
		});
	}

	googleLoginSuccess(profileInfo){
		//alert('googleLoginSuccess');
		this.googleDetails = profileInfo;
		this.googleUserId = profileInfo.userId;
		//alert("profileInfo---"+JSON.stringify(profileInfo));
		//console.log("googleUserId---"+JSON.stringify(this.googleUserId));
		if(profileInfo.hasOwnProperty('email')){
			this.http_service_object.checkEmailExists(profileInfo.email).subscribe(data => {
				console.log('_.size(data)--->'+_.size(data));
				//alert('_.size(data)--->'+_.size(data));
				if(_.size(data) > 0){
					//alert('size data---');
					this.specilitiesDropDown = false;
					if(data[0].verified==1){
						//alert('data[0].verified---'+data[0].verified);
						////console.log("datata complete---"+JSON.stringify(profileInfo));
						this.putOnlyGoogleData(data[0], profileInfo, this.googleUserId);
					} else {
						this.loading_service_object.hide();

						var confirmPopup = this.alert_controller_object.create({
						     title: '',
						     message: '<p style="color:#ffffff; text-align:center;">Thank you. Now please choose your profession and country..</p>',
						     enableBackdropDismiss: true,
						     buttons: ['Ok']
							});
						confirmPopup.present();
						
					}
				}else{

					this.specilitiesDropDown = false;
					this.loading_service_object.hide();
					// var confirmPopup = this.alert_controller_object.create({
					// 	title: '',
					// 	message: '<p style="color:#ffffff; text-align:center;">Thank you. Now please choose your profession and country..</p>',
					// 	enableBackdropDismiss: true,
					// 	buttons: ['Ok']
					// });
					// confirmPopup.present();
					
					var user_type = ''; 
					let confirmalert = this.alert_controller_object.create({
						title: `<p style="color:#1c1b1b;">Thank you. Please provide your profession and country to help us customize the app.</p>`,
						//title: `Are you a healthcare professional`,
						subTitle: `<p style="text-align:center;"> <strong>Are you a healthcare professional ? </strong></p>`,
						message: `
				        <ul>
				          <li><strong>Choose <b>'YES'</b> if you are a Doctor or Medical / Healthcare Industry Professional.</strong></li><br/>
				          <li><strong>Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient.</strong></li>
				        </ul>
				      `,
				      	cssClass: 'google-popup-pin',
						buttons: [
							{
								text: 'Yes',
								handler: () => {
									console.log('OK clicked: ');
									////console.log("if true");
									user_type = "1";
								}
							}, {
								text: 'No',
								handler: () => {
									////console.log("no clicked");
									user_type = "5";
									console.log('Cancel clicked');
								}
							}
						],
						enableBackdropDismiss: false // <- Here! :)
					});
					confirmalert.present();
					confirmalert.onDidDismiss((alertData) => {

						if (user_type == "1") {
							this.doctorports = this.country_and_role_list_provider_object.getOnlyDoctorRoles();
						}else if (user_type == "5") {
							this.doctorports = this.country_and_role_list_provider_object.getPatientRoles();
						}else{

							this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
						}
					});  
				}
			}); 
        } else {
              
        }
	}

	putOnlyGoogleData(userDetails, googleProfileDetails, fbUserId){
		//alert('putOnlyGoogleData');
		//alert('userDetailb---->'+JSON.stringify(userDetails));
		console.log('userDetailb---->'+JSON.stringify(userDetails));

		this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+userDetails.id,
		{
			"fullname": googleProfileDetails.displayName,
			"email" : googleProfileDetails.email,
			"gender" : "",
			"profilePic" : googleProfileDetails.imageUrl,
			"medium" : "google",
			"facebookId" : googleProfileDetails.userId
		}).subscribe(userDataInsertSuccess => {
			//console.log(userDataInsertSuccess.text());
			var userType = '';
			if(userDetails.userRoleId == '5') userType='patient';
			else userType='doctor';

			localStorage.setItem('cv5userEmail',userDetails.email);
			localStorage.setItem('cv5userRoleId',userDetails.userRoleId);
			localStorage.setItem('cv5usrType',userType);
			
			localStorage.setItem('cv5usrRolesubType',userDetails.userRoleSubType);
			localStorage.setItem('userIdentity',userType+userDetails.id);
			localStorage.setItem('verified',userDetails.verified);
			//localStorage.setItem('userliveId',userDetails.id);
			//this.storage_object.set('user_logged_in', userDetails.id);
			localStorage.setItem('myProductflg', 'false');
			localStorage.setItem('productID', 'false');

			this.http_service_object.getRegisteredDeviceCount(userDetails.id).subscribe(device_data => {
				//console.log('device_data response--->'+JSON.stringify(device_data));
				if(_.size(device_data) > 0){
					var myDeviceStatus = _.where(device_data, {deviceToken : this.database_provider_object.getOSSpecificUUID(userDetails.id)});
	  				console.log('myDeviceStatus-->'+JSON.stringify(myDeviceStatus));
	  				var osType = this.device_object.platform.toLowerCase();
	  				//console.log('osType-->'+osType);
					this.http_service_object.getAppDetails(osType).subscribe(appDetails => {
						var limit_device_count = appDetails[0].maxDeviceLimit;
						if(_.size(myDeviceStatus) > 0 && myDeviceStatus.status){

							this.loginSuccess(userDetails, userDetails.password, userDataInsertSuccess);
						}else if(_.size(device_data) < limit_device_count){
							this.loginSuccess(userDetails, userDetails.password, userDataInsertSuccess);
						} else{
							this.loading_service_object.hide();
							//alert('device_restriction_message');
							this.storage_object.set('user_logged_in', 0); 

							var confirmPopup = this.alert_controller_object.create({
							     title: '',
							     message: '<p style="color:#ffffff; text-align:center;">You have reached limit of installing this app on multiple devices. Please logout from other device to continue.</p>',
							     enableBackdropDismiss: true,
							     buttons: [{ 
									text: 'Manage Devices', handler: () => {
										this.navCtrl.push('ManageDevicesPage', {'request_from':'login_page', 'user_data':userDetails});
									}
								}]
						   	});
						   confirmPopup.present();
						}
					});
				}else{
					this.loginSuccess(userDetails, userDetails.password, userDataInsertSuccess);
				}
				// this.storage_object.set('user_logged_in', userDetails.id);
				// localStorage.setItem('userliveId',userDetails.id);

			}, err => {
				console.log('getRegisteredDeviceCount err->'+JSON.stringify(err));
				//alert(err);
			}); 
		}, userDataInsertError => {
			this.loading_service_object.hide();
			//alert(userDataInsertError.text());
			console.log(userDataInsertError.text());
		}); 
    }

    loginSuccess(data, password, userDataInsertSuccess){

    	//alert('login success');
    	//alert('login success data--->'+JSON.stringify(data));
    	this.loading_service_object.hide();
		this.storage_object.set('user_logged_in', data.id);
		localStorage.setItem('userliveId',data.id);
		this.syncLocalDB(data.userRoleId);
		this.insertUpdateLocalDB(data, password);
		this.userType = data.userRoleId;
		/*by Sanjeev 2019 april 11 */
		this.userRoleparams = (this.userType == 1) ?  "doctor" : "patient";
		this.http_service_object.getPoweredByData(this.userRoleparams).subscribe(results => {
			console.log('results-->'+JSON.stringify(results));
			var that = this;
			var splash_data = [];
			splash_data = _.filter(results,function(value){
				return (value.isFor == that.userRoleparams  || value.isFor == "all")
			});
			if(_.size(splash_data) > 0){
				this.navCtrl.setRoot('SplashesPage',{powerdbyResult : splash_data , type:'PoweredBy', userType : this.userType}); 
				//$state.go('app.hcpbanner',{ usertype : userType});
			}else{
				console.log('no splashes results-->'+this.userRoleparams);
				this.navCtrl.setRoot('DashboardPage');
				// this.navCtrl.setRoot('WhatsNewPage');
				// if(this.userType == 5){
				// 	this.navCtrl.setRoot('OrientationPlaylistNonHcp'); 
				// } else {
				// 	this.navCtrl.setRoot('OrientationPlaylistHcp');  
				// }
			}
		}, err => {
		  console.log('err->'+err);
		  //alert(err);
		}); 
       /* END */
    }

	submitlogin(){
		//alert('google login submit');
		var myuserRole = this.myuserRole;
		var country = this.port;
		var usaState = this.myState;
		var google_Details = this.googleDetails;
		var userConsnt =this.userConsent2;
		var doctor = this.doctorport;
		//alert('googleDetails------>'+JSON.stringify(this.googleDetails));

		console.log('google_Details------>'+JSON.stringify(google_Details));
		if (this.isLoggedIn === false || this.googleDetails == '' || this.googleDetails == undefined) {
			this.error_msg = "Please Signup with google.";
		}
		// else if(typeof myuserRole === "undefined"  || myuserRole == '') {
		//  		this.error_msg = "Please Select Your Profession";
		//  	}
	  	else if (typeof country === "undefined"  || country == '') {
	  		this.error_msg = "Please select Country";	  		
	  	}else if (this.isShow == true && (typeof usaState === "undefined"  || usaState == '')) {
	  		this.error_msg = "Please select State";	
	  	}else if (typeof doctor === "undefined"  || doctor == '') {
	  		this.error_msg = "Please Select Your Profession";	  		
	  	}else if (userConsnt === false || userConsnt == undefined) {
	  		// code...
	  		this.error_msg = "Please acknowledge the privacy policy & terms of service";
	  	}else if(doctor != '' && country != '' && this.googleDetails != ''  && userConsnt!=false && ((usaState != '' && this.isShow == true)  || this.isShow == false)){
	  		this.error_msg = '';
	  		this.loading_service_object.show();
	  		//var userRole =  myuserRole['role'];
	  		var usercountry = country['name'];

			if (this.isShow) {
				var usa_State = usaState['name'];
				var usa_State_code = usaState['code'];
			}else{
				var usa_State =  "";
				var usa_State_code =  "";
			}

	  		var doctorCodeName = doctor['name'];

	  		var doctor_code = doctor['doctorcode'];

	  		var splitTest = doctor_code.split(":");
	  		var specialities = splitTest[0];
	  		var sub_Specialities = splitTest[1];

	        switch (doctor_code) {
	        	case "Cardiovascular Doctor:EP":
	        		// code...
	        		this.userType = 1;
	        		break;
	        	case "Cardiovascular Doctor:Invasive":
	        		this.userType = 1;
	        		break;
	        	case "Cardiovascular Doctor:Non-Invasive":
	        		this.userType = 1;
	        		break;
	        	case "Cardiovascular Doctor:Surgeon":
	        		this.userType = 1;
	        		break;
	        	case "Cardiovascular Doctor:Other":
	        		this.userType = 1;
	        		break;
	        	case "Doctor:Int. Med/FM":
	        		this.userType = 1;
	        		break;
	        	case "Doctor:Endocrinologist":
	        		this.userType = 1;
	        		break;
	        	case "Doctor:Physiotherapist":
	        		this.userType = 1;
	        		break;
	        	case "Doctor:Other":
	        		this.userType = 1;
	        		break;
	        	case "PA/NP/Nurse:PA/NP/RN":
	        		this.userType = 1;
	        		break;
	        	case "PA/NP/Nurse:Student":
					// code...
					this.userType = 1;
					break;
				case "PA/NP/Nurse:Other":
					// code...
					this.userType = 1;
					break;
				case "Medical Trainee/Fellow:Fellow/Resident":
					// code...
					this.userType = 1;
					break;
				case "Medical Trainee/Fellow:Student":
					// code...
					this.userType = 1;
					break;
				case "Medical Trainee/Fellow:Other":
					// code...
					this.userType = 1;
					break;
				case "Other Medical Professional:Ex Physio/Rehab":
					// code...
					this.userType = 1;
					break;
				case "Other Medical Professional:Tech":
					// code...
					this.userType = 1;
					break;
				case "Other Medical Professional:Educators":
					// code...
					this.userType = 1;
					break;
				case "Other Medical Professional:Other":
					// code...
					this.userType = 1;
					break;													
				case "Non-Healthcare Professional:Curious Learner":
					this.userType = 5;
					break;
				case "Non-Healthcare Professional:Media":
					this.userType = 5;
					break;
				case "Non-Healthcare Professional:Other":
					this.userType = 5;
					break;
				case "Patient:Patient":
					this.userType = 5;
					break;	
				case "Healthcare Industry Professional:Device":
					this.userType = 1;
					break;
				case "Healthcare Industry Professional:Pharma":
					this.userType = 1;
					break;
				case "Healthcare Industry Professional:Other":
					this.userType = 1;
					break;												        	
	        }

	        this.http_service_object.checkEmailExists(google_Details.email).subscribe(data => {
				//alert('checkEmailExists _.size(data)--->'+_.size(data));
				if(_.size(data) > 0){
					this.loading_service_object.hide();

				}else{
					//alert('else -1 ');
					var referral_code = google_Details.email.substring(0,4)+''+Math.floor(Math.random()*(9999-1000+1)+1000);
					localStorage.setItem('referral_code', referral_code);
					//alert('else -2 ');
					this.http_object.post(this.localapi+"/api/CardiovisualUsers",
		  			{
						"fullname": google_Details.displayName,
						"email" : google_Details.email,
						"password" : "",
						"gender" :  null,
						"userRoleId" : this.userType,
						"discoveryMethodId" : 0,
						"clevertapId" : "",
						"branchId" : "",
						"branchLink" : "",
						"branchWebUrl" : "",
						"profilePic" : google_Details.imageUrl,
						"medium" : "google",
						"facebookId" : google_Details.userId,
						"specialities": specialities,
						"userRoleSubType": sub_Specialities,
						"location":usercountry,
						"state":usa_State_code,
						"referral_code":referral_code,
						"npi_number":0,
						"npi_id":0,
						"referred_by":0,
						"verified":1,
						"username":"",
						"isPaid":0
		  			}).subscribe(userDataInsertSuccess => {
		  				//alert('userDataInsertSuccess-->'+JSON.stringify(userDataInsertSuccess));
		  				//console.log('userDataInsertSuccess-->'+JSON.stringify(userDataInsertSuccess));

		  				this.loading_service_object.hide();
						var response = JSON.parse(userDataInsertSuccess['_body']);
						var myuserRole = '';
						var country = '';
						var doctor = '';
						var usaState='';

						var userRoleparams = (this.userType == 1) ?  "doctor" : "patient";
						localStorage.setItem('cv5userEmail',response.email);
						localStorage.setItem('cv5userRoleId',response.userRoleId);
						localStorage.setItem('cv5usrType',userRoleparams);
						localStorage.setItem('usrSpecialities', response.specialities);
						localStorage.setItem('cv5usrRolesubType',response.userRoleSubType);
						localStorage.setItem('userIdentity',userRoleparams+response.id);
						localStorage.setItem('verified',response.verified);
						localStorage.setItem('userliveId',response.id);	
						this.storage_object.set('user_logged_in', response.id);
						localStorage.setItem('location', response.location);
						localStorage.setItem('myProductflg', 'false');
						localStorage.setItem('productID', 'false');

						this.syncLocalDB(this.userType);
						this.insertUpdateLocalDB(response,"");

						this.http_service_object.getPoweredByData(userRoleparams).subscribe(results => {
							//console.log('results-->'+JSON.stringify(results));
							var that = this;
							var splash_data = [];
							splash_data = _.filter(results,function(value){
								return (value.isFor == userRoleparams  || value.isFor == "all")
							});
							if(_.size(splash_data) > 0){
								this.navCtrl.setRoot('SplashesPage',{powerdbyResult : splash_data , type:'PoweredBy', userType : this.userType}); 
							}else{
								console.log('no splashes results-->'+userRoleparams);
								this.navCtrl.setRoot('DashboardPage');
								// this.navCtrl.setRoot('WhatsNewPage');
								// if(this.userType == 5){
								// 	this.navCtrl.setRoot('OrientationPlaylistNonHcp'); 
								// } else {
								// 	this.navCtrl.setRoot('OrientationPlaylistHcp');  
								// }
							}
						}, err => {
						  console.log('err1->'+err);
						  //alert(err);
						}); 
						//sqlitedatabaseService.signUpToMailChimp(userDataInsertSuccess); 
						//"ok":true  
			        }, error => {
			          console.log('userDataInsertError->'+error);
			         // alert('userDataInsertError->'+JSON.stringify(error));
			          //alert('userDataInsertError->'+JSON.stringify(error['_body']));
			          this.loading_service_object.hide();
			        }); 
				}
			}, err => {
				console.log('err->'+err);
				//alert('err->'+JSON.stringify(err));
				//alert(err);
			}); 
	  	}
	}
	syncLocalDB(user_type){
		var userID = localStorage.getItem('userliveId');
		const email = localStorage.getItem('cv5userEmail');
		user_type = (user_type == 1) ?  "doctor" : "patient";
		this.loading_service_object.generateandSaveLinks(userID, user_type, email);
        // Get topics detail from API

        //alert('sync user_type-->'+user_type);
		this.database_provider_object.getTopicsAPIData(user_type);
		this.database_provider_object.dashboardInformationAPIData(user_type);

		//insert playlist data from api
		this.database_provider_object.insertPlaylistsAPIData(userID);

		// Get categories detail from API
		this.database_provider_object.getCategoriesAPIData(user_type);

		this.database_provider_object.getCardioSplashes(user_type);

		this.database_provider_object.getSubTopicsAPIData(user_type);
		this.database_provider_object.getOrderDetailsAPIData(userID);
		//information table
		this.database_provider_object.getInformationAPIData(user_type);
		//channels table
		this.database_provider_object.getChannelsApiData(user_type); 
		//custom_lisiting
		this.database_provider_object.getCutomlistingApi();

		//custom video json
		this.database_provider_object.getCutomVideoJsonApi();

		//sponsored by table
		this.database_provider_object.getSponsoredByData(user_type);

		
		//whatsnew data by table
		this.database_provider_object.getWhatsnewData(user_type);

		//whatsnew page section title
		this.database_provider_object.getWhatsnewSectionTitleData(user_type);

		this.database_provider_object.getCustomPlaylistData(localStorage.getItem('userliveId'));

		this.database_provider_object.getUserNotificationData(user_type);


		localStorage.setItem('onlyForWhatsnew','nosync');

		localStorage.setItem('app_sync_dashboard','no');

		localStorage.setItem('clevertapInitialize','yes');
		localStorage.setItem('userRegistrationClevertap','yes');
    }


    insertUpdateLocalDB(result,password){
    	//alert('insertUpdateLocalDB result---->'+JSON.stringify(result));
    	//console.log('insertUpdateLocalDB result---->'+JSON.stringify(result));
    	//console.log('result.id---->'+JSON.stringify(result.id));
		
	   	var userData = {
		    "email" : result.email,
	        "user_type" : (result.userRoleId == 1) ? "doctor" : "patient",
	        "isPaid" : result.isPaid,
	        "userRoleId" : result.userRoleId,
	        "discoveryMethodId" : result.discoveryMethodId,
	        "clevertapId" : result.clevertapId,
	        "liveId" : result.id,
	        "fullname" : result.fullname,
	        "password" : password,
	        "gender" : result.gender,
	        "birthyear" : result.birthyear,
	        "profilePic" : result.profilePic,
	        "medium" : result.medium,
	        "facebookId" : result.facebookId,
	        "specialities": result.specialities,
	        "userRoleSubType" : result.userRoleSubType,
	        "location" : result.location,
	        "verified" : result.verified,
	        "username" : result.username,
	       	"state": result.state,
			"referral_code" : result.referral_code,
			"referred_by" : result.referred_by,
			"npi_number" : result.npi_number,
			"npi_id" : result.npi_id
	    };
	    //console.log('userData---->'+JSON.stringify(userData));

		var userCondition = new Array(""); 
		this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(userresult => {
			//console.log('fffffff------'+JSON.stringify(userresult));
			if(_.size(userresult) > 0){
				this.database_provider_object.updateNewUserInfo(userData);
			}else{
				//this.database_provider_object.insertNewUserInfo(userData);
				this.database_provider_object.storeUserdata(userData);
			}
		}, error => {
			//console.log('cccccccc-->'+JSON.stringify(error));
		}); 

		var user_type_temp = (result.userRoleId == 1) ? "doctor" : "patient";
		this.clevertap_object.onUserLogin({
	        "Identity": user_type_temp+result.id,
			"Email":"'"+result.email+"'",
	        "custom":"Login with Google"
		});
		/*
		var params = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : result.userRoleId,
			"userType": user_type_temp,
			"specialities": result.specialities,
			"subSpecialities": result.userRoleSubType,
			"userEmail" : result.email,
			"medium" : result.medium,
			"verified" : result.verified,
			"userRoleSubType" : result.userRoleSubType,
			"location" : result.location,
			"Identity": user_type_temp+result.id
		}; 
		this.clevertap_object.recordEventWithNameAndProps("googleLogin",params); 

		*/
		//stores device data on server

		var devicesData = {
	       "deviceToken": localStorage.getItem('getDeviceuuid'),
	       "deviceType": localStorage.getItem('getDevicePlatform'),
	       "userId": result.id,
	       "osVersion": localStorage.getItem('getDeviceversion'),
	       //"latitude": latitude,
	       //"longitude":longitude,
	       "model": localStorage.getItem('modelNo'),
	       "updatedAt":new Date().toISOString(),
	       "status":1
	   	}
	    this.database_provider_object.saveDeviceDataToApi(devicesData);            
    }

    termsofservice(){
		this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
	}

	privacypolicy(){
		const myModalOptions: ModalOptions = {
	     	enableBackdropDismiss: false
	   	};

	   const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'Privacy Policy' }, myModalOptions);
	   myModal.present();
	}

}
