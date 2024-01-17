import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { IonicPage, ToastController, Platform, AlertController , Modal, ModalController, ModalOptions } from 'ionic-angular';
import { ToastService } from '../../services/toast-service';
import { HttpService } from '../../services/HttpService';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import * as _ from 'underscore/underscore';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { DatabaseProvider } from '../../providers/database/database';
import { CleverTap } from '@ionic-native/clevertap';
import {ScreenOrientation} from '@ionic-native/screen-orientation';


/*
  Generated class for the VideosharesocialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideosharesocialProvider {

	dtStr : any;
	clevertapDate : any;
	email: string = '';
	username: string = '';
	toast_service_object: ToastService;
	http_service_object: HttpService;
	toast_controller_object: ToastController;
	storage_object:  Storage;
	platform_object : Platform;
	social_sharing_object: SocialSharing;
	in_app_browser_object: InAppBrowser;
	network_check_object: NetworkCheckProvider;
	clevertap_object: any;
	alert_controller_object: AlertController;
	database_provider_object: DatabaseProvider;
	modal_controllar_object: ModalController;
	screen_orientation_object: ScreenOrientation;

	constructor(public injector: Injector) {

		this.toast_service_object = injector.get<ToastService>(ToastService);
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.toast_controller_object = injector.get<ToastController>(ToastController);
		this.storage_object = injector.get<Storage>(Storage);
		this.platform_object = injector.get<Platform>(Platform);
		this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
		this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
		this.clevertap_object = new CleverTap();
		this.alert_controller_object = injector.get<AlertController>(AlertController);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);
		this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);

		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();
	}

	ionViewWillEnter(){

	}

	// single video share start by sanjeev 26 jul

	shareSingleVideo(shareVideo){
		this.platform_object.ready().then(() => {

			var network_type = this.network_check_object.getNetworkType();
			if(network_type == 'none'){
				this.toast_controller_object.create({
					message: 'You are now offline.',
					position: 'bottom',
					duration: 5000
				}).present();
			} else {

				if (shareVideo.otherType) {
					// code...
					var shareContentTypefor = "Information";
				}else{
					var shareContentTypefor = "Education";
				}
				var title = shareVideo.title;
				var name = shareVideo.name;
				var description = shareVideo.description;
				var iconUrl = shareVideo.iconUrl;
				var url = shareVideo.shareUrl;
				var id = shareVideo.id;

				var options = {
					message: name+' - '+description+'.  Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
					files: [], // an array of filenames either locally or remotely 
					url: url,
					chooserTitle: 'Share '+name //'' // Android only, you can override the default share sheet title 
				}
				var params = {
					"record_time" : this.dtStr,
					"record_date" : this.clevertapDate,
					"os" : localStorage.getItem('getDevicePlatform'),
					"userRoleId" : localStorage.getItem('cv5userRoleId'),
					"userType": localStorage.getItem('cv5usrType'),
					"userEmail" : localStorage.getItem('cv5userEmail'),
					"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
					"location":localStorage.getItem('location'),
					"specialities":localStorage.getItem('usrSpecialities'),
					"subSpecialities": localStorage.getItem('cv5usrRolesubType'),
					"Identity": localStorage.getItem('userIdentity'),
					"sharedcontentTypeFor":shareContentTypefor,
					"videoName":name,
					"videoId":id
				};                
				this.clevertap_object.recordEventWithNameAndProps("sharedVideo", params);  // Set clevertap Custom AppLaunch event.
				//alert('options-->'+JSON.stringify(options));
				//this.social_sharing_object.shareWithOptions(options);
				//this.social_sharing_object.share(message,subject, this.url, this.drawOnImgTitle)
				this.social_sharing_object.shareWithOptions(options)
				.then((shareentries) => {
					if (shareentries.completed) {
						// code...
						this.toast_service_object.mypresentToast("Successfully shared  '"+name+"' Video.",1500);
					}
					
					if(localStorage.getItem( 'ratingDialogShown') == null || localStorage.getItem( 'ratingDialogShown') == 'null' || localStorage.getItem( 'ratingDialogShown') == "" || localStorage.getItem( 'ratingDialogShown') == "undefined"){
						this.http_service_object.showRateDialogueBox();
						localStorage.setItem( 'ratingDialogShown', 'true');
					}
				})
				.catch((error) => {
					//console.log('sharing error' + JSON.stringify(error));
				}); 
			}
			
		}); 
	}

	// end


	sharePlaylistVideo(sharePlaylist){
		this.platform_object.ready().then(() => {

			var network_type = this.network_check_object.getNetworkType();
			if(network_type == 'none'){

				this.toast_controller_object.create({
					message: 'You are now offline.',
					position: 'bottom',
					duration: 5000
				}).present();
			} else {
				var title = sharePlaylist.title;
				var playlistName = sharePlaylist.name;
				var description = sharePlaylist.description;
				var iconUrl = sharePlaylist.iconUrl;
				var url = sharePlaylist.shareUrl;
				var id = sharePlaylist.id;

				var options = {
					message: playlistName+' - '+description+'. Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
					files: [], // an array of filenames either locally or remotely 
					url: url,
					chooserTitle: 'Share '+playlistName //'' // Android only, you can override the default share sheet title 
				}
				var params = {
					"record_time" : this.dtStr,
					"record_date" : this.clevertapDate,
					"os" : localStorage.getItem('getDevicePlatform'),
					"userRoleId" : localStorage.getItem('cv5userRoleId'),
					"userType": localStorage.getItem('cv5usrType'),
					"userEmail" : localStorage.getItem('cv5userEmail'),
					"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
					"location":localStorage.getItem('location'),
					"specialities":localStorage.getItem('usrSpecialities'),
					"subSpecialities": localStorage.getItem('cv5usrRolesubType'),
					"Identity": localStorage.getItem('userIdentity'),
					"playlistName" : playlistName,
					"playlistId":id
				};                
				this.clevertap_object.recordEventWithNameAndProps("sharedPlaylist", params);  // Set clevertap Custom AppLaunch event.
				//this.social_sharing_object.shareWithOptions(options);
				//this.social_sharing_object.share(message,subject, this.url, this.drawOnImgTitle)
				this.social_sharing_object.shareWithOptions(options)
				.then((sharePlaylist) => {
					if (sharePlaylist.completed) {
						// code...
						this.toast_service_object.mypresentToast("Successfully shared '"+playlistName+"' playlist.",1500);
					}
					
					if(localStorage.getItem( 'ratingDialogShown') == null || localStorage.getItem( 'ratingDialogShown') == 'null' || localStorage.getItem( 'ratingDialogShown') == "" || localStorage.getItem( 'ratingDialogShown') == "undefined"){
						this.http_service_object.showRateDialogueBox();
						localStorage.setItem( 'ratingDialogShown', 'true');
					}
				})
				.catch((error) => {
					//console.log('sharing error' + JSON.stringify(error));
				}); 
			}

		}); 		
	}

	downloadVideo(downloadVideoData,contentType){
		var downloadparams = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : localStorage.getItem('cv5userRoleId'),
			"userType": localStorage.getItem('cv5usrType'),
			"userEmail" : localStorage.getItem('cv5userEmail'),
			"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
			"location":localStorage.getItem('location'),
			"specialities":localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType'),
			"Identity": localStorage.getItem('userIdentity'),
			"downloadContentFor":contentType,
			"videoname" : downloadVideoData.name
		};                
		this.clevertap_object.recordEventWithNameAndProps("downloadVideo", downloadparams); 
	}

	discussPromptForProffesional(forumData,tagTYPE,fromWhere){
		var checkLocation = new Array(""); 
		this.database_provider_object.fetchAllData('new_user_info' , checkLocation).then(locationData => {

			var newUserLocation  = locationData[0].location;
			var usr_specialities = locationData[0].specialities;
			var usr_roleID = locationData[0].userRoleId;
			
			
			const myModalOptions: ModalOptions = {
				enableBackdropDismiss: false
			};

			if (usr_specialities == '' || usr_specialities == 'null' ||  usr_specialities == undefined || usr_specialities == null || usr_specialities == 'undefined') {
				const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'ProfessionInfo', userRoleID:localStorage.getItem('cv5userRoleId'), closeModel:Modal}, myModalOptions);
				myModal.present();

				myModal.onDidDismiss((modeldata) => {
					var submitData = localStorage.getItem('professionSubmit');
					if (submitData == 'yes') {
						localStorage.setItem('professionSubmit', '');
						this.forumCheckForHcp(forumData,tagTYPE,fromWhere);
					}					
				});

				myModal.onWillDismiss((modeldata) => {
					//console.log("I'm about to dismiss");
				});
			}else{
				this.forumCheckForHcp(forumData,tagTYPE,fromWhere);
			}
		});
	}


	/*

	forumCheckForHcp(tagTYPE){
		this.platform_object.ready().then(() => {
			let user_type = localStorage.getItem('cv5usrType');
			const nameCapitalized = user_type.charAt(0).toUpperCase() + user_type.slice(1);
			 var network_type = this.network_check_object.getNetworkType();
			 if(network_type == 'none'){
			  
				this.toast_controller_object.create({
					message: 'You are now offline.',
					position: 'bottom',
					duration: 5000
				}).present();

			 } else {
				const myModalOptions: ModalOptions = {
					enableBackdropDismiss: false
				};
				this.storage_object.get('user_logged_in').then((val) => {

					this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {
					this.email = data.email;
					this.username = data.username;
					var that = this;
					var speciality_query:string[] = new Array("WHERE name='specialitiesList' AND type='specialitiesList'");
				        this.database_provider_object.fetchAllData('custom_listing' , speciality_query).then(speciality_listing_data => {

							if(speciality_listing_data.length > 0){

								var speciality_list = JSON.parse(speciality_listing_data[0].list_values);

								var forParticularSpeciality = _.filter(speciality_list,function(json_for){
									return (json_for.usertype ==  nameCapitalized);
								});
								
								_.each(forParticularSpeciality,function(value,index){
									if(data.userRoleSubType == value.sub_Specialities|| data.specialities == value.specialities ){
										localStorage.setItem('onlyForHcpChk', 'yes');
									}
								});								
							}
							setTimeout(() => { 

								if (localStorage.getItem('onlyForHcpChk') == 'yes') {
									var confirmPopup = that.alert_controller_object.create({
										title: '',
										message: '<h4 style="color:#ffffff; text-align:center;"></h4><p style="color:#ffffff; text-align:center;font-weight:700;">Only for Heathcare professionals.</p>',
										enableBackdropDismiss: true,
										buttons: ['Dismiss']
									});
									confirmPopup.present();
									localStorage.setItem('onlyForHcpChk', 'no');
								}else{
									if(that.email =='' || that.username == '' || that.username == null){
										const myModal: Modal = that.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
										myModal.present();

										myModal.onDidDismiss((data) => {
											console.log("I have dismissed.");
										});

										myModal.onWillDismiss((data) => {
											console.log("I'm about to dismiss");
										});
									}else{
										if (nameCapitalized == 'Patient') {
											that.redirectToForumDashboard({'email': this.email, 'username': that.username, 'first_time': 'no','user_type':'Patient','clevertap_tag': tagTYPE});

										}else if (nameCapitalized == 'Doctor') {
											that.redirectToForumDashboard({'email': this.email, 'username': this.username, 'first_time': 'no', 'user_type':'Doctor', 'clevertap_tag': tagTYPE});
										}
									}
								}
							},500); 		
				        });
					}, err => {
						//console.log('err->'+err);
					});	
				});
			 }
		});  			
	}

	*/

	forumCheckForHcp(forumData,tagTYPE,fromWhere){
		this.platform_object.ready().then(() => {
			let user_type = localStorage.getItem('cv5usrType');
			const nameCapitalized = user_type.charAt(0).toUpperCase() + user_type.slice(1);
			 var network_type = this.network_check_object.getNetworkType();
			 if(network_type == 'none'){
			  
				this.toast_controller_object.create({
					message: 'You are now offline.',
					position: 'bottom',
					duration: 5000
				}).present();

			 } else {


				if(forumData.forum_tags == undefined || forumData.forum_tags == 'undefined'){
					var forum_tags = forumData.slug; 
				}else{
					var forum_tags = forumData.forum_tags; 
				}
		
				const myModalOptions: ModalOptions = {
					enableBackdropDismiss: false
				};
				this.storage_object.get('user_logged_in').then((val) => {

					this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {
					this.email = data.email;
					this.username = data.username;
					var that = this;
					var speciality_query:string[] = new Array("WHERE name='specialitiesList' AND type='specialitiesList'");
				        this.database_provider_object.fetchAllData('custom_listing' , speciality_query).then(speciality_listing_data => {

							if(speciality_listing_data.length > 0){

								var speciality_list = JSON.parse(speciality_listing_data[0].list_values);

								var forParticularSpeciality = _.filter(speciality_list,function(json_for){
									return (json_for.usertype ==  nameCapitalized);
								});
								
								_.each(forParticularSpeciality,function(value,index){
									if(data.userRoleSubType == value.sub_Specialities|| data.specialities == value.specialities ){
										localStorage.setItem('onlyForHcpChk', 'yes');
									}
								});								
							}
							setTimeout(() => { 

								if (localStorage.getItem('onlyForHcpChk') == 'yes') {
									var confirmPopup = that.alert_controller_object.create({
										title: '',
										message: '<h4 style="color:#ffffff; text-align:center;"></h4><p style="color:#ffffff; text-align:center;font-weight:700;">Only for Heathcare professionals.</p>',
										enableBackdropDismiss: true,
										buttons: ['Dismiss']
									});
									confirmPopup.present();
									localStorage.setItem('onlyForHcpChk', 'no');
								}else{
									if(that.email =='' || that.username == '' || that.username == null){
										const myModal: Modal = that.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
										myModal.present();

										myModal.onDidDismiss((data) => {
											//console.log("I have dismissed.");
										});

										myModal.onWillDismiss((data) => {
											//console.log("I'm about to dismiss");
										});
									}else{
										if (nameCapitalized == 'Patient') {

											if (fromWhere == 'From WhatsNew' || fromWhere == 'From Branch Link') {
												that.redirectToForumDashboard({'email': that.email, 'username': that.username, 'forum_slug': forumData.slug, 'first_time': 'no', 'forum_title':forumData.title, 'clevertap_tag': tagTYPE, 'user_type':'Patient'}, fromWhere);
											}else if (fromWhere =='From Video Details' || fromWhere =='From WhatsNew Details' || fromWhere =='From Info Video Details') {
												that.redirectToForumDashboard({'email': that.email, 'username': that.username, 'first_time': 'no', 'forum_tags' : forum_tags, 'user_type':'Patient','clickedItem':forumData.name},fromWhere);
											}else{
												that.redirectToForumDashboard({'email': that.email, 'username': that.username, 'first_time': 'no','user_type':'Patient','clevertap_tag': tagTYPE},fromWhere);
											}
											
										}else if (nameCapitalized == 'Doctor') {

											if (fromWhere == 'From WhatsNew' || fromWhere == 'From Branch Link') {
												that.redirectToForumDashboard({'email': that.email, 'username': that.username, 'forum_slug': forumData.slug, 'first_time': 'no', 'forum_title':forumData.title, 'clevertap_tag': tagTYPE, 'user_type':'Doctor'},fromWhere);
											}else if (fromWhere == 'From Video Details' || fromWhere =='From WhatsNew Details' || fromWhere =='From Info Video Details') {
												that.redirectToForumDashboard({'email': that.email, 'username': that.username, 'first_time': 'no', 'forum_tags' : forum_tags, 'user_type':'Doctor','clickedItem':forumData.name},fromWhere);
											}else{
												that.redirectToForumDashboard({'email': that.email, 'username': that.username, 'first_time': 'no', 'user_type':'Doctor', 'clevertap_tag': tagTYPE},fromWhere);
											}
											
										}
									}
								}
							},500); 		
				        });
					}, err => {
						//console.log('err->'+err);
					});	
				});
			 }
		});  			
	}

	/*
	redirectToForumDashboard(object){

		var params = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : localStorage.getItem('cv5userRoleId'),
			"userType": localStorage.getItem('cv5usrType'),
			"userEmail" : localStorage.getItem('cv5userEmail'),
			"Identity":localStorage.getItem('userIdentity'),
			"userName" : object.username,
			//"tags" : "/footer",
			"tags" : object.clevertap_tag,
			"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
			"location":localStorage.getItem('location'),
			"specialities":localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType')
		};

		//alert('params-->'+JSON.stringify(params));      
		this.clevertap_object.recordEventWithNameAndProps("openedForum",params);

		var text_arr =[object.username, object.email, object.first_time];
        var text = JSON.stringify(text_arr);

  		var encode_string = window.btoa(text);

		if(object.user_type == 'Patient'){

		  var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
		}else{
		  var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
		}
	}

	*/


  redirectToForumDashboard(object,fromWhere){
  	if (fromWhere == 'From WhatsNew' || fromWhere == 'From Branch Link') {
			var text_arr =[object.username, object.email, object.first_time, object.forum_slug];
			var tags =  object.clevertap_tag;
			var nameOfClickedContent = object.forum_title;
		}else if (fromWhere =='From Video Details' || fromWhere =='From WhatsNew Details') {
			var text_arr =[object.username, object.email, object.first_time, object.forum_tags];
			var tags = object.forum_tags;
			var nameOfClickedContent = object.clickedItem ;
		}else{
			var text_arr =[object.username, object.email, object.first_time];
			var tags =  object.clevertap_tag;
			var nameOfClickedContent = object.clevertap_tag;
		}
		var text = JSON.stringify(text_arr);

  		var encode_string = window.btoa(text);

		var params = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : localStorage.getItem('cv5userRoleId'),
			"userType": localStorage.getItem('cv5usrType'),
			"userEmail" : localStorage.getItem('cv5userEmail'),
			"Identity":localStorage.getItem('userIdentity'),
			"userName" : object.username,
			"tags" : tags,
			"nameOfClickedContent": nameOfClickedContent,
			"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
			"location":localStorage.getItem('location'),
			"specialities":localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType')
		};

		this.clevertap_object.recordEventWithNameAndProps("openedForum",params);

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

	forVideoViewCount(userId,setCount,message){
		
		this.http_service_object.allVideoViewsbyuser(userId).subscribe(forViewCount => {

		var setVideoViewCount = parseInt(setCount);
		var totalViewd = _.reduce(forViewCount,
		function (memoizer, value) {
		   return memoizer + value.videoViewCount;
		}, 0);

		if (totalViewd % setVideoViewCount == 0){

			this.specialitiesPopup(message);
		}
		}, forViewCounterr => {
			//console.log('forViewCounterr->'+forViewCounterr);
		});
	}

	specialitiesPopup(mymessage){

		var checkLocationSpec = new Array("");
		this.database_provider_object.fetchAllData('new_user_info' , checkLocationSpec).then(locationData => {

		var newUserLocation  = locationData[0].location;
		var usr_specialities = locationData[0].specialities;

		if (usr_specialities == ''  || newUserLocation == '') {
		let confirmalert = this.alert_controller_object.create({
		     title: '',
		     message: '<p style="color:#1c1b1b;">'+mymessage+'</p>',
		     cssClass: 'google-popup-pin',
		     buttons: [
		       {
		         text: 'Yes',
		         handler: () => {
		           this.storage_object.get('user_logged_in').then((val) => {
		             var text_arr =[val];
		             var text = JSON.stringify(text_arr);
		             var encode_string = window.btoa(text);
		             var browser = this.in_app_browser_object.create('https://profile.cardiovisual.com/user/'+encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
		             browser.on('exit').subscribe(event => {
		               this.updateLocalDB();
		             });
		           });
		         }
		       }, {
		         text: 'No',
		         handler: () => {
		           //console.log("no clicked");
		         }
		       }
		     ],
		     enableBackdropDismiss: false // <- Here! :)
		   });
		   confirmalert.present();
		}
		});
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

}
