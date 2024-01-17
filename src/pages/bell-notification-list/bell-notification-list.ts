import { Component,ChangeDetectorRef,NgZone, ViewChild, Injector } from '@angular/core';
import {Platform, IonicPage, NavController, NavParams, reorderArray, PopoverController, Content , ToastController, Modal, ModalController, ModalOptions,AlertController} from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';

import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../../services/toast-service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { DatabaseProvider } from '../../providers/database/database';
import { File } from '@ionic-native/file';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import * as _ from 'underscore/underscore';
import { CleverTap } from '@ionic-native/clevertap';
import { LoadingService } from '../../services/loading-service';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the BellNotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bell-notification-list',
  templateUrl: 'bell-notification-list.html',
})
export class BellNotificationListPage {
	groceries: any;
	ladder: any;
	isRecording = false;
	isListening: boolean = false;
 	 matches: Array<String>;

 	data: any = {};	
	events: any = {};
	@ViewChild(Content)
    content: Content;
	dtStr:any;
	clevertapDate:any;
	datalength2:any;
	datalength3:any;
	totalLength1:any;
	userTYPE:any;
	email: string = '';
	username: string;
	platform_object: Platform;
	popover_controller_object: PopoverController;
	speech_recognition_object: SpeechRecognition;
	in_app_browser_object: any;
	database_provider_object: DatabaseProvider;
	network_check_object: NetworkCheckProvider;
	toast_controller_object: ToastController;
	modal_controllar_object: ModalController;
	clevertap_object: any;
	loading_service_object: LoadingService;
	screen_orientation_object: ScreenOrientation;
	storage_object: Storage;
	alert_controller_object: AlertController;
	http_service_object: HttpService;

	constructor(public navCtrl: NavController, public injector: Injector) {

		this.platform_object = injector.get<Platform>(Platform);
		this.popover_controller_object = injector.get<PopoverController>(PopoverController);
		this.speech_recognition_object = injector.get<SpeechRecognition>(SpeechRecognition);
		this.in_app_browser_object = new InAppBrowser();
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
		this.toast_controller_object = injector.get<ToastController>(ToastController);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);
		this.clevertap_object = new CleverTap();
		this.loading_service_object = injector.get<LoadingService>(LoadingService);
		this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
		this.storage_object = injector.get<Storage>(Storage);
		this.alert_controller_object = injector.get<AlertController>(AlertController);
		this.http_service_object = injector.get<HttpService>(HttpService);

		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();
		let that = this;
		this.userTYPE = localStorage.getItem('cv5usrType');

		this.events ={
			'onItemClick': function (item: any) {  
		        var params = {
		          "record_time" : that.dtStr,
		          "record_date" : that.clevertapDate,
		          "os" : localStorage.getItem('getDevicePlatform'),
		          "modelNo" : localStorage.getItem('modelNo'),
		          "deviceversion" : localStorage.getItem('getDeviceversion'),
		          "userRoleId" : localStorage.getItem('cv5userRoleId'),
		          "userType": localStorage.getItem('cv5usrType'),
		          "userEmail" : localStorage.getItem('cv5userEmail'),
		          "location":localStorage.getItem('location'),
		          "specialities":localStorage.getItem('usrSpecialities'),
		          "title": item.title,
		          "ContentFor":item.contentFor,
		          "contentType":item.contentType,
		          "subSpecialities": localStorage.getItem('cv5usrRolesubType')
		        };

		        that.clevertap_object.recordEventWithNameAndProps("clickedBellNotification", params); 

				if (item.contentType == 'video') {
				
					switch (item.template) {

						case "expert_playlist":
							var list_json = JSON.parse(item.list_values);
							that.loading_service_object.show();
							if(item.contentFor == 'education'){
								item['type'] = 'expert_playlist';
								item['source'] = 'education';
								//item['list_values'] = item.contentList;
					          var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+list_json[0]+" AND isActive = 1");
					          that.database_provider_object.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
					            setTimeout(()=>{
					              that.navCtrl.push('WhatsNewDetailsPage', {data:item, type:item.template, index:0, 'header':'hide', 'display_playlist':topic_data[0]});
					              that.loading_service_object.hide();

					            }, 2000);
					          });
					        }else if(item.contentFor == 'information'){
					         	item['type'] = 'expert_playlist';
								item['source'] = 'education';
								//item['list_values'] = item.contentList;	
					          var json_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+JSON.parse(item.contentList)+" AND isActive = 1");
					          that.database_provider_object.fetchAllData('information' , json_query).then(topic_data => {
					            setTimeout(()=>{
					              that.navCtrl.push('WhatsNewDetailsPage', {data:item, type:item.template, index:0, 'header':'hide', 'display_playlist':topic_data[0]});
					              that.loading_service_object.hide();
					            }, 2000);
					          });
					        }
							break;
						case "video_detail":
							var list_json = JSON.parse(item.list_values);
							var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+list_json[0]);
							that.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => {
								that.navCtrl.push('VideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list'});
							}); 

							break;
						case "tab_list":
							item['source'] = item.contentFor;
							//item['list_values'] = item.contentList;	
							localStorage.setItem('segment_name', item.contentFor);
							that.navCtrl.push('ItemDetailsPageTabs',{pageItem:item.title, data:item, request_from:'whatsnew_page'});
							break;
							
						default:
							// code...
							break;
					}
				}else if (item.contentType == 'image') {

					var imgUrl = JSON.parse(item.list_values);

					var ref = that.in_app_browser_object.create(imgUrl.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

					ref.on('loadstop').subscribe((event) => {
						that.screen_orientation_object.unlock();
					});
					ref.on('exit').subscribe((event) => {            
						that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
					});
				}else if (item.contentType == 'link' && item.template== 'forum'){
					var values = JSON.parse(item.list_values);

					that.qnaSite({'slug':values.slug, 'title':item.name}, 'From WhatsNew Banner');

				}else if (item.contentType == 'link' || item.contentType == 'pdf') {
					var contentUrl = JSON.parse(item.list_values);
					var ref = that.in_app_browser_object.create(contentUrl.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

					ref.on('loadstop').subscribe((event) => {
						that.screen_orientation_object.unlock();
					});
					ref.on('exit').subscribe((event) => {            
						that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
					});

				}else if (item.contentType == 'draw_on_images') {
					var imgUrl = JSON.parse(item.list_values);
					that.navCtrl.push('DrawonPage', { drawnurl:imgUrl.url , drawOnImgTitle:item.title, drawnCopyright:item.title, drawnSubtopicType:'image'});
				}else if (item.contentType == 'qr_code') {
					var itmUrl = JSON.parse(item.list_values);
					that.navCtrl.push('QrcodePage',{previousPage:'channellist',qrUrl:itmUrl.url});
				}

				var querystring:string[] = new Array("UPDATE freshNotificationList SET messageSeen = 1 WHERE notification_id = "+item.notification_id);
				that.database_provider_object.updateData(querystring);				  
			},
		};
	}

	presentPopover(myEvent) {
		let popover = this.popover_controller_object.create('PopoverPage', {}, {cssClass: 'custom-popover'})

		popover.present({
			ev: myEvent,
			animate: false
		});
	}

	onEvent(event: string, item: any, e: any) {
		if (e) {
			e.stopPropagation();
		}
		if (this.events[event]) {
			this.events[event](item);
		}
	}
	toggleGroup(group: any) {
		group.show = !group.show;
	}

	isGroupShown(group: any) {
		return group.show;
	}

	playVideoWithMsg(path, CopyRightMsg) {

		//let options: StreamingVideoOptions = {

	} 


	ionViewWillEnter(){
		this.data.items = [];
		var notiCondition =  new Array("WHERE isActive=1 ORDER BY position DESC");
		this.database_provider_object.fetchAllData('freshNotificationList' , notiCondition).then(notiresult => {
			var maxValObject = _.max(notiresult, 'notification_id');

			if (maxValObject.notification_id) {
				localStorage.setItem('notificationID', maxValObject.notification_id);
			}
			this.data.items = notiresult;

			setTimeout(() =>{
				this.totalLength1 = _.size(this.data.items);
			},500); 		
		});	
	}

	goBack() {
		this.navCtrl.pop();
	}

	clearAll(){
		let clearPopup = this.alert_controller_object.create({
	        title: 'Clear all',
	        message: 'Are you sure you want to delete all notifications?',
	        buttons: [
	            {
	                text: 'Cancel',
	                handler: () => {
	                }
	            },
	            {
	                text: 'Yes',
	                handler: () => {
	                   this.database_provider_object.deleteRecords("DELETE FROM freshNotificationList");
	                   let lastNotiID = localStorage.getItem('notificationID');
	                   localStorage.setItem('notificationID', lastNotiID);
					    this.data.items = [];
						var notiCondition =  new Array("");
						this.database_provider_object.fetchAllData('freshNotificationList' , notiCondition).then(notiresult => {
							this.data.items = notiresult;
							setTimeout(() =>{
								this.totalLength1 = _.size(this.data.items);
							},500); 		
						});
	                }
	            }
	        ]
	    });
	    clearPopup.present();
	}

	async hasPermission():Promise<boolean> {
		try {
			const permission = await this.speech_recognition_object.hasPermission();
			return permission;
		} catch(e) {
			console.log(e);
		}
	}

	async getPermission():Promise<void> {
		try {
		  this.speech_recognition_object.requestPermission();
		} catch(e) {
		  console.log(e);
		}
	}

	qnaSite(forum,tagTYPE){
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

				      var confirmPopup = this.alert_controller_object.create({
				      title: '',
				      message: '<h4 style="color:#ffffff; text-align:center;"></h4><p style="color:#ffffff; text-align:center;font-weight:700;">Only for Heathcare professionals.</p>',
				      enableBackdropDismiss: true,
				      buttons: ['Dismiss']
				      });
				      confirmPopup.present();
				    }else{
				      this.email = data.email;
				      this.username = data.username;
				      if(this.email =='' || this.username == '' || this.username == null){

				        const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
				        myModal.present();

				        myModal.onDidDismiss((data) => {
				        });

				        myModal.onWillDismiss((data) => {
				        });
				      }else{
				      this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'clevertap_tag': tagTYPE});
				      }  
				    }
				  }, err => {
				    console.log(err);
				  });  
				});
			}
		});    
	}

	redirectToForumDashboard(object){

		var text_arr =[object.username, object.email, object.first_time, object.forum_slug];
		var text = JSON.stringify(text_arr);

		var encode_string = window.btoa(text);
		const ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app'); 

		ref.on('loadstop').subscribe((event) => {
			this.screen_orientation_object.unlock();
		});
		ref.on('exit').subscribe((event) => {            
			this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
		});
	}
}
