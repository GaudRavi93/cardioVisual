import { Component, Input, ViewChild, Pipe, Injector } from "@angular/core";

import {
  IonicPage,
  Content,
  FabButton,
  NavController,
  NavParams,
  ToastController,
  Tabs,
  Platform,
  Modal,
  ModalController,
  ModalOptions,
  App,
  AlertController,
} from "ionic-angular";
//import { TabsService } from '../../services/tabs-service';
import { ToastService } from "../../services/toast-service";
import { HttpService } from "../../services/HttpService";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { pipe } from "rxjs";
import "rxjs/add/operator/map";
import { Network } from "@ionic-native/network";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { Storage } from "@ionic/storage";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { DatabaseProvider } from "../../providers/database/database";
import * as _ from "underscore/underscore";
import { SocialSharing } from "@ionic-native/social-sharing";
import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser";
import { NetworkCheckProvider } from "../../providers/network_check/network_check";
import { CleverTap } from "@ionic-native/clevertap";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { InappProvider } from "../../providers/inapp/inapp";
import { VideosharesocialProvider } from "../../providers/videosharesocial/videosharesocial";

declare var cordova;
@IonicPage()
@Component({
  selector: "information-tab",
  templateUrl: "information-tab.html",
  //providers: [TabsService]
})
export class InformationTab {
  params: any = {};
  data: any = {};
  events: any = {};
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;

  @ViewChild("info_tabs") tabRef: Tabs;

  network_status: any;
  newTopicId: any;
  category_id: any;
  buttonColor: string = "#000000";
  userid: any;
  currentTimeInMilliSeconds: any;
  percentage: any;
  isDownloading: any;
  perc1: any;
  download_count: any;
  userdata: any;
  listlength: any;
  video_que_array: any = [];
  request_from: string;
  search: string = "";
  pageHistory: string = "";
  dtStr: any;
  clevertapDate: any;
  orientation: string;
  download_status: string = "complete";
  path: string;
  topic_Name: string;
  cat_name: string;
  private fileTransfer: FileTransferObject;
  segment_name: string;
  newtopic_name: string = "";
  imgSHownOnline: any;
  toast_service_object: ToastService;
  http_service_object: HttpService;
  http_object: Http;
  nav_params_object: NavParams;
  network_object: Network;
  toast_controller_object: ToastController;
  storage_object: Storage;
  file_transfer_object: FileTransfer;
  file_object: File;
  platform_object: Platform;
  database_provider_object: DatabaseProvider;
  social_sharing_object: SocialSharing;
  in_app_browser_object: InAppBrowser;
  modal_controller_object: ModalController;
  network_check_object: NetworkCheckProvider;
  clevertap_object: any;
  screen_orientation_object: ScreenOrientation;
  in_app_provider_object: InappProvider;
  alert_controller_object: AlertController;
  video_share_provider_object: VideosharesocialProvider;

  constructor(public navCtrl: NavController, public injector: Injector) {
    this.toast_service_object = injector.get<ToastService>(ToastService);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.http_object = injector.get<Http>(Http);
    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.network_object = injector.get<Network>(Network);
    this.toast_controller_object =
      injector.get<ToastController>(ToastController);
    this.storage_object = injector.get<Storage>(Storage);
    this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
    this.file_object = injector.get<File>(File);
    this.platform_object = injector.get<Platform>(Platform);
    this.database_provider_object =
      injector.get<DatabaseProvider>(DatabaseProvider);
    this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
    this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
    this.modal_controller_object =
      injector.get<ModalController>(ModalController);
    this.network_check_object =
      injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.clevertap_object = new CleverTap();
    this.screen_orientation_object =
      injector.get<ScreenOrientation>(ScreenOrientation);
    this.in_app_provider_object = injector.get<InappProvider>(InappProvider);
    this.alert_controller_object =
      injector.get<AlertController>(AlertController);
    this.video_share_provider_object = injector.get<VideosharesocialProvider>(
      VideosharesocialProvider
    );

    this.imgSHownOnline = this.network_check_object.getNetworkType();
    /*segment section start */
    this.segment_name = localStorage.getItem("segment_name");

    if (this.segment_name == null) {
      localStorage.setItem("segment_name", "information");
    }
    this.segment_name = localStorage.getItem("segment_name");
    /*segment section end */

    var user_type = localStorage.getItem("cv5usrType");
    this.in_app_provider_object.canShareAccess(user_type);

    this.path = this.file_object.dataDirectory;

    this.currentTimeInMilliSeconds =
      this.http_service_object.getTimeInMilliSeconds();
    this.dtStr = this.http_service_object.dtStr();
    this.clevertapDate = this.http_service_object.clevertapDate();

    //this.newTopicId = this.nav_params_object.get('category_id');
    this.newTopicId = this.nav_params_object.get("newtopics_id");
    //this.category_id = this.nav_params_object.get('topic');
    this.category_id = this.nav_params_object.get("category_id");

    switch (this.category_id) {
      case "4":
        // code...
        this.cat_name = "expert";
        break;
      case "5":
        // code...
        this.cat_name = "learn";
        break;
      case "6":
        // code...
        this.cat_name = "featured";
        break;
      case "7":
        // code...
        this.cat_name = "product";
        break;
    }

    this.topic_Name = this.nav_params_object.get("topicName");

    this.newTopicId = localStorage.getItem("dashboard_category_id");
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

    if (this.category_id == undefined) {
      this.category_id = "4";
    }

    this.network_status = "connected";
    this.network_object.onDisconnect().subscribe(() => {
      this.network_status = "not_connected";
    });

    this.network_object.onConnect().subscribe(() => {
      this.network_status = "connected";
    });

    //for profile page
    this.request_from = this.nav_params_object.get("request_from");
    var all_data = this.nav_params_object.data;
    this.data.currentTimeInMilliSeconds = new Date().getTime();

    if (this.segment_name == "information") {
      var querystring: string[] = new Array(
        " join information_data on information.id = information_data.id where topicId=" +
          this.newTopicId +
          " AND categoryId=" +
          this.category_id +
          " AND isActive=1 ORDER By position DESC"
      );
      this.database_provider_object
        .fetchAllData("information", querystring)
        .then((data) => {
          this.listlength = data;
        });
    } else if (this.segment_name == "education") {
      var querystring: string[] = new Array(
        " join subtopic_data on new_sub_topics.id = subtopic_data.id where topicId=" +
          this.newTopicId +
          " AND categoryId=1 AND isActive=1 "
      );
      this.database_provider_object
        .fetchAllData("new_sub_topics", querystring)
        .then((data) => {
          this.listlength = data;
        });
    }

    var that = this;

    this.events = {
      onInfoItemClick: function (item: any) {
        console.log("item------->" + JSON.stringify(item));
        var canShare = localStorage.getItem("userProAccess");

        var params = {
          record_time: this.dtStr,
          record_date: this.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          modelNo: localStorage.getItem("modelNo"),
          deviceversion: localStorage.getItem("getDeviceversion"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          topic_name: this.topic_Name,
          category_name: this.cat_name,
          userEmail: localStorage.getItem("cv5userEmail"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          categoryContentFor: "Information",
          location: localStorage.getItem("location"),
        };

        // Set clevertap Custom AppLaunch event.
        that.clevertap_object.recordEventWithNameAndProps(
          "clickedOnCategory",
          params
        );
        var network_type = that.network_check_object.getNetworkType();
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
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  clickedVideoContentFor: "Information",
                  location: localStorage.getItem("location"),
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
                data[0].localUrl != "":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  clickedVideoContentFor: "Information",
                  location: localStorage.getItem("location"),
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
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  clickedVideoContentFor: "Information",
                  location: localStorage.getItem("location"),
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
                network_type != "none":
                var params = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  clickedVideoContentFor: "Information",
                  location: localStorage.getItem("location"),
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
              case item.subTopicType == "image" && item.localUrl != "":
                var imageparams = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  imageName: item.videoName,
                  drawonContentFor: "Information",
                  location: localStorage.getItem("location"),
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
              case item.subTopicType == "image" && item.localUrl == "":
                var imageparams = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  imageName: item.videoName,
                  drawonContentFor: "Information",
                  location: localStorage.getItem("location"),
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
              case item.subTopicType == "document" && network_type == "none":
                that.toast_controller_object
                  .create({
                    message: "You are now offline.",
                    position: "bottom",
                    duration: 5000,
                  })
                  .present();
                break;
              case item.subTopicType == "document" && network_type != "none":
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
              case item.subTopicType == "other" && item.otherType == "link":
                var ref = that.in_app_browser_object.create(
                  item.url,
                  "_blank",
                  "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app"
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
              case item.subTopicType == "other" && item.otherType == "qr_code":
                that.navCtrl.parent.parent.push("QrcodePage", {
                  previousPage: "channellist",
                  qrUrl: item.url,
                });
                break;
            }
          });
      },
      onShare: function (item: any) {
        event.stopPropagation();
        that.video_share_provider_object.shareSingleVideo(item);
      },
      onInfoFavorite: function (item: any) {
        event.stopPropagation();
        that.markasInfoFavorite(item);
      },
      onInfoMultipleDownload: function (item: any) {
        event.stopPropagation();
        var canShare = localStorage.getItem("canDownloadAccess");
        var network_type = that.network_check_object.getNetworkType();
        var downloadque = localStorage.getItem("InfoDownloadque");

        switch (true) {
          case item.isDownloadable == 1 &&
            canShare == "true" &&
            network_type == "none":
            that.toast_controller_object
              .create({
                message: "You are now offline.",
                position: "bottom",
                duration: 5000,
              })
              .present();
            break;
          case item.isDownloadable == 1 &&
            canShare == "true" &&
            network_type != "none" &&
            (downloadque == null || downloadque == ""):
            downloadque = item.id;
            localStorage.setItem("InfoDownloadque", downloadque);
            that.isInfoDownloadVideoMultiple();
            break;
          case item.isDownloadable == 1 &&
            canShare == "true" &&
            network_type != "none" &&
            downloadque != "":
            downloadque = downloadque + "," + item.id;
            localStorage.setItem("InfoDownloadque", downloadque);
            that.isInfoDownloadVideoMultiple();
            break;
          case item.isDownloadable == 1 &&
            canShare != "true" &&
            network_type != "none":
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
          case item.isDownloadable == 0:
            var confirmPopup = that.alert_controller_object.create({
              title: "",
              message:
                '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ["Dismiss"],
            });
            confirmPopup.present();
            break;
        }
      },
      onInfoPlaylistAdd: function (item: any) {
        event.stopPropagation();
        that.addtoplaylist(item, "information");
      },
      onImageCantDownload: function (item: any) {
        //that.toast_service_object.presentToast("Share");
        that.imageCantDownload();
      },
      onItemClick: function (item: any) {
        var canShare = localStorage.getItem("userProAccess");
        var params = {
          record_time: this.dtStr,
          record_date: this.clevertapDate,
          os: localStorage.getItem("getDevicePlatform"),
          modelNo: localStorage.getItem("modelNo"),
          deviceversion: localStorage.getItem("getDeviceversion"),
          userRoleId: localStorage.getItem("cv5userRoleId"),
          userType: localStorage.getItem("cv5usrType"),
          topic_name: this.topic_Name,
          category_name: this.cat_name,
          userEmail: localStorage.getItem("cv5userEmail"),
          specialities: localStorage.getItem("usrSpecialities"),
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
          categoryContentFor: "Education",
          location: localStorage.getItem("location"),
        };
        that.clevertap_object.recordEventWithNameAndProps(
          "clickedOnCategory",
          params
        );

        var network_type = that.network_check_object.getNetworkType();
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
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  location: localStorage.getItem("location"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  clickedVideoContentFor: "Education",
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
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  location: localStorage.getItem("location"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  clickedVideoContentFor: "Education",
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
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  location: localStorage.getItem("location"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  clickedVideoContentFor: "Education",
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
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  location: localStorage.getItem("location"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  videoName: item.videoName,
                  clickedVideoContentFor: "Education",
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
                item.isPaid != 0 &&
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
              case item.subTopicType == "image" && item.localUrl != "":
                var imageparams = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  location: localStorage.getItem("location"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  imageName: item.videoName,
                  drawonContentFor: "Education",
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
              case item.subTopicType == "image" && item.localUrl == "":
                var imageparams = {
                  record_time: that.dtStr,
                  record_date: that.clevertapDate,
                  os: localStorage.getItem("getDevicePlatform"),
                  modelNo: localStorage.getItem("modelNo"),
                  deviceversion: localStorage.getItem("getDeviceversion"),
                  userRoleId: localStorage.getItem("cv5userRoleId"),
                  userType: localStorage.getItem("cv5usrType"),
                  topic_name: that.topic_Name,
                  category_name: that.cat_name,
                  userEmail: localStorage.getItem("cv5userEmail"),
                  userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                  location: localStorage.getItem("location"),
                  specialities: localStorage.getItem("usrSpecialities"),
                  subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                  file: item.name,
                  imageName: item.videoName,
                  drawonContentFor: "Education",
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
              case item.subTopicType == "document" && network_type == "none":
                that.toast_controller_object
                  .create({
                    message: "You are now offline.",
                    position: "bottom",
                    duration: 5000,
                  })
                  .present();
                break;
              case item.subTopicType == "document" && network_type != "none":
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
                    this.screen_orientation_object.ORIENTATIONS.PORTRAIT
                  );
                });
                break;
              case item.subTopicType == "other" && item.otherType == "link":
                var ref = that.in_app_browser_object.create(
                  item.url,
                  "_blank",
                  "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app"
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
              case item.subTopicType == "other" && item.otherType == "qr_code":
                that.navCtrl.parent.parent.push("QrcodePage", {
                  previousPage: "channellist",
                  qrUrl: item.url,
                });
                break;
            }
          });
      },
      onFavorite: function (item: any) {
        event.stopPropagation();

        that.markasFavorite(item);
      },
      onMultipleDownload: function (item: any) {
        event.stopPropagation();

        var canShare = localStorage.getItem("canDownloadAccess");
        var network_type = that.network_check_object.getNetworkType();
        var downloadque = localStorage.getItem("Downloadque");
        switch (true) {
          case item.isDownloadable == 1 &&
            canShare == "true" &&
            network_type == "none":
            that.toast_controller_object
              .create({
                message: "You are now offline.",
                position: "bottom",
                duration: 5000,
              })
              .present();
            break;
          case item.isDownloadable == 1 &&
            canShare == "true" &&
            network_type != "none" &&
            (downloadque == null || downloadque == ""):
            downloadque = item.id;
            localStorage.setItem("Downloadque", downloadque);
            that.isDownloadVideoMultiple();
            break;
          case item.isDownloadable == 1 &&
            canShare == "true" &&
            network_type != "none" &&
            downloadque != "":
            downloadque = downloadque + "," + item.id;
            localStorage.setItem("Downloadque", downloadque);
            that.isDownloadVideoMultiple();
            break;
          case item.isDownloadable == 1 && canShare != "true":
            var confirmPopup = that.alert_controller_object.create({
              title: "",
              message:
                '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ["Dismiss"],
            });
            confirmPopup.present();
            break;
          case item.isDownloadable == 0:
            var confirmPopup = that.alert_controller_object.create({
              title: "",
              message:
                '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ["Dismiss"],
            });
            confirmPopup.present();
            break;
        }
      },
      onPlaylistAdd: function (item: any) {
        event.stopPropagation();
        that.addtoplaylist(item, "education");
      },
    };
  }

  ionViewDidLoad() {
    this.segment_name = localStorage.getItem("segment_name");
    var json_variable = "";
    var info_custom_data = [];
    var custom_data = [];
    var that = this;
    switch (true) {
      case this.segment_name == "information" &&
        this.request_from == "whatsnew_page":
        var whats_new_data = this.nav_params_object.get("data");
        setTimeout(() => {
          _.each(whats_new_data, function (value, index) {
            var json_query: string[] = new Array(
              "join information_data on information.id = information_data.id where information.id = " +
                value +
                " AND (information.subTopicType = 'video' OR information.subTopicType = 'image') AND isActive = 1 ORDER By position DESC"
            );

            that.database_provider_object
              .fetchAllData("information", json_query)
              .then((topic_data) => {
                custom_data.push(topic_data[0]);
              });
          });
          this.data.items = custom_data;
        }, 1000);
        break;
      case this.segment_name == "information" &&
        this.request_from != "whatsnew_page" &&
        this.category_id == "4":
        setTimeout(() => {
          var querystring: string[] = new Array(
            " WHERE name='" + this.newtopic_name + "' AND type='info_listing'"
          );
          this.database_provider_object
            .fetchAllData("custom_listing", querystring)
            .then((info_custom_listing_data) => {
              var list_json_value = JSON.parse(
                info_custom_listing_data[0].list_values
              );
              json_variable = list_json_value.Expert;
              _.each(json_variable, function (value, index) {
                var json_query: string[] = new Array(
                  "join information_data on information.id = information_data.id where information.id = " +
                    value +
                    " AND isActive = 1"
                );
                console.log("json_query --->" + JSON.stringify(json_query));
                that.database_provider_object
                  .fetchAllData("information", json_query)
                  .then((info_topic_data) => {
                    info_custom_data.push(info_topic_data[0]);
                  });
              });
              this.data.items = info_custom_data;
            });
        }, 1000);
        break;
      case this.segment_name == "information" &&
        this.request_from != "whatsnew_page" &&
        this.category_id == "5":
        setTimeout(() => {
          var querystring: string[] = new Array(
            " WHERE name='" + this.newtopic_name + "' AND type='info_listing'"
          );
          this.database_provider_object
            .fetchAllData("custom_listing", querystring)
            .then((info_custom_listing_data) => {
              var list_json_value = JSON.parse(
                info_custom_listing_data[0].list_values
              );
              json_variable = list_json_value.Learn;
              _.each(json_variable, function (value, index) {
                var json_query: string[] = new Array(
                  "join information_data on information.id = information_data.id where information.id = " +
                    value +
                    " AND isActive = 1"
                );
                console.log("json_query --->" + JSON.stringify(json_query));
                that.database_provider_object
                  .fetchAllData("information", json_query)
                  .then((info_topic_data) => {
                    info_custom_data.push(info_topic_data[0]);
                  });
              });
              this.data.items = info_custom_data;
            });
        }, 1000);
        break;
      case this.segment_name == "information" &&
        this.request_from != "whatsnew_page" &&
        this.category_id == "6":
        setTimeout(() => {
          var querystring: string[] = new Array(
            " WHERE name='" + this.newtopic_name + "' AND type='info_listing'"
          );
          this.database_provider_object
            .fetchAllData("custom_listing", querystring)
            .then((info_custom_listing_data) => {
              var list_json_value = JSON.parse(
                info_custom_listing_data[0].list_values
              );
              json_variable = list_json_value.Featured;
              _.each(json_variable, function (value, index) {
                var json_query: string[] = new Array(
                  "join information_data on information.id = information_data.id where information.id = " +
                    value +
                    " AND isActive = 1"
                );
                console.log("json_query --->" + JSON.stringify(json_query));
                that.database_provider_object
                  .fetchAllData("information", json_query)
                  .then((info_topic_data) => {
                    info_custom_data.push(info_topic_data[0]);
                  });
              });
              this.data.items = info_custom_data;
            });
        }, 1000);
        break;
      case this.segment_name == "information" &&
        this.request_from != "whatsnew_page" &&
        this.category_id == "7":
        setTimeout(() => {
          var querystring: string[] = new Array(
            " WHERE name='" + this.newtopic_name + "' AND type='info_listing'"
          );
          this.database_provider_object
            .fetchAllData("custom_listing", querystring)
            .then((info_custom_listing_data) => {
              var list_json_value = JSON.parse(
                info_custom_listing_data[0].list_values
              );
              json_variable = list_json_value.Product;
              _.each(json_variable, function (value, index) {
                var json_query: string[] = new Array(
                  "join information_data on information.id = information_data.id where information.id = " +
                    value +
                    " AND isActive = 1"
                );
                console.log("json_query --->" + JSON.stringify(json_query));
                that.database_provider_object
                  .fetchAllData("information", json_query)
                  .then((info_topic_data) => {
                    info_custom_data.push(info_topic_data[0]);
                  });
              });
              this.data.items = info_custom_data;
            });
        }, 1000);
        break;
      case this.segment_name == "education":
        setTimeout(() => {
          var querystring: string[] = new Array(
            " WHERE name='" + this.newtopic_name + "' AND type='listing'"
          );

          this.database_provider_object
            .fetchAllData("custom_listing", querystring)
            .then((custom_listing_data) => {
              var list_json_value = JSON.parse(
                custom_listing_data[0].list_values
              );
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
              this.data.items = custom_data;
            });
        }, 1000);
        break;
    }
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  imageCantDownload() {
    this.toast_service_object.mypresentToast(
      "Only videos can be downloaded.",
      2000
    );
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe((d) => {
      //this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
    });
  }

  shareVideo(shareVideo) {
    //console.log('shareVideo--->'+JSON.stringify(shareVideo));
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
        var title = shareVideo.title;
        var name = shareVideo.name;
        var description = shareVideo.description;
        var iconUrl = shareVideo.iconUrl;
        var url = shareVideo.shareUrl;
        var id = shareVideo.id;

        var options = {
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
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          location: localStorage.getItem("location"),
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
          Identity: localStorage.getItem("userIdentity"),
          videoName: name,
          videoId: id,
        };
        this.clevertap_object.recordEventWithNameAndProps(
          "sharedVideo",
          params
        ); // Set clevertap Custom AppLaunch event.
        this.social_sharing_object.shareWithOptions(options);
      }
    });
  }

  markasFavorite(group) {
    //console.log('this.markasFavorite(item)=--->'+JSON.stringify(group));

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
            //this.sqlite_sync.setFavorites(val, group.id);
            this.database_provider_object.setFavorites(val, group.id);
            this.toast_service_object.presentToast("Added to Favourites.");
          });
        } else {
          //set isFavourite == 0
          this.storage_object.get("user_logged_in").then((val) => {
            //this.sqlite_sync.setFavorites(val, group.id);
            this.database_provider_object.setFavorites(val, group.id);
            this.toast_service_object.presentToast("Removed from Favourites.");
          });
        }

        group.isFavourite = !group.isFavourite;
      }
    });
  }

  //download function
  downloadfile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer
      .download(url, this.file_object.dataDirectory + "icons/" + name)
      .then((entry) => {
        var icon_url = "icons/" + name;

        var querystring: string[] = new Array(
          " UPDATE subtopic_data SET localIconUrl = '" +
            icon_url +
            "', downloaded = 1 WHERE id = " +
            id +
            " "
        );
        this.database_provider_object.updateData(querystring);
      });
  }

  //insert query to api database
  downloadapi(groupid, userid) {
    var post_url = this.http_service_object.getPosturl("downloads");
    this.http_object
      .post(post_url, { cardiovisualUserId: userid, subtopicId: groupid })
      .subscribe(
        (data) => {
          var response = JSON.parse(data["_body"]);
          console.log("response--->" + JSON.stringify(response));
          var response_data = JSON.stringify(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  isDownloadVideoMultiple() {
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

        //if(this.download_status == 'complete') {

        this.download_status = "inprogress";

        var userCondition = new Array("");
        this.database_provider_object
          .fetchAllData("new_user_info", userCondition)
          .then((user_data) => {
            this.userdata = user_data[0];
          });

        var querystring: string[] = new Array(
          "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN (" +
            progress_id +
            ")"
        );

        this.database_provider_object
          .fetchAllData("new_sub_topics", querystring)
          .then(
            (data) => {
              const fileTransfer: FileTransferObject =
                this.file_transfer_object.create();

              var item = data[0];
              //_.each(data,function(item,index){
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
                      "progressBar_" + item.id
                    );
                    loader.style.background = "#fff";
                    loader.innerHTML = this.perc1 + "%";

                    //var loader1:any = 'loader1'+item.id;
                    var loader1 = document.getElementById(
                      "static_download_prog"
                    );
                    //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                    loader1.innerHTML = "Downloading is in progress...";
                    loader1.style.padding = "10px";
                    loader1.style.display = "block";

                    if (this.perc1 == 100) {
                      loader.innerHTML = "";
                      loader.style.background = "";
                      loader1.innerHTML = "";
                      loader1.style.padding = "";
                      loader1.style.display = "";
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

                      var querystring: string[] = new Array(
                        " UPDATE subtopic_data SET localUrl = '" +
                          video_url +
                          "', downloaded = 1 WHERE id = " +
                          item.id
                      );
                      this.database_provider_object.updateData(querystring);

                      var iconfilename = item.iconUrl.split("/").pop();
                      console.log("iconfilename--->" + iconfilename);
                      this.downloadfile(item.iconUrl, iconfilename, item.id);
                      this.downloadapi(item.id, this.userdata.liveId);
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
                this.download_status = "complete";
              }

              if (que_ids != "") {
                this.isDownloadVideoMultiple();
              } else if (que_ids == "") {
                localStorage.setItem("Downloadque", "");
              }
              //});
            },
            (e) => {
              //alert('586 error '+JSON.stringify(e))
            }
          );
      }
      //}
    });
  }

  //information tab
  markasInfoFavorite(group) {
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
            this.database_provider_object.setinformationFavorites(
              val,
              group.id
            );
            this.toast_service_object.presentToast("Added to Favourites.");
          });
        } else {
          //set isFavourite == 0
          this.storage_object.get("user_logged_in").then((val) => {
            this.database_provider_object.setinformationFavorites(
              val,
              group.id
            );
            this.toast_service_object.presentToast("Removed from Favourites.");
          });
        }

        group.isFavourite = !group.isFavourite;
      }
    });
  }

  isInfoDownloadVideoMultiple() {
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
        var que_ids = localStorage.getItem("InfoDownloadque");
        var progress_ids_arr = que_ids.split(",").map(Number);
        progress_ids_arr = _.uniq(progress_ids_arr);
        que_ids = progress_ids_arr.toString();
        localStorage.setItem("InfoDownloadque", que_ids);
        var progress_id = progress_ids_arr[0];
        if (progress_id == 0) {
          progress_id = progress_ids_arr[1];
        }

        //if(this.download_status == 'complete') {

        this.download_status = "inprogress";

        var userCondition = new Array("");
        this.database_provider_object
          .fetchAllData("new_user_info", userCondition)
          .then((user_data) => {
            this.userdata = user_data[0];
          });

        var querystring: string[] = new Array(
          "join information_data on information.id = information_data.id where information.id IN (" +
            progress_id +
            ")"
        );

        this.database_provider_object
          .fetchAllData("information", querystring)
          .then(
            (data) => {
              const fileTransfer: FileTransferObject =
                this.file_transfer_object.create();

              var item = data[0];
              //_.each(data,function(item,index){
              if (item.localUrl != "") {
                var new_ids_arr = que_ids.split(",").map(Number);
                var test_arr = [];
                _.each(new_ids_arr, function (value, key) {
                  if (value != item.id) {
                    test_arr.push(value);
                  }
                });
                que_ids = test_arr.toString();
                localStorage.setItem("InfoDownloadque", que_ids);

                this.toast_service_object.presentToast(
                  '"' + item.name + '" already downloaded.'
                );

                if (que_ids == "") {
                  localStorage.setItem("InfoDownloadque", "");
                }
                this.download_status = "complete";
              } else {
                this.toast_service_object.mypresentToast(
                  'Downloading: "' + item.name + '"',
                  2000
                );
                this.video_share_provider_object.downloadVideo(
                  item,
                  "Information"
                );

                var filename = item.url.split("/").pop();
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
                      "progressBar_" + item.id
                    );
                    loader.style.background = "#fff";
                    loader.innerHTML = this.perc1 + "%";

                    //var loader1:any = 'loader1'+item.id;
                    var loader1 = document.getElementById(
                      "static_download_prog"
                    );
                    //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                    loader1.innerHTML = "Downloading is in progress...";
                    loader1.style.padding = "10px";
                    loader1.style.display = "block";

                    if (this.perc1 == 100) {
                      loader.innerHTML = "";
                      loader.style.background = "";
                      loader1.innerHTML = "";
                      loader1.style.padding = "";
                      loader1.style.display = "";

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

                      var querystring: string[] = new Array(
                        " UPDATE information_data SET localUrl = '" +
                          video_url +
                          "', downloaded = 1 WHERE id = " +
                          item.id
                      );
                      this.database_provider_object.updateData(querystring);

                      var iconfilename = item.iconUrl.split("/").pop();
                      console.log("iconfilename--->" + iconfilename);
                      this.downloadInfofile(
                        item.iconUrl,
                        iconfilename,
                        item.id
                      );
                      this.downloadInfoapi(item.id, this.userdata.liveId);
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

                que_ids = localStorage.getItem("InfoDownloadque");
                var new_ids_arr = que_ids.split(",").map(Number);
                var test_arr = [];
                _.each(new_ids_arr, function (value, key) {
                  if (value != item.id) {
                    test_arr.push(value);
                  }
                });

                que_ids = test_arr.toString();
                localStorage.setItem("InfoDownloadque", que_ids);
                this.download_status = "complete";
              }

              if (que_ids != "") {
                this.isInfoDownloadVideoMultiple();
              } else if (que_ids == "") {
                localStorage.setItem("InfoDownloadque", "");
              }
              //});
            },
            (e) => {
              //alert('586 error '+JSON.stringify(e))
            }
          );
      }
      //}
    });
  }

  downloadInfofile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer
      .download(url, this.file_object.dataDirectory + "icons/" + name)
      .then((entry) => {
        var icon_url = "icons/" + name;

        var querystring: string[] = new Array(
          " UPDATE information_data SET localIconUrl = '" +
            icon_url +
            "', downloaded = 1 WHERE id = " +
            id +
            " "
        );
        this.database_provider_object.updateData(querystring);
      });
  }

  downloadInfoapi(groupid, userid) {
    var post_url = this.http_service_object.getPosturl("downloads");
    this.http_object
      .post(post_url, { cardiovisualUserId: userid, informationId: groupid })
      .subscribe(
        (data) => {
          var response = JSON.parse(data["_body"]);
          console.log("response--->" + JSON.stringify(response));
          var response_data = JSON.stringify(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addtoplaylist(item, contentType) {
    var canShare = localStorage.getItem("userProAccess");
    //canShare = 'true';
    if (canShare == "true") {
      var userCondition = new Array("");
      this.database_provider_object
        .fetchAllData("new_user_info", userCondition)
        .then((user_data) => {
          this.userdata = user_data[0];
        });

      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
      };
      const myModal: Modal = this.modal_controller_object.create(
        "ModalPage",
        { data: "Add to Playlist", video_data: item, type: contentType },
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
              this.navCtrl.parent.parent.push("UpgradePlanPage");
            },
          },
        ],
      });
      confirmPopup.present();
    }
  }
}
