webpackJsonp([5,36,38],{

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

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPageModule", function() { return PlaylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlaylistPageModule = /** @class */ (function () {
    function PlaylistPageModule() {
    }
    PlaylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* PlaylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* PlaylistPage */]),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["FooterPageModule"],
            ],
        })
    ], PlaylistPageModule);
    return PlaylistPageModule;
}());

//# sourceMappingURL=playlist.module.js.map

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

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_toast_service__ = __webpack_require__(108);
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

















var PlaylistPage = /** @class */ (function () {
    function PlaylistPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.params = {};
        this.data = {};
        this.events = {};
        this.loader = {};
        this.data_from_tab = {};
        this.search = "";
        this.pageHistory = "";
        this.test = [];
        this.download_status = "complete";
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]);
        this.loading_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]);
        this.network_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]);
        this.toast_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.database_provider_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.network_check_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.alert_controller_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.file_transfer_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_14__ionic_native_clevertap__["a" /* CleverTap */]();
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_15__services_toast_service__["a" /* ToastService */]);
        this.screen_orientation_object =
            injector.get(__WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.localapi = this.http_service_object.getApi();
        this.path = this.file_object.dataDirectory;
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        this.network_status = "connected";
        this.network_object.onDisconnect().subscribe(function () {
            _this.network_status = "not_connected";
        });
        this.data_from_tab = this.nav_params_object.data;
        this.request_from = this.nav_params_object.get("request_from");
        this.network_object.onConnect().subscribe(function () {
            _this.network_status = "connected";
        });
        this.loader = this.loading_controller_object.create({
            spinner: "crescent",
        });
        this.loader.present();
        var user_type = localStorage.getItem("cv5usrType");
        this.imgSHownOnline = this.network_check_object.getNetworkType();
        if (this.imgSHownOnline != "none") {
            setTimeout(function () {
                _this.network_check_object.getPageAction("PlaylistPage", "start", "", localStorage.getItem("cv5usrType"));
            }, 1000);
        }
        var that = this;
        this.events = {
            onPlaylistFavorite: function (item) {
                that.markPlaylistasFavorite(item);
            },
            onShare: function (item) {
                that.video_share_provider_object.sharePlaylistVideo(item);
            },
            onPlay: function (item, video) {
                var index = item.items.findIndex(function (itm) { return itm.id === video.id; });
                that.platform_object.ready().then(function () {
                    var network_type = that.network_check_object.getNetworkType();
                    var playlistParams = {
                        record_time: that.dtStr,
                        record_date: that.clevertapDate,
                        os: localStorage.getItem("getDevicePlatform"),
                        modelNo: localStorage.getItem("modelNo"),
                        deviceversion: localStorage.getItem("getDeviceversion"),
                        userRoleId: localStorage.getItem("cv5userRoleId"),
                        userType: localStorage.getItem("cv5usrType"),
                        userEmail: localStorage.getItem("cv5userEmail"),
                        playlistName: item.name,
                        userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                        location: localStorage.getItem("location"),
                        specialities: localStorage.getItem("usrSpecialities"),
                        subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                    };
                    switch (true) {
                        case network_type == "none":
                            that.toast_controller_object
                                .create({
                                message: "You are now offline.",
                                position: "bottom",
                                duration: 5000,
                            })
                                .present();
                            break;
                        case network_type != "none" && that.request_from == "profile_page":
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnPlaylist", playlistParams);
                            navCtrl.push("VideoDetailsPage", {
                                data: item,
                                type: "playlist",
                                index: index > -1 ? index : 0,
                                header: "hide",
                                sendTo: "Playlist",
                            });
                            break;
                        case network_type != "none" && that.request_from != "profile_page":
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnPlaylist", playlistParams);
                            navCtrl.parent.parent.push("VideoDetailsPage", {
                                data: item,
                                type: "playlist",
                                index: index > -1 ? index : 0,
                                header: "hide",
                                sendTo: "Playlist",
                            });
                            break;
                    }
                });
            },
            onItemClick: function (item) {
                var canShare = localStorage.getItem("userProAccess");
                var network_type = that.network_check_object.getNetworkType();
                var params = {
                    record_time: that.dtStr,
                    record_date: that.clevertapDate,
                    os: localStorage.getItem("getDevicePlatform"),
                    modelNo: localStorage.getItem("modelNo"),
                    deviceversion: localStorage.getItem("getDeviceversion"),
                    userRoleId: localStorage.getItem("cv5userRoleId"),
                    userType: localStorage.getItem("cv5usrType"),
                    topic_name: that.newtopic_name,
                    category_name: "condition",
                    userEmail: localStorage.getItem("cv5userEmail"),
                    location: localStorage.getItem("location"),
                    userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                    specialities: localStorage.getItem("usrSpecialities"),
                    subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                that.clevertap_object.recordEventWithNameAndProps("clickedOnCategory", params);
                var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" +
                    item.id);
                that.database_provider_object
                    .fetchAllData("new_sub_topics", querystring)
                    .then(function (data) {
                    switch (true) {
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl != "" &&
                            that.request_from == "profile_page":
                            var params = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "condition",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                            navCtrl.push("VideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "ProfilePage",
                            });
                            break;
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl != "" &&
                            that.request_from != "profile_page":
                            var params = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "condition",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                            navCtrl.parent.parent.push("VideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "TabListing",
                            });
                            break;
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl == "" &&
                            network_type == "none":
                            that.toast_controller_object
                                .create({
                                message: "This video requires internet connection.",
                                position: "bottom",
                                duration: 5000,
                            })
                                .present();
                            break;
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl == "" &&
                            network_type != "none" &&
                            that.request_from == "profile_page":
                            var params = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "condition",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                            navCtrl.push("VideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "ProfilePage",
                            });
                            break;
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl == "" &&
                            network_type != "none" &&
                            that.request_from != "profile_page":
                            var params = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "condition",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                            navCtrl.parent.parent.push("VideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "TabListing",
                            });
                            break;
                        case item.subTopicType == "video" && canShare != "true":
                            var confirmPopup = that.alert_controller_object.create({
                                title: "",
                                message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                                enableBackdropDismiss: true,
                                buttons: [
                                    {
                                        text: "Upgrade",
                                        handler: function () {
                                            that.navCtrl.parent.parent.push("UpgradePlanPage");
                                        },
                                    },
                                ],
                            });
                            confirmPopup.present();
                            break;
                        case item.subTopicType == "image" && item.localUrl != "":
                            var imageparams = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "condition",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                imageName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnDrawOn", imageparams);
                            that.navCtrl.parent.parent.push("DrawonPage", {
                                drawnurl: item.localUrl,
                                drawOnImgTitle: item.title,
                                drawnCopyright: item.copyrightInfo,
                                drawnSubtopicType: item.subTopicType,
                                video_Name: item.videoName,
                                local_Url: "localUrl",
                            });
                            break;
                        case item.subTopicType == "image" &&
                            item.localUrl == "" &&
                            network_type != "none":
                            var imageparams = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "condition",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                imageName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnDrawOn", imageparams);
                            that.navCtrl.parent.parent.push("DrawonPage", {
                                drawnurl: item.url,
                                drawOnImgTitle: item.title,
                                drawnCopyright: item.copyrightInfo,
                                drawnSubtopicType: item.subTopicType,
                            });
                            break;
                        case item.subTopicType == "image" &&
                            item.localUrl == "" &&
                            network_type == "none":
                            that.toast_controller_object
                                .create({
                                message: "This image requires internet connection.",
                                position: "bottom",
                                duration: 5000,
                            })
                                .present();
                            break;
                    }
                });
            },
            onFavorite: function (item) {
                event.stopPropagation();
                that.markasFavorite(item, "education");
            },
            onMultipleDownload: function (item) {
                event.stopPropagation();
                var canShare = localStorage.getItem("canDownloadAccess");
                var network_type = that.network_check_object.getNetworkType();
                var downloadque = localStorage.getItem("Downloadque");
                switch (true) {
                    case canShare == "true" && network_type == "none":
                        that.toast_controller_object
                            .create({
                            message: "You are now offline.",
                            position: "bottom",
                            duration: 5000,
                        })
                            .present();
                        break;
                    case canShare == "true" &&
                        network_type != "none" &&
                        (downloadque == null || downloadque == ""):
                        downloadque = item.id;
                        localStorage.setItem("Downloadque", downloadque);
                        that.isDownloadVideoMultiple("education");
                        break;
                    case canShare == "true" &&
                        network_type != "none" &&
                        downloadque != "":
                        downloadque = downloadque + "," + item.id;
                        localStorage.setItem("Downloadque", downloadque);
                        that.isDownloadVideoMultiple("education");
                        break;
                    case canShare != "true":
                        var confirmPopup = that.alert_controller_object.create({
                            title: "",
                            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
                            enableBackdropDismiss: true,
                            buttons: [
                                {
                                    text: "Upgrade",
                                    handler: function () {
                                        that.navCtrl.parent.parent.push("UpgradePlanPage");
                                    },
                                },
                            ],
                        });
                        confirmPopup.present();
                        break;
                }
            },
            onImageCantDownload: function (item) {
                that.toast_service_object.mypresentToast("Only videos can be downloaded.", 2000);
            },
            onInfoItemClick: function (item) {
                var canShare = localStorage.getItem("userProAccess");
                var network_type = that.network_check_object.getNetworkType();
                var params = {
                    record_time: this.dtStr,
                    record_date: this.clevertapDate,
                    os: localStorage.getItem("getDevicePlatform"),
                    modelNo: localStorage.getItem("modelNo"),
                    deviceversion: localStorage.getItem("getDeviceversion"),
                    userRoleId: localStorage.getItem("cv5userRoleId"),
                    userType: localStorage.getItem("cv5usrType"),
                    topic_name: this.newtopic_name,
                    category_name: "expert",
                    userEmail: localStorage.getItem("cv5userEmail"),
                    location: localStorage.getItem("location"),
                    userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                    specialities: localStorage.getItem("usrSpecialities"),
                    subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                };
                // Set clevertap Custom AppLaunch event.
                that.clevertap_object.recordEventWithNameAndProps("clickedOnCategory", params);
                var querystring = new Array("join information_data on information.id = information_data.id where information.id=" +
                    item.id);
                that.database_provider_object
                    .fetchAllData("information", querystring)
                    .then(function (data) {
                    switch (true) {
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl != "" &&
                            that.request_from == "profile_page":
                            var params = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "expert",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                            navCtrl.push("InformationVideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "ProfilePage",
                            });
                            break;
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl != "" &&
                            that.request_from != "profile_page":
                            var params = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "expert",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                            navCtrl.parent.parent.push("InformationVideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "TabListing",
                            });
                            break;
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl == "" &&
                            network_type == "none":
                            that.toast_controller_object
                                .create({
                                message: "This video requires internet connection.",
                                position: "bottom",
                                duration: 5000,
                            })
                                .present();
                            break;
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl == "" &&
                            network_type != "none" &&
                            that.request_from == "profile_page":
                            var params = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "expert",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                            navCtrl.push("InformationVideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "ProfilePage",
                            });
                            break;
                        case item.subTopicType == "video" &&
                            (item.isPaid == 0 || canShare == "true") &&
                            data[0].localUrl == "" &&
                            network_type != "none" &&
                            that.request_from != "profile_page":
                            var params = {
                                record_time: that.dtStr,
                                record_date: that.clevertapDate,
                                os: localStorage.getItem("getDevicePlatform"),
                                modelNo: localStorage.getItem("modelNo"),
                                deviceversion: localStorage.getItem("getDeviceversion"),
                                userRoleId: localStorage.getItem("cv5userRoleId"),
                                userType: localStorage.getItem("cv5usrType"),
                                topic_name: that.newtopic_name,
                                category_name: "expert",
                                userEmail: localStorage.getItem("cv5userEmail"),
                                file: item.name,
                                videoName: item.videoName,
                                location: localStorage.getItem("location"),
                                userRoleSubType: localStorage.getItem("cv5usrRolesubType"),
                                specialities: localStorage.getItem("usrSpecialities"),
                                subSpecialities: localStorage.getItem("cv5usrRolesubType"),
                            };
                            that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
                            navCtrl.parent.parent.push("InformationVideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "TabListing",
                            });
                            break;
                        case item.subTopicType == "video" &&
                            item.isPaid == 1 &&
                            canShare != "true":
                            var confirmPopup = that.alert_controller_object.create({
                                title: "",
                                message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
                                enableBackdropDismiss: true,
                                buttons: [
                                    {
                                        text: "Upgrade",
                                        handler: function () {
                                            that.navCtrl.parent.parent.push("UpgradePlanPage");
                                        },
                                    },
                                ],
                            });
                            confirmPopup.present();
                            break;
                    }
                });
            },
            onInfoFavorite: function (item) {
                event.stopPropagation();
                that.markasFavorite(item, "information");
            },
            onInfoMultipleDownload: function (item) {
                event.stopPropagation();
                var canShare = localStorage.getItem("canDownloadAccess");
                var network_type = that.network_check_object.getNetworkType();
                var downloadque = localStorage.getItem("InfoDownloadque");
                switch (true) {
                    case canShare == "true" && network_type == "none":
                        that.toast_controller_object
                            .create({
                            message: "You are now offline.",
                            position: "bottom",
                            duration: 5000,
                        })
                            .present();
                        break;
                    case canShare == "true" &&
                        network_type != "none" &&
                        (downloadque == null || downloadque == ""):
                        downloadque = item.id;
                        localStorage.setItem("InfoDownloadque", downloadque);
                        that.isDownloadVideoMultiple("information");
                        break;
                    case canShare == "true" &&
                        network_type != "none" &&
                        downloadque != "":
                        downloadque = downloadque + "," + item.id;
                        localStorage.setItem("InfoDownloadque", downloadque);
                        that.isDownloadVideoMultiple("information");
                        break;
                    case canShare != "true":
                        var confirmPopup = that.alert_controller_object.create({
                            title: "",
                            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
                            enableBackdropDismiss: true,
                            buttons: [
                                {
                                    text: "Upgrade",
                                    handler: function () {
                                        that.navCtrl.parent.parent.push("UpgradePlanPage");
                                    },
                                },
                            ],
                        });
                        confirmPopup.present();
                        break;
                }
            },
            onChannelItemClick: function (item) {
                var network_type = that.network_check_object.getNetworkType();
                var querystring = new Array("join information_data on information.id = information_data.id where information.id=" +
                    item.id);
                that.database_provider_object
                    .fetchAllData("information", querystring)
                    .then(function (data) {
                    switch (true) {
                        case item.subTopicType == "video" && data[0].localUrl != "":
                            navCtrl.parent.parent.push("InformationVideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "Channel",
                            });
                            break;
                        case item.subTopicType == "video" &&
                            data[0].localUrl == "" &&
                            network_type == "none":
                            that.toast_controller_object
                                .create({
                                message: "This video requires internet connection.",
                                position: "bottom",
                                duration: 5000,
                            })
                                .present();
                            break;
                        case item.subTopicType == "video" &&
                            data[0].localUrl == "" &&
                            network_type != "none":
                            navCtrl.parent.parent.push("InformationVideoDetailsPage", {
                                pageItem: data[0].name,
                                coloR: data[0].hexcodeBase,
                                icondash: data[0].iconName,
                                data: data[0],
                                header: "show",
                                request_from: "video_list",
                                sendTo: "Channel",
                            });
                            break;
                        case item.subTopicType == "image" && item.localUrl != "":
                            that.navCtrl.parent.parent.push("DrawonPage", {
                                drawnurl: item.localUrl,
                                drawOnImgTitle: item.name,
                                drawnCopyright: item.copyrightInfo,
                                drawnSubtopicType: item.subTopicType,
                                video_Name: item.videoName,
                                local_Url: "localUrl",
                            });
                            break;
                        case item.subTopicType == "image" && item.localUrl == "":
                            that.navCtrl.parent.parent.push("DrawonPage", {
                                drawnurl: item.url,
                                drawOnImgTitle: item.name,
                                drawnCopyright: item.copyrightInfo,
                                drawnSubtopicType: item.subTopicType,
                            });
                            break;
                        case item.subTopicType == "document" && item.localUrl != "":
                            var ref = that.in_app_browser_object.create(that.file_object.dataDirectory + item.localUrl, "_blank", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app");
                            ref.on("loadstop").subscribe(function (event) {
                                that.screen_orientation_object.unlock();
                            });
                            ref.on("exit").subscribe(function (event) {
                                that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                            });
                            break;
                        case item.subTopicType == "document" &&
                            item.localUrl == "" &&
                            network_type == "none":
                            that.channelUrlpath = item.url;
                            that.toast_controller_object
                                .create({
                                message: "You are now offline.",
                                position: "bottom",
                                duration: 5000,
                            })
                                .present();
                            break;
                        case item.subTopicType == "document" &&
                            item.localUrl == "" &&
                            network_type != "none":
                            var ref = that.in_app_browser_object.create(item.url, "_blank", "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app");
                            ref.on("loadstop").subscribe(function (event) {
                                that.screen_orientation_object.unlock();
                            });
                            ref.on("exit").subscribe(function (event) {
                                that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                            });
                            break;
                    }
                });
            },
        };
    }
    PlaylistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var user_type = localStorage.getItem("cv5usrType");
        this.newTopicId = localStorage.getItem("dashboard_category_id");
        this.segment_name = localStorage.getItem("segment_name");
        switch (this.newTopicId) {
            case "1":
                this.newtopic_name = "Cardiac";
                break;
            case "2":
                this.newtopic_name = "EP";
                break;
            case "3":
                this.newtopic_name = "Structural";
                break;
            case "4":
                this.newtopic_name = "Vascular";
                break;
            case "5":
                this.newtopic_name = "Heart Health";
                break;
            case "6":
                this.newtopic_name = "Diabetes";
                break;
        }
        var channel_id = localStorage.getItem("channel_id");
        var channel_name = localStorage.getItem("channel_name");
        var shown_Content = "video";
        var json_variable = "";
        var custom_data = [];
        var that = this;
        var live_id = localStorage.getItem("userliveId");
        switch (true) {
            case this.request_from == "search_page":
                this.data.items = this.nav_params_object.get("search_data");
                this.loader.dismiss();
                break;
            case this.segment_name == "information" &&
                this.data_from_tab.id == undefined &&
                this.request_from == "profile_page":
                var query = new Array("WHERE (is_for ='" +
                    user_type +
                    "' OR is_for = 'all') AND isFavourite=1 ORDER BY position DESC");
                this.database_provider_object
                    .fetchAllData("playlists", query)
                    .then(function (data) {
                    _this.data.items = data;
                });
                this.loader.dismiss();
                var playlist_query = new Array(" WHERE user_id=" + live_id);
                this.database_provider_object
                    .fetchAllData("custom_playlist", playlist_query)
                    .then(function (result) {
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](result, function (value, key) {
                        var list_values = JSON.parse(value.list_values);
                        if (list_values.education.length > 0) {
                            var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                list_values.education[0] +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("new_sub_topics", json_query)
                                .then(function (topic_data) {
                                if (topic_data.length > 0) {
                                    that.file_object.readAsArrayBuffer(that.file_object.dataDirectory + "icons/", topic_data[0].imageName).then(function (buffer) {
                                        var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                        result[key].image_url = dataURL;
                                    }).catch(function (e) {
                                        result[key].image_url = topic_data[0].iconUrl;
                                    });
                                }
                            });
                        }
                        else if (list_values.education.length == 0 &&
                            list_values.information.length > 0) {
                            var json_query = new Array(" join information_data on information.id = information_data.id where information.id = " +
                                list_values.information[0] +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("information", json_query)
                                .then(function (info_data) {
                                if (info_data.length > 0) {
                                    that.file_object.readAsArrayBuffer(that.file_object.dataDirectory + "icons/", info_data[0].imageName).then(function (buffer) {
                                        var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                        result[key].image_url = dataURL;
                                    }).catch(function (e) {
                                        result[key].image_url = info_data[0].iconUrl;
                                    });
                                }
                            });
                        }
                    });
                    _this.data.playlist_items = result;
                });
                break;
            case this.segment_name == "information" &&
                this.data_from_tab.id == undefined &&
                this.request_from != "profile_page":
                var querystring = new Array(" WHERE name='" + this.newtopic_name + "' AND type='info_listing'");
                this.database_provider_object
                    .fetchAllData("custom_listing", querystring)
                    .then(function (info_custom_listing_data) {
                    var list_json_value = JSON.parse(info_custom_listing_data[0].list_values);
                    var json_variable = list_json_value.Expert;
                    _this.listlength = list_json_value.Expert;
                    var that = _this;
                    var info_custom_data = [];
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](json_variable, function (value, index) {
                        var json_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                            value +
                            " AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");
                        that.database_provider_object
                            .fetchAllData("information", json_query)
                            .then(function (info_topic_data) {
                            info_custom_data.push(info_topic_data[0]);
                        });
                    });
                    setTimeout(function () {
                        _this.data.items = info_custom_data;
                        _this.loader.dismiss();
                    }, 2000);
                });
                break;
            case this.segment_name == "education" &&
                this.data_from_tab.id == undefined &&
                this.request_from == "profile_page":
                var query = new Array("WHERE (is_for ='" +
                    user_type +
                    "' OR is_for = 'all') AND isFavourite=1 ORDER BY position DESC");
                this.database_provider_object
                    .fetchAllData("playlists", query)
                    .then(function (data) {
                    _this.data.items = data;
                });
                this.loader.dismiss();
                var playlist_query = new Array(" WHERE user_id=" + live_id);
                this.database_provider_object
                    .fetchAllData("custom_playlist", playlist_query)
                    .then(function (result) {
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](result, function (value, key) {
                        var list_values = JSON.parse(value.list_values);
                        if (list_values.education.length > 0) {
                            var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                list_values.education[0] +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("new_sub_topics", json_query)
                                .then(function (topic_data) {
                                if (topic_data.length > 0) {
                                    that.file_object.readAsArrayBuffer(that.file_object.dataDirectory + "icons/", topic_data[0].imageName).then(function (buffer) {
                                        var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                        result[key].image_url = dataURL;
                                    }).catch(function (e) {
                                        result[key].image_url = topic_data[0].iconUrl;
                                    });
                                }
                            });
                        }
                        else if (list_values.education.length == 0 &&
                            list_values.information.length > 0) {
                            var json_query = new Array(" join information_data on information.id = information_data.id where information.id = " +
                                list_values.information[0] +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("information", json_query)
                                .then(function (info_data) {
                                if (info_data.length > 0) {
                                    that.file_object.readAsArrayBuffer(that.file_object.dataDirectory + "icons/", info_data[0].imageName).then(function (buffer) {
                                        var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                        result[key].image_url = dataURL;
                                    }).catch(function (e) {
                                        result[key].image_url = info_data[0].iconUrl;
                                    });
                                }
                            });
                        }
                    });
                    _this.data.playlist_items = result;
                });
                break;
            case this.segment_name == "education" &&
                this.data_from_tab.id == undefined &&
                this.request_from != "profile_page":
                var querystring = new Array(" WHERE name='" + this.newtopic_name + "' AND type='listing'");
                this.database_provider_object
                    .fetchAllData("custom_listing", querystring)
                    .then(function (custom_listing_data) {
                    var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                    _this.listlength = list_json_value.Condition;
                    var that = _this;
                    var custom_data = [];
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](list_json_value.Condition, function (value, index) {
                        var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                            value +
                            " AND isActive = 1");
                        that.database_provider_object
                            .fetchAllData("new_sub_topics", json_query)
                            .then(function (topic_data) {
                            custom_data.push(topic_data[0]);
                        });
                    });
                    setTimeout(function () {
                        _this.data.items = custom_data;
                        _this.loader.dismiss();
                    }, 2000);
                });
                break;
            case this.segment_name == "education" && this.data_from_tab.id != "":
                var query = new Array("WHERE topic_id=" +
                    this.data_from_tab.id +
                    " AND (is_for ='" +
                    user_type +
                    "' OR is_for = 'all')  ORDER BY position DESC");
                this.database_provider_object
                    .fetchAllData("playlists", query)
                    .then(function (data) {
                    _this.data.items = data;
                });
                this.loader.dismiss();
                break;
            case this.segment_name == "channel" &&
                this.data_from_tab.id == undefined &&
                this.request_from == "profile_page":
                var query = new Array("WHERE (is_for ='" +
                    user_type +
                    "' OR is_for = 'all') AND isFavourite=1 ORDER BY position DESC");
                this.database_provider_object
                    .fetchAllData("playlists", query)
                    .then(function (data) {
                    _this.data.items = data;
                });
                this.loader.dismiss();
                var playlist_query = new Array(" WHERE user_id=" + live_id);
                this.database_provider_object
                    .fetchAllData("custom_playlist", playlist_query)
                    .then(function (result) {
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](result, function (value, key) {
                        var list_values = JSON.parse(value.list_values);
                        if (list_values.education.length > 0) {
                            var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                                list_values.education[0] +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("new_sub_topics", json_query)
                                .then(function (topic_data) {
                                if (topic_data.length > 0) {
                                    that.file_object.readAsArrayBuffer(that.file_object.dataDirectory + "icons/", topic_data[0].imageName).then(function (buffer) {
                                        var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                        result[key].image_url = dataURL;
                                    }).catch(function (e) {
                                        result[key].image_url = topic_data[0].iconUrl;
                                    });
                                }
                            });
                        }
                        else if (list_values.education.length == 0 &&
                            list_values.information.length > 0) {
                            var json_query = new Array(" join information_data on information.id = information_data.id where information.id = " +
                                list_values.information[0] +
                                " AND isActive = 1");
                            that.database_provider_object
                                .fetchAllData("information", json_query)
                                .then(function (info_data) {
                                if (info_data.length > 0) {
                                    that.file_object.readAsArrayBuffer(that.file_object.dataDirectory + "icons/", info_data[0].imageName).then(function (buffer) {
                                        var dataURL = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
                                        result[key].image_url = dataURL;
                                    }).catch(function (e) {
                                        result[key].image_url = info_data[0].iconUrl;
                                    });
                                }
                            });
                        }
                    });
                    _this.data.playlist_items = result;
                });
                break;
            case this.segment_name == "channel" &&
                (this.data_from_tab.id != "" || this.request_from != "profile_page") &&
                shown_Content == "video":
                var querystring = new Array(" WHERE name='" + channel_name + "' AND type='channel'");
                this.database_provider_object
                    .fetchAllData("custom_listing", querystring)
                    .then(function (custom_listing_data) {
                    var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                    json_variable = list_json_value.video;
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](json_variable, function (value, index) {
                        var json_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                            value +
                            " AND isActive = 1 AND information.subTopicType='" +
                            shown_Content +
                            "'");
                        that.database_provider_object
                            .fetchAllData("information", json_query)
                            .then(function (infotopic_data) {
                            custom_data.push(infotopic_data[0]);
                        });
                    });
                    setTimeout(function () {
                        that.listlength = custom_data;
                        that.data.items = custom_data;
                    }, 500);
                });
                break;
            case this.segment_name == "channel" &&
                (this.data_from_tab.id != "" || this.request_from != "profile_page") &&
                shown_Content == "document":
                var querystring = new Array(" WHERE name='" + channel_name + "' AND type='channel'");
                this.database_provider_object
                    .fetchAllData("custom_listing", querystring)
                    .then(function (custom_listing_data) {
                    var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                    json_variable = list_json_value.document;
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](json_variable, function (value, index) {
                        var json_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                            value +
                            " AND isActive = 1 AND information.subTopicType='" +
                            shown_Content +
                            "'");
                        that.database_provider_object
                            .fetchAllData("information", json_query)
                            .then(function (infotopic_data) {
                            custom_data.push(infotopic_data[0]);
                        });
                    });
                    setTimeout(function () {
                        that.listlength = custom_data;
                        that.data.items = custom_data;
                    }, 500);
                });
                break;
            case this.segment_name == "channel" &&
                (this.data_from_tab.id != "" || this.request_from != "profile_page") &&
                shown_Content == "image":
                var querystring = new Array(" WHERE name='" + channel_name + "' AND type='channel'");
                this.database_provider_object
                    .fetchAllData("custom_listing", querystring)
                    .then(function (custom_listing_data) {
                    var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                    json_variable = list_json_value.image;
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](json_variable, function (value, index) {
                        var json_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                            value +
                            " AND isActive = 1 AND information.subTopicType='" +
                            shown_Content +
                            "'");
                        that.database_provider_object
                            .fetchAllData("information", json_query)
                            .then(function (infotopic_data) {
                            custom_data.push(infotopic_data[0]);
                        });
                    });
                    setTimeout(function () {
                        that.listlength = custom_data;
                        that.data.items = custom_data;
                    }, 500);
                });
                break;
            case this.segment_name == "channel" &&
                (this.data_from_tab.id != "" || this.request_from != "profile_page") &&
                shown_Content == "other":
                var querystring = new Array(" WHERE name='" + channel_name + "' AND type='channel'");
                this.database_provider_object
                    .fetchAllData("custom_listing", querystring)
                    .then(function (custom_listing_data) {
                    var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                    json_variable = list_json_value.other;
                    __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](json_variable, function (value, index) {
                        var json_query = new Array("join information_data on information.id = information_data.id where information.id = " +
                            value +
                            " AND isActive = 1 AND information.subTopicType='" +
                            shown_Content +
                            "'");
                        that.database_provider_object
                            .fetchAllData("information", json_query)
                            .then(function (infotopic_data) {
                            custom_data.push(infotopic_data[0]);
                        });
                    });
                    setTimeout(function () {
                        that.listlength = custom_data;
                        that.data.items = custom_data;
                    }, 500);
                });
                break;
        }
    };
    PlaylistPage.prototype.ionViewWillLeave = function () {
        this.network_check_object.getPageAction("PlaylistPage", "end", "", localStorage.getItem("cv5usrType"));
    };
    PlaylistPage.prototype.onEvent = function (event, item, e, video) {
        if (e) {
            e.stopPropagation();
        }
        if (event == "onPlay" && video) {
            this.events[event](item, video);
        }
        else if (this.events[event]) {
            this.events[event](item);
        }
    };
    PlaylistPage.prototype.toggleGroup = function (group) {
        group.show = !group.show;
        if (group.show === true) {
            this.loader = this.loading_controller_object.create({
                spinner: "crescent",
            });
            this.loader.present();
            var subtopics_id = group.sub_topic_ids;
            subtopics_id = subtopics_id.split(", ");
            console.log("subtopics_id-->" + subtopics_id);
            var that = this;
            var data1 = [];
            that.test = [];
            __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](subtopics_id, function (value, index) {
                var query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                    value +
                    " AND isActive = 1");
                that.database_provider_object
                    .fetchAllData("new_sub_topics", query)
                    .then(function (data) {
                    if (data.length > 0) {
                        that.test.push(data[0]);
                    }
                });
            });
            //console.log(' this.data1-->'+JSON.stringify(that.test));
            group.items = that.test;
            this.loader.dismiss();
        }
    };
    PlaylistPage.prototype.isGroupShown = function (group) {
        return group.show;
    };
    PlaylistPage.prototype.markPlaylistasFavorite = function (group) {
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
                if (group.isFavourite == 0) {
                    _this.storage_object.get("user_logged_in").then(function (val) {
                        _this.database_provider_object.setPlaylistFavorites(val, group.id);
                        //this.toast_service_object.presentToast("Added To My Playlists.");
                        _this.toast_service_object.presentToast("Added To Favorite Playlists.");
                    });
                }
                else {
                    _this.storage_object.get("user_logged_in").then(function (val) {
                        _this.database_provider_object.setPlaylistFavorites(val, group.id);
                        //this.toast_service_object.presentToast("Removed From My Playlists.");
                        _this.toast_service_object.presentToast("Removed From Favorite Playlists.");
                    });
                }
                group.isFavourite = !group.isFavourite;
            }
        });
    };
    PlaylistPage.prototype.markasFavorite = function (group, from_table) {
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
    PlaylistPage.prototype.isDownloadVideoMultiple = function (from_table) {
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
                var que_ids = from_table == "education"
                    ? localStorage.getItem("Downloadque")
                    : localStorage.getItem("InfoDownloadque");
                var progress_ids_arr = que_ids.split(",").map(Number);
                progress_ids_arr = __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["uniq"](progress_ids_arr);
                que_ids = progress_ids_arr.toString();
                if (from_table == "education") {
                    localStorage.setItem("Downloadque", que_ids);
                }
                else if (from_table == "information") {
                    localStorage.setItem("InfoDownloadque", que_ids);
                }
                var progress_id = progress_ids_arr[0];
                if (progress_id == 0) {
                    progress_id = progress_ids_arr[1];
                }
                _this.download_status = "inprogress";
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
                        __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        if (from_table == "education") {
                            localStorage.setItem("Downloadque", que_ids);
                        }
                        else if (from_table == "information") {
                            localStorage.setItem("InfoDownloadque", que_ids);
                        }
                        _this.toast_service_object.presentToast('"' + item.name + '" already downloaded.');
                        if (que_ids == "") {
                            if (from_table == "education") {
                                localStorage.setItem("Downloadque", "");
                            }
                            else if (from_table == "information") {
                                localStorage.setItem("InfoDownloadque", "");
                            }
                        }
                        _this.download_status = "complete";
                    }
                    else {
                        _this.toast_service_object.mypresentToast('Downloading: "' + item.name + '"', 2000);
                        _this.video_share_provider_object.downloadVideo(item, "Education");
                        var filename = item.url.split("/").pop();
                        fileTransfer.onProgress(function (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                _this.isDownloading = true;
                                var perc = (progressEvent.loaded / progressEvent.total) * 100;
                                _this.perc1 = perc.toFixed(1);
                                var loader = document.getElementById("progressBar_" + item.id);
                                loader.style.background = "#fff";
                                loader.innerHTML = _this.perc1 + "%";
                                //var loader1 = document.getElementById("static_download_prog");
                                //loader1.innerHTML = 'Downloading is in progress...';
                                //loader1.style.padding = '10px';
                                //loader1.style.display = 'block';
                                if (_this.perc1 == 100) {
                                    loader.innerHTML = "";
                                    loader.style.background = "";
                                    //loader1.innerHTML = '';
                                    //loader1.style.padding = '';
                                    //loader1.style.display = '';
                                    var loader3 = document.getElementById("download_" + item.id);
                                    loader3.classList.add("active");
                                }
                            }
                        });
                        fileTransfer
                            .download(item.url, _this.file_object.dataDirectory + "V2CardioMedia/" + filename)
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
                            _this.downloadfile(item.iconUrl, iconfilename, item.id, from_table);
                            _this.downloadapi(item.id, _this.userdata.liveId, from_table);
                            _this.toast_service_object.mypresentToast('Finished downloading: "' + item.name + '"', 2000);
                            _this.download_status = "complete";
                            var loader3 = document.getElementById("download_" + item.id);
                            loader3.classList.add("active");
                            if (item.downloaded == 0)
                                item.downloaded = 1;
                            _this.download_status = "complete";
                            //this.toast_dismiss();
                        }, function (error) {
                            _this.toast_service_object.presentToast("Download failed! please try again.");
                        });
                        var new_ids_arr = que_ids.split(",").map(Number);
                        var test_arr = [];
                        __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["each"](new_ids_arr, function (value, key) {
                            if (value != item.id) {
                                test_arr.push(value);
                            }
                        });
                        que_ids = test_arr.toString();
                        if (from_table == "education") {
                            localStorage.setItem("Downloadque", que_ids);
                        }
                        else if (from_table == "information") {
                            localStorage.setItem("InfoDownloadque", que_ids);
                        }
                        _this.download_status = "complete";
                    }
                    if (que_ids != "") {
                        _this.isDownloadVideoMultiple(from_table);
                    }
                    else if (que_ids == "") {
                        if (from_table == "education") {
                            localStorage.setItem("Downloadque", "");
                        }
                        else if (from_table == "information") {
                            localStorage.setItem("InfoDownloadque", "");
                        }
                    }
                }, function (e) {
                    //console.log('586 error '+JSON.stringify(e))
                });
            }
        });
    };
    PlaylistPage.prototype.downloadfile = function (url, name, id, from_table) {
        var _this = this;
        var fileTransfer = this.file_transfer_object.create();
        fileTransfer
            .download(url, this.file_object.dataDirectory + "icons/" + name)
            .then(function (entry) {
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
    PlaylistPage.prototype.downloadapi = function (groupid, userid, from_table) {
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
    // goToCusomPlaylistList(item){
    // 	this.navCtrl.push('ItemDetailsPageTabs',{pageItem:item.name, data:item, request_from:'custom_playlist'});
    // }
    PlaylistPage.prototype.goToCusomPlaylistList = function (item, event) {
        var _this = this;
        var playlist_query = new Array(" WHERE id=" + item.id);
        this.database_provider_object
            .fetchAllData("custom_playlist", playlist_query)
            .then(function (result) {
            item.list_values = result[0].list_values;
            _this.navCtrl.push("ItemDetailsPageTabs", {
                pageItem: item.name,
                data: item,
                request_from: "custom_playlist",
            });
        });
        event.stopPropagation();
    };
    PlaylistPage.prototype.playListDelete = function (item, event) {
        var _this = this;
        var network_type = this.network_check_object.getNetworkType();
        if (network_type == "none") {
            this.toast_controller_object
                .create({
                message: "please check your internet connection",
                position: "bottom",
                duration: 5000,
            })
                .present();
        }
        else {
            this.database_provider_object.deleteRecords("DELETE FROM custom_playlist WHERE id='" +
                item.id +
                "' AND user_id=" +
                localStorage.getItem("userliveId"));
            this.http_object
                .delete(this.localapi + "/api/userplaylists/" + item.id)
                .subscribe(function (resp) {
                _this.toast_service_object.mycustomToast('Your playlist  "' + item.name + '" removed from list.', 2500);
                item.playListShown = 0;
            }, function (error) {
                //alert('error occur, delete fail '+JSON.stringify(error));
            });
        }
        event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], PlaylistPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Tabs */])
    ], PlaylistPage.prototype, "tabRef", void 0);
    PlaylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-playlist",template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\playlist\playlist.html"*/'<ion-header\n\n  clean-header\n\n  class="headerColor"\n\n  [isTabs]="true"\n\n  [hideMenu]="true"\n\n  *ngIf="request_from ==\'profile_page\' || request_from ==\'search_page\'\n\n"\n\n></ion-header>\n\n\n\n<!---Settings TAB lauout-5-->\n\n<!-- Theme List big image -->\n\n\n\n<ion-content\n\n  class="cardicDevice"\n\n  no-padding\n\n  *ngIf="(data_from_tab.id != undefined || request_from ==\'profile_page\' || request_from ==\'search_page\')"\n\n  style="background-color: #fff !important; top: -3px"\n\n  [ngClass]="{\'top_margin\': (request_from !=\'profile_page\')}"\n\n>\n\n  <ion-grid\n\n    no-padding\n\n    *ngIf="data != null"\n\n    [ngClass]="{\'playlistwithtab\' : request_from!=\'profile_page\' && request_from !=\'search_page\'}"\n\n    style="margin-bottom: 65% !important"\n\n  >\n\n    <div\n\n      col-12\n\n      style="\n\n        font-size: 1.4em;\n\n        font-weight: bold;\n\n        text-align: center;\n\n        background-color: #f0f0f0;\n\n        padding: 15px;\n\n      "\n\n      *ngIf="request_from ==\'profile_page\'"\n\n    >\n\n      My Playlists\n\n    </div>\n\n    <div\n\n      col-12\n\n      style="\n\n        font-size: 1.4em;\n\n        font-weight: bold;\n\n        text-align: center;\n\n        background-color: #c54333;\n\n        padding: 15px;\n\n        color: #fff;\n\n      "\n\n      *ngIf="request_from ==\'search_page\'"\n\n    >\n\n      Playlists\n\n    </div>\n\n\n\n    <ion-list no-margin no-padding>\n\n      <ul no-margin no-padding class="collapsible">\n\n        <li *ngFor="let group of data.items;">\n\n          <!-- List big image Header -->\n\n          <div\n\n            tappable\n\n            class="collapsible-header playlist_header"\n\n            (click)="toggleGroup(group)"\n\n            style=""\n\n          >\n\n            <ion-item\n\n              tappable\n\n              no-padding\n\n              no-margin\n\n              style="background-color: #ffffff; height: 135px"\n\n              [ngClass]="{\'hide_row\': group.isFavourite == 0 && request_from ==\'profile_page\'}"\n\n            >\n\n              <ion-thumbnail item-start no-margin style="" class="rectanglImg">\n\n                <div class="thumbnilBackground">\n\n                  <!-- width: 176px !important;height: 99px !important; margin-left:5px; -->\n\n                  <img\n\n                    src="{{group.URL}}"\n\n                    alt="{{group.title}}"\n\n                    style="\n\n                      width: 128px !important;\n\n                      height: 72px !important;\n\n                      border: 1px solid black;\n\n                    "\n\n                    class="rectangl_img"\n\n                  />\n\n\n\n                  <i\n\n                    *ngIf="group.subTopicType == \'video\'"\n\n                    class="icon-play subtopic-card-img-icon"\n\n                    [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                    style="\n\n                      position: relative;\n\n                      left: 7px;\n\n                      bottom: 23px;\n\n                      color: #fff;\n\n                    "\n\n                  ></i>\n\n                  <i\n\n                    *ngIf="group.subTopicType == \'image\'"\n\n                    class="icon-pencil subtopic-card-img-icon"\n\n                    [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                    style="\n\n                      position: relative;\n\n                      left: 7px;\n\n                      bottom: 23px;\n\n                      color: #fff;\n\n                    "\n\n                  ></i>\n\n                  <i\n\n                    *ngIf="group.subTopicType == \'infographic\'"\n\n                    class="icon-sheet subtopic-card-img-icon"\n\n                    [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                    style="\n\n                      position: relative;\n\n                      left: 7px;\n\n                      bottom: 23px;\n\n                      color: #fff;\n\n                    "\n\n                  ></i>\n\n                </div>\n\n              </ion-thumbnail>\n\n              <h2\n\n                padding-left\n\n                item-title\n\n                class="item-text-wrap"\n\n                style="white-space: normal"\n\n              >\n\n                <b class="item-text-wrap">{{group.name}}</b>\n\n              </h2>\n\n\n\n              <h3 padding-left>{{group.description}}</h3>\n\n\n\n              <p\n\n                class="tab-desc-size"\n\n                padding-left\n\n                item-subtitle\n\n                *ngIf="group.long_description != \'\' && group.long_description !=\'null\'"\n\n              >\n\n                <span\n\n                  *ngIf="group.long_description.length < 76"\n\n                  style="white-space: normal; word-wrap: break-word"\n\n                  >{{group.long_description}}</span\n\n                >\n\n                <span\n\n                  *ngIf="group.long_description.length > 75"\n\n                  style="white-space: normal; word-wrap: break-word"\n\n                  >{{group.long_description.slice(0,75)}}...</span\n\n                >\n\n              </p>\n\n\n\n              <div\n\n                tappable\n\n                float-right\n\n                style="position: absolute; top: 110px; right: 5px; color: #ccc"\n\n                class=""\n\n                [ngClass]="{\'shareContentForios\' : request_from!=\'profile_page\' && request_from !=\'search_page\'}"\n\n              >\n\n                <ion-icon\n\n                  class="gapfor_Favrticon"\n\n                  style=""\n\n                  *ngIf="request_from !=\'profile_page\'"\n\n                >\n\n                  <i\n\n                    class="icon icon-cardio-like"\n\n                    (click)="onEvent(\'onPlaylistFavorite\', group, $event)"\n\n                    [ngClass]="{\'active\': group.isFavourite}"\n\n                    [style.color]="(group.isFavourite == 1) ? \'#c54334\' : \'#CCC\'"\n\n                  ></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon\n\n                  class="gapfor_Favrticon"\n\n                  style=""\n\n                  *ngIf="request_from ==\'profile_page\'"\n\n                >\n\n                  <i\n\n                    class="icon icon-cardio-like"\n\n                    (click)="onEvent(\'onPlaylistFavorite\', group, $event)"\n\n                    [ngClass]="{\'active\': group.isFavourite}"\n\n                    [style.color]="(group.isFavourite == 1) ? \'#c54334\' : \'#CCC\'"\n\n                  ></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon\n\n                  *ngIf="request_from !=\'profile_page\'"\n\n                  class="gapfor_PlayAllicon"\n\n                  style=""\n\n                  (click)="onEvent(\'onPlay\', group, $event)"\n\n                >\n\n                  <i\n\n                    style="color: #000 !important"\n\n                    class="icon-list-play-all new-font-icons-playlist"\n\n                  ></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon\n\n                  *ngIf="request_from ==\'profile_page\'"\n\n                  class="gapfor_PlayAllicon"\n\n                  style=""\n\n                  (click)="onEvent(\'onPlay\', group, $event)"\n\n                >\n\n                  <i\n\n                    style="color: #000 !important"\n\n                    class="icon-list-play-all new-font-icons-playlist"\n\n                  ></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon\n\n                  *ngIf="request_from !=\'profile_page\'"\n\n                  class="gapfor_sharicon"\n\n                  style=""\n\n                  (click)="onEvent(\'onShare\', group, $event)"\n\n                >\n\n                  <i\n\n                    style="font-size: 1.2em"\n\n                    *ngIf="group.shareUrl != null"\n\n                    class="icon icon-list-share"\n\n                  ></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon\n\n                  *ngIf="request_from ==\'profile_page\'"\n\n                  class="gapfor_sharicon"\n\n                  style=""\n\n                  (click)="onEvent(\'onShare\', group, $event)"\n\n                >\n\n                  <i\n\n                    style="font-size: 1.2em"\n\n                    *ngIf="group.shareUrl != null"\n\n                    class="icon icon-list-share"\n\n                  ></i>\n\n                </ion-icon>\n\n              </div>\n\n            </ion-item>\n\n          </div>\n\n          <!-- List big image Body -->\n\n          <div\n\n            class="item-accordion"\n\n            [ngClass]="{\'active\': isGroupShown(group) }"\n\n            [hidden]="!isGroupShown(group)"\n\n          >\n\n            <ion-item\n\n              tappable\n\n              no-lines\n\n              *ngFor="let item of group.items;"\n\n              (click)="onEvent(\'onPlay\', group, $event, item)"\n\n              style="color: #fff; background-color: #e6e7e8; height: 150px"\n\n            >\n\n              <ion-thumbnail item-start no-margin class="rectanglImg">\n\n                <div class="thumbnilBackground">\n\n                  <img\n\n                    *ngIf="item.localIconUrl ==\'\' || imgSHownOnline !=\'none\'"\n\n                    src="{{item.iconUrl}}"\n\n                    style=""\n\n                    alt="{{item.title}}"\n\n                    class="rectangl_img"\n\n                  />\n\n                  <img\n\n                    *ngIf="item.localIconUrl !=\'\' && imgSHownOnline ==\'none\'"\n\n                    src="{{path}}{{item.localIconUrl}}"\n\n                    style=""\n\n                    alt="{{item.title}}"\n\n                    class="rectangl_img"\n\n                  />\n\n                  <div\n\n                    class="bottom-left-1"\n\n                    style="position: absolute; bottom: 36px; left: 20px"\n\n                  >\n\n                    <i\n\n                      *ngIf="item.subTopicType == \'video\'"\n\n                      class="icon-play subtopic-card-img-icon"\n\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }"\n\n                      style="color: #fff; font-size: 30px"\n\n                    ></i>\n\n                    <i\n\n                      *ngIf="item.subTopicType == \'image\'"\n\n                      class="icon-pencil subtopic-card-img-icon"\n\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }"\n\n                      style="color: #fff; font-size: 20px"\n\n                    ></i>\n\n                    <i\n\n                      *ngIf="item.subTopicType == \'infographic\'"\n\n                      class="icon-sheet subtopic-card-img-icon"\n\n                      [ngStyle]="{\'backgroundColor\': item.hexcodeContrast }"\n\n                      style="color: #fff; font-size: 20px"\n\n                    ></i>\n\n                  </div>\n\n                </div>\n\n              </ion-thumbnail>\n\n\n\n              <h2\n\n                padding-left\n\n                item-title\n\n                class="item-text-wrap"\n\n                style="font-size: 1.4rem !important; white-space: normal"\n\n              >\n\n                <b class="38" style="color: #000">{{item.title}}</b>\n\n              </h2>\n\n              <p\n\n                class="tab-desc-size"\n\n                padding-left\n\n                item-subtitle\n\n                *ngIf="item.description != \'\' && item.description !=\'null\'"\n\n              >\n\n                <span\n\n                  *ngIf="item.description.length < 76"\n\n                  style="white-space: normal; word-wrap: break-word"\n\n                  >{{item.description}}</span\n\n                >\n\n                <span\n\n                  *ngIf="item.description.length > 75"\n\n                  style="white-space: normal; word-wrap: break-word"\n\n                  >{{item.description.slice(0, 75)}}...</span\n\n                >\n\n              </p>\n\n            </ion-item>\n\n          </div>\n\n          <!--end-->\n\n        </li>\n\n        <li *ngFor="let group of data.playlist_items;">\n\n          <!-- List big image Header -->\n\n          <div\n\n            tappable\n\n            class="collapsible-header playlist_header"\n\n            (click)="goToCusomPlaylistList(group, $event)"\n\n            style=""\n\n          >\n\n            <ion-item\n\n              tappable\n\n              no-padding\n\n              style="background-color: #ffffff; height: 135px; margin-left: 5px"\n\n              [ngClass]="{\'hide_row\': group.playListShown == 0}"\n\n            >\n\n              <ion-thumbnail\n\n                item-start\n\n                no-margin\n\n                no-padding\n\n                class="rectanglImg"\n\n              >\n\n                <div class="thumbnilBackground">\n\n                  <img\n\n                    src="{{group.image_url}}"\n\n                    alt="{{group.title}}"\n\n                    style="\n\n                      width: 128px !important;\n\n                      height: 72px !important;\n\n                      border: 1px solid black;\n\n                    "\n\n                    class="rectangl_img"\n\n                  />\n\n\n\n                  <i\n\n                    *ngIf="group.subTopicType == \'video\'"\n\n                    class="icon-play subtopic-card-img-icon"\n\n                    [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                    style="\n\n                      position: relative;\n\n                      left: 7px;\n\n                      bottom: 23px;\n\n                      color: #fff;\n\n                    "\n\n                  ></i>\n\n                  <i\n\n                    *ngIf="group.subTopicType == \'image\'"\n\n                    class="icon-pencil subtopic-card-img-icon"\n\n                    [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                    style="\n\n                      position: relative;\n\n                      left: 7px;\n\n                      bottom: 23px;\n\n                      color: #fff;\n\n                    "\n\n                  ></i>\n\n                  <i\n\n                    *ngIf="group.subTopicType == \'infographic\'"\n\n                    class="icon-sheet subtopic-card-img-icon"\n\n                    [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                    style="\n\n                      position: relative;\n\n                      left: 7px;\n\n                      bottom: 23px;\n\n                      color: #fff;\n\n                    "\n\n                  ></i>\n\n                </div>\n\n              </ion-thumbnail>\n\n              <div padding-left class="customePlaylistName">\n\n                <h2\n\n                  item-title\n\n                  class="item-text-wrap"\n\n                  style="white-space: normal"\n\n                >\n\n                  <b class="item-text-wrap">{{group.name}} </b>\n\n                </h2>\n\n                <h3>Custom Playlist</h3>\n\n              </div>\n\n\n\n              <!-- <p class="tab-desc-size" padding-left item-subtitle *ngIf="group.long_description != \'\' && group.long_description !=\'null\'">\n\n                <span *ngIf="group.long_description.length < 76" style="white-space: normal;word-wrap: break-word;">{{group.long_description}}</span>\n\n                <span *ngIf="group.long_description.length > 75"  style="white-space: normal;word-wrap: break-word;">{{group.long_description.slice(0,75)}}...</span>\n\n              </p> -->\n\n\n\n              <div tappable float-right style="">\n\n                <!-- <ion-icon *ngIf="request_from !=\'profile_page\'" style="position:relative;right:16px;" (click)="goToCusomPlaylistList(group, $event)"  >\n\n                  <i style="color: #000 !important;" class="icon-list-play-all new-font-icons-playlist" ></i>\n\n                </ion-icon>-->\n\n                <ion-icon\n\n                  *ngIf="request_from ==\'profile_page\'"\n\n                  style="position: relative; right: 50px; bottom: 12px"\n\n                >\n\n                  <i\n\n                    style="color: #000 !important"\n\n                    class="icon-list-play-all new-font-icons-playlist"\n\n                  ></i>\n\n                  <ion-icon\n\n                    name="trash"\n\n                    (click)="playListDelete(group, $event)"\n\n                    class="playlistDelete"\n\n                  ></ion-icon>\n\n                </ion-icon>\n\n\n\n                <!-- <ion-icon *ngIf="request_from !=\'profile_page\'" style="position:relative; right:4px;"  (click)="onEvent(\'onShare\', group, $event)">\n\n                  <i style="font-size:1.2em;" *ngIf="group.shareUrl != null" class="icon icon-list-share"></i>\n\n                </ion-icon>\n\n\n\n                <ion-icon *ngIf="request_from ==\'profile_page\'" style="position:absolute; right:14px;bottom:12px;"  (click)="onEvent(\'onShare\', group, $event)">\n\n                  <i style="font-size:1.2em;" *ngIf="group.shareUrl != null" class="icon icon-list-share"></i>\n\n                </ion-icon> -->\n\n              </div>\n\n            </ion-item>\n\n          </div>\n\n        </li>\n\n      </ul>\n\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-content\n\n  style=""\n\n  ontouchstart=""\n\n  class="cardiacTreat"\n\n  *ngIf="segment_name == \'education\' && data_from_tab.id == undefined && request_from == undefined"\n\n>\n\n  <!-- <div id="static_download_prog"  class="inner-pg-download-banner" style="color:red; text-align:center !important;margin:0;display:block;">\n\n  </div> -->\n\n  <ion-grid\n\n    class=""\n\n    no-padding\n\n    *ngIf="data.items != null"\n\n    style="margin-bottom: 50%"\n\n  >\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list no-margin *ngIf="data.items">\n\n          <ul no-margin no-padding class="collapsible">\n\n            <li *ngFor="let group of data.items">\n\n              <!-- List big image Header -->\n\n              <ion-item\n\n                tappable\n\n                no-padding\n\n                class="ion-item-border itemClassHeight"\n\n                (click)="onEvent(\'onItemClick\', group, $event)"\n\n                *ngIf="segment_name == \'education\'"\n\n              >\n\n                <ion-thumbnail item-start no-margin class="rectanglImg">\n\n                  <div class="thumbnilBackground">\n\n                    <!-- <img [src]="group.iconUrl" alt="{{group.name}}" style="width: auto !important;" /> -->\n\n                    <img\n\n                      *ngIf="group.localIconUrl ==\'\' || imgSHownOnline !=\'none\'"\n\n                      [src]="group.iconUrl"\n\n                      alt="{{group.name}}"\n\n                      class="rectangl_img"\n\n                    />\n\n                    <img\n\n                      *ngIf="group.localIconUrl !=\'\' && imgSHownOnline ==\'none\'"\n\n                      src="{{path}}{{group.localIconUrl}}"\n\n                      alt="{{group.name}}"\n\n                      class="rectangl_img"\n\n                    />\n\n\n\n                    <span\n\n                      id="progressBar_{{group.id}}"\n\n                      style="\n\n                        position: absolute;\n\n                        left: 36px;\n\n                        top: 40px;\n\n                        padding: 3px;\n\n                        height: auto;\n\n                        color: red;\n\n                        text-align: center;\n\n                        font-size: 10px;\n\n                        font-weight: 900;\n\n                        border-radius: 25px;\n\n                      "\n\n                    >\n\n                    </span>\n\n                    <div class="bottom-left">\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'video\'"\n\n                        class="icon-play subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'image\'"\n\n                        class="icon-pencil subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'infographic\'"\n\n                        class="icon-sheet subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                    </div>\n\n                  </div>\n\n                </ion-thumbnail>\n\n\n\n                <h2 padding-left item-title class="item-text-wrap">\n\n                  <b style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.name}}</b\n\n                  >\n\n                </h2>\n\n\n\n                <p\n\n                  class="tab-desc-size"\n\n                  padding-left\n\n                  item-subtitle\n\n                  *ngIf="group.description != \'\' && group.description !=\'null\'"\n\n                >\n\n                  <!-- <span style="white-space: normal;word-wrap: break-word;">{{group.description}}</span> -->\n\n                  <span\n\n                    *ngIf="group.description.length < 76"\n\n                    style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.description}}</span\n\n                  >\n\n                  <span\n\n                    *ngIf="group.description.length > 75"\n\n                    style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.description.slice(0,75)}}...</span\n\n                  >\n\n                </p>\n\n\n\n                <div float-right style="color: #ccc; position: absolute">\n\n                  <ion-icon\n\n                    style=""\n\n                    (click)="onEvent(\'onMultipleDownload\', group, $event)"\n\n                    *ngIf="group.subTopicType != \'image\'"\n\n                    class="tabsharedownload"\n\n                  >\n\n                    <i\n\n                      style=""\n\n                      id="download_{{group.id}}"\n\n                      class="icon-video-icons-download can-download-icon"\n\n                      [ngClass]="(group.localUrl != \'\')?\'active\':\'\'"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon\n\n                    style=""\n\n                    *ngIf="group.subTopicType == \'image\'"\n\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)"\n\n                    class="tabsharedownload"\n\n                  >\n\n                    <i\n\n                      style=""\n\n                      class="icon-video-icons-download can-download-icon"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon style="" class="tabsfavshare">\n\n                    <i\n\n                      class="icon icon-cardio-like"\n\n                      [ngClass]="{\'active\': group.isFavourite}"\n\n                      (click)="onEvent(\'onFavorite\', group, $event)"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon style="" class="tabsfavshare">\n\n                    <i\n\n                      class="icon icon-list-share"\n\n                      (click)="onEvent(\'onShare\', group, $event)"\n\n                    ></i>\n\n                  </ion-icon>\n\n                </div>\n\n              </ion-item>\n\n            </li>\n\n          </ul>\n\n        </ion-list>\n\n\n\n        <!-- \n\n        Our skeleton list which will be rendered when\n\n        our data have not loaded\n\n        -->\n\n        <ion-list *ngIf="!data.items">\n\n          <ion-item\n\n            class="ion-item-border fakeItem"\n\n            style=""\n\n            *ngFor="let i of listlength"\n\n          >\n\n            <ion-avatar item-left>\n\n              <skeleton-item height="95px" width="95px"></skeleton-item>\n\n            </ion-avatar>\n\n            <h2></h2>\n\n            <h3></h3>\n\n            <p></p>\n\n            <p></p>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- Our skeleton end-->\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-content\n\n  style=""\n\n  ontouchstart=""\n\n  class="cardiacTreat"\n\n  *ngIf="segment_name ==\'information\' && data_from_tab.id == undefined && request_from == undefined"\n\n>\n\n  <!-- <div id="static_download_prog"  class="inner-pg-download-banner" style="color:red; text-align:center !important;margin:0;display:block;">\n\n  </div> -->\n\n  <ion-grid\n\n    class=""\n\n    no-padding\n\n    *ngIf="data.items != null"\n\n    style="margin-bottom: 50%"\n\n  >\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list no-margin *ngIf="data.items">\n\n          <ul no-margin no-padding class="collapsible">\n\n            <li *ngFor="let group of data.items">\n\n              <!-- List big image Header -->\n\n\n\n              <ion-item\n\n                tappable\n\n                no-padding\n\n                class="ion-item-border itemClassHeight"\n\n                (click)="onEvent(\'onInfoItemClick\', group, $event)"\n\n                *ngIf="segment_name == \'information\'"\n\n              >\n\n                <ion-thumbnail item-start no-margin class="rectanglImg">\n\n                  <div class="thumbnilBackground">\n\n                    <!-- <img [src]="group.iconUrl" alt="{{group.name}}" style="width: auto !important;" /> -->\n\n                    <img\n\n                      *ngIf="group.localIconUrl ==\'\' || imgSHownOnline !=\'none\'"\n\n                      [src]="group.iconUrl"\n\n                      alt="{{group.name}}"\n\n                      class="rectangl_img"\n\n                    />\n\n                    <img\n\n                      *ngIf="group.localIconUrl !=\'\' && imgSHownOnline ==\'none\'"\n\n                      src="{{path}}{{group.localIconUrl}}"\n\n                      alt="{{group.name}}"\n\n                      class="rectangl_img"\n\n                    />\n\n\n\n                    <span\n\n                      id="progressBar_{{group.id}}"\n\n                      style="\n\n                        position: absolute;\n\n                        left: 36px;\n\n                        top: 40px;\n\n                        padding: 3px;\n\n                        height: auto;\n\n                        color: red;\n\n                        text-align: center;\n\n                        font-size: 10px;\n\n                        font-weight: 900;\n\n                        border-radius: 25px;\n\n                      "\n\n                    >\n\n                    </span>\n\n                    <div class="bottom-left">\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'video\'"\n\n                        class="icon-play subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'image\'"\n\n                        class="icon-pencil subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'infographic\'"\n\n                        class="icon-sheet subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                    </div>\n\n                  </div>\n\n                </ion-thumbnail>\n\n\n\n                <h2 padding-left item-title class="item-text-wrap">\n\n                  <b style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.name}}</b\n\n                  >\n\n                </h2>\n\n\n\n                <p\n\n                  class="tab-desc-size"\n\n                  padding-left\n\n                  item-subtitle\n\n                  *ngIf="group.description != \'\' && group.description !=\'null\'"\n\n                >\n\n                  <span\n\n                    *ngIf="group.description.length < 76"\n\n                    style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.description}}</span\n\n                  >\n\n                  <span\n\n                    *ngIf="group.description.length > 75"\n\n                    style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.description.slice(0,75)}}...</span\n\n                  >\n\n                </p>\n\n\n\n                <div float-right style="color: #ccc; position: absolute">\n\n                  <ion-icon\n\n                    style=""\n\n                    (click)="onEvent(\'onInfoMultipleDownload\', group, $event)"\n\n                    *ngIf="group.subTopicType != \'image\'"\n\n                    class="tabsharedownload"\n\n                  >\n\n                    <i\n\n                      style=""\n\n                      id="download_{{group.id}}"\n\n                      class="icon-video-icons-download can-download-icon"\n\n                      [ngClass]="(group.localUrl != \'\')?\'active\':\'\'"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon\n\n                    style=""\n\n                    *ngIf="group.subTopicType == \'image\'"\n\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)"\n\n                    class="tabsharedownload"\n\n                  >\n\n                    <i\n\n                      style=""\n\n                      class="icon-video-icons-download can-download-icon"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon style="" class="tabsfavshare">\n\n                    <i\n\n                      class="icon icon-cardio-like"\n\n                      [ngClass]="{\'active\': group.isFavourite}"\n\n                      (click)="onEvent(\'onInfoFavorite\', group, $event)"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon style="" class="tabsfavshare">\n\n                    <i\n\n                      class="icon icon-list-share"\n\n                      (click)="onEvent(\'onShare\', group, $event)"\n\n                    ></i>\n\n                  </ion-icon>\n\n                </div>\n\n              </ion-item>\n\n            </li>\n\n          </ul>\n\n        </ion-list>\n\n\n\n        <!-- \n\n        Our skeleton list which will be rendered when\n\n        our data have not loaded\n\n        -->\n\n        <ion-list *ngIf="!data.items">\n\n          <ion-item\n\n            class="ion-item-border fakeItem"\n\n            style=""\n\n            *ngFor="let i of listlength"\n\n          >\n\n            <ion-avatar item-left>\n\n              <skeleton-item height="95px" width="95px"></skeleton-item>\n\n            </ion-avatar>\n\n            <h2></h2>\n\n            <h3></h3>\n\n            <p></p>\n\n            <p></p>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- Our skeleton end-->\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-content\n\n  style=""\n\n  ontouchstart=""\n\n  class="cardiacTreat"\n\n  *ngIf="segment_name ==\'channel\' && data_from_tab.id == undefined && request_from == undefined"\n\n>\n\n  <!-- <div id="static_download_prog"  class="inner-pg-download-banner" style="color:red; text-align:center !important;margin:0;display:block;">\n\n  </div> -->\n\n  <ion-grid\n\n    class=""\n\n    no-padding\n\n    *ngIf="data.items != null"\n\n    style="margin-bottom: 50%"\n\n  >\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list no-margin *ngIf="data.items">\n\n          <ul no-margin no-padding class="collapsible">\n\n            <li *ngFor="let group of data.items">\n\n              <!-- List big image Header -->\n\n              <ion-item\n\n                tappable\n\n                class="ion-item-border itemClassHeight"\n\n                (click)="onEvent(\'onChannelItemClick\', group, $event)"\n\n              >\n\n                <ion-thumbnail item-start no-margin class="rectanglImg">\n\n                  <div class="thumbnilBackground">\n\n                    <!-- <img [src]="group.iconUrl" alt="{{group.name}}" style="width: auto !important;" /> -->\n\n                    <img\n\n                      *ngIf="group.localIconUrl ==\'\' || imgSHownOnline != \'none\'"\n\n                      [src]="group.iconUrl"\n\n                      alt="{{group.name}}"\n\n                      class="rectangl_img"\n\n                    />\n\n                    <img\n\n                      *ngIf="group.localIconUrl !=\'\' &&  imgSHownOnline == \'none\'"\n\n                      src="{{path}}{{group.localIconUrl}}"\n\n                      alt="{{group.name}}"\n\n                      class="rectangl_img"\n\n                    />\n\n\n\n                    <span\n\n                      id="progressBar_{{group.id}}"\n\n                      style="\n\n                        position: absolute;\n\n                        left: 36px;\n\n                        top: 40px;\n\n                        padding: 3px;\n\n                        height: auto;\n\n                        color: red;\n\n                        text-align: center;\n\n                        font-size: 10px;\n\n                        font-weight: 900;\n\n                        border-radius: 25px;\n\n                      "\n\n                    >\n\n                    </span>\n\n                    <div class="bottom-left">\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'video\'"\n\n                        class="icon-play subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'image\'"\n\n                        class="icon-pencil subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                      <i\n\n                        *ngIf="group.subTopicType == \'document\'"\n\n                        class="icon-sheet subtopic-card-img-icon"\n\n                        [ngStyle]="{\'backgroundColor\': group.hexcodeContrast }"\n\n                        style="color: #fff; font-size: 25px"\n\n                      ></i>\n\n                    </div>\n\n                  </div>\n\n                </ion-thumbnail>\n\n\n\n                <h2 padding-left item-title class="item-text-wrap" style="">\n\n                  <b style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.name}}</b\n\n                  >\n\n                </h2>\n\n                <p\n\n                  class="tab-desc-size"\n\n                  padding-left\n\n                  item-subtitle\n\n                  *ngIf="group.description != \'\' && group.description !=\'null\' "\n\n                >\n\n                  <!-- <span style="white-space: normal;word-wrap: break-word;">{{group.description}}</span> -->\n\n                  <span\n\n                    *ngIf="group.description.length < 76"\n\n                    style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.description}}</span\n\n                  >\n\n                  <span\n\n                    *ngIf="group.description.length > 75"\n\n                    style="white-space: normal; word-wrap: break-word"\n\n                    >{{group.description.slice(0,75)}}...</span\n\n                  >\n\n                </p>\n\n\n\n                <div float-right style="color: #ccc; position: absolute">\n\n                  <ion-icon\n\n                    style=""\n\n                    (click)="onEvent(\'onInfoMultipleDownload\', group, $event)"\n\n                    *ngIf="group.subTopicType != \'image\'"\n\n                    class="tabsharedownload"\n\n                  >\n\n                    <i\n\n                      style=""\n\n                      id="download_{{group.id}}"\n\n                      class="icon-video-icons-download can-download-icon"\n\n                      [ngClass]="(group.localUrl != \'\')?\'active\':\'\'"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon\n\n                    style=""\n\n                    *ngIf="group.subTopicType == \'image\'"\n\n                    (click)="onEvent(\'onImageCantDownload\', \'image\', $event)"\n\n                    class="tabsharedownload"\n\n                  >\n\n                    <i\n\n                      style=""\n\n                      class="icon-video-icons-download can-download-icon"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon\n\n                    style=""\n\n                    class="tabsfavshare"\n\n                    tappable\n\n                    (click)="onEvent(\'onInfoFavorite\', group, $event)"\n\n                  >\n\n                    <i\n\n                      class="icon icon-cardio-like"\n\n                      [ngClass]="{\'active\': group.isFavourite}"\n\n                    ></i>\n\n                  </ion-icon>\n\n\n\n                  <ion-icon\n\n                    style=""\n\n                    class="tabsfavshare"\n\n                    tappable\n\n                    (click)="onEvent(\'onShare\', group, $event)"\n\n                  >\n\n                    <i class="icon icon-list-share"></i>\n\n                  </ion-icon>\n\n                </div>\n\n              </ion-item>\n\n            </li>\n\n          </ul>\n\n        </ion-list>\n\n\n\n        <!-- \n\n        Our skeleton list which will be rendered when\n\n        our data have not loaded\n\n        -->\n\n        <ion-list *ngIf="!data.items">\n\n          <ion-item\n\n            class="ion-item-border fakeItem"\n\n            style=""\n\n            *ngFor="let i of listlength"\n\n          >\n\n            <ion-avatar item-left>\n\n              <skeleton-item height="95px" width="95px"></skeleton-item>\n\n            </ion-avatar>\n\n            <h2></h2>\n\n            <h3></h3>\n\n            <p></p>\n\n            <p></p>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- Our skeleton end-->\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer\n\n  *ngIf="request_from ==\'profile_page\'"\n\n  clean-footer\n\n  style="background-color: #f0f0f0 !important"\n\n  [activeFootermenu]="false"\n\n  [ismyCv]="true"\n\n></ion-footer>\n\n\n\n<ion-footer\n\n  *ngIf="request_from ==\'search_page\'"\n\n  clean-footer\n\n  style="background-color: #f0f0f0 !important"\n\n  [activeFootermenu]="false"\n\n></ion-footer>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\playlist\playlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], PlaylistPage);
    return PlaylistPage;
}());

//# sourceMappingURL=playlist.js.map

/***/ })

});
//# sourceMappingURL=5.js.map