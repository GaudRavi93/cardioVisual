webpackJsonp([19,36],{

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

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

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

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(81);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.newcategory = {};
        this.newtopics = {};
        this.search = '';
        this.download_status = 'complete';
        this.video_que_array = [];
        this.isRecording = true;
        this.loader = {};
        this.test = [];
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]);
        this.network_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]);
        this.social_sharing_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]);
        this.file_transfer_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["a" /* FileTransfer */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__services_toast_service__["a" /* ToastService */]);
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_15__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_16__ionic_native_clevertap__["a" /* CleverTap */]();
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_14__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_17__services_loading_service__["a" /* LoadingService */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.loading_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        localStorage.setItem('search_page', 'yes');
        this.clevertapDate = this.http_service_object.clevertapDate();
        var localPath = this.file_object.dataDirectory;
        this.path = localPath.replace(/file:\/\//g, "");
        this.data = this.nav_params_object.get('params');
        this.info_data = this.nav_params_object.get('info_result');
        this.playlist_data = this.nav_params_object.get('playlist');
        this.whatsnew_data = this.nav_params_object.get('whatsnew');
        var title_data_query = new Array("WHERE screen='whatsnew' AND is_active=1");
        this.database_provider_object.fetchAllData('whatsnewtitle', title_data_query).then(function (titleData) {
            _this.title_data = titleData;
            _this.topic_title = titleData[0].name;
            _this.expert_title = titleData[1].name;
            _this.calculator_title = titleData[2].name;
            _this.our_pick_title = titleData[3].name;
        });
        this.topics_data = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["where"](this.whatsnew_data, { type: 'topics' });
        this.calculators_data = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["where"](this.whatsnew_data, { type: 'calculators' });
        this.expert_data = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["where"](this.whatsnew_data, { type: 'speakers' });
        this.our_picks_data = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["where"](this.whatsnew_data, { type: 'curated_lists' });
        this.expert_data = this.expert_data.slice(0, 2);
        this.our_picks_data = this.our_picks_data.slice(0, 2);
        this.calculators_data = this.calculators_data.slice(0, 2);
        this.search = this.nav_params_object.get('search');
        this.network_status = 'connected';
        this.network_object.onDisconnect().subscribe(function () {
            _this.network_status = 'not_connected';
        });
        this.network_object.onConnect().subscribe(function () {
            _this.network_status = 'connected';
        });
        this.dtStr = this.http_service_object.dtStr();
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            setTimeout(function () {
                _this.network_check_object.getPageAction('SearchPage', 'start', '', localStorage.getItem('cv5usrType'));
            }, 1000);
        }
    }
    SearchPage.prototype.ionViewWillLeave = function () {
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            this.network_check_object.getPageAction('SearchPage', 'end', '', localStorage.getItem('cv5usrType'));
        }
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SearchPage.prototype.onEvent = function (event, item, e) {
        var _this = this;
        if (event == 'onItemClick') {
            if (item.subTopicType == 'image') {
                if (item.localUrl) {
                    this.navCtrl.push('DrawonPage', { drawnurl: item.localUrl, drawOnImgTitle: item.title, drawnCopyright: item.copyrightInfo, drawnSubtopicType: item.subTopicType, video_Name: item.videoName, local_Url: 'localUrl' });
                }
                else {
                    this.navCtrl.push('DrawonPage', { drawnurl: item.url, drawOnImgTitle: item.title, drawnCopyright: item.copyrightInfo, drawnSubtopicType: item.subTopicType });
                }
            }
            else if (item.subTopicType == 'document') {
                var network_type = this.network_check_object.getNetworkType();
                if (network_type == 'none') {
                    this.toast_controller_object.create({
                        message: 'You are now offline.',
                        position: 'bottom',
                        duration: 5000
                    }).present();
                }
                else {
                    var ref = this.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');
                    ref.on('loadstop').subscribe(function (event) {
                        _this.screen_orientation_object.unlock();
                    });
                    ref.on('exit').subscribe(function (event) {
                        _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                    });
                }
            }
            else if (item.subTopicType == 'other') {
                // code...
                //alert('other');
                switch (item.otherType) {
                    case "link":
                        var ref = this.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');
                        ref.on('loadstop').subscribe(function (event) {
                            _this.screen_orientation_object.unlock();
                        });
                        ref.on('exit').subscribe(function (event) {
                            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                        });
                        break;
                    case "qr_code":
                        // code...
                        this.navCtrl.push('QrcodePage', { previousPage: 'channellist', qrUrl: item.url });
                        break;
                }
            }
            var canShare = localStorage.getItem('userProAccess');
            if (item.isPaid == 0 || canShare == 'true') {
                if (item.subTopicType == 'video') {
                    if (item.categoryId > 3) {
                        var querystring = new Array("join information_data on information.id = information_data.id where information.id=" + item.id);
                        var table = 'information';
                    }
                    else {
                        var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + item.id);
                        var table = 'new_sub_topics';
                    }
                    this.database_provider_object.fetchAllData(table, querystring).then(function (data) {
                        //console.log('data tab page 2 -->'+JSON.stringify(data));
                        if (data[0].localUrl != '') {
                            if (item.categoryId > 3) {
                                _this.navCtrl.push('InformationVideoDetailsPage', { pageItem: data[0].name, coloR: data[0].hexcodeBase, icondash: data[0].iconName, data: data[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'SearchPage' });
                            }
                            else {
                                _this.navCtrl.push('VideoDetailsPage', { pageItem: data[0].name, coloR: data[0].hexcodeBase, icondash: data[0].iconName, data: data[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'SearchPage' });
                            }
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
                                    if (item.categoryId > 3) {
                                        _this.navCtrl.push('InformationVideoDetailsPage', { pageItem: data[0].name, coloR: data[0].hexcodeBase, icondash: data[0].iconName, data: data[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'SearchPage' });
                                    }
                                    else {
                                        _this.navCtrl.push('VideoDetailsPage', { pageItem: data[0].name, coloR: data[0].hexcodeBase, icondash: data[0].iconName, data: data[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'SearchPage' });
                                    }
                                }
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
        if (event == 'onDownload') {
            var canShare = localStorage.getItem('canDownloadAccess');
            if (item.subTopicType == 'image') {
                this.toast_service_object.mypresentToast("Only videos can be downloaded.", 2000);
            }
            else if (item.subTopicType == 'video') {
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
                                if (item.categoryId < 3) {
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
                                else {
                                    var info_downloadque = localStorage.getItem('InfoDownloadque');
                                    if (info_downloadque == null || info_downloadque == '') {
                                        info_downloadque = item.id;
                                    }
                                    else {
                                        info_downloadque = info_downloadque + ',' + item.id;
                                    }
                                    localStorage.setItem('InfoDownloadque', info_downloadque);
                                    _this.isInfoDownloadVideoMultiple();
                                }
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
            }
            e.stopPropagation();
        }
        if (event == 'onFavorite') {
            this.markasFavorite(item);
            e.stopPropagation();
        }
        if (event == 'onShare') {
            e.stopPropagation();
            //this.shareVideo(item);
            this.video_share_provider_object.shareSingleVideo(item);
        }
        if (event == 'onPlay') {
            var canShare = localStorage.getItem('canDownloadAccess');
            this.platform_object.ready().then(function () {
                var network_type = _this.network_check_object.getNetworkType();
                var playlistParams = {
                    "record_time": _this.dtStr,
                    "record_date": _this.clevertapDate,
                    "os": localStorage.getItem('getDevicePlatform'),
                    "modelNo": localStorage.getItem('modelNo'),
                    "deviceversion": localStorage.getItem('getDeviceversion'),
                    "userRoleId": localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "userEmail": localStorage.getItem('cv5userEmail'),
                    "playlistName": item.name,
                    "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                    "location": localStorage.getItem('location'),
                    "specialities": localStorage.getItem('usrSpecialities'),
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                };
                if (canShare == 'false' && item.is_paid == 1) {
                    var confirmPopup = _this.alert_controller_object.create({
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
                else if (canShare == 'true' && item.is_paid == 1) {
                    if (network_type == 'none') {
                        _this.toast_controller_object.create({
                            message: 'You are now offline.',
                            position: 'bottom',
                            duration: 5000
                        }).present();
                    }
                    else {
                        _this.clevertap_object.recordEventWithNameAndProps("clickedOnPlaylist", playlistParams);
                        _this.navCtrl.push('VideoDetailsPage', { data: item, type: 'playlist', index: 0, 'header': 'hide', 'sendTo': 'SearchPage' });
                    }
                }
                else if (item.is_paid == 0) {
                    if (network_type == 'none') {
                        _this.toast_controller_object.create({
                            message: 'You are now offline.',
                            position: 'bottom',
                            duration: 5000
                        }).present();
                    }
                    else {
                        _this.clevertap_object.recordEventWithNameAndProps("clickedOnPlaylist", playlistParams);
                        _this.navCtrl.push('VideoDetailsPage', { data: item, type: 'playlist', index: 0, 'header': 'hide', 'sendTo': 'SearchPage' });
                    }
                }
            });
        }
        if (event == 'onPlaylistFavorite') {
            this.markPlaylistasFavorite(item);
        }
        if (event == 'onPlaylistAdd') {
            if (item.categoryId > 3) {
                this.addtoplaylist(item, 'information');
            }
            else {
                this.addtoplaylist(item, 'education');
            }
            e.stopPropagation();
        }
    };
    SearchPage.prototype.shareVideo = function (shareVideo) {
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
                //console.log('shareVideo--->'+JSON.stringify(shareVideo));
                var title = shareVideo.title;
                var name = shareVideo.name;
                var description = shareVideo.description;
                var iconUrl = shareVideo.iconUrl;
                var url = shareVideo.shareUrl;
                var id = shareVideo.id;
                var options = {
                    message: name + ' - ' + description + '. Shared via CardioVisual App: The Heart Health App developed by Cardiologists.',
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
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                };
                _this.clevertap_object.recordEventWithNameAndProps("sharedVideo", params);
                _this.social_sharing_object.shareWithOptions(options);
            }
        });
    };
    SearchPage.prototype.markasFavorite = function (item) {
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
                if (item.isFavourite == 0) {
                    //set isFavourite == 1
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        if (item.categoryId > 3) {
                            _this.database_provider_object.setinformationFavorites(val, item.id);
                        }
                        else {
                            _this.database_provider_object.setFavorites(val, item.id);
                        }
                        _this.toast_service_object.presentToast("Added to Favourites.");
                    });
                }
                else {
                    //set isFavourite == 0
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        if (item.categoryId > 3) {
                            _this.database_provider_object.setinformationFavorites(val, item.id);
                        }
                        else {
                            _this.database_provider_object.setFavorites(val, item.id);
                        }
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                item.isFavourite = !item.isFavourite;
            }
        });
    };
    SearchPage.prototype.isDownloadVideoMultiple = function () {
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
                progress_ids_arr = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["uniq"](progress_ids_arr);
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
                    if (item.downloaded == 1) {
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](new_ids_arr, function (value, key) {
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
                        var filename = item.videoName;
                        fileTransfer.onProgress(function (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                _this.isDownloading = true;
                                var perc = (progressEvent.loaded / progressEvent.total) * 100;
                                _this.perc1 = perc.toFixed(1);
                                var loader = document.getElementById("progressBar_search_" + item.id);
                                loader.style.background = '#fff';
                                loader.innerHTML = _this.perc1 + '%';
                                var loader1 = document.getElementById("static_download_prog");
                                //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                                loader1.innerHTML = 'Downloading is in progress...';
                                loader1.style.padding = '10px';
                                loader1.style.display = 'block';
                                if (_this.perc1 == 100) {
                                    loader.innerHTML = '';
                                    loader.style.background = '';
                                    loader1.innerHTML = '';
                                    loader1.style.padding = '';
                                    loader1.style.display = '';
                                }
                            }
                        });
                        fileTransfer.download(item.url, _this.file_object.dataDirectory + 'V2CardioMedia/' + filename).then(function (entry) {
                            var video_url = 'V2CardioMedia/' + filename;
                            var querystring = new Array(" UPDATE subtopic_data SET localUrl = '" + video_url + "', downloaded = 1 WHERE id = " + item.id);
                            _this.database_provider_object.updateData(querystring);
                            var iconfilename = item.iconUrl.split("/").pop();
                            console.log('iconfilename--->' + iconfilename);
                            _this.downloadfile(item.iconUrl, iconfilename, item.id, 'education');
                            _this.downloadapi(item.id, _this.userdata.liveId, 'education');
                            _this.toast_service_object.mypresentToast('Finished downloading : "' + item.name + '"', 2000);
                            var loader3 = document.getElementById("download_" + item.id);
                            loader3.classList.add("active");
                            if (item.downloaded == 0)
                                item.downloaded = 1;
                        }, function (error) {
                            _this.toast_service_object.presentToast("Download failed! please try again.");
                        });
                        que_ids = localStorage.getItem('Downloadque');
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](new_ids_arr, function (value, key) {
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
                }, function (e) {
                    //console.log('586 error '+JSON.stringify(e))
                });
            }
        });
    };
    //download function
    SearchPage.prototype.downloadfile = function (url, name, id, type) {
        var _this = this;
        var fileTransfer = this.file_transfer_object.create();
        fileTransfer.download(url, this.file_object.dataDirectory + 'icons/' + name).then(function (entry) {
            var icon_url = 'icons/' + name;
            if (type = 'education') {
                var querystring = new Array(" UPDATE subtopic_data SET localIconUrl = '" + icon_url + "', downloaded = 1 WHERE id = " + id + " ");
            }
            else if (type = 'information') {
                var querystring = new Array(" UPDATE information_data SET localIconUrl = '" + icon_url + "', downloaded = 1 WHERE id = " + id + " ");
            }
            _this.database_provider_object.updateData(querystring);
        });
    };
    //insert query to api database
    SearchPage.prototype.downloadapi = function (groupid, userid, type) {
        var post_url = this.http_service_object.getPosturl('downloads');
        var params = {};
        if (type == 'education') {
            params = { "cardiovisualUserId": userid, "subtopicId": groupid };
        }
        else if (type == 'information') {
            params = { "cardiovisualUserId": userid, "informationId": groupid };
        }
        this.http_object.post(post_url, params).subscribe(function (data) {
            var response = JSON.parse(data['_body']);
            var response_data = JSON.stringify(response);
        }, function (error) {
            console.log(error);
        });
    };
    // this will remove only beginning and end of string whitespace... By : Sanjeev
    SearchPage.prototype.trimming_fn = function (x) {
        return x ? x.replace(/^\s+|\s+$/gm, '') : '';
    };
    SearchPage.prototype.isInfoDownloadVideoMultiple = function () {
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
                var que_ids = localStorage.getItem('InfoDownloadque');
                var progress_ids_arr = que_ids.split(',').map(Number);
                progress_ids_arr = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["uniq"](progress_ids_arr);
                que_ids = progress_ids_arr.toString();
                localStorage.setItem('InfoDownloadque', que_ids);
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
                    if (item.downloaded == 1) {
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem('InfoDownloadque', que_ids);
                        _this.toast_service_object.presentToast('"' + item.name + '" already downloaded.');
                        if (que_ids == '') {
                            localStorage.setItem('InfoDownloadque', '');
                        }
                    }
                    else {
                        _this.toast_service_object.mypresentToast('Downloading : "' + item.name + '"', 2000);
                        var filename = item.videoName;
                        fileTransfer.onProgress(function (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                _this.isDownloading = true;
                                var perc = (progressEvent.loaded / progressEvent.total) * 100;
                                _this.perc1 = perc.toFixed(1);
                                var loader = document.getElementById("progressBar_search_" + item.id);
                                loader.style.background = '#fff';
                                loader.innerHTML = _this.perc1 + '%';
                                var loader1 = document.getElementById("static_download_prog");
                                //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                                loader1.innerHTML = 'Downloading is in progress...';
                                loader1.style.padding = '10px';
                                loader1.style.display = 'block';
                                if (_this.perc1 == 100) {
                                    loader.innerHTML = '';
                                    loader.style.background = '';
                                    loader1.innerHTML = '';
                                    loader1.style.padding = '';
                                    loader1.style.display = '';
                                }
                            }
                        });
                        fileTransfer.download(item.url, _this.file_object.dataDirectory + 'V2CardioMedia/' + filename).then(function (entry) {
                            var video_url = 'V2CardioMedia/' + filename;
                            var querystring = new Array(" UPDATE information_data SET localUrl = '" + video_url + "', downloaded = 1 WHERE id = " + item.id);
                            _this.database_provider_object.updateData(querystring);
                            var iconfilename = item.iconUrl.split("/").pop();
                            _this.downloadfile(item.iconUrl, iconfilename, item.id, 'information');
                            _this.downloadapi(item.id, _this.userdata.liveId, 'information');
                            _this.toast_service_object.mypresentToast('Finished downloading : "' + item.name + '"', 2000);
                            var loader3 = document.getElementById("download_" + item.id);
                            loader3.classList.add("active");
                            if (item.downloaded == 0)
                                item.downloaded = 1;
                        }, function (error) {
                            _this.toast_service_object.presentToast("Download failed! please try again.");
                        });
                        que_ids = localStorage.getItem('InfoDownloadque');
                        var new_ids_arr = que_ids.split(',').map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        localStorage.setItem('InfoDownloadque', que_ids);
                    }
                    if (que_ids != '') {
                        _this.isInfoDownloadVideoMultiple();
                    }
                    else if (que_ids == '') {
                        localStorage.setItem('InfoDownloadque', '');
                    }
                }, function (e) {
                    //console.log('586 error '+JSON.stringify(e))
                });
            }
        });
    };
    SearchPage.prototype.seeAllClick = function (search, type) {
        var _this = this;
        var search_term = '';
        var that = this;
        var where_query = '';
        var only_name_query = '';
        var listingData = [];
        var result = [];
        var info_result = [];
        var params = '';
        var exclude_word = ['is', 'to', 'and', 'are', 'i', 'am', 'how', 'why', 'what', 'dr', 'Dr'];
        var search_str = '';
        var user_type = localStorage.getItem('cv5usrType');
        this.loading_service_object.show();
        if (!(Array.isArray(search))) {
            search = search.split(" ");
        }
        __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](search, function (val, key) {
            search_term = that.trimming_fn(val);
            if (search_term != '') {
                var search_arr = search_term.split(" ");
                __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](search_arr, function (val1, key1) {
                    var result = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["without"](exclude_word, val1.toLowerCase());
                    if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](exclude_word) == __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](result)) {
                        if (search_str == '') {
                            search_str = val1;
                        }
                        else {
                            search_str = search_str + ' ' + val1;
                        }
                        //where_query = where_query + " name like '% "+val1+" %' OR description like '% "+val1+" %' OR name like '%"+val1+"%' OR description like'%"+val1+"%' OR";
                        where_query = where_query + " name like '% " + val1 + " %' OR name like '%" + val1 + " %' OR name like '% " + val1 + "%' OR description like '% " + val1 + " %' OR description like '" + val1 + " %' OR description like '% " + val1 + "' OR";
                        only_name_query = only_name_query + " name like '% " + val1 + " %' OR name like '%" + val1 + "%' OR";
                    }
                });
            }
        });
        where_query = where_query.replace(/ OR\s*$/, "");
        only_name_query = only_name_query.replace(/ OR\s*$/, "");
        where_query = " name like '%" + search_str + "%' OR " + where_query;
        switch (type) {
            case 'topics':
                params = 'Topics';
                var whatsnew_query = new Array(" where (" + only_name_query + ") AND type='topics' AND is_active=1");
                this.database_provider_object.fetchAllData('whatsnew', whatsnew_query).then(function (whatsnew_result) {
                    listingData = whatsnew_result;
                    _this.navCtrl.push('WhatsNewSeeallPage', { params: params, ListingData: listingData, title_data: _this.title_data });
                    _this.loading_service_object.hide();
                });
                break;
            case 'experts':
                params = 'Experts';
                var whatsnew_query = new Array(" where (" + only_name_query + ") AND type='speakers' AND is_active=1");
                this.database_provider_object.fetchAllData('whatsnew', whatsnew_query).then(function (whatsnew_result) {
                    listingData = whatsnew_result;
                    _this.navCtrl.push('WhatsNewSeeallPage', { params: params, ListingData: listingData, title_data: _this.title_data });
                    _this.loading_service_object.hide();
                });
                break;
            case 'calculator':
                params = 'Calculators';
                var whatsnew_query = new Array(" where (" + only_name_query + ") AND type='calculators' AND is_active=1");
                this.database_provider_object.fetchAllData('whatsnew', whatsnew_query).then(function (whatsnew_result) {
                    listingData = whatsnew_result;
                    _this.navCtrl.push('WhatsNewSeeallPage', { params: params, ListingData: listingData, title_data: _this.title_data });
                    _this.loading_service_object.hide();
                });
                break;
            case 'our_pick':
                params = 'Playlist';
                var whatsnew_query = new Array(" where (" + only_name_query + ") AND type='curated_lists' AND is_active=1");
                this.database_provider_object.fetchAllData('whatsnew', whatsnew_query).then(function (whatsnew_result) {
                    listingData = whatsnew_result;
                    _this.navCtrl.push('WhatsNewSeeallPage', { params: params, ListingData: listingData, title_data: _this.title_data });
                    _this.loading_service_object.hide();
                });
                break;
            case 'playlist':
                var playlist_query = new Array(" where (is_for ='" + user_type + "' OR is_for = 'all') AND (" + where_query + ") AND active=1");
                this.database_provider_object.fetchAllData('playlists', playlist_query).then(function (playlist_result) {
                    listingData = playlist_result;
                    _this.navCtrl.push("PlaylistPage", { 'request_from': 'search_page', 'search_data': listingData });
                    _this.loading_service_object.hide();
                });
                break;
            case 'videos':
                var querystring = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where (" + where_query + ") AND isActive=1 AND topicId !=0 AND categoryId !=0");
                this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data) {
                    result = result.concat(data);
                    var querystring_info = new Array(" join information_data on information.id = information_data.id where (" + where_query + ") AND isActive=1 AND topicId !=0 AND categoryId !=0");
                    _this.database_provider_object.fetchAllData('information', querystring_info).then(function (info_data) {
                        info_result = info_data;
                        _this.navCtrl.push("VideoListPage", { 'data': 'search_page', 'education_data': result, 'info_data': info_result });
                        _this.loading_service_object.hide();
                    });
                });
                break;
        }
    };
    SearchPage.prototype.getArraysIntersection = function (a1, a2) {
        return a1.filter(function (n) {
            return a2.indexOf(n) !== -1;
        });
    };
    SearchPage.prototype.subtopicQueryProvider = function (tableName, subTopicQuery, list_json) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database_provider_object
                .fetchAllData(tableName, subTopicQuery)
                .then(function (topic_data) {
                var topic_ids = "['" + __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["pluck"](topic_data, "id") + "']";
                var filtered_valid_ids = _this.getArraysIntersection(list_json, topic_ids);
                resolve({ valid_ids: parseInt(filtered_valid_ids) });
            })
                .catch(function (error) {
                console.log("Error occurred");
                reject({ text: "Error occurred" });
            });
        });
    };
    SearchPage.prototype.subtopicDetailQueryProvider = function (subtopicTable, subTopicDetailQuery) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database_provider_object
                .fetchAllData(subtopicTable, subTopicDetailQuery)
                .then(function (topic_data) {
                resolve({ subtopicData: topic_data[0] });
            })
                .catch(function (error) {
                console.log("Error occurred");
                reject({ texterror: "Error occurred-->" + error });
            });
        });
    };
    SearchPage.prototype.gotoDetailPage = function (item, type, list) {
        var _this = this;
        switch (type) {
            case "expert_playlist":
                this.loading_service_object.show();
                var list_json = JSON.parse(item.list_values);
                //console.log("whatsnew topic" + JSON.stringify(list_json));
                var subtopicQueryResult = "";
                if (item.source == "education") {
                    var subtopicTable = "new_sub_topics";
                    var subTopicQuery = new Array("where new_sub_topics.id IN (" + list_json + ") AND isActive = 1");
                    this.subtopicQueryProvider(subtopicTable, subTopicQuery, list_json).then(function (subtopicQueryResult) {
                        console.log(JSON.stringify(subtopicQueryResult));
                        var subTopicDetailQuery = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                            subtopicQueryResult["valid_ids"] +
                            " AND isActive = 1");
                        console.log(subTopicDetailQuery);
                        _this.subtopicDetailQueryProvider(subtopicTable, subTopicDetailQuery).then(function (subtopicDetailQueryResult) {
                            console.log(JSON.stringify(subtopicDetailQueryResult));
                            var topicData = subtopicDetailQueryResult["subtopicData"];
                            //console.log("pqr---->" + topicData);
                            //this.forClevertapRecords(item, type, list);
                            _this.navCtrl.push("WhatsNewDetailsPage", {
                                data: item,
                                type: item.template,
                                index: 0,
                                header: "hide",
                                display_playlist: topicData,
                                sendTo: list,
                            });
                            _this.loading_service_object.hide();
                        });
                    });
                }
                else {
                    var tableName = "information";
                    var subTopicQuery = new Array("where information.id IN (" + list_json + ") AND isActive = 1");
                    this.subtopicQueryProvider(tableName, subTopicQuery, list_json).then(function (infoQueryResult) {
                        var subTopicDetailQuery = new Array("join information_data on information.id = information_data.id where information.id = " +
                            infoQueryResult["valid_ids"] +
                            " AND isActive = 1");
                        _this.subtopicDetailQueryProvider(subtopicTable, subTopicDetailQuery).then(function (infoDetailQueryResult) {
                            console.log(JSON.stringify(infoDetailQueryResult));
                            var infotopicData = infoDetailQueryResult["subtopicData"];
                            //console.log("pqr---->" + infotopicData);
                            //this.forClevertapRecords(item, type, list);
                            _this.navCtrl.push("WhatsNewDetailsPage", {
                                data: item,
                                type: item.template,
                                index: 0,
                                header: "hide",
                                display_playlist: infotopicData,
                                sendTo: list,
                            });
                            _this.loading_service_object.hide();
                        });
                    });
                }
                break;
            case "video_detail":
                this.loading_service_object.show();
                var list_json = JSON.parse(item.list_values);
                if (item.source == "education") {
                    var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                        list_json.Condition[0] +
                        " AND isActive = 1");
                    this.database_provider_object
                        .fetchAllData("new_sub_topics", json_query)
                        .then(function (topic_data) {
                        //this.forClevertapRecords(item, type, list);
                        _this.navCtrl.push("WhatsNewDetailsPage", {
                            data: item,
                            type: type,
                            index: 0,
                            header: "hide",
                            display_data: topic_data[0],
                            sendTo: list,
                        });
                        _this.loading_service_object.hide();
                    });
                }
                else if (item.source == "information") {
                    var json_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                        list_json.Expert[0] +
                        " AND isActive = 1");
                    this.database_provider_object
                        .fetchAllData("information", json_query)
                        .then(function (topic_data) {
                        //this.forClevertapRecords(item, type, list);
                        _this.navCtrl.push("WhatsNewDetailsPage", {
                            data: item,
                            type: type,
                            index: 0,
                            header: "hide",
                            display_data: topic_data[0],
                            sendTo: list,
                        });
                        _this.loading_service_object.hide();
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
                }
                else {
                    //this.forClevertapRecords(item, type, list);
                    if (item.list_values == undefined ||
                        item.list_values == "undefined") {
                        var ref = this.in_app_browser_object.create(item.blog_link, "_blank", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
                    }
                    else {
                        var values = JSON.parse(item.list_values);
                        var ref = this.in_app_browser_object.create(values.url, "_blank", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
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
                }
                else {
                    //this.forClevertapRecords(item, type, list);
                    var url = "https://twitter.com/cardiovisualapp/status/" + item.tweet_id;
                    var ref = this.in_app_browser_object.create(url, "_system", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
                }
                break;
            case "tab_list":
                //this.forClevertapRecords(item, type, list);
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
                var options = {
                    successCallback: function () {
                        console.log("Video played");
                    },
                    errorCallback: function (e) {
                        console.log("Error streaming");
                    },
                    //orientation: 'landscape',
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
                }
                else {
                    //this.streamingMedia.playVideo(video_url, options);
                }
                break;
        }
    };
    SearchPage.prototype.toggleGroup = function (group) {
        group.show = !group.show;
        if (group.show === true) {
            this.loader = this.loading_controller_object.create({
                spinner: 'crescent'
            });
            this.loader.present();
            var subtopics_id = group.sub_topic_ids;
            subtopics_id = subtopics_id.split(', ');
            var that = this;
            var data1 = [];
            that.test = [];
            __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["each"](subtopics_id, function (value, index) {
                var query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                that.database_provider_object.fetchAllData('new_sub_topics', query).then(function (data) {
                    if (data.length > 0) {
                        that.test.push(data[0]);
                    }
                });
            });
            group.items = that.test;
            this.loader.dismiss();
        }
    };
    SearchPage.prototype.isGroupShown = function (group) {
        return group.show;
    };
    SearchPage.prototype.markPlaylistasFavorite = function (group) {
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
                if (group.isFavourite == 0) {
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        _this.database_provider_object.setPlaylistFavorites(val, group.id);
                        //this.toast_service_object.presentToast("Added To My Playlists.");
                        _this.toast_service_object.presentToast("Added To Favorite Playlists.");
                    });
                }
                else {
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        _this.database_provider_object.setPlaylistFavorites(val, group.id);
                        //this.toast_service_object.presentToast("Removed From My Playlists.");
                        _this.toast_service_object.presentToast("Removed From Favorite Playlists.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    SearchPage.prototype.addtoplaylist = function (item, contentType) {
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
    ], SearchPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SearchPage.prototype, "content", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\search\search.html"*/'\n\n<!-- <ion-header clean-header  class="search" [isTabs]="false" [hideMenu]="true"></ion-header> -->\n<ion-header clean-header  class="search" [isTabs]="true" [hideMenu]="true"></ion-header>\n<!--- Theme Parallax Product -->\n<!--- Header Big Image-->\n  \n<ion-content elastic-header *ngIf="data != null" style="background-color: #FFF;">\n  \n  <span id="static_download_prog" style="padding:0px; color:red; text-align:center !important;margin:0;display:block;"></span>\n  <ion-grid no-padding *ngIf="(data.length > 0)||(info_data.length > 0) || (playlist_data.length > 0) || (whatsnew_data.length > 0)">\n    \n    <ion-row>\n      <ion-col col-12>\n        <ion-list no-margin>\n          <p style="margin:0;padding:4px;background-color: #C54333;color:#FFF;text-align: center; height: 49px;"><b class="search_header">Search Result</b></p>\n        </ion-list>\n      </ion-col>\n\n      <ion-col col-12 *ngIf="topics_data.length > 0">\n        <ion-list no-margin>\n\n          <div style="margin:10px 5px;padding:5px 0px;background-color: #FFF;">\n            <div class="div-left" style="font-size:20px;"><b>{{topic_title}}</b></div>\n            <div class="div-right forlabel" tappable (click)="seeAllClick(search, \'topics\')" style=""><b>See all</b></div>\n          </div>\n\n          <!-- <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let topic of topics_data;">\n              <div class="collapsible-header">\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <h2 padding-left item-title class="item-text-wrap">\n                    <b style="white-space: normal;word-wrap: break-word;">{{topic.name}}</b>\n                  </h2>                  \n                </ion-item>\n              </div>\n\n            </li>\n          </ul> -->\n          <div style="margin-top: 25px;">\n            <div class="inline inlineGapTopic flex-container" *ngFor="let topic of topics_data" (click)="gotoDetailPage(topic, topic.template, \'Featured Topics\')" style="overflow-x: auto;">\n              <div class="" [ngClass]="{\'textBreak\': topic.name.length <= 11, \'longtextBreak\': topic.name.length > 10 }"> \n                <b> {{topic.name}}</b> \n              </div>\n            </div>\n          </div>  \n        </ion-list>        \n      </ion-col>\n\n      <ion-col col-12 *ngIf="expert_data.length > 0" style="margin-top:5px;">\n        <ion-list no-margin>\n\n          <div style="margin:10px 5px;padding:5px 0px;background-color: #FFF;">\n            <div class="div-left" style="font-size:20px;"><b>{{expert_title}}</b></div>\n            <div class="div-right forlabel" tappable (click)="seeAllClick(search, \'experts\')"><b>See all</b></div>\n          </div>\n\n          <!-- <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let expert of expert_data;">\n              <div class="collapsible-header">\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <h2 padding-left item-title class="item-text-wrap">\n                    <b style="white-space: normal;word-wrap: break-word;">{{expert.name}}</b>\n                  </h2>                  \n                </ion-item>\n              </div>\n\n            </li>\n          </ul> -->\n          <div style="margin-top: 20px;">\n            <div class="inline inlineGap" *ngFor="let expert of expert_data" (click)="gotoDetailPage(expert, expert.template, \'Experts\')" style="height:130px;">\n              <div class="expertimg img-overlay">\n                <img src="{{expert.image_url}}"  class="expertClass" />\n                <!--<img *ngIf="expert.local_image_url == \'\' || expert.local_image_url == null" src="{{expert.image_url}}"  class="expertClass" />-->\n                <!--<img *ngIf="expert.local_image_url != \'\' && expert.local_image_url != null" src="{{path}}{{expert.local_image_url}}" alt="" class="expertClass" />-->\n\n              </div>\n\n              <div class="expertName"><b style="">{{expert.name}}</b></div>\n\n            </div>\n          </div>  \n        </ion-list>        \n      </ion-col>\n\n      <ion-col col-12 *ngIf="calculators_data.length > 0" style="margin-top:5px;">\n        <ion-list no-margin>\n\n          <div style="margin:10px 5px;padding:5px 0px;background-color: #FFF;">\n            <div class="div-left" style="font-size:20px;"><b>{{calculator_title}}</b></div>\n            <div class="div-right forlabel" tappable (click)="seeAllClick(search, \'calculator\')"><b>See all</b></div>\n          </div>\n\n          <!-- <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let calculator of calculators_data;">\n              <div class="collapsible-header">\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <h2 padding-left item-title class="item-text-wrap">\n                    <b style="white-space: normal;word-wrap: break-word;">{{calculator.name}}</b>\n                  </h2>                  \n                </ion-item>\n              </div>\n\n            </li>\n          </ul> -->\n          <div style="margin-top:25px;">\n            <div class="inline inlineGapTopic flex-container"  *ngFor="let calculator of calculators_data" (click)="gotoDetailPage(calculator, calculator.template, \'Calculator\')" style="overflow-x: auto;">\n              <div class="" [ngClass]="{\'textBreak\': calculator.name.length <= 11, \'longtextBreak\': calculator.name.length > 10 }"> \n                <b> {{calculator.name}}</b> \n              </div>\n            </div>\n          </div>  \n\n        </ion-list>        \n      </ion-col>\n\n      <ion-col col-12 *ngIf="our_picks_data.length > 0" style="margin-top:5px;">\n        <ion-list no-margin>\n\n          <div style="margin:10px 5px;padding:5px 0px;background-color: #FFF;">\n            <div class="div-left" style="font-size:20px;"><b>{{our_pick_title}}</b></div>\n            <div class="div-right forlabel" tappable (click)="seeAllClick(search, \'our_pick\')"><b>See all</b></div>\n          </div>\n\n          <!-- <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let our_pick of our_picks_data;">\n              <div class="collapsible-header">\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <h2 padding-left item-title class="item-text-wrap">\n                    <b style="white-space: normal;word-wrap: break-word;">{{our_pick.name}}</b>\n                  </h2>                  \n                </ion-item>\n              </div>\n\n            </li>\n          </ul> -->\n          <div style="margin-top:25px;">\n            <div class="inline inlineGapPlaylist" *ngFor="let our_pick of our_picks_data" (click)="gotoDetailPage(our_pick, our_pick.template, \'Our Picks\')" style="height:130px;">\n              <div class="expertimg">\n                <img src="{{our_pick.image_url}}" class="expertPlaylistClass"/>\n                <!--<img *ngIf="our_pick.local_image_url == \'\' && our_pick.local_image_url == null" src="{{our_pick.image_url}}"  class="expertPlaylistClass" />-->\n                <!--<img *ngIf="our_pick.local_image_url !=\'\' && our_pick.local_image_url != null" src="{{path}}{{our_pick.local_image_url}}"  class="expertPlaylistClass" />-->\n              </div>\n\n              <div class="expertPlaylistName">\n                <b style="">{{our_pick.name}}</b>\n              </div>\n            </div>\n          </div>  \n        </ion-list>        \n      </ion-col>  \n      \n      <ion-col col-12 *ngIf="playlist_data.length > 0" style="margin-top:5px;">\n        <ion-list no-margin>\n\n          <div style="margin:10px 5px;padding:5px 0px;background-color: #FFF;">\n            <div class="div-left" style="font-size:20px;"><b>PLAYLISTS</b></div>\n            <div class="div-right forlabel" tappable (click)="seeAllClick(search, \'playlist\')"><b>See all</b></div>\n          </div>\n\n          <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let playlist of playlist_data;">\n              <div tappable class="collapsible-header playlist_header" (click)="toggleGroup(playlist)" style="">\n                <ion-item tappable no-padding no-margin style="background-color:#FFFFFF;height:135px;" [ngClass]="{\'hide_row\': playlist.isFavourite == 0 && request_from ==\'profile_page\'}">\n                  <ion-thumbnail item-start no-margin class="rectanglImg">\n                    <div class="thumbnilBackground">\n                      <img src="{{playlist.URL}}" alt="{{playlist.title}}" style="width: 128px !important;height: 72px !important; border:1px solid black;" class="rectangl_img" />\n                      \n                      <i *ngIf="playlist.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': playlist.hexcodeContrast }" style="position: relative;left: 7px;bottom: 23px;color:#FFF;"></i>\n                      <i *ngIf="playlist.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': playlist.hexcodeContrast }" style="position: relative;left: 7px;bottom: 23px;color:#FFF;"></i>\n                      <i *ngIf="playlist.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': playlist.hexcodeContrast }" style="position: relative;left: 7px;bottom: 23px;color:#FFF;"></i>\n                    </div>  \n                  </ion-thumbnail>\n                  <h2 padding-left item-title class="item-text-wrap" style="white-space: normal;">\n                    <b class="item-text-wrap">{{playlist.name}}</b>\n                  </h2>\n\n                  <h3 padding-left>{{playlist.description}}</h3>\n                  \n                  <!-- <p class="tab-desc-size" padding-left item-subtitle *ngIf="playlist.long_description != \'\' && playlist.long_description !=\'null\'">\n                    <span *ngIf="playlist.long_description.length < 76" style="white-space: normal;word-wrap: break-word;">{{playlist.long_description}}</span>\n                    <span *ngIf="group.long_description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{playlist.long_description.slice(0,75)}}...</span>\n                  </p> -->\n\n                  <div tappable float-right style="">\n                    <ion-icon  style="position:relative;right:23px;" *ngIf="request_from !=\'profile_page\'">\n                      <i class="icon icon-cardio-like" (click)="onEvent(\'onPlaylistFavorite\', playlist, $event)" [ngClass]="{\'active\': playlist.isFavourite}" [style.color]="(playlist.isFavourite == 1) ? \'#c54334\' : \'#CCC\'"></i>\n                    </ion-icon>\n\n                    <ion-icon  style="position:absolute;right:80px;bottom:12px;" *ngIf="request_from ==\'profile_page\'">\n                      <i class="icon icon-cardio-like" (click)="onEvent(\'onPlaylistFavorite\', playlist, $event)" [ngClass]="{\'active\': playlist.isFavourite}" [style.color]="(playlist.isFavourite == 1) ? \'#c54334\' : \'#CCC\'"></i>\n                    </ion-icon>\n\n                    <ion-icon *ngIf="request_from !=\'profile_page\'" style="position:relative;right:16px;" (click)="onEvent(\'onPlay\', playlist, $event)"  >\n                      <i style="color: #000 !important;" class="icon-list-play-all new-font-icons-playlist" ></i>\n                    </ion-icon>\n\n                    <ion-icon  *ngIf="request_from ==\'profile_page\'" style="position:absolute;right:50px;bottom:12px;" (click)="onEvent(\'onPlay\', playlist, $event)"  >\n                      <i style="color: #000 !important;" class="icon-list-play-all new-font-icons-playlist" ></i>\n                    </ion-icon>\n\n                    <ion-icon *ngIf="request_from !=\'profile_page\'" style="position:relative; right:4px;"  (click)="onEvent(\'onShare\', playlist, $event)">\n                      <i style="font-size:1.2em;" *ngIf="playlist.shareUrl != null" class="icon icon-list-share"></i>\n                    </ion-icon>\n\n                    <ion-icon *ngIf="request_from ==\'profile_page\'" style="position:absolute; right:14px;bottom:12px;"  (click)="onEvent(\'onShare\', playlist, $event)">\n                      <i style="font-size:1.2em;" *ngIf="playlist.shareUrl != null" class="icon icon-list-share"></i>\n                    </ion-icon>\n                  </div>\n                </ion-item>\n              </div>\n\n              <!-- display playlist content -->\n              <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(playlist) }" [hidden]="!isGroupShown(playlist)">\n                <ion-item tappable no-lines *ngFor="let item of playlist.items;" (click)="onEvent(\'onPlay\', playlist, $event)" style="color:#FFF;background-color:#e6e7e8;height:150px;">\n                  <ion-thumbnail item-start class="rectanglImg">\n                    <div class="thumbnilBackground">\n                      <img src="{{item.iconUrl}}" style="" alt="{{item.title}}" class="rectangl_img">\n                      <!--<img *ngIf="item.localIconUrl ==\'\'" src="{{item.iconUrl}}" style="" alt="{{item.title}}" class="rectangl_img">-->\n                       <!--<img *ngIf="item.localIconUrl !=\'\'" src="{{path}}{{item.localIconUrl}}" style="" alt="{{item.title}}" class="rectangl_img">-->\n                        <div class="bottom-left-1" style="position: absolute;bottom:36px;left:20px;">\n                          <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF;font-size: 30;"></i>\n                          <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 20;"></i>\n                          <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 20;"></i>\n                        </div>\n                    </div> \n                  </ion-thumbnail>\n\n                  <h2 padding-left item-title class="item-text-wrap" style="font-size:1.4rem !important;white-space: normal;">\n                    <b class="38" style="color:#000;">{{item.title}}</b>                  \n\n                  </h2>\n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75" style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0, 75)}}...</span>\n                  </p>\n                </ion-item>\n              </div>\n            </li>  \n          </ul>\n        </ion-list>  \n      </ion-col> \n\n      <ion-col col-12 *ngIf="data.length > 0" style="margin-top:5px;">\n        <ion-list no-margin>\n\n          <div style="margin:10px 5px;padding:5px 0px;background-color: #FFF;">\n            <div class="div-left" style="font-size:20px;"><b>VIDEOS</b></div>\n            <div class="div-right forlabel" tappable (click)="seeAllClick(search, \'videos\')"><b>See all</b></div>\n          </div>\n\n          <ul no-margin no-padding class="collapsible">\n\n            <li *ngFor="let item of data;">\n              <div class="collapsible-header">\n                <ion-item no-padding class="ion-item-border itemClassHeight" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <ion-thumbnail item-start no-margin class="rectanglImg">\n                    <div class="thumbnilBackground">\n                      <img [src]="item.iconUrl" alt="{{item.name}}" class="rectangl_img" />\n\n                      <span id="progressBar_search_{{item.id}}" style="position: absolute;left: 60px;top: 50px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n                      </span>\n                       \n                      <div class="bottom-left">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'document\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <span *ngIf="item.subTopicType == \'other\'">\n                          <i *ngIf="item.otherType == \'link\'" class="icon-link subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                          <i *ngIf="item.otherType == \'qr_code\'" class="icon-qrcode subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        </span>\n                      </div>                    \n                    </div>                   \n                  </ion-thumbnail>\n                  \n                  <h2 padding-left item-title class="item-text-wrap">\n                    <b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b>\n                  </h2>\n                  \n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0,75)}}...</span>\n                  </p>\n\n                  <div float-right style="color:#CCC;" class="video-share-div">\n                    <ion-icon style="position:relative; margin-right:10px; right:8px; top:10px;"  *ngIf="item.subTopicType !== \'image\' && item.subTopicType !== \'other\' && item.subTopicType !== \'document\'">\n\n                      <i style="font-size:1.9em;" class="icon-video-icons-download can-download-icon" [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" (click)="onEvent(\'onDownload\', item, $event)" id="download_{{item.id}}"></i>\n\n                    </ion-icon>\n                    \n                    <ion-icon class="tabsfavshare">\n                      \n                      <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                    </ion-icon>\n\n                    <ion-icon class="tabsfavshare">  \n                      <i class="icon icon-list-share" (click)="onEvent(\'onShare\', item, $event)"></i>\n                    </ion-icon>\n\n                    <ion-icon class="myPlusIcon" (click)="onEvent(\'onPlaylistAdd\', item, $event)"   *ngIf="item.subTopicType !== \'image\' && item.subTopicType !== \'other\' && item.subTopicType !== \'document\'"> \n                      <i class="icon-video-icons-share-doctor" style=""></i>\n                    </ion-icon>\n                  </div>\n\n\n                </ion-item>\n              </div>    \n            </li>\n\n            <!-- information data -->\n            <li *ngFor="let item of info_data;">\n              <div class="collapsible-header">\n                <ion-item  class="ion-item-border itemClassHeight_info" (click)="onEvent(\'onItemClick\', item, $event)" style="margin-left:3px;padding: 0px;">\n                  <ion-thumbnail item-start class="rectanglImg" style="margin:0px; padding:0px;">\n                    <div class="thumbnilBackground">\n                      <img [src]="item.iconUrl" alt="{{item.name}}" class="rectangl_img" />\n\n                      <span id="progressBar_search_{{item.id}}" style="position: absolute;left: 60px;top: 50px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n                      </span>\n                       \n                      <div class="bottom-left bottom-left-info">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'document\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <span *ngIf="item.subTopicType == \'other\'">\n                          <i *ngIf="item.otherType == \'link\'" class="icon-link subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                          <i *ngIf="item.otherType == \'qr_code\'" class="icon-qrcode subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        </span>\n                      </div>                    \n                    </div>                   \n                  </ion-thumbnail>\n                  \n                  <h2 padding-left item-title class="item-text-wrap">\n                    <b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b>\n                  </h2>\n                  \n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0,75)}}...</span>\n                  </p>\n\n                  <div float-right style="color:#CCC;" class="video-share-div">\n                    <ion-icon style="position:relative; margin-right:10px; right:8px; top:8px;"   *ngIf="item.subTopicType !== \'image\' && item.subTopicType !== \'other\' && item.subTopicType !== \'document\'">\n\n                      <i style="font-size:1.9em;" class="icon-video-icons-download can-download-icon" [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" (click)="onEvent(\'onDownload\', item, $event)" id="download_{{item.id}}"></i>\n\n                    </ion-icon>\n                    \n                    <ion-icon class="tabsfavshare">\n                      \n                      <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                    </ion-icon>\n\n                    <ion-icon class="tabsfavshare">  \n                      <i class="icon icon-list-share" (click)="onEvent(\'onShare\', item, $event)"></i>\n                    </ion-icon>\n\n                    <ion-icon class="myPlusIcon" (click)="onEvent(\'onPlaylistAdd\', item, $event)"  *ngIf="item.subTopicType !== \'image\' && item.subTopicType !== \'other\' && item.subTopicType !== \'document\'"> \n                      <i class="icon-video-icons-share-doctor" style=""></i>\n                    </ion-icon>\n                  </div>\n                </ion-item>\n              </div>    \n            </li>\n\n\n          </ul>  \n        </ion-list>\n      </ion-col>\n    </ion-row>\n    \n\n    <!-- <ion-row *ngFor="let item1 of this.data.heart_result">\n      <ion-col col-12 *ngIf="item1.data != \'\'">\n        <ion-list no-margin>\n          <p [style.backgroundColor]="item1.color" style="color:#FFF;text-align: center;margin:0;padding:4px;"><b>{{ item1.type }}</b></p>\n        </ion-list>\n      </ion-col>\n    \n      <ion-col col-12>\n        <ion-list no-margin>\n          \n          <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let item of item1.data;">\n              <div class="collapsible-header">\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <ion-thumbnail item-start no-margin>\n                    <div class="img-overlay">\n                      <img [src]="item.iconUrl" alt="{{item.name}}" style="width: 80px;" />\n\n                      <span id="progressBar_search_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n                      </span>\n                       \n                      <div class="bottom-left">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                      </div>                    \n                    </div>                   \n                  </ion-thumbnail>\n                  \n                  <h2 padding-left item-title class="item-text-wrap">\n                    <b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b>\n                  </h2>\n                  \n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'">\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0,75)}}...</span>\n                  </p>\n\n                  <div float-right style="color:#CCC;">\n                    <ion-icon style="margin-right:10px;">\n\n                      <i style="position:relative;top:5px;right:8px;font-size:1.8em;" class="icon-video-icons-download can-download-icon" [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" (click)="onEvent(\'onDownload\', item, $event)" id="download_{{item.id}}"></i>\n\n                    </ion-icon>\n                    \n                    <ion-icon style="margin-right:10px;">\n                      \n                      <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                    </ion-icon>\n\n                    <ion-icon style="margin-right:10px;color:#CCC;">  \n                      <i class="icon icon-list-share" (click)="onEvent(\'onShare\', item, $event)"></i>\n                    </ion-icon>\n                  </div>\n\n\n                </ion-item>\n              </div>    \n            </li>\n          </ul>  \n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngIf="this.data.ep_data != \'\'">\n      <ion-col col-12>\n        <ion-list no-margin>\n          <ion-item style="background-color: #003944;color:#FFF;text-align: center;"><b>EP</b></ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngFor="let item1 of this.data.ep_data_result">\n      <ion-col col-12 *ngIf="item1.data != \'\'">\n        <ion-list no-margin>\n          <p [style.backgroundColor]="item1.color" style="color:#FFF;text-align: center;margin:0;padding:4px;"><b>{{ item1.type }}</b></p>\n        </ion-list>\n      </ion-col>\n    \n      <ion-col col-12>\n        <ion-list no-margin>\n          <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let item of item1.data;">\n              <div class="collapsible-header">\n\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <ion-thumbnail item-start no-margin>\n                    <div class="img-overlay">\n                      <img [src]="item.iconUrl" alt="{{item.name}}" style="width: 80px;" />\n\n                      <span id="progressBar_search_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n                      </span>\n                       \n                      <div class="bottom-left">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                      </div>                    \n                    </div>                   \n                  </ion-thumbnail>\n                  \n                  <h2 padding-left item-title class="item-text-wrap" style="" (click)="onEvent(\'onItemClick\', item, $event)">\n                    <b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b>\n                  </h2>\n                  \n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'"  (click)="onEvent(\'onItemClick\', item, $event)">\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0,75)}}...</span>\n                  </p>\n\n                  <div float-right style="color:#CCC;">\n                    <ion-icon style="margin-right:10px;">\n\n                      <i style="position:relative;top:5px;right:8px;font-size:1.8em;" class="icon-video-icons-download can-download-icon" [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" (click)="onEvent(\'onDownload\', item, $event)" id="download_{{item.id}}"></i>\n\n                    </ion-icon>\n                    \n                    <ion-icon style="margin-right:10px;">\n                      \n                      <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                    </ion-icon>\n\n                    <ion-icon style="margin-right:10px;color:#CCC;">  \n                      <i class="icon icon-list-share" (click)="onEvent(\'onShare\', item, $event)"></i>\n                    </ion-icon>\n                  </div>\n\n\n                </ion-item>\n              </div>    \n            </li>\n          </ul>  \n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngIf="this.data.structural_data != \'\'">\n      <ion-col col-12>\n        <ion-list no-margin>\n          <ion-item style="background-color: #23928B;color:#FFF;text-align: center;"><b>Structural</b></ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngFor="let item1 of this.data.structural_data_result">\n      <ion-col col-12 *ngIf="item1.data != \'\'">\n        <ion-list no-margin>\n          <p [style.backgroundColor]="item1.color" style="color:#FFF;text-align: center;margin:0;padding:4px;"><b>{{ item1.type }}</b></p>\n        </ion-list>\n      </ion-col>\n    \n      <ion-col col-12>\n        <ion-list no-margin>\n\n          <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let item of item1.data;">\n              <div class="collapsible-header" >\n\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <ion-thumbnail item-start no-margin>\n                    <div class="img-overlay">\n                      <img [src]="item.iconUrl" alt="{{item.name}}" style="width: 80px;" />\n\n                      <span id="progressBar_search_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n                      </span>\n                       \n                      <div class="bottom-left">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                      </div>                    \n                    </div>                   \n                  </ion-thumbnail>\n                  \n                  <h2 padding-left item-title class="item-text-wrap" style="" (click)="onEvent(\'onItemClick\', item, $event)">\n                    <b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b>\n                  </h2>\n                  \n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'"  (click)="onEvent(\'onItemClick\', item, $event)">\n                   <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0,75)}}...</span>\n                  </p>\n\n                  <div float-right style="color:#CCC;">\n                    <ion-icon style="margin-right:10px;">\n\n                      <i style="position:relative;top:5px;right:8px;font-size:1.8em;" class="icon-video-icons-download can-download-icon" [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" (click)="onEvent(\'onDownload\', item, $event)" id="download_{{item.id}}"></i>\n\n                    </ion-icon>\n                    \n                    <ion-icon style="margin-right:10px;">\n                      \n                      <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                    </ion-icon>\n\n                    <ion-icon style="margin-right:10px;color:#CCC;">  \n                      <i class="icon icon-list-share" (click)="onEvent(\'onShare\', item, $event)"></i>\n                    </ion-icon>\n                  </div>\n\n\n                </ion-item>\n              </div>    \n            </li>\n          </ul>\n\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngIf="this.data.vascular_data != \'\'">\n      <ion-col col-12>\n        <ion-list no-margin>\n          <ion-item style="background-color: #872C3D;color:#FFF;text-align: center;"><b>Vascular</b></ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngFor="let item1 of this.data.vascular_data_result">\n      <ion-col col-12 *ngIf="item1.data != \'\'">\n        <ion-list no-margin>\n          <p [style.backgroundColor]="item1.color" style="color:#FFF;text-align: center;margin:0;padding:4px;"><b>{{ item1.type }}</b></p>\n        </ion-list>\n      </ion-col>\n    \n      <ion-col col-12>\n        <ion-list no-margin>\n          \n          <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let item of item1.data;">\n              <div class="collapsible-header">\n\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <ion-thumbnail item-start no-margin>\n                    <div class="img-overlay">\n                      <img [src]="item.iconUrl" alt="{{item.name}}" style="width: 80px;" />\n\n                      <span id="progressBar_search_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n                      </span>\n                       \n                      <div class="bottom-left">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                      </div>                    \n                    </div>                   \n                  </ion-thumbnail>\n                  \n                  <h2 padding-left item-title class="item-text-wrap" style="" (click)="onEvent(\'onItemClick\', item, $event)">\n                    <b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b>\n                  </h2>\n                  \n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'"  (click)="onEvent(\'onItemClick\', item, $event)">\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0,75)}}...</span>\n                  </p>\n\n                  <div float-right style="color:#CCC;">\n                    <ion-icon style="margin-right:10px;">\n\n                      <i style="position:relative;top:5px;right:8px;font-size:1.8em;" class="icon-video-icons-download can-download-icon" [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" (click)="onEvent(\'onDownload\', item, $event)" id="download_{{item.id}}"></i>\n\n                    </ion-icon>\n                    \n                    <ion-icon style="margin-right:10px;">\n                      \n                      <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                    </ion-icon>\n\n                    <ion-icon style="margin-right:10px;color:#CCC;">  \n                      <i class="icon icon-list-share" (click)="onEvent(\'onShare\', item, $event)"></i>\n                    </ion-icon>\n                  </div>\n\n\n                </ion-item>\n              </div>    \n            </li>\n          </ul>\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngIf="this.data.heart_health_data != \'\'">\n      <ion-col col-12>\n        <ion-list no-margin>\n          <ion-item style="background-color: #62294C;color:#FFF;text-align: center;"><b>Heart Health</b></ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngFor="let item1 of this.data.heart_health_data_result">\n      <ion-col col-12 *ngIf="item1.data != \'\'">\n        <ion-list no-margin>\n          <p [style.backgroundColor]="item1.color" style="color:#FFF;text-align: center;margin:0;padding:4px;"><b>{{ item1.type }}</b></p>\n        </ion-list>\n      </ion-col>\n    \n      <ion-col col-12>\n        <ion-list no-margin>\n          \n          <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let item of item1.data;">\n              <div class="collapsible-header">\n\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <ion-thumbnail item-start no-margin>\n                    <div class="img-overlay">\n                      <img [src]="item.iconUrl" alt="{{item.name}}" style="width: 80px;" />\n\n                      <span id="progressBar_search_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n                      </span>\n                       \n                      <div class="bottom-left">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                      </div>                    \n                    </div>                   \n                  </ion-thumbnail>\n                  \n                  <h2 padding-left item-title class="item-text-wrap" style="" (click)="onEvent(\'onItemClick\', item, $event)">\n                    <b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b>\n                  </h2>\n                  \n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'"  (click)="onEvent(\'onItemClick\', item, $event)">\n                    <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0,75)}}...</span>\n                  </p>\n\n                  <div float-right style="color:#CCC;">\n                    <ion-icon style="margin-right:10px;">\n\n                      <i style="position:relative;top:5px;right:8px;font-size:1.8em;" class="icon-video-icons-download can-download-icon" [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" (click)="onEvent(\'onDownload\', item, $event)" id="download_{{item.id}}"></i>\n\n                    </ion-icon>\n                    \n                    <ion-icon style="margin-right:10px;">\n                      \n                      <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                    </ion-icon>\n\n                    <ion-icon style="margin-right:10px;color:#CCC;">  \n                      <i class="icon icon-list-share" (click)="onEvent(\'onShare\', item, $event)"></i>\n                    </ion-icon>\n                  </div>\n\n\n                </ion-item>\n              </div>    \n            </li>\n          </ul>\n\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngIf="this.data.diabetes_data != \'\'">\n      <ion-col col-12>\n        <ion-list no-margin>\n          <ion-item style="background-color: #41518C;color:#FFF;text-align: center;"><b>Diabetes</b></ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row *ngFor="let item1 of this.data.diabetes_data_result">\n      <ion-col col-12 *ngIf="item1.data != \'\'">\n        <ion-list no-margin>\n          <p [style.backgroundColor]="item1.color" style="color:#FFF;text-align: center;margin:0;padding:4px;"><b>{{ item1.type }}</b></p>\n        </ion-list>\n      </ion-col>\n    \n      <ion-col col-12>\n        <ion-list no-margin>\n          \n          <ul no-margin no-padding class="collapsible">\n            <li *ngFor="let item of item1.data;">\n              <div class="collapsible-header">\n\n                <ion-item  class="ion-item-border boxbutton" (click)="onEvent(\'onItemClick\', item, $event)">\n                  <ion-thumbnail item-start no-margin>\n                    <div class="img-overlay">\n                      <img [src]="item.iconUrl" alt="{{item.name}}" style="width: 80px;" />\n\n                      <span id="progressBar_search_{{item.id}}" style="position: absolute;left: 36px;top: 40px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n                      </span>\n                       \n                      <div class="bottom-left">\n\n                        <i *ngIf="item.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                        <i *ngIf="item.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n                      </div>                    \n                    </div>                   \n                  </ion-thumbnail>\n                  \n                  <h2 padding-left item-title class="item-text-wrap" style="" (click)="onEvent(\'onItemClick\', item, $event)">\n                    <b style="white-space: normal;word-wrap: break-word;">{{item.name}}</b>\n                  </h2>\n                  \n                  <p class="tab-desc-size"  padding-left item-subtitle   *ngIf="item.description != \'\' && item.description !=\'null\'"  (click)="onEvent(\'onItemClick\', item, $event)">\n                   <span *ngIf="item.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{item.description}}</span>\n                   <span *ngIf="item.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{item.description.slice(0,75)}}...</span>\n                  </p>\n\n                  <div float-right style="color:#CCC;">\n                    <ion-icon style="margin-right:10px;">\n\n                      <i style="position:relative;top:5px;right:8px;font-size:1.8em;" class="icon-video-icons-download can-download-icon" [ngClass]="(item.localUrl != \'\')?\'active\':\'\'" (click)="onEvent(\'onDownload\', item, $event)" id="download_{{item.id}}"></i>\n\n                    </ion-icon>\n                    \n                    <ion-icon style="margin-right:10px;">\n                      \n                      <i class="icon icon-cardio-like" [ngClass]="{\'active\': item.isFavourite}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                    </ion-icon>\n\n                    <ion-icon style="margin-right:10px;color:#CCC;">  \n                      <i class="icon icon-list-share" (click)="onEvent(\'onShare\', item, $event)"></i>\n                    </ion-icon>\n                  </div>\n\n\n                </ion-item>\n              </div>    \n            </li>\n          </ul>\n\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-grid>\n\n  <ion-grid *ngIf="(data.length == 0)&&(info_data.length == 0) && (playlist_data.length == 0) && (whatsnew_data.length == 0)" style="background-color: #FFFFFF;">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list no-margin>\n          <p style="color:#grey;text-align: center;margin:0;padding:4px;"><b>No data found.</b></p>\n        </ion-list>\n      </ion-col>\n    </ion-row>      \n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=19.js.map