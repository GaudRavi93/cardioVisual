import { Component, Injector } from '@angular/core';
import {Platform, IonicPage, NavController, ToastController, LoadingController, AlertController  } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Network } from '@ionic-native/network';

import * as _ from 'underscore/underscore';
import { Device } from '@ionic-native/device';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../../services/loading-service';
import { DatabaseProvider } from '../../providers/database/database';
import { CleverTap } from '@ionic-native/clevertap';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 data: any;
 events: any;

	params:any = {};
	public username: any;
	public password: any;
	public network_status: any;
	loader: any = {};
	error_msg :string = '';
	app_details: any = {};
	showAppleSignIn = false;
	platform_object: Platform;
	http_service_object: HttpService;
	toast_controller_object: ToastController;
	network_object: Network;
	loading_controller_object: LoadingController;
	device_object: Device;
	storage_object: Storage;
	database_provider_object: DatabaseProvider;
	loading_service_object: LoadingService;
	clevertap_object: CleverTap;
	alert_controller_object: AlertController;
	network_check_object: NetworkCheckProvider;

  constructor(public navCtrl: NavController,public injector: Injector) {

  		this.platform_object = injector.get<Platform>(Platform);
  		this.http_service_object = injector.get<HttpService>(HttpService);
  		this.toast_controller_object = injector.get<ToastController>(ToastController);
  		this.network_object = injector.get<Network>(Network);
  		this.loading_controller_object = injector.get<LoadingController>(LoadingController);
  		this.device_object = injector.get<Device>(Device);
  		this.storage_object = injector.get<Storage>(Storage);
  		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
  		this.loading_service_object = injector.get<LoadingService>(LoadingService);
  		this.clevertap_object = new CleverTap();
  		this.alert_controller_object = injector.get<AlertController>(AlertController);
  		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);

  		this.loader = this.loading_controller_object.create({
        	spinner: 'crescent'
      	});

  		this.username = "";
  		this.password = "";
		this.data ={
			"username": "Username",
			"password": "Password",
			"register": "Register",
			"login": "Submit",
			"skip": "Skip",
			/*"logo": "assets/images/logo/login.png"*/
			"logo": "assets/images/cv-logo.png"
		};

		this.network_status = 'connected';
		this.network_object.onDisconnect().subscribe(() => {
			this.network_status = 'not_connected';
		});

		this.network_object.onConnect().subscribe(() => {
			this.network_status = 'connected';
		});
		this.network_check_object.getPageAction('LoginPage','start','','All');
  	}


  	register(){
		this.navCtrl.push('RegisterPage');
	}
	onFacebook(){
		this.navCtrl.push('SignupwithfacebookPage');
	}
	onGoogle(){
		this.navCtrl.push('SignupwithgooglePage');
		
	}

	openAppleSignIn(){
		this.navCtrl.push('SignupwithapplePage');
	}

	ionViewDidLoad() {
		this.showAppleSignIn = this.platform_object.is('ios');
	}
	ionViewWillLeave(){
		this.network_check_object.getPageAction('WhatsNewPage','end','','All');

	}

  	login(){

  		if(this.network_status == 'connected'){
		  	if(this.username == ""){
		  		this.error_msg = 'Please enter your email & password.';
		  	}else if(this.username != "" && !this.validateEmail(this.username)){
		  		this.error_msg = 'Please enter valid email address';
		  	}else if(this.password == ''){
		  		this.error_msg = 'Please enter your password.';
		  	}else if(this.username != '' && this.password != ''){
		  		this.error_msg = '';
		  		this.loading_service_object.login();
		  		var password = this.database_provider_object.encode(this.password);

    			var authData = {
    				'username':this.username,
    				'password':password
    			};

				this.http_service_object.userAuthenticaton(authData).subscribe(userdata => {

					if (_.size(userdata) == 0) {
						this.error_msg = 'Please enter correct email';
						this.loading_service_object.hide();
					}else if (_.size(userdata) > 0 && userdata[0].password != password) {
						this.error_msg = 'Please enter correct password';
						this.loading_service_object.hide();
					}else if(_.size(userdata) > 0 && userdata[0].password == password){

						var userType = userdata[0].userRoleId;
						var userROleType =  (userType == 1) ?  "doctor" : "patient"
						localStorage.setItem('cv5usrType',userROleType);

						localStorage.setItem('cv5userEmail',userdata[0].email);
						localStorage.setItem('cv5userRoleId',userdata[0].userRoleId);
						localStorage.setItem('usrSpecialities', userdata[0].specialities);
						localStorage.setItem('cv5usrRolesubType',userdata[0].userRoleSubType);
						localStorage.setItem('userIdentity',userROleType+userdata[0].id);
						localStorage.setItem('verified',userdata[0].verified);
						localStorage.setItem('location',userdata[0].location);
						localStorage.setItem('State_code', userdata[0].state);
						localStorage.setItem('myProductflg', 'false');
						localStorage.setItem('productID', 'false');
						localStorage.setItem('referred_by', userdata[0].referred_by);
						localStorage.setItem('referral_code', userdata[0].referral_code);
						//this.database_provider_object.storeUserdata(userdata[0]);
						this.database_provider_object.putLoginMedium(userdata[0].id);
						this.http_service_object.getRegisteredDeviceCount(userdata[0].id).subscribe(device_data => {
							console.log('device_data response--->'+JSON.stringify(device_data));
							if(_.size(device_data) > 0){
								var myDeviceStatus = _.where(device_data, {deviceToken : this.database_provider_object.getOSSpecificUUID(userdata[0].id)});
				  				console.log('myDeviceStatus-->'+JSON.stringify(myDeviceStatus));
				  				var osType = this.device_object.platform.toLowerCase();
				  				console.log('osType-->'+osType);
								this.http_service_object.getAppDetails(osType).subscribe(appDetails => {
									var limit_device_count = appDetails[0].maxDeviceLimit;
									// if(_.size(myDeviceStatus) > 0 && myDeviceStatus.status){
									// 	console.log(userdata[0]);
									// 	this.loginSuccess(userdata[0], this.password);
									// }else if(_.size(device_data) < limit_device_count){
										this.loginSuccess(userdata[0], this.password);
									// }else{
									// 	this.loading_service_object.hide();
									// 	//alert('device_restriction_message');
									// 	this.storage_object.set('user_logged_in', 0);

									// 	var confirmPopup = this.alert_controller_object.create({
									// 	   title: '',
									// 	   message: '<p style="color:#ffffff; text-align:center;">You have reached limit of installing this app on multiple devices. Please logout from other device to continue.</p>',
									// 	   enableBackdropDismiss: true,
									// 	   buttons: [{ text: 'Dismiss', handler: () => {} },
									// 	   	{ text: 'Manage Devices', handler: () => {
									// 	   	this.navCtrl.push('ManageDevicesPage', {'request_from':'login_page', 'user_data':userdata});
									// 	   	}}
									// 	   ]

									// 	  });
									// 	confirmPopup.present();
									// }
								});
							}else{
								this.loginSuccess(userdata[0], this.password);
							}
						}, err => {
							console.log('getRegisteredDeviceCount err->'+JSON.stringify(err));
						});
					}
				}, err => {
					console.log('err->'+err);
				});
		    }
	    }else{
	    	this.toast_controller_object.create({
	            message: 'You are Offline',
	            duration: 3000,
	            position: 'bottom'
        	}).present();
        	this.loader.dismiss();
	    }

  	}

	validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}

  	loginSuccess(data, password){

	  	localStorage.setItem('userliveId',data.id);
		this.storage_object.set('user_logged_in', data.id); 
		this.syncLocalDB(data.userRoleId);
	    this.insertUpdateLocalDB(data, password);
       	var userRoleparams = (data.userRoleId == 1) ?  "doctor" : "patient";
		this.http_service_object.getPoweredByData(userRoleparams).subscribe(results => {
			this.loading_service_object.hide();
			this.loader.dismiss();
			var that = this;
			var splash_data = [];
			splash_data = _.filter(results,function(value){
				return (value.isFor == userRoleparams  || value.isFor == "all")
			});
			if(_.size(splash_data) > 0){
				this.navCtrl.setRoot('SplashesPage',{powerdbyResult : splash_data , type:'PoweredBy', userType : data.userRoleId}); 
				//$state.go('app.hcpbanner',{ usertype : userType});
			}else{
				this.navCtrl.setRoot('DashboardPage');
				// this.navCtrl.setRoot('WhatsNewPage');
				// if(data.userRoleId == 5){
				// 	this.navCtrl.setRoot('OrientationPlaylistNonHcp'); 
				// } else {
				// 	this.navCtrl.setRoot('OrientationPlaylistHcp');  
				// }
			}
		}, err => {
			this.loading_service_object.hide();
		}); 
    }



	syncLocalDB(user_type){
		user_type = (user_type == 1) ?  "doctor" : "patient";
		var userID = localStorage.getItem('userliveId');
		const email = localStorage.getItem('cv5userEmail');
		this.loading_service_object.generateandSaveLinks(userID, user_type, email);
		
		if(this.network_status == 'connected'){
			// Get topics detail from API
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

			this.database_provider_object.getWhatsnewSectionTitleData(user_type);

			this.database_provider_object.getCustomPlaylistData(localStorage.getItem('userliveId'));

			this.database_provider_object.getUserNotificationData(user_type);


			localStorage.setItem('onlyForWhatsnew','nosync');

			localStorage.setItem('app_sync_dashboard','no');

			localStorage.setItem('clevertapInitialize','yes');

		}else{
			this.toast_controller_object.create({
			message: 'Please check internet connection.',
			duration: 3000,
			position: 'bottom'
			}).present();
		}
	}

    insertUpdateLocalDB(data, password){
    	var liveId = data.id;
    	var userData = {
	        "email" : data.email,
	        "user_type" : (data.userRoleId == 1) ? "doctor" : "patient",
	        "isPaid" : data.isPaid,
	        "userRoleId" : data.userRoleId,
	        "discoveryMethodId" : data.discoveryMethodId,
	        "clevertapId" : data.clevertapId,
	        "liveId" : liveId,
	        "fullname" : data.fullname,
	        "password" : password,
	        "gender" : data.gender,
	        "birthyear" : data.birthyear,
	        "profilePic" : data.profilePic,
	        "medium" : data.medium,
	        "facebookId" : data.facebookId,
	        "specialities": data.specialities,
	        "userRoleSubType" : data.userRoleSubType,
	        "verified" : data.verified,
	        "location" : data.location,
	        "username" : data.username,
			"state": data.state,
			"referral_code" : data.referral_code,
			"referred_by" : data.referred_by,
			"npi_number" : data.npi_number,
			"npi_id" : data.npi_id
	      };
	    
		var userCondition = new Array(""); 
		this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(userresult => {
			if(_.size(userresult) > 0){
				this.database_provider_object.updateNewUserInfo(userData);
			}else{
				this.database_provider_object.storeUserdata(userData);
			}
		});

	    /* update user device info*/
	    // var devicesData = {
	    //     "deviceToken": this.database_provider_object.getOSSpecificUUID(liveId),
	    //     "deviceType": this.device_object.platform_object.toLowerCase(),
	    //     "userId": liveId,
	    //     "osVersion": this.device_object.version,
	    //     "latitude": latitude,
	    //     "longitude":longitude,
	    //     "model": this.device_object.model,
	    //     "updatedAt":new Date().toISOString(),
	    //     "status":1
    	// }
    	var userType = (data.userRoleId == 1) ? "doctor" : "patient";
    	
		this.clevertap_object.onUserLogin({
			"Identity": localStorage.getItem('userIdentity'),
			"Email":"'"+data.email+"'",
		});
		
		// this.clevertap_object.profileSet({
		// 	"Name":"'"+this.getNameFromEmail(data.email)+"'",
		// 	"Identity": localStorage.getItem('userIdentity'),
		// 	"Email":"'"+data.email+"'",
		// 	"Location":"'"+data.location+"'",
		// 	"UserRoleId":"'"+data.userRoleId+"'",
		// 	"UserType":"'"+userType+"'",
		// 	"Specialities":"'"+data.specialities+"'",
		// 	"SubSpecialities":"'"+data.userRoleSubType+"'",
		// 	"medium" :"'"+ data.medium+"'",
		// 	"custom":"Login with App"
		// });
    	var devicesData = {
	        "deviceToken": localStorage.getItem('getDeviceuuid'),
	        "deviceType": localStorage.getItem('getDevicePlatform'),
	        "userId": liveId,
	        "osVersion": localStorage.getItem('getDeviceversion'),
	        //"latitude": latitude,
	        //"longitude":longitude,
	        "model": localStorage.getItem('modelNo'),
	        "updatedAt":new Date().toISOString(),
	        "status":1
    	}

    	this.database_provider_object.saveDeviceDataToApi(devicesData); //stores device data on server    	
	}

	getNameFromEmail(email){
      var name = email.replace(/^(.+)@(.+)$/g,'$1').replace(/[\. __]+/g, " ").replace(/\s|[0-9]/g, ' ');
      return name;
    }

    gotoForgotpasswordPage(){

   		this.navCtrl.push('ForgotpasswordPage',{'type':'forgot_password'});
   	}
}
