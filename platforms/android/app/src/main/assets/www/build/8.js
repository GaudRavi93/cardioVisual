webpackJsonp([8,36,38],{

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

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsNewSeeallPageModule", function() { return WhatsNewSeeallPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_module__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__whats_new_seeall__ = __webpack_require__(841);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WhatsNewSeeallPageModule = /** @class */ (function () {
    function WhatsNewSeeallPageModule() {
    }
    WhatsNewSeeallPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__whats_new_seeall__["a" /* WhatsNewSeeallPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__whats_new_seeall__["a" /* WhatsNewSeeallPage */]),
                __WEBPACK_IMPORTED_MODULE_0__header_header_module__["HeaderPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__footer_footer_module__["FooterPageModule"]
            ],
        })
    ], WhatsNewSeeallPageModule);
    return WhatsNewSeeallPageModule;
}());

//# sourceMappingURL=whats-new-seeall.module.js.map

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
            selector: '[clean-footer]',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\footer\footer.html"*/'<ion-toolbar class="footercolor" transparent>\n	<ion-grid no-padding > \n	    <ion-row style="width:100%;color:#474747;min-height:20px;text-align: center;">\n\n			<ion-col *ngIf="activeFootermenu">\n				<div><i class="icon-footer-icon-home selected-fav-icon new-font-icons" style="font-size: 2.4em;color:#E8604F;margin-top:0.2em;"></i></div>\n				<div style="" class="fntSize"><b>Home</b></div>\n			</ion-col>\n\n			<ion-col tappable (click)="gotoHome()" *ngIf="!activeFootermenu">\n				 <div><i class="icon-footer-icon-home selected-fav-icon new-font-icons" style="font-size: 2.4em;margin-top:0.2em;"></i></div>\n				 <div style="" class="fntSize"><b>Home</b></div>\n			</ion-col>\n\n			<!-- <ion-col tappable (click)="onPromptForProffesional()">\n				<div><i class="icon-cardio-discuss selected-fav-icon new-font-icons" style="font-size: 2.4em;margin-top:0.2em;"></i></div>\n				<div style="" class="fntSize"><b>Discuss</b></div>\n			</ion-col> -->\n\n			<ion-col *ngIf="iswhatsNew">\n				<div><i class="icon-footer-icon-updates selected-fav-icon new-font-icons" style="font-size: 2.6em;color:#E8604F;margin-top:0.1em;"></i></div>\n				<div style="" class="fntSize"><b>Featured</b></div>\n			</ion-col>\n\n			<ion-col tappable (click)="gotoWhatsnew()" *ngIf="!iswhatsNew">\n				<div><i class="icon-footer-icon-updates selected-fav-icon new-font-icons" style="font-size: 2.6em;margin-top:0.1em;"></i></div>\n				<div style="" class="fntSize"><b>Featured</b></div>\n			</ion-col>\n\n			<ion-col *ngIf="ismyChannel">\n				<div style="padding-right:15px;"><i class="icon-channelcon selected-fav-icon new-font-icons" style="font-size: 1.5em;color:#E8604F;margin-top:0.3em;margin-bottom:0.7em;"></i></div>\n				<div style="" class="fntSize"><b>Channels</b></div>\n			</ion-col>\n\n			<ion-col tappable (click)="comingsoonforchannels()" *ngIf="!ismyChannel">\n				<div style="padding-right:15px;"><i class="icon-channelcon selected-fav-icon new-font-icons" style="font-size: 1.5em;margin-top:0.3em;margin-bottom:0.7em;"></i></div>\n				<div style="" class="fntSize"><b>Channels</b></div>\n			</ion-col>\n\n			<ion-col *ngIf="ismyCv">\n				<div><i class="icon-footer-icon-mycv selected-fav-icon new-font-icons" style="font-size: 2.6em;color:#E8604F;margin-top:0.1em;"></i></div>\n				<div style="" class="fntSize"><b>My CV</b></div>\n			</ion-col>\n\n			<ion-col tappable (click)="gotoMyCV()" *ngIf="!ismyCv">\n				<div><i class="icon-footer-icon-mycv selected-fav-icon new-font-icons" style="font-size: 2.6em;margin-top:0.1em;"></i></div>\n				<div style="" class="fntSize"><b>My CV</b></div>\n			</ion-col>\n\n	    </ion-row>\n	</ion-grid> \n</ion-toolbar>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\footer\footer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], FooterPage);
    return FooterPage;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsNewSeeallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_toast_service__ = __webpack_require__(108);
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
 * Generated class for the WhatsNewSeeallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatsNewSeeallPage = /** @class */ (function () {
    function WhatsNewSeeallPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.email = '';
        this.events = {};
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__services_loading_service__["a" /* LoadingService */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_clevertap__["a" /* CleverTap */]();
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__services_HttpService__["a" /* HttpService */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__services_toast_service__["a" /* ToastService */]);
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        var localPath = this.file_object.dataDirectory;
        this.path = localPath.replace(/file:\/\//g, "");
        this.listintType = this.nav_params_object.get('params');
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        this.title_data = this.nav_params_object.get('title_data');
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            setTimeout(function () {
                _this.network_check_object.getPageAction('WhatsNewSeeallPage', 'start', '', localStorage.getItem('cv5usrType'));
            }, 1000);
        }
        this.knowMoreData = this.nav_params_object.get('ListingData');
        //alert('listintType---->'+this.listintType);
        // switch (this.listintType) {
        // 	case "Calculators":
        // 		this.title = this.title_data;
        // 		this.defaultimg = "icon-icon-calculator-black";
        // 		break;
        // 	case "Quiz":
        // 		this.title = this.title_data;
        // 		this.defaultimg = "assets/idea_4177619.svg";
        // 		break;
        // 	case "Survey":
        // 		this.title = this.title_data;
        // 		this.defaultimg = "assets/surveyBlack.svg";
        // 		break;
        // 	case "Polls":
        // 		this.title = this.title_data;
        // 		this.defaultimg = 'assets/pollsBlack.svg';
        // 		break;
        // 	default:
        // 		break;
        // }
        console.log(' listintType  --->' + JSON.stringify(this.listintType));
        console.log(' ListingData  --->' + JSON.stringify(this.nav_params_object.get('ListingData')));
        var that = this;
        this.events = {
            'onItemClick': function (item) {
                //alert('item-->'+JSON.stringify(item));
                //alert('item-->'+JSON.stringify(item.name));
                //console.log('item-->'+JSON.stringify(item));
                that.forClevertapRecords(item, that.listintType, that.listintType);
                var values = JSON.parse(item.list_values);
                var ref = that.in_app_browser_object.create(values.url, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                ref.on('loadstop').subscribe(function (event) {
                    that.screen_orientation_object.unlock();
                });
                ref.on('exit').subscribe(function (event) {
                    that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                });
            },
            'onShare': function (item) {
                event.stopPropagation();
                //that.video_share_provider_object.shareSingleVideo(item);
            },
            'onFavorite': function (item) {
                event.stopPropagation();
                //that.markasFavorite(item)
            },
        };
        this.events = {
            'onItemClick': function (item) {
                that.forClevertapRecords(item, that.listintType, that.listintType);
                var values = JSON.parse(item.list_values);
                var ref = that.in_app_browser_object.create(values.url, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                ref.on('loadstop').subscribe(function (event) {
                    that.screen_orientation_object.unlock();
                });
                ref.on('exit').subscribe(function (event) {
                    that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                });
            },
            'onDrawnItemClick': function (item) {
                //alert('----item----->'+JSON.stringify(item));
                console.log('----item----->' + JSON.stringify(item));
                //event.stopPropagation();
                that.navCtrl.push('DrawonPage', { drawnurl: item.url, drawOnImgTitle: item.title, drawnCopyright: item.copyrightInfo, drawnSubtopicType: item.subTopicType });
                //that.video_share_provider_object.shareSingleVideo(item);
            },
            'onShare': function (item) {
                event.stopPropagation();
                that.video_share_provider_object.shareSingleVideo(item);
            },
            'onFavorite': function (item) {
                event.stopPropagation();
                that.markasFavorite(item);
            },
        };
    }
    WhatsNewSeeallPage.prototype.ionViewDidLoad = function () {
        switch (this.listintType) {
            case "Topics":
                this.title = this.title_data[0].name;
                this.displayData = this.nav_params_object.get('ListingData');
                break;
            case "Experts":
                this.title = this.title_data[1].name;
                //alert(this.title);
                this.displayData1 = this.nav_params_object.get('ListingData');
                break;
            case "Tweets":
                this.title = this.title_data[6].name;
                this.displayData2 = this.nav_params_object.get('ListingData');
                break;
            case "Blogs":
                this.title = this.title_data[5].name;
                this.displayData3 = this.nav_params_object.get('ListingData');
                break;
            case "Playlist":
                this.title = this.title_data[3].name;
                this.displayData4 = this.nav_params_object.get('ListingData');
                break;
            case "Forums":
                this.title = this.title_data[4].name;
                this.displayData5 = this.nav_params_object.get('ListingData');
                break;
            // case "Calculators":
            // 	this.title = this.title_data[2].name;
            // 	this.displayData6 = this.nav_params_object.get('ListingData');
            // break;
            case "TOP VIDEOS":
                this.title = this.title_data[7].name;
                this.displayData7 = this.nav_params_object.get('ListingData');
                console.log('this.displayData7: ', this.displayData7);
                //alert('type--->'+JSON.stringify(this.displayData7[0].type));
                //if (this.displayData7[0].template == 'expert_playlist' && this.displayData7[0].type == 'featured_video_new') {
                if (this.displayData7[0].template == 'expert_playlist') {
                    //alert('this.displayData7-->'+JSON.stringify(this.displayData7));
                    this.skeleton = true;
                    var custom_data_1 = [];
                    this.topVideotemplate = this.displayData7[0].template;
                    this.topVideo_listindata = this.displayData7[0];
                    var listValues = JSON.parse(this.displayData7[0].list_values);
                    var that = this;
                    __WEBPACK_IMPORTED_MODULE_3_underscore_underscore__["each"](listValues, function (value, key) {
                        var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                        that.database_provider_object.fetchAllData('new_sub_topics', json_query).then(function (topic_data) {
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
                    this.skeleton = false;
                }
                break;
            case "Calculators":
                this.title = this.title_data;
                this.defaultimg = "icon-icon-calculator";
                break;
            case "Quiz":
                this.title = this.title_data;
                this.defaultimg = "assets/idea_4177619.svg";
                break;
            case "Survey":
                this.title = this.title_data;
                this.defaultimg = "assets/surveyBlack.svg";
                break;
            case "Polls":
                this.title = this.title_data;
                this.defaultimg = 'assets/pollsBlack.svg';
                break;
            case "Drawn":
                this.title = this.title_data;
                this.displayData8 = this.nav_params_object.get('ListingData');
                break;
            default:
                // code...
                break;
        }
        console.log('ionViewDidLoad WhatsNewSeeallPage');
    };
    WhatsNewSeeallPage.prototype.ionViewWillLeave = function () {
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            this.network_check_object.getPageAction('WhatsNewSeeallPage', 'end', '', localStorage.getItem('cv5usrType'));
        }
    };
    WhatsNewSeeallPage.prototype.getArraysIntersection = function (a1, a2) {
        return a1.filter(function (n) {
            return a2.indexOf(n) !== -1;
        });
    };
    WhatsNewSeeallPage.prototype.subtopicQueryProvider = function (tableName, subTopicQuery, list_json) {
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
    WhatsNewSeeallPage.prototype.subtopicDetailQueryProvider = function (subtopicTable, subTopicDetailQuery) {
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
    WhatsNewSeeallPage.prototype.goToDetails = function (item, type, list) {
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
    WhatsNewSeeallPage.prototype.forClevertapRecords = function (data, type, list) {
        switch (type) {
            case "wordpress_blog":
                if (list == 'Calculator') {
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
            case "Calculators":
            case "Quiz":
            case "Survey":
            case "Polls ":
                var ContentFor = "Know More Interact";
                var ClickedContent = "'" + data.name + "'";
                break;
            default:
                var ContentFor = "'" + data.source + "'";
                var ClickedContent = "'" + data.name + "'";
                break;
        }
        var params = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "modelNo": localStorage.getItem('modelNo'),
            "deviceversion": localStorage.getItem('getDeviceversion'),
            "userRoleId": localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "userEmail": localStorage.getItem('cv5userEmail'),
            "specialities": localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
            "location": localStorage.getItem('location'),
            "whatsNewContentFor": ContentFor,
            "listContentType": list,
            "nameOfClickedContent": ClickedContent
        };
        // Set clevertap Custom AppLaunch event.
        //alert('params-->'+JSON.stringify(params));
        this.clevertap_object.recordEventWithNameAndProps("clickedOnWhatsNewSeeAll", params);
    };
    /*	qnaSite(forum){
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
    
                            if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional' ){
    
    
                                this.email = data.email;
                                this.username = data.username;
                                if(this.email =='' || this.username == '' || this.username == null){
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
                                    this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'user_type':'Patient'});
    
                                }
    
    
                            }else{
                                this.email = data.email;
                                this.username = data.username;
                                if(this.email =='' || this.username == '' || this.username == null){
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
                                    this.redirectToForumDashboard({'email': this.email, 'username': this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title':forum.title, 'user_type':'Doctor'});
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
                "tags" : "From WhatsNew SeeAll",
                "nameOfClickedContent": object.forum_title,
                "location":localStorage.getItem('location'),
                "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                "specialities":localStorage.getItem('usrSpecialities'),
                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
            };
    
            this.clevertap_object.recordEventWithNameAndProps("openedForum",params);
            //var text_arr =[object.username, object.email, object.first_time, 'd/'+object.forum_id+'-'+object.forum_slug];
            var text_arr =[object.username, object.email, object.first_time, object.forum_slug];
            var text = JSON.stringify(text_arr);
    
            var encode_string = window.btoa(text);
    
            if(object.user_type == 'Patient'){
                var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
    
            }else{
                var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
            }
        }*/
    WhatsNewSeeallPage.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    WhatsNewSeeallPage.prototype.markasFavorite = function (group) {
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
                        _this.database_provider_object.setFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Added to Favourites.");
                    });
                }
                else {
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        _this.database_provider_object.setFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    WhatsNewSeeallPage.prototype.onPromptForQna = function (forum) {
        this.video_share_provider_object.discussPromptForProffesional(forum, 'From WhatsNew SeeAll', 'From WhatsNew');
    };
    WhatsNewSeeallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-whats-new-seeall',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\whats-new-seeall\whats-new-seeall.html"*/'<!--\n  Generated template for the WhatsNewSeeallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>whats-new-seeall</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-header clean-header  class="headerColor" [isTabs]="true" [hideMenu]="true"></ion-header>\n\n<ion-content no-padding style="background-color: #ffffff;" >\n\n	<ion-item no-padding style="" class="sticky" [ngClass]="{\'forOther\':listintType !== \'Tweets\',\'forTweets\':listintType == \'Tweets\'}">\n          <div class="item-divider" style="">\n            {{title}}\n          </div>\n    </ion-item>\n    \n<!--     <ion-row padding *ngIf="title == \'Topics\'">\n		<div class="inline inlineGapTopic"  (tap)="goToDetails(topic, topic.template)"  *ngFor="let topic of displayData">\n			<div Class="topicNameClass" style="">{{topic.name}}</div>\n		</div>\n	</ion-row> -->\n\n	<ion-row padding *ngIf="listintType == \'Topics\'">\n		<div class="inline  flex-container parentDiv"  (tap)="goToDetails(topic, topic.template, \'Featured Topics\')"  *ngFor="let topic of displayData">\n			<div Class="aligner" style="">{{topic.name}}</div>\n			<!-- <div class="" [ngClass]="{\'textBreak\': topic.name.length <= 11, \'longtextBreak\': topic.name.length > 10 }"> <b> {{topic.name}}</b> </div> -->\n		</div>\n	</ion-row>\n\n\n	<!-- <ion-row padding *ngIf="title == \'Experts\'">\n		<div class="inline inlineGap" (tap)="goToDetails(expert, expert.template)" *ngFor="let expert of displayData1">\n	      	<div class="img-overlaynew">\n	      		<img src="{{expert.image}}"  class="expertClass" /> \n	      	</div>		\n			<div class="expertName">\n				<b style="">{{expert.name}}</b>\n			</div>\n	    </div>\n	</ion-row> -->\n\n	<ion-row padding *ngIf="listintType == \'Experts\'">\n		<div class="inline inlineGap seallExpertPicks" (tap)="goToDetails(expert, expert.template, \'Experts\')" *ngFor="let expert of displayData1">\n			<div class="img-overlaynew">\n				<img src="{{expert.image_url}}"  class="topVidoClass" />\n				<!-- <img *ngIf="expert.local_image_url == \'\' || expert.local_image_url == null" src="{{expert.image_url}}"  class="expertClass" />  -->\n			<!--<img *ngIf="expert.local_image_url == \'\' && expert.local_image_url == null" src="{{expert.image_url}}"  class="topVidoClass" />-->\n			<!-- <img *ngIf="expert.local_image_url != \'\' && expert.local_image_url != null" src="{{path}}{{expert.local_image_url}}"  class="expertClass" /> -->\n			<!--<img *ngIf="expert.local_image_url != \'\' && expert.local_image_url != null" src="{{path}}{{expert.local_image_url}}"  class="topVidoClass" />-->\n			</div>	\n		<div class="expertName">\n		<b style="">{{expert.name}}</b>\n		</div>\n		</div>\n	</ion-row>\n\n	<!-- <ion-row padding *ngIf="title == \'Curated List\'">\n		<div class="inline inlineGap" (tap)="goToDetails(playlist, playlist.template)" *ngFor="let playlist of displayData4">\n			<div class="img-overlaynew">\n				<img src="{{playlist.image}}"  class="playlistClass" /> \n			</div>	\n			<div class="curatedName">\n				<b style="">{{playlist.name}}</b>\n			</div>\n		</div>\n	</ion-row> -->\n	\n	<ion-row padding *ngIf="listintType == \'TOP VIDEOS\' &&  skeleton == true">\n		<div class="inline inlineGap seallExpertPicks" (tap)="goToDetails(topVideo_listindata, topVideotemplate, \'TOP VIDEOS\')" *ngFor="let top_video of education_item">\n			<div class="img-overlaynew">\n				<img src="{{top_video.iconUrl}}" alt="{{top_video.name}}" style="width:176px;height:99px;" class="topVidoClassRact"/>\n				<i class="icon-play subtopic-card-img-icon" style=""></i>\n			</div>	\n		<div class="topVideoName">\n			<b style="">{{top_video.name}}</b>\n		</div>\n		</div>\n	</ion-row>\n\n	<ion-row padding *ngIf="listintType == \'TOP VIDEOS\' &&  skeleton == false">\n		<div class="inline inlineGap seallExpertPicks" (tap)="goToDetails(expert, expert.template, \'Experts\')" *ngFor="let expert of displayData7">\n			<div class="img-overlaynew">\n				<img *ngIf="expert.local_image_url == \'\' || expert.local_image_url == null" src="{{expert.image_url}}"  style="" class="topVidoClassRact"/> \n				<img *ngIf="expert.local_image_url != \'\' && expert.local_image_url != null" src="{{path}}{{expert.local_image_url}}"  style="" class="topVidoClassRact"/>\n				<i class="icon-play subtopic-card-img-icon" style=""></i>\n			</div>	\n		<div class="topVideoName">\n		<b style="">{{expert.name}}</b>\n		</div>\n		</div>\n	</ion-row>\n\n\n	<ion-row padding *ngIf="listintType == \'Playlist\'">\n		<div class="inline inlineGap seallExpertPicks" (tap)="goToDetails(playlist, playlist.template, \'Our Picks\')" *ngFor="let playlist of displayData4">\n			<div class="img-overlaynew">\n				<img src="{{playlist.image_url}}"  class="playlistClass" style="width:176px;height:99px;"/>\n				<!--<img *ngIf="playlist.local_image_url == \'\' || playlist.local_image_url == null" src="{{playlist.image_url}}"  class="playlistClass" style="width:176px;height:99px;"/>-->\n				<!--<img *ngIf="playlist.local_image_url !=\'\' && playlist.local_image_url != null" src="{{path}}{{playlist.local_image_url}}"  class="playlistClass" style="width:176px;height:99px;"/>-->\n				<i class="icon-play subtopic-card-img-icon" style=""></i>\n			</div>	\n			<div class="topVideoName">\n				<b style="">{{playlist.name}}</b>\n			</div>\n		</div>\n	</ion-row>\n\n\n\n	<ion-row padding *ngIf="listintType == \'Blogs\'">\n		<div class="inline inlineGapBlog" *ngFor="let blog of displayData3" (tap)="goToDetails(blog, \'blog\', \'Health Blogs\')" >\n			<div class="expertimg">\n				<img src="{{blog.blog_image}}"  class="expertClassBlog" /> \n			</div>	\n		</div>\n	</ion-row>\n\n\n	<ion-row padding *ngIf="listintType == \'Tweets\'">\n		<div class = "card" style="border-radius: 10px;" *ngFor="let twiterr of displayData2" (tap)="goToDetails(twiterr, \'twitter_msg\', \'Tweets\')">\n			<div class = "item">\n				<span float-left class="forTwiterIcon" style="color: #00acee;"><img src="https://img.icons8.com/android/24/000000/twitter.png" style="height: 30px; width: 30px; "><b class="forDate">@CardioVisual {{ twiterr.createdAt | date: \'MMM d, yyyy\' }} </b></span>\n			</div><br />	  \n			<div float-left class="cardContent"><span><b>@</b></span>{{ twiterr.tweet_text | slice:0:280 }}\n			</div>\n		</div>	\n	</ion-row>\n\n\n\n\n	<ion-row padding *ngIf="listintType == \'Forums\'">\n\n		<div class="card parentDiv" style="background: radial-gradient(circle, #f76c57 11%, #d9442c 64%);\n		border: 1px solid #C0C0C0; color:#FFF;max-height:150px;height:150px;display: table;" *ngFor="let forum of displayData5" (tap)="onPromptForQna(forum)">\n			<div class="aligner"> <b> {{ forum.title | slice:0:280 }} </b> </div>\n		</div>	\n	</ion-row>\n\n	<!--<ion-row padding *ngIf="listintType == \'Calculators\'">\n		<div class="inline  flex-container"  (tap)="goToDetails(topic, topic.template, \'Calculator\')"  *ngFor="let topic of displayData6">\n		<div class="" [ngClass]="{\'textBreak\': topic.name.length <= 11, \'longtextBreak\': topic.name.length > 10 }"> <b> {{topic.name}}</b> </div>\n		</div>\n	</ion-row>-->\n\n	<ion-list *ngIf="listintType == \'Calculators\' || listintType == \'Quiz\' || listintType == \'Survey\' || listintType == \'Polls\'"  no-padding class="knowMoreList">\n		<div *ngIf="knowMoreData.length>0">		\n			<ion-item class="borderBottem" (click)="onEvent(\'onItemClick\', moreData, $event)" *ngFor="let moreData of knowMoreData">\n		      <ion-thumbnail item-start no-margin no-padding class="thumbImg">\n				  <p>{{moreData.image}}</p>\n				  <ion-icon  style="" class="icon-icon-class">\n					  <i [ngClass]="{\'icon-icon-calculator\': listintType == \'Calculators\',\'icon-icon-quiz\': listintType == \'Quiz\', \'icon-icon-survey\': listintType == \'Survey\', \'icon-icon-poll\': listintType == \'Polls\'}"></i>\n				  </ion-icon>\n\n		       <!--  <img src="assets/heart_Rate_3436589.svg" alt="Calculators"> -->\n		      </ion-thumbnail>\n	\n		      <ion-label>\n		        <p class="textClass">{{ moreData.name }}</p>\n		        <div class="myShareIconClass" float-right>\n	              <!-- ion-icon  style="" class="moredatashere">                \n	                <i class="icon icon-cardio-like" ></i>\n	              </ion-iconź\n\n	              <ion-icon  style="" class="moredatashere">  \n	                <i class="icon icon-list-share"></i>\n	              </ion-icon>  \n					<ion-icon  style="" class="moredatashere" tappable (click)="onEvent(\'onFavorite\', moreData, $event)">\n						<i class="icon icon-cardio-like" [ngClass]="{\'active\': group.isFavourite}"  ></i>\n					</ion-icon>\n\n					<ion-icon  style="" class="moredatashere" tappable  (click)="onEvent(\'onShare\', group, $event)">  \n						<i class="icon icon-list-share" ></i>\n					</ion-icon>-->          \n	            </div> \n		      </ion-label>\n		    </ion-item>\n	    </div>\n	    <ion-item style="" class="noDataFound" *ngIf="knowMoreData.length == 0">\n            <p class="noFound"> No data found </p>\n        </ion-item>\n	</ion-list>\n\n	<ion-list *ngIf="listintType == \'Drawn\'"  no-margin no-padding class="DrawnList">\n	\n		<ion-item class="borderBottem itemHeight" (click)="onEvent(\'onDrawnItemClick\', drawnData, $event)" *ngFor="let drawnData of displayData8">\n	      <ion-thumbnail item-start class="drawnthumbImg">\n	        <img [src]="drawnData.iconUrl" alt="{{drawnData.name}}" class=""/>\n	      </ion-thumbnail>	\n	      <ion-label>\n	        <p class="drawntextClass">{{drawnData.name}}</p>\n	        <span style="" class="desClass">{{drawnData.description}}</span>\n                <div  float-right  style="" class="shareContent">\n\n                  <ion-icon  style="" class="tabsfavshare" tappable (click)="onEvent(\'onFavorite\', drawnData, $event)">\n                    \n                    <i class="icon icon-cardio-like" [ngClass]="{\'active\': drawnData.isFavourite}"  ></i>\n\n                  </ion-icon>\n\n                  <ion-icon  style="" class="tabsfavshare" tappable  (click)="onEvent(\'onShare\', drawnData, $event)">  \n                    <i class="icon icon-list-share" ></i>\n                  </ion-icon>\n\n                </div> \n	      </ion-label>\n\n	    </ion-item>\n\n	</ion-list>\n\n</ion-content>\n<ion-footer clean-footer style="background-color: #F0F0F0 !important;" [activeFootermenu]="false" [iswhatsNew]="true"></ion-footer>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\whats-new-seeall\whats-new-seeall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], WhatsNewSeeallPage);
    return WhatsNewSeeallPage;
}());

//# sourceMappingURL=whats-new-seeall.js.map

/***/ })

});
//# sourceMappingURL=8.js.map