import { Component, ViewChild, Injector } from "@angular/core";
import {
  IonicPage,
  NavController,
  Slides,
  AlertController,
  ToastController,
  Platform,
  LoadingController,
  Modal,
  ModalController,
  ModalOptions,
  NavParams,
} from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";
import * as _ from "underscore/underscore";
import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser";
import { Http, Headers } from "@angular/http";
import { HTTP } from "@ionic-native/http";
import { NetworkCheckProvider } from "../../providers/network_check/network_check";
import { HttpService } from "../../services/HttpService";
import { LoadingService } from "../../services/loading-service";
import { File } from "@ionic-native/file";
import { Storage } from "@ionic/storage";
import { CleverTap } from "@ionic-native/clevertap";
import { InappProvider } from "../../providers/inapp/inapp";
import { OneSignal } from "@ionic-native/onesignal";
import { AppVersion } from "@ionic-native/app-version";
import { VideosharesocialProvider } from "../../providers/videosharesocial/videosharesocial";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

/**
 * Generated class for the WhatsNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-whats-new",
  templateUrl: "whats-new.html",
})
export class WhatsNewPage {
  @ViewChild("slides") slides: Slides;
  @ViewChild(Slides) slideshows: Slides;
  slideshow: any;
  excerpt: any;
  tweets_data: any;
  expert_data: any;
  topic_data: any;
  playlist_data: any;
  blog_post: any;
  isLastArrow: boolean = false;
  isFirstArrow: boolean = true;
  path: string;
  network_type: string;
  localapi: any;
  dtStr: any;
  clevertapDate: any;
  online: boolean = true;
  liveId: any;
  roleId: any;
  userType: any;
  email: string = "";
  public counter = 0;
  forum_data: any;

  isLastArrowForTweet: boolean = false;
  isFirstArrowForTweet: boolean = true;
  isLastArrowForForum: boolean = false;
  isFirstArrowForForum: boolean = true;
  username: string;
  calculator_data: any;
  title_data: any;
  app_version_number: any;
  platformType: any;
  topVideo_data: any;
  education_item: any;
  topVideotemplate: any;
  topVideo_listindata: any;
  skeleton: boolean;
  topVideo_DetailsTemplate: any;
  quiz_data: any;
  survey_data: any;
  polls_data: any;
  @ViewChild("slides1") slides1: Slides;
  sponserSlides: any;
  drawnImg: any;
  drawnData: any;
  t_data: any;
  user_type: string;
  updated_id: string;
  valid_ids: any;
  isoDateFormat: any;
  database_provider_object: DatabaseProvider;
  nav_params_object: NavParams;
  in_app_browser_object: InAppBrowser;
  http_object: Http;
  alert_controller_object: AlertController;
  network_check_object: NetworkCheckProvider;
  toast_controller_object: ToastController;
  http_service_object: HttpService;
  loading_service_object: LoadingService;
  file_object: File;
  storage_object: Storage;
  platform_object: Platform;
  loading_controller_object: LoadingController;
  clevertap_object: any;
  onesignal_object: OneSignal;
  modal_controllar_object: ModalController;
  app_version_object: AppVersion;
  video_share_provider_object: VideosharesocialProvider;
  screen_orientation_object: ScreenOrientation;
  in_app_provider_object: InappProvider;

  constructor(public navCtrl: NavController, public injector: Injector) {
    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.database_provider_object =
      injector.get<DatabaseProvider>(DatabaseProvider);
    this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
    this.http_object = injector.get<Http>(Http);
    this.alert_controller_object =
      injector.get<AlertController>(AlertController);
    this.network_check_object =
      injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.toast_controller_object =
      injector.get<ToastController>(ToastController);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.loading_service_object = injector.get<LoadingService>(LoadingService);
    this.file_object = injector.get<File>(File);
    this.storage_object = injector.get<Storage>(Storage);
    this.platform_object = injector.get<Platform>(Platform);
    this.loading_controller_object =
      injector.get<LoadingController>(LoadingController);
    this.clevertap_object = new CleverTap();
    this.onesignal_object = injector.get<OneSignal>(OneSignal);
    this.modal_controllar_object =
      injector.get<ModalController>(ModalController);
    this.app_version_object = injector.get<AppVersion>(AppVersion);
    this.video_share_provider_object = injector.get<VideosharesocialProvider>(
      VideosharesocialProvider
    );
    this.screen_orientation_object =
      injector.get<ScreenOrientation>(ScreenOrientation);
    this.in_app_provider_object = injector.get<InappProvider>(InappProvider);

    /*check is device is active or not*/
    this.storage_object.get("user_logged_in").then((val) => {
      var device_token = localStorage.getItem("getDeviceuuid");
      // var localapi = this.http_service_object.getApi();
      var deviceData = {
        userId: val,
        deviceToken: device_token,
      };
      this.http_service_object
        .getDeviceDatas(deviceData)
        .subscribe((device_data) => {
          if (device_data[0].status == 0) {
            this.logout();
          }
        });
    });

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if (network_type != "none") {
        setTimeout(() => {
          this.network_check_object.getPageAction(
            "WhatsNewPage",
            "start",
            "",
            localStorage.getItem("cv5usrType")
          );
        }, 1000);
      }
      var localPath = this.file_object.dataDirectory;
      this.path = localPath.replace(/file:\/\//g, "");
      this.network_type = this.network_check_object.getNetworkType();
      var upgradeApp = this.nav_params_object.get("forAppUpdate");

      if (upgradeApp == "forAppUpgrade") {
        // code...
        var loading = this.loading_controller_object.create({
          //spinner: 'ios',
          spinner: "dots",
          content:
            "<div class='custom-spinner-container'>Please wait, app is being updated.</div>",
          duration: 10000,
          enableBackdropDismiss: false,
        });
        loading.present();
      }
      this.localapi = this.http_service_object.getApi();
      this.dtStr = this.http_service_object.dtStr();

      this.clevertapDate = this.http_service_object.clevertapDate();
      this.isoDateFormat = new Date().toISOString();

      //console.log("PLATFORM READY IN PROVIDER");
      var network_type = this.network_check_object.getNetworkType();
      if (network_type == "none") {
        this.online = false;

        this.toast_controller_object
          .create({
            message: "You are now offline.",
            position: "bottom",
            duration: 5000,
          })
          .present();
      } else {
        this.online = true;
      }
      localStorage.setItem("search_page", "");
      this.platformType = localStorage.getItem("getDevicePlatform");

      this.initializingapp();
    });
  }

  initializingapp() {
    this.platform_object.ready().then(() => {
      var userID = localStorage.getItem("userliveId");
      var local_user_type = localStorage.getItem("cv5usrType");
      this.email = localStorage.getItem("cv5userEmail");
      this.http_service_object.updateLastActiveUser(userID);
      localStorage.setItem("segment_name", "education");
      this.in_app_provider_object.canShareAccess(local_user_type);
      console.log("whatsnew 161");
      this.http_service_object.getUserInfoByLiveId(userID).subscribe(
        (usrdata) => {
          if (
            usrdata.referral_code == 0 ||
            usrdata.referral_code == null ||
            usrdata.referral_code == "null"
          ) {
            var user_referral_code =
              usrdata.email.substring(0, 4) +
              "" +
              Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

            var properties1 = {
              canonicalIdentifier: "cardiovisual",
              title: "CardioVisual",
            };
            // optional fields
            var analytics = {
              channel: "cardio_android_app",
              feature: "sharing",
              campaign: "refereres",
              stage: "share_social",
              type: 2,
            };

            // optional fields
            var properties = {
              match_duration: -1,
              profession: local_user_type,
              user_email: usrdata.email,
              clevertapId: localStorage.getItem("getCleverTapID"),
              time_stamp: Date.now(),
              referral_code: localStorage.getItem("referral_code"),
            };

            //var env = "live";
            var env = "";
            var branchUniversalObj = null;
            const Branch = window["Branch"];
            Branch.createBranchUniversalObject(properties1).then(function (
              res
            ) {
              res.generateShortUrl(analytics, properties).then(function (res) {
                localStorage.setItem("isLinkSet", res.url);
              });
            });

            this.database_provider_object.updateData(
              "UPDATE new_user_info set referral_code=" +
                user_referral_code +
                ', branchLink="' +
                localStorage.getItem("isLinkSet") +
                '"'
            );

            var params = {
              referral_code: user_referral_code,
              branchLink: localStorage.getItem("isLinkSet"),
            };
            this.http_object
              .put(this.localapi + "/api/cardiovisualusers/" + userID, params)
              .subscribe();
            localStorage.setItem("referral_code", user_referral_code);
          }

          localStorage.setItem("referral_code", usrdata.referral_code);
          var referred_by = localStorage.getItem("referred_by");

          if (
            (usrdata.referred_by == "" ||
              usrdata.referred_by == "null" ||
              usrdata.referred_by == null ||
              usrdata.referred_by == 0) &&
            usrdata.referral_code != referred_by
          ) {
            this.http_service_object
              .getUserdataByReferralcode(referred_by)
              .subscribe((reffered_by_user) => {
                //update registered user with user_id referred_by column
                this.database_provider_object.updateData(
                  "UPDATE new_user_info set referred_by=" +
                    reffered_by_user[0].id
                );
                var params = { referred_by: reffered_by_user[0].id };
                this.http_object
                  .put(
                    this.localapi + "/api/cardiovisualusers/" + userID,
                    params
                  )
                  .subscribe((data) => {});
              });
          }
          this.clevertap_object.profileGetCleverTapID().then((id) => {
            localStorage.setItem("getCleverTapID", id);
          });
          setTimeout(() => {
            if (
              usrdata.clevertapId == "" ||
              usrdata.clevertapId == "null" ||
              usrdata.clevertapId == "undefined" ||
              usrdata.clevertapId != localStorage.getItem("getCleverTapID")
            ) {
              this.loading_service_object.generateandSaveLinks(
                userID,
                local_user_type,
                usrdata.email
              );

              this.clevertap_object.profileSet({
                Name: "'" + this.getNameFromEmail(usrdata.email) + "'",
                Location: "'" + usrdata.location + "'",
                UserRoleId: "'" + usrdata.userRoleId + "'",
                UserType: "'" + local_user_type + "'",
                Specialities: "'" + usrdata.specialities + "'",
                SubSpecialities: "'" + usrdata.userRoleSubType + "'",
                medium: "'" + usrdata.medium + "'",
              });

              if (localStorage.getItem("userRegistrationClevertap") == "yes") {
                var usrParams = {
                  record_time: this.dtStr,
                  record_date: this.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  userRoleId: usrdata.userRoleId,
                  userType: local_user_type,
                  specialities: usrdata.specialities,
                  subSpecialities: usrdata.userRoleSubType,
                  userEmail: usrdata.email,
                  medium: usrdata.medium,
                  verified: usrdata.verified,
                  location: usrdata.location,
                };
                switch (usrdata.medium) {
                  case "app":
                    this.clevertap_object.recordEventWithNameAndProps(
                      "userRegistration",
                      usrParams
                    );
                    break;
                  case "facebook":
                    this.clevertap_object.recordEventWithNameAndProps(
                      "facebookLogin",
                      usrParams
                    );
                    break;
                  case "google":
                    this.clevertap_object.recordEventWithNameAndProps(
                      "googleLogin",
                      usrParams
                    );
                    break;
                }
                localStorage.setItem("userRegistrationClevertap", "no");
              }
            } else {
              localStorage.setItem("getCleverTapID", usrdata.clevertapId);
            }
          }, 500);
        },
        (err) => {
          console.log("err->" + err);
        }
      );

      /* for updating  oneSignal player Id  into database start*/
      if (
        localStorage.getItem("updatedPlayerId") == "" ||
        localStorage.getItem("updatedPlayerId") == null
      ) {
        this.onesignal_object.getIds().then((ids) => {
          this.http_object
            .put(this.localapi + "/api/CardiovisualUsers/" + userID, {
              onesignalPlayerId: ids.userId,
            })
            .subscribe(
              (userDataUpdateSuccess) => {
                localStorage.setItem("updatedPlayerId", "true");
              },
              (userDataUpdateError) => {
                //console.log('userDataUpdateError--->'+userDataUpdateError.text());
              }
            );
        });
      }
      /* End */

      //Fired when the component routing to is about to animate into view.
      var no_Sync = localStorage.getItem("onlyForWhatsnew");

      //var no_Sync = localStorage.getItem('app_sync_whatsnew');
      var sync_status = localStorage.getItem("app_sync_dashboard");

      if (no_Sync == "nosync" || (this.online && sync_status == "no")) {
        localStorage.setItem("onlyForWhatsnew", "");
        if (no_Sync == "nosync") {
          // code...
          var timeout = 1200;
          var loading = this.loading_controller_object.create({
            spinner: "dots",
            content:
              "<div class='custom-spinner-container'> Please wait, Getting the app ready for you.</div>",
            duration: 1200,
            enableBackdropDismiss: false,
          });
          loading.present();
        } else {
          var timeout = 500;
        }

        setTimeout(() => {
          var title_data_query = new Array(
            "WHERE screen='whatsnew' AND is_active=1"
          );
          this.database_provider_object
            .fetchAllData("whatsnewtitle", title_data_query)
            .then((titleData) => {
              this.title_data = titleData;
            });
        }, timeout);

        this.http_service_object.getWhatsnewData().subscribe(
          (fetchWhatsnewData) => {
            var dataAsperType = [];
            dataAsperType = _.filter(fetchWhatsnewData, function (value) {
              return value.isFor == local_user_type || value.isFor == "all";
            });
            var dataAsPerTypeJson = JSON.stringify(dataAsperType);
            dataAsPerTypeJson = dataAsPerTypeJson.replace(
              /"image"/gi,
              '"image_url"'
            );
            dataAsperType = JSON.parse(dataAsPerTypeJson);
            //           _.each(dataAsperType,function(item,index){
            //             dataAsperType[index].image_url = item.image;
            //           });

            setTimeout(() => {
              this.slideshow = _.sortBy(
                _.where(dataAsperType, { type: "banners" }),
                "position"
              ).reverse();
              this.sponserSlides = _.sortBy(
                _.where(dataAsperType, { type: "sponsor_banners" }),
                "position"
              ).reverse();
              this.topic_data = _.sortBy(
                _.where(dataAsperType, { type: "topics" }),
                "position"
              ).reverse();
              this.expert_data = _.sortBy(
                _.where(dataAsperType, { type: "speakers" }),
                "position"
              ).reverse();

              this.topVideo_data = _.sortBy(
                _.where(dataAsperType, { type: "featured_video_new" }),
                "position"
              ).reverse();

              if (_.size(this.topVideo_data) > 0) {
                this.skeleton = true;
                //console.log('tthis.topVideo_data-->'+JSON.stringify(this.topVideo_data));

                var custom_data_0 = [];
                this.topVideotemplate = this.topVideo_data[0].template;
                this.topVideo_listindata = this.topVideo_data[0];
                var listValues = JSON.parse(this.topVideo_data[0].list_values);
                var that = this;
                _.each(listValues, function (value, key) {
                  var json_query: string[] = new Array(
                    "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                      value +
                      " AND isActive = 1"
                  );
                  that.database_provider_object
                    .fetchAllData("new_sub_topics", json_query)
                    .then((topic_data) => {
                      if (topic_data.length > 0) {
                        custom_data_0.push(topic_data[0]);
                      }
                    });
                });
                setTimeout(() => {
                  that.education_item = custom_data_0;
                  //alert('--0--------education_item--->'+JSON.stringify(that.education_item));
                  console.log('education_item->', JSON.stringify(that.education_item));
                }, 1000);
              } else {
                this.skeleton = false;
              }

              var videoDetailsTemplate = _.sortBy(
                _.where(dataAsperType, { type: "featured_video_details" }),
                "position"
              ).reverse();
              if (_.size(videoDetailsTemplate) > 0) {
                this.skeleton = true;
                this.topVideo_DetailsTemplate = videoDetailsTemplate;
              } else {
                this.skeleton = false;
              }

              //this.calculator_data = _.sortBy(_.where(dataAsperType, {type: "calculators"}), 'position').reverse();
              var calculatorData = _.sortBy(
                _.where(dataAsperType, { type: "calculators" }),
                "position"
              ).reverse();
              if (_.size(calculatorData) > 0) {
                this.calculator_data = calculatorData;
              } else {
                this.calculator_data = "";
              }
              //alert('this.calculator_data---->'+JSON.stringify(this.calculator_data));

              var quizData = _.sortBy(
                _.where(dataAsperType, { type: "knowMore_quiz" }),
                "position"
              ).reverse();
              if (_.size(quizData) > 0) {
                this.quiz_data = quizData;
              } else {
                this.quiz_data = "";
              }

              var surveyData = _.sortBy(
                _.where(dataAsperType, { type: "knowMore_survey" }),
                "position"
              ).reverse();
              if (_.size(surveyData) > 0) {
                this.survey_data = surveyData;
              } else {
                this.survey_data = "";
              }

              var pollsData = _.sortBy(
                _.where(dataAsperType, { type: "knowMore_polls" }),
                "position"
              ).reverse();
              if (_.size(pollsData) > 0) {
                this.polls_data = pollsData;
              } else {
                this.polls_data = "";
              }

              this.playlist_data = _.sortBy(
                _.where(dataAsperType, { type: "curated_lists" }),
                "position"
              ).reverse();

              var userData = new Array("");
              this.database_provider_object
                .fetchAllData("new_user_info", userData)
                .then((userresult) => {
                  var data = userresult[0];
                  /*if(data.user_role_sub_type == 'medical-device-pharma-professional' || data.user_role_sub_type == 'Medical Device/Pharma Professional' || data.user_role_sub_type == 'patient' || data.user_role_sub_type == 'Patient' || data.user_role_sub_type == 'curious-learner' || data.user_role_sub_type == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){
                  this.forum_data = []; 
              }else{*/
                  this.http_service_object
                    .getForum()
                    .subscribe((forum_data) => {
                      this.forum_data = _.filter(forum_data, function (f_data) {
                        if (
                          f_data.isFor == data.user_type ||
                          f_data.isFor == "all"
                        ) {
                          return f_data;
                        }
                      });
                    });
                  //}
                });

              //wordpress blog message api
              // this.http_service_object.getBlogs().subscribe(blog_data => {
              //   this.blog_post = blog_data;
              // });

              //twitter messages
              // this.http_service_object.getTweets().subscribe(tweets_data => {
              //   this.tweets_data = tweets_data;
              // });

              //drawon image
              this.drawnImg = _.sortBy(
                _.where(dataAsperType, { type: "draw_on_images" }),
                "position"
              ).reverse();
              if (_.size(this.drawnImg) > 0) {
                var drawn_data = [];
                var listValues = JSON.parse(this.drawnImg[0].list_values);
                var that = this;
                _.each(listValues, function (value, key) {
                  var json_query: string[] = new Array(
                    "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                      value +
                      " AND isActive = 1"
                  );
                  that.database_provider_object
                    .fetchAllData("new_sub_topics", json_query)
                    .then((topic_data) => {
                      if (topic_data.length > 0) {
                        drawn_data.push(topic_data[0]);
                      }
                    });
                });
                setTimeout(() => {
                  that.drawnData = drawn_data;
                }, 1000);
              }
            }, timeout);
          },
          (err) => {
            console.log("err->" + err);
          }
        );
      } else if (this.online && sync_status == "yes") {
        /*----------------- Core API Sync logic start here :Sanjeev ---------------------------*/
        //console.log('liveId-->'+liveId);
        this.network_check_object.getallPageAction(
          localStorage.getItem("cv5usrType")
        );
        this.database_provider_object.updateUserLocalDB(userID);
        this.database_provider_object.getTopicsAPIData(local_user_type);
        // Get categories detail from API
        this.database_provider_object.getCategoriesAPIData(local_user_type);
        // Get SubCategories detail from API
        console.log('local_user_type',local_user_type)
        this.database_provider_object.dashboardSubTopicsAPIData(
          local_user_type
        );
        // Get Splashes from live link.
        this.database_provider_object.getCardioSplashes(local_user_type);
        //insert playlist data from api
        this.database_provider_object.insertPlaylistsAPIData(userID);
        //insert Favorites data from api
        this.database_provider_object.getFavoritesAPIData(userID);

        this.database_provider_object.getOrderDetailsAPIData(userID);
        //information table
        this.database_provider_object.dashboardInformationAPIData(
          local_user_type
        );
        //channels table
        this.database_provider_object.getChannelsApiData(local_user_type);
        //insert Information Favorites data from api
        this.database_provider_object.getInformationFavoritesAPIData(userID);
        //custom_lisiting
        this.database_provider_object.getCutomlistingApi();
        //custom video json
        this.database_provider_object.getCutomVideoJsonApi();
        //sponsored by table
        this.database_provider_object.getSponsoredByData(local_user_type);
        //whatsnew data by table
        this.database_provider_object.getWhatsnewData(local_user_type);

        //whatsnew page section title
        this.database_provider_object.getWhatsnewSectionTitleData(
          local_user_type
        );

        //custom playlist
        this.database_provider_object.getCustomPlaylistData(userID);

        var notiCondition = new Array(
          "WHERE isActive=1 ORDER BY position DESC"
        );
        this.database_provider_object
          .fetchAllData("freshNotificationList", notiCondition)
          .then((notiresult) => {
            console.log(
              "ionViewDidLoad notiresult--->" + JSON.stringify(notiresult)
            );
            if (_.size(notiresult) > 0) {
              var maxValObject = _.max(notiresult, "notification_id");
              if (maxValObject.notification_id) {
                localStorage.setItem(
                  "notificationID",
                  maxValObject.notification_id
                );
                this.database_provider_object.newNotificationData(
                  local_user_type
                );
              }
            } else {
              this.database_provider_object.newNotificationData(
                local_user_type
              );
            }
          });

        var devicesData = {
          deviceToken: localStorage.getItem("getDeviceuuid"),
          deviceType: localStorage.getItem("getDevicePlatform"),
          userId: userID,
          osVersion: localStorage.getItem("getDeviceversion"),
          model: localStorage.getItem("modelNo"),
          updatedAt: new Date().toISOString(),
          status: 1,
        };
        this.database_provider_object.saveDeviceDataToApi(devicesData); //stores device data on server

        var params = {
          record_time: this.dtStr,
          record_date: this.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          userEmail: localStorage.getItem("cv5userEmail"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
          location: localStorage.getItem("location"),
        };
        // Set clevertap whats new Launch event.
        this.clevertap_object.recordEventWithNameAndProps(
          "whatsNewLaunch",
          params
        );

        localStorage.setItem("app_sync_dashboard", "no");

        var loading = this.loading_controller_object.create({
          spinner: "dots",
          content:
            "<div class='custom-spinner-container'> Please wait, Getting the app ready for you.</div>",
          duration: 1200,
          enableBackdropDismiss: false,
        });
        loading.present();

        var title_data_query = new Array(
          "WHERE screen='whatsnew' AND is_active=1"
        );
        this.database_provider_object
          .fetchAllData("whatsnewtitle", title_data_query)
          .then((titleData) => {
            this.title_data = titleData;
          });
        this.http_service_object.getWhatsnewData().subscribe(
          (fetchWhatsnewData) => {
            var dataAsperType = [];
            dataAsperType = _.filter(fetchWhatsnewData, function (value) {
              return value.isFor == local_user_type || value.isFor == "all";
            });

            _.each(dataAsperType, function (item, index) {
              dataAsperType[index].image_url = item.image;
            });

            setTimeout(() => {
              this.slideshow = _.sortBy(
                _.where(dataAsperType, { type: "banners" }),
                "position"
              ).reverse();
              this.sponserSlides = _.sortBy(
                _.where(dataAsperType, { type: "sponsor_banners" }),
                "position"
              ).reverse();
              this.topic_data = _.sortBy(
                _.where(dataAsperType, { type: "topics" }),
                "position"
              ).reverse();
              this.expert_data = _.sortBy(
                _.where(dataAsperType, { type: "speakers" }),
                "position"
              ).reverse();
              this.topVideo_data = _.sortBy(
                _.where(dataAsperType, { type: "featured_video_new" }),
                "position"
              ).reverse();
              if (_.size(this.topVideo_data) > 0) {
                this.skeleton = true;

                var custom_data_1 = [];
                this.topVideotemplate = this.topVideo_data[0].template;
                this.topVideo_listindata = this.topVideo_data[0];
                var listValues = JSON.parse(this.topVideo_data[0].list_values);

                var that = this;
                _.each(listValues, function (value, key) {
                  var json_query: string[] = new Array(
                    "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                      value +
                      " AND isActive = 1"
                  );
                  that.database_provider_object
                    .fetchAllData("new_sub_topics", json_query)
                    .then((topic_data) => {
                      if (topic_data.length > 0) {
                        custom_data_1.push(topic_data[0]);
                      }
                    });
                });
                setTimeout(() => {
                  that.education_item = custom_data_1;
                  //alert('--2--------education_item--->'+JSON.stringify(that.education_item));
                  console.log('--2-----education_item--->'+JSON.stringify(that.education_item));
                }, 1000);
              } else {
                this.skeleton = false;
              }

              var videoDetailsTemplate = _.sortBy(
                _.where(dataAsperType, { type: "featured_video_details" }),
                "position"
              ).reverse();
              if (_.size(videoDetailsTemplate) > 0) {
                this.skeleton = true;
                this.topVideo_DetailsTemplate = videoDetailsTemplate;
              } else {
                this.skeleton = false;
              }

              var calculatorData = _.sortBy(
                _.where(dataAsperType, { type: "calculators" }),
                "position"
              ).reverse();
              if (_.size(calculatorData) > 0) {
                this.calculator_data = calculatorData;
              } else {
                this.calculator_data = "";
              }
              //alert('this.calculator_data---->'+JSON.stringify(this.calculator_data));

              var quizData = _.sortBy(
                _.where(dataAsperType, { type: "knowMore_quiz" }),
                "position"
              ).reverse();
              if (_.size(quizData) > 0) {
                this.quiz_data = quizData;
              } else {
                this.quiz_data = "";
              }

              var surveyData = _.sortBy(
                _.where(dataAsperType, { type: "knowMore_survey" }),
                "position"
              ).reverse();
              if (_.size(surveyData) > 0) {
                this.survey_data = surveyData;
              } else {
                this.survey_data = "";
              }

              var pollsData = _.sortBy(
                _.where(dataAsperType, { type: "knowMore_polls" }),
                "position"
              ).reverse();
              if (_.size(pollsData) > 0) {
                this.polls_data = pollsData;
              } else {
                this.polls_data = "";
              }

              this.playlist_data = _.sortBy(
                _.where(dataAsperType, { type: "curated_lists" }),
                "position"
              ).reverse();

              var userData = new Array("");
              this.database_provider_object
                .fetchAllData("new_user_info", userData)
                .then((userresult) => {
                  var data = userresult[0];

                  var that = this;

                  this.http_service_object
                    .getForum()
                    .subscribe((forum_data) => {
                      this.forum_data = _.filter(forum_data, function (f_data) {
                        if (
                          f_data.isFor == data.user_type ||
                          f_data.isFor == "all"
                        ) {
                          return f_data;
                        }
                      });
                    });

                  /*if(data.user_role_sub_type == 'medical-device-pharma-professional' || data.user_role_sub_type == 'Medical Device/Pharma Professional' || data.user_role_sub_type == 'patient' || data.user_role_sub_type == 'Patient' || data.user_role_sub_type == 'curious-learner' || data.user_role_sub_type == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){
                  this.forum_data = []; 
              }else{
                this.http_service_object.getForum().subscribe(forum_data => {          
                  this.forum_data = forum_data;
                });
              }*/
                });

              //wordpress blog message api
              // this.http_service_object.getBlogs().subscribe(blog_data => {
              //   this.blog_post = blog_data;
              // });

              //twitter messages
              // this.http_service_object.getTweets().subscribe(tweets_data => {
              //   this.tweets_data = tweets_data;
              // });

              //drwaon image
              this.drawnImg = _.sortBy(
                _.where(dataAsperType, { type: "draw_on_images" }),
                "position"
              ).reverse();
              if (_.size(this.drawnImg) > 0) {
                var drawn_data = [];
                var listValues = JSON.parse(this.drawnImg[0].list_values);
                var that = this;
                _.each(listValues, function (value, key) {
                  var json_query: string[] = new Array(
                    "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                      value +
                      " AND isActive = 1"
                  );
                  that.database_provider_object
                    .fetchAllData("new_sub_topics", json_query)
                    .then((topic_data) => {
                      if (topic_data.length > 0) {
                        drawn_data.push(topic_data[0]);
                      }
                    });
                });
                setTimeout(() => {
                  that.drawnData = drawn_data;
                }, 1000);
              }
            }, 1200);
          },
          (err) => {
            console.log("err->" + err);
          }
        );

        /*-------------------------------- Core API Sync logic End here---------------------------*/
      } else if ((no_Sync != "nosync" && sync_status == "no") || !this.online) {
        // code...

        var loading = this.loading_controller_object.create({
          spinner: "ios",
          duration: 2000,
          enableBackdropDismiss: false,
        });
        loading.present();
        setTimeout(() => {
          var title_data_query = new Array(
            "WHERE screen='whatsnew' AND is_active=1"
          );
          this.database_provider_object
            .fetchAllData("whatsnewtitle", title_data_query)
            .then((titleData) => {
              this.title_data = titleData;
            });

          var topicData_query = new Array(
            "WHERE type='topics' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", topicData_query)
            .then((topicData) => {
              //alert('topicData -->'+JSON.stringify(topicData));
              this.topic_data = topicData;
            });

          var expertsData_query = new Array(
            "WHERE type='speakers' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", expertsData_query)
            .then((expertData) => {
              this.expert_data = expertData;
              this.expert_data.forEach(data => {
                if(data.local_image_url){
                  this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",data.local_image_url.split('/').pop()).then(buffer => {
                    const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                    data.base64Image = dataURL;
                  });
                }
              });
            });
          var topVideo_data_query = new Array(
            "WHERE type='featured_video_new' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", topVideo_data_query)
            .then((topData) => {
              this.topVideo_data = topData;
            });

          if (_.size(this.topVideo_data) > 0) {
            this.skeleton = true;
            setTimeout(() => {
              //alert('----nosync topVideo_data----'+JSON.stringify(this.topVideo_data));

              var custom_data_2 = [];
              this.topVideotemplate = this.topVideo_data[0].template;
              this.topVideo_listindata = this.topVideo_data[0];
              var listValues = JSON.parse(this.topVideo_data[0].list_values);
              var that = this;
              _.each(listValues, function (value, key) {
                var json_query: string[] = new Array(
                  "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                    value +
                    " AND isActive = 1"
                );
                that.database_provider_object
                  .fetchAllData("new_sub_topics", json_query)
                  .then((topic_data) => {
                    if (topic_data.length > 0) {
                      custom_data_2.push(topic_data[0]);
                    }
                  });
              });
              setTimeout(() => {
                that.education_item = custom_data_2;
                //alert('--nosync--------education_item--->'+JSON.stringify(that.education_item));
                console.log('--nosync-----education_item--->'+JSON.stringify(that.education_item));
              }, 1000);
            }, 500);
          } else {
            this.skeleton = false;
          }

          var top_Video_data_query = new Array(
            "WHERE type='featured_video_details' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", top_Video_data_query)
            .then((top_Data) => {
              if (_.size(top_Data) > 0) {
                this.skeleton = true;
                this.topVideo_DetailsTemplate = top_Data;
              } else {
                this.skeleton = false;
              }
            });

          var curatedlistData_query = new Array(
            "WHERE type='curated_lists' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", curatedlistData_query)
            .then((curated_list_data) => {
              this.playlist_data = curated_list_data;
              this.playlist_data.forEach(data => {
                if(data.local_image_url){
                  this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",data.local_image_url.split('/').pop()).then(buffer => {
                    const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                    data.base64Image = dataURL;
                  });
                }
              });
            });

          var bannersData_query = new Array(
            "WHERE type='banners' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", bannersData_query)
            .then((banners_data) => {
              //alert('slideshow '+JSON.stringify(banners_data));

              this.slideshow = banners_data;
            });

          var sponserData_query = new Array(
            "WHERE type='sponsor_banners' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", sponserData_query)
            .then((sponser_data) => {
              this.sponserSlides = sponser_data;
              this.sponserSlides.forEach(data => {
                if(data.local_image_url){
                  this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",data.local_image_url.split('/').pop()).then(buffer => {
                    const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                    data.base64Image = dataURL;
                  });
                }
              });
            });

          //twitter messages
          // this.http_service_object.getTweets().subscribe(tweets_data => {
          //   this.tweets_data = tweets_data;
          // });

          //wordpress blog message api
          // this.http_service_object.getBlogs().subscribe(blog_data => {
          //   this.blog_post = blog_data;
          // });

          //calculator data
          var calculatorData_query = new Array(
            "WHERE type='calculators' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", calculatorData_query)
            .then((calculator_data) => {
              //alert('calculator_data  '+JSON.stringify(calculator_data));
              if (_.size(calculator_data) > 0) {
                this.calculator_data = calculator_data;
              } else {
                this.calculator_data = "";
              }
            });

          var quizData_query = new Array(
            "WHERE type='knowMore_quiz' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", quizData_query)
            .then((quiz_data) => {
              //alert('quiz_data  '+JSON.stringify(quiz_data));
              if (_.size(quiz_data) > 0) {
                this.quiz_data = quiz_data;
              } else {
                this.quiz_data = "";
              }
            });

          var surveyData_query = new Array(
            "WHERE type='knowMore_survey' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", surveyData_query)
            .then((survey_data) => {
              //alert('quiz_data  '+JSON.stringify(quiz_data));
              if (_.size(survey_data) > 0) {
                this.survey_data = survey_data;
              } else {
                this.survey_data = "";
              }
            });

          var pollsData_query = new Array(
            "WHERE type='knowMore_polls' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", pollsData_query)
            .then((polls_data) => {
              //alert('quiz_data  '+JSON.stringify(quiz_data));
              if (_.size(polls_data) > 0) {
                this.polls_data = polls_data;
              } else {
                this.polls_data = "";
              }
            });

          var userData = new Array("");
          this.database_provider_object
            .fetchAllData("new_user_info", userData)
            .then((userresult) => {
              var data = userresult[0];
              /*if(data.user_role_sub_type == 'medical-device-pharma-professional' || data.user_role_sub_type == 'Medical Device/Pharma Professional' || data.user_role_sub_type == 'patient' || data.user_role_sub_type == 'Patient' || data.user_role_sub_type == 'curious-learner' || data.user_role_sub_type == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){
                this.forum_data = []; 

            }else{*/
              this.http_service_object.getForum().subscribe((forum_data) => {
                //this.forum_data = forum_data;
                this.forum_data = _.filter(forum_data, function (f_data) {
                  if (f_data.isFor == data.user_type || f_data.isFor == "all") {
                    return f_data;
                  }
                });
              });
              //}
            });

          //drawon image
          var topVideo_data_query = new Array(
            "WHERE type='draw_on_images' ORDER BY position DESC"
          );
          this.database_provider_object
            .fetchAllData("whatsnew", topVideo_data_query)
            .then((drawnImgData) => {
              this.drawnImg = drawnImgData;
            });
          if (_.size(this.drawnImg) > 0) {
            var drawn_data = [];
            var listValues = JSON.parse(this.drawnImg[0].list_values);
            var that = this;
            _.each(listValues, function (value, key) {
              var json_query: string[] = new Array(
                "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                  value +
                  " AND isActive = 1"
              );
              that.database_provider_object
                .fetchAllData("new_sub_topics", json_query)
                .then((topic_data) => {
                  if (topic_data.length > 0) {
                    drawn_data.push(topic_data[0]);
                  }
                });
            });
            setTimeout(() => {
              that.drawnData = drawn_data;
            }, 1000);
          }
        }, 1000);
      } else {
        //alert('none of the above');
      }

      this.http_service_object
        .getAppDetails(this.platformType)
        .subscribe((data) => {
          var osTypeDetails = data[0];

          this.app_version_object.getVersionNumber().then((version) => {
            this.app_version_number = version;
            if (
              this.http_service_object.cmpVersion(
                osTypeDetails.latest,
                version
              ) > 0
            ) {
              // this.showConfirmbox(osTypeDetails.url);
            }
          });
        });
    });
  }

  slideChangedForTwiter() {
    let currentIndex = this.slides.getActiveIndex();
    if (this.slides.isEnd()) {
      this.isLastArrowForTweet = true;
      this.isFirstArrowForTweet = false;
    } else if (currentIndex === 0) {
      this.isLastArrowForTweet = false;
      this.isFirstArrowForTweet = true;
    } else {
      this.isLastArrowForTweet = false;
      this.isFirstArrowForTweet = false;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad WhatsNewPage");
    var applaunch_status = localStorage.getItem("applaunchPopup");
    if (applaunch_status == "yes") {
      var newUserLocation = localStorage.getItem("location");
      var usr_specialities = localStorage.getItem("usrSpecialities");
      var userId = localStorage.getItem("userliveId");
      if (usr_specialities == "" || newUserLocation == "") {
        var querystring: string[] = new Array(
          " WHERE name='SpecialitiesLocation' AND type='specialities_location'"
        );
        this.database_provider_object
          .fetchAllData("custom_listing", querystring)
          .then((custom_listing_data) => {
            var list_json_value = JSON.parse(
              custom_listing_data[0].list_values
            );
            var forLocation = list_json_value[0];
            var forLocationActiveFrom = list_json_value[0].activeFrom;
            var forLocationActiveTill = list_json_value[0].activeTill;
            var checkForLocationType = list_json_value[0].checkFor;
            var forSpecilities = list_json_value[1];
            var forSpecilitiesActiveFrom = list_json_value[1].activeFrom;
            var forSpecilitieAactiveTill = list_json_value[1].activeTill;
            var checkForSpecilitiesType = list_json_value[1].checkFor;
            var dateCheccLoc = this.network_check_object.dateCheck(
              forLocationActiveFrom,
              forLocationActiveTill,
              this.isoDateFormat
            );
            var dateCheckSpslty = this.network_check_object.dateCheck(
              forSpecilitiesActiveFrom,
              forSpecilitieAactiveTill,
              this.isoDateFormat
            );

            if (
              usr_specialities == "" &&
              checkForSpecilitiesType == "Specialities" &&
              dateCheckSpslty
            ) {
              //alert('---->'+forSpecilities.videoSeenCount);
              switch (forSpecilities.videoSeenCount) {
                case "appLaunch":
                  //alert('Specilities appLaunch');
                  if (dateCheckSpslty) {
                    this.video_share_provider_object.specialitiesPopup(
                      forSpecilities.message
                    );
                  }
                  break;
                default:
                  //alert('Specilities video');
                  localStorage.setItem(
                    "countForPopup",
                    forSpecilities.videoSeenCount
                  );
                  localStorage.setItem("mesgForPopup", forSpecilities.message);
              }
            } else if (
              newUserLocation == "" &&
              checkForLocationType == "Location" &&
              dateCheccLoc
            ) {
              switch (forLocation.videoSeenCount) {
                case "appLaunch":
                  if (dateCheccLoc) {
                    this.video_share_provider_object.specialitiesPopup(
                      forLocation.message
                    );
                  }
                  break;
                default:
                  //alert(' location video');
                  localStorage.setItem(
                    "countForPopup",
                    forLocation.videoSeenCount
                  );
                  localStorage.setItem("mesgForPopup", forLocation.message);
                  break;
              }
            }
          });
      }
      localStorage.setItem("applaunchPopup", "no");
    }
  }

  gotoDetailPage(item, type, list) {
    console.log('type: ', type);
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

  seeAllClick(params, listingData) {
    //alert('params-->'+params);
    this.navCtrl.push("WhatsNewSeeallPage", {
      params: params,
      ListingData: listingData,
      title_data: this.title_data,
    });
  }

  onBannerClick(item, bannerType) {
    var values = JSON.parse(item.list_values);
    switch (item.template) {
      case "expert_playlist":
        this.loading_service_object.show();
        var list_json = JSON.parse(item.list_values);
        var json_query: string[] = new Array(
          "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
            list_json[0] +
            " AND isActive = 1"
        );
        this.database_provider_object
          .fetchAllData("new_sub_topics", json_query)
          .then((topic_data) => {
            setTimeout(() => {
              this.forClevertapRecords(item, "expert_playlist", bannerType);
              this.navCtrl.push("WhatsNewDetailsPage", {
                data: item,
                type: item.template,
                index: 0,
                header: "hide",
                display_playlist: topic_data[0],
                sendTo: bannerType,
              });
              this.loading_service_object.hide();
            }, 1200);
          });
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
              setTimeout(() => {
                this.forClevertapRecords(item, "video_detail", bannerType);
                this.navCtrl.push("WhatsNewDetailsPage", {
                  data: item,
                  type: item.template,
                  index: 0,
                  header: "hide",
                  display_data: topic_data[0],
                  sendTo: bannerType,
                });
                this.loading_service_object.hide();
              }, 1200);
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
              setTimeout(() => {
                this.forClevertapRecords(item, "video_detail", bannerType);
                this.navCtrl.push("WhatsNewDetailsPage", {
                  data: item,
                  type: item.template,
                  index: 0,
                  header: "hide",
                  display_data: topic_data[0],
                  sendTo: bannerType,
                });
                this.loading_service_object.hide();
              }, 1200);
            });
        }
        break;
      case "wordpress_blog":
        this.forClevertapRecords(item, bannerType, bannerType);
        var ref = this.in_app_browser_object.create(
          values.url,
          "_blank",
          "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
        );

        ref.on("loadstop").subscribe((event) => {
          this.screen_orientation_object.unlock();
        });
        ref.on("exit").subscribe((event) => {
          this.screen_orientation_object.lock(
            this.screen_orientation_object.ORIENTATIONS.PORTRAIT
          );
        });

        break;
      case "play_video":
        this.forClevertapRecords(item, bannerType, bannerType);
        var video_url = values.video_url;
        let options = {
          successCallback: () => {
            console.log("Video played");
          },
          errorCallback: (e) => {
            console.log("Error streaming");
          },
          shouldAutoClose: true,
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
      case "tab_list":
        this.forClevertapRecords(item, "", bannerType);
        localStorage.setItem("segment_name", item.source);
        this.navCtrl.push("ItemDetailsPageTabs", {
          pageItem: item.name,
          data: item,
          request_from: "whatsnew_page",
        });
        break;
      case "forum":
        //this.qnaSite({'slug':values.slug, 'title':item.name}, 'From WhatsNew Banner');
        this.onPromptForQna(
          { slug: values.slug, title: item.name },
          "From WhatsNew Banner"
        );
        break;
    }
  }

  nextSlide(slide_name) {
    if (slide_name == "slides") {
      this.slides.slideNext();
    } else if (slide_name == "slides1") {
      this.slides1.slideNext();
    }
  }
  prevSlide(slide_name) {
    if (slide_name == "slides") {
      this.slides.slidePrev();
    } else if (slide_name == "slides1") {
      this.slides1.slidePrev();
    }
  }

  logout() {
    this.database_provider_object.deleteRecords("DELETE FROM new_user_info");
    this.storage_object.set("user_logged_in", 0);
    this.storage_object.set("get_started_page_counter", 0);

    localStorage.setItem("cv5userEmail", "");
    localStorage.setItem("cv5userRoleId", "");
    localStorage.setItem("userliveId", "");
    localStorage.setItem("cv5usrType", "");
    localStorage.setItem("cv5usrRolesubType", "");
    localStorage.setItem("userIdentity", "");
    localStorage.setItem("getCleverTapID", "");
    localStorage.setItem("updatedPlayerId", "");
    localStorage.setItem("liveId", "");
    localStorage.setItem("verified", "");
    localStorage.setItem("isLinkSet", "");

    localStorage.setItem("shownContent", "");
    localStorage.setItem("productActiveTill", "");
    localStorage.setItem("myProductflg", "false");
    localStorage.setItem("userProAccess", "");
    localStorage.setItem("productExpired", "");
    localStorage.setItem("productID", "false");
    localStorage.setItem("productType", "");
    localStorage.setItem("productExpiredate", "");
    localStorage.setItem("promotionalCodeStatus", "");
    localStorage.setItem("canvasimgshare", "notset");
    localStorage.setItem("canDownloadAccess", "false");
    localStorage.setItem("Downloadque", "");
    localStorage.setItem("app_sync_dashboard", "yes");
    localStorage.setItem("applaunchPopup", "yes");
    localStorage.setItem("page_array_push", "yes");
    localStorage.setItem("showrandomVideo", "yes");
    localStorage.setItem("arrayOfTags", "yes");
    localStorage.setItem("loginMedium", "false");
    localStorage.setItem("forExitApp", "false");
    localStorage.setItem("location", "");
    localStorage.setItem("InfoDownloadque", "");
    localStorage.setItem("usrSpecialities", "");
    localStorage.setItem("referral_code", "");
    localStorage.setItem("referred_by", "");
    this.navCtrl.setRoot("LoginPage");
  }

  ionViewDidEnter() {
    this.platform_object.ready().then(() => {
      localStorage.setItem("forExitApp", "true");

      this.platform_object.registerBackButtonAction(() => {
        var forexitapp = localStorage.getItem("forExitApp");

        if (forexitapp !== "true") {
          this.counter = 0;
          localStorage.setItem("forExitApp", "false");
          this.navCtrl.pop();
        } else {
          this.counter++;
          this.presentConfirm();
          if (this.counter == 2) {
            localStorage.setItem("forExitApp", "false");
            this.platform_object.exitApp();
          }
        }
      }, 0);
    });
  }

  presentConfirm() {
    let confirmalert = this.alert_controller_object.create({
      title: "Exit App",
      message: "Are you sure you want to exit?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.counter = 0;
            console.log("Cancel clicked");
          },
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Yes clicked");
            this.counter = 0;
            this.platform_object.exitApp();
          },
        },
      ],
    });
    confirmalert.present();
  }

  ionViewWillLeave() {
    var network_type = this.network_check_object.getNetworkType();
    if (network_type != "none") {
      this.network_check_object.getPageAction(
        "WhatsNewPage",
        "end",
        "",
        localStorage.getItem("cv5usrType")
      );
    }
    localStorage.setItem("forExitApp", "false");
  }

  forClevertapRecords(data, type, list) {
    switch (type) {
      case "wordpress_blog":
        if (list == "Calculator") {
          var ContentFor = "Calculator";
          var ClickedContent = "Calculator";
        } else {
          var ContentFor = "Blog";
          var ClickedContent = "Blog";
        }
        break;
      case "twitter_msg":
        var ContentFor = "Tweets";
        var ClickedContent = "'" + data.tweet_text + "'";
        break;
      case "Banner":
      case "Sponser Banner":
        var ContentFor = "'" + type + "'";
        var ClickedContent = "'" + data.name + "'";
        break;
      case "Calculators":
      case "Quiz":
      case "Survey":
      case "Polls ":
        var ContentFor = "Know More Interact";
        var ClickedContent = "'" + type + "'";
        break;
      case "Facebook":
      case "Twitter":
      case "Linkedin":
      case "Youtube ":
      case "Instagram ":
        var ContentFor = "Social Interact";
        var ClickedContent = "'" + type + "'";
        break;
      default:
        var ContentFor = "'" + data.source + "'";
        var ClickedContent = "'" + data.name + "'";
        break;
    }

    var params = {
      record_time: this.dtStr,
      record_date: this.clevertapDate,
      os: localStorage.getItem("getDevicePlatform"),
      modelNo: localStorage.getItem("modelNo"),
      deviceversion: localStorage.getItem("getDeviceversion"),
      userRoleId: localStorage.getItem("cv5userRoleId"),
      userType: localStorage.getItem("cv5usrType"),
      userEmail: localStorage.getItem("cv5userEmail"),
      specialities: localStorage.getItem("usrSpecialities"),
      subSpecialities: localStorage.getItem("cv5usrRolesubType"),
      userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
      location: localStorage.getItem("location"),
      whatsNewContentFor: ContentFor,
      listContentType: list,
      nameOfClickedContent: ClickedContent,
    };
    // Set clevertap Custom AppLaunch event.
    //alert('whatsNew params ---------->'+JSON.stringify(params));

    this.clevertap_object.recordEventWithNameAndProps(
      "clickedOnWhatsNew",
      params
    );
  }

  /*qnaSite(forum,tagTYPE){
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

            if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){

                this.email = data.email;
                this.username = data.username;
                if(this.email =='' || this.username == '' || this.username == null){

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
                  this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'clevertap_tag': tagTYPE, 'user_type':'Patient'});
                }

            }else{
              this.email = data.email;
              this.username = data.username;
              if(this.email =='' || this.username == '' || this.username == null){

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
              this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'clevertap_tag': tagTYPE, 'user_type':'Doctor'});
              }  
            }
          }, err => {
            console.log('err->'+err);
          });  
        });
      }
    });    
  }
*/

  /*redirectToForumDashboard(object){

    var params = {
      "record_time" : this.dtStr,
      "record_date" : this.clevertapDate,
      "os" : localStorage.getItem('getDevicePlatform'),
      "userRoleId" : localStorage.getItem('cv5userRoleId'),
      "userType": localStorage.getItem('cv5usrType'),
      "userEmail" : localStorage.getItem('cv5userEmail'),
      "Identity":localStorage.getItem('userIdentity'),
      "userName" : object.username,
      "tags" : object.clevertap_tag,
      "nameOfClickedContent": object.forum_title,
      "location":localStorage.getItem('location'),
      "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
      "specialities":localStorage.getItem('usrSpecialities'),
      "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
    };

    this.clevertap_object.recordEventWithNameAndProps("openedForum",params);

    var text_arr =[object.username, object.email, object.first_time, object.forum_slug];
    var text = JSON.stringify(text_arr);

    var encode_string = window.btoa(text);
    var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

    if(object.user_type == 'Patient'){
      var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        
    }else{
      var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
    }  
  }*/

  slideChangedForForum() {
    let currentIndex = this.slides1.getActiveIndex();
    if (this.slides1.isEnd()) {
      this.isLastArrowForForum = true;
      this.isFirstArrowForForum = false;
    } else if (currentIndex === 0) {
      this.isLastArrowForForum = false;
      this.isFirstArrowForForum = true;
    } else {
      this.isLastArrowForForum = false;
      this.isFirstArrowForForum = false;
    }
  }

  getNameFromEmail(email) {
    var name = email
      .replace(/^(.+)@(.+)$/g, "$1")
      .replace(/[\. __]+/g, " ")
      .replace(/\s|[0-9]/g, " ");
    return name;
  }

  showConfirmbox(url) {
    var confirmPopup = this.alert_controller_object.create({
      title: "",
      message:
        '<h4 style="color:#ffffff; text-align:center;">Update required</h4><p style="color:#ffffff; text-align:center;">We have introduced some exciting new features, please upgrade now to continue using CardioVisual.</p>',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: "Update",
          handler: () => {
            console.log("Cancel clicked");
            this.in_app_browser_object.create(url, "_system", "location=no");
            //don't allow the user to close unless he enters model...
            return false;
          },
        },
      ],
    });
    confirmPopup.present();
  }

  knowMoreClick(type) {
    this.forClevertapRecords(type, type, type);
    if (type == "Calculators") {
      this.navCtrl.push("WhatsNewSeeallPage", {
        params: type,
        ListingData: this.calculator_data,
        title_data: type,
      });
    } else if (type == "Quiz") {
      this.navCtrl.push("WhatsNewSeeallPage", {
        params: type,
        ListingData: this.quiz_data,
        title_data: type,
      });
    } else if (type == "Survey") {
      this.navCtrl.push("WhatsNewSeeallPage", {
        params: type,
        ListingData: this.survey_data,
        title_data: type,
      });
    } else if (type == "Polls") {
      this.navCtrl.push("WhatsNewSeeallPage", {
        params: type,
        ListingData: this.polls_data,
        title_data: type,
      });
    } else if (type == "Drawn") {
      this.navCtrl.push("WhatsNewSeeallPage", {
        params: type,
        ListingData: this.drawnData,
        title_data: "Draw on images",
      });
    }
  }

  intractIcon(type) {
    this.forClevertapRecords(type, type, type);

    if (type == "Facebook") {
      var ref = this.in_app_browser_object.create(
        "https://www.facebook.com/cardiovisual/",
        "_system",
        "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
      );

      ref.on("loadstop").subscribe((event) => {
        this.screen_orientation_object.unlock();
      });
      ref.on("exit").subscribe((event) => {
        this.screen_orientation_object.lock(
          this.screen_orientation_object.ORIENTATIONS.PORTRAIT
        );
      });
    } else if (type == "Twitter") {
      var ref = this.in_app_browser_object.create(
        "https://twitter.com/CardioVisualApp",
        "_system",
        "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
      );

      ref.on("loadstop").subscribe((event) => {
        this.screen_orientation_object.unlock();
      });
      ref.on("exit").subscribe((event) => {
        this.screen_orientation_object.lock(
          this.screen_orientation_object.ORIENTATIONS.PORTRAIT
        );
      });
    } else if (type == "Instagram") {
      var ref = this.in_app_browser_object.create(
        "https://www.instagram.com/cardiovisual/",
        "_system",
        "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
      );

      ref.on("loadstop").subscribe((event) => {
        this.screen_orientation_object.unlock();
      });
      ref.on("exit").subscribe((event) => {
        this.screen_orientation_object.lock(
          this.screen_orientation_object.ORIENTATIONS.PORTRAIT
        );
      });
    } else if (type == "Linkedin") {
      var ref = this.in_app_browser_object.create(
        "https://www.linkedin.com/company/cardiovisual",
        "_system",
        "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
      );

      ref.on("loadstop").subscribe((event) => {
        this.screen_orientation_object.unlock();
      });
      ref.on("exit").subscribe((event) => {
        this.screen_orientation_object.lock(
          this.screen_orientation_object.ORIENTATIONS.PORTRAIT
        );
      });
    } else if (type == "Youtube") {
      var ref = this.in_app_browser_object.create(
        "https://www.youtube.com/c/CardioVisual",
        "_system",
        "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
      );

      ref.on("loadstop").subscribe((event) => {
        this.screen_orientation_object.unlock();
      });
      ref.on("exit").subscribe((event) => {
        this.screen_orientation_object.lock(
          this.screen_orientation_object.ORIENTATIONS.PORTRAIT
        );
      });
    }
  }

  onPromptForQna(forum, tagTYPE) {
    this.video_share_provider_object.discussPromptForProffesional(
      forum,
      tagTYPE,
      "From WhatsNew"
    );
  }
}
