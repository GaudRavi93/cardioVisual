import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RadientSettingsProvider } from '../../providers/radient-settings/radient-settings';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public radientSetting: RadientSettingsProvider) {
	}



	    // When we enter Tab 1 page from another tab page we play our content
	ionViewDidEnter() {
		// if (this.rmp && this.rmp.getReady()) {
		//   //this.rmp.play(); 
		// }
	}

	// When we leave Tab 1 page for another tab page we pause our content
	ionViewWillLeave() {
		// if (this.rmp && this.rmp.getReady()) {
		//   this.rmp.pause();
		// }
	}

	// When Tab 1 page initially loads we configure and init our player
	ionViewDidLoad() { 
		//this.radientSetting.getRadientSettings('https://5b44cf20b0388.streamlock.net:8443/vod/smil:bbb.smil/playlist.m3u8','https://www.radiantmediaplayer.com/media/playlist/poster/item-1.jpg');
		/*
		var src = {
			hls: 'https://5b44cf20b0388.streamlock.net:8443/vod/smil:bbb.smil/playlist.m3u8'
		};
		var settings = { 
			licenseKey: 'd3F2aHVrYnNreUAxNTg2MzU2',
			src: src,
			width: 640,
			height: 360,
			contentMetadata: {
				poster: [
					'https://www.radiantmediaplayer.com/media/playlist/poster/item-1.jpg'
				]
			}
		};
		this.rmp = new RadiantMP(this.elementID);
		this.rmp.init(settings);
		*/
	}

	videoItemClick(){
		//this.radientSetting.getRadientSettings('https://static.cardiovisual.com/videos/Device/Cardiac/DyeVertContrastReductionSystem.m4v','https://static.cardiovisual.com/images/Device/Cardiac/DyeVertContrastReductionSystem.jpg');
		/*
		var src = {
			hls: 'https://static.cardiovisual.com/videos/Device/Cardiac/DyeVertContrastReductionSystem.m4v'
		};
		var settings = { 
			licenseKey: 'd3F2aHVrYnNreUAxNTg2MzU2',
			src: src,
			width: 640,
			height: 360,
			contentMetadata: {
				poster: [
					'https://static.cardiovisual.com/images/Device/Cardiac/DyeVertContrastReductionSystem.jpg'
				]
			}
		};
		this.rmp = new RadiantMP(this.elementID);
		this.rmp.init(settings);
		*/
	}

	videoItemClick2(){
		//this.radientSetting.getRadientSettings('https://static.cardiovisual.com/videos/Treatment/Cardiac/ReducingAKICathLab.mp4','https://static.cardiovisual.com/images/Treatment/Cardiac/ReducingAKICathLab.jpg');
	}

}
