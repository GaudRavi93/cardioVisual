webpackJsonp([3,36,38],{

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

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsNewPageModule", function() { return WhatsNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whats_new__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WhatsNewPageModule = /** @class */ (function () {
    function WhatsNewPageModule() {
    }
    WhatsNewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__whats_new__["a" /* WhatsNewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__whats_new__["a" /* WhatsNewPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["FooterPageModule"],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], WhatsNewPageModule);
    return WhatsNewPageModule;
}());

//# sourceMappingURL=whats-new.module.js.map

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
            selector: 'skeleton-item',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\components\skeleton-item\skeleton-item.html"*/'<div [ngStyle]="styles"></div>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\components\skeleton-item\skeleton-item.html"*/
        })
    ], SkeletonItemComponent);
    return SkeletonItemComponent;
}());

//# sourceMappingURL=skeleton-item.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_inapp_inapp__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_version__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__ = __webpack_require__(63);
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
 * Generated class for the WhatsNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatsNewPage = /** @class */ (function () {
    function WhatsNewPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.isLastArrow = false;
        this.isFirstArrow = true;
        this.online = true;
        this.email = "";
        this.counter = 0;
        this.isLastArrowForTweet = false;
        this.isFirstArrowForTweet = true;
        this.isLastArrowForForum = false;
        this.isFirstArrowForForum = true;
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.database_provider_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]);
        this.alert_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.network_check_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_6__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.toast_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__services_HttpService__["a" /* HttpService */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__services_loading_service__["a" /* LoadingService */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.loading_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_11__ionic_native_clevertap__["a" /* CleverTap */]();
        this.onesignal_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */]);
        this.modal_controllar_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.app_version_object = injector.get(__WEBPACK_IMPORTED_MODULE_14__ionic_native_app_version__["a" /* AppVersion */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_15__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.screen_orientation_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.in_app_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__providers_inapp_inapp__["a" /* InappProvider */]);
        /*check is device is active or not*/
        this.storage_object.get("user_logged_in").then(function (val) {
            var device_token = localStorage.getItem("getDeviceuuid");
            // var localapi = this.http_service_object.getApi();
            var deviceData = {
                userId: val,
                deviceToken: device_token,
            };
            _this.http_service_object
                .getDeviceDatas(deviceData)
                .subscribe(function (device_data) {
                if (device_data[0].status == 0) {
                    _this.logout();
                }
            });
        });
        this.platform_object.ready().then(function () {
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type != "none") {
                setTimeout(function () {
                    _this.network_check_object.getPageAction("WhatsNewPage", "start", "", localStorage.getItem("cv5usrType"));
                }, 1000);
            }
            var localPath = _this.file_object.dataDirectory;
            _this.path = localPath.replace(/file:\/\//g, "");
            _this.network_type = _this.network_check_object.getNetworkType();
            var upgradeApp = _this.nav_params_object.get("forAppUpdate");
            if (upgradeApp == "forAppUpgrade") {
                // code...
                var loading = _this.loading_controller_object.create({
                    //spinner: 'ios',
                    spinner: "dots",
                    content: "<div class='custom-spinner-container'>Please wait, app is being updated.</div>",
                    duration: 10000,
                    enableBackdropDismiss: false,
                });
                loading.present();
            }
            _this.localapi = _this.http_service_object.getApi();
            _this.dtStr = _this.http_service_object.dtStr();
            _this.clevertapDate = _this.http_service_object.clevertapDate();
            _this.isoDateFormat = new Date().toISOString();
            //console.log("PLATFORM READY IN PROVIDER");
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == "none") {
                _this.online = false;
                _this.toast_controller_object
                    .create({
                    message: "You are now offline.",
                    position: "bottom",
                    duration: 5000,
                })
                    .present();
            }
            else {
                _this.online = true;
            }
            localStorage.setItem("search_page", "");
            _this.platformType = localStorage.getItem("getDevicePlatform");
            _this.initializingapp();
        });
    }
    WhatsNewPage.prototype.initializingapp = function () {
        var _this = this;
        this.platform_object.ready().then(function () {
            var userID = localStorage.getItem("userliveId");
            var local_user_type = localStorage.getItem("cv5usrType");
            _this.email = localStorage.getItem("cv5userEmail");
            _this.http_service_object.updateLastActiveUser(userID);
            localStorage.setItem("segment_name", "education");
            _this.in_app_provider_object.canShareAccess(local_user_type);
            console.log("whatsnew 161");
            _this.http_service_object.getUserInfoByLiveId(userID).subscribe(function (usrdata) {
                if (usrdata.referral_code == 0 ||
                    usrdata.referral_code == null ||
                    usrdata.referral_code == "null") {
                    var user_referral_code = usrdata.email.substring(0, 4) +
                        "" +
                        Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                    var properties1 = {
                        canonicalIdentifier: "cardiovisual",
                        title: "CardioVisual",
                    };
                    // optional fields
                    var analytics = {
                        channel: "cardio_android_app",
                        feature: "sharing",
                        campaign: "refereres",
                        stage: "share_social",
                        type: 2,
                    };
                    // optional fields
                    var properties = {
                        match_duration: -1,
                        profession: local_user_type,
                        user_email: usrdata.email,
                        clevertapId: localStorage.getItem("getCleverTapID"),
                        time_stamp: Date.now(),
                        referral_code: localStorage.getItem("referral_code"),
                    };
                    //var env = "live";
                    var env = "";
                    var branchUniversalObj = null;
                    var Branch = window["Branch"];
                    Branch.createBranchUniversalObject(properties1).then(function (res) {
                        res.generateShortUrl(analytics, properties).then(function (res) {
                            localStorage.setItem("isLinkSet", res.url);
                        });
                    });
                    _this.database_provider_object.updateData("UPDATE new_user_info set referral_code=" +
                        user_referral_code +
                        ', branchLink="' +
                        localStorage.getItem("isLinkSet") +
                        '"');
                    var params = {
                        referral_code: user_referral_code,
                        branchLink: localStorage.getItem("isLinkSet"),
                    };
                    _this.http_object
                        .put(_this.localapi + "/api/cardiovisualusers/" + userID, params)
                        .subscribe();
                    localStorage.setItem("referral_code", user_referral_code);
                }
                localStorage.setItem("referral_code", usrdata.referral_code);
                var referred_by = localStorage.getItem("referred_by");
                if ((usrdata.referred_by == "" ||
                    usrdata.referred_by == "null" ||
                    usrdata.referred_by == null ||
                    usrdata.referred_by == 0) &&
                    usrdata.referral_code != referred_by) {
                    _this.http_service_object
                        .getUserdataByReferralcode(referred_by)
                        .subscribe(function (reffered_by_user) {
                        //update registered user with user_id referred_by column
                        _this.database_provider_object.updateData("UPDATE new_user_info set referred_by=" +
                            reffered_by_user[0].id);
                        var params = { referred_by: reffered_by_user[0].id };
                        _this.http_object
                            .put(_this.localapi + "/api/cardiovisualusers/" + userID, params)
                            .subscribe(function (data) { });
                    });
                }
                _this.clevertap_object.profileGetCleverTapID().then(function (id) {
                    localStorage.setItem("getCleverTapID", id);
                });
                setTimeout(function () {
                    if (usrdata.clevertapId == "" ||
                        usrdata.clevertapId == "null" ||
                        usrdata.clevertapId == "undefined" ||
                        usrdata.clevertapId != localStorage.getItem("getCleverTapID")) {
                        _this.loading_service_object.generateandSaveLinks(userID, local_user_type, usrdata.email);
                        _this.clevertap_object.profileSet({
                            Name: "'" + _this.getNameFromEmail(usrdata.email) + "'",
                            Location: "'" + usrdata.location + "'",
                            UserRoleId: "'" + usrdata.userRoleId + "'",
                            UserType: "'" + local_user_type + "'",
                            Specialities: "'" + usrdata.specialities + "'",
                            SubSpecialities: "'" + usrdata.userRoleSubType + "'",
                            medium: "'" + usrdata.medium + "'",
                        });
                        if (localStorage.getItem("userRegistrationClevertap") == "yes") {
                            var usrParams = {
                                record_time: _this.dtStr,
                                record_date: _this.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                userRoleId: usrdata.userRoleId,
                                userType: local_user_type,
                                specialities: usrdata.specialities,
                                subSpecialities: usrdata.userRoleSubType,
                                userEmail: usrdata.email,
                                medium: usrdata.medium,
                                verified: usrdata.verified,
                                location: usrdata.location,
                            };
                            switch (usrdata.medium) {
                                case "app":
                                    _this.clevertap_object.recordEventWithNameAndProps("userRegistration", usrParams);
                                    break;
                                case "facebook":
                                    _this.clevertap_object.recordEventWithNameAndProps("facebookLogin", usrParams);
                                    break;
                                case "google":
                                    _this.clevertap_object.recordEventWithNameAndProps("googleLogin", usrParams);
                                    break;
                            }
                            localStorage.setItem("userRegistrationClevertap", "no");
                        }
                    }
                    else {
                        localStorage.setItem("getCleverTapID", usrdata.clevertapId);
                    }
                }, 500);
            }, function (err) {
                console.log("err->" + err);
            });
            /* for updating  oneSignal player Id  into database start*/
            if (localStorage.getItem("updatedPlayerId") == "" ||
                localStorage.getItem("updatedPlayerId") == null) {
                _this.onesignal_object.getIds().then(function (ids) {
                    _this.http_object
                        .put(_this.localapi + "/api/CardiovisualUsers/" + userID, {
                        onesignalPlayerId: ids.userId,
                    })
                        .subscribe(function (userDataUpdateSuccess) {
                        localStorage.setItem("updatedPlayerId", "true");
                    }, function (userDataUpdateError) {
                        //console.log('userDataUpdateError--->'+userDataUpdateError.text());
                    });
                });
            }
            /* End */
            //Fired when the component routing to is about to animate into view.
            var no_Sync = localStorage.getItem("onlyForWhatsnew");
            //var no_Sync = localStorage.getItem('app_sync_whatsnew');
            var sync_status = localStorage.getItem("app_sync_dashboard");
            if (no_Sync == "nosync" || (_this.online && sync_status == "no")) {
                localStorage.setItem("onlyForWhatsnew", "");
                if (no_Sync == "nosync") {
                    // code...
                    var timeout = 1200;
                    var loading = _this.loading_controller_object.create({
                        spinner: "dots",
                        content: "<div class='custom-spinner-container'> Please wait, Getting the app ready for you.</div>",
                        duration: 1200,
                        enableBackdropDismiss: false,
                    });
                    loading.present();
                }
                else {
                    var timeout = 500;
                }
                setTimeout(function () {
                    var title_data_query = new Array("WHERE screen='whatsnew' AND is_active=1");
                    _this.database_provider_object
                        .fetchAllData("whatsnewtitle", title_data_query)
                        .then(function (titleData) {
                        _this.title_data = titleData;
                    });
                }, timeout);
                _this.http_service_object.getWhatsnewData().subscribe(function (fetchWhatsnewData) {
                    var dataAsperType = [];
                    dataAsperType = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["filter"](fetchWhatsnewData, function (value) {
                        return value.isFor == local_user_type || value.isFor == "all";
                    });
                    var dataAsPerTypeJson = JSON.stringify(dataAsperType);
                    dataAsPerTypeJson = dataAsPerTypeJson.replace(/"image"/gi, '"image_url"');
                    dataAsperType = JSON.parse(dataAsPerTypeJson);
                    //           _.each(dataAsperType,function(item,index){
                    //             dataAsperType[index].image_url = item.image;
                    //           });
                    setTimeout(function () {
                        _this.slideshow = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "banners" }), "position").reverse();
                        _this.sponserSlides = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "sponsor_banners" }), "position").reverse();
                        _this.topic_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "topics" }), "position").reverse();
                        _this.expert_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "speakers" }), "position").reverse();
                        _this.topVideo_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "featured_video_new" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](_this.topVideo_data) > 0) {
                            _this.skeleton = true;
                            //console.log('tthis.topVideo_data-->'+JSON.stringify(this.topVideo_data));
                            var custom_data_0 = [];
                            _this.topVideotemplate = _this.topVideo_data[0].template;
                            _this.topVideo_listindata = _this.topVideo_data[0];
                            var listValues = JSON.parse(_this.topVideo_data[0].list_values);
                            var that = _this;
                            __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["each"](listValues, function (value, key) {
                                var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                    value +
                                    " AND isActive = 1");
                                that.database_provider_object
                                    .fetchAllData("new_sub_topics", json_query)
                                    .then(function (topic_data) {
                                    if (topic_data.length > 0) {
                                        custom_data_0.push(topic_data[0]);
                                    }
                                });
                            });
                            setTimeout(function () {
                                that.education_item = custom_data_0;
                                //alert('--0--------education_item--->'+JSON.stringify(that.education_item));
                                console.log('education_item->', JSON.stringify(that.education_item));
                            }, 1000);
                        }
                        else {
                            _this.skeleton = false;
                        }
                        var videoDetailsTemplate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "featured_video_details" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](videoDetailsTemplate) > 0) {
                            _this.skeleton = true;
                            _this.topVideo_DetailsTemplate = videoDetailsTemplate;
                        }
                        else {
                            _this.skeleton = false;
                        }
                        //this.calculator_data = _.sortBy(_.where(dataAsperType, {type: "calculators"}), 'position').reverse();
                        var calculatorData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "calculators" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](calculatorData) > 0) {
                            _this.calculator_data = calculatorData;
                        }
                        else {
                            _this.calculator_data = "";
                        }
                        //alert('this.calculator_data---->'+JSON.stringify(this.calculator_data));
                        var quizData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "knowMore_quiz" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](quizData) > 0) {
                            _this.quiz_data = quizData;
                        }
                        else {
                            _this.quiz_data = "";
                        }
                        var surveyData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "knowMore_survey" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](surveyData) > 0) {
                            _this.survey_data = surveyData;
                        }
                        else {
                            _this.survey_data = "";
                        }
                        var pollsData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "knowMore_polls" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](pollsData) > 0) {
                            _this.polls_data = pollsData;
                        }
                        else {
                            _this.polls_data = "";
                        }
                        _this.playlist_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "curated_lists" }), "position").reverse();
                        var userData = new Array("");
                        _this.database_provider_object
                            .fetchAllData("new_user_info", userData)
                            .then(function (userresult) {
                            var data = userresult[0];
                            /*if(data.user_role_sub_type == 'medical-device-pharma-professional' || data.user_role_sub_type == 'Medical Device/Pharma Professional' || data.user_role_sub_type == 'patient' || data.user_role_sub_type == 'Patient' || data.user_role_sub_type == 'curious-learner' || data.user_role_sub_type == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){
                            this.forum_data = [];
                        }else{*/
                            _this.http_service_object
                                .getForum()
                                .subscribe(function (forum_data) {
                                _this.forum_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["filter"](forum_data, function (f_data) {
                                    if (f_data.isFor == data.user_type ||
                                        f_data.isFor == "all") {
                                        return f_data;
                                    }
                                });
                            });
                            //}
                        });
                        //wordpress blog message api
                        // this.http_service_object.getBlogs().subscribe(blog_data => {
                        //   this.blog_post = blog_data;
                        // });
                        //twitter messages
                        // this.http_service_object.getTweets().subscribe(tweets_data => {
                        //   this.tweets_data = tweets_data;
                        // });
                        //drawon image
                        _this.drawnImg = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "draw_on_images" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](_this.drawnImg) > 0) {
                            var drawn_data = [];
                            var listValues = JSON.parse(_this.drawnImg[0].list_values);
                            var that = _this;
                            __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["each"](listValues, function (value, key) {
                                var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                    value +
                                    " AND isActive = 1");
                                that.database_provider_object
                                    .fetchAllData("new_sub_topics", json_query)
                                    .then(function (topic_data) {
                                    if (topic_data.length > 0) {
                                        drawn_data.push(topic_data[0]);
                                    }
                                });
                            });
                            setTimeout(function () {
                                that.drawnData = drawn_data;
                            }, 1000);
                        }
                    }, timeout);
                }, function (err) {
                    console.log("err->" + err);
                });
            }
            else if (_this.online && sync_status == "yes") {
                /*----------------- Core API Sync logic start here :Sanjeev ---------------------------*/
                //console.log('liveId-->'+liveId);
                _this.network_check_object.getallPageAction(localStorage.getItem("cv5usrType"));
                _this.database_provider_object.updateUserLocalDB(userID);
                _this.database_provider_object.getTopicsAPIData(local_user_type);
                // Get categories detail from API
                _this.database_provider_object.getCategoriesAPIData(local_user_type);
                // Get SubCategories detail from API
                console.log('local_user_type', local_user_type);
                _this.database_provider_object.dashboardSubTopicsAPIData(local_user_type);
                // Get Splashes from live link.
                _this.database_provider_object.getCardioSplashes(local_user_type);
                //insert playlist data from api
                _this.database_provider_object.insertPlaylistsAPIData(userID);
                //insert Favorites data from api
                _this.database_provider_object.getFavoritesAPIData(userID);
                _this.database_provider_object.getOrderDetailsAPIData(userID);
                //information table
                _this.database_provider_object.dashboardInformationAPIData(local_user_type);
                //channels table
                _this.database_provider_object.getChannelsApiData(local_user_type);
                //insert Information Favorites data from api
                _this.database_provider_object.getInformationFavoritesAPIData(userID);
                //custom_lisiting
                _this.database_provider_object.getCutomlistingApi();
                //custom video json
                _this.database_provider_object.getCutomVideoJsonApi();
                //sponsored by table
                _this.database_provider_object.getSponsoredByData(local_user_type);
                //whatsnew data by table
                _this.database_provider_object.getWhatsnewData(local_user_type);
                //whatsnew page section title
                _this.database_provider_object.getWhatsnewSectionTitleData(local_user_type);
                //custom playlist
                _this.database_provider_object.getCustomPlaylistData(userID);
                var notiCondition = new Array("WHERE isActive=1 ORDER BY position DESC");
                _this.database_provider_object
                    .fetchAllData("freshNotificationList", notiCondition)
                    .then(function (notiresult) {
                    console.log("ionViewDidLoad notiresult--->" + JSON.stringify(notiresult));
                    if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](notiresult) > 0) {
                        var maxValObject = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["max"](notiresult, "notification_id");
                        if (maxValObject.notification_id) {
                            localStorage.setItem("notificationID", maxValObject.notification_id);
                            _this.database_provider_object.newNotificationData(local_user_type);
                        }
                    }
                    else {
                        _this.database_provider_object.newNotificationData(local_user_type);
                    }
                });
                var devicesData = {
                    deviceToken: localStorage.getItem("getDeviceuuid"),
                    deviceType: localStorage.getItem("getDevicePlatform"),
                    userId: userID,
                    osVersion: localStorage.getItem("getDeviceversion"),
                    model: localStorage.getItem("modelNo"),
                    updatedAt: new Date().toISOString(),
                    status: 1,
                };
                _this.database_provider_object.saveDeviceDataToApi(devicesData); //stores device data on server
                var params = {
                    record_time: _this.dtStr,
                    record_date: _this.clevertapDate,
                    os: localStorage.getItem("getDevicePlatform"),
                    userRoleId: localStorage.getItem("cv5userRoleId"),
                    userType: localStorage.getItem("cv5usrType"),
                    userEmail: localStorage.getItem("cv5userEmail"),
                    specialities: localStorage.getItem("usrSpecialities"),
                    subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                    location: localStorage.getItem("location"),
                };
                // Set clevertap whats new Launch event.
                _this.clevertap_object.recordEventWithNameAndProps("whatsNewLaunch", params);
                localStorage.setItem("app_sync_dashboard", "no");
                var loading = _this.loading_controller_object.create({
                    spinner: "dots",
                    content: "<div class='custom-spinner-container'> Please wait, Getting the app ready for you.</div>",
                    duration: 1200,
                    enableBackdropDismiss: false,
                });
                loading.present();
                var title_data_query = new Array("WHERE screen='whatsnew' AND is_active=1");
                _this.database_provider_object
                    .fetchAllData("whatsnewtitle", title_data_query)
                    .then(function (titleData) {
                    _this.title_data = titleData;
                });
                _this.http_service_object.getWhatsnewData().subscribe(function (fetchWhatsnewData) {
                    var dataAsperType = [];
                    dataAsperType = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["filter"](fetchWhatsnewData, function (value) {
                        return value.isFor == local_user_type || value.isFor == "all";
                    });
                    __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["each"](dataAsperType, function (item, index) {
                        dataAsperType[index].image_url = item.image;
                    });
                    setTimeout(function () {
                        _this.slideshow = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "banners" }), "position").reverse();
                        _this.sponserSlides = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "sponsor_banners" }), "position").reverse();
                        _this.topic_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "topics" }), "position").reverse();
                        _this.expert_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "speakers" }), "position").reverse();
                        _this.topVideo_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "featured_video_new" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](_this.topVideo_data) > 0) {
                            _this.skeleton = true;
                            var custom_data_1 = [];
                            _this.topVideotemplate = _this.topVideo_data[0].template;
                            _this.topVideo_listindata = _this.topVideo_data[0];
                            var listValues = JSON.parse(_this.topVideo_data[0].list_values);
                            var that = _this;
                            __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["each"](listValues, function (value, key) {
                                var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                    value +
                                    " AND isActive = 1");
                                that.database_provider_object
                                    .fetchAllData("new_sub_topics", json_query)
                                    .then(function (topic_data) {
                                    if (topic_data.length > 0) {
                                        custom_data_1.push(topic_data[0]);
                                    }
                                });
                            });
                            setTimeout(function () {
                                that.education_item = custom_data_1;
                                //alert('--2--------education_item--->'+JSON.stringify(that.education_item));
                                console.log('--2-----education_item--->' + JSON.stringify(that.education_item));
                            }, 1000);
                        }
                        else {
                            _this.skeleton = false;
                        }
                        var videoDetailsTemplate = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "featured_video_details" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](videoDetailsTemplate) > 0) {
                            _this.skeleton = true;
                            _this.topVideo_DetailsTemplate = videoDetailsTemplate;
                        }
                        else {
                            _this.skeleton = false;
                        }
                        var calculatorData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "calculators" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](calculatorData) > 0) {
                            _this.calculator_data = calculatorData;
                        }
                        else {
                            _this.calculator_data = "";
                        }
                        //alert('this.calculator_data---->'+JSON.stringify(this.calculator_data));
                        var quizData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "knowMore_quiz" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](quizData) > 0) {
                            _this.quiz_data = quizData;
                        }
                        else {
                            _this.quiz_data = "";
                        }
                        var surveyData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "knowMore_survey" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](surveyData) > 0) {
                            _this.survey_data = surveyData;
                        }
                        else {
                            _this.survey_data = "";
                        }
                        var pollsData = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "knowMore_polls" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](pollsData) > 0) {
                            _this.polls_data = pollsData;
                        }
                        else {
                            _this.polls_data = "";
                        }
                        _this.playlist_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "curated_lists" }), "position").reverse();
                        var userData = new Array("");
                        _this.database_provider_object
                            .fetchAllData("new_user_info", userData)
                            .then(function (userresult) {
                            var data = userresult[0];
                            var that = _this;
                            _this.http_service_object
                                .getForum()
                                .subscribe(function (forum_data) {
                                _this.forum_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["filter"](forum_data, function (f_data) {
                                    if (f_data.isFor == data.user_type ||
                                        f_data.isFor == "all") {
                                        return f_data;
                                    }
                                });
                            });
                            /*if(data.user_role_sub_type == 'medical-device-pharma-professional' || data.user_role_sub_type == 'Medical Device/Pharma Professional' || data.user_role_sub_type == 'patient' || data.user_role_sub_type == 'Patient' || data.user_role_sub_type == 'curious-learner' || data.user_role_sub_type == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){
                            this.forum_data = [];
                        }else{
                          this.http_service_object.getForum().subscribe(forum_data => {
                            this.forum_data = forum_data;
                          });
                        }*/
                        });
                        //wordpress blog message api
                        // this.http_service_object.getBlogs().subscribe(blog_data => {
                        //   this.blog_post = blog_data;
                        // });
                        //twitter messages
                        // this.http_service_object.getTweets().subscribe(tweets_data => {
                        //   this.tweets_data = tweets_data;
                        // });
                        //drwaon image
                        _this.drawnImg = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["sortBy"](__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["where"](dataAsperType, { type: "draw_on_images" }), "position").reverse();
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](_this.drawnImg) > 0) {
                            var drawn_data = [];
                            var listValues = JSON.parse(_this.drawnImg[0].list_values);
                            var that = _this;
                            __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["each"](listValues, function (value, key) {
                                var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                    value +
                                    " AND isActive = 1");
                                that.database_provider_object
                                    .fetchAllData("new_sub_topics", json_query)
                                    .then(function (topic_data) {
                                    if (topic_data.length > 0) {
                                        drawn_data.push(topic_data[0]);
                                    }
                                });
                            });
                            setTimeout(function () {
                                that.drawnData = drawn_data;
                            }, 1000);
                        }
                    }, 1200);
                }, function (err) {
                    console.log("err->" + err);
                });
                /*-------------------------------- Core API Sync logic End here---------------------------*/
            }
            else if ((no_Sync != "nosync" && sync_status == "no") || !_this.online) {
                // code...
                var loading = _this.loading_controller_object.create({
                    spinner: "ios",
                    duration: 2000,
                    enableBackdropDismiss: false,
                });
                loading.present();
                setTimeout(function () {
                    var title_data_query = new Array("WHERE screen='whatsnew' AND is_active=1");
                    _this.database_provider_object
                        .fetchAllData("whatsnewtitle", title_data_query)
                        .then(function (titleData) {
                        _this.title_data = titleData;
                    });
                    var topicData_query = new Array("WHERE type='topics' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", topicData_query)
                        .then(function (topicData) {
                        //alert('topicData -->'+JSON.stringify(topicData));
                        _this.topic_data = topicData;
                    });
                    var expertsData_query = new Array("WHERE type='speakers' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", expertsData_query)
                        .then(function (expertData) {
                        _this.expert_data = expertData;
                        _this.expert_data.forEach(function (data) {
                            if (data.local_image_url) {
                                _this.file_object.readAsArrayBuffer(_this.file_object.dataDirectory + "icons/", data.local_image_url.split('/').pop()).then(function (buffer) {
                                    var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                    data.base64Image = dataURL;
                                });
                            }
                        });
                    });
                    var topVideo_data_query = new Array("WHERE type='featured_video_new' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", topVideo_data_query)
                        .then(function (topData) {
                        _this.topVideo_data = topData;
                    });
                    if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](_this.topVideo_data) > 0) {
                        _this.skeleton = true;
                        setTimeout(function () {
                            //alert('----nosync topVideo_data----'+JSON.stringify(this.topVideo_data));
                            var custom_data_2 = [];
                            _this.topVideotemplate = _this.topVideo_data[0].template;
                            _this.topVideo_listindata = _this.topVideo_data[0];
                            var listValues = JSON.parse(_this.topVideo_data[0].list_values);
                            var that = _this;
                            __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["each"](listValues, function (value, key) {
                                var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                    value +
                                    " AND isActive = 1");
                                that.database_provider_object
                                    .fetchAllData("new_sub_topics", json_query)
                                    .then(function (topic_data) {
                                    if (topic_data.length > 0) {
                                        custom_data_2.push(topic_data[0]);
                                    }
                                });
                            });
                            setTimeout(function () {
                                that.education_item = custom_data_2;
                                //alert('--nosync--------education_item--->'+JSON.stringify(that.education_item));
                                console.log('--nosync-----education_item--->' + JSON.stringify(that.education_item));
                            }, 1000);
                        }, 500);
                    }
                    else {
                        _this.skeleton = false;
                    }
                    var top_Video_data_query = new Array("WHERE type='featured_video_details' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", top_Video_data_query)
                        .then(function (top_Data) {
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](top_Data) > 0) {
                            _this.skeleton = true;
                            _this.topVideo_DetailsTemplate = top_Data;
                        }
                        else {
                            _this.skeleton = false;
                        }
                    });
                    var curatedlistData_query = new Array("WHERE type='curated_lists' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", curatedlistData_query)
                        .then(function (curated_list_data) {
                        _this.playlist_data = curated_list_data;
                        _this.playlist_data.forEach(function (data) {
                            if (data.local_image_url) {
                                _this.file_object.readAsArrayBuffer(_this.file_object.dataDirectory + "icons/", data.local_image_url.split('/').pop()).then(function (buffer) {
                                    var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                    data.base64Image = dataURL;
                                });
                            }
                        });
                    });
                    var bannersData_query = new Array("WHERE type='banners' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", bannersData_query)
                        .then(function (banners_data) {
                        //alert('slideshow '+JSON.stringify(banners_data));
                        _this.slideshow = banners_data;
                    });
                    var sponserData_query = new Array("WHERE type='sponsor_banners' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", sponserData_query)
                        .then(function (sponser_data) {
                        _this.sponserSlides = sponser_data;
                        _this.sponserSlides.forEach(function (data) {
                            if (data.local_image_url) {
                                _this.file_object.readAsArrayBuffer(_this.file_object.dataDirectory + "icons/", data.local_image_url.split('/').pop()).then(function (buffer) {
                                    var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                    data.base64Image = dataURL;
                                });
                            }
                        });
                    });
                    //twitter messages
                    // this.http_service_object.getTweets().subscribe(tweets_data => {
                    //   this.tweets_data = tweets_data;
                    // });
                    //wordpress blog message api
                    // this.http_service_object.getBlogs().subscribe(blog_data => {
                    //   this.blog_post = blog_data;
                    // });
                    //calculator data
                    var calculatorData_query = new Array("WHERE type='calculators' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", calculatorData_query)
                        .then(function (calculator_data) {
                        //alert('calculator_data  '+JSON.stringify(calculator_data));
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](calculator_data) > 0) {
                            _this.calculator_data = calculator_data;
                        }
                        else {
                            _this.calculator_data = "";
                        }
                    });
                    var quizData_query = new Array("WHERE type='knowMore_quiz' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", quizData_query)
                        .then(function (quiz_data) {
                        //alert('quiz_data  '+JSON.stringify(quiz_data));
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](quiz_data) > 0) {
                            _this.quiz_data = quiz_data;
                        }
                        else {
                            _this.quiz_data = "";
                        }
                    });
                    var surveyData_query = new Array("WHERE type='knowMore_survey' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", surveyData_query)
                        .then(function (survey_data) {
                        //alert('quiz_data  '+JSON.stringify(quiz_data));
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](survey_data) > 0) {
                            _this.survey_data = survey_data;
                        }
                        else {
                            _this.survey_data = "";
                        }
                    });
                    var pollsData_query = new Array("WHERE type='knowMore_polls' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", pollsData_query)
                        .then(function (polls_data) {
                        //alert('quiz_data  '+JSON.stringify(quiz_data));
                        if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](polls_data) > 0) {
                            _this.polls_data = polls_data;
                        }
                        else {
                            _this.polls_data = "";
                        }
                    });
                    var userData = new Array("");
                    _this.database_provider_object
                        .fetchAllData("new_user_info", userData)
                        .then(function (userresult) {
                        var data = userresult[0];
                        /*if(data.user_role_sub_type == 'medical-device-pharma-professional' || data.user_role_sub_type == 'Medical Device/Pharma Professional' || data.user_role_sub_type == 'patient' || data.user_role_sub_type == 'Patient' || data.user_role_sub_type == 'curious-learner' || data.user_role_sub_type == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){
                          this.forum_data = [];
          
                      }else{*/
                        _this.http_service_object.getForum().subscribe(function (forum_data) {
                            //this.forum_data = forum_data;
                            _this.forum_data = __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["filter"](forum_data, function (f_data) {
                                if (f_data.isFor == data.user_type || f_data.isFor == "all") {
                                    return f_data;
                                }
                            });
                        });
                        //}
                    });
                    //drawon image
                    var topVideo_data_query = new Array("WHERE type='draw_on_images' ORDER BY position DESC");
                    _this.database_provider_object
                        .fetchAllData("whatsnew", topVideo_data_query)
                        .then(function (drawnImgData) {
                        _this.drawnImg = drawnImgData;
                    });
                    if (__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["size"](_this.drawnImg) > 0) {
                        var drawn_data = [];
                        var listValues = JSON.parse(_this.drawnImg[0].list_values);
                        var that = _this;
                        __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["each"](listValues, function (value, key) {
                            var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                value +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("new_sub_topics", json_query)
                                .then(function (topic_data) {
                                if (topic_data.length > 0) {
                                    drawn_data.push(topic_data[0]);
                                }
                            });
                        });
                        setTimeout(function () {
                            that.drawnData = drawn_data;
                        }, 1000);
                    }
                }, 1000);
            }
            else {
                //alert('none of the above');
            }
            _this.http_service_object
                .getAppDetails(_this.platformType)
                .subscribe(function (data) {
                var osTypeDetails = data[0];
                _this.app_version_object.getVersionNumber().then(function (version) {
                    _this.app_version_number = version;
                    if (_this.http_service_object.cmpVersion(osTypeDetails.latest, version) > 0) {
                        // this.showConfirmbox(osTypeDetails.url);
                    }
                });
            });
        });
    };
    WhatsNewPage.prototype.slideChangedForTwiter = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (this.slides.isEnd()) {
            this.isLastArrowForTweet = true;
            this.isFirstArrowForTweet = false;
        }
        else if (currentIndex === 0) {
            this.isLastArrowForTweet = false;
            this.isFirstArrowForTweet = true;
        }
        else {
            this.isLastArrowForTweet = false;
            this.isFirstArrowForTweet = false;
        }
    };
    WhatsNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad WhatsNewPage");
        var applaunch_status = localStorage.getItem("applaunchPopup");
        if (applaunch_status == "yes") {
            var newUserLocation = localStorage.getItem("location");
            var usr_specialities = localStorage.getItem("usrSpecialities");
            var userId = localStorage.getItem("userliveId");
            if (usr_specialities == "" || newUserLocation == "") {
                var querystring = new Array(" WHERE name='SpecialitiesLocation' AND type='specialities_location'");
                this.database_provider_object
                    .fetchAllData("custom_listing", querystring)
                    .then(function (custom_listing_data) {
                    var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                    var forLocation = list_json_value[0];
                    var forLocationActiveFrom = list_json_value[0].activeFrom;
                    var forLocationActiveTill = list_json_value[0].activeTill;
                    var checkForLocationType = list_json_value[0].checkFor;
                    var forSpecilities = list_json_value[1];
                    var forSpecilitiesActiveFrom = list_json_value[1].activeFrom;
                    var forSpecilitieAactiveTill = list_json_value[1].activeTill;
                    var checkForSpecilitiesType = list_json_value[1].checkFor;
                    var dateCheccLoc = _this.network_check_object.dateCheck(forLocationActiveFrom, forLocationActiveTill, _this.isoDateFormat);
                    var dateCheckSpslty = _this.network_check_object.dateCheck(forSpecilitiesActiveFrom, forSpecilitieAactiveTill, _this.isoDateFormat);
                    if (usr_specialities == "" &&
                        checkForSpecilitiesType == "Specialities" &&
                        dateCheckSpslty) {
                        //alert('---->'+forSpecilities.videoSeenCount);
                        switch (forSpecilities.videoSeenCount) {
                            case "appLaunch":
                                //alert('Specilities appLaunch');
                                if (dateCheckSpslty) {
                                    _this.video_share_provider_object.specialitiesPopup(forSpecilities.message);
                                }
                                break;
                            default:
                                //alert('Specilities video');
                                localStorage.setItem("countForPopup", forSpecilities.videoSeenCount);
                                localStorage.setItem("mesgForPopup", forSpecilities.message);
                        }
                    }
                    else if (newUserLocation == "" &&
                        checkForLocationType == "Location" &&
                        dateCheccLoc) {
                        switch (forLocation.videoSeenCount) {
                            case "appLaunch":
                                if (dateCheccLoc) {
                                    _this.video_share_provider_object.specialitiesPopup(forLocation.message);
                                }
                                break;
                            default:
                                //alert(' location video');
                                localStorage.setItem("countForPopup", forLocation.videoSeenCount);
                                localStorage.setItem("mesgForPopup", forLocation.message);
                                break;
                        }
                    }
                });
            }
            localStorage.setItem("applaunchPopup", "no");
        }
    };
    WhatsNewPage.prototype.gotoDetailPage = function (item, type, list) {
        var _this = this;
        console.log('type: ', type);
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
                            console.log("pqr---->" + topicData);
                            _this.forClevertapRecords(item, type, list);
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
                            console.log("pqr---->" + infotopicData);
                            _this.forClevertapRecords(item, type, list);
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
                        _this.forClevertapRecords(item, type, list);
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
                        _this.forClevertapRecords(item, type, list);
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
                    this.forClevertapRecords(item, type, list);
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
                    this.forClevertapRecords(item, type, list);
                    var url = "https://twitter.com/cardiovisualapp/status/" + item.tweet_id;
                    var ref = this.in_app_browser_object.create(url, "_system", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
                }
                break;
            case "tab_list":
                this.forClevertapRecords(item, type, list);
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
    WhatsNewPage.prototype.getArraysIntersection = function (a1, a2) {
        return a1.filter(function (n) {
            return a2.indexOf(n) !== -1;
        });
    };
    WhatsNewPage.prototype.subtopicQueryProvider = function (tableName, subTopicQuery, list_json) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database_provider_object
                .fetchAllData(tableName, subTopicQuery)
                .then(function (topic_data) {
                var topic_ids = "['" + __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["pluck"](topic_data, "id") + "']";
                var filtered_valid_ids = _this.getArraysIntersection(list_json, topic_ids);
                resolve({ valid_ids: parseInt(filtered_valid_ids) });
            })
                .catch(function (error) {
                console.log("Error occurred");
                reject({ text: "Error occurred" });
            });
        });
    };
    WhatsNewPage.prototype.subtopicDetailQueryProvider = function (subtopicTable, subTopicDetailQuery) {
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
    WhatsNewPage.prototype.seeAllClick = function (params, listingData) {
        //alert('params-->'+params);
        this.navCtrl.push("WhatsNewSeeallPage", {
            params: params,
            ListingData: listingData,
            title_data: this.title_data,
        });
    };
    WhatsNewPage.prototype.onBannerClick = function (item, bannerType) {
        var _this = this;
        var values = JSON.parse(item.list_values);
        switch (item.template) {
            case "expert_playlist":
                this.loading_service_object.show();
                var list_json = JSON.parse(item.list_values);
                var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                    list_json[0] +
                    " AND isActive = 1");
                this.database_provider_object
                    .fetchAllData("new_sub_topics", json_query)
                    .then(function (topic_data) {
                    setTimeout(function () {
                        _this.forClevertapRecords(item, "expert_playlist", bannerType);
                        _this.navCtrl.push("WhatsNewDetailsPage", {
                            data: item,
                            type: item.template,
                            index: 0,
                            header: "hide",
                            display_playlist: topic_data[0],
                            sendTo: bannerType,
                        });
                        _this.loading_service_object.hide();
                    }, 1200);
                });
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
                        setTimeout(function () {
                            _this.forClevertapRecords(item, "video_detail", bannerType);
                            _this.navCtrl.push("WhatsNewDetailsPage", {
                                data: item,
                                type: item.template,
                                index: 0,
                                header: "hide",
                                display_data: topic_data[0],
                                sendTo: bannerType,
                            });
                            _this.loading_service_object.hide();
                        }, 1200);
                    });
                }
                else if (item.source == "information") {
                    var json_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                        list_json.Expert[0] +
                        " AND isActive = 1");
                    this.database_provider_object
                        .fetchAllData("information", json_query)
                        .then(function (topic_data) {
                        setTimeout(function () {
                            _this.forClevertapRecords(item, "video_detail", bannerType);
                            _this.navCtrl.push("WhatsNewDetailsPage", {
                                data: item,
                                type: item.template,
                                index: 0,
                                header: "hide",
                                display_data: topic_data[0],
                                sendTo: bannerType,
                            });
                            _this.loading_service_object.hide();
                        }, 1200);
                    });
                }
                break;
            case "wordpress_blog":
                this.forClevertapRecords(item, bannerType, bannerType);
                var ref = this.in_app_browser_object.create(values.url, "_blank", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
                ref.on("loadstop").subscribe(function (event) {
                    _this.screen_orientation_object.unlock();
                });
                ref.on("exit").subscribe(function (event) {
                    _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                });
                break;
            case "play_video":
                this.forClevertapRecords(item, bannerType, bannerType);
                var video_url = values.video_url;
                var options = {
                    successCallback: function () {
                        console.log("Video played");
                    },
                    errorCallback: function (e) {
                        console.log("Error streaming");
                    },
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
            case "tab_list":
                this.forClevertapRecords(item, "", bannerType);
                localStorage.setItem("segment_name", item.source);
                this.navCtrl.push("ItemDetailsPageTabs", {
                    pageItem: item.name,
                    data: item,
                    request_from: "whatsnew_page",
                });
                break;
            case "forum":
                //this.qnaSite({'slug':values.slug, 'title':item.name}, 'From WhatsNew Banner');
                this.onPromptForQna({ slug: values.slug, title: item.name }, "From WhatsNew Banner");
                break;
        }
    };
    WhatsNewPage.prototype.nextSlide = function (slide_name) {
        if (slide_name == "slides") {
            this.slides.slideNext();
        }
        else if (slide_name == "slides1") {
            this.slides1.slideNext();
        }
    };
    WhatsNewPage.prototype.prevSlide = function (slide_name) {
        if (slide_name == "slides") {
            this.slides.slidePrev();
        }
        else if (slide_name == "slides1") {
            this.slides1.slidePrev();
        }
    };
    WhatsNewPage.prototype.logout = function () {
        this.database_provider_object.deleteRecords("DELETE FROM new_user_info");
        this.storage_object.set("user_logged_in", 0);
        this.storage_object.set("get_started_page_counter", 0);
        localStorage.setItem("cv5userEmail", "");
        localStorage.setItem("cv5userRoleId", "");
        localStorage.setItem("userliveId", "");
        localStorage.setItem("cv5usrType", "");
        localStorage.setItem("cv5usrRolesubType", "");
        localStorage.setItem("userIdentity", "");
        localStorage.setItem("getCleverTapID", "");
        localStorage.setItem("updatedPlayerId", "");
        localStorage.setItem("liveId", "");
        localStorage.setItem("verified", "");
        localStorage.setItem("isLinkSet", "");
        localStorage.setItem("shownContent", "");
        localStorage.setItem("productActiveTill", "");
        localStorage.setItem("myProductflg", "false");
        localStorage.setItem("userProAccess", "");
        localStorage.setItem("productExpired", "");
        localStorage.setItem("productID", "false");
        localStorage.setItem("productType", "");
        localStorage.setItem("productExpiredate", "");
        localStorage.setItem("promotionalCodeStatus", "");
        localStorage.setItem("canvasimgshare", "notset");
        localStorage.setItem("canDownloadAccess", "false");
        localStorage.setItem("Downloadque", "");
        localStorage.setItem("app_sync_dashboard", "yes");
        localStorage.setItem("applaunchPopup", "yes");
        localStorage.setItem("page_array_push", "yes");
        localStorage.setItem("showrandomVideo", "yes");
        localStorage.setItem("arrayOfTags", "yes");
        localStorage.setItem("loginMedium", "false");
        localStorage.setItem("forExitApp", "false");
        localStorage.setItem("location", "");
        localStorage.setItem("InfoDownloadque", "");
        localStorage.setItem("usrSpecialities", "");
        localStorage.setItem("referral_code", "");
        localStorage.setItem("referred_by", "");
        this.navCtrl.setRoot("LoginPage");
    };
    WhatsNewPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform_object.ready().then(function () {
            localStorage.setItem("forExitApp", "true");
            _this.platform_object.registerBackButtonAction(function () {
                var forexitapp = localStorage.getItem("forExitApp");
                if (forexitapp !== "true") {
                    _this.counter = 0;
                    localStorage.setItem("forExitApp", "false");
                    _this.navCtrl.pop();
                }
                else {
                    _this.counter++;
                    _this.presentConfirm();
                    if (_this.counter == 2) {
                        localStorage.setItem("forExitApp", "false");
                        _this.platform_object.exitApp();
                    }
                }
            }, 0);
        });
    };
    WhatsNewPage.prototype.presentConfirm = function () {
        var _this = this;
        var confirmalert = this.alert_controller_object.create({
            title: "Exit App",
            message: "Are you sure you want to exit?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        _this.counter = 0;
                        console.log("Cancel clicked");
                    },
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Yes clicked");
                        _this.counter = 0;
                        _this.platform_object.exitApp();
                    },
                },
            ],
        });
        confirmalert.present();
    };
    WhatsNewPage.prototype.ionViewWillLeave = function () {
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != "none") {
            this.network_check_object.getPageAction("WhatsNewPage", "end", "", localStorage.getItem("cv5usrType"));
        }
        localStorage.setItem("forExitApp", "false");
    };
    WhatsNewPage.prototype.forClevertapRecords = function (data, type, list) {
        switch (type) {
            case "wordpress_blog":
                if (list == "Calculator") {
                    var ContentFor = "Calculator";
                    var ClickedContent = "Calculator";
                }
                else {
                    var ContentFor = "Blog";
                    var ClickedContent = "Blog";
                }
                break;
            case "twitter_msg":
                var ContentFor = "Tweets";
                var ClickedContent = "'" + data.tweet_text + "'";
                break;
            case "Banner":
            case "Sponser Banner":
                var ContentFor = "'" + type + "'";
                var ClickedContent = "'" + data.name + "'";
                break;
            case "Calculators":
            case "Quiz":
            case "Survey":
            case "Polls ":
                var ContentFor = "Know More Interact";
                var ClickedContent = "'" + type + "'";
                break;
            case "Facebook":
            case "Twitter":
            case "Linkedin":
            case "Youtube ":
            case "Instagram ":
                var ContentFor = "Social Interact";
                var ClickedContent = "'" + type + "'";
                break;
            default:
                var ContentFor = "'" + data.source + "'";
                var ClickedContent = "'" + data.name + "'";
                break;
        }
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
            whatsNewContentFor: ContentFor,
            listContentType: list,
            nameOfClickedContent: ClickedContent,
        };
        // Set clevertap Custom AppLaunch event.
        //alert('whatsNew params ---------->'+JSON.stringify(params));
        this.clevertap_object.recordEventWithNameAndProps("clickedOnWhatsNew", params);
    };
    /*qnaSite(forum,tagTYPE){
      this.platform_object.ready().then(() => {
        var network_type = this.network_check_object.getNetworkType();
        if(network_type == 'none'){
  
          this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
          }).present();
        } else {
          const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false
          };
          this.storage_object.get('user_logged_in').then((val) => {
            this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {
  
              if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional'){
  
                  this.email = data.email;
                  this.username = data.username;
                  if(this.email =='' || this.username == '' || this.username == null){
  
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
                    this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'clevertap_tag': tagTYPE, 'user_type':'Patient'});
                  }
  
              }else{
                this.email = data.email;
                this.username = data.username;
                if(this.email =='' || this.username == '' || this.username == null){
  
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
                this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'clevertap_tag': tagTYPE, 'user_type':'Doctor'});
                }
              }
            }, err => {
              console.log('err->'+err);
            });
          });
        }
      });
    }
  */
    /*redirectToForumDashboard(object){
  
      var params = {
        "record_time" : this.dtStr,
        "record_date" : this.clevertapDate,
        "os" : localStorage.getItem('getDevicePlatform'),
        "userRoleId" : localStorage.getItem('cv5userRoleId'),
        "userType": localStorage.getItem('cv5usrType'),
        "userEmail" : localStorage.getItem('cv5userEmail'),
        "Identity":localStorage.getItem('userIdentity'),
        "userName" : object.username,
        "tags" : object.clevertap_tag,
        "nameOfClickedContent": object.forum_title,
        "location":localStorage.getItem('location'),
        "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
        "specialities":localStorage.getItem('usrSpecialities'),
        "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
      };
  
      this.clevertap_object.recordEventWithNameAndProps("openedForum",params);
  
      var text_arr =[object.username, object.email, object.first_time, object.forum_slug];
      var text = JSON.stringify(text_arr);
  
      var encode_string = window.btoa(text);
      var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
  
      if(object.user_type == 'Patient'){
        var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
          
      }else{
        var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
      }
    }*/
    WhatsNewPage.prototype.slideChangedForForum = function () {
        var currentIndex = this.slides1.getActiveIndex();
        if (this.slides1.isEnd()) {
            this.isLastArrowForForum = true;
            this.isFirstArrowForForum = false;
        }
        else if (currentIndex === 0) {
            this.isLastArrowForForum = false;
            this.isFirstArrowForForum = true;
        }
        else {
            this.isLastArrowForForum = false;
            this.isFirstArrowForForum = false;
        }
    };
    WhatsNewPage.prototype.getNameFromEmail = function (email) {
        var name = email
            .replace(/^(.+)@(.+)$/g, "$1")
            .replace(/[\. __]+/g, " ")
            .replace(/\s|[0-9]/g, " ");
        return name;
    };
    WhatsNewPage.prototype.showConfirmbox = function (url) {
        var _this = this;
        var confirmPopup = this.alert_controller_object.create({
            title: "",
            message: '<h4 style="color:#ffffff; text-align:center;">Update required</h4><p style="color:#ffffff; text-align:center;">We have introduced some exciting new features, please upgrade now to continue using CardioVisual.</p>',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: "Update",
                    handler: function () {
                        console.log("Cancel clicked");
                        _this.in_app_browser_object.create(url, "_system", "location=no");
                        //don't allow the user to close unless he enters model...
                        return false;
                    },
                },
            ],
        });
        confirmPopup.present();
    };
    WhatsNewPage.prototype.knowMoreClick = function (type) {
        this.forClevertapRecords(type, type, type);
        if (type == "Calculators") {
            this.navCtrl.push("WhatsNewSeeallPage", {
                params: type,
                ListingData: this.calculator_data,
                title_data: type,
            });
        }
        else if (type == "Quiz") {
            this.navCtrl.push("WhatsNewSeeallPage", {
                params: type,
                ListingData: this.quiz_data,
                title_data: type,
            });
        }
        else if (type == "Survey") {
            this.navCtrl.push("WhatsNewSeeallPage", {
                params: type,
                ListingData: this.survey_data,
                title_data: type,
            });
        }
        else if (type == "Polls") {
            this.navCtrl.push("WhatsNewSeeallPage", {
                params: type,
                ListingData: this.polls_data,
                title_data: type,
            });
        }
        else if (type == "Drawn") {
            this.navCtrl.push("WhatsNewSeeallPage", {
                params: type,
                ListingData: this.drawnData,
                title_data: "Draw on images",
            });
        }
    };
    WhatsNewPage.prototype.intractIcon = function (type) {
        var _this = this;
        this.forClevertapRecords(type, type, type);
        if (type == "Facebook") {
            var ref = this.in_app_browser_object.create("https://www.facebook.com/cardiovisual/", "_system", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
            ref.on("loadstop").subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on("exit").subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
        else if (type == "Twitter") {
            var ref = this.in_app_browser_object.create("https://twitter.com/CardioVisualApp", "_system", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
            ref.on("loadstop").subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on("exit").subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
        else if (type == "Instagram") {
            var ref = this.in_app_browser_object.create("https://www.instagram.com/cardiovisual/", "_system", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
            ref.on("loadstop").subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on("exit").subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
        else if (type == "Linkedin") {
            var ref = this.in_app_browser_object.create("https://www.linkedin.com/company/cardiovisual", "_system", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
            ref.on("loadstop").subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on("exit").subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
        else if (type == "Youtube") {
            var ref = this.in_app_browser_object.create("https://www.youtube.com/c/CardioVisual", "_system", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app");
            ref.on("loadstop").subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on("exit").subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
    };
    WhatsNewPage.prototype.onPromptForQna = function (forum, tagTYPE) {
        this.video_share_provider_object.discussPromptForProffesional(forum, tagTYPE, "From WhatsNew");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("slides"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], WhatsNewPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], WhatsNewPage.prototype, "slideshows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("slides1"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], WhatsNewPage.prototype, "slides1", void 0);
    WhatsNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-whats-new",template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\whats-new\whats-new.html"*/'\n\n<ion-header clean-header  class="headerColor" ></ion-header>\n\n\n\n<ion-content no-padding no-margin style="background-color: #fff;top:-6px;" class="fromtheTop">\n\n	<ion-grid class="no-padding no-margin" style="margin-bottom:0px;">\n\n		<ion-card class="hero-slideshow" no-margin>\n\n			<!-- <ion-slides pager loop="true" *ngIf="slideshow"> -->\n\n			<ion-slides pager loop="false" *ngIf="slideshow && slideshow.length > 0">	\n\n				<ion-slide *ngFor="let slide of slideshow; let i = index;" (tap)="onBannerClick(slide ,\'Banner\')">\n\n					<figure no-margin>\n\n						<img *ngIf="slide.local_image_url == \'\' || slide.local_image_url == null" [src]="slide.image_url" alt="">\n\n						<img *ngIf="slide.local_image_url != \'\' && slide.local_image_url != null" src="{{path}}{{slide.local_image_url}}" alt="">						\n\n					</figure>\n\n				</ion-slide>\n\n			</ion-slides>\n\n\n\n			<ion-slides pager loop="false" *ngIf="!slideshow">\n\n				<div class="whatsnew-tile-banner">\n\n					<div class="avatarfortab">\n\n						<ion-avatar item-start>\n\n						<skeleton-item height="225px" width="100%" class="fortab"></skeleton-item>\n\n						</ion-avatar>\n\n					</div>\n\n				</div> \n\n			</ion-slides>\n\n		</ion-card>\n\n\n\n	<!-- <div class="diffDivtopicClass" *ngIf="topic_data"> -->\n\n	<div class="diffDivtopicClass onlyforTopic" *ngIf="topic_data && topic_data.length>0">\n\n		<div class="div-forlabel">\n\n			<div class="div-left forlabel"><!-- <b>Featured Topics</b> --><b>{{title_data[0].name}}</b></div>\n\n			<div class="div-right forlabel" tappable (click)="seeAllClick(\'Topics\',topic_data)">See all</div>\n\n		</div>\n\n		<div class="forboderbottom"></div>\n\n		<ion-scroll scrollX="true" class="fromTop_forScroll">\n\n		      <div class="inline inlineGapTopic flex-container parentDiv"  *ngFor="let topic of topic_data" (click)="gotoDetailPage(topic, topic.template, \'Featured Topics\')" style="overflow-x: auto;">\n\n				<div Class="aligner" style="">{{topic.name}}</div>\n\n				 <!-- <div class="" [ngClass]="{\'textBreak\': topic.name.length <= 11, \'longtextBreak\': topic.name.length > 10 }"> <b> {{topic.name}} </b> </div> -->\n\n			  </div>\n\n		</ion-scroll>		\n\n	</div>\n\n\n\n	<div *ngIf="!topic_data">\n\n		<ion-scroll>\n\n			<div class="inline inlineGapTopic whatsnew-tile-topic" *ngFor="let i of [0,1,2,3,4,5,6,7]">\n\n				<div style="" class="avatarfortab">\n\n					<ion-avatar item-start>\n\n					<skeleton-item height="130px" width="133px" class="fortab"></skeleton-item>\n\n					</ion-avatar>\n\n				</div>\n\n			</div> \n\n		</ion-scroll>\n\n	</div>	\n\n\n\n	<!-- <div class="" *ngIf="expert_data"> -->\n\n	<div class="diffDivExpertClass" *ngIf="expert_data && expert_data.length>0">\n\n		<!-- <ion-label class="forlabel" style=""><b>Experts</b></ion-label>	 -->\n\n		<div class="div-forlabel">\n\n			<div class="div-left forlabel"><b>{{title_data[1].name}}</b></div>\n\n			<div class="div-right forlabel" tappable (tap)="seeAllClick(\'Experts\',expert_data)">See all</div>\n\n		</div>\n\n		<div class="forboderbottom"></div>\n\n		<ion-scroll scrollX="true" class="fromTop_forScroll">\n\n			<div class="inline inlineGap" *ngFor="let expert of expert_data" (click)="gotoDetailPage(expert, expert.template, \'Experts\')" style="width:140px;margin-left:5px;margin-right:5px;">\n\n\n\n		      	<div class="expertimg img-overlay">\n\n		      		<img *ngIf="expert.local_image_url == \'\' || expert.local_image_url == null" src="{{expert.image_url}}"  class="expertClass" />\n\n\n\n		      		<img *ngIf="expert.local_image_url != \'\' && expert.local_image_url != null" [src]="expert.base64Image" alt="" class="expertClass">\n\n		      	</div>\n\n\n\n				<div class="expertName">\n\n					{{expert.name}}\n\n				</div>\n\n		    </div>\n\n		</ion-scroll>	\n\n	</div>\n\n\n\n	<div *ngIf="!expert_data">\n\n		<ion-scroll>\n\n			<div class="inline inlineGap whatsnew-tile-topic" *ngFor="let i of [0,1,2,3,4,5,6,7]">\n\n				<div class="avatarfortab">\n\n					<ion-avatar item-start>\n\n					<skeleton-item height="130px" width="133px" class="fortab"></skeleton-item>\n\n					</ion-avatar>\n\n				</div>\n\n			</div> \n\n		</ion-scroll>\n\n	</div>\n\n\n\n\n\n	<span class="backgroundForVideo">\n\n		<!-- <div class="" *ngIf="topVideo_data"> -->\n\n		<div class="diffDivtopicClass" *ngIf="network_type != \'none\' && topVideo_data && topVideo_data.length > 0">\n\n			<div class="div-forlabel">\n\n				<div class="div-left forlabel"><b>{{title_data[7].name}}</b></div>\n\n				<div class="div-right forlabel" tappable (click)="seeAllClick(\'TOP VIDEOS\', topVideo_data)">See all</div>\n\n			</div>\n\n			<div class="forboderbottom"></div>\n\n			<ion-scroll scrollX="true"  class="fromTop_forScroll">\n\n				<ion-list scroll="true">\n\n				<div class="inline inlineGapforVideo" *ngFor="let top_video of education_item" (click)="gotoDetailPage(topVideo_listindata, topVideotemplate, \'TOP VIDEOS\')" style="height:33vh;width:180px;">\n\n\n\n			      	<div class="mydivClass video-img-overlay">\n\n			      		<img src="{{top_video.iconUrl}}" alt="{{top_video.name}}" class="topVidoClass"/>\n\n						<!-- <img *ngIf="top_video.localIconUrl !=\'\' && top_video.localIconUrl != null" src="{{path}}{{top_video.localIconUrl}}" alt="{{top_video.name}}" class="topVidoClass"/> -->\n\n			      		<i class="icon-play subtopic-card-img-icon"></i>\n\n			      	</div>\n\n\n\n					<div class="topVideoName">\n\n						<p class="textClass">{{top_video.name.slice(0, 35) + (top_video.name.length > 35 ? "..." : "")}}</p>\n\n					</div>\n\n			    </div>\n\n			    </ion-list>\n\n			</ion-scroll>	\n\n		</div>\n\n\n\n		<div *ngIf="network_type != \'none\' && !topVideo_data && skeleton == true">\n\n			<ion-scroll>\n\n				<div class="inline inlineGap whatsnew-tile-topic" *ngFor="let i of [0,1,2,3,4,5,6,7]">\n\n					<div class="avatarfortab">\n\n						<ion-avatar item-start>\n\n						<skeleton-item height="130px" width="133px" class="fortab"></skeleton-item>\n\n						</ion-avatar>\n\n					</div>\n\n				</div> \n\n			</ion-scroll>\n\n		</div>\n\n\n\n		<!-- <div class="" *ngIf="expert_data"> -->\n\n		<div class="diffDivtopicClass" *ngIf="topVideo_DetailsTemplate && topVideo_DetailsTemplate.length>0">\n\n			<!-- <ion-label class="forlabel" style=""><b>Experts</b></ion-label>-->\n\n			<div class="div-forlabel">\n\n				<div class="div-left forlabel"><b>{{title_data[7].name}}</b></div>\n\n				<div class="div-right forlabel" tappable (click)="seeAllClick(\'TOP VIDEOS\', topVideo_DetailsTemplate)">See all</div>\n\n			</div>\n\n			<div class="forboderbottom"></div>\n\n			<ion-scroll scrollX="true" style="" class="fromTop_forScroll">\n\n				<div class="inline inlineGapforVideo" *ngFor="let expert of topVideo_DetailsTemplate" (click)="gotoDetailPage(expert, expert.template, \'TOP VIDEOS\')" style="">\n\n\n\n			      	<div class="mydivClass video-img-overlay">\n\n			      		<img *ngIf="expert.local_image_url == \'\' || expert.local_image_url == null" src="{{expert.image_url}}"  class="topVidoClass" /> \n\n			      		\n\n			      		<img *ngIf="expert.local_image_url != \'\' && expert.local_image_url != null" src="{{path}}{{expert.local_image_url}}" alt="" class="topVidoClass" />\n\n			      		<i class="icon-play subtopic-card-img-icon" style=""></i>\n\n			      	</div>\n\n\n\n					<div class="topVideoName">\n\n						<b style="" class="textClass">{{expert.name.slice(0, 35) + (expert.name.length > 35 ? "..." : "")}}</b>\n\n					</div>\n\n			    </div>\n\n			</ion-scroll>	\n\n		</div>\n\n\n\n		<div *ngIf="!topVideo_DetailsTemplate && skeleton == true">\n\n			<ion-scroll>\n\n				<div class="inline inlineGap whatsnew-tile-topic" *ngFor="let i of [0,1,2,3,4,5,6,7]">\n\n					<div style="" class="avatarfortab">\n\n						<ion-avatar item-start>\n\n						<skeleton-item height="130px" width="133px" class="fortab"></skeleton-item>\n\n						</ion-avatar>\n\n					</div>\n\n				</div> \n\n			</ion-scroll>\n\n		</div>\n\n\n\n		<!-- <div class="playlistDiffDivClass" *ngIf="playlist_data"> -->\n\n		<div class="diffDivtopicClass" *ngIf="playlist_data && playlist_data.length > 0" >	\n\n			<!-- <ion-label class="forlabel" style=""><b>Playlist</b></ion-label> -->\n\n			<div class="div-forlabel">\n\n				<div class="div-left forlabel"><!-- <b>Curated Lists</b> --><b>{{title_data[3].name}}</b></div>\n\n				<div class="div-right forlabel" tappable (click)="seeAllClick(\'Playlist\', playlist_data)">See all</div>\n\n			</div>\n\n			<div class="forboderbottom"></div>	\n\n			<ion-scroll scrollX="true" style="margin-left: 7px;" class="fromTop_forScroll">\n\n				<div class="inline inlineGapforVideo" *ngFor="let playlist of playlist_data" (click)="gotoDetailPage(playlist, playlist.template, \'Our Picks\')" style="width:170px;">\n\n					<div class="expertimg video-img-overlay">\n\n\n\n						<img *ngIf="playlist.local_image_url == \'\' || playlist.local_image_url == null" src="{{playlist.image_url}}"  class="expertPlaylistClass"/>\n\n						<img *ngIf="playlist.local_image_url !=\'\' && playlist.local_image_url != null" [src]="playlist.base64Image"  class="expertPlaylistClass"/>\n\n						<i class="icon-play ourPicks-img-icon" style=""></i>\n\n					</div>		\n\n\n\n					<!-- <div class="expertPlaylistName">\n\n						{{playlist.name}}\n\n					</div> -->\n\n\n\n					<div class="expertPlaylistName">\n\n						<b style="" class="textClass">{{playlist.name.slice(0, 35) + (playlist.name.length > 35 ? "..." : "")}}</b>\n\n					</div>\n\n				</div>\n\n			</ion-scroll>	\n\n		</div>\n\n\n\n		<div *ngIf="!playlist_data">\n\n			<ion-scroll>\n\n				<div class="inline inlineGap whatsnew-tile-topic" *ngFor="let i of [0,1,2,3,4,5,6,7]">\n\n					<div style="" class="avatarfortab">\n\n						<ion-avatar item-start>\n\n						<skeleton-item height="130px" width="153px;" class="fortab"></skeleton-item>\n\n						</ion-avatar>\n\n					</div>\n\n					<div style="position: relative; bottom: 0; width: 100%;" class="divskelfortab expertNameskeleton">\n\n						<skeleton-item height="25px" width="95%" class="skelfortab"></skeleton-item>\n\n					</div>\n\n				</div> \n\n			</ion-scroll>\n\n		</div>\n\n	</span>\n\n\n\n	<!--- forum start---->\n\n\n\n	<!-- <div class="slides-container-forum " *ngIf="network_type != \'none\' && forum_data && forum_data.length > 0"> -->\n\n	<!-- <div class="diffDivtopicClass" *ngIf="network_type != \'none\' && forum_data && forum_data.length > 0">\n\n		<div class="div-forlabel">\n\n			<div class="div-left forlabel"><b>{{title_data[4].name}}</b></div>\n\n			<div class="div-right forlabel" tappable (click)="seeAllClick( \'Forums\', forum_data)">See all</div>\n\n		</div>\n\n		<div class="forboderbottom"></div>	\n\n		\n\n		<ion-scroll scrollX="true" class="fromTop_forScroll">\n\n		      <div class="inline inlineGapFourm slideForumClass parentDiv" *ngFor="let forum of forum_data" (click)="onPromptForQna(forum ,\'From WhatsNew\')"  style="overflow-x: auto;">\n\n				 <div class="aligner"> <b> {{ forum.title | slice:0:280 }} </b> </div>\n\n			  </div>\n\n		</ion-scroll>\n\n	</div> -->\n\n\n\n	<!-- <div *ngIf="!forum_data && network_type != \'none\'">\n\n		<ion-scroll>\n\n			<div class="inline inlineGapTopic" *ngFor="let i of [0,1,2,3,4,5,6,7,8]">\n\n				<div style="padding-top: 3%;" class="avatarfortab">\n\n					<ion-avatar item-start>\n\n					<skeleton-item height="30px" width="100%" class="fortab"></skeleton-item>\n\n					</ion-avatar>\n\n				</div>\n\n				<div style="position: absolute; bottom: 0; width: 100%;" class="divskelfortab">\n\n					<skeleton-item height="80px" width="100%" class="skelfortab"></skeleton-item>\n\n				</div>\n\n			</div>\n\n		</ion-scroll>\n\n	</div> -->\n\n	<!--- forum end---->\n\n	<!--- sponser slide start--->\n\n\n\n	<div class="sponser-slideshow  sponserClassTab" no-margin *ngIf="sponserSlides && sponserSlides.length > 0">\n\n\n\n		<div class="div-forlabel">\n\n			<div class="div-left forlabel intractlabel" style=""><b>{{title_data[8].name}}</b></div>\n\n		</div>\n\n\n\n		<div class="intractforboderbottom"></div>\n\n\n\n		<ion-slides loop="false" [pager]="sponserSlides.length > 1">\n\n			<ion-slide *ngFor="let slide of sponserSlides; let i = index;" (tap)="onBannerClick(slide, \'Sponser Banner\')">\n\n				<figure no-margin>\n\n					<img *ngIf="slide.local_image_url == \'\' || slide.local_image_url == null" [src]="slide.image_url" alt="">\n\n					<img *ngIf="slide.local_image_url != \'\' && slide.local_image_url != null" [src]="slide.base64Image" alt="">						\n\n				</figure>\n\n			</ion-slide>\n\n		</ion-slides>\n\n	</div>\n\n\n\n	<!--- sponser slide end--->\n\n\n\n\n\n<!-- 	<div  *ngIf="network_type != \'none\' && calculator_data && calculator_data.length > 0" [ngClass]="{\'diffDiv_topic_Class\': topVideotemplate == \'expert_playlist\', \'diffDivIntractClass\': topVideotemplate != \'expert_playlist\' }" style="color:#FFF; background-color: #0A434E;height: 200px;" class="intractClassTab"> -->\n\n\n\n	<div  *ngIf="network_type != \'none\' && calculator_data && calculator_data.length > 0"  style="color:#FFF; background-color: #0A434E;" class="diffDiv_topic_Class intractClassTab">\n\n\n\n		<div class="div-forlabel">\n\n			<div class="div-left forlabel intractlabel" style="color:#FFF;"><b>{{title_data[2].name}}</b></div>\n\n		</div>\n\n		<div class="intractforboderbottom"></div>\n\n\n\n			<ion-row style="text-align: center;">\n\n				<ion-col tappable (click)="knowMoreClick(\'Calculators\')">\n\n						<i id="" class="icon-icon-calculator intractIconClass" style="margin:20px 0px;" ></i>\n\n						<div style="font-size:1.2em;"><b>Calculator</b></div>\n\n				</ion-col>\n\n				<ion-col tappable (click)="knowMoreClick(\'Quiz\')">\n\n					<i id="" class="icon-icon-quiz intractIconClass" style="margin:20px 0px;" ></i>\n\n					<div style="font-size:1.2em;"><b>Quiz</b></div>\n\n				</ion-col>\n\n				<ion-col tappable (click)="knowMoreClick(\'Survey\')">\n\n					<i id="" class="icon-icon-survey intractIconClass" style="margin:20px 0px;" ></i>\n\n					<div style="font-size:1.2em;"><b>Survey</b></div>\n\n				</ion-col>\n\n				<!-- <ion-col tappable (click)="knowMoreClick(\'Polls\')">\n\n					<i id="" class="icon-icon-poll intractIconClass" style="margin:20px 0px;" ></i>\n\n					<div style="font-size:1.2em;"><b>Poll</b></div>\n\n				</ion-col> -->\n\n				<ion-col tappable (click)="knowMoreClick(\'Drawn\')">\n\n					<i id="" class="icon-icon-survey intractIconClass" style="margin:20px 0px;" ></i>\n\n					<div style="font-size:1.2em;"><b>Draw on image</b></div>\n\n				</ion-col>\n\n			</ion-row>\n\n	</div>\n\n\n\n\n\n	<div *ngIf="!calculator_data && network_type != \'none\'">\n\n		<ion-scroll>\n\n			<div class="inline inlineGapTopic" *ngFor="let i of [0,1,2,3]">\n\n				<div style="padding-top: 3%;" class="avatarfortab">\n\n					<ion-avatar item-start>\n\n					<skeleton-item height="30px" width="100%" class="fortab"></skeleton-item>\n\n					</ion-avatar>\n\n				</div>\n\n				<div style="position: absolute; bottom: 0; width: 100%;" class="divskelfortab">\n\n					<skeleton-item height="80px" width="100%" class="skelfortab"></skeleton-item>\n\n				</div>\n\n			</div>\n\n		</ion-scroll>\n\n	</div>\n\n\n\n	<!-- <div class="playlistDiffDivClass" *ngIf="playlist_data"> -->\n\n	<!--- 	\n\n	<div class="playlistDiffDivClass" *ngIf="playlist_data && playlist_data.length > 0">	\n\n\n\n		<div class="div-forlabel">\n\n			<div class="div-left forlabel"><b>{{title_data[3].name}}</b></div>\n\n			<div class="div-right forlabel" tappable (click)="seeAllClick(\'Playlist\', playlist_data)"><b>See all</b></div>\n\n		</div>	\n\n		<ion-scroll scrollX="true" style="">\n\n			<div class="inline inlineGapPlaylist" *ngFor="let playlist of playlist_data" (click)="gotoDetailPage(playlist, playlist.template, \'Our Picks\')">\n\n				<div class="expertimg">\n\n\n\n					<img *ngIf="playlist.local_image_url == \'\' || playlist.local_image_url == null" src="{{playlist.image_url}}"  class="expertPlaylistClass"/>\n\n					<img *ngIf="playlist.local_image_url !=\'\' && playlist.local_image_url != null" src="{{path}}{{playlist.local_image_url}}"  class="expertPlaylistClass"/>\n\n				</div>		\n\n\n\n				<div class="expertPlaylistName">\n\n					<b style="">{{playlist.name}}</b>\n\n				</div>\n\n			</div>\n\n		</ion-scroll>	\n\n	</div>\n\n\n\n	<div *ngIf="!playlist_data">\n\n		<ion-scroll>\n\n			<div class="inline inlineGap whatsnew-tile-topic" *ngFor="let i of [0,1,2,3,4,5,6,7]">\n\n				<div style="" class="avatarfortab">\n\n					<ion-avatar item-start>\n\n					<skeleton-item height="130px" width="153px;" class="fortab"></skeleton-item>\n\n					</ion-avatar>\n\n				</div>\n\n				<div style="position: relative; bottom: 0; width: 100%;" class="divskelfortab expertNameskeleton">\n\n					<skeleton-item height="25px" width="95%" class="skelfortab"></skeleton-item>\n\n				</div>\n\n			</div> \n\n		</ion-scroll>\n\n	</div>\n\n	--->\n\n\n\n	<div style="padding: 35px 0px 35px 0px;">\n\n		<ion-row style="text-align: center;">\n\n			<ion-col tappable (click)="intractIcon(\'Facebook\')">\n\n				<img class="social-container" src="assets/social-icon-facebook.jpg" alt="facebook">\n\n			</ion-col>\n\n			<ion-col tappable (click)="intractIcon(\'Twitter\')">\n\n				<img class="social-container" src="assets/social-icon-twitter.jpg" alt="twitter">\n\n			</ion-col>\n\n			<ion-col tappable (click)="intractIcon(\'Instagram\')">\n\n				<img class="social-container" src="assets/social-icon-instagram.jpg" alt="instagram">\n\n			</ion-col>\n\n			<ion-col tappable (click)="intractIcon(\'Linkedin\')">\n\n				<img class="social-container" src="assets/social-icon-linkedin.jpg" alt="linkedin">\n\n			</ion-col>\n\n			<ion-col tappable (click)="intractIcon(\'Youtube\')">\n\n				<img class="social-container" src="assets/social-icon-youtube.jpg" alt="youtube">\n\n			</ion-col>\n\n\n\n		</ion-row>\n\n	</div>\n\n	<!-- <div class="diffDivtopicClass onlyForBlog" *ngIf="network_type != \'none\' && blog_post && blog_post.length > 0">	\n\n		<div class="div-forlabel">\n\n			<div class="div-left forlabel"><b>{{title_data[5].name}}</b></div>\n\n			<div class="div-right forlabel" tappable (click)="seeAllClick(\'Blogs\', blog_post)">See all</div>\n\n		</div>\n\n		<div class="forboderbottom"></div>				\n\n\n\n		<ion-scroll scrollX="true" style="height: 310px !important;" class="fromTop_forScroll">\n\n			<div class="inline inlineGapBlog" *ngFor="let blog of blog_post" (click)="gotoDetailPage(blog, \'wordpress_blog\', \'Health Blogs\')">\n\n				<div class="expertimg">\n\n					<img src="{{blog.blog_image}}" class="expertClassBlog" /> \n\n				</div>\n\n			</div>			\n\n		</ion-scroll>			\n\n	</div> -->\n\n	<!-- <div *ngIf="!blog_post && network_type != \'none\'">\n\n		<ion-scroll style="height: 320px !important;">\n\n			<div class="whatsnew-tile-banner gapforipad" style="">\n\n				<div style="" class="avatarfortab">\n\n					<ion-avatar item-start>\n\n					<skeleton-item height="265px" width="100%" class="fortab"></skeleton-item>\n\n					</ion-avatar>\n\n				</div>\n\n			</div> \n\n		</ion-scroll>\n\n	</div> -->\n\n\n\n	<!-- <div class="slides-container" *ngIf="network_type != \'none\' && tweets_data"> -->\n\n	<!-- \n\n	<div class="slides-container" *ngIf="network_type != \'none\' && tweets_data && tweets_data.length > 0">	\n\n		<div class="div-forlabel">\n\n			<div class="div-left forlabel"> <b>{{title_data[6].name}}</b></div>\n\n			<div class="div-right forlabel" tappable (click)="seeAllClick( \'Tweets\',tweets_data)"><b>See all</b></div>\n\n		</div>\n\n		<div class="forboderbottom"></div>	\n\n		<ion-slides #slides class="twitterText" (ionSlideDidChange)="slideChangedForTwiter()">\n\n		    <ion-slide class="divcenter1" (tap)="gotoDetailPage(twitter, \'twitter_msg\', \'Tweets\')" *ngFor="let twitter of tweets_data">\n\n		    	<span float-left class="forTwiterIcon" style="color: #00acee;"><img src="https://img.icons8.com/android/24/000000/twitter.png" style="height: 30px; width: 30px; ">\n\n		    		<b class="forDate">@CardioVisual {{ twitter.createdAt | date: \'MMM d, yyyy\' }} </b>\n\n		    	</span>\n\n			    <span float-left class="text-justify-property">\n\n				   	<h3 style="">\n\n				   	 {{ twitter.tweet_text | slice:0:280 }}\n\n				   	</h3>\n\n				</span>\n\n		    </ion-slide>\n\n		</ion-slides>\n\n\n\n		<div float-left color="" class="swiper-button-prev swiper-button-black backBtn" (click)="prevSlide(\'slides\')" [hidden]="isFirstArrowForTweet"></div>\n\n		<div color="" float-right class="swiper-button-next swiper-button-black nextBtn" (click)="nextSlide(\'slides\')" [hidden]="isLastArrowForTweet"></div>\n\n	</div>\n\n\n\n	<div *ngIf="!tweets_data && network_type != \'none\'">\n\n		<div class="whatsnew-tile-banner" style="padding-top:20%;">\n\n			<div style="" class="avatarfortab">\n\n				<ion-avatar item-start>\n\n				<skeleton-item height="155px" width="100%" class="fortab"></skeleton-item>\n\n				</ion-avatar>\n\n			</div>\n\n		</div> \n\n	</div>\n\n	-->\n\n\n\n\n\n	</ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer clean-footer style="background-color: #F0F0F0 !important;" [activeFootermenu]="false" [iswhatsNew]="true"></ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\whats-new\whats-new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], WhatsNewPage);
    return WhatsNewPage;
}());

//# sourceMappingURL=whats-new.js.map

/***/ })

});
//# sourceMappingURL=3.js.map