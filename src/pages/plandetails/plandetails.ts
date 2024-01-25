import { Component, Injector } from "@angular/core";
import {
  IonicPage,
  NavController,
  Platform,
  ToastController,
  Modal,
  ModalController,
  ModalOptions,
  AlertController,
  App,
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
/**
 * Generated class for the PlandetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-plandetails",
  templateUrl: "plandetails.html",
})
export class PlandetailsPage {
  os: any;
  myProductflg1: any;
  shownContent: any;
  promotionalCodeStatus: any;
  productID: any;
  productExpiredate: any;
  cv_subscriptionId: any;
  cv_productId: any;
  cv_subscriptionId_monthly: any;
  buttonYear: any;
  buttonShow: any;
  planPriceMonthly: any;
  planPriceYearly: any;
  planPrice: any;
  prodDescription: any;
  subsData: any;
  dtStr: any;
  clevertapDate: any;
  myActiveplan: boolean;
  in_app_provider_object: InappProvider;
  in_app_browser_object: InAppBrowser;
  in_app_purchase_object: InAppPurchase;
  loading_service_object: LoadingService;
  clevertap_object: CleverTap;
  http_service_object: HttpService;
  alert_controller_object: AlertController;
  modal_controllar_object: ModalController;
  network_check_object: NetworkCheckProvider;

  constructor(public navCtrl: NavController, public injector: Injector) {
    this.in_app_provider_object = injector.get<InappProvider>(InappProvider);
    this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
    this.in_app_purchase_object = injector.get<InAppPurchase>(InAppPurchase);
    this.loading_service_object = injector.get<LoadingService>(LoadingService);
    this.clevertap_object = new CleverTap();
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.alert_controller_object =
      injector.get<AlertController>(AlertController);
    this.modal_controllar_object =
      injector.get<ModalController>(ModalController);
    this.network_check_object =
      injector.get<NetworkCheckProvider>(NetworkCheckProvider);

    this.os = localStorage.getItem("getDevicePlatform");
    this.cv_subscriptionId = this.in_app_provider_object.cv_subscriptionId();
    this.cv_productId = this.in_app_provider_object.cv_productId();
    this.cv_subscriptionId_monthly =
      this.in_app_provider_object.cv_subscriptionId_monthly();
    //alert('cv_productId -->'+this.cv_productId );
    this.dtStr = this.http_service_object.dtStr();
    console.log("dtStr-->" + this.dtStr);
    this.clevertapDate = this.http_service_object.clevertapDate();
    console.log("clevertapDate-->" + this.clevertapDate);
    var network_type = this.network_check_object.getNetworkType();
    if (network_type != "none") {
      setTimeout(() => {
        this.network_check_object.getPageAction(
          "PlandetailsPage",
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

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlandetailsPage");
  }

  ionViewWillLeave() {
    var network_type = this.network_check_object.getNetworkType();
    if (network_type != "none") {
      this.network_check_object.getPageAction(
        "PlandetailsPage",
        "end",
        "",
        localStorage.getItem("cv5usrType")
      );
    }
  }

  ionViewWillEnter() {
    this.shownContent = localStorage.getItem("shownContent");
    //alert('shownContent----'+this.shownContent);
    this.promotionalCodeStatus = localStorage.getItem("promotionalCodeStatus");
    //alert('promotionalCodeStatus-->'+this.promotionalCodeStatus)
    this.productID = localStorage.getItem("productID");
    //alert('productID -->'+this.productID );
    this.productExpiredate = localStorage.getItem("productExpiredate");
    this.myActiveplan = false;
    this.myProductflg1 = localStorage.getItem("myProductflg");
    if (this.myProductflg1 == "true") {
      // code...
      this.myActiveplan = true;
      //debugger;
      //angular.element('.myActiveplan').css('display', 'block');
    } else {
      this.myActiveplan = false;
      //angular.element('.myActiveplan').css('display', 'none');
    }
    if (this.productID == this.cv_subscriptionId) {
      //alert('ttttt');
      this.buttonYear = true;
      this.buttonShow = false;
    } else if (this.productID == this.cv_subscriptionId_monthly) {
      //alert('nnn');
      this.buttonShow = true;
      this.buttonYear = false;
    }
    var allproducts = this.in_app_provider_object.allProductDetails();
    //alert(' allproducts plandetails----------->'+JSON.stringify(allproducts));

    var subsData = _.findWhere(allproducts, {
      productId: this.cv_subscriptionId_monthly,
    });
    if (_.isEmpty(subsData)) {
      subsData = {};
      subsData.price =
        localStorage.getItem("proMonthlyPrice") == null
          ? "$0.99"
          : localStorage.getItem("proMonthlyPrice");
    }
    this.planPriceMonthly =
      subsData["price"] == null
        ? "$0.99" + " / Month"
        : subsData["price"] + " / Month";

    var asubsDataYearly = _.findWhere(allproducts, {
      productId: this.cv_subscriptionId,
    });
    if (_.isEmpty(asubsDataYearly)) {
      asubsDataYearly = {};
      asubsDataYearly.price =
        localStorage.getItem("prePrice") == null
          ? "$2.99"
          : localStorage.getItem("prePrice");
    }
    this.planPriceYearly =
      asubsDataYearly["price"] == null
        ? "$2.99" + " / Year"
        : asubsDataYearly["price"] + " / Year";

    var asubsData = _.findWhere(allproducts, { productId: this.productID });
    //console.log('asubsData----------->'+JSON.stringify(asubsData));
    //alert(' planlist asubsData----------->'+JSON.stringify(asubsData));
    //alert(' planlist asubsData price----------->'+JSON.stringify(asubsData['price']));
    //alert('productID----------->'+JSON.stringify($rootScope.productID));
    switch (this.productID) {
      case "cardiovisual_pro_monthly1":
        // code block
        //alert('hiiii');
        this.planPrice = asubsData["price"] + " / Month";
        this.prodDescription = asubsData["description"];
        break;
      case "cardio_pre_test_1":
        this.planPrice = asubsData["price"] + " / year";
        this.prodDescription = asubsData["description"];
        break;
      case "cardio_pre_live3":
        // code block

        this.planPrice = asubsData["price"] + " / year";
        this.prodDescription = asubsData["description"];
        break;
      case "cardio_pro_live2":
        // code block
        this.planPrice = asubsData["price"];
        this.prodDescription = asubsData["description"];
        break;
    }
  }

  cardiofaq() {
    this.in_app_browser_object.create(
      "https://cardiovisual.com/pro-plan-faqs",
      "_blank",
      "location=yes"
    );
  }

  buy(plan) {
    //alert('plan---->'+plan);
    if (plan == "premium") {
      var productId = this.cv_subscriptionId;
    } else if (plan == "pro_monthly") {
      var productId = this.cv_subscriptionId_monthly;
    }
    var liveId = localStorage.getItem("userliveId");
    //alert('productId--->'+productId);
    this.in_app_purchase_object
      .subscribe(productId)
      .then((data) => {
        //return this.in_app_purchase_object.consume(data.productType, data.receipt, data.signature);
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
      })
      .then(() => {
        console.log("product was successfully consumed!");
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
          specialities: localStorage.getItem("usrSpecialities"),
          subSpecialities: localStorage.getItem("cv5usrRolesubType"),
          userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
          location: localStorage.getItem("location"),
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
        //alert('error 1-->'+JSON.stringify(error));
        //alert('error 2-->'+JSON.stringify(error.message));
        console.log("error 1-->" + JSON.stringify(error));
        console.log("error 2-->" + JSON.stringify(error.message));
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
