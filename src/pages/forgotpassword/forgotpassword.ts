import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { DatabaseProvider } from '../../providers/database/database';
import * as _ from 'underscore/underscore';
import { CleverTap } from '@ionic-native/clevertap';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  email: string;
  error_msg: string = '';
  type: string = '';
  verification_code: string = '';
  api_verification_code: string = '';
  password: string = '';
  confirm_password: string= '';
    dtStr : any;
  clevertapDate : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpservice: HttpService, private databaseprovider: DatabaseProvider, public alertCtrl: AlertController, private clevertap: CleverTap) {



    this.dtStr = this.httpservice.dtStr();
    this.clevertapDate = this.httpservice.clevertapDate();

    this.type = navParams.get('type');
    this.email = navParams.get('email');

    if(this.type == 'verification_code'){
        this.api_verification_code = navParams.get('verification_code');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  gotologin(){
  this.navCtrl.setRoot('LoginPage');
  }

  gotoForgotpasswordPage(){
    this.navCtrl.push('ForgotpasswordPage', {'type':'forgot_password'});
  }

  forgotPassword() {
    this.error_msg = '';
    if(this.email == ""){
      this.error_msg = 'Please enter your email.';
    }else if(this.email != "" && !this.validateEmail(this.email)){
      this.error_msg = 'Please enter valid email address.';
    }
    if(this.error_msg == '' && this.email != ''){

      this.httpservice.checkEmailExistsInCMS(this.email).subscribe(data => {
      if((_.size(data) > 0) && (data[0].verified != 0 && data[0].verified != null)){
            this.httpservice.getVerificationCode(this.email).subscribe(codedata => {
              var params = {
                "record_time" : this.dtStr,
                "record_date" : this.clevertapDate,
                "os" : localStorage.getItem('getDevicePlatform'),
                "modelNo" : localStorage.getItem('modelNo'),
                "deviceversion" : localStorage.getItem('getDeviceversion'),
                "inputEmailValue":this.email
              };
              this.clevertap.recordEventWithNameAndProps("clickedOnForgotPassword", params);

              this.navCtrl.push('ForgotpasswordPage', {'type':'verification_code', 'email':this.email, 'verification_code': codedata.code });
            });
      } else {
        var confirmPopup = this.alertCtrl.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Please sign up for CardioVisual.</h4>',
              buttons: ['Dismiss']
            });
            confirmPopup.present();
      }
      });
    }
 
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  passwordverify(){
    this.error_msg = '';
    if(this.verification_code == ''){
    this.error_msg = 'Please enter valid verification code.';
    }else if(this.verification_code != '' && (this.api_verification_code != this.verification_code)) {
    this.error_msg = 'Verification code and entered code do not match.';
    }else{
    var confirmPopup = this.alertCtrl.create({
          title: '',
          message: '<h4 style="color:#ffffff; text-align:center;">Thank You, Now please create a new Password</h4>',
          buttons: ['Dismiss']
        });
    confirmPopup.present();
    this.navCtrl.push('ForgotpasswordPage',{'type':'change_password', 'email':this.email});
    }
  }

  changePassword(){
    this.error_msg = '';
    if( this.password == '' || this.password == undefined ){
      this.error_msg = 'Password is required';
    }
    if( this.confirm_password == ''){
      this.error_msg = 'Confirm Password is required';
    }
    if( this.password != this.confirm_password){
      this.error_msg = 'Password and Confirm Password do not match';
    }

    if(this.error_msg == '' && this.password != '' && this.confirm_password != ''){

      this.httpservice.checkEmailExistsInCMS(this.email).subscribe(data => {

      if(_.size(data) > 0){
      this.databaseprovider.updatePassword(this.password, data[0].id);

      var confirmPopup = this.alertCtrl.create({
      title: '',
      message: '<h4 style="color:#ffffff; text-align:center;">Password changed successfully. Please login to continue.</h4>',
      buttons: ['Dismiss']
      });
      confirmPopup.present();

      this.navCtrl.setRoot('LoginPage');
      } else {      
      var confirmPopup = this.alertCtrl.create({
      title: '',
      message: '<h4 style="color:#ffffff; text-align:center;">Please sign up for CardioVisual.</h4>',
      buttons: ['Dismiss']
      });
      confirmPopup.present();
      }
      });

    }
  }

}