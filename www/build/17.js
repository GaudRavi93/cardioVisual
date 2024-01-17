webpackJsonp([17,36],{

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

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailsPageModule", function() { return VideoDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_details__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VideoDetailsPageModule = /** @class */ (function () {
    function VideoDetailsPageModule() {
    }
    VideoDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video_details__["a" /* VideoDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video_details__["a" /* VideoDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], VideoDetailsPageModule);
    return VideoDetailsPageModule;
}());

//# sourceMappingURL=video-details.module.js.map

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
            selector: '[clean-header]',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\header\header.html"*/'<ion-navbar hideBackButton class="search-center">\n\n  <div class="Row">\n    <div class="Column1">\n      <button  ion-button menuToggle  class="menuColor" *ngIf="!hideMenu"><ion-icon class="icon-hamburger-menu" style="font-size: 20px;color: black;"></ion-icon></button>\n\n      <div left *ngIf="isTabs" tappable (click)="doGoBack()" class="customIcon" >\n        <!-- <ion-icon class="" style="font-size: 1.5em;color: black;" ios="icon-backarrow" md="md-arrow-back" class="icon-backarrow"></ion-icon> -->\n        <ion-icon class="" style="font-size:2em;color: black;" class="customIcon" name="arrow-back"></ion-icon>\n      </div>\n    </div>\n    <div class="Column2" tappable (click)="gotoUpgradePlan()" style="font-size:20px;">\n      <span #upgradeIcon tappable class="forupgradeIcon"><i class="icon-upgrade subscription-upgrade-icon "></i></span>\n      <span #upgradeText class="subscription-upgrade-text effect3d">PRO</span>\n    </div>\n    <div class="Column3">\n      <input (keyup.enter)="searchInput(search)" class="search-input" type="text" placeholder="Search CardioVisual" [(ngModel)]="search">\n      <div tappable class="icon-search search-btn" (click)="searchInput(search)" style="font-size:20px; margin-left: 15px;"></div>\n      <!-- <div tappable class="icon-mic micClass" style="font-size: 20px;" (click)="getPermission()" style=""></div> -->\n    </div>\n    \n    <ion-badge class="cart-badge" *ngIf="messageUnSeen > 0 ">{{messageUnSeen}}</ion-badge>\n    <div tappable class="Column4" (click)="bellIconClick()">\n      <span class="icon-bell bellIconClass"></span>\n    </div>\n  </div>\n</ion-navbar>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\header\header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_screen_orientation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_call_number__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_radient_settings_radient_settings__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




















var VideoDetailsPage = /** @class */ (function () {
    function VideoDetailsPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.video_url = {};
        this.playlistname = '';
        this.display_playlist = '';
        this.playlistindex = '';
        this.main_tab = "recommended_videos";
        this.sub_tab = "condition";
        this.search = '';
        this.controls = false;
        this.loop = false;
        this.preload = 'auto';
        this.nativeFs = true;
        this.currentVideo = 0;
        this.classEnded = false;
        this.offlineView = false;
        this.playPause = 'startPlay';
        this.videoViewEvent = false;
        this.rmp = null;
        this.playlistrmp = null;
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]);
        this.network_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]);
        this.social_sharing_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__providers_database_database__["a" /* DatabaseProvider */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__services_toast_service__["a" /* ToastService */]);
        this.file_transfer_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_14__ionic_native_clevertap__["a" /* CleverTap */]();
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_15__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_16__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_17__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.action_sheet_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]);
        this.call_number_object = injector.get(__WEBPACK_IMPORTED_MODULE_18__ionic_native_call_number__["a" /* CallNumber */]);
        this.radiant_setting_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_19__providers_radient_settings_radient_settings__["a" /* RadientSettingsProvider */]);
        this.menu_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]);
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        var localPath = this.file_object.dataDirectory;
        this.path = localPath.replace(/file:\/\//g, "");
        this.imgSHownOnline = this.network_check_object.getNetworkType();
        this.network_type = this.network_check_object.getNetworkType();
        if (this.network_type == 'none') {
            this.offlineView = true;
        }
        this.currentTimeInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
        this.network_status = 'connected';
        this.network_object.onDisconnect().subscribe(function () {
            _this.network_status = 'not_connected';
        });
        this.network_object.onConnect().subscribe(function () {
            _this.network_status = 'connected';
        });
        this.request_from = this.nav_params_object.get("request_from");
        this.requested_tag = this.nav_params_object.get("tag");
        this.comesfrom = this.nav_params_object.get("sendTo");
        var playlistindex = '';
        this.userrole = localStorage.getItem('cv5usrRolesubType');
        this.userTypeformenu = localStorage.getItem('cv5usrType');
        this.user_specialities = localStorage.getItem('usrSpecialities');
        var data = this.nav_params_object.get('data');
        this.data = data;
        this.video_data = data;
        this.type = this.nav_params_object.get('type');
        this.playlistname = '';
        var newTopicId = data.topicId;
        this.data.type = this.nav_params_object.get('type');
        playlistindex = this.nav_params_object.get('index');
        this.playlistindex = playlistindex;
        this.data.conditions = '';
        this.data.treatment = '';
        this.data.device = '';
        this.data.playlist = '';
        if (this.network_type != 'none') {
            this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
            setTimeout(function () {
                _this.network_check_object.getPageAction('VideoDetailsPage', 'start', '', localStorage.getItem('cv5usrType'));
            }, 1000);
        }
        var src_Source = this.file_object.dataDirectory + 'V2CardioMedia/' + this.video_data.videoName;
        this.srcSource = src_Source.replace(/file:\/\//g, "");
        var localIconUrl = this.file_object.dataDirectory + data.localIconUrl;
        this.local_IconUrl = localIconUrl.replace(/file:\/\//g, "");
    }
    VideoDetailsPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var category_id, that, condition_data, treatment_data, device_data, tag_query, query, query_2, playlistData1, videoDetail_launch, that, frmbranch, playName, brancharr, brnchlen, i, subtopics_id, arr, videoDetailLaunch1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('video details ionViewDidLoad ');
                        if (!(this.type != 'playlist' || this.type == undefined)) return [3 /*break*/, 1];
                        category_id = this.data.categoryId;
                        this.presentToast(this.data.copyrightInfo);
                        this.disscussforvideomenu = this.data;
                        this.forvideomenuItem(this.data.id, this.data.tag);
                        if (this.network_type != 'none') {
                            setTimeout(function () {
                                _this.network_check_object.getVideoTagCountAction(_this.data.tag, _this.userTypeformenu, localStorage.getItem('userliveId'), "", _this.possibleButtons, _this.data);
                            }, 2000);
                        }
                        that = this;
                        condition_data = [];
                        treatment_data = [];
                        device_data = [];
                        if (this.request_from == 'tag') {
                            tag_query = new Array("WHERE name='" + this.requested_tag + "' AND type='orientation'");
                            this.database_provider_object.fetchAllData('custom_listing', tag_query).then(function (custom_listing_data) {
                                var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                                __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value.Condition, function (value, index) {
                                    var condition_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                    that.database_provider_object.fetchAllData('new_sub_topics', condition_query).then(function (conditionData) {
                                        if (conditionData.length > 0) {
                                            condition_data.push(conditionData[0]);
                                        }
                                    });
                                });
                                _this.data.conditions = condition_data;
                                __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value.Treatment, function (value, index) {
                                    var treatment_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                    that.database_provider_object.fetchAllData('new_sub_topics', treatment_query).then(function (treatmentData) {
                                        if (treatmentData.length > 0) {
                                            treatment_data.push(treatmentData[0]);
                                        }
                                    });
                                });
                                _this.data.treatment = treatment_data;
                                __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value.Device, function (value, index) {
                                    var device_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                    that.database_provider_object.fetchAllData('new_sub_topics', device_query).then(function (deviceData) {
                                        if (deviceData.length > 0) {
                                            device_data.push(deviceData[0]);
                                        }
                                    });
                                });
                                _this.data.device = device_data;
                            });
                        }
                        else {
                            query = new Array("WHERE sub_topic_id ='" + this.data.id + "' AND type='video'");
                            query_2 = new Array("WHERE name ='" + this.data.tag + "' AND type='tag'");
                            this.database_provider_object.fetchAllData('custom_video_json', query).then(function (custom_video_json_data) {
                                if (custom_video_json_data.length > 0) {
                                    var list_json_value = JSON.parse(custom_video_json_data[0].list_values);
                                    __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value.Condition, function (value, index) {
                                        var condition_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                        that.database_provider_object.fetchAllData('new_sub_topics', condition_query).then(function (conditionData) {
                                            if (conditionData.length > 0) {
                                                condition_data.push(conditionData[0]);
                                            }
                                        });
                                    });
                                    _this.data.conditions = condition_data;
                                    __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value.Treatment, function (value, index) {
                                        var treatment_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                        that.database_provider_object.fetchAllData('new_sub_topics', treatment_query).then(function (treatmentData) {
                                            if (treatmentData.length > 0) {
                                                treatment_data.push(treatmentData[0]);
                                            }
                                        });
                                    });
                                    _this.data.treatment = treatment_data;
                                    __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value.Device, function (value, index) {
                                        var device_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                        that.database_provider_object.fetchAllData('new_sub_topics', device_query).then(function (deviceData) {
                                            if (deviceData.length > 0) {
                                                device_data.push(deviceData[0]);
                                            }
                                        });
                                    });
                                    _this.data.device = device_data;
                                }
                                else {
                                    _this.database_provider_object.fetchAllData('custom_listing', query_2).then(function (custom_listing_data) {
                                        var topic_id = _this.data.topicId;
                                        var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                                        //console.log('custom_listing list_json_value----->'+JSON.stringify(list_json_value));
                                        __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value[topic_id].Condition, function (value, index) {
                                            var condition_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                            that.database_provider_object.fetchAllData('new_sub_topics', condition_query).then(function (conditionData) {
                                                if (conditionData.length > 0) {
                                                    condition_data.push(conditionData[0]);
                                                }
                                            });
                                        });
                                        _this.data.conditions = condition_data;
                                        __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value[topic_id].Treatment, function (value, index) {
                                            var treatment_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                            that.database_provider_object.fetchAllData('new_sub_topics', treatment_query).then(function (treatmentData) {
                                                if (treatmentData.length > 0) {
                                                    treatment_data.push(treatmentData[0]);
                                                }
                                            });
                                        });
                                        _this.data.treatment = treatment_data;
                                        __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](list_json_value[topic_id].Device, function (value, index) {
                                            var device_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                            that.database_provider_object.fetchAllData('new_sub_topics', device_query).then(function (deviceData) {
                                                if (deviceData.length > 0) {
                                                    device_data.push(deviceData[0]);
                                                }
                                            });
                                        });
                                        _this.data.device = device_data;
                                    });
                                }
                            });
                        }
                        setTimeout(function () {
                            that.radiant_setting_provider_object.forPlayClickTrigger(that.video_data, that.possibleButtons);
                        }, 1000);
                        if (that.video_data.localUrl != '') {
                            this.file_object.readAsArrayBuffer(this.file_object.dataDirectory + "icons/", this.data.imageName).then(function (buffer) {
                                var imageBlob = new Blob([new Uint8Array(buffer)], { type: 'image/bmp' });
                                var imageURL = URL.createObjectURL(imageBlob);
                                _this.file_object.readAsArrayBuffer(_this.file_object.dataDirectory + "V2CardioMedia/", that.video_data.videoName).then(function (buffer) {
                                    var videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
                                    var videoURL = URL.createObjectURL(videoBlob);
                                    var playlistData = [{
                                            src: {
                                                mp4: [videoURL]
                                            },
                                            contentMetadata: {
                                                videoContentFor: 'Education',
                                                videoId: that.video_data.id,
                                                name: that.video_data.name,
                                                tag: that.video_data.tag,
                                                thumbnail: imageURL,
                                                poster: [imageURL]
                                            }
                                        }];
                                    that.radiant_setting_provider_object.setVideoSrcObject(playlistData);
                                });
                            });
                        }
                        else {
                            playlistData1 = [{
                                    src: {
                                        mp4: [that.video_data.url]
                                    },
                                    contentMetadata: {
                                        videoContentFor: 'Education',
                                        videoId: that.video_data.id,
                                        name: that.video_data.name,
                                        tag: that.video_data.tag,
                                        thumbnail: that.video_data.iconUrl,
                                        poster: [that.video_data.iconUrl]
                                    }
                                }];
                            that.radiant_setting_provider_object.setVideoSrcObject(playlistData1);
                        }
                        videoDetail_launch = {
                            "record_time": that.dtStr,
                            "record_date": that.clevertapDate,
                            "os": localStorage.getItem('getDevicePlatform'),
                            "userRoleId": localStorage.getItem('cv5userRoleId'),
                            "userType": localStorage.getItem('cv5usrType'),
                            "userEmail": localStorage.getItem('cv5userEmail'),
                            "location": localStorage.getItem('location'),
                            "specialities": localStorage.getItem('usrSpecialities'),
                            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                            "comesFrom": that.comesfrom,
                            "contentFor": "Education",
                            "videoId": that.video_data.id,
                            "videoName": that.video_data.name,
                            "videoTag": that.video_data.tag
                        };
                        that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetail_launch);
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.type == 'playlist')) return [3 /*break*/, 5];
                        that = this;
                        frmbranch = that.nav_params_object.get('frmbranch');
                        if (!(frmbranch == 'branchplaylist')) return [3 /*break*/, 2];
                        playName = that.nav_params_object.get("playListName");
                        that.playlistname = playName;
                        that.data.playlist = that.data;
                        that.share_Url = that.data.shareUrl;
                        that.forvideo_Obj = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["filter"](that.data, function (videoObj) {
                            return (videoObj.subTopicType == 'video');
                        });
                        that.totalVideos = that.data.length;
                        that.presentToast(that.data[that.currentVideo].copyrightInfo);
                        brancharr = [];
                        brnchlen = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["size"](that.forvideo_Obj);
                        for (i = 0; i < brnchlen; i++) {
                            brancharr.push({
                                src: {
                                    mp4: [that.forvideo_Obj[i].url]
                                },
                                contentMetadata: {
                                    videoContentFor: 'Education',
                                    videoId: that.forvideo_Obj[i].id,
                                    name: that.forvideo_Obj[i].name,
                                    tag: that.forvideo_Obj[i].tag,
                                    thumbnail: that.forvideo_Obj[i].iconUrl,
                                    poster: [that.forvideo_Obj[i].iconUrl]
                                }
                            });
                        }
                        setTimeout(function () {
                            that.radiant_setting_provider_object.data_set_array_of_objects_forPlaylist(brancharr);
                            var playlistRmpContainer = document.getElementById('rmpPlayer');
                            playlistRmpContainer.addEventListener('srcchanging', function () {
                                console.log('playlist has start the changing new src');
                                that.changingPlayerSource();
                            });
                        }, 1000);
                        that.display_playlist = that.data.playlist[that.playlistindex];
                        that.disscussforvideomenu = that.data.playlist[that.playlistindex];
                        that.videoIdformenu = that.data.playlist[that.playlistindex].id;
                        that.videoTagformenu = that.data.playlist[that.playlistindex].tag;
                        that.forvideomenuItem(that.videoIdformenu, that.videoTagformenu);
                        if (that.network_type != 'none') {
                            setTimeout(function () {
                                that.network_check_object.getVideoTagCountAction(that.videoTagformenu, that.userTypeformenu, localStorage.getItem('userliveId'), "", that.possibleButtons, that.disscussforvideomenu);
                            }, 2000);
                        }
                        setTimeout(function () {
                            that.radiant_setting_provider_object.forPlayClickTrigger(that.data.playlist[that.playlistindex], that.possibleButtons);
                        }, 1000);
                        return [3 /*break*/, 4];
                    case 2:
                        subtopics_id = that.data.subTopicIds;
                        that.playlistname = that.data.name;
                        that.share_Url = that.data.shareUrl;
                        that.data.playlist = that.data.items;
                        //console.log('this.data.playlist--->'+JSON.stringify(that.data.playlist));
                        that.disscussforvideomenu = that.data.playlist[that.playlistindex];
                        that.videoIdformenu = that.data.playlist[that.playlistindex].id;
                        that.videoTagformenu = that.data.playlist[that.playlistindex].tag;
                        that.forvideomenuItem(that.videoIdformenu, that.videoTagformenu);
                        if (that.network_type != 'none') {
                            setTimeout(function () {
                                that.network_check_object.getVideoTagCountAction(that.videoTagformenu, that.userTypeformenu, localStorage.getItem('userliveId'), "", _this.possibleButtons, _this.disscussforvideomenu);
                            }, 2000);
                        }
                        that.totalVideos = that.data.items.length;
                        that.presentToast(that.data.items[that.currentVideo].copyrightInfo);
                        that.forvideo_Obj = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["filter"](that.data.items, function (videoObj) {
                            return (videoObj.subTopicType == 'video');
                        });
                        return [4 /*yield*/, this.createPlaylist()];
                    case 3:
                        arr = _a.sent();
                        setTimeout(function () {
                            that.radiant_setting_provider_object.data_set_array_of_objects_forPlaylist(arr);
                            var playlistRmpContainer = document.getElementById('rmpPlayer');
                            playlistRmpContainer.addEventListener('srcchanging', function () {
                                console.log('playlist has start the changing new src');
                                that.changingPlayerSource();
                            });
                        }, 1000);
                        that.display_playlist = that.data.playlist[that.playlistindex];
                        _a.label = 4;
                    case 4:
                        videoDetailLaunch1 = {
                            "record_time": that.dtStr,
                            "record_date": that.clevertapDate,
                            "os": localStorage.getItem('getDevicePlatform'),
                            "userRoleId": localStorage.getItem('cv5userRoleId'),
                            "userType": localStorage.getItem('cv5usrType'),
                            "userEmail": localStorage.getItem('cv5userEmail'),
                            "location": localStorage.getItem('location'),
                            "specialities": localStorage.getItem('usrSpecialities'),
                            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                            "comesFrom": that.comesfrom,
                            "contentFor": "Education",
                            "videoId": that.display_playlist.id,
                            "videoName": that.display_playlist.name,
                            "videoTag": that.display_playlist.tag
                        };
                        that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetailLaunch1);
                        that.lastVideoIndex = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["findLastIndex"](that.data.playlist, {
                            subTopicType: 'video'
                        });
                        that.radiant_setting_provider_object.playListNameWithLastIndex(that.playlistname, that.lastVideoIndex, that.share_Url);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    VideoDetailsPage.prototype.createPlaylist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arr, getImageData, getVideoData, processItem;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = [];
                        getImageData = function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var imageBuffer, imageBlob, imageURL, e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, this.file_object.readAsArrayBuffer(this.file_object.dataDirectory + "icons/", data.imageName)];
                                    case 1:
                                        imageBuffer = _a.sent();
                                        imageBlob = new Blob([new Uint8Array(imageBuffer)], { type: 'image/bmp' });
                                        imageURL = URL.createObjectURL(imageBlob);
                                        return [2 /*return*/, imageURL];
                                    case 2:
                                        e_1 = _a.sent();
                                        return [2 /*return*/, data.iconUrl || data.url];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        getVideoData = function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var videoBuffer, videoBlob, videoURL, e_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, this.file_object.readAsArrayBuffer(this.file_object.dataDirectory + "V2CardioMedia/", data === null || data === void 0 ? void 0 : data.videoName)];
                                    case 1:
                                        videoBuffer = _a.sent();
                                        videoBlob = new Blob([new Uint8Array(videoBuffer)], { type: 'video/mp4' });
                                        videoURL = URL.createObjectURL(videoBlob);
                                        return [2 /*return*/, videoURL];
                                    case 2:
                                        e_2 = _a.sent();
                                        return [2 /*return*/, data.url];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        processItem = function (data, i) { return __awaiter(_this, void 0, void 0, function () {
                            var imageURL, videoURL;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, getImageData(data)];
                                    case 1:
                                        imageURL = _a.sent();
                                        return [4 /*yield*/, getVideoData(data)];
                                    case 2:
                                        videoURL = _a.sent();
                                        arr[i] = {
                                            src: {
                                                mp4: [videoURL]
                                            },
                                            contentMetadata: {
                                                videoContentFor: 'Education',
                                                videoId: data.id,
                                                name: data.name,
                                                tag: data.tag,
                                                thumbnail: imageURL,
                                                poster: [imageURL]
                                            }
                                        };
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, Promise.all(this.forvideo_Obj.map(function (data, i) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, processItem(data, i)];
                            }); }); }))];
                    case 1:
                        _a.sent();
                        this.radiant_setting_provider_object.forPlayClickTrigger(this.data.playlist[this.playlistindex], this.possibleButtons);
                        return [2 /*return*/, arr];
                }
            });
        });
    };
    VideoDetailsPage.prototype.ionViewDidEnter = function () {
        this.orientation = this.screen_orientation_object.type;
        this.screen_orientation_object.unlock();
        this.menu_controller_object.swipeEnable(false);
    };
    VideoDetailsPage.prototype.ionViewWillLeave = function () {
        this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        var network_type = this.network_check_object.getNetworkType();
        if (network_type == 'none') {
            localStorage.setItem('offline', 'yes');
        }
        else {
            localStorage.setItem('offline', 'no');
        }
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            this.network_check_object.getPageAction('VideoDetailsPage', 'end', '', localStorage.getItem('cv5usrType'));
        }
        this.menu_controller_object.swipeEnable(true);
        this.rmp = new RadiantMP('rmpPlayer1');
        this.playlistrmp = new RadiantMP('rmpPlayer');
        this.rmp.pause();
        this.playlistrmp.pause();
    };
    VideoDetailsPage.prototype.onEvent = function (event, item, e) {
        var _this = this;
        var network_type = this.network_check_object.getNetworkType();
        if (event == 'onItemClick' && e.isTrusted) {
            e.stopPropagation();
            var category_querystring = new Array(" WHERE id=" + item.categoryId);
            this.database_provider_object.fetchAllData('new_category', category_querystring).then(function (cat_data) {
                _this.category_data = cat_data;
            });
            var topic_querystring = new Array(" WHERE id=" + item.topicId);
            this.database_provider_object.fetchAllData('new_topics', topic_querystring).then(function (topic_data) {
                _this.topic_data = topic_data;
            });
            if (item.subTopicType == 'video') {
                this.videoViewEvent == true;
                this.playPause = 'startPlay';
                var canShare = localStorage.getItem('userProAccess');
                var liveId = localStorage.getItem('userliveId');
                var video_likeId = item.id;
                var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + item.id);
                this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data) {
                    if (data[0].isPaid == 0 || canShare == 'true') {
                        _this.disscussforvideomenu = data[0];
                        _this.forvideomenuItem(data[0].id, data[0].tag);
                        if (network_type != 'none') {
                            setTimeout(function () {
                                _this.network_check_object.getVideoTagCountAction(data[0].tag, _this.userTypeformenu, localStorage.getItem('userliveId'), "", _this.possibleButtons, data[0]);
                            }, 1000);
                            setTimeout(function () {
                                _this.network_check_object.forTriggersDetalsPageBACKAction("VideoDetailsPage", "forRelateditemClick");
                            }, 2000);
                        }
                        setTimeout(function () {
                            _this.radiant_setting_provider_object.forPlayClickTrigger(_this.video_data, _this.possibleButtons);
                        }, 1000);
                        if (data[0].localUrl != '') {
                            _this.video_data = data[0];
                            localStorage.setItem('offline', 'yes');
                            _this.file_object.readAsArrayBuffer(_this.file_object.dataDirectory + "icons/", data[0].imageName).then(function (buffer) {
                                var imageBlob = new Blob([new Uint8Array(buffer)], { type: 'image/bmp' });
                                var imageURL = URL.createObjectURL(imageBlob);
                                _this.file_object.readAsArrayBuffer(_this.file_object.dataDirectory + "V2CardioMedia/", data[0].videoName).then(function (buffer) {
                                    var videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
                                    var videoURL = URL.createObjectURL(videoBlob);
                                    var playlistData2 = [{
                                            src: {
                                                mp4: [videoURL]
                                            },
                                            contentMetadata: {
                                                videoContentFor: 'Education',
                                                videoId: data[0].id,
                                                name: data[0].name,
                                                tag: data[0].tag,
                                                thumbnail: imageURL,
                                                poster: [imageURL]
                                            }
                                        }];
                                    _this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData2);
                                });
                            });
                            _this.pageTop.scrollToTop();
                            _this.presentToast(data[0].copyrightInfo);
                            var params = {
                                "record_time": _this.dtStr,
                                "record_date": _this.clevertapDate,
                                "os": localStorage.getItem('getDevicePlatform'),
                                "modelNo": localStorage.getItem('modelNo'),
                                "deviceversion": localStorage.getItem('getDeviceversion'),
                                "userRoleId": localStorage.getItem('cv5userRoleId'),
                                "userType": localStorage.getItem('cv5usrType'),
                                "category_name": _this.category_data[0].name,
                                "topic_name": _this.topic_data[0].name,
                                "userEmail": localStorage.getItem('cv5userEmail'),
                                "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                "file": item.name,
                                "videoName": item.videoName,
                                "location": localStorage.getItem('location'),
                                "specialities": localStorage.getItem('usrSpecialities'),
                                "clickedVideoContentFor": "Education",
                                "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                            };
                            _this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                        }
                        else {
                            _this.platform_object.ready().then(function () {
                                var network_type = _this.network_check_object.getNetworkType();
                                if (network_type == 'none') {
                                    _this.toast_controller_object.create({
                                        message: 'This video requires internet connection.',
                                        position: 'bottom',
                                        duration: 5000
                                    }).present();
                                }
                                else {
                                    _this.video_data = data[0];
                                    localStorage.setItem('offline', 'no');
                                    var playlistData3 = [{
                                            src: {
                                                mp4: [data[0].url]
                                            },
                                            contentMetadata: {
                                                videoContentFor: 'Education',
                                                videoId: data[0].id,
                                                name: data[0].name,
                                                tag: data[0].tag,
                                                thumbnail: data[0].iconUrl,
                                                poster: [data[0].iconUrl]
                                            }
                                        }];
                                    _this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData3);
                                    var params = {
                                        "record_time": _this.dtStr,
                                        "record_date": _this.clevertapDate,
                                        "os": localStorage.getItem('getDevicePlatform'),
                                        "modelNo": localStorage.getItem('modelNo'),
                                        "deviceversion": localStorage.getItem('getDeviceversion'),
                                        "userRoleId": localStorage.getItem('cv5userRoleId'),
                                        "userType": localStorage.getItem('cv5usrType'),
                                        "category_name": _this.category_data[0].name,
                                        "topic_name": _this.topic_data[0].name,
                                        "userEmail": localStorage.getItem('cv5userEmail'),
                                        "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                        "file": item.name,
                                        "videoName": item.videoName,
                                        "location": localStorage.getItem('location'),
                                        "specialities": localStorage.getItem('usrSpecialities'),
                                        "clickedVideoContentFor": "Education",
                                        "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                                    };
                                    _this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                                }
                                _this.pageTop.scrollToTop();
                                _this.presentToast(data[0].copyrightInfo);
                            });
                        }
                    }
                    else {
                        var confirmPopup = _this.alert_controller_object.create({
                            title: '',
                            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
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
                });
            }
            else if (item.subTopicType == 'image') {
                if (item.localUrl) {
                    this.navCtrl.push('DrawonPage', { drawnurl: item.localUrl, drawOnImgTitle: item.title, drawnCopyright: item.copyrightInfo, drawnSubtopicType: item.subTopicType, video_Name: item.videoName, local_Url: 'localUrl' });
                }
                else {
                    this.navCtrl.push('DrawonPage', { drawnurl: item.url, drawOnImgTitle: item.title, drawnCopyright: item.copyrightInfo, drawnSubtopicType: item.subTopicType });
                }
            }
        }
        else if (event == 'onDownload' && e.isTrusted) {
            //e.stopPropagation();
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
                            //_.contains([1, 2, 3], 3);
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
                                    //this.navCtrl.parent.parent.push('UpgradePlanPage');
                                    _this.navCtrl.push('UpgradePlanPage');
                                }
                            }]
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
            e.stopPropagation();
        }
        else if (event == 'onFavorite' && e.isTrusted) {
            e.stopPropagation();
            this.markasFavorite(item);
        }
        else if (event == 'onShare' && e.isTrusted) {
            e.stopPropagation();
            this.video_share_provider_object.shareSingleVideo(item);
        }
        else if (event == 'onImageCantDownload' && e.isTrusted) {
            // code...
            e.stopPropagation();
            this.toast_service_object.mypresentToast("Only videos can be downloaded.", 2000);
        }
    };
    VideoDetailsPage.prototype.onPlaylistClick = function (clickedata, index) {
        var _this = this;
        if (clickedata.subTopicType == 'video') {
            this.disscussforvideomenu = clickedata;
            this.forvideomenuItem(clickedata.id, clickedata.tag);
            var network_type = this.network_check_object.getNetworkType();
            if (network_type != 'none') {
                setTimeout(function () {
                    _this.network_check_object.getVideoTagCountAction(clickedata.tag, _this.userTypeformenu, localStorage.getItem('userliveId'), "", _this.possibleButtons, clickedata);
                }, 1000);
                setTimeout(function () {
                    _this.network_check_object.forTriggersDetalsPageBACKAction("VideoDetailsPage", "forRelateditemClick");
                }, 2000);
                setTimeout(function () {
                    _this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
                }, 2500);
            }
            setTimeout(function () {
                _this.radiant_setting_provider_object.forPlayClickTrigger(clickedata, _this.possibleButtons);
            }, 1000);
            var currentIndex = this.findIndex(this.forvideo_Obj, clickedata.id);
            setTimeout(function () {
                _this.radiant_setting_provider_object.setSRCChangedforPlaylist(currentIndex);
            }, 500);
            this.display_playlist = clickedata;
            this.videoData = clickedata;
            this.pageTop.scrollToTop();
            this.presentToast(clickedata.copyrightInfo);
            var params = {
                "record_time": this.dtStr,
                "record_date": this.clevertapDate,
                "os": localStorage.getItem('getDevicePlatform'),
                "modelNo": localStorage.getItem('modelNo'),
                "deviceversion": localStorage.getItem('getDeviceversion'),
                "userRoleId": localStorage.getItem('cv5userRoleId'),
                "userType": localStorage.getItem('cv5usrType'),
                "category_name": this.category_data[0].name,
                "topic_name": this.topic_data[0].name,
                "userEmail": localStorage.getItem('cv5userEmail'),
                "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                "file": clickedata.name,
                "videoName": clickedata.videoName,
                "location": localStorage.getItem('location'),
                "specialities": localStorage.getItem('usrSpecialities'),
                "clickedVideoContentFor": "Education",
                "subSpecialities": localStorage.getItem('cv5usrRolesubType')
            };
            this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
        }
        else if (clickedata.subTopicType == 'image') {
            if (clickedata.localUrl) {
                this.navCtrl.push('DrawonPage', { drawnurl: clickedata.localUrl, drawOnImgTitle: clickedata.title, drawnCopyright: clickedata.copyrightInfo, drawnSubtopicType: clickedata.subTopicType, video_Name: clickedata.videoName, local_Url: 'localUrl' });
            }
            else {
                this.navCtrl.push('DrawonPage', { drawnurl: clickedata.url, drawOnImgTitle: clickedata.title, drawnCopyright: clickedata.copyrightInfo, drawnSubtopicType: clickedata.subTopicType });
            }
        }
    };
    VideoDetailsPage.prototype.changingPlayerSource = function () {
        var that = this;
        var tolatObj = that.data.items;
        //console.log('tolatObj--->'+JSON.stringify(tolatObj));
        that.CurrentPlaylistObject = that.radiant_setting_provider_object.getCurrentObjectFromPlaylist();
        setTimeout(function () {
            var play_data = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["filter"](tolatObj, function (forvideotitle) {
                return (forvideotitle.id == that.CurrentPlaylistObject.videoId);
            });
            that.forvideomenuItem(play_data[0].id, play_data[0].tag);
            that.disscussforvideomenu = play_data[0];
            that.display_playlist = play_data[0];
            var network_type = that.network_check_object.getNetworkType();
            if (network_type != 'none') {
                setTimeout(function () {
                    that.network_check_object.getVideoTagCountAction(play_data[0].tag, that.userTypeformenu, localStorage.getItem('userliveId'), "", that.possibleButtons, play_data[0]);
                }, 1000);
                setTimeout(function () {
                    that.network_check_object.forTriggersDetalsPageBACKAction("VideoDetailsPage", "forRelateditemClick");
                }, 2000);
                setTimeout(function () {
                    that.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
                }, 2500);
            }
            setTimeout(function () {
                that.radiant_setting_provider_object.forPlayClickTrigger(play_data[0], that.possibleButtons);
            }, 1000);
        }, 500);
    };
    VideoDetailsPage.prototype.findIndex = function (jsonData, findThis) {
        var indexNum = jsonData.findIndex(function (obj) { return obj.id == findThis; });
        return indexNum;
    };
    VideoDetailsPage.prototype.presentToast = function (msg) {
        var toast = this.toast_controller_object.create({
            message: msg,
            //duration: 3000,
            duration: 1500,
            //position: 'top'
            position: 'middle'
        });
        toast.present();
    };
    VideoDetailsPage.prototype.shareCardio = function () {
        var _this = this;
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
                var options = {
                    message: 'Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
                    subject: 'Download CardioVisual',
                    files: [],
                    url: localStorage.getItem('isLinkSet'),
                    chooserTitle: '' // Android only, you can override the default share sheet title 
                };
                _this.social_sharing_object.shareWithOptions(options);
            }
            if (localStorage.getItem('ratingDialogShown') == null || localStorage.getItem('ratingDialogShown') == 'null' || localStorage.getItem('ratingDialogShown') == "") {
                _this.http_service_object.showRateDialogueBox();
                localStorage.setItem('ratingDialogShown', 'true');
            }
        });
    };
    VideoDetailsPage.prototype.shareVideo = function (id, url, name, description) {
        //any member can share the video
        var _this = this;
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
                var options1 = {
                    message: name + ' - ' + description + '.Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
                    files: [],
                    url: url,
                    chooserTitle: 'Share ' + name //'' // Android only, you can override the default share sheet title 
                };
                var params = {
                    "record_time": _this.dtStr,
                    "record_date": _this.clevertapDate,
                    "os": localStorage.getItem('getDevicePlatform'),
                    "userRoleId": localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "userEmail": localStorage.getItem('cv5userEmail'),
                    "Identity": localStorage.getItem('userIdentity'),
                    "videoName": name,
                    "videoId": id,
                    "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                    "location": localStorage.getItem('location'),
                    "specialities": localStorage.getItem('usrSpecialities'),
                    "shareVideoContentFor": 'Education',
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                };
                _this.clevertap_object.recordEventWithNameAndProps("sharedVideo", params); // 
                _this.social_sharing_object.shareWithOptions(options1);
            }
        });
    };
    VideoDetailsPage.prototype.setFavoriteFromBar = function (group) {
        var _this = this;
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
                        _this.database_provider_object.setFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    VideoDetailsPage.prototype.markasFavorite = function (group) {
        var _this = this;
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
                        _this.database_provider_object.setFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    VideoDetailsPage.prototype.isDownloadVideoMultiple = function () {
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
                progress_ids_arr = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["uniq"](progress_ids_arr);
                que_ids = progress_ids_arr.toString();
                localStorage.setItem('Downloadque', que_ids);
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
                        __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](new_ids_arr, function (value, key) {
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
                    }
                    else {
                        _this.toast_service_object.mypresentToast('Downloading : "' + item.name + '"', 2000);
                        _this.video_share_provider_object.downloadVideo(item, 'Education');
                        var filename = item.videoName;
                        var queue_data = {
                            download_url: item.url,
                            videoName: item.videoName,
                            id: item.id,
                            categoryId: item.categoryId,
                            subTopicType: item.subTopicType
                        };
                        fileTransfer.onProgress(function (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                _this.isDownloading = true;
                                //var perc:any = 'perc'+item.id;
                                var perc = (progressEvent.loaded / progressEvent.total) * 100;
                                _this.perc1 = perc.toFixed(1);
                                var loader = document.getElementById("progressBar_detail_" + item.id);
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
                            var querystring = new Array(" UPDATE subtopic_data SET localUrl = '" + video_url + "', downloaded = 1 WHERE id = " + item.id);
                            _this.database_provider_object.updateData(querystring);
                            var iconfilename = item.iconUrl.split("/").pop();
                            //console.log('iconfilename--->'+iconfilename);
                            _this.downloadfile(item.iconUrl, iconfilename, item.id);
                            _this.downloadapi(item.id, _this.userdata.liveId);
                            _this.toast_service_object.mypresentToast('Finished downloading : "' + item.name + '"', 2000);
                            var loader3 = document.getElementById("download_" + item.id);
                            loader3.classList.add("active");
                            if (item.downloaded == 0)
                                item.downloaded = 1;
                        }, function (error) {
                            _this.toast_service_object.presentToast("Download failed! please try again.");
                            //alert('error '+JSON.stringify(error));
                        });
                        que_ids = localStorage.getItem('Downloadque');
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem('Downloadque', que_ids);
                    }
                    if (que_ids != '') {
                        _this.isDownloadVideoMultiple();
                    }
                    else if (que_ids == '') {
                        localStorage.setItem('Downloadque', '');
                    }
                    //});
                }, function (e) {
                    //alert('586 error '+JSON.stringify(e))
                });
            }
        });
    };
    //download function
    VideoDetailsPage.prototype.downloadfile = function (url, name, id) {
        var _this = this;
        var fileTransfer = this.file_transfer_object.create();
        fileTransfer.download(url, this.file_object.dataDirectory + 'icons/' + name).then(function (entry) {
            var icon_url = 'icons/' + name;
            var querystring = new Array(" UPDATE subtopic_data SET localIconUrl = '" + icon_url + "', downloaded = 1 WHERE id = " + id + " ");
            _this.database_provider_object.updateData(querystring);
        });
    };
    //insert query to api database
    VideoDetailsPage.prototype.downloadapi = function (groupid, userid) {
        var post_url = this.http_service_object.getPosturl('downloads');
        this.http_object.post(post_url, { "cardiovisualUserId": userid, "subtopicId": groupid }).subscribe(function (data) {
            var response = JSON.parse(data['_body']);
            var response_data = JSON.stringify(response);
        }, function (error) {
            //alert("Live Api error" + error);
            console.log(error);
        });
    };
    /*  qnaSite(video_data){
        this.platform_object.ready().then(() => {
    
          var network_type = this.network_check_object.getNetworkType();
          if(network_type == 'none'){
    
            this.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();
    
          } else {
    
            if(video_data.forum_tags == undefined || video_data.forum_tags == 'undefined'){
              var forum_tags = video_data.slug;
            }else{
              var forum_tags = video_data.forum_tags;
            }
            const myModalOptions: ModalOptions = {
              enableBackdropDismiss: false
            };
    
            this.storage_object.get('user_logged_in').then((val) => {
    
              if(val == 0 || val == null){
    
                this.toast_controller_object.create({
                  message: 'Please Login',
                  position: 'bottom',
                  duration: 2000
                }).present();
    
              }else{
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
                      console.log(data);
                      });
    
                      myModal.onWillDismiss((data) => {
                      console.log("I'm about to dismiss");
                      //alert("I'm about to dismiss");
                      console.log(data);
                      });
                    }else{
                      this.redirectToForumDashboard({'email': email, 'username': username, 'first_time': 'no', 'forum_tags' : forum_tags, 'user_type':'Doctor'});
                    }
              }
    
              //console.log('onboardingImgs-->'+JSON.stringify(this.onboardingImgs));
              }, err => {
              console.log('err->'+err);
              //alert(err);
              });
              }
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
        "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
        "location":localStorage.getItem('location'),
        "specialities":localStorage.getItem('usrSpecialities'),
        "subSpecialities": localStorage.getItem('cv5usrRolesubType')
        };
    
        //alert('params-->'+JSON.stringify(params));
        this.clevertap_object.recordEventWithNameAndProps("openedForum",params);
    
        var text_arr =[object.username, object.email, object.first_time, object.forum_tags];
        var text = JSON.stringify(text_arr);
        //var text = 'abhishek#*#abbhishek.chavan+1@oneleap.in#*#no';//+object.email+'#*#'+object.first_time;
        var encode_string = window.btoa(text);
        if(object.user_type == 'Patient'){
            var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
            
          }else{
            var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
          }
      }*/
    VideoDetailsPage.prototype.isDownloadVideoFromBar = function (group) {
        var _this = this;
        var canShare = localStorage.getItem('canDownloadAccess');
        if (group.isDownloadable == 0) {
            var confirmPopup = this.alert_controller_object.create({
                title: '',
                message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
                enableBackdropDismiss: true,
                buttons: ['Dismiss']
            });
            confirmPopup.present();
        }
        else {
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
                        var querystring = new Array("WHERE id = " + group.id);
                        _this.database_provider_object.fetchAllData('subtopic_data', querystring).then(function (data) {
                            //console.log('data download --->'+JSON.stringify(data));
                            //alert('data download --->'+JSON.stringify(data));
                            _this.download_count = data;
                            if (data[0].localUrl != '') {
                                _this.toast_service_object.presentToast(group.name + " already downloaded!");
                            }
                            else {
                                //this.platform_object.ready().then(() => {
                                var names = new Array("");
                                _this.database_provider_object.fetchAllData('new_user_info', names).then(function (data) {
                                    _this.userdata = data[0];
                                    if (data.length > 0) {
                                        // alert(JSON.stringify(this.userdata));
                                        var fileTransfer = _this.file_transfer_object.create();
                                        //downlad video
                                        var filename = group.url.split("/").pop();
                                        _this.toast_service_object.mypresentToast('Downloading : "' + group.name + '"', 2000);
                                        _this.video_share_provider_object.downloadVideo(group, 'Education');
                                        fileTransfer.onProgress(function (progressEvent) {
                                            if (progressEvent.lengthComputable) {
                                                var perc = (progressEvent.loaded / progressEvent.total) * 100;
                                                _this.perc1 = perc.toFixed(1);
                                                // //console.log(perc);
                                                var loader = document.getElementById("progressBar_detail");
                                                loader.style.background = '#fff';
                                                loader.innerHTML = _this.perc1 + '%';
                                                if (_this.perc1 == 100) {
                                                    loader.innerHTML = '';
                                                    //loader1.innerHTML = '';
                                                }
                                            }
                                        });
                                        fileTransfer.download(group.url, _this.file_object.dataDirectory + 'V2CardioMedia/' + filename).then(function (entry) {
                                            var video_url = 'V2CardioMedia/' + filename;
                                            var querystring = new Array(" UPDATE subtopic_data SET localUrl = '" + video_url + "', downloaded = 1 WHERE id = " + group.id + " ");
                                            _this.database_provider_object.updateData(querystring);
                                            var iconfilename = group.iconUrl.split("/").pop();
                                            //download video icon
                                            _this.downloadfile(group.iconUrl, iconfilename, group.id);
                                            //insert into live server 
                                            _this.downloadapi(group.id, _this.userdata.liveId);
                                            _this.toast_service_object.mypresentToast('Finished downloading : "' + group.name + '"', 2000);
                                            var loader1 = document.getElementById("download_on_bar");
                                            loader1.style.color = '#004958';
                                            if (group.downloaded == 0) {
                                                group.downloaded = 1;
                                            }
                                        }, function (error) {
                                            //alert('download failed: ' + error);
                                            _this.toast_service_object.presentToast("Download failed! please try again.");
                                            console.log(error);
                                            //handle error
                                        });
                                    }
                                });
                                //});
                            }
                        });
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
                                //this.navCtrl.parent.parent.push('UpgradePlanPage');
                                _this.navCtrl.push('UpgradePlanPage');
                            }
                        }
                    ]
                });
                confirmPopup.present();
            }
        }
    };
    VideoDetailsPage.prototype.onCompanyUrl = function (group) {
        var _this = this;
        var url = group.sponsoredLink;
        var ref = this.in_app_browser_object.create(url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        ref.on('loadstop').subscribe(function (event) {
            _this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe(function (event) {
            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
    };
    VideoDetailsPage.prototype.videolike = function (video_likeId) {
        //alert('videolike');
        var liveId = localStorage.getItem('userliveId');
        //alert('subtopicid ---->'+JSON.stringify(video_likeId)+'liveId--->'+liveId);
        this.database_provider_object.setLikeDislikes(liveId, video_likeId, 'likes-count');
        this.toast_controller_object.create({
            message: 'video liked',
            position: 'middle',
            duration: 1000
        }).present();
    };
    VideoDetailsPage.prototype.discussClick = function (video_data) {
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
                _this.storage_object.get('user_logged_in').then(function (val) {
                    _this.http_service_object.getUserInfoByLiveId(val).subscribe(function (data) {
                        /*if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional' ){
                          this.data.discuss = [];
                          var confirmPopup = this.alert_controller_object.create({
                                              title: '',
                                              message: '<h4 style="text-align:center;"></h4><p style="text-align:center;font-weight:700;">Coming Soon...</p>',
                                              enableBackdropDismiss: true,
                                              buttons: [{
                                                text: 'Dismiss',
                                                handler: () => {
          
                                                }
                                              }]
                                            });
                          confirmPopup.present();
                        }else{*/
                        // this.http_service_object.getTagRelatedDiscussion(video_data.forum_tags).subscribe(result => {
                        //   this.data.discuss = result;
                        // });
                        var user_type = (data.userRoleId == 1) ? 'doctor' : 'patient';
                        var discuss_query_for_video = new Array("WHERE type='discuss_tab' AND sub_topic_id='" + video_data.id + "'");
                        _this.database_provider_object.fetchAllData('custom_video_json', discuss_query_for_video).then(function (discuss_data_for_video) {
                            if (discuss_data_for_video.length > 0) {
                                var list_values = JSON.parse(discuss_data_for_video[0].list_values);
                                _this.data.discuss = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["filter"](list_values, function (f_data) {
                                    if (f_data.isFor == user_type || f_data.isFor == 'all') {
                                        return f_data;
                                    }
                                });
                            }
                            else {
                                var discuss_query_for_tag = new Array("WHERE type='discuss_tab' AND name='" + video_data.forum_tags + "'");
                                _this.database_provider_object.fetchAllData('custom_listing', discuss_query_for_tag).then(function (discuss_data) {
                                    if (discuss_data.length > 0) {
                                        var list_values = JSON.parse(discuss_data[0].list_values);
                                        _this.data.discuss = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["filter"](list_values, function (f_data) {
                                            if (f_data.isFor == user_type || f_data.isFor == 'all') {
                                                return f_data;
                                            }
                                        });
                                    }
                                    else {
                                        _this.data.discuss = [];
                                    }
                                });
                            }
                        });
                        //}
                    });
                });
            }
        });
    };
    // Actionsheet start by: sanjeev 
    VideoDetailsPage.prototype.openMenu = function () {
        var actionSheet = this.action_sheet_controller_object.create({
            title: '',
            cssClass: 'action-sheets-basic-page',
            buttons: this.createButtons()
        });
        actionSheet.present();
    };
    VideoDetailsPage.prototype.createButtons = function () {
        var _this = this;
        var buttons = [];
        var _loop_1 = function (index) {
            var button = {
                text: this_1.possibleButtons[index].label,
                icon: this_1.possibleButtons[index].icon,
                role: this_1.possibleButtons[index].label,
                handler: function () {
                    //console.log('index--->'+index);
                    _this.changeMenuList(_this.possibleButtons[index].contentType, _this.possibleButtons[index].value);
                    _this.interactCleverTapActon(_this.possibleButtons[index].label, _this.possibleButtons[index].value);
                    return true;
                }
            };
            buttons.push(button);
        };
        var this_1 = this;
        for (var index in this.possibleButtons) {
            _loop_1(index);
        }
        return buttons;
    };
    //Actionsheet End
    VideoDetailsPage.prototype.openQRCodePage = function (data) {
        this.navCtrl.push('QrcodePage', { previousPage: 'videoDetails', videoqrData: data });
    };
    VideoDetailsPage.prototype.forvideomenuItem = function (videoId, videoTag) {
        var _this = this;
        var userformenu = this.userTypeformenu;
        /* for video menu query start : sanjeev */
        var videoMenuquery_3 = new Array("WHERE sub_topic_id ='" + videoId + "' AND type='videomenu'");
        var videoMenuquery_4 = new Array("WHERE name ='" + videoTag + "' AND type='videomenu'");
        this.database_provider_object.fetchAllData('custom_video_json', videoMenuquery_3).then(function (custom_video_json_data_formenu) {
            if (custom_video_json_data_formenu.length > 0) {
                var custom_video_json_forMenu = JSON.parse(custom_video_json_data_formenu[0].list_values);
                // var formenudata = _.filter(custom_video_json_forMenu,function(json_forMenu){
                //   return (json_forMenu.usertype ==  userformenu || json_forMenu.usertype == "All" );
                // });
                var formenudata = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["filter"](custom_video_json_forMenu, function (json_forMenu) {
                    return ((json_forMenu.usertype == userformenu || json_forMenu.usertype == "All") && (json_forMenu.contentFor == "education" || json_forMenu.contentFor == "All" || json_forMenu.contentFor == undefined));
                });
                if (__WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["size"](formenudata) > 2) {
                    // code...
                    _this.possibleButtons = formenudata;
                }
                else {
                    _this.possibleButtons = [
                        { "icon": "", "label": "Share App", "value": "Active", "usertype": "All", "contentType": "forshare" },
                        { "icon": "", "label": "Ask a Question", "value": "Active", "usertype": "All", "contentType": "forForumQuestion" },
                        { "icon": "", "label": "Add to My Playlist", "value": "Active", "usertype": "All", "contentType": "forAddtoplaylist" },
                        { "icon": "", "label": "Share Feedback", "value": "https://eveav.outgrow.us/Copy-of-eveav-203-1", "usertype": "All", "contentType": "webUrl" },
                        { "icon": "close", "label": "Cancel", "value": "Cancel", "usertype": "All", "contentType": "Cancel" },
                    ];
                }
                _this.removeExtraIntractionOption();
            }
            else {
                _this.database_provider_object.fetchAllData('custom_listing', videoMenuquery_4).then(function (custom_listing_data_formenu) {
                    if (custom_listing_data_formenu.length > 0) {
                        var list_json_value_forMenu = JSON.parse(custom_listing_data_formenu[0].list_values);
                        var forlistmenudata = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["filter"](list_json_value_forMenu, function (list_json_forMenu) {
                            return ((list_json_forMenu.usertype == userformenu || list_json_forMenu.usertype == "All") && (list_json_forMenu.contentFor == "education" || list_json_forMenu.contentFor == "All" || list_json_forMenu.contentFor == undefined));
                        });
                        if (__WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["size"](forlistmenudata) > 2) {
                            _this.possibleButtons = forlistmenudata;
                        }
                        else {
                            _this.possibleButtons = [
                                { "icon": "", "label": "Share App", "value": "Active", "usertype": "All", "contentType": "forshare" },
                                { "icon": "", "label": "Ask a Question", "value": "Active", "usertype": "All", "contentType": "forForumQuestion" },
                                { "icon": "", "label": "Add to My Playlist", "value": "Active", "usertype": "All", "contentType": "forAddtoplaylist" },
                                { "icon": "", "label": "Share Feedback", "value": "https://eveav.outgrow.us/Copy-of-eveav-203-1", "usertype": "All", "contentType": "webUrl" },
                                { "icon": "close", "label": "Cancel", "value": "Cancel", "usertype": "All", "contentType": "Cancel" },
                            ];
                        }
                        _this.removeExtraIntractionOption();
                    }
                    else {
                        _this.possibleButtons = [
                            { "icon": "", "label": "Share App", "value": "Active", "usertype": "All", "contentType": "forshare" },
                            { "icon": "", "label": "Ask a Question", "value": "Active", "usertype": "All", "contentType": "forForumQuestion" },
                            { "icon": "", "label": "Add to My Playlist", "value": "Active", "usertype": "All", "contentType": "forAddtoplaylist" },
                            { "icon": "", "label": "Share Feedback", "value": "https://eveav.outgrow.us/Copy-of-eveav-203-1", "usertype": "All", "contentType": "webUrl" },
                            { "icon": "close", "label": "Cancel", "value": "Cancel", "usertype": "All", "contentType": "Cancel" },
                        ];
                        _this.removeExtraIntractionOption();
                    }
                });
            }
        });
        /* for video menu query end*/
    };
    VideoDetailsPage.prototype.removeExtraIntractionOption = function () {
        var _this = this;
        if (this.possibleButtons) {
            var optionsToRemove = ['Share Your Feedback', 'Whats your Opinion', 'Quiz Yourself', 'Take a Quiz'];
            optionsToRemove.forEach(function (option) {
                var optionIdx = _this.possibleButtons.findIndex(function (val) { return val.label === option; });
                if (optionIdx !== -1) {
                    _this.possibleButtons.splice(optionIdx, 1);
                }
            });
        }
    };
    VideoDetailsPage.prototype.changeMenuList = function (type, value) {
        var _this = this;
        if (type == 'forshare') {
            this.shareCardio();
        }
        else if (type == 'forAddtoplaylist') {
            this.addtoplaylist(this.disscussforvideomenu);
        }
        else if (type == 'forForumQuestion') {
            this.onPromptForQna(this.disscussforvideomenu);
        }
        else if (type == 'forEmail') {
            this.social_sharing_object.canShareViaEmail().then(function (emailSuccess) {
                _this.social_sharing_object.shareViaEmail('', 'CardioVisual user has a question for you.', [value]).then(function (sharEmailSuccess) {
                    //alert('success -->'+JSON.stringify(sharEmailSuccess));
                }).catch(function (sharEmailError) {
                    //alert('error -->'+JSON.stringify(sharEmailError));
                });
            }).catch(function (emailError) {
                // Sharing via email is not possible
                _this.toast_service_object.presentToast("Sharing via email is not possible.");
            });
        }
        else if (type == 'forPhone') {
            this.call_number_object.callNumber(value, true).then(function (callSuccess) {
                //console.log('Launched dialer!', JSON.stringify(callSuccess));
            }).catch(function (callError) {
                //console.log('Error launching dialer', JSON.stringify(callError));
            });
        }
        else if (type == 'webUrl') {
            var ref = this.in_app_browser_object.create(value, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
            ref.on('loadstop').subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
        else if (type == 'Cancel') {
            console.log('Cancel');
        }
    };
    VideoDetailsPage.prototype.interactCleverTapActon = function (label, value) {
        var videoID = this.disscussforvideomenu.id;
        var videoTAG = this.disscussforvideomenu.tag;
        var videoNAME = this.disscussforvideomenu.name;
        var params = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "userRoleId": localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "userEmail": localStorage.getItem('cv5userEmail'),
            "Identity": localStorage.getItem('userIdentity'),
            "clickd on label": label,
            "videoName": videoNAME,
            "videoId": videoID,
            "videoTag": videoTAG,
            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
            "location": localStorage.getItem('location'),
            "specialities": localStorage.getItem('usrSpecialities'),
            "interactContentFor": 'Education',
            "subSpecialities": localStorage.getItem('cv5usrRolesubType')
        };
        //console.log('params-->'+JSON.stringify(params));
        this.clevertap_object.recordEventWithNameAndProps("clickedOninteract", params);
    };
    VideoDetailsPage.prototype.addtoplaylist = function (item) {
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
            var myModal = this.modal_controllar_object.create('ModalPage', { data: 'Add to Playlist', video_data: item, type: 'education' }, myModalOptions);
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
                    }
                ]
            });
            confirmPopup.present();
        }
    };
    VideoDetailsPage.prototype.onPromptForQna = function (video_data) {
        this.video_share_provider_object.discussPromptForProffesional(video_data, '', 'From Video Details');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], VideoDetailsPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], VideoDetailsPage.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], VideoDetailsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], VideoDetailsPage.prototype, "pageTop", void 0);
    VideoDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-video-details',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\video-details\video-details.html"*/'\n\n<ion-header clean-header  class="tabheader" [isTabs]="true"  [hideMenu]="true"></ion-header>\n\n\n\n<ion-content *ngIf="video_data != null && (video_data.subTopicType ==\'video\' || video_data.type ==\'playlist\')" style="background-color: #0f0707; "  #pageTop>\n\n\n\n  <div class="rmp-playlist-container radient-container" id="singlePlayer" *ngIf="data.type !=\'playlist\'">\n\n    <div class="">  \n\n      <div id="rmpPlayer1"></div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div class="rmp-playlist-container radient-container" id="playlistPlayer" *ngIf="data.type ==\'playlist\'">\n\n    <div class=""> \n\n      <div id="rmpPlayer"></div>\n\n    </div>\n\n  </div>\n\n\n\n  \n\n \n\n <!--Content-->\n\n    <ion-grid class="videodetailIongrid" style="" >\n\n\n\n      <ion-row *ngIf="data.type !=\'playlist\'">\n\n       <ion-col col-12 class="font_weight_400">\n\n         <span *ngIf="video_data.expiryDate !=\'null\' && currentTimeInMilliSeconds <= video_data.expiryDate" class="color_red text_align_left">NEW | </span>\n\n         <span *ngIf="video_data.sponsoredName != \'\' &&  video_data.sponsoredName !=\'null\'" class="color_red text_align_left"> {{video_data.sponsoredName}} | </span>\n\n         <span *ngIf="video_data.sponsoredLink != null && video_data.sponsoredLink != \'null\' && video_data.sponsoredLink != \'\'" class="text_align_left"><a class="font_weight_600 color_skyblue" (click)="onCompanyUrl(video_data)"><u>  More Info / Contact Company</u></a></span> \n\n       </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="data.type ==\'playlist\'">\n\n       <ion-col col-12 class="font_weight_400">\n\n         <span class="color_red text_align_left" *ngIf="display_playlist.expiryDate !=\'null\' && currentTimeInMilliSeconds <= display_playlist.expiryDate"> NEW | </span>\n\n         <span class="color_red text_align_left" *ngIf="display_playlist.sponsoredName != \'\' &&  display_playlist.sponsoredName !=\'null\'"> {{display_playlist.sponsoredName}} | </span>\n\n         <span *ngIf="display_playlist.sponsoredLink != null && display_playlist.sponsoredLink != \'null\' && display_playlist.sponsoredLink != \'\'" class="text_align_left"><a class="font_weight_600 color_skyblue" (click)="onCompanyUrl(display_playlist)"><u>  More Info / Contact Company</u></a></span> \n\n       </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col *ngIf="data.type !=\'playlist\'" class="videodetailIongridText" col-12 style="font-weight: 500;font-size: 2.3rem;padding:0 0 0 5px;"><span class="videodetailIongridText1">{{video_data.name}}</span></ion-col>\n\n\n\n       <ion-col *ngIf="data.type ==\'playlist\'" col-12 style="font-weight: 500;font-size: 2.3rem;padding:0 0 0 5px;"><span class="videodetailIongridText1">{{display_playlist.name}}</span></ion-col>\n\n      </ion-row>\n\n      <ion-row style="margin-top:3px;">\n\n        <ion-col *ngIf="data.type !=\'playlist\'" col-7>\n\n          <span *ngIf="video_data.duration != \'\'" class="videodetailIongridText2">{{video_data.duration }}</span>\n\n          <span *ngIf="video_data.duration != \'\'" style="" class="videodetailIongridText2">&nbsp;|&nbsp;</span>\n\n          <!-- <span class="videodetailIongridText2">{{ video_data.createdAt | date: \'MMM d, yyyy\' }}</span> -->\n\n          <span class="videodetailIongridText2">{{ video_data.createdAt | date: \'MMM d, yyyy\' }}&nbsp;|&nbsp;</span>\n\n          <span id="likes-count" class="likes-count videodetailIongridText2" *ngIf="!offlineView"> </span> <i class="icon-videolike selected-fav-icon new-font-icons favfont2_2" id="icon-likes-color" style="font-size: 2.5rem !important; color: #e6e6e6 !important; " (click)="videolike(video_data.id)" *ngIf="!offlineView"></i>\n\n        </ion-col>\n\n       <ion-col *ngIf="data.type ==\'playlist\'" col-4><span class="videodetailIongridText2">{{ display_playlist.createdAt | date: \'MMM d, yyyy\' }}</span></ion-col>\n\n\n\n      </ion-row>\n\n      <ion-row style="padding-top:3px;padding-bottom:3px;">\n\n        <ion-col *ngIf="data.type !=\'playlist\' && video_data.description != \'\' && video_data.description !=\'null\'" col-12><span class="videodetailIongridText2">{{ video_data.description }}</span></ion-col>\n\n       <ion-col *ngIf="data.type ==\'playlist\' && display_playlist.description != \'\' && display_playlist.description !=\'null\'" col-12><span class="videodetailIongridText2">{{ display_playlist.description }}</span></ion-col>\n\n      </ion-row>  \n\n  </ion-grid>  \n\n\n\n\n\n  <ion-grid no-padding>\n\n \n\n    <ion-row style="color: #0a798f;background-color: #F0F0F0;" class="share_row">\n\n      <ion-col  class="videoshareContent centerBoxContent" *ngIf="data.type !=\'playlist\'" style="width: 20%;padding:5px;" (click)="openQRCodePage(video_data)">\n\n       <ion-icon><i class="icon icon-list-share shareVideoFont1_8" style=""></i></ion-icon>\n\n       <span class="textSize_tab" style="font-size:1em; font-weight:420; position: relative;">Share Video</span>\n\n     </ion-col>\n\n\n\n     <ion-col  class="videoshareContent centerBoxContent" *ngIf="data.type ==\'playlist\'" style="width: 20%;padding:5px;" (click)="openQRCodePage(display_playlist)">\n\n       <ion-icon><i class="icon icon-list-share shareVideoFont1_8" style=""></i></ion-icon>\n\n       <span class="textSize_tab" style="font-size:1em; font-weight:420; position: relative;">Share Video</span>\n\n     </ion-col>\n\n\n\n\n\n     <ion-col  class="shareContent centerBoxContent" *ngIf="data.type !=\'playlist\'" style="" (tap)="addtoplaylist(video_data)">\n\n      <ion-icon><i class="icon-video-icons-share-doctor selected-fav-icon new-font-icons discussfont2_2" style="font-size: 3.5em;"></i></ion-icon>\n\n      <span class="textSize_tab" style="font-size:1em; font-weight:420;position:relative;">Add to Playlist</span>\n\n     </ion-col>\n\n\n\n     <ion-col  class="shareContent centerBoxContent" *ngIf="data.type ==\'playlist\'" style="" (tap)="addtoplaylist(display_playlist)">\n\n      <ion-icon><i class="icon-video-icons-share-doctor selected-fav-icon new-font-icons discussfont2_2"  style="font-size: 3.5em;"></i></ion-icon>\n\n      <span class="textSize_tab" style="font-size:1em; font-weight:420;position:relative;">Add to Playlist</span>\n\n     </ion-col>\n\n\n\n      <ion-col class="centerBoxContent"  *ngIf="data.type !=\'playlist\'" style="width: 20%; text-align: center;" (tap)="isDownloadVideoFromBar(video_data)">\n\n\n\n      <ion-icon><i class="downloadFont3_6 icon-video-icons-download can-download-icon new-font-icons" [style.color]="(video_data.localUrl == \'\')?\'#03829c\':\'#004958\'" id="download_on_bar" style=""></i></ion-icon>\n\n        <span class="textSize_tab" style="font-size:1em;">Download</span>\n\n        <span id="progressBar_detail" style="padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;"></span> \n\n      </ion-col>\n\n\n\n      <ion-col class="centerBoxContent"  *ngIf="data.type ==\'playlist\'" style="width: 20%; text-align: center;" (tap)="isDownloadVideoFromBar(display_playlist)">\n\n\n\n      <ion-icon><i class="downloadFont3_6 icon-video-icons-download can-download-icon new-font-icons" [style.color]="(display_playlist.localUrl == \'\')?\'#03829c\':\'#004958\'" id="download_on_bar"></i></ion-icon>\n\n        <span class="textSize_tab" style="font-size:1em; bottom:-5px; position: relative; font-weight:420;">Download</span>\n\n        <span id="progressBar_detail" style="padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;"></span> \n\n      </ion-col>\n\n\n\n\n\n      <ion-col  class="shareContent centerBoxContent" *ngIf="data.type !=\'playlist\'" style="" (tap)="setFavoriteFromBar(video_data)">\n\n      <ion-icon *ngIf="video_data.isFavourite == 0"><i  class="icon-cardio-like selected-fav-icon new-font-icons favfont2_2" style=""></i></ion-icon>\n\n    <ion-icon *ngIf="video_data.isFavourite == 1"><i  class="icon-cardio-like selected-fav-icon new-font-icons favfont2_2" style="color:#004958;"></i></ion-icon>\n\n        <span class="textSize_tab" style="font-size:1em; font-weight:420;position: relative;">Favorite</span>\n\n      </ion-col>\n\n\n\n      <ion-col  class="shareContent centerBoxContent" *ngIf="data.type ==\'playlist\'" style="" (tap)="setFavoriteFromBar(display_playlist)">\n\n      <ion-icon *ngIf="display_playlist.isFavourite == 0"><i  class="icon-cardio-like selected-fav-icon new-font-icons favfont2_2" style=""></i></ion-icon>\n\n      <ion-icon *ngIf="display_playlist.isFavourite == 1"><i  class="icon-cardio-like selected-fav-icon new-font-icons favfont2_2" style="color:#004958;"></i></ion-icon>\n\n        <span class="textSize_tab" style="font-size:1em; font-weight:420;position: relative;">Favorite</span>\n\n      </ion-col>\n\n\n\n      <ion-col class="shareContent centerBoxContent" style="" (tap)="openMenu()">\n\n        <ion-icon><span class="icon-touch-1 takeActioncss" style="font-size:2.3em;color:#c64738;"></span></ion-icon>\n\n        <span class="textSize_tab" style="color:#DD4B39; font-size:1em; font-weight:420;position: relative;">Interact</span>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n\n\n\n\n    <ion-row *ngIf="data.type != \'playlist\'">\n\n      <ion-segment [(ngModel)]="main_tab" class="main_tab">\n\n\n\n        <ion-segment-button value="recommended_videos" style="color:#FFF; background-color: #0A434E;">\n\n          <div class="segmttext" style="margin-top: 4px;"> Recommended Videos </div>\n\n        </ion-segment-button>\n\n\n\n        <!-- *ngIf="!(userrole == \'medical-device-pharma-professional\' || userrole == \'Medical Device/Pharma Professional\' || userrole == \'patient\' || userrole == \'Patient\' || userrole == \'curious-learner\' || userrole == \'Curious learner/Other\' || user_specialities ==\'Non-Healthcare Professional\' || user_specialities ==\'Healthcare Industry Professional\')" -->\n\n        <!-- <ion-segment-button value="discuss" style="color:#FFF; background-color: #03829c;" (click)="discussClick(video_data)">\n\n          <div class="segmttext" style="margin-top: 4px;"> Discuss </div>\n\n        </ion-segment-button> -->\n\n      </ion-segment>\n\n\n\n      <!-- <div id="static_download_prog" class="inner-pg-download-banner" style="color:red; text-align:center !important;margin:0;display:block;"></div> -->\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="data.type == \'playlist\'">\n\n     <ion-col col-12 no-margin no-padding>\n\n       <ion-item style="background-color: #0A434E;text-align: center;">\n\n         <h2 style="color:#FFF;">{{playlistname}} lll</h2>\n\n       </ion-item>  \n\n     </ion-col>  \n\n   </ion-row>\n\n\n\n    <div [ngSwitch]="main_tab" *ngIf="data.type != \'playlist\'">\n\n\n\n      <ion-list *ngSwitchCase="\'discuss\'" no-margin >\n\n        <ion-grid no-margin no-padding>\n\n          <ion-list no-margin>\n\n            <ion-row *ngIf="data.discuss.length > 0">\n\n              <ion-col col-12 no-padding>\n\n                <ion-list no-margin >\n\n                  <ion-item style="min-height:83px;" class="ion-item-border" *ngFor="let item of data.discuss;" (click)="onPromptForQna(item)">\n\n                    <ion-thumbnail item-left style="margin:13px 13px 0 0 !important;">\n\n                      <div class="img-overlay" style="background-color:#e30808;text-align: center;min-height: 25px !important; min-width: 25px !important;border-radius: 10%;">\n\n                        <i style="color: #fff !important; font-size: 1.6em;margin:6px;" class="icon-cardio-discuss"></i>\n\n                      </div>\n\n                    </ion-thumbnail>\n\n                    <div float-right style="position: absolute;top:10px;width:80%;">\n\n                      <b item-title style="white-space: normal;word-wrap: break-word;" class="item-text-wrap">{{item.title}}</b>\n\n                      <p class="tab-desc-size " item-subtitle>\n\n                        <span style="white-space: normal;word-wrap: break-word;">{{item.tag | uppercase}}</span>\n\n                      </p>\n\n                    </div>\n\n                    <div *ngIf="item.reply_count > 0" float-right style="color:#000;width:19%;text-align: center;border-radius:10%;background-color: #ededed;padding:5px;">{{item.reply_count}}</div>\n\n                  </ion-item>\n\n\n\n                </ion-list>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="data.discuss.length == 0">\n\n              <ion-col col-12 no-padding *ngIf="data.type != \'playlist\'">\n\n                <ion-list no-margin>\n\n                  <ion-item style="" class="noDataFound">\n\n                    <p class="noFound"> No data found </p>\n\n                  </ion-item>\n\n                </ion-list>\n\n              </ion-col>\n\n            </ion-row>  \n\n          </ion-list>  \n\n        </ion-grid> \n\n      </ion-list>\n\n\n\n\n\n      <ion-list *ngSwitchCase="\'recommended_videos\'" style="margin:0px;">\n\n        <ion-segment [(ngModel)]="sub_tab" style="background-color: #F0F0F0;" class="sub_tab">\n\n         <ion-segment-button class="condition sgmntTabFont" value="condition" style="font-size:1.4rem; background-color: #F0F0F0;">\n\n          <div class="segmttext" style="margin-top: 4px;">Condition </div>\n\n          \n\n         </ion-segment-button>\n\n         <ion-segment-button class="treatment sgmntTabFont" value="treatment" style="font-size:1.4rem; background-color: #F0F0F0;">\n\n          <div class="segmttext" style="margin-top: 4px;">Treatment </div>\n\n          \n\n         </ion-segment-button>\n\n         <ion-segment-button class="device sgmntTabFont" value="device" style="font-size:1.4rem; background-color: #F0F0F0;">\n\n          <div class="segmttext" style="margin-top: 4px;">Device </div>\n\n         </ion-segment-button>\n\n        </ion-segment>\n\n      </ion-list>\n\n    </div>\n\n\n\n\n\n    <div [ngSwitch]="sub_tab" *ngIf="main_tab == \'recommended_videos\'">\n\n      <ion-list *ngSwitchCase="\'condition\'" no-margin>\n\n        <ion-row *ngIf="data.conditions.length > 0">\n\n          <ion-col col-12 no-padding>\n\n            <ion-list no-margin >\n\n              <ion-item  *ngFor="let item of data.conditions;let i = index" (click)="onEvent(\'onItemClick\', item, $event)" class="ion-item-border" style="min-height:113px;"  no-padding>\n\n                <ion-thumbnail item-left style="margin:0px 13px 0 0 !important;" class="rectanglImg">\n\n                  <div class="thumbnilBackground">\n\n                    <!-- <img src="{{item.iconUrl}}" style="width: auto !important;"> -->\n\n                    <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline !=\'none\'" [src]="item.iconUrl" alt="{{item.name}}" style="" class="rectangl_img"/>\n\n                    <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline ==\'none\'" [src]="item.base64Image" alt="{{item.name}}" class="rectangl_img"/>\n\n\n\n                    <span id="progressBar_detail_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;"></span>\n\n\n\n                      <div class="bottom-left">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF;font-size: 25px;"></i>\n\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF;font-size: 25px; "></i>\n\n                      </div>\n\n                  </div>   \n\n                </ion-thumbnail>\n\n\n\n                <div float-right style="position: absolute;top:14px;">\n\n \n\n                  <span *ngIf="item.name.length < 51" class="item-text-wrap titleFont"><b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b></span>\n\n                  <span *ngIf="item.name.length > 50" class="item-text-wrap titleFont"><b style="white-space: normal;word-wrap: break-word;">{{item.name.slice(0,50)}}...</b></span>\n\n\n\n                  <p class="tab-desc-size" item-subtitle *ngIf="item.description != \'\' && item.description !=\'null\'">\n\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;" class="descriptionFont">{{item.description}}</span>\n\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;" class="descriptionFont">{{item.description.slice(0,75)}}...</span>\n\n                  </p>\n\n                </div>\n\n\n\n                \n\n                <div  float-right style="" class="shareIconfromBottom" style="position:absolute;bottom:5px;right:5px;">\n\n                 <ion-icon  (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'" class="shareDownloadion_icon_download">\n\n                   <i class="icon-video-icons-download can-download-icon new-font-icons" [ngClass]="(item.localUrl != \'\')?\'active\':\'non-active\'" id="download_{{item.id}}"></i>\n\n                 </ion-icon>\n\n\n\n                  <ion-icon  style="" *ngIf="item.subTopicType == \'image\'"  (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n\n\n\n                  <i style="" class="icon-video-icons-download can-download-icon new-font-icons" ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon  (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n\n                       \n\n                      <i class="icon icon-cardio-like non-active" [ngClass]="{\'active\': item.isFavourite}"></i>\n\n                    </ion-icon> \n\n                 <ion-icon  style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n\n                  <i class="icon icon-list-share non-active" ></i>\n\n                </ion-icon>\n\n               </div>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="data.conditions.length == 0">\n\n          <ion-col col-12 no-padding *ngIf="data.type != \'playlist\'">\n\n            <ion-list no-margin>\n\n              <ion-item style="" class="noDataFound">\n\n                <p class="noFound"> No data found </p>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'treatment\'" no-margin >\n\n        <ion-row *ngIf="data.treatment.length > 0">\n\n          <ion-col col-12 no-padding>\n\n            <ion-list no-margin>\n\n              <ion-item  *ngFor="let item of data.treatment;let i = index" (click)="onEvent(\'onItemClick\', item, $event)"  class="ion-item-border" style="min-height:113px;" no-padding>\n\n                <ion-thumbnail item-left style="margin:0px 13px 0 0 !important;" class="rectanglImg">\n\n                  <div class="thumbnilBackground">\n\n                  <!-- <img src="{{item.iconUrl}}" style="width: auto !important;"> -->\n\n                  <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline !=\'none\'" [src]="item.iconUrl" alt="{{item.name}}" style=""  class="rectangl_img"/>\n\n                  <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline ==\'none\'" [src]="item.base64Image" alt="{{item.name}}" class="rectangl_img"/>\n\n                    <span id="progressBar_detail_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;"></span>\n\n                    <div class="bottom-left">\n\n                    <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                   </div>\n\n                  </div> \n\n                </ion-thumbnail>\n\n\n\n                <div float-right style="position: absolute;top:14px;">\n\n\n\n                  <!-- <b item-title style="white-space: normal;word-wrap: break-word;" class="item-text-wrap">{{item.name}}</b> -->\n\n                  <span *ngIf="item.name.length < 51" class="item-text-wrap titleFont"><b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b></span>\n\n                  <span *ngIf="item.name.length > 50" class="item-text-wrap titleFont"><b style="white-space: normal;word-wrap: break-word;">{{item.name.slice(0,50)}}...</b></span>\n\n\n\n                  <p class="tab-desc-size" item-subtitle *ngIf="item.description != \'\' && item.description !=\'null\'">\n\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;" class="descriptionFont">{{item.description}}</span>\n\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;" class="descriptionFont">{{item.description.slice(0,75)}}...</span>\n\n                  </p>\n\n                </div>\n\n\n\n\n\n                <div  float-right style="" class="shareIconfromBottom" style="position:absolute;bottom:5px;right:5px;">\n\n                  <ion-icon  (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'" class="shareDownloadion_icon_download">\n\n                   <i style="" class="icon-video-icons-download can-download-icon new-font-icons" [ngClass]="(item.localUrl != \'\')?\'active\':\'non-active\'" id="download_{{item.id}}"></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon  style="" *ngIf="item.subTopicType == \'image\'"  (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n\n\n\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons" ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon  (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n\n\n\n                    <i class="icon icon-cardio-like non-active" [ngClass]="{\'active\': item.isFavourite}" [ngClass]="{\'active\': item.isFavourite}"></i>\n\n                  </ion-icon> \n\n                  <ion-icon  style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n\n                    <i class="icon icon-list-share non-active" ></i>\n\n                  </ion-icon>\n\n                </div>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n\n\n        <ion-row *ngIf="data.treatment.length == 0">\n\n          <ion-col col-12 no-padding>\n\n            <ion-list no-margin>\n\n              <ion-item style="" class="noDataFound">\n\n                <p class="noFound"> No data found </p>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'device\'" no-margin>\n\n        <ion-row *ngIf="data.device.length > 0">\n\n          <ion-col col-12 no-padding>\n\n            <ion-list no-margin>\n\n              <ion-item  *ngFor="let item of data.device;let i = index" (click)="onEvent(\'onItemClick\', item ,$event)" class="ion-item-border"  no-padding style="min-height:113px;">\n\n                <ion-thumbnail item-left style="margin:0px 13px 0 0 !important;" class="rectanglImg">\n\n                  <div class="thumbnilBackground">\n\n                   <!--  <img src="{{item.iconUrl}}" style="width: auto !important;"> -->\n\n                   <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline !=\'none\'" [src]="item.iconUrl" alt="{{item.name}}" style=""  class="rectangl_img"/>\n\n                  <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline ==\'none\'" [src]="item.base64Image" alt="{{item.name}}" class="rectangl_img"/>\n\n\n\n                      <span id="progressBar_detail_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;"></span>\n\n\n\n                      <div class="bottom-left">\n\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                      </div>\n\n                  </div>\n\n                </ion-thumbnail>\n\n\n\n                <div float-right style="position: absolute;top:13px;">\n\n\n\n                  <!-- <b item-title style="white-space: normal;word-wrap: break-word;" class="item-text-wrap">{{item.name}}</b> -->\n\n                  <span *ngIf="item.name.length < 51" class="item-text-wrap titleFont"><b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b></span>\n\n                  <span *ngIf="item.name.length > 50" class="item-text-wrap titleFont"><b style="white-space: normal;word-wrap: break-word;">{{item.name.slice(0,50)}}...</b></span>\n\n\n\n                  <p class="tab-desc-size" item-subtitle *ngIf="item.description != \'\' && item.description !=\'null\'">\n\n                   <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;" class="descriptionFont">{{item.description}}</span>\n\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;" class="descriptionFont">{{item.description.slice(0,75)}}...</span>\n\n                  </p>\n\n                </div>\n\n\n\n                <div  float-right style="" class="shareIconfromBottom" style="position:absolute;bottom:5px;right:5px;">\n\n                  <ion-icon  (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'" class="shareDownloadion_icon_download">\n\n                   <i style="" class="icon-video-icons-download can-download-icon new-font-icons " [ngClass]="(item.localUrl != \'\')?\'active\':\'non-active\'" id="download_{{item.id}}"></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon  style="" *ngIf="item.subTopicType == \'image\'"  (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n\n\n\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons" ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon  (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n\n\n\n                    <i class="icon icon-cardio-like non-active" [ngClass]="{\'active\': item.isFavourite}" [ngClass]="{\'active\': item.isFavourite}"></i>\n\n                  </ion-icon> \n\n                  <ion-icon  style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n\n                    <i class="icon icon-list-share non-active" ></i>\n\n                  </ion-icon>\n\n                </div>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="data.device.length == 0">\n\n          <ion-col col-12 no-padding>\n\n            <ion-list no-margin>\n\n              <ion-item style="" class="noDataFound">\n\n                <p class="noFound"> No data found </p>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <ion-list no-margin *ngIf="data.type == \'playlist\'">\n\n     <ion-row *ngIf="data.playlist.length > 0">\n\n       <ion-col col-12 no-padding>\n\n         <ion-list no-margin>\n\n\n\n           <ion-item  *ngFor="let item of data.playlist;let i = index" (click)="onPlaylistClick(item, i)" style="background-color: #FFF;color:#110f0f;border-bottom:1px solid #F0F0F0; min-height:112px;" no-padding>\n\n             <ion-thumbnail item-left style="margin:0px 13px 0 0 !important;" class="rectanglImg">\n\n                <div class="thumbnilBackground">\n\n                  <!-- <img src="{{item.iconUrl}}" style="width: auto !important;"> -->\n\n                  <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline !=\'none\'" [src]="item.iconUrl" alt="{{item.name}}" style="" class="rectangl_img"/>\n\n                  <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline ==\'none\'" [src]="item.base64Image" alt="{{item.name}}" class="rectangl_img"/>\n\n\n\n                    <span id="progressBar_detail_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;"></span>\n\n\n\n                    <div class="bottom-left-playlist">\n\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF;font-size: 25px;"></i>\n\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 20px;"></i>\n\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 20px;"></i>\n\n                    </div>\n\n\n\n                </div> \n\n             </ion-thumbnail>\n\n\n\n\n\n                <div float-right style="position: absolute;top:13px;">\n\n\n\n                  <!-- <b item-title style="white-space: normal;word-wrap: break-word;" class="item-text-wrap">{{item.name}}</b> -->\n\n\n\n                  <span *ngIf="item.name.length < 51" class="item-text-wrap titleFont"><b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b></span>\n\n                  <span *ngIf="item.name.length > 50" class="item-text-wrap titleFont"><b style="white-space: normal;word-wrap: break-word;">{{item.name.slice(0,50)}}...</b></span>\n\n\n\n                  <p class="tab-desc-size" item-subtitle *ngIf="item.description != \'\' && item.description !=\'null\'">\n\n                   <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;" class="descriptionFont">{{item.description}}</span>\n\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;" class="descriptionFont">{{item.description.slice(0,75)}}...</span>\n\n                  </p>\n\n                </div>\n\n\n\n                <div float-right style="position: absolute;bottom:10px;right:10px; color: #ccc;">\n\n                 <ion-icon  (click)="onEvent(\'onDownload\', item, $event)" style="margin-right:10px;" *ngIf="item.subTopicType != \'image\'">\n\n                   <i style="position:relative;top:8px;right:10px;font-size:1.9em;" class="icon-video-icons-download can-download-icon new-font-icons" [ngClass]="(item.localUrl != \'\')?\'active\':\'non-active\'"></i>\n\n                 </ion-icon>\n\n                  <ion-icon  (click)="onEvent(\'onFavorite\', item, $event)" style="margin-right:10px;">\n\n                       \n\n                      <i class="icon icon-cardio-like non-active" [ngClass]="{\'active\': item.isFavourite}" [ngClass]="{\'active\': item.isFavourite}"></i>\n\n                    </ion-icon> \n\n                 <ion-icon style="margin-right:10px;" (click)="onEvent(\'onShare\', item, $event)">\n\n                  <i class="icon icon-list-share non-active" ></i>\n\n                </ion-icon>\n\n               </div>\n\n\n\n           </ion-item>  \n\n          </ion-list>\n\n         </ion-col>\n\n      </ion-row>\n\n   </ion-list> \n\n  </ion-grid>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\video-details\video-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], VideoDetailsPage);
    return VideoDetailsPage;
}());

//# sourceMappingURL=video-details.js.map

/***/ })

});
//# sourceMappingURL=17.js.map