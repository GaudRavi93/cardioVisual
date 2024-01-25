webpackJsonp([13,36,38],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageModule", function() { return HeaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderPageModule = /** @class */ (function () {
    function HeaderPageModule() {
    }
    HeaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderPage */]
            ]
        })
    ], HeaderPageModule);
    return HeaderPageModule;
}());

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageModule", function() { return FooterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterPageModule = /** @class */ (function () {
    function FooterPageModule() {
    }
    FooterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__footer__["a" /* FooterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__footer__["a" /* FooterPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__footer__["a" /* FooterPage */]
            ]
        })
    ], FooterPageModule);
    return FooterPageModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDevicesPageModule", function() { return ManageDevicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_devices__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ManageDevicesPageModule = /** @class */ (function () {
    function ManageDevicesPageModule() {
    }
    ManageDevicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manage_devices__["a" /* ManageDevicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manage_devices__["a" /* ManageDevicesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["FooterPageModule"]
            ],
        })
    ], ManageDevicesPageModule);
    return ManageDevicesPageModule;
}());

//# sourceMappingURL=manage-devices.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_inapp_inapp__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_speech_recognition__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_radient_settings_radient_settings__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//import { DashboardPage } from '../dashboard/dashboard';
/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeaderPage = /** @class */ (function () {
    function HeaderPage(navCtrl, cd, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.cd = cd;
        this.injector = injector;
        this.isTabs = false;
        this.hideMenu = false;
        this.search = '';
        this.pageHistory = '';
        this.previousPage = '';
        this.mySubscriptions = [];
        this.isRecording = true;
        this.showCard = true;
        this.request_from = '';
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]);
        this.app_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]);
        this.in_app_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__providers_inapp_inapp__["a" /* InappProvider */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_clevertap__["a" /* CleverTap */]();
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__services_loading_service__["a" /* LoadingService */]);
        this.speech_recognition_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_native_speech_recognition__["a" /* SpeechRecognition */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.radiant_setting_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__providers_radient_settings_radient_settings__["a" /* RadientSettingsProvider */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.pageHistory = this.nav_params_object.get('previousPage');
        this.request_from = this.nav_params_object.get('request_from');
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        this.platform_object.ready().then(function () {
            //this.divShow = true;
            //this.divhide = false;
            _this.notPro = 'false';
            _this.proAccess = 'true';
            localStorage.setItem('userProAccess', _this.notPro);
            //localStorage.getItem('userliveId');
            _this.showHideUpgradeSign();
        });
        var querystring = new Array(" WHERE name= 'notification' AND type='notification'");
        this.database_provider_object.fetchAllData('custom_listing', querystring).then(function (custom_listing_data) {
            var list_json_value = JSON.parse(custom_listing_data[0].list_values);
            var json_variable = '';
            if (list_json_value.education) {
                json_variable = list_json_value.education;
                _this.datalength = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](json_variable);
            }
            if (list_json_value.information) {
                json_variable = list_json_value.information;
                _this.datalength1 = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](json_variable);
            }
        });
        this.notificationSeen = [];
        var notiCondition = new Array(" WHERE messageSeen = 0");
        this.database_provider_object.fetchAllData('freshNotificationList', notiCondition).then(function (notiresult) {
            _this.notificationSeen = notiresult;
            setTimeout(function () {
                _this.messageUnSeen = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](notiresult);
            }, 500);
        });
    }
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeaderPage');
    };
    HeaderPage.prototype.searchInput = function (searchInput) {
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            this.network_check_object.getPageAction(this.navCtrl.getActive().name, 'exitPage', 'forSearchClick', localStorage.getItem('cv5usrType'));
            this.network_check_object.forTriggersDetalsPageBACKAction(this.navCtrl.getActive().name, 'forSearchClick');
            //this.search = searchInput;
        }
        this.search = this.trimming_fn(searchInput);
        if (this.search != '') {
            var params = {
                "record_time": this.dtStr,
                "record_date": this.clevertapDate,
                "os": localStorage.getItem('getDevicePlatform'),
                "modelNo": localStorage.getItem('modelNo'),
                "deviceversion": localStorage.getItem('getDeviceversion'),
                "userRoleId": localStorage.getItem('cv5userRoleId'),
                "userType": localStorage.getItem('cv5usrType'),
                "searchKey": this.search,
                "userEmail": localStorage.getItem('cv5userEmail'),
                "specialities": localStorage.getItem('usrSpecialities'),
                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                "location": localStorage.getItem('location')
            };
            this.clevertap_object.recordEventWithNameAndProps("inAppSearch", params);
            var where_query = '';
            var only_name_query = '';
            var result = [];
            var info_result = [];
            var playlist_data = [];
            var whatsnew_data = [];
            var search_arr = this.search.split(" ");
            this.loading_service_object.show();
            this.getSearchData(search_arr);
            // var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where (name like '%"+this.search+"%' OR title like '%"+this.search+"%' OR description like '%"+this.search+"%' )AND isActive=1 "); 
            // this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => { 
            // 	this.navCtrl.push('SearchPage', {params: data, search: this.search});
            // });
        }
    };
    // this will remove only beginning and end of string whitespace... By : Sanjeev
    HeaderPage.prototype.trimming_fn = function (x) {
        return x ? x.replace(/^\s+|\s+$/gm, '') : '';
    };
    ;
    HeaderPage.prototype.doGoBack = function () {
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            this.network_check_object.getPageAction(this.navCtrl.getActive().name, 'exitPage', 'forBackClick', localStorage.getItem('cv5usrType'));
            this.network_check_object.forTriggersDetalsPageBACKAction(this.navCtrl.getActive().name, 'forBackClick');
        }
        localStorage.setItem('search_page', '');
        if (this.pageHistory == "OrientationPlaylistHcp" || this.pageHistory == "OrientationPlaylistNonHcp" || this.pageHistory == "SplashesPage") {
            //this.navCtrl.setRoot('DashboardPage');
            this.navCtrl.setRoot('WhatsNewPage');
        }
        else if (this.pageHistory == "fromSideMenu" || this.pageHistory == "appComponent") {
            // code...
            //this.navCtrl.setRoot('DashboardPage');
            this.navCtrl.setRoot('WhatsNewPage');
        }
        else if (this.pageHistory === undefined && localStorage.getItem('branch_flag') == 'yes') {
            localStorage.setItem('branch_flag', '');
            this.navCtrl.setRoot('WhatsNewPage');
        }
        else if (this.request_from === 'video_list' || this.request_from === 'whatsnew_list' || this.request_from === 'whatsnew_seeall') {
            this.radiant_setting_provider_object.getCurrentObject();
            //this.radiant_setting_provider_object.getTriggerData();  
            //this.radiant_setting_provider_object.customConfirmBox();  
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.pop();
        }
    };
    HeaderPage.prototype.gotoUpgradePlan = function () {
        var nav = this.app_object.getActiveNavs()[0];
        var activeView = nav.getActive();
        switch (activeView.name) {
            case "UpgradePlanPage":
                // code...
                break;
            case "PlandetailsPage":
                // code...
                break;
            default:
                // code...
                //this.navCtrl.push('UpgradePlanPage');
                var flg = localStorage.getItem('myProductflg');
                if (flg == 'false' || flg == null || flg == '') {
                    this.navCtrl.push('UpgradePlanPage');
                }
                else {
                    this.navCtrl.push('PlandetailsPage');
                }
                break;
        }
        // if(activeView.name != 'UpgradePlanPage'){
        //   //this.navCtrl.push('UpgradePlanPage');
        //     var flg = localStorage.getItem('myProductflg');
        //     //alert('flg--->'+flg);
        //     if (flg == 'false' || flg == null) {
        //       this.navCtrl.push('UpgradePlanPage');
        //     }else{
        //       this.navCtrl.push('PlandetailsPage');
        //     }
        // }
    };
    HeaderPage.prototype.showHideUpgradeSign = function () {
        var _this = this;
        var liveId = localStorage.getItem('userliveId');
        var cv_subscriptionId_monthly = this.in_app_provider_object.cv_subscriptionId_monthly();
        var cv_subscriptionId = this.in_app_provider_object.cv_subscriptionId();
        var cv_productId = this.in_app_provider_object.cv_productId();
        //var cv_subscriptionId = 'cardio_pre_test_1';
        var isSubscribe = '';
        var isPro = '';
        var userType = localStorage.getItem('cv5usrType');
        localStorage.setItem('buttonYear', 'false');
        localStorage.setItem('buttonShow', 'false');
        var orderData = new Array("");
        this.database_provider_object.fetchAllData('order_details', orderData).then(function (orderresult) {
            _this.upgradeIcon.nativeElement['style'].display = 'block';
            _this.upgradeText.nativeElement['style'].display = 'none';
            var productExpiredate = '';
            var productID = '';
            var productType = '';
            var that = _this;
            __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](orderresult, function (item, index) {
                that.mySubscriptions.push({
                    "productId": item.product_id,
                    "expiryTime": item.expiry_time,
                    "productType": item.product_type,
                    "createdAt": item.created_at
                });
            });
            var allProducts = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["pluck"](that.mySubscriptions, 'productId');
            isSubscribe = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["contains"](allProducts, cv_subscriptionId) || __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["contains"](allProducts, cv_subscriptionId_monthly);
            var subsData = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["find"](that.mySubscriptions, function (item) { return item.productId === cv_subscriptionId || item.productId === cv_subscriptionId_monthly || item.productId === cv_productId; });
            var isExpired = _this.in_app_provider_object.compareDate(subsData.expiryTime);
            _this.forPromotionalAccess = _this.in_app_provider_object.compareDatePromotionalAccess(subsData.createdAt);
            localStorage.setItem('promotionalCodeStatus', _this.forPromotionalAccess);
            if ((isSubscribe) && (!isExpired)) {
                //$rootScope.myProductflg = true;
                localStorage.setItem('myProductflg', 'true');
                localStorage.setItem('userProAccess', _this.proAccess);
                _this.productExpired = _this.in_app_provider_object.compareDate(subsData.expiryTime);
                localStorage.setItem('productExpired', _this.productExpired);
                localStorage.setItem('productID', subsData.productId);
                localStorage.setItem('productType', subsData.productType);
                _this.productExpiredate = _this.in_app_provider_object.productDateExp(subsData.expiryTime);
                localStorage.setItem('productExpiredate', _this.productExpiredate);
                //this.divShow = false;
                //this.divhide = true;
                _this.upgradeIcon.nativeElement['style'].display = 'none';
                _this.upgradeText.nativeElement['style'].display = 'block';
            }
            else {
                if (userType != "patient") {
                    isPro = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["contains"](allProducts, cv_productId);
                    if (isPro) {
                        // code...>
                        localStorage.setItem('myProductflg', 'true');
                        localStorage.setItem('userProAccess', _this.proAccess);
                        //this.divShow = false;
                        //this.divhide = true;
                        _this.upgradeIcon.nativeElement['style'].display = 'none';
                        _this.upgradeText.nativeElement['style'].display = 'block';
                        if (isExpired) {
                            localStorage.setItem('productID', cv_productId);
                            localStorage.setItem('productType', 'inapp');
                        }
                        else {
                            localStorage.setItem('productID', subsData.productId);
                            localStorage.setItem('productType', subsData.productType);
                        }
                    }
                }
            }
        });
    };
    /*bellIconClick(){
      this.toast_controller_object.create({
        message: 'Coming Soon',
        position: 'bottom',
        duration: 2000
      }).present();
    }*/
    HeaderPage.prototype.comingsoon = function () {
        this.toast_controller_object.create({
            message: 'Coming Soon',
            position: 'bottom',
            duration: 3000
        }).present();
    };
    HeaderPage.prototype.stopListening = function () {
        var _this = this;
        this.speech_recognition_object.stopListening().then(function () {
            _this.isRecording = false;
        });
    };
    HeaderPage.prototype.getPermission = function () {
        var _this = this;
        this.speech_recognition_object.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speech_recognition_object.requestPermission();
            }
            else {
                _this.startListening();
            }
        });
    };
    HeaderPage.prototype.startListening = function () {
        var _this = this;
        var options = {
            language: 'en-US'
        };
        this.speech_recognition_object.startListening().subscribe(function (matches) {
            _this.matches = matches;
            _this.cd.detectChanges();
            var result = [];
            var info_result = [];
            var that = _this;
            var where_query = '';
            var only_name_query = '';
            var search = '';
            var playlist_data = [];
            var whatsnew_data = [];
            _this.loading_service_object.show();
            _this.getSearchData(_this.matches);
        });
        this.isRecording = true;
    };
    HeaderPage.prototype.isIos = function () {
        return this.platform_object.is('ios');
        //return this.platform.is('ios');
    };
    HeaderPage.prototype.getSearchData = function (search_term) {
        var _this = this;
        var search = '';
        var that = this;
        var where_query_1 = '';
        var only_name_query_1 = '';
        var result = [];
        var info_result = [];
        var playlist_data = [];
        var whatsnew_data = [];
        var exclude_word = ['is', 'to', 'and', 'are', 'i', 'am', 'how', 'why', 'what', 'dr', 'Dr'];
        var user_type = localStorage.getItem('cv5usrType');
        var search_str = '';
        __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](search_term, function (val, key) {
            search = that.trimming_fn(val);
            if (search != '') {
                var search_arr = search.split(" ");
                __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](search_arr, function (val1, key1) {
                    var result = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["without"](exclude_word, val1.toLowerCase());
                    if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](exclude_word) == __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](result)) {
                        if (search_str == '') {
                            search_str = val1;
                        }
                        else {
                            search_str = search_str + ' ' + val1;
                        }
                        //where_query_1 = where_query_1 + " name like '% "+val1+" %' OR name like '%"+val1+" %' OR name like '% "+val1+"%' OR description like '% "+val1+" %' OR";
                        where_query_1 = where_query_1 + " name like '% " + val1 + " %' OR name like '%" + val1 + " %' OR name like '% " + val1 + "%' OR description like '% " + val1 + " %' OR description like '" + val1 + " %' OR description like '% " + val1 + "' OR";
                        only_name_query_1 = only_name_query_1 + " name like '% " + val1 + " %' OR name like '%" + val1 + " %' OR name like '% " + val1 + "%' OR";
                    }
                });
            }
        });
        where_query_1 = where_query_1.replace(/ OR\s*$/, "");
        only_name_query_1 = only_name_query_1.replace(/ OR\s*$/, "");
        where_query_1 = " name like '%" + search_str + "%' OR " + where_query_1;
        var querystring = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where (" + where_query_1 + ") AND isActive=1 AND topicId !=0 AND categoryId !=0 AND subTopicType='video' LIMIT 0,5");
        this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data) {
            result = result.concat(data);
            var querystring_info = new Array(" join information_data on information.id = information_data.id where (" + where_query_1 + ") AND isActive=1 AND topicId != 0 AND categoryId != 0 AND subTopicType= 'video' LIMIT 0,5");
            _this.database_provider_object.fetchAllData('information', querystring_info).then(function (info_data) {
                info_result = info_data;
                var playlist_query = new Array(" where (is_for ='" + user_type + "' OR is_for = 'all') AND (" + where_query_1 + ") AND active=1 LIMIT 0,5");
                _this.database_provider_object.fetchAllData('playlists', playlist_query).then(function (playlist_result) {
                    playlist_data = playlist_result;
                    var whatsnew_query = new Array(" where (" + only_name_query_1 + ") AND is_active=1");
                    _this.database_provider_object.fetchAllData('whatsnew', whatsnew_query).then(function (whatsnew_result) {
                        whatsnew_data = whatsnew_result;
                        var flag = localStorage.getItem('search_page');
                        if (flag == 'yes') {
                            localStorage.setItem('search_page', '');
                            _this.navCtrl.pop();
                        }
                        _this.navCtrl.push('SearchPage', { params: result, info_result: info_result, playlist: playlist_data, whatsnew: whatsnew_data, search: search_term });
                        _this.loading_service_object.hide();
                    });
                });
            });
        });
    };
    HeaderPage.prototype.bellIconClick = function () {
        this.navCtrl.push('BellNotificationListPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], HeaderPage.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('upgradeIcon'),
        __metadata("design:type", Object)
    ], HeaderPage.prototype, "upgradeIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('upgradeText'),
        __metadata("design:type", Object)
    ], HeaderPage.prototype, "upgradeText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeaderPage.prototype, "isTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeaderPage.prototype, "hideMenu", void 0);
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //selector: 'page-header',
            selector: '[clean-header]',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\header\header.html"*/'<ion-navbar hideBackButton class="search-center">\n\n\n\n  <div class="Row">\n\n    <div class="Column1">\n\n      <button  ion-button menuToggle  class="menuColor" *ngIf="!hideMenu"><ion-icon class="icon-hamburger-menu" style="font-size: 20px;color: black;"></ion-icon></button>\n\n\n\n      <div left *ngIf="isTabs" tappable (click)="doGoBack()" class="customIcon" >\n\n        <!-- <ion-icon class="" style="font-size: 1.5em;color: black;" ios="icon-backarrow" md="md-arrow-back" class="icon-backarrow"></ion-icon> -->\n\n        <ion-icon class="" style="font-size:2em;color: black;" class="customIcon" name="arrow-back"></ion-icon>\n\n      </div>\n\n    </div>\n\n    <div class="Column2" tappable (click)="gotoUpgradePlan()" style="font-size:20px;">\n\n      <span #upgradeIcon tappable class="forupgradeIcon"><i class="icon-upgrade subscription-upgrade-icon "></i></span>\n\n      <span #upgradeText class="subscription-upgrade-text effect3d">PRO</span>\n\n    </div>\n\n    <div class="Column3">\n\n      <input (keyup.enter)="searchInput(search)" class="search-input" type="text" placeholder="Search CardioVisual" [(ngModel)]="search">\n\n      <div tappable class="icon-search search-btn" (click)="searchInput(search)" style="font-size:20px; margin-left: 15px;"></div>\n\n      <!-- <div tappable class="icon-mic micClass" style="font-size: 20px;" (click)="getPermission()" style=""></div> -->\n\n    </div>\n\n    \n\n    <ion-badge class="cart-badge" *ngIf="messageUnSeen > 0 ">{{messageUnSeen}}</ion-badge>\n\n    <div tappable class="Column4" (click)="bellIconClick()">\n\n      <span class="icon-bell bellIconClass"></span>\n\n    </div>\n\n  </div>\n\n</ion-navbar>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\header\header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FooterPage = /** @class */ (function () {
    function FooterPage(navCtrl, injector) {
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.activeFootermenu = false;
        this.ismyCv = false;
        this.ismyChannel = false;
        this.iswhatsNew = false;
        this.email = '';
        this.username = '';
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.for_videoshare_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
    }
    FooterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FooterPage');
    };
    FooterPage.prototype.gotoMyCV = function () {
        this.navCtrl.push('MycvPage');
    };
    FooterPage.prototype.gotoHome = function () {
        this.navCtrl.push('DashboardPage');
    };
    // gotoChannel(){
    // 	this.navCtrl.push('ChannelsPage');
    // }
    FooterPage.prototype.comingsoon = function () {
        this.toast_controller_object.create({
            message: 'Coming Soon',
            position: 'bottom',
            duration: 3000
        }).present();
    };
    // gotoChannel(){
    // 	var query:string[] = new Array(" WHERE channelId !=0");
    // 	this.database_provider_object.fetchAllData('information' , query).then(data => {
    // 		if(data.length == 0){
    // 			this.toast_controller_object.create({
    // 				message: 'Coming Soon',
    // 				position: 'bottom',
    // 				duration: 3000
    // 			}).present();
    // 		}else{
    // 			this.navCtrl.push('ChannelsPage');
    // 		}
    // 	});
    // }
    FooterPage.prototype.comingsoonforchannels = function () {
        var _this = this;
        var query = new Array(" WHERE channelId !=0");
        this.database_provider_object.fetchAllData('information', query).then(function (data) {
            console.log('datadatadatadatadata', data);
            if (data.length == 0) {
                _this.toast_controller_object.create({
                    message: 'Coming Soon',
                    position: 'bottom',
                    duration: 3000
                }).present();
            }
            else {
                _this.navCtrl.push('ChannelsPage');
            }
        });
    };
    FooterPage.prototype.gotoWhatsnew = function () {
        // this.toast_controller_object.create({
        // 	message: 'Coming Soon',
        // 	position: 'bottom',
        // 	duration: 3000
        // }).present();
        this.navCtrl.push('WhatsNewPage');
    };
    FooterPage.prototype.onPromptForProffesional = function () {
        this.for_videoshare_object.discussPromptForProffesional('', '/footer', 'Footer');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FooterPage.prototype, "activeFootermenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FooterPage.prototype, "ismyCv", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FooterPage.prototype, "ismyChannel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FooterPage.prototype, "iswhatsNew", void 0);
    FooterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //selector: 'page-footer',
            selector: '[clean-footer]',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\footer\footer.html"*/'<ion-toolbar class="footercolor" transparent>\n\n	<ion-grid no-padding > \n\n	    <ion-row style="width:100%;color:#474747;min-height:20px;text-align: center;">\n\n\n\n			<ion-col *ngIf="activeFootermenu">\n\n				<div><i class="icon-footer-icon-home selected-fav-icon new-font-icons" style="font-size: 2.4em;color:#E8604F;margin-top:0.2em;"></i></div>\n\n				<div style="" class="fntSize"><b>Home</b></div>\n\n			</ion-col>\n\n\n\n			<ion-col tappable (click)="gotoHome()" *ngIf="!activeFootermenu">\n\n				 <div><i class="icon-footer-icon-home selected-fav-icon new-font-icons" style="font-size: 2.4em;margin-top:0.2em;"></i></div>\n\n				 <div style="" class="fntSize"><b>Home</b></div>\n\n			</ion-col>\n\n\n\n			<!-- <ion-col tappable (click)="onPromptForProffesional()">\n\n				<div><i class="icon-cardio-discuss selected-fav-icon new-font-icons" style="font-size: 2.4em;margin-top:0.2em;"></i></div>\n\n				<div style="" class="fntSize"><b>Discuss</b></div>\n\n			</ion-col> -->\n\n\n\n			<ion-col *ngIf="iswhatsNew">\n\n				<div><i class="icon-footer-icon-updates selected-fav-icon new-font-icons" style="font-size: 2.6em;color:#E8604F;margin-top:0.1em;"></i></div>\n\n				<div style="" class="fntSize"><b>Featured</b></div>\n\n			</ion-col>\n\n\n\n			<ion-col tappable (click)="gotoWhatsnew()" *ngIf="!iswhatsNew">\n\n				<div><i class="icon-footer-icon-updates selected-fav-icon new-font-icons" style="font-size: 2.6em;margin-top:0.1em;"></i></div>\n\n				<div style="" class="fntSize"><b>Featured</b></div>\n\n			</ion-col>\n\n\n\n			<ion-col *ngIf="ismyChannel">\n\n				<div style="padding-right:15px;"><i class="icon-channelcon selected-fav-icon new-font-icons" style="font-size: 1.5em;color:#E8604F;margin-top:0.3em;margin-bottom:0.7em;"></i></div>\n\n				<div style="" class="fntSize"><b>Channels</b></div>\n\n			</ion-col>\n\n\n\n			<ion-col tappable (click)="comingsoonforchannels()" *ngIf="!ismyChannel">\n\n				<div style="padding-right:15px;"><i class="icon-channelcon selected-fav-icon new-font-icons" style="font-size: 1.5em;margin-top:0.3em;margin-bottom:0.7em;"></i></div>\n\n				<div style="" class="fntSize"><b>Channels</b></div>\n\n			</ion-col>\n\n\n\n			<ion-col *ngIf="ismyCv">\n\n				<div><i class="icon-footer-icon-mycv selected-fav-icon new-font-icons" style="font-size: 2.6em;color:#E8604F;margin-top:0.1em;"></i></div>\n\n				<div style="" class="fntSize"><b>My CV</b></div>\n\n			</ion-col>\n\n\n\n			<ion-col tappable (click)="gotoMyCV()" *ngIf="!ismyCv">\n\n				<div><i class="icon-footer-icon-mycv selected-fav-icon new-font-icons" style="font-size: 2.6em;margin-top:0.1em;"></i></div>\n\n				<div style="" class="fntSize"><b>My CV</b></div>\n\n			</ion-col>\n\n\n\n	    </ion-row>\n\n	</ion-grid> \n\n</ion-toolbar>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\footer\footer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], FooterPage);
    return FooterPage;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageDevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_countryandrolelist_countryandrolelist__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ManageDevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManageDevicesPage = /** @class */ (function () {
    function ManageDevicesPage(navCtrl, navParams, storage, httpservice, http, alertCtrl, countryandrolelist) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservice = httpservice;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.countryandrolelist = countryandrolelist;
        this.request_from = '';
        this.request_from = this.navParams.get('request_from');
        if (this.request_from == 'login_page') {
            var user_data = this.navParams.get('user_data');
            this.httpservice.getRegisteredDeviceCount(user_data[0].id).subscribe(function (data) {
                var that = _this;
                var device_result = [];
                __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](data, function (value, index) {
                    if (value.deviceType == 'iOS' || value.deviceType == 'ios') {
                        device_result = that.countryandrolelist.getIphone_name(value.model);
                        data[index].device_name = device_result;
                    }
                    else {
                        data[index].device_name = value.model;
                    }
                });
                _this.device_data = data;
            });
        }
        else {
            this.storage.get('user_logged_in').then(function (val) {
                _this.httpservice.getRegisteredDeviceCount(val).subscribe(function (data) {
                    var that = _this;
                    var device_result = [];
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](data, function (value, index) {
                        if (value.deviceType == 'iOS' || value.deviceType == 'ios') {
                            device_result = that.countryandrolelist.getIphone_name(value.model);
                            data[index].device_name = device_result;
                        }
                        else {
                            data[index].device_name = value.model;
                        }
                    });
                    _this.device_data = data;
                });
            });
        }
    }
    ManageDevicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManageDevicesPage');
    };
    ManageDevicesPage.prototype.removeDevice = function (device_data) {
        var _this = this;
        var confirmPopup = this.alertCtrl.create({
            title: '',
            message: '<h4 style="color:#ffffff; text-align:center;">Are you sure you want to log out from ' + device_data.device_name + '?</h4>',
            buttons: [{
                    text: 'Cancel',
                    handler: function () { }
                }, {
                    text: 'Yes',
                    handler: function (e) {
                        var device_token = device_data.deviceToken;
                        var localapi = _this.httpservice.getApi();
                        var deviceData = {
                            "userId": device_data.userId,
                            "deviceToken": device_data.deviceToken
                        };
                        _this.httpservice.getDeviceDatas(deviceData).subscribe(function (user_data) {
                            if (user_data.length > 0) {
                                var params = { "updatedAt": new Date().toISOString(), "status": '0' };
                                _this.http.put(localapi + "/api/devices/" + user_data[0].id, params).subscribe(function (data) { device_data.status = 0; }, function (error) { console.log(error); });
                            }
                        }, function (err) {
                            console.log('err->' + err);
                        });
                    }
                }]
        });
        confirmPopup.present();
    };
    ManageDevicesPage.prototype.backtologin = function () {
        this.navCtrl.pop();
    };
    ManageDevicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-manage-devices',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\manage-devices\manage-devices.html"*/'<!--\n\n  Generated template for the ManageDevicesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>manageDevices</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n -->\n\n<ion-header clean-header class="headerColor" [isTabs]="true" [hideMenu]="true" *ngIf="request_from != \'login_page\'"></ion-header>\n\n\n\n<ion-content no-padding class="bgcolor" style="background-color: #ffffff;">\n\n	<ion-grid style="margin-bottom: 30%;">\n\n		<ion-row>\n\n			<ion-item transparent no-lines class="nopadding" style="background-color: #f0f0f0 !important;">\n\n				<div style="font-size: 1.4em;font-weight: bold;text-align: center;padding:10px;">\n\n	      	Active Devices\n\n	      </div>\n\n	    </ion-item>\n\n\n\n			<ion-col col-12 no-padding>\n\n	      <ion-list no-margin>\n\n\n\n	        <ion-item padding class="ion-item-border" *ngIf="request_from == \'login_page\'">\n\n	        	<div (click)="backtologin()">Back to Login</div>\n\n	        </ion-item>\n\n\n\n	        <ion-item padding class="ion-item-border" *ngFor="let device of device_data" [ngClass]="{\'hide_row\': device.status == 0}">\n\n	        	<div float-right style="position: absolute;top:10px;height:210px;">\n\n\n\n	            <b item-title style="white-space: normal;word-wrap: break-word;" class="item-text-wrap">{{device.device_name}}</b>\n\n	            <p class="tab-desc-size tab-desc-size1" item-subtitle>\n\n	            	{{device.deviceType}} - {{device.osVersion}}\n\n	            </p>	\n\n	          </div>\n\n\n\n	          <div  float-right  style="position:absolute;bottom:10px;right:10px; color:#CCC;">\n\n              <p (click)="removeDevice(device)">Remove</p>\n\n            </div> \n\n\n\n	        </ion-item>\n\n\n\n\n\n	      </ion-list>\n\n	    </ion-col>\n\n  	</ion-row>	\n\n  </ion-grid>	\n\n</ion-content>\n\n\n\n<ion-footer clean-footer style="background-color: #F0F0F0 !important;" [activeFootermenu]="false" [ismyCv]="true" *ngIf="request_from != \'login_page\'"></ion-footer>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\manage-devices\manage-devices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]])
    ], ManageDevicesPage);
    return ManageDevicesPage;
}());

//# sourceMappingURL=manage-devices.js.map

/***/ })

});
//# sourceMappingURL=13.js.map