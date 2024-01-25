import { Component, Injector } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { IonicPage, NavController, AlertController, Modal, ModalOptions, ModalController } from 'ionic-angular';
import { CountryandrolelistProvider } from '../../providers/countryandrolelist/countryandrolelist';
import { Facebook } from '@ionic-native/facebook';
import { LoadingService } from '../../services/loading-service';
import { HttpService } from '../../services/HttpService';

import { Device } from '@ionic-native/device';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Http } from '@angular/http';
import * as _ from 'underscore/underscore';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { CleverTap } from '@ionic-native/clevertap';
import { Port } from '../../types';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
/**
 * Generated class for the SignupwithfacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupwithfacebook',
  templateUrl: 'signupwithfacebook.html',
})
export class SignupwithfacebookPage {
	ports: any = [];
	myuserRoles: any = [];
	isLoggedIn:boolean = false;
	users: any = '';
	name : any = '';
	email: any = '';
	gender: any = '';
	picture : any = '';
	fbDetails :any;
	fbUserId : any;
	tmpDetails : any;
	limit_device_count: any;
	userType: any;
	userRoleparams: any;
	fbGender: any;
	localapi: any;
	myuserRole: string;
	port: string;
	error_msg :string = '';
	dtStr:any;
	clevertapDate:any;
	userConsent1:any;
	doctorport: string;
	doctorports: any = [];
	doctorRoles: any = [];
	specilitiesDropDown:boolean;
	myStates: any = [];
	myState: string;
	isShow:boolean = false;
	country_and_role_list_provider_object: CountryandrolelistProvider;
	facebook_object: Facebook;
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

	constructor(public navCtrl: NavController, public injector: Injector) {

		this.country_and_role_list_provider_object = injector.get<CountryandrolelistProvider>(CountryandrolelistProvider);
		this.facebook_object = injector.get<Facebook>(Facebook);
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.http_object = injector.get<Http>(Http);
		this.device_object = injector.get<Device>(Device);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.alert_controller_object = injector.get<AlertController>(AlertController);
		this.storage_object = injector.get<Storage>(Storage);
		this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);
		this.clevertap_object = new CleverTap();
		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
		this.loading_service_object = injector.get<LoadingService>(LoadingService);

		this.localapi = this.http_service_object.getApi();
		this.dtStr = this.http_service_object.dtStr();
		//console.log('dtStr-->'+this.dtStr);
		this.clevertapDate = this.http_service_object.clevertapDate();
		setTimeout(() => { 
			this.network_check_object.getPageAction('SignupwithfacebookPage','start','',localStorage.getItem('cv5usrType'));
		}, 1000); 
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupwithfacebookPage');
		this.specilitiesDropDown = true;
		//console.log('ithis.country_and_role_list_provider_object.getmyuserRoles()-->'+JSON.stringify(this.country_and_role_list_provider_object.getmyuserRoles()));
		this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
		this.myStates = this.country_and_role_list_provider_object.getUSstate();
		this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); // This will log "I do something useful!"
		this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
	}

	ionViewWillLeave(){
		this.network_check_object.getPageAction('SignupwithfacebookPage','end','','All');

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

	facebookSignIn(){
		//console.log('hi--1');
		//alert('hi--1');
		this.facebook_object.getLoginStatus()
		.then(res => {
			//console.log('hi--2'+JSON.stringify(res.status));
			//alert('hi--2'+JSON.stringify(res));
			//alert('---->-->->->'+JSON.stringify(res.status));
			if(res.status === "connected") {
				this.loading_service_object.show();
				this.isLoggedIn = true;
				this.getUserDetail(res.authResponse.userID);
			} else {
				//alert('not connecnt');
				this.loading_service_object.show();
				this.isLoggedIn = false;

				this.facebook_object.login(['email', 'public_profile'])
				.then(res => {
					if(res.status === "connected") {
						this.isLoggedIn = true;
						this.getUserDetail(res.authResponse.userID);
					} else {
						this.loading_service_object.hide();
						this.isLoggedIn = false;
					}
				})
				.catch(e => console.log('Error logging into Facebook------->'+JSON.stringify(e)));
				this.loading_service_object.hide();
			}
		})
		.catch(e => console.log('facebook error--->'+e)
		);
	}

	getUserDetail(userid) {	
	  	this.facebook_object.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
	    .then(res => {
	      this.loading_service_object.hide();	
	      //alert('getUserDetail res---->'+JSON.stringify(res));
	      //console.log('getUserDetail res---->'+JSON.stringify(res));
	      //console.log('userid-->'+userid);
		  this.fbDetails = res;
		  this.fbUserId = userid; 
	      //this.users = res;
	      this.name = res.name;
	      this.email = res.email;
	      this.gender = res.gender;
	      this.picture = res.picture.data.url;
		    if(res.hasOwnProperty('email')){

				this.http_service_object.checkEmailExists(res.email).subscribe(data => {
					//console.log('_.size(data)--->'+_.size(data));
					//alert('hi-3');
					if(_.size(data) > 0){
						//alert('hi-4');
						if(data[0].verified==1){
							//alert('hi-6');
							////console.log("datata complete---"+JSON.stringify(profileInfo));
							this.putOnlyFBData(data, res, userid);
						} else {
							this.loading_service_object.hide();
							this.specilitiesDropDown = false;
							// var confirmPopupFace = this.alert_controller_object.create({
							// 	title: '',
							// 	message: '<p style="color:#ffffff; text-align:center;">Thank you. Now please choose your profession and country..</p>',
							// 	enableBackdropDismiss: true,
							// 	buttons: ['Dismiss']
							// });
							// confirmPopupFace.present();
							//alert("Thank you. Now please choose your profession and country.");
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
					}else{
						//alert('hi-5');
						this.loading_service_object.hide();
						this.specilitiesDropDown = false;
						// var confirmPopupFace = this.alert_controller_object.create({
						// 		title: '',
						// 		message: '<p style="color:#ffffff; text-align:center;">Thank you. Now please choose your profession and country..</p>',
						// 		enableBackdropDismiss: true,
						// 		buttons: ['Dismiss']
						// 	});
						// confirmPopupFace.present();
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
	          this.tmpDetails = res;
	          this.tmpDetails.medium = "facebook";
	          this.loading_service_object.hide();
	          this.navCtrl.setRoot('SignupwithsocialnoemailPage',{'tmp_Details' : res});
	        }
	    })
	    .catch(e => {
	      console.log(e);
	    });
	}

	submitlogin(){
		var myuserRole = this.myuserRole;
		var country = this.port;
		var usaState = this.myState;
		var fbDetails = this.fbDetails;
		var userConsnt =this.userConsent1;
		var doctor = this.doctorport;
		console.log('fbDetails-->'+JSON.stringify(this.fbDetails));
		console.log('fbDetails-->'+JSON.stringify(this.fbDetails));
		console.log('this.gender-->'+JSON.stringify(this.gender));
		//alert('this.gender-->'+JSON.stringify(this.gender));
		this.gender = '';
		if(this.gender =='male'){
			this.fbGender='M';
		}
		else if(this.gender =='female'){
			this.fbGender='F';
		}

		//alert('this.fbGender-->'+JSON.stringify(this.fbGender));
		//alert('fbDetails.gender-->'+JSON.stringify(fbDetails.gender));

		if (this.isLoggedIn === false || this.fbDetails == '' || this.fbDetails == undefined) {
			this.error_msg = "Please Signup with Facebook.";
		}
		/*else if(typeof myuserRole === "undefined"  || myuserRole == '') {
	  		this.error_msg = "Please Select Your Profession";
	  	}*/else if (typeof country === "undefined"  || country == '') {
	  		this.error_msg = "Please select Country";	  		
	  	}else if (this.isShow == true && (typeof usaState === "undefined"  || usaState == '')) {
	  		this.error_msg = "Please select State";	
	  	}else if (typeof doctor === "undefined"  || doctor == '') {
	  		this.error_msg = "Please Select Your Profession";	  		
	  	}else if (userConsnt === false || userConsnt == undefined) {
	  		// code...
	  		this.error_msg = "Please acknowledge the privacy policy & terms of service";
	  	}else if(doctor != '' && country != '' && this.fbDetails != '' && userConsnt!=false && ((usaState != '' && this.isShow == true)  || this.isShow == false)){
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

	        this.http_service_object.checkEmailExists(fbDetails.email).subscribe(data => {
				console.log('_.size(data)--->'+_.size(data));
				//alert('_.size(data)--->'+_.size(data));
				if(_.size(data) > 0){
					this.loading_service_object.hide();
					console.log('data --->'+JSON.stringify(data));
					console.log('data--->id-->'+JSON.stringify(data.id));
					console.log('data--->id 0-->'+JSON.stringify(data[0].id));
					this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+data[0].id,
					{
						"fullname": fbDetails.name,
						"email" : fbDetails.email,
						"gender" : fbDetails.gender,
						"profilePic" : fbDetails.picture.data.url,
						"medium" : "facebook",
			            "facebookId" : fbDetails.id,
						"userRoleId" : this.userType,
						"specialities": specialities,
						"userRoleSubType": sub_Specialities,
						"location":usercountry,
						"verified":1
					}).subscribe(userDataInsertSuccess => {
						console.log(userDataInsertSuccess.text());
						var response = JSON.parse(userDataInsertSuccess['_body']);

						//console.log('userDataInsertSuccess.text()--->'+JSON.stringify(response));
		  				this.loading_service_object.hide();
						var myuserRole = '';
						var country = '';
						var usaState = '';
	
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
						localStorage.setItem('myProductflg', 'false');
						localStorage.setItem('productID', 'false');
						localStorage.setItem('location', response.location);
						localStorage.setItem('referred_by', response.referred_by);
						localStorage.setItem('referral_code', response.referral_code);

						this.syncLocalDB(this.userType);
						this.insertUpdateLocalDB(response,"");

						this.http_service_object.getPoweredByData(userRoleparams).subscribe(results => {
							console.log('results-->'+JSON.stringify(results));
							this.loading_service_object.hide();
							var that = this;
							var splash_data = [];
							splash_data = _.filter(results,function(value){
								return (value.isFor == userRoleparams || value.isFor == "all")
							});
							if(_.size(splash_data) > 0){
								this.navCtrl.setRoot('SplashesPage',{powerdbyResult : splash_data , type:'PoweredBy', userType : this.userType}); 
								//$state.go('app.hcpbanner',{ usertype : userType});
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
						  this.loading_service_object.hide();
						});  
					}, userDataInsertError => {
						this.loading_service_object.hide();
						//alert(userDataInsertError.text());
						console.log(userDataInsertError.text());
					});

				}else{
					var referral_code = fbDetails.email.substring(0,4)+''+Math.floor(Math.random()*(9999-1000+1)+1000);
					localStorage.setItem('referral_code', referral_code);
					this.http_object.post(this.localapi+"/api/CardiovisualUsers",
		  			{
						"fullname": fbDetails.name,
						"email" : fbDetails.email,
						"password" : "",
						"gender" : fbDetails.gender,
						"userRoleId" : this.userType,
						"discoveryMethodId" : 0,
						"clevertapId" : "",
						"branchId" : "",
						"branchLink" : "",
						"branchWebUrl" : "",
						"profilePic" : fbDetails.picture.data.url,
						"medium" : "facebook",
						"facebookId" : fbDetails.id,
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
		  			}).subscribe(userDataInsertSuccess1 => {
		  				this.loading_service_object.hide();
						var myuserRole = '';
						var country = '';
						var usaState = '';
						var response = JSON.parse(userDataInsertSuccess1['_body']);
						//alert('---response---->'+JSON.stringify(response));
						console.log('---response---->'+JSON.stringify(response));
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
						localStorage.setItem('myProductflg', 'false');
						localStorage.setItem('productID', 'false');
						localStorage.setItem('location', response.location);
						
						this.syncLocalDB(this.userType);
						this.insertUpdateLocalDB(response,"");	

						
						this.http_service_object.getPoweredByData(userRoleparams).subscribe(results => {
							console.log('results-->'+JSON.stringify(results));
							this.loading_service_object.hide();
							var that = this;
							var splash_data = [];
							splash_data = _.filter(results,function(value){
								return (value.isFor == userRoleparams || value.isFor == "all")
							});
							if(_.size(splash_data) > 0){
								this.navCtrl.setRoot('SplashesPage',{powerdbyResult : splash_data , type:'PoweredBy', userType : this.userType}); 
								//$state.go('app.hcpbanner',{ usertype : userType});
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
						  this.loading_service_object.hide();	
						  console.log('err1->'+err);
						  //alert(err);
						}); 
						//sqlitedatabaseService.signUpToMailChimp(userDataInsertSuccess); 
						//"ok":true  
			        }, error => {
			          console.log('userDataInsertError->'+error);
			          this.loading_service_object.hide();
			        }); 
				}
			}, err => {
				console.log('err->'+err);
				//alert(err);
			}); 
	  	}
	}
    putOnlyFBData(userDetails, fbProfileDetails, fbUserId){
    	//console.log('putOnlyFBData');
		this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+userDetails[0].id,
		{
			"fullname": fbProfileDetails.name,
			"email" : fbProfileDetails.email,
			"gender" : fbProfileDetails.gender,
			"profilePic" : fbProfileDetails.picture.data.url,
			"medium" : "facebook",
            "facebookId" : fbUserId
		}).subscribe(userDataInsertSuccess => {
			this.loading_service_object.hide();

			//console.log(userDataInsertSuccess.text());
			//console.log('userDetails[0].password-->'+userDetails[0].password);
			//console.log('userDetails.password-->'+userDetails.password);
			//console.log('userDataInsertSuccess in put only fb data-->'+JSON.stringify(userDataInsertSuccess));
			var userType = '';
			if(userDetails[0].userRoleId == '5') userType='patient';
			else userType='doctor';
			localStorage.setItem('cv5userEmail',userDetails[0].email);
			localStorage.setItem('cv5userRoleId',userDetails[0].userRoleId);
			localStorage.setItem('cv5usrType',userType);
			localStorage.setItem('cv5usrRolesubType',userDetails[0].userRoleSubType);
			localStorage.setItem('userIdentity',userType+userDetails[0].id);
			localStorage.setItem('verified',userDetails[0].verified);
			
			// this.storage_object.set('user_logged_in', userDetails[0].id);
			// localStorage.setItem('userliveId',userDetails[0].id);
			localStorage.setItem('myProductflg', 'false');
			localStorage.setItem('productID', 'false');
			this.http_service_object.getRegisteredDeviceCount(userDetails[0].id).subscribe(device_data => {
				console.log('device_data response--->'+JSON.stringify(device_data));
				if(_.size(device_data) > 0){
					var myDeviceStatus = _.where(device_data, {deviceToken : this.database_provider_object.getOSSpecificUUID(userDetails[0].id)});
	  				console.log('myDeviceStatus-->'+JSON.stringify(myDeviceStatus));
	  				var osType = this.device_object.platform.toLowerCase();
	  				console.log('osType-->'+osType);
					this.http_service_object.getAppDetails(osType).subscribe(appDetails => {
						var limit_device_count = appDetails[0].maxDeviceLimit;
						if(_.size(myDeviceStatus) > 0 && myDeviceStatus.status){

							this.loginSuccess(userDetails, userDetails[0].password, userDataInsertSuccess);
						}else if(_.size(device_data) < limit_device_count){
							 this.loginSuccess(userDetails, userDetails[0].password, userDataInsertSuccess);
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
					this.loginSuccess(userDetails, userDetails[0].password, userDataInsertSuccess);
				}

			}, err => {
				this.loading_service_object.hide();
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
    	//console.log('data---->'+JSON.stringify(data));
    	this.storage_object.set('user_logged_in', data[0].id);
		localStorage.setItem('userliveId',data[0].id);
		this.syncLocalDB(data[0].userRoleId);
		this.insertUpdateLocalDB(data[0], password);
		this.loading_service_object.hide();
		//sqlitedatabaseService.signUpToMailChimp(userDataInsertSuccess);
		this.userType = data[0].userRoleId;
		console.log('this.userType--> login success-->'+this.userType);
		/*by Sanjeev 2019 a[ril] 11*/
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
    	console.log('insertUpdateLocalDB result-->'+JSON.stringify(result))
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

	    console.log('insertUpdateLocalDB userData-->'+JSON.stringify(userData))

		var userCondition = new Array(""); 
		this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(userresult => {
			if(_.size(userresult) > 0){
				this.database_provider_object.updateNewUserInfo(userData);
			}else{
				//this.database_provider_object.insertNewUserInfo(userData);
				this.database_provider_object.storeUserdata(userData);
			}
		});
		var user_type_temp = (result.userRoleId == 1) ? "doctor" : "patient";
		this.clevertap_object.onUserLogin({
	        "Identity": user_type_temp+result.id,
			"Email":"'"+result.email+"'",
	        "custom":"Login with Facebook"
		});
		// this.clevertap_object.profileSet({
		// 	"Name":"'"+result.fullname+"'",
		// 	"Gender" : result.gender,
		// 	"Photo":  result.profilePic,
		// 	"Location":"'"+result.location+"'",
		// 	"UserRoleId":"'"+result.userRoleId+"'",
		// 	"UserType":"'"+user_type_temp+"'",
		// 	"Specialities":"'"+result.specialities+"'",
		// 	"SubSpecialities":"'"+result.userRoleSubType+"'",
		// 	"medium" :"'"+ result.medium+"'",
		// });
		/*
		var params = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : result.userRoleId,
			"userType": user_type_temp,
			"userEmail" : result.email,
			"medium" : result.medium,
			"verified" : result.verified,
			"specialities": result.specialities,
			"subSpecialities": result.userRoleSubType,
			"userRoleSubType" : result.userRoleSubType,
			"location" : result.location
		}; 
		this.clevertap_object.recordEventWithNameAndProps("facebookLogin",params); 
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


