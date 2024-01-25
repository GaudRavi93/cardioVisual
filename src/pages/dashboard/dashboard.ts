import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform, ToastController, LoadingController} from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import * as _ from 'underscore/underscore';
import { DatabaseProvider } from '../../providers/database/database';
import { CleverTap } from '@ionic-native/clevertap';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { AppRate } from '@ionic-native/app-rate';


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
	params:any;
	online: boolean = true; 
	userType: any;
	liveId:any;
	roleId:any;
	clevertapId:any;
	localapi:any;
	dtStr:any;
	clevertapDate:any;
	network_type:any;
	orientation: string;
	nav_params_object: NavParams;
	http_service_object: HttpService;
	database_provider_object: DatabaseProvider;
	platform_object: Platform;
	clevertap_object: CleverTap;
	screen_orientation_object: ScreenOrientation;
	toast_controller_object: ToastController;
	network_check_object: NetworkCheckProvider;
	loading_controller_object: LoadingController;
	app_rate_object: AppRate;


	constructor(public navCtrl: NavController,public injector: Injector) {
		
		this.nav_params_object = injector.get<NavParams>(NavParams);
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.platform_object = injector.get<Platform>(Platform);
		this.clevertap_object = new CleverTap();
		this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
		this.toast_controller_object = injector.get<ToastController>(ToastController);
		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
		this.loading_controller_object = injector.get<LoadingController>(LoadingController);
		this.app_rate_object = injector.get<AppRate>(AppRate);
		
		this.platform_object.ready().then(() => {
			
			this.network_type = this.network_check_object.getNetworkType();
				if(this.network_type != 'none') {
				setTimeout(() => { 
					this.network_check_object.getPageAction('DashboardPage','start','',localStorage.getItem('cv5usrType'));
				}, 1000); 
				setTimeout(() => {
					this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
				}, 1500); 
			}
			

			var upgradeApp = this.nav_params_object.get('forAppUpdate');

			if (upgradeApp == 'forAppUpgrade') {
				// code...
				var loading = this.loading_controller_object.create({
					//spinner: 'ios',
					spinner: 'dots',
					content:"<div class='custom-spinner-container'>Please wait, app is being updated.</div>",
					duration: 10000,
					enableBackdropDismiss: false
				});
				loading.present();

			}
			this.localapi = this.http_service_object.getApi();
			this.dtStr = this.http_service_object.dtStr();


			this.clevertapDate = this.http_service_object.clevertapDate();

			console.log("PLATFORM READY IN PROVIDER");
			if(this.network_type == 'none'){
				this.online = false;
				this.toast_controller_object.create({
					message: 'You are now offline.',
					position: 'bottom',
					duration: 5000
				}).present();
			} else {
				this.online = true;
			}

			this.app_rate_object.preferences = {
			  usesUntilPrompt: 5,
			  promptAgainForEachNewVersion: true,
			  simpleMode : true,
			  inAppReview: true,
			  storeAppURL: {
			    ios: 'com.cardio-visual.Cardio-Visual-Lite',
			    android: 'market://details?id=com.cardiovisual.app'
			  },
			  customLocale: {
			    title: "Rate Us!",
			    message: "Thank you for using CardioVisual. Would you mind spending a moment to rate us on the app store?",
			    cancelButtonLabel: "No, Thank You",
			    laterButtonLabel: "Remind Me Later",
			    rateButtonLabel: "Rate It Now"
			  },
			  callbacks: {
			    onRateDialogShow: function(callback){
			      callback(1) // cause immediate click on 'Rate Now' button
			    },
			    onButtonClicked: function(buttonIndex){
			      console.log("onButtonClicked -> " + buttonIndex);
			    }
			  }
			};

			this.app_rate_object.promptForRating(false);

			// if(this.online && localStorage.getItem("app_sync_dashboard") == "yes"){
				// }
			})
		}
		
		ionViewWillEnter(){
		this.database_provider_object.dashboardSubTopicsAPIData(
			localStorage.getItem("cv5usrType")
		  );
		var topicData = new Array(""); 
		this.database_provider_object.fetchAllData('new_topics' , topicData).then(data => {
			this.params = data;
		}); 

		this.orientation = this.screen_orientation_object.type;
		this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
	}

	ionViewWillLeave(){
		if(this.network_type != 'none') {
			this.network_check_object.getPageAction('DashboardPage','end','',localStorage.getItem('cv5usrType'));
		}
	}

	ionViewDidLoad() {
		//var specialities = '';
		console.log('ionViewDidLoad DashboardPage');
	}

	getTopicClick(topic){
		localStorage.setItem('segment_name', 'education');

	    var params = {
          "record_time" : this.dtStr,
          "record_date" : this.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "modelNo" : localStorage.getItem('modelNo'),
          "deviceversion" : localStorage.getItem('getDeviceversion'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "topicsName": topic.name,
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
          "location":localStorage.getItem('location')
        };
        // Set clevertap Custom AppLaunch event.
        this.clevertap_object.recordEventWithNameAndProps("clickedOnTopics", params); 

		this.navCtrl.push('ItemDetailsPageTabs',{pageItem:topic.name, coloR:topic.hexcodeBase, icondash:topic.iconName, data:topic });
	}


}
