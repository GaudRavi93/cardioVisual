import {Injectable, Component, ViewChild, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, ToastController, Platform, LoadingController,Modal, ModalController, ModalOptions, MenuController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { CleverTap } from '@ionic-native/clevertap';
import { HttpService } from '../../services/HttpService';
import { File } from '@ionic-native/file';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { Storage } from '@ionic/storage';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { LoadingService } from '../../services/loading-service';
import { DatabaseProvider } from '../../providers/database/database';
import * as _ from 'underscore/underscore';
/**
 * Generated class for the SplashesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splashes',
  templateUrl: 'splashes.html',
})
export class SplashesPage {
	@ViewChild(Slides) slides: Slides;
	buttonAnime: boolean = false;
	snapshot: any;
	network_status : any;
	splash_video: any;
	splash_type: any;
	isLastSlide: boolean = false;
	type:any;	
	data:any;	
	dtStr:any;	
	userRoleType:any;	
	clevertapDate:any;
	path: any;	
	email: any;	
	username: any;	
	branckLINK: any;
	subTopisId: any;
	info_ItemId: any;
	timeDuration:any;	
	sponsor_type:any;	
	sponsoredName:any;
	updated_id:string;
  valid_ids:any;	
	localapi:any;	
	nav_params_object: NavParams;
	in_app_browser_object: InAppBrowser;
	clevertap_object: CleverTap;
	http_service_object: HttpService;
	file_object: File;
	screen_orientation_object: ScreenOrientation;
	modal_controllar_object: ModalController;
	network_check_object: NetworkCheckProvider;
	toast_controller_object: ToastController;
	storage_object: Storage;
	platform_object: Platform;
	loading_service_object: LoadingService;
	database_provider_object: DatabaseProvider;
	loading_controller_object: LoadingController;

	constructor(public navCtrl: NavController,public injector: Injector) {

		this.nav_params_object = injector.get<NavParams>(NavParams);
		this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
		this.clevertap_object = new CleverTap();
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.file_object = injector.get<File>(File);
		this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);
		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
		this.toast_controller_object = injector.get<ToastController>(ToastController);
		this.storage_object = injector.get<Storage>(Storage);
		this.platform_object = injector.get<Platform>(Platform);
		this.loading_service_object = injector.get<LoadingService>(LoadingService);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.loading_controller_object = injector.get<LoadingController>(LoadingController);

		this.localapi = this.http_service_object.getApi();
		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();
		//this.branckLINK = "https://app.cardiovisual.com/G7gT/qZjLCMGnnJ";
		this.path = this.file_object.dataDirectory;
		setTimeout(() => { 
			this.network_check_object.getPageAction('SplashesPage','start','',localStorage.getItem('cv5usrType'));
		}, 1000); 
	}
	ionViewWillLeave(){
		this.network_check_object.getPageAction('SplashesPage','end','',localStorage.getItem('cv5usrType'));
	}

	ionViewWillEnter(){

		this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
	}

	ionViewDidLoad() {
		this.type = this.nav_params_object.get('type');  	
		this.userRoleType = this.nav_params_object.get('userType');  	
		if (this.type == "PoweredBy") {
			this.snapshot = this.nav_params_object.get('powerdbyResult');
			this.timeDuration = 8000;
		}else{
			this.snapshot = this.nav_params_object.get('sponsordbyResult');
			this.timeDuration = 100;
		}

		if(this.snapshot.length == 1){
			this.isLastSlide = true;
			this.buttonAnime = true;
		}
		this.slides.lockSwipes(true); // this will disable the swipe in either ways
	}

	slideChanged() {
		let currentIndex = this.slides.getActiveIndex();
		
		if (this.slides.isEnd()) {
		  this.isLastSlide = true;
		  this.buttonAnime = true;
		} else {
		  this.isLastSlide = false;
		  this.buttonAnime = false;
		}
	}

	showComment(){


		this.navCtrl.push('BellNotificationListPage');
	}

	isUrl(s) {
		var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
		return regexp.test(s);
	}
  
	learn_more(slide_detail: any) {

		switch(slide_detail.contentType){

		  case 'video':
				var loading = this.loading_controller_object.create({
					//spinner: 'ios',
					spinner: 'dots',
					content:"<div class='custom-spinner-container'>Loading Informative Content for You. </div>",
					duration: this.timeDuration,
					enableBackdropDismiss: false
				});
				loading.present();

				setTimeout(() => {
					this.bannerClevertap(slide_detail, 'video');
				    this.splash_video =  slide_detail.contentUrl;
				    this.splash_type = 'video';
					
					var id = slide_detail.contentUrl;
					var is_URL = this.isUrl(id);
					if (this.isUrl(id) == true){
						var findIDQuery:string[] = new Array(" WHERE url='"+id+"' AND isActive = 1");
						this.database_provider_object.fetchAllData('new_sub_topics' , findIDQuery).then(findID_data => {
							if(findID_data.length > 0){
								var firstItem = _.first(findID_data);
								this.subTopisId = firstItem.id;
							}else{
								this.database_provider_object.fetchAllData('information' , findIDQuery).then(infoid_data => { 
									if(infoid_data.length > 0){
										var firstinfoItem = _.first(infoid_data);
										this.info_ItemId = firstinfoItem.id;
									}
								});
							}
						});
					}else{
						this.subTopisId = id
						this.info_ItemId = id
					}

					setTimeout(() => {
						var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+this.subTopisId);
						this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(subTopic_data => {
							if(subTopic_data.length > 0){
								setTimeout(() => {
									this.navCtrl.push('VideoDetailsPage', {pageItem:subTopic_data[0].name, coloR:subTopic_data[0].hexcodeBase, icondash:subTopic_data[0].iconName, data:subTopic_data[0], 'header':'show', 'request_from': 'video_list', previousPage:'SplashesPage','sendTo':'LearnMore' });
								}, 400);
							}else{
								var infoquerystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+this.info_ItemId);
								this.database_provider_object.fetchAllData('information' , infoquerystring).then(infodata => { 
									if(infodata.length > 0){
										this.navCtrl.push('InformationVideoDetailsPage', {pageItem:infodata[0].name, coloR:infodata[0].hexcodeBase, icondash:infodata[0].iconName, data:infodata[0], 'header':'show', 'request_from': 'video_list', previousPage:'SplashesPage','sendTo':'LearnMore' });
									}
								});
							} 
						});
					}, 400);
				}, this.timeDuration);

		    break;
			case 'web':
				const url = slide_detail.contentUrl ;   
				if(url.includes('http')){
					var ref = this.in_app_browser_object.create(url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
					this.bannerClevertap(slide_detail, 'web');

					ref.on('loadstop').subscribe((event) => {
            this.screen_orientation_object.unlock();
          });
          ref.on('exit').subscribe((event) => {            
            this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
          });

				}else{
					this.qnaSite({'slug':url, 'title':slide_detail.sponsoredName});
				}    
				break;
			case 'playlist':
				var loading = this.loading_controller_object.create({
				spinner: 'dots',
				content:"<div class='custom-spinner-container'>Loading Informative Content for You. </div>",
				duration: this.timeDuration,
				enableBackdropDismiss: false
				});
				loading.present();

		        var list_json = JSON.parse(slide_detail.contentUrl);
		        slide_detail.source = list_json.source;
		        slide_detail.list_values = list_json.list_values;
		        slide_detail.name = slide_detail.sponsorName;
		        
		        if(list_json.source == 'education'){
		        var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+list_json.list_values[0]+" AND isActive = 1");
		          this.database_provider_object.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
		            setTimeout(()=>{
		              
		              this.bannerClevertap(slide_detail, 'playlist');
		              this.navCtrl.push('WhatsNewDetailsPage', {data:slide_detail, type:'expert_playlist', index:0, 'header':'hide', 'display_playlist':topic_data[0],'sendTo':'Splash Playlist'});
		              this.loading_service_object.hide();

		            }, 2000);
		          });
		        }else if(list_json.source == 'information'){
		          var json_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+list_json.list_values[0]+" AND isActive = 1");
		          this.database_provider_object.fetchAllData('information' , json_query).then(topic_data => {
		            setTimeout(()=>{
		              
		              this.bannerClevertap(slide_detail, 'playlist');
		              this.navCtrl.push('WhatsNewDetailsPage', {data:slide_detail, type:'expert_playlist', index:0, 'header':'hide', 'display_playlist':topic_data[0],'sendTo':'Splash Playlist'});
		              this.loading_service_object.hide();

		            }, 2000);
		          });
		        }				        
				break;

			case 'whatsnew':

			  var network_type = this.network_check_object.getNetworkType();
			  if(network_type == 'none'){
			    this.toast_controller_object.create({
			      message: 'You are now offline.',
			      position: 'bottom',
			      duration: 5000
			    }).present();
			  } else {

			    var loading = this.loading_controller_object.create({
			      spinner: 'dots',
			      content:"<div class='custom-spinner-container'>Loading Informative Content for You. </div>",
			      duration: this.timeDuration,
			      enableBackdropDismiss: false
			    });
			    loading.present();

			    var whatsnew_id = JSON.parse(slide_detail.contentUrl);


			    var whatsnew_url = this.localapi+"/api/whatsnews/"+whatsnew_id;
			    this.http_service_object.fetchDataFromapi(whatsnew_url).subscribe(whtasNewData => {

			      switch(whtasNewData.template){
			        case 'tab_list':
			          this.bannerClevertap(slide_detail, 'whatsnew');

			          localStorage.setItem('segment_name', whtasNewData.source);
			          this.navCtrl.push('ItemDetailsPageTabs',{pageItem:whtasNewData.name, data:whtasNewData, request_from:'splash'});
			          break;
			        case 'expert_playlist':[]
			          //this.loading_service_object.show();
			          var list_json = JSON.parse(whtasNewData.list_values);
			          this.updated_id = '';

			          if(whtasNewData.source == 'education'){

			            var subtopic_url = this.localapi+'/api/subtopics?filter={"where":{"id":{"inq":['+list_json+']}}}';
			            this.http_service_object.fetchDataFromapi(subtopic_url).subscribe(topic_data => {
			            var topic_ids = _.pluck(topic_data, 'id');
			            var that = this;

			            for(let i=0;i<list_json.length; i++){

			              var list_item = parseInt(list_json[i]);
			              var n = topic_ids.includes(list_item);
			              if(n){
			                break;
			              }
			            }

			            this.valid_ids = list_item;

			            });
			          }else if(whtasNewData.source == 'information'){

			            var info_url = this.localapi+'/api/information?filter={"where": {"id": {"inq":['+ list_json+']}}}';
			            this.http_service_object.fetchDataFromapi(info_url).subscribe(topic_data => {

			              var topic_ids = _.pluck(topic_data, 'id');

			              var that = this;

			              for(let i=0;i<list_json.length; i++){
			                var list_item = parseInt(list_json[i]);
			                var n = topic_ids.includes(list_item);
			                if(n){
			                  break;
			                }
			              }
			              this.valid_ids = list_item;
			            });
			          }  

			          setTimeout(() =>{

			            if(whtasNewData.source == 'education'){

			              var subtopic_url1 = this.localapi+'/api/subtopics?filter[where][isActive]=1&filter[where][id]='+this.valid_ids;

			              this.http_service_object.fetchDataFromapi(subtopic_url1).subscribe(topic_data => {
			                this.bannerClevertap(slide_detail, 'whatsnew');
			                topic_data[0].isFavourite = 0;
			                this.navCtrl.push('WhatsNewDetailsPage', {data:whtasNewData, type:whtasNewData.template, index:0, 'header':'hide', 'display_playlist':topic_data[0]});
			                //this.loading_service_object.hide();
			              });
			              
			            }else if(whtasNewData.source == 'information'){

			              var info_url1 = this.localapi+'/api/information?filter[where][isActive]=1&filter[where][id]='+this.valid_ids;
			              this.http_service_object.fetchDataFromapi(info_url1).subscribe(topic_data => {
			                topic_data[0].isFavourite = 0;
			                this.bannerClevertap(slide_detail, 'whatsnew');

			                this.navCtrl.push('WhatsNewDetailsPage', {data:whtasNewData, type:whtasNewData.template, index:0, 'header':'hide', 'display_playlist':topic_data[0]});
			                //this.loading_service_object.hide();
			              });
			            }
			          }, 1000);
			        break;
			        case 'video_detail':
			          var list_json = JSON.parse(whtasNewData.list_values);
			          if(whtasNewData.source == 'education'){
			            var subtopic_url = this.localapi+'/api/subtopics?filter[where][isActive]=1&filter[where][id]='+list_json.Condition[0];

			            this.http_service_object.fetchDataFromapi(subtopic_url).subscribe(topic_data => {
			              topic_data[0].isFavourite = 0;
			              this.bannerClevertap(slide_detail, 'whatsnew');

			              this.navCtrl.push('WhatsNewDetailsPage', {data:whtasNewData, type: whtasNewData.template, index:0, 'header':'hide', 'display_data':topic_data[0], 'request_from':'splash'});
			              this.loading_service_object.hide();
			            });
			          }else if(whtasNewData.source == 'information'){

			            var info_url = this.localapi+'/api/information?filter[where][isActive]=1&filter[where][id]='+list_json.Expert[0];

			            this.http_service_object.fetchDataFromapi(info_url).subscribe(topic_data => {
			              topic_data[0].isFavourite = 0;
			              this.bannerClevertap(slide_detail, 'whatsnew');

			              this.navCtrl.push('WhatsNewDetailsPage', {data:whtasNewData, type: whtasNewData.template, index:0, 'header':'hide', 'display_data':topic_data[0], 'request_from':'splash'});
			              this.loading_service_object.hide();
			            });
			          }  
			        break;
			        case 'wordpress_blog':

			          var network_type = this.network_check_object.getNetworkType();
			          if(network_type == 'none'){
			            this.toast_controller_object.create({
			              message: 'You are now offline.',
			              position: 'bottom',
			              duration: 5000
			            }).present();
			          } else {
			            this.bannerClevertap(slide_detail, 'whatsnew');

			            if(whtasNewData.list_values == undefined || whtasNewData.list_values == 'undefined'){
			              var ref = this.in_app_browser_object.create(whtasNewData.blog_link, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

			              ref.on('loadstop').subscribe((event) => {
					            this.screen_orientation_object.unlock();
					          });
					          ref.on('exit').subscribe((event) => {            
					            this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
					          });

			            }else{
			              var values = JSON.parse(whtasNewData.list_values);
			              var ref = this.in_app_browser_object.create(values.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

			              ref.on('loadstop').subscribe((event) => {
					            this.screen_orientation_object.unlock();
					          });
					          ref.on('exit').subscribe((event) => {            
					            this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
					          });
			            }
			          }
			        break;
			      }
			    }); 
			  }
			break;
		}		
	}

	next(bannerdata: any) {

		this.slides.lockSwipes(false);


		if (this.type == "sponsordBy") {
			this.sponsor_type = "sponsorContent";
			this.sponsoredName = bannerdata.sponsorName;

		}else{
			this.sponsor_type = "PoweredByContent";
			this.sponsoredName = bannerdata.sponsorName;
		}

		var sponsoreparams = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : localStorage.getItem('cv5userRoleId'),
			"userType": localStorage.getItem('cv5usrType'),
			"userEmail" : localStorage.getItem('cv5userEmail'),
			"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
			"Identity":localStorage.getItem('userIdentity'),
			"location":localStorage.getItem('location'),
			"sponsor_type" : this.sponsor_type,
			"sponsoredName" : this.sponsoredName,
			//"pageFor" : "onSplashesPage",
			"specialities":localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType'),
			"contentType" : bannerdata.contentType
		};

		this.clevertap_object.recordEventWithNameAndProps("sponsorShown", sponsoreparams);


		if (this.isLastSlide) {
			if (this.type == "sponsordBy") {
				// code...
				this.navCtrl.setRoot('DashboardPage');
				// this.navCtrl.setRoot('WhatsNewPage');
			}else{
				this.navCtrl.setRoot('DashboardPage');
				// this.navCtrl.setRoot('WhatsNewPage');

			}			
		}else{
			this.slides.slideNext();
		}
		this.slides.lockSwipes(true);
	}

	skip(){
		this.bannerClevertap('', 'skip');
		this.navCtrl.setRoot('DashboardPage');
		// this.navCtrl.setRoot('WhatsNewPage');
	}

	vidEnded(){
		this.splash_type = 'splash';
	}

	bannerClevertap(banner_obj, userAction){

		if (this.type == "sponsordBy") {
			var sponsorType = "sponsorContent";
		}else{
			var sponsorType = "PoweredByContent";
		}
		var params = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"modelNo" : localStorage.getItem('modelNo'),
			"deviceversion" : localStorage.getItem('getDeviceversion'),
			"userRoleId" : localStorage.getItem('cv5userRoleId'),
			"userType": localStorage.getItem('cv5usrType'),
			"userEmail" : localStorage.getItem('cv5userEmail'),
			"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
			"location": localStorage.getItem('location'),
			"popOverId" : banner_obj.id,
			"sponsoredName" : banner_obj.sponsorName,
			"contentType" : banner_obj.contentType,
			"userAction": userAction,
			"specialities":localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType'),
			"sponsor_type" : sponsorType
		};
		
		this.clevertap_object.recordEventWithNameAndProps("popoverClick",params);
	}

	qnaSite(forum){
		this.platform_object.ready().then(() => {
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

						if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){

							this.email = data.email;
							this.username = data.username;
							if(this.email =='' || this.username == '' || this.username == null){
								const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
								myModal.present();

								myModal.onDidDismiss((data) => {
								console.log("I have dismissed.");
								});

								myModal.onWillDismiss((data) => {
								console.log("I'm about to dismiss");
								
								});
							}else{
								this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'user_type':'Patient'});  
							} 
						}else{
							this.email = data.email;
							this.username = data.username;
							if(this.email =='' || this.username == '' || this.username == null){
								const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
								myModal.present();

								myModal.onDidDismiss((data) => {
								console.log("I have dismissed.");
								
								});

								myModal.onWillDismiss((data) => {
								console.log("I'm about to dismiss");
								});
							}else{
								this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'user_type':'Doctor'});  
							}  
						}
					});  
				});
			}
		});    
	}

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
			"tags" : "From Splashes",
			"nameOfClickedContent": object.forum_title,
			"location":localStorage.getItem('location'),
			"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
			"specialities":localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType'),
		};

		this.clevertap_object.recordEventWithNameAndProps("openedForum",params);
		var text_arr =[object.username, object.email, object.first_time, object.forum_slug];
		var text = JSON.stringify(text_arr);

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
}
