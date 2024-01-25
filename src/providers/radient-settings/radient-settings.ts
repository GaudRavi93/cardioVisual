import { Injectable, Injector } from '@angular/core';
import { CleverTap } from '@ionic-native/clevertap';
import { HttpService } from '../../services/HttpService';
import { AlertController} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NetworkCheckProvider } from '../network_check/network_check';
import * as _ from 'underscore/underscore';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';
import {ScreenOrientation} from '@ionic-native/screen-orientation';

declare const RadiantMP: any;
/*
  Generated class for the RadientSettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RadientSettingsProvider {
	rmp: any = null;
	playlistrmp: any = null;
	mp4:any;
	dtStr : any;
	clevertapDate : any;
	playertype:any;
	get_object:any;
	videoViewEvent: boolean = false;
	videoPlayPause: boolean = false;
	videoPlayClick: boolean = false;
	videoEnded: boolean = false;
	license_Key: string;
	singlePlayerElementID: string;
	playlistElementID: string;
	playlistname: any;
	lastVideoIndex: any;
	Videoshare_Url: any;
	userTypeformenu: any;
	user_Id: any;
	video_data: any;
	intract_array: any;
	netWorkCheck: any;
	currentIndex: any;
	lastIndex: any;
	clevertap_object: any;
	http_service_object: HttpService;
	alert_controller_object: AlertController;
	social_sharing_object: SocialSharing;
	network_check_object: NetworkCheckProvider;
	screen_orientation_object: ScreenOrientation;
	video_share_provider_object: VideosharesocialProvider;

	constructor(public injector:Injector) {

		this.clevertap_object = new CleverTap();
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.alert_controller_object = injector.get<AlertController>(AlertController);
		this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
		this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
		this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);

		this.license_Key = 'd3F2aHVrYnNreUAxNTg2MzU2';

		this.singlePlayerElementID = 'rmpPlayer1';

		this.playlistElementID = 'rmpPlayer';

		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();
		this.userTypeformenu = localStorage.getItem('cv5usrType');
		this.user_Id = localStorage.getItem('userliveId');
		this.netWorkCheck = this.network_check_object.getNetworkType();
	}

	setVideoSrcObject(videoData){
		var settings = {
			licenseKey: this.license_Key,
			relatedUpNextOffset: 10,
			playlistUpNextAutoplay: true,
			playlistEndedLoop: false,
			srcChangeAutoplay:true,
			skin: 's3',
			preload: 'auto',
			automaticFullscreenOnLandscape: true,
			quickRewind: 10,
			allowLocalStorage:true,
			quickForward:10,
			airplay: true, 
    		pip: true, 
			playlistData: videoData
		};
		
		var elementID = this.singlePlayerElementID;
		this.rmp = new RadiantMP(elementID);
		var that = this;
		var rmpContainer = document.getElementById(elementID);
		rmpContainer.addEventListener('ready', function() {
			console.log('player ready');
			// Invoke API methods
			that.playertype = 'single';
			that.videoPlayPause = false;
			that.videoPlayClick = true;
		});
		rmpContainer.addEventListener('play', function() {
			console.log('player has received play event');
			that.videoViewEvent = true;
		});
		rmpContainer.addEventListener('playing', function() {
			console.log('player has received playing event');
			that.getCurrentObject();
			that.onPlaySendDataToCleverTap();
		});
		rmpContainer.addEventListener('pause', function() {
			console.log('player has received paused event');

			that.sendDataToCleverTap();	
			that.videoPlayPause = true;		
		});

		rmpContainer.addEventListener('srcchanging', function() {
			console.log('player  has start the changing new src');
			that.sendDataToCleverTap();			
		});

		rmpContainer.addEventListener('srcchanged', function() {
			console.log('player has changed the new src');
			that.videoPlayPause = false;
			that.videoPlayClick = true;			
		});

		rmpContainer.addEventListener('ended', function() {
			console.log('player has received ended event');	
			that.sendDataToCleverTap();	
			that.videoPlayPause = false;		
		});

		this.rmp.init(settings);
	}

	setSrcObjectOnitemClick(SrcObjectdata){
		this.rmp.setPlaylistData(SrcObjectdata);
		//this.rmp.setSrc(SrcObjectdata);
	} 

	data_set_array_of_objects_forPlaylist(arrayofpbject){

		var settings = {
			licenseKey: this.license_Key,
			relatedUpNextOffset: 10,
			playlistUpNextAutoplay: true,
			playlistEndedLoop: false,
			srcChangeAutoplay:true,
			skin: 's3',
			preload: 'auto',
			automaticFullscreenOnLandscape: true,
			quickRewind: 10,
			allowLocalStorage:true,
			quickForward:10,
			// Enables picture-in-picture module
    		pip: true, 
			playlistData: arrayofpbject
		};

		var elementID = this.playlistElementID;
		this.playlistrmp = new RadiantMP(elementID);
		var playlist_rmpContainer = document.getElementById(elementID);
		var that = this;
		playlist_rmpContainer.addEventListener('ready', function() {
			console.log('playlist has ready');
			that.playertype = 'playlist';
			that.videoPlayPause = false;
			// Invoke API methods
			that.videoPlayClick = true;
			that.videoEnded = false;
		});
		playlist_rmpContainer.addEventListener('play', function() {
			console.log('playlist has received play event');
			that.videoViewEvent = true;
		});
		playlist_rmpContainer.addEventListener('playing', function() {
			console.log('playlist has received playing event');
			that.getCurrentObject();
			that.onPlaySendDataToCleverTap();
			that.getCurrentIndex();
		});
		playlist_rmpContainer.addEventListener('pause', function() {
			console.log('playlist has received paused event');
			
			that.sendDataToCleverTap();

			that.videoPlayPause = true;
		});
		playlist_rmpContainer.addEventListener('srcchanging', function() {
			console.log('playlist  has start the changing new src');
			that.sendDataToCleverTap();			
		});
		playlist_rmpContainer.addEventListener('srcchanged', function() {
			console.log('playlist has changed the new src');
			that.videoPlayPause = false;
			that.videoPlayClick = true;			
		});
		playlist_rmpContainer.addEventListener('ended', function() {
			console.log('playlist has received ended event');
			that.sendDataToCleverTap();	
			that.videoPlayPause = false;
			if(that.currentIndex == that.lastIndex){
				that.videoEnded = true;		
				that.getCurrentIndex();				
			} 	
		});

		this.playlistrmp.init(settings);
	}

	onPlaySendDataToCleverTap(){
		if (this.videoPlayClick == true) {
			var playParams = {
			  "record_time" : this.dtStr,
			  "record_date" : this.clevertapDate,
			  "os" : localStorage.getItem('getDevicePlatform'),
			  "userRoleId" : localStorage.getItem('cv5userRoleId'),
			  "userType": localStorage.getItem('cv5usrType'),
			  "userID" : localStorage.getItem('userliveId'),
			  "Identity":localStorage.getItem('userIdentity'),
			  "location":localStorage.getItem('location'),
			  "specialities":localStorage.getItem('usrSpecialities'),
			  "videoContentPlayedFor":this.get_object.videoContentFor,
			  "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
			  "videoId":this.get_object.videoId,
			  "videoName":this.get_object.name,
			  "videoTag":this.get_object.tag
			};
			this.clevertap_object.recordEventWithNameAndProps("onPlayClick",playParams);
			this.playClickTriggerAction();
			this.videoPlayClick = false;
		}
	}

	setSRCChangedforPlaylist(data){
		this.playlistrmp.setPlaylistItem(data);
		//this.playlistrmp.setPlaylistData(data);
	}

	getCurrentObject(){
		if (this.playertype == 'playlist') {
			this.get_object = this.playlistrmp.getContentMetadata();
		}else{
 			this.get_object = this.rmp.getContentMetadata();
		}
	}

	playListNameWithLastIndex(name,index,share_Url){
		this.playlistname = name;
		this.lastVideoIndex = index;
		this.Videoshare_Url = share_Url != '' ? share_Url : localStorage.getItem('isLinkSet');
	}

	getCurrentIndex(){
		this.currentIndex = this.playlistrmp.getCurrentPlaylistItemIndex();
		this.lastIndex = this.lastVideoIndex;
		if((this.currentIndex == this.lastIndex) && this.videoEnded == true){
			this.showConfirmBox(); 
		}               
	}


	sendDataToCleverTap(){
		if (this.videoViewEvent == true && this.videoPlayPause == false) {
			// code...
			if (this.playertype == 'playlist') {
				var get_time = this.playlistrmp.getCurrentTime(); 
				var totalVideoDur = this.playlistrmp.getDuration();
			}else{
				var get_time = this.rmp.getCurrentTime(); 
				var totalVideoDur = this.rmp.getDuration();
			}

			//The formula to convert from milliseconds to seconds is: seconds = milliseconds ÷ 1,000
			var videoViewInsec = get_time/1000;
			
			var totalVideoDurationInsec = totalVideoDur/1000;

			var totalVideoDurationInMin = (totalVideoDurationInsec/60).toFixed(2);
			var num = videoViewInsec/60;
			var videonmin = num.toFixed(2);
			var videoViewInmin = videonmin+' min';

			let videoView_percentage = Math.round((videoViewInsec * 100)/totalVideoDurationInsec);

			let videoview25 =totalVideoDurationInsec/4;
			let videoview50 =totalVideoDurationInsec/2;
			let videoview75 = videoview25 + videoview50;
			let videoview100 = totalVideoDurationInsec;

			if (videoViewInsec <= videoview25) {
			  var videoProgress = '0 - 25';
			}else if (videoViewInsec > videoview25  && videoViewInsec <= videoview50) {
			  var videoProgress = '25 - 50';
			}else if (videoViewInsec > videoview50 && videoViewInsec <= videoview75) {
			  var videoProgress = '50 - 75';
			}else if (videoViewInsec > videoview75 && videoViewInsec < totalVideoDurationInsec) {
			  var videoProgress = '75 - 100';
			}else if (videoViewInsec == totalVideoDurationInsec) {
			  var videoProgress = '100';
			}

			var params = {
			  "record_time" : this.dtStr,
			  "record_date" : this.clevertapDate,
			  "os" : localStorage.getItem('getDevicePlatform'),
			  "userRoleId" : localStorage.getItem('cv5userRoleId'),
			  "userType": localStorage.getItem('cv5usrType'),
			  "userID" : localStorage.getItem('userliveId'),
			  "Identity":localStorage.getItem('userIdentity'),
			  "videoId":this.get_object.videoId,
			  "videoName":this.get_object.name,
			  "videoTag":this.get_object.tag,
			  "location":localStorage.getItem('location'),
			  "specialities":localStorage.getItem('usrSpecialities'),
			  "videoContentPlayedFor":this.get_object.videoContentFor,
			  "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
			  "videoViewDuration":videoViewInmin + '  / ('+videoViewInsec.toFixed(2)+' sec)',
			  "videoView_percentage":videoView_percentage+'  %',
			  "videoProgressRange":videoProgress+'  %'
			};
			this.clevertap_object.recordEventWithNameAndProps("onVideoPlayed",params);
			this.videoViewEvent = false;

			this.forLocationSpecilitiesPopup();				
		}


	}

	getCurrentObjectFromPlaylist(){
		var getPlaylistObject = this.playlistrmp.getContentMetadata();
		return getPlaylistObject;
	}

	// When we leave Tab 1 page for another tab page we pause our content
	ionViewWillLeave() {
		if (this.rmp && this.rmp.getReady()) {
		  this.rmp.pause();
		}

		if (this.playlistrmp && this.playlistrmp.getReady()) {
		  this.playlistrmp.pause();
		}
	}

	showConfirmBox(){

	    let confirmPopup = this.alert_controller_object.create({
	    title: 'Confirmation you watched',
	    message: 'Did you watch all the videos in this playlist?',
	      buttons: [
	        {
	          text: 'No',
	          role: 'cancel',
	          handler: () => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: 'Yes',
	          handler: () => {
	            console.log('YES clicked');
	            this.confirmPopupThen();
	          }
	        }
	      ]
	    });
	    confirmPopup.present();
	}

  	confirmPopupThen(){
	    try {
	      var options = {
	        message: "Yes I have seen playlist '"+this.playlistname+"' and understood the videos.",
	        subject: 'The status of playlist', // fi. for email 
	        files: [], // an array of filenames either locally or remotely 
	        //url: localStorage.getItem('isLinkSet'),
	        url: this.Videoshare_Url,
	        chooserTitle: '' // Android only, you can override the default share sheet title 
	      }
	      var onSuccess = function(result) {
	        var params = {                          
	          "userType": 'doctor'
	        };
	      }
	      var onError = function(msg) {
	      }
	      this.social_sharing_object.shareWithOptions(options);
	    } catch(e) {
	      console.log("ctch");
	    }
  	}

  	forPlayClickTrigger(videoData,intractArray){
  		this.video_data = videoData;
  		this.intract_array = intractArray;
  	}

  	playClickTriggerAction(){
  		//alert('playClickTriggerAction');
  		setTimeout(() => {
	  		var videoID = this.video_data.id;
	  		var videoTAG = this.video_data.tag;
	  		//alert('videoID-->'+videoID+'    ----->'+this.video_data.name+ '===>videoTAG::-'+videoTAG);
			if(this.netWorkCheck != 'none') {
				this.http_service_object.inserrUpdateVideoView(videoID,videoTAG,this.user_Id);
				setTimeout(() => {
					this.network_check_object.getVideoTagCountAction(videoTAG,this.userTypeformenu,this.user_Id,"playclick",this.intract_array,this.video_data);
				}, 1000);

				setTimeout(() => {
					this.network_check_object.forRandomVideoViewCount(this.user_Id);
				}, 2000);
			}
		}, 2000); 
  	}

  forLocationSpecilitiesPopup(){

		let setCount = localStorage.getItem('countForPopup');
		let message = localStorage.getItem('mesgForPopup');

  		this.video_share_provider_object.forVideoViewCount(this.user_Id,setCount,message);
  }
}
