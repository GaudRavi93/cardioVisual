webpackJsonp([11,36,38],{

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

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDownloadPageModule", function() { return MyDownloadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mydownloads__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MyDownloadPageModule = /** @class */ (function () {
    function MyDownloadPageModule() {
    }
    MyDownloadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mydownloads__["a" /* MyDownloadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mydownloads__["a" /* MyDownloadPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["FooterPageModule"]
            ],
        })
    ], MyDownloadPageModule);
    return MyDownloadPageModule;
}());

//# sourceMappingURL=mydownloads.module.js.map

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

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(45);
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
 * Generated class for the My Download page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyDownloadPage = /** @class */ (function () {
    function MyDownloadPage(navCtrl, injector, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.sanitizer = sanitizer;
        this.data = {};
        this.search = '';
        this.pageHistory = '';
        this.download_again = [];
        this.download_status = 'complete';
        this.view_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_HttpService__["a" /* HttpService */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__services_toast_service__["a" /* ToastService */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.file_transfer_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_12__ionic_native_clevertap__["a" /* CleverTap */]();
        this.imgSHownOnline = this.network_check_object.getNetworkType();
        this.limit = 10;
        this.path = this.file_object.dataDirectory;
        this.currentTimeInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        var network_type = this.network_check_object.getNetworkType();
        switch (true) {
            case (network_type != 'none'):
                setTimeout(function () {
                    _this.network_check_object.getPageAction('MyDownloadPage', 'start', '', localStorage.getItem('cv5usrType'));
                }, 1000);
                this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
                break;
        }
        var querystring = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where subtopic_data.downloaded =1 AND isActive=1 AND new_sub_topics.subTopicType='video'");
        this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data) {
            var file_object = _this.file_object;
            var download_again = _this.download_again;
            var that = _this;
            __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](data, function (item, index) {
                var _this = this;
                data[index]['display_content'] = 'education';
                var itemSrc = item.localUrl.replace(item.videoName, '');
                file_object.checkFile(file_object.dataDirectory + 'V2CardioMedia/', item.videoName).then(function (data1) {
                    console.log('path   -->' + JSON.stringify(file_object.dataDirectory + 'V2CardioMedia/' + item.videoName));
                    switch (true) {
                        case (!data1):
                            download_again[item.id] = 'yes';
                            break;
                        case (data1 && item.localUrl == ''):
                            download_again[item.id] = 'no';
                            var video_url = 'V2CardioMedia/' + item.videoName;
                            var querystring = new Array(" UPDATE subtopic_data SET localUrl = '" + video_url + "', downloaded = 1 WHERE id = " + item.id);
                            _this.database_provider_object.updateData(querystring);
                            break;
                        case (data1 && item.localUrl != ''):
                            download_again[item.id] = 'no';
                            break;
                    }
                }, function (err) {
                    console.log('error -->' + JSON.stringify(err));
                    download_again[item.id] = 'yes';
                });
            });
            _this.data1 = data;
        });
        var info_querystring = new Array(" join information_data on information.id = information_data.id where information_data.downloaded =1 AND isActive=1 AND information.subTopicType='video'");
        this.database_provider_object.fetchAllData('information', info_querystring).then(function (info_data) {
            var file_object = _this.file_object;
            var download_again = _this.download_again;
            var that = _this;
            __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](info_data, function (item, index) {
                var _this = this;
                info_data[index]['display_content'] = 'information';
                var itemSrc = item.localUrl.replace(item.videoName, '');
                file_object.checkFile(file_object.dataDirectory + 'V2CardioMedia/', item.videoName).then(function (data1) {
                    switch (true) {
                        case (!data1):
                            download_again[item.id] = 'yes';
                            break;
                        case (data1 && item.localUrl == ''):
                            download_again[item.id] = 'no';
                            var video_url = 'V2CardioMedia/' + item.videoName;
                            var querystring = new Array(" UPDATE information_data SET localUrl = '" + video_url + "', downloaded = 1 WHERE id = " + item.id);
                            _this.database_provider_object.updateData(querystring);
                            break;
                        case (data1 && item.localUrl != ''):
                            download_again[item.id] = 'no';
                            break;
                    }
                }, function (err) {
                    console.log('error -->' + JSON.stringify(err));
                    download_again[item.id] = 'yes';
                });
            });
            _this.data2 = info_data;
        });
        setTimeout(function () {
            _this.templateData = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["union"](_this.data1, _this.data2);
            _this.templateData.forEach(function (data) {
                _this.file_object.readAsArrayBuffer(_this.file_object.dataDirectory + "icons/", data.imageName).then(function (buffer) {
                    var imageBlob = new Blob([new Uint8Array(buffer)], { type: 'image/bmp' });
                    var imageURL = _this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageBlob));
                    data.localIconUrl = imageURL;
                });
            });
            _this.templateDataLength = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](_this.templateData);
        }, 500);
    }
    MyDownloadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    MyDownloadPage.prototype.ionViewWillLeave = function () {
        var network_type = this.network_check_object.getNetworkType();
        if (network_type != 'none') {
            this.network_check_object.getPageAction('MyDownloadPage', 'end', '', localStorage.getItem('cv5usrType'));
        }
    };
    MyDownloadPage.prototype.cancel = function () {
        this.view_controller_object.dismiss();
    };
    MyDownloadPage.prototype.onDetailPage = function (group, event) {
        var _this = this;
        if (group.display_content == 'information') {
            this.onInfoDetailPage(group);
        }
        else if (group.display_content == 'education') {
            event.stopPropagation();
            this.platform_object.ready().then(function () {
                var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + group.id);
                _this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data1) {
                    /*
                    let options = {
                      successCallback: () => { console.log('Video played') },
                      errorCallback: (e) => { console.log('Error streaming') },
                      shouldAutoClose: true
                    };
          
                    if (data1[0].localUrl != '') {
                      this.videoUrlpath = this.file_object.dataDirectory+data1[0].localUrl;
                      this.streamingMedia.playVideo(this.videoUrlpath, options);
                    }else{
                      this.videoUrlpath = data1[0].url;
                      var network_type = this.network_check_object.getNetworkType();
                      if(network_type == 'none'){
                        this.toast_controller_object.create({
                          message: 'You are now offline.',
                          position: 'bottom',
                          duration: 5000
                        }).present();
                      } else {
          
                        var params = {
                          "record_time" : this.dtStr,
                          "record_date" : this.clevertapDate,
                          "os" : localStorage.getItem('getDevicePlatform'),
                          "userRoleId" : localStorage.getItem('cv5userRoleId'),
                          "userType": localStorage.getItem('cv5usrType'),
                          "userEmail" : localStorage.getItem('cv5userEmail'),
                          "Identity":localStorage.getItem('userIdentity'),
                          "videoName":group.name,
                          "videoId":group.id,
                          "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                          "location":localStorage.getItem('location'),
                          "specialities":localStorage.getItem('usrSpecialities'),
                          "videoContentPlayedFor":'Education',
                          "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                        };
                        this.clevertap_object.recordEventWithNameAndProps("onVideoPlayed",params);
                        this.streamingMedia.playVideo(this.videoUrlpath, options);
                      }
                    }
                    */
                    var network_type = _this.network_check_object.getNetworkType();
                    if (network_type == 'none' && data1[0].localUrl == '') {
                        _this.toast_controller_object.create({
                            message: 'You are now offline.',
                            position: 'bottom',
                            duration: 5000
                        }).present();
                    }
                    else {
                        _this.navCtrl.push('VideoDetailsPage', { pageItem: group.name, data: data1[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'DownloadPage' });
                    }
                });
            });
        }
    };
    MyDownloadPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        //infiniteScroll.complete();
        setTimeout(function () {
            _this.limit += 5;
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    MyDownloadPage.prototype.removecontent = function (group, event) {
        var _this = this;
        if (group.display_content == 'information') {
            this.removeInfocontent(group, event);
        }
        else if (group.display_content == 'education') {
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
                    var querystring = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where subtopic_data.downloaded =1 AND isActive=1 AND new_sub_topics.subTopicType='video' AND new_sub_topics.id=" + group.id);
                    _this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (subtopicdata) {
                        group = subtopicdata[0];
                        _this.file_object.removeFile(_this.file_object.dataDirectory + 'V2CardioMedia/', group.videoName).then(function (res) {
                            //alert('resoponse '+JSON.stringify(res));
                            var querystring = new Array("UPDATE subtopic_data SET localUrl = '', downloaded = 0 WHERE id=" + group.id);
                            _this.database_provider_object.updateData(querystring);
                            var user_id = localStorage.getItem('userliveId');
                            var http_object = _this.http_object;
                            var localapi = _this.http_service_object.getApi();
                            _this.http_service_object.getDoewnloadApiDataforUSers(user_id, group.id).subscribe(function (data) {
                                if (data.length > 0) {
                                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["times"](data.length, function (i) {
                                        var url = localapi + '/api/downloads/' + data[i].id;
                                        http_object.delete(url).subscribe(function (resp) {
                                            //alert('deleted yes '+JSON.stringify(resp)); 
                                        }, function (error) {
                                            //alert('error occur, delete fail '+JSON.stringify(error)); 
                                        });
                                    });
                                    _this.toast_service_object.presentToast('"' + group.name + '" removed from download list.');
                                }
                            });
                        }, function (err) {
                            //alert('remove err '+JSON.stringify(err));
                        });
                    });
                    group.downloaded = 0;
                }
            });
        }
    };
    MyDownloadPage.prototype.onDownload = function (item, event) {
        var _this = this;
        var canShare = localStorage.getItem('canDownloadAccess');
        var network_type = this.network_check_object.getNetworkType();
        var downloadque = localStorage.getItem('Downloadque');
        switch (true) {
            case (item.display_content == 'information'):
                this.onInfoDownload(item, event);
                break;
            case (item.display_content == 'education' && canShare == 'true' && network_type == 'none'):
                event.stopPropagation();
                this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
                break;
            case (item.display_content == 'education' && canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):
                event.stopPropagation();
                downloadque = item.id;
                localStorage.setItem('Downloadque', downloadque);
                this.isDownloadVideoMultiple();
                break;
            case (item.display_content == 'education' && canShare == 'true' && network_type != 'none' && downloadque != ''):
                event.stopPropagation();
                downloadque = downloadque + ',' + item.id;
                localStorage.setItem('Downloadque', downloadque);
                this.isDownloadVideoMultiple();
                break;
            case (item.display_content == 'education' && canShare != 'true'):
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
                break;
        }
    };
    MyDownloadPage.prototype.isDownloadVideoMultiple = function () {
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
                //show first download toast
                var userCondition = new Array("");
                _this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (user_data) {
                    _this.userdata = user_data[0];
                });
                var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN (" + progress_id + ")");
                _this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data) {
                    var fileTransfer = _this.file_transfer_object.create();
                    var item = data[0];
                    _this.toast_service_object.mypresentToast('Downloading : "' + item.name + '"', 2000);
                    _this.video_share_provider_object.downloadVideo(item, 'Education');
                    var filename = item.url.split("/").pop();
                    fileTransfer.onProgress(function (progressEvent) {
                        if (progressEvent.lengthComputable) {
                            //var perc:any = 'perc'+item.id;
                            var perc = (progressEvent.loaded / progressEvent.total) * 100;
                            _this.perc1 = perc.toFixed(1);
                            //var loader:any = 'loader'+item.id;
                            var loader = document.getElementById("progressBar_" + item.id);
                            loader.style.background = '#fff';
                            loader.style.display = 'block';
                            loader.innerHTML = _this.perc1 + '%';
                            //var loader1:any = 'loader1'+item.id;
                            //var loader1 = document.getElementById("mydownload_progress");
                            //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                            //// loader1.innerHTML = 'Downloading is in progress...';
                            //loader1.style.padding = '10px';
                            //loader1.style.display = 'block';
                            if (_this.perc1 == 100) {
                                loader.innerHTML = '';
                                loader.style.background = '';
                                //loader1.innerHTML = '';
                                //loader1.style.padding = '';
                                //loader1.style.display = '';
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
                        _this.download_again[item.id] = 'no';
                        _this.download_status = 'complete';
                        //alert('dismiss');
                    }, function (error) {
                        _this.toast_service_object.presentToast("Download failed! please try again.");
                        //alert('error '+JSON.stringify(error));
                    });
                    que_ids = localStorage.getItem('Downloadque');
                    var new_ids_arr = que_ids.split(',').map(Number);
                    var test_arr = [];
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                        if (value != item.id) {
                            test_arr.push(value);
                        }
                    });
                    que_ids = test_arr.toString();
                    localStorage.setItem('Downloadque', que_ids);
                    _this.download_status = 'complete';
                    if (que_ids != '') {
                        _this.isDownloadVideoMultiple();
                    }
                    else if (que_ids == '') {
                        localStorage.setItem('Downloadque', '');
                    }
                }, function (e) {
                    //alert('586 error '+JSON.stringify(e))
                });
            }
            //} 
        });
    };
    //download function
    MyDownloadPage.prototype.downloadfile = function (url, name, id) {
        var _this = this;
        var fileTransfer = this.file_transfer_object.create();
        fileTransfer.download(url, this.file_object.dataDirectory + 'icons/' + name).then(function (entry) {
            var icon_url = 'icons/' + name;
            var querystring = new Array(" UPDATE subtopic_data SET localIconUrl = '" + icon_url + "', downloaded = 1 WHERE id = " + id + " ");
            _this.database_provider_object.updateData(querystring);
        });
    };
    //insert query to api database
    MyDownloadPage.prototype.downloadapi = function (groupid, userid) {
        var post_url = this.http_service_object.getPosturl('downloads');
        this.http_object.post(post_url, { "cardiovisualUserId": userid, "subtopicId": groupid }).subscribe(function (data) {
            var response = JSON.parse(data['_body']);
            console.log('response--->' + JSON.stringify(response));
            var response_data = JSON.stringify(response);
        }, function (error) {
            //alert("Live Api error" + error);
            console.log(error);
        });
    };
    MyDownloadPage.prototype.markasFavorite = function (group, event) {
        var _this = this;
        if (group.display_content == 'information') {
            this.markInfoasFavorite(group, event);
        }
        else if (group.display_content == 'education') {
            event.stopPropagation();
            //console.log('this.markasFavorite(item)=--->'+JSON.stringify(group));
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
                            //this.sqlite_sync.setFavorites(val, group.id);
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
        }
    };
    MyDownloadPage.prototype.shareVideo = function (shareVideo, event) {
        event.stopPropagation();
        this.video_share_provider_object.shareSingleVideo(shareVideo);
    };
    MyDownloadPage.prototype.onInfoDetailPage = function (group) {
        var _this = this;
        event.stopPropagation();
        this.platform_object.ready().then(function () {
            var querystring = new Array("join information_data on information.id = information_data.id where information.id=" + group.id);
            _this.database_provider_object.fetchAllData('information', querystring).then(function (data1) {
                /*
                let options = {
                  successCallback: () => { console.log('Video played') },
                  errorCallback: (e) => { console.log('Error streaming') },
                  shouldAutoClose: true
                };
                if (data1[0].localUrl != '') {
                  this.videoUrlpath = this.file_object.dataDirectory+data1[0].localUrl;
                  this.streamingMedia.playVideo(this.videoUrlpath, options);
                }else{
                  this.videoUrlpath = data1[0].url;
                  var network_type = this.network_check_object.getNetworkType();
                  if(network_type == 'none'){
                  this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                    }).present();
                  } else {
                    var params = {
                      "record_time" : this.dtStr,
                      "record_date" : this.clevertapDate,
                      "os" : localStorage.getItem('getDevicePlatform'),
                      "userRoleId" : localStorage.getItem('cv5userRoleId'),
                      "userType": localStorage.getItem('cv5usrType'),
                      "userEmail" : localStorage.getItem('cv5userEmail'),
                      "Identity":localStorage.getItem('userIdentity'),
                      "videoName":data1[0].name,
                      "videoId":data1[0].id,
                      "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                      "location":localStorage.getItem('location'),
                      "specialities":localStorage.getItem('usrSpecialities'),
                      "videoContentPlayedFor":'Information',
                      "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                    };
                    this.clevertap_object.recordEventWithNameAndProps("onVideoPlayed",params);
                    this.streamingMedia.playVideo(this.videoUrlpath, options);
                  }
                }
                */
                var network_type = _this.network_check_object.getNetworkType();
                if (network_type == 'none' && data1[0].localUrl == '') {
                    _this.toast_controller_object.create({
                        message: 'You are now offline.',
                        position: 'bottom',
                        duration: 5000
                    }).present();
                }
                else {
                    _this.navCtrl.push('InformationVideoDetailsPage', { pageItem: data1[0].name, coloR: data1[0].hexcodeBase, icondash: data1[0].iconName, data: data1[0], 'header': 'show', 'request_from': 'video_list', 'sendTo': 'DownloadPage' });
                }
            });
        });
    };
    MyDownloadPage.prototype.removeInfocontent = function (group, event) {
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
                var querystring = new Array(" join information_data on information.id = information_data.id where information_data.downloaded =1 AND isActive=1 AND information.subTopicType='video' AND information.id=" + group.id);
                _this.database_provider_object.fetchAllData('information', querystring).then(function (info_data) {
                    group = info_data[0];
                    _this.file_object.removeFile(_this.file_object.dataDirectory + 'V2CardioMedia/', group.videoName).then(function (res) {
                        //alert('resoponse '+JSON.stringify(res));
                        var querystring = new Array("UPDATE information_data SET localUrl = '', downloaded = 0 WHERE id=" + group.id);
                        _this.database_provider_object.updateData(querystring);
                        var user_id = localStorage.getItem('userliveId');
                        var http_object = _this.http_object;
                        var localapi = _this.http_service_object.getApi();
                        _this.http_service_object.getInfoDownloadApiDataforUsers(user_id, group.id).subscribe(function (data) {
                            if (data.length > 0) {
                                __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["times"](data.length, function (i) {
                                    var url = localapi + '/api/downloads/' + data[i].id;
                                    http_object.delete(url).subscribe(function (resp) {
                                        //alert('deleted yes '+JSON.stringify(resp)); 
                                    }, function (error) {
                                        //alert('error occur, delete fail '+JSON.stringify(error)); 
                                    });
                                });
                                _this.toast_service_object.presentToast('"' + group.name + '" removed from download list.');
                            }
                        });
                    }, function (err) {
                        //alert('remove err '+JSON.stringify(err));
                    });
                });
                group.downloaded = 0;
            }
        });
    };
    MyDownloadPage.prototype.markInfoasFavorite = function (group, event) {
        var _this = this;
        event.stopPropagation();
        //console.log('this.markasFavorite(item)=--->'+JSON.stringify(group));
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
                        //this.sqlite_sync.setFavorites(val, group.id);
                        _this.database_provider_object.setinformationFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Added to Favourites.");
                    });
                }
                else {
                    //set isFavourite == 0
                    _this.storage_object.get('user_logged_in').then(function (val) {
                        //this.sqlite_sync.setFavorites(val, group.id); 
                        _this.database_provider_object.setinformationFavorites(val, group.id);
                        _this.toast_service_object.presentToast("Removed from Favourites.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    MyDownloadPage.prototype.onInfoDownload = function (item, event) {
        var _this = this;
        event.stopPropagation();
        var canShare = localStorage.getItem('canDownloadAccess');
        var network_type = this.network_check_object.getNetworkType();
        var downloadque = localStorage.getItem('Downloadque');
        switch (true) {
            case (canShare == 'true' && network_type == 'none'):
                this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
                break;
            case (canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):
                downloadque = item.id;
                localStorage.setItem('Downloadque', downloadque);
                this.isInfoDownloadVideoMultiple();
                break;
            case (canShare == 'true' && network_type != 'none' && downloadque != ''):
                downloadque = downloadque + ',' + item.id;
                localStorage.setItem('Downloadque', downloadque);
                this.isInfoDownloadVideoMultiple();
                break;
            case (canShare != 'true'):
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
                break;
        }
    };
    MyDownloadPage.prototype.isInfoDownloadVideoMultiple = function () {
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
                //show first download toast
                var userCondition = new Array("");
                _this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (user_data) {
                    _this.userdata = user_data[0];
                });
                var querystring = new Array("join information_data on information.id = information_data.id where information.id IN (" + progress_id + ")");
                _this.database_provider_object.fetchAllData('information', querystring).then(function (data) {
                    var fileTransfer = _this.file_transfer_object.create();
                    var item = data[0];
                    _this.toast_service_object.mypresentToast('Downloading : "' + item.name + '"', 2000);
                    _this.video_share_provider_object.downloadVideo(item, 'Information');
                    var filename = item.url.split("/").pop();
                    fileTransfer.onProgress(function (progressEvent) {
                        if (progressEvent.lengthComputable) {
                            var perc = (progressEvent.loaded / progressEvent.total) * 100;
                            _this.perc1 = perc.toFixed(1);
                            var loader = document.getElementById("progressBar_" + item.id);
                            loader.style.background = '#fff';
                            loader.style.display = 'block';
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
                        _this.download_again[item.id] = 'no';
                        _this.download_status = 'complete';
                        //alert('dismiss');
                    }, function (error) {
                        _this.toast_service_object.presentToast("Download failed! please try again.");
                        //alert('error '+JSON.stringify(error));
                    });
                    que_ids = localStorage.getItem('Downloadque');
                    var new_ids_arr = que_ids.split(',').map(Number);
                    var test_arr = [];
                    __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                        if (value != item.id) {
                            test_arr.push(value);
                        }
                    });
                    que_ids = test_arr.toString();
                    localStorage.setItem('Downloadque', que_ids);
                    _this.download_status = 'complete';
                    if (que_ids != '') {
                        _this.isInfoDownloadVideoMultiple();
                    }
                    else if (que_ids == '') {
                        localStorage.setItem('Downloadque', '');
                    }
                }, function (e) {
                    //alert('586 error '+JSON.stringify(e))
                });
            }
            //} 
        });
    };
    //download function
    MyDownloadPage.prototype.Infodownloadfile = function (url, name, id) {
        var _this = this;
        var fileTransfer = this.file_transfer_object.create();
        fileTransfer.download(url, this.file_object.dataDirectory + 'icons/' + name).then(function (entry) {
            var icon_url = 'icons/' + name;
            var querystring = new Array(" UPDATE information_data SET localIconUrl = '" + icon_url + "', downloaded = 1 WHERE id = " + id + " ");
            _this.database_provider_object.updateData(querystring);
        });
    };
    //insert query to api database
    MyDownloadPage.prototype.Infodownloadapi = function (groupid, userid) {
        var post_url = this.http_service_object.getPosturl('downloads');
        this.http_object.post(post_url, { "cardiovisualUserId": userid, "informationId": groupid }).subscribe(function (data) {
            var response = JSON.parse(data['_body']);
            console.log('response--->' + JSON.stringify(response));
            var response_data = JSON.stringify(response);
        }, function (error) {
            //alert("Live Api error" + error);
            console.log(error);
        });
    };
    MyDownloadPage.prototype.onPlaylistAdd = function (group, event) {
        if (group.display_content == 'information') {
            event.stopPropagation();
            this.addtoplaylist(group, 'information');
        }
        else if (group.display_content == 'education') {
            event.stopPropagation();
            this.addtoplaylist(group, 'education');
        }
    };
    MyDownloadPage.prototype.addtoplaylist = function (item, contentType) {
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
                    }
                ]
            });
            confirmPopup.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MyDownloadPage.prototype, "events", void 0);
    MyDownloadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mydownloads',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\mydownloads\mydownloads.html"*/' <!--\n\n  Generated template for the SplashPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-header clean-header  class="headerColor" [isTabs]="true" [hideMenu]="true"></ion-header>\n\n\n\n<ion-content no-padding class="bgcolor" style="background-color: #ffffff;top:-5px;">\n\n\n\n  <ion-grid class="downloadcontentGrid">\n\n    <ion-row >\n\n        <ion-item  no-padding class="mycvsticky" style="background-color: #F0F0F0;">\n\n          <!-- <div style="" class="mycvitem-divider">\n\n            My Downloads\n\n          </div> -->\n\n          <div style="font-size: 1.4em;font-weight: bold;text-align: center;padding: 15px;">My Downloads</div>\n\n\n\n        </ion-item>\n\n        <ion-col col-12>\n\n          <ion-list no-margin *ngIf=\'templateData\'>\n\n            <ion-item tappable no-padding class="ion-item-border itemClassHeight" *ngFor="let group of templateData | slice:0:limit " style="" (click)="onDetailPage(group, $event)" [ngClass]="{\'hide_row\': group.downloaded == 0}">\n\n              \n\n              <ion-thumbnail item-start no-margin class="rectanglImg">\n\n                <div class="thumbnilBackground">\n\n                  <!-- <img [src]="group.iconUrl" alt="{{group.name}}" style="width: auto !important;" /> -->\n\n                  <img *ngIf="group.localIconUrl ==\'\' || imgSHownOnline !=\'none\'" [src]="group.iconUrl" alt="{{group.name}}" class="rectangl_img"/>\n\n                  <img *ngIf="group.localIconUrl !=\'\' && imgSHownOnline ==\'none\'" [src]="group.localIconUrl" alt="{{group.name}}" class="rectangl_img"/>\n\n\n\n                  <span id="progressBar_{{group.id}}" style="position: absolute;left: 60px;top: 50px;padding: 3px;height:auto;color: red;text-align: center;font-size: 10px;font-weight: 900;border-radius: 25px;">\n\n                  </span> \n\n                  <div class="bottom-left" style="left: 1px !important;">\n\n\n\n                    <i *ngIf="group.subTopicType == \'video\'" class="icon-play subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="group.subTopicType == \'image\'" class="icon-pencil subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                    <i *ngIf="group.subTopicType == \'infographic\'" class="icon-sheet subtopic-card-img-icon" [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }" style="color:#FFF; font-size: 25px;"></i>\n\n                  </div>                    \n\n                </div>                   \n\n              </ion-thumbnail>\n\n                <div float-right style="position: absolute;top:10px;">\n\n                  <h2 padding-left>\n\n                    <b  item-title style="white-space: normal;word-wrap: break-word;" class="item-text-wrap">{{group.name}}</b>\n\n                    \n\n                  </h2>\n\n\n\n                  <p padding-left class="tab-desc-size tab-desc-size1" item-subtitle *ngIf="group.description != \'\' && group.description !=\'null\'">\n\n                    <span *ngIf="group.description.length < 76" style="white-space: normal;word-wrap: break-word;">{{group.description}}</span>\n\n                   <span *ngIf="group.description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{group.description.slice(0,75)}}...</span>\n\n                  </p>\n\n                </div>\n\n              <div  float-right  style="position:absolute;bottom:10px;right:0px; color:#CCC;">\n\n                <ion-icon  style=""  *ngIf="download_again[group.id] ==\'yes\'" (click)="onDownload(group, $event)" class="tabsharedownloadfev">\n\n                  <i style="" id="download_{{group.id}}" class="icon-video-icons-download can-download-icon"></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon  style="" *ngIf="download_again[group.id] ==\'no\'" (click)="removecontent(group, $event)" class="tabsharedownloaddlt">\n\n\n\n                  <ion-icon name="trash"></ion-icon>\n\n                </ion-icon>\n\n\n\n                <ion-icon  style="" class="tabsfavshare" tappable (click)="markasFavorite(group, $event)">\n\n                  \n\n                   <i class="icon icon-cardio-like" [ngClass]="{\'active\': group.isFavourite}" [style.color]="(group.isFavourite == 1) ? \'#c54334\' : \'#CCC\'"></i>\n\n\n\n                </ion-icon>\n\n\n\n                <ion-icon  style="" class="tabsfavshare" tappable  (click)="shareVideo(group, $event)">  \n\n                   <i class="icon icon-list-share" ></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon class="myPlusIcon" (click)="onPlaylistAdd(group, $event)"> \n\n                  <i class="icon-video-icons-share-doctor" style=""></i>\n\n                </ion-icon>\n\n              </div> \n\n              \n\n            </ion-item>\n\n          </ion-list>\n\n          <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="templateDataLength > limit">\n\n            <ion-infinite-scroll-content\n\n              loadingSpinner="bubbles"\n\n              loadingText="Loading more data...">\n\n            </ion-infinite-scroll-content>\n\n          </ion-infinite-scroll>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n   \n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n<ion-footer clean-footer style="background-color: #F0F0F0 !important;" [activeFootermenu]="false" [ismyCv]="true" [ismyChannel]="false"></ion-footer>'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\mydownloads\mydownloads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MyDownloadPage);
    return MyDownloadPage;
}());

//# sourceMappingURL=mydownloads.js.map

/***/ })

});
//# sourceMappingURL=11.js.map