webpackJsonp([9,36,38],{

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

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListPageModule", function() { return VideoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_list__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VideoListPageModule = /** @class */ (function () {
    function VideoListPageModule() {
    }
    VideoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video_list__["a" /* VideoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video_list__["a" /* VideoListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["FooterPageModule"]
            ],
        })
    ], VideoListPageModule);
    return VideoListPageModule;
}());

//# sourceMappingURL=video-list.module.js.map

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

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__ = __webpack_require__(63);
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
 * Generated class for the Video LIst page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoListPage = /** @class */ (function () {
    function VideoListPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.data = {};
        this.search = '';
        this.pageHistory = '';
        this.download_status = 'complete';
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_HttpService__["a" /* HttpService */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.file_transfer_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.path = this.file_object.dataDirectory;
        this.imgSHownOnline = this.network_check_object.getNetworkType();
        this.requested_data = this.nav_params_object.get('data');
        if (this.requested_data.source == 'education') {
            var video_ids = JSON.parse(this.requested_data.list_values);
            var video_data = [];
            var that = this;
            __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["each"](video_ids, function (value, index) {
                var subtopic_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                that.database_provider_object.fetchAllData('new_sub_topics', subtopic_query).then(function (subtopic_Data) {
                    if (subtopic_Data.length > 0) {
                        video_data.push(subtopic_Data[0]);
                    }
                });
            });
            this.data.items = video_data;
        }
        else if (this.requested_data.source == 'information') {
            var video_ids = JSON.parse(this.requested_data.list_values);
            var video_data = [];
            var that = this;
            __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["each"](video_ids, function (value, index) {
                var json_query = new Array("join information_data on information.id = information_data.id where information.id = " + value + " AND isActive = 1");
                that.database_provider_object.fetchAllData('information', json_query).then(function (info_data) {
                    if (info_data.length > 0) {
                        video_data.push(info_data[0]);
                    }
                });
            });
            this.data.info_items = video_data;
        }
        else if (this.requested_data == 'search_page') {
            this.requested_data = { 'name': 'Videos' };
            this.data.items = this.nav_params_object.get('education_data');
            this.data.info_items = this.nav_params_object.get('info_data');
        }
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            setTimeout(function () {
                _this.network_check_object.getPageAction('VideoListPage', 'start', '', localStorage.getItem('cv5usrType'));
            }, 1000);
        }
    }
    VideoListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyfavoritesPage');
    };
    VideoListPage.prototype.ionViewWillLeave = function () {
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            this.network_check_object.getPageAction('VideoListPage', 'end', '', localStorage.getItem('cv5usrType'));
        }
    };
    VideoListPage.prototype.onDetailPage = function (group) {
        var _this = this;
        if (group.subTopicType == 'video') {
            var canShare = localStorage.getItem('userProAccess');
            if (group.isPaid == 0 || canShare == 'true') {
                if (group.localUrl != '') {
                    var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + group.id);
                    this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data1) {
                        _this.navCtrl.push('VideoDetailsPage', { pageItem: group.name, data: data1[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'TabListing' });
                    });
                }
                else {
                    this.platform_object.ready().then(function () {
                        var network_type = _this.network_check_object.getNetworkType();
                        if (network_type == 'none') {
                            _this.toast_controller_object.create({
                                message: 'This video requires internet connection.',
                                position: 'bottom',
                                duration: 5000
                            }).present();
                        }
                        else {
                            var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + group.id);
                            _this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data1) {
                                _this.navCtrl.push('VideoDetailsPage', { pageItem: group.name, data: data1[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'TabListing' });
                            });
                        }
                    });
                }
            }
            else {
                var confirmPopup = this.alert_controller_object.create({
                    title: '',
                    message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                    enableBackdropDismiss: true,
                    buttons: [{
                            text: 'Upgrade',
                            handler: function () {
                                _this.navCtrl.push('UpgradePlanPage');
                            }
                        }
                    ]
                });
                confirmPopup.present();
            }
        }
        else if (group.subTopicType == 'image') {
            if (group.localUrl) {
                this.navCtrl.push('DrawonPage', { drawnurl: group.localUrl, drawOnImgTitle: group.title, drawnCopyright: group.copyrightInfo, drawnSubtopicType: group.subTopicType, video_Name: group.videoName, local_Url: 'localUrl' });
            }
            else {
                this.navCtrl.push('DrawonPage', { drawnurl: group.url, drawOnImgTitle: group.title, drawnCopyright: group.copyrightInfo, drawnSubtopicType: group.subTopicType });
            }
        }
        else if (group.subTopicType == 'document') {
            var network_type = this.network_check_object.getNetworkType();
            if (network_type == 'none') {
                this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
            }
            else {
                var ref = this.in_app_browser_object.create(group.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');
                ref.on('loadstop').subscribe(function (event) {
                    _this.screen_orientation_object.unlock();
                });
                ref.on('exit').subscribe(function (event) {
                    _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                });
            }
        }
        else if (group.subTopicType == 'other') {
            // code...
            //alert('other');
            switch (group.otherType) {
                case "link":
                    var ref = this.in_app_browser_object.create(group.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');
                    ref.on('loadstop').subscribe(function (event) {
                        _this.screen_orientation_object.unlock();
                    });
                    ref.on('exit').subscribe(function (event) {
                        _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                    });
                    break;
                case "qr_code":
                    // code...
                    this.navCtrl.push('QrcodePage', { previousPage: 'channellist', qrUrl: group.url });
                    break;
            }
        }
    };
    VideoListPage.prototype.onImageCantDownload = function (group, event) {
        event.stopPropagation();
        this.toast_service_object.mypresentToast("Only videos can be downloaded.", 2000);
    };
    VideoListPage.prototype.onFavorite = function (group, event) {
        var _this = this;
        event.stopPropagation();
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == 'none') {
                _this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
            }
            else {
                if (group.isFavourite == 0) {
                    //set isFavourite == 1
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        _this.database_provider_object.setFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Added to Favourites.");
                    });
                }
                else {
                    //set isFavourite == 0
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        //this.sqlite_sync.setFavorites(val, group.id); 
                        _this.database_provider_object.setFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    VideoListPage.prototype.onDownload = function (item, event) {
        var _this = this;
        event.stopPropagation();
        var canShare = localStorage.getItem('canDownloadAccess');
        if (item.isDownloadable == 1) {
            if (canShare == 'true') {
                this.platform_object.ready().then(function () {
                    var network_type = _this.network_check_object.getNetworkType();
                    if (network_type == 'none') {
                        _this.toast_controller_object.create({
                            message: 'You are now offline.',
                            position: 'bottom',
                            duration: 5000
                        }).present();
                    }
                    else {
                        var downloadque = localStorage.getItem('Downloadque');
                        if (downloadque == null || downloadque == '') {
                            downloadque = item.id;
                        }
                        else {
                            downloadque = downloadque + ',' + item.id;
                        }
                        localStorage.setItem('Downloadque', downloadque);
                        _this.isDownloadVideoMultiple();
                    }
                });
            }
            else {
                var confirmPopup = this.alert_controller_object.create({
                    title: '',
                    message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
                    enableBackdropDismiss: true,
                    buttons: [{
                            text: 'Upgrade',
                            handler: function () {
                                _this.navCtrl.push('UpgradePlanPage');
                            }
                        }
                    ]
                });
                confirmPopup.present();
            }
        }
        else {
            var confirmPopup = this.alert_controller_object.create({
                title: '',
                message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
                enableBackdropDismiss: true,
                buttons: ['Dismiss']
            });
            confirmPopup.present();
        }
    };
    VideoListPage.prototype.isDownloadVideoMultiple = function () {
        var _this = this;
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == 'none') {
                _this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
            }
            else {
                var que_ids = localStorage.getItem('Downloadque');
                var progress_ids_arr = que_ids.split(',').map(Number);
                //if(this.download_status == 'complete'){
                _this.download_status = 'inprogress';
                var que_ids = localStorage.getItem('Downloadque');
                var progress_ids_arr = que_ids.split(',').map(Number);
                var progress_id = progress_ids_arr[0];
                if (progress_id == 0) {
                    progress_id = progress_ids_arr[1];
                }
                var userCondition = new Array("");
                _this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (user_data) {
                    _this.userdata = user_data[0];
                });
                var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN (" + progress_id + ")");
                _this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data) {
                    var fileTransfer = _this.file_transfer_object.create();
                    var item = data[0];
                    //_.each(data,function(item,index){
                    if (item.localUrl != '') {
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem('Downloadque', que_ids);
                        _this.toast_service_object.presentToast('"' + item.name + '" already downloaded.');
                        if (que_ids == '') {
                            localStorage.setItem('Downloadque', '');
                        }
                        _this.download_status = 'complete';
                    }
                    else {
                        _this.toast_service_object.mypresentToast('Downloading : "' + item.name + '"', 2000);
                        var filename = item.url.split("/").pop();
                        var queue_data = {
                            download_url: item.url,
                            videoName: item.videoName,
                            id: item.id,
                            categoryId: item.categoryId,
                            subTopicType: item.subTopicType
                        };
                        fileTransfer.onProgress(function (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                //var perc:any = 'perc'+item.id;
                                var perc = (progressEvent.loaded / progressEvent.total) * 100;
                                _this.perc1 = perc.toFixed(1);
                                //var loader:any = 'loader'+item.id;
                                var loader = document.getElementById("progressBar_" + item.id);
                                loader.style.background = '#fff';
                                loader.innerHTML = _this.perc1 + '%';
                                //var loader1:any = 'loader1'+item.id;
                                // var loader1 = document.getElementById("myfavorites_progress");
                                // //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                                // loader1.innerHTML = 'Downloading is in progress...';
                                // loader1.style.padding = '10px';
                                // loader1.style.display = 'block';
                                if (_this.perc1 == 100) {
                                    loader.innerHTML = '';
                                    loader.style.background = '';
                                    // loader1.innerHTML = '';
                                    // loader1.style.padding = '';
                                    // loader1.style.display = '';
                                }
                            }
                        });
                        fileTransfer.download(item.url, _this.file_object.dataDirectory + 'V2CardioMedia/' + filename).then(function (entry) {
                            var video_url = 'V2CardioMedia/' + filename;
                            var querystring = new Array(" UPDATE subtopic_data SET localUrl = '" + video_url + "', downloaded = 1 WHERE id = " + item.id);
                            _this.database_provider_object.updateData(querystring);
                            var iconfilename = item.iconUrl.split("/").pop();
                            console.log('iconfilename--->' + iconfilename);
                            _this.downloadfile(item.iconUrl, iconfilename, item.id);
                            _this.downloadapi(item.id, _this.userdata.liveId);
                            _this.toast_service_object.mypresentToast('Finished downloading : "' + item.name + '"', 2000);
                            _this.download_status = 'complete';
                            var loader3 = document.getElementById("download_" + item.id);
                            loader3.classList.add("active");
                            if (item.downloaded == 0)
                                item.downloaded = 1;
                            _this.download_status = 'complete';
                            //this.toast_dismiss();
                        }, function (error) {
                            _this.toast_service_object.presentToast("Download failed! please try again.");
                        });
                        que_ids = localStorage.getItem('Downloadque');
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem('Downloadque', que_ids);
                        _this.download_status = 'complete';
                    }
                    if (que_ids != '') {
                        _this.isDownloadVideoMultiple();
                    }
                    else if (que_ids == '') {
                        localStorage.setItem('Downloadque', '');
                    }
                    //});
                }, function (e) {
                    //console.log('586 error '+JSON.stringify(e))
                });
            }
            //} 
        });
    };
    //download function
    VideoListPage.prototype.downloadfile = function (url, name, id) {
        var _this = this;
        var fileTransfer = this.file_transfer_object.create();
        fileTransfer.download(url, this.file_object.dataDirectory + 'icons/' + name).then(function (entry) {
            var icon_url = 'icons/' + name;
            var querystring = new Array(" UPDATE subtopic_data SET localIconUrl = '" + icon_url + "', downloaded = 1 WHERE id = " + id + " ");
            _this.database_provider_object.updateData(querystring);
        });
    };
    //insert query to api database
    VideoListPage.prototype.downloadapi = function (groupid, userid) {
        var post_url = this.http_service_object.getPosturl('downloads');
        this.http_object.post(post_url, { "cardiovisualUserId": userid, "subtopicId": groupid }).subscribe(function (data) {
            var response = JSON.parse(data['_body']);
            console.log('response--->' + JSON.stringify(response));
            var response_data = JSON.stringify(response);
        }, function (error) {
            console.log(error);
        });
    };
    VideoListPage.prototype.shareVideo = function (shareVideo, event) {
        event.stopPropagation();
        this.video_share_provider_object.shareSingleVideo(shareVideo);
    };
    VideoListPage.prototype.onPlaylistAdd = function (item, event) {
        event.stopPropagation();
        this.addtoplaylist(item, 'education');
    };
    VideoListPage.prototype.onInfoPlaylistAdd = function (item, event) {
        event.stopPropagation();
        this.addtoplaylist(item, 'information');
    };
    VideoListPage.prototype.onInfoDetailPage = function (group) {
        var _this = this;
        if (group.subTopicType == 'video') {
            var canShare = localStorage.getItem('userProAccess');
            if (group.isPaid == 0 || canShare == 'true') {
                if (group.localUrl != '') {
                    var querystring = new Array("join information_data on information.id = information_data.id where information.id=" + group.id);
                    this.database_provider_object.fetchAllData('information', querystring).then(function (data1) {
                        _this.navCtrl.push('InformationVideoDetailsPage', { pageItem: group.name, data: data1[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'TabListing' });
                    });
                }
                else {
                    this.platform_object.ready().then(function () {
                        var network_type = _this.network_check_object.getNetworkType();
                        if (network_type == 'none') {
                            _this.toast_controller_object.create({
                                message: 'This video requires internet connection.',
                                position: 'bottom',
                                duration: 5000
                            }).present();
                        }
                        else {
                            var querystring = new Array("join information_data on information.id = information_data.id where information.id=" + group.id);
                            _this.database_provider_object.fetchAllData('information', querystring).then(function (data1) {
                                _this.navCtrl.push('InformationVideoDetailsPage', { pageItem: group.name, data: data1[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'TabListing' });
                            });
                        }
                    });
                }
            }
            else {
                var confirmPopup = this.alert_controller_object.create({
                    title: '',
                    message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                    enableBackdropDismiss: true,
                    buttons: [{
                            text: 'Upgrade',
                            handler: function () {
                                _this.navCtrl.push('UpgradePlanPage');
                            }
                        }
                    ]
                });
                confirmPopup.present();
            }
        }
        else if (group.subTopicType == 'image') {
            if (group.localUrl) {
                this.navCtrl.push('DrawonPage', { drawnurl: group.localUrl, drawOnImgTitle: group.title, drawnCopyright: group.copyrightInfo, drawnSubtopicType: group.subTopicType, video_Name: group.videoName, local_Url: 'localUrl' });
            }
            else {
                this.navCtrl.push('DrawonPage', { drawnurl: group.url, drawOnImgTitle: group.title, drawnCopyright: group.copyrightInfo, drawnSubtopicType: group.subTopicType });
            }
        }
        else if (group.subTopicType == 'document') {
            var network_type = this.network_check_object.getNetworkType();
            if (network_type == 'none') {
                this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
            }
            else {
                var ref = this.in_app_browser_object.create(group.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');
                ref.on('loadstop').subscribe(function (event) {
                    _this.screen_orientation_object.unlock();
                });
                ref.on('exit').subscribe(function (event) {
                    _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                });
            }
        }
        else if (group.subTopicType == 'other') {
            // code...
            //alert('other');
            switch (group.otherType) {
                case "link":
                    var ref = this.in_app_browser_object.create(group.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');
                    ref.on('loadstop').subscribe(function (event) {
                        _this.screen_orientation_object.unlock();
                    });
                    ref.on('exit').subscribe(function (event) {
                        _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                    });
                    break;
                case "qr_code":
                    // code...
                    this.navCtrl.push('QrcodePage', { previousPage: 'channellist', qrUrl: group.url });
                    break;
            }
        }
    };
    VideoListPage.prototype.onInfoFavorite = function (group, event) {
        var _this = this;
        event.stopPropagation();
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == 'none') {
                _this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
            }
            else {
                if (group.isFavourite == 0) {
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        _this.database_provider_object.setinformationFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Added to Favourites.");
                    });
                }
                else {
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        _this.database_provider_object.setinformationFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    VideoListPage.prototype.onInfoDownload = function (item, event) {
        var _this = this;
        event.stopPropagation();
        var canShare = localStorage.getItem('canDownloadAccess');
        if (item.isDownloadable == 1) {
            if (canShare == 'true') {
                this.platform_object.ready().then(function () {
                    var network_type = _this.network_check_object.getNetworkType();
                    if (network_type == 'none') {
                        _this.toast_controller_object.create({
                            message: 'You are now offline.',
                            position: 'bottom',
                            duration: 5000
                        }).present();
                    }
                    else {
                        var downloadque = localStorage.getItem('Downloadque');
                        if (downloadque == null || downloadque == '') {
                            downloadque = item.id;
                        }
                        else {
                            downloadque = downloadque + ',' + item.id;
                        }
                        localStorage.setItem('Downloadque', downloadque);
                        _this.isInfoDownloadVideoMultiple();
                    }
                });
            }
            else {
                var confirmPopup = this.alert_controller_object.create({
                    title: '',
                    message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
                    enableBackdropDismiss: true,
                    buttons: [{
                            text: 'Upgrade',
                            handler: function () {
                                _this.navCtrl.push('UpgradePlanPage');
                            }
                        }
                    ]
                });
                confirmPopup.present();
            }
        }
        else {
            var confirmPopup = this.alert_controller_object.create({
                title: '',
                message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
                enableBackdropDismiss: true,
                buttons: ['Dismiss']
            });
            confirmPopup.present();
        }
    };
    VideoListPage.prototype.isInfoDownloadVideoMultiple = function () {
        var _this = this;
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == 'none') {
                _this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
            }
            else {
                var que_ids = localStorage.getItem('Downloadque');
                var progress_ids_arr = que_ids.split(',').map(Number);
                //if(this.download_status == 'complete'){
                _this.download_status = 'inprogress';
                var que_ids = localStorage.getItem('Downloadque');
                var progress_ids_arr = que_ids.split(',').map(Number);
                var progress_id = progress_ids_arr[0];
                if (progress_id == 0) {
                    progress_id = progress_ids_arr[1];
                }
                var userCondition = new Array("");
                _this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (user_data) {
                    _this.userdata = user_data[0];
                });
                var querystring = new Array("join information_data on information.id = information_data.id where information.id IN (" + progress_id + ")");
                _this.database_provider_object.fetchAllData('information', querystring).then(function (data) {
                    var fileTransfer = _this.file_transfer_object.create();
                    var item = data[0];
                    //_.each(data,function(item,index){
                    if (item.localUrl != '') {
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem('Downloadque', que_ids);
                        _this.toast_service_object.presentToast('"' + item.name + '" already downloaded.');
                        if (que_ids == '') {
                            localStorage.setItem('Downloadque', '');
                        }
                        _this.download_status = 'complete';
                    }
                    else {
                        _this.toast_service_object.mypresentToast('Downloading : "' + item.name + '"', 2000);
                        var filename = item.url.split("/").pop();
                        var queue_data = {
                            download_url: item.url,
                            videoName: item.videoName,
                            id: item.id,
                            categoryId: item.categoryId,
                            subTopicType: item.subTopicType
                        };
                        fileTransfer.onProgress(function (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                //var perc:any = 'perc'+item.id;
                                var perc = (progressEvent.loaded / progressEvent.total) * 100;
                                _this.perc1 = perc.toFixed(1);
                                var loader = document.getElementById("progressBar_" + item.id);
                                loader.style.background = '#fff';
                                loader.innerHTML = _this.perc1 + '%';
                                if (_this.perc1 == 100) {
                                    loader.innerHTML = '';
                                    loader.style.background = '';
                                }
                            }
                        });
                        fileTransfer.download(item.url, _this.file_object.dataDirectory + 'V2CardioMedia/' + filename).then(function (entry) {
                            var video_url = 'V2CardioMedia/' + filename;
                            var querystring = new Array(" UPDATE information_data SET localUrl = '" + video_url + "', downloaded = 1 WHERE id = " + item.id);
                            _this.database_provider_object.updateData(querystring);
                            var iconfilename = item.iconUrl.split("/").pop();
                            _this.Infodownloadfile(item.iconUrl, iconfilename, item.id);
                            _this.Infodownloadapi(item.id, _this.userdata.liveId);
                            _this.toast_service_object.mypresentToast('Finished downloading : "' + item.name + '"', 2000);
                            _this.download_status = 'complete';
                            var loader3 = document.getElementById("download_" + item.id);
                            loader3.classList.add("active");
                            if (item.downloaded == 0)
                                item.downloaded = 1;
                            _this.download_status = 'complete';
                        }, function (error) {
                            _this.toast_service_object.presentToast("Download failed! please try again.");
                        });
                        que_ids = localStorage.getItem('Downloadque');
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem('Downloadque', que_ids);
                        _this.download_status = 'complete';
                    }
                    if (que_ids != '') {
                        _this.isInfoDownloadVideoMultiple();
                    }
                    else if (que_ids == '') {
                        localStorage.setItem('Downloadque', '');
                    }
                    //});
                }, function (e) {
                    //console.log('586 error '+JSON.stringify(e))
                });
            }
            //} 
        });
    };
    //download function
    VideoListPage.prototype.Infodownloadfile = function (url, name, id) {
        var _this = this;
        var fileTransfer = this.file_transfer_object.create();
        fileTransfer.download(url, this.file_object.dataDirectory + 'icons/' + name).then(function (entry) {
            var icon_url = 'icons/' + name;
            var querystring = new Array(" UPDATE information_data SET localIconUrl = '" + icon_url + "', downloaded = 1 WHERE id = " + id + " ");
            _this.database_provider_object.updateData(querystring);
        });
    };
    //insert query to api database
    VideoListPage.prototype.Infodownloadapi = function (groupid, userid) {
        var post_url = this.http_service_object.getPosturl('downloads');
        this.http_object.post(post_url, { "cardiovisualUserId": userid, "informationId": groupid }).subscribe(function (data) {
            var response = JSON.parse(data['_body']);
            console.log('response--->' + JSON.stringify(response));
            var response_data = JSON.stringify(response);
        }, function (error) {
            console.log(error);
        });
    };
    VideoListPage.prototype.addtoplaylist = function (item, contentType) {
        var _this = this;
        var canShare = localStorage.getItem('userProAccess');
        //canShare = 'true';
        if (canShare == 'true') {
            var userCondition = new Array("");
            this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (user_data) {
                _this.userdata = user_data[0];
            });
            var myModalOptions = {
                enableBackdropDismiss: false
            };
            var myModal = this.modal_controllar_object.create('ModalPage', { data: 'Add to Playlist', video_data: item, type: contentType }, myModalOptions);
            myModal.present();
        }
        else {
            var confirmPopup = this.alert_controller_object.create({
                title: '',
                message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to create custom playlist.</p>',
                enableBackdropDismiss: true,
                buttons: [{
                        text: 'Upgrade',
                        handler: function () {
                            _this.navCtrl.push('UpgradePlanPage');
                        }
                    }]
            });
            confirmPopup.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], VideoListPage.prototype, "events", void 0);
    VideoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-video-list',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\video-list\video-list.html"*/' <!--\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-header clean-header class="headerColor" [isTabs]="true" [hideMenu]="true"></ion-header>\n\n\n\n<ion-content no-padding class="bgcolor" style="background-color: #ffffff;">\n\n\n\n  <ion-grid>\n\n    <ion-row >\n\n        <ion-item  no-padding style="background-color: #c64738 !important; border-bottom: 1px solid #e7e7e7;color:#FFF;">\n\n          <div style="font-size: 1.4em;font-weight: bold;text-align: center;">\n\n            {{requested_data.name}}\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-col col-12>\n\n          <ion-list no-margin *ngIf=\'data.items\'>\n\n            <ion-item tappable class="ion-item-border itemClassHeight" *ngFor="let group of data.items" style="" (click)="onDetailPage(group)" no-padding>\n\n              \n\n              <ion-thumbnail item-start no-margin class="rectanglImg">\n\n                <div class="thumbnilBackground">\n\n                  <!-- <img [src]="group.iconUrl" alt="{{group.name}}" style="width: auto !important;" /> -->\n\n                  <img *ngIf="group.localIconUrl ==\'\' || imgSHownOnline !=\'none\'" [src]="group.iconUrl" alt="{{group.name}}" class="rectangl_img" />\n\n                  <img *ngIf="group.localIconUrl !=\'\' && imgSHownOnline ==\'none\'" src="{{path}}{{group.localIconUrl}}" alt="{{group.name}}" class="rectangl_img"/>\n\n\n\n                  <span id="progressBar_{{group.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n\n                  </span>\n\n\n\n                  <div class="bottom-left">\n\n\n\n                    <i *ngIf="group.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="group.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="group.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="group.subTopicType == \'document\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <span *ngIf="group.subTopicType == \'other\'">\n\n                      <i *ngIf="group.otherType == \'link\'" class="icon-link subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                      <i *ngIf="group.otherType == \'qr_code\'" class="icon-qrcode subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    </span>\n\n\n\n                  </div>                    \n\n                </div>                   \n\n              </ion-thumbnail>\n\n\n\n              <div float-right style="position: absolute;top:10px;">\n\n                <h2 padding-left>\n\n                  <b  item-title style="white-space: normal;word-wrap: break-word;" class="item-text-wrap">{{group.name}}</b>  \n\n                </h2>\n\n\n\n                <p padding-left class="tab-desc-size tab-desc-size1" item-subtitle *ngIf="group.description != \'\' && group.description !=\'null\'">\n\n                  <span *ngIf="group.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{group.description}}</span>\n\n                  <span *ngIf="group.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{group.description.slice(0,75)}}...</span>\n\n                </p>\n\n              </div>\n\n                  \n\n              <div float-right style="position:absolute;bottom:6px;right:10px; color:#CCC; ">\n\n                <ion-icon tappable style="position:relative; margin-right:10px; right:8px; top:10px;" (click)="onDownload(group, $event)" *ngIf="group.subTopicType !== \'image\' && group.subTopicType !== \'other\' && group.subTopicType !== \'document\'" >\n\n\n\n                  <i style="font-size:1.9em;" id="download_{{group.id}}" [ngClass]="(group.localUrl != \'\')?\'active\':\'\'" class="icon-video-icons-download can-download-icon"></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon tappable style="margin-right:10px; position:relative;top:7px;margin-left: 8px;font-size:1.9em;" *ngIf="group.subTopicType == \'image\' || group.subTopicType == \'other\' || group.subTopicType == \'document\'" (click)="onImageCantDownload(\'group\', $event)">\n\n\n\n                  <i style="" class="icon-video-icons-download can-download-icon" ></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon tappable style="" (click)="onFavorite(group, $event)" class="tabsfavshare">\n\n                  <i class="icon icon-cardio-like" [ngClass]="{\'active\': group.isFavourite}" [style.color]="(group.isFavourite == 1) ? \'#c54334\' : \'#CCC\'"></i>\n\n                </ion-icon>\n\n                <ion-icon  tappable style="" (click)="shareVideo(group, $event)" class="tabsfavshare">  \n\n                  <i class="icon icon-list-share"></i>\n\n                </ion-icon>\n\n                <ion-icon class="myPlusIcon" (click)="onPlaylistAdd(group, $event)" *ngIf="group.subTopicType !== \'image\' && group.subTopicType !== \'other\' && group.subTopicType !== \'document\'"> \n\n                  <i class="icon-video-icons-share-doctor" style=""></i>\n\n                </ion-icon>\n\n              </div>\n\n              \n\n            </ion-item>\n\n          </ion-list>\n\n\n\n          <ion-list no-margin *ngIf=\'data.info_items\'>\n\n            <ion-item tappable no-padding class="ion-item-border itemClassHeight_info" *ngFor="let group of data.info_items" style="" (click)="onInfoDetailPage(group)" [ngClass]="{\'hide_row\': group.isFavourite == 0}">\n\n              \n\n              <ion-thumbnail item-start no-margin class="rectanglImg">\n\n                <div class="thumbnilBackground">\n\n                  <!-- <img [src]="group.iconUrl" alt="{{group.name}}" style="width: auto !important;" /> -->\n\n                  <img *ngIf="group.localIconUrl ==\'\' || imgSHownOnline !=\'none\'" [src]="group.iconUrl" alt="{{group.name}}" class="rectangl_img" />\n\n                  <img *ngIf="group.localIconUrl !=\'\' && imgSHownOnline ==\'none\'" src="{{path}}{{group.localIconUrl}}" alt="{{group.name}}" class="rectangl_img"/>\n\n\n\n                  <span id="progressBar_{{group.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n\n                  </span>\n\n\n\n                  <div class="bottom-left">\n\n\n\n                    <i *ngIf="group.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="group.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="group.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="group.subTopicType == \'document\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <span *ngIf="group.subTopicType == \'other\'">\n\n                      <i *ngIf="group.otherType == \'link\'" class="icon-link subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                      <i *ngIf="group.otherType == \'qr_code\'" class="icon-qrcode subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    </span>\n\n\n\n                  </div>                    \n\n                </div>                   \n\n              </ion-thumbnail>\n\n              \n\n                <div float-right style="position: absolute;top:10px;">\n\n                  <h2 padding-left>\n\n                    <b  item-title style="white-space: normal;word-wrap: break-word;" class="item-text-wrap">{{group.name}}</b>\n\n                    \n\n                  </h2>\n\n\n\n                  <p padding-left class="tab-desc-size tab-desc-size1" item-subtitle *ngIf="group.description != \'\' && group.description !=\'null\'">\n\n                    <span *ngIf="group.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{group.description}}</span>\n\n                   <span *ngIf="group.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{group.description.slice(0,75)}}...</span>\n\n                  </p>\n\n                </div>\n\n                  \n\n              <div float-right style="position:absolute;bottom:6px;right:10px; color:#CCC; ">\n\n\n\n               <ion-icon tappable style="position:relative; margin-right:10px; right:8px; top:10px;" (click)="onInfoDownload(group, $event)" *ngIf="group.subTopicType !== \'image\' && group.subTopicType !== \'other\' && group.subTopicType !== \'document\'">\n\n\n\n                  <i style="font-size:1.9em;" id="download_{{group.id}}" [ngClass]="(group.localUrl != \'\')?\'active\':\'\'" class="icon-video-icons-download can-download-icon"></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon tappable style="margin-right:10px; position:relative;top:7px;margin-left: 8px;font-size:1.9em;" *ngIf="group.subTopicType == \'image\' || group.subTopicType == \'other\' || group.subTopicType == \'document\'"  (click)="onImageCantDownload(\'group\', $event)">\n\n\n\n                  <i style="" class="icon-video-icons-download can-download-icon" ></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon tappable style="" (click)="onInfoFavorite(group, $event)" class="tabsfavshare">\n\n                  <i class="icon icon-cardio-like" [ngClass]="{\'active\': group.isFavourite}" [style.color]="(group.isFavourite == 1) ? \'#c54334\' : \'#CCC\'"></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon  tappable style="" (click)="shareVideo(group, $event)" class="tabsfavshare">  \n\n                  <i class="icon icon-list-share"></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon class="myPlusIcon" (click)="onInfoPlaylistAdd(group, $event)" *ngIf="group.subTopicType !== \'image\' && group.subTopicType !== \'other\' && group.subTopicType !== \'document\'"> \n\n                  <i class="icon-video-icons-share-doctor" style=""></i>\n\n                </ion-icon>\n\n              </div>\n\n              \n\n            </ion-item>\n\n\n\n          </ion-list>\n\n\n\n\n\n        <!-- \n\n        Our skeleton list which will be rendered when\n\n        our data have not loaded\n\n        -->\n\n        <!-- <ion-list *ngIf=\'!data.items\'>\n\n          <ion-item class="ion-item-border fakeItem" style=""  *ngFor="let i of listlength">\n\n            <ion-avatar item-left>\n\n              <skeleton-item height="95px" width="95px"></skeleton-item>\n\n            </ion-avatar>\n\n            <h2></h2>\n\n            <h3></h3>\n\n            <p></p>\n\n            <p></p>\n\n          </ion-item>   \n\n        </ion-list> -->\n\n\n\n        <!-- Our skeleton end-->\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n   \n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n<ion-footer clean-footer style="background-color: #F0F0F0 !important;" [activeFootermenu]="false"></ion-footer>'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\video-list\video-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], VideoListPage);
    return VideoListPage;
}());

//# sourceMappingURL=video-list.js.map

/***/ })

});
//# sourceMappingURL=9.js.map