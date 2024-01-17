import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from '../../services/HttpService';
import { Http } from '@angular/http';
import { CountryandrolelistProvider } from '../../providers/countryandrolelist/countryandrolelist';
import * as _ from 'underscore/underscore';

/**
 * Generated class for the ManageDevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-devices',
  templateUrl: 'manage-devices.html',
})
export class ManageDevicesPage {

	device_data: any;
	request_from: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public httpservice: HttpService, public http: Http, private alertCtrl : AlertController, public countryandrolelist: CountryandrolelistProvider) {

  	this.request_from = this.navParams.get('request_from');

    if(this.request_from == 'login_page'){
      var user_data = this.navParams.get('user_data');
      this.httpservice.getRegisteredDeviceCount(user_data[0].id).subscribe(data => {  
        var that = this;
        var device_result = [];
        _.each(data,function(value,index){
          if(value.deviceType == 'iOS' || value.deviceType == 'ios'){
            device_result = that.countryandrolelist.getIphone_name(value.model)
            data[index].device_name = device_result;
          }else{
            data[index].device_name = value.model;
          }
        });
        this.device_data = data;
      });
    }else{
      this.storage.get('user_logged_in').then((val) => {
        this.httpservice.getRegisteredDeviceCount(val).subscribe(data => {  
          var that = this;
          var device_result = [];
          _.each(data,function(value,index){
            if(value.deviceType == 'iOS' || value.deviceType == 'ios'){
              device_result = that.countryandrolelist.getIphone_name(value.model)
              data[index].device_name = device_result;
            }else{
              data[index].device_name = value.model;
            }
          });
          this.device_data = data;
        });      
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageDevicesPage');
  }

  removeDevice(device_data){

  	var confirmPopup = this.alertCtrl.create({
      title: '',
      message: '<h4 style="color:#ffffff; text-align:center;">Are you sure you want to log out from '+device_data.device_name+'?</h4>',
      buttons: [{ 
      text: 'Cancel',
      handler: () => {}
      }, {
        text: 'Yes',
        handler: (e) => {

			  	var device_token = device_data.deviceToken;
			  	var localapi = this.httpservice.getApi();

			    var deviceData  = {
			      "userId": device_data.userId,
			      "deviceToken": device_data.deviceToken
			    };
			    this.httpservice.getDeviceDatas(deviceData).subscribe(user_data => {
			      if(user_data.length > 0){
			        var params = {"updatedAt": new Date().toISOString(), "status": '0'};

			        this.http.put(localapi+"/api/devices/"+user_data[0].id, params).subscribe(
			        	data => { device_data.status = 0; },
			        	error => { console.log(error); });
			      }
			    }, err => {
			      console.log('err->'+err); 
			    });
        }
      }]
    });
    confirmPopup.present();
  }

  backtologin(){
  	this.navCtrl.pop();
  }

}
