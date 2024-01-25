import { Component, Injector} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Modal, ModalOptions, ModalController } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CountryandrolelistProvider } from '../../providers/countryandrolelist/countryandrolelist';
import { LoadingService } from '../../services/loading-service';
import { HttpService } from '../../services/HttpService';
import * as _ from 'underscore/underscore';
import { Http } from '@angular/http';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { CleverTap } from '@ionic-native/clevertap';
import { Port } from '../../types';
import { Device } from '@ionic-native/device';


 //declare let cordova: any;
 declare let window: any;
/**
 * Generated class for the SignupwithapplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupwithapple',
  templateUrl: 'signupwithapple.html',
})


export class SignupwithapplePage {
	ports: any = [];
	myuserRoles: any = [];
	localapi: any;
	dtStr:any;
	clevertapDate:any;
	userRoleparams:any;
	limit_device_count: any;
	userType: any;
	doctorport: string;
	doctorports: any = [];
	doctorRoles: any = [];
	myStates: any = [];
	myState: string;
	isShow:boolean = false;
	specilitiesDropDown:boolean;
	myuserRole: string;
	port: string;
	error_msg :string = '';
	isLoggedIn:boolean = false;
	appleDetails :any;
	userConsent3:any;
	appleemail:any;
	appleUserID:any;
	country_and_role_list_provider_object: CountryandrolelistProvider;
	loading_service_object: LoadingService;
	http_service_object: HttpService;
	http_object: Http;
	database_provider_object: DatabaseProvider;
	alert_controller_object: AlertController;
	storage_object: Storage;
	in_app_browser_object: InAppBrowser;
	modal_controllar_object: ModalController;
	clevertap_object: CleverTap;
	device_object: Device;
	popup_user_type:any;
	constructor(public navCtrl: NavController,public injector: Injector) {
		this.country_and_role_list_provider_object = injector.get<CountryandrolelistProvider>(CountryandrolelistProvider);
		this.loading_service_object = injector.get<LoadingService>(LoadingService);
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.http_object = injector.get<Http>(Http);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.alert_controller_object = injector.get<AlertController>(AlertController);
		this.storage_object = injector.get<Storage>(Storage);
		this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);
		this.clevertap_object = new CleverTap();
		this.device_object = injector.get<Device>(Device);

		this.localapi = this.http_service_object.getApi();
		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();

	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad signupwithapple');
		this.specilitiesDropDown = true;
		this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
		this.myStates = this.country_and_role_list_provider_object.getUSstate();
		this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); // This will log "I do something useful!"
		this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
	}

	portChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		//console.log('port:'+ event.value);
		if (event.value['name'] == "United States of America") {
			this.isShow = true;
		}else{
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


	onAppleSignIn(){
		var that = this;
		window.cordova.plugins.SignInWithApple.signin(
		  { requestedScopes: [0, 1] },
		  function(succ){
		    console.log(succ)
		    that.loading_service_object.show();
		    that.appleLoginSuccess(succ);
		  },
		  function(err){
		    //console.error(err)
		  }
		)
	}


	appleLoginSuccess(succ){
		this.isLoggedIn = true;
	    this.appleDetails = succ;
    	this.appleemail = succ.email;
    	this.appleUserID = succ.user;
    	this.popup_user_type = ''; 
    	if (this.appleemail != '') {
    		var userParams = succ.email;
    	}else{
    		var userParams = succ.user;
    	}
    	this.http_service_object.appleUserIDExists(userParams).subscribe(data => {

			if((_.size(data) > 0 ) && (data[0].verified==1)){
				this.directSignIN(data);
			} else {
				this.loading_service_object.hide();
				this.specilitiesDropDown = false;

				let confirmalert = this.alert_controller_object.create({
					title: `<p style="color:#1c1b1b;">Thank you. Please provide your profession and country to help us customize the app.</p>`,
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
								//console.log('OK clicked: ');
								this.popup_user_type = "1";
							}
						}, {
							text: 'No',
							handler: () => {
								//console.log('Cancel clicked');
								this.popup_user_type = "5";
							}
						}
					],
					enableBackdropDismiss: false // <- Here! :)
				});
				confirmalert.present();
				confirmalert.onDidDismiss((alertData) => {

					if (this.popup_user_type == "1") {
						this.doctorports = this.country_and_role_list_provider_object.getOnlyDoctorRoles();
					}else if (this.popup_user_type == "5") {
						this.doctorports = this.country_and_role_list_provider_object.getPatientRoles();
					}else{

						this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
					}
				});

			}

		}); 

	}

	directSignIN(userDetails){

		this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+userDetails[0].id,
		{
			"fullname": userDetails[0].name,
			"email" : userDetails[0].email,
			"gender" : userDetails[0].gender,
			"medium" : userDetails[0].medium,
            "facebookId" : userDetails[0].facebookId
		}).subscribe(userDataInsertSuccess => {

			var userType = '';
			if(userDetails[0].userRoleId == '5') userType='patient';
			else userType='doctor';
			localStorage.setItem('cv5userEmail',userDetails[0].email);
			localStorage.setItem('cv5userRoleId',userDetails[0].userRoleId);
			localStorage.setItem('cv5usrType',userType);
			localStorage.setItem('cv5usrRolesubType',userDetails[0].userRoleSubType);
			localStorage.setItem('userIdentity',userType+userDetails[0].id);
			localStorage.setItem('verified',userDetails[0].verified);

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

							this.loginSuccess(userDetails, userDetails[0].password);
						}else if(_.size(device_data) < limit_device_count){
							 this.loginSuccess(userDetails, userDetails[0].password);
						} else{
							this.loading_service_object.hide();
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
					this.loginSuccess(userDetails, userDetails[0].password);
				}

			}, err => {
				this.loading_service_object.hide();
				console.log('getRegisteredDeviceCount err->'+JSON.stringify(err));
			}); 
		}, userDataInsertError => {
			this.loading_service_object.hide();
			console.log(userDataInsertError.text());
		}); 
	}



	submitApplelogin(){
		var country = this.port;
		var usaState = this.myState;
		var doctor = this.doctorport;
		var userConsnt =this.userConsent3;

		if (this.isLoggedIn === false || this.appleDetails == '') {
			this.error_msg = "Please Signup with Apple.";
		}else if (userConsnt === false || userConsnt == undefined) {
	  		this.error_msg = "Please acknowledge the privacy policy & terms of service";
	  	}else if(this.appleDetails != '' && userConsnt!=false ){
	  		this.error_msg = '';
	  		this.loading_service_object.show();


	  		if (typeof country === "undefined"  || country == '') {
				var usercountry = "";
			}else{
				var usercountry = country['name'];
			}

			if (this.isShow) {
				if (typeof usaState === "undefined"  || usaState == '') {
					var usa_State =  "";
					var usa_State_code =  "";					
				}else{

					var usa_State = usaState['name'];
					var usa_State_code = usaState['code'];
				}
			}else{
				var usa_State =  "";
				var usa_State_code =  "";
			}


			if (typeof doctor === "undefined"  || doctor == '') {
				var specialities = "";
				var sub_Specialities = "";
			}else{
				var doctorCodeName = doctor['name'];
				var doctor_code = doctor['doctorcode'];
				var splitTest = doctor_code.split(":");
				var specialities = splitTest[0];
				var sub_Specialities = splitTest[1];
			}

	        this.userType = this.popup_user_type;

			var referral_code = this.appleemail.substring(0,4)+''+Math.floor(Math.random()*(9999-1000+1)+1000);
			this.http_object.post(this.localapi+"/api/CardiovisualUsers",
  			{
				"fullname": "",
				"email" : this.appleemail,
				"password" : "",
				"gender" : null,
				"userRoleId" : this.userType,
				"discoveryMethodId" : 0,
				"clevertapId" : "",
				"branchId" : "",
				"branchLink" : "",
				"branchWebUrl" : "",
				"profilePic" : "",
				"medium" : "apple",
				"facebookId" : this.appleUserID,
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
				localStorage.setItem('State_code', response.state);
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
						//console.log('no splashes results-->'+userRoleparams);
						this.navCtrl.setRoot('DashboardPage');
						// this.navCtrl.setRoot('WhatsNewPage');
					}
				}, err => {
				  console.log('err1->'+err);
				}); 
	        }, error => {
	          console.log('userDataInsertError->'+error);
	          this.loading_service_object.hide();
	        }); 
	  	}
	}

	loginSuccess(data, password){
    	//console.log('data---->'+JSON.stringify(data));
    	this.storage_object.set('user_logged_in', data[0].id);
		localStorage.setItem('userliveId',data[0].id);
		this.syncLocalDB(data[0].userRoleId);
		this.insertUpdateLocalDB(data[0], password);
		this.loading_service_object.hide();
		this.userType = data[0].userRoleId;
		//console.log('this.userType--> login success-->'+this.userType);
		this.userRoleparams = (this.userType == 1) ?  "doctor" : "patient";
		this.http_service_object.getPoweredByData(this.userRoleparams).subscribe(results => {
			//console.log('results-->'+JSON.stringify(results));
			var that = this;
			var splash_data = [];
			splash_data = _.filter(results,function(value){
				return (value.isFor == that.userRoleparams  || value.isFor == "all")
			});
			if(_.size(splash_data) > 0){
				this.navCtrl.setRoot('SplashesPage',{powerdbyResult : splash_data , type:'PoweredBy', userType : this.userType}); 
			}else{
				//console.log('no splashes results-->'+this.userRoleparams);
				this.navCtrl.setRoot('DashboardPage');
				// this.navCtrl.setRoot('WhatsNewPage');
			}
		}, err => {
		  console.log('err->'+err);
		  //alert(err);
		}); 
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
    }

    insertUpdateLocalDB(result,password){

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

		var userCondition = new Array(""); 
		this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(userresult => {
			if(_.size(userresult) > 0){
				this.database_provider_object.updateNewUserInfo(userData);
			}else{
				this.database_provider_object.storeUserdata(userData);
			}
		});
		var user_type_temp = (result.userRoleId == 1) ? "doctor" : "patient";
		this.clevertap_object.onUserLogin({
	        "Identity": user_type_temp+result.id,
	        "Name":"'"+result.fullname+"'",
			"Email":"'"+result.email+"'",
			"Photo":  result.profilePic,
			"Location":"'"+result.location+"'",
			"UserRoleId":"'"+result.userRoleId+"'",
			"UserType":"'"+user_type_temp+"'",
			"Specialities":"'"+result.specialities+"'",
			"SubSpecialities":"'"+result.userRoleSubType+"'",
			"medium" :"'"+ result.medium+"'",
	        "custom":"Login with Apple"
		});

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
			"location" : result.location,
			"Identity": user_type_temp+result.id
		}; 
		this.clevertap_object.recordEventWithNameAndProps("appleLogin",params); 
		//stores device data on server
		var devicesData = {
	       "deviceToken": localStorage.getItem('getDeviceuuid'),
	       "deviceType": localStorage.getItem('getDevicePlatform'),
	       "userId": result.id,
	       "osVersion": localStorage.getItem('getDeviceversion'),
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

	goBack() {
		this.navCtrl.push('LoginPage');
	}
}
