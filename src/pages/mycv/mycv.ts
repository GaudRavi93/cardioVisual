import { Component, Injector } from '@angular/core';
import { IonicPage, NavController,ViewController, Modal, ModalController, ModalOptions, ToastController, Platform,AlertController } from 'ionic-angular'; 
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpService } from '../../services/HttpService';
import { Http } from '@angular/http';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { CleverTap } from '@ionic-native/clevertap';
import { File } from '@ionic-native/file'; 
import { OneSignal } from '@ionic-native/onesignal';
import {ScreenOrientation} from '@ionic-native/screen-orientation';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycv',
  templateUrl: 'mycv.html',
})
export class MycvPage {
  data: any = {};
	params:any = {};
  localapi:any;
  search:string = '';
  pageHistory:string = '';
  profilePicture: any;
  dtStr : any;
  clevertapDate : any;
  sponsored_by_data: any = {};
  path: any;
  channelUrlpath: string;
  toggleValue:any;
  view_controller_object: ViewController;
  storage_object: Storage;
  database_provider_object: DatabaseProvider;
  http_service_object: HttpService;
  http_object: Http;
  modal_controllar_object: ModalController;
  in_app_browser_object: any;
  toast_controller_object: ToastController;
  platform_object: Platform;
  network_check_object: NetworkCheckProvider;
  clevertap_object: any;
  alert_controller_object: AlertController;
  file_object: File;
  onesignal_object: OneSignal;
  screen_orientation_object: ScreenOrientation;

  constructor(public navCtrl: NavController,public injector: Injector) {

      this.view_controller_object = injector.get<ViewController>(ViewController);
      this.storage_object = injector.get<Storage>(Storage);
      this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
      this.http_service_object = injector.get<HttpService>(HttpService);
      this.modal_controllar_object = injector.get<ModalController>(ModalController);
      this.in_app_browser_object = new InAppBrowser();
      this.toast_controller_object = injector.get<ToastController>(ToastController);
      this.platform_object = injector.get<Platform>(Platform);
      this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
      this.clevertap_object = new CleverTap();
      this.alert_controller_object = injector.get<AlertController>(AlertController);
      this.file_object = injector.get<File>(File);
      this.onesignal_object = injector.get<OneSignal>(OneSignal);
      this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);

      this.toggleValue = localStorage.getItem('getSubscriptionStatus');
      this.localapi = this.http_service_object.getApi();
      this.dtStr = this.http_service_object.dtStr();
      this.clevertapDate = this.http_service_object.clevertapDate();
      this.path = this.file_object.dataDirectory;

      this.storage_object.get('user_logged_in').then((val) => { 

        var userData = new Array(""); 
        this.database_provider_object.fetchAllData('new_user_info' , userData).then(userresult => {
          //console.log('user data = '+JSON.stringify(userresult));
          if (userresult.length > 0) {
            this.data = userresult[0];
            this.profilePicture = userresult[0].profile_pic; 
          }
        });
              
      });

  		this.params.data ={ "default_img" : "assets/images/profile.png"};

      //sponsored by image 
      var sponsored_by_query = new Array(" WHERE is_active=1"); 
      this.database_provider_object.fetchAllData('sponsored_by' , sponsored_by_query).then(sponsored_by_result => {
        if(sponsored_by_result.length > 0){
          this.sponsored_by_data = sponsored_by_result[0];
        }else{
          this.sponsored_by_data = [];
        }
        //alert('data2'+JSON.stringify(this.sponsored_by_data));
      });
      var network_type = this.network_check_object.getNetworkType();
      if(network_type != 'none') {
        setTimeout(() => { 
        this.network_check_object.getPageAction('MycvPage','start','',localStorage.getItem('cv5usrType'));
        }, 1000); 
        this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
      }
	  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  ionViewWillLeave(){
    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
    this.network_check_object.getPageAction('MycvPage','end','',localStorage.getItem('cv5usrType'));
    }
  }

  cancel() {
  	this.view_controller_object.dismiss();
  }

  logout(){

    var confirmPopup = this.alert_controller_object.create({
      title: '',
      message: '<h4 style="color:#ffffff; text-align:center;">Are you sure you want to logout?</h4>',
      buttons: [{ 
      text: 'No',
      handler: () => {}
      }, {
        text: 'Yes',
        handler: (e) => {
        this.storage_object.get('user_logged_in').then((val) => {
          var device_token = this.database_provider_object.getOSSpecificUUID(val);

          var deviceData  = {
            "userId": val,
            "deviceToken": device_token
          };
          this.http_service_object.getDeviceDatas(deviceData).subscribe(user_data => {
            if(user_data.length > 0){
              var params = {"updatedAt": new Date().toISOString(), "status": '0'};

              this.http_object.put(this.localapi+"/api/devices/"+user_data[0].id, params).subscribe(data => {
              }, error => {
                console.log(error);
              });
            }
          }, err => {
            console.log('err->'+err);
            //alert(err);
          }); 
        }); 
        var params = {
          "record_time" : this.dtStr,
          "record_date" : this.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "modelNo" : localStorage.getItem('modelNo'),
          "deviceversion" : localStorage.getItem('getDeviceversion'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "roleSubtype" : localStorage.getItem('cv5usrRolesubType'),
          "loggedInMedium":localStorage.getItem('loginMedium')
        };

        this.clevertap_object.recordEventWithNameAndProps("clickedLogout",params);

        this.database_provider_object.deleteRecords("DELETE FROM new_user_info");
        //this.sqlite_sync.deleteUserInfo();
        this.storage_object.set('user_logged_in', 0);
        this.storage_object.set('get_started_page_counter', 0);

        localStorage.setItem('cv5userEmail','');
        localStorage.setItem('cv5userRoleId','');
        localStorage.setItem('userliveId','');
        localStorage.setItem('cv5usrType','');
        localStorage.setItem('cv5usrRolesubType','');
        localStorage.setItem('userIdentity','');
        localStorage.setItem('getCleverTapID','');
        localStorage.setItem('updatedPlayerId', '');
        localStorage.setItem('liveId','');
        localStorage.setItem('verified','');
        localStorage.setItem('isLinkSet', '');

        localStorage.setItem('shownContent', '');
        localStorage.setItem('productActiveTill', '');
        localStorage.setItem('myProductflg', 'false');
        localStorage.setItem('userProAccess', '');
        localStorage.setItem('productExpired', ''); 
        localStorage.setItem('productID', 'false');
        localStorage.setItem('productType', '');
        localStorage.setItem('productExpiredate', '');
        localStorage.setItem('promotionalCodeStatus','');
        localStorage.setItem('canvasimgshare','notset');
        localStorage.setItem('canDownloadAccess','false');
        localStorage.setItem('Downloadque', '');
        localStorage.setItem('app_sync_dashboard', 'yes');
        localStorage.setItem('loginMedium','false');
        localStorage.setItem('ratingDialogShown', 'null');
        localStorage.setItem('InfoDownloadque', '');
        localStorage.setItem('usrSpecialities', '');
        localStorage.setItem('page_array_push', 'yes');
        localStorage.setItem('showrandomVideo', 'yes');
        localStorage.setItem('arrayOfTags', 'yes');
        localStorage.setItem('referral_code', '');
        localStorage.setItem('referred_by', '');

        this.navCtrl.setRoot("LoginPage");

        }
      }]
    });

    confirmPopup.present();
  }


  goToPlaylist(){
    this.navCtrl.push("PlaylistPage", {'request_from':'profile_page'});
  }

  goToFavourites(){
       //this.navCtrl.push("TabPage2", {'topic':'favorites', 'request_from':'profile_page'});
    this.navCtrl.push("MyfavoritesPage");
  }

  gotoHome(){
    this.navCtrl.push("DashboardPage");
  }

  goToMydownloads(){
    this.navCtrl.push("MyDownloadPage");  
  }

  gotoSponsored(sponsored_by_data){

    var network_type = this.network_check_object.getNetworkType();
    if(network_type == 'none'){
      this.toast_controller_object.create({
        message: 'You are now offline.',
        position: 'bottom',
        duration: 5000
      }).present();
    } else {

      switch(sponsored_by_data.content_type){
        case 'web':
            var ref = this.in_app_browser_object.create(sponsored_by_data.sponsored_by_link, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app'); 

            ref.on('loadstop').subscribe((event) => {
              this.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe((event) => {            
              this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });

          break;
        case 'video':
            let options = {
              successCallback: () => { console.log('Video played') },
              errorCallback: (e) => { console.log('Error streaming') },
              //orientation: 'landscape',
              shouldAutoClose: true
              //controls: false
            };

          if (sponsored_by_data.local_link != '') {
            // code...
            this.channelUrlpath = this.file_object.dataDirectory+sponsored_by_data.local_link;
            //this.streamingMedia.playVideo(this.channelUrlpath, options);
          }else{
            this.channelUrlpath = sponsored_by_data.sponsored_by_link;
            var network_type = this.network_check_object.getNetworkType();
            if(network_type == 'none'){
              this.toast_controller_object.create({
                message: 'You are now offline.',
                position: 'bottom',
                duration: 5000
              }).present();
            } else {
              //this.streamingMedia.playVideo(this.channelUrlpath, options);
            }
          }
          break;  
      }
    }
  }

  goToManageDevices(){
    var network_type = this.network_check_object.getNetworkType();

    if(network_type == 'none'){
       this.toast_controller_object.create({
           message: 'You are now offline.',
           position: 'bottom',
           duration: 5000
         }).present();
    } else {
      this.navCtrl.push("ManageDevicesPage"); 
    }
  }

  goToViewprofile(user_data){
    var user_query = new Array(""); 
    this.database_provider_object.fetchAllData('new_user_info' , user_query).then(userresult => {

          const myModalOptions: ModalOptions = {
                enableBackdropDismiss: false
          };

          const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'Manage Profile', userdata:userresult[0] }, myModalOptions);
          myModal.present();
    });
  }


  myChange() {   
    this.platform_object.ready().then(() => {      
     
      this.onesignal_object.getPermissionSubscriptionState().then(information => {
        if (this.toggleValue === true && (information.subscriptionStatus.subscribed === false)) {
          this.onesignal_object.setSubscription(this.toggleValue);
          localStorage.setItem('getSubscriptionStatus', this.toggleValue);
          this.onesignal_object.addPermissionObserver().subscribe(state => {
           // console.log("state changed: " + JSON.stringify(state));
          });
          this.onesignal_object.addSubscriptionObserver().subscribe(aDDstate => {
            if (!aDDstate.from.subscribed && aDDstate.to.subscribed) {
              //console.log("Subscribed for OneSignal push notifications!");
               // get player ID
              aDDstate.to.userId
            }
            //console.log("Push Subscription state changed: " + JSON.stringify(aDDstate));
          });

        }else if (this.toggleValue === false && (information.subscriptionStatus.subscribed === true)) {

          this.onesignal_object.setSubscription(this.toggleValue);

          localStorage.setItem('getSubscriptionStatus', this.toggleValue); 
          this.onesignal_object.addPermissionObserver().subscribe(state => {
            //console.log(" else Notification permission state changed: " + JSON.stringify(state.hasPrompted));
           });
          this.onesignal_object.addSubscriptionObserver().subscribe(aDDstate => {

            if (!aDDstate.from.subscribed && aDDstate.to.subscribed) {
               //console.log("Subscribed for OneSignal push notifications!");
               // get player ID
               aDDstate.to.userId
            }
          });

        }
      }); 
      
    });
  }

  videoItems(){
    this.navCtrl.push("VideoPage");   
  }


}
