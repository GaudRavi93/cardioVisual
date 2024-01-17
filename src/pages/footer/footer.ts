import { Component, EventEmitter, Input, Output,ViewChild, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams ,App, Nav, ToastController} from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import * as _ from 'underscore/underscore';
import { Storage } from '@ionic/storage';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';

@IonicPage()
@Component({
  //selector: 'page-footer',
  selector: '[clean-footer]',
  templateUrl: 'footer.html',
})
export class FooterPage {

	@Input() activeFootermenu:boolean = false; 
	
	@Input() ismyCv:boolean = false; 

	@Input() ismyChannel:boolean = false; 
	@Input() iswhatsNew: boolean = false;

	email: string = '';
	username: string = '';
	dtStr : any;
	clevertapDate : any;
	http_service_object: HttpService;
	database_provider_object: DatabaseProvider;
	toast_controller_object: ToastController;
	for_videoshare_object: VideosharesocialProvider;

	constructor(public navCtrl: NavController,public injector: Injector) {

		this.http_service_object = injector.get<HttpService>(HttpService);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.toast_controller_object = injector.get<ToastController>(ToastController);
		this.for_videoshare_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);

		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FooterPage');
	}

	gotoMyCV(){
		this.navCtrl.push('MycvPage');
	}

	gotoHome(){
		this.navCtrl.push('DashboardPage');
	}

	// gotoChannel(){

	// 	this.navCtrl.push('ChannelsPage');
	// }

	comingsoon(){
		this.toast_controller_object.create({
			message: 'Coming Soon',
			position: 'bottom',
			duration: 3000
		}).present();
	}

	// gotoChannel(){
	// 	var query:string[] = new Array(" WHERE channelId !=0");
	// 	this.database_provider_object.fetchAllData('information' , query).then(data => {

	// 		if(data.length == 0){
	// 			this.toast_controller_object.create({
	// 				message: 'Coming Soon',
	// 				position: 'bottom',
	// 				duration: 3000
	// 			}).present();
	// 		}else{
	// 			this.navCtrl.push('ChannelsPage');
	// 		}
	// 	});
	// }

	comingsoonforchannels(){

		var query:string[] = new Array(" WHERE channelId !=0");
		this.database_provider_object.fetchAllData('information' , query).then(data => {
			console.log('datadatadatadatadata',data)

			if(data.length == 0){
				this.toast_controller_object.create({
					message: 'Coming Soon',
					position: 'bottom',
					duration: 3000
				}).present();
			}else{
				this.navCtrl.push('ChannelsPage');
			}
		});
	}


	gotoWhatsnew(){
		// this.toast_controller_object.create({
		// 	message: 'Coming Soon',
		// 	position: 'bottom',
		// 	duration: 3000
		// }).present();
		this.navCtrl.push('WhatsNewPage');
	}

	onPromptForProffesional(){
		this.for_videoshare_object.discussPromptForProffesional('','/footer','Footer');
	}

}
