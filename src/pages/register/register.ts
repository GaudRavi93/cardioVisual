import { LoadingService } from '../../services/loading-service';
import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams , Modal, ModalOptions, ModalController, AlertController, Platform, App} from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CountryandrolelistProvider } from '../../providers/countryandrolelist/countryandrolelist';
import { HttpService } from '../../services/HttpService';
import * as _ from 'underscore/underscore';
import { Http } from '@angular/http';
import { DatabaseProvider } from '../../providers/database/database';
import { CleverTap } from '@ionic-native/clevertap';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Port } from '../../types';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { GooglePlus } from '@ionic-native/google-plus';

declare let window: any;
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [ CountryandrolelistProvider ],
})
export class RegisterPage {
	data: any;
	events: any;

	retypepassword: string;
	password: string;
	country: string;
	birthyear: string;
	email: string;
	myuserRole: string;
	doctorport: string;
	port: string;
	ports: any = [];
	myuserRoles: any = [];
	doctorports: any = [];
	error_msg :string = '';
	userType:any;
	dtStr:any;
	clevertapDate:any;
	localapi:any;
	userConsent:any;
	doctorRoles: any = [];
	myState: string;
	myStates: any = [];
	isShow:boolean = false;
	referred_by: any;
	referral_code_result:any;
	popup_user_type:any;
	showAppleSignIn = false;
	fullName: string;
	clevertap_object: any;
	alert_controller_object: AlertController;
	network_check: NetworkCheckProvider;
	http_service: HttpService;
	http_object: Http;
	loading_service: LoadingService;
	database_provider_object: DatabaseProvider;
	storage_object: Storage;
	modal_controllar_object: ModalController;

	constructor(public navCtrl: NavController, public injector:Injector) {

		this.http_service = injector.get<HttpService>(HttpService);
		this.network_check = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
		
		this.dtStr = this.http_service.dtStr();
		this.clevertapDate = this.http_service.clevertapDate();
		this.localapi = this.http_service.getApi();

		setTimeout(() => {
			this.network_check.getPageAction('RegisterPage','start','','All');
		}, 1000);

		this.clevertap_object = new CleverTap();
		this.alert_controller_object = injector.get<AlertController>(AlertController);
		this.http_object = injector.get<Http>(Http);
		this.loading_service = injector.get<LoadingService>(LoadingService);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.storage_object = injector.get<Storage>(Storage);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);
	}

	ionViewWillLeave(){
		this.network_check.getPageAction('RegisterPage','end','','All');
	}
	ionViewDidLoad() {
		var user_type = ''; 
		var role_provider_object = new CountryandrolelistProvider();

		let confirmalert = this.alert_controller_object.create({
			title: 'Are you a healthcare professional ?',
			message: `<ul><li><strong> Choose <b>'YES'</b> if you are a Doctor or Medical / Healthcare Industry Professional. </strong></li><br/>
	          <li><strong> Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient. </strong></li>
	        </ul>`,
	      	cssClass: 'popup-pin',
			buttons: [
				{
					text: 'Yes',
					handler: () => {
						user_type = "1";
					}
				}, {
					text: 'No',
					handler: () => {
						user_type = "5";
					}
				}
			],
			enableBackdropDismiss: false // <- Here! :)
		});
		confirmalert.present();
		confirmalert.onDidDismiss((alertData) => {
			
			if (user_type == "1") {
				//this.doctorports = this.countryandrolelist.getOnlyDoctorRoles();
				//alert('107 '+JSON.stringify(this.doctorports));
				this.doctorports = role_provider_object.getOnlyDoctorRoles();

			}else if (user_type == "5") {
				this.doctorports = role_provider_object.getPatientRoles();
			}else{
				this.doctorports = role_provider_object.getSpecialitiesPorts();
			}

		});  
		this.ports = role_provider_object.getports();
		this.myuserRoles = role_provider_object.getmyuserRoles();
		this.myStates = role_provider_object.getUSstate();
	}
	portChange(event: {component: IonicSelectableComponent, value: any}) {
		if (event.value['name'] == "United States of America") {
			this.isShow = true;
		}else{
			this.isShow = false;
		}
	}
	stateChange(event: {component: IonicSelectableComponent, value: any}) {}

	docPortChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {}

	roleChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {}

	goBack() {
		this.navCtrl.push('LoginPage');
	}
	onFacebook(){
		this.navCtrl.push('SignupwithfacebookPage');
		//this.navCtrl.push('DashboardPage');
	}
	onGoogle(){
		this.navCtrl.push('SignupwithgooglePage');
	}

	getGroupText(port: Port, portIndex: number, ports: Port[]) {

		if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
			return port.country.name;
		}
		return null;
	}


	public onFormSubmit() {
		
		var email = this.email; 
		var password = this.password;
		var retypepassword = this.retypepassword;
		var myuserRole = this.myuserRole;
		var country = this.port;
		var userConsnt =this.userConsent;
		var doctor = this.doctorport;
		var usaState = this.myState;
		var referred_by = this.referred_by;
		var referral_code_result = this.validate_referred_by(referred_by);
		var full_name = this.fullName;

		if(typeof full_name === "undefined" || full_name == '')	 {
	  	this.error_msg = "Please enter your full name.";
	  }else if(typeof email === "undefined" || email == ''){
	  	this.error_msg = 'Please enter your email.';
	  }else if( email != "" && !this.validateEmail(email)){
	  	this.error_msg = 'Please enter valid email address';
	  }else if(typeof password === "undefined" || password == ''){
	  	this.error_msg = 'Please enter your password.';
	  } else if(typeof retypepassword === "undefined" || retypepassword == ''){
	  	this.error_msg = 'Please Re type your password.';
	  } else if(password != retypepassword)	 {
	  	this.error_msg = "Password doesn't match!";
	  }/*else if(typeof myuserRole === "undefined"  || myuserRole == '') {
	  	this.error_msg = "Please Select Your Profession";
	  }*/
	  else if (typeof country === "undefined"  || country == '') {
	  	this.error_msg = "Please select Country";
	  }else if (this.isShow == true && (typeof usaState === "undefined"  || usaState == '')) {
	  	this.error_msg = "Please select State";			
	  }else if (typeof doctor === "undefined"  || doctor == '') {
	  	this.error_msg = "Please Select Your Profession";	  		
	  }else if (userConsnt === false || userConsnt == undefined) {
	  	this.error_msg = "Please acknowledge the privacy policy & terms of service";
	  }/*else if(referred_by !=''){

	  		//setTimeout(() => {
		  		alert('settimeout '+JSON.stringify(referral_code_result));
		  		if(_.size(referral_code_result) == 0 ){
		  			this.error_msg = "Please enter valid referral code";
		  		}
		  	//},2500);
	  }*/else if(email != '' && password != '' && retypepassword != '' && full_name != '' && country != '' && userConsnt!=false && doctor != '' && ((usaState != '' && this.isShow == true)  || this.isShow == false)){
		  		this.error_msg = '';
		  		this.loading_service.userregistrationshow();
		  		var encrptpassword = this.database_provider_object.encode(password);
		  		//var userRole =  myuserRole['role'];
		  		//var userRole =  myuserRole['code'];
		  		var usercountry = country['name'];

		  		var doctorCodeName = doctor['name'];

		  		var doctor_code = doctor['doctorcode'];

		  		var splitTest = doctor_code.split(":");

		  		var specialities = splitTest[0];
		  		var sub_Specialities = splitTest[1];
			  		
					if (this.isShow) {
						var usa_State = usaState['name'];
						var usa_State_code = usaState['code'];
					}else{
						var usa_State =  "";
						var usa_State_code =  "";
					}

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
							this.userType = 1;
							break;
						case "PA/NP/Nurse:Other":
							this.userType = 1;
							break;
						case "Medical Trainee/Fellow:Fellow/Resident":
							this.userType = 1;
							break;
						case "Medical Trainee/Fellow:Student":
							this.userType = 1;
							break;
						case "Medical Trainee/Fellow:Other":
							this.userType = 1;
							break;
						case "Other Medical Professional:Ex Physio/Rehab":
							this.userType = 1;
							break;
						case "Other Medical Professional:Tech":
							this.userType = 1;
							break;
						case "Other Medical Professional:Educators":
							this.userType = 1;
							break;
						case "Other Medical Professional:Other":
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

					this.http_service.checkEmailExists(email).subscribe(data => {
						if(_.size(data) > 0){
							this.loading_service.hide();
							if(data[0].verified == 1){
								var confirmPopup = this.alert_controller_object.create({
									title: '',
									message: '<p style="color:#ffffff; text-align:center;">You have already registered with this email id. Please login to continue..</p>',
									enableBackdropDismiss: true,
									buttons: ['Dismiss']
								});
								confirmPopup.present();
								this.error_msg = 'You have already registered with this email id. Please login to continue.';
								this.navCtrl.push('LoginPage');
							} else {
								this.navCtrl.push('LoginPage');
							}
						}else{

							var referral_code = email.substring(0,4)+''+Math.floor(Math.random()*(9999-1000+1)+1000);

							this.http_object.post(this.localapi+"/api/CardiovisualUsers",
					  			{
									"fullname":full_name,
									"email" : email,
									"password" : encrptpassword,
									"gender" :  null,
									"userRoleId" : this.userType,
									"discoveryMethodId" : 0,
									"clevertapId" : "",
									"branchId" : "",
									"branchLink" : "",
									"branchWebUrl" : "",
									"profilePic" : "",
									"medium" : "app",
									"facebookId" : "",
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
					  			}).subscribe(registerUserData => {
					  			
					  			var response = JSON.parse(registerUserData['_body']);
									var email = ''; 
									var password = '';
									var retypepassword = '';
									var myuserRole = '';
									var country = '';
									var doctor = '';
									var usaState = '';
									full_name = '';

									this.insertUpdateLocalDB(response, this.password);
									this.syncLocalDB(this.userType);
									localStorage.setItem('userliveId',response.id);
									this.storage_object.set('user_logged_in', response.id);
									
									var userRoleparams = (this.userType == 1) ?  "doctor" : "patient";
									localStorage.setItem('cv5userEmail', response.email);
									localStorage.setItem('cv5userRoleId', response.userRoleId);
									localStorage.setItem('cv5usrType', userRoleparams);
									localStorage.setItem('usrSpecialities', response.specialities);
									localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
									localStorage.setItem('userIdentity', this.userType+response.id);
									localStorage.setItem('verified', response.verified);
									localStorage.setItem('location', response.location);
									localStorage.setItem('myProductflg', 'false');
									localStorage.setItem('productID', 'false');

									this.http_service.getPoweredByData(userRoleparams).subscribe(results => {
											var that = this;
											var splash_data = [];
											splash_data = _.filter(results,function(value){
					                    		return (value.isFor == userRoleparams  || value.isFor == "all")
					                		});
										if(_.size(splash_data) > 0){
											this.loading_service.hide();
											this.navCtrl.setRoot('SplashesPage',{powerdbyResult : splash_data , type:'PoweredBy', userType : this.userType}); 
										}else{
											setTimeout(()=>{
												this.loading_service.hide();
												this.navCtrl.setRoot('DashboardPage');
												// this.navCtrl.setRoot('WhatsNewPage');
											},7000);	
											/*if(this.userType == 5){
												this.navCtrl.setRoot('OrientationPlaylistNonHcp'); 
											} else {
												this.navCtrl.setRoot('OrientationPlaylistHcp');  
											}*/
										}
									});  
						        }); 
						}
					});
	  	} 
	}

	public referal_onFormSubmit() {
		this.loading_service.userregistrationshow();

		var email = this.email; 
		var password = this.password;
		var retypepassword = this.retypepassword;
		var myuserRole = this.myuserRole;
		var country = this.port;
		var userConsnt =this.userConsent;
		var doctor = this.doctorport;
		var usaState = this.myState;

		var referred_by = this.referred_by;
		this.error_msg = '';

		if(typeof email === "undefined" || email == ''){
	  		this.error_msg = 'Please enter your email.';
	  	}else if( email != "" && !this.validateEmail(email)){
	  		this.error_msg = 'Please enter valid email address';
	  	}else if(typeof password === "undefined" || password == ''){
	  		this.error_msg = 'Please enter your password.';
	  	} else if(typeof retypepassword === "undefined" || retypepassword == ''){
	  		this.error_msg = 'Please Re type your password.';
	  	} else if(password != retypepassword)	 {
	  		this.error_msg = "Password doesn't match!";
	  	}/*else if(typeof myuserRole === "undefined"  || myuserRole == '') {
	  		this.error_msg = "Please Select Your Profession";
	  	}*/
	  	else if (typeof country === "undefined"  || country == '') {
	  		this.error_msg = "Please select Country";
	  	}else if (this.isShow == true && (typeof usaState === "undefined"  || usaState == '')) {
	  		this.error_msg = "Please select State";			
	  	}else if (typeof doctor === "undefined"  || doctor == '') {
	  		this.error_msg = "Please Select Your Profession";	  		
	  	}else if (userConsnt === false || userConsnt == undefined) {
	  		// code...
	  		this.error_msg = "Please acknowledge the privacy policy & terms of service";
	  	}else if(this.referred_by !=''){
	  		this.http_service.checkReferralCode(referred_by).subscribe(result =>{
					this.referral_code_result = result;
				});

		  	setTimeout(() => {	
					if(_.size(this.referral_code_result) == 0 || this.referral_code_result == 'undefined'){
		  			this.error_msg = "Please enter valid referral code";
		  		}
		  	},2500);
	  	}

	  	if(this.error_msg != ''){
	  		this.loading_service.hide();
	  	}

	  	setTimeout(() => {
		  	if(email != '' && password != '' && retypepassword != '' && country != '' && userConsnt!=false && doctor != '' && (((usaState != '') && this.isShow == true)  || this.isShow == false) && this.error_msg == ''){

			  		this.error_msg = '';
			  		var encrptpassword = this.database_provider_object.encode(password);
			  		//var userRole =  myuserRole['role'];
			  		//var userRole =  myuserRole['code'];
			  		var usercountry = country['name'];

			  		var doctorCodeName = doctor['name'];

			  		var doctor_code = doctor['doctorcode'];

			  		var splitTest = doctor_code.split(":");

			  		var specialities = splitTest[0];
			  		var sub_Specialities = splitTest[1];

				  		
						if (this.isShow) {
							var usa_State = usaState['name'];
							var usa_State_code = usaState['code'];
						}else{
							var usa_State =  "";
							var usa_State_code =  "";
						}

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
								this.userType = 1;
								break;
							case "PA/NP/Nurse:Other":
								this.userType = 1;
								break;
							case "Medical Trainee/Fellow:Fellow/Resident":
								this.userType = 1;
								break;
							case "Medical Trainee/Fellow:Student":
								this.userType = 1;
								break;
							case "Medical Trainee/Fellow:Other":
								this.userType = 1;
								break;
							case "Other Medical Professional:Ex Physio/Rehab":
								this.userType = 1;
								break;
							case "Other Medical Professional:Tech":
								this.userType = 1;
								break;
							case "Other Medical Professional:Educators":
								this.userType = 1;
								break;
							case "Other Medical Professional:Other":
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

						this.http_service.checkEmailExists(email).subscribe(data => {
							if(_.size(data) > 0){
								this.loading_service.hide();
								if(data[0].verified == 1){
									var confirmPopup = this.alert_controller_object.create({
										title: '',
										message: '<p style="color:#ffffff; text-align:center;">You have already registered with this email id. Please login to continue..</p>',
										enableBackdropDismiss: true,
										buttons: ['Dismiss']
									});
									confirmPopup.present();
									this.error_msg = 'You have already registered with this email id. Please login to continue.';
									this.navCtrl.push('LoginPage');
								} else {
									this.navCtrl.push('LoginPage');
								}
							}else{

								var referral_code = email.substring(0,4)+''+Math.floor(Math.random()*(9999-1000+1)+1000);
								var referred_by_user_id = 0;
								if(referred_by != ''){
									referred_by_user_id = this.referral_code_result[0].id;
								}
								
								this.http_object.post(this.localapi+"/api/CardiovisualUsers",
						  			{
										"fullname":"",
										"email" : email,
										"password" : encrptpassword,
										"gender" :  null,
										"userRoleId" : this.userType,
										"discoveryMethodId" : 0,
										"clevertapId" : "",
										"branchId" : "",
										"branchLink" : "",
										"branchWebUrl" : "",
										"profilePic" : "",
										"medium" : "app",
										"facebookId" : "",
										"specialities": specialities,
										"userRoleSubType": sub_Specialities,
										"location":usercountry,
										"state":usa_State_code,
										"referral_code":referral_code,
										"npi_number":0,
										"npi_id":0,
										"referred_by":referred_by_user_id,
										"verified":1,
										"username":"",
										"isPaid":0
						  			}).subscribe(registerUserData => {
						  			
						  			var response = JSON.parse(registerUserData['_body']);
										var email = ''; 
										var password = '';
										var retypepassword = '';
										var myuserRole = '';
										var country = '';
										var doctor = '';
										var usaState = '';

										this.insertUpdateLocalDB(response, this.password);
										this.syncLocalDB(this.userType);
										localStorage.setItem('userliveId',response.id);
										this.storage_object.set('user_logged_in', response.id);
										
										var userRoleparams = (this.userType == 1) ?  "doctor" : "patient";
										localStorage.setItem('cv5userEmail', response.email);
										localStorage.setItem('cv5userRoleId', response.userRoleId);
										localStorage.setItem('cv5usrType', userRoleparams);
										localStorage.setItem('usrSpecialities', response.specialities);
										localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
										localStorage.setItem('userIdentity', this.userType+response.id);
										localStorage.setItem('verified', response.verified);
										localStorage.setItem('location', response.location);
										localStorage.setItem('myProductflg', 'false');
										localStorage.setItem('productID', 'false');
										localStorage.setItem('referral_code', response.referral_code);
										localStorage.setItem('referred_by', response.referred_by);

										this.http_service.getPoweredByData(userRoleparams).subscribe(results => {
												var that = this;
												var splash_data = [];
												splash_data = _.filter(results,function(value){
						                    		return (value.isFor == userRoleparams  || value.isFor == "all")
						                		});
											if(_.size(splash_data) > 0){
												this.loading_service.hide();
												this.navCtrl.setRoot('SplashesPage',{powerdbyResult : splash_data , type:'PoweredBy', userType : this.userType}); 
											}else{
												setTimeout(()=>{
													this.loading_service.hide();
													this.navCtrl.setRoot('DashboardPage');
													// this.navCtrl.setRoot('WhatsNewPage');
												},7000);	
											}
										});  
							    }); 
							}
						});
		  	}
		  },3000);	
	}

	validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	insertUpdateLocalDB(data,password){
		var liveId = data.id;
    	var userData = {
	        "email" : data.email,
	        "username":"",
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
			"state": data.state,
			"referral_code" : data.referral_code,
			"referred_by" : data.referred_by,
			"npi_number" : data.npi_number,
			"npi_id" : data.npi_id
	    };              
	    var userType = (data.userRoleId == 1) ? "doctor" : "patient";

	    this.clevertap_object.onUserLogin({
					"Identity":userType+data.id,
					"Email":"'"+data.email+"'",
					"Location":"'"+data.location+"'",
					"UserRoleId":"'"+data.userRoleId+"'",
					"UserType":"'"+userType+"'",
					"Specialities":"'"+data.specialities+"'",
					"SubSpecialities":"'"+data.userRoleSubType+"'",
					"medium" :"'"+ data.medium+"'",
					"custom":"Registration with Email"
				});

		/*this.clevertap.onUserLogin({
			"Identity":userType+data.id,
			"Email":"'"+data.email+"'",
			"Location":"'"+data.location+"'",
			"UserRoleId":"'"+data.userRoleId+"'",
			"UserType":"'"+userType+"'",
			"Specialities":"'"+data.specialities+"'",
			"SubSpecialities":"'"+data.userRoleSubType+"'",
			"medium" :"'"+ data.medium+"'",
			"custom":"Registration with Email"
		});*/

		this.clevertap_object.profileSet({
			"Name":"'"+this.getNameFromEmail(data.email)+"'",
		});

		var params = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : data.userRoleId,
			"userType": userType,
			"specialities": data.specialities,
			"subSpecialities": data.userRoleSubType,
			"userEmail" : data.email,
			"medium" : data.medium,
			"verified" : data.verified,
			"userRoleSubType" : data.userRoleSubType,
			"location" : data.location
		};
		
		this.clevertap_object.recordEventWithNameAndProps("userRegistration", params);

		var userCondition = new Array(""); 
		this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(userresult => {
			if(_.size(userresult) > 0){
				this.database_provider_object.updateNewUserInfo(userData);
			}else{
				this.database_provider_object.storeUserdata(userData);
			}
		});

		var devicesData = {
	       "deviceToken": localStorage.getItem('getDeviceuuid'),
	       "deviceType": localStorage.getItem('getDevicePlatform'),
	       "userId": liveId,
	       "osVersion": localStorage.getItem('getDeviceversion'),
	       "model": localStorage.getItem('modelNo'),
	       "updatedAt":new Date().toISOString(),
	       "status":1
	   	}
	    this.database_provider_object.saveDeviceDataToApi(devicesData);        
	}
	syncLocalDB(userType){
		var userID = localStorage.getItem('userliveId');
		userType = (userType == 1) ?  "doctor" : "patient";
		const email = localStorage.getItem('cv5userEmail');
		this.loading_service.generateandSaveLinks(userID, userType, email);
		// Get topics detail from API
		this.database_provider_object.getTopicsAPIData(userType);
		this.database_provider_object.dashboardInformationAPIData(userType);

		//insert playlist data from api
		this.database_provider_object.insertPlaylistsAPIData(localStorage.getItem('userliveId'));

		// Get categories detail from API
		this.database_provider_object.getCategoriesAPIData(userType);

		this.database_provider_object.getCardioSplashes(userType);

		this.database_provider_object.getSubTopicsAPIData(userType);

		this.database_provider_object.getOrderDetailsAPIData(localStorage.getItem('userliveId'));

		//information table
		this.database_provider_object.getInformationAPIData(userType);
		//channels table
		this.database_provider_object.getChannelsApiData(userType);
		//custom_lisiting
		this.database_provider_object.getCutomlistingApi();

		//custom video json
		this.database_provider_object.getCutomVideoJsonApi();

		//sponsored by table
		this.database_provider_object.getSponsoredByData(userType);

		//whatsnew data by table
		this.database_provider_object.getWhatsnewData(userType);
		//whatsnew page section title
		this.database_provider_object.getWhatsnewSectionTitleData(userType);
		//custom playlist
    this.database_provider_object.getCustomPlaylistData(localStorage.getItem('userliveId'));

		this.database_provider_object.getUserNotificationData(userType);


		localStorage.setItem('app_sync_whatsnew', 'noSync');
	}

	termsofservice(){
		new InAppBrowser().create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
		//this.inappBrowser.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
	}

	getNameFromEmail(email){
		var name = email.replace(/^(.+)@(.+)$/g,'$1').replace(/[\. __]+/g, " ").replace(/\s|[0-9]/g, ' ');
		return name;
	}

	privacypolicy(){
	const myModalOptions: ModalOptions = {
	     	enableBackdropDismiss: false
	   	};

	   const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'Privacy Policy' }, myModalOptions);
	   myModal.present();
	}

	validate_referred_by(referral_code){
		this.http_service.checkReferralCode(referral_code).subscribe(result =>{
			return result;
		});

	}
}