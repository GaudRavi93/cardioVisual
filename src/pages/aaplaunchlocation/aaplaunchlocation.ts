import { LoadingService } from '../../services/loading-service';
import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams , Modal, ModalOptions, ModalController, AlertController, ToastController} from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CountryandrolelistProvider } from '../../providers/countryandrolelist/countryandrolelist';
import { HttpService } from '../../services/HttpService';
import * as _ from 'underscore/underscore';
import { Http } from '@angular/http';
import { DatabaseProvider } from '../../providers/database/database';
import { CleverTap } from '@ionic-native/clevertap';
import { Storage } from '@ionic/storage';
import { Port } from '../../types';
import { Network } from '@ionic-native/network';
/**
 * Generated class for the AaplaunchlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aaplaunchlocation',
  templateUrl: 'aaplaunchlocation.html',
  providers: [ CountryandrolelistProvider ],
})
export class AaplaunchlocationPage {
	port: string;
	requestType: string;
	ports: any = [];
	doctorports: any = [];
	localapi:any;
	doctorport: string;
	error_msg :string = '';
	userType:any;
	requestRoleID:any;
	public network_status: any;
	navParams: NavParams;
	country_and_role_list_provider_object: any;
	http_object: Http;
	loading_service_object: LoadingService;
	toast_controller_object: ToastController;
	network_object: Network;

	constructor(public navCtrl: NavController, private httpservice: HttpService, private databaseprovider: DatabaseProvider, public injector: Injector) {

		this.navParams = injector.get<NavParams>(NavParams);
		this.network_object = injector.get<Network>(Network);
		this.localapi = this.httpservice.getApi();
		this.requestType = this.navParams.get("forDropDownType");
		this.requestRoleID = this.navParams.get("usrRoleID");

		this.network_status = 'connected';
		this.network_object.onDisconnect().subscribe(() => {
			this.network_status = 'not_connected';
		});

		this.network_object.onConnect().subscribe(() => {
			this.network_status = 'connected';
		});
		this.country_and_role_list_provider_object = new CountryandrolelistProvider();
		this.http_object = injector.get<Http>(Http);
		this.loading_service_object = injector.get<LoadingService>(LoadingService);
		this.toast_controller_object = injector.get<ToastController>(ToastController);
	}

  	ionViewDidLoad() {
		this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"

		if (this.requestRoleID == '1') {
			// code...
			this.doctorports = this.country_and_role_list_provider_object.getOnlyDoctorRoles();
		}else if (this.requestRoleID == '5') {
			// code...	
			this.doctorports = this.country_and_role_list_provider_object.getPatientRoles();
		}else{

			this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
		}
	}

	portChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		console.log('port:'+ event.value);
	}

	getGroupText(port: Port, portIndex: number, ports: Port[]) {

		if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
			return port.country.name;
		}
		return null;
	}

	public onLocationSubmit() {

		var liveId = localStorage.getItem('userliveId');
		if(this.network_status == 'connected'){
			var userData = new Array(""); 
			this.databaseprovider.fetchAllData('new_user_info' , userData).then(userlaunchresult => {

				var liveId  = userlaunchresult[0].liveId;
				var password  = userlaunchresult[0].password;

				var country = this.port;
				var doctor = this.doctorport;

				if (this.requestType == 'chkLocation') {
					// code...
					if (typeof country === "undefined"  || country == ''){
				  		this.error_msg = 'Please select Country.';
				  	}else if(country != ''){
				  		this.error_msg = '';
				  		this.loading_service_object.usercountry();

						var usercountry = country['name'];

						this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+liveId,
						{

							"location":usercountry				
						}).subscribe(locationInsertSuccess => {
							var response = JSON.parse(locationInsertSuccess['_body']);
							var country = '';
							this.updateLocalDB(response, password); 
							setTimeout(() =>{
								this.loading_service_object.hide();
								this.navCtrl.setRoot('WhatsNewPage');
							},3000);
						}, locationInsertError => {
							this.loading_service_object.hide();
						}); 
				  	} 
				}else if (this.requestType == 'chkspecialities') {
					// code...
					if (typeof doctor === "undefined"  || doctor == ''){
				  		this.error_msg = "Please Select Your Profession";
				  	}else if(doctor != ''){
				  		this.error_msg = '';
				  		this.loading_service_object.userspecialities();

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

						this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+liveId,
						{

							"specialities":specialities,
							"userRoleSubType": sub_Specialities,
							"userRoleId" : this.userType				
						}).subscribe(locationInsertSuccess => {
							var response = JSON.parse(locationInsertSuccess['_body']);
							var doctor = '';
							this.updateLocalDB(response, password); 
							setTimeout(() =>{
								this.loading_service_object.hide();
								this.navCtrl.setRoot('WhatsNewPage');
							},3000);
						}, locationInsertError => {
							this.loading_service_object.hide();
						}); 
				  	} 
				}
			}); 
		}else{
			this.toast_controller_object.create({
	            message: 'You are Offline',
	            duration: 3000,
	            position: 'bottom'
        	}).present();
		}	
	}

	updateLocalDB(data,password){
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
	        "specialities":data.specialities,
	        "userRoleSubType" : data.userRoleSubType,
	        "verified" : data.verified,
	        "location" : data.location,
	       	"state": data.state,
			"referral_code" : data.referral_code,
			"referred_by" : data.referred_by,
			"npi_number" : data.npi_number,
			"npi_id" : data.npi_id
	    };  
	   
		localStorage.setItem('usrSpecialities', data.specialities);
		localStorage.setItem('location', data.location);
		localStorage.setItem('cv5usrRolesubType',data.userRoleSubType);

	    //this.databaseprovider.updateNewUserInfo(userData);
	    this.databaseprovider.storeUserdata(userData);
	}
}
