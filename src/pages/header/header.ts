import { Component, EventEmitter, Input, Output,ViewChild,ElementRef, ChangeDetectorRef, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams ,App, Nav, Platform, ToastController} from 'ionic-angular';

import { HttpService } from '../../services/HttpService';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import * as _ from 'underscore/underscore';
import { InappProvider } from '../../providers/inapp/inapp';
import { Storage } from '@ionic/storage';
import { CleverTap } from '@ionic-native/clevertap';
import { LoadingService } from '../../services/loading-service';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { RadientSettingsProvider } from '../../providers/radient-settings/radient-settings';

//import { DashboardPage } from '../dashboard/dashboard';
/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  //selector: 'page-header',
  selector: '[clean-header]',
  templateUrl: 'header.html',
})
export class HeaderPage {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('upgradeIcon') upgradeIcon: any;
  @ViewChild('upgradeText') upgradeText: any;
  @Input() isTabs: boolean = false;
  @Input() hideMenu: boolean = false; 
  public user: any;
  search:string = '';
  pageHistory:string = '';
  previousPage:string = '';
  //pageHistory : any;
  //divShow:boolean;
  //divhide:boolean;
  productExpired:any;
  productExpiredate:any;
  forPromotionalAccess:any;
  proAccess:any;
  notPro:any;
  mySubscriptions : Array<{productId : string , expiryTime : string, productType : string, createdAt : string}> = [];
  dtStr:any;
  clevertapDate:any;
  isRecording: boolean = true;
  matches: any;
  datalength: any;  
  datalength1: any;  
  totalLength: any;  
  showNotif: any;  
  showCard: boolean = true;
  notificationSeen: any;  
  messageUnSeen: any; 
  request_from: string = '';
  nav_params_object: NavParams;
  http_service_object: HttpService;
  database_provider_object: DatabaseProvider;
  app_object: App;
  in_app_provider_object: InappProvider;
  toast_controller_object: ToastController;
  clevertap_object: any;
  loading_service_object: LoadingService;
  speech_recognition_object: SpeechRecognition;
  network_check_object: NetworkCheckProvider;
  radiant_setting_provider_object: RadientSettingsProvider;
  platform_object : Platform;

  constructor(public navCtrl: NavController,private cd: ChangeDetectorRef,public injector:Injector) {

    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
    this.app_object = injector.get<App>(App);
    this.in_app_provider_object = injector.get<InappProvider>(InappProvider);
    this.toast_controller_object = injector.get<ToastController>(ToastController);
    this.clevertap_object = new CleverTap();
    this.loading_service_object = injector.get<LoadingService>(LoadingService);
    this.speech_recognition_object = injector.get<SpeechRecognition>(SpeechRecognition);
    this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.radiant_setting_provider_object = injector.get<RadientSettingsProvider>(RadientSettingsProvider);
    this.platform_object = injector.get<Platform>(Platform);

  	this.pageHistory= this.nav_params_object.get('previousPage');
    this.request_from = this.nav_params_object.get('request_from');
    this.dtStr = this.http_service_object.dtStr();
    this.clevertapDate = this.http_service_object.clevertapDate();
    this.platform_object.ready().then(() => {
      //this.divShow = true;
      //this.divhide = false;
      this.notPro = 'false';
      this.proAccess = 'true';
      localStorage.setItem('userProAccess', this.notPro);
      //localStorage.getItem('userliveId');
      this.showHideUpgradeSign();
    });

    var querystring:string[] = new Array(" WHERE name= 'notification' AND type='notification'");
    this.database_provider_object.fetchAllData('custom_listing', querystring).then(custom_listing_data => { 
                
      var list_json_value = JSON.parse(custom_listing_data[0].list_values);
      var json_variable = '';
      if (list_json_value.education) {

        json_variable = list_json_value.education;

        this.datalength = _.size(json_variable);
      }
      if (list_json_value.information) {
        json_variable = list_json_value.information;

        this.datalength1 = _.size(json_variable);            
      }

    });

    this.notificationSeen = [];
    var notiCondition = new Array(" WHERE messageSeen = 0"); 
    this.database_provider_object.fetchAllData('freshNotificationList' , notiCondition).then(notiresult => {
      this.notificationSeen = notiresult;
      setTimeout(() =>{
        this.messageUnSeen = _.size(notiresult); 
      },500);     
    });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }



  searchInput(searchInput){
    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
      this.network_check_object.getPageAction(this.navCtrl.getActive().name,'exitPage','forSearchClick',localStorage.getItem('cv5usrType'));
      this.network_check_object.forTriggersDetalsPageBACKAction(this.navCtrl.getActive().name,'forSearchClick');
      //this.search = searchInput;
    }
    this.search = this.trimming_fn(searchInput);

	if(this.search != ''){
      var params = {
        "record_time" : this.dtStr,
        "record_date" : this.clevertapDate,
        "os" : localStorage.getItem('getDevicePlatform'),
        "modelNo" : localStorage.getItem('modelNo'),
        "deviceversion" : localStorage.getItem('getDeviceversion'),
        "userRoleId" : localStorage.getItem('cv5userRoleId'),
        "userType": localStorage.getItem('cv5usrType'),
        "searchKey": this.search,
        "userEmail" : localStorage.getItem('cv5userEmail'),
        "specialities":localStorage.getItem('usrSpecialities'),
        "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
        "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
        "location":localStorage.getItem('location')
      };
      this.clevertap_object.recordEventWithNameAndProps("inAppSearch", params);


      var where_query = '';
      var only_name_query = '';
      var result= [];
      var info_result = [];
      var playlist_data = [];
      var whatsnew_data = [];

      var search_arr = this.search.split(" ");
      this.loading_service_object.show();
      this.getSearchData(search_arr);
			// var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where (name like '%"+this.search+"%' OR title like '%"+this.search+"%' OR description like '%"+this.search+"%' )AND isActive=1 "); 
			// this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => { 

			// 	this.navCtrl.push('SearchPage', {params: data, search: this.search});
			// });
	  }
	}


  // this will remove only beginning and end of string whitespace... By : Sanjeev
  trimming_fn(x) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';    
  }; 


	doGoBack(){
    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
      this.network_check_object.getPageAction(this.navCtrl.getActive().name,'exitPage','forBackClick',localStorage.getItem('cv5usrType'));

      this.network_check_object.forTriggersDetalsPageBACKAction(this.navCtrl.getActive().name,'forBackClick');
    }
    localStorage.setItem('search_page', '');

    if (this.pageHistory =="OrientationPlaylistHcp" || this.pageHistory =="OrientationPlaylistNonHcp" ||  this.pageHistory == "SplashesPage") {
      //this.navCtrl.setRoot('DashboardPage');
      this.navCtrl.setRoot('WhatsNewPage');
    }else if (this.pageHistory =="fromSideMenu" || this.pageHistory =="appComponent") {
      // code...
      //this.navCtrl.setRoot('DashboardPage');
      this.navCtrl.setRoot('WhatsNewPage');
    }else if(this.pageHistory === undefined && localStorage.getItem('branch_flag') == 'yes'){
      localStorage.setItem('branch_flag', '');
      this.navCtrl.setRoot('WhatsNewPage');
    }else if(this.request_from === 'video_list' || this.request_from === 'whatsnew_list' || this.request_from === 'whatsnew_seeall'){  
      this.radiant_setting_provider_object.getCurrentObject();  
      //this.radiant_setting_provider_object.getTriggerData();  
      //this.radiant_setting_provider_object.customConfirmBox();  
      this.navCtrl.pop();
    }else{
      this.navCtrl.pop();
    }
	}

	gotoUpgradePlan(){
    let nav = this.app_object.getActiveNavs()[0];
    let activeView = nav.getActive();
    
    switch (activeView.name) {
      case "UpgradePlanPage":
        // code...
        break;
      case "PlandetailsPage":
        // code...
        break;        
      default:
      // code...
      //this.navCtrl.push('UpgradePlanPage');
      var flg = localStorage.getItem('myProductflg');
      if (flg == 'false' || flg == null || flg == '') {
        this.navCtrl.push('UpgradePlanPage');
      }else{
        this.navCtrl.push('PlandetailsPage');
      }
      break;
    }
    // if(activeView.name != 'UpgradePlanPage'){
    //   //this.navCtrl.push('UpgradePlanPage');
    //     var flg = localStorage.getItem('myProductflg');
    //     //alert('flg--->'+flg);
    //     if (flg == 'false' || flg == null) {
    //       this.navCtrl.push('UpgradePlanPage');
    //     }else{
    //       this.navCtrl.push('PlandetailsPage');
    //     }
    // }
	}

  showHideUpgradeSign(){
    var liveId = localStorage.getItem('userliveId');
    var cv_subscriptionId_monthly = this.in_app_provider_object.cv_subscriptionId_monthly();
    var cv_subscriptionId = this.in_app_provider_object.cv_subscriptionId();
    var cv_productId = this.in_app_provider_object.cv_productId();
    //var cv_subscriptionId = 'cardio_pre_test_1';
    var isSubscribe='';
    var isPro='';
    var userType = localStorage.getItem('cv5usrType');
    localStorage.setItem('buttonYear', 'false');
    localStorage.setItem('buttonShow', 'false');
    var orderData = new Array("");
    this.database_provider_object.fetchAllData('order_details', orderData).then(orderresult => {
      this.upgradeIcon.nativeElement['style'].display = 'block';
      this.upgradeText.nativeElement['style'].display = 'none';
      var productExpiredate='';
      var productID = '';
      var productType = '';
      var that = this;
      _.each(orderresult,function(item,index){

        that.mySubscriptions.push({
          "productId":item.product_id,
          "expiryTime":item.expiry_time,
          "productType":item.product_type,
          "createdAt":item.created_at
        });
      });
      var allProducts = _.pluck(that.mySubscriptions,'productId');
      isSubscribe = _.contains(allProducts,cv_subscriptionId) || _.contains(allProducts,cv_subscriptionId_monthly);
      var subsData =_.find(that.mySubscriptions, function(item){ return item.productId === cv_subscriptionId || item.productId === cv_subscriptionId_monthly || item.productId === cv_productId ; });
      var isExpired = this.in_app_provider_object.compareDate(subsData.expiryTime);
      this.forPromotionalAccess =  this.in_app_provider_object.compareDatePromotionalAccess(subsData.createdAt);
      localStorage.setItem('promotionalCodeStatus', this.forPromotionalAccess);
      if((isSubscribe) && (!isExpired)){
        //$rootScope.myProductflg = true;
        localStorage.setItem('myProductflg', 'true');
        localStorage.setItem('userProAccess', this.proAccess);
        this.productExpired = this.in_app_provider_object.compareDate(subsData.expiryTime);
        localStorage.setItem('productExpired', this.productExpired); 
        localStorage.setItem('productID', subsData.productId);
        localStorage.setItem('productType', subsData.productType);
        this.productExpiredate =  this.in_app_provider_object.productDateExp(subsData.expiryTime);
        localStorage.setItem('productExpiredate', this.productExpiredate);
        //this.divShow = false;
        //this.divhide = true;
        this.upgradeIcon.nativeElement['style'].display = 'none';
        this.upgradeText.nativeElement['style'].display = 'block';
      }else{
        if (userType!="patient") {
            isPro = _.contains(allProducts,cv_productId);

            if (isPro) {
              // code...>
              localStorage.setItem('myProductflg', 'true');
              localStorage.setItem('userProAccess', this.proAccess);
              //this.divShow = false;
              //this.divhide = true;
              this.upgradeIcon.nativeElement['style'].display = 'none';
              this.upgradeText.nativeElement['style'].display = 'block';
              if (isExpired) {
                localStorage.setItem('productID', cv_productId);
                localStorage.setItem('productType', 'inapp');
              }else{
                localStorage.setItem('productID', subsData.productId);
                localStorage.setItem('productType', subsData.productType);
              }
            }
        }
      } 
    });

  }

  /*bellIconClick(){
    this.toast_controller_object.create({
      message: 'Coming Soon',
      position: 'bottom',
      duration: 2000
    }).present();
  }*/

  comingsoon(){
    this.toast_controller_object.create({
      message: 'Coming Soon',
      position: 'bottom',
      duration: 3000
    }).present();
  }


  stopListening() {
    this.speech_recognition_object.stopListening().then(() => {
      this.isRecording = false;
    });
  }
 
  getPermission() {
    this.speech_recognition_object.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speech_recognition_object.requestPermission();
        }else{
          this.startListening();        
        }
      });
  }
 
  startListening() {
    let options = {
      language: 'en-US'
    }
    this.speech_recognition_object.startListening().subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
        
      var result= [];
      var info_result = [];
      var that = this;
      var where_query = '';
      var only_name_query = '';
      var search = '';
      var playlist_data = [];
      var whatsnew_data = [];


      this.loading_service_object.show();
      this.getSearchData(this.matches);

      });
    this.isRecording = true;
  }

  isIos() {
    return this.platform_object.is('ios');
    //return this.platform.is('ios');
  }

  getSearchData(search_term){
    var search = '';
    var that = this;
    var where_query_1 = '';
    var only_name_query_1 = '';
    var result = [];
    var info_result = [];
    var playlist_data = [];
    var whatsnew_data = [];
    var exclude_word = ['is', 'to', 'and', 'are', 'i', 'am', 'how', 'why', 'what', 'dr', 'Dr'];

    var user_type = localStorage.getItem('cv5usrType');
    var search_str = '';
    _.each(search_term, function(val, key){
      search = that.trimming_fn(val);

      if(search != ''){
        var search_arr = search.split(" ");
        _.each(search_arr, function(val1, key1){
          var result = _.without(exclude_word, val1.toLowerCase());
          if(_.size(exclude_word) == _.size(result)){
            if(search_str == ''){
              search_str =  val1;
            }else{
              search_str = search_str + ' '+val1;
            }
            //where_query_1 = where_query_1 + " name like '% "+val1+" %' OR name like '%"+val1+" %' OR name like '% "+val1+"%' OR description like '% "+val1+" %' OR";
            where_query_1 = where_query_1 + " name like '% "+val1+" %' OR name like '%"+val1+" %' OR name like '% "+val1+"%' OR description like '% "+val1+" %' OR description like '"+val1+" %' OR description like '% "+val1+"' OR";

            only_name_query_1 = only_name_query_1 + " name like '% "+val1+" %' OR name like '%"+val1+" %' OR name like '% "+val1+"%' OR";

          }
        });
      }
    });
        
    where_query_1 = where_query_1.replace(/ OR\s*$/, "");
    only_name_query_1 = only_name_query_1.replace(/ OR\s*$/, "");
    
    where_query_1 = " name like '%"+search_str+"%' OR "+where_query_1;

    var querystring:string[] = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where ("+where_query_1+") AND isActive=1 AND topicId !=0 AND categoryId !=0 AND subTopicType='video' LIMIT 0,5");
    
    this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => { 
        result = result.concat(data);
        var querystring_info:string[] = new Array(" join information_data on information.id = information_data.id where ("+where_query_1+") AND isActive=1 AND topicId != 0 AND categoryId != 0 AND subTopicType= 'video' LIMIT 0,5");

        this.database_provider_object.fetchAllData('information' , querystring_info).then(info_data => {
          info_result = info_data;
          var playlist_query:string[] = new Array(" where (is_for ='"+user_type+"' OR is_for = 'all') AND ("+where_query_1+") AND active=1 LIMIT 0,5");

          this.database_provider_object.fetchAllData('playlists' , playlist_query).then(playlist_result => {
              playlist_data = playlist_result;
              var whatsnew_query:string[] = new Array(" where ("+only_name_query_1+") AND is_active=1");

              this.database_provider_object.fetchAllData('whatsnew' , whatsnew_query).then(whatsnew_result => {
                whatsnew_data = whatsnew_result;
                    var flag = localStorage.getItem('search_page');
                      if(flag == 'yes'){
                        localStorage.setItem('search_page', '');
                        this.navCtrl.pop();
                      }

                      this.navCtrl.push('SearchPage', {params: result, info_result: info_result, playlist:playlist_data, whatsnew:whatsnew_data, search: search_term});
                      this.loading_service_object.hide();
              });
          });
        });
    });

  }

  bellIconClick(){
    this.navCtrl.push('BellNotificationListPage');
  }

}
