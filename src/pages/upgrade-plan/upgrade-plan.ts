import { Component, Renderer2, ElementRef, Injector } from "@angular/core";
import {
  IonicPage,
  NavController,
  Platform,
  MenuController,
  Nav,
  Modal,
  ModalController,
  ModalOptions,
  ToastController,
  AlertController,
} from "ionic-angular";
import { InappProvider } from "../../providers/inapp/inapp";
import * as _ from "underscore/underscore";

import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser";
import { InAppPurchase } from "@ionic-native/in-app-purchase";
import { LoadingService } from "../../services/loading-service";
import { CleverTap } from "@ionic-native/clevertap";
import { HttpService } from "../../services/HttpService";
import { NetworkCheckProvider } from "../../providers/network_check/network_check";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

/**
 * Generated class for the UpgradePlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-upgrade-plan",
  templateUrl: "upgrade-plan.html",
})
export class UpgradePlanPage {
  monthlySubscription: any;
  yearlySubscription: any;
  os: any;
  cv_subscriptionId: any;
  cv_productId: any;
  cv_subscriptionId_monthly: any;
  dtStr: any;
  clevertapDate: any;
  subsData: any;
  platform_object: Platform;
  in_app_provider_object: InappProvider;
  in_app_browser_object: InAppBrowser;
  modal_controllar_object: ModalController;
  in_app_purchase_object: InAppPurchase;
  loading_service_object: LoadingService;
  clevertap_object: CleverTap;
  http_service_object: HttpService;
  alert_controller_object: AlertController;
  network_check_object: NetworkCheckProvider;
  screen_orientation_object: ScreenOrientation;

  constructor(
    public navCtrl: NavController,
    private screenOrientation: ScreenOrientation,
    public injector: Injector
  ) {
    this.platform_object = injector.get<Platform>(Platform);
    this.in_app_provider_object = injector.get<InappProvider>(InappProvider);
    this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
    this.modal_controllar_object =
      injector.get<ModalController>(ModalController);
    this.in_app_purchase_object = injector.get<InAppPurchase>(InAppPurchase);
    this.loading_service_object = injector.get<LoadingService>(LoadingService);
    this.clevertap_object = new CleverTap();
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.alert_controller_object =
      injector.get<AlertController>(AlertController);
    this.network_check_object =
      injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.screen_orientation_object =
      injector.get<ScreenOrientation>(ScreenOrientation);

    this.os = localStorage.getItem("getDevicePlatform");
    this.cv_subscriptionId = this.in_app_provider_object.cv_subscriptionId();
    this.cv_productId = this.in_app_provider_object.cv_productId();
    this.cv_subscriptionId_monthly =
      this.in_app_provider_object.cv_subscriptionId_monthly();
    //alert('cv_productId -->'+this.cv_productId );
    this.dtStr = this.http_service_object.dtStr();
    console.log("dtStr-->" + this.dtStr);
    this.clevertapDate = this.http_service_object.clevertapDate();
    var network_type = this.network_check_object.getNetworkType();
    if (network_type != "none") {
      setTimeout(() => {
        this.network_check_object.getPageAction(
          "UpgradePlanPage",
          "start",
          "",
          localStorage.getItem("cv5usrType")
        );
      }, 1000);
      this.network_check_object.forRandomVideoViewCount(
        localStorage.getItem("userliveId")
      );
    }
  }

  ionViewWillEnter() {
    this.os = localStorage.getItem("getDevicePlatform");
    var allproducts = this.in_app_provider_object.allProductDetails();
    console.log("ionViewDidLoad UpgradePlanPage");
    var cv_subscriptionId_monthly =
      this.in_app_provider_object.cv_subscriptionId_monthly();
    var cv_subscriptionId = this.in_app_provider_object.cv_subscriptionId();

    var subsData = _.findWhere(allproducts, {
      productId: cv_subscriptionId_monthly,
    });
    if (_.isEmpty(subsData)) {
      subsData = {};
      subsData.price =
        localStorage.getItem("proMonthlyPrice") == null
          ? "$0.99"
          : localStorage.getItem("proMonthlyPrice");
    }
    this.monthlySubscription =
      subsData["price"] == null
        ? "$0.99" + " / Month"
        : subsData["price"] + " / Month";
    //alert('text-->'+subsData['price']+" / Month");

    var asubsData = _.findWhere(allproducts, { productId: cv_subscriptionId });
    if (_.isEmpty(asubsData)) {
      asubsData = {};
      asubsData.price =
        localStorage.getItem("prePrice") == null
          ? "$2.99"
          : localStorage.getItem("prePrice");
    }
    this.yearlySubscription =
      asubsData["price"] == null
        ? "$2.99" + " / Year"
        : asubsData["price"] + " / Year";
  }

  ionViewWillLeave() {
    this.network_check_object.getPageAction(
      "UpgradePlanPage",
      "end",
      "",
      localStorage.getItem("cv5usrType")
    );
  }

  /* for upgrade screen video :sanjeev 28jun */
  knowMore() {
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

    var ref = this.in_app_browser_object.create(
      "https://pulse.cardiovisual.com/video/?id=" + 445,
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

    //this.streamingMedia.playVideo("https://static.cardiovisual.com/videos/Marketing/UpgradetoPRO.mp4", options);
  }
  /* end */

  cardiofaq() {
    this.in_app_browser_object.create(
      "https://cardiovisual.com/pro-plan-faqs",
      "_blank",
      "location=yes"
    );
  }

  ionViewDidLoad() {
    //alert('allProductDetails dashboard-->'+this.in_app_provider_object.allProductDetails());
  }

  buy(plan) {
    this.platform_object.ready().then(() => {
      //alert('plan---->'+plan);
      if (plan == "premium") {
        var productId = this.cv_subscriptionId;
      } else if (plan == "pro_monthly") {
        var productId = this.cv_subscriptionId_monthly;
      }
      var liveId = localStorage.getItem("userliveId");
      console.log('productId--->'+productId);
      var that = this;
      this.in_app_purchase_object
        .subscribe(productId)
        .then((data) => {
          console.log('inapp purchase data--->'+JSON.stringify(data));
          if (this.os != "Android") {
            var dateObj = Date.now();
            dateObj += 1000 * 60 * 60 * 24 * 2;
            var data_params = {
              autoRenewing: true,
              orderId: data.transactionId,
              productType: "subs",
              productId: productId,
              purchaseState: 0,
              purchaseTime: new Date().getTime(),
              purchaseToken: data.receipt,
              signature: data.receipt,
              transactionId: data.transactionId,
              cardiovisualUserId: liveId,
              platform: this.os.toLowerCase(),
              expiryTime: dateObj,
            };
            this.subsData = data_params;
          } else {
            this.subsData = data;
          }
          this.in_app_provider_object.saveInAppPurchaseDataToApi(
            this.subsData,
            liveId
          );
          if (this.os == "Android") {
            // return that.in_app_purchase_object.acknowledge(
            //   data.productType,
            //   data.receipt,
            //   data.signature
            // );
          }
        })
        .then(() => {
          this.loading_service_object.inappLoading();
          var params = {
            record_time: this.dtStr,
            record_date: this.clevertapDate,
            os: localStorage.getItem("getDevicePlatform"),
            modelNo: localStorage.getItem("modelNo"),
            deviceversion: localStorage.getItem("getDeviceversion"),
            userRoleId: localStorage.getItem("cv5userRoleId"),
            userType: localStorage.getItem("cv5usrType"),
            userEmail: localStorage.getItem("cv5userEmail"),
            userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
            location: localStorage.getItem("location"),
            specialities: localStorage.getItem("usrSpecialities"),
            subSpecialities: localStorage.getItem("cv5usrRolesubType"),
            Identity: localStorage.getItem("userIdentity"),
            purchaseStatus: "CardioVisual Premium Purchase was successful.",
          };
          this.clevertap_object.recordEventWithNameAndProps(
            "clickedOnBuy",
            params
          );

          setTimeout(() => {
            let confirmPopup = this.alert_controller_object.create({
              title: "Purchase was successful.",
              message: "CardioVisual PRO is now active",
              buttons: [
                {
                  text: "OK",
                  handler: () => {
                    console.log("Buy clicked");
                  },
                },
              ],
            });
            confirmPopup.present();
            this.loading_service_object.hide();
            this.navCtrl.setRoot("DashboardPage");
          }, 10000);
        })
        .catch((error) => {
          console.log('error 34-->'+JSON.stringify(error));
        });
    });
  }

  showTermsPopup() {
    this.openModal("Subscription Terms");
  }

  privacyPopup() {
    this.openModal("Privacy Policy");
  }

  showSubscriptionPopup() {
    this.openModal("Free Trial terms");
  }

  openModal(myData) {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
    };
    // const myModalData = {
    //   name: 'Paul Halliday',
    //   occupation: 'Developer'
    // };
    //const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: myModalData }, myModalOptions);
    const myModal: Modal = this.modal_controllar_object.create(
      "ModalPage",
      { data: myData },
      myModalOptions
    );

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });
  }

  chatwithus() {
    var usrType = "";
    var userEmail = localStorage.getItem("cv5userEmail");
    var name = userEmail.substring(0, userEmail.lastIndexOf("@"));
    var userRoleId = localStorage.getItem("cv5userRoleId");

    var userType = userRoleId == "1" ? "doctor" : "patient";

    if (userType != "doctor") {
      usrType = "nonhcp";
    } else {
      usrType = "hcp";
    }
    var userInfo = {
      firstName: name,
      lastName: usrType,
      email: userEmail,
      externalId: userEmail,
    };

    (window as any).Freshchat.updateUser(userInfo);

    var userProperties = {
      userRoleId: userRoleId,
      userType: usrType,
      organisation: "CardioVisual",
    };

    (window as any).Freshchat.updateUserProperties(userProperties);

    //window.Freshchat.setExternalID('sanjeev.kumar@oneleap.in');
    (window as any).Freshchat.showConversations();
  }
}
