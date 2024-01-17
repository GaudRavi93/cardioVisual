webpackJsonp([16,36],{

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

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsNewDetailsPageModule", function() { return WhatsNewDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whats_new_details__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WhatsNewDetailsPageModule = /** @class */ (function () {
    function WhatsNewDetailsPageModule() {
    }
    WhatsNewDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__whats_new_details__["a" /* WhatsNewDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__whats_new_details__["a" /* WhatsNewDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], WhatsNewDetailsPageModule);
    return WhatsNewDetailsPageModule;
}());

//# sourceMappingURL=whats-new-details.module.js.map

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

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skeleton_item_skeleton_item__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__skeleton_item_skeleton_item__["a" /* SkeletonItemComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__skeleton_item_skeleton_item__["a" /* SkeletonItemComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkeletonItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**

  # Ionic 3 Skeleton Loader component

  ## Setup

  After clone or download this project.

  Install Ionic CLI

  ```
  $ npm install -g ionic
  ```

  Install dependencies

  ```
  $ cd <project>
  $ npm install
  ```

  Run the app on Localhost

  ```
  $ ionic serve
  ```

  See more at [Get started with Ionic](https://ionicframework.com/getting-started/)

  ## skeleton-item
  `<skeleton-item>` is the main block to build more complex skeleton-style loading screen

  ### Usage

  ```
  <skeleton-item height="50px" width="50px" rounded></skeleton-item>
  ```

  You can add CSS classes or inline CSS as normal HTML element

  ```
  <skeleton-item class="pin-image" height="50px" width="50px" rounded style="margin-bottom: 16px"></skeleton-item>
  ```

  ### Available attributes

  - {height: string} can be px or %, default value is '16px'
  - {width: string} can be px or %, default value is '100%'
  - {radius: string} set border-radius, default value is '4px'
  - {rounded} set border-radius to 999em to make rounded block when the height and width have the same value
  - {no-animated} disable animation effect

 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkeletonItemComponent = /** @class */ (function () {
    function SkeletonItemComponent() {
        this.styles = {};
    }
    SkeletonItemComponent.prototype.ngOnInit = function () {
        this.styles = {
            width: this.width ? this.width : '100%',
            height: this.height ? this.height : '16px'
        };
        if (typeof this.radius !== 'undefined' && this.radius !== '') {
            this.styles.borderRadius = this.radius;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "radius", void 0);
    SkeletonItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'skeleton-item',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\components\skeleton-item\skeleton-item.html"*/'<div [ngStyle]="styles"></div>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\components\skeleton-item\skeleton-item.html"*/
        })
    ], SkeletonItemComponent);
    return SkeletonItemComponent;
}());

//# sourceMappingURL=skeleton-item.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsNewDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_radient_settings_radient_settings__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_loading_service__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var WhatsNewDetailsPage = /** @class */ (function () {
    function WhatsNewDetailsPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.video_data = {};
        this.currentVideo = 0;
        this.display_playlist = "";
        this.playlistindex = "";
        this.playlistname = "";
        this.head_tab = "recommended_videos";
        this.category_tab = "condition";
        this.playPause = "startPlay";
        this.videoViewEvent = false;
        this.offlineView = false;
        this.rmp = null;
        this.playlistrmp = null;
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.toast_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]);
        this.social_sharing_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */]);
        this.database_provider_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__services_toast_service__["a" /* ToastService */]);
        this.file_transfer_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.modal_controllar_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.alert_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_13__ionic_native_clevertap__["a" /* CleverTap */]();
        this.screen_orientation_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.network_check_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_15__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_16__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.action_sheet_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]);
        this.call_number_object = injector.get(__WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__["a" /* CallNumber */]);
        this.menu_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_19__services_loading_service__["a" /* LoadingService */]);
        this.radiant_setting_provider_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_18__providers_radient_settings_radient_settings__["a" /* RadientSettingsProvider */]);
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
        }
        else if (this.data.source == "information") {
            this.category_tab = "expert";
        }
        this.imgSHownOnline = this.network_check_object.getNetworkType();
        if (this.imgSHownOnline != "none") {
            setTimeout(function () {
                _this.network_check_object.getPageAction("WhatsNewDetailsPage", "start", "", localStorage.getItem("cv5usrType"));
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
                that.forvideomenuItem(that.display_playlist.id, that.display_playlist.tag, that.data.source);
                if (that.imgSHownOnline != "none") {
                    that.network_check_object.forRandomVideoViewCount(localStorage.getItem("userliveId"));
                    setTimeout(function () {
                        that.network_check_object.getVideoTagCountAction(that.display_playlist.tag, that.userTypeformenu, localStorage.getItem("userliveId"), "", that.possibleButtons, that.display_playlist);
                    }, 2000);
                }
                setTimeout(function () {
                    that.radiant_setting_provider_object.forPlayClickTrigger(that.display_playlist, that.possibleButtons);
                }, 1000);
                if (typeof that.data.list_values == "string") {
                    var subtopic_ids = JSON.parse(that.data.list_values);
                }
                else {
                    var subtopic_ids = that.data.list_values;
                }
                var playlist_data = [];
                if (that.data.source == "education") {
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](subtopic_ids, function (value, index) {
                        var subtopic_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                            value +
                            " AND isActive = 1");
                        that.database_provider_object
                            .fetchAllData("new_sub_topics", subtopic_query)
                            .then(function (subtopic_Data) {
                            if (subtopic_Data.length > 0) {
                                playlist_data.push(subtopic_Data[0]);
                            }
                            that.data.playlist = playlist_data;
                            that.totalVideos = that.data.playlist.length;
                        });
                    });
                    setTimeout(function () {
                        that.presentToast(that.data.playlist[that.currentVideo].copyrightInfo, 3000);
                    }, 1500);
                }
                else if (that.data.source == "information") {
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](subtopic_ids, function (value, index) {
                        var subtopic_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                            value +
                            " AND isActive = 1");
                        that.database_provider_object
                            .fetchAllData("information", subtopic_query)
                            .then(function (subtopic_Data) {
                            if (subtopic_Data.length > 0) {
                                playlist_data.push(subtopic_Data[0]);
                            }
                            that.data.playlist = playlist_data;
                            that.totalVideos = that.data.playlist.length;
                        });
                    });
                    setTimeout(function () {
                        that.presentToast(that.data.playlist[that.currentVideo].copyrightInfo, 3000);
                    }, 1500);
                }
                break;
            case "video_detail":
                that.data.display_playlist = that.nav_params_object.get("display_data");
                that.disscussforvideomenu = that.data.display_playlist;
                that.forvideomenuItem(that.data.display_playlist.id, that.data.display_playlist.tag, that.data.source);
                if (that.imgSHownOnline != "none") {
                    that.network_check_object.forRandomVideoViewCount(localStorage.getItem("userliveId"));
                    setTimeout(function () {
                        that.network_check_object.getVideoTagCountAction(that.data.display_playlist.tag, that.userTypeformenu, localStorage.getItem("userliveId"), "", that.possibleButtons, that.data.display_playlist);
                    }, 2000);
                }
                setTimeout(function () {
                    that.radiant_setting_provider_object.forPlayClickTrigger(that.data.display_playlist, that.possibleButtons);
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
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](list_json_value.Condition, function (value, index) {
                        if (that.request_from == "splash") {
                            var condition_url = that.localapi +
                                "/api/subtopics?filter[where][isActive]=1&filter[where][id]=" +
                                value;
                            that.http_service_object
                                .fetchDataFromapi(condition_url)
                                .subscribe(function (conditionData) {
                                condition_data.push(conditionData[0]);
                            });
                        }
                        else {
                            var condition_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                value +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("new_sub_topics", condition_query)
                                .then(function (conditionData) {
                                condition_data.push(conditionData[0]);
                            });
                        }
                    });
                    that.data.conditions = condition_data;
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](list_json_value.Treatment, function (value, index) {
                        if (that.request_from == "splash") {
                            var treatment_url = that.localapi +
                                "/api/subtopics?filter[where][isActive]=1&filter[where][id]=" +
                                value;
                            that.http_service_object
                                .fetchDataFromapi(treatment_url)
                                .subscribe(function (treatmentData) {
                                treatment_data.push(treatmentData[0]);
                            });
                        }
                        else {
                            var treatment_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                value +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("new_sub_topics", treatment_query)
                                .then(function (treatmentData) {
                                treatment_data.push(treatmentData[0]);
                            });
                        }
                    });
                    that.data.treatment = treatment_data;
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](list_json_value.Device, function (value, index) {
                        if (that.request_from == "splash") {
                            var device_url = that.localapi +
                                "/api/subtopics?filter[where][isActive]=1&filter[where][id]=" +
                                value;
                            that.http_service_object
                                .fetchDataFromapi(device_url)
                                .subscribe(function (deviceData) {
                                device_data.push(deviceData[0]);
                            });
                        }
                        else {
                            var device_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                value +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("new_sub_topics", device_query)
                                .then(function (deviceData) {
                                device_data.push(deviceData[0]);
                            });
                        }
                    });
                    that.data.device = device_data;
                }
                else if (that.data.source == "information") {
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](list_json_value.Expert, function (value, index) {
                        if (that.request_from == "splash") {
                            var expert_url = that.localapi +
                                "/api/information?filter[where][isActive]=1&filter[where][id]=" +
                                value;
                            that.http_service_object
                                .fetchDataFromapi(expert_url)
                                .subscribe(function (expertData) {
                                expert_data.push(expertData[0]);
                            });
                        }
                        else {
                            var expert_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                                value +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("information", expert_query)
                                .then(function (expertData) {
                                expert_data.push(expertData[0]);
                            });
                        }
                    });
                    that.data.expert = expert_data;
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](list_json_value.Learn, function (value, index) {
                        if (that.request_from == "splash") {
                            var learn_url = that.localapi +
                                "/api/information?filter[where][isActive]=1&filter[where][id]=" +
                                value;
                            that.http_service_object
                                .fetchDataFromapi(learn_url)
                                .subscribe(function (learnData) {
                                learn_data.push(learnData[0]);
                            });
                        }
                        else {
                            var learn_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                                value +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("information", learn_query)
                                .then(function (learnData) {
                                learn_data.push(learnData[0]);
                            });
                        }
                    });
                    that.data.learn = learn_data;
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](list_json_value.Featured, function (value, index) {
                        if (that.request_from == "splash") {
                            var featured_url = that.localapi +
                                "/api/information?filter[where][isActive]=1&filter[where][id]=" +
                                value;
                            that.http_service_object
                                .fetchDataFromapi(featured_url)
                                .subscribe(function (featuredData) {
                                featured_data.push(featuredData[0]);
                            });
                        }
                        else {
                            var featured_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                                value +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("information", featured_query)
                                .then(function (featuredData) {
                                //if(deviceData.length > 0){
                                featured_data.push(featuredData[0]);
                                //}
                            });
                        }
                    });
                    that.data.featured = featured_data;
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](list_json_value.Product, function (value, index) {
                        if (that.request_from == "splash") {
                            var product_url = that.localapi +
                                "/api/information?filter[where][isActive]=1&filter[where][id]=" +
                                value;
                            that.http_service_object
                                .fetchDataFromapi(product_url)
                                .subscribe(function (productData) {
                                product_data.push(productData[0]);
                            });
                        }
                        else {
                            var product_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                                value +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("information", product_query)
                                .then(function (productData) {
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
    WhatsNewDetailsPage.prototype.ionViewDidLoad = function () {
        var that = this;
        console.log("ionViewDidLoad");
        if (that.data.type == "expert_playlist") {
            var capitalize_1 = function (s) {
                if (typeof s !== "string")
                    return "";
                return s.charAt(0).toUpperCase() + s.slice(1);
            };
            setTimeout(function () {
                that.forvideo_Obj = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["filter"](that.data.playlist, function (videoObj) {
                    return videoObj.subTopicType == "video";
                });
                var expertPlaylistarr = [];
                //var len = that.data.playlist.length;
                var len = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](that.forvideo_Obj);
                for (var i = 0; i < len; i++) {
                    expertPlaylistarr.push({
                        src: {
                            //mp4: [that.data.playlist[i].url]
                            mp4: [
                                that.forvideo_Obj[i].localUrl != ""
                                    ? (that.file_object.dataDirectory +
                                        "V2CardioMedia/" +
                                        that.forvideo_Obj[i].videoName).replace(/file:\/\//g, "")
                                    : that.forvideo_Obj[i].url,
                            ],
                        },
                        contentMetadata: {
                            videoContentFor: capitalize_1(that.data.source),
                            videoId: that.forvideo_Obj[i].id,
                            name: that.forvideo_Obj[i].name,
                            tag: that.forvideo_Obj[i].tag,
                            thumbnail: that.forvideo_Obj[i].localIconUrl != ""
                                ? (that.file_object.dataDirectory +
                                    that.forvideo_Obj[i].localIconUrl).replace(/file:\/\//g, "")
                                : that.forvideo_Obj[i].iconUrl,
                            poster: [
                                that.forvideo_Obj[i].localIconUrl != ""
                                    ? (that.file_object.dataDirectory +
                                        that.forvideo_Obj[i].localIconUrl).replace(/file:\/\//g, "")
                                    : that.forvideo_Obj[i].iconUrl,
                            ],
                        },
                    });
                }
                setTimeout(function () {
                    that.radiant_setting_provider_object.data_set_array_of_objects_forPlaylist(expertPlaylistarr);
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
                    contentFor: capitalize_1(that.data.source),
                    videoId: that.data.playlist[that.playlistindex].id,
                    videoName: that.data.playlist[that.playlistindex].name,
                    videoTag: that.data.playlist[that.playlistindex].tag,
                };
                that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetail_launch);
                that.lastVideoIndex = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["findLastIndex"](that.data.playlist, {
                    subTopicType: "video",
                });
                that.radiant_setting_provider_object.playListNameWithLastIndex(that.playlistname, that.lastVideoIndex, that.share_Url);
            }, 1000);
        }
        else if (that.data.type == "video_detail") {
            var srcSource = "";
            var local_IconUrl = "";
            if (that.request_from == "splash") {
                srcSource = that.data.display_playlist.url;
                local_IconUrl = that.data.display_playlist.iconUrl;
            }
            else {
                srcSource =
                    that.path + "V2CardioMedia/" + that.data.display_playlist.videoName;
                local_IconUrl = that.path + that.data.display_playlist.localUrl;
            }
            var capitalize_2 = function (s) {
                if (typeof s !== "string")
                    return "";
                return s.charAt(0).toUpperCase() + s.slice(1);
            };
            setTimeout(function () {
                if (that.data.display_playlist.localUrl != "") {
                    var video_Details1 = [
                        {
                            src: {
                                mp4: [srcSource],
                            },
                            contentMetadata: {
                                videoContentFor: capitalize_2(that.data.source),
                                videoId: that.data.display_playlist.id,
                                name: that.data.display_playlist.name,
                                tag: that.data.display_playlist.tag,
                                thumbnail: local_IconUrl,
                                poster: [local_IconUrl],
                            },
                        },
                    ];
                    that.radiant_setting_provider_object.setVideoSrcObject(video_Details1);
                }
                else {
                    var video_Details2 = [
                        {
                            src: {
                                mp4: [that.data.display_playlist.url],
                            },
                            contentMetadata: {
                                videoContentFor: capitalize_2(that.data.source),
                                videoId: that.data.display_playlist.id,
                                name: that.data.display_playlist.name,
                                tag: that.data.display_playlist.tag,
                                thumbnail: that.data.display_playlist.iconUrl,
                                poster: [that.data.display_playlist.iconUrl],
                            },
                        },
                    ];
                    that.radiant_setting_provider_object.setVideoSrcObject(video_Details2);
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
                    contentFor: capitalize_2(that.data.source),
                    videoId: that.data.display_playlist.id,
                    videoName: that.data.display_playlist.name,
                    videoTag: that.data.display_playlist.tag,
                };
                that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetailLaunch1);
            }, 1000);
        }
    };
    WhatsNewDetailsPage.prototype.onEvent = function (event, item, e) {
        var _this = this;
        var network_type = this.network_check_object.getNetworkType();
        if (event == "onItemClick") {
            var category_querystring = new Array(" WHERE id=" + item.categoryId);
            this.database_provider_object
                .fetchAllData("new_category", category_querystring)
                .then(function (cat_data) {
                _this.category_data = cat_data;
            });
            var topic_querystring = new Array(" WHERE id=" + item.topicId);
            this.database_provider_object
                .fetchAllData("new_topics", topic_querystring)
                .then(function (topic_data) {
                _this.topic_data = topic_data;
            });
            if (item.subTopicType == "video") {
                this.playPause = "startPlay";
                var canShare = localStorage.getItem("userProAccess");
                var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" +
                    item.id);
                this.database_provider_object
                    .fetchAllData("new_sub_topics", querystring)
                    .then(function (data) {
                    if (data[0].isPaid == 0 || canShare == "true") {
                        _this.disscussforvideomenu = data[0];
                        _this.data.display_playlist = data[0];
                        _this.forvideomenuItem(data[0].id, data[0].tag, "education");
                        if (network_type != "none") {
                            setTimeout(function () {
                                _this.network_check_object.getVideoTagCountAction(data[0].tag, _this.userTypeformenu, localStorage.getItem("userliveId"), "", _this.possibleButtons, data[0]);
                            }, 1000);
                            setTimeout(function () {
                                _this.network_check_object.forTriggersDetalsPageBACKAction("WhatsNewDetailsPage", "forRelateditemClick");
                            }, 1500);
                        }
                        setTimeout(function () {
                            _this.radiant_setting_provider_object.forPlayClickTrigger(data[0], _this.possibleButtons);
                        }, 1000);
                        if (data[0].localUrl != "") {
                            localStorage.setItem("offline", "yes");
                            var srcSource = _this.path + "V2CardioMedia/" + data[0].videoName;
                            var local_IconUrl = _this.path + data[0].localIconUrl;
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
                            _this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData2);
                            _this.pageTop.scrollToTop();
                            _this.presentToast(data[0].copyrightInfo);
                            var params = {
                                record_time: _this.dtStr,
                                record_date: _this.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                category_name: _this.category_data[0].name,
                                topic_name: _this.topic_data[0].name,
                                userEmail: localStorage.getItem("cv5userEmail"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                clickedVideoContentFor: "Education",
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            _this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                        }
                        else {
                            _this.platform_object.ready().then(function () {
                                var network_type = _this.network_check_object.getNetworkType();
                                if (network_type == "none") {
                                    _this.toast_controller_object
                                        .create({
                                        message: "This video requires internet connection.",
                                        position: "bottom",
                                        duration: 5000,
                                    })
                                        .present();
                                }
                                else {
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
                                    _this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData3);
                                    _this.pageTop.scrollToTop();
                                    _this.presentToast(data[0].copyrightInfo);
                                    var params = {
                                        record_time: _this.dtStr,
                                        record_date: _this.clevertapDate,
                                        os: localStorage.getItem("getDevicePlatform"),
                                        modelNo: localStorage.getItem("modelNo"),
                                        deviceversion: localStorage.getItem("getDeviceversion"),
                                        userRoleId: localStorage.getItem("cv5userRoleId"),
                                        userType: localStorage.getItem("cv5usrType"),
                                        category_name: _this.category_data[0].name,
                                        topic_name: _this.topic_data[0].name,
                                        userEmail: localStorage.getItem("cv5userEmail"),
                                        userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                        file: item.name,
                                        videoName: item.videoName,
                                        location: localStorage.getItem("location"),
                                        specialities: localStorage.getItem("usrSpecialities"),
                                        clickedVideoContentFor: "Education",
                                        subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                                    };
                                    _this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                                }
                            });
                        }
                    }
                    else {
                        var confirmPopup = _this.alert_controller_object.create({
                            title: "",
                            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                            enableBackdropDismiss: true,
                            buttons: [
                                {
                                    text: "Upgrade",
                                    handler: function () {
                                        _this.navCtrl.push("UpgradePlanPage");
                                    },
                                },
                            ],
                        });
                        confirmPopup.present();
                    }
                });
            }
            else if (item.subTopicType == "image") {
                if (item.localUrl) {
                    this.navCtrl.push("DrawonPage", {
                        drawnurl: item.localUrl,
                        drawOnImgTitle: item.title,
                        drawnCopyright: item.copyrightInfo,
                        drawnSubtopicType: item.subTopicType,
                        video_Name: item.videoName,
                        local_Url: "localUrl",
                    });
                }
                else {
                    this.navCtrl.push("DrawonPage", {
                        drawnurl: item.url,
                        drawOnImgTitle: item.title,
                        drawnCopyright: item.copyrightInfo,
                        drawnSubtopicType: item.subTopicType,
                    });
                }
            }
        }
        else if (event == "onDownload" && e.isTrusted) {
            var canShare = localStorage.getItem("canDownloadAccess");
            if (item.isDownloadable == 1) {
                if (canShare == "true") {
                    this.platform_object.ready().then(function () {
                        var network_type = _this.network_check_object.getNetworkType();
                        if (network_type == "none") {
                            _this.toast_controller_object
                                .create({
                                message: "You are now offline.",
                                position: "bottom",
                                duration: 5000,
                            })
                                .present();
                        }
                        else {
                            var downloadque = localStorage.getItem("Downloadque");
                            if (downloadque == null || downloadque == "") {
                                downloadque = item.id;
                            }
                            else {
                                downloadque = downloadque + "," + item.id;
                            }
                            localStorage.setItem("Downloadque", downloadque);
                            _this.isDownloadVideoMultiple("education");
                        }
                    });
                }
                else {
                    var confirmPopup = this.alert_controller_object.create({
                        title: "",
                        message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
                        enableBackdropDismiss: true,
                        buttons: [
                            {
                                text: "Upgrade",
                                handler: function () {
                                    _this.navCtrl.push("UpgradePlanPage");
                                },
                            },
                        ],
                    });
                    confirmPopup.present();
                }
            }
            else {
                var confirmPopup = this.alert_controller_object.create({
                    title: "",
                    message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
                    enableBackdropDismiss: true,
                    buttons: ["Dismiss"],
                });
                confirmPopup.present();
            }
            e.stopPropagation();
        }
        else if (event == "onFavorite" && e.isTrusted) {
            e.stopPropagation();
            this.markasFavorite(item, "education");
        }
        else if (event == "onShare" && e.isTrusted) {
            e.stopPropagation();
            this.video_share_provider_object.shareSingleVideo(item);
        }
        else if (event == "onImageCantDownload" && e.isTrusted) {
            e.stopPropagation();
            this.toast_service_object.mypresentToast("Only videos can be downloaded.", 2000);
        }
        else if (event == "onInfoItemClick" && e.isTrusted) {
            var category_querystring = new Array(" WHERE id=" + item.categoryId);
            this.database_provider_object
                .fetchAllData("new_category", category_querystring)
                .then(function (cat_data) {
                _this.category_data = cat_data;
            });
            var topic_querystring = new Array(" WHERE id=" + item.topicId);
            this.database_provider_object
                .fetchAllData("new_topics", topic_querystring)
                .then(function (topic_data) {
                _this.topic_data = topic_data;
            });
            if (item.subTopicType == "video") {
                this.playPause = "startPlay";
                var canShare = localStorage.getItem("userProAccess");
                var querystring = new Array("join information_data on information.id = information_data.id where information.id=" +
                    item.id);
                this.database_provider_object
                    .fetchAllData("information", querystring)
                    .then(function (data) {
                    if (data[0].isPaid == 0 || canShare == "true") {
                        _this.disscussforvideomenu = data[0];
                        _this.data.display_playlist = data[0];
                        _this.forvideomenuItem(data[0].id, data[0].tag, "information");
                        if (network_type != "none") {
                            setTimeout(function () {
                                _this.network_check_object.getVideoTagCountAction(data[0].tag, _this.userTypeformenu, localStorage.getItem("userliveId"), "", _this.possibleButtons, data[0]);
                            }, 1000);
                            setTimeout(function () {
                                _this.network_check_object.forTriggersDetalsPageBACKAction("WhatsNewDetailsPage", "forRelateditemClick");
                            }, 1500);
                        }
                        setTimeout(function () {
                            _this.radiant_setting_provider_object.forPlayClickTrigger(data[0], _this.possibleButtons);
                        }, 1000);
                        if (data[0].localUrl != "") {
                            localStorage.setItem("offline", "yes");
                            var srcSource = _this.path + "V2CardioMedia/" + data[0].videoName;
                            var local_IconUrl = _this.path + data[0].localIconUrl;
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
                            _this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData4);
                            _this.pageTop.scrollToTop();
                            _this.presentToast(data[0].copyrightInfo);
                            var params = {
                                record_time: _this.dtStr,
                                record_date: _this.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                category_name: _this.category_data[0].name,
                                topic_name: _this.topic_data[0].name,
                                userEmail: localStorage.getItem("cv5userEmail"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                clickedVideoContentFor: "Information",
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            _this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                        }
                        else {
                            _this.platform_object.ready().then(function () {
                                var network_type = _this.network_check_object.getNetworkType();
                                if (network_type == "none") {
                                    _this.toast_controller_object
                                        .create({
                                        message: "This video requires internet connection.",
                                        position: "bottom",
                                        duration: 5000,
                                    })
                                        .present();
                                }
                                else {
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
                                    _this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData5);
                                    _this.pageTop.scrollToTop();
                                    _this.presentToast(data[0].copyrightInfo);
                                    var params = {
                                        record_time: _this.dtStr,
                                        record_date: _this.clevertapDate,
                                        os: localStorage.getItem("getDevicePlatform"),
                                        modelNo: localStorage.getItem("modelNo"),
                                        deviceversion: localStorage.getItem("getDeviceversion"),
                                        userRoleId: localStorage.getItem("cv5userRoleId"),
                                        userType: localStorage.getItem("cv5usrType"),
                                        category_name: _this.category_data[0].name,
                                        topic_name: _this.topic_data[0].name,
                                        userEmail: localStorage.getItem("cv5userEmail"),
                                        userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                        file: item.name,
                                        videoName: item.videoName,
                                        location: localStorage.getItem("location"),
                                        specialities: localStorage.getItem("usrSpecialities"),
                                        clickedVideoContentFor: "Information",
                                        subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                                    };
                                    _this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                                }
                            });
                        }
                    }
                    else {
                        var confirmPopup = _this.alert_controller_object.create({
                            title: "",
                            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                            enableBackdropDismiss: true,
                            buttons: [
                                {
                                    text: "Upgrade",
                                    handler: function () {
                                        _this.navCtrl.push("UpgradePlanPage");
                                    },
                                },
                            ],
                        });
                        confirmPopup.present();
                    }
                });
            }
            else if (item.subTopicType == "image") {
                if (item.localUrl) {
                    this.navCtrl.push("DrawonPage", {
                        drawnurl: item.localUrl,
                        drawOnImgTitle: item.title,
                        drawnCopyright: item.copyrightInfo,
                        drawnSubtopicType: item.subTopicType,
                        video_Name: item.videoName,
                        local_Url: "localUrl",
                    });
                }
                else {
                    this.navCtrl.push("DrawonPage", {
                        drawnurl: item.url,
                        drawOnImgTitle: item.title,
                        drawnCopyright: item.copyrightInfo,
                        drawnSubtopicType: item.subTopicType,
                    });
                }
            }
        }
        else if (event == "onInfoDownload" && e.isTrusted) {
            var canShare = localStorage.getItem("canDownloadAccess");
            if (item.isDownloadable == 1) {
                if (canShare == "true") {
                    this.platform_object.ready().then(function () {
                        var network_type = _this.network_check_object.getNetworkType();
                        if (network_type == "none") {
                            _this.toast_controller_object
                                .create({
                                message: "You are now offline.",
                                position: "bottom",
                                duration: 5000,
                            })
                                .present();
                        }
                        else {
                            var downloadque = localStorage.getItem("Downloadque");
                            if (downloadque == null || downloadque == "") {
                                downloadque = item.id;
                            }
                            else {
                                downloadque = downloadque + "," + item.id;
                            }
                            localStorage.setItem("Downloadque", downloadque);
                            _this.isDownloadVideoMultiple("information");
                        }
                    });
                }
                else {
                    var confirmPopup = this.alert_controller_object.create({
                        title: "",
                        message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
                        enableBackdropDismiss: true,
                        buttons: [
                            {
                                text: "Upgrade",
                                handler: function () {
                                    _this.navCtrl.push("UpgradePlanPage");
                                },
                            },
                        ],
                    });
                    confirmPopup.present();
                }
            }
            else {
                var confirmPopup = this.alert_controller_object.create({
                    title: "",
                    message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
                    enableBackdropDismiss: true,
                    buttons: ["Dismiss"],
                });
                confirmPopup.present();
            }
            e.stopPropagation();
        }
        else if (event == "onInfoFavorite" && e.isTrusted) {
            e.stopPropagation();
            this.markasFavorite(item, "information");
        }
    };
    WhatsNewDetailsPage.prototype.ionViewDidEnter = function () {
        this.orientation = this.screen_orientation_object.type;
        this.screen_orientation_object.unlock();
        this.menu_controller_object.swipeEnable(false);
    };
    WhatsNewDetailsPage.prototype.ionViewWillLeave = function () {
        this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        var network_type = this.network_check_object.getNetworkType();
        if (network_type == "none") {
            localStorage.setItem("offline", "yes");
        }
        else {
            localStorage.setItem("offline", "no");
        }
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != "none") {
            this.network_check_object.getPageAction("WhatsNewDetailsPage", "end", "", localStorage.getItem("cv5usrType"));
        }
        this.menu_controller_object.swipeEnable(true);
        this.rmp = new RadiantMP("rmpPlayer1");
        this.playlistrmp = new RadiantMP("rmpPlayer");
        this.rmp.pause();
        this.playlistrmp.pause();
    };
    WhatsNewDetailsPage.prototype.onPlaylistClick = function (clickedata, index, contenFOR) {
        var _this = this;
        if (clickedata.subTopicType == "video") {
            var capitalize = function (s) {
                if (typeof s !== "string")
                    return "";
                return s.charAt(0).toUpperCase() + s.slice(1);
            };
            var category_querystring = new Array(" WHERE id=" + clickedata.categoryId);
            this.database_provider_object
                .fetchAllData("new_category", category_querystring)
                .then(function (cat_data) {
                _this.category_data = cat_data;
            });
            var topic_querystring = new Array(" WHERE id=" + clickedata.topicId);
            this.database_provider_object
                .fetchAllData("new_topics", topic_querystring)
                .then(function (topic_data) {
                _this.topic_data = topic_data;
            });
            var canShare = localStorage.getItem("userProAccess");
            if (clickedata.isPaid == 0 || canShare == "true") {
                this.disscussforvideomenu = clickedata;
                var currentIndex = this.findIndex(this.forvideo_Obj, clickedata.id);
                setTimeout(function () {
                    _this.radiant_setting_provider_object.setSRCChangedforPlaylist(currentIndex);
                }, 500);
                this.display_playlist = clickedata;
                this.pageTop.scrollToTop();
                this.presentToast(clickedata.copyrightInfo);
                this.forvideomenuItem(clickedata.id, clickedata.tag, contenFOR);
                var network_type = this.network_check_object.getNetworkType();
                if (network_type != "none") {
                    setTimeout(function () {
                        _this.network_check_object.getVideoTagCountAction(clickedata.tag, _this.userTypeformenu, localStorage.getItem("userliveId"), "", _this.possibleButtons, clickedata);
                    }, 1000);
                    setTimeout(function () {
                        _this.network_check_object.forTriggersDetalsPageBACKAction("WhatsNewDetailsPage", "forRelateditemClick");
                    }, 2000);
                    setTimeout(function () {
                        _this.network_check_object.forRandomVideoViewCount(localStorage.getItem("userliveId"));
                    }, 2500);
                }
                setTimeout(function () {
                    _this.radiant_setting_provider_object.forPlayClickTrigger(clickedata, _this.possibleButtons);
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
                this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
            }
            else {
                var confirmPopup = this.alert_controller_object.create({
                    title: "",
                    message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                    enableBackdropDismiss: true,
                    buttons: [
                        {
                            text: "Upgrade",
                            handler: function () {
                                _this.navCtrl.push("UpgradePlanPage");
                            },
                        },
                    ],
                });
                confirmPopup.present();
            }
        }
        else if (clickedata.subTopicType == "image") {
            if (clickedata.localUrl) {
                this.navCtrl.push("DrawonPage", {
                    drawnurl: clickedata.localUrl,
                    drawOnImgTitle: clickedata.title,
                    drawnCopyright: clickedata.copyrightInfo,
                    drawnSubtopicType: clickedata.subTopicType,
                    video_Name: clickedata.videoName,
                    local_Url: "localUrl",
                });
            }
            else {
                this.navCtrl.push("DrawonPage", {
                    drawnurl: clickedata.url,
                    drawOnImgTitle: clickedata.title,
                    drawnCopyright: clickedata.copyrightInfo,
                    drawnSubtopicType: clickedata.subTopicType,
                });
            }
        }
    };
    WhatsNewDetailsPage.prototype.changingPlayerSource = function () {
        var that = this;
        var tolatObj = that.data.playlist;
        that.CurrentPlaylistObject =
            that.radiant_setting_provider_object.getCurrentObjectFromPlaylist();
        setTimeout(function () {
            var play_data = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["filter"](tolatObj, function (forvideotitle) {
                return forvideotitle.id == that.CurrentPlaylistObject.videoId;
            });
            that.forvideomenuItem(play_data[0].id, play_data[0].tag, that.data.source);
            that.display_playlist = play_data[0];
            that.disscussforvideomenu = play_data[0];
            var network_type = that.network_check_object.getNetworkType();
            if (network_type != "none") {
                setTimeout(function () {
                    that.network_check_object.getVideoTagCountAction(play_data[0].tag, that.userTypeformenu, localStorage.getItem("userliveId"), "", that.possibleButtons, play_data[0]);
                }, 1000);
                setTimeout(function () {
                    that.network_check_object.forTriggersDetalsPageBACKAction("WhatsNewDetailsPage", "forRelateditemClick");
                }, 2000);
                setTimeout(function () {
                    that.network_check_object.forRandomVideoViewCount(localStorage.getItem("userliveId"));
                }, 2500);
            }
            setTimeout(function () {
                that.radiant_setting_provider_object.forPlayClickTrigger(play_data[0], that.possibleButtons);
            }, 1000);
        }, 500);
    };
    WhatsNewDetailsPage.prototype.findIndex = function (jsonData, findThis) {
        var indexNum = jsonData.findIndex(function (obj) { return obj.id == findThis; });
        return indexNum;
    };
    WhatsNewDetailsPage.prototype.presentToast = function (msg, duration) {
        if (duration === void 0) { duration = 2000; }
        var toast = this.toast_controller_object.create({
            message: msg,
            duration: duration,
            position: "middle",
        });
        toast.present();
    };
    WhatsNewDetailsPage.prototype.showConfirmBox = function () {
        var _this = this;
        var confirmPopup = this.alert_controller_object.create({
            title: "Confirmation you watched",
            message: "Did you watch all the videos in this playlist?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    },
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Buy clicked");
                        _this.confirmPopupThen();
                    },
                },
            ],
        });
        confirmPopup.present();
    };
    WhatsNewDetailsPage.prototype.confirmPopupThen = function () {
        try {
            var options = {
                message: "Yes I have seen playlist '" +
                    this.playlistname +
                    "' and understood the videos.",
                subject: "The status of playlist",
                files: [],
                url: localStorage.getItem("isLinkSet"),
                chooserTitle: "",
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
        }
        catch (e) {
            console.log("ctch");
            //$ionicHistory.backView().go();
        }
    };
    WhatsNewDetailsPage.prototype.isDownloadVideoMultiple = function (from_table) {
        var _this = this;
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == "none") {
                _this.toast_controller_object
                    .create({
                    message: "You are now offline.",
                    position: "bottom",
                    duration: 5000,
                })
                    .present();
            }
            else {
                var que_ids = localStorage.getItem("Downloadque");
                var progress_ids_arr = que_ids.split(",").map(Number);
                progress_ids_arr = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["uniq"](progress_ids_arr);
                que_ids = progress_ids_arr.toString();
                localStorage.setItem("Downloadque", que_ids);
                var progress_id = progress_ids_arr[0];
                if (progress_id == 0) {
                    progress_id = progress_ids_arr[1];
                }
                var userCondition = new Array("");
                _this.database_provider_object
                    .fetchAllData("new_user_info", userCondition)
                    .then(function (user_data) {
                    _this.userdata = user_data[0];
                });
                var table_name = "";
                if (from_table == "education") {
                    var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN (" +
                        progress_id +
                        ")");
                    table_name = "new_sub_topics";
                }
                else if (from_table == "information") {
                    var querystring = new Array("join information_data on information.id = information_data.id where information.id IN (" +
                        progress_id +
                        ")");
                    table_name = "information";
                }
                _this.database_provider_object
                    .fetchAllData(table_name, querystring)
                    .then(function (data) {
                    var fileTransfer = _this.file_transfer_object.create();
                    var item = data[0];
                    if (item.localUrl != "") {
                        var new_ids_arr = que_ids.split(",").map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem("Downloadque", que_ids);
                        _this.toast_service_object.presentToast('"' + item.name + '" already downloaded.');
                        if (que_ids == "") {
                            localStorage.setItem("Downloadque", "");
                        }
                    }
                    else {
                        _this.toast_service_object.mypresentToast('Downloading : "' + item.name + '"', 2000);
                        var filename = item.videoName;
                        var queue_data = {
                            download_url: item.url,
                            videoName: item.videoName,
                            id: item.id,
                            categoryId: item.categoryId,
                            subTopicType: item.subTopicType,
                        };
                        fileTransfer.onProgress(function (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                _this.isDownloading = true;
                                //var perc:any = 'perc'+item.id;
                                var perc = (progressEvent.loaded / progressEvent.total) * 100;
                                _this.perc1 = perc.toFixed(1);
                                //var loader:any = 'loader'+item.id;
                                var loader = document.getElementById("whatsnew_progressBar_" + item.id);
                                loader.style.background = "#fff";
                                loader.innerHTML = _this.perc1 + "%";
                                if (_this.perc1 == 100) {
                                    loader.innerHTML = "";
                                    loader.style.background = "";
                                }
                            }
                        });
                        fileTransfer
                            .download(item.url, _this.path + "V2CardioMedia/" + filename)
                            .then(function (entry) {
                            var video_url = "V2CardioMedia/" + filename;
                            if (from_table == "education") {
                                var querystring = new Array(" UPDATE subtopic_data SET localUrl = '" +
                                    video_url +
                                    "', downloaded = 1 WHERE id = " +
                                    item.id);
                            }
                            else if (from_table == "information") {
                                var querystring = new Array(" UPDATE information_data SET localUrl = '" +
                                    video_url +
                                    "', downloaded = 1 WHERE id = " +
                                    item.id);
                            }
                            _this.database_provider_object.updateData(querystring);
                            var iconfilename = item.iconUrl.split("/").pop();
                            //console.log('iconfilename--->'+iconfilename);
                            _this.downloadfile(item.iconUrl, iconfilename, item.id, from_table);
                            _this.downloadapi(item.id, _this.userdata.liveId, from_table);
                            _this.toast_service_object.mypresentToast('Finished downloading : "' + item.name + '"', 2000);
                            var loader3 = document.getElementById("download_" + item.id);
                            loader3.classList.add("active");
                            if (item.downloaded == 0)
                                item.downloaded = 1;
                            //this.toast_dismiss();
                        }, function (error) {
                            _this.toast_service_object.presentToast("Download failed! please try again.");
                        });
                        que_ids = localStorage.getItem("Downloadque");
                        var new_ids_arr = que_ids.split(",").map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem("Downloadque", que_ids);
                    }
                    if (que_ids != "") {
                        _this.isDownloadVideoMultiple(from_table);
                    }
                    else if (que_ids == "") {
                        localStorage.setItem("Downloadque", "");
                    }
                }, function (e) {
                    //console.log('586 error '+JSON.stringify(e))
                });
            }
        });
    };
    //download function
    WhatsNewDetailsPage.prototype.downloadfile = function (url, name, id, from_table) {
        var _this = this;
        var fileTransfer = this.file_transfer_object.create();
        fileTransfer.download(url, this.path + "icons/" + name).then(function (entry) {
            var icon_url = "icons/" + name;
            if (from_table == "education") {
                var querystring = new Array(" UPDATE subtopic_data SET localIconUrl = '" +
                    icon_url +
                    "', downloaded = 1 WHERE id = " +
                    id +
                    " ");
            }
            else if (from_table == "information") {
                var querystring = new Array(" UPDATE information_data SET localIconUrl = '" +
                    icon_url +
                    "', downloaded = 1 WHERE id = " +
                    id +
                    " ");
            }
            _this.database_provider_object.updateData(querystring);
        });
    };
    WhatsNewDetailsPage.prototype.onCompanyUrl = function (group) {
        var _this = this;
        var url = group.sponsoredLink;
        var ref = this.in_app_browser_object.create(url, "_blank", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
        ref.on("loadstop").subscribe(function (event) {
            _this.screen_orientation_object.unlock();
        });
        ref.on("exit").subscribe(function (event) {
            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
    };
    //insert query to api database
    WhatsNewDetailsPage.prototype.downloadapi = function (groupid, userid, from_table) {
        var post_url = this.http_service_object.getPosturl("downloads");
        if (from_table == "education") {
            this.http_object
                .post(post_url, { cardiovisualUserId: userid, subtopicId: groupid })
                .subscribe(function (data) {
                var response = JSON.parse(data["_body"]);
                var response_data = JSON.stringify(response);
            }, function (error) {
                console.log(error);
            });
        }
        else if (from_table == "information") {
            this.http_object
                .post(post_url, { cardiovisualUserId: userid, informationId: groupid })
                .subscribe(function (data) {
                var response = JSON.parse(data["_body"]);
                var response_data = JSON.stringify(response);
            }, function (error) {
                console.log(error);
            });
        }
    };
    WhatsNewDetailsPage.prototype.markasFavorite = function (group, from_table) {
        var _this = this;
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == "none") {
                _this.toast_controller_object
                    .create({
                    message: "This video requires internet connection.",
                    position: "bottom",
                    duration: 5000,
                })
                    .present();
            }
            else {
                if (group.isFavourite == 0) {
                    //set isFavourite == 1
                    _this.storage_object.get("user_logged_in").then(function (val) {
                        if (from_table == "education") {
                            _this.database_provider_object.setFavorites(val, group.id);
                        }
                        else if (from_table == "information") {
                            _this.database_provider_object.setinformationFavorites(val, group.id);
                        }
                        _this.toast_service_object.presentToast("Added to Favourites.");
                    });
                }
                else {
                    //set isFavourite == 0
                    _this.storage_object.get("user_logged_in").then(function (val) {
                        if (from_table == "education") {
                            _this.database_provider_object.setFavorites(val, group.id);
                        }
                        else if (from_table == "information") {
                            _this.database_provider_object.setinformationFavorites(val, group.id);
                        }
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    WhatsNewDetailsPage.prototype.setFavoriteFromBar = function (group, from_table) {
        var _this = this;
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == "none") {
                _this.toast_controller_object
                    .create({
                    message: "This video requires internet connection.",
                    position: "bottom",
                    duration: 5000,
                })
                    .present();
            }
            else {
                if (group.isFavourite == 0) {
                    //set isFavourite == 1
                    _this.storage_object.get("user_logged_in").then(function (val) {
                        if (from_table == "education") {
                            _this.database_provider_object.setFavorites(val, group.id);
                        }
                        else if (from_table == "information") {
                            _this.database_provider_object.setinformationFavorites(val, group.id);
                        }
                        _this.toast_service_object.presentToast("Added to Favourites.");
                    });
                }
                else {
                    //set isFavourite == 0
                    _this.storage_object.get("user_logged_in").then(function (val) {
                        if (from_table == "education") {
                            _this.database_provider_object.setFavorites(val, group.id);
                        }
                        else if (from_table == "information") {
                            _this.database_provider_object.setinformationFavorites(val, group.id);
                        }
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    WhatsNewDetailsPage.prototype.shareCardio = function () {
        var _this = this;
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == "none") {
                _this.toast_controller_object
                    .create({
                    message: "This video requires internet connection.",
                    position: "bottom",
                    duration: 5000,
                })
                    .present();
            }
            else {
                var options = {
                    message: "Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.",
                    subject: "Download CardioVisual",
                    files: [],
                    url: localStorage.getItem("isLinkSet"),
                    chooserTitle: "",
                };
                _this.social_sharing_object.shareWithOptions(options);
            }
        });
    };
    WhatsNewDetailsPage.prototype.shareVideo = function (id, url, name, description) {
        //any member can share the video
        var _this = this;
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == "none") {
                _this.toast_controller_object
                    .create({
                    message: "This video requires internet connection.",
                    position: "bottom",
                    duration: 5000,
                })
                    .present();
            }
            else {
                var options1 = {
                    message: name +
                        " - " +
                        description +
                        ".Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.",
                    files: [],
                    url: url,
                    chooserTitle: "Share " + name,
                };
                var params = {
                    record_time: _this.dtStr,
                    record_date: _this.clevertapDate,
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
                _this.clevertap_object.recordEventWithNameAndProps("sharedVideo", params); //
                _this.social_sharing_object.shareWithOptions(options1);
            }
        });
    };
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
    WhatsNewDetailsPage.prototype.isDownloadVideoFromBar = function (group, from_table) {
        var _this = this;
        var canShare = localStorage.getItem("canDownloadAccess");
        if (group.isDownloadable == 1) {
            if (canShare == "true") {
                this.platform_object.ready().then(function () {
                    var network_type = _this.network_check_object.getNetworkType();
                    if (network_type == "none") {
                        _this.toast_controller_object
                            .create({
                            message: "You are now offline.",
                            position: "bottom",
                            duration: 5000,
                        })
                            .present();
                    }
                    else {
                        var table_name = "";
                        if (from_table == "education") {
                            table_name = "subtopic_data";
                        }
                        else if (from_table == "information") {
                            table_name = "information_data";
                        }
                        var querystring = new Array("WHERE id = " + group.id);
                        _this.database_provider_object
                            .fetchAllData(table_name, querystring)
                            .then(function (data) {
                            //console.log('data download --->'+JSON.stringify(data));
                            _this.download_count = data;
                            if (data[0].localUrl != "") {
                                _this.toast_service_object.presentToast(group.name + " already downloaded!");
                            }
                            else {
                                //this.platform_object.ready().then(() => {
                                var names = new Array("");
                                _this.database_provider_object
                                    .fetchAllData("new_user_info", names)
                                    .then(function (data) {
                                    _this.userdata = data[0];
                                    if (data.length > 0) {
                                        var fileTransfer = _this.file_transfer_object.create();
                                        //downlad video
                                        var filename = group.url.split("/").pop();
                                        _this.toast_service_object.mypresentToast('Downloading : "' + group.name + '"', 2000);
                                        fileTransfer.onProgress(function (progressEvent) {
                                            if (progressEvent.lengthComputable) {
                                                var perc = (progressEvent.loaded / progressEvent.total) *
                                                    100;
                                                _this.perc1 = perc.toFixed(1);
                                                // //console.log(perc);
                                                var loader = document.getElementById("progressBar_detail");
                                                loader.style.background = "#fff";
                                                loader.innerHTML = _this.perc1 + "%";
                                                if (_this.perc1 == 100) {
                                                    loader.innerHTML = "";
                                                }
                                            }
                                        });
                                        fileTransfer
                                            .download(group.url, _this.path + "V2CardioMedia/" + filename)
                                            .then(function (entry) {
                                            var video_url = "V2CardioMedia/" + filename;
                                            //var new_video_url = video_url.replace("file://", "");
                                            if (from_table == "education") {
                                                var querystring = new Array(" UPDATE subtopic_data SET localUrl = '" +
                                                    video_url +
                                                    "', downloaded = 1 WHERE id = " +
                                                    group.id +
                                                    " ");
                                            }
                                            else if (from_table == "information") {
                                                var querystring = new Array(" UPDATE information_data SET localUrl = '" +
                                                    video_url +
                                                    "', downloaded = 1 WHERE id = " +
                                                    group.id +
                                                    " ");
                                            }
                                            _this.database_provider_object.updateData(querystring);
                                            var iconfilename = group.iconUrl.split("/").pop();
                                            //download video icon
                                            _this.downloadfile(group.iconUrl, iconfilename, group.id, from_table);
                                            //insert into live server
                                            _this.downloadapi(group.id, _this.userdata.liveId, from_table);
                                            _this.toast_service_object.mypresentToast('Finished downloading : "' + group.name + '"', 2000);
                                            var loader1 = document.getElementById("download_on_bar");
                                            loader1.style.color = "#004958";
                                            if (group.downloaded == 0) {
                                                group.downloaded = 1;
                                            }
                                        }, function (error) {
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
                    title: "",
                    message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
                    enableBackdropDismiss: true,
                    buttons: [
                        {
                            text: "Upgrade",
                            handler: function () {
                                //this.navCtrl.parent.parent.push('UpgradePlanPage');
                                _this.navCtrl.push("UpgradePlanPage");
                            },
                        },
                    ],
                });
                confirmPopup.present();
            }
        }
        else {
            var confirmPopup = this.alert_controller_object.create({
                title: "",
                message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
                enableBackdropDismiss: true,
                buttons: ["Dismiss"],
            });
            confirmPopup.present();
        }
    };
    // Actionsheet start by: sanjeev
    WhatsNewDetailsPage.prototype.openMenu = function () {
        var actionSheet = this.action_sheet_controller_object.create({
            title: "",
            cssClass: "action-sheets-basic-page",
            buttons: this.createButtons(),
        });
        actionSheet.present();
    };
    WhatsNewDetailsPage.prototype.createButtons = function () {
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
                },
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
    WhatsNewDetailsPage.prototype.openQRCodePage = function (data) {
        this.navCtrl.push("QrcodePage", {
            previousPage: "videoDetails",
            videoqrData: data,
        });
    };
    WhatsNewDetailsPage.prototype.forvideomenuItem = function (videoId, videoTag, content_for) {
        var _this = this;
        var userformenu = this.userTypeformenu;
        /* for video menu query start : sanjeev */
        var videoMenuquery_3 = new Array("WHERE sub_topic_id ='" + videoId + "' AND type='videomenu'");
        var videoMenuquery_4 = new Array("WHERE name ='" + videoTag + "' AND type='videomenu'");
        this.database_provider_object
            .fetchAllData("custom_video_json", videoMenuquery_3)
            .then(function (custom_video_json_data_formenu) {
            if (custom_video_json_data_formenu.length > 0) {
                var custom_video_json_forMenu = JSON.parse(custom_video_json_data_formenu[0].list_values);
                var formenudata = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["filter"](custom_video_json_forMenu, function (json_forMenu) {
                    return ((json_forMenu.usertype == userformenu ||
                        json_forMenu.usertype == "All") &&
                        (json_forMenu.contentFor == content_for ||
                            json_forMenu.contentFor == "All" ||
                            json_forMenu.contentFor == undefined));
                });
                if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](formenudata) > 2) {
                    // code...
                    _this.possibleButtons = formenudata;
                }
                else {
                    _this.possibleButtons = [
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
                _this.removeExtraIntractionOption();
            }
            else {
                _this.database_provider_object
                    .fetchAllData("custom_listing", videoMenuquery_4)
                    .then(function (custom_listing_data_formenu) {
                    if (custom_listing_data_formenu.length > 0) {
                        var list_json_value_forMenu = JSON.parse(custom_listing_data_formenu[0].list_values);
                        var forlistmenudata = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["filter"](list_json_value_forMenu, function (list_json_forMenu) {
                            return ((list_json_forMenu.usertype == userformenu ||
                                list_json_forMenu.usertype == "All") &&
                                (list_json_forMenu.contentFor == content_for ||
                                    list_json_forMenu.contentFor == "All" ||
                                    list_json_forMenu.contentFor == undefined));
                        });
                        if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](forlistmenudata) > 2) {
                            // code...
                            _this.possibleButtons = forlistmenudata;
                        }
                        else {
                            _this.possibleButtons = [
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
                        _this.removeExtraIntractionOption();
                    }
                    else {
                        _this.possibleButtons = [
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
                        _this.removeExtraIntractionOption();
                    }
                });
            }
        });
    };
    WhatsNewDetailsPage.prototype.removeExtraIntractionOption = function () {
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
    WhatsNewDetailsPage.prototype.changeMenuList = function (type, value) {
        var _this = this;
        if (type == "forshare") {
            this.shareCardio();
        }
        else if (type == "forAddtoplaylist") {
            this.addtoplaylist(this.disscussforvideomenu);
        }
        else if (type == "forForumQuestion") {
            this.onPromptForQna(this.disscussforvideomenu);
        }
        else if (type == "forEmail") {
            this.social_sharing_object
                .canShareViaEmail()
                .then(function (emailSuccess) {
                _this.social_sharing_object
                    .shareViaEmail("", "CardioVisual user has a question for you.", [
                    value,
                ])
                    .then(function (sharEmailSuccess) { })
                    .catch(function (sharEmailError) { });
            })
                .catch(function (emailError) {
                _this.toast_service_object.presentToast("Sharing via email is not possible.");
            });
        }
        else if (type == "forPhone") {
            this.call_number_object
                .callNumber(value, true)
                .then(function (callSuccess) { })
                .catch(function (callError) { });
        }
        else if (type == "webUrl") {
            var ref = this.in_app_browser_object.create(value, "_blank", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
            ref.on("loadstop").subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on("exit").subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
        else if (type == "Cancel") {
            console.log("Cancel");
        }
    };
    WhatsNewDetailsPage.prototype.interactCleverTapActon = function (label, value) {
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
        this.clevertap_object.recordEventWithNameAndProps("clickedOninteract", params);
    };
    WhatsNewDetailsPage.prototype.addtoplaylist = function (item) {
        var _this = this;
        var canShare = localStorage.getItem("userProAccess");
        if (canShare == "true") {
            var userCondition = new Array("");
            this.database_provider_object
                .fetchAllData("new_user_info", userCondition)
                .then(function (user_data) {
                _this.userdata = user_data[0];
            });
            var type = "";
            if (item.categoryId < "4") {
                type = "education";
            }
            else {
                type = "information";
            }
            var myModalOptions = {
                enableBackdropDismiss: false,
            };
            var myModal = this.modal_controllar_object.create("ModalPage", { data: "Add to Playlist", video_data: item, type: type }, myModalOptions);
            myModal.present();
        }
        else {
            var confirmPopup = this.alert_controller_object.create({
                title: "",
                message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to create custom playlist.</p>',
                enableBackdropDismiss: true,
                buttons: [
                    {
                        text: "Upgrade",
                        handler: function () {
                            _this.navCtrl.push("UpgradePlanPage");
                        },
                    },
                ],
            });
            confirmPopup.present();
        }
    };
    WhatsNewDetailsPage.prototype.onPromptForQna = function (video_data) {
        this.video_share_provider_object.discussPromptForProffesional(video_data, "", "From WhatsNew Details");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WhatsNewDetailsPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WhatsNewDetailsPage.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], WhatsNewDetailsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("pageTop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], WhatsNewDetailsPage.prototype, "pageTop", void 0);
    WhatsNewDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-whats-new-details",template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\whats-new-details\whats-new-details.html"*/'<ion-header clean-header class="tabheader" [isTabs]="true" [hideMenu]="true"></ion-header>\n\n<!--- Theme Parallax Players -->\n<ion-content #pageTop style="background-color: #0f0707">\n  <!-- *ngIf="data.display_playlist || display_playlist" -->\n\n  <div class="rmp-playlist-container radient-container" id="singlePlayer" *ngIf="data.type ==\'video_detail\'">\n    <div class="">\n      <div id="rmpPlayer1"></div>\n    </div>\n  </div>\n\n  <div class="rmp-playlist-container radient-container" id="playlistPlayer" *ngIf="data.type ==\'expert_playlist\'">\n    <div class="rmp-playlist-player-wrapper">\n      <div id="rmpPlayer"></div>\n    </div>\n  </div>\n\n  <!-- *ngIf="video_data || display_playlist" -->\n  <ion-grid class="videodetailIongrid" style="">\n    <ion-row *ngIf="data.type ==\'video_detail\'">\n      <ion-col col-12 class="font_weight_400">\n        <span\n          *ngIf="data.display_playlist.expiryDate !=\'null\' && currentTimeInMilliSeconds <= data.display_playlist.expiryDate"\n          class="color_red text_align_left">NEW |\n        </span>\n        <span *ngIf="data.display_playlist.sponsoredName != \'\' &&  data.display_playlist.sponsoredName !=\'null\'"\n          class="color_red text_align_left">\n          {{data.display_playlist.sponsoredName}} |\n        </span>\n        <span\n          *ngIf="data.display_playlist.sponsoredLink != null && data.display_playlist.sponsoredLink != \'null\' && data.display_playlist.sponsoredLink != \'\'"\n          class="text_align_left"><a class="font_weight_600 color_skyblue"\n            (click)="onCompanyUrl(data.display_playlist)"><u> More Info / Contact Company</u></a></span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="data.type ==\'expert_playlist\'">\n      <ion-col col-12 class="font_weight_400">\n        <span class="color_red text_align_left"\n          *ngIf="display_playlist.expiryDate !=\'null\' && currentTimeInMilliSeconds <= display_playlist.expiryDate">\n          NEW |\n        </span>\n        <span class="color_red text_align_left"\n          *ngIf="display_playlist.sponsoredName != \'\' &&  display_playlist.sponsoredName !=\'null\'">\n          {{display_playlist.sponsoredName}} |\n        </span>\n        <span\n          *ngIf="display_playlist.sponsoredLink != null && display_playlist.sponsoredLink != \'null\' && display_playlist.sponsoredLink != \'\'"\n          class="text_align_left"><a class="font_weight_600 color_skyblue" (click)="onCompanyUrl(display_playlist)"><u>\n              More Info / Contact Company</u></a></span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngIf="data.type ==\'video_detail\'" class="videodetailIongridText" col-12\n        style="font-weight: 500; font-size: 2.3rem; padding: 0 0 0 5px"><span\n          class="videodetailIongridText1">{{data.display_playlist.name}}</span></ion-col>\n\n      <ion-col *ngIf="data.type ==\'expert_playlist\'" col-12\n        style="font-weight: 500; font-size: 2.3rem; padding: 0 0 0 5px"><span\n          class="videodetailIongridText1">{{display_playlist.name}}</span></ion-col>\n    </ion-row>\n    <ion-row style="margin-top: 3px">\n      <ion-col *ngIf="data.type ==\'video_detail\'">\n        <span *ngIf="data.display_playlist.duration != \'\'">{{data.display_playlist.duration }}</span>\n        <span *ngIf="data.display_playlist.duration != \'\'" style="padding: 0 5%">|</span>\n        <span class="videodetailIongridText2">{{ data.display_playlist.createdAt | date: \'MMM d, yyyy\' }}</span>\n      </ion-col>\n      <ion-col *ngIf="data.type ==\'expert_playlist\'">\n        <span class="videodetailIongridText2">\n          {{ display_playlist.createdAt | date: \'MMM d, yyyy\' }}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style="padding-top: 3px; padding-bottom: 3px">\n      <ion-col\n        *ngIf="data.type ==\'video_detail\' && data.display_playlist.description != \'\' && data.display_playlist.description !=\'null\'"\n        col-12><span class="videodetailIongridText2">{{ data.display_playlist.description }}</span></ion-col>\n\n      <ion-col\n        *ngIf="data.type ==\'expert_playlist\' && display_playlist.description != \'\' && display_playlist.description !=\'null\'"\n        col-12><span class="videodetailIongridText2">{{ display_playlist.description }}</span></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid no-padding>\n    <ion-row style="color: #0a798f; background-color: #f0f0f0" class="share_row">\n      <ion-col class="videoshareContent centerBoxContent" *ngIf="data.type ==\'video_detail\'"\n        style="width: 20%; padding: 10px 5px 5px 5px" (click)="openQRCodePage(data.display_playlist)">\n        <ion-icon><i class="icon icon-list-share shareVideoFont1_8" style=""></i></ion-icon>\n        <span class="textSize_tab" style="\n            font-size: 1em;\n            font-weight: 400;\n            position: relative;\n          ">Share Video</span>\n      </ion-col>\n\n      <ion-col class="videoshareContent centerBoxContent" *ngIf="data.type ==\'expert_playlist\'"\n        style="width: 20%; padding: 10px 5px 5px 5px" (click)="openQRCodePage(display_playlist)">\n        <ion-icon><i class="icon icon-list-share shareVideoFont1_8" style=""></i></ion-icon>\n        <span class="textSize_tab" style="\n            font-size: 1em;\n            font-weight: 400;\n            position: relative;\n          ">Share Video</span>\n      </ion-col>\n      <ion-col class="shareContent centerBoxContent" *ngIf="data.type ==\'video_detail\'" style=""\n        (tap)="addtoplaylist(data.display_playlist)">\n        <ion-icon><i class="icon-video-icons-share-doctor selected-fav-icon new-font-icons discussfont2_2" style="\n            font-size: 3.4em;\n            margin-top: 0px;\n            position: relative;\n            margin-bottom: 0px;\n          "></i></ion-icon>\n        <span class="textSize_tab" style="\n            font-size: 1em;\n            font-weight: 420;\n            position: relative;\n          ">Add to Playlist</span>\n      </ion-col>\n\n      <ion-col class="shareContent centerBoxContent" *ngIf="data.type ==\'expert_playlist\'" style=""\n        (tap)="addtoplaylist(display_playlist)">\n        <ion-icon><i class="icon-video-icons-share-doctor selected-fav-icon new-font-icons discussfont2_2" style="\n            font-size: 3.4em;\n            margin-top: 0px;\n            position: relative;\n            margin-bottom: 0px;\n          "></i></ion-icon>\n        <span class="textSize_tab" style="\n            font-size: 1em;\n            font-weight: 420;\n            position: relative;\n          ">Add to Playlist</span>\n      </ion-col>\n\n      <ion-col class="centerBoxContent" *ngIf="data.type ==\'video_detail\'" style="width: 20%; text-align: center"\n        (tap)="isDownloadVideoFromBar(data.display_playlist, data.source)">\n        <ion-icon> <i style="" class="downloadFont3_6 icon-video-icons-download can-download-icon new-font-icons"\n            [style.color]="(data.display_playlist.localUrl == \'\')?\'#03829c\':\'#004958\'"\n            id="download_on_bar"></i></ion-icon>\n        <span class="textSize_tab" style="\n            font-size: 1em;\n            position: relative;\n            font-weight: 400;\n          ">Download</span>\n        <span id="progressBar_detail" style="\n            \n            padding: 3px;\n            height: auto;\n            color: red;\n            text-align: center;\n            font-size: 10px;\n            font-weight: 900;\n            border-radius: 25px;\n          "></span>\n      </ion-col>\n\n      <ion-col class="centerBoxContent" *ngIf="data.type ==\'expert_playlist\'" style="width: 20%; text-align: center"\n        (tap)="isDownloadVideoFromBar(display_playlist, data.source)">\n        <ion-icon><i style="" class="downloadFont3_6 icon-video-icons-download can-download-icon new-font-icons"\n            [style.color]="(display_playlist.localUrl == \'\')?\'#03829c\':\'#004958\'" id="download_on_bar"></i></ion-icon>\n        <span class="textSize_tab" style="\n            font-size: 1em;\n            position: relative;\n            font-weight: 400;\n          ">Download</span>\n        <span id="progressBar_detail" style="\n            padding: 3px;\n            height: auto;\n            color: red;\n            text-align: center;\n            font-size: 10px;\n            font-weight: 900;\n            border-radius: 25px;\n          "></span>\n      </ion-col>\n\n      <ion-col class="shareContent centerBoxContent" *ngIf="data.type ==\'video_detail\'" style=""\n        (tap)="setFavoriteFromBar(data.display_playlist, data.source)">\n        <ion-icon><i *ngIf="data.display_playlist.isFavourite == 0"\n            class="icon-cardio-like selected-fav-icon new-font-icons favfont2_2" style=""></i></ion-icon>\n        <ion-icon> <i *ngIf="data.display_playlist.isFavourite == 1"\n            class="icon-cardio-like selected-fav-icon new-font-icons favfont2_2" style="color: #004958"></i></ion-icon>\n        <span class="textSize_tab" style="\n            font-size: 1em;\n            font-weight: 400;\n            position: relative;\n          ">Favorite</span>\n      </ion-col>\n\n      <ion-col class="shareContent centerBoxContent" *ngIf="data.type ==\'expert_playlist\'" style=""\n        (tap)="setFavoriteFromBar(display_playlist, data.source)">\n        <ion-icon *ngIf="display_playlist.isFavourite == 0"><i\n            class="icon-cardio-like selected-fav-icon new-font-icons favfont2_2" style=""></i></ion-icon>\n        <ion-icon *ngIf="display_playlist.isFavourite == 1"><i\n            class="icon-cardio-like selected-fav-icon new-font-icons favfont2_2" style="color: #004958"></i></ion-icon>\n        <span class="textSize_tab" style="\n            font-size: 1em;\n            font-weight: 400;\n            position: relative;\n          ">Favorite</span>\n      </ion-col>\n      <ion-col class="shareContent centerBoxContent" style="" (click)="openMenu()">\n        <!-- <span class="icon-takeAction2 takeActioncss"></span> -->\n        <ion-icon><i class="icon-touch-1" style="color: #c64738; font-size: 2.3em"></i></ion-icon>\n        <span class="textSize_tab" style="\n            color: #dd4b39;\n            font-size: 1em;\n            font-weight: 420;\n            position: relative;\n          ">Interact</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="data.type == \'video_detail\'">\n      <ion-segment [(ngModel)]="head_tab" class="main_tab">\n        <ion-segment-button value="recommended_videos" style="color: #fff; background-color: #0a434e">\n          <div class="segmttext">Recommended Videos</div>\n        </ion-segment-button>\n      </ion-segment>\n      <div id="static_download_prog" class="inner-pg-download-banner" style="\n          color: red;\n          text-align: center !important;\n          margin: 0;\n          display: block;\n        "></div>\n    </ion-row>\n\n    <ion-row *ngIf="data.type == \'expert_playlist\'">\n      <ion-col col-12 no-margin no-padding>\n        <ion-item style="background-color: #0a434e; text-align: center">\n          <h2 style="color: #fff">{{playlistname}}</h2>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="head_tab" *ngIf="data.type == \'video_detail\'">\n      <ion-list *ngSwitchCase="\'recommended_videos\'" style="margin: 0px">\n        <ion-segment [(ngModel)]="category_tab" style="background-color: #f0f0f0" class="sub_tab"\n          *ngIf="data.source == \'education\'">\n          <ion-segment-button class="condition sgmntTabFont" value="condition"\n            style="font-size: 1.4rem; background-color: #f0f0f0">\n            <div class="segmttext">Condition</div>\n          </ion-segment-button>\n          <ion-segment-button class="treatment sgmntTabFont" value="treatment"\n            style="font-size: 1.4rem; background-color: #f0f0f0">\n            <div class="segmttext">Treatment</div>\n          </ion-segment-button>\n          <ion-segment-button class="device sgmntTabFont" value="device"\n            style="font-size: 1.4rem; background-color: #f0f0f0">\n            <div class="segmttext">Device</div>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-segment [(ngModel)]="category_tab" style="background-color: #f0f0f0" class="sub_tab"\n          *ngIf="data.source ==\'information\'">\n          <ion-segment-button class="expert sgmntTabFont" value="expert"\n            style="font-size: 1.4rem; background-color: #f0f0f0">\n            <div class="segmttext">Expert</div>\n          </ion-segment-button>\n          <ion-segment-button class="learn sgmntTabFont" value="learn"\n            style="font-size: 1.4rem; background-color: #f0f0f0">\n            <div class="segmttext">Learn</div>\n          </ion-segment-button>\n          <ion-segment-button class="featured sgmntTabFont" value="featured"\n            style="font-size: 1.4rem; background-color: #f0f0f0">\n            <div class="segmttext">Featured</div>\n          </ion-segment-button>\n          <ion-segment-button class="product sgmntTabFont" value="product"\n            style="font-size: 1.4rem; background-color: #f0f0f0">\n            <div class="segmttext">Product</div>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-list>\n    </div>\n\n    <div [ngSwitch]="category_tab"\n      *ngIf="head_tab == \'recommended_videos\' && data.type == \'video_detail\' && data.source == \'education\'">\n      <ion-list *ngSwitchCase="\'condition\'" no-margin>\n        <ion-row *ngIf="data.conditions">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item *ngFor="let item of data.conditions;let i = index"\n                (click)="onEvent(\'onItemClick\', item, $event)" class="ion-item-border"\n                style="min-height: 120px; padding: 0px">\n                <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                  <div class="thumbnilBackground">\n                    <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                      alt="{{item.name}}" class="rectangl_img" />\n                    <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                      src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n\n                    <span id="whatsnew_progressBar_{{item.id}}" style="\n                        position: absolute;\n                        left: 36px;\n                        top: 40px;\n                        padding: 3px;\n                        height: auto;\n                        color: red;\n                        text-align: center;\n                        font-size: 10px;\n                        font-weight: 900;\n                        border-radius: 25px;\n                      "></span>\n\n                    <div class="bottom-left">\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                    </div>\n                  </div>\n                </ion-thumbnail>\n\n                <div float-right style="position: absolute; top: 10px">\n                  <b item-title style="white-space: normal; word-wrap: break-word"\n                    class="item-text-wrap">{{item.name}}</b>\n\n                  <p class="tab-desc-size tab-desc-size1" item-subtitle\n                    *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76"\n                      style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                    <span *ngIf="item.description.length > 75"\n                      style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                  </p>\n                </div>\n\n                <div float-right style="" class="shareDownloaddiv">\n                  <ion-icon (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'"\n                    class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"\n                      [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" id="download_{{item.id}}"></i>\n                  </ion-icon>\n\n                  <ion-icon style="" *ngIf="item.subTopicType == \'image\'"\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"></i>\n                  </ion-icon>\n\n                  <ion-icon (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n                    <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                      [ngClass]="{\'active\': item.isFavourite}"></i>\n                  </ion-icon>\n                  <ion-icon style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n                    <i class="icon icon-list-share"></i>\n                  </ion-icon>\n                </div>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="!data.conditions">\n          <ion-col col-12 no-padding *ngIf="data.type != \'expert_playlist\'">\n            <ion-list no-margin>\n              <ion-item style="" class="noDataFound">\n                <p class="noFound">No data found</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'treatment\'" no-margin>\n        <ion-row *ngIf="data.treatment">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item *ngFor="let item of data.treatment;let i = index" (click)="onEvent(\'onItemClick\', item, $event)"\n                class="ion-item-border" style="min-height: 120px; padding: 0px">\n                <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                  <div class="thumbnilBackground">\n                    <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                      alt="{{item.name}}" class="rectangl_img" />\n                    <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                      src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n                    <span id="whatsnew_progressBar_{{item.id}}" style="\n                        position: absolute;\n                        left: 36px;\n                        top: 40px;\n                        padding: 3px;\n                        height: auto;\n                        color: red;\n                        text-align: center;\n                        font-size: 10px;\n                        font-weight: 900;\n                        border-radius: 25px;\n                      "></span>\n                    <div class="bottom-left">\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                    </div>\n                  </div>\n                </ion-thumbnail>\n\n                <div float-right style="position: absolute; top: 10px">\n                  <b item-title style="white-space: normal; word-wrap: break-word"\n                    class="item-text-wrap">{{item.name}}</b>\n\n                  <p class="tab-desc-size tab-desc-size1" item-subtitle\n                    *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76"\n                      style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                    <span *ngIf="item.description.length > 75"\n                      style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                  </p>\n                </div>\n\n                <div float-right style="" class="shareDownloaddiv">\n                  <ion-icon (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'"\n                    class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"\n                      [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" id="download_{{item.id}}"></i>\n                  </ion-icon>\n\n                  <ion-icon style="" *ngIf="item.subTopicType == \'image\'"\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"></i>\n                  </ion-icon>\n\n                  <ion-icon (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n                    <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                      [ngClass]="{\'active\': item.isFavourite}"></i>\n                  </ion-icon>\n                  <ion-icon style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n                    <i class="icon icon-list-share"></i>\n                  </ion-icon>\n                </div>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="!data.treatment">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item style="" class="noDataFound">\n                <p class="noFound">No data found</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'device\'" no-margin>\n        <ion-row *ngIf="data.device">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item *ngFor="let item of data.device;let i = index" (click)="onEvent(\'onItemClick\', item ,$event)"\n                class="ion-item-border" style="min-height: 120px; padding: 0px">\n                <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                  <div class="thumbnilBackground">\n                    <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                      alt="{{item.name}}" class="rectangl_img" />\n                    <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                      src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n                    <span id="whatsnew_progressBar_{{item.id}}" style="\n                        position: absolute;\n                        left: 36px;\n                        top: 40px;\n                        padding: 3px;\n                        height: auto;\n                        color: red;\n                        text-align: center;\n                        font-size: 10px;\n                        font-weight: 900;\n                        border-radius: 25px;\n                      "></span>\n\n                    <div class="bottom-left">\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                    </div>\n                  </div>\n                </ion-thumbnail>\n\n                <div float-right style="position: absolute; top: 10px">\n                  <b item-title style="white-space: normal; word-wrap: break-word"\n                    class="item-text-wrap">{{item.name}}</b>\n\n                  <p class="tab-desc-size tab-desc-size1" item-subtitle\n                    *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76"\n                      style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                    <span *ngIf="item.description.length > 75"\n                      style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                  </p>\n                </div>\n\n                <div float-right style="" class="shareDownloaddiv">\n                  <ion-icon (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'"\n                    class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"\n                      [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" id="download_{{item.id}}"></i>\n                  </ion-icon>\n\n                  <ion-icon style="" *ngIf="item.subTopicType == \'image\'"\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"></i>\n                  </ion-icon>\n\n                  <ion-icon (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n                    <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                      [ngClass]="{\'active\': item.isFavourite}"></i>\n                  </ion-icon>\n                  <ion-icon style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n                    <i class="icon icon-list-share"></i>\n                  </ion-icon>\n                </div>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="!data.device">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item style="" class="noDataFound">\n                <p class="noFound">No data found</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n\n    <div [ngSwitch]="category_tab"\n      *ngIf="head_tab == \'recommended_videos\' && data.type == \'video_detail\' && data.source == \'information\'">\n      <ion-list *ngSwitchCase="\'expert\'" no-margin>\n        <ion-row *ngIf="data.expert.length > 0">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item *ngFor="let item of data.expert;let i = index"\n                (click)="onEvent(\'onInfoItemClick\', item, $event)" class="ion-item-border"\n                style="min-height: 120px; padding: 0px">\n                <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                  <div class="thumbnilBackground">\n                    <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                      alt="{{item.name}}" class="rectangl_img" />\n                    <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                      src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n                    <span id="whatsnew_progressBar_{{item.id}}" style="\n                        position: absolute;\n                        left: 36px;\n                        top: 40px;\n                        padding: 3px;\n                        height: auto;\n                        color: red;\n                        text-align: center;\n                        font-size: 10px;\n                        font-weight: 900;\n                        border-radius: 25px;\n                      "></span>\n\n                    <div class="bottom-left">\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                    </div>\n                  </div>\n                </ion-thumbnail>\n\n                <div float-right style="position: absolute; top: 10px">\n                  <b item-title style="white-space: normal; word-wrap: break-word"\n                    class="item-text-wrap">{{item.name}}</b>\n\n                  <p class="tab-desc-size tab-desc-size1" item-subtitle\n                    *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76"\n                      style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                    <span *ngIf="item.description.length > 75"\n                      style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                  </p>\n                </div>\n\n                <div float-right style="" class="shareDownloaddiv">\n                  <ion-icon (click)="onEvent(\'onInfoDownload\', item, $event)" style=""\n                    *ngIf="item.subTopicType != \'image\'" class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"\n                      [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" id="download_{{item.id}}"></i>\n                  </ion-icon>\n\n                  <ion-icon style="" *ngIf="item.subTopicType == \'image\'"\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"></i>\n                  </ion-icon>\n\n                  <ion-icon (click)="onEvent(\'onInfoFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n                    <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                      [ngClass]="{\'active\': item.isFavourite}"></i>\n                  </ion-icon>\n                  <ion-icon style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n                    <i class="icon icon-list-share"></i>\n                  </ion-icon>\n                </div>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="data.expert.length == 0">\n          <ion-col col-12 no-padding *ngIf="data.type != \'playlist\'">\n            <ion-list no-margin>\n              <ion-item style="" class="noDataFound">\n                <p class="noFound">No data found</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'learn\'" no-margin>\n        <ion-row *ngIf="data.learn.length > 0">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item *ngFor="let item of data.learn;let i = index" (click)="onEvent(\'onInfoItemClick\', item, $event)"\n                class="ion-item-border" style="min-height: 120px; padding: 0px">\n                <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                  <div class="thumbnilBackground">\n                    <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                      alt="{{item.name}}" class="rectangl_img" />\n                    <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                      src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n                    <span id="whatsnew_progressBar_{{item.id}}" style="\n                        position: absolute;\n                        left: 36px;\n                        top: 40px;\n                        padding: 3px;\n                        height: auto;\n                        color: red;\n                        text-align: center;\n                        font-size: 10px;\n                        font-weight: 900;\n                        border-radius: 25px;\n                      "></span>\n                    <div class="bottom-left">\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                    </div>\n                  </div>\n                </ion-thumbnail>\n\n                <div float-right style="position: absolute; top: 10px">\n                  <b item-title style="white-space: normal; word-wrap: break-word"\n                    class="item-text-wrap">{{item.name}}</b>\n\n                  <p class="tab-desc-size tab-desc-size1" item-subtitle\n                    *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76"\n                      style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                    <span *ngIf="item.description.length > 75"\n                      style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                  </p>\n                </div>\n\n                <div float-right style="" class="shareDownloaddiv">\n                  <ion-icon (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'"\n                    class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"\n                      [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" id="download_{{item.id}}"></i>\n                  </ion-icon>\n\n                  <ion-icon style="" *ngIf="item.subTopicType == \'image\'"\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"></i>\n                  </ion-icon>\n\n                  <ion-icon (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n                    <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                      [ngClass]="{\'active\': item.isFavourite}"></i>\n                  </ion-icon>\n                  <ion-icon style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n                    <i class="icon icon-list-share"></i>\n                  </ion-icon>\n                </div>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="data.learn.length == 0">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item style="" class="noDataFound">\n                <p class="noFound">No data found</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'featured\'" no-margin>\n        <ion-row *ngIf="data.featured.length > 0">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item *ngFor="let item of data.featured;let i = index"\n                (click)="onEvent(\'onInfoItemClick\', item ,$event)" class="ion-item-border"\n                style="min-height: 120px; padding: 0px">\n                <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                  <div class="thumbnilBackground">\n                    <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                      alt="{{item.name}}" class="rectangl_img" />\n                    <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                      src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n                    <span id="whatsnew_progressBar_{{item.id}}" style="\n                        position: absolute;\n                        left: 36px;\n                        top: 40px;\n                        padding: 3px;\n                        height: auto;\n                        color: red;\n                        text-align: center;\n                        font-size: 10px;\n                        font-weight: 900;\n                        border-radius: 25px;\n                      "></span>>\n\n                    <div class="bottom-left">\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                    </div>\n                  </div>\n                </ion-thumbnail>\n\n                <div float-right style="position: absolute; top: 10px">\n                  <b item-title style="white-space: normal; word-wrap: break-word"\n                    class="item-text-wrap">{{item.name}}</b>\n\n                  <p class="tab-desc-size tab-desc-size1" item-subtitle\n                    *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76"\n                      style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                    <span *ngIf="item.description.length > 75"\n                      style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                  </p>\n                </div>\n\n                <div float-right style="" class="shareDownloaddiv">\n                  <ion-icon (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'"\n                    class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"\n                      [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" id="download_{{item.id}}"></i>\n                  </ion-icon>\n\n                  <ion-icon style="" *ngIf="item.subTopicType == \'image\'"\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"></i>\n                  </ion-icon>\n\n                  <ion-icon (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n                    <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                      [ngClass]="{\'active\': item.isFavourite}"></i>\n                  </ion-icon>\n                  <ion-icon style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n                    <i class="icon icon-list-share"></i>\n                  </ion-icon>\n                </div>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="data.featured.length == 0">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item style="" class="noDataFound">\n                <p class="noFound">No data found</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'product\'" no-margin>\n        <ion-row *ngIf="data.product.length > 0">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item *ngFor="let item of data.product;let i = index"\n                (click)="onEvent(\'onInfoItemClick\', item ,$event)" class="ion-item-border"\n                style="min-height: 120px; padding: 0px">\n                <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                  <div class="thumbnilBackground">\n                    <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                      alt="{{item.name}}" class="rectangl_img" />\n                    <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                      src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n                    <span id="whatsnew_progressBar_{{item.id}}" style="\n                        position: absolute;\n                        left: 36px;\n                        top: 40px;\n                        padding: 3px;\n                        height: auto;\n                        color: red;\n                        text-align: center;\n                        font-size: 10px;\n                        font-weight: 900;\n                        border-radius: 25px;\n                      "></span>\n\n                    <div class="bottom-left">\n                      <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                      <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                        [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 25px"></i>\n                    </div>\n                  </div>\n                </ion-thumbnail>\n\n                <div float-right style="position: absolute; top: 10px">\n                  <b item-title style="white-space: normal; word-wrap: break-word"\n                    class="item-text-wrap">{{item.name}}</b>\n\n                  <p class="tab-desc-size tab-desc-size1" item-subtitle\n                    *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76"\n                      style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                    <span *ngIf="item.description.length > 75"\n                      style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                  </p>\n                </div>\n\n                <div float-right style="" class="shareDownloaddiv">\n                  <ion-icon (click)="onEvent(\'onDownload\', item, $event)" style="" *ngIf="item.subTopicType != \'image\'"\n                    class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"\n                      [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" id="download_{{item.id}}"></i>\n                  </ion-icon>\n\n                  <ion-icon style="" *ngIf="item.subTopicType == \'image\'"\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)" class="shareDownloadion_icon_download">\n                    <i style="" class="icon-video-icons-download can-download-icon new-font-icons"></i>\n                  </ion-icon>\n\n                  <ion-icon (click)="onEvent(\'onFavorite\', item, $event)" style="" class="shareDownloadion_icon">\n                    <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                      [ngClass]="{\'active\': item.isFavourite}"></i>\n                  </ion-icon>\n                  <ion-icon style="" (click)="onEvent(\'onShare\', item, $event)" class="shareDownloadion_icon">\n                    <i class="icon icon-list-share"></i>\n                  </ion-icon>\n                </div>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="data.product.length == 0">\n          <ion-col col-12 no-padding>\n            <ion-list no-margin>\n              <ion-item style="" class="noDataFound">\n                <p class="noFound">No data found</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n\n    <ion-list no-margin *ngIf="data.type == \'expert_playlist\'">\n      <ion-row *ngIf="data.playlist && data.source == \'education\'">\n        <ion-col col-12 no-padding>\n          <ion-list no-margin>\n            <ion-item *ngFor="let item of data.playlist;let i = index" (click)="onPlaylistClick(item, i, \'education\')"\n              style="\n                background-color: #fff;\n                color: #110f0f;\n                border-bottom: 1px solid #f0f0f0;\n                min-height: 120px;\n                padding: 0px;\n              ">\n              <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                <div class="thumbnilBackground">\n                  <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                    alt="{{item.name}}" class="rectangl_img" />\n                  <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                    src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n                  <!-- <img src="{{item.iconUrl}}" style="width: auto !important;"> -->\n\n                  <span id="whatsnew_progressBar_{{item.id}}" style="\n                      position: absolute;\n                      left: 36px;\n                      top: 40px;\n                      padding: 3px;\n                      height: auto;\n                      color: red;\n                      text-align: center;\n                      font-size: 10px;\n                      font-weight: 900;\n                      border-radius: 25px;\n                    "></span>\n\n                  <div class="bottom-left">\n                    <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 30px"></i>\n                    <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 20px"></i>\n                    <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 20px"></i>\n                  </div>\n                </div>\n              </ion-thumbnail>\n\n              <div float-right style="position: absolute; top: 10px">\n                <b item-title style="white-space: normal; word-wrap: break-word"\n                  class="item-text-wrap">{{item.name}}</b>\n\n                <p class="tab-desc-size tab-desc-size1" item-subtitle\n                  *ngIf="item.description != \'\' && item.description !=\'null\'">\n                  <span *ngIf="item.description.length < 76"\n                    style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                  <span *ngIf="item.description.length > 75"\n                    style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                </p>\n              </div>\n\n              <div float-right style="\n                  position: absolute;\n                  bottom: 10px;\n                  right: 10px;\n                  color: #ccc;\n                ">\n                <ion-icon (click)="onEvent(\'onDownload\', item, $event)" style="margin-right: 10px"\n                  *ngIf="item.subTopicType != \'image\'">\n                  <i style="\n                      position: relative;\n                      top: 8px;\n                      right: 10px;\n                      font-size: 1.9em;\n                    " class="icon-video-icons-download can-download-icon new-font-icons"\n                    [ngClass]="(item.localUrl != \'\')?\'active\':\'\'"></i>\n                </ion-icon>\n                <ion-icon (click)="onEvent(\'onFavorite\', item, $event)" style="margin-right: 10px">\n                  <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                    [ngClass]="{\'active\': item.isFavourite}"></i>\n                </ion-icon>\n                <ion-icon style="margin-right: 10px" (click)="onEvent(\'onShare\', item, $event)">\n                  <i class="icon icon-list-share"></i>\n                </ion-icon>\n              </div>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="data.playlist && data.source == \'information\'">\n        <ion-col col-12 no-padding>\n          <ion-list no-margin>\n            <ion-item *ngFor="let item of data.playlist;let i = index" (click)="onPlaylistClick(item, i, \'information\')"\n              style="\n                background-color: #fff;\n                color: #110f0f;\n                border-bottom: 1px solid #f0f0f0;\n                min-height: 120px;\n                padding: 0px;\n              ">\n              <ion-thumbnail item-left style="margin: 0px 13px 0 0 !important" class="rectanglImg">\n                <div class="thumbnilBackground">\n                  <img *ngIf="item.localIconUrl ==\'\' || imgSHownOnline != \'none\'" [src]="item.iconUrl"\n                    alt="{{item.name}}" class="rectangl_img" />\n                  <img *ngIf="item.localIconUrl !=\'\' && imgSHownOnline == \'none\'"\n                    src="{{file.dataDirectory}}{{item.localIconUrl}}" alt="{{item.name}}" class="rectangl_img" />\n\n                  <!-- <img src="{{item.iconUrl}}" style="width: auto !important;"> -->\n\n                  <span id="whatsnew_progressBar_{{item.id}}" style="\n                      position: absolute;\n                      left: 36px;\n                      top: 40px;\n                      padding: 3px;\n                      height: auto;\n                      color: red;\n                      text-align: center;\n                      font-size: 10px;\n                      font-weight: 900;\n                      border-radius: 25px;\n                    "></span>\n\n                  <div class="bottom-left">\n                    <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon"\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 30"></i>\n                    <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon"\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 20"></i>\n                    <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon"\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color: #fff; font-size: 20"></i>\n                  </div>\n                </div>\n              </ion-thumbnail>\n\n              <div float-right style="position: absolute; top: 10px">\n                <b item-title style="white-space: normal; word-wrap: break-word"\n                  class="item-text-wrap">{{item.name}}</b>\n\n                <p class="tab-desc-size tab-desc-size1" item-subtitle\n                  *ngIf="item.description != \'\' && item.description !=\'null\'">\n                  <span *ngIf="item.description.length < 76"\n                    style="white-space: normal; word-wrap: break-word">{{item.description}}</span>\n                  <span *ngIf="item.description.length > 75"\n                    style="white-space: normal; word-wrap: break-word">{{item.description.slice(0,75)}}...</span>\n                </p>\n              </div>\n\n              <div float-right style="\n                  position: absolute;\n                  bottom: 10px;\n                  right: 10px;\n                  color: #ccc;\n                ">\n                <ion-icon (click)="onEvent(\'onInfoDownload\', item, $event)" style="margin-right: 10px"\n                  *ngIf="item.subTopicType != \'image\'">\n                  <i style="\n                      position: relative;\n                      top: 8px;\n                      right: 10px;\n                      font-size: 1.9em;\n                    " class="icon-video-icons-download can-download-icon new-font-icons"\n                    [ngClass]="(item.localUrl != \'\')?\'active\':\'\'"></i>\n                </ion-icon>\n                <ion-icon (click)="onEvent(\'onInfoFavorite\', item, $event)" style="margin-right: 10px">\n                  <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}"\n                    [ngClass]="{\'active\': item.isFavourite}"></i>\n                </ion-icon>\n                <ion-icon style="margin-right: 10px" (click)="onEvent(\'onShare\', item, $event)">\n                  <i class="icon icon-list-share"></i>\n                </ion-icon>\n              </div>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!data.playlist">\n        <ion-item class="ion-item-border fakeItem" style="">\n          <ion-avatar item-left>\n            <skeleton-item height="99px" width="176px"></skeleton-item>\n          </ion-avatar>\n          <h2></h2>\n          <h3></h3>\n          <p></p>\n          <p></p>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\whats-new-details\whats-new-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], WhatsNewDetailsPage);
    return WhatsNewDetailsPage;
}());

//# sourceMappingURL=whats-new-details.js.map

/***/ })

});
//# sourceMappingURL=16.js.map