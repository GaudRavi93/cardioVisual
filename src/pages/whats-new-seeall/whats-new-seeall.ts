import { Component, ViewChild, Injector} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, ToastController, Modal, ModalController, ModalOptions, Platform} from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import * as _ from 'underscore/underscore';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Http, Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { HttpService } from '../../services/HttpService';
import { LoadingService } from '../../services/loading-service';
import { File } from '@ionic-native/file';
import { CleverTap } from '@ionic-native/clevertap';
import { Storage } from '@ionic/storage';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';
import { ToastService } from '../../services/toast-service';
import {ScreenOrientation} from '@ionic-native/screen-orientation';


/**
 * Generated class for the WhatsNewSeeallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whats-new-seeall',
  templateUrl: 'whats-new-seeall.html',
})
export class WhatsNewSeeallPage {

	listintType:any;
	displayData:any;
	displayData1:any;
	displayData2:any;
	displayData3:any;
	displayData4:any;
	displayData5:any;
	displayData6:any;
	displayData7:any;
	displayData8:any;
	title:any;
	path:string;
	dtStr:any;
	clevertapDate:any;
	email: string = '';
	username: string;
	title_data: any;
	topVideotemplate: any;
	topVideo_listindata: any;
	education_item: any;
	knowMoreData: any;
	defaultimg: any;
	skeleton:boolean;
	events: any = {};
	updated_id:string;
  valid_ids:any;
  nav_params_object: NavParams;
  in_app_browser_object: InAppBrowser;
  loading_service_object: LoadingService;
  database_provider_object: DatabaseProvider;
  network_check_object: NetworkCheckProvider;
  toast_controller_object: ToastController;
  file_object: File;
  clevertap_object: any;
  http_service_object: HttpService;
  modal_controllar_object: ModalController;
  platform_object: Platform;
  storage_object: Storage;
  video_share_provider_object: VideosharesocialProvider;
  toast_service_object: ToastService;
  screen_orientation_object: ScreenOrientation;

	constructor(public navCtrl: NavController,public injector: Injector) {

			this.nav_params_object = injector.get<NavParams>(NavParams);
			this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
			this.loading_service_object = injector.get<LoadingService>(LoadingService);
			this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
			this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
			this.toast_controller_object = injector.get<ToastController>(ToastController);
			this.file_object = injector.get<File>(File);
			this.clevertap_object = new CleverTap();
			this.http_service_object = injector.get<HttpService>(HttpService);
			this.modal_controllar_object = injector.get<ModalController>(ModalController);
			this.platform_object = injector.get<Platform>(Platform);
			this.storage_object = injector.get<Storage>(Storage);
			this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);
			this.toast_service_object = injector.get<ToastService>(ToastService);
			this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);

			var localPath = this.file_object.dataDirectory;
			this.path = localPath.replace(/file:\/\//g, "");
			this.listintType = this.nav_params_object.get('params');
			this.dtStr = this.http_service_object.dtStr();
			this.clevertapDate = this.http_service_object.clevertapDate();
			this.title_data = this.nav_params_object.get('title_data');
			var network_type = this.network_check_object.getNetworkType();
			if(network_type != 'none') {
			setTimeout(() => {
				this.network_check_object.getPageAction('WhatsNewSeeallPage','start','',localStorage.getItem('cv5usrType'));
			}, 1000);
		}

		this.knowMoreData = this.nav_params_object.get('ListingData');
		//alert('listintType---->'+this.listintType);

		// switch (this.listintType) {
		// 	case "Calculators":
		// 		this.title = this.title_data;
		// 		this.defaultimg = "icon-icon-calculator-black";
		// 		break;
		// 	case "Quiz":
		// 		this.title = this.title_data;
		// 		this.defaultimg = "assets/idea_4177619.svg";
		// 		break;
		// 	case "Survey":
		// 		this.title = this.title_data;
		// 		this.defaultimg = "assets/surveyBlack.svg";
		// 		break;
		// 	case "Polls":
		// 		this.title = this.title_data;
		// 		this.defaultimg = 'assets/pollsBlack.svg';
		// 		break;
		// 	default:

		// 		break;
		// }
		console.log(' listintType  --->'+JSON.stringify(this.listintType));
		console.log(' ListingData  --->'+JSON.stringify(this.nav_params_object.get('ListingData')));

		var that = this;
	    this.events ={
	      'onItemClick': function (item: any) {

	      	//alert('item-->'+JSON.stringify(item));
	      	//alert('item-->'+JSON.stringify(item.name));
	      	//console.log('item-->'+JSON.stringify(item));
	      	that.forClevertapRecords(item, that.listintType, that.listintType);

	      	var values = JSON.parse(item.list_values);

	      	var ref = that.in_app_browser_object.create(values.url, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

	      	ref.on('loadstop').subscribe((event) => {
            that.screen_orientation_object.unlock();
          });
          ref.on('exit').subscribe((event) => {
            that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
          });

	      },
	      'onShare': function (item: any) {

	        event.stopPropagation();

	        //that.video_share_provider_object.shareSingleVideo(item);

	      },
	      'onFavorite': function (item: any) {
	        event.stopPropagation();

	        //that.markasFavorite(item)
	      },
	    };



	    this.events ={
	      'onItemClick': function (item: any) {

	      	that.forClevertapRecords(item, that.listintType, that.listintType);

	      	var values = JSON.parse(item.list_values);

	      	var ref = that.in_app_browser_object.create(values.url, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

	      	ref.on('loadstop').subscribe((event) => {
            that.screen_orientation_object.unlock();
          });
          ref.on('exit').subscribe((event) => {
            that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
          });

	      },
	      'onDrawnItemClick': function (item: any) {
	      	//alert('----item----->'+JSON.stringify(item));
	      	console.log('----item----->'+JSON.stringify(item));

	        //event.stopPropagation();
	        that.navCtrl.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
	        //that.video_share_provider_object.shareSingleVideo(item);

	      },
	      'onShare': function (item: any) {

	        event.stopPropagation();

	        that.video_share_provider_object.shareSingleVideo(item);

	      },
		  'onFavorite': function (item: any) {
				event.stopPropagation();

				that.markasFavorite(item)
			  },
	    };

	}

	ionViewDidLoad() {
		switch (this.listintType) {
			case "Topics":
				this.title = this.title_data[0].name;
				this.displayData = this.nav_params_object.get('ListingData');
			break;
			case "Experts":
				this.title = this.title_data[1].name;
				//alert(this.title);
				this.displayData1 = this.nav_params_object.get('ListingData');
			break;
			case "Tweets":
				this.title = this.title_data[6].name;
				this.displayData2 = this.nav_params_object.get('ListingData');
			break;
			case "Blogs":
				this.title = this.title_data[5].name;
				this.displayData3 = this.nav_params_object.get('ListingData');
			break;
			case "Playlist":
				this.title = this.title_data[3].name;
				this.displayData4 = this.nav_params_object.get('ListingData');
			break;
			case "Forums":
				this.title = this.title_data[4].name;
				this.displayData5 = this.nav_params_object.get('ListingData');
			break;

			// case "Calculators":
			// 	this.title = this.title_data[2].name;
			// 	this.displayData6 = this.nav_params_object.get('ListingData');
			// break;
			case "TOP VIDEOS":
				this.title = this.title_data[7].name;
				this.displayData7 = this.nav_params_object.get('ListingData');
				console.log('this.displayData7: ', this.displayData7);
				//alert('type--->'+JSON.stringify(this.displayData7[0].type));
				//if (this.displayData7[0].template == 'expert_playlist' && this.displayData7[0].type == 'featured_video_new') {
				if (this.displayData7[0].template == 'expert_playlist') {
					//alert('this.displayData7-->'+JSON.stringify(this.displayData7));
					this.skeleton = true;
					var custom_data_1 = [];
		            this.topVideotemplate = this.displayData7[0].template;
		            this.topVideo_listindata = this.displayData7[0];
		            var listValues = JSON.parse(this.displayData7[0].list_values);
		            var that = this;
		            _.each(listValues, function(value, key){
		              var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");
		              that.database_provider_object.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
		                if(topic_data.length > 0){
		                  custom_data_1.push(topic_data[0]);
		                }
		              });
		            });
		            setTimeout(() => {
		            that.education_item = custom_data_1;
		            //alert('--2--------education_item--->'+JSON.stringify(that.education_item));
		            console.log('--2-----education_item--->'+JSON.stringify(that.education_item));
		            },1000);
				}else{
					this.skeleton = false;
				}
			break;
			case "Calculators":
				this.title = this.title_data;
				this.defaultimg = "icon-icon-calculator";
				break;
			case "Quiz":
				this.title = this.title_data;
				this.defaultimg = "assets/idea_4177619.svg";
				break;
			case "Survey":
				this.title = this.title_data;
				this.defaultimg = "assets/surveyBlack.svg";
				break;
			case "Polls":
				this.title = this.title_data;
				this.defaultimg = 'assets/pollsBlack.svg';
				break;
			case "Drawn":
				this.title = this.title_data;
				this.displayData8 = this.nav_params_object.get('ListingData');
				break;


			default:
			// code...
			break;
		}
		console.log('ionViewDidLoad WhatsNewSeeallPage');
	}

	ionViewWillLeave(){
		var network_type = this.network_check_object.getNetworkType();
		if(network_type != 'none') {
		this.network_check_object.getPageAction('WhatsNewSeeallPage','end','',localStorage.getItem('cv5usrType'));
		}
	}

    getArraysIntersection(a1, a2) {
        return a1.filter(function (n) {
          return a2.indexOf(n) !== -1;
        });
    }
    subtopicQueryProvider(tableName, subTopicQuery, list_json) {
        return new Promise((resolve, reject) => {
          this.database_provider_object
            .fetchAllData(tableName, subTopicQuery)
            .then((topic_data) => {
              var topic_ids = "['" + _.pluck(topic_data, "id") + "']";
              var filtered_valid_ids = this.getArraysIntersection(
                list_json,
                topic_ids
              );

              resolve({ valid_ids: parseInt(filtered_valid_ids) });
            })
            .catch((error) => {
              console.log("Error occurred");
              reject({ text: "Error occurred" });
            });
        });
    }

    subtopicDetailQueryProvider(subtopicTable, subTopicDetailQuery) {
        return new Promise((resolve, reject) => {
          this.database_provider_object
            .fetchAllData(subtopicTable, subTopicDetailQuery)
            .then((topic_data) => {
              resolve({ subtopicData: topic_data[0] });
            })
            .catch((error) => {
              console.log("Error occurred");
              reject({ texterror: "Error occurred-->" + error });
            });
        });
    }

  goToDetails(item, type, list) {

    switch (type) {
      case "expert_playlist":
        this.loading_service_object.show();
        var list_json = JSON.parse(item.list_values);
        //console.log("whatsnew topic" + JSON.stringify(list_json));
        var subtopicQueryResult = "";
        if (item.source == "education") {
          var subtopicTable = "new_sub_topics";
          var subTopicQuery: string[] = new Array(
            "where new_sub_topics.id IN (" + list_json + ") AND isActive = 1"
          );
          this.subtopicQueryProvider(
            subtopicTable,
            subTopicQuery,
            list_json
          ).then((subtopicQueryResult) => {
            console.log(JSON.stringify(subtopicQueryResult));
            var subTopicDetailQuery: string[] = new Array(
              "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                subtopicQueryResult["valid_ids"] +
                " AND isActive = 1"
            );
            console.log(subTopicDetailQuery);
            this.subtopicDetailQueryProvider(
              subtopicTable,
              subTopicDetailQuery
            ).then((subtopicDetailQueryResult) => {
              console.log(JSON.stringify(subtopicDetailQueryResult));
              var topicData = subtopicDetailQueryResult["subtopicData"];
              console.log("pqr---->" + topicData);
              this.forClevertapRecords(item, type, list);
              this.navCtrl.push("WhatsNewDetailsPage", {
                data: item,
                type: item.template,
                index: 0,
                header: "hide",
                display_playlist: topicData,
                sendTo: list,
              });
              this.loading_service_object.hide();
            });
          });
        } else {
          var tableName = "information";
          var subTopicQuery: string[] = new Array(
            "where information.id IN (" + list_json + ") AND isActive = 1"
          );
          this.subtopicQueryProvider(tableName, subTopicQuery, list_json).then(
            (infoQueryResult) => {
              var subTopicDetailQuery: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                  infoQueryResult["valid_ids"] +
                  " AND isActive = 1"
              );
              this.subtopicDetailQueryProvider(
                subtopicTable,
                subTopicDetailQuery
              ).then((infoDetailQueryResult) => {
                console.log(JSON.stringify(infoDetailQueryResult));
                var infotopicData = infoDetailQueryResult["subtopicData"];
                console.log("pqr---->" + infotopicData);
                this.forClevertapRecords(item, type, list);
                this.navCtrl.push("WhatsNewDetailsPage", {
                  data: item,
                  type: item.template,
                  index: 0,
                  header: "hide",
                  display_playlist: infotopicData,
                  sendTo: list,
                });
                this.loading_service_object.hide();
              });
            }
          );
        }
        break;
      case "video_detail":
        this.loading_service_object.show();
        var list_json = JSON.parse(item.list_values);
        if (item.source == "education") {
          var json_query: string[] = new Array(
            "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
              list_json.Condition[0] +
              " AND isActive = 1"
          );
          this.database_provider_object
            .fetchAllData("new_sub_topics", json_query)
            .then((topic_data) => {
              this.forClevertapRecords(item, type, list);
              this.navCtrl.push("WhatsNewDetailsPage", {
                data: item,
                type: type,
                index: 0,
                header: "hide",
                display_data: topic_data[0],
                sendTo: list,
              });
              this.loading_service_object.hide();
            });
        } else if (item.source == "information") {
          var json_query: string[] = new Array(
            "join information_data on information.id = information_data.id where information.id = " +
              list_json.Expert[0] +
              " AND isActive = 1"
          );
          this.database_provider_object
            .fetchAllData("information", json_query)
            .then((topic_data) => {
              this.forClevertapRecords(item, type, list);
              this.navCtrl.push("WhatsNewDetailsPage", {
                data: item,
                type: type,
                index: 0,
                header: "hide",
                display_data: topic_data[0],
                sendTo: list,
              });
              this.loading_service_object.hide();
            });
        }
        break;
      case "wordpress_blog":
        var network_type = this.network_check_object.getNetworkType();
        if (network_type == "none") {
          this.toast_controller_object
            .create({
              message: "You are now offline.",
              position: "bottom",
              duration: 5000,
            })
            .present();
        } else {
          this.forClevertapRecords(item, type, list);
          if (
            item.list_values == undefined ||
            item.list_values == "undefined"
          ) {
            var ref = this.in_app_browser_object.create(
              item.blog_link,
              "_blank",
              "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
            );
          } else {
            var values = JSON.parse(item.list_values);
            var ref = this.in_app_browser_object.create(
              values.url,
              "_blank",
              "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
            );
          }
        }
        break;
      case "twitter_msg":
        var network_type = this.network_check_object.getNetworkType();
        if (network_type == "none") {
          this.toast_controller_object
            .create({
              message: "You are now offline.",
              position: "bottom",
              duration: 5000,
            })
            .present();
        } else {
          this.forClevertapRecords(item, type, list);
          var url =
            "https://twitter.com/cardiovisualapp/status/" + item.tweet_id;
          var ref = this.in_app_browser_object.create(
            url,
            "_system",
            "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
          );
        }
        break;
      case "tab_list":
        this.forClevertapRecords(item, type, list);
        localStorage.setItem("segment_name", item.source);
        this.navCtrl.push("ItemDetailsPageTabs", {
          pageItem: item.name,
          data: item,
          request_from: "whatsnew_page",
        });
        break;
      case "play_video":
        var data = JSON.parse(item.list_values);
        var video_url = data.video_url;

        let options = {
          successCallback: () => {
            console.log("Video played");
          },
          errorCallback: (e) => {
            console.log("Error streaming");
          },
          //orientation: 'landscape',
          shouldAutoClose: true,
          //controls: false
        };

        var network_type = this.network_check_object.getNetworkType();
        if (network_type == "none") {
          this.toast_controller_object
            .create({
              message: "You are now offline.",
              position: "bottom",
              duration: 5000,
            })
            .present();
        } else {
          //this.streamingMedia.playVideo(video_url, options);
        }
        break;
    }
  }

	forClevertapRecords(data,type,list){
	    switch (type) {
	      case "wordpress_blog":
		        if(list == 'Calculator'){
	          		var ContentFor = "Calculator";
	          		var ClickedContent = "Calculator";
		        }else{
		          var ContentFor = "Blog";
		          var ClickedContent = "Blog";
		        }
	        break;
	      case "twitter_msg":
	         var ContentFor = "Tweets";
	         var ClickedContent = "'"+data.tweet_text+"'";
	        break;
		  case "Calculators":
	      case "Quiz":
	      case "Survey":
	      case "Polls ":
	         var ContentFor = "Know More Interact";
	         var ClickedContent = "'"+data.name+"'";
	      break;
	      default:
	        var ContentFor = "'"+data.source+"'";
	        var ClickedContent = "'"+data.name+"'";
	        break;
	    }
	    var params = {
	      "record_time" : this.dtStr,
	      "record_date" : this.clevertapDate,
	      "os" : localStorage.getItem('getDevicePlatform'),
	      "modelNo" : localStorage.getItem('modelNo'),
	      "deviceversion" : localStorage.getItem('getDeviceversion'),
	      "userRoleId" : localStorage.getItem('cv5userRoleId'),
	      "userType": localStorage.getItem('cv5usrType'),
	      "userEmail" : localStorage.getItem('cv5userEmail'),
	      "specialities":localStorage.getItem('usrSpecialities'),
	      "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
	      "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
	      "location":localStorage.getItem('location'),
	      "whatsNewContentFor":ContentFor,
	      "listContentType":list,
	      "nameOfClickedContent": ClickedContent
	    };
	    // Set clevertap Custom AppLaunch event.
	    //alert('params-->'+JSON.stringify(params));
    	this.clevertap_object.recordEventWithNameAndProps("clickedOnWhatsNewSeeAll", params);
  	}

/*	qnaSite(forum){
		this.platform_object.ready().then(() => {

			var network_type = this.network_check_object.getNetworkType();
			if(network_type == 'none'){

				this.toast_controller_object.create({


				message: 'You are now offline.',
				position: 'bottom',
				duration: 5000
				}).present();

			} else {
				const myModalOptions: ModalOptions = {
					enableBackdropDismiss: false
				};
				this.storage_object.get('user_logged_in').then((val) => {
					this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {

						if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional' ){


							this.email = data.email;
							this.username = data.username;
							if(this.email =='' || this.username == '' || this.username == null){
								//openForumDetailDashboardModal(this.email, this.username);
								const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
								myModal.present();

								myModal.onDidDismiss((data) => {
								console.log("I have dismissed.");
								console.log(data);
								});

								myModal.onWillDismiss((data) => {
								console.log("I'm about to dismiss");
								console.log(data);
								});
							}else{
								this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'user_type':'Patient'});

							}


						}else{
							this.email = data.email;
							this.username = data.username;
							if(this.email =='' || this.username == '' || this.username == null){
								//openForumDetailDashboardModal(this.email, this.username);
								const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
								myModal.present();

								myModal.onDidDismiss((data) => {
								console.log("I have dismissed.");
								console.log(data);
								});

								myModal.onWillDismiss((data) => {
								console.log("I'm about to dismiss");
								console.log(data);
								});
							}else{
								this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'user_type':'Doctor'});
							}
						}

					//console.log('onboardingImgs-->'+JSON.stringify(this.onboardingImgs));
					}, err => {
						console.log('err->'+err);
					});
				});
			}
		});
	}


	redirectToForumDashboard(object){

		var params = {
			"record_time" : this.dtStr,
			"record_date" : this.clevertapDate,
			"os" : localStorage.getItem('getDevicePlatform'),
			"userRoleId" : localStorage.getItem('cv5userRoleId'),
			"userType": localStorage.getItem('cv5usrType'),
			"userEmail" : localStorage.getItem('cv5userEmail'),
			"Identity":localStorage.getItem('userIdentity'),
			"userName" : object.username,
			"tags" : "From WhatsNew SeeAll",
			"nameOfClickedContent": object.forum_title,
			"location":localStorage.getItem('location'),
			"userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
			"specialities":localStorage.getItem('usrSpecialities'),
			"subSpecialities": localStorage.getItem('cv5usrRolesubType'),
		};

		this.clevertap_object.recordEventWithNameAndProps("openedForum",params);
		//var text_arr =[object.username, object.email, object.first_time, 'd/'+object.forum_id+'-'+object.forum_slug];
		var text_arr =[object.username, object.email, object.first_time, object.forum_slug];
		var text = JSON.stringify(text_arr);

		var encode_string = window.btoa(text);

		if(object.user_type == 'Patient'){
        	var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

	    }else{
	        var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
	    }
	}*/

	onEvent(event: string, item: any, e: any) {
		if (e) {

			e.stopPropagation();
		}
		if (this.events[event]) {
			this.events[event](item);
		}
	}

	markasFavorite(group){
		this.platform_object.ready().then(() => {
			var network_type = this.network_check_object.getNetworkType();
			if(network_type == 'none'){

			  this.toast_controller_object.create({
			    message: 'You are now offline.',
			    position: 'bottom',
			    duration: 5000
			  }).present();
			} else {


			if(group.isFavourite == 0 ) {

			   this.storage_object.get('user_logged_in').then((val) => {
			   this.database_provider_object.setFavorites(val, group.id);
			   this.toast_service_object.presentToast("Added to Favourites.");
			 });
			} else {
			    this.storage_object.get('user_logged_in').then((val) => {
			    this.database_provider_object.setFavorites(val, group.id);
			    this.toast_service_object.presentToast("Removed from Favourites.");
			  });
			}
			group.isFavourite = !group.isFavourite

			}
		});
	}

	onPromptForQna(forum){
    this.video_share_provider_object.discussPromptForProffesional(forum,'From WhatsNew SeeAll','From WhatsNew');
	}
}
