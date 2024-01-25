webpackJsonp([23],{

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashesPageModule", function() { return SplashesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splashes__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashesPageModule = /** @class */ (function () {
    function SplashesPageModule() {
    }
    SplashesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splashes__["a" /* SplashesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splashes__["a" /* SplashesPage */]),
            ],
        })
    ], SplashesPageModule);
    return SplashesPageModule;
}());

//# sourceMappingURL=splashes.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_underscore_underscore__);
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
 * Generated class for the SplashesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashesPage = /** @class */ (function () {
    function SplashesPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.buttonAnime = false;
        this.isLastSlide = false;
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_clevertap__["a" /* CleverTap */]();
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_HttpService__["a" /* HttpService */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]);
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__services_loading_service__["a" /* LoadingService */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */]);
        this.loading_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]);
        this.localapi = this.http_service_object.getApi();
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        //this.branckLINK = "https://app.cardiovisual.com/G7gT/qZjLCMGnnJ";
        this.path = this.file_object.dataDirectory;
        setTimeout(function () {
            _this.network_check_object.getPageAction('SplashesPage', 'start', '', localStorage.getItem('cv5usrType'));
        }, 1000);
    }
    SplashesPage.prototype.ionViewWillLeave = function () {
        this.network_check_object.getPageAction('SplashesPage', 'end', '', localStorage.getItem('cv5usrType'));
    };
    SplashesPage.prototype.ionViewWillEnter = function () {
        this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
    };
    SplashesPage.prototype.ionViewDidLoad = function () {
        this.type = this.nav_params_object.get('type');
        this.userRoleType = this.nav_params_object.get('userType');
        if (this.type == "PoweredBy") {
            this.snapshot = this.nav_params_object.get('powerdbyResult');
            this.timeDuration = 8000;
        }
        else {
            this.snapshot = this.nav_params_object.get('sponsordbyResult');
            this.timeDuration = 100;
        }
        if (this.snapshot.length == 1) {
            this.isLastSlide = true;
            this.buttonAnime = true;
        }
        this.slides.lockSwipes(true); // this will disable the swipe in either ways
    };
    SplashesPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (this.slides.isEnd()) {
            this.isLastSlide = true;
            this.buttonAnime = true;
        }
        else {
            this.isLastSlide = false;
            this.buttonAnime = false;
        }
    };
    SplashesPage.prototype.showComment = function () {
        this.navCtrl.push('BellNotificationListPage');
    };
    SplashesPage.prototype.isUrl = function (s) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(s);
    };
    SplashesPage.prototype.learn_more = function (slide_detail) {
        var _this = this;
        switch (slide_detail.contentType) {
            case 'video':
                var loading = this.loading_controller_object.create({
                    //spinner: 'ios',
                    spinner: 'dots',
                    content: "<div class='custom-spinner-container'>Loading Informative Content for You. </div>",
                    duration: this.timeDuration,
                    enableBackdropDismiss: false
                });
                loading.present();
                setTimeout(function () {
                    _this.bannerClevertap(slide_detail, 'video');
                    _this.splash_video = slide_detail.contentUrl;
                    _this.splash_type = 'video';
                    var id = slide_detail.contentUrl;
                    var is_URL = _this.isUrl(id);
                    if (_this.isUrl(id) == true) {
                        var findIDQuery = new Array(" WHERE url='" + id + "' AND isActive = 1");
                        _this.database_provider_object.fetchAllData('new_sub_topics', findIDQuery).then(function (findID_data) {
                            if (findID_data.length > 0) {
                                var firstItem = __WEBPACK_IMPORTED_MODULE_11_underscore_underscore__["first"](findID_data);
                                _this.subTopisId = firstItem.id;
                            }
                            else {
                                _this.database_provider_object.fetchAllData('information', findIDQuery).then(function (infoid_data) {
                                    if (infoid_data.length > 0) {
                                        var firstinfoItem = __WEBPACK_IMPORTED_MODULE_11_underscore_underscore__["first"](infoid_data);
                                        _this.info_ItemId = firstinfoItem.id;
                                    }
                                });
                            }
                        });
                    }
                    else {
                        _this.subTopisId = id;
                        _this.info_ItemId = id;
                    }
                    setTimeout(function () {
                        var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + _this.subTopisId);
                        _this.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (subTopic_data) {
                            if (subTopic_data.length > 0) {
                                setTimeout(function () {
                                    _this.navCtrl.push('VideoDetailsPage', { pageItem: subTopic_data[0].name, coloR: subTopic_data[0].hexcodeBase, icondash: subTopic_data[0].iconName, data: subTopic_data[0], 'header': 'show', 'request_from': 'video_list', previousPage: 'SplashesPage', 'sendTo': 'LearnMore' });
                                }, 400);
                            }
                            else {
                                var infoquerystring = new Array("join information_data on information.id = information_data.id where information.id=" + _this.info_ItemId);
                                _this.database_provider_object.fetchAllData('information', infoquerystring).then(function (infodata) {
                                    if (infodata.length > 0) {
                                        _this.navCtrl.push('InformationVideoDetailsPage', { pageItem: infodata[0].name, coloR: infodata[0].hexcodeBase, icondash: infodata[0].iconName, data: infodata[0], 'header': 'show', 'request_from': 'video_list', previousPage: 'SplashesPage', 'sendTo': 'LearnMore' });
                                    }
                                });
                            }
                        });
                    }, 400);
                }, this.timeDuration);
                break;
            case 'web':
                var url = slide_detail.contentUrl;
                if (url.includes('http')) {
                    var ref = this.in_app_browser_object.create(url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                    this.bannerClevertap(slide_detail, 'web');
                    ref.on('loadstop').subscribe(function (event) {
                        _this.screen_orientation_object.unlock();
                    });
                    ref.on('exit').subscribe(function (event) {
                        _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                    });
                }
                else {
                    this.qnaSite({ 'slug': url, 'title': slide_detail.sponsoredName });
                }
                break;
            case 'playlist':
                var loading = this.loading_controller_object.create({
                    spinner: 'dots',
                    content: "<div class='custom-spinner-container'>Loading Informative Content for You. </div>",
                    duration: this.timeDuration,
                    enableBackdropDismiss: false
                });
                loading.present();
                var list_json = JSON.parse(slide_detail.contentUrl);
                slide_detail.source = list_json.source;
                slide_detail.list_values = list_json.list_values;
                slide_detail.name = slide_detail.sponsorName;
                if (list_json.source == 'education') {
                    var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + list_json.list_values[0] + " AND isActive = 1");
                    this.database_provider_object.fetchAllData('new_sub_topics', json_query).then(function (topic_data) {
                        setTimeout(function () {
                            _this.bannerClevertap(slide_detail, 'playlist');
                            _this.navCtrl.push('WhatsNewDetailsPage', { data: slide_detail, type: 'expert_playlist', index: 0, 'header': 'hide', 'display_playlist': topic_data[0], 'sendTo': 'Splash Playlist' });
                            _this.loading_service_object.hide();
                        }, 2000);
                    });
                }
                else if (list_json.source == 'information') {
                    var json_query = new Array("join information_data on information.id = information_data.id where information.id = " + list_json.list_values[0] + " AND isActive = 1");
                    this.database_provider_object.fetchAllData('information', json_query).then(function (topic_data) {
                        setTimeout(function () {
                            _this.bannerClevertap(slide_detail, 'playlist');
                            _this.navCtrl.push('WhatsNewDetailsPage', { data: slide_detail, type: 'expert_playlist', index: 0, 'header': 'hide', 'display_playlist': topic_data[0], 'sendTo': 'Splash Playlist' });
                            _this.loading_service_object.hide();
                        }, 2000);
                    });
                }
                break;
            case 'whatsnew':
                var network_type = this.network_check_object.getNetworkType();
                if (network_type == 'none') {
                    this.toast_controller_object.create({
                        message: 'You are now offline.',
                        position: 'bottom',
                        duration: 5000
                    }).present();
                }
                else {
                    var loading = this.loading_controller_object.create({
                        spinner: 'dots',
                        content: "<div class='custom-spinner-container'>Loading Informative Content for You. </div>",
                        duration: this.timeDuration,
                        enableBackdropDismiss: false
                    });
                    loading.present();
                    var whatsnew_id = JSON.parse(slide_detail.contentUrl);
                    var whatsnew_url = this.localapi + "/api/whatsnews/" + whatsnew_id;
                    this.http_service_object.fetchDataFromapi(whatsnew_url).subscribe(function (whtasNewData) {
                        switch (whtasNewData.template) {
                            case 'tab_list':
                                _this.bannerClevertap(slide_detail, 'whatsnew');
                                localStorage.setItem('segment_name', whtasNewData.source);
                                _this.navCtrl.push('ItemDetailsPageTabs', { pageItem: whtasNewData.name, data: whtasNewData, request_from: 'splash' });
                                break;
                            case 'expert_playlist':
                                [];
                                //this.loading_service_object.show();
                                var list_json = JSON.parse(whtasNewData.list_values);
                                _this.updated_id = '';
                                if (whtasNewData.source == 'education') {
                                    var subtopic_url = _this.localapi + '/api/subtopics?filter={"where":{"id":{"inq":[' + list_json + ']}}}';
                                    _this.http_service_object.fetchDataFromapi(subtopic_url).subscribe(function (topic_data) {
                                        var topic_ids = __WEBPACK_IMPORTED_MODULE_11_underscore_underscore__["pluck"](topic_data, 'id');
                                        var that = _this;
                                        for (var i = 0; i < list_json.length; i++) {
                                            var list_item = parseInt(list_json[i]);
                                            var n = topic_ids.includes(list_item);
                                            if (n) {
                                                break;
                                            }
                                        }
                                        _this.valid_ids = list_item;
                                    });
                                }
                                else if (whtasNewData.source == 'information') {
                                    var info_url = _this.localapi + '/api/information?filter={"where": {"id": {"inq":[' + list_json + ']}}}';
                                    _this.http_service_object.fetchDataFromapi(info_url).subscribe(function (topic_data) {
                                        var topic_ids = __WEBPACK_IMPORTED_MODULE_11_underscore_underscore__["pluck"](topic_data, 'id');
                                        var that = _this;
                                        for (var i = 0; i < list_json.length; i++) {
                                            var list_item = parseInt(list_json[i]);
                                            var n = topic_ids.includes(list_item);
                                            if (n) {
                                                break;
                                            }
                                        }
                                        _this.valid_ids = list_item;
                                    });
                                }
                                setTimeout(function () {
                                    if (whtasNewData.source == 'education') {
                                        var subtopic_url1 = _this.localapi + '/api/subtopics?filter[where][isActive]=1&filter[where][id]=' + _this.valid_ids;
                                        _this.http_service_object.fetchDataFromapi(subtopic_url1).subscribe(function (topic_data) {
                                            _this.bannerClevertap(slide_detail, 'whatsnew');
                                            topic_data[0].isFavourite = 0;
                                            _this.navCtrl.push('WhatsNewDetailsPage', { data: whtasNewData, type: whtasNewData.template, index: 0, 'header': 'hide', 'display_playlist': topic_data[0] });
                                            //this.loading_service_object.hide();
                                        });
                                    }
                                    else if (whtasNewData.source == 'information') {
                                        var info_url1 = _this.localapi + '/api/information?filter[where][isActive]=1&filter[where][id]=' + _this.valid_ids;
                                        _this.http_service_object.fetchDataFromapi(info_url1).subscribe(function (topic_data) {
                                            topic_data[0].isFavourite = 0;
                                            _this.bannerClevertap(slide_detail, 'whatsnew');
                                            _this.navCtrl.push('WhatsNewDetailsPage', { data: whtasNewData, type: whtasNewData.template, index: 0, 'header': 'hide', 'display_playlist': topic_data[0] });
                                            //this.loading_service_object.hide();
                                        });
                                    }
                                }, 1000);
                                break;
                            case 'video_detail':
                                var list_json = JSON.parse(whtasNewData.list_values);
                                if (whtasNewData.source == 'education') {
                                    var subtopic_url = _this.localapi + '/api/subtopics?filter[where][isActive]=1&filter[where][id]=' + list_json.Condition[0];
                                    _this.http_service_object.fetchDataFromapi(subtopic_url).subscribe(function (topic_data) {
                                        topic_data[0].isFavourite = 0;
                                        _this.bannerClevertap(slide_detail, 'whatsnew');
                                        _this.navCtrl.push('WhatsNewDetailsPage', { data: whtasNewData, type: whtasNewData.template, index: 0, 'header': 'hide', 'display_data': topic_data[0], 'request_from': 'splash' });
                                        _this.loading_service_object.hide();
                                    });
                                }
                                else if (whtasNewData.source == 'information') {
                                    var info_url = _this.localapi + '/api/information?filter[where][isActive]=1&filter[where][id]=' + list_json.Expert[0];
                                    _this.http_service_object.fetchDataFromapi(info_url).subscribe(function (topic_data) {
                                        topic_data[0].isFavourite = 0;
                                        _this.bannerClevertap(slide_detail, 'whatsnew');
                                        _this.navCtrl.push('WhatsNewDetailsPage', { data: whtasNewData, type: whtasNewData.template, index: 0, 'header': 'hide', 'display_data': topic_data[0], 'request_from': 'splash' });
                                        _this.loading_service_object.hide();
                                    });
                                }
                                break;
                            case 'wordpress_blog':
                                var network_type = _this.network_check_object.getNetworkType();
                                if (network_type == 'none') {
                                    _this.toast_controller_object.create({
                                        message: 'You are now offline.',
                                        position: 'bottom',
                                        duration: 5000
                                    }).present();
                                }
                                else {
                                    _this.bannerClevertap(slide_detail, 'whatsnew');
                                    if (whtasNewData.list_values == undefined || whtasNewData.list_values == 'undefined') {
                                        var ref = _this.in_app_browser_object.create(whtasNewData.blog_link, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                                        ref.on('loadstop').subscribe(function (event) {
                                            _this.screen_orientation_object.unlock();
                                        });
                                        ref.on('exit').subscribe(function (event) {
                                            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                                        });
                                    }
                                    else {
                                        var values = JSON.parse(whtasNewData.list_values);
                                        var ref = _this.in_app_browser_object.create(values.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                                        ref.on('loadstop').subscribe(function (event) {
                                            _this.screen_orientation_object.unlock();
                                        });
                                        ref.on('exit').subscribe(function (event) {
                                            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                                        });
                                    }
                                }
                                break;
                        }
                    });
                }
                break;
        }
    };
    SplashesPage.prototype.next = function (bannerdata) {
        this.slides.lockSwipes(false);
        if (this.type == "sponsordBy") {
            this.sponsor_type = "sponsorContent";
            this.sponsoredName = bannerdata.sponsorName;
        }
        else {
            this.sponsor_type = "PoweredByContent";
            this.sponsoredName = bannerdata.sponsorName;
        }
        var sponsoreparams = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "userRoleId": localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "userEmail": localStorage.getItem('cv5userEmail'),
            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
            "Identity": localStorage.getItem('userIdentity'),
            "location": localStorage.getItem('location'),
            "sponsor_type": this.sponsor_type,
            "sponsoredName": this.sponsoredName,
            //"pageFor" : "onSplashesPage",
            "specialities": localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
            "contentType": bannerdata.contentType
        };
        this.clevertap_object.recordEventWithNameAndProps("sponsorShown", sponsoreparams);
        if (this.isLastSlide) {
            if (this.type == "sponsordBy") {
                // code...
                this.navCtrl.setRoot('DashboardPage');
                // this.navCtrl.setRoot('WhatsNewPage');
            }
            else {
                this.navCtrl.setRoot('DashboardPage');
                // this.navCtrl.setRoot('WhatsNewPage');
            }
        }
        else {
            this.slides.slideNext();
        }
        this.slides.lockSwipes(true);
    };
    SplashesPage.prototype.skip = function () {
        this.bannerClevertap('', 'skip');
        this.navCtrl.setRoot('DashboardPage');
        // this.navCtrl.setRoot('WhatsNewPage');
    };
    SplashesPage.prototype.vidEnded = function () {
        this.splash_type = 'splash';
    };
    SplashesPage.prototype.bannerClevertap = function (banner_obj, userAction) {
        if (this.type == "sponsordBy") {
            var sponsorType = "sponsorContent";
        }
        else {
            var sponsorType = "PoweredByContent";
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
            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
            "location": localStorage.getItem('location'),
            "popOverId": banner_obj.id,
            "sponsoredName": banner_obj.sponsorName,
            "contentType": banner_obj.contentType,
            "userAction": userAction,
            "specialities": localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
            "sponsor_type": sponsorType
        };
        this.clevertap_object.recordEventWithNameAndProps("popoverClick", params);
    };
    SplashesPage.prototype.qnaSite = function (forum) {
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
                var myModalOptions_1 = {
                    enableBackdropDismiss: false
                };
                _this.storage_object.get('user_logged_in').then(function (val) {
                    _this.http_service_object.getUserInfoByLiveId(val).subscribe(function (data) {
                        if (data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities == 'Non-Healthcare Professional' || data.specialities == 'Healthcare Industry Professional') {
                            _this.email = data.email;
                            _this.username = data.username;
                            if (_this.email == '' || _this.username == '' || _this.username == null) {
                                var myModal = _this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata: data }, myModalOptions_1);
                                myModal.present();
                                myModal.onDidDismiss(function (data) {
                                    console.log("I have dismissed.");
                                });
                                myModal.onWillDismiss(function (data) {
                                    console.log("I'm about to dismiss");
                                });
                            }
                            else {
                                _this.redirectToForumDashboard({ 'email': _this.email, 'username': _this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title': forum.title, 'user_type': 'Patient' });
                            }
                        }
                        else {
                            _this.email = data.email;
                            _this.username = data.username;
                            if (_this.email == '' || _this.username == '' || _this.username == null) {
                                var myModal = _this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata: data }, myModalOptions_1);
                                myModal.present();
                                myModal.onDidDismiss(function (data) {
                                    console.log("I have dismissed.");
                                });
                                myModal.onWillDismiss(function (data) {
                                    console.log("I'm about to dismiss");
                                });
                            }
                            else {
                                _this.redirectToForumDashboard({ 'email': _this.email, 'username': _this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title': forum.title, 'user_type': 'Doctor' });
                            }
                        }
                    });
                });
            }
        });
    };
    SplashesPage.prototype.redirectToForumDashboard = function (object) {
        var _this = this;
        var params = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "userRoleId": localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "userEmail": localStorage.getItem('cv5userEmail'),
            "Identity": localStorage.getItem('userIdentity'),
            "userName": object.username,
            "tags": "From Splashes",
            "nameOfClickedContent": object.forum_title,
            "location": localStorage.getItem('location'),
            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
            "specialities": localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
        };
        this.clevertap_object.recordEventWithNameAndProps("openedForum", params);
        var text_arr = [object.username, object.email, object.first_time, object.forum_slug];
        var text = JSON.stringify(text_arr);
        var encode_string = window.btoa(text);
        if (object.user_type == 'Patient') {
            var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t=' + encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
            ref.on('loadstop').subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
        else {
            var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t=' + encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
            ref.on('loadstop').subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], SplashesPage.prototype, "slides", void 0);
    SplashesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-splashes',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\splashes\splashes.html"*/'\n\n\n\n<ion-content *ngIf="type == \'PoweredBy\'">\n\n    <!-- <ion-slides pager #slides (ionSlideDidChange)="slideChanged()"  direction="vertical"> -->\n\n    <ion-slides pager="false" #slides (ionSlideDidChange)="slideChanged()"  direction="vertical">\n\n        <ion-slide *ngFor="let data of snapshot; let i = index;" background-size [ngStyle]="{ \'background-image\': \'url(\'+ data.imageUrl +\')\' }" style="">\n\n\n\n            <button ion-button class="animated learn_more" color="primary" (click)="learn_more(data)">Learn More</button>\n\n           <button ion-button class="animated next" color="primary" [hidden]="isLastSlide" (click)="next(data)">NEXT</button>\n\n           <button ion-button class="animated next" color="primary" [hidden]="!isLastSlide" (click)="next(data)">Skip</button>\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n</ion-content>\n\n\n\n<ion-content *ngIf="type != \'PoweredBy\'">\n\n   <!--  <ion-slides pager #slides (ionSlideDidChange)="slideChanged()"  direction="vertical"> -->\n\n    <ion-slides pager="false" #slides (ionSlideDidChange)="slideChanged()"  direction="vertical">\n\n\n\n        <ion-slide *ngFor="let data of snapshot; let i = index;" background-size [ngStyle]="{ \'background-image\': \'url(\'+ data.imageUrl +\')\' }" style="">\n\n\n\n            <button ion-button class="animated learn_more" color="primary" (click)="learn_more(data)">Learn More</button>\n\n\n\n           <button ion-button class="animated next" color="primary" [hidden]="isLastSlide" (click)="next(data)">NEXT</button>\n\n           \n\n\n\n           <button ion-button class="animated next" color="primary" [hidden]="!isLastSlide" (click)="next(data)">Skip</button>\n\n      </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\splashes\splashes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], SplashesPage);
    return SplashesPage;
}());

//# sourceMappingURL=splashes.js.map

/***/ })

});
//# sourceMappingURL=23.js.map