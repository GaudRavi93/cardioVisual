import { Platform,LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { CleverTap } from '@ionic-native/clevertap';
import { Http, Headers } from '@angular/http';
import { HttpService } from './HttpService';
import { Storage } from '@ionic/storage';


@Injectable()
export class LoadingService {
  loading:any;
  localapi:any;
  constructor(public platform: Platform, public loadingCtrl: LoadingController,private clevertap: CleverTap, private httpservice: HttpService,public http:Http,public storage: Storage) {

     this.localapi = this.httpservice.getApi();
  }

  clevertapInitializeinApp(){
    this.platform.ready().then(() => {

      /*------------------------------------- clevertap -------------------------------------*/
      
      document.addEventListener('onCleverTapProfileDidInitialize', (e: any) => {
        //console.log('hjhhh===');
        //alert('hi--1--ts');
        console.log("onCleverTapProfileDidInitialize");
      });


      document.addEventListener('onCleverTapInAppNotificationDismissed', (e: any) => {
        console.log("onCleverTapInAppNotificationDismissed");
      });

      document.addEventListener('onDeepLink', (e: any) => {
        console.log("onDeepLink");
      });

      document.addEventListener('onPushNotification', (e: any) => {
        console.log("onPushNotification");
      });

      this.clevertap.setDebugLevel(2);
      this.clevertap.enablePersonalization();
      this.clevertap.registerPush();
     
      /*-------------------------------End CleverTap--------------------------------------------------------------*/
    });
  }

  generateandSaveLinks(userID,local_user_type,email){

    //alert('for link and Id -->'+branchlink + '-------- '+ userID+ '-----------'+local_user_type+ ' ---- '+email);
    
    setTimeout(() => {  
      var properties1 = {
        canonicalIdentifier: 'cardiovisual',
        title: 'CardioVisual'
      };
      // optional fields
      var analytics = {
        channel: 'cardio_android_app',
        feature: 'sharing',
        campaign: 'refereres',
        stage: 'share_social',
        type: 2
      }

      // optional fields
      var properties = {
        match_duration: -1,
        profession : local_user_type,
        user_email: email,
        clevertapId: localStorage.getItem('getCleverTapID'),
        time_stamp: Date.now(),
        referral_code: localStorage.getItem('referral_code')
      }
      //var env = "live";
      var env = "";
      var branchUniversalObj = null;
      const Branch = window["Branch"];
      Branch.createBranchUniversalObject(properties1).then(function (res) {
        res.generateShortUrl(analytics, properties).then(function (res) {
          console.log('Response:--> ' + JSON.stringify(res.url));
          localStorage.setItem('isLinkSet',res.url);
        })
      });

      
      //alert(' ---------------------------->'+this.localapi+"/regBranch?c_id="+localStorage.getItem('getCleverTapID')+"&branch_link="+localStorage.getItem('isLinkSet')+"&liveId="+userID+"&env="+env);
      //console.log(' whats new---------------------------->'+this.localapi+"/regBranch?c_id="+localStorage.getItem('getCleverTapID')+"&branch_link="+localStorage.getItem('isLinkSet')+"&liveId="+localStorage.getItem('liveId')+"&env="+env);
      setTimeout(() => {
        this.http.get(this.localapi+"/regBranch?c_id="+localStorage.getItem('getCleverTapID')+"&branch_link="+localStorage.getItem('isLinkSet')+"&liveId="+userID+"&env="+env).map(res => res.json()).subscribe(data => {
          //alert('-----ghgddghdh---------->'+JSON.stringify(data));
          //console.log('whats new-----ghgddghdh---------->'+JSON.stringify(data));
          //localStorage.setItem('isLinkSet',res.url);  
        });
      }, 1500); 
    }, 500); 
    //}

  }


  show() {
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    this.loading.present();
  }

  userregistrationshow() {
    this.loading = this.loadingCtrl.create({
        content: 'Registering the user...'
    });
    this.loading.present();
  }

  googleSignInLoading() {
    this.loading = this.loadingCtrl.create({
        content: 'Google Logging in...'
    });
    this.loading.present();
  }

  facebookSignInLoading() {
    this.loading = this.loadingCtrl.create({
        content: 'Facebook Logging in...'
    });
    this.loading.present();
  }

  login() {
    this.loading = this.loadingCtrl.create({
        content: 'Logging in, please wait...'
    });
    this.loading.present();
  }

  inappLoading(){
    this.loading = this.loadingCtrl.create({
        content: 'Processing...'
    });
    this.loading.present();
  }

  userspecialities() {
    this.loading = this.loadingCtrl.create({
        content: 'Registering the specialities...'
    });
    this.loading.present();
  }

  usercountry() {
    this.loading = this.loadingCtrl.create({
        content: 'Registering the country...'
    });
    this.loading.present();
  }

  hide() {
    this.loading.dismiss();
  }



}