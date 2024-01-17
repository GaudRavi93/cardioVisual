import { Component, Injector} from '@angular/core';
import { Platform, IonicPage, NavParams, ViewController, Modal, ModalController, ModalOptions,IonicApp,ToastController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HttpService } from '../../services/HttpService';
import { LoadingService } from '../../services/loading-service';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { ToastService } from '../../services/toast-service';
import * as _ from 'underscore/underscore';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CountryandrolelistProvider } from '../../providers/countryandrolelist/countryandrolelist';
import { Port } from '../../types';
import { Network } from '@ionic-native/network';
import {ScreenOrientation} from '@ionic-native/screen-orientation';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

	viewdata:string = '';
	email: string = '';
	username: string = '';
	obj: any ;
	msg: string = '';
	live_id: string = '';
	public ioncontentClicked: boolean = false;
	user_data: any;
	request_from: string;
	shownContent:any;
	productID:any;
	video_data:any;
	img_Url:any;
	playListID:any;
	playlist_data: any = [];
	user_type: string;
	isShow:boolean = false;
	myState: string;
	doctorport: string;
	port: string;
	ports: any = [];
	myStates: any = [];
	doctorports: any = [];
	myuserRoles: any = [];
	error_msg :string = '';
	public network_status: any;
	locationCheck:any;
	localapi:any;
	nav_params_object: NavParams;
	view_controller_object: ViewController;
	in_app_browser_object: InAppBrowser;
	platform_object: Platform;
	modal_controllar_object: ModalController;
	http_service_object: HttpService;
	loading_service_object: LoadingService;
	database_provider_object: DatabaseProvider;
	storage_object: Storage;
	http_object: Http;
	toast_service_object: ToastService;
	country_and_role_list_provider_object: CountryandrolelistProvider;
	ionic_app_object: IonicApp;
	network_object: Network;
	toast_controller_object: ToastController;
	screen_orientation_object: ScreenOrientation;
	messageShow:any;

	constructor(private screenOrientation: ScreenOrientation, public injector: Injector) {

		this.nav_params_object = injector.get<NavParams>(NavParams);
		this.view_controller_object = injector.get<ViewController>(ViewController);
		this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
		this.platform_object = injector.get<Platform>(Platform);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.loading_service_object = injector.get<LoadingService>(LoadingService);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.storage_object = injector.get<Storage>(Storage);
		this.toast_service_object = injector.get<ToastService>(ToastService);
		this.country_and_role_list_provider_object = injector.get<CountryandrolelistProvider>(CountryandrolelistProvider);
		this.ionic_app_object = injector.get<IonicApp>(IonicApp);
		this.network_object = injector.get<Network>(Network);
		this.toast_controller_object = injector.get<ToastController>(ToastController);
		this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
		this.http_object = injector.get<Http>(Http);

		this.shownContent = localStorage.getItem('shownContent');
		this.productID = localStorage.getItem('productID');
		this.localapi = this.http_service_object.getApi();

		this.network_status = 'connected';
		this.network_object.onDisconnect().subscribe(() => {
			this.network_status = 'not_connected';
		});

		this.network_object.onConnect().subscribe(() => {
			this.network_status = 'connected';
		});
	}


ionViewDidLoad() {
		console.log('ionViewDidLoad ModalPage');
		this.viewdata = this.nav_params_object.get('data');
		this.locationCheck = localStorage.getItem('location');

		if (this.viewdata == 'ProfessionInfo') {
			const userRole_Id = this.nav_params_object.get('userRoleID');
			if (userRole_Id == "1") {

				this.doctorports = this.country_and_role_list_provider_object.getOnlyDoctorRoles();
			}else if (userRole_Id == "5") {
	
				this.doctorports = this.country_and_role_list_provider_object.getPatientRoles();
			}else{

				this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
			}

			this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
			this.myStates = this.country_and_role_list_provider_object.getUSstate();
			this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); 			
		}
	}

		docPortChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		console.log('doc port:'+ event.value);
	}

	portChange(event: {
		component: IonicSelectableComponent,
		value: any 
	}) {
		console.log('port:'+ event.value);
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

	getGroupText(port: Port, portIndex: number, ports: Port[]) {

		if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
			return port.country.name;
		}
		return null;
	}

	ionViewWillLoad() {
		this.viewdata = this.nav_params_object.get('data');

		this.storage_object.get('user_logged_in').then((val) => {
			this.live_id = val;
		});

		if(this.viewdata == 'forum'){
			var userdata = this.nav_params_object.get('userdata');
			this.request_from = this.nav_params_object.get('request_from');
			this.email = userdata.email;
			this.username = userdata.username;
			this.user_type = (userdata.userRoleId == 1)?'Doctor':'Patient';
			this.messageShow = (userdata.userRoleId == 1)? "This moderated forum is for clinicians only. We request you to verify your email address and create your username" : "This is a moderated discussion forum for non-clinicians. We request you to verify your email address and create your username";


			var disabled = '';
			
			if(this.email != ''){
				disabled = 'true';
			}
			if(this.email != ''){
				disabled = 'true';
			}
			this.obj = {'userEmail':this.email, 'username':this.username, 'disabled':disabled, 'user_type':this.user_type};
		}

		//if(this.viewdata == 'View Profile'){
		if(this.viewdata == 'Manage Profile'){
			this.user_data = this.nav_params_object.get('userdata');
			this.request_from = this.nav_params_object.get('request_from');
			//this.cv_subscriptionId = this.inappProvider.cv_subscriptionId();
			//this.cv_productId = this.inappProvider.cv_productId();
			//this.cv_subscriptionId_monthly = this.inappProvider.cv_subscriptionId_monthly();
			//this.shownContent = localStorage.getItem('shownContent');
		}
		if(this.viewdata == 'Add to Playlist'){
			var type = this.nav_params_object.get('type');
			this.obj = {'playlist_name':'','playlist':'', 'type':type};
			this.video_data = this.nav_params_object.get('video_data');
			var live_id = localStorage.getItem('userliveId');
			var playlist_query = new Array(" WHERE user_id="+live_id);
			this.database_provider_object.fetchAllData('custom_playlist' , playlist_query).then(result => {
				this.playlist_data = result;
			});

			/*this.playlist_data = [{'id':1, 'name':'Playlist 1' , 'list_values':'{"education":"", "information":""}'}, {'id':2, 'name':'Playlist 2', 'list_values':'{"education":"", "information":""}'}, {'id':3, 'name':'Playlist 3', 'list_values':'{"education":"", "information":""}'}];*/
		}

		if (this.viewdata == 'New Release') {
			
			this.img_Url = this.nav_params_object.get('contentUrl');
		}
	}

	closeModal() {
		// const data = {
		//   name: 'John Doe',
		//   occupation: 'Milkman'
		// };
		// this.view_controller_object.dismiss(data);
		this.view_controller_object.dismiss();
	}


	visitSite = function(flag) {
		if(flag==0){

			this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
		}else if (flag==1) {
			var isAndroid = this.platform_object.is('android');
			var isios = this.platform_object.is('ios');
			if (isAndroid) {				
				this.in_app_browser_object.create('https://play.google.com/store/apps/details?id=com.cardiovisual.app', '_blank', 'location=yes');			
			} else {
				this.in_app_browser_object.create('https://itunes.apple.com/us/app/cardiovisual-heart-health/id1009028152?ls=1&mt=8', '_blank', 'location=yes');		
			}
		}
	}

	disclaimerpage(myData){
		const myModalOptions: ModalOptions = {
	      enableBackdropDismiss: false
	    };

	    const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: myData }, myModalOptions);

	    myModal.present();

	    myModal.onDidDismiss((data) => {
	      console.log(" on model.ts ->I have dismissed.");
	      console.log(data);
	    });

	    myModal.onWillDismiss((data) => {
	      console.log("on model.ts -> I'm about to dismiss");
	      console.log(data);
	    });
	}

	forumDetailSubmit(object){
		var first_time = 'no';
		var flag = 'go';
		var email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		var username_pattern= new RegExp("^[-a-zA-Z0-9]+$");

	 	this.msg = '';

		if(object.disabled == ''){
      first_time = 'yes';
    }

    if(object.userEmail ==''){
      this.msg +='Please enter email';
      flag = 'stop';
    }
    if(object.username == ''){
      this.msg +='Please enter username.';
      flag = 'stop';
    }
    if(object.userEmail != '' && (!email_pattern.test(object.userEmail))){
      this.msg +='Please enter proper email.';
      flag = 'stop';
    }

    this.http_service_object.checkEmailExists(object.userEmail).subscribe(data => {
    	if(object.userEmail != '' && first_time == 'yes' && data.length > 0){
       	flag = 'stop';
   			this.msg += 'The email has already been taken.';
      }else{
   		 flag = 'stop';
			}
    });

		if(object.username != '' && (object.username.length < 4) || (object.username.length > 16)){
		  this.msg += 'Username should be 4 to 16 letters long.'+'<br/>';
		  flag = 'stop';
		}else if(object.username != '' && (!username_pattern.test(object.username))){
			this.msg += 'The username may only contain letters, numbers and dashes.';
			flag = 'stop';
		}else {
			flag = 'stop';
		}

		if (this.msg == '') {
			this.view_controller_object.dismiss();
			object.username = object.username.toLowerCase();
			this.database_provider_object.updateUserinfoForForum(this.live_id, {'email':object.userEmail, 'username':object.username});
			if(!(this.request_from == 'view_profile')) {
				this.redirectToForumDashboard({'email': object.userEmail, 'username':object.username, 'first_time': first_time, 'user_type':object.user_type});
			}
		}
	}

	redirectToForumDashboard(object){
		var text_arr =[object.username, object.email, object.first_time];
        var text = JSON.stringify(text_arr);
  		//var text = 'abhishek#*#abbhishek.chavan+1@oneleap.in#*#no';//+object.email+'#*#'+object.first_time;
  		var encode_string = window.btoa(text);
  		if(object.user_type == 'Patient'){

  			var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

  			ref.on('loadstop').subscribe((event) => {
          this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe((event) => {            
          this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });

  		}else{
				var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

				ref.on('loadstop').subscribe((event) => {
          this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe((event) => {            
          this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
  		}
	}

	setUsername(user_data){
		var user_query = new Array(""); 
		this.database_provider_object.fetchAllData('new_user_info' , user_query).then(userresult => {

		const myModalOptions: ModalOptions = {
		enableBackdropDismiss: false
		};

		const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:userresult[0], request_from:'view_profile' }, myModalOptions);
		myModal.present();

		});

	}

	chatwithus(){
	    var usrType = '';
	    var userEmail = localStorage.getItem('cv5userEmail');
	    var name   = userEmail.substring(0, userEmail.lastIndexOf("@"));
	    var userRoleId = localStorage.getItem('cv5userRoleId');

	    var userType = (userRoleId == '1') ? "doctor" : "patient";

	    if(userType != "doctor"){
	        usrType = 'nonhcp';
	    } else {
	      usrType = 'hcp';
	    }
	    var userInfo = {
	        "firstName": name,
	        "lastName": usrType,
	        "email" : userEmail,
	        "externalId" : userEmail
	    };

	    ((window as any).Freshchat).updateUser(userInfo)

	    var userProperties = {
	        "userRoleId": userRoleId,
	        "userType": usrType,
	        "organisation": "CardioVisual"
	    };

	    ((window as any).Freshchat).updateUserProperties(userProperties);

	    //window.Freshchat.setExternalID('sanjeev.kumar@oneleap.in');
	    ((window as any).Freshchat).showConversations();      
  }

	editProfile(){
		this.storage_object.get('user_logged_in').then((val) => {
			var text_arr =[val];
			var text = JSON.stringify(text_arr);
			var encode_string = window.btoa(text);
			var browser = this.in_app_browser_object.create('https://profile.cardiovisual.com/user/'+encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');


			browser.on('loadstop').subscribe((event) => {
        this.screen_orientation_object.unlock();
      });
      browser.on('exit').subscribe((event) => {            
        this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
				this.updateLocalDB();
				this.closeModal()
      });
		});
	}

	radiocheck(value){
		var loader = document.getElementById("create_playlist");
		if(value == 'create_new'){
			loader.style.display = 'block';
		}else{
			loader.style.display = 'none';
			//loader = '';
		}
	}
  
	playlistSubmit(object){
		this.msg = '';
		if(object.playlist == ''){
			this.msg = 'Select atleast 1 Playlist';
		}
		if(object.playlist == 'create_new' && object.playlist_name == ''){
			this.msg = 'Please enter playlist name.';
		}
		
		var test = '';
		var live_id = localStorage.getItem('userliveId');
		var post_url = this.http_service_object.getPosturl('userplaylists');
		switch(true){
			case(this.msg == '' && object.playlist == 'create_new' && object.type == 'information'):
				test = '{"education":[],"information":['+this.video_data.id+']}';
				var insert_sql:string[] = new Array("Insert into custom_playlist(name, user_id, list_values) values ('"+object.playlist_name+"', "+live_id+", '"+test+"')");
				this.database_provider_object.updateData(insert_sql);
				this.http_object.post(post_url, {"name":object.playlist_name, "userId" : this.live_id, "listValues" : test }).subscribe(data => {
					var response = JSON.parse(data['_body']);  
					localStorage.setItem('temPlaylistID', response.id);
				});
				this.closeModal();
				this.toast_service_object.presentToast("Video added to Playlist.");
				break;
			case(this.msg == '' && object.playlist == 'create_new' && object.type == 'education'):
				test = '{"education":['+this.video_data.id+'],"information":[]}';
				var insert_sql:string[] = new Array("Insert into custom_playlist(name, user_id, list_values) values ('"+object.playlist_name+"', "+live_id+", '"+test+"')");
				this.database_provider_object.updateData(insert_sql);

				this.http_object.post(post_url, {"name":object.playlist_name,"userId":this.live_id,"listValues":test}).subscribe(data => {
					var response = JSON.parse(data['_body']);  
					localStorage.setItem('temPlaylistID', response.id);
				});
				this.closeModal();
				this.toast_service_object.presentToast("Video added to Playlist.");
				break;
			case(this.msg == '' && object.playlist != 'create_new' && object.type == 'information' && object.playlist == '1'):
				var custom_playlist = new Array(" WHERE id="+object.playlist);
				this.database_provider_object.fetchAllData('custom_playlist' , custom_playlist).then(custom_playlist_data =>{
					var list_values = JSON.parse(custom_playlist_data[0].list_values);
					list_values.information.push(this.video_data.id);
					list_values.information = _.uniq(list_values.information);
					list_values = JSON.stringify(list_values);
					var custom_playlist_api_data = {"listValues": list_values};
					this.playListID = localStorage.getItem('temPlaylistID');
					this.http_object.put(post_url+"/"+this.playListID, custom_playlist_api_data).subscribe(data => {});

					var update_query:string[] = new Array("UPDATE custom_playlist SET list_values='"+list_values+"' WHERE id="+object.playlist);

					this.database_provider_object.updateData(update_query);
				});	
				this.closeModal();
				this.toast_service_object.presentToast("Video added to Playlist.");
				break;
			case(this.msg == '' && object.playlist != 'create_new' && object.type == 'education' && object.playlist == '1'):
				var custom_playlist = new Array(" WHERE id="+object.playlist);
				this.database_provider_object.fetchAllData('custom_playlist' , custom_playlist).then(custom_playlist_data =>{
					var list_values = JSON.parse(custom_playlist_data[0].list_values);
					list_values.education.push(this.video_data.id);   
						list_values.education = _.uniq(list_values.education);
					list_values = JSON.stringify(list_values);
					var custom_playlist_api_data = {"listValues": list_values};
					this.playListID = localStorage.getItem('temPlaylistID');
					this.http_object.put(post_url+"/"+this.playListID, custom_playlist_api_data).subscribe(data => {});

					var update_query:string[] = new Array("UPDATE custom_playlist SET list_values='"+list_values+"' WHERE id="+object.playlist);

					this.database_provider_object.updateData(update_query);
				});	
				this.closeModal();
				this.toast_service_object.presentToast("Video added to Playlist.");
				break;
			case(this.msg == '' && object.playlist != 'create_new' && object.type == 'information' && object.playlist != '1'):
				var custom_playlist = new Array(" WHERE id="+object.playlist);
				this.database_provider_object.fetchAllData('custom_playlist' , custom_playlist).then(custom_playlist_data =>{
					var list_values = JSON.parse(custom_playlist_data[0].list_values);
					list_values.information.push(this.video_data.id);
					list_values.information = _.uniq(list_values.information);
					list_values = JSON.stringify(list_values);
					var custom_playlist_api_data = {"listValues": list_values};
					this.playListID = object.playlist;
					this.http_object.put(post_url+"/"+this.playListID, custom_playlist_api_data).subscribe(data => {});

					var update_query:string[] = new Array("UPDATE custom_playlist SET list_values='"+list_values+"' WHERE id="+object.playlist);

					this.database_provider_object.updateData(update_query);
				});	
				this.closeModal();
				this.toast_service_object.presentToast("Video added to Playlist.");
				break;
			case(this.msg == '' && object.playlist != 'create_new' && object.type == 'education' && object.playlist != '1'):
				var custom_playlist = new Array(" WHERE id="+object.playlist);
				this.database_provider_object.fetchAllData('custom_playlist' , custom_playlist).then(custom_playlist_data =>{
					var list_values = JSON.parse(custom_playlist_data[0].list_values);
					list_values.education.push(this.video_data.id);   
						list_values.education = _.uniq(list_values.education);
					list_values = JSON.stringify(list_values);
					var custom_playlist_api_data = {"listValues": list_values};
					this.playListID = object.playlist;
					this.http_object.put(post_url+"/"+this.playListID, custom_playlist_api_data).subscribe(data => {});

					var update_query:string[] = new Array("UPDATE custom_playlist SET list_values='"+list_values+"' WHERE id="+object.playlist);

					this.database_provider_object.updateData(update_query);
				});	
				this.closeModal();
				this.toast_service_object.presentToast("Video added to Playlist.");
				break;	

		}
	}

	updateLocalDB(){
		var live_id = localStorage.getItem('userliveId');
		this.http_service_object.getUserInfoByLiveId(live_id).subscribe(data => {

		var userData = {
			"email" : data.email,
			"username": data.username,
			"user_type" : (data.userRoleId == 1) ? "doctor" : "patient",
			"isPaid" : data.isPaid,
			"userRoleId" : data.userRoleId,
			"discoveryMethodId" : data.discoveryMethodId,
			"clevertapId" : data.clevertapId,
			"liveId" : live_id,
			"fullname" : data.fullname,
			"password" : data.password,
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

		this.database_provider_object.storeUserdata(userData);
		});
	}
	public onProfessionSubmit() {
		
		var country = this.port;
		var usaState = this.myState;
		var doctor = this.doctorport;
		var doctor_code = doctor['doctorcode'];
		var splitTest = doctor_code.split(":");	  		
		var specialities = splitTest[0];
		var sub_Specialities = splitTest[1];
		let activePortal =this.ionic_app_object._modalPortal.getActive();
		var userData = new Array(""); 
		this.database_provider_object.fetchAllData('new_user_info' , userData).then(userlaunchresult => {
			var liveId  = userlaunchresult[0].liveId;
			var password  = userlaunchresult[0].password;		
			switch(true){
				case(this.network_status != 'connected'):
					this.toast_controller_object.create({
		        message: 'You are Offline',
		        duration: 3000,
		        position: 'bottom'
	        }).present();
					break;
				case(this.network_status == 'connected' && (typeof doctor === "undefined"  || doctor == '')):
					this.error_msg = "Please Select Your Profession";
					break;
				case(this.network_status == 'connected' && doctor != '' && (typeof country === "undefined"  || country == '' ) && this.locationCheck == '' && this.isShow == true && (typeof usaState === "undefined"  || usaState == '') && this.locationCheck ==''):	
					this.error_msg = '';
			  	this.loading_service_object.show();
			  	var usercountry = "";
			  	this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+liveId,{"location":usercountry,"state":usa_State_code,"specialities":specialities,"userRoleSubType": sub_Specialities}).subscribe(locationInsertSuccess => {
						var response = JSON.parse(locationInsertSuccess['_body']);
						var doctor = '';
						var country = '';
						var usaState = '';
						this.updateLocalDBforProfession(response, password);
						localStorage.setItem('professionSubmit', 'yes');
						setTimeout(() =>{
							this.loading_service_object.hide();
							if(activePortal){
							 	activePortal.dismiss();
							  	return;
							}
						},3000);
					}, locationInsertError => {
						this.loading_service_object.hide();
					});
					break;
				case(this.network_status == 'connected' && doctor != '' && this.locationCheck!='' && this.isShow):
					this.error_msg = '';
		  		this.loading_service_object.show();
		  		var usercountry = localStorage.getItem('location');
			  	var usa_State_code = localStorage.getItem('State_code');
			  	this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+liveId,{"location":usercountry,"state":usa_State_code,"specialities":specialities,"userRoleSubType": sub_Specialities}).subscribe(locationInsertSuccess => {
						var response = JSON.parse(locationInsertSuccess['_body']);
						var doctor = '';
						var country = '';
						var usaState = '';
						this.updateLocalDBforProfession(response, password);
						localStorage.setItem('professionSubmit', 'yes');
						setTimeout(() =>{
							this.loading_service_object.hide();
							if(activePortal){
							 	activePortal.dismiss();
							  	return;
							}
						},3000);
					}, locationInsertError => {
						this.loading_service_object.hide();
					});
					break;
				case(this.network_status == 'connected' && doctor != '' && country != '' && this.isShow == true):
					this.error_msg = '';
			  	this.loading_service_object.show();
					var usercountry = country['name'];
					var usa_State = usaState['name'];
					var usa_State_code = usaState['code'];
					this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+liveId,{"location":usercountry,"state":usa_State_code,"specialities":specialities,"userRoleSubType": sub_Specialities}).subscribe(locationInsertSuccess => {
						var response = JSON.parse(locationInsertSuccess['_body']);
						var doctor = '';
						var country = '';
						var usaState = '';
						this.updateLocalDBforProfession(response, password);
						localStorage.setItem('professionSubmit', 'yes');
						setTimeout(() =>{
							this.loading_service_object.hide();
							if(activePortal){
							 	activePortal.dismiss();
							  	return;
							}
						},3000);
					}, locationInsertError => {
						this.loading_service_object.hide();
					});
					break;
				case(this.network_status == 'connected' && doctor != '' && this.locationCheck == '' && this.isShow == false):
					this.error_msg = '';
			  	this.loading_service_object.show();
			  	var usercountry = "";
			  	var usa_State =  "";
					var usa_State_code =  "";
					this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+liveId,{"location":usercountry,"state":usa_State_code,"specialities":specialities,"userRoleSubType": sub_Specialities}).subscribe(locationInsertSuccess => {
						var response = JSON.parse(locationInsertSuccess['_body']);
						var doctor = '';
						var country = '';
						var usaState = '';
						this.updateLocalDBforProfession(response, password);
						localStorage.setItem('professionSubmit', 'yes');
						setTimeout(() =>{
							this.loading_service_object.hide();
							if(activePortal){
							 	activePortal.dismiss();
							  	return;
							}
						},3000);
					}, locationInsertError => {
						this.loading_service_object.hide();
					});
					break;
				case(this.network_status == 'connected' && doctor != '' && this.locationCheck != '' && this.isShow == false):
					this.error_msg = '';
		  		this.loading_service_object.show();
		  		var usercountry = localStorage.getItem('location');
			  	var usa_State_code = localStorage.getItem('State_code');
					this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+liveId,{"location":usercountry,"state":usa_State_code,"specialities":specialities,"userRoleSubType": sub_Specialities}).subscribe(locationInsertSuccess => {
						var response = JSON.parse(locationInsertSuccess['_body']);
						var doctor = '';
						var country = '';
						var usaState = '';
						this.updateLocalDBforProfession(response, password);
						localStorage.setItem('professionSubmit', 'yes');
						setTimeout(() =>{
							this.loading_service_object.hide();
							if(activePortal){
							 	activePortal.dismiss();
							  	return;
							}
						},3000);
					}, locationInsertError => {
						this.loading_service_object.hide();
					});
					break;
				case(this.network_status == 'connected' && doctor != '' && country != '' && this.isShow == false):
					this.error_msg = '';
			  	this.loading_service_object.show();
					var usercountry = country['name'];
					var usa_State_code = localStorage.getItem('State_code');
					this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+liveId,{"location":usercountry,"state":usa_State_code,"specialities":specialities,"userRoleSubType": sub_Specialities}).subscribe(locationInsertSuccess => {
						var response = JSON.parse(locationInsertSuccess['_body']);
						var doctor = '';
						var country = '';
						var usaState = '';
						this.updateLocalDBforProfession(response, password);
						localStorage.setItem('professionSubmit', 'yes');
						setTimeout(() =>{
							this.loading_service_object.hide();
							if(activePortal){
							 	activePortal.dismiss();
							  	return;
							}
						},3000);
					}, locationInsertError => {
						this.loading_service_object.hide();
					});
					break;	
			}
		});	
	}
	updateLocalDBforProfession(data,password){

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
	    this.database_provider_object.storeUserdata(userData);
	}

}
