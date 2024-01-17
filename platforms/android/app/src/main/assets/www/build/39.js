webpackJsonp([39],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BellNotificationListPageModule", function() { return BellNotificationListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bell_notification_list__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BellNotificationListPageModule = /** @class */ (function () {
    function BellNotificationListPageModule() {
    }
    BellNotificationListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bell_notification_list__["a" /* BellNotificationListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bell_notification_list__["a" /* BellNotificationListPage */]),
            ],
        })
    ], BellNotificationListPageModule);
    return BellNotificationListPageModule;
}());

//# sourceMappingURL=bell-notification-list.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BellNotificationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_screen_orientation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(50);
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












/**
 * Generated class for the BellNotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BellNotificationListPage = /** @class */ (function () {
    function BellNotificationListPage(navCtrl, injector) {
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.isRecording = false;
        this.isListening = false;
        this.data = {};
        this.events = {};
        this.email = '';
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.popover_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* PopoverController */]);
        this.speech_recognition_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */]);
        this.in_app_browser_object = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_clevertap__["a" /* CleverTap */]();
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__services_loading_service__["a" /* LoadingService */]);
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        var that = this;
        this.userTYPE = localStorage.getItem('cv5usrType');
        this.events = {
            'onItemClick': function (item) {
                var params = {
                    "record_time": that.dtStr,
                    "record_date": that.clevertapDate,
                    "os": localStorage.getItem('getDevicePlatform'),
                    "modelNo": localStorage.getItem('modelNo'),
                    "deviceversion": localStorage.getItem('getDeviceversion'),
                    "userRoleId": localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "userEmail": localStorage.getItem('cv5userEmail'),
                    "location": localStorage.getItem('location'),
                    "specialities": localStorage.getItem('usrSpecialities'),
                    "title": item.title,
                    "ContentFor": item.contentFor,
                    "contentType": item.contentType,
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                };
                that.clevertap_object.recordEventWithNameAndProps("clickedBellNotification", params);
                if (item.contentType == 'video') {
                    switch (item.template) {
                        case "expert_playlist":
                            var list_json = JSON.parse(item.list_values);
                            that.loading_service_object.show();
                            if (item.contentFor == 'education') {
                                item['type'] = 'expert_playlist';
                                item['source'] = 'education';
                                //item['list_values'] = item.contentList;
                                var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + list_json[0] + " AND isActive = 1");
                                that.database_provider_object.fetchAllData('new_sub_topics', json_query).then(function (topic_data) {
                                    setTimeout(function () {
                                        that.navCtrl.push('WhatsNewDetailsPage', { data: item, type: item.template, index: 0, 'header': 'hide', 'display_playlist': topic_data[0] });
                                        that.loading_service_object.hide();
                                    }, 2000);
                                });
                            }
                            else if (item.contentFor == 'information') {
                                item['type'] = 'expert_playlist';
                                item['source'] = 'education';
                                //item['list_values'] = item.contentList;	
                                var json_query = new Array("join information_data on information.id = information_data.id where information.id = " + JSON.parse(item.contentList) + " AND isActive = 1");
                                that.database_provider_object.fetchAllData('information', json_query).then(function (topic_data) {
                                    setTimeout(function () {
                                        that.navCtrl.push('WhatsNewDetailsPage', { data: item, type: item.template, index: 0, 'header': 'hide', 'display_playlist': topic_data[0] });
                                        that.loading_service_object.hide();
                                    }, 2000);
                                });
                            }
                            break;
                        case "video_detail":
                            var list_json = JSON.parse(item.list_values);
                            var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + list_json[0]);
                            that.database_provider_object.fetchAllData('new_sub_topics', querystring).then(function (data) {
                                that.navCtrl.push('VideoDetailsPage', { pageItem: data[0].name, coloR: data[0].hexcodeBase, icondash: data[0].iconName, data: data[0], 'header': 'show', 'request_from': 'video_list' });
                            });
                            break;
                        case "tab_list":
                            item['source'] = item.contentFor;
                            //item['list_values'] = item.contentList;	
                            localStorage.setItem('segment_name', item.contentFor);
                            that.navCtrl.push('ItemDetailsPageTabs', { pageItem: item.title, data: item, request_from: 'whatsnew_page' });
                            break;
                        default:
                            // code...
                            break;
                    }
                }
                else if (item.contentType == 'image') {
                    var imgUrl = JSON.parse(item.list_values);
                    var ref = that.in_app_browser_object.create(imgUrl.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                    ref.on('loadstop').subscribe(function (event) {
                        that.screen_orientation_object.unlock();
                    });
                    ref.on('exit').subscribe(function (event) {
                        that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                    });
                }
                else if (item.contentType == 'link' && item.template == 'forum') {
                    var values = JSON.parse(item.list_values);
                    that.qnaSite({ 'slug': values.slug, 'title': item.name }, 'From WhatsNew Banner');
                }
                else if (item.contentType == 'link' || item.contentType == 'pdf') {
                    var contentUrl = JSON.parse(item.list_values);
                    var ref = that.in_app_browser_object.create(contentUrl.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                    ref.on('loadstop').subscribe(function (event) {
                        that.screen_orientation_object.unlock();
                    });
                    ref.on('exit').subscribe(function (event) {
                        that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                    });
                }
                else if (item.contentType == 'draw_on_images') {
                    var imgUrl = JSON.parse(item.list_values);
                    that.navCtrl.push('DrawonPage', { drawnurl: imgUrl.url, drawOnImgTitle: item.title, drawnCopyright: item.title, drawnSubtopicType: 'image' });
                }
                else if (item.contentType == 'qr_code') {
                    var itmUrl = JSON.parse(item.list_values);
                    that.navCtrl.push('QrcodePage', { previousPage: 'channellist', qrUrl: itmUrl.url });
                }
                var querystring = new Array("UPDATE freshNotificationList SET messageSeen = 1 WHERE notification_id = " + item.notification_id);
                that.database_provider_object.updateData(querystring);
            },
        };
    }
    BellNotificationListPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popover_controller_object.create('PopoverPage', {}, { cssClass: 'custom-popover' });
        popover.present({
            ev: myEvent,
            animate: false
        });
    };
    BellNotificationListPage.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    BellNotificationListPage.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    BellNotificationListPage.prototype.isGroupShown = function (group) {
        return group.show;
    };
    BellNotificationListPage.prototype.playVideoWithMsg = function (path, CopyRightMsg) {
        //let options: StreamingVideoOptions = {
    };
    BellNotificationListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.data.items = [];
        var notiCondition = new Array("WHERE isActive=1 ORDER BY position DESC");
        this.database_provider_object.fetchAllData('freshNotificationList', notiCondition).then(function (notiresult) {
            var maxValObject = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["max"](notiresult, 'notification_id');
            if (maxValObject.notification_id) {
                localStorage.setItem('notificationID', maxValObject.notification_id);
            }
            _this.data.items = notiresult;
            setTimeout(function () {
                _this.totalLength1 = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["size"](_this.data.items);
            }, 500);
        });
    };
    BellNotificationListPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BellNotificationListPage.prototype.clearAll = function () {
        var _this = this;
        var clearPopup = this.alert_controller_object.create({
            title: 'Clear all',
            message: 'Are you sure you want to delete all notifications?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.database_provider_object.deleteRecords("DELETE FROM freshNotificationList");
                        var lastNotiID = localStorage.getItem('notificationID');
                        localStorage.setItem('notificationID', lastNotiID);
                        _this.data.items = [];
                        var notiCondition = new Array("");
                        _this.database_provider_object.fetchAllData('freshNotificationList', notiCondition).then(function (notiresult) {
                            _this.data.items = notiresult;
                            setTimeout(function () {
                                _this.totalLength1 = __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["size"](_this.data.items);
                            }, 500);
                        });
                    }
                }
            ]
        });
        clearPopup.present();
    };
    BellNotificationListPage.prototype.hasPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speech_recognition_object.hasPermission()];
                    case 1:
                        permission = _a.sent();
                        return [2 /*return*/, permission];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BellNotificationListPage.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.speech_recognition_object.requestPermission();
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    BellNotificationListPage.prototype.qnaSite = function (forum, tagTYPE) {
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
                            var confirmPopup = _this.alert_controller_object.create({
                                title: '',
                                message: '<h4 style="color:#ffffff; text-align:center;"></h4><p style="color:#ffffff; text-align:center;font-weight:700;">Only for Heathcare professionals.</p>',
                                enableBackdropDismiss: true,
                                buttons: ['Dismiss']
                            });
                            confirmPopup.present();
                        }
                        else {
                            _this.email = data.email;
                            _this.username = data.username;
                            if (_this.email == '' || _this.username == '' || _this.username == null) {
                                var myModal = _this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata: data }, myModalOptions_1);
                                myModal.present();
                                myModal.onDidDismiss(function (data) {
                                });
                                myModal.onWillDismiss(function (data) {
                                });
                            }
                            else {
                                _this.redirectToForumDashboard({ 'email': _this.email, 'username': _this.username, 'forum_slug': forum.slug, 'first_time': 'no', 'forum_title': forum.title, 'clevertap_tag': tagTYPE });
                            }
                        }
                    }, function (err) {
                        console.log(err);
                    });
                });
            }
        });
    };
    BellNotificationListPage.prototype.redirectToForumDashboard = function (object) {
        var _this = this;
        var text_arr = [object.username, object.email, object.first_time, object.forum_slug];
        var text = JSON.stringify(text_arr);
        var encode_string = window.btoa(text);
        var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t=' + encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        ref.on('loadstop').subscribe(function (event) {
            _this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe(function (event) {
            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], BellNotificationListPage.prototype, "content", void 0);
    BellNotificationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bell-notification-list',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\bell-notification-list\bell-notification-list.html"*/'<!--\n  Generated template for the BellNotificationListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar hideBackButton>\n    <div left tappable (click)="goBack()" class="customIcon">\n      <!-- <ion-icon class="" style="font-size: 1.5em;color: #fff !important;" ios="icon-backarrow" md="md-arrow-back" class="icon-backarrow"> \n      </ion-icon>-->\n      <ion-icon class="" style="font-size:2em;color: #fff;" class="customIcon" name="arrow-back"></ion-icon>\n\n      <ion-title style="text-align: center;position:absolute;top:15px;left:30%;"> \n        <span class="icon-bell bellIconClass notificationiconClass"></span><b class="notiHeader">Notifications</b>\n      </ion-title>\n    </div>\n  </ion-navbar>\n  <div class="page-sub-title" (click)="clearAll()" *ngIf="totalLength1 > 0" style="margin-bottom: 5px;">Clear all</div>\n</ion-header>\n\n<ion-content class="bellContentList" style="background-color: #fff !important;">\n  <ion-grid no-padding>\n    <ion-row *ngIf="totalLength1 > 0">\n      <ion-col col-12>\n        <ion-list no-margin lines="full">\n          <ul no-margin no-padding>\n            <li *ngFor="let group of data.items;">\n              <ion-card > \n              <div class="notificationList" style="">\n                <ion-item transparent  (click)="onEvent(\'onItemClick\', group, $event)" style="border-bottom: 1px solid #ffffff;" class="item_Class" [ngClass]="group.messageSeen  == \'1\' ? \'readMsg\' : \'unreadMsg\'">\n                  \n                    <ion-thumbnail item-start class="imgThumbClass" *ngIf="group.contentImage != \'null\'" no-margin no-padding>\n                      <img [src]="group.contentImage" class="" alt="{{group.title}}" [ngClass]="group.contentType  == \'video\' ? \'ractangleClass\' : \'imgClass\'"/>\n\n                        <i *ngIf="group.contentType == \'video\'" class="icon-play notificationIcon" style=""></i>\n                        <i *ngIf="group.contentType == \'draw_on_images\'" class="icon-pencil notificationIcon"  style=""></i>\n                        <i *ngIf="group.contentType == \'image\'" class="icon-sheet notificationIcon"  style=""></i>\n                        \n                        <i *ngIf="group.contentType == \'document\'" class="icon-sheet notificationIcon"  style=""></i>\n\n                        <i *ngIf="group.contentType == \'link\' && group.contentImage != \'null\'" class="icon-link notificationIcon"  style=""></i>\n                        <i *ngIf="group.contentType == \'qr_code\'" class="icon-qrcode notificationIcon" style=""></i>\n                    </ion-thumbnail>\n\n                    <div class="titleDesc">\n                      <h2 class="notificatiotitle"><b>{{group.title}}</b></h2>\n                      <span class="notificatiodescription">{{group.description}}</span>\n                    </div>\n\n\n                </ion-item>\n              </div>\n              </ion-card>  \n            </li>\n\n          </ul>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="totalLength1 == 0">\n      <ion-col col-12 no-padding>\n        <ion-list no-margin>\n          <ul>\n          <ion-item style="min-height:150px;" class="noDataFound">\n            <p class="noFound bellNotifnotfound"> No notifications feed found </p>\n          </ion-item>\n          </ul>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\bell-notification-list\bell-notification-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], BellNotificationListPage);
    return BellNotificationListPage;
}());

//# sourceMappingURL=bell-notification-list.js.map

/***/ })

});
//# sourceMappingURL=39.js.map