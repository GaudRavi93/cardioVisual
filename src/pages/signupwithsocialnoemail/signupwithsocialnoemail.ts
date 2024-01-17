import { LoadingService } from '../../services/loading-service';
import { Component, Injector} from '@angular/core';
import { IonicPage, NavController, NavParams , Modal, ModalOptions, ModalController, AlertController} from 'ionic-angular';
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
/**
 * Generated class for the SignupwithsocialnoemailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupwithsocialnoemail',
  templateUrl: 'signupwithsocialnoemail.html',
})
export class SignupwithsocialnoemailPage {
	data: any;
	events: any;

	rleetypepassword: string;
	password: string;
	country: string;
	birthyear: string;
	email: string;
	myuserRole: string;
	port: string;
	ports: any = [];
	myuserRoles: any = [];
	error_msg :string = '';
	userType:any;
	dtStr:any;
	clevertapDate:any;
	localapi:any;
	userConsent:any;
	tmpDetails:any;
	doctorport: string;
	doctorports: any = [];
	doctorRoles: any = [];
	specilitiesDropDown:boolean;
	myStates: any = [];
	myState: string;
	isShow:boolean = false;
	nav_params_object: NavParams;
	country_and_role_list_provider_object: CountryandrolelistProvider;
	http_service_object: HttpService;
	http_object: Http;
	loading_service_object: LoadingService;
	database_provider_object: DatabaseProvider;
	clevertap_object: CleverTap;
	storage_object: Storage;
	in_app_browser_object: InAppBrowser;
	modal_controllar_object: ModalController;
	alert_controller_object: AlertController;

	constructor(public navCtrl: NavController, public injector: Injector) {

		this.nav_params_object = injector.get<NavParams>(NavParams);
		this.country_and_role_list_provider_object = injector.get<CountryandrolelistProvider>(CountryandrolelistProvider);
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.http_object = injector.get<Http>(Http);
		this.loading_service_object = injector.get<LoadingService>(LoadingService);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.clevertap_object = new CleverTap();
		this.storage_object = injector.get<Storage>(Storage);
		this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
		this.alert_controller_object = injector.get<AlertController>(AlertController);

		this.dtStr = this.http_service_object.dtStr();
		//console.log('dtStr-->'+this.dtStr);
		this.clevertapDate = this.http_service_object.clevertapDate();
		this.localapi = this.http_service_object.getApi();
		this.tmpDetails = this.nav_params_object.get('tmp_Details');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupwithsocialnoemailPage');
		var user_type = ''; 
		let confirmalert = this.alert_controller_object.create({
			title: `Are you a healthcare professional ?`,
			message: `<ul><li><strong> Choose <b>'YES'</b> if you are a Doctor or Medical & Healthcare Industry Professional. </strong></li><br/>
	          <li><strong> Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient. </strong></li>
	        </ul>`,
	      	cssClass: 'popup-pin',
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
				// code...
				this.doctorports = this.country_and_role_list_provider_object.getOnlyDoctorRoles();
			}else if (user_type == "5") {
				// code...	
				this.doctorports = this.country_and_role_list_provider_object.getPatientRoles();
			}else{

				this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
			}

		});  
		this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
		this.myStates = this.country_and_role_list_provider_object.getUSstate();
		this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); // This will log "I do something useful!"
		//console.log('ithis.myuserRoles-->'+JSON.stringify(this.myuserRoles));
		//this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
		//console.log('ithis.doctorRoles-->'+this.doctorports);
		//alert('ithis.doctorRoles-->'+this.doctorports);
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

	roleChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		console.log('role:', event.value);
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

	getGroupText(port: Port, portIndex: number, ports: Port[]) {

		if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
			return port.country.name;
		}
		return null;
	}

	goBack() {
		this.navCtrl.push('LoginPage');
	}
	public onfacebokSubmit() {
		var email = this.email; 
		var myuserRole = this.myuserRole;
		var country = this.port;
		var usaState = this.myState;
		var userConsnt =this.userConsent;
		var doctor = this.doctorport;
		

		if(typeof email === "undefined" || email == ''){
	  		this.error_msg = 'Please enter your email.';
	  	}else if( email != "" && !this.validateEmail(email)){
	  		this.error_msg = 'Please enter valid email address';
	  	}/*else if(typeof myuserRole === "undefined"  || myuserRole == '') {
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
	  	}
	  	// else if(email != '' && myuserRole != '' && country != '' && userConsnt!=false){
	  	else if(email != '' && doctor != '' && country != '' && userConsnt!=false && ((usaState != '' && this.isShow == true)  || this.isShow == false)){
	  		this.error_msg = '';
	  		this.loading_service_object.userregistrationshow();
	  		var userRole =  myuserRole['role'];
	  		var usercountry = country['name'];
	  		if (this.isShow) {
				var usa_State = usaState['name'];
			}else{
				var usa_State =  "";
			}
	  		var doctorCodeName = doctor['name'];

	  		var doctor_code = doctor['doctorcode'];

	  		var splitTest = doctor_code.split(":");

	  		//alert('splitTest--->'+JSON.stringify(splitTest));
	  		//alert('splitTest[0]--->'+JSON.stringify(splitTest[0]));
	  		//alert('splitTest[1]--->'+JSON.stringify(splitTest[1]));
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
			this.http_service_object.checkEmailExists(email).subscribe(data => {
				//console.log('_.size(data)--->'+_.size(data));
				if(_.size(data) > 0){
					this.loading_service_object.hide();
					///alert('hi 12345');
					console.log('verified--->'+data[0].verified);
					console.log("hi----email exists"+JSON.stringify(data[0].id));
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
							"fullname": this.tmpDetails.name,
							"email" : email,
							"password" : "",
							"gender" : this.tmpDetails.gender,
							"userRoleId" : this.userType,
							"discoveryMethodId" : 0,
							"clevertapId" : "",
							"branchId" : "",
							"branchLink" : "",
							"branchWebUrl" : "",
							"profilePic" : this.tmpDetails.picture.data.url,
							"medium" : "facebook",
							"facebookId" : this.tmpDetails.id,
							"specialities": specialities,
							"userRoleSubType": sub_Specialities,
							"location":usercountry,
							"state":usa_State,
							"referral_code":referral_code,
							"npi_number":0,
							"npi_id":0,
							"referred_by":0,
							"verified":1,
							"username":"",
							"isPaid":0
			  			}).subscribe(registerUserData => {
			  				this.loading_service_object.hide();
							var response = JSON.parse(registerUserData['_body']);
							var email = ''; 
							var myuserRole = '';
							var country = '';
							var doctor = '';
							var usaState = '';
							//console.log("response ----registration "+response);
							//console.log("response ----registration "+JSON.stringify(response));
							///console.log("hi----registration "+JSON.stringify(registerUserData));
							//console.log("registration "+JSON.stringify(response));
							
							localStorage.setItem('userliveId',response.id);
							this.storage_object.set('user_logged_in', response.id);

							var userRoleparams = (this.userType == 1) ?  "doctor" : "patient";
							localStorage.setItem('cv5userEmail', response.email);
							localStorage.setItem('cv5userRoleId', response.userRoleId);
							localStorage.setItem('cv5usrType', this.userType);
							localStorage.setItem('usrSpecialities', response.specialities);
							localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
							localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
							localStorage.setItem('userIdentity', this.userType+response.id);
							localStorage.setItem('verified', response.verified);
							localStorage.setItem('myProductflg', 'false');
							localStorage.setItem('productID', 'false');
							this.insertUpdateLocalDB(response);
							this.syncLocalDB(this.userType);

							this.http_service_object.getPoweredByData(userRoleparams).subscribe(results => {
								console.log('results-->'+JSON.stringify(results));
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
							  console.log('err->'+err);

							});  
				        }, error => {
				          console.log(error);
				        }); 
				}
			}, err => {
				console.log('err->'+err);
			}); 	  
	  	} 
	}

	validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	syncLocalDB(user_type){
		var userID = localStorage.getItem('userliveId');
		const email = localStorage.getItem('cv5userEmail');
		user_type = (user_type == 1) ?  "doctor" : "patient";
		this.loading_service_object.generateandSaveLinks(userID, user_type, email);
        // Get topics detail from API

        //alert('sync user_type-->'+user_type+"userID------->"+userID);
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

		//this.database_provider_object.getOrderDetailsAPIData(userID);
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

    insertUpdateLocalDB(result){
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
	        "password" : "",
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
			"Name":"'"+result.fullname+"'",
			"Location":"'"+result.location+"'",
			"UserRoleId":"'"+result.userRoleId+"'",
			"UserType":"'"+user_type_temp+"'",
			"Specialities":"'"+result.specialities+"'",
			"SubSpecialities":"'"+result.userRoleSubType+"'",
			"medium" :"'"+ result.medium+"'",
	        "custom":"Login with Facebook No Email"
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
			"Identity": user_type_temp+result.id,
			"custom":"no email"
		}; 
		this.clevertap_object.recordEventWithNameAndProps(result.medium+"Login", params); 
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

}
