webpackJsonp([20,36],{

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

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlandetailsPageModule", function() { return PlandetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plandetails__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlandetailsPageModule = /** @class */ (function () {
    function PlandetailsPageModule() {
    }
    PlandetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plandetails__["a" /* PlandetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plandetails__["a" /* PlandetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
            ],
        })
    ], PlandetailsPageModule);
    return PlandetailsPageModule;
}());

//# sourceMappingURL=plandetails.module.js.map

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

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlandetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_inapp_inapp__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_purchase__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_check_network_check__ = __webpack_require__(61);
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
 * Generated class for the PlandetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlandetailsPage = /** @class */ (function () {
    function PlandetailsPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.in_app_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_inapp_inapp__["a" /* InappProvider */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.in_app_purchase_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_purchase__["a" /* InAppPurchase */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__services_loading_service__["a" /* LoadingService */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_clevertap__["a" /* CleverTap */]();
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__services_HttpService__["a" /* HttpService */]);
        this.alert_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.modal_controllar_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.network_check_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_9__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
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
            setTimeout(function () {
                _this.network_check_object.getPageAction("PlandetailsPage", "start", "", localStorage.getItem("cv5usrType"));
            }, 1000);
            this.network_check_object.forRandomVideoViewCount(localStorage.getItem("userliveId"));
        }
    }
    PlandetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PlandetailsPage");
    };
    PlandetailsPage.prototype.ionViewWillLeave = function () {
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != "none") {
            this.network_check_object.getPageAction("PlandetailsPage", "end", "", localStorage.getItem("cv5usrType"));
        }
    };
    PlandetailsPage.prototype.ionViewWillEnter = function () {
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
        }
        else {
            this.myActiveplan = false;
            //angular.element('.myActiveplan').css('display', 'none');
        }
        if (this.productID == this.cv_subscriptionId) {
            //alert('ttttt');
            this.buttonYear = true;
            this.buttonShow = false;
        }
        else if (this.productID == this.cv_subscriptionId_monthly) {
            //alert('nnn');
            this.buttonShow = true;
            this.buttonYear = false;
        }
        var allproducts = this.in_app_provider_object.allProductDetails();
        //alert(' allproducts plandetails----------->'+JSON.stringify(allproducts));
        var subsData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["findWhere"](allproducts, {
            productId: this.cv_subscriptionId_monthly,
        });
        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["isEmpty"](subsData)) {
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
        var asubsDataYearly = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["findWhere"](allproducts, {
            productId: this.cv_subscriptionId,
        });
        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["isEmpty"](asubsDataYearly)) {
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
        var asubsData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["findWhere"](allproducts, { productId: this.productID });
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
    };
    PlandetailsPage.prototype.cardiofaq = function () {
        this.in_app_browser_object.create("https://cardiovisual.com/pro-plan-faqs", "_blank", "location=yes");
    };
    PlandetailsPage.prototype.buy = function (plan) {
        var _this = this;
        //alert('plan---->'+plan);
        if (plan == "premium") {
            var productId = this.cv_subscriptionId;
        }
        else if (plan == "pro_monthly") {
            var productId = this.cv_subscriptionId_monthly;
        }
        var liveId = localStorage.getItem("userliveId");
        //alert('productId--->'+productId);
        this.in_app_purchase_object
            .subscribe(productId)
            .then(function (data) {
            //return this.in_app_purchase_object.consume(data.productType, data.receipt, data.signature);
            if (_this.os != "Android") {
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
                    platform: _this.os.toLowerCase(),
                    expiryTime: dateObj,
                };
                _this.subsData = data_params;
            }
            else {
                _this.subsData = data;
            }
            _this.in_app_provider_object.saveInAppPurchaseDataToApi(_this.subsData, liveId);
        })
            .then(function () {
            console.log("product was successfully consumed!");
            _this.loading_service_object.inappLoading();
            var params = {
                record_time: _this.dtStr,
                record_date: _this.clevertapDate,
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
            _this.clevertap_object.recordEventWithNameAndProps("clickedOnBuy", params);
            setTimeout(function () {
                var confirmPopup = _this.alert_controller_object.create({
                    title: "Purchase was successful.",
                    message: "CardioVisual PRO is now active",
                    buttons: [
                        {
                            text: "OK",
                            handler: function () {
                                console.log("Buy clicked");
                            },
                        },
                    ],
                });
                confirmPopup.present();
                _this.loading_service_object.hide();
                _this.navCtrl.setRoot("DashboardPage");
            }, 10000);
        })
            .catch(function (error) {
            //alert('error 1-->'+JSON.stringify(error));
            //alert('error 2-->'+JSON.stringify(error.message));
            console.log("error 1-->" + JSON.stringify(error));
            console.log("error 2-->" + JSON.stringify(error.message));
        });
    };
    PlandetailsPage.prototype.showTermsPopup = function () {
        this.openModal("Subscription Terms");
    };
    PlandetailsPage.prototype.privacyPopup = function () {
        this.openModal("Privacy Policy");
    };
    PlandetailsPage.prototype.showSubscriptionPopup = function () {
        this.openModal("Free Trial terms");
    };
    PlandetailsPage.prototype.openModal = function (myData) {
        var myModalOptions = {
            enableBackdropDismiss: false,
        };
        // const myModalData = {
        //   name: 'Paul Halliday',
        //   occupation: 'Developer'
        // };
        //const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: myModalData }, myModalOptions);
        var myModal = this.modal_controllar_object.create("ModalPage", { data: myData }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    PlandetailsPage.prototype.chatwithus = function () {
        var usrType = "";
        var userEmail = localStorage.getItem("cv5userEmail");
        var name = userEmail.substring(0, userEmail.lastIndexOf("@"));
        var userRoleId = localStorage.getItem("cv5userRoleId");
        var userType = userRoleId == "1" ? "doctor" : "patient";
        if (userType != "doctor") {
            usrType = "nonhcp";
        }
        else {
            usrType = "hcp";
        }
        var userInfo = {
            firstName: name,
            lastName: usrType,
            email: userEmail,
            externalId: userEmail,
        };
        window.Freshchat.updateUser(userInfo);
        var userProperties = {
            userRoleId: userRoleId,
            userType: usrType,
            organisation: "CardioVisual",
        };
        window.Freshchat.updateUserProperties(userProperties);
        //window.Freshchat.setExternalID('sanjeev.kumar@oneleap.in');
        window.Freshchat.showConversations();
    };
    PlandetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-plandetails",template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\plandetails\plandetails.html"*/'<!--\n\n  Generated template for the PlandetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>plandetails</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n<ion-header clean-header  class="tabheader" [isTabs]="true"  [hideMenu]="true" ></ion-header>\n\n\n\n<ion-content  no-padding>\n\n    <div class="page-title-planslist myActiveplan" style="background-color:#E8604F;" *ngIf="myActiveplan">\n\n        <!-- <p class="font20">Choose your upgrade plan</p> -->\n\n        <p class="font20 white"><b>My Active Plan</b></p>\n\n    </div>\n\n    <div style="background-color:#DbDbDb; height: 2px;"></div>\n\n    <div id="dark-top-banner" class="myActiveplan" style="" (click)="planDetail(\'\')" *ngIf="myActiveplan">\n\n        <div  class="img-text-wrapper planslist-wrapper">\n\n            <div class="text-center left">\n\n                <img src="assets/images/cv-logo-subscription.png">\n\n            </div>\n\n            <div class="text-left right weight700">\n\n                <span class="font20 newred" *ngIf="productID!= cv_subscriptionId" >CardioVisual Pro </span><br/>\n\n\n\n                <span class="font20 newred" *ngIf="productID == cv_subscriptionId">{{shownContent == \'true\' ? "CardioVisual Premium  (Now PRO)" : "CardioVisual Pro"}} </span><br/>\n\n\n\n                <span class="font20 newDarkBrown ">{{ planPrice }}</span><br/><br/>\n\n                <!-- <span class="font20 newDarkBrown ">{{ productActiveTill }}</span><br/><br/> -->\n\n                <span class="newred" *ngIf="productID!= cv_productId"> Renewal On : {{ productExpiredate | date }}</span> \n\n                \n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div style="background-color: #f2f2f2; height: 3px;"></div>\n\n    <div class="page-title-planslist choose_plan_tab" style="background-color:#E8604F; ">\n\n        <p class="font20 white"> <b>Presenting all new PRO plan </b></p>\n\n    </div>\n\n    <div style="background-color: #DbDbDb; height: 1px;"></div>\n\n	<div id="dark-top-banner"  class="choose_plan_yearly" style="" *ngIf="productID == cv_productId">\n\n        <!-- <div id="dark-top-banner"  class="choose_plan_yearly" style=""  ng-if="productID == cv_subscriptionId"> -->\n\n        <div *ngIf="promotionalCodeStatus">\n\n            <div style="text-align: center;"> <span> <b>A Big thank you for your support & early commitment to CardioVisual app.</b></span></div><br/>\n\n            <span >We are offering you <u><b>Exclusive Access</b></u> to our new PRO plan till 31st December 2019 for <u><b> FREE.</b></u></span>\n\n            <div class="subscription-content" style="text-align: center;"><span class="font14 newred"> <b>New PRO features </b> </span>\n\n                <ul class="newbrown-ul font16">\n\n                    <li>\n\n                        Exclusive content by industry experts.\n\n                    </li>\n\n                     <li>\n\n                        Download all videos for offline viewing.\n\n                    </li>\n\n                     <li>\n\n                        Customized playlists with autoplay.\n\n                    </li>\n\n                </ul>\n\n            </div>\n\n            <div style="text-align: center;"> <span class="font14 newred"> <b> Switch to new PRO </b> </span>\n\n            </div>\n\n            <span class="newDarkBrown">  Make sure you switch to our new PRO subscription before your exclusive access ends on <br /><b><u> 31st December 2019 </u></b> to continue enjoying new features & content.</span> <br /> <br />\n\n            <span class="font14 newDarkBrown" > <b>Choose from our easy pricing plans. </b></span>\n\n\n\n            <div id="outerdivinapp">\n\n                <div class="innerdivinapp">\n\n                    <button class="button-btn-inappnew inappButton1" (click)="buy(\'premium\')"><span class="font14 white country-premium-price">{{ planPriceYearly }}</span></button>\n\n                    \n\n                </div>\n\n\n\n                <div class="innerdivinapp">\n\n                    <button class="button-btn-inappnew planButtonclick" (click)="buy(\'pro_monthly\')"><span class="font14 white country-product-monthprice">{{ planPriceMonthly }}</span></button>\n\n                   \n\n                </div>\n\n            </div>\n\n        </div>\n\n        <!-- <div *ngIf="promotionalCodeStatus != true"> -->\n\n        <div *ngIf="!promotionalCodeStatus">\n\n            <div style="padding: 15px;">\n\n                <p class="text-center pg-message-inapp font20"><b class="newred">DOWNLOAD</b> all videos for offline viewing</p>\n\n                <p class=\'bordeer\'> </p>\n\n                <p class="text-center pg-message-inapp font20"><b class="newred">AUTOPLAY</b> videos in <b class="newred">PLAYLISTS</b></p>\n\n                <p class=\'bordeer\'> </p>\n\n                <p class="text-center pg-message-inapp font20"> View <b class="newred">EXCLUSIVE</b> content</p>                   \n\n            </div>\n\n            <p class="text-center pg-message-inapp font16 newDarkBrown" > <b>Choose from our easy pricing plans. </b></p>\n\n            <div id="outerdivinapp">\n\n                <div class="innerdivinapp">\n\n                    <button class="button-btn-inappnew inappButton1" (click)="buy(\'premium\')"><span class="font14 white country-premium-price">{{ planPriceYearly }}</span></button>\n\n                    \n\n                </div>\n\n\n\n                <div class="innerdivinapp">\n\n                    <button class="button-btn-inappnew planButtonclick" (click)="buy(\'pro_monthly\')"><span class="font14 white country-product-monthprice">{{ planPriceMonthly }}</span></button>\n\n                   \n\n                </div>\n\n            </div>     \n\n        </div>                         \n\n    </div>\n\n\n\n    <div id="dark-top-banner"  class="choose_plan_yearly" style="background-color: #ffffff !important;"  *ngIf="productID != cv_productId">\n\n        <!-- <div id="dark-top-banner"  class="choose_plan_yearly" style=""  ng-if="productID == cv_productId"> -->\n\n        <div *ngIf="shownContent == \'true\'">\n\n            <div style="text-align: center;"> <span> <b>A Big thank you for your support & early commitment to CardioVisual app.</b></span></div><br/>\n\n            <span> We are giving you <u><b>Exclusive Access</b></u> to our new PRO plan for <u><b> FREE </b></u> till your subscription ends.</span><br/>\n\n            <div class="subscription-content-new" style="text-align: center;" ><span class="font14 newred"> <b>New PRO features </b> </span>\n\n                <ul class="newbrown-ul font16" style="text-align: left">\n\n                    <li style="">\n\n                        Exclusive content by industry experts.\n\n                    </li>\n\n                     <li>\n\n                        Download all videos for offline viewing.\n\n                    </li>\n\n                     <li>\n\n                        Costomized playlists with autoplay.\n\n                    </li>\n\n                </ul>\n\n            </div>\n\n            <div style="text-align: center;"> <span class="font14 newred"> <b> Switch to PRO </b> </span>\n\n            </div><br />\n\n            <span class="newDarkBrown"> You can renew your current subscription with our new PRO plan at a discounted price of <b> $ 9.99/year </b> on your renewal date. You will be asked to renew at a new price plan before your plan expires.</span> <br />\n\n\n\n            <p style="text-align: center;"> <b>OR</b> </p>\n\n\n\n            <span class="font14 newDarkBrown" > <b>Switch to our monthly plan which renews after your current subscription ends.</b></span>\n\n\n\n\n\n\n\n            <div style="text-align: center;">\n\n                <button class="button-inappnew" (click)="buy(\'pro_monthly\')"><span class="font14 white country-product-monthprice">{{ planPriceMonthly }}</span></button>\n\n            </div>                \n\n        </div>\n\n\n\n        <div *ngIf="shownContent == \'false\'">\n\n            <div style="padding: 15px;">\n\n                <p class="text-center pg-message-inapp font20"><b class="newred">DOWNLOAD</b> all videos for offline viewing</p>\n\n                <p class=\'bordeer\'> </p>\n\n                <p class="text-center pg-message-inapp font20"><b class="newred">AUTOPLAY</b> videos in <b class="newred">PLAYLISTS</b></p>\n\n                <p class=\'bordeer\'> </p>\n\n                <p class="text-center pg-message-inapp font20"> View <b class="newred">EXCLUSIVE</b> content</p>                   \n\n            </div>\n\n            <p class="text-center pg-message-inapp font16 newDarkBrown" > <b>Choose from our easy pricing plans. </b></p>\n\n            <div id="outerdivinapp">\n\n                <!-- <div class="innerdivinapp">\n\n                    <button class="button-btn-inappnew" ng-click="buy(\'premium\')"><span class="font14 white country-premium-price">$2.99 / year</span></button>\n\n                </div>\n\n\n\n                <div class="innerdivinapp">\n\n                    <button class="button-btn-inappnew" ng-click="buy(\'pro_monthly\')"><span class="font14 white country-product-monthprice">$0.99 / Month</span></button>\n\n                </div> -->\n\n                <div class="innerdivinapp">\n\n                    <button class="button-btn-inappnew" (click)="buy(\'premium\')" *ngIf="buttonYear != true"><span class="font14 white country-premium-price">{{ planPriceYearly }}</span></button>\n\n                    <button class="planButton" *ngIf="buttonYear == true"><span class="font14 white country-premium-price" >{{ planPriceYearly }} </span></button>\n\n                </div>\n\n\n\n                <div class="innerdivinapp">\n\n                    <button class="button-btn-inappnew" (click)="buy(\'pro_monthly\')" *ngIf="buttonShow != true"><span class="font14 white country-product-monthprice">{{ planPriceMonthly }}</span></button>\n\n                    <button class="planButton" *ngIf="buttonShow == true"><span class="font14 white country-product-monthprice">{{ planPriceMonthly }}</span></button><!-- <span ng-if="buttonShow == true"><font color="green">Active</font></span> -->         \n\n                </div>\n\n            </div> \n\n        </div>\n\n    </div>\n\n    <div class="subscription-content" style="padding-top: 0; margin-top: 0;">\n\n        <ul class="newbrown-ul font12" style="text-align: left">\n\n            <li>\n\n                This autorenewable subscription starts with 1 week free trial. You will get billed once your free trial period expires. You can choose to cancel anytime during 1 week trial period.\n\n            </li>\n\n            <li>\n\n                Any unused portion of a free trial will be forfeited if user purchases a subscription.\n\n            </li>\n\n            <li *ngIf="os!=\'Android\'">\n\n                Payment will be charged to your iTunes account at confirmation of purchase. Subscription will automatically renew unless cancelled at least 24-hours before the end of the current period.\n\n            </li>\n\n           <li *ngIf="os==\'Android\'">\n\n                Payment will be charged to your Google Play account at confirmation of purchase. Subscription will automatically renew unless cancelled at least 24-hours before the end of the current period.\n\n            </li>\n\n            <li>\n\n                Account will be charged for renewal within 24-hours prior to the end of the current period, and identify the cost of the renewal.\n\n            </li>\n\n            <li *ngIf="os!=\'Android\'">\n\n                 Subscription can be cancelled by the user by going to the iTunes account settings after purchase.\n\n            </li>\n\n           <li *ngIf="os==\'Android\'">\n\n                 Subscription can be cancelled by the user by going to the Google Play account settings after purchase.                       \n\n            </li>\n\n        </ul>\n\n        \n\n        <p class="text-left pg-message-inapp font12 newDarkBrown">For queries please refer to our<span style="text-decoration: underline;"(click)="cardiofaq()"> FAQ</span> or <span style="text-decoration: underline;" (click)="chatwithus()">chat with us.</span></p>\n\n        <p class="text-left newred font14" style="margin-top: 30px;">For more information, read our <span style="text-decoration: underline;" (click)="showTermsPopup()">Subscription Terms</span>,&nbsp;<span style="text-decoration: underline;" (click)="privacyPopup()">Privacy Policy</span> and <span style="text-decoration: underline;" (click)="showSubscriptionPopup()">Free trial terms.</span></p>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\plandetails\plandetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], PlandetailsPage);
    return PlandetailsPage;
}());

//# sourceMappingURL=plandetails.js.map

/***/ })

});
//# sourceMappingURL=20.js.map