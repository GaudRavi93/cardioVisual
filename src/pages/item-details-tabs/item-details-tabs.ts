import { Component,Input, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform,AlertController,LoadingController} from 'ionic-angular';
import { IService } from '../../services/IService';

import { HttpService } from '../../services/HttpService';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage'; 
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import * as _ from 'underscore/underscore';
import { DatabaseProvider } from '../../providers/database/database';
import { File } from '@ionic-native/file';
import { ToastService } from '../../services/toast-service';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer'; 
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';

@IonicPage()
@Component({
  templateUrl: 'item-details-tabs.html'
})
export class ItemDetailsPageTabs {

  public isSearchbarOpened = false;
  @Input() events: any;
  page: any;
  iconDash: any;
  pageitem: any;
  channelpageitem: any;
  colorDash: any;
  sanjeev: any;
  service: IService;
  params: any = {};
  info: any = {};
  title: any = {};
  sub_topic_data: any= {};
  headercolor: any;
  network_status : any;
  parent_tab: string = "education";
  search:string = '';
  orientation: string;
  show_info_tab: string;
  tabTitle:any;
  id:any;
  request_from:string;
  data: any;
  userdata: any;
  isDownloading: any;
  perc1:any;
  download_again: any = [];
  download_status: string = 'complete';
  imgSHownOnline:any;
  nav_params_object: NavParams;
  http_service_object: HttpService;
  http_object: Http;
  network_object: Network;
  toast_controller_object: ToastController;
  storage_object: Storage;
  platform_object: Platform;
  network_check_object: NetworkCheckProvider;
  database_provider_object: DatabaseProvider;
  toast_service_object: ToastService;
  file_transfer_object: FileTransfer;
  video_share_provider_object: VideosharesocialProvider;
  alert_controller_object: AlertController;
  file_object: File;
  loading_controller_object: LoadingController;
  userType: String = localStorage.getItem('cv5usrType');

  constructor(public navCtrl: NavController,public injector: Injector) {

    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.http_object = injector.get<Http>(Http);
    this.network_object = injector.get<Network>(Network);
    this.toast_controller_object = injector.get<ToastController>(ToastController);
    this.storage_object = injector.get<Storage>(Storage);
    this.platform_object = injector.get<Platform>(Platform);
    this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
    this.toast_service_object = injector.get<ToastService>(ToastService);
    this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
    this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);
    this.alert_controller_object = injector.get<AlertController>(AlertController);
    this.file_object = injector.get<File>(File);
    this.loading_controller_object = injector.get<LoadingController>(LoadingController);

    this.imgSHownOnline = this.network_check_object.getNetworkType();
    this.request_from = this.nav_params_object.get("request_from");
    this.pageitem = this.nav_params_object.get("pageItem");
    this.id = this.nav_params_object.get("id"); 
    this.sub_topic_data = this.nav_params_object.get("data");

    this.network_status = 'connected';
    this.network_object.onDisconnect().subscribe(() => {
      this.network_status = 'not_connected';
    });

    this.network_object.onConnect().subscribe(() => {
      this.network_status = 'connected';
    });

    switch(true){
      case(this.request_from == 'custom_playlist' && this.pageitem === 'channels'):
        this.data = this.sub_topic_data;
        this.data.playlist_id = this.data.id;
        var list_values = JSON.parse(this.data.list_values);
        var education_id = list_values.education;
        var information_id = list_values.information;
        var that = this;
        var custom_data_1 = [];
        var custom_data_2 = [];
        _.each(education_id, function(value, key){
          var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");
          that.database_provider_object.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
            topic_data[0].show = 1;
            custom_data_1.push(topic_data[0]);
          });
        });
        this.data.education_item = custom_data_1;
        
        _.each(information_id, function(value, key){
        
          var json_query:string[] = new Array(" join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1"); 
          that.database_provider_object.fetchAllData('information' , json_query).then(info_data => {
            info_data[0].show = 1;
            custom_data_2.push(info_data[0]);
          });
        });
        this.data.information_item = custom_data_2;
        this.channelpageitem = this.nav_params_object.get("pageItem1");
        this.tabTitle = this.nav_params_object.get("tabTitle");

        this.iconDash = this.nav_params_object.get("icondash");
        this.colorDash = this.nav_params_object.get("coloR");
      
        this.headercolor = this.pageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';

        this.headercolor = this.channelpageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';
        this.headercolor = '';
        break;
      case(this.request_from == 'custom_playlist' && this.pageitem == 'Heart Health'):
        this.data = this.sub_topic_data;
        this.data.playlist_id = this.data.id;
        var list_values = JSON.parse(this.data.list_values);
        var education_id = list_values.education;
        var information_id = list_values.information;
        var that = this;
        var custom_data_1 = [];
        var custom_data_2 = [];
        _.each(education_id, function(value, key){
          var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");
          that.database_provider_object.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
            topic_data[0].show = 1;
            custom_data_1.push(topic_data[0]);
          });
        });
        this.data.education_item = custom_data_1;
        
        _.each(information_id, function(value, key){
        
          var json_query:string[] = new Array(" join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1"); 
          that.database_provider_object.fetchAllData('information' , json_query).then(info_data => {
            info_data[0].show = 1;
            custom_data_2.push(info_data[0]);
          });
        });
        this.data.information_item = custom_data_2;
        this.channelpageitem = this.nav_params_object.get("pageItem1");
        this.tabTitle = this.nav_params_object.get("tabTitle");

        this.iconDash = this.nav_params_object.get("icondash");
        this.colorDash = this.nav_params_object.get("coloR");
      
        this.headercolor = this.pageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';

        this.headercolor = 'health_header';
        break;  
      case(this.request_from == 'custom_playlist' && this.pageitem != 'channels'):
        this.data = this.sub_topic_data;
        this.data.playlist_id = this.data.id;
        var list_values = JSON.parse(this.data.list_values);
        var education_id = list_values.education;
        var information_id = list_values.information;
        var that = this;
        var custom_data_1 = [];
        var custom_data_2 = [];
        _.each(education_id, function(value, key){
          var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");
          that.database_provider_object.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
            topic_data[0].show = 1;
            custom_data_1.push(topic_data[0]);
          });
        });
        this.data.education_item = custom_data_1;
        
        _.each(information_id, function(value, key){
        
          var json_query:string[] = new Array(" join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1"); 
          that.database_provider_object.fetchAllData('information' , json_query).then(info_data => {
            info_data[0].show = 1;
            custom_data_2.push(info_data[0]);
          });
        });
        this.data.information_item = custom_data_2;
        this.channelpageitem = this.nav_params_object.get("pageItem1");
        this.tabTitle = this.nav_params_object.get("tabTitle");

        this.iconDash = this.nav_params_object.get("icondash");
        this.colorDash = this.nav_params_object.get("coloR");
      
        this.headercolor = this.pageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';
        this.headercolor = this.pageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';
        this.show_info_tab =  this.sub_topic_data.showInformation;
        break  
      case((this.request_from != 'whatsnew_page' || this.request_from == undefined) && this.pageitem === 'channels'):
        this.channelpageitem = this.nav_params_object.get("pageItem1");
        this.tabTitle = this.nav_params_object.get("tabTitle");

        this.iconDash = this.nav_params_object.get("icondash");
        this.colorDash = this.nav_params_object.get("coloR");
        
        this.headercolor = this.pageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';
        this.headercolor = this.channelpageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';
        this.headercolor = '';
        break;
      case((this.request_from != 'whatsnew_page' || this.request_from == undefined) && this.pageitem == 'Heart Health'):
        this.channelpageitem = this.nav_params_object.get("pageItem1");
        this.tabTitle = this.nav_params_object.get("tabTitle");

        this.iconDash = this.nav_params_object.get("icondash");
        this.colorDash = this.nav_params_object.get("coloR");
        
        this.headercolor = this.pageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';
        this.headercolor = 'health_header';
        break;
      case((this.request_from != 'whatsnew_page' || this.request_from == undefined) && this.pageitem != 'channels'):
        this.channelpageitem = this.nav_params_object.get("pageItem1");
        this.tabTitle = this.nav_params_object.get("tabTitle");

        this.iconDash = this.nav_params_object.get("icondash");
        this.colorDash = this.nav_params_object.get("coloR");
        
        this.headercolor = this.pageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';
        this.headercolor = this.pageitem.toLowerCase();
        this.headercolor = this.headercolor+'_header';
        this.show_info_tab =  this.sub_topic_data.showInformation;
        break;
      case(this.request_from == 'whatsnew_page'):
        this.parent_tab = this.sub_topic_data.source;
        this.headercolor = 'cardiac_header';
        break;
    }


    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
      setTimeout(() => {
      this.network_check_object.getPageAction('ItemDetailsPageTabs','start','',localStorage.getItem('cv5usrType'));
      }, 1000);

      setTimeout(() => {
      this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
      }, 1000);
    }


    var that = this;

    this.events ={
      'onEducationItemClick': function (item: any,data:any) {       
        const total_data = JSON.parse(JSON.stringify(data))
        var canShare = localStorage.getItem('userProAccess');
        var playlist_query = new Array(" WHERE id="+total_data.id);
        that.database_provider_object.fetchAllData('custom_playlist' , playlist_query).then(result =>{
           total_data.list_values = result[0].list_values;
           total_data.list_values_1 = JSON.parse(total_data.list_values);
         
          var final_data = [];
          _.each(total_data.education_item, function(value, index){
            if(_.contains(total_data.list_values_1.education, value.id)){
             final_data.push(value);
            }
          });
                
          // Find the index of the object
          const index = final_data.findIndex(data => data.id === item.id);

          // Move the object to the beginning of the array
          if (index > -1) {
            const shiftedObject = final_data.splice(index, 1)[0];
            final_data.unshift(shiftedObject);
          }

            total_data.education_item = final_data;
            var network_type = that.network_check_object.getNetworkType();
            switch(true){
              case(item.subTopicType == 'video' && (item.isPaid == 0 || canShare == 'true') && item.localUrl != ''):
                total_data.items = total_data.education_item;
                navCtrl.push('VideoDetailsPage', {data:total_data, type:'playlist', index:0, 'header':'hide','sendTo':'Customeplaylist'});
                break;
              case(item.subTopicType == 'video' && (item.isPaid == 0 || canShare == 'true') && item.localUrl == '' && network_type == 'none'):
                that.toast_controller_object.create({
                  message: 'This video requires internet connection.',
                  position: 'bottom',
                  duration: 5000
                }).present();
                break;  
              case(item.subTopicType == 'video' && (item.isPaid == 0 || canShare == 'true') && item.localUrl == '' && network_type != 'none'):
                total_data.items = total_data.education_item;
                navCtrl.push('VideoDetailsPage', {data:total_data, type:'playlist', index:0, 'header':'hide','sendTo':'Customeplaylist'});
                break;
              case(item.subTopicType == 'video' && item.isPaid == 1 && canShare != 'true'):
                var confirmPopup = that.alert_controller_object.create({
                  title: '',
                  message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                  enableBackdropDismiss: true,
                  buttons: [{ 
                      text: 'Upgrade',
                      handler: () => {
                        that.navCtrl.push('UpgradePlanPage');
                      }}
                  ]
                });
                confirmPopup.present();
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
        that.markasFavorite(item);
      },
      'onDownload': function (item: any) {
        event.stopPropagation();
        var canShare = localStorage.getItem('canDownloadAccess');
        var network_type = that.network_check_object.getNetworkType();
        var downloadque = localStorage.getItem('Downloadque');

        switch(true){
          case(canShare == 'true' && network_type == 'none'):
            that.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();
            break;
          case(canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):
            downloadque = item.id;
            localStorage.setItem('Downloadque', downloadque);
            that.isDownloadVideoMultiple();
            break;
          case(canShare == 'true' && network_type != 'none' && downloadque != ''):
            downloadque = downloadque + ','+item.id;
            localStorage.setItem('Downloadque', downloadque);
            that.isDownloadVideoMultiple();
            break;
          case(canShare != 'true'):
            var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
              text: 'Upgrade',
              handler: () => {
                that.navCtrl.push('UpgradePlanPage');
              }}
              ]
            });
            confirmPopup.present();
            break;
        }
      },
      'onInfoItemClick': function (item: any,data:any) {
        const total_data = JSON.parse(JSON.stringify(data))
        var canShare = localStorage.getItem('userProAccess');
        var playlist_query = new Array(" WHERE id="+total_data.id);
        that.database_provider_object.fetchAllData('custom_playlist' , playlist_query).then(result => {
           total_data.list_values = result[0].list_values;
           total_data.list_values_1 = JSON.parse(total_data.list_values);
         
            var final_data = [];
            _.each(total_data.information_item, function(value, index){
              if(_.contains(total_data.list_values_1.information, value.id)){
              final_data.push(value);
              }
            });

            // Find the index of the object
            const index = final_data.findIndex(data => data.id === item.id);

            // Move the object to the beginning of the array
            if (index > -1) {
              const shiftedObject = final_data.splice(index, 1)[0];
              final_data.unshift(shiftedObject);
            }
        
            total_data.information_item = final_data;
            var network_type = that.network_check_object.getNetworkType();

            switch(true){
              case(item.subTopicType == 'video' && (item.isPaid == 0 || canShare == 'true') && item.localUrl != ''):
                total_data.items = total_data.information_item;
                navCtrl.push('InformationVideoDetailsPage', {data:total_data, type:'playlist', index:0, 'header':'hide','sendTo':'Customeplaylist'});            
                break;
              case(item.subTopicType == 'video' && (item.isPaid == 0 || canShare == 'true') && item.localUrl == '' && network_type == 'none'):
                that.toast_controller_object.create({
                  message: 'This video requires internet connection.',
                  position: 'bottom',
                  duration: 5000
                }).present();
                break;
              case(item.subTopicType == 'video' && (item.isPaid == 0 || canShare == 'true') && item.localUrl == '' && network_type != 'none'):
                total_data.items = total_data.information_item;
                navCtrl.push('InformationVideoDetailsPage', {data:total_data, type:'playlist', index:0, 'header':'hide','sendTo':'Customeplaylist'});
                break;  
              case(item.subTopicType == 'video' && item.isPaid == 1 && canShare != 'true'):
                var confirmPopup = that.alert_controller_object.create({
                  title: '',
                  message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                  enableBackdropDismiss: true,
                  buttons: [{ 
                      text: 'Upgrade',
                      handler: () => {
                        that.navCtrl.push('UpgradePlanPage');
                      }}
                  ]
                });
                confirmPopup.present();
                break;

            }
          });
      },
      'onInfoFavorite': function (item: any) {
        event.stopPropagation();
        that.markasInfoFavorite(item);
      },
      'onInfoDownload': function (item: any) {
        
        var loading = that.loading_controller_object.create({
          spinner: 'ios',
          duration: 7000,
          enableBackdropDismiss: false
        });
        loading.present();

        event.stopPropagation();
        var canShare = localStorage.getItem('canDownloadAccess');
        var network_type = that.network_check_object.getNetworkType();
        var downloadque = localStorage.getItem('InfoDownloadque');

        switch(true){
          case(item.isDownloadable == 1 && canShare == 'true' && network_type == 'none'):
            that.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();
            break;
          case(item.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):
            downloadque = item.id;
            localStorage.setItem('InfoDownloadque', downloadque);
            that.isInfoDownloadVideoMultiple();
            break;
          case(item.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && downloadque != ''):
            downloadque = downloadque + ','+item.id;
            localStorage.setItem('InfoDownloadque', downloadque);
            that.isInfoDownloadVideoMultiple();
            break;
          case(item.isDownloadable == 1 && canShare != 'true'):
            var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                  text: 'Upgrade',
                  handler: () => {
                    that.navCtrl.push('UpgradePlanPage');
                  }}
              ]
            });
            confirmPopup.present();
            break;
          case(item.isDownloadable == 0):
             var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ['Dismiss']
            });
            confirmPopup.present();
            break;            

        }
      },
    };
  }



  ionViewWillLeave(){
      var network_type = this.network_check_object.getNetworkType();
      if(network_type != 'none') {
      this.network_check_object.getPageAction('ItemDetailsPageTabs','end','',localStorage.getItem('cv5usrType'));
      }
  }

  goBack(){
    //alert('iii');
    //alert('item details back-->'+this.navCtrl.getActive().name);
    if(this.request_from == 'branch'){
      this.navCtrl.setRoot('WhatsNewPage');
    }else{
      this.navCtrl.pop();
    }
  }

  segmentClick(segment_name){
    localStorage.setItem('segment_name', segment_name);
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
        var progress_id = progress_ids_arr[0];
        if(progress_id == 0){
          progress_id = progress_ids_arr[1];
        }


        var userCondition = new Array("");
        this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
          this.userdata = user_data[0];
        });

        var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN ("+progress_id+")");

        this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => {

        const fileTransfer: FileTransferObject = this.file_transfer_object.create();

        var item = data[0];
        //_.each(data,function(item,index){
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
        }else{

          this.toast_service_object.mypresentToast('Downloading : "'+item.name +'"',2000);

          this.video_share_provider_object.downloadVideo(item, 'Education');
          
          var filename = item.videoName;
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

              //var perc:any = 'perc'+item.id;
              var perc = (progressEvent.loaded / progressEvent.total)*100;

              this.perc1 = perc.toFixed( 1 );

              //var loader:any = 'loader'+item.id;
              var loader = document.getElementById("progressBar_detail_"+item.id);
              loader.style.background = '#fff';
              loader.innerHTML = this.perc1+'%';

              //var loader1:any = 'loader1'+item.id;
              /*var loader1 = document.getElementById("static_download_prog");
              //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
              loader1.innerHTML = 'Downloading is in progress...';
              loader1.style.padding = '10px';
              loader1.style.display = 'block';*/


              if(this.perc1 == 100){
                loader.innerHTML = '';
                loader.style.background = '';
                /*loader1.innerHTML = '';
                loader1.style.padding = '';
                loader1.style.display = '';*/
              }
            }
          });

          fileTransfer.download(item.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {

          var video_url = 'V2CardioMedia/'+filename;

          var querystring:string[] = new Array(" UPDATE subtopic_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
          this.database_provider_object.updateData(querystring);

          var iconfilename = item.iconUrl.split("/").pop(); 
          //console.log('iconfilename--->'+iconfilename);
          this.downloadfile(item.iconUrl, iconfilename, item.id);
          this.downloadapi(item.id, this.userdata.liveId);
          this.toast_service_object.mypresentToast('Finished downloading : "'+item.name +'"',2000);

          var loader3 = document.getElementById("download_"+item.id);
          loader3.classList.add("active");

          if(item.downloaded == 0) item.downloaded = 1;


          //alert('dismiss');
          //this.toast_dismiss();
          },

          (error) => {
          this.toast_service_object.presentToast("Download failed! please try again.");
          //alert('error '+JSON.stringify(error));
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
        }

        if(que_ids != ''){
          this.isDownloadVideoMultiple();
        }else if(que_ids == ''){
          localStorage.setItem('Downloadque', '');
        }
        //});
        },(e)=>{ 
        //alert('586 error '+JSON.stringify(e))
        });
      }
    });
  }

  //download function
  downloadfile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.file_object.dataDirectory+'icons/'+ name).then((entry) => { 

    var icon_url = 'icons/'+ name;
    var querystring:string[] = new Array(" UPDATE subtopic_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
    this.database_provider_object.updateData(querystring);

    });  
  }

  //insert query to api database
  downloadapi(groupid,userid) {
    var post_url = this.http_service_object.getPosturl('downloads'); 
    this.http_object.post(post_url, {"cardiovisualUserId" : userid, "subtopicId" : groupid }).subscribe(data => {
      var response = JSON.parse(data['_body']);
      
      var response_data = JSON.stringify(response);  
    }, error => {
      //alert("Live Api error" + error);
      console.log(error);
    }); 
  }


  markasFavorite(group){
    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
        message: 'This video requires internet connection.',
        position: 'bottom',
        duration: 5000
        }).present();
      } else {

       if(group.isFavourite == 0 ) {
       
          //set isFavourite == 1
          this.storage_object.get('user_logged_in').then((val) => {

            this.database_provider_object.setFavorites(val, group.id);
            this.toast_service_object.presentToast("Added to Favourites.");
          });
        } else {
          //set isFavourite == 0
          this.storage_object.get('user_logged_in').then((val) => {

            this.database_provider_object.setFavorites(val, group.id); 
            this.toast_service_object.presentToast("Removed from Favourites.");
          });
        }
        group.isFavourite = !group.isFavourite 
        
        }
    });
  }

  markasInfoFavorite(group){
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
          //set isFavourite == 1
          this.storage_object.get('user_logged_in').then((val) => {
            this.database_provider_object.setinformationFavorites(val, group.id);
            this.toast_service_object.presentToast("Added to Favourites.");
          });
        } else {
          //set isFavourite == 0
          this.storage_object.get('user_logged_in').then((val) => {

            this.database_provider_object.setinformationFavorites(val, group.id); 
            this.toast_service_object.presentToast("Removed from Favourites.");
          });
        }
        group.isFavourite = !group.isFavourite 
      }
    });
  }



  isInfoDownloadVideoMultiple() {

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();

      if(network_type == 'none'){

        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();
      } else {

        var que_ids = localStorage.getItem('InfoDownloadque');
        var progress_ids_arr = que_ids.split(',').map(Number);
        progress_ids_arr = _.uniq(progress_ids_arr);
        que_ids = progress_ids_arr.toString();
        localStorage.setItem('InfoDownloadque', que_ids);
        var progress_id = progress_ids_arr[0];
        if(progress_id == 0){
         progress_id = progress_ids_arr[1];
        }
        //if(this.download_status == 'complete') {

        this.download_status = 'inprogress';

        var userCondition = new Array("");
        this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
          this.userdata = user_data[0];
        });

        var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id IN ("+progress_id+")");

        this.database_provider_object.fetchAllData('information' , querystring).then(data => {

        const fileTransfer: FileTransferObject = this.file_transfer_object.create();

        var item = data[0];
        //_.each(data,function(item,index){
        if(item.localUrl != ''){

        var new_ids_arr = que_ids.split(',').map(Number);
        var test_arr = [];
        _.each(new_ids_arr, function(value, key){
        if(value != item.id){
        test_arr.push(value);
        }
        });
        que_ids = test_arr.toString();
        localStorage.setItem('InfoDownloadque', que_ids);

        this.toast_service_object.presentToast('"'+item.name +'" already downloaded.');

        if(que_ids == ''){
          localStorage.setItem('InfoDownloadque', '');
        }
        this.download_status = 'complete';
        }else{

          this.toast_service_object.mypresentToast('Downloading: "'+item.name +'"',2000);
          this.video_share_provider_object.downloadVideo(item, 'Information');

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

              //var perc:any = 'perc'+item.id;
              var perc = (progressEvent.loaded / progressEvent.total)*100;

              this.perc1 = perc.toFixed( 1 );

              //var loader:any = 'loader'+item.id;
              var loader = document.getElementById("info_progressBar_detail_"+item.id);
              loader.style.background = '#fff';
              loader.innerHTML = this.perc1+'%';

              //var loader1:any = 'loader1'+item.id;
              var loader1 = document.getElementById("static_download_prog");
              //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
              loader1.innerHTML = 'Downloading is in progress...';
              loader1.style.padding = '10px';
              loader1.style.display = 'block';

              if(this.perc1 == 100){
                loader.innerHTML = '';
                loader.style.background = '';
                loader1.innerHTML = '';
                loader1.style.padding = '';
                loader1.style.display = '';

                var loader3 = document.getElementById("download_"+item.id);
                loader3.classList.add("active");
              }
            }
          });

          fileTransfer.download(item.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {

            var video_url = 'V2CardioMedia/'+filename;

            var querystring:string[] = new Array(" UPDATE information_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
            this.database_provider_object.updateData(querystring);

            var iconfilename = item.iconUrl.split("/").pop(); 
            console.log('iconfilename--->'+iconfilename);
            this.downloadInfofile(item.iconUrl, iconfilename, item.id);
            this.downloadInfoapi(item.id, this.userdata.liveId);
            this.toast_service_object.mypresentToast('Finished downloading: "'+item.name +'"',2000);
            this.download_status = 'complete';

            var loader3 = document.getElementById("download_"+item.id);
            loader3.classList.add("active");

            if(item.downloaded == 0) item.downloaded = 1;
            this.download_status = 'complete';


            //this.toast_dismiss();
          },

          (error) => {
            this.toast_service_object.presentToast("Download failed! please try again.");

          });

          que_ids = localStorage.getItem('InfoDownloadque');
          var new_ids_arr = que_ids.split(',').map(Number);
          var test_arr = [];
          _.each(new_ids_arr, function(value, key){
            if(value != item.id){
              test_arr.push(value);
            }
          });

          que_ids = test_arr.toString();
          localStorage.setItem('InfoDownloadque', que_ids);
          this.download_status = 'complete';
        }

        if(que_ids != ''){
          this.isInfoDownloadVideoMultiple();
        }else if(que_ids == ''){
          localStorage.setItem('InfoDownloadque', '');
        }
        //});

        },(e)=>{ 
        //console.log('586 error '+JSON.stringify(e))
        });

      }
      //} 
    });
  }


  downloadInfofile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.file_object.dataDirectory+'icons/'+ name).then((entry) => { 

      var icon_url = 'icons/'+ name;

      var querystring:string[] = new Array(" UPDATE information_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
      this.database_provider_object.updateData(querystring);
    });  
  }

  downloadInfoapi(groupid,userid) {
    var post_url = this.http_service_object.getPosturl('downloads'); 
    this.http_object.post(post_url, {"cardiovisualUserId" : userid, "informationId" : groupid }).subscribe(data => {
      var response = JSON.parse(data['_body']);
      console.log('response--->'+JSON.stringify(response));
      var response_data = JSON.stringify(response);
    }, error => {
      
      console.log(error);
    }); 
  }
  onEvent(event: string, item: any, total_data: any, e: any) {
    if (e) {

      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item,total_data);
    }
  }

  playListDataDelete(item, playlist_id, type, e: any){
    e.stopPropagation();
    this.platform_object.ready().then(async () => {
      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
        message: 'You are now offline.',
        position: 'bottom',
        duration: 5000
        }).present();
      } else {

        var loading = this.loading_controller_object.create({
          //spinner: 'ios',
          spinner: 'dots',
          content:"",
          duration: 3000,
          enableBackdropDismiss: false
        });
        await loading.present();

        var post_url = this.http_service_object.getPosturl('userplaylists');

        if(type == 'education'){
          var playlist_query = new Array(" WHERE id="+playlist_id);
          this.database_provider_object.fetchAllData('custom_playlist' , playlist_query).then(async result => {
            var edu_list_values = JSON.parse(result[0].list_values);
            var final_list_values = _.without(edu_list_values.education, item.id);
            edu_list_values.education = final_list_values;
            edu_list_values = JSON.stringify(edu_list_values);
            var custom_playlist_api_data = {"listValues": edu_list_values};

            this.http_object.put(post_url+"/"+playlist_id, custom_playlist_api_data).subscribe(data => {
            });

            var update_query:string[] = new Array("UPDATE custom_playlist SET list_values='"+edu_list_values+"' WHERE id="+playlist_id);

            this.database_provider_object.updateData(update_query);
            await loading.dismiss();
            item.show = 0;
          });
        }else if(type == 'information'){
          var playlist_query = new Array(" WHERE id="+playlist_id);
          this.database_provider_object.fetchAllData('custom_playlist' , playlist_query).then(async result => {
            var info_list_values = JSON.parse(result[0].list_values);
            var final_list_values = _.without(info_list_values.information, item.id);
            info_list_values.information = final_list_values;
            info_list_values = JSON.stringify(info_list_values);
            var custom_playlist_api_data = {"listValues": info_list_values};

            this.http_object.put(post_url+"/"+playlist_id, custom_playlist_api_data).subscribe(data => {
            });

            var update_query:string[] = new Array("UPDATE custom_playlist SET list_values='"+info_list_values+"' WHERE id="+playlist_id);

            this.database_provider_object.updateData(update_query);
            await loading.dismiss();
            item.show = 0;
          });
        }
        this.toast_service_object.presentToast("Video removed from Playlist.");
      }
    });  
  }
}