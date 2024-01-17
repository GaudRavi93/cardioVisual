import { Component, Input, ViewChild, Injector } from "@angular/core";
import {
  IonicPage,
  Content,
  NavController,
  NavParams,
  LoadingController,
  ToastController,
  Modal,
  ModalController,
  ModalOptions,
  App,
  Platform,
  AlertController,
  Tabs,
} from "ionic-angular";
import { HttpService } from "../../services/HttpService";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { pipe } from "rxjs";
import "rxjs/add/operator/map";
import { Network } from "@ionic-native/network";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { DatabaseProvider } from "../../providers/database/database";
import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser";
import { NetworkCheckProvider } from "../../providers/network_check/network_check";
import * as _ from "underscore/underscore";
import { Storage } from "@ionic/storage";
import { VideosharesocialProvider } from "../../providers/videosharesocial/videosharesocial";
import { File } from "@ionic-native/file";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";
import { CleverTap } from "@ionic-native/clevertap";
import { ToastService } from "../../services/toast-service";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

@IonicPage()
@Component({
  selector: "page-playlist",
  templateUrl: "playlist.html",
})
export class PlaylistPage {
  params: any = {};
  data: any = {};
  events: any = {};
  @ViewChild(Content)
  content: Content;
  loader: any = {};
  network_status: any;
  @ViewChild("myTab") tabRef: Tabs;
  request_from: string;
  data_from_tab: any = {};
  search: string = "";
  pageHistory: string = "";
  test: any = [];
  path: string;
  dtStr: any;
  clevertapDate: any;
  segment_name: string;
  listlength: any;
  newTopicId: any;
  newtopic_name: string;
  download_status: string = "complete";
  userdata: any;
  isDownloading: any;
  perc1: any;
  channelUrlpath: string;
  localapi: any;
  //playListShown:any;
  imgSHownOnline: any;
  nav_params_object: NavParams;
  http_service_object: HttpService;
  http_object: Http;
  loading_controller_object: LoadingController;
  network_object: Network;
  toast_controller_object: ToastController;
  database_provider_object: DatabaseProvider;
  in_app_browser_object: InAppBrowser;
  platform_object: Platform;
  network_check_object: NetworkCheckProvider;
  storage_object: Storage;
  video_share_provider_object: VideosharesocialProvider;
  alert_controller_object: AlertController;
  file_transfer_object: FileTransfer;
  file_object: File;
  clevertap_object: any;
  toast_service_object: ToastService;
  screen_orientation_object: ScreenOrientation;

  constructor(public navCtrl: NavController, public injector: Injector) {
    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.http_object = injector.get<Http>(Http);
    this.loading_controller_object =
      injector.get<LoadingController>(LoadingController);
    this.network_object = injector.get<Network>(Network);
    this.toast_controller_object =
      injector.get<ToastController>(ToastController);
    this.database_provider_object =
      injector.get<DatabaseProvider>(DatabaseProvider);
    this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
    this.platform_object = injector.get<Platform>(Platform);
    this.network_check_object =
      injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.storage_object = injector.get<Storage>(Storage);
    this.video_share_provider_object = injector.get<VideosharesocialProvider>(
      VideosharesocialProvider
    );
    this.alert_controller_object =
      injector.get<AlertController>(AlertController);
    this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
    this.file_object = injector.get<File>(File);
    this.clevertap_object = new CleverTap();
    this.toast_service_object = injector.get<ToastService>(ToastService);
    this.screen_orientation_object =
      injector.get<ScreenOrientation>(ScreenOrientation);

    this.localapi = this.http_service_object.getApi();
    this.path = this.file_object.dataDirectory;
    this.dtStr = this.http_service_object.dtStr();
    this.clevertapDate = this.http_service_object.clevertapDate();
    this.network_status = "connected";
    this.network_object.onDisconnect().subscribe(() => {
      this.network_status = "not_connected";
    });

    this.data_from_tab = this.nav_params_object.data;
    this.request_from = this.nav_params_object.get("request_from");

    this.network_object.onConnect().subscribe(() => {
      this.network_status = "connected";
    });

    this.loader = this.loading_controller_object.create({
      spinner: "crescent",
    });
    this.loader.present();

    var user_type = localStorage.getItem("cv5usrType");
    this.imgSHownOnline = this.network_check_object.getNetworkType();
    if (this.imgSHownOnline != "none") {
      setTimeout(() => {
        this.network_check_object.getPageAction(
          "PlaylistPage",
          "start",
          "",
          localStorage.getItem("cv5usrType")
        );
      }, 1000);
    }

    var that = this;
    this.events = {
      onPlaylistFavorite: function (item: any) {
        that.markPlaylistasFavorite(item);
      },
      onShare: function (item: any) {
        that.video_share_provider_object.sharePlaylistVideo(item);
      },
      onPlay: function (item: any) {
        var canShare = localStorage.getItem("canDownloadAccess");

        that.platform_object.ready().then(() => {
          var network_type = that.network_check_object.getNetworkType();
          var playlistParams = {
            record_time: that.dtStr,
            record_date: that.clevertapDate,
            os: localStorage.getItem("getDevicePlatform"),
            modelNo: localStorage.getItem("modelNo"),
            deviceversion: localStorage.getItem("getDeviceversion"),
            userRoleId: localStorage.getItem("cv5userRoleId"),
            userType: localStorage.getItem("cv5usrType"),
            userEmail: localStorage.getItem("cv5userEmail"),
            playlistName: item.name,
            userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
            location: localStorage.getItem("location"),
            specialities: localStorage.getItem("usrSpecialities"),
            subSpecialities: localStorage.getItem("cv5usrRolesubType"),
          };

          switch (true) {
            case canShare == "false" && item.is_paid == 1:
              var confirmPopup = that.alert_controller_object.create({
                title: "",
                message:
                  '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                enableBackdropDismiss: true,
                buttons: [
                  {
                    text: "Upgrade",
                    handler: () => {
                      if (that.request_from == "profile_page") {
                        that.navCtrl.push("UpgradePlanPage");
                      } else {
                        that.navCtrl.parent.parent.push("UpgradePlanPage");
                      }
                    },
                  },
                ],
              });
              confirmPopup.present();
              break;
            case canShare == "true" &&
              item.is_paid == 1 &&
              network_type == "none":
              that.toast_controller_object
                .create({
                  message: "You are now offline.",
                  position: "bottom",
                  duration: 5000,
                })
                .present();
              break;
            case canShare == "true" &&
              item.is_paid == 1 &&
              network_type != "none" &&
              that.request_from == "profile_page":
              that.clevertap_object.recordEventWithNameAndProps(
                "clickedOnPlaylist",
                playlistParams
              );
              navCtrl.push("VideoDetailsPage", {
                data: item,
                type: "playlist",
                index: 0,
                header: "hide",
                sendTo: "Playlist",
              });
              break;
            case canShare == "true" &&
              item.is_paid == 1 &&
              network_type != "none" &&
              that.request_from != "profile_page":
              that.clevertap_object.recordEventWithNameAndProps(
                "clickedOnPlaylist",
                playlistParams
              );
              navCtrl.parent.parent.push("VideoDetailsPage", {
                data: item,
                type: "playlist",
                index: 0,
                header: "hide",
                sendTo: "Playlist",
              });
              break;
            case item.is_paid == 0 && network_type == "none":
              that.toast_controller_object
                .create({
                  message: "You are now offline.",
                  position: "bottom",
                  duration: 5000,
                })
                .present();
              break;
            case item.is_paid == 0 &&
              network_type != "none" &&
              that.request_from == "profile_page":
              that.clevertap_object.recordEventWithNameAndProps(
                "clickedOnPlaylist",
                playlistParams
              );
              navCtrl.push("VideoDetailsPage", {
                data: item,
                type: "playlist",
                index: 0,
                header: "hide",
                sendTo: "Playlist",
              });
              break;
            case item.is_paid == 0 &&
              network_type != "none" &&
              that.request_from != "profile_page":
              that.clevertap_object.recordEventWithNameAndProps(
                "clickedOnPlaylist",
                playlistParams
              );
              navCtrl.parent.parent.push("VideoDetailsPage", {
                data: item,
                type: "playlist",
                index: 0,
                header: "hide",
                sendTo: "Playlist",
              });
              break;
          }
        });
      },
      onItemClick: function (item: any) {
        var canShare = localStorage.getItem("userProAccess");
        var network_type = that.network_check_object.getNetworkType();
        var params = {
          record_time: that.dtStr,
          record_date: that.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          modelNo: localStorage.getItem("modelNo"),
          deviceversion: localStorage.getItem("getDeviceversion"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          topic_name: that.newtopic_name,
          category_name: "condition",
          userEmail: localStorage.getItem("cv5userEmail"),
          location: localStorage.getItem("location"),
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
        };
        that.clevertap_object.recordEventWithNameAndProps(
          "clickedOnCategory",
          params
        );

        var querystring: string[] = new Array(
          "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" +
            item.id
        );
        that.database_provider_object
          .fetchAllData("new_sub_topics", querystring)
          .then((data) => {
            switch (true) {
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl != "" &&
                that.request_from == "profile_page":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "condition",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
                navCtrl.push("VideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "ProfilePage",
                });
                break;
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl != "" &&
                that.request_from != "profile_page":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "condition",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
                navCtrl.parent.parent.push("VideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "TabListing",
                });
                break;
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl == "" &&
                network_type == "none":
                that.toast_controller_object
                  .create({
                    message: "This video requires internet connection.",
                    position: "bottom",
                    duration: 5000,
                  })
                  .present();
                break;
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl == "" &&
                network_type != "none" &&
                that.request_from == "profile_page":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "condition",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
                navCtrl.push("VideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "ProfilePage",
                });
                break;
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl == "" &&
                network_type != "none" &&
                that.request_from != "profile_page":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "condition",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
                navCtrl.parent.parent.push("VideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "TabListing",
                });
                break;
              case item.subTopicType == "video" && canShare != "true":
                var confirmPopup = that.alert_controller_object.create({
                  title: "",
                  message:
                    '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                  enableBackdropDismiss: true,
                  buttons: [
                    {
                      text: "Upgrade",
                      handler: () => {
                        that.navCtrl.parent.parent.push("UpgradePlanPage");
                      },
                    },
                  ],
                });
                confirmPopup.present();
                break;
              case item.subTopicType == "image" && item.localUrl != "":
                var imageparams = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "condition",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  imageName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnDrawOn",
                  imageparams
                );
                that.navCtrl.parent.parent.push("DrawonPage", {
                  drawnurl: item.localUrl,
                  drawOnImgTitle: item.title,
                  drawnCopyright: item.copyrightInfo,
                  drawnSubtopicType: item.subTopicType,
                  video_Name: item.videoName,
                  local_Url: "localUrl",
                });
                break;
              case item.subTopicType == "image" &&
                item.localUrl == "" &&
                network_type != "none":
                var imageparams = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "condition",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  imageName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnDrawOn",
                  imageparams
                );
                that.navCtrl.parent.parent.push("DrawonPage", {
                  drawnurl: item.url,
                  drawOnImgTitle: item.title,
                  drawnCopyright: item.copyrightInfo,
                  drawnSubtopicType: item.subTopicType,
                });
                break;
              case item.subTopicType == "image" &&
                item.localUrl == "" &&
                network_type == "none":
                that.toast_controller_object
                  .create({
                    message: "This image requires internet connection.",
                    position: "bottom",
                    duration: 5000,
                  })
                  .present();
                break;
            }
          });
      },
      onFavorite: function (item: any) {
        event.stopPropagation();

        that.markasFavorite(item, "education");
      },
      onMultipleDownload: function (item: any) {
        event.stopPropagation();
        var canShare = localStorage.getItem("canDownloadAccess");
        var network_type = that.network_check_object.getNetworkType();
        var downloadque = localStorage.getItem("Downloadque");

        switch (true) {
          case canShare == "true" && network_type == "none":
            that.toast_controller_object
              .create({
                message: "You are now offline.",
                position: "bottom",
                duration: 5000,
              })
              .present();
            break;
          case canShare == "true" &&
            network_type != "none" &&
            (downloadque == null || downloadque == ""):
            downloadque = item.id;
            localStorage.setItem("Downloadque", downloadque);
            that.isDownloadVideoMultiple("education");
            break;
          case canShare == "true" &&
            network_type != "none" &&
            downloadque != "":
            downloadque = downloadque + "," + item.id;
            localStorage.setItem("Downloadque", downloadque);
            that.isDownloadVideoMultiple("education");
            break;
          case canShare != "true":
            var confirmPopup = that.alert_controller_object.create({
              title: "",
              message:
                '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
              enableBackdropDismiss: true,
              buttons: [
                {
                  text: "Upgrade",
                  handler: () => {
                    that.navCtrl.parent.parent.push("UpgradePlanPage");
                  },
                },
              ],
            });
            confirmPopup.present();
            break;
        }
      },
      onImageCantDownload: function (item: any) {
        that.toast_service_object.mypresentToast(
          "Only videos can be downloaded.",
          2000
        );
      },
      onInfoItemClick: function (item: any) {
        var canShare = localStorage.getItem("userProAccess");
        var network_type = that.network_check_object.getNetworkType();

        var params = {
          record_time: this.dtStr,
          record_date: this.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          modelNo: localStorage.getItem("modelNo"),
          deviceversion: localStorage.getItem("getDeviceversion"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          topic_name: this.newtopic_name,
          category_name: "expert",
          userEmail: localStorage.getItem("cv5userEmail"),
          location: localStorage.getItem("location"),
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
        };
        // Set clevertap Custom AppLaunch event.
        that.clevertap_object.recordEventWithNameAndProps(
          "clickedOnCategory",
          params
        );

        var querystring: string[] = new Array(
          "join information_data on information.id = information_data.id where information.id=" +
            item.id
        );
        that.database_provider_object
          .fetchAllData("information", querystring)
          .then((data) => {
            switch (true) {
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl != "" &&
                that.request_from == "profile_page":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "expert",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
                navCtrl.push("InformationVideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "ProfilePage",
                });

                break;
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl != "" &&
                that.request_from != "profile_page":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "expert",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
                navCtrl.parent.parent.push("InformationVideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "TabListing",
                });
                break;
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl == "" &&
                network_type == "none":
                that.toast_controller_object
                  .create({
                    message: "This video requires internet connection.",
                    position: "bottom",
                    duration: 5000,
                  })
                  .present();
                break;
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl == "" &&
                network_type != "none" &&
                that.request_from == "profile_page":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "expert",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
                navCtrl.push("InformationVideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "ProfilePage",
                });

                break;
              case item.subTopicType == "video" &&
                (item.isPaid == 0 || canShare == "true") &&
                data[0].localUrl == "" &&
                network_type != "none" &&
                that.request_from != "profile_page":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.newtopic_name,
                  category_name: "expert",
                  userEmail: localStorage.getItem("cv5userEmail"),
                  file: item.name,
                  videoName: item.videoName,
                  location: localStorage.getItem("location"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps(
                  "clickedOnVideo",
                  params
                );
                navCtrl.parent.parent.push("InformationVideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "TabListing",
                });
                break;
              case item.subTopicType == "video" &&
                item.isPaid == 1 &&
                canShare != "true":
                var confirmPopup = that.alert_controller_object.create({
                  title: "",
                  message:
                    '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                  enableBackdropDismiss: true,
                  buttons: [
                    {
                      text: "Upgrade",
                      handler: () => {
                        that.navCtrl.parent.parent.push("UpgradePlanPage");
                      },
                    },
                  ],
                });
                confirmPopup.present();
                break;
            }
          });
      },
      onInfoFavorite: function (item: any) {
        event.stopPropagation();

        that.markasFavorite(item, "information");
      },
      onInfoMultipleDownload: function (item: any) {
        event.stopPropagation();

        var canShare = localStorage.getItem("canDownloadAccess");
        var network_type = that.network_check_object.getNetworkType();
        var downloadque = localStorage.getItem("InfoDownloadque");


        switch (true) {
          case canShare == "true" && network_type == "none":
            that.toast_controller_object
              .create({
                message: "You are now offline.",
                position: "bottom",
                duration: 5000,
              })
              .present();
            break;
          case canShare == "true" &&
            network_type != "none" &&
            (downloadque == null || downloadque == ""):
            downloadque = item.id;
            localStorage.setItem("InfoDownloadque", downloadque);
            that.isDownloadVideoMultiple("information");
            break;
          case canShare == "true" &&
            network_type != "none" &&
            downloadque != "":
            downloadque = downloadque + "," + item.id;
            localStorage.setItem("InfoDownloadque", downloadque);
            that.isDownloadVideoMultiple("information");
            break;
          case canShare != "true":
            var confirmPopup = that.alert_controller_object.create({
              title: "",
              message:
                '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
              enableBackdropDismiss: true,
              buttons: [
                {
                  text: "Upgrade",
                  handler: () => {
                    that.navCtrl.parent.parent.push("UpgradePlanPage");
                  },
                },
              ],
            });
            confirmPopup.present();
            break;
        }
      },
      onChannelItemClick: function (item: any) {
        var network_type = that.network_check_object.getNetworkType();
        var querystring: string[] = new Array(
          "join information_data on information.id = information_data.id where information.id=" +
            item.id
        );
        that.database_provider_object
          .fetchAllData("information", querystring)
          .then((data) => {
            switch (true) {
              case item.subTopicType == "video" && data[0].localUrl != "":
                navCtrl.parent.parent.push("InformationVideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "Channel",
                });
                break;
              case item.subTopicType == "video" &&
                data[0].localUrl == "" &&
                network_type == "none":
                that.toast_controller_object
                  .create({
                    message: "This video requires internet connection.",
                    position: "bottom",
                    duration: 5000,
                  })
                  .present();
                break;
              case item.subTopicType == "video" &&
                data[0].localUrl == "" &&
                network_type != "none":
                navCtrl.parent.parent.push("InformationVideoDetailsPage", {
                  pageItem: data[0].name,
                  coloR: data[0].hexcodeBase,
                  icondash: data[0].iconName,
                  data: data[0],
                  header: "show",
                  request_from: "video_list",
                  sendTo: "Channel",
                });
                break;
              case item.subTopicType == "image" && item.localUrl != "":
                that.navCtrl.parent.parent.push("DrawonPage", {
                  drawnurl: item.localUrl,
                  drawOnImgTitle: item.name,
                  drawnCopyright: item.copyrightInfo,
                  drawnSubtopicType: item.subTopicType,
                  video_Name: item.videoName,
                  local_Url: "localUrl",
                });
                break;
              case item.subTopicType == "image" && item.localUrl == "":
                that.navCtrl.parent.parent.push("DrawonPage", {
                  drawnurl: item.url,
                  drawOnImgTitle: item.name,
                  drawnCopyright: item.copyrightInfo,
                  drawnSubtopicType: item.subTopicType,
                });
                break;
              case item.subTopicType == "document" && item.localUrl != "":
                var ref = that.in_app_browser_object.create(
                  that.file_object.dataDirectory + item.localUrl,
                  "_blank",
                  "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app"
                );

                ref.on("loadstop").subscribe((event) => {
                  that.screen_orientation_object.unlock();
                });
                ref.on("exit").subscribe((event) => {
                  that.screen_orientation_object.lock(
                    that.screen_orientation_object.ORIENTATIONS.PORTRAIT
                  );
                });
                break;
              case item.subTopicType == "document" &&
                item.localUrl == "" &&
                network_type == "none":
                that.channelUrlpath = item.url;
                that.toast_controller_object
                  .create({
                    message: "You are now offline.",
                    position: "bottom",
                    duration: 5000,
                  })
                  .present();
                break;
              case item.subTopicType == "document" &&
                item.localUrl == "" &&
                network_type != "none":
                var ref = that.in_app_browser_object.create(
                  item.url,
                  "_blank",
                  "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app"
                );

                ref.on("loadstop").subscribe((event) => {
                  that.screen_orientation_object.unlock();
                });
                ref.on("exit").subscribe((event) => {
                  that.screen_orientation_object.lock(
                    that.screen_orientation_object.ORIENTATIONS.PORTRAIT
                  );
                });
                break;
            }
          });
      },
    };
  }

  ionViewDidLoad() {
    var user_type = localStorage.getItem("cv5usrType");
    this.newTopicId = localStorage.getItem("dashboard_category_id");
    this.segment_name = localStorage.getItem("segment_name");
    switch (this.newTopicId) {
      case "1":
        this.newtopic_name = "Cardiac";
        break;
      case "2":
        this.newtopic_name = "EP";
        break;
      case "3":
        this.newtopic_name = "Structural";
        break;
      case "4":
        this.newtopic_name = "Vascular";
        break;
      case "5":
        this.newtopic_name = "Heart Health";
        break;
      case "6":
        this.newtopic_name = "Diabetes";
        break;
    }

    var channel_id = localStorage.getItem("channel_id");
    var channel_name = localStorage.getItem("channel_name");
    var shown_Content = "video";
    var json_variable = "";
    var custom_data = [];
    var that = this;
    var live_id = localStorage.getItem("userliveId");

    switch (true) {
      case this.request_from == "search_page":
        this.data.items = this.nav_params_object.get("search_data");
        this.loader.dismiss();
        break;
      case this.segment_name == "information" &&
        this.data_from_tab.id == undefined &&
        this.request_from == "profile_page":
        var query: string[] = new Array(
          "WHERE (is_for ='" +
            user_type +
            "' OR is_for = 'all') AND isFavourite=1 ORDER BY position DESC"
        );
        this.database_provider_object
          .fetchAllData("playlists", query)
          .then((data) => {
            this.data.items = data;
          });
        this.loader.dismiss();
        var playlist_query = new Array(" WHERE user_id=" + live_id);
        this.database_provider_object
          .fetchAllData("custom_playlist", playlist_query)
          .then((result) => {
            _.each(result, function (value, key) {
              var list_values = JSON.parse(value.list_values);
              if (list_values.education.length > 0) {
                var json_query: string[] = new Array(
                  "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                    list_values.education[0] +
                    " AND isActive = 1"
                );
                that.database_provider_object
                  .fetchAllData("new_sub_topics", json_query)
                  .then((topic_data) => {
                    if (topic_data.length > 0) {
                      that.file_object.readAsArrayBuffer(that.file_object.dataDirectory+ "icons/",topic_data[0].imageName).then(buffer => {
                        const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                        result[key].image_url = dataURL;
                      }).catch(e => {
                        result[key].image_url = topic_data[0].iconUrl;
                      });
                    }
                  });
              } else if (
                list_values.education.length == 0 &&
                list_values.information.length > 0
              ) {
                var json_query: string[] = new Array(
                  " join information_data on information.id = information_data.id where information.id = " +
                    list_values.information[0] +
                    " AND isActive = 1"
                );
                that.database_provider_object
                  .fetchAllData("information", json_query)
                  .then((info_data) => {
                    if (info_data.length > 0) {
                      that.file_object.readAsArrayBuffer(that.file_object.dataDirectory+ "icons/",info_data[0].imageName).then(buffer => {
                        const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                        result[key].image_url = dataURL;
                      }).catch(e => {
                        result[key].image_url = info_data[0].iconUrl;
                      });
                    }
                  });
              }
            });
            this.data.playlist_items = result;
          });
        break;
      case this.segment_name == "information" &&
        this.data_from_tab.id == undefined &&
        this.request_from != "profile_page":
        var querystring: string[] = new Array(
          " WHERE name='" + this.newtopic_name + "' AND type='info_listing'"
        );
        this.database_provider_object
          .fetchAllData("custom_listing", querystring)
          .then((info_custom_listing_data) => {
            var list_json_value = JSON.parse(
              info_custom_listing_data[0].list_values
            );
            var json_variable = list_json_value.Expert;
            this.listlength = list_json_value.Expert;
            var that = this;
            var info_custom_data = [];
            _.each(json_variable, function (value, index) {
              var json_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                  value +
                  " AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')"
              );
              that.database_provider_object
                .fetchAllData("information", json_query)
                .then((info_topic_data) => {
                  info_custom_data.push(info_topic_data[0]);
                });
            });
            setTimeout(() => {
              this.data.items = info_custom_data;
              this.loader.dismiss();
            }, 2000);
          });
        break;
      case this.segment_name == "education" &&
        this.data_from_tab.id == undefined &&
        this.request_from == "profile_page":
        var query: string[] = new Array(
          "WHERE (is_for ='" +
            user_type +
            "' OR is_for = 'all') AND isFavourite=1 ORDER BY position DESC"
        );
        this.database_provider_object
          .fetchAllData("playlists", query)
          .then((data) => {
            this.data.items = data;
          });
        this.loader.dismiss();
        var playlist_query = new Array(" WHERE user_id=" + live_id);
        this.database_provider_object
          .fetchAllData("custom_playlist", playlist_query)
          .then((result) => {
            _.each(result, function (value, key) {
              var list_values = JSON.parse(value.list_values);
              if (list_values.education.length > 0) {
                var json_query: string[] = new Array(
                  "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                    list_values.education[0] +
                    " AND isActive = 1"
                );
                that.database_provider_object
                  .fetchAllData("new_sub_topics", json_query)
                  .then((topic_data) => {
                    if (topic_data.length > 0) {
                      that.file_object.readAsArrayBuffer(that.file_object.dataDirectory+ "icons/",topic_data[0].imageName).then(buffer => {
                        const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                        result[key].image_url = dataURL;
                      }).catch(e => {
                        result[key].image_url = topic_data[0].iconUrl;
                      });
                    }
                  });
              } else if (
                list_values.education.length == 0 &&
                list_values.information.length > 0
              ) {
                var json_query: string[] = new Array(
                  " join information_data on information.id = information_data.id where information.id = " +
                    list_values.information[0] +
                    " AND isActive = 1"
                );
                that.database_provider_object
                  .fetchAllData("information", json_query)
                  .then((info_data) => {
                    if (info_data.length > 0) {
                      that.file_object.readAsArrayBuffer(that.file_object.dataDirectory+ "icons/",info_data[0].imageName).then(buffer => {
                        const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                        result[key].image_url = dataURL;
                      }).catch(e => {
                        result[key].image_url = info_data[0].iconUrl;
                      });
                    }
                  });
              }
            });
            this.data.playlist_items = result;
          });
        break;
      case this.segment_name == "education" &&
        this.data_from_tab.id == undefined &&
        this.request_from != "profile_page":
        var querystring: string[] = new Array(
          " WHERE name='" + this.newtopic_name + "' AND type='listing'"
        );
        this.database_provider_object
          .fetchAllData("custom_listing", querystring)
          .then((custom_listing_data) => {
            var list_json_value = JSON.parse(
              custom_listing_data[0].list_values
            );
            this.listlength = list_json_value.Condition;
            var that = this;
            var custom_data = [];
            _.each(list_json_value.Condition, function (value, index) {
              var json_query: string[] = new Array(
                "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                  value +
                  " AND isActive = 1"
              );
              that.database_provider_object
                .fetchAllData("new_sub_topics", json_query)
                .then((topic_data) => {
                  custom_data.push(topic_data[0]);
                });
            });

            setTimeout(() => {
              this.data.items = custom_data;
              this.loader.dismiss();
            }, 2000);
          });
        break;
      case this.segment_name == "education" && this.data_from_tab.id != "":
        var query: string[] = new Array(
          "WHERE topic_id=" +
            this.data_from_tab.id +
            " AND (is_for ='" +
            user_type +
            "' OR is_for = 'all')  ORDER BY position DESC"
        );
        this.database_provider_object
          .fetchAllData("playlists", query)
          .then((data) => {
            this.data.items = data;
          });
        this.loader.dismiss();
        break;
      case this.segment_name == "channel" &&
        this.data_from_tab.id == undefined &&
        this.request_from == "profile_page":
        var query: string[] = new Array(
          "WHERE (is_for ='" +
            user_type +
            "' OR is_for = 'all') AND isFavourite=1 ORDER BY position DESC"
        );
        this.database_provider_object
          .fetchAllData("playlists", query)
          .then((data) => {
            this.data.items = data;
          });
        this.loader.dismiss();
        var playlist_query = new Array(" WHERE user_id=" + live_id);
        this.database_provider_object
          .fetchAllData("custom_playlist", playlist_query)
          .then((result) => {
            _.each(result, function (value, key) {
              var list_values = JSON.parse(value.list_values);
              if (list_values.education.length > 0) {
                var json_query: string[] = new Array(
                  "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                    list_values.education[0] +
                    " AND isActive = 1"
                );
                that.database_provider_object
                  .fetchAllData("new_sub_topics", json_query)
                  .then((topic_data) => {
                    if (topic_data.length > 0) {
                      that.file_object.readAsArrayBuffer(that.file_object.dataDirectory+ "icons/",topic_data[0].imageName).then(buffer => {
                        const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                        result[key].image_url = dataURL;
                      }).catch(e => {
                        result[key].image_url = topic_data[0].iconUrl;
                      });
                    }
                  });
              } else if (
                list_values.education.length == 0 &&
                list_values.information.length > 0
              ) {
                var json_query: string[] = new Array(
                  " join information_data on information.id = information_data.id where information.id = " +
                    list_values.information[0] +
                    " AND isActive = 1"
                );
                that.database_provider_object
                  .fetchAllData("information", json_query)
                  .then((info_data) => {
                    if (info_data.length > 0) {
                      that.file_object.readAsArrayBuffer(that.file_object.dataDirectory+ "icons/",info_data[0].imageName).then(buffer => {
                        const dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                        result[key].image_url = dataURL;
                      }).catch(e => {
                        result[key].image_url = info_data[0].iconUrl;
                      });
                    }
                  });
              }
            });
            this.data.playlist_items = result;
          });
        break;
      case this.segment_name == "channel" &&
        (this.data_from_tab.id != "" || this.request_from != "profile_page") &&
        shown_Content == "video":
        var querystring: string[] = new Array(
          " WHERE name='" + channel_name + "' AND type='channel'"
        );
        this.database_provider_object
          .fetchAllData("custom_listing", querystring)
          .then((custom_listing_data) => {
            var list_json_value = JSON.parse(
              custom_listing_data[0].list_values
            );
            json_variable = list_json_value.video;
            _.each(json_variable, function (value, index) {
              var json_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                  value +
                  " AND isActive = 1 AND information.subTopicType='" +
                  shown_Content +
                  "'"
              );
              that.database_provider_object
                .fetchAllData("information", json_query)
                .then((infotopic_data) => {
                  custom_data.push(infotopic_data[0]);
                });
            });
            setTimeout(() => {
              that.listlength = custom_data;
              that.data.items = custom_data;
            }, 500);
          });
        break;
      case this.segment_name == "channel" &&
        (this.data_from_tab.id != "" || this.request_from != "profile_page") &&
        shown_Content == "document":
        var querystring: string[] = new Array(
          " WHERE name='" + channel_name + "' AND type='channel'"
        );
        this.database_provider_object
          .fetchAllData("custom_listing", querystring)
          .then((custom_listing_data) => {
            var list_json_value = JSON.parse(
              custom_listing_data[0].list_values
            );
            json_variable = list_json_value.document;
            _.each(json_variable, function (value, index) {
              var json_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                  value +
                  " AND isActive = 1 AND information.subTopicType='" +
                  shown_Content +
                  "'"
              );
              that.database_provider_object
                .fetchAllData("information", json_query)
                .then((infotopic_data) => {
                  custom_data.push(infotopic_data[0]);
                });
            });
            setTimeout(() => {
              that.listlength = custom_data;
              that.data.items = custom_data;
            }, 500);
          });
        break;
      case this.segment_name == "channel" &&
        (this.data_from_tab.id != "" || this.request_from != "profile_page") &&
        shown_Content == "image":
        var querystring: string[] = new Array(
          " WHERE name='" + channel_name + "' AND type='channel'"
        );
        this.database_provider_object
          .fetchAllData("custom_listing", querystring)
          .then((custom_listing_data) => {
            var list_json_value = JSON.parse(
              custom_listing_data[0].list_values
            );
            json_variable = list_json_value.image;
            _.each(json_variable, function (value, index) {
              var json_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                  value +
                  " AND isActive = 1 AND information.subTopicType='" +
                  shown_Content +
                  "'"
              );
              that.database_provider_object
                .fetchAllData("information", json_query)
                .then((infotopic_data) => {
                  custom_data.push(infotopic_data[0]);
                });
            });
            setTimeout(() => {
              that.listlength = custom_data;
              that.data.items = custom_data;
            }, 500);
          });
        break;
      case this.segment_name == "channel" &&
        (this.data_from_tab.id != "" || this.request_from != "profile_page") &&
        shown_Content == "other":
        var querystring: string[] = new Array(
          " WHERE name='" + channel_name + "' AND type='channel'"
        );
        this.database_provider_object
          .fetchAllData("custom_listing", querystring)
          .then((custom_listing_data) => {
            var list_json_value = JSON.parse(
              custom_listing_data[0].list_values
            );
            json_variable = list_json_value.other;
            _.each(json_variable, function (value, index) {
              var json_query: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                  value +
                  " AND isActive = 1 AND information.subTopicType='" +
                  shown_Content +
                  "'"
              );
              that.database_provider_object
                .fetchAllData("information", json_query)
                .then((infotopic_data) => {
                  custom_data.push(infotopic_data[0]);
                });
            });
            setTimeout(() => {
              that.listlength = custom_data;
              that.data.items = custom_data;
            }, 500);
          });
        break;

    }
  }

  ionViewWillLeave() {
    this.network_check_object.getPageAction(
      "PlaylistPage",
      "end",
      "",
      localStorage.getItem("cv5usrType")
    );
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }
  toggleGroup(group: any) {
    group.show = !group.show;

    if (group.show === true) {
      this.loader = this.loading_controller_object.create({
        spinner: "crescent",
      });
      this.loader.present();

      var subtopics_id = group.sub_topic_ids;

      subtopics_id = subtopics_id.split(", ");
      console.log("subtopics_id-->" + subtopics_id);
      var that = this;
      var data1 = [];
      that.test = [];
      _.each(subtopics_id, function (value, index) {
        var query: string[] = new Array(
          "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
            value +
            " AND isActive = 1"
        );
        that.database_provider_object
          .fetchAllData("new_sub_topics", query)
          .then((data) => {
            if (data.length > 0) {
              that.test.push(data[0]);
            }
          });
      });
      //console.log(' this.data1-->'+JSON.stringify(that.test));
      group.items = that.test;
      this.loader.dismiss();
    }
  }

  isGroupShown(group: any) {
    return group.show;
  }

  markPlaylistasFavorite(group) {
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
        if (group.isFavourite == 0) {
          this.storage_object.get("user_logged_in").then((val) => {
            this.database_provider_object.setPlaylistFavorites(val, group.id);
            //this.toast_service_object.presentToast("Added To My Playlists.");
            this.toast_service_object.presentToast(
              "Added To Favorite Playlists."
            );
          });
        } else {
          this.storage_object.get("user_logged_in").then((val) => {
            this.database_provider_object.setPlaylistFavorites(val, group.id);
            //this.toast_service_object.presentToast("Removed From My Playlists.");
            this.toast_service_object.presentToast(
              "Removed From Favorite Playlists."
            );
          });
        }

        group.isFavourite = !group.isFavourite;
      }
    });
  }

  markasFavorite(group, from_table) {
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
        var que_ids =
          from_table == "education"
            ? localStorage.getItem("Downloadque")
            : localStorage.getItem("InfoDownloadque");

        var progress_ids_arr = que_ids.split(",").map(Number);
        progress_ids_arr = _.uniq(progress_ids_arr);
        que_ids = progress_ids_arr.toString();
        if (from_table == "education") {
          localStorage.setItem("Downloadque", que_ids);
        } else if (from_table == "information") {
          localStorage.setItem("InfoDownloadque", que_ids);
        }

        var progress_id = progress_ids_arr[0];
        if (progress_id == 0) {
          progress_id = progress_ids_arr[1];
        }

        this.download_status = "inprogress";

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
                if (from_table == "education") {
                  localStorage.setItem("Downloadque", que_ids);
                } else if (from_table == "information") {
                  localStorage.setItem("InfoDownloadque", que_ids);
                }

                this.toast_service_object.presentToast(
                  '"' + item.name + '" already downloaded.'
                );

                if (que_ids == "") {
                  if (from_table == "education") {
                    localStorage.setItem("Downloadque", "");
                  } else if (from_table == "information") {
                    localStorage.setItem("InfoDownloadque", "");
                  }
                }
                this.download_status = "complete";
              } else {
                this.toast_service_object.mypresentToast(
                  'Downloading: "' + item.name + '"',
                  2000
                );
                this.video_share_provider_object.downloadVideo(
                  item,
                  "Education"
                );

                var filename = item.url.split("/").pop();

                fileTransfer.onProgress((progressEvent) => {
                  if (progressEvent.lengthComputable) {
                    this.isDownloading = true;

                    var perc =
                      (progressEvent.loaded / progressEvent.total) * 100;

                    this.perc1 = perc.toFixed(1);

                    var loader = document.getElementById(
                      "progressBar_" + item.id
                    );
                    loader.style.background = "#fff";
                    loader.innerHTML = this.perc1 + "%";

                    //var loader1 = document.getElementById("static_download_prog");
                    //loader1.innerHTML = 'Downloading is in progress...';
                    //loader1.style.padding = '10px';
                    //loader1.style.display = 'block';

                    if (this.perc1 == 100) {
                      loader.innerHTML = "";
                      loader.style.background = "";
                      //loader1.innerHTML = '';
                      //loader1.style.padding = '';
                      //loader1.style.display = '';

                      var loader3 = document.getElementById(
                        "download_" + item.id
                      );
                      loader3.classList.add("active");
                    }
                  }
                });

                fileTransfer
                  .download(
                    item.url,
                    this.file_object.dataDirectory + "V2CardioMedia/" + filename
                  )
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
                        'Finished downloading: "' + item.name + '"',
                        2000
                      );
                      this.download_status = "complete";

                      var loader3 = document.getElementById(
                        "download_" + item.id
                      );
                      loader3.classList.add("active");

                      if (item.downloaded == 0) item.downloaded = 1;
                      this.download_status = "complete";

                      //this.toast_dismiss();
                    },

                    (error) => {
                      this.toast_service_object.presentToast(
                        "Download failed! please try again."
                      );
                    }
                  );

                var new_ids_arr = que_ids.split(",").map(Number);
                var test_arr = [];
                _.each(new_ids_arr, function (value, key) {
                  if (value != item.id) {
                    test_arr.push(value);
                  }
                });

                que_ids = test_arr.toString();
                if (from_table == "education") {
                  localStorage.setItem("Downloadque", que_ids);
                } else if (from_table == "information") {
                  localStorage.setItem("InfoDownloadque", que_ids);
                }
                this.download_status = "complete";
              }

              if (que_ids != "") {
                this.isDownloadVideoMultiple(from_table);
              } else if (que_ids == "") {
                if (from_table == "education") {
                  localStorage.setItem("Downloadque", "");
                } else if (from_table == "information") {
                  localStorage.setItem("InfoDownloadque", "");
                }
              }
            },
            (e) => {
              //console.log('586 error '+JSON.stringify(e))
            }
          );
      }
    });
  }

  downloadfile(url, name, id, from_table) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer
      .download(url, this.file_object.dataDirectory + "icons/" + name)
      .then((entry) => {
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

  // goToCusomPlaylistList(item){
  // 	this.navCtrl.push('ItemDetailsPageTabs',{pageItem:item.name, data:item, request_from:'custom_playlist'});
  // }

  goToCusomPlaylistList(item, event) {
    var playlist_query = new Array(" WHERE id=" + item.id);
    this.database_provider_object
      .fetchAllData("custom_playlist", playlist_query)
      .then((result) => {
        item.list_values = result[0].list_values;
          this.navCtrl.push("ItemDetailsPageTabs", {
            pageItem: item.name,
            data: item,
            request_from: "custom_playlist",
          });
      });
    event.stopPropagation();
  }

  playListDelete(item, event) {
    var network_type = this.network_check_object.getNetworkType();
    if (network_type == "none") {
      this.toast_controller_object
        .create({
          message: "please check your internet connection",
          position: "bottom",
          duration: 5000,
        })
        .present();
    } else {
      this.database_provider_object.deleteRecords(
        "DELETE FROM custom_playlist WHERE id='" +
          item.id +
          "' AND user_id=" +
          localStorage.getItem("userliveId")
      );

      this.http_object
        .delete(this.localapi + "/api/userplaylists/" + item.id)
        .subscribe(
          (resp) => {
            this.toast_service_object.mycustomToast(
              'Your playlist  "' + item.name + '" removed from list.',
              2500
            );
            item.playListShown = 0;
          },
          (error) => {
            //alert('error occur, delete fail '+JSON.stringify(error));
          }
        );
    }

    event.stopPropagation();
  }
}
