import {
  Component,
  Input,
  ViewChild,
  Renderer,
  ElementRef,
  ChangeDetectorRef,
  Injector,
} from "@angular/core";
import {
  IonicPage,
  Content,
  NavController,
  NavParams,
  Platform,
  ToastController,
  Modal,
  ModalController,
  ModalOptions,
  AlertController,
  ActionSheetController,
  ViewController,
  MenuController,
  LoadingController,
} from "ionic-angular";
import { HttpService } from "../../services/HttpService";
import { Storage } from "@ionic/storage";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { Network } from "@ionic-native/network";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { pipe } from "rxjs";
import "rxjs/add/operator/map";
import * as _ from "underscore/underscore";
import { SocialSharing } from "@ionic-native/social-sharing";
import { File } from "@ionic-native/file";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";
import { DatabaseProvider } from "../../providers/database/database";
import { ToastService } from "../../services/toast-service";
import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser";
import { CleverTap } from "@ionic-native/clevertap";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { NetworkCheckProvider } from "../../providers/network_check/network_check";
import { DomSanitizer } from "@angular/platform-browser";

import { VideosharesocialProvider } from "../../providers/videosharesocial/videosharesocial";

import { CallNumber } from "@ionic-native/call-number";
import { RadientSettingsProvider } from "../../providers/radient-settings/radient-settings";
import { LoadingService } from "../../services/loading-service";

declare const RadiantMP: any;
/**
 * Generated class for the WhatsNewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var window;
declare var cordova;
@IonicPage()
@Component({
  selector: "page-whats-new-details",
  templateUrl: "whats-new-details.html",
})
export class WhatsNewDetailsPage {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content) content: Content;
  @ViewChild("pageTop") pageTop: Content;
  video_data: any = {};
  type: any;
  header: any;
  orientation: string;
  currentVideo = 0;
  display_playlist: any = "";
  playlistindex: any = "";
  api: any;
  sources: Array<Object>;
  playsitsources: Array<Object>;
  totalVideos: any;
  playlistname: any = "";
  dtStr: any;
  clevertapDate: any;
  userdata: any;
  isDownloading: any;
  perc1: any;
  download_count: any;
  head_tab: string = "recommended_videos";
  category_tab: string = "condition";
  userTypeformenu: string;
  videoIdformenu: any;
  videoTagformenu: any;
  disscussforvideomenu: any;
  possibleButtons: any;
  action: any;
  playPause: string = "startPlay";
  imgSHownOnline: any;
  videoData: any;
  actualvideoduration: any;
  videoViewEvent: boolean = false;
  onProgressSet1: any;
  offlineView: boolean = false;
  CurrentPlaylistObject: any;
  category_data: any;
  topic_data: any;
  path: any;
  rmp: any = null;
  playlistrmp: any = null;
  comesfrom: any;
  lastVideoIndex: any;
  share_Url: any;
  forvideo_Obj: any;
  request_from: string;
  localapi: any;
  nav_params_object: NavParams;
  http_service_object: HttpService;
  toast_controller_object: ToastController;
  platform_object: Platform;
  storage_object: Storage;
  http_object: Http;
  social_sharing_object: SocialSharing;
  database_provider_object: DatabaseProvider;
  toast_service_object: ToastService;
  file_transfer_object: FileTransfer;
  file_object: File;
  in_app_browser_object: InAppBrowser;
  modal_controllar_object: ModalController;
  alert_controller_object: AlertController;
  clevertap_object: any;
  screen_orientation_object: ScreenOrientation;
  network_check_object: NetworkCheckProvider;
  video_share_provider_object: VideosharesocialProvider;
  action_sheet_controller_object: ActionSheetController;
  call_number_object: CallNumber;
  radiant_setting_provider_object: RadientSettingsProvider;
  menu_controller_object: MenuController;
  loading_service_object: LoadingService;

  constructor(public navCtrl: NavController, public injector: Injector) {
    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.toast_controller_object =
      injector.get<ToastController>(ToastController);
    this.platform_object = injector.get<Platform>(Platform);
    this.storage_object = injector.get<Storage>(Storage);
    this.http_object = injector.get<Http>(Http);
    this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
    this.database_provider_object =
      injector.get<DatabaseProvider>(DatabaseProvider);
    this.toast_service_object = injector.get<ToastService>(ToastService);
    this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
    this.file_object = injector.get<File>(File);
    this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
    this.modal_controllar_object =
      injector.get<ModalController>(ModalController);
    this.alert_controller_object =
      injector.get<AlertController>(AlertController);
    this.clevertap_object = new CleverTap();
    this.screen_orientation_object =
      injector.get<ScreenOrientation>(ScreenOrientation);
    this.network_check_object =
      injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.video_share_provider_object = injector.get<VideosharesocialProvider>(
      VideosharesocialProvider
    );
    this.action_sheet_controller_object = injector.get<ActionSheetController>(
      ActionSheetController
    );
    this.call_number_object = injector.get<CallNumber>(CallNumber);
    this.menu_controller_object = injector.get<MenuController>(MenuController);
    this.loading_service_object = injector.get<LoadingService>(LoadingService);
    this.radiant_setting_provider_object =
      injector.get<RadientSettingsProvider>(RadientSettingsProvider);

    this.dtStr = this.http_service_object.dtStr();
    this.clevertapDate = this.http_service_object.clevertapDate();
    var localPath = this.file_object.dataDirectory;
    this.path = localPath.replace(/file:\/\//g, "");
    this.data = this.nav_params_object.get("data");
    this.comesfrom = this.nav_params_object.get("sendTo");
    this.data.type = this.nav_params_object.get("type");
    this.header = this.nav_params_object.get("header");
    this.request_from = this.nav_params_object.get("request_from");
    this.localapi = this.http_service_object.getApi();

    var network_type = this.network_check_object.getNetworkType();
    if (network_type == "none") {
      this.offlineView = true;
    }
    this.userTypeformenu = localStorage.getItem("cv5usrType");

    if (this.data.source == "education") {
      this.category_tab = "condition";
    } else if (this.data.source == "information") {
      this.category_tab = "expert";
    }
    this.imgSHownOnline = this.network_check_object.getNetworkType();

    if (this.imgSHownOnline != "none") {
      setTimeout(() => {
        this.network_check_object.getPageAction(
          "WhatsNewDetailsPage",
          "start",
          "",
          localStorage.getItem("cv5usrType")
        );
      }, 1000);
    }

    this.loading_service_object.hide();

    var that = this;
    switch (that.data.type) {
      case "expert_playlist":
        that.playlistindex = that.nav_params_object.get("index");
        that.playlistname = that.data.name;

        //that.share_Url = that.data.shareUrl;
        that.share_Url = "";
        that.display_playlist = that.nav_params_object.get("display_playlist");
        that.disscussforvideomenu = that.display_playlist;
        that.forvideomenuItem(
          that.display_playlist.id,
          that.display_playlist.tag,
          that.data.source
        );

        if (that.imgSHownOnline != "none") {
          that.network_check_object.forRandomVideoViewCount(
            localStorage.getItem("userliveId")
          );
          setTimeout(() => {
            that.network_check_object.getVideoTagCountAction(
              that.display_playlist.tag,
              that.userTypeformenu,
              localStorage.getItem("userliveId"),
              "",
              that.possibleButtons,
              that.display_playlist
            );
          }, 2000);
        }
        setTimeout(() => {
          that.radiant_setting_provider_object.forPlayClickTrigger(
            that.display_playlist,
            that.possibleButtons
          );
        }, 1000);

        if (typeof that.data.list_values == "string") {
          var subtopic_ids = JSON.parse(that.data.list_values);
        } else {
          var subtopic_ids = that.data.list_values;
        }
        var playlist_data = [];
        if (that.data.source == "education") {
          _.each(subtopic_ids, function (value, index) {
            var subtopic_query: string[] = new Array(
              "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
              value +
              " AND isActive = 1"
            );
            that.database_provider_object
              .fetchAllData("new_sub_topics", subtopic_query)
              .then((subtopic_Data) => {
                if (subtopic_Data.length > 0) {
                  playlist_data.push(subtopic_Data[0]);
                }
                that.data.playlist = playlist_data;

                that.totalVideos = that.data.playlist.length;
              });
          });
          setTimeout(() => {
            that.presentToast(
              that.data.playlist[that.currentVideo].copyrightInfo,
              3000
            );
          }, 1500);
        } else if (that.data.source == "information") {
          _.each(subtopic_ids, function (value, index) {
            var subtopic_query: string[] = new Array(
              "join information_data on information.id = information_data.id where information.id = " +
              value +
              " AND isActive = 1"
            );
            that.database_provider_object
              .fetchAllData("information", subtopic_query)
              .then((subtopic_Data) => {
                if (subtopic_Data.length > 0) {
                  playlist_data.push(subtopic_Data[0]);
                }

                that.data.playlist = playlist_data;
                that.totalVideos = that.data.playlist.length;
              });
          });
          setTimeout(() => {
            that.presentToast(
              that.data.playlist[that.currentVideo].copyrightInfo,
              3000
            );
          }, 1500);
        }
        break;
      case "video_detail":
        that.data.display_playlist = that.nav_params_object.get("display_data");
        that.disscussforvideomenu = that.data.display_playlist;
        that.forvideomenuItem(
          that.data.display_playlist.id,
          that.data.display_playlist.tag,
          that.data.source
        );
        if (that.imgSHownOnline != "none") {
          that.network_check_object.forRandomVideoViewCount(
            localStorage.getItem("userliveId")
          );
          setTimeout(() => {
            that.network_check_object.getVideoTagCountAction(
              that.data.display_playlist.tag,
              that.userTypeformenu,
              localStorage.getItem("userliveId"),
              "",
              that.possibleButtons,
              that.data.display_playlist
            );
          }, 2000);
        }
        setTimeout(() => {
          that.radiant_setting_provider_object.forPlayClickTrigger(
            that.data.display_playlist,
            that.possibleButtons
          );
        }, 1000);

        var condition_data = [];
        var treatment_data = [];
        var device_data = [];
        var expert_data = [];
        var learn_data = [];
        var featured_data = [];
        var product_data = [];
        var list_json_value = JSON.parse(that.data.list_values);
        if (that.data.source == "education") {
          _.each(list_json_value.Condition, function (value, index) {
            if (that.request_from == "splash") {
              var condition_url =
                that.localapi +
                "/api/subtopics?filter[where][isActive]=1&filter[where][id]=" +
                value;
              that.http_service_object
                .fetchDataFromapi(condition_url)
                .subscribe((conditionData) => {
                  condition_data.push(conditionData[0]);
                });
            } else {
              var condition_query: string[] = new Array(
                "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                value +
                " AND isActive = 1"
              );

              that.database_provider_object
                .fetchAllData("new_sub_topics", condition_query)
                .then((conditionData) => {
                  condition_data.push(conditionData[0]);
                });
            }
          });

          that.data.conditions = condition_data;

          _.each(list_json_value.Treatment, function (value, index) {
            if (that.request_from == "splash") {
              var treatment_url =
                that.localapi +
                "/api/subtopics?filter[where][isActive]=1&filter[where][id]=" +
                value;
              that.http_service_object
                .fetchDataFromapi(treatment_url)
                .subscribe((treatmentData) => {
                  treatment_data.push(treatmentData[0]);
                });
            } else {
              var treatment_query: string[] = new Array(
                "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                value +
                " AND isActive = 1"
              );

              that.database_provider_object
                .fetchAllData("new_sub_topics", treatment_query)
                .then((treatmentData) => {
                  treatment_data.push(treatmentData[0]);
                });
            }
          });
          that.data.treatment = treatment_data;

          _.each(list_json_value.Device, function (value, index) {
            if (that.request_from == "splash") {
              var device_url =
                that.localapi +
                "/api/subtopics?filter[where][isActive]=1&filter[where][id]=" +
                value;
              that.http_service_object
                .fetchDataFromapi(device_url)
                .subscribe((deviceData) => {
                  device_data.push(deviceData[0]);
                });
            } else {
              var device_query: string[] = new Array(
                "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                value +
                " AND isActive = 1"
              );

              that.database_provider_object
                .fetchAllData("new_sub_topics", device_query)
                .then((deviceData) => {
                  device_data.push(deviceData[0]);
                });
            }
          });
          that.data.device = device_data;
        } else if (that.data.source == "information") {
          _.each(list_json_value.Expert, function (value, index) {
            if (that.request_from == "splash") {
              var expert_url =
                that.localapi +
                "/api/information?filter[where][isActive]=1&filter[where][id]=" +
                value;
              that.http_service_object
                .fetchDataFromapi(expert_url)
                .subscribe((expertData) => {
                  expert_data.push(expertData[0]);
                });
            } else {
              var expert_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                value +
                " AND isActive = 1"
              );

              that.database_provider_object
                .fetchAllData("information", expert_query)
                .then((expertData) => {
                  expert_data.push(expertData[0]);
                });
            }
          });

          that.data.expert = expert_data;

          _.each(list_json_value.Learn, function (value, index) {
            if (that.request_from == "splash") {
              var learn_url =
                that.localapi +
                "/api/information?filter[where][isActive]=1&filter[where][id]=" +
                value;
              that.http_service_object
                .fetchDataFromapi(learn_url)
                .subscribe((learnData) => {
                  learn_data.push(learnData[0]);
                });
            } else {
              var learn_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                value +
                " AND isActive = 1"
              );

              that.database_provider_object
                .fetchAllData("information", learn_query)
                .then((learnData) => {
                  learn_data.push(learnData[0]);
                });
            }
          });
          that.data.learn = learn_data;

          _.each(list_json_value.Featured, function (value, index) {
            if (that.request_from == "splash") {
              var featured_url =
                that.localapi +
                "/api/information?filter[where][isActive]=1&filter[where][id]=" +
                value;
              that.http_service_object
                .fetchDataFromapi(featured_url)
                .subscribe((featuredData) => {
                  featured_data.push(featuredData[0]);
                });
            } else {
              var featured_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                value +
                " AND isActive = 1"
              );

              that.database_provider_object
                .fetchAllData("information", featured_query)
                .then((featuredData) => {
                  //if(deviceData.length > 0){
                  featured_data.push(featuredData[0]);
                  //}
                });
            }
          });
          that.data.featured = featured_data;

          _.each(list_json_value.Product, function (value, index) {
            if (that.request_from == "splash") {
              var product_url =
                that.localapi +
                "/api/information?filter[where][isActive]=1&filter[where][id]=" +
                value;
              that.http_service_object
                .fetchDataFromapi(product_url)
                .subscribe((productData) => {
                  product_data.push(productData[0]);
                });
            } else {
              var product_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                value +
                " AND isActive = 1"
              );

              that.database_provider_object
                .fetchAllData("information", product_query)
                .then((productData) => {
                  //if(deviceData.length > 0){
                  product_data.push(productData[0]);
                  //}
                });
            }
          });
          that.data.product = product_data;
        }
        break;
    }
  }

  ionViewDidLoad() {
    var that = this;
    console.log("ionViewDidLoad");
    if (that.data.type == "expert_playlist") {
      const capitalize = (s) => {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      setTimeout(() => {
        that.forvideo_Obj = _.filter(that.data.playlist, function (videoObj) {
          return videoObj.subTopicType == "video";
        });

        var expertPlaylistarr = [];

        //var len = that.data.playlist.length;
        var len = _.size(that.forvideo_Obj);

        for (var i = 0; i < len; i++) {
          expertPlaylistarr.push({
            src: {
              //mp4: [that.data.playlist[i].url]
              mp4: [
                that.forvideo_Obj[i].localUrl != ""
                  ? (
                    that.file_object.dataDirectory +
                    "V2CardioMedia/" +
                    that.forvideo_Obj[i].videoName
                  ).replace(/file:\/\//g, "")
                  : that.forvideo_Obj[i].url,
              ],
            },
            contentMetadata: {
              videoContentFor: capitalize(that.data.source),
              videoId: that.forvideo_Obj[i].id,
              name: that.forvideo_Obj[i].name,
              tag: that.forvideo_Obj[i].tag,
              thumbnail:
                that.forvideo_Obj[i].localIconUrl != ""
                  ? (
                    that.file_object.dataDirectory +
                    that.forvideo_Obj[i].localIconUrl
                  ).replace(/file:\/\//g, "")
                  : that.forvideo_Obj[i].iconUrl,
              poster: [
                that.forvideo_Obj[i].localIconUrl != ""
                  ? (
                    that.file_object.dataDirectory +
                    that.forvideo_Obj[i].localIconUrl
                  ).replace(/file:\/\//g, "")
                  : that.forvideo_Obj[i].iconUrl,
              ],
            },
          });
        }

        setTimeout(() => {
          that.radiant_setting_provider_object.data_set_array_of_objects_forPlaylist(
            expertPlaylistarr
          );
          var playlistRmpContainer = document.getElementById("rmpPlayer");
          playlistRmpContainer.addEventListener("srcchanging", function () {
            console.log("expert playlist has start the changing new src");
            that.changingPlayerSource();
          });
        }, 500);

        var videoDetail_launch = {
          record_time: that.dtStr,
          record_date: that.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          userEmail: localStorage.getItem("cv5userEmail"),
          location: localStorage.getItem("location"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
          comesFrom: that.comesfrom,
          contentFor: capitalize(that.data.source),
          videoId: that.data.playlist[that.playlistindex].id,
          videoName: that.data.playlist[that.playlistindex].name,
          videoTag: that.data.playlist[that.playlistindex].tag,
        };
        that.clevertap_object.recordEventWithNameAndProps(
          "videoDetailLaunch",
          videoDetail_launch
        );

        that.lastVideoIndex = _.findLastIndex(that.data.playlist, {
          subTopicType: "video",
        });

        that.radiant_setting_provider_object.playListNameWithLastIndex(
          that.playlistname,
          that.lastVideoIndex,
          that.share_Url
        );
      }, 1000);
    } else if (that.data.type == "video_detail") {
      var srcSource = "";
      var local_IconUrl = "";
      if (that.request_from == "splash") {
        srcSource = that.data.display_playlist.url;
        local_IconUrl = that.data.display_playlist.iconUrl;
      } else {
        srcSource =
          that.path + "V2CardioMedia/" + that.data.display_playlist.videoName;
        local_IconUrl = that.path + that.data.display_playlist.localUrl;
      }

      const capitalize = (s) => {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      setTimeout(() => {
        if (that.data.display_playlist.localUrl != "") {
          var video_Details1 = [
            {
              src: {
                mp4: [srcSource],
              },
              contentMetadata: {
                videoContentFor: capitalize(that.data.source),
                videoId: that.data.display_playlist.id,
                name: that.data.display_playlist.name,
                tag: that.data.display_playlist.tag,
                thumbnail: local_IconUrl,
                poster: [local_IconUrl],
              },
            },
          ];
          that.radiant_setting_provider_object.setVideoSrcObject(
            video_Details1
          );
        } else {
          var video_Details2 = [
            {
              src: {
                mp4: [that.data.display_playlist.url],
              },
              contentMetadata: {
                videoContentFor: capitalize(that.data.source),
                videoId: that.data.display_playlist.id,
                name: that.data.display_playlist.name,
                tag: that.data.display_playlist.tag,
                thumbnail: that.data.display_playlist.iconUrl,
                poster: [that.data.display_playlist.iconUrl],
              },
            },
          ];
          that.radiant_setting_provider_object.setVideoSrcObject(
            video_Details2
          );
        }

        var videoDetailLaunch1 = {
          record_time: that.dtStr,
          record_date: that.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          userEmail: localStorage.getItem("cv5userEmail"),
          location: localStorage.getItem("location"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
          comesFrom: that.comesfrom,
          contentFor: capitalize(that.data.source),
          videoId: that.data.display_playlist.id,
          videoName: that.data.display_playlist.name,
          videoTag: that.data.display_playlist.tag,
        };

        that.clevertap_object.recordEventWithNameAndProps(
          "videoDetailLaunch",
          videoDetailLaunch1
        );
      }, 1000);
    }
  }

  onEvent(event: string, item: any, e: any) {
    var network_type = this.network_check_object.getNetworkType();
    if (event == "onItemClick") {
      var category_querystring: string[] = new Array(
        " WHERE id=" + item.categoryId
      );
      this.database_provider_object
        .fetchAllData("new_category", category_querystring)
        .then((cat_data) => {
          this.category_data = cat_data;
        });

      var topic_querystring: string[] = new Array(" WHERE id=" + item.topicId);
      this.database_provider_object
        .fetchAllData("new_topics", topic_querystring)
        .then((topic_data) => {
          this.topic_data = topic_data;
        });
      if (item.subTopicType == "video") {
        this.playPause = "startPlay";
        var canShare = localStorage.getItem("userProAccess");
        var querystring: string[] = new Array(
          "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" +
          item.id
        );
        this.database_provider_object
          .fetchAllData("new_sub_topics", querystring)
          .then((data) => {
            if (data[0].isPaid == 0 || canShare == "true") {
              this.disscussforvideomenu = data[0];
              this.data.display_playlist = data[0];
              this.forvideomenuItem(data[0].id, data[0].tag, "education");

              if (network_type != "none") {
                setTimeout(() => {
                  this.network_check_object.getVideoTagCountAction(
                    data[0].tag,
                    this.userTypeformenu,
                    localStorage.getItem("userliveId"),
                    "",
                    this.possibleButtons,
                    data[0]
                  );
                }, 1000);

                setTimeout(() => {
                  this.network_check_object.forTriggersDetalsPageBACKAction(
                    "WhatsNewDetailsPage",
                    "forRelateditemClick"
                  );
                }, 1500);
              }

              setTimeout(() => {
                this.radiant_setting_provider_object.forPlayClickTrigger(
                  data[0],
                  this.possibleButtons
                );
              }, 1000);

              if (data[0].localUrl != "") {
                localStorage.setItem("offline", "yes");
                var srcSource =
                  this.path + "V2CardioMedia/" + data[0].videoName;
                var local_IconUrl = this.path + data[0].localIconUrl;

                var playlistData2 = [
                  {
                    src: {
                      mp4: [srcSource],
                    },
                    contentMetadata: {
                      videoContentFor: "Education",
                      videoId: data[0].id,
                      name: data[0].name,
                      tag: data[0].tag,
                      thumbnail: local_IconUrl,
                      poster: [local_IconUrl],
                    },
                  },
                ];
                this.radiant_setting_provider_object.setSrcObjectOnitemClick(
                  playlistData2
                );
                this.pageTop.scrollToTop();
                this.presentToast(data[0].copyrightInfo);
                var params = {
                  record_time: this.dtStr,
                  record_date: this.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  category_name: this.category_data[0].name,
                  topic_name: this.topic_data[0].name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  clickedVideoContentFor: "Education",
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                this.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
              } else {
                this.platform_object.ready().then(() => {
                  var network_type = this.network_check_object.getNetworkType();
                  if (network_type == "none") {
                    this.toast_controller_object
                      .create({
                        message: "This video requires internet connection.",
                        position: "bottom",
                        duration: 5000,
                      })
                      .present();
                  } else {
                    localStorage.setItem("offline", "no");

                    var playlistData3 = [
                      {
                        src: {
                          mp4: [data[0].url],
                        },
                        contentMetadata: {
                          videoContentFor: "Education",
                          videoId: data[0].id,
                          name: data[0].name,
                          tag: data[0].tag,
                          thumbnail: data[0].iconUrl,
                          poster: [data[0].iconUrl],
                        },
                      },
                    ];

                    this.radiant_setting_provider_object.setSrcObjectOnitemClick(
                      playlistData3
                    );
                    this.pageTop.scrollToTop();
                    this.presentToast(data[0].copyrightInfo);
                    var params = {
                      record_time: this.dtStr,
                      record_date: this.clevertapDate,
                      os: localStorage.getItem("getDevicePlatform"),
                      modelNo: localStorage.getItem("modelNo"),
                      deviceversion: localStorage.getItem("getDeviceversion"),
                      userRoleId: localStorage.getItem("cv5userRoleId"),
                      userType: localStorage.getItem("cv5usrType"),
                      category_name: this.category_data[0].name,
                      topic_name: this.topic_data[0].name,
                      userEmail: localStorage.getItem("cv5userEmail"),
                      userRoleSubType:
                        localStorage.getItem("cv5usrRolesubType"),
                      file: item.name,
                      videoName: item.videoName,
                      location: localStorage.getItem("location"),
                      specialities: localStorage.getItem("usrSpecialities"),
                      clickedVideoContentFor: "Education",
                      subSpecialities:
                        localStorage.getItem("cv5usrRolesubType"),
                    };
                    this.clevertap_object.recordEventWithNameAndProps(
                      "clickedOnVideo",
                      params
                    );
                  }
                });
              }
            } else {
              var confirmPopup = this.alert_controller_object.create({
                title: "",
                message:
                  '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                enableBackdropDismiss: true,
                buttons: [
                  {
                    text: "Upgrade",
                    handler: () => {
                      this.navCtrl.push("UpgradePlanPage");
                    },
                  },
                ],
              });
              confirmPopup.present();
            }
          });
      } else if (item.subTopicType == "image") {
        if (item.localUrl) {
          this.navCtrl.push("DrawonPage", {
            drawnurl: item.localUrl,
            drawOnImgTitle: item.title,
            drawnCopyright: item.copyrightInfo,
            drawnSubtopicType: item.subTopicType,
            video_Name: item.videoName,
            local_Url: "localUrl",
          });
        } else {
          this.navCtrl.push("DrawonPage", {
            drawnurl: item.url,
            drawOnImgTitle: item.title,
            drawnCopyright: item.copyrightInfo,
            drawnSubtopicType: item.subTopicType,
          });
        }
      }
    } else if (event == "onDownload" && e.isTrusted) {
      var canShare = localStorage.getItem("canDownloadAccess");
      if (item.isDownloadable == 1) {
        if (canShare == "true") {
          this.platform_object.ready().then(() => {
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
              var downloadque = localStorage.getItem("Downloadque");

              if (downloadque == null || downloadque == "") {
                downloadque = item.id;
              } else {
                downloadque = downloadque + "," + item.id;
              }

              localStorage.setItem("Downloadque", downloadque);

              this.isDownloadVideoMultiple("education");
            }
          });
        } else {
          var confirmPopup = this.alert_controller_object.create({
            title: "",
            message:
              '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
            enableBackdropDismiss: true,
            buttons: [
              {
                text: "Upgrade",
                handler: () => {
                  this.navCtrl.push("UpgradePlanPage");
                },
              },
            ],
          });
          confirmPopup.present();
        }
      } else {
        var confirmPopup = this.alert_controller_object.create({
          title: "",
          message:
            '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
          enableBackdropDismiss: true,
          buttons: ["Dismiss"],
        });
        confirmPopup.present();
      }

      e.stopPropagation();
    } else if (event == "onFavorite" && e.isTrusted) {
      e.stopPropagation();
      this.markasFavorite(item, "education");
    } else if (event == "onShare" && e.isTrusted) {
      e.stopPropagation();
      this.video_share_provider_object.shareSingleVideo(item);
    } else if (event == "onImageCantDownload" && e.isTrusted) {
      e.stopPropagation();
      this.toast_service_object.mypresentToast(
        "Only videos can be downloaded.",
        2000
      );
    } else if (event == "onInfoItemClick" && e.isTrusted) {
      var category_querystring: string[] = new Array(
        " WHERE id=" + item.categoryId
      );
      this.database_provider_object
        .fetchAllData("new_category", category_querystring)
        .then((cat_data) => {
          this.category_data = cat_data;
        });

      var topic_querystring: string[] = new Array(" WHERE id=" + item.topicId);
      this.database_provider_object
        .fetchAllData("new_topics", topic_querystring)
        .then((topic_data) => {
          this.topic_data = topic_data;
        });
      if (item.subTopicType == "video") {
        this.playPause = "startPlay";
        var canShare = localStorage.getItem("userProAccess");

        var querystring: string[] = new Array(
          "join information_data on information.id = information_data.id where information.id=" +
          item.id
        );

        this.database_provider_object
          .fetchAllData("information", querystring)
          .then((data) => {
            if (data[0].isPaid == 0 || canShare == "true") {
              this.disscussforvideomenu = data[0];
              this.data.display_playlist = data[0];
              this.forvideomenuItem(data[0].id, data[0].tag, "information");

              if (network_type != "none") {
                setTimeout(() => {
                  this.network_check_object.getVideoTagCountAction(
                    data[0].tag,
                    this.userTypeformenu,
                    localStorage.getItem("userliveId"),
                    "",
                    this.possibleButtons,
                    data[0]
                  );
                }, 1000);

                setTimeout(() => {
                  this.network_check_object.forTriggersDetalsPageBACKAction(
                    "WhatsNewDetailsPage",
                    "forRelateditemClick"
                  );
                }, 1500);
              }
              setTimeout(() => {
                this.radiant_setting_provider_object.forPlayClickTrigger(
                  data[0],
                  this.possibleButtons
                );
              }, 1000);
              if (data[0].localUrl != "") {
                localStorage.setItem("offline", "yes");
                var srcSource =
                  this.path + "V2CardioMedia/" + data[0].videoName;
                var local_IconUrl = this.path + data[0].localIconUrl;

                var playlistData4 = [
                  {
                    src: {
                      mp4: [srcSource],
                    },
                    contentMetadata: {
                      videoContentFor: "Information",
                      videoId: data[0].id,
                      name: data[0].name,
                      tag: data[0].tag,
                      thumbnail: local_IconUrl,
                      poster: [local_IconUrl],
                    },
                  },
                ];
                this.radiant_setting_provider_object.setSrcObjectOnitemClick(
                  playlistData4
                );
                this.pageTop.scrollToTop();
                this.presentToast(data[0].copyrightInfo);
                var params = {
                  record_time: this.dtStr,
                  record_date: this.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  category_name: this.category_data[0].name,
                  topic_name: this.topic_data[0].name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  clickedVideoContentFor: "Information",
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                this.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
              } else {
                this.platform_object.ready().then(() => {
                  var network_type = this.network_check_object.getNetworkType();
                  if (network_type == "none") {
                    this.toast_controller_object
                      .create({
                        message: "This video requires internet connection.",
                        position: "bottom",
                        duration: 5000,
                      })
                      .present();
                  } else {
                    localStorage.setItem("offline", "no");

                    var playlistData5 = [
                      {
                        src: {
                          mp4: [data[0].url],
                        },
                        contentMetadata: {
                          videoContentFor: "Information",
                          videoId: data[0].id,
                          name: data[0].name,
                          tag: data[0].tag,
                          thumbnail: data[0].iconUrl,
                          poster: [data[0].iconUrl],
                        },
                      },
                    ];
                    this.radiant_setting_provider_object.setSrcObjectOnitemClick(
                      playlistData5
                    );
                    this.pageTop.scrollToTop();
                    this.presentToast(data[0].copyrightInfo);
                    var params = {
                      record_time: this.dtStr,
                      record_date: this.clevertapDate,
                      os: localStorage.getItem("getDevicePlatform"),
                      modelNo: localStorage.getItem("modelNo"),
                      deviceversion: localStorage.getItem("getDeviceversion"),
                      userRoleId: localStorage.getItem("cv5userRoleId"),
                      userType: localStorage.getItem("cv5usrType"),
                      category_name: this.category_data[0].name,
                      topic_name: this.topic_data[0].name,
                      userEmail: localStorage.getItem("cv5userEmail"),
                      userRoleSubType:
                        localStorage.getItem("cv5usrRolesubType"),
                      file: item.name,
                      videoName: item.videoName,
                      location: localStorage.getItem("location"),
                      specialities: localStorage.getItem("usrSpecialities"),
                      clickedVideoContentFor: "Information",
                      subSpecialities:
                        localStorage.getItem("cv5usrRolesubType"),
                    };
                    this.clevertap_object.recordEventWithNameAndProps(
                      "clickedOnVideo",
                      params
                    );
                  }
                });
              }
            } else {
              var confirmPopup = this.alert_controller_object.create({
                title: "",
                message:
                  '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                enableBackdropDismiss: true,
                buttons: [
                  {
                    text: "Upgrade",
                    handler: () => {
                      this.navCtrl.push("UpgradePlanPage");
                    },
                  },
                ],
              });
              confirmPopup.present();
            }
          });
      } else if (item.subTopicType == "image") {
        if (item.localUrl) {
          this.navCtrl.push("DrawonPage", {
            drawnurl: item.localUrl,
            drawOnImgTitle: item.title,
            drawnCopyright: item.copyrightInfo,
            drawnSubtopicType: item.subTopicType,
            video_Name: item.videoName,
            local_Url: "localUrl",
          });
        } else {
          this.navCtrl.push("DrawonPage", {
            drawnurl: item.url,
            drawOnImgTitle: item.title,
            drawnCopyright: item.copyrightInfo,
            drawnSubtopicType: item.subTopicType,
          });
        }
      }
    } else if (event == "onInfoDownload" && e.isTrusted) {
      var canShare = localStorage.getItem("canDownloadAccess");
      if (item.isDownloadable == 1) {
        if (canShare == "true") {
          this.platform_object.ready().then(() => {
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
              var downloadque = localStorage.getItem("Downloadque");

              if (downloadque == null || downloadque == "") {
                downloadque = item.id;
              } else {
                downloadque = downloadque + "," + item.id;
              }

              localStorage.setItem("Downloadque", downloadque);

              this.isDownloadVideoMultiple("information");
            }
          });
        } else {
          var confirmPopup = this.alert_controller_object.create({
            title: "",
            message:
              '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
            enableBackdropDismiss: true,
            buttons: [
              {
                text: "Upgrade",
                handler: () => {
                  this.navCtrl.push("UpgradePlanPage");
                },
              },
            ],
          });
          confirmPopup.present();
        }
      } else {
        var confirmPopup = this.alert_controller_object.create({
          title: "",
          message:
            '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
          enableBackdropDismiss: true,
          buttons: ["Dismiss"],
        });
        confirmPopup.present();
      }
      e.stopPropagation();
    } else if (event == "onInfoFavorite" && e.isTrusted) {
      e.stopPropagation();
      this.markasFavorite(item, "information");
    }
  }

  ionViewDidEnter() {
    this.orientation = this.screen_orientation_object.type;
    this.screen_orientation_object.unlock();
    this.menu_controller_object.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.screen_orientation_object.lock(
      this.screen_orientation_object.ORIENTATIONS.PORTRAIT
    );
    var network_type = this.network_check_object.getNetworkType();
    if (network_type == "none") {
      localStorage.setItem("offline", "yes");
    } else {
      localStorage.setItem("offline", "no");
    }
    var network_type = this.network_check_object.getNetworkType();
    if (network_type != "none") {
      this.network_check_object.getPageAction(
        "WhatsNewDetailsPage",
        "end",
        "",
        localStorage.getItem("cv5usrType")
      );
    }
    this.menu_controller_object.swipeEnable(true);
    this.rmp = new RadiantMP("rmpPlayer1");
    this.playlistrmp = new RadiantMP("rmpPlayer");

    this.rmp.pause();
    this.playlistrmp.pause();
  }

  onPlaylistClick(clickedata: any, index: any, contenFOR: any) {
    if (clickedata.subTopicType == "video") {
      const capitalize = (s) => {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      var category_querystring: string[] = new Array(
        " WHERE id=" + clickedata.categoryId
      );
      this.database_provider_object
        .fetchAllData("new_category", category_querystring)
        .then((cat_data) => {
          this.category_data = cat_data;
        });

      var topic_querystring: string[] = new Array(
        " WHERE id=" + clickedata.topicId
      );
      this.database_provider_object
        .fetchAllData("new_topics", topic_querystring)
        .then((topic_data) => {
          this.topic_data = topic_data;
        });

      var canShare = localStorage.getItem("userProAccess");
      if (clickedata.isPaid == 0 || canShare == "true") {
        this.disscussforvideomenu = clickedata;
        var currentIndex = this.findIndex(this.forvideo_Obj, clickedata.id);

        setTimeout(() => {
          this.radiant_setting_provider_object.setSRCChangedforPlaylist(
            currentIndex
          );
        }, 500);

        this.display_playlist = clickedata;
        this.pageTop.scrollToTop();

        this.presentToast(clickedata.copyrightInfo);

        this.forvideomenuItem(clickedata.id, clickedata.tag, contenFOR);
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != "none") {
          setTimeout(() => {
            this.network_check_object.getVideoTagCountAction(
              clickedata.tag,
              this.userTypeformenu,
              localStorage.getItem("userliveId"),
              "",
              this.possibleButtons,
              clickedata
            );
          }, 1000);
          setTimeout(() => {
            this.network_check_object.forTriggersDetalsPageBACKAction(
              "WhatsNewDetailsPage",
              "forRelateditemClick"
            );
          }, 2000);
          setTimeout(() => {
            this.network_check_object.forRandomVideoViewCount(
              localStorage.getItem("userliveId")
            );
          }, 2500);
        }
        setTimeout(() => {
          this.radiant_setting_provider_object.forPlayClickTrigger(
            clickedata,
            this.possibleButtons
          );
        }, 1000);

        var params = {
          record_time: this.dtStr,
          record_date: this.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          modelNo: localStorage.getItem("modelNo"),
          deviceversion: localStorage.getItem("getDeviceversion"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          category_name: this.category_data[0].name,
          topic_name: this.topic_data[0].name,
          userEmail: localStorage.getItem("cv5userEmail"),
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          file: clickedata.name,
          videoName: clickedata.videoName,
          location: localStorage.getItem("location"),
          specialities: localStorage.getItem("usrSpecialities"),
          clickedVideoContentFor: capitalize(this.data.source),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
        };
        this.clevertap_object.recordEventWithNameAndProps(
          "clickedOnVideo",
          params
        );
      } else {
        var confirmPopup = this.alert_controller_object.create({
          title: "",
          message:
            '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
          enableBackdropDismiss: true,
          buttons: [
            {
              text: "Upgrade",
              handler: () => {
                this.navCtrl.push("UpgradePlanPage");
              },
            },
          ],
        });
        confirmPopup.present();
      }
    } else if (clickedata.subTopicType == "image") {
      if (clickedata.localUrl) {
        this.navCtrl.push("DrawonPage", {
          drawnurl: clickedata.localUrl,
          drawOnImgTitle: clickedata.title,
          drawnCopyright: clickedata.copyrightInfo,
          drawnSubtopicType: clickedata.subTopicType,
          video_Name: clickedata.videoName,
          local_Url: "localUrl",
        });
      } else {
        this.navCtrl.push("DrawonPage", {
          drawnurl: clickedata.url,
          drawOnImgTitle: clickedata.title,
          drawnCopyright: clickedata.copyrightInfo,
          drawnSubtopicType: clickedata.subTopicType,
        });
      }
    }
  }

  changingPlayerSource() {
    var that = this;
    var tolatObj = that.data.playlist;

    that.CurrentPlaylistObject =
      that.radiant_setting_provider_object.getCurrentObjectFromPlaylist();
    setTimeout(() => {
      var play_data = _.filter(tolatObj, function (forvideotitle) {
        return forvideotitle.id == that.CurrentPlaylistObject.videoId;
      });

      that.forvideomenuItem(
        play_data[0].id,
        play_data[0].tag,
        that.data.source
      );
      that.display_playlist = play_data[0];
      that.disscussforvideomenu = play_data[0];
      var network_type = that.network_check_object.getNetworkType();
      if (network_type != "none") {
        setTimeout(() => {
          that.network_check_object.getVideoTagCountAction(
            play_data[0].tag,
            that.userTypeformenu,
            localStorage.getItem("userliveId"),
            "",
            that.possibleButtons,
            play_data[0]
          );
        }, 1000);
        setTimeout(() => {
          that.network_check_object.forTriggersDetalsPageBACKAction(
            "WhatsNewDetailsPage",
            "forRelateditemClick"
          );
        }, 2000);
        setTimeout(() => {
          that.network_check_object.forRandomVideoViewCount(
            localStorage.getItem("userliveId")
          );
        }, 2500);
      }
      setTimeout(() => {
        that.radiant_setting_provider_object.forPlayClickTrigger(
          play_data[0],
          that.possibleButtons
        );
      }, 1000);
    }, 500);
  }

  findIndex(jsonData, findThis) {
    var indexNum = jsonData.findIndex((obj) => obj.id == findThis);
    return indexNum;
  }

  presentToast(msg: any, duration = 2000) {
    let toast = this.toast_controller_object.create({
      message: msg,
      duration: duration,
      position: "middle",
    });
    toast.present();
  }

  showConfirmBox() {
    let confirmPopup = this.alert_controller_object.create({
      title: "Confirmation you watched",
      message: "Did you watch all the videos in this playlist?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Buy clicked");
            this.confirmPopupThen();
          },
        },
      ],
    });
    confirmPopup.present();
  }

  confirmPopupThen() {
    try {
      var options = {
        message:
          "Yes I have seen playlist '" +
          this.playlistname +
          "' and understood the videos.",
        subject: "The status of playlist", // fi. for email
        files: [], // an array of filenames either locally or remotely
        url: localStorage.getItem("isLinkSet"),
        chooserTitle: "", // Android only, you can override the default share sheet title
      };
      var onSuccess = function (result) {
        var params = {
          userType: "doctor",
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          location: localStorage.getItem("location"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
        };
        this.clevertap_object.recordEventWithNameAndProps("appSharing", params);
      };
      var onError = function (msg) { };
      this.social_sharing_object.shareWithOptions(options);
    } catch (e) {
      console.log("ctch");

      //$ionicHistory.backView().go();
    }
  }

  isDownloadVideoMultiple(from_table) {
    this.platform_object.ready().then(() => {
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
        var que_ids = localStorage.getItem("Downloadque");
        var progress_ids_arr = que_ids.split(",").map(Number);
        progress_ids_arr = _.uniq(progress_ids_arr);
        que_ids = progress_ids_arr.toString();
        localStorage.setItem("Downloadque", que_ids);
        var progress_id = progress_ids_arr[0];
        if (progress_id == 0) {
          progress_id = progress_ids_arr[1];
        }

        var userCondition = new Array("");
        this.database_provider_object
          .fetchAllData("new_user_info", userCondition)
          .then((user_data) => {
            this.userdata = user_data[0];
          });
        var table_name = "";
        if (from_table == "education") {
          var querystring: string[] = new Array(
            "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN (" +
            progress_id +
            ")"
          );
          table_name = "new_sub_topics";
        } else if (from_table == "information") {
          var querystring: string[] = new Array(
            "join information_data on information.id = information_data.id where information.id IN (" +
            progress_id +
            ")"
          );
          table_name = "information";
        }

        this.database_provider_object
          .fetchAllData(table_name, querystring)
          .then(
            (data) => {
              const fileTransfer: FileTransferObject =
                this.file_transfer_object.create();

              var item = data[0];

              if (item.localUrl != "") {
                var new_ids_arr = que_ids.split(",").map(Number);
                var test_arr = [];
                _.each(new_ids_arr, function (value, key) {
                  if (value != item.id) {
                    test_arr.push(value);
                  }
                });
                que_ids = test_arr.toString();
                localStorage.setItem("Downloadque", que_ids);

                this.toast_service_object.presentToast(
                  '"' + item.name + '" already downloaded.'
                );

                if (que_ids == "") {
                  localStorage.setItem("Downloadque", "");
                }
              } else {
                this.toast_service_object.mypresentToast(
                  'Downloading : "' + item.name + '"',
                  2000
                );

                var filename = item.videoName;
                var queue_data = {
                  download_url: item.url,
                  videoName: item.videoName,
                  id: item.id,
                  categoryId: item.categoryId,
                  subTopicType: item.subTopicType,
                };

                fileTransfer.onProgress((progressEvent) => {
                  if (progressEvent.lengthComputable) {
                    this.isDownloading = true;

                    //var perc:any = 'perc'+item.id;
                    var perc =
                      (progressEvent.loaded / progressEvent.total) * 100;

                    this.perc1 = perc.toFixed(1);

                    //var loader:any = 'loader'+item.id;
                    var loader = document.getElementById(
                      "whatsnew_progressBar_" + item.id
                    );
                    loader.style.background = "#fff";
                    loader.innerHTML = this.perc1 + "%";

                    if (this.perc1 == 100) {
                      loader.innerHTML = "";
                      loader.style.background = "";
                    }
                  }
                });

                fileTransfer
                  .download(item.url, this.path + "V2CardioMedia/" + filename)
                  .then(
                    (entry) => {
                      var video_url = "V2CardioMedia/" + filename;

                      if (from_table == "education") {
                        var querystring: string[] = new Array(
                          " UPDATE subtopic_data SET localUrl = '" +
                          video_url +
                          "', downloaded = 1 WHERE id = " +
                          item.id
                        );
                      } else if (from_table == "information") {
                        var querystring: string[] = new Array(
                          " UPDATE information_data SET localUrl = '" +
                          video_url +
                          "', downloaded = 1 WHERE id = " +
                          item.id
                        );
                      }
                      this.database_provider_object.updateData(querystring);

                      var iconfilename = item.iconUrl.split("/").pop();
                      //console.log('iconfilename--->'+iconfilename);
                      this.downloadfile(
                        item.iconUrl,
                        iconfilename,
                        item.id,
                        from_table
                      );
                      this.downloadapi(
                        item.id,
                        this.userdata.liveId,
                        from_table
                      );
                      this.toast_service_object.mypresentToast(
                        'Finished downloading : "' + item.name + '"',
                        2000
                      );

                      var loader3 = document.getElementById(
                        "download_" + item.id
                      );
                      loader3.classList.add("active");

                      if (item.downloaded == 0) item.downloaded = 1;

                      //this.toast_dismiss();
                    },

                    (error) => {
                      this.toast_service_object.presentToast(
                        "Download failed! please try again."
                      );
                    }
                  );

                que_ids = localStorage.getItem("Downloadque");
                var new_ids_arr = que_ids.split(",").map(Number);
                var test_arr = [];
                _.each(new_ids_arr, function (value, key) {
                  if (value != item.id) {
                    test_arr.push(value);
                  }
                });

                que_ids = test_arr.toString();
                localStorage.setItem("Downloadque", que_ids);
              }

              if (que_ids != "") {
                this.isDownloadVideoMultiple(from_table);
              } else if (que_ids == "") {
                localStorage.setItem("Downloadque", "");
              }
            },
            (e) => {
              //console.log('586 error '+JSON.stringify(e))
            }
          );
      }
    });
  }

  //download function
  downloadfile(url, name, id, from_table) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.path + "icons/" + name).then((entry) => {
      var icon_url = "icons/" + name;
      if (from_table == "education") {
        var querystring: string[] = new Array(
          " UPDATE subtopic_data SET localIconUrl = '" +
          icon_url +
          "', downloaded = 1 WHERE id = " +
          id +
          " "
        );
      } else if (from_table == "information") {
        var querystring: string[] = new Array(
          " UPDATE information_data SET localIconUrl = '" +
          icon_url +
          "', downloaded = 1 WHERE id = " +
          id +
          " "
        );
      }
      this.database_provider_object.updateData(querystring);
    });
  }

  onCompanyUrl(group) {
    var url = group.sponsoredLink;
    var ref = this.in_app_browser_object.create(
      url,
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
  }

  //insert query to api database
  downloadapi(groupid, userid, from_table) {
    var post_url = this.http_service_object.getPosturl("downloads");
    if (from_table == "education") {
      this.http_object
        .post(post_url, { cardiovisualUserId: userid, subtopicId: groupid })
        .subscribe(
          (data) => {
            var response = JSON.parse(data["_body"]);
            var response_data = JSON.stringify(response);
          },
          (error) => {
            console.log(error);
          }
        );
    } else if (from_table == "information") {
      this.http_object
        .post(post_url, { cardiovisualUserId: userid, informationId: groupid })
        .subscribe(
          (data) => {
            var response = JSON.parse(data["_body"]);
            var response_data = JSON.stringify(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  markasFavorite(group, from_table) {
    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if (network_type == "none") {
        this.toast_controller_object
          .create({
            message: "This video requires internet connection.",
            position: "bottom",
            duration: 5000,
          })
          .present();
      } else {
        if (group.isFavourite == 0) {
          //set isFavourite == 1
          this.storage_object.get("user_logged_in").then((val) => {
            if (from_table == "education") {
              this.database_provider_object.setFavorites(val, group.id);
            } else if (from_table == "information") {
              this.database_provider_object.setinformationFavorites(
                val,
                group.id
              );
            }
            this.toast_service_object.presentToast("Added to Favourites.");
          });
        } else {
          //set isFavourite == 0
          this.storage_object.get("user_logged_in").then((val) => {
            if (from_table == "education") {
              this.database_provider_object.setFavorites(val, group.id);
            } else if (from_table == "information") {
              this.database_provider_object.setinformationFavorites(
                val,
                group.id
              );
            }
            this.toast_service_object.presentToast("Removed from Favourites.");
          });
        }
        group.isFavourite = !group.isFavourite;
      }
    });
  }

  setFavoriteFromBar(group: any, from_table) {
    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if (network_type == "none") {
        this.toast_controller_object
          .create({
            message: "This video requires internet connection.",
            position: "bottom",
            duration: 5000,
          })
          .present();
      } else {
        if (group.isFavourite == 0) {
          //set isFavourite == 1
          this.storage_object.get("user_logged_in").then((val) => {
            if (from_table == "education") {
              this.database_provider_object.setFavorites(val, group.id);
            } else if (from_table == "information") {
              this.database_provider_object.setinformationFavorites(
                val,
                group.id
              );
            }
            this.toast_service_object.presentToast("Added to Favourites.");
          });
        } else {
          //set isFavourite == 0
          this.storage_object.get("user_logged_in").then((val) => {
            if (from_table == "education") {
              this.database_provider_object.setFavorites(val, group.id);
            } else if (from_table == "information") {
              this.database_provider_object.setinformationFavorites(
                val,
                group.id
              );
            }
            this.toast_service_object.presentToast("Removed from Favourites.");
          });
        }
        group.isFavourite = !group.isFavourite;
      }
    });
  }

  shareCardio() {
    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if (network_type == "none") {
        this.toast_controller_object
          .create({
            message: "This video requires internet connection.",
            position: "bottom",
            duration: 5000,
          })
          .present();
      } else {
        var options = {
          message:
            "Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.", // not supported on some apps (Facebook, Instagram)
          subject: "Download CardioVisual", // fi. for email
          files: [], // an array of filenames either locally or remotely
          url: localStorage.getItem("isLinkSet"),
          chooserTitle: "", // Android only, you can override the default share sheet title
        };
        this.social_sharing_object.shareWithOptions(options);
      }
    });
  }

  shareVideo(id, url, name, description) {
    //any member can share the video

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if (network_type == "none") {
        this.toast_controller_object
          .create({
            message: "This video requires internet connection.",
            position: "bottom",
            duration: 5000,
          })
          .present();
      } else {
        var options1 = {
          message:
            name +
            " - " +
            description +
            ".Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.",
          files: [], // an array of filenames either locally or remotely
          url: url,
          chooserTitle: "Share " + name, //'' // Android only, you can override the default share sheet title
        };

        var params = {
          record_time: this.dtStr,
          record_date: this.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          userEmail: localStorage.getItem("cv5userEmail"),
          Identity: localStorage.getItem("userIdentity"),
          videoName: name,
          videoId: id,
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          location: localStorage.getItem("location"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
        };
        this.clevertap_object.recordEventWithNameAndProps(
          "sharedVideo",
          params
        ); //
        this.social_sharing_object.shareWithOptions(options1);
      }
    });
  }

  /*qnaSite(video_data){
      this.platform_object.ready().then(() => {

        var network_type = this.network_check_object.getNetworkType();
        if(network_type == 'none'){
         
          this.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();

        } else {
           var forum_tags = video_data.forum_tags; 
           const myModalOptions: ModalOptions = {
               enableBackdropDismiss: false
             };
           this.storage_object.get('user_logged_in').then((val) => {
             this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {

                if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional' ){

                   
                  var email = data.email;
                  var username = data.username;
                  if(email =='' || username == '' || username == null){
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
                    this.redirectToForumDashboard({'email': email, 'username': username, 'first_time': 'no', 'user_type':'Patient', 'forum_tags' : forum_tags});
                  }

                }else{

                  var email = data.email;
                   var username = data.username;
                   if(email =='' || username == '' || username == null){
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
                      this.redirectToForumDashboard({'email': email, 'username': username, 'first_time': 'no', 'forum_tags' : forum_tags, 'user_type':'Doctor'});
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
      "tags" : object.forum_tags,
      "location":localStorage.getItem('location'),
      "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
      "specialities":localStorage.getItem('usrSpecialities'),
      "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
    };

    //this.clevertap_object.recordEventWithNameAndProps("openedForum",params);

    var text_arr =[object.username, object.email, object.first_time, object.forum_tags];
    var text = JSON.stringify(text_arr);
    var encode_string = window.btoa(text);

    if(object.user_type == 'Patient'){
        var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        
    }else{

      var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
    }  
  }*/

  isDownloadVideoFromBar(group, from_table) {
    var canShare = localStorage.getItem("canDownloadAccess");
    if (group.isDownloadable == 1) {
      if (canShare == "true") {
        this.platform_object.ready().then(() => {
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
            var table_name = "";
            if (from_table == "education") {
              table_name = "subtopic_data";
            } else if (from_table == "information") {
              table_name = "information_data";
            }
            var querystring: string[] = new Array("WHERE id = " + group.id);

            this.database_provider_object
              .fetchAllData(table_name, querystring)
              .then((data) => {
                //console.log('data download --->'+JSON.stringify(data));

                this.download_count = data;
                if (data[0].localUrl != "") {
                  this.toast_service_object.presentToast(
                    group.name + " already downloaded!"
                  );
                } else {
                  //this.platform_object.ready().then(() => {

                  var names: string[] = new Array("");
                  this.database_provider_object
                    .fetchAllData("new_user_info", names)
                    .then((data) => {
                      this.userdata = data[0];

                      if (data.length > 0) {
                        const fileTransfer: FileTransferObject =
                          this.file_transfer_object.create();

                        //downlad video

                        var filename = group.url.split("/").pop();

                        this.toast_service_object.mypresentToast(
                          'Downloading : "' + group.name + '"',
                          2000
                        );

                        fileTransfer.onProgress((progressEvent) => {
                          if (progressEvent.lengthComputable) {
                            var perc =
                              (progressEvent.loaded / progressEvent.total) *
                              100;
                            this.perc1 = perc.toFixed(1);
                            // //console.log(perc);
                            var loader =
                              document.getElementById("progressBar_detail");
                            loader.style.background = "#fff";
                            loader.innerHTML = this.perc1 + "%";

                            if (this.perc1 == 100) {
                              loader.innerHTML = "";
                            }
                          }
                        });

                        fileTransfer
                          .download(
                            group.url,
                            this.path + "V2CardioMedia/" + filename
                          )
                          .then(
                            (entry) => {
                              var video_url = "V2CardioMedia/" + filename;
                              //var new_video_url = video_url.replace("file://", "");
                              if (from_table == "education") {
                                var querystring: string[] = new Array(
                                  " UPDATE subtopic_data SET localUrl = '" +
                                  video_url +
                                  "', downloaded = 1 WHERE id = " +
                                  group.id +
                                  " "
                                );
                              } else if (from_table == "information") {
                                var querystring: string[] = new Array(
                                  " UPDATE information_data SET localUrl = '" +
                                  video_url +
                                  "', downloaded = 1 WHERE id = " +
                                  group.id +
                                  " "
                                );
                              }

                              this.database_provider_object.updateData(
                                querystring
                              );

                              var iconfilename = group.iconUrl.split("/").pop();
                              //download video icon
                              this.downloadfile(
                                group.iconUrl,
                                iconfilename,
                                group.id,
                                from_table
                              );
                              //insert into live server
                              this.downloadapi(
                                group.id,
                                this.userdata.liveId,
                                from_table
                              );
                              this.toast_service_object.mypresentToast(
                                'Finished downloading : "' + group.name + '"',
                                2000
                              );
                              var loader1 =
                                document.getElementById("download_on_bar");
                              loader1.style.color = "#004958";
                              if (group.downloaded == 0) {
                                group.downloaded = 1;
                              }
                            },
                            (error) => {
                              this.toast_service_object.presentToast(
                                "Download failed! please try again."
                              );
                              console.log(error);
                              //handle error
                            }
                          );
                      }
                    });
                  //});
                }
              });
          }
        });
      } else {
        var confirmPopup = this.alert_controller_object.create({
          title: "",
          message:
            '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
          enableBackdropDismiss: true,
          buttons: [
            {
              text: "Upgrade",
              handler: () => {
                //this.navCtrl.parent.parent.push('UpgradePlanPage');
                this.navCtrl.push("UpgradePlanPage");
              },
            },
          ],
        });
        confirmPopup.present();
      }
    } else {
      var confirmPopup = this.alert_controller_object.create({
        title: "",
        message:
          '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
        enableBackdropDismiss: true,
        buttons: ["Dismiss"],
      });
      confirmPopup.present();
    }
  }

  // Actionsheet start by: sanjeev

  openMenu() {
    let actionSheet = this.action_sheet_controller_object.create({
      title: "",
      cssClass: "action-sheets-basic-page",
      buttons: this.createButtons(),
    });
    actionSheet.present();
  }

  createButtons() {
    let buttons = [];
    for (let index in this.possibleButtons) {
      let button = {
        text: this.possibleButtons[index].label,
        icon: this.possibleButtons[index].icon,
        role: this.possibleButtons[index].label,
        handler: () => {
          //console.log('index--->'+index);
          this.changeMenuList(
            this.possibleButtons[index].contentType,
            this.possibleButtons[index].value
          );
          this.interactCleverTapActon(
            this.possibleButtons[index].label,
            this.possibleButtons[index].value
          );
          return true;
        },
      };
      buttons.push(button);
    }
    return buttons;
  }

  //Actionsheet End

  openQRCodePage(data) {
    this.navCtrl.push("QrcodePage", {
      previousPage: "videoDetails",
      videoqrData: data,
    });
  }

  forvideomenuItem(videoId: any, videoTag: any, content_for: any) {
    var userformenu = this.userTypeformenu;
    /* for video menu query start : sanjeev */
    var videoMenuquery_3: string[] = new Array(
      "WHERE sub_topic_id ='" + videoId + "' AND type='videomenu'"
    );
    var videoMenuquery_4: string[] = new Array(
      "WHERE name ='" + videoTag + "' AND type='videomenu'"
    );
    this.database_provider_object
      .fetchAllData("custom_video_json", videoMenuquery_3)
      .then((custom_video_json_data_formenu) => {
        if (custom_video_json_data_formenu.length > 0) {
          var custom_video_json_forMenu = JSON.parse(
            custom_video_json_data_formenu[0].list_values
          );

          var formenudata = _.filter(
            custom_video_json_forMenu,
            function (json_forMenu) {
              return (
                (json_forMenu.usertype == userformenu ||
                  json_forMenu.usertype == "All") &&
                (json_forMenu.contentFor == content_for ||
                  json_forMenu.contentFor == "All" ||
                  json_forMenu.contentFor == undefined)
              );
            }
          );
          if (_.size(formenudata) > 2) {
            // code...
            this.possibleButtons = formenudata;
          } else {
            this.possibleButtons = [
              {
                icon: "",
                label: "Share App",
                value: "Active",
                usertype: "All",
                contentType: "forshare",
              },
              // {
              //   icon: "",
              //   label: "Ask a Question",
              //   value: "Active",
              //   usertype: "All",
              //   contentType: "forForumQuestion",
              // },
              {
                icon: "",
                label: "Add to My Playlist",
                value: "Active",
                usertype: "All",
                contentType: "forAddtoplaylist",
              },
              // {
              //   icon: "",
              //   label: "Share Feedback",
              //   value: "https://eveav.outgrow.us/Copy-of-eveav-203-1",
              //   usertype: "All",
              //   contentType: "webUrl",
              // },
              {
                icon: "close",
                label: "Cancel",
                value: "Cancel",
                usertype: "All",
                contentType: "Cancel",
              },
            ];
          }
          this.removeExtraIntractionOption();
        } else {
          this.database_provider_object
            .fetchAllData("custom_listing", videoMenuquery_4)
            .then((custom_listing_data_formenu) => {
              if (custom_listing_data_formenu.length > 0) {
                var list_json_value_forMenu = JSON.parse(
                  custom_listing_data_formenu[0].list_values
                );

                var forlistmenudata = _.filter(
                  list_json_value_forMenu,
                  function (list_json_forMenu) {
                    return (
                      (list_json_forMenu.usertype == userformenu ||
                        list_json_forMenu.usertype == "All") &&
                      (list_json_forMenu.contentFor == content_for ||
                        list_json_forMenu.contentFor == "All" ||
                        list_json_forMenu.contentFor == undefined)
                    );
                  }
                );
                if (_.size(forlistmenudata) > 2) {
                  // code...
                  this.possibleButtons = forlistmenudata;
                } else {
                  this.possibleButtons = [
                    {
                      icon: "",
                      label: "Share App",
                      value: "Active",
                      usertype: "All",
                      contentType: "forshare",
                    },
                    // {
                    //   icon: "",
                    //   label: "Ask a Question",
                    //   value: "Active",
                    //   usertype: "All",
                    //   contentType: "forForumQuestion",
                    // },
                    {
                      icon: "",
                      label: "Add to My Playlist",
                      value: "Active",
                      usertype: "All",
                      contentType: "forAddtoplaylist",
                    },
                    // {
                    //   icon: "",
                    //   label: "Share Feedback",
                    //   value: "https://eveav.outgrow.us/Copy-of-eveav-203-1",
                    //   usertype: "All",
                    //   contentType: "webUrl",
                    // },
                    {
                      icon: "close",
                      label: "Cancel",
                      value: "Cancel",
                      usertype: "All",
                      contentType: "Cancel",
                    },
                  ];
                }
                this.removeExtraIntractionOption();
              } else {
                this.possibleButtons = [
                  {
                    icon: "",
                    label: "Share App",
                    value: "Active",
                    usertype: "All",
                    contentType: "forshare",
                  },
                  // {
                  //   icon: "",
                  //   label: "Ask a Question",
                  //   value: "Active",
                  //   usertype: "All",
                  //   contentType: "forForumQuestion",
                  // },
                  {
                    icon: "",
                    label: "Add to My Playlist",
                    value: "Active",
                    usertype: "All",
                    contentType: "forAddtoplaylist",
                  },
                  // {
                  //   icon: "",
                  //   label: "Share Feedback",
                  //   value: "https://eveav.outgrow.us/Copy-of-eveav-203-1",
                  //   usertype: "All",
                  //   contentType: "webUrl",
                  // },
                  {
                    icon: "close",
                    label: "Cancel",
                    value: "Cancel",
                    usertype: "All",
                    contentType: "Cancel",
                  },
                ];
                this.removeExtraIntractionOption();
              }
            });
        }
      });
  }

  removeExtraIntractionOption(){
    if (this.possibleButtons) {
      const optionsToRemove = ['Share Your Feedback', 'Whats your Opinion', 'Quiz Yourself', 'Take a Quiz'];
    
      optionsToRemove.forEach(option => {
        const optionIdx = this.possibleButtons.findIndex(val => val.label === option);
    
        if (optionIdx !== -1) {
          this.possibleButtons.splice(optionIdx, 1);
        }
      });
    }
  }

  changeMenuList(type, value) {
    if (type == "forshare") {
      this.shareCardio();
    } else if (type == "forAddtoplaylist") {
      this.addtoplaylist(this.disscussforvideomenu);
    } else if (type == "forForumQuestion") {
      this.onPromptForQna(this.disscussforvideomenu);
    } else if (type == "forEmail") {
      this.social_sharing_object
        .canShareViaEmail()
        .then((emailSuccess) => {
          this.social_sharing_object
            .shareViaEmail("", "CardioVisual user has a question for you.", [
              value,
            ])
            .then((sharEmailSuccess) => { })
            .catch((sharEmailError) => { });
        })
        .catch((emailError) => {
          this.toast_service_object.presentToast(
            "Sharing via email is not possible."
          );
        });
    } else if (type == "forPhone") {
      this.call_number_object
        .callNumber(value, true)
        .then((callSuccess) => { })
        .catch((callError) => { });
    } else if (type == "webUrl") {
      var ref = this.in_app_browser_object.create(
        value,
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
    } else if (type == "Cancel") {
      console.log("Cancel");
    }
  }

  interactCleverTapActon(label, value) {
    var videoID = this.disscussforvideomenu.id;
    var videoTAG = this.disscussforvideomenu.tag;
    var videoNAME = this.disscussforvideomenu.name;
    var params = {
      record_time: this.dtStr,
      record_date: this.clevertapDate,
      os: localStorage.getItem("getDevicePlatform"),
      userRoleId: localStorage.getItem("cv5userRoleId"),
      userType: localStorage.getItem("cv5usrType"),
      userEmail: localStorage.getItem("cv5userEmail"),
      Identity: localStorage.getItem("userIdentity"),
      "clickd on label": label,
      videoName: videoNAME,
      videoId: videoID,
      videoTag: videoTAG,
      userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
      location: localStorage.getItem("location"),
      specialities: localStorage.getItem("usrSpecialities"),
      interactContentFor: this.data.source,
      subSpecialities: localStorage.getItem("cv5usrRolesubType"),
    };
    this.clevertap_object.recordEventWithNameAndProps(
      "clickedOninteract",
      params
    );
  }

  addtoplaylist(item) {
    var canShare = localStorage.getItem("userProAccess");
    if (canShare == "true") {
      var userCondition = new Array("");
      this.database_provider_object
        .fetchAllData("new_user_info", userCondition)
        .then((user_data) => {
          this.userdata = user_data[0];
        });
      var type = "";
      if (item.categoryId < "4") {
        type = "education";
      } else {
        type = "information";
      }

      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
      };
      const myModal: Modal = this.modal_controllar_object.create(
        "ModalPage",
        { data: "Add to Playlist", video_data: item, type: type },
        myModalOptions
      );

      myModal.present();
    } else {
      var confirmPopup = this.alert_controller_object.create({
        title: "",
        message:
          '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to create custom playlist.</p>',
        enableBackdropDismiss: true,
        buttons: [
          {
            text: "Upgrade",
            handler: () => {
              this.navCtrl.push("UpgradePlanPage");
            },
          },
        ],
      });
      confirmPopup.present();
    }
  }

  onPromptForQna(video_data) {
    this.video_share_provider_object.discussPromptForProffesional(
      video_data,
      "",
      "From WhatsNew Details"
    );
  }
}
