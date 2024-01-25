webpackJsonp([14,36,38],{

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

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawonPageModule", function() { return DrawonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawon__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DrawonPageModule = /** @class */ (function () {
    function DrawonPageModule() {
    }
    DrawonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drawon__["a" /* DrawonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drawon__["a" /* DrawonPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["FooterPageModule"]
            ],
        })
    ], DrawonPageModule);
    return DrawonPageModule;
}());

//# sourceMappingURL=drawon.module.js.map

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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64_to_gallery__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__colors_popover_colors_popover__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__width_popover_width_popover__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__brush_type_popover_brush_type_popover__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var STORAGE_KEY = 'IMAGE_LIST';
var DrawonPage = /** @class */ (function () {
    function DrawonPage(renderer, injector) {
        var _this = this;
        this.renderer = renderer;
        this.injector = injector;
        this.showimagecopyright = true;
        this.storedImages = [];
        this.isclicked = false;
        this.resetMove = true;
        this.mode = '';
        this.zoomnumber = 5;
        // Color Stuff
        this.selectedColor = '#030001';
        this.colors = ['#030001', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
        this.mediaLoaded = false;
        this.image = null;
        this.container = null;
        this.transforms = [];
        this.adjustScale = 1;
        this.adjustDeltaX = 0;
        this.adjustDeltaY = 0;
        this.currentScale = null;
        this.currentDeltaX = null;
        this.currentDeltaY = null;
        this.drawingEnabled = true;
        /*
              Initialize listeners for gestures
          */
        this.init = function () {
            //create gesture obj w/ ref to DOM element
            _this.gesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Gesture */](_this.canvas.nativeElement);
            //listen for the gesture
            _this.gesture.listen();
            _this.gesture.on('doubletap', function (ev) {
                _this.transforms = [];
                _this.adjustScale += 1;
                if (_this.adjustScale >= 4)
                    _this.adjustScale = 1;
                _this.currentScale = _this.adjustScale;
                _this.transforms.push('scale(' + _this.adjustScale + ')');
                _this.container.style.transform = _this.transforms.join(' ');
            });
            _this.gesture.on("pinch", function (ev) {
                _this.transforms = [];
                // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
                _this.currentScale = _this.adjustScale * ev.scale;
                _this.currentDeltaX = _this.adjustDeltaX + (ev.deltaX / _this.currentScale);
                _this.currentDeltaY = _this.adjustDeltaY + (ev.deltaY / _this.currentScale);
                // Concatinating and applying parameters.
                if (_this.currentScale < 1) {
                    _this.currentScale = 1;
                    _this.currentDeltaX = 0;
                    _this.currentDeltaY = 0;
                }
                _this.transforms.push('scale(' + _this.currentScale + ')');
                _this.transforms.push('translate(' + _this.currentDeltaX + 'px,' + _this.currentDeltaY + 'px)');
                _this.container.style.transform = _this.transforms.join(' ');
            });
            _this.gesture.on("pinchend", function (ev) {
                // Saving the final transforms for adjustment next time the user interacts.
                _this.adjustScale = _this.currentScale;
                _this.adjustDeltaX = _this.currentDeltaX;
                _this.adjustDeltaY = _this.currentDeltaY;
            });
            _this.gesture.on("panend", function (ev) {
                // Saving the final transforms for adjustment next time the user interacts.
                _this.adjustScale = _this.currentScale;
                _this.adjustDeltaX = _this.currentDeltaX;
                _this.adjustDeltaY = _this.currentDeltaY;
            });
        };
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]);
        this.social_sharing_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]);
        this.base64_to_gallery_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */]);
        this.android_permission_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */]);
        this.popover_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* PopoverController */]);
        this.local_Url = this.nav_params_object.get("local_Url");
        this.video_Name = this.nav_params_object.get("video_Name");
        if (this.local_Url == 'localUrl') {
            // code...
            this.drawOnSrc = this.file_object.dataDirectory + 'drawon/' + this.video_Name;
            //this.drawOnSrc = this.file_object.dataDirectory+this.local_Url;
        }
        else {
            this.drawOnSrc = this.nav_params_object.get("drawnurl");
        }
        console.log('this.drawOnSrc ->' + this.drawOnSrc);
        this.drawOnImgTitle = this.nav_params_object.get("drawOnImgTitle");
        this.imageCopyright = this.nav_params_object.get("drawnCopyright");
        this.sel_subtopic = this.nav_params_object.get("drawnSubtopicType");
        // Show Copyright message for 2 seconds then disappear.
        setTimeout(function () {
            this.showimagecopyright = false;
        }, 2000);
        var sec = 0;
        var watch = setInterval(function () {
            ++sec;
        }, 1000);
        localStorage.setItem('canvasimgshare', 'notset');
        this.storage_object.ready().then(function () {
            _this.storage_object.get(STORAGE_KEY).then(function (data) {
                if (data != undefined) {
                    _this.storedImages = data;
                }
            });
        });
    }
    DrawonPage.prototype.ionViewDidEnter = function () {
        // https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
        //Get the height of the fixed item
        //let itemHeight = this.fixedContainer.nativeElement.offsetHeight;
        //let scroll = this.content.getScrollElement();
        // // Add preexisting scroll margin to fixed container size
        //itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
        //scroll.style.marginTop = itemHeight + 'px';
    };
    DrawonPage.prototype.ionViewWillEnter = function () {
        //localStorage.setItem('canvasimgshare',null);
    };
    DrawonPage.prototype.changeColour = function (xyz) {
    };
    DrawonPage.prototype.changeSize = function (int) {
    };
    DrawonPage.prototype.clearCanvas = function () {
    };
    DrawonPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform_object.ready().then(function () {
            _this.canvasElement = _this.canvas.nativeElement;
            _this.renderer.setElementAttribute(_this.canvasElement, 'width', _this.platform_object.width() + '');
            _this.renderer.setElementAttribute(_this.canvasElement, 'height', _this.platform_object.height() + '');
            _this.createImgOnCanvas();
        });
        this.image = this.canvas.nativeElement;
        this.container = this.elementParent.nativeElement;
        // Prevent long press saving on mobiles.
        this.container.addEventListener('touchstart', function (e) {
            e.preventDefault();
        });
        this.init();
    };
    DrawonPage.prototype.createImgOnCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        var image = new Image();
        image.onload = function () {
            var scaleFactor = ctx.canvas.width / image.width;
            ctx.canvas.height = image.height * scaleFactor;
            ctx.drawImage(image, 0, 0, ctx.canvas.width, image.height * scaleFactor);
        };
        //image.crossOrigin = "Anonymous";
        console.log('this.drawOnSrc-->' + this.drawOnSrc);
        //image.src = 'url';
        image.src = this.drawOnSrc;
    };
    DrawonPage.prototype.selectColor = function (color) {
        //this.selectedColor = color;
        //this.pencontainer.nativeElement['style'].color = color;
    };
    DrawonPage.prototype.drawingEnd = function (event) {
        this.resetMove = true;
        //this.fixedContainer.nativeElement['style'].overflow = 'auto';
    };
    DrawonPage.prototype.startDrawing = function (ev) {
        if (this.mode == 'pen' && this.isclicked) {
            ev.preventDefault();
        }
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        if (this.zoomnumber > 5) {
            this.saveX = (ev.touches[0].pageX / (this.zoomnumber * 0.20)) - (canvasPosition.x / (this.zoomnumber * 0.20));
            this.saveY = (ev.touches[0].pageY / (this.zoomnumber * 0.20)) - (canvasPosition.y / (this.zoomnumber * 0.20));
        }
        else {
            this.saveX = ev.touches[0].pageX - canvasPosition.x;
            this.saveY = ev.touches[0].pageY - canvasPosition.y;
        }
        if (this.currentScale > 1) {
            this.saveX = (ev.touches[0].pageX / this.currentScale) - (canvasPosition.x / this.currentScale);
            this.saveY = (ev.touches[0].pageY / this.currentScale) - (canvasPosition.y / this.currentScale);
        }
        else {
            this.saveX = ev.touches[0].pageX - canvasPosition.x;
            this.saveY = ev.touches[0].pageY - canvasPosition.y;
        }
    };
    DrawonPage.prototype.moved = function (ev) {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX - canvasPosition.x;
        var currentY = ev.touches[0].pageY - canvasPosition.y;
        if (this.zoomnumber > 5) {
            currentX = (ev.touches[0].pageX / (this.zoomnumber * 0.20)) - (canvasPosition.x / (this.zoomnumber * 0.20));
            currentY = (ev.touches[0].pageY / (this.zoomnumber * 0.20)) - (canvasPosition.y / (this.zoomnumber * 0.20));
        }
        if (this.currentScale > 1) {
            currentX = (ev.touches[0].pageX / this.currentScale) - (canvasPosition.x / this.currentScale);
            currentY = (ev.touches[0].pageY / this.currentScale) - (canvasPosition.y / this.currentScale);
        }
        var brush_color = localStorage.getItem('canvasbrushcolor');
        var brush_width = localStorage.getItem('canvasbrushwidth');
        var brush_type = localStorage.getItem('canvasbrushtype');
        switch (brush_type) {
            case 'Pencil':
                ctx.lineJoin = 'miter';
                ctx.strokeStyle = brush_color;
                ctx.lineWidth = brush_width;
                ctx.beginPath();
                this.resetMove && ctx.moveTo(this.saveX, this.saveY);
                ctx.lineTo(currentX, currentY);
                ctx.closePath();
                break;
            case 'Circle':
                ctx.lineJoin = 'round';
                ctx.strokeStyle = brush_color;
                ctx.lineWidth = brush_width;
                ctx.beginPath();
                this.resetMove && ctx.moveTo(this.saveX, this.saveY);
                ctx.arc(currentX, currentY, 1, 0, 2 * Math.PI, false);
                ctx.closePath();
                break;
            case 'Spray':
                var density = 50;
                ctx.lineJoin = ctx.lineCap = 'round';
                ctx.lineWidth = brush_width;
                ctx.strokeStyle = brush_color;
                ctx.beginPath();
                this.resetMove && ctx.moveTo(this.saveX, this.saveY);
                for (var i = density; i--;) {
                    var radius = 20;
                    var offsetX = this.getRandomInt(-radius, radius);
                    var offsetY = this.getRandomInt(-radius, radius);
                    ctx.fillStyle = brush_color;
                    ctx.fillRect(currentX + offsetX, currentY + offsetY, 1, 1);
                }
                ctx.closePath();
                break;
            default:
                ctx.lineJoin = 'miter';
                ctx.strokeStyle = brush_color;
                ctx.lineWidth = brush_width;
                ctx.beginPath();
                this.resetMove && ctx.moveTo(this.saveX, this.saveY);
                ctx.lineTo(currentX, currentY);
                ctx.closePath();
                break;
        }
        this.isclicked && ctx.stroke() && (this.resetMove = false);
        this.saveX = currentX;
        this.saveY = currentY;
        console.log('this.resetMove------>' + this.resetMove);
        if (!this.resetMove) {
            console.log('jjj--->');
            //this.fixedContainer.nativeElement['style'].overflow = 'hidden';
            //this.fixedContainer.nativeElement['style'].border = '5px solid blue';
        }
    };
    DrawonPage.prototype.getClickedIcon = function (mode) {
        var _this = this;
        var ctx = this.canvasElement.getContext('2d');
        switch (mode) {
            case "pen":
                // code...
                this.toast_service_object.presentToast("Pen");
                this.isclicked = !this.isclicked;
                this.mode = 'pen';
                //this.canvas.nativeElement.style.width = '100%';
                //this.zoomnumber = 5;
                break;
            case "eraser":
                // code...
                //const ctx = this.canvasElement.getContext('2d');
                // ctx.save();
                // ctx.globalCompositeOperation = 'copy';
                ctx.strokeStyle = 'transparent';
                this.mode = '';
                // ctx.beginPath();
                // ctx.lineTo(0, 0);
                // ctx.stroke();
                // ctx.restore();
                break;
            case "clear":
                this.toast_service_object.presentToast("Clear");
                this.mode = '';
                this.isclicked = false;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                this.isclicked = false;
                this.createImgOnCanvas();
                break;
            case "save":
                this.platform_object.ready().then(function () {
                    _this.android_permission_object.checkPermission(_this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) { return console.log('Has permission?', result.hasPermission); }, function (err) { return _this.android_permission_object.requestPermission(_this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE); });
                });
                this.android_permission_object.requestPermissions([this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE, this.android_permission_object.PERMISSION.READ_EXTERNAL_STORAGE]);
                this.toast_service_object.presentToast("Save");
                this.saveCanvasImage('save');
                break;
            case "email":
                this.platform_object.ready().then(function () {
                    _this.android_permission_object.checkPermission(_this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) { return console.log('Has permission?', result.hasPermission); }, function (err) { return _this.android_permission_object.requestPermission(_this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE); });
                });
                this.android_permission_object.requestPermissions([this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE, this.android_permission_object.PERMISSION.READ_EXTERNAL_STORAGE]);
                this.toast_service_object.presentToast("Share");
                this.saveCanvasImage('share');
                this.isclicked = false;
                this.mode = '';
                //Common sharing event will open all available application to share
                //var message = "Hello,<br />I’m sending you this information from the CardioVisual mobile app. I think it’s something you might like.<br /><br />CardioVisual is a free mobile app packed with cardiologist-curated videos and infographics.<br /> <br />If you want to get the app for yourself, download it from <a href='"+localStorage.getItem('android_play_store_link')+"'>Google Play Store</a> or <a href='"+localStorage.getItem('ios_app_store_link')+"'>Apple Store</a>";
                break;
            default:
                // code...
                break;
        }
    };
    DrawonPage.prototype.getzoomPlus = function () {
        //this.isclicked=false;
        this.zoomnumber = this.zoomnumber + 1;
        var zoomlevel = this.zoomnumber * 20;
        this.canvas.nativeElement.style.width = zoomlevel + '%';
        var loader = document.getElementById("canvasDiv");
        loader.style.overflow = 'scroll';
    };
    DrawonPage.prototype.getzoomMinus = function () {
        //this.isclicked=false;
        if (this.zoomnumber > 5) {
            this.zoomnumber = this.zoomnumber - 1;
            var zoomlevel = this.zoomnumber * 20;
            this.canvas.nativeElement.style.width = zoomlevel + '%';
        }
    };
    /*pinch to zoom*/
    DrawonPage.prototype.setMediaLoaded = function () {
        //setTimeout(()=>this.mediaLoaded = true, 200);
    };
    /* pinch to zoom*/
    /**
     * Displays list of colors
     * param event
     */
    DrawonPage.prototype.openColorsPopover = function (event) {
        var popover = this.popover_controller_object.create(__WEBPACK_IMPORTED_MODULE_9__colors_popover_colors_popover__["a" /* ColorsPopoverPage */]);
        popover.present({
            ev: event
        });
    };
    /**
     * Displays list of brush widths
     * param event
     */
    DrawonPage.prototype.openWidthsPopover = function (event) {
        var popover = this.popover_controller_object.create(__WEBPACK_IMPORTED_MODULE_10__width_popover_width_popover__["a" /* WidthPopoverPage */]);
        popover.present({
            ev: event
        });
    };
    /**
     * Displays list of brush types
     * param event
     */
    DrawonPage.prototype.openTypesPopover = function (event) {
        this.isclicked = !this.isclicked;
        this.mode = 'pen';
        var popover = this.popover_controller_object.create(__WEBPACK_IMPORTED_MODULE_11__brush_type_popover_brush_type_popover__["a" /* BrushTypePopoverPage */]);
        popover.present({
            ev: event
        });
    };
    DrawonPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    DrawonPage.prototype.saveCanvasImageOLD = function (action) {
        var _this = this;
        var dataUrl = this.canvasElement.toDataURL();
        var ctx = this.canvasElement.getContext('2d');
        var data = dataUrl.split(',')[1];
        this.base64_to_gallery_object.base64ToGallery(data).then(function (res) {
            if (action == 'save') {
                _this.toast_service_object.presentToast("Successfully Saved To Gallery.");
            }
            console.log('Saved image to gallery ', JSON.stringify(res));
            localStorage.setItem('canvasimgshare', res);
            if (action == 'share') {
                var message = "Hello I’m sending you this information from the CardioVisual mobile app.";
                var subject = "A friend thought you might like this information from CardioVisual";
                var lclstorage = localStorage.getItem('canvasimgshare');
                if (lclstorage == 'notset') {
                    _this.url = _this.drawOnSrc;
                }
                else {
                    var ROOT_DIRECTORY = 'file://';
                    _this.url = ROOT_DIRECTORY + localStorage.getItem('canvasimgshare');
                }
                _this.social_sharing_object.share(message, subject, _this.url, _this.drawOnImgTitle).then(function (shareentries) {
                    if (shareentries) {
                        _this.toast_service_object.presentToast("successfully share the image.");
                    }
                    console.log('success' + JSON.stringify(shareentries));
                })
                    .catch(function (error) {
                    console.log('sharing error' + JSON.stringify(error));
                });
            }
        }, function (err) {
            console.log('image to gallery err ', JSON.stringify(err));
        });
        this.mode = '';
        this.isclicked = false;
        // end
    };
    DrawonPage.prototype.saveCanvasImage = function (action) {
        var _this = this;
        var dataUrl = this.canvasElement.toDataURL();
        var ctx = this.canvasElement.getContext('2d');
        var name = new Date().getTime() + '.png';
        //let path = this.file_object.dataDirectory;
        //let path = this.file_object.externalDataDirectory;
        var path = this.file_object.externalApplicationStorageDirectory;
        var options = { replace: false };
        var data = dataUrl.split(',')[1];
        var blob = this.b64toBlob(data, 'image/png');
        this.file_object.writeFile(path, name, blob, options).then(function (res) {
            if (action == 'save') {
                _this.toast_service_object.presentToast("Successfully Saved To Gallery.");
            }
            console.log('Saved image to gallery ', JSON.stringify(res));
            localStorage.setItem('canvasimgshare', res.nativeURL);
            if (action == 'share') {
                var message = "Hello I’m sending you this information from the CardioVisual mobile app.";
                var subject = "A friend thought you might like this information from CardioVisual";
                var lclstorage = localStorage.getItem('canvasimgshare');
                if (lclstorage == 'notset') {
                    _this.url = _this.drawOnSrc;
                }
                else {
                    //const ROOT_DIRECTORY = 'file://';
                    _this.url = localStorage.getItem('canvasimgshare');
                }
                _this.social_sharing_object.share(message, subject, _this.url, _this.drawOnImgTitle).then(function (shareentries) {
                    if (shareentries) {
                        _this.toast_service_object.presentToast("successfully share the image.");
                    }
                    console.log('success' + JSON.stringify(shareentries));
                })
                    .catch(function (error) {
                    console.log('sharing error' + JSON.stringify(error));
                });
            }
            _this.storeImage(name);
        }, function (err) {
            console.log('error: ', err);
        });
    };
    DrawonPage.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    DrawonPage.prototype.storeImage = function (imageName) {
        var saveObj = { img: imageName };
        this.storedImages.push(saveObj);
        this.storage_object.set(STORAGE_KEY, this.storedImages).then(function () {
            setTimeout(function () {
                //this.content.scrollToBottom();
            }, 500);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('imageCanvas'),
        __metadata("design:type", Object)
    ], DrawonPage.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('background-image'),
        __metadata("design:type", String)
    ], DrawonPage.prototype, "backgroundImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], DrawonPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('fixedContainer'),
        __metadata("design:type", Object)
    ], DrawonPage.prototype, "fixedContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], DrawonPage.prototype, "elementParent", void 0);
    DrawonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-drawon',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\drawon\drawon.html"*/'\n\n<!-- <ion-header class="headerColor">-->\n\n<ion-header class="headerColor">\n\n\n\n  <ion-navbar class="drawon-title" style=""><b class="marleft">{{drawOnImgTitle}}</b>\n\n  </ion-navbar>\n\n\n\n  <ion-navbar class="suheader" style="background-color: #111111 !important; color:#ffffff;text-align: center; min-height: 56px;">{{imageCopyright}}\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content no-padding no-bounce>\n\n\n\n	<div  #map id="canvasDiv" class="maiDivCanvas pinch-zoom-container" [ngClass]="{\'enable_click\': isclicked == true, \'disable_click\':isclicked == false }" [style.position]="isclicked == true ? \'\' : (isclicked == false ? \'relative\' : \'\')" style="overflow: scroll;">\n\n		<canvas #imageCanvas id="imageCanvas" (touchstart)="startDrawing($event)" (touchmove)="moved($event)" (touchend)="drawingEnd($event)" class="csnvssheight pinch-zoom-image">\n\n		</canvas>\n\n	</div> \n\n	        \n\n</ion-content>\n\n\n\n<ion-footer style="background-color: #F0F0F0 !important;">\n\n    <ion-toolbar class="footercolor" transparent no-padding no-bounce>\n\n\n\n	    <!-- <ion-grid no-padding > \n\n		 	<ion-row style="" no-padding>\n\n		      <ion-col *ngFor="let color of colors" [style.background]="color" class="color-block" tappable (click)="selectColor(color)"></ion-col>\n\n		    </ion-row>\n\n		   	<ion-row style="" >\n\n			   \n\n				<ion-col  col-2 style="text-align: center;padding:3px;" (click)=\'getClickedIcon("pen")\'>\n\n					<ion-icon #pencontainer name="brush" class=\'icon pen\' style="font-size: 1.4em; top: 6;"></ion-icon>\n\n				</ion-col>  \n\n				   \n\n				<ion-col col-2 style="text-align: center;padding:0px;" (click)=\'getClickedIcon("clear")\'>\n\n					<ion-icon class=\'ion-close-round clear bg-transparent \' name="close" style="background-color: transparent; font-size: 2.2em;"></ion-icon>\n\n				</ion-col>\n\n\n\n				<ion-col col-2 style="text-align: center;padding:3px;" (click)=\'getClickedIcon("save")\'>      \n\n					<ion-icon class=\'icon ion-document-text bg-transparent\' name="document" style="background-color: transparent; font-size: 1.6em;"></ion-icon>\n\n				</ion-col>      \n\n\n\n				<ion-col col-2 style="text-align: center;padding:3px;" (click)=\'getClickedIcon("email")\'>\n\n					 <ion-icon class=\'icon ion-email clear bg-transparent\'  name="mail" style="background-color: transparent; font-size: 1.6em;"></ion-icon>\n\n				</ion-col>\n\n				<ion-col col-2 style="text-align: center;padding:3px;" (click)=\'getzoomPlus()\'>\n\n				<ion-icon class=\'icon icon-zoom-in clear bg-transparent\' style="background-color: transparent; font-size: 1.6em;color:#000;"></ion-icon>\n\n				</ion-col>\n\n				<ion-col col-2 style="text-align: center;padding:3px;" (click)=\'getzoomMinus()\'>\n\n				<ion-icon class="icon icon-zoom-out" style="background-color: transparent; font-size: 1.6em;color:#000;"></ion-icon>\n\n				</ion-col>\n\n		    </ion-row>\n\n	   </ion-grid>  -->\n\n		<ion-buttons>	\n\n			<div *ngIf="drawingEnabled">\n\n				<button ion-button (click)="openColorsPopover($event)" icon-only style="margin-left: 2%;">\n\n					<ion-icon name="color-palette" style="color:#000000;"></ion-icon>\n\n				</button>\n\n\n\n				<button ion-button (click)="openWidthsPopover($event)" icon-only>\n\n					<ion-icon name="options" style="color:#000000;"></ion-icon>\n\n				</button>\n\n\n\n				<button ion-button (click)="openTypesPopover($event)" icon-only>\n\n					<ion-icon #pencontainer name="brush" style="color:#000000;"></ion-icon>\n\n				</button>\n\n\n\n				<button ion-button (click)=\'getClickedIcon("clear")\' icon-only>\n\n					<ion-icon name="undo" style="color:#000000;"></ion-icon>\n\n				</button>\n\n\n\n				<button ion-button (click)="getClickedIcon(\'email\')" icon-only>\n\n					<ion-icon class=\'icon ion-email clear bg-transparent\'  name="mail" style="background-color: transparent; font-size: 1.6em;color:#000000;"></ion-icon>\n\n				</button>	\n\n\n\n				<button ion-button (click)=\'getClickedIcon("save")\' icon-only>\n\n					<ion-icon class=\'icon ion-document-text bg-transparent\' name="document" style="background-color: transparent; font-size: 1.6em;color:#000000;"></ion-icon>\n\n				</button>\n\n\n\n				<button ion-button (click)=\'getzoomPlus()\' icon-only>\n\n					<ion-icon class=\'icon icon-zoom-in clear bg-transparent\' style="background-color: transparent; font-size: 1.6em;color:#000;"></ion-icon>\n\n				</button>	\n\n\n\n				<button ion-button (click)=\'getzoomMinus()\' icon-only>\n\n					<ion-icon class="icon icon-zoom-out" style="background-color: transparent; font-size: 1.6em;color:#000;"></ion-icon>\n\n				</button>	\n\n\n\n			</div>\n\n\n\n			<div *ngIf="!drawingEnabled">\n\n				<button ion-button (click)="ok()">\n\n				OK\n\n				</button>\n\n			</div>  \n\n\n\n		</ion-buttons> \n\n  	</ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\drawon\drawon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], DrawonPage);
    return DrawonPage;
}());

//# sourceMappingURL=drawon.js.map

/***/ })

});
//# sourceMappingURL=14.js.map