import { Injectable, Injector } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform, MenuController, Nav, Modal, ModalController, ModalOptions,AlertController,ToastController} from 'ionic-angular';
import { Http, Response, Headers } from '@angular/http';
import { HttpService } from '../../services/HttpService';
import * as _ from 'underscore/underscore';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ToastService } from '../../services/toast-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';
import { CleverTap } from '@ionic-native/clevertap';
import {ScreenOrientation} from '@ionic-native/screen-orientation';


@Injectable()
export class NetworkCheckProvider {
	network_type: string;
	readyTime:any;
	private sub1$:any;
	private sub2$:any;
	mySetTime:number;
	myallpageIntervalcount:number=0;
	myallpageActionvar:any;
	myPageActionvar:any;
	detalsPageBACKAction:any;
	intractArrayAction:any;
	videoDataArray:any;
	myrandomVideoViewArry:any;
	myviewcount:any;
	dtStr : any;
	clevertapDate : any;
	isoDateFormat : any;
	updateViewTag :any;
	updateViewUserId:any;
	arrayOfpages:any;
	pushaArrayOfTags:any;
	seenVideoTags:any;
	platform_object: Platform;
	network_object: Network;
	http_service_object: HttpService;
	alert_controller_object: AlertController;
	toast_controller_object: ToastController;
	in_app_browser_object: InAppBrowser;
	social_sharing_object: SocialSharing;
	call_number_object: CallNumber;
	toast_service_object: ToastService;
	storage_object: Storage;
	modal_controllar_object: ModalController;
	clevertap_object: any;
	screen_orientation_object: ScreenOrientation;

	constructor(public injector: Injector) { 
		
		this.platform_object = injector.get<Platform>(Platform);
		this.network_object = injector.get<Network>(Network);
		this.http_service_object = injector.get<HttpService>(HttpService);
		this.alert_controller_object = injector.get<AlertController>(AlertController);
		this.toast_controller_object = injector.get<ToastController>(ToastController);
		this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
		this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
		this.call_number_object = injector.get<CallNumber>(CallNumber);
		this.toast_service_object = injector.get<ToastService>(ToastService);
		this.storage_object = injector.get<Storage>(Storage);
		this.modal_controllar_object = injector.get<ModalController>(ModalController);
		this.clevertap_object = new CleverTap();
		this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);


		this.dtStr = this.http_service_object.dtStr();
		this.clevertapDate = this.http_service_object.clevertapDate();

		this.platform_object.ready().then(() => {

			this.isoDateFormat = new Date().toISOString();
			/*
			//Subscribe on pause i.e. background
	       this.sub1$ = this.platform_object.pause.subscribe(() => {
	          //Hello pause
	          alert(' network pause background');
	          console.log(' network pause background');

	        });

	        //Subscribe on resume i.e. foreground 
	        this.sub2$ = this.platform_object.resume.subscribe(() => {
	          //window['paused'] = 0;
	          alert(' network resume foreground');
	          console.log(' network resume foreground');
	        });
	        */
    	});
	}

	getNetworkType() {
		return this.network_object.type;
	}


	getallPageAction(userType){
		if(this.network_object.type == 'none'){
			//alert('this.network_object.typ--->'+this.network_object.type);
			this.toast_controller_object.create({
				message: 'requires internet connection.',
				position: 'bottom',
				duration: 5000
			}).present();
		}else{
			this.http_service_object.forallPageAction("allPageAction").subscribe(allPageActiondata => {
				//alert('userType-->'+userType);
				//alert('allPageActiondata-->'+JSON.stringify(allPageActiondata));
				//alert('allPageActiondata length-->'+JSON.stringify(allPageActiondata.length));
				if (allPageActiondata.length > 0 ) {

					var jsonPayload = JSON.parse(allPageActiondata[0].list_values);
					var forAllPageUserActiondata = _.filter(jsonPayload,function(json_for){
						return (json_for.usertype ==  userType || json_for.usertype == "All" );
					});
					var myProptiming = forAllPageUserActiondata[0].timing;
					if (myProptiming != undefined && myProptiming != "") {
						// code...
						//alert('hhh');
						if(this.dateCheck(forAllPageUserActiondata[0].activeFrom,forAllPageUserActiondata[0].activeTill,this.isoDateFormat)){
							//alert("Availed");
							this.myallpageActionvar = setTimeout(() => {this.myTimer(forAllPageUserActiondata[0],'','','','Time spent in the app');}, myProptiming);
						}
					}
					if (_.size(forAllPageUserActiondata[0].randomVideoViewCount) > 0) 
					{
						var activeArrayforRandomVideo = forAllPageUserActiondata[0].randomVideoViewCount;
						//alert('randomVideoactiveFrom-->'+activeArrayforRandomVideo.randomVideoactiveFrom);
						if(this.dateCheck(activeArrayforRandomVideo.randomVideoactiveFrom,activeArrayforRandomVideo.randomVideoactiveTill,this.isoDateFormat)){
							this.myrandomVideoViewArry = forAllPageUserActiondata[0].randomVideoViewCount;
						}
					}else{
						this.myrandomVideoViewArry = "";
					}


				}
			}, tagbasicallPageActionerr => {
				//console.log('tagbasicallPageActionerr->'+tagbasicallPageActionerr);
			});
		}
	}

	forRandomVideoViewCount(id){

		var showrandomVideo_status = localStorage.getItem('showrandomVideo');

		if (this.myrandomVideoViewArry != "" && showrandomVideo_status == 'yes') {
			this.http_service_object.allVideoViewsbyuser(id).subscribe(randomVideoViewActiondata => {
				var myRandomViedoCountSet = this.myrandomVideoViewArry
				var setVideoViewCount = myRandomViedoCountSet.videoViewCount;
				//alert("setVideoViewCount-->"+setVideoViewCount);

				var totalViewd = _.reduce(randomVideoViewActiondata,
				function (memoizer, value) {
				    return memoizer + value.videoViewCount;
				}, 0);

				//alert("totalViewd-->"+totalViewd);

  				if (totalViewd % setVideoViewCount == 0){

  					this.myTimer(myRandomViedoCountSet,'randomVideoAction','','','Random video view throughout the app');
  				}
			}, randomVideoViewActiondataerr => {
				//console.log('randomVideoViewActiondataerr->'+randomVideoViewActiondataerr);
			});
		}else{
			//alert('blank');
		}
	}

	getPageAction(pagename,forAction, exitAction,userType){

		if(this.network_object.type == 'none'){
			//alert('this.network_object.typ--->'+this.network_object.type);
			this.toast_controller_object.create({
				message: 'requires internet connection.',
				position: 'bottom',
				duration: 5000
			}).present();
		}else{
			this.http_service_object.foParticularPageAction(pagename).subscribe(PageActiondata => {
				var arrayPush_status = localStorage.getItem('page_array_push');
				if (arrayPush_status == 'yes') {
					this.arrayOfpages = [];
				}
				if (PageActiondata.length > 0 ) {
					var pageActionName = PageActiondata[0].name;
					
					var pageActionjsonPayload = JSON.parse(PageActiondata[0].list_values);

					var forParticulsPageUserActiondata = _.filter(pageActionjsonPayload,function(json_for){
						return (json_for.usertype ==  userType || json_for.usertype == "All" );
					});

					var mypageProptiming = forParticulsPageUserActiondata[0].timing;


					if((pagename == pageActionName) && forAction == "start" ) {
						//alert('start for ----->'+pageActionName+'  mypageProptiming->'+mypageProptiming);
						if (mypageProptiming != undefined && mypageProptiming != "") {
							if(this.dateCheck(forParticulsPageUserActiondata[0].activeFrom,forParticulsPageUserActiondata[0].activeTill,this.isoDateFormat)  && (this.arrayOfpages.indexOf(pageActionName) == -1)){
								//alert('start popup for-->'+pagename+'   -->'+this.arrayOfpages.indexOf(pageActionName));

								this.myPageActionvar = setTimeout(() => {this.myTimer(forParticulsPageUserActiondata[0],'forParticularPage',pageActionName,'','Time spent on '+pageActionName);}, mypageProptiming);
							}
						}		
					}else if ((pagename == pageActionName) && forAction == "end") {
						
						if (mypageProptiming != undefined && mypageProptiming != "") {
							if(this.dateCheck(forParticulsPageUserActiondata[0].activeFrom,forParticulsPageUserActiondata[0].activeTill,this.isoDateFormat)){
								//alert('end for ----->'+pagename);
								clearTimeout(this.myPageActionvar);
							}
						}

					}else if ((pagename == pageActionName) && forAction == "exitPage" && (this.arrayOfpages.indexOf(pagename) == -1)) {
						if (_.size(forParticulsPageUserActiondata[0].action) > 0) 
						{
							// code...
							var mypageExitdata = forParticulsPageUserActiondata[0].action;

							if (exitAction == "forBackClick" && _.size(mypageExitdata.backButtonClick) > 0) {
								var activeBackArray = mypageExitdata.backButtonClick;

								if(this.dateCheck(activeBackArray.backButtonactiveFrom,activeBackArray.backButtonactiveTill,this.isoDateFormat)){

									this.myTimer(mypageExitdata.backButtonClick,'forBackClick',pagename,'','Back click from '+pagename);
								}
							}else if (exitAction =="forSearchClick" && _.size(mypageExitdata.searchClick) > 0) {
								var activeSearchArray = mypageExitdata.searchClick;

								if(this.dateCheck(activeSearchArray.searchactiveFrom,activeSearchArray.searchactiveTill,this.isoDateFormat)){

									this.myTimer(mypageExitdata.searchClick,'forSearchClick',pagename,'','Search click from '+pagename);
								}

							}
						}
					}
					//alert('pageActionjsonPayload length--->'+pageActionjsonPayload[0].timing);
					
				}
			}, pageActiondataerr => {
			 	//console.log('pageActiondataerr->'+pageActiondataerr);
			});
		}
	}

	myTimer(val,foraction,videoTag,userID,intractContenttype) {
		if (foraction == 'forBackClick' ) {
			if(this.arrayOfpages.indexOf(videoTag) < 0){

				this.arrayOfpages.push(videoTag);

				localStorage.setItem('page_array_push', 'no');				
			}
			var mymessage = val.pageprompt;
			var myUrl = val.pageInteractUrl;
			//alert('arrayOfpages after push-->'+JSON.stringify(this.arrayOfpages));
		}else if (foraction == 'forSearchClick') {
			if(this.arrayOfpages.indexOf(videoTag) < 0){

				this.arrayOfpages.push(videoTag);

				localStorage.setItem('page_array_push', 'no');				
			}
			var mymessage = val.pageprompt;
			var myUrl = val.pageInteractUrl;
			//alert('arrayOfpages after push-->'+JSON.stringify(this.arrayOfpages));
		}else if (foraction == 'detalsPageAction') {
			// code...
			if(this.pushaArrayOfTags.indexOf(this.seenVideoTags) < 0){

				this.pushaArrayOfTags.push(this.seenVideoTags);

				localStorage.setItem('arrayOfTags', 'no');				
			}

			var mymessage = val.actionprompt;
			var myUrl = val.actionInteractUrl;
		}else if (foraction == 'randomVideoAction') {

			var mymessage = val.randomVideoPrompt;
			var myUrl = val.randomVideoInteractUrl;
			localStorage.setItem('showrandomVideo', 'no');
		}else if (foraction == 'forParticularPage') {
			// code...
			//alert('arrayOfpages-->'+JSON.stringify(this.arrayOfpages));
			//alert('pages name -->'+JSON.stringify(videoTag));
			if(this.arrayOfpages.indexOf(videoTag) < 0){

				this.arrayOfpages.push(videoTag);

				localStorage.setItem('page_array_push', 'no');				
			}
			var mymessage = val.prompt;
			var myUrl = val.InteractUrl;
			//alert('arrayOfpages after push-->'+JSON.stringify(this.arrayOfpages));
		}else{
			var mymessage = val.prompt;
			var myUrl = val.InteractUrl;
		}

		let confirmPopup = this.alert_controller_object.create({
			title: '',
			message: `<b>`+mymessage+`</b>`,
			cssClass: 'popup-pin',
			buttons: [
				{
					text: 'No',
					role: 'cancel',
					handler: () => {
						if (foraction == 'updateView') {
							this.forTrigerActionClevertap(intractContenttype,'No clicked');
							this.http_service_object.updateVideoViewCount(videoTag,userID);
						}else{
							this.forTrigerActionClevertap(intractContenttype,'No clicked');
						}
					}
				},
				{
					text: 'Yes',
					handler: () => {
						if (foraction == 'updateView') {
							this.clickedOnGo(myUrl);
							this.forTrigerActionClevertap(intractContenttype,'Yes clicked');
							this.http_service_object.updateVideoViewCount(videoTag,userID);
						}else{
							this.clickedOnGo(myUrl);
							this.forTrigerActionClevertap(intractContenttype,'Yes clicked');
						}						
					}
				}
			]
		});
		confirmPopup.present();
	}

	clickedOnGo(todo_data){
		var ref = this.in_app_browser_object.create(todo_data, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

		ref.on('loadstop').subscribe((event) => {
		    this.screen_orientation_object.unlock();
		  });
		  ref.on('exit').subscribe((event) => {            
		    this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
		  });
	}

	getVideoTagCountAction(videoTag,user_type,userID,action,intractArray,videoData){
		if(this.network_object.type == 'none'){
			//alert('this.network_object.typ--->'+this.network_object.type);
			this.toast_controller_object.create({
				message: 'requires internet connection.',
				position: 'bottom',
				duration: 5000
			}).present();
		}else{
			this.updateViewTag = videoTag;
			this.updateViewUserId = userID;
			this.http_service_object.forAppPageAndTagAction(videoTag).subscribe(action_data => {

				var arrayOfTags_status = localStorage.getItem('arrayOfTags');
				if (arrayOfTags_status == 'yes') {
					this.pushaArrayOfTags = [];
				}

				if (action_data.length > 0 ) {

					this.seenVideoTags = action_data[0].name;	

					//alert('seenVideoTags-->'+this.seenVideoTags);

					var myJsonDATA = JSON.parse(action_data[0].list_values);

					var forParticulsrUsrdata = _.filter(myJsonDATA,function(json_for){
						return (json_for.usertype ==  user_type || json_for.usertype == "All" );
					});

					//alert("forParticulsrUsrdata--->"+JSON.stringify(forParticulsrUsrdata));
					var setRadomForViewCount = forParticulsrUsrdata[0].InteractUrl;
					var setViewCount = forParticulsrUsrdata[0].userSeenCountTag;
					this.myviewcount = localStorage.getItem('myViewCount');
					//alert('mydatacount-->'+myviewcount+ '  setViewCount-->'+setViewCount);
					//alert('setRadomForViewCount-->'+JSON.stringify(setRadomForViewCount));

					// if ((this.myviewcount % setViewCount == 0) && setViewCount != "RANDOM" && action == "playclick") {
					if (setRadomForViewCount != "") {
						if ((this.myviewcount >= setViewCount) && setRadomForViewCount != "RANDOM" && action == "playclick") {
							if(this.dateCheck(forParticulsrUsrdata[0].activeFrom,forParticulsrUsrdata[0].activeTill,this.isoDateFormat)){

								this.myTimer(forParticulsrUsrdata[0],'updateView',videoTag,userID,videoTag+' tag video Play Count');
							}
						}else if ((this.myviewcount >= setViewCount) && setRadomForViewCount != "RANDOM" && action == "branchclick") {
							if(this.dateCheck(forParticulsrUsrdata[0].activeFrom,forParticulsrUsrdata[0].activeTill,this.isoDateFormat)){

								this.myTimer(forParticulsrUsrdata[0],'updateView',videoTag,userID,'Branch click video views Count');
							}	

						}else if ((this.myviewcount >= setViewCount) && (setRadomForViewCount == "RANDOM" && action == "playclick")) {

							if(this.dateCheck(forParticulsrUsrdata[0].activeFrom,forParticulsrUsrdata[0].activeTill,this.isoDateFormat)){
								//alert(" video count random Availed");
								var randomData = intractArray[Math.floor(Math.random() * intractArray.length -1)];
								var actionMessage =randomData.label;
								var valueForAction =randomData.value;
								var contentTypeForAction =randomData.contentType;
								this.getRandomAction(actionMessage,valueForAction,contentTypeForAction,videoTag+' tag video Play Count','updateView');	
							}					
						}
					}
					if (_.size(forParticulsrUsrdata[0].action) > 0) 
					{
						var activeAction = forParticulsrUsrdata[0].action;
						//alert('activeAction--->'+JSON.stringify(activeAction));
						//alert('actionactiveFrom-->'+JSON.stringify(activeAction.actionactiveFrom));
						if(this.dateCheck(activeAction.actionactiveFrom,activeAction.actionactiveTill,this.isoDateFormat)){
							//alert("action Availed");
							this.detalsPageBACKAction = forParticulsrUsrdata[0].action;
						}else{
							this.detalsPageBACKAction = '';
							//alert("action not Availed");
						}
					}
				}else{
					this.detalsPageBACKAction = '';
				}
				this.intractArrayAction = intractArray;
				this.videoDataArray = videoData;
			}, actiondataerr => {
				//console.log('actiondataerr->'+actiondataerr);
			});
		}

	}

	forTriggersDetalsPageBACKAction(Name,forAction){
		if (Name == 'VideoDetailsPage' || Name == 'InformationVideoDetailsPage' || Name == 'WhatsNewDetailsPage') {
			var mypageExitdata = this.detalsPageBACKAction;
			var intractArrayData = this.intractArrayAction;
			var randomData = intractArrayData[Math.floor(Math.random() * intractArrayData.length -1)];
			var backButton = mypageExitdata.backButtonClick;
			var search_Click = mypageExitdata.searchClick;
			var relatedVideo_Click = mypageExitdata.relatedVideoClick;
			if (forAction == "forBackClick") {
				if (backButton != "RANDOM" && (backButton != undefined  && backButton != "")) {
					if (_.size(mypageExitdata.backButtonClick) > 0 && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
						this.myTimer(mypageExitdata.backButtonClick,'detalsPageAction','','','Back click from '+Name);
					}
				}else if (backButton != undefined  && backButton != "" && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)){
					var actionMessage =randomData.label;
					var valueForAction =randomData.value;
					var contentTypeForAction =randomData.contentType;
					this.getRandomAction(actionMessage,valueForAction,contentTypeForAction,'Back click from '+Name,'');
				}
			}else if (forAction == "forSearchClick") {
				if (search_Click != "RANDOM" && (search_Click != undefined  && search_Click != "")) {
					if (_.size(mypageExitdata.searchClick ) > 0 && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
						this.myTimer(mypageExitdata.searchClick,'detalsPageAction','','','Search click from '+Name);
					}
				}else if (search_Click != undefined  && search_Click != "" && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)){
					var actionMessage =randomData.label;
					var valueForAction =randomData.value;
					var contentTypeForAction =randomData.contentType;
					this.getRandomAction(actionMessage,valueForAction,contentTypeForAction,'Search click from '+Name,'');
				}
			}else if (forAction == "forRelateditemClick") {
				if (relatedVideo_Click != "RANDOM" && (relatedVideo_Click != undefined  && relatedVideo_Click != "")) {
					if (_.size(mypageExitdata.relatedVideoClick ) > 0 && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
						this.myTimer(mypageExitdata.relatedVideoClick,'detalsPageAction','','','Relateditem click from '+Name);
					}
				}else if (relatedVideo_Click != undefined  && relatedVideo_Click != "" && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)){
					var actionMessage =randomData.label;
					var valueForAction =randomData.value;
					var contentTypeForAction =randomData.contentType;
					this.getRandomAction(actionMessage,valueForAction,contentTypeForAction,'Relateditem click from '+Name,'');
				}
			}
		}
	}

	getRandomAction(mymessage,value,contentType,intractContenttype,foraction){
		if(this.pushaArrayOfTags.indexOf(this.seenVideoTags) < 0){

			this.pushaArrayOfTags.push(this.seenVideoTags);

			localStorage.setItem('arrayOfTags', 'no');				
		}
		let confirmPopup = this.alert_controller_object.create({
			title: '',
			message: `<b>Would you like to try our `+mymessage+`</b>`,
			cssClass: 'popup-pin',
			buttons: [
				{
					text: 'No',
					role: 'cancel',
					handler: () => {
						if (foraction == 'updateView') {
							this.forTrigerActionClevertap(intractContenttype,'No clicked')
							this.http_service_object.updateVideoViewCount(this.updateViewTag,this.updateViewUserId);
						}else{
							this.forTrigerActionClevertap(intractContenttype,'No clicked');
						}
					}
				},
				{
					text: 'Yes',
					handler: () => {
						
						if (foraction == 'updateView') {
							this.getRandomclickedOnGo(mymessage,value,contentType);
							this.forTrigerActionClevertap(intractContenttype,'Yes clicked');
							this.http_service_object.updateVideoViewCount(this.updateViewTag,this.updateViewUserId);
						}else{
							this.getRandomclickedOnGo(mymessage,value,contentType);
							this.forTrigerActionClevertap(intractContenttype,'Yes clicked');
						}
					
					}
				}
			]
		});
		confirmPopup.present();
	}

	getRandomclickedOnGo(message,value,contentType){

		if (contentType == 'forshare') {
			
			var options = {
				message: 'Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
				subject: 'Download CardioVisual',
				files: [], 
				url: localStorage.getItem('isLinkSet'),
				chooserTitle: '' 
			}          
			this.social_sharing_object.shareWithOptions(options);
		}else if (contentType == 'forAddtoplaylist') {
			this.toast_controller_object.create({
			message: 'Coming Soon',
			position: 'bottom',
			duration: 3000
			}).present();
		}else if (contentType == 'forForumQuestion') {
			this.qnaSite(this.videoDataArray);
		}else if (contentType == 'forEmail') {
			this.social_sharing_object.canShareViaEmail().then((emailSuccess) => {
				this.social_sharing_object.shareViaEmail('', 'CardioVisual user has a question for you.', [value]).then((sharEmailSuccess) => {
				});
			}).catch((emailError) => {
				this.toast_service_object.presentToast("Sharing via email is not possible.");
			});
		}else if (contentType == 'forPhone') {
			this.call_number_object.callNumber(value, true).then((callSuccess) => {});
		}else if (contentType == 'webUrl') {
			var ref = this.in_app_browser_object.create(value, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

			ref.on('loadstop').subscribe((event) => {
            this.screen_orientation_object.unlock();
          });
          ref.on('exit').subscribe((event) => {            
            this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
          });
		}else if (contentType == 'Cancel') {
			console.log('Cancel');
		}
	}

	qnaSite(video_data){
		this.platform_object.ready().then(() => {

			if(video_data.forum_tags == undefined || video_data.forum_tags == 'undefined'){
				var forum_tags = video_data.slug; 
			}else{
				var forum_tags = video_data.forum_tags; 
			}
			const myModalOptions: ModalOptions = {
				enableBackdropDismiss: false
			};
			this.storage_object.get('user_logged_in').then((val) => {
				this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {
					if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional' ){

						/*var confirmPopup = this.alert_controller_object.create({
						title: '',
						message: '<h4 style="text-align:center;"></h4><p style="text-align:center;font-weight:700;">Only for Heathcare professionals.</p>',
						enableBackdropDismiss: true,
						buttons: ['Dismiss']
						});
						confirmPopup.present();*/

						var email = data.email;
						var username = data.username;
						if(email =='' || username == '' || username == null){
							//openForumDetailDashboardModal(this.email, this.username);
							const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
							myModal.present();

							myModal.onDidDismiss((data) => {
							console.log("I have dismissed.");
							//alert("I have dismissed.");
							});

							myModal.onWillDismiss((data) => {
							console.log("I'm about to dismiss");
							//alert("I'm about to dismiss");
							});
						}else{
							this.redirectToForumDashboard({'email': email, 'username': username, 'first_time': 'no', 'forum_tags' : forum_tags, 'user_type':'Patient'});
						}

					}else{

						var email = data.email;
						var username = data.username;
						if(email =='' || username == '' || username == null){
							//openForumDetailDashboardModal(this.email, this.username);
							const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
							myModal.present();

							myModal.onDidDismiss((data) => {
							console.log("I have dismissed.");
							//alert("I have dismissed.");
							
							});

							myModal.onWillDismiss((data) => {
							console.log("I'm about to dismiss");
							//alert("I'm about to dismiss");
							
							});
						}else{
							this.redirectToForumDashboard({'email': email, 'username': username, 'first_time': 'no', 'forum_tags' : forum_tags, 'user_type':'Doctor'});
						}
					}  

				}, err => {
				//alert(err);
				});  
			});

		});    
	}

	redirectToForumDashboard(object){

		/*var params = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : localStorage.getItem('cv5userRoleId'),
			"userType": localStorage.getItem('cv5usrType'),
			"userEmail" : localStorage.getItem('cv5userEmail'),
			"Identity":localStorage.getItem('userIdentity'),
			"userName" : object.username,
			"tags" : object.forum_tags,
			"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
			"location":localStorage.getItem('location'),
			"specialities":localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType')
		};

	  	this.clevertap_object.recordEventWithNameAndProps("openedForum",params);*/

		var text_arr =[object.username, object.email, object.first_time, object.forum_tags];
		var text = JSON.stringify(text_arr);
		//var text = 'abhishek#*#abbhishek.chavan+1@oneleap.in#*#no';//+object.email+'#*#'+object.first_time;
		var encode_string = window.btoa(text);
		var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

		ref.on('loadstop').subscribe((event) => {
	      this.screen_orientation_object.unlock();
	    });

	    ref.on('exit').subscribe((event) => {            
	      this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
	    });

		if(object.user_type == 'Patient'){
        	var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

        	ref.on('loadstop').subscribe((event) => {
            this.screen_orientation_object.unlock();
          });
          ref.on('exit').subscribe((event) => {            
            this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
          });
        
      	}else{
        	var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

        	ref.on('loadstop').subscribe((event) => {
            this.screen_orientation_object.unlock();
          });
          ref.on('exit').subscribe((event) => {            
            this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
          });
      }  
	}

	forTrigerActionClevertap(type,action){
		this.storage_object.get('user_logged_in').then((val) => {
			if(val != 0 || val != null){
				var params = {
					"record_time" : this.dtStr,
					"record_date" : this.clevertapDate,
					"os" : localStorage.getItem('getDevicePlatform'),
					"userRoleId" : localStorage.getItem('cv5userRoleId'),
					"userType": localStorage.getItem('cv5usrType'),
					"userEmail" : localStorage.getItem('cv5userEmail'),
					"Identity":localStorage.getItem('userIdentity'),
					"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
					"location":localStorage.getItem('location'),
					"specialities":localStorage.getItem('usrSpecialities'),
					"subSpecialities": localStorage.getItem('cv5usrRolesubType'),
					"intractContenttype":type,
					"actionClicked":action
				};

				this.clevertap_object.recordEventWithNameAndProps("clickedOnTriggerAction",params);
			}

		});


	}

	dateCheck(from,till,current) {
		var fromDate,tillDate,currentDate;
	    fromDate = Date.parse(from);
	    tillDate = Date.parse(till);
	    currentDate = Date.parse(current);

	    if((currentDate <= tillDate && currentDate >= fromDate)) {
	        return true;
	    }else{
	    	return false;
	    }
	    
	}


}