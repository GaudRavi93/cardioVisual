import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from 'underscore/underscore';
import { HttpService } from '../../services/HttpService';
import { DatabaseProvider } from '../../providers/database/database';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { CleverTap } from '@ionic-native/clevertap';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-channels',
	templateUrl: 'channels.html',
})
export class ChannelsPage {

	localapi: any;
	dtStr: any;
	clevertapDate: any;
	channelsDatashown: any;
	channels_data: any;
	path: string;
	localPath: string;
	http_service_object: HttpService;
	database_provider_object: DatabaseProvider;
	file_object: File;
	clevertap_object: CleverTap;

	constructor(public navCtrl: NavController, public injector: Injector) {

		this.http_service_object = injector.get<HttpService>(HttpService);
		this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
		this.file_object = injector.get<File>(File);
		this.clevertap_object = new CleverTap();

		this.localapi = this.http_service_object.getApi();
		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();
		this.path = this.file_object.dataDirectory;


		var channel_query = new Array("");

		this.database_provider_object.fetchAllData('channels', channel_query)
		.then(channel_result => {
			this.channelsDatashown = channel_result;
			console.log(this.channelsDatashown, 'this.channelsDatashown');
			
			const channelToRemove = 'Heart Rhythm Society 2019';
			const channelIdx = this.channelsDatashown.findIndex(val => val.name === channelToRemove);

			if (channelIdx !== -1) {
				this.channelsDatashown.splice(channelIdx, 1);
			}
		})
		.catch(error => {
			console.error('Error fetching data:', error);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ChannelsPage');
	}

	getChannelClick(chnnltopic) {
		localStorage.setItem('segment_name', 'channel');
		localStorage.setItem('channel_id', chnnltopic.id);
		localStorage.setItem('channel_name', chnnltopic.name);

		var params = {
			"record_time": this.dtStr,
			"record_date": this.clevertapDate,
			"os": localStorage.getItem('getDevicePlatform'),
			"modelNo": localStorage.getItem('modelNo'),
			"deviceversion": localStorage.getItem('getDeviceversion'),
			"userType": localStorage.getItem('cv5usrType'),
			"userID": localStorage.getItem('userliveId'),
			"Identity": localStorage.getItem('userIdentity'),
			"channel_name": localStorage.getItem('channel_name'),
			"channel_id": localStorage.getItem('channel_id'),
			"location": localStorage.getItem('location'),
			"specialities": localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType')
		};

		this.clevertap_object.recordEventWithNameAndProps("clickedOnChannels", params);

		this.navCtrl.push('ItemDetailsPageTabs', { pageItem: 'channels', tabTitle: chnnltopic.name, icondash: chnnltopic.icon, pageItem1: chnnltopic.name, coloR: chnnltopic.hexcode, id: chnnltopic.id, chnldata: chnnltopic });
	}
}
