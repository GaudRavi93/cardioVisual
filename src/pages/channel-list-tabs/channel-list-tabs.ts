import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from 'underscore/underscore';
import { HttpService } from '../../services/HttpService';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { DatabaseProvider } from '../../providers/database/database';
import { File } from '@ionic-native/file';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { ToastService } from '../../services/toast-service';
import { Storage } from '@ionic/storage';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';
import { CleverTap } from '@ionic-native/clevertap'; 
import {ScreenOrientation} from '@ionic-native/screen-orientation';

/**
 * Generated class for the ChannelListTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-list-tabs',
  templateUrl: 'channel-list-tabs.html',
})
export class ChannelListTabsPage {
	localapi:any;
  dtStr:any;
  clevertapDate:any;
	events: any = {};
	channelsListDatashown:any;
  channel_resultData:any;
	chnnl_Data: any;
	channelsListlength: any;
	shownContent: string;
	download_status:string = 'complete';
	userdata: any;
	isDownloading: any;
	perc1:any;
  channelUrlpath: string;
  path:string;
  chnnl_Id:any;
  chnnl_Name:any;
  imgSHownOnline:any;
  category_data:any;
  topic_data:any;
  nav_params_object: NavParams;
  http_object: Http;
  http_service_object: HttpService;
  toast_controller_object: ToastController;
  database_provider_object: DatabaseProvider;
  file_transfer_object: FileTransfer;
  file_object: File;
  platform_object: Platform;
  network_check_object: NetworkCheckProvider;
  alert_controller_object: AlertController;
  toast_service_object: ToastService;
  storage_object: Storage;
  video_share_provider_object: VideosharesocialProvider;
  in_app_browser_object: any;
  clevertap_object: any;
  screen_orientation_object: ScreenOrientation;

	constructor(public navCtrl: NavController, public injector: Injector) {

    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.http_object = injector.get<Http>(Http);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.toast_controller_object = injector.get<ToastController>(ToastController);
    this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
    this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
    this.file_object = injector.get<File>(File);
    this.platform_object = injector.get<Platform>(Platform);
    this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.alert_controller_object = injector.get<AlertController>(AlertController);
    this.toast_service_object = injector.get<ToastService>(ToastService);
    this.storage_object = injector.get<Storage>(Storage);
    this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);
    this.in_app_browser_object = new InAppBrowser();
    this.clevertap_object = new CleverTap();
    this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);


		this.localapi = this.http_service_object.getApi();
    this.dtStr = this.http_service_object.dtStr();
    this.clevertapDate = this.http_service_object.clevertapDate();
    this.path = this.file_object.dataDirectory;
    this.imgSHownOnline = this.network_check_object.getNetworkType();
		this.chnnl_Data =  this.nav_params_object.get('channelDATA');
		this.shownContent =  this.nav_params_object.get('shownContent');
 
		var chnnlId = this.chnnl_Data.id;
    this.chnnl_Id = this.chnnl_Data.id;
    var chnnlName = this.chnnl_Data.name;
    this.chnnl_Name = this.chnnl_Data.name;
    var othersTabData = [
      {"id":13,"otherType":"weburl"},
      {"id":14,"otherType":"weburl"},
      {"id":15,"otherType":"qrcode"}
    ];

    var topic_querystring:string[] = new Array("");
    this.database_provider_object.fetchAllData('new_topics' , topic_querystring).then(topic_data => { 
      this.topic_data = topic_data;
    });

    var category_querystring:string[] = new Array("");
    this.database_provider_object.fetchAllData('new_category' , category_querystring).then(cat_data => { 
      this.category_data = cat_data;
    });

		var that = this;

		this.events ={
			'onItemClick': function (item: any) {
				
        var category = _.where(that.category_data, {id:item.categoryId});
        var topic = _.where(that.topic_data, {id:item.topicId});
        var topic_name = '';
        var category_name = '';
        if(topic.length > 0){
          topic_name = topic[0].name;
        }
        if(category.length > 0){
          category_name = category[0].name;
        }
        
          var params = {
            "record_time" : that.dtStr,
            "record_date" : that.clevertapDate,
            "os" : localStorage.getItem('getDevicePlatform'),
            "modelNo" : localStorage.getItem('modelNo'),
            "deviceversion" : localStorage.getItem('getDeviceversion'),
            "userType": localStorage.getItem('cv5usrType'),
            "userID" : localStorage.getItem('userliveId'),
            "Identity":localStorage.getItem('userIdentity'),
            "location":localStorage.getItem('location'),
            "specialities":localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
            "channel_name": localStorage.getItem('channel_name'),
            "channel_id" : localStorage.getItem('channel_id'),
            "itemName":item.name,
            "itemType":item.subTopicType,
            "categoryContentFor":"Channels"
          };
          
          that.clevertap_object.recordEventWithNameAndProps("clickedOnCategory", params);

          var network_type = that.network_check_object.getNetworkType();
          var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+item.id);
          that.database_provider_object.fetchAllData('information' , querystring).then(data => { 
            switch(true){
              case(item.subTopicType == 'video' && network_type == 'none' && data[0].localUrl == ''):
                that.toast_controller_object.create({
                        message: 'This video requires internet connection.',
                        position: 'bottom',
                        duration: 5000
                }).present();
                break;
              case(item.subTopicType == 'video' && network_type == 'none' && data[0].localUrl != ''):
                navCtrl.parent.parent.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'Channel' });
                break;  
              case (item.subTopicType == 'video' && network_type != 'none' && data[0].localUrl == ''):
              case (item.subTopicType == 'video' && network_type != 'none' && data[0].localUrl != ''):

                var params2 = {
                    "record_time" : that.dtStr,
                    "record_date" : that.clevertapDate,
                    "os" : localStorage.getItem('getDevicePlatform'),
                    "modelNo" : localStorage.getItem('modelNo'),
                    "deviceversion" : localStorage.getItem('getDeviceversion'),
                    "userRoleId" : localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "topic_name": topic_name,
                    "category_name" : category_name,
                    "userEmail" : localStorage.getItem('cv5userEmail'),
                    "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                    "file" : item.name,
                    "videoName" : item.videoName,
                    "location":localStorage.getItem('location'),
                    "specialities":localStorage.getItem('usrSpecialities'),
                    "clickedVideoContentFor":"Information",
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                  };
       
                that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params2);

                navCtrl.parent.parent.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'Channel' });
                break;
              case (item.subTopicType == 'image' && network_type != 'none' && data[0].localUrl == ''):
              case (item.subTopicType == 'image' && network_type == 'none' && data[0].localUrl == ''):
                that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.name, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
                break;
              case (item.subTopicType == 'image' && network_type == 'none' && data[0].localUrl != ''):
              case (item.subTopicType == 'image' && network_type != 'none' && data[0].localUrl != ''):
                that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.localUrl , drawOnImgTitle:item.name, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType , video_Name:item.videoName, local_Url:'localUrl' });
                break;
              case (item.subTopicType == 'document' && network_type == 'none' && data[0].localUrl == ''):
              case (item.subTopicType == 'document' && network_type == 'none' && data[0].localUrl != ''):
                 that.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
                break;
              case (item.subTopicType == 'document' && network_type != 'none' && data[0].localUrl != ''):
                that.channelUrlpath = item.url;
                var ref = that.in_app_browser_object.create(that.file_object.dataDirectory+item.localUrl, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

                ref.on('loadstop').subscribe((event) => {
                  that.screen_orientation_object.unlock();
                });
                ref.on('exit').subscribe((event) => {            
                  that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                });
                break;
              case (item.subTopicType == 'document' && network_type != 'none' && data[0].localUrl == ''):
                var ref = that.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

                ref.on('loadstop').subscribe((event) => {
                  that.screen_orientation_object.unlock();
                });
                ref.on('exit').subscribe((event) => {            
                  that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                });
                break;
              case (item.subTopicType == 'other' && network_type == 'none'):
                that.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
                break;
              case (item.subTopicType == 'other' && network_type != 'none'  && item.otherType == 'link'):
                that.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');
                break;
              case (item.subTopicType == 'other' && network_type != 'none'  && item.otherType == 'qr_code'):
                 that.navCtrl.parent.parent.push('QrcodePage',{previousPage:'channellist',qrUrl:item.url});
                break;
            }
          });
			},
			'onShare': function (item: any) {

				event.stopPropagation();
				that.video_share_provider_object.shareSingleVideo(item);
			},
			'onFavorite': function (item: any) {
				event.stopPropagation();
        that.markasFavorite(item)

			},
			'onMultipleDownload': function (item: any) {
				event.stopPropagation();
				
		        var canShare = localStorage.getItem('canDownloadAccess');

		        // code...
		        if(canShare == 'true'){

		          that.platform_object.ready().then(() => {
		            var network_type = that.network_check_object.getNetworkType();

		            if(network_type == 'none'){
		             
		              that.toast_controller_object.create({
		                  message: 'You are now offline.',
		                  position: 'bottom',
		                  duration: 5000
		                }).present();

		            } else {

		              var downloadque = localStorage.getItem('Downloadque');

		              if(downloadque == null || downloadque == ''){
		                downloadque = item.id;
		              }else{

		                downloadque = downloadque + ','+item.id;
		              }
		              
		              localStorage.setItem('Downloadque', downloadque);
		              //_.contains([1, 2, 3], 3);
		              
		              that.isDownloadVideoMultiple();

		            }

		          });               
		        }else{

		          var confirmPopup = that.alert_controller_object.create({
		            title: '',
		            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
		            enableBackdropDismiss: true,
		            buttons: [{ 
		                text: 'Upgrade',
		                handler: () => {
		                  that.navCtrl.parent.parent.push('UpgradePlanPage');
		                }}
		            ]
		          });
		          confirmPopup.present();

		        }
			},
			'onImageCantDownload': function (item: any) {
				that.imageCantDownload();
			},
		}; 
  }

	ionViewDidLoad() {
	  console.log('ionViewDidLoad ChannelListTabsPage');
    setTimeout(() => {
      var querystring:string[] = new Array(" WHERE name='"+this.chnnl_Name+"' AND type='channel'");
      this.database_provider_object.fetchAllData('custom_listing', querystring).then(custom_listing_data => {   
      console.log('custom_listing_data--->'+JSON.stringify(custom_listing_data));                  
        var list_json_value = JSON.parse(custom_listing_data[0].list_values);
        console.log('list_json_value--->'+JSON.stringify(list_json_value));
        var json_variable = '';
        switch(this.shownContent){
          case 'video':
            json_variable = list_json_value.video;
            break;
          case 'document':
            json_variable = list_json_value.document;
            break;
          case 'image':
            json_variable = list_json_value.image;
            break;
          case 'other':
            json_variable = list_json_value.other;
            break;      
        }
        console.log('this.shownContent --->'+JSON.stringify(this.shownContent));
        var that = this;
        var custom_data = [];
        _.each(json_variable,function(value,index){
          console.log('value --->'+JSON.stringify(value));
          var json_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND information.subTopicType='"+that.shownContent+"'");
           console.log('json_query --->'+JSON.stringify(json_query));
          that.database_provider_object.fetchAllData('information' , json_query).then(topic_data => {
            if(topic_data.length > 0){
              custom_data.push(topic_data[0]);
            }
          });
        });

        setTimeout(() => {
          this.channelsListDatashown = custom_data;
        }, 200); 

      });
    }, 200); 
	}

	comingsoon(){
		this.toast_controller_object.create({
			message: 'Coming Soon',
			position: 'middle',
			duration: 1000
		}).present();
	}


	onEvent(event: string, item: any, e: any) {
		if (e) {

			e.stopPropagation();
		}
		if (this.events[event]) {
			this.events[event](item);
		}
	}

	isDownloadVideoMultiple() {

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();

      if(network_type == 'none'){
       
        this.toast_controller_object.create({
            message: 'You are now offline.',
            position: 'bottom',
            duration: 5000
          }).present();

      } else {

        var que_ids = localStorage.getItem('Downloadque');
        var progress_ids_arr = que_ids.split(',').map(Number);
        progress_ids_arr = _.uniq(progress_ids_arr);
        que_ids = progress_ids_arr.toString();
        localStorage.setItem('Downloadque', que_ids);
        var progress_id = (progress_ids_arr[0] == 0)?progress_ids_arr[0]:progress_ids_arr[0];

            this.download_status = 'inprogress';

            var userCondition = new Array("");
            this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
              this.userdata = user_data[0];
            });

            var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id IN ("+progress_id+")");

            this.database_provider_object.fetchAllData('information' , querystring).then(data => {
              
              const fileTransfer: FileTransferObject = this.file_transfer_object.create();
              
              var item = data[0];
              
                if(item.localUrl != ''){

                  var new_ids_arr = que_ids.split(',').map(Number);
                  var test_arr = [];
                  _.each(new_ids_arr, function(value, key){
                    if(value != item.id){
                      test_arr.push(value);
                    }
                  });
                  que_ids = test_arr.toString();
                  localStorage.setItem('Downloadque', que_ids);
                  
                  this.toast_service_object.presentToast('"'+item.name +'" already downloaded.');

                  if(que_ids == ''){
                    localStorage.setItem('Downloadque', '');
                  }
                  this.download_status = 'complete';

                }else{

                  this.toast_service_object.mypresentToast('Downloading: "'+item.name +'"',2000);


                  var filename = item.url.split("/").pop();
                  var queue_data = {
                    download_url: item.url,
                    videoName: item.videoName,
                    id: item.id,
                    categoryId: item.categoryId,
                    subTopicType: item.subTopicType
                  };

                  fileTransfer.onProgress((progressEvent) => {
                    if (progressEvent.lengthComputable) {
                      this.isDownloading = true;

                      var perc = (progressEvent.loaded / progressEvent.total)*100;

                      this.perc1 = perc.toFixed( 1 );

                      var loader = document.getElementById("progressBar_"+item.id);
                      loader.style.background = '#fff';
                      loader.innerHTML = this.perc1+'%';

                      var loader1 = document.getElementById("static_download_prog");
                      loader1.innerHTML = 'Downloading is in progress...';
                      loader1.style.padding = '10px';
                      loader1.style.display = 'block';


                      if(this.perc1 == 100){
                        loader.innerHTML = '';
                        loader.style.background = '';
                        loader1.innerHTML = '';
                        loader1.style.padding = '';
                        loader1.style.display = '';
                      }
                    }
                  });

                  fileTransfer.download(item.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {

                    var video_url = 'V2CardioMedia/'+filename;

                    var querystring:string[] = new Array(" UPDATE information_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
                    this.database_provider_object.updateData(querystring);

                    var iconfilename = item.iconUrl.split("/").pop(); 
                    console.log('iconfilename--->'+iconfilename);
                    this.downloadfile(item.iconUrl, iconfilename, item.id);
                    this.downloadapi(item.id, this.userdata.liveId);
                    this.toast_service_object.mypresentToast('Finished downloading: "'+item.name +'"',2000);
                    this.download_status = 'complete';

                    var loader3 = document.getElementById("download_"+item.id);
                    loader3.classList.add("active");
                    
                    if(item.downloaded == 0) item.downloaded = 1;
                    this.download_status = 'complete';

                    
                  },

                  (error) => {
                    this.toast_service_object.presentToast("Download failed! please try again.");
                  });

                  que_ids = localStorage.getItem('Downloadque');
                  var new_ids_arr = que_ids.split(',').map(Number);
                  var test_arr = [];
                  _.each(new_ids_arr, function(value, key){
                    if(value != item.id){
                      test_arr.push(value);
                    }
                  });

                  que_ids = test_arr.toString();
                  localStorage.setItem('Downloadque', que_ids);
                  this.download_status = 'complete';
                }

                if(que_ids != ''){
                  this.isDownloadVideoMultiple();
                }else if(que_ids == ''){
                  localStorage.setItem('Downloadque', '');
                }

            });

           }
      });
  }

  downloadfile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.file_object.dataDirectory+'icons/'+ name).then((entry) => { 

      var icon_url = 'icons/'+ name;

      var querystring:string[] = new Array(" UPDATE information_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
      this.database_provider_object.updateData(querystring);
    });  
  }


  //insert query to api database
  downloadapi(groupid,userid) {
    var post_url = this.http_service_object.getPosturl('downloads'); 
    this.http_object.post(post_url, {"cardiovisualUserId" : userid, "informationId" : groupid }).subscribe(data => {
      var response = JSON.parse(data['_body']);
      console.log('response--->'+JSON.stringify(response));
      var response_data = JSON.stringify(response);
    }, error => {
      console.log(error);
    }); 
  }


  markasFavorite(group){
   this.platform_object.ready().then(() => {
    var network_type = this.network_check_object.getNetworkType();
    if(network_type == 'none'){

      this.toast_controller_object.create({
        message: 'You are now offline.',
        position: 'bottom',
        duration: 5000
      }).present();
    } else {

      
   if(group.isFavourite == 0 ) {
         
      this.storage_object.get('user_logged_in').then((val) => {
   
       this.database_provider_object.setinformationFavorites(val, group.id);
       this.toast_service_object.presentToast("Added to Favourites.");

     });
    } else {
      	 this.storage_object.get('user_logged_in').then((val) => {
           
         this.database_provider_object.setinformationFavorites(val, group.id); 
         this.toast_service_object.presentToast("Removed from Favourites.");
       });
    }

    group.isFavourite = !group.isFavourite 

    }
   });
  }

  imageCantDownload(){
    this.toast_service_object.mypresentToast("Only videos can be downloaded.",2000);
  }

}
