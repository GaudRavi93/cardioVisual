webpackJsonp([44],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoadingService = /** @class */ (function () {
    function LoadingService(platform, loadingCtrl, clevertap, httpservice, http, storage) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.clevertap = clevertap;
        this.httpservice = httpservice;
        this.http = http;
        this.storage = storage;
        this.localapi = this.httpservice.getApi();
    }
    LoadingService.prototype.clevertapInitializeinApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            /*------------------------------------- clevertap -------------------------------------*/
            document.addEventListener('onCleverTapProfileDidInitialize', function (e) {
                //console.log('hjhhh===');
                //alert('hi--1--ts');
                console.log("onCleverTapProfileDidInitialize");
            });
            document.addEventListener('onCleverTapInAppNotificationDismissed', function (e) {
                console.log("onCleverTapInAppNotificationDismissed");
            });
            document.addEventListener('onDeepLink', function (e) {
                console.log("onDeepLink");
            });
            document.addEventListener('onPushNotification', function (e) {
                console.log("onPushNotification");
            });
            _this.clevertap.setDebugLevel(2);
            _this.clevertap.enablePersonalization();
            _this.clevertap.registerPush();
            /*-------------------------------End CleverTap--------------------------------------------------------------*/
        });
    };
    LoadingService.prototype.generateandSaveLinks = function (userID, local_user_type, email) {
        //alert('for link and Id -->'+branchlink + '-------- '+ userID+ '-----------'+local_user_type+ ' ---- '+email);
        var _this = this;
        setTimeout(function () {
            var properties1 = {
                canonicalIdentifier: 'cardiovisual',
                title: 'CardioVisual'
            };
            // optional fields
            var analytics = {
                channel: 'cardio_android_app',
                feature: 'sharing',
                campaign: 'refereres',
                stage: 'share_social',
                type: 2
            };
            // optional fields
            var properties = {
                match_duration: -1,
                profession: local_user_type,
                user_email: email,
                clevertapId: localStorage.getItem('getCleverTapID'),
                time_stamp: Date.now(),
                referral_code: localStorage.getItem('referral_code')
            };
            //var env = "live";
            var env = "";
            var branchUniversalObj = null;
            var Branch = window["Branch"];
            Branch.createBranchUniversalObject(properties1).then(function (res) {
                res.generateShortUrl(analytics, properties).then(function (res) {
                    console.log('Response:--> ' + JSON.stringify(res.url));
                    localStorage.setItem('isLinkSet', res.url);
                });
            });
            //alert(' ---------------------------->'+this.localapi+"/regBranch?c_id="+localStorage.getItem('getCleverTapID')+"&branch_link="+localStorage.getItem('isLinkSet')+"&liveId="+userID+"&env="+env);
            //console.log(' whats new---------------------------->'+this.localapi+"/regBranch?c_id="+localStorage.getItem('getCleverTapID')+"&branch_link="+localStorage.getItem('isLinkSet')+"&liveId="+localStorage.getItem('liveId')+"&env="+env);
            setTimeout(function () {
                _this.http.get(_this.localapi + "/regBranch?c_id=" + localStorage.getItem('getCleverTapID') + "&branch_link=" + localStorage.getItem('isLinkSet') + "&liveId=" + userID + "&env=" + env).map(function (res) { return res.json(); }).subscribe(function (data) {
                    //alert('-----ghgddghdh---------->'+JSON.stringify(data));
                    //console.log('whats new-----ghgddghdh---------->'+JSON.stringify(data));
                    //localStorage.setItem('isLinkSet',res.url);  
                });
            }, 1500);
        }, 500);
        //}
    };
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.userregistrationshow = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registering the user...'
        });
        this.loading.present();
    };
    LoadingService.prototype.googleSignInLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Google Logging in...'
        });
        this.loading.present();
    };
    LoadingService.prototype.facebookSignInLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Facebook Logging in...'
        });
        this.loading.present();
    };
    LoadingService.prototype.login = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Logging in, please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.inappLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Processing...'
        });
        this.loading.present();
    };
    LoadingService.prototype.userspecialities = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registering the specialities...'
        });
        this.loading.present();
    };
    LoadingService.prototype.usercountry = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registering the country...'
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_clevertap__["a" /* CleverTap */], __WEBPACK_IMPORTED_MODULE_4__HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosharesocialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_screen_orientation__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/*
  Generated class for the VideosharesocialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VideosharesocialProvider = /** @class */ (function () {
    function VideosharesocialProvider(injector) {
        this.injector = injector;
        this.email = '';
        this.username = '';
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.social_sharing_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_10__ionic_native_clevertap__["a" /* CleverTap */]();
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
    }
    VideosharesocialProvider.prototype.ionViewWillEnter = function () {
    };
    // single video share start by sanjeev 26 jul
    VideosharesocialProvider.prototype.shareSingleVideo = function (shareVideo) {
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
                if (shareVideo.otherType) {
                    // code...
                    var shareContentTypefor = "Information";
                }
                else {
                    var shareContentTypefor = "Education";
                }
                var title = shareVideo.title;
                var name = shareVideo.name;
                var description = shareVideo.description;
                var iconUrl = shareVideo.iconUrl;
                var url = shareVideo.shareUrl;
                var id = shareVideo.id;
                var options = {
                    message: name + ' - ' + description + '.  Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
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
                    "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                    "location": localStorage.getItem('location'),
                    "specialities": localStorage.getItem('usrSpecialities'),
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                    "Identity": localStorage.getItem('userIdentity'),
                    "sharedcontentTypeFor": shareContentTypefor,
                    "videoName": name,
                    "videoId": id
                };
                _this.clevertap_object.recordEventWithNameAndProps("sharedVideo", params); // Set clevertap Custom AppLaunch event.
                //alert('options-->'+JSON.stringify(options));
                //this.social_sharing_object.shareWithOptions(options);
                //this.social_sharing_object.share(message,subject, this.url, this.drawOnImgTitle)
                _this.social_sharing_object.shareWithOptions(options)
                    .then(function (shareentries) {
                    if (shareentries.completed) {
                        // code...
                        _this.toast_service_object.mypresentToast("Successfully shared  '" + name + "' Video.", 1500);
                    }
                    if (localStorage.getItem('ratingDialogShown') == null || localStorage.getItem('ratingDialogShown') == 'null' || localStorage.getItem('ratingDialogShown') == "" || localStorage.getItem('ratingDialogShown') == "undefined") {
                        _this.http_service_object.showRateDialogueBox();
                        localStorage.setItem('ratingDialogShown', 'true');
                    }
                })
                    .catch(function (error) {
                    //console.log('sharing error' + JSON.stringify(error));
                });
            }
        });
    };
    // end
    VideosharesocialProvider.prototype.sharePlaylistVideo = function (sharePlaylist) {
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
                var title = sharePlaylist.title;
                var playlistName = sharePlaylist.name;
                var description = sharePlaylist.description;
                var iconUrl = sharePlaylist.iconUrl;
                var url = sharePlaylist.shareUrl;
                var id = sharePlaylist.id;
                var options = {
                    message: playlistName + ' - ' + description + '. Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
                    files: [],
                    url: url,
                    chooserTitle: 'Share ' + playlistName //'' // Android only, you can override the default share sheet title 
                };
                var params = {
                    "record_time": _this.dtStr,
                    "record_date": _this.clevertapDate,
                    "os": localStorage.getItem('getDevicePlatform'),
                    "userRoleId": localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "userEmail": localStorage.getItem('cv5userEmail'),
                    "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                    "location": localStorage.getItem('location'),
                    "specialities": localStorage.getItem('usrSpecialities'),
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                    "Identity": localStorage.getItem('userIdentity'),
                    "playlistName": playlistName,
                    "playlistId": id
                };
                _this.clevertap_object.recordEventWithNameAndProps("sharedPlaylist", params); // Set clevertap Custom AppLaunch event.
                //this.social_sharing_object.shareWithOptions(options);
                //this.social_sharing_object.share(message,subject, this.url, this.drawOnImgTitle)
                _this.social_sharing_object.shareWithOptions(options)
                    .then(function (sharePlaylist) {
                    if (sharePlaylist.completed) {
                        // code...
                        _this.toast_service_object.mypresentToast("Successfully shared '" + playlistName + "' playlist.", 1500);
                    }
                    if (localStorage.getItem('ratingDialogShown') == null || localStorage.getItem('ratingDialogShown') == 'null' || localStorage.getItem('ratingDialogShown') == "" || localStorage.getItem('ratingDialogShown') == "undefined") {
                        _this.http_service_object.showRateDialogueBox();
                        localStorage.setItem('ratingDialogShown', 'true');
                    }
                })
                    .catch(function (error) {
                    //console.log('sharing error' + JSON.stringify(error));
                });
            }
        });
    };
    VideosharesocialProvider.prototype.downloadVideo = function (downloadVideoData, contentType) {
        var downloadparams = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "userRoleId": localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "userEmail": localStorage.getItem('cv5userEmail'),
            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
            "location": localStorage.getItem('location'),
            "specialities": localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
            "Identity": localStorage.getItem('userIdentity'),
            "downloadContentFor": contentType,
            "videoname": downloadVideoData.name
        };
        this.clevertap_object.recordEventWithNameAndProps("downloadVideo", downloadparams);
    };
    VideosharesocialProvider.prototype.discussPromptForProffesional = function (forumData, tagTYPE, fromWhere) {
        var _this = this;
        var checkLocation = new Array("");
        this.database_provider_object.fetchAllData('new_user_info', checkLocation).then(function (locationData) {
            var newUserLocation = locationData[0].location;
            var usr_specialities = locationData[0].specialities;
            var usr_roleID = locationData[0].userRoleId;
            var myModalOptions = {
                enableBackdropDismiss: false
            };
            if (usr_specialities == '' || usr_specialities == 'null' || usr_specialities == undefined || usr_specialities == null || usr_specialities == 'undefined') {
                var myModal = _this.modal_controllar_object.create('ModalPage', { data: 'ProfessionInfo', userRoleID: localStorage.getItem('cv5userRoleId'), closeModel: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Modal */] }, myModalOptions);
                myModal.present();
                myModal.onDidDismiss(function (modeldata) {
                    var submitData = localStorage.getItem('professionSubmit');
                    if (submitData == 'yes') {
                        localStorage.setItem('professionSubmit', '');
                        _this.forumCheckForHcp(forumData, tagTYPE, fromWhere);
                    }
                });
                myModal.onWillDismiss(function (modeldata) {
                    //console.log("I'm about to dismiss");
                });
            }
            else {
                _this.forumCheckForHcp(forumData, tagTYPE, fromWhere);
            }
        });
    };
    /*

    forumCheckForHcp(tagTYPE){
        this.platform_object.ready().then(() => {
            let user_type = localStorage.getItem('cv5usrType');
            const nameCapitalized = user_type.charAt(0).toUpperCase() + user_type.slice(1);
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
                    this.email = data.email;
                    this.username = data.username;
                    var that = this;
                    var speciality_query:string[] = new Array("WHERE name='specialitiesList' AND type='specialitiesList'");
                        this.database_provider_object.fetchAllData('custom_listing' , speciality_query).then(speciality_listing_data => {

                            if(speciality_listing_data.length > 0){

                                var speciality_list = JSON.parse(speciality_listing_data[0].list_values);

                                var forParticularSpeciality = _.filter(speciality_list,function(json_for){
                                    return (json_for.usertype ==  nameCapitalized);
                                });
                                
                                _.each(forParticularSpeciality,function(value,index){
                                    if(data.userRoleSubType == value.sub_Specialities|| data.specialities == value.specialities ){
                                        localStorage.setItem('onlyForHcpChk', 'yes');
                                    }
                                });
                            }
                            setTimeout(() => {

                                if (localStorage.getItem('onlyForHcpChk') == 'yes') {
                                    var confirmPopup = that.alert_controller_object.create({
                                        title: '',
                                        message: '<h4 style="color:#ffffff; text-align:center;"></h4><p style="color:#ffffff; text-align:center;font-weight:700;">Only for Heathcare professionals.</p>',
                                        enableBackdropDismiss: true,
                                        buttons: ['Dismiss']
                                    });
                                    confirmPopup.present();
                                    localStorage.setItem('onlyForHcpChk', 'no');
                                }else{
                                    if(that.email =='' || that.username == '' || that.username == null){
                                        const myModal: Modal = that.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
                                        myModal.present();

                                        myModal.onDidDismiss((data) => {
                                            console.log("I have dismissed.");
                                        });

                                        myModal.onWillDismiss((data) => {
                                            console.log("I'm about to dismiss");
                                        });
                                    }else{
                                        if (nameCapitalized == 'Patient') {
                                            that.redirectToForumDashboard({'email': this.email, 'username': that.username, 'first_time': 'no','user_type':'Patient','clevertap_tag': tagTYPE});

                                        }else if (nameCapitalized == 'Doctor') {
                                            that.redirectToForumDashboard({'email': this.email, 'username': this.username, 'first_time': 'no', 'user_type':'Doctor', 'clevertap_tag': tagTYPE});
                                        }
                                    }
                                }
                            },500);
                        });
                    }, err => {
                        //console.log('err->'+err);
                    });
                });
             }
        });
    }

    */
    VideosharesocialProvider.prototype.forumCheckForHcp = function (forumData, tagTYPE, fromWhere) {
        var _this = this;
        this.platform_object.ready().then(function () {
            var user_type = localStorage.getItem('cv5usrType');
            var nameCapitalized = user_type.charAt(0).toUpperCase() + user_type.slice(1);
            var network_type = _this.network_check_object.getNetworkType();
            if (network_type == 'none') {
                _this.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                }).present();
            }
            else {
                if (forumData.forum_tags == undefined || forumData.forum_tags == 'undefined') {
                    var forum_tags = forumData.slug;
                }
                else {
                    var forum_tags = forumData.forum_tags;
                }
                var myModalOptions_1 = {
                    enableBackdropDismiss: false
                };
                _this.storage_object.get('user_logged_in').then(function (val) {
                    _this.http_service_object.getUserInfoByLiveId(val).subscribe(function (data) {
                        _this.email = data.email;
                        _this.username = data.username;
                        var that = _this;
                        var speciality_query = new Array("WHERE name='specialitiesList' AND type='specialitiesList'");
                        _this.database_provider_object.fetchAllData('custom_listing', speciality_query).then(function (speciality_listing_data) {
                            if (speciality_listing_data.length > 0) {
                                var speciality_list = JSON.parse(speciality_listing_data[0].list_values);
                                var forParticularSpeciality = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["filter"](speciality_list, function (json_for) {
                                    return (json_for.usertype == nameCapitalized);
                                });
                                __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["each"](forParticularSpeciality, function (value, index) {
                                    if (data.userRoleSubType == value.sub_Specialities || data.specialities == value.specialities) {
                                        localStorage.setItem('onlyForHcpChk', 'yes');
                                    }
                                });
                            }
                            setTimeout(function () {
                                if (localStorage.getItem('onlyForHcpChk') == 'yes') {
                                    var confirmPopup = that.alert_controller_object.create({
                                        title: '',
                                        message: '<h4 style="color:#ffffff; text-align:center;"></h4><p style="color:#ffffff; text-align:center;font-weight:700;">Only for Heathcare professionals.</p>',
                                        enableBackdropDismiss: true,
                                        buttons: ['Dismiss']
                                    });
                                    confirmPopup.present();
                                    localStorage.setItem('onlyForHcpChk', 'no');
                                }
                                else {
                                    if (that.email == '' || that.username == '' || that.username == null) {
                                        var myModal = that.modal_controllar_object.create('ModalPage', { data: 'forum', userdata: data }, myModalOptions_1);
                                        myModal.present();
                                        myModal.onDidDismiss(function (data) {
                                            //console.log("I have dismissed.");
                                        });
                                        myModal.onWillDismiss(function (data) {
                                            //console.log("I'm about to dismiss");
                                        });
                                    }
                                    else {
                                        if (nameCapitalized == 'Patient') {
                                            if (fromWhere == 'From WhatsNew' || fromWhere == 'From Branch Link') {
                                                that.redirectToForumDashboard({ 'email': that.email, 'username': that.username, 'forum_slug': forumData.slug, 'first_time': 'no', 'forum_title': forumData.title, 'clevertap_tag': tagTYPE, 'user_type': 'Patient' }, fromWhere);
                                            }
                                            else if (fromWhere == 'From Video Details' || fromWhere == 'From WhatsNew Details' || fromWhere == 'From Info Video Details') {
                                                that.redirectToForumDashboard({ 'email': that.email, 'username': that.username, 'first_time': 'no', 'forum_tags': forum_tags, 'user_type': 'Patient', 'clickedItem': forumData.name }, fromWhere);
                                            }
                                            else {
                                                that.redirectToForumDashboard({ 'email': that.email, 'username': that.username, 'first_time': 'no', 'user_type': 'Patient', 'clevertap_tag': tagTYPE }, fromWhere);
                                            }
                                        }
                                        else if (nameCapitalized == 'Doctor') {
                                            if (fromWhere == 'From WhatsNew' || fromWhere == 'From Branch Link') {
                                                that.redirectToForumDashboard({ 'email': that.email, 'username': that.username, 'forum_slug': forumData.slug, 'first_time': 'no', 'forum_title': forumData.title, 'clevertap_tag': tagTYPE, 'user_type': 'Doctor' }, fromWhere);
                                            }
                                            else if (fromWhere == 'From Video Details' || fromWhere == 'From WhatsNew Details' || fromWhere == 'From Info Video Details') {
                                                that.redirectToForumDashboard({ 'email': that.email, 'username': that.username, 'first_time': 'no', 'forum_tags': forum_tags, 'user_type': 'Doctor', 'clickedItem': forumData.name }, fromWhere);
                                            }
                                            else {
                                                that.redirectToForumDashboard({ 'email': that.email, 'username': that.username, 'first_time': 'no', 'user_type': 'Doctor', 'clevertap_tag': tagTYPE }, fromWhere);
                                            }
                                        }
                                    }
                                }
                            }, 500);
                        });
                    }, function (err) {
                        //console.log('err->'+err);
                    });
                });
            }
        });
    };
    /*
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
            //"tags" : "/footer",
            "tags" : object.clevertap_tag,
            "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
            "location":localStorage.getItem('location'),
            "specialities":localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType')
        };

        //alert('params-->'+JSON.stringify(params));
        this.clevertap_object.recordEventWithNameAndProps("openedForum",params);

        var text_arr =[object.username, object.email, object.first_time];
        var text = JSON.stringify(text_arr);

        var encode_string = window.btoa(text);

        if(object.user_type == 'Patient'){

          var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        }else{
          var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        }
    }

    */
    VideosharesocialProvider.prototype.redirectToForumDashboard = function (object, fromWhere) {
        var _this = this;
        if (fromWhere == 'From WhatsNew' || fromWhere == 'From Branch Link') {
            var text_arr = [object.username, object.email, object.first_time, object.forum_slug];
            var tags = object.clevertap_tag;
            var nameOfClickedContent = object.forum_title;
        }
        else if (fromWhere == 'From Video Details' || fromWhere == 'From WhatsNew Details') {
            var text_arr = [object.username, object.email, object.first_time, object.forum_tags];
            var tags = object.forum_tags;
            var nameOfClickedContent = object.clickedItem;
        }
        else {
            var text_arr = [object.username, object.email, object.first_time];
            var tags = object.clevertap_tag;
            var nameOfClickedContent = object.clevertap_tag;
        }
        var text = JSON.stringify(text_arr);
        var encode_string = window.btoa(text);
        var params = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "userRoleId": localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "userEmail": localStorage.getItem('cv5userEmail'),
            "Identity": localStorage.getItem('userIdentity'),
            "userName": object.username,
            "tags": tags,
            "nameOfClickedContent": nameOfClickedContent,
            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
            "location": localStorage.getItem('location'),
            "specialities": localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType')
        };
        this.clevertap_object.recordEventWithNameAndProps("openedForum", params);
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
    VideosharesocialProvider.prototype.forVideoViewCount = function (userId, setCount, message) {
        var _this = this;
        this.http_service_object.allVideoViewsbyuser(userId).subscribe(function (forViewCount) {
            var setVideoViewCount = parseInt(setCount);
            var totalViewd = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["reduce"](forViewCount, function (memoizer, value) {
                return memoizer + value.videoViewCount;
            }, 0);
            if (totalViewd % setVideoViewCount == 0) {
                _this.specialitiesPopup(message);
            }
        }, function (forViewCounterr) {
            //console.log('forViewCounterr->'+forViewCounterr);
        });
    };
    VideosharesocialProvider.prototype.specialitiesPopup = function (mymessage) {
        var _this = this;
        var checkLocationSpec = new Array("");
        this.database_provider_object.fetchAllData('new_user_info', checkLocationSpec).then(function (locationData) {
            var newUserLocation = locationData[0].location;
            var usr_specialities = locationData[0].specialities;
            if (usr_specialities == '' || newUserLocation == '') {
                var confirmalert = _this.alert_controller_object.create({
                    title: '',
                    message: '<p style="color:#1c1b1b;">' + mymessage + '</p>',
                    cssClass: 'google-popup-pin',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: function () {
                                _this.storage_object.get('user_logged_in').then(function (val) {
                                    var text_arr = [val];
                                    var text = JSON.stringify(text_arr);
                                    var encode_string = window.btoa(text);
                                    var browser = _this.in_app_browser_object.create('https://profile.cardiovisual.com/user/' + encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                                    browser.on('exit').subscribe(function (event) {
                                        _this.updateLocalDB();
                                    });
                                });
                            }
                        }, {
                            text: 'No',
                            handler: function () {
                                //console.log("no clicked");
                            }
                        }
                    ],
                    enableBackdropDismiss: false // <- Here! :)
                });
                confirmalert.present();
            }
        });
    };
    VideosharesocialProvider.prototype.updateLocalDB = function () {
        var _this = this;
        var live_id = localStorage.getItem('userliveId');
        this.http_service_object.getUserInfoByLiveId(live_id).subscribe(function (data) {
            var userData = {
                "email": data.email,
                "username": data.username,
                "user_type": (data.userRoleId == 1) ? "doctor" : "patient",
                "isPaid": data.isPaid,
                "userRoleId": data.userRoleId,
                "discoveryMethodId": data.discoveryMethodId,
                "clevertapId": data.clevertapId,
                "liveId": live_id,
                "fullname": data.fullname,
                "password": data.password,
                "gender": data.gender,
                "birthyear": data.birthyear,
                "profilePic": data.profilePic,
                "medium": data.medium,
                "facebookId": data.facebookId,
                "specialities": data.specialities,
                "userRoleSubType": data.userRoleSubType,
                "verified": data.verified,
                "location": data.location,
                "state": data.state,
                "referral_code": data.referral_code,
                "referred_by": data.referred_by,
                "npi_number": data.npi_number,
                "npi_id": data.npi_id
            };
            localStorage.setItem('usrSpecialities', data.specialities);
            localStorage.setItem('location', data.location);
            localStorage.setItem('cv5usrRolesubType', data.userRoleSubType);
            _this.database_provider_object.storeUserdata(userData);
        });
    };
    VideosharesocialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], VideosharesocialProvider);
    return VideosharesocialProvider;
}());

//# sourceMappingURL=videosharesocial.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    //toast with timeout and positions => by Sanjeev kumar //mypresentToast(msg: string, time = 2000) {
    ToastService.prototype.mypresentToast = function (msg, time) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: "top" // top, middle , bottom
        });
        toast.present();
        setTimeout(function () {
            toast.dismiss();
            console.log("called dismiss");
        }, time + 500);
    };
    ToastService.prototype.mycustomToast = function (msg, time) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: "bottom" // top, middle , bottom
        });
        toast.present();
        setTimeout(function () {
            toast.dismiss();
            console.log("called dismiss");
        }, time + 500);
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/tabs/layout-2/tabs-layout-2.module": [
		729,
		43
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		728,
		42
	],
	"../pages/aaplaunchlocation/aaplaunchlocation.module": [
		731,
		41
	],
	"../pages/allcmetopiclist/allcmetopiclist.module": [
		730,
		40
	],
	"../pages/bell-notification-list/bell-notification-list.module": [
		733,
		39
	],
	"../pages/channel-list-tabs/channel-list-tabs.module": [
		734,
		2
	],
	"../pages/channels/channels.module": [
		732,
		15
	],
	"../pages/dashboard/dashboard.module": [
		735,
		7
	],
	"../pages/drawon/drawon.module": [
		736,
		14
	],
	"../pages/footer/footer.module": [
		727,
		38
	],
	"../pages/forgotpassword/forgotpassword.module": [
		737,
		37
	],
	"../pages/header/header.module": [
		726,
		36
	],
	"../pages/home/home.module": [
		738,
		35
	],
	"../pages/information-tab/information-tab.module": [
		739,
		6
	],
	"../pages/information-video-details/information-video-details.module": [
		746,
		21
	],
	"../pages/intro/intro.module": [
		741,
		34
	],
	"../pages/item-details-tabs/item-details-tabs.module": [
		744,
		1
	],
	"../pages/login/login.module": [
		740,
		33
	],
	"../pages/manage-devices/manage-devices.module": [
		742,
		13
	],
	"../pages/modal/modal.module": [
		743,
		32
	],
	"../pages/mycv/mycv.module": [
		745,
		12
	],
	"../pages/mydownloads/mydownloads.module": [
		749,
		11
	],
	"../pages/myfavorites/myfavorites.module": [
		747,
		10
	],
	"../pages/orientation-playlist-hcp/orientation-playlist-hcp.module": [
		748,
		31
	],
	"../pages/orientation-playlist-nonhcp/orientation-playlist-nonhcp.module": [
		750,
		30
	],
	"../pages/plandetails/plandetails.module": [
		751,
		20
	],
	"../pages/playlist/playlist.module": [
		753,
		5
	],
	"../pages/popover/popover.module": [
		752,
		29
	],
	"../pages/qrcode/qrcode.module": [
		754,
		0
	],
	"../pages/register/register.module": [
		757,
		28
	],
	"../pages/search/search.module": [
		755,
		19
	],
	"../pages/signupwithapple/signupwithapple.module": [
		756,
		27
	],
	"../pages/signupwithfacebook/signupwithfacebook.module": [
		758,
		26
	],
	"../pages/signupwithgoogle/signupwithgoogle.module": [
		760,
		25
	],
	"../pages/signupwithsocialnoemail/signupwithsocialnoemail.module": [
		759,
		24
	],
	"../pages/splashes/splashes.module": [
		761,
		23
	],
	"../pages/tab-page-2/tab-page-2.module": [
		763,
		4
	],
	"../pages/upgrade-plan/upgrade-plan.module": [
		762,
		18
	],
	"../pages/video-details/video-details.module": [
		766,
		17
	],
	"../pages/video-list/video-list.module": [
		764,
		9
	],
	"../pages/video/video.module": [
		765,
		22
	],
	"../pages/whats-new-details/whats-new-details.module": [
		768,
		16
	],
	"../pages/whats-new-seeall/whats-new-seeall.module": [
		767,
		8
	],
	"../pages/whats-new/whats-new.module": [
		769,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 262;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InappProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_purchase__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_loading_service__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the InappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InappProvider = /** @class */ (function () {
    function InappProvider(platform, http2, iap, http, httpservice, databaseprovider, loadingService) {
        var _this = this;
        this.platform = platform;
        this.http2 = http2;
        this.iap = iap;
        this.http = http;
        this.httpservice = httpservice;
        this.databaseprovider = databaseprovider;
        this.loadingService = loadingService;
        this.os = localStorage.getItem('getDevicePlatform');
        console.log('Hello InappProvider Provider');
        this.platform.ready().then(function () {
            _this.loadProducts();
            //this.restoreProducts();
        }); //device ready end
        this.localapi = this.httpservice.getApi();
    }
    InappProvider.prototype.products_array = function () {
        return ['cardio_pro_live2', 'cardio_pre_live3', 'cardiovisual_pro_monthly1'];
    };
    InappProvider.prototype.cv_subscriptionId = function () {
        return 'cardio_pre_live3';
        //return 'cardio_pre_test_1';
    };
    InappProvider.prototype.cv_productId = function () {
        return 'cardio_pro_live2';
    };
    InappProvider.prototype.cv_subscriptionId_monthly = function () {
        return 'cardiovisual_pro_monthly1';
        //return 'cardio_pro_testing14';
    };
    InappProvider.prototype.loadProducts = function () {
        var _this = this;
        //alert('kklllll');
        var productIds = this.products_array();
        console.log('inapp productIds--->' + productIds);
        //alert('productIds--->'+productIds);
        //this.iap.getProducts(['cardio_pro_live2','cardio_pre_test_1','cardio_pro_testing14']).then((products) => {
        this.iap.getProducts(['cardio_pro_live2', 'cardio_pre_live3', 'cardiovisual_pro_monthly1']).then(function (products) {
            //alert('products -------->'+JSON.stringify(products));
            console.log('inapp provider product details-->' + JSON.stringify(products));
            _this.productDetails = products;
            var prePrice = (products[0].price) == null ? "$2.99" : products[0].price; // after new price change
            var proPrice = (products[1].price) == null ? "$9.99" : products[1].price;
            var proMonthlyPrice = (products[2].price) == null ? "$0.99" : products[2].price;
            //alert('prePrice->'+prePrice +'  proPrice-->'+proPrice +'  proMonthlyPrice-->'+proMonthlyPrice);
            localStorage.setItem('prePrice', prePrice);
            localStorage.setItem('proPrice', proPrice);
            localStorage.setItem('proMonthlyPrice', proMonthlyPrice);
            //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
            _this.restoreProducts();
        })
            .catch(function (err) {
            //alert('inapp err --->'+JSON.stringify(err));
            console.log('inapp err --->' + JSON.stringify(err));
        });
    };
    InappProvider.prototype.restoreProducts = function () {
        //alert('kklllll');
        this.iap.restorePurchases().then(function (purchasesdata) {
            console.log(purchasesdata);
            this.restoreProductDetails = JSON.stringify(purchasesdata);
            //alert('restore purchasesdata data----->'+purchasesdata);
        })
            .catch(function (err) {
            console.log(err);
            console.log('restorePurchases err---->' + JSON.stringify(err));
            //alert('restorePurchases err---->'+ JSON.stringify(err));
        });
    };
    InappProvider.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad inapp');
    };
    InappProvider.prototype.allProductDetails = function () {
        return this.productDetails;
    };
    /**
     * This functions compares two date object i.e. current date with the date passed as an argument.
     * @param  {String} expiryDate - date in millisec
     * @return {boolean} - returns true if expired else returns false.
     */
    InappProvider.prototype.compareDate = function (expiryDate) {
        var currentDateMs = new Date().getTime(); //date in millisec		
        var curDate = new Date(currentDateMs);
        curDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate());
        expiryDate = Number(expiryDate);
        var expDate = new Date(expiryDate);
        expDate = new Date(expDate.getFullYear(), expDate.getMonth(), expDate.getDate());
        //alert('curDate-->'+curDate);		
        //alert('expDate-->'+expDate);		
        if (curDate > expDate)
            return true; //expired
        else
            return false; //not expired	
    };
    InappProvider.prototype.compareDatePromotionalAccess = function (created_at) {
        //alert('---created_at---'+created_at);
        var currentDateMs = new Date().getTime(); // current date in millisec    
        //var created_at = '2019-02-01T06:34:03.000Z';
        var dec31 = '2019-12-31T06:34:03.000Z';
        var starDate = new Date(created_at).getTime();
        var till_feb = '2019-02-22T06:34:03.000Z';
        var till_febInmilisec = new Date(till_feb).getTime();
        if (starDate < till_febInmilisec) {
            localStorage.setItem('shownContent', 'true'); //old content have to shown
        }
        else {
            localStorage.setItem('shownContent', 'false'); //new content have to shown
        }
        var endDate = new Date(dec31).getTime();
        var timeDiff = (endDate - starDate);
        var diffDays = timeDiff / (1000 * 3600 * 24);
        var productPurchaseDate = new Date(created_at).getTime(); // product created date in millisec
        productPurchaseDate += 1000 * 60 * 60 * 24 * diffDays; // Add  days to the created date
        localStorage.setItem('productActiveTill', new Date(productPurchaseDate).toDateString());
        if (productPurchaseDate >= currentDateMs) {
            return true;
        }
        else {
            return false;
        }
    };
    /* by sanjeev: expDate  */
    InappProvider.prototype.productDateExp = function (expiryDate) {
        expiryDate = Number(expiryDate);
        var expDate = new Date(expiryDate);
        expDate = new Date(expDate.getFullYear(), expDate.getMonth(), expDate.getDate());
        //alert('sqllite-->'+expDate);
        return expDate;
    };
    /* End */
    /**
     * This function saves user's pre/pro purchased information that we get from google to api
     * @param  {[object]} data- containing user's purchased data.
     * @param  {[integer]} liveId - cardiovisual user id
     * @sanjeev 14 jul 2019
    */
    InappProvider.prototype.saveInAppPurchaseDataToApi = function (data, liveId) {
        var _this = this;
        if (this.os != 'Android') {
            this.inappData = data;
        }
        else {
            var parsedReceipt = JSON.parse(data.receipt);
            var dateObj = Date.now();
            dateObj += 1000 * 60 * 60 * 24 * 2;
            this.inappData = {
                "autoRenewing": parsedReceipt.hasOwnProperty('autoRenewing') ? parsedReceipt['autoRenewing'] : "",
                "orderId": parsedReceipt['orderId'],
                "productType": data.productType,
                "productId": parsedReceipt['productId'],
                "purchaseState": parsedReceipt['purchaseState'],
                "purchaseTime": parsedReceipt['purchaseTime'],
                "purchaseToken": parsedReceipt['purchaseToken'],
                "signature": data.signature,
                "transactionId": data.transactionId,
                "cardiovisualUserId": liveId,
                "platform": this.os,
                "expiryTime": parsedReceipt.hasOwnProperty('autoRenewing') ? dateObj : null,
            };
        }
        this.http.post(this.localapi + "/api/orderhistories", this.inappData).subscribe(function (dataInsertSuccess) {
            console.log("Inside success---" + JSON.stringify(dataInsertSuccess));
            //alert("Inside success---"+JSON.stringify(dataInsertSuccess));
            var userLiveId = localStorage.getItem('userliveId');
            //alert("Inside success userLiveId---"+JSON.stringify(userLiveId));
            _this.databaseprovider.getOrderDetailsAPIData(userLiveId);
        }, function (error) {
            console.log(error);
        });
    };
    InappProvider.prototype.canShareAccess = function (user_type) {
        var _this = this;
        var orderData = new Array("");
        this.databaseprovider.fetchAllData('order_details', orderData).then(function (orderresult) {
            var allProducts = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["pluck"](orderresult, 'product_id');
            var canDownload;
            var cv_subscriptionId = _this.cv_subscriptionId();
            var cv_productId = _this.cv_productId();
            var cv_subscriptionId_monthly = _this.cv_subscriptionId_monthly();
            if (user_type == 'doctor') {
                canDownload = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["contains"](allProducts, cv_subscriptionId) || __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["contains"](allProducts, cv_productId) || __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["contains"](allProducts, cv_subscriptionId_monthly);
                if (canDownload) { //check if no prod buy then check for active subscription
                    var allProducts = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["pluck"](orderresult, 'product_id');
                    var prodData = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["findWhere"](orderresult, { "product_id": cv_productId });
                    if (prodData == undefined) {
                        var subsData = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["find"](orderresult, function (item) { return item.product_id === cv_subscriptionId || item.product_id === cv_subscriptionId_monthly; });
                        canDownload = !(_this.compareDate(subsData.expiry_time));
                    }
                }
            }
            else {
                canDownload = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["contains"](allProducts, cv_subscriptionId) || __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["contains"](allProducts, cv_subscriptionId_monthly);
                if (canDownload) {
                    var subsData = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["find"](orderresult, function (item) { return item.product_id === cv_subscriptionId || item.product_id === cv_subscriptionId_monthly; });
                    canDownload = !(_this.compareDate(subsData.expiry_time));
                }
            }
            localStorage.setItem('canDownloadAccess', canDownload);
            return canDownload;
        });
    };
    InappProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_8__services_loading_service__["a" /* LoadingService */]])
    ], InappProvider);
    return InappProvider;
}());

//# sourceMappingURL=inapp.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadientSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the RadientSettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RadientSettingsProvider = /** @class */ (function () {
    function RadientSettingsProvider(injector) {
        this.injector = injector;
        this.rmp = null;
        this.playlistrmp = null;
        this.videoViewEvent = false;
        this.videoPlayPause = false;
        this.videoPlayClick = false;
        this.videoEnded = false;
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_clevertap__["a" /* CleverTap */]();
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]);
        this.social_sharing_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.video_share_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.license_Key = 'd3F2aHVrYnNreUAxNTg2MzU2';
        this.singlePlayerElementID = 'rmpPlayer1';
        this.playlistElementID = 'rmpPlayer';
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        this.userTypeformenu = localStorage.getItem('cv5usrType');
        this.user_Id = localStorage.getItem('userliveId');
        this.netWorkCheck = this.network_check_object.getNetworkType();
    }
    RadientSettingsProvider.prototype.setVideoSrcObject = function (videoData) {
        var settings = {
            licenseKey: this.license_Key,
            relatedUpNextOffset: 10,
            playlistUpNextAutoplay: true,
            playlistEndedLoop: false,
            srcChangeAutoplay: true,
            skin: 's3',
            preload: 'auto',
            automaticFullscreenOnLandscape: true,
            quickRewind: 10,
            allowLocalStorage: true,
            quickForward: 10,
            airplay: true,
            pip: true,
            playlistData: videoData
        };
        var elementID = this.singlePlayerElementID;
        this.rmp = new RadiantMP(elementID);
        var that = this;
        var rmpContainer = document.getElementById(elementID);
        rmpContainer.addEventListener('ready', function () {
            console.log('player ready');
            // Invoke API methods
            that.playertype = 'single';
            that.videoPlayPause = false;
            that.videoPlayClick = true;
        });
        rmpContainer.addEventListener('play', function () {
            console.log('player has received play event');
            that.videoViewEvent = true;
        });
        rmpContainer.addEventListener('playing', function () {
            console.log('player has received playing event');
            that.getCurrentObject();
            that.onPlaySendDataToCleverTap();
        });
        rmpContainer.addEventListener('pause', function () {
            console.log('player has received paused event');
            that.sendDataToCleverTap();
            that.videoPlayPause = true;
        });
        rmpContainer.addEventListener('srcchanging', function () {
            console.log('player  has start the changing new src');
            that.sendDataToCleverTap();
        });
        rmpContainer.addEventListener('srcchanged', function () {
            console.log('player has changed the new src');
            that.videoPlayPause = false;
            that.videoPlayClick = true;
        });
        rmpContainer.addEventListener('ended', function () {
            console.log('player has received ended event');
            that.sendDataToCleverTap();
            that.videoPlayPause = false;
        });
        this.rmp.init(settings);
    };
    RadientSettingsProvider.prototype.setSrcObjectOnitemClick = function (SrcObjectdata) {
        this.rmp.setPlaylistData(SrcObjectdata);
        //this.rmp.setSrc(SrcObjectdata);
    };
    RadientSettingsProvider.prototype.data_set_array_of_objects_forPlaylist = function (arrayofpbject) {
        var settings = {
            licenseKey: this.license_Key,
            relatedUpNextOffset: 10,
            playlistUpNextAutoplay: true,
            playlistEndedLoop: false,
            srcChangeAutoplay: true,
            skin: 's3',
            preload: 'auto',
            automaticFullscreenOnLandscape: true,
            quickRewind: 10,
            allowLocalStorage: true,
            quickForward: 10,
            // Enables picture-in-picture module
            pip: true,
            playlistData: arrayofpbject
        };
        var elementID = this.playlistElementID;
        this.playlistrmp = new RadiantMP(elementID);
        var playlist_rmpContainer = document.getElementById(elementID);
        var that = this;
        playlist_rmpContainer.addEventListener('ready', function () {
            console.log('playlist has ready');
            that.playertype = 'playlist';
            that.videoPlayPause = false;
            // Invoke API methods
            that.videoPlayClick = true;
            that.videoEnded = false;
        });
        playlist_rmpContainer.addEventListener('play', function () {
            console.log('playlist has received play event');
            that.videoViewEvent = true;
        });
        playlist_rmpContainer.addEventListener('playing', function () {
            console.log('playlist has received playing event');
            that.getCurrentObject();
            that.onPlaySendDataToCleverTap();
            that.getCurrentIndex();
        });
        playlist_rmpContainer.addEventListener('pause', function () {
            console.log('playlist has received paused event');
            that.sendDataToCleverTap();
            that.videoPlayPause = true;
        });
        playlist_rmpContainer.addEventListener('srcchanging', function () {
            console.log('playlist  has start the changing new src');
            that.sendDataToCleverTap();
        });
        playlist_rmpContainer.addEventListener('srcchanged', function () {
            console.log('playlist has changed the new src');
            that.videoPlayPause = false;
            that.videoPlayClick = true;
        });
        playlist_rmpContainer.addEventListener('ended', function () {
            console.log('playlist has received ended event');
            that.sendDataToCleverTap();
            that.videoPlayPause = false;
            if (that.currentIndex == that.lastIndex) {
                that.videoEnded = true;
                that.getCurrentIndex();
            }
        });
        this.playlistrmp.init(settings);
    };
    RadientSettingsProvider.prototype.onPlaySendDataToCleverTap = function () {
        if (this.videoPlayClick == true) {
            var playParams = {
                "record_time": this.dtStr,
                "record_date": this.clevertapDate,
                "os": localStorage.getItem('getDevicePlatform'),
                "userRoleId": localStorage.getItem('cv5userRoleId'),
                "userType": localStorage.getItem('cv5usrType'),
                "userID": localStorage.getItem('userliveId'),
                "Identity": localStorage.getItem('userIdentity'),
                "location": localStorage.getItem('location'),
                "specialities": localStorage.getItem('usrSpecialities'),
                "videoContentPlayedFor": this.get_object.videoContentFor,
                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                "videoId": this.get_object.videoId,
                "videoName": this.get_object.name,
                "videoTag": this.get_object.tag
            };
            this.clevertap_object.recordEventWithNameAndProps("onPlayClick", playParams);
            this.playClickTriggerAction();
            this.videoPlayClick = false;
        }
    };
    RadientSettingsProvider.prototype.setSRCChangedforPlaylist = function (data) {
        this.playlistrmp.setPlaylistItem(data);
        //this.playlistrmp.setPlaylistData(data);
    };
    RadientSettingsProvider.prototype.getCurrentObject = function () {
        if (this.playertype == 'playlist') {
            this.get_object = this.playlistrmp.getContentMetadata();
        }
        else {
            this.get_object = this.rmp.getContentMetadata();
        }
    };
    RadientSettingsProvider.prototype.playListNameWithLastIndex = function (name, index, share_Url) {
        this.playlistname = name;
        this.lastVideoIndex = index;
        this.Videoshare_Url = share_Url != '' ? share_Url : localStorage.getItem('isLinkSet');
    };
    RadientSettingsProvider.prototype.getCurrentIndex = function () {
        this.currentIndex = this.playlistrmp.getCurrentPlaylistItemIndex();
        this.lastIndex = this.lastVideoIndex;
        if ((this.currentIndex == this.lastIndex) && this.videoEnded == true) {
            this.showConfirmBox();
        }
    };
    RadientSettingsProvider.prototype.sendDataToCleverTap = function () {
        if (this.videoViewEvent == true && this.videoPlayPause == false) {
            // code...
            if (this.playertype == 'playlist') {
                var get_time = this.playlistrmp.getCurrentTime();
                var totalVideoDur = this.playlistrmp.getDuration();
            }
            else {
                var get_time = this.rmp.getCurrentTime();
                var totalVideoDur = this.rmp.getDuration();
            }
            //The formula to convert from milliseconds to seconds is: seconds = milliseconds ÷ 1,000
            var videoViewInsec = get_time / 1000;
            var totalVideoDurationInsec = totalVideoDur / 1000;
            var totalVideoDurationInMin = (totalVideoDurationInsec / 60).toFixed(2);
            var num = videoViewInsec / 60;
            var videonmin = num.toFixed(2);
            var videoViewInmin = videonmin + ' min';
            var videoView_percentage = Math.round((videoViewInsec * 100) / totalVideoDurationInsec);
            var videoview25 = totalVideoDurationInsec / 4;
            var videoview50 = totalVideoDurationInsec / 2;
            var videoview75 = videoview25 + videoview50;
            var videoview100 = totalVideoDurationInsec;
            if (videoViewInsec <= videoview25) {
                var videoProgress = '0 - 25';
            }
            else if (videoViewInsec > videoview25 && videoViewInsec <= videoview50) {
                var videoProgress = '25 - 50';
            }
            else if (videoViewInsec > videoview50 && videoViewInsec <= videoview75) {
                var videoProgress = '50 - 75';
            }
            else if (videoViewInsec > videoview75 && videoViewInsec < totalVideoDurationInsec) {
                var videoProgress = '75 - 100';
            }
            else if (videoViewInsec == totalVideoDurationInsec) {
                var videoProgress = '100';
            }
            var params = {
                "record_time": this.dtStr,
                "record_date": this.clevertapDate,
                "os": localStorage.getItem('getDevicePlatform'),
                "userRoleId": localStorage.getItem('cv5userRoleId'),
                "userType": localStorage.getItem('cv5usrType'),
                "userID": localStorage.getItem('userliveId'),
                "Identity": localStorage.getItem('userIdentity'),
                "videoId": this.get_object.videoId,
                "videoName": this.get_object.name,
                "videoTag": this.get_object.tag,
                "location": localStorage.getItem('location'),
                "specialities": localStorage.getItem('usrSpecialities'),
                "videoContentPlayedFor": this.get_object.videoContentFor,
                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                "videoViewDuration": videoViewInmin + '  / (' + videoViewInsec.toFixed(2) + ' sec)',
                "videoView_percentage": videoView_percentage + '  %',
                "videoProgressRange": videoProgress + '  %'
            };
            this.clevertap_object.recordEventWithNameAndProps("onVideoPlayed", params);
            this.videoViewEvent = false;
            this.forLocationSpecilitiesPopup();
        }
    };
    RadientSettingsProvider.prototype.getCurrentObjectFromPlaylist = function () {
        var getPlaylistObject = this.playlistrmp.getContentMetadata();
        return getPlaylistObject;
    };
    // When we leave Tab 1 page for another tab page we pause our content
    RadientSettingsProvider.prototype.ionViewWillLeave = function () {
        if (this.rmp && this.rmp.getReady()) {
            this.rmp.pause();
        }
        if (this.playlistrmp && this.playlistrmp.getReady()) {
            this.playlistrmp.pause();
        }
    };
    RadientSettingsProvider.prototype.showConfirmBox = function () {
        var _this = this;
        var confirmPopup = this.alert_controller_object.create({
            title: 'Confirmation you watched',
            message: 'Did you watch all the videos in this playlist?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('YES clicked');
                        _this.confirmPopupThen();
                    }
                }
            ]
        });
        confirmPopup.present();
    };
    RadientSettingsProvider.prototype.confirmPopupThen = function () {
        try {
            var options = {
                message: "Yes I have seen playlist '" + this.playlistname + "' and understood the videos.",
                subject: 'The status of playlist',
                files: [],
                //url: localStorage.getItem('isLinkSet'),
                url: this.Videoshare_Url,
                chooserTitle: '' // Android only, you can override the default share sheet title 
            };
            var onSuccess = function (result) {
                var params = {
                    "userType": 'doctor'
                };
            };
            var onError = function (msg) {
            };
            this.social_sharing_object.shareWithOptions(options);
        }
        catch (e) {
            console.log("ctch");
        }
    };
    RadientSettingsProvider.prototype.forPlayClickTrigger = function (videoData, intractArray) {
        this.video_data = videoData;
        this.intract_array = intractArray;
    };
    RadientSettingsProvider.prototype.playClickTriggerAction = function () {
        var _this = this;
        //alert('playClickTriggerAction');
        setTimeout(function () {
            var videoID = _this.video_data.id;
            var videoTAG = _this.video_data.tag;
            //alert('videoID-->'+videoID+'    ----->'+this.video_data.name+ '===>videoTAG::-'+videoTAG);
            if (_this.netWorkCheck != 'none') {
                _this.http_service_object.inserrUpdateVideoView(videoID, videoTAG, _this.user_Id);
                setTimeout(function () {
                    _this.network_check_object.getVideoTagCountAction(videoTAG, _this.userTypeformenu, _this.user_Id, "playclick", _this.intract_array, _this.video_data);
                }, 1000);
                setTimeout(function () {
                    _this.network_check_object.forRandomVideoViewCount(_this.user_Id);
                }, 2000);
            }
        }, 2000);
    };
    RadientSettingsProvider.prototype.forLocationSpecilitiesPopup = function () {
        var setCount = localStorage.getItem('countForPopup');
        var message = localStorage.getItem('mesgForPopup');
        this.video_share_provider_object.forVideoViewCount(this.user_Id, setCount, message);
    };
    RadientSettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], RadientSettingsProvider);
    return RadientSettingsProvider;
}());

//# sourceMappingURL=radient-settings.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryandrolelistProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicSelectableModule } from 'ionic-selectable';

/*
  Generated class for the CountryandrolelistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CountryandrolelistProvider = /** @class */ (function () {
    function CountryandrolelistProvider() {
        this.ports = [];
        this.myuserRoles = [];
        this.countries = [];
        this.usaState = [];
        this.iphone_name = [];
        this.doctorRoles = [
            new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 1,
                name: 'Cardiovascular Doctor',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 1, name: 'EP', doctorcode: "Cardiovascular Doctor:EP" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 2, name: 'Invasive', doctorcode: "Cardiovascular Doctor:Invasive" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 3, name: 'Non invasive', doctorcode: "Cardiovascular Doctor:Non-Invasive" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 4, name: 'Surgeon', doctorcode: "Cardiovascular Doctor:Surgeon" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 5, name: 'Other', doctorcode: "Cardiovascular Doctor:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 2,
                name: 'Doctor',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 6, name: 'Int. Med/FM', doctorcode: "Doctor:Int. Med/FM" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 7, name: 'Endocrinologist', doctorcode: "Doctor:Endocrinologist" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 8, name: 'Physiotherapist', doctorcode: "Doctor:Physiotherapist" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 9, name: 'Other', doctorcode: "Doctor:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 3,
                name: 'PA/NP/Nurse',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 10, name: 'PA/NP/RN', doctorcode: "PA/NP/Nurse:PA/NP/RN" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 11, name: 'Student', doctorcode: "PA/NP/Nurse:Student" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 12, name: 'Other', doctorcode: "PA/NP/Nurse:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 4,
                name: 'Medical Trainee/Fellow',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 13, name: 'Fellow/Resident', doctorcode: "Medical Trainee/Fellow:Fellow/Resident" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 14, name: 'Student', doctorcode: "Medical Trainee/Fellow:Student" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 15, name: 'Other', doctorcode: "Medical Trainee/Fellow:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 5,
                name: 'Other Medical Professional',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 16, name: 'Ex Physio/Rehab', doctorcode: "Other Medical Professional:Ex Physio/Rehab" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 17, name: 'Tech', doctorcode: "Other Medical Professional:Tech" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 18, name: 'Educators', doctorcode: "Other Medical Professional:Educators" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 19, name: 'Other', doctorcode: "Other Medical Professional:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 6,
                name: 'Healthcare Industry Professional',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 20, name: 'Device', doctorcode: "Healthcare Industry Professional:Device" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 21, name: 'Pharma', doctorcode: "Healthcare Industry Professional:Pharma" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 22, name: 'Other', doctorcode: "Healthcare Industry Professional:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 7,
                name: 'Patient',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 23, name: 'Patient', doctorcode: "Patient:Patient" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 8,
                name: 'Non-Healthcare Professional',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 24, name: 'Curious Learner', doctorcode: "Non-Healthcare Professional:Curious Learner" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 25, name: 'Media', doctorcode: "Non-Healthcare Professional:Media" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 26, name: 'Other', doctorcode: "Non-Healthcare Professional:Other" })
                ]
            })
        ];
        this.patientRoles = [
            new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 1,
                name: 'Patient',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 1, name: 'Patient', doctorcode: "Patient:Patient" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 2,
                name: 'Non-Healthcare Professional',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 2, name: 'Curious Learner', doctorcode: "Non-Healthcare Professional:Curious Learner" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 3, name: 'Media', doctorcode: "Non-Healthcare Professional:Media" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 4, name: 'Other', doctorcode: "Non-Healthcare Professional:Other" })
                ]
            })
        ];
        this.onlyDoctorRoles = [
            new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 1,
                name: 'Cardiovascular Doctor',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 1, name: 'EP', doctorcode: "Cardiovascular Doctor:EP" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 2, name: 'Invasive', doctorcode: "Cardiovascular Doctor:Invasive" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 3, name: 'Non invasive', doctorcode: "Cardiovascular Doctor:Non-Invasive" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 4, name: 'Surgeon', doctorcode: "Cardiovascular Doctor:Surgeon" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 5, name: 'Other', doctorcode: "Cardiovascular Doctor:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 2,
                name: 'Doctor',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 6, name: 'Int. Med/FM', doctorcode: "Doctor:Int. Med/FM" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 7, name: 'Endocrinologist', doctorcode: "Doctor:Endocrinologist" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 8, name: 'Physiotherapist', doctorcode: "Doctor:Physiotherapist" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 9, name: 'Other', doctorcode: "Doctor:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 3,
                name: 'PA/NP/Nurse',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 10, name: 'PA/NP/RN', doctorcode: "PA/NP/Nurse:PA/NP/RN" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 11, name: 'Student', doctorcode: "PA/NP/Nurse:Student" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 12, name: 'Other', doctorcode: "PA/NP/Nurse:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 4,
                name: 'Medical Trainee/Fellow',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 13, name: 'Fellow/Resident', doctorcode: "Medical Trainee/Fellow:Fellow/Resident" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 14, name: 'Student', doctorcode: "Medical Trainee/Fellow:Student" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 15, name: 'Other', doctorcode: "Medical Trainee/Fellow:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 5,
                name: 'Other Medical Professional',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 16, name: 'Ex Physio/Rehab', doctorcode: "Other Medical Professional:Ex Physio/Rehab" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 17, name: 'Tech', doctorcode: "Other Medical Professional:Tech" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 18, name: 'Educators', doctorcode: "Other Medical Professional:Educators" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 19, name: 'Other', doctorcode: "Other Medical Professional:Other" })
                ]
            }), new __WEBPACK_IMPORTED_MODULE_1__types__["Country"]({
                id: 6,
                name: 'Healthcare Industry Professional',
                ports: [
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 20, name: 'Device', doctorcode: "Healthcare Industry Professional:Device" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 21, name: 'Pharma', doctorcode: "Healthcare Industry Professional:Pharma" }),
                    new __WEBPACK_IMPORTED_MODULE_1__types__["Port"]({ id: 22, name: 'Other', doctorcode: "Healthcare Industry Professional:Other" })
                ]
            })
        ];
        this.countries = [
            { name: 'United States of America', code: 'US' },
            { name: 'Afghanistan', code: 'AF' },
            { name: 'Åland Islands', code: 'AX' },
            { name: 'Albania', code: 'AL' },
            { name: 'Algeria', code: 'DZ' },
            { name: 'American Samoa', code: 'AS' },
            { name: 'Andorra', code: 'AD' },
            { name: 'Angola', code: 'AO' },
            { name: 'Anguilla', code: 'AI' },
            { name: 'Antarctica', code: 'AQ' },
            { name: 'Antigua and Barbuda', code: 'AG' },
            { name: 'Argentina', code: 'AR' },
            { name: 'Armenia', code: 'AM' },
            { name: 'Aruba', code: 'AW' },
            { name: 'Australia', code: 'AU' },
            { name: 'Austria', code: 'AT' },
            { name: 'Azerbaijan', code: 'AZ' },
            { name: 'Bahamas', code: 'BS' },
            { name: 'Bahrain', code: 'BH' },
            { name: 'Bangladesh', code: 'BD' },
            { name: 'Barbados', code: 'BB' },
            { name: 'Belarus', code: 'BY' },
            { name: 'Belgium', code: 'BE' },
            { name: 'Belize', code: 'BZ' },
            { name: 'Benin', code: 'BJ' },
            { name: 'Bermuda', code: 'BM' },
            { name: 'Bhutan', code: 'BT' },
            { name: 'Bolivia', code: 'BO' },
            { name: 'Bosnia and Herzegovina', code: 'BA' },
            { name: 'Botswana', code: 'BW' },
            { name: 'Bouvet Island', code: 'BV' },
            { name: 'Brazil', code: 'BR' },
            { name: 'British Indian Ocean Territory', code: 'IO' },
            { name: 'Brunei Darussalam', code: 'BN' },
            { name: 'Bulgaria', code: 'BG' },
            { name: 'Burkina Faso', code: 'BF' },
            { name: 'Burundi', code: 'BI' },
            { name: 'Cambodia', code: 'KH' },
            { name: 'Cameroon', code: 'CM' },
            { name: 'Canada', code: 'CA' },
            { name: 'Cape Verde', code: 'CV' },
            { name: 'Cayman Islands', code: 'KY' },
            { name: 'Central African Republic', code: 'CF' },
            { name: 'Chad', code: 'TD' },
            { name: 'Chile', code: 'CL' },
            { name: 'China', code: 'CN' },
            { name: 'Christmas Island', code: 'CX' },
            { name: 'Cocos (Keeling) Islands', code: 'CC' },
            { name: 'Colombia', code: 'CO' },
            { name: 'Comoros', code: 'KM' },
            { name: 'Congo', code: 'CG' },
            { name: 'Congo, The Democratic Republic of the', code: 'CD' },
            { name: 'Cook Islands', code: 'CK' },
            { name: 'Costa Rica', code: 'CR' },
            { name: 'Cote D\'Ivoire', code: 'CI' },
            { name: 'Croatia', code: 'HR' },
            { name: 'Cuba', code: 'CU' },
            { name: 'Cyprus', code: 'CY' },
            { name: 'Czech Republic', code: 'CZ' },
            { name: 'Denmark', code: 'DK' },
            { name: 'Djibouti', code: 'DJ' },
            { name: 'Dominica', code: 'DM' },
            { name: 'Dominican Republic', code: 'DO' },
            { name: 'Ecuador', code: 'EC' },
            { name: 'Egypt', code: 'EG' },
            { name: 'El Salvador', code: 'SV' },
            { name: 'Equatorial Guinea', code: 'GQ' },
            { name: 'Eritrea', code: 'ER' },
            { name: 'Estonia', code: 'EE' },
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Falkland Islands (Malvinas)', code: 'FK' },
            { name: 'Faroe Islands', code: 'FO' },
            { name: 'Fiji', code: 'FJ' },
            { name: 'Finland', code: 'FI' },
            { name: 'France', code: 'FR' },
            { name: 'French Guiana', code: 'GF' },
            { name: 'French Polynesia', code: 'PF' },
            { name: 'French Southern Territories', code: 'TF' },
            { name: 'Gabon', code: 'GA' },
            { name: 'Gambia', code: 'GM' },
            { name: 'Georgia', code: 'GE' },
            { name: 'Germany', code: 'DE' },
            { name: 'Ghana', code: 'GH' },
            { name: 'Gibraltar', code: 'GI' },
            { name: 'Greece', code: 'GR' },
            { name: 'Greenland', code: 'GL' },
            { name: 'Grenada', code: 'GD' },
            { name: 'Guadeloupe', code: 'GP' },
            { name: 'Guam', code: 'GU' },
            { name: 'Guatemala', code: 'GT' },
            { name: 'Guernsey', code: 'GG' },
            { name: 'Guinea', code: 'GN' },
            { name: 'Guinea-Bissau', code: 'GW' },
            { name: 'Guyana', code: 'GY' },
            { name: 'Haiti', code: 'HT' },
            { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
            { name: 'Holy See (Vatican City State)', code: 'VA' },
            { name: 'Honduras', code: 'HN' },
            { name: 'Hong Kong', code: 'HK' },
            { name: 'Hungary', code: 'HU' },
            { name: 'Iceland', code: 'IS' },
            { name: 'India', code: 'IN' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Iran, Islamic Republic Of', code: 'IR' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Ireland', code: 'IE' },
            { name: 'Isle of Man', code: 'IM' },
            { name: 'Israel', code: 'IL' },
            { name: 'Italy', code: 'IT' },
            { name: 'Jamaica', code: 'JM' },
            { name: 'Japan', code: 'JP' },
            { name: 'Jersey', code: 'JE' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Kenya', code: 'KE' },
            { name: 'Kiribati', code: 'KI' },
            { name: 'Korea, Democratic People\'s Republic of', code: 'KP' },
            { name: 'Korea, Republic of', code: 'KR' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: 'Lao People\'s Democratic Republic', code: 'LA' },
            { name: 'Latvia', code: 'LV' },
            { name: 'Lebanon', code: 'LB' },
            { name: 'Lesotho', code: 'LS' },
            { name: 'Liberia', code: 'LR' },
            { name: 'Libyan Arab Jamahiriya', code: 'LY' },
            { name: 'Liechtenstein', code: 'LI' },
            { name: 'Lithuania', code: 'LT' },
            { name: 'Luxembourg', code: 'LU' },
            { name: 'Macao', code: 'MO' },
            { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
            { name: 'Madagascar', code: 'MG' },
            { name: 'Malawi', code: 'MW' },
            { name: 'Malaysia', code: 'MY' },
            { name: 'Maldives', code: 'MV' },
            { name: 'Mali', code: 'ML' },
            { name: 'Malta', code: 'MT' },
            { name: 'Marshall Islands', code: 'MH' },
            { name: 'Martinique', code: 'MQ' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Mauritius', code: 'MU' },
            { name: 'Mayotte', code: 'YT' },
            { name: 'Mexico', code: 'MX' },
            { name: 'Micronesia, Federated States of', code: 'FM' },
            { name: 'Moldova, Republic of', code: 'MD' },
            { name: 'Monaco', code: 'MC' },
            { name: 'Mongolia', code: 'MN' },
            { name: 'Montserrat', code: 'MS' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Mozambique', code: 'MZ' },
            { name: 'Myanmar', code: 'MM' },
            { name: 'Namibia', code: 'NA' },
            { name: 'Nauru', code: 'NR' },
            { name: 'Nepal', code: 'NP' },
            { name: 'Netherlands', code: 'NL' },
            { name: 'Netherlands Antilles', code: 'AN' },
            { name: 'New Caledonia', code: 'NC' },
            { name: 'New Zealand', code: 'NZ' },
            { name: 'Nicaragua', code: 'NI' },
            { name: 'Niger', code: 'NE' },
            { name: 'Nigeria', code: 'NG' },
            { name: 'Niue', code: 'NU' },
            { name: 'Norfolk Island', code: 'NF' },
            { name: 'Northern Mariana Islands', code: 'MP' },
            { name: 'Norway', code: 'NO' },
            { name: 'Oman', code: 'OM' },
            { name: 'Pakistan', code: 'PK' },
            { name: 'Palau', code: 'PW' },
            { name: 'Palestinian Territory, Occupied', code: 'PS' },
            { name: 'Panama', code: 'PA' },
            { name: 'Papua New Guinea', code: 'PG' },
            { name: 'Paraguay', code: 'PY' },
            { name: 'Peru', code: 'PE' },
            { name: 'Philippines', code: 'PH' },
            { name: 'Pitcairn', code: 'PN' },
            { name: 'Poland', code: 'PL' },
            { name: 'Portugal', code: 'PT' },
            { name: 'Puerto Rico', code: 'PR' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Reunion', code: 'RE' },
            { name: 'Romania', code: 'RO' },
            { name: 'Russian Federation', code: 'RU' },
            { name: 'Rwanda', code: 'RW' },
            { name: 'Saint Helena', code: 'SH' },
            { name: 'Saint Kitts and Nevis', code: 'KN' },
            { name: 'Saint Lucia', code: 'LC' },
            { name: 'Saint Pierre and Miquelon', code: 'PM' },
            { name: 'Saint Vincent and the Grenadines', code: 'VC' },
            { name: 'Samoa', code: 'WS' },
            { name: 'San Marino', code: 'SM' },
            { name: 'Sao Tome and Principe', code: 'ST' },
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Senegal', code: 'SN' },
            { name: 'Serbia and Montenegro', code: 'CS' },
            { name: 'Seychelles', code: 'SC' },
            { name: 'Sierra Leone', code: 'SL' },
            { name: 'Singapore', code: 'SG' },
            { name: 'Slovakia', code: 'SK' },
            { name: 'Slovenia', code: 'SI' },
            { name: 'Solomon Islands', code: 'SB' },
            { name: 'Somalia', code: 'SO' },
            { name: 'South Africa', code: 'ZA' },
            { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
            { name: 'Spain', code: 'ES' },
            { name: 'Sri Lanka', code: 'LK' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Suriname', code: 'SR' },
            { name: 'Svalbard and Jan Mayen', code: 'SJ' },
            { name: 'Swaziland', code: 'SZ' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Switzerland', code: 'CH' },
            { name: 'Syrian Arab Republic', code: 'SY' },
            { name: 'Taiwan, Province of China', code: 'TW' },
            { name: 'Tajikistan', code: 'TJ' },
            { name: 'Tanzania, United Republic of', code: 'TZ' },
            { name: 'Thailand', code: 'TH' },
            { name: 'Timor-Leste', code: 'TL' },
            { name: 'Togo', code: 'TG' },
            { name: 'Tokelau', code: 'TK' },
            { name: 'Tonga', code: 'TO' },
            { name: 'Trinidad and Tobago', code: 'TT' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Turkey', code: 'TR' },
            { name: 'Turkmenistan', code: 'TM' },
            { name: 'Turks and Caicos Islands', code: 'TC' },
            { name: 'Tuvalu', code: 'TV' },
            { name: 'Uganda', code: 'UG' },
            { name: 'Ukraine', code: 'UA' },
            { name: 'United Arab Emirates', code: 'AE' },
            { name: 'United Kingdom', code: 'GB' },
            { name: 'United States Minor Outlying Islands', code: 'UM' },
            { name: 'Uruguay', code: 'UY' },
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Vanuatu', code: 'VU' },
            { name: 'Venezuela', code: 'VE' },
            { name: 'Vietnam', code: 'VN' },
            { name: 'Virgin Islands, British', code: 'VG' },
            { name: 'Virgin Islands, U.S.', code: 'VI' },
            { name: 'Wallis and Futuna', code: 'WF' },
            { name: 'Western Sahara', code: 'EH' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Zambia', code: 'ZM' },
            { name: 'Zimbabwe', code: 'ZW' },
        ];
        // this.myuserRoles = [
        //   { id: 1, role: 'doctor' },
        //   { id: 2, role: 'nurse' },
        //   { id: 3, role: 'servent' },
        // ];
        /*
        this.usaState = [
            { name: "Alabama", code: "Alabama" },
            { name: "Alaska", code: "Alaska" },
            { name: "Arizona", code: "Arizona" },
            { name: "Arkansas", code: "Arkansas" },
            { name: "California", code: "California" },
            { name: "Colorado", code: "Colorado" },
            { name: "Connecticut", code: "Connecticut" },
            { name: "Delaware", code: "Delaware" },
            { name: "District of Columbia", code: "District of Columbia" },
            { name: "Florida", code: "Florida" },
            { name: "Georgia", code: "Georgia" },
            { name: "Hawaii", code: "Hawaii" },
            { name: "Idaho", code: "Idaho" },
            { name: "Illinois", code: "Illinois" },
            { name: "Indiana", code: "Indiana" },
            { name: "Iowa", code: "Iowa" },
            { name: "Kansas", code: "Kansas" },
            { name: "Kentucky", code: "Kentucky" },
            { name: "Louisiana", code: "Louisiana" },
            { name: "Maine", code: "Maine" },
            { name: "Maryland", code: "Maryland" },
            { name: "Massachusetts", code: "Massachusetts" },
            { name: "Michigan", code: "Michigan" },
            { name: "Minnesota", code: "Minnesota" },
            { name: "Mississippi", code: "Mississippi" },
            { name: "Missouri", code: "Missouri" },
            { name: "Montana", code: "Montana" },
            { name: "Nebraska", code: "Nebraska" },
            { name: "Nevada", code: "Nevada" },
            { name: "New Hampshire", code: "New Hampshire" },
            { name: "New Jersey", code: "New Jersey" },
            { name: "New Mexico", code: "New Mexico" },
            { name: "New York", code: "New York" },
            { name: "North Carolina", code: "North Carolina" },
            { name: "North Dakota", code: "North Dakota" },
            { name: "Ohio", code: "Ohio" },
            { name: "Oklahoma", code: "Oklahoma" },
            { name: "Pennsylvania", code: "Pennsylvania" },
            { name: "Rhode Island", code: "Rhode Island" },
            { name: "South Carolina", code: "South Carolina" },
            { name: "South Dakota", code: "South Dakota" },
            { name: "Tennessee", code: "Tennessee" },
            { name: "Texas", code: "Texas" },
            { name: "Utah", code: "Utah" },
            { name: "Vermont", code: "Vermont" },
            { name: "Virginia", code: "Virginia" },
            { name: "Washington", code: "Washington" },
            { name: "West Virginia", code: "West Virginia" },
            { name: "Wisconsin", code: "Wisconsin" },
            { name: "Wyoming", code: "Wyoming" },
        ]
        */
        this.usaState = [
            { name: "Alabama", code: "AL" },
            { name: "Alaska", code: "AK" },
            { name: "Arizona", code: "AZ" },
            { name: "Arkansas", code: "AR" },
            { name: "California", code: "CA" },
            { name: "Colorado", code: "CO" },
            { name: "Connecticut", code: "CT" },
            { name: "Delaware", code: "DE" },
            { name: "District of Columbia", code: "District of Columbia" },
            { name: "Florida", code: "FL" },
            { name: "Georgia", code: "GA" },
            { name: "Hawaii", code: "HI" },
            { name: "Idaho", code: "ID" },
            { name: "Illinois", code: "IL" },
            { name: "Indiana", code: "IN" },
            { name: "Iowa", code: "IA" },
            { name: "Kansas", code: "KS" },
            { name: "Kentucky", code: "KY" },
            { name: "Louisiana", code: "LA" },
            { name: "Maine", code: "ME" },
            { name: "Maryland", code: "MD" },
            { name: "Massachusetts", code: "MA" },
            { name: "Michigan", code: "MI" },
            { name: "Minnesota", code: "MN" },
            { name: "Mississippi", code: "MS" },
            { name: "Missouri", code: "MO" },
            { name: "Montana", code: "MT" },
            { name: "Nebraska", code: "NE" },
            { name: "Nevada", code: "NV" },
            { name: "New Hampshire", code: "NH" },
            { name: "New Jersey", code: "NJ" },
            { name: "New Mexico", code: "NM" },
            { name: "New York", code: "NY" },
            { name: "North Carolina", code: "NC" },
            { name: "North Dakota", code: "ND" },
            { name: "Ohio", code: "OH" },
            { name: "Oklahoma", code: "OK" },
            { name: "Oregon", code: "OR" },
            { name: "Pennsylvania", code: "PA" },
            { name: "Rhode Island", code: "RI" },
            { name: "South Carolina", code: "SC" },
            { name: "South Dakota", code: "SD" },
            { name: "Tennessee", code: "TN" },
            { name: "Texas", code: "TX" },
            { name: "Utah", code: "UT" },
            { name: "Vermont", code: "VT" },
            { name: "Virginia", code: "VA" },
            { name: "Washington", code: "WA" },
            { name: "West Virginia", code: "WV" },
            { name: "Wisconsin", code: "WI" },
            { name: "Wyoming", code: "WY" },
        ];
        this.myuserRoles = [
            { role: "Cardiovascular Doctor", code: "cardiovascular-doctor" },
            { role: "Other Doctor/Physician", code: "other-doctor-physician" },
            { role: "Nurse/NP/PA", code: "pa-np-nurse" },
            { role: "Medical Trainee/Fellow", code: "medical-trainee-fellow" },
            { role: "Medical Device/Pharma Professional", code: "medical-device-pharma-professional" },
            { role: "Patient", code: "patient" },
            { role: "Curious learner/Other", code: "curious-learner" },
        ];
        this.iphone_name = {
            'i386': 'iPhone Simulator',
            'x86_64': 'iPhone Simulator',
            'iPhone1,1': 'iPhone',
            'iPhone1,2': 'iPhone 3G',
            'iPhone2,1': 'iPhone 3GS',
            'iPhone3,1': 'iPhone 4',
            'iPhone3,2': 'iPhone 4 GSM Rev A',
            'iPhone3,3': 'iPhone 4 CDMA',
            'iPhone4,1': 'iPhone 4S',
            'iPhone5,1': 'iPhone 5 (GSM)',
            'iPhone5,2': 'iPhone 5 (GSM+CDMA)',
            'iPhone5,3': 'iPhone 5C (GSM)',
            'iPhone5,4': 'iPhone 5C (Global)',
            'iPhone6,1': 'iPhone 5S (GSM)',
            'iPhone6,2': 'iPhone 5S (Global)',
            'iPhone7,1': 'iPhone 6 Plus',
            'iPhone7,2': 'iPhone 6',
            'iPhone8,1': 'iPhone 6s',
            'iPhone8,2': 'iPhone 6s Plus',
            'iPhone8,4': 'iPhone SE (GSM)',
            'iPhone9,1': 'iPhone 7',
            'iPhone9,2': 'iPhone 7 Plus',
            'iPhone9,3': 'iPhone 7',
            'iPhone9,4': 'iPhone 7 Plus',
            'iPhone10,1': 'iPhone 8',
            'iPhone10,2': 'iPhone 8 Plus',
            'iPhone10,3': 'iPhone X Global',
            'iPhone10,4': 'iPhone 8',
            'iPhone10,5': 'iPhone 8 Plus',
            'iPhone10,6': 'iPhone X GSM',
            'iPhone11,2': 'iPhone XS',
            'iPhone11,4': 'iPhone XS Max',
            'iPhone11,6': 'iPhone XS Max Global',
            'iPhone11,8': 'iPhone XR',
            'iPhone12,1': 'iPhone 11',
            'iPhone12,3': 'iPhone 11 Pro',
            'iPhone12,5': 'iPhone 11 Pro Max',
            'iPod1,1': '1st Gen iPod',
            'iPod2,1': '2nd Gen iPod',
            'iPod3,1': '3rd Gen iPod',
            'iPod4,1': '4th Gen iPod',
            'iPod5,1': '5th Gen iPod',
            'iPod7,1': '6th Gen iPod',
            'iPod9,1': '7th Gen iPod',
            'iPad1,1': 'iPad',
            'iPad1,2': 'iPad 3G',
            'iPad2,1': '2nd Gen iPad',
            'iPad2,2': '2nd Gen iPad GSM',
            'iPad2,3': '2nd Gen iPad CDMA',
            'iPad2,4': '2nd Gen iPad New Revision',
            'iPad3,1': '3rd Gen iPad',
            'iPad3,2': '3rd Gen iPad CDMA',
            'iPad3,3': '3rd Gen iPad GSM',
            'iPad2,5': 'iPad mini',
            'iPad2,6': 'iPad mini GSM+LTE',
            'iPad2,7': 'iPad mini CDMA+LTE',
            'iPad3,4': '4th Gen iPad',
            'iPad3,5': '4th Gen iPad GSM+LTE',
            'iPad3,6': '4th Gen iPad CDMA+LTE',
            'iPad4,1': 'iPad Air (WiFi)',
            'iPad4,2': 'iPad Air (GSM+CDMA)',
            'iPad4,3': '1st Gen iPad Air (China)',
            'iPad4,4': 'iPad mini Retina (WiFi)',
            'iPad4,5': 'iPad mini Retina (GSM+CDMA)',
            'iPad4,6': 'iPad mini Retina (China)',
            'iPad4,7': 'iPad mini 3 (WiFi)',
            'iPad4,8': 'iPad mini 3 (GSM+CDMA)',
            'iPad4,9': 'iPad Mini 3 (China)',
            'iPad5,1': 'iPad mini 4 (WiFi)',
            'iPad5,2': '4th Gen iPad mini (WiFi+Cellular)',
            'iPad5,3': 'iPad Air 2 (WiFi)',
            'iPad5,4': 'iPad Air 2 (Cellular)',
            'iPad6,3': 'iPad Pro (9.7 inch, WiFi)',
            'iPad6,4': 'iPad Pro (9.7 inch, WiFi+LTE)',
            'iPad6,7': 'iPad Pro (12.9 inch, WiFi)',
            'iPad6,8': 'iPad Pro (12.9 inch, WiFi+LTE)',
            'iPad6,11': 'iPad (2017)',
            'iPad6,12': 'iPad (2017)',
            'iPad7,1': 'iPad Pro 2nd Gen (WiFi)',
            'iPad7,2': 'iPad Pro 2nd Gen (WiFi+Cellular)',
            'iPad7,3': 'iPad Pro 10.5-inch',
            'iPad7,4': 'iPad Pro 10.5-inch',
            'iPad7,5': 'iPad 6th Gen (WiFi)',
            'iPad7,6': 'iPad 6th Gen (WiFi+Cellular)',
            'iPad7,11': 'iPad 7th Gen 10.2-inch (WiFi)',
            'iPad7,12': 'iPad 7th Gen 10.2-inch (WiFi+Cellular)',
            'iPad8,1': 'iPad Pro 3rd Gen (11 inch, WiFi)',
            'iPad8,2': 'iPad Pro 3rd Gen (11 inch, 1TB, WiFi)',
            'iPad8,3': 'iPad Pro 3rd Gen (11 inch, WiFi+Cellular)',
            'iPad8,4': 'iPad Pro 3rd Gen (11 inch, 1TB, WiFi+Cellular)',
            'iPad8,5': 'iPad Pro 3rd Gen (12.9 inch, WiFi)',
            'iPad8,6': 'iPad Pro 3rd Gen (12.9 inch, 1TB, WiFi)',
            'iPad8,7': 'iPad Pro 3rd Gen (12.9 inch, WiFi+Cellular)',
            'iPad8,8': 'iPad Pro 3rd Gen (12.9 inch, 1TB, WiFi+Cellular)',
            'iPad11,1': 'iPad mini 5th Gen (WiFi)',
            'iPad11,2': 'iPad mini 5th Gen',
            'iPad11,3': 'iPad Air 3rd Gen (WiFi)',
            'iPad11,4': 'iPad Air 3rd Gen',
            'Watch1,1': 'Apple Watch 38mm case',
            'Watch1,2': 'Apple Watch 42mm case',
            'Watch2,6': 'Apple Watch Series 1 38mm case',
            'Watch2,7': 'Apple Watch Series 1 42mm case',
            'Watch2,3': 'Apple Watch Series 2 38mm case',
            'Watch2,4': 'Apple Watch Series 2 42mm case',
            'Watch3,1': 'Apple Watch Series 3 38mm case (GPS+Cellular)',
            'Watch3,2': 'Apple Watch Series 3 42mm case (GPS+Cellular)',
            'Watch3,3': 'Apple Watch Series 3 38mm case (GPS)',
            'Watch3,4': 'Apple Watch Series 3 42mm case (GPS)',
            'Watch4,1': 'Apple Watch Series 4 40mm case (GPS)',
            'Watch4,2': 'Apple Watch Series 4 44mm case (GPS)',
            'Watch4,3': 'Apple Watch Series 4 40mm case (GPS+Cellular)',
            'Watch4,4': 'Apple Watch Series 4 44mm case (GPS+Cellular)',
            'Watch5,1': 'Apple Watch Series 5 40mm case (GPS)',
            'Watch5,2': 'Apple Watch Series 5 44mm case (GPS)',
            'Watch5,3': 'Apple Watch Series 5 40mm case (GPS+Cellular)',
            'Watch5,4': 'Apple Watch Series 5 44mm case (GPS+Cellular)'
        };
    }
    CountryandrolelistProvider.prototype.getports = function () {
        //return this.ports;
        return this.countries;
    };
    CountryandrolelistProvider.prototype.getUSstate = function () {
        return this.usaState;
    };
    CountryandrolelistProvider.prototype.getmyuserRoles = function () {
        return this.myuserRoles;
    };
    CountryandrolelistProvider.prototype.getIphone_name = function (model) {
        return this.iphone_name[model];
    };
    //private portsObservable: Observable<Port[]>;
    // public getCountries(page?: number, size?: number): Country[] {
    // 	let doctorRoles = [];
    // 	if (page && size) {
    // 	doctorRoles = this.doctorRoles.slice((page - 1) * size, ((page - 1) * size) + size);
    // 	} else {
    // 	doctorRoles = this.doctorRoles;
    // 	}
    // 	return doctorRoles;
    // }
    CountryandrolelistProvider.prototype.getSpecialitiesPorts = function (page, size) {
        //alert('hi getPorts');
        var ports = [];
        this.doctorRoles.forEach(function (country) {
            country.ports.forEach(function (port) {
                port.country = country;
                ports.push(port);
            });
        });
        if (page && size) {
            ports = ports.slice((page - 1) * size, ((page - 1) * size) + size);
        }
        return ports;
    };
    CountryandrolelistProvider.prototype.getPatientRoles = function (page, size) {
        //alert('hi getPorts');
        var ports = [];
        this.patientRoles.forEach(function (country) {
            country.ports.forEach(function (port) {
                port.country = country;
                ports.push(port);
            });
        });
        if (page && size) {
            ports = ports.slice((page - 1) * size, ((page - 1) * size) + size);
        }
        return ports;
    };
    CountryandrolelistProvider.prototype.getOnlyDoctorRoles = function (page, size) {
        //alert('hi getPorts');
        var ports = [];
        this.onlyDoctorRoles.forEach(function (country) {
            country.ports.forEach(function (port) {
                port.country = country;
                ports.push(port);
            });
        });
        if (page && size) {
            ports = ports.slice((page - 1) * size, ((page - 1) * size) + size);
        }
        return ports;
    };
    CountryandrolelistProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CountryandrolelistProvider);
    return CountryandrolelistProvider;
}());

//# sourceMappingURL=countryandrolelist.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorsPopoverPage = /** @class */ (function () {
    function ColorsPopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.brushColors = ['#ecf0f1', '#95a5a6', '#bdc3c7', '#7f8c8d', '#000000',
            '#F1A9A0', '#D2527F', '#f1c40f', '#f39c12', '#e67e22',
            '#d35400', '#e74c3c', '#c0392b', '#6D4C41', '#3E2723',
            '#1abc9c', '#16a085', '#2ecc71', '#27ae60', '#3498db',
            '#2980b9', '#34495e', '#2c3e50', '#9b59b6', '#8e44ad',
        ];
    }
    /**
     * Sets new brush color
     * param color
     */
    ColorsPopoverPage.prototype.setColor = function (color) {
        localStorage.setItem('canvasbrushcolor', color);
        this.viewCtrl.dismiss();
    };
    ColorsPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-colors-popover',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\colors-popover\colors-popover.html"*/'<div colors-container>\n\n  <button *ngFor="let color of brushColors" [style.background]="color" (click)="setColor(color)"></button>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\colors-popover\colors-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], ColorsPopoverPage);
    return ColorsPopoverPage;
}());

//# sourceMappingURL=colors-popover.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidthPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidthPopoverPage = /** @class */ (function () {
    function WidthPopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.brushWidths = [
            { value: 1, label: '1px' },
            { value: 2, label: '2px' },
            { value: 3, label: '3px' },
            { value: 4, label: '4px' },
            { value: 5, label: '5px' },
            { value: 6, label: '6px' },
            { value: 7, label: '7px' },
            { value: 8, label: '8px' },
            { value: 9, label: '9px' },
            { value: 10, label: '10px' },
            { value: 12, label: '12px' },
            { value: 15, label: '15px' },
            { value: 20, label: '20px' },
            { value: 25, label: '25px' },
            { value: 30, label: '30px' },
        ];
    }
    /**
     * Sets new brush width
     * param width
     */
    WidthPopoverPage.prototype.setWidth = function (width) {
        localStorage.setItem('canvasbrushwidth', width);
        this.viewCtrl.dismiss();
    };
    WidthPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-width-popover',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\width-popover\width-popover.html"*/'<ion-list>\n\n  <button *ngFor="let width of brushWidths" ion-item (click)="setWidth(width.value)">{{width.label}}</button>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\width-popover\width-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], WidthPopoverPage);
    return WidthPopoverPage;
}());

//# sourceMappingURL=width-popover.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrushTypePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrushTypePopoverPage = /** @class */ (function () {
    function BrushTypePopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.brushTypes = [
            { value: 'Pencil', label: 'Pencil' },
            { value: 'Circle', label: 'Circle' },
            { value: 'Spray', label: 'Spray' },
        ];
    }
    /**
     * Sets new brush type
     * @param type
     */
    BrushTypePopoverPage.prototype.setType = function (type) {
        localStorage.setItem('canvasbrushtype', type);
        this.viewCtrl.dismiss();
    };
    BrushTypePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-brush-type-popover',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\brush-type-popover\brush-type-popover.html"*/'<ion-list>\n\n  <button *ngFor="let type of brushTypes" ion-item (click)="setType(type.value)">{{type.label}}</button>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\brush-type-popover\brush-type-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], BrushTypePopoverPage);
    return BrushTypePopoverPage;
}());

//# sourceMappingURL=brush-type-popover.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_17" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/**
 * Created by sanjeev on 2/2/2019.
 */


var HttpService = /** @class */ (function () {
    function HttpService(http, HttpClient, http2, appRate) {
        //this.api = 'https://apiv2.cardiovisual.com';
        this.http = http;
        this.HttpClient = HttpClient;
        this.http2 = http2;
        this.appRate = appRate;
        // this.localapi = 'http://45.55.36.24:6001';
        this.localapi = 'https://apiv2.cardiovisual.com';
        //mailchimp data
        this.mailChimpAPIKey = '46a2e6e4c02b689490e871a2ba52476b';
        this.doctorListsId = "267d2650fc";
        this.patientListsId = "5ec63b9ecd";
    }
    Object.defineProperty(HttpService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]]];
        },
        enumerable: false,
        configurable: true
    });
    HttpService.prototype.getApi = function () {
        return this.localapi;
    };
    HttpService.prototype.dtStr = function () {
        var date = new Date();
        return date;
    };
    HttpService.prototype.clevertapDate = function () {
        var dtStr = new Date();
        var clevertapDate = ((dtStr.getDate() < 10) ? "0" + dtStr.getDate() : dtStr.getDate()) + "/" + (((dtStr.getMonth() + 1) < 10) ? "0" + (dtStr.getMonth() + 1) : (dtStr.getMonth() + 1)) + "/" + dtStr.getFullYear();
        return clevertapDate;
    };
    HttpService.prototype.getTimeInMilliSeconds = function () {
        var currentTimeInMilliSeconds = new Date().getTime();
        return currentTimeInMilliSeconds;
    };
    HttpService.prototype.getIntroScreen = function () {
        //var response = this.http.get(this.onboardingApiURL).map(res => res.json());
        var response = this.http.get(this.localapi + "/api/TestCardioSplashes?filter[where][isOnboarding]=1&filter[where][and][1][active]=1&filter[order]=position DESC").map(function (res) { return res.json(); });
        return response;
    };
    HttpService.prototype.checkEmailExists = function (email) {
        var checkEmailresponse = this.http.get(this.localapi + "/api/CardiovisualUsers?filter[where][email]=" + email).map(function (res) { return res.json(); });
        return checkEmailresponse;
    };
    HttpService.prototype.appleUserIDExists = function (userID) {
        var checkEmailresponse = this.http.get(this.localapi + "/api/CardiovisualUsers?filter[where][facebookId]=" + userID).map(function (res) { return res.json(); });
        return checkEmailresponse;
    };
    HttpService.prototype.sendData = function (email) {
        var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    HttpService.prototype.getPoweredByData = function (userType) {
        //alert('userType-->'+userType);
        var cur_date = new Date();
        var poweredByData = this.http.get(this.localapi + "/api/TestCardioSplashes?filter[where][isPoweredBy]=1&filter[where][and][1][active]=1&filter[where][and][0][active_till][gt]=" + cur_date.toISOString() + "&filter[where][and][1][active_from][lt]=" + cur_date.toISOString() + "&filter[order]=position DESC").map(function (res) { return res.json(); });
        return poweredByData;
    };
    HttpService.prototype.getTopicsAPIData = function () {
        var topicData = this.http.get(this.localapi + "/api/newTopics?filter[where][isActive]=1&filter[order]=position").map(function (res) { return res.json(); });
        return topicData;
    };
    HttpService.prototype.getSponsorSplashes = function () {
        var cur_date = new Date();
        var sponsorSplashes = this.http.get(this.localapi + "/api/TestCardioSplashes?filter[where][isSponsor]=1&filter[where][and][1][active]=1&filter[where][and][0][active_till][gt]=" + cur_date.toISOString() + "&filter[where][and][1][active_from][lt]=" + cur_date.toISOString() + "&filter[order]=position DESC").map(function (res) { return res.json(); });
        return sponsorSplashes;
    };
    HttpService.prototype.getRegisteredDeviceCount = function (userID) {
        var getDeviceCount = this.http.get(this.localapi + "/api/devices?filter[where][user_id]=" + userID + "&filter[where][status]=1").map(function (res) { return res.json(); });
        return getDeviceCount;
    };
    HttpService.prototype.getAppDetails = function (platform) {
        var appDetails = this.http.get(this.localapi + "/api/AppDetails?filter[where][platform]=" + platform).map(function (res) { return res.json(); });
        return appDetails;
    };
    HttpService.prototype.getPlaylists = function () {
        var playlist = this.http.get(this.localapi + "/api/playlists").map(function (res) { return res.json(); });
        return playlist;
    };
    HttpService.prototype.getNewCategory = function () {
        var newCategory = this.http.get(this.localapi + "/api/newcategories?filter[order]=position Desc").map(function (res) { return res.json(); });
        return newCategory;
    };
    HttpService.prototype.getSubtopicDatas = function (type_user) {
        if (type_user == "patient") {
            var url = this.localapi + "/api/subtopics?filter[where][isActive]=1&filter[where][or][0][isPatientDownloadable]=1&filter[where][or][1][isPatientStreamed]=1";
        }
        else {
            var url = this.localapi + "/api/subtopics?filter[where][isActive]=1&filter[where][or][0][isDownloadable]=1&filter[where][or][1][isStreamed]=1";
        }
        var subtopicData = this.http.get(url).map(function (res) { return res.json(); });
        return subtopicData;
    };
    HttpService.prototype.getFavoritesDatas = function (liveId) {
        //var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId;
        var url = this.localapi + "/api/favorites?filter[where][cardiovisualUserId]=" + liveId + "&filter[where][type]=subtopic";
        var favoritesData = this.http.get(url).map(function (res) { return res.json(); });
        return favoritesData;
    };
    HttpService.prototype.getDeviceDatas = function (deviceData) {
        var url = this.localapi + "/api/devices?filter[where][userId]=" + deviceData.userId + "&filter[where][deviceToken]=" + deviceData.deviceToken;
        var deviceDatas = this.http.get(url).map(function (res) { return res.json(); });
        return deviceDatas;
    };
    //return post url
    HttpService.prototype.getPosturl = function (table) {
        return this.localapi + '/api/' + table;
    };
    HttpService.prototype.getFavoriteswithsubtopicid = function (liveId, subtopicId) {
        //var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][subtopicId]="+subtopicId;
        var url = this.localapi + "/api/favorites?filter[where][cardiovisualUserId]=" + liveId + "&filter[where][subtopicId]=" + subtopicId + "&filter[where][type]=subtopic";
        var favoritesData = this.http.get(url).map(function (res) { return res.json(); });
        return favoritesData;
    };
    HttpService.prototype.getUserInfoByLiveId = function (liveId) {
        var url = this.localapi + "/api/CardiovisualUsers/" + liveId;
        var userData = this.http.get(url).map(function (res) { return res.json(); });
        return userData;
    };
    HttpService.prototype.userAuthenticaton = function (condition) {
        //var url = this.localapi+"/api/CardiovisualUsers?filter[where][email]="+condition.username+"&filter[where][password]="+condition.password+"&filter[where][verified]=1";
        var url = this.localapi + "/api/CardiovisualUsers?filter[where][email]=" + condition.username + "&filter[where][verified]=1";
        var authentication = this.http.get(url).map(function (res) { return res.json(); });
        return authentication;
    };
    HttpService.prototype.getSubTopicsAPIData = function (type_user) {
        if (type_user == "patient") {
            var url = this.localapi + "/api/SubTopics?filter[where][isActive]=1&filter[where][or][0][isPatientDownloadable]=1&filter[where][or][1][isPatientStreamed]=1";
        }
        else {
            var url = this.localapi + "/api/SubTopics?filter[where][isActive]=1&filter[where][or][0][isDownloadable]=1&filter[where][or][1][isStreamed]=1";
        }
        var subTopicsApiResult = this.http.get(url).map(function (res) { return res.json(); });
        return subTopicsApiResult;
    };
    HttpService.prototype.getnewtopics = function () {
        // alert('jjjj');
        var url = this.localapi + "/api/newTopics?filter[where][isActive]=1&filter[order]=position";
        var newtopics = this.http.get(url).map(function (res) { return res.json(); });
        return newtopics;
    };
    HttpService.prototype.getParticularSubTopicIdAPIData = function (idVideo) {
        var url = this.localapi + "/api/SubTopics?filter[where][id]=" + idVideo;
        var subtopics = this.http.get(url).map(function (res) { return res.json(); });
        return subtopics;
    };
    HttpService.prototype.getCleverTapID = function () {
        // this.clevertap.profileGetCleverTapID().then((id) => {
        //   this.clevertapId = id;
        //   console.log("CleverTapID: " + id);
        //   return this.clevertapId;
        // });
    };
    HttpService.prototype.getSingleInformationVideo = function (vdId) {
        var url = this.localapi + "/api/information?filter[where][id]=" + vdId;
        var infrmationData = this.http.get(url).map(function (res) { return res.json(); });
        return infrmationData;
    };
    HttpService.prototype.getUserPurchasedDataFromApi = function (liveId) {
        var url = this.localapi + "/api/orderhistories?filter[where][cardiovisualUserId]=" + liveId + "&&filter[order]=id desc";
        var getUserPurchasedData = this.http.get(url).map(function (res) { return res.json(); });
        return getUserPurchasedData;
    };
    HttpService.prototype.getDiscussData = function () {
        var url = "https://qnatest.cardiovisual.com/api/discussions?filter[q]=tag:treatment";
        //alert(url);
        //var url = "https://discuss.flarum.org/api/discussions?filter[q]=tag:dev";
        //var response = this.http.get(url).map(res => res.json());
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        //headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET');
        headers.append('content-type', 'application/json');
        headers.append('Accept', 'application/json');
        /*this.http.get(url, {headers: headers})
         .subscribe(res => {
           resolve(res.json());
         }, (err) => {
           reject(err);
           console.log('err-->'+err);
         });*/
        //alert(JSON.stringify(response));
        //return response;
    };
    HttpService.prototype.postData = function (credentials, type) {
        var _this = this;
        var apiUrl = 'https://cshipapp.oneleap.in/graphql/';
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            //headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
            // headers.append('Access-Control-Allow-Methods', 'POST, GET');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpService.prototype.getData = function () {
        var _this = this;
        var apiUrl = 'https://qnatest.cardiovisual.com/api/discussions?filter[q]=tag:treatment';
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            //headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
            // headers.append('Access-Control-Allow-Methods', 'POST, GET');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            _this.http.get(apiUrl, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpService.prototype.signUpToMailChimp = function (user_data) {
        //alert('chimp '+JSON.stringify(user_data));
        var _this = this;
        var name_arr = (user_data.fullname != '') ? user_data.fullname.split(" ") : [];
        //alert('name arr = '+name_arr);
        var listId = (user_data.userRoleId == "1") ? this.doctorListsId : this.patientListsId;
        /*var data_bb = {
          "email_address" : user_data.email,
          "merge_fields" : {
            "FNAME" : (_.size(name_arr) > 0 ) ? name_arr[0] : "",
            "LNAME" : (_.size(name_arr) > 0 ) ? name_arr[1] : ""
          },
          "status" : "subscribed"
        };*/
        /*var data_bb = {
          "email_address" : 'chavanabhi87@gmail.com',
          "merge_fields" : {
            "FNAME" : "Abhi",
            "LNAME" : "Chavan"
          },
          "status" : "subscribed"
        };*/
        var data_bb = '{"email_address":"vidyanc@rediffmail.com", "merge_fields":{"FNAME":"Abhi", "LNAME":"Chavan"}, "status":"subscribed"}';
        //var url = "https://us13.api.mailchimp.com/3.0/lists/"+listId+"/members";
        var url = 'https://us13.api.mailchimp.com/3.0/lists/267d2650fc/members';
        //alert('hello url '+url);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Authorization', 'apikey 46a2e6e4c02b689490e871a2ba52476b-us13'); //+this.mailChimpAPIKey+'-us13');
            headers.append('content-type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('X-HTTP-Method-Override', 'POST');
            _this.http.post(url, data_bb, { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpService.prototype.checkUsernameExists = function (username) {
        var checkUsernameresponse = this.http.get(this.localapi + "/api/CardiovisualUsers?filter[where][username]=" + username).map(function (res) { return res.json(); });
        return checkUsernameresponse;
    };
    HttpService.prototype.getDownloadsDatas = function (liveId) {
        var url = this.localapi + "/api/downloads?filter[where][cardiovisualUserId]=" + liveId;
        var downloadsData = this.http.get(url).map(function (res) { return res.json(); });
        return downloadsData;
    };
    HttpService.prototype.cmpVersion = function (version_from_api, version_from_config) {
        var a = version_from_api;
        var b = version_from_config;
        var i, cmp, len, re = /(\.0)+[^\.]*$/;
        a = (a + '').replace(re, '').split('.');
        b = (b + '').replace(re, '').split('.');
        len = Math.min(a.length, b.length);
        for (i = 0; i < len; i++) {
            cmp = parseInt(a[i], 10) - parseInt(b[i], 10);
            if (cmp !== 0) {
                return cmp;
            }
        }
        return a.length - b.length;
    };
    HttpService.prototype.getDoewnloadApiDataforUSers = function (userid, subtopicid) {
        var url = this.localapi + '/api/downloads?filter[where][cardiovisualUserId]=' + userid + '&filter[where][subtopicId]=' + subtopicid;
        var download_data = this.http.get(url).map(function (res) { return res.json(); });
        return download_data;
    };
    HttpService.prototype.checkEmailExistsInCMS = function (email) {
        // alert('http');
        var url = this.localapi + "/api/CardiovisualUsers?filter[where][email]=" + email;
        var user_data = this.http.get(url).map(function (res) { return res.json(); });
        return user_data;
    };
    HttpService.prototype.getVerificationCode = function (email) {
        //alert('http email '+email);
        var url = this.localapi + "/getCode?email=" + email;
        //alert('url'+ url);
        var verfication_code = this.http.get(url).map(function (res) { return res.json(); });
        return verfication_code;
    };
    HttpService.prototype.updatePasswordtoApi = function (url, data) {
        this.http.put(url, data).subscribe(function (res) {
            //alert('database update '+JSON.stringify(res));
            //resolve(res.json());
        }, function (err) {
            //alert('update password err '+JSON.stringify(err));
            //reject(err);
            //console.log('err-->'+err);
        });
    };
    HttpService.prototype.getnewSplashes = function () {
        var cur_date = new Date();
        var url = this.localapi + '/api/testcardiosplashes?filter[where][isSponsor]=1&filter[where][and][1][active]=1&filter[where][and][0][active_till][gt]=' + cur_date.toISOString() + '&filter[where][and][1][active_from][lt]=' + cur_date.toISOString() + '&filter[order]=position DESC';
        var splashData = this.http.get(url).map(function (res) { return res.json(); });
        return splashData;
    };
    HttpService.prototype.showRateDialogueBox = function () {
        this.appRate.preferences = {
            simpleMode: true,
            inAppReview: true,
            storeAppURL: {
                ios: 'com.cardio-visual.Cardio-Visual-Lite',
                android: 'market://details?id=com.cardiovisual.app'
            },
            customLocale: {
                title: "Rate us!",
                message: "Thanks for using CardioVisual. Would you mind spending a momemt to rate us on the app store?",
                cancelButtonLabel: "No, Thanks",
                laterButtonLabel: "Remind Me Later",
                rateButtonLabel: "Rate It Now"
            },
            callbacks: {
                onRateDialogShow: function (callback) {
                    callback(1); // cause immediate click on 'Rate Now' button
                },
                onButtonClicked: function (buttonIndex) {
                    //console.log("onButtonClicked -> " + buttonIndex);
                }
            }
        };
        document.addEventListener('deviceready', function () {
            this.appRate.promptForRating(true);
        }, false);
    };
    HttpService.prototype.getLikesData = function (liveId) {
        var likeUrl = this.localapi + "/api/likes?filter[where][cardiovisualUserId]=" + liveId;
        var likesapiData = this.http.get(likeUrl).map(function (likeres) { return likeres.json(); });
        return likesapiData;
    };
    HttpService.prototype.getLikesWithsubtopicidAndliveId = function (liveId, subtopicId) {
        var url = this.localapi + "/api/likes?filter[where][cardiovisualUserId]=" + liveId + "&filter[where][subtopicId]=" + subtopicId;
        var getLikeData = this.http.get(url).map(function (res) { return res.json(); });
        return getLikeData;
    };
    /*information api*/
    HttpService.prototype.getInformationData = function (type_user) {
        if (type_user == "patient") {
            var url = this.localapi + "/api/information?filter[where][isActive]=1&filter[where][or][0][isPatientDownloadable]=1&filter[where][or][1][isPatientStreamed]=1";
        }
        else {
            var url = this.localapi + "/api/information?filter[where][isActive]=1&filter[where][or][0][isDownloadable]=1&filter[where][or][1][isStreamed]=1";
        }
        var informationData = this.http.get(url).map(function (res) { return res.json(); });
        return informationData;
    };
    HttpService.prototype.getInformationFavoritesDatas = function (liveId) {
        //var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId;
        var url = this.localapi + "/api/favorites?filter[where][cardiovisualUserId]=" + liveId + "&filter[where][type]=information";
        var favoritesData = this.http.get(url).map(function (res) { return res.json(); });
        return favoritesData;
    };
    HttpService.prototype.getInformationDownloadsDatas = function (liveId) {
        var url = this.localapi + "/api/downloads?filter[where][cardiovisualUserId]=" + liveId;
        var info_downloadsData = this.http.get(url).map(function (res) { return res.json(); });
        return info_downloadsData;
    };
    HttpService.prototype.getInfoDownloadApiDataforUsers = function (userid, infoid) {
        var url = this.localapi + '/api/downloads?filter[where][cardiovisualUserId]=' + userid + '&filter[where][informationId]=' + infoid;
        var download_data = this.http.get(url).map(function (res) { return res.json(); });
        return download_data;
    };
    /*information api end*/
    /*channels api */
    HttpService.prototype.getChannelsData = function (type_user) {
        var channels_url = this.localapi + "/api/channels?filter[where][active]=1&filter[order]=position asc";
        var channels_Data = this.http.get(channels_url).map(function (res) { return res.json(); });
        return channels_Data;
    };
    HttpService.prototype.getFavoriteswithinformationId = function (liveId, infoId) {
        //var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][informationId]="+infoId;
        var url = this.localapi + "/api/favorites?filter[where][cardiovisualUserId]=" + liveId + "&filter[where][subtopicId]=" + infoId + "&filter[where][type]=information";
        var favoritesData = this.http.get(url).map(function (res) { return res.json(); });
        return favoritesData;
    };
    /*channels api end*/
    /* playlist favorites*/
    HttpService.prototype.getFavoriteswithPlaylistId = function (liveId, playlist_id) {
        var url = this.localapi + "/api/favorites?filter[where][cardiovisualUserId]=" + liveId + "&filter[where][subtopicId]=" + playlist_id + "&filter[where][type]=playlist";
        var favoritesData = this.http.get(url).map(function (res) { return res.json(); });
        return favoritesData;
    };
    HttpService.prototype.getPlaylistFavoritesData = function (liveId) {
        var url = this.localapi + "/api/favorites?filter[where][cardiovisualUserId]=" + liveId + "&filter[where][type]=playlist";
        var PlaylistFavoritesData = this.http.get(url).map(function (res) { return res.json(); });
        return PlaylistFavoritesData;
    };
    /* customlisting api data*/
    HttpService.prototype.getCustomListingData = function () {
        var url = this.localapi + "/api/CustomListings";
        var CustomListingsData = this.http.get(url).map(function (res) { return res.json(); });
        return CustomListingsData;
    };
    /* custom video json api data*/
    HttpService.prototype.getCutomVideoJsonData = function () {
        var url = this.localapi + "/api/CustomVideoJsons";
        var CutomVideoJsonData = this.http.get(url).map(function (res) { return res.json(); });
        return CutomVideoJsonData;
    };
    /* get sponsored by data from api */
    HttpService.prototype.getSponsoredByDataApi = function () {
        var cur_date = new Date();
        var url = this.localapi + "/api/testcardiosplashes?filter[where][sponsoredBy]=1&filter[where][and][0][activeTill][gt]=" + cur_date.toISOString() + "&filter[where][and][1][activeFrom][lt]=" + cur_date.toISOString() + "&filter[where][and][2][active]=1&filter[order]=position DESC";
        var SponsoredbyData = this.http.get(url).map(function (res) { return res.json(); });
        return SponsoredbyData;
    };
    /*get tweets*/
    HttpService.prototype.getTweets = function () {
        var url = this.localapi + "/api/Tweets?filter[where][isActive]=1&filter[limit]=35";
        var tweetsData = this.http.get(url).map(function (res) { return res.json(); });
        return tweetsData;
    };
    /*get whatsnew screen data*/
    HttpService.prototype.getWhatsnewData = function () {
        var cur_date = new Date();
        // var url = this.localapi+"/api/whatsnews?filter[where][isActive]=1&filter[where][and][0][activeTill][gt]="+cur_date.toISOString()+"&filter[where][and][1][activeFrom][lt]="+cur_date.toISOString()+"";    
        var url = this.localapi + "/api/whatsnews?filter[where][isActive]=1&filter[where][and][1][activeFrom][lt]=" + cur_date.toISOString() + "";
        var whatsnewData = this.http.get(url).map(function (res) { return res.json(); });
        return whatsnewData;
    };
    /*get wordpress blog data*/
    HttpService.prototype.getBlogs = function () {
        var url = this.localapi + "/api/blogs?filter[where][isActive]=1&filter[limit]=35";
        var blogsData = this.http.get(url).map(function (res) { return res.json(); });
        return blogsData;
    };
    HttpService.prototype.getForum = function () {
        var cur_date = new Date();
        var url = this.localapi + "/api/discussions?filter[where][isActive]=1&filter[where][and][0][active_till][gt]=" + cur_date.toISOString() + "&filter[where][and][1][active_from][lt]=" + cur_date.toISOString() + "&filter[order]=position DESC &filter[limit]=50";
        var forumData = this.http.get(url).map(function (res) { return res.json(); });
        return forumData;
    };
    HttpService.prototype.updateLastActiveUser = function (liveId) {
        this.http.put(this.localapi + "/api/CardiovisualUsers/" + liveId, {
            "lastActive": new Date().toISOString()
        }).subscribe(function (lastActiveSuccess) {
            //alert('lastActiveSuccess-->'+JSON.stringify(lastActiveSuccess));
            //alert('lastActiveSuccess text-->'+lastActiveSuccess.text());
        }, function (lastActiveError) {
            //alert('lastActiveError---->'+ JSON.stringify(lastActiveError));
            //alert('lastActiveError---->'+lastActiveError.text());
        });
    };
    /*tag related discussion*/
    HttpService.prototype.getTagRelatedDiscussion = function (tag) {
        var url = this.localapi + "/api/discussions?filter[where][tags][like]=%" + tag + "%";
        var channels_Data = this.http.get(url).map(function (res) { return res.json(); });
        return channels_Data;
    };
    HttpService.prototype.getWhatsnewSectionTitleData = function () {
        var url = this.localapi + "/api/labels/?filter[where][screen]=whatsnew&filter[where][isActive]=1";
        var whatnewData = this.http.get(url).map(function (res) { return res.json(); });
        return whatnewData;
    };
    HttpService.prototype.forallPageAction = function (name) {
        //alert("tagbasicallPageAction");
        //http://45.55.36.24:6001/api/customlistings/?filter[where][name]=allPageAction&filter[where][type]=Triggers
        var url = this.localapi + "/api/CustomListings/?filter[where][name]=" + name + "&filter[where][type]=Triggers";
        var idbasicJsonData = this.http.get(url).map(function (res) { return res.json(); });
        return idbasicJsonData;
    };
    HttpService.prototype.foParticularPageAction = function (pagename) {
        var url = this.localapi + "/api/CustomListings/?filter[where][name]=" + pagename + "&filter[where][type]=Triggers";
        var particularPageJsonData = this.http.get(url).map(function (pageJsonData) { return pageJsonData.json(); });
        return particularPageJsonData;
    };
    HttpService.prototype.idbasicSpecifictagAction = function () {
    };
    HttpService.prototype.forAppPageAndTagAction = function (actionparams) {
        //http://45.55.36.24:6001/api/customlistings/?filter[where][name]=allPageAction&filter[where][type]=Triggers
        //http://45.55.36.24:6001/api/customlistings/?filter[where][name]=DashboardPage&filter[where][type]=Triggers
        //http://45.55.36.24:6001/api/customlistings/?filter[where][name]=CAD&filter[where][type]=Triggers
        //alert('actionparams-->'+actionparams);
        var url = this.localapi + "/api/CustomListings/?filter[where][name]=" + actionparams + "&filter[where][type]=Triggers";
        var appPageAndTagActionJsonData = this.http.get(url).map(function (forJsonData) { return forJsonData.json(); });
        return appPageAndTagActionJsonData;
    };
    HttpService.prototype.inserrUpdateVideoView = function (videoID, videoTAG, userID) {
        var _this = this;
        // alert('videoID-->'+videoID+' videoTAG-->'+videoTAG+ ' userID-->'+userID);
        localStorage.setItem('myViewCount', '');
        var myurl = this.localapi + "/api/VideoViews/?filter[where][cardiovisualUserID]=" + userID + "&filter[where][videoTag]=" + videoTAG;
        this.http.get(myurl).map(function (videoViewsSuccess) { return videoViewsSuccess.json(); }).subscribe(function (videoViewSuccessdata) {
            if (videoViewSuccessdata.length > 0) {
                var videoViewID = videoViewSuccessdata[0].id;
                var newViewCount = videoViewSuccessdata[0].videoViewCount + 1;
                _this.http.put(_this.localapi + "/api/VideoViews/" + videoViewID, {
                    "id": videoViewSuccessdata[0].id,
                    "cardiovisualUserID": videoViewSuccessdata[0].cardiovisualUserID,
                    "videoID": 0,
                    "videoTag": videoViewSuccessdata[0].videoTag,
                    "videoViewCount": newViewCount,
                    "updatedAt": new Date().toISOString()
                }).subscribe(function (videoViewUpdateSuccess) {
                    var response = JSON.parse(videoViewUpdateSuccess['_body']);
                    localStorage.setItem('myViewCount', response.videoViewCount);
                }, function (videoViewUpdateError) {
                    //console.log(videoViewUpdateError.text());
                });
            }
            else {
                _this.http.post(_this.localapi + "/api/VideoViews", { "id": 0, "cardiovisualUserID": userID, "videoID": 0, "videoTag": videoTAG, "videoViewCount": 1 }).subscribe(function (insertVideoViewsdata) {
                    var insertresponse = JSON.parse(insertVideoViewsdata['_body']);
                }, function (insertVideoViewsErr) {
                    var insertVideoViews = JSON.parse(insertVideoViewsErr['_body']);
                });
            }
        }, function (countSuccessdataerr) {
            //console.log(' countSuccessdataerr->'+JSON.stringify(countSuccessdataerr));
        });
    };
    HttpService.prototype.updateVideoViewCount = function (videoTAG, userID) {
        var _this = this;
        var myurl = this.localapi + "/api/VideoViews/?filter[where][cardiovisualUserID]=" + userID + "&filter[where][videoTag]=" + videoTAG;
        this.http.get(myurl).map(function (videoViewsSuccess) { return videoViewsSuccess.json(); }).subscribe(function (videoViewSuccessdata) {
            if (videoViewSuccessdata.length > 0) {
                var videoViewID = videoViewSuccessdata[0].id;
                _this.http.put(_this.localapi + "/api/VideoViews/" + videoViewID, {
                    "id": videoViewSuccessdata[0].id,
                    "cardiovisualUserID": videoViewSuccessdata[0].cardiovisualUserID,
                    "videoID": 0,
                    "videoTag": videoViewSuccessdata[0].videoTag,
                    "videoViewCount": 0,
                    "updatedAt": new Date().toISOString()
                }).subscribe(function (videoViewUpdateSuccess) {
                    var response = JSON.parse(videoViewUpdateSuccess['_body']);
                    localStorage.setItem('myViewCount', response.videoViewCount);
                }, function (videoViewUpdateError) {
                });
            }
        }, function (videoViewdataerr) {
        });
    };
    HttpService.prototype.allVideoViewsbyuser = function (userID) {
        var myurl = this.localapi + "/api/VideoViews/?filter[where][cardiovisualUserID]=" + userID;
        var allVideoViewsJsonData = this.http.get(myurl).map(function (videoViewsbyuser) { return videoViewsbyuser.json(); });
        return allVideoViewsJsonData;
    };
    HttpService.prototype.getCustomPlaylistData = function (user_id) {
        var url = this.localapi + "/api/userplaylists/?filter[where][userId]=" + user_id;
        var custom_playlist_Data = this.http.get(url).map(function (res) { return res.json(); });
        return custom_playlist_Data;
    };
    HttpService.prototype.getUserdataByReferralcode = function (referral_code) {
        var url = this.localapi + "/api/CardiovisualUsers?filter[where][referral_code]=" + referral_code;
        var userJsonData = this.http.get(url).map(function (user_data) { return user_data.json(); });
        return userJsonData;
    };
    HttpService.prototype.getSingleSubtopic = function (user_type, subtopic_id) {
        if (user_type == "patient") {
            var url = this.localapi + "/api/subtopics/" + subtopic_id;
        }
        else {
            var url = this.localapi + "/api/subtopics/" + subtopic_id;
        }
        var subtopicdata = this.http.get(url).map(function (res) { return res.json(); });
        return subtopicdata;
    };
    HttpService.prototype.getSingleInformation = function (user_type, info_id) {
        if (user_type == "patient") {
            var url = this.localapi + "/api/information/" + info_id;
        }
        else {
            var url = this.localapi + "/api/information/" + info_id;
        }
        var infodata = this.http.get(url).map(function (res) { return res.json(); });
        return infodata;
    };
    HttpService.prototype.checkReferralCode = function (referral_code) {
        var url = this.localapi + "/api/CardiovisualUsers?filter[where][referral_code]=" + referral_code;
        var referral_code_data = this.http.get(url).map(function (res) { return res.json(); });
        return referral_code_data;
    };
    HttpService.prototype.message_Seen = function (id) {
        this.http.put(this.localapi + "/api/inAppNotifications/" + id, {
            "messageSeen": 1
        }).subscribe(function (msgSeendata) {
            var insertresponse = JSON.parse(msgSeendata['_body']);
            //alert('insertresponse--->'+JSON.stringify(insertresponse));
        }, function (msgSeendataErr) {
            var insertVideoViews = JSON.parse(msgSeendataErr['_body']);
            //alert('insert error--->'+JSON.stringify(insertVideoViews));
        });
    };
    HttpService.prototype.inAppNotification = function () {
        var cur_date = new Date();
        var inAppurl = this.localapi + "/api/inAppNotifications?filter[where][isActive]=1&filter[where][and][0][active_till][gt]=" + cur_date.toISOString() + "&filter[where][and][1][active_from][lt]=" + cur_date.toISOString() + "&filter[order]=position DESC";
        var inAppData = this.http.get(inAppurl).map(function (res) { return res.json(); });
        return inAppData;
    };
    HttpService.prototype.newNotificationSync = function (id) {
        var cur_date = new Date();
        var inAppurl = this.localapi + "/api/inAppNotifications?filter[where][isActive]=1&filter[where][and][0][active_till][gt]=" + cur_date.toISOString() + "&filter[where][and][1][active_from][lt]=" + cur_date.toISOString() + "&filter[order]=position DESC &filter[limit]=20&filter[where][and][0][id][gt]=" + id;
        var inAppData = this.http.get(inAppurl).map(function (res) { return res.json(); });
        return inAppData;
    };
    HttpService.prototype.fetchDataFromapi = function (url) {
        var apiData = this.http.get(url).map(function (res) { return res.json(); });
        return apiData;
    };
    return HttpService;
}());

//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_purchase__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_countryandrolelist_countryandrolelist__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_plus__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_onesignal__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_inapp_inapp__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_app_version__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_base64_to_gallery__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_app_rate__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_colors_popover_colors_popover__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_width_popover_width_popover__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_brush_type_popover_brush_type_popover__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_speech_recognition__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_call_number__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_radient_settings_radient_settings__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_android_permissions__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_qr_scanner__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_sqlite_porter__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { AppSettings } from '../services/app-settings';



//import { DownloadService } from '../services/DownloadService';






/*abhi*/









//import { GooglePlus } from '@ionic-native/google-plus/ngx';





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_35__pages_colors_popover_colors_popover__["a" /* ColorsPopoverPage */], __WEBPACK_IMPORTED_MODULE_36__pages_width_popover_width_popover__["a" /* WidthPopoverPage */], __WEBPACK_IMPORTED_MODULE_37__pages_brush_type_popover_brush_type_popover__["a" /* BrushTypePopoverPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */],
                //NgxQRCodeModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true, platforms: {
                        ios: {
                            backButtonText: '',
                            pageTransition: 'md-transition',
                        }
                    }, }, {
                    links: [
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allcmetopiclist/allcmetopiclist.module#AllcmetopiclistPageModule', name: 'AllcmetopiclistPage', segment: 'allcmetopiclist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aaplaunchlocation/aaplaunchlocation.module#AaplaunchlocationPageModule', name: 'AaplaunchlocationPage', segment: 'aaplaunchlocation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/channels/channels.module#ChannelsPageModule', name: 'ChannelsPage', segment: 'channels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bell-notification-list/bell-notification-list.module#BellNotificationListPageModule', name: 'BellNotificationListPage', segment: 'bell-notification-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/channel-list-tabs/channel-list-tabs.module#ChannelListTabsPageModule', name: 'ChannelListTabsPage', segment: 'channel-list-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drawon/drawon.module#DrawonPageModule', name: 'DrawonPage', segment: 'drawon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/footer/footer.module#FooterPageModule', name: 'FooterPage', segment: 'footer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/header/header.module#HeaderPageModule', name: 'HeaderPage', segment: 'header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information-tab/information-tab.module#InformationTabModule', name: 'InformationTab', segment: 'information-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage-devices/manage-devices.module#ManageDevicesPageModule', name: 'ManageDevicesPage', segment: 'manage-devices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-tabs/item-details-tabs.module#ItemDetailsPageTabsModule', name: 'ItemDetailsPageTabs', segment: 'item-details-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mycv/mycv.module#MycvPageModule', name: 'MycvPage', segment: 'mycv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information-video-details/information-video-details.module#InformationVideoDetailsPageModule', name: 'InformationVideoDetailsPage', segment: 'information-video-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myfavorites/myfavorites.module#MyfavoritesPageModule', name: 'MyfavoritesPage', segment: 'myfavorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orientation-playlist-hcp/orientation-playlist-hcp.module#OrientationPlaylistHcpModule', name: 'OrientationPlaylistHcp', segment: 'orientation-playlist-hcp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mydownloads/mydownloads.module#MyDownloadPageModule', name: 'MyDownloadPage', segment: 'mydownloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orientation-playlist-nonhcp/orientation-playlist-nonhcp.module#OrientationPlaylistNonHcpModule', name: 'OrientationPlaylistNonHcp', segment: 'orientation-playlist-nonhcp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plandetails/plandetails.module#PlandetailsPageModule', name: 'PlandetailsPage', segment: 'plandetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playlist/playlist.module#PlaylistPageModule', name: 'PlaylistPage', segment: 'playlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qrcode/qrcode.module#QrcodePageModule', name: 'QrcodePage', segment: 'qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupwithapple/signupwithapple.module#SignupwithapplePageModule', name: 'SignupwithapplePage', segment: 'signupwithapple', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupwithfacebook/signupwithfacebook.module#SignupwithfacebookPageModule', name: 'SignupwithfacebookPage', segment: 'signupwithfacebook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupwithsocialnoemail/signupwithsocialnoemail.module#SignupwithsocialnoemailPageModule', name: 'SignupwithsocialnoemailPage', segment: 'signupwithsocialnoemail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupwithgoogle/signupwithgoogle.module#SignupwithgooglePageModule', name: 'SignupwithgooglePage', segment: 'signupwithgoogle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splashes/splashes.module#SplashesPageModule', name: 'SplashesPage', segment: 'splashes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upgrade-plan/upgrade-plan.module#UpgradePlanPageModule', name: 'UpgradePlanPage', segment: 'upgrade-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-2/tab-page-2.module#TabPage2Module', name: 'TabPage2', segment: 'tab-page-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-list/video-list.module#VideoListPageModule', name: 'VideoListPage', segment: 'video-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-details/video-details.module#VideoDetailsPageModule', name: 'VideoDetailsPage', segment: 'video-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whats-new-seeall/whats-new-seeall.module#WhatsNewSeeallPageModule', name: 'WhatsNewSeeallPage', segment: 'whats-new-seeall', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whats-new-details/whats-new-details.module#WhatsNewDetailsPageModule', name: 'WhatsNewDetailsPage', segment: 'whats-new-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whats-new/whats-new.module#WhatsNewPageModule', name: 'WhatsNewPage', segment: 'whats-new', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_35__pages_colors_popover_colors_popover__["a" /* ColorsPopoverPage */], __WEBPACK_IMPORTED_MODULE_36__pages_width_popover_width_popover__["a" /* WidthPopoverPage */], __WEBPACK_IMPORTED_MODULE_37__pages_brush_type_popover_brush_type_popover__["a" /* BrushTypePopoverPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_6__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_30__providers_inapp_inapp__["a" /* InappProvider */],
                __WEBPACK_IMPORTED_MODULE_7__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_clevertap__["a" /* CleverTap */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_26__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_network_check_network_check__["a" /* NetworkCheckProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_app_version__["a" /* AppVersion */],
                //BarcodeScanner,
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
                __WEBPACK_IMPORTED_MODULE_33__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_40__providers_radient_settings_radient_settings__["a" /* RadientSettingsProvider */], __WEBPACK_IMPORTED_MODULE_41__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_42__ionic_native_qr_scanner__["a" /* QRScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_interface__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__country_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__country_interface__, "Country")) __webpack_require__.d(__webpack_exports__, "Country", function() { return __WEBPACK_IMPORTED_MODULE_0__country_interface__["Country"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__country_interface__, "Port")) __webpack_require__.d(__webpack_exports__, "Port", function() { return __WEBPACK_IMPORTED_MODULE_0__country_interface__["Port"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__country_type__ = __webpack_require__(465);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return __WEBPACK_IMPORTED_MODULE_1__country_type__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port_interface__ = __webpack_require__(466);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__port_type__ = __webpack_require__(467);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Port", function() { return __WEBPACK_IMPORTED_MODULE_3__port_type__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

//# sourceMappingURL=country.interface.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Country; });
var Country = /** @class */ (function () {
    function Country(country) {
        this.id = country.id;
        this.name = country.name;
        this.flag = country.flag;
        this.ports = country.ports;
    }
    Object.defineProperty(Country.prototype, "flagUrl", {
        get: function () {
            return "https://lipis.github.io/flag-icon-css/flags/4x3/" + this.flag + ".svg";
        },
        enumerable: false,
        configurable: true
    });
    return Country;
}());

//# sourceMappingURL=country.type.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IPort */
var IPort = /** @class */ (function () {
    function IPort() {
    }
    return IPort;
}());

//# sourceMappingURL=port.interface.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Port; });
var Port = /** @class */ (function () {
    function Port(port) {
        this.id = port.id;
        this.name = port.name;
        this.doctorcode = port.doctorcode;
        this.country = port.country;
        this.timeZone = port.timeZone;
    }
    return Port;
}());

//# sourceMappingURL=port.type.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkCheckProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_screen_orientation__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var NetworkCheckProvider = /** @class */ (function () {
    function NetworkCheckProvider(injector) {
        var _this = this;
        this.injector = injector;
        this.myallpageIntervalcount = 0;
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Platform */]);
        this.network_object = injector.get(__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* ToastController */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.social_sharing_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */]);
        this.call_number_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_10__ionic_native_clevertap__["a" /* CleverTap */]();
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        this.platform_object.ready().then(function () {
            _this.isoDateFormat = new Date().toISOString();
            /*
            //Subscribe on pause i.e. background
           this.sub1$ = this.platform_object.pause.subscribe(() => {
              //Hello pause
              alert(' network pause background');
              console.log(' network pause background');

            });

            //Subscribe on resume i.e. foreground
            this.sub2$ = this.platform_object.resume.subscribe(() => {
              //window['paused'] = 0;
              alert(' network resume foreground');
              console.log(' network resume foreground');
            });
            */
        });
    }
    NetworkCheckProvider.prototype.getNetworkType = function () {
        return this.network_object.type;
    };
    NetworkCheckProvider.prototype.getallPageAction = function (userType) {
        var _this = this;
        if (this.network_object.type == 'none') {
            //alert('this.network_object.typ--->'+this.network_object.type);
            this.toast_controller_object.create({
                message: 'requires internet connection.',
                position: 'bottom',
                duration: 5000
            }).present();
        }
        else {
            this.http_service_object.forallPageAction("allPageAction").subscribe(function (allPageActiondata) {
                //alert('userType-->'+userType);
                //alert('allPageActiondata-->'+JSON.stringify(allPageActiondata));
                //alert('allPageActiondata length-->'+JSON.stringify(allPageActiondata.length));
                if (allPageActiondata.length > 0) {
                    var jsonPayload = JSON.parse(allPageActiondata[0].list_values);
                    var forAllPageUserActiondata = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["filter"](jsonPayload, function (json_for) {
                        return (json_for.usertype == userType || json_for.usertype == "All");
                    });
                    var myProptiming = forAllPageUserActiondata[0].timing;
                    if (myProptiming != undefined && myProptiming != "") {
                        // code...
                        //alert('hhh');
                        if (_this.dateCheck(forAllPageUserActiondata[0].activeFrom, forAllPageUserActiondata[0].activeTill, _this.isoDateFormat)) {
                            //alert("Availed");
                            _this.myallpageActionvar = setTimeout(function () { _this.myTimer(forAllPageUserActiondata[0], '', '', '', 'Time spent in the app'); }, myProptiming);
                        }
                    }
                    if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](forAllPageUserActiondata[0].randomVideoViewCount) > 0) {
                        var activeArrayforRandomVideo = forAllPageUserActiondata[0].randomVideoViewCount;
                        //alert('randomVideoactiveFrom-->'+activeArrayforRandomVideo.randomVideoactiveFrom);
                        if (_this.dateCheck(activeArrayforRandomVideo.randomVideoactiveFrom, activeArrayforRandomVideo.randomVideoactiveTill, _this.isoDateFormat)) {
                            _this.myrandomVideoViewArry = forAllPageUserActiondata[0].randomVideoViewCount;
                        }
                    }
                    else {
                        _this.myrandomVideoViewArry = "";
                    }
                }
            }, function (tagbasicallPageActionerr) {
                //console.log('tagbasicallPageActionerr->'+tagbasicallPageActionerr);
            });
        }
    };
    NetworkCheckProvider.prototype.forRandomVideoViewCount = function (id) {
        var _this = this;
        var showrandomVideo_status = localStorage.getItem('showrandomVideo');
        if (this.myrandomVideoViewArry != "" && showrandomVideo_status == 'yes') {
            this.http_service_object.allVideoViewsbyuser(id).subscribe(function (randomVideoViewActiondata) {
                var myRandomViedoCountSet = _this.myrandomVideoViewArry;
                var setVideoViewCount = myRandomViedoCountSet.videoViewCount;
                //alert("setVideoViewCount-->"+setVideoViewCount);
                var totalViewd = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["reduce"](randomVideoViewActiondata, function (memoizer, value) {
                    return memoizer + value.videoViewCount;
                }, 0);
                //alert("totalViewd-->"+totalViewd);
                if (totalViewd % setVideoViewCount == 0) {
                    _this.myTimer(myRandomViedoCountSet, 'randomVideoAction', '', '', 'Random video view throughout the app');
                }
            }, function (randomVideoViewActiondataerr) {
                //console.log('randomVideoViewActiondataerr->'+randomVideoViewActiondataerr);
            });
        }
        else {
            //alert('blank');
        }
    };
    NetworkCheckProvider.prototype.getPageAction = function (pagename, forAction, exitAction, userType) {
        var _this = this;
        if (this.network_object.type == 'none') {
            //alert('this.network_object.typ--->'+this.network_object.type);
            this.toast_controller_object.create({
                message: 'requires internet connection.',
                position: 'bottom',
                duration: 5000
            }).present();
        }
        else {
            this.http_service_object.foParticularPageAction(pagename).subscribe(function (PageActiondata) {
                var arrayPush_status = localStorage.getItem('page_array_push');
                if (arrayPush_status == 'yes') {
                    _this.arrayOfpages = [];
                }
                if (PageActiondata.length > 0) {
                    var pageActionName = PageActiondata[0].name;
                    var pageActionjsonPayload = JSON.parse(PageActiondata[0].list_values);
                    var forParticulsPageUserActiondata = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["filter"](pageActionjsonPayload, function (json_for) {
                        return (json_for.usertype == userType || json_for.usertype == "All");
                    });
                    var mypageProptiming = forParticulsPageUserActiondata[0].timing;
                    if ((pagename == pageActionName) && forAction == "start") {
                        //alert('start for ----->'+pageActionName+'  mypageProptiming->'+mypageProptiming);
                        if (mypageProptiming != undefined && mypageProptiming != "") {
                            if (_this.dateCheck(forParticulsPageUserActiondata[0].activeFrom, forParticulsPageUserActiondata[0].activeTill, _this.isoDateFormat) && (_this.arrayOfpages.indexOf(pageActionName) == -1)) {
                                //alert('start popup for-->'+pagename+'   -->'+this.arrayOfpages.indexOf(pageActionName));
                                _this.myPageActionvar = setTimeout(function () { _this.myTimer(forParticulsPageUserActiondata[0], 'forParticularPage', pageActionName, '', 'Time spent on ' + pageActionName); }, mypageProptiming);
                            }
                        }
                    }
                    else if ((pagename == pageActionName) && forAction == "end") {
                        if (mypageProptiming != undefined && mypageProptiming != "") {
                            if (_this.dateCheck(forParticulsPageUserActiondata[0].activeFrom, forParticulsPageUserActiondata[0].activeTill, _this.isoDateFormat)) {
                                //alert('end for ----->'+pagename);
                                clearTimeout(_this.myPageActionvar);
                            }
                        }
                    }
                    else if ((pagename == pageActionName) && forAction == "exitPage" && (_this.arrayOfpages.indexOf(pagename) == -1)) {
                        if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](forParticulsPageUserActiondata[0].action) > 0) {
                            // code...
                            var mypageExitdata = forParticulsPageUserActiondata[0].action;
                            if (exitAction == "forBackClick" && __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](mypageExitdata.backButtonClick) > 0) {
                                var activeBackArray = mypageExitdata.backButtonClick;
                                if (_this.dateCheck(activeBackArray.backButtonactiveFrom, activeBackArray.backButtonactiveTill, _this.isoDateFormat)) {
                                    _this.myTimer(mypageExitdata.backButtonClick, 'forBackClick', pagename, '', 'Back click from ' + pagename);
                                }
                            }
                            else if (exitAction == "forSearchClick" && __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](mypageExitdata.searchClick) > 0) {
                                var activeSearchArray = mypageExitdata.searchClick;
                                if (_this.dateCheck(activeSearchArray.searchactiveFrom, activeSearchArray.searchactiveTill, _this.isoDateFormat)) {
                                    _this.myTimer(mypageExitdata.searchClick, 'forSearchClick', pagename, '', 'Search click from ' + pagename);
                                }
                            }
                        }
                    }
                    //alert('pageActionjsonPayload length--->'+pageActionjsonPayload[0].timing);
                }
            }, function (pageActiondataerr) {
                //console.log('pageActiondataerr->'+pageActiondataerr);
            });
        }
    };
    NetworkCheckProvider.prototype.myTimer = function (val, foraction, videoTag, userID, intractContenttype) {
        var _this = this;
        if (foraction == 'forBackClick') {
            if (this.arrayOfpages.indexOf(videoTag) < 0) {
                this.arrayOfpages.push(videoTag);
                localStorage.setItem('page_array_push', 'no');
            }
            var mymessage = val.pageprompt;
            var myUrl = val.pageInteractUrl;
            //alert('arrayOfpages after push-->'+JSON.stringify(this.arrayOfpages));
        }
        else if (foraction == 'forSearchClick') {
            if (this.arrayOfpages.indexOf(videoTag) < 0) {
                this.arrayOfpages.push(videoTag);
                localStorage.setItem('page_array_push', 'no');
            }
            var mymessage = val.pageprompt;
            var myUrl = val.pageInteractUrl;
            //alert('arrayOfpages after push-->'+JSON.stringify(this.arrayOfpages));
        }
        else if (foraction == 'detalsPageAction') {
            // code...
            if (this.pushaArrayOfTags.indexOf(this.seenVideoTags) < 0) {
                this.pushaArrayOfTags.push(this.seenVideoTags);
                localStorage.setItem('arrayOfTags', 'no');
            }
            var mymessage = val.actionprompt;
            var myUrl = val.actionInteractUrl;
        }
        else if (foraction == 'randomVideoAction') {
            var mymessage = val.randomVideoPrompt;
            var myUrl = val.randomVideoInteractUrl;
            localStorage.setItem('showrandomVideo', 'no');
        }
        else if (foraction == 'forParticularPage') {
            // code...
            //alert('arrayOfpages-->'+JSON.stringify(this.arrayOfpages));
            //alert('pages name -->'+JSON.stringify(videoTag));
            if (this.arrayOfpages.indexOf(videoTag) < 0) {
                this.arrayOfpages.push(videoTag);
                localStorage.setItem('page_array_push', 'no');
            }
            var mymessage = val.prompt;
            var myUrl = val.InteractUrl;
            //alert('arrayOfpages after push-->'+JSON.stringify(this.arrayOfpages));
        }
        else {
            var mymessage = val.prompt;
            var myUrl = val.InteractUrl;
        }
        var confirmPopup = this.alert_controller_object.create({
            title: '',
            message: "<b>" + mymessage + "</b>",
            cssClass: 'popup-pin',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        if (foraction == 'updateView') {
                            _this.forTrigerActionClevertap(intractContenttype, 'No clicked');
                            _this.http_service_object.updateVideoViewCount(videoTag, userID);
                        }
                        else {
                            _this.forTrigerActionClevertap(intractContenttype, 'No clicked');
                        }
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        if (foraction == 'updateView') {
                            _this.clickedOnGo(myUrl);
                            _this.forTrigerActionClevertap(intractContenttype, 'Yes clicked');
                            _this.http_service_object.updateVideoViewCount(videoTag, userID);
                        }
                        else {
                            _this.clickedOnGo(myUrl);
                            _this.forTrigerActionClevertap(intractContenttype, 'Yes clicked');
                        }
                    }
                }
            ]
        });
        confirmPopup.present();
    };
    NetworkCheckProvider.prototype.clickedOnGo = function (todo_data) {
        var _this = this;
        var ref = this.in_app_browser_object.create(todo_data, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        ref.on('loadstop').subscribe(function (event) {
            _this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe(function (event) {
            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
    };
    NetworkCheckProvider.prototype.getVideoTagCountAction = function (videoTag, user_type, userID, action, intractArray, videoData) {
        var _this = this;
        if (this.network_object.type == 'none') {
            //alert('this.network_object.typ--->'+this.network_object.type);
            this.toast_controller_object.create({
                message: 'requires internet connection.',
                position: 'bottom',
                duration: 5000
            }).present();
        }
        else {
            this.updateViewTag = videoTag;
            this.updateViewUserId = userID;
            this.http_service_object.forAppPageAndTagAction(videoTag).subscribe(function (action_data) {
                var arrayOfTags_status = localStorage.getItem('arrayOfTags');
                if (arrayOfTags_status == 'yes') {
                    _this.pushaArrayOfTags = [];
                }
                if (action_data.length > 0) {
                    _this.seenVideoTags = action_data[0].name;
                    //alert('seenVideoTags-->'+this.seenVideoTags);
                    var myJsonDATA = JSON.parse(action_data[0].list_values);
                    var forParticulsrUsrdata = __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["filter"](myJsonDATA, function (json_for) {
                        return (json_for.usertype == user_type || json_for.usertype == "All");
                    });
                    //alert("forParticulsrUsrdata--->"+JSON.stringify(forParticulsrUsrdata));
                    var setRadomForViewCount = forParticulsrUsrdata[0].InteractUrl;
                    var setViewCount = forParticulsrUsrdata[0].userSeenCountTag;
                    _this.myviewcount = localStorage.getItem('myViewCount');
                    //alert('mydatacount-->'+myviewcount+ '  setViewCount-->'+setViewCount);
                    //alert('setRadomForViewCount-->'+JSON.stringify(setRadomForViewCount));
                    // if ((this.myviewcount % setViewCount == 0) && setViewCount != "RANDOM" && action == "playclick") {
                    if (setRadomForViewCount != "") {
                        if ((_this.myviewcount >= setViewCount) && setRadomForViewCount != "RANDOM" && action == "playclick") {
                            if (_this.dateCheck(forParticulsrUsrdata[0].activeFrom, forParticulsrUsrdata[0].activeTill, _this.isoDateFormat)) {
                                _this.myTimer(forParticulsrUsrdata[0], 'updateView', videoTag, userID, videoTag + ' tag video Play Count');
                            }
                        }
                        else if ((_this.myviewcount >= setViewCount) && setRadomForViewCount != "RANDOM" && action == "branchclick") {
                            if (_this.dateCheck(forParticulsrUsrdata[0].activeFrom, forParticulsrUsrdata[0].activeTill, _this.isoDateFormat)) {
                                _this.myTimer(forParticulsrUsrdata[0], 'updateView', videoTag, userID, 'Branch click video views Count');
                            }
                        }
                        else if ((_this.myviewcount >= setViewCount) && (setRadomForViewCount == "RANDOM" && action == "playclick")) {
                            if (_this.dateCheck(forParticulsrUsrdata[0].activeFrom, forParticulsrUsrdata[0].activeTill, _this.isoDateFormat)) {
                                //alert(" video count random Availed");
                                var randomData = intractArray[Math.floor(Math.random() * intractArray.length - 1)];
                                var actionMessage = randomData.label;
                                var valueForAction = randomData.value;
                                var contentTypeForAction = randomData.contentType;
                                _this.getRandomAction(actionMessage, valueForAction, contentTypeForAction, videoTag + ' tag video Play Count', 'updateView');
                            }
                        }
                    }
                    if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](forParticulsrUsrdata[0].action) > 0) {
                        var activeAction = forParticulsrUsrdata[0].action;
                        //alert('activeAction--->'+JSON.stringify(activeAction));
                        //alert('actionactiveFrom-->'+JSON.stringify(activeAction.actionactiveFrom));
                        if (_this.dateCheck(activeAction.actionactiveFrom, activeAction.actionactiveTill, _this.isoDateFormat)) {
                            //alert("action Availed");
                            _this.detalsPageBACKAction = forParticulsrUsrdata[0].action;
                        }
                        else {
                            _this.detalsPageBACKAction = '';
                            //alert("action not Availed");
                        }
                    }
                }
                else {
                    _this.detalsPageBACKAction = '';
                }
                _this.intractArrayAction = intractArray;
                _this.videoDataArray = videoData;
            }, function (actiondataerr) {
                //console.log('actiondataerr->'+actiondataerr);
            });
        }
    };
    NetworkCheckProvider.prototype.forTriggersDetalsPageBACKAction = function (Name, forAction) {
        if (Name == 'VideoDetailsPage' || Name == 'InformationVideoDetailsPage' || Name == 'WhatsNewDetailsPage') {
            var mypageExitdata = this.detalsPageBACKAction;
            var intractArrayData = this.intractArrayAction;
            var randomData = intractArrayData[Math.floor(Math.random() * intractArrayData.length - 1)];
            var backButton = mypageExitdata.backButtonClick;
            var search_Click = mypageExitdata.searchClick;
            var relatedVideo_Click = mypageExitdata.relatedVideoClick;
            if (forAction == "forBackClick") {
                if (backButton != "RANDOM" && (backButton != undefined && backButton != "")) {
                    if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](mypageExitdata.backButtonClick) > 0 && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
                        this.myTimer(mypageExitdata.backButtonClick, 'detalsPageAction', '', '', 'Back click from ' + Name);
                    }
                }
                else if (backButton != undefined && backButton != "" && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
                    var actionMessage = randomData.label;
                    var valueForAction = randomData.value;
                    var contentTypeForAction = randomData.contentType;
                    this.getRandomAction(actionMessage, valueForAction, contentTypeForAction, 'Back click from ' + Name, '');
                }
            }
            else if (forAction == "forSearchClick") {
                if (search_Click != "RANDOM" && (search_Click != undefined && search_Click != "")) {
                    if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](mypageExitdata.searchClick) > 0 && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
                        this.myTimer(mypageExitdata.searchClick, 'detalsPageAction', '', '', 'Search click from ' + Name);
                    }
                }
                else if (search_Click != undefined && search_Click != "" && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
                    var actionMessage = randomData.label;
                    var valueForAction = randomData.value;
                    var contentTypeForAction = randomData.contentType;
                    this.getRandomAction(actionMessage, valueForAction, contentTypeForAction, 'Search click from ' + Name, '');
                }
            }
            else if (forAction == "forRelateditemClick") {
                if (relatedVideo_Click != "RANDOM" && (relatedVideo_Click != undefined && relatedVideo_Click != "")) {
                    if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](mypageExitdata.relatedVideoClick) > 0 && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
                        this.myTimer(mypageExitdata.relatedVideoClick, 'detalsPageAction', '', '', 'Relateditem click from ' + Name);
                    }
                }
                else if (relatedVideo_Click != undefined && relatedVideo_Click != "" && (this.pushaArrayOfTags.indexOf(this.seenVideoTags) == -1)) {
                    var actionMessage = randomData.label;
                    var valueForAction = randomData.value;
                    var contentTypeForAction = randomData.contentType;
                    this.getRandomAction(actionMessage, valueForAction, contentTypeForAction, 'Relateditem click from ' + Name, '');
                }
            }
        }
    };
    NetworkCheckProvider.prototype.getRandomAction = function (mymessage, value, contentType, intractContenttype, foraction) {
        var _this = this;
        if (this.pushaArrayOfTags.indexOf(this.seenVideoTags) < 0) {
            this.pushaArrayOfTags.push(this.seenVideoTags);
            localStorage.setItem('arrayOfTags', 'no');
        }
        var confirmPopup = this.alert_controller_object.create({
            title: '',
            message: "<b>Would you like to try our " + mymessage + "</b>",
            cssClass: 'popup-pin',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        if (foraction == 'updateView') {
                            _this.forTrigerActionClevertap(intractContenttype, 'No clicked');
                            _this.http_service_object.updateVideoViewCount(_this.updateViewTag, _this.updateViewUserId);
                        }
                        else {
                            _this.forTrigerActionClevertap(intractContenttype, 'No clicked');
                        }
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        if (foraction == 'updateView') {
                            _this.getRandomclickedOnGo(mymessage, value, contentType);
                            _this.forTrigerActionClevertap(intractContenttype, 'Yes clicked');
                            _this.http_service_object.updateVideoViewCount(_this.updateViewTag, _this.updateViewUserId);
                        }
                        else {
                            _this.getRandomclickedOnGo(mymessage, value, contentType);
                            _this.forTrigerActionClevertap(intractContenttype, 'Yes clicked');
                        }
                    }
                }
            ]
        });
        confirmPopup.present();
    };
    NetworkCheckProvider.prototype.getRandomclickedOnGo = function (message, value, contentType) {
        var _this = this;
        if (contentType == 'forshare') {
            var options = {
                message: 'Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
                subject: 'Download CardioVisual',
                files: [],
                url: localStorage.getItem('isLinkSet'),
                chooserTitle: ''
            };
            this.social_sharing_object.shareWithOptions(options);
        }
        else if (contentType == 'forAddtoplaylist') {
            this.toast_controller_object.create({
                message: 'Coming Soon',
                position: 'bottom',
                duration: 3000
            }).present();
        }
        else if (contentType == 'forForumQuestion') {
            this.qnaSite(this.videoDataArray);
        }
        else if (contentType == 'forEmail') {
            this.social_sharing_object.canShareViaEmail().then(function (emailSuccess) {
                _this.social_sharing_object.shareViaEmail('', 'CardioVisual user has a question for you.', [value]).then(function (sharEmailSuccess) {
                });
            }).catch(function (emailError) {
                _this.toast_service_object.presentToast("Sharing via email is not possible.");
            });
        }
        else if (contentType == 'forPhone') {
            this.call_number_object.callNumber(value, true).then(function (callSuccess) { });
        }
        else if (contentType == 'webUrl') {
            var ref = this.in_app_browser_object.create(value, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
            ref.on('loadstop').subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
        }
        else if (contentType == 'Cancel') {
            console.log('Cancel');
        }
    };
    NetworkCheckProvider.prototype.qnaSite = function (video_data) {
        var _this = this;
        this.platform_object.ready().then(function () {
            if (video_data.forum_tags == undefined || video_data.forum_tags == 'undefined') {
                var forum_tags = video_data.slug;
            }
            else {
                var forum_tags = video_data.forum_tags;
            }
            var myModalOptions = {
                enableBackdropDismiss: false
            };
            _this.storage_object.get('user_logged_in').then(function (val) {
                _this.http_service_object.getUserInfoByLiveId(val).subscribe(function (data) {
                    if (data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities == 'Non-Healthcare Professional' || data.specialities == 'Healthcare Industry Professional') {
                        /*var confirmPopup = this.alert_controller_object.create({
                        title: '',
                        message: '<h4 style="text-align:center;"></h4><p style="text-align:center;font-weight:700;">Only for Heathcare professionals.</p>',
                        enableBackdropDismiss: true,
                        buttons: ['Dismiss']
                        });
                        confirmPopup.present();*/
                        var email = data.email;
                        var username = data.username;
                        if (email == '' || username == '' || username == null) {
                            //openForumDetailDashboardModal(this.email, this.username);
                            var myModal = _this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata: data }, myModalOptions);
                            myModal.present();
                            myModal.onDidDismiss(function (data) {
                                console.log("I have dismissed.");
                                //alert("I have dismissed.");
                            });
                            myModal.onWillDismiss(function (data) {
                                console.log("I'm about to dismiss");
                                //alert("I'm about to dismiss");
                            });
                        }
                        else {
                            _this.redirectToForumDashboard({ 'email': email, 'username': username, 'first_time': 'no', 'forum_tags': forum_tags, 'user_type': 'Patient' });
                        }
                    }
                    else {
                        var email = data.email;
                        var username = data.username;
                        if (email == '' || username == '' || username == null) {
                            //openForumDetailDashboardModal(this.email, this.username);
                            var myModal = _this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata: data }, myModalOptions);
                            myModal.present();
                            myModal.onDidDismiss(function (data) {
                                console.log("I have dismissed.");
                                //alert("I have dismissed.");
                            });
                            myModal.onWillDismiss(function (data) {
                                console.log("I'm about to dismiss");
                                //alert("I'm about to dismiss");
                            });
                        }
                        else {
                            _this.redirectToForumDashboard({ 'email': email, 'username': username, 'first_time': 'no', 'forum_tags': forum_tags, 'user_type': 'Doctor' });
                        }
                    }
                }, function (err) {
                    //alert(err);
                });
            });
        });
    };
    NetworkCheckProvider.prototype.redirectToForumDashboard = function (object) {
        /*var params = {
            "record_time" : this.dtStr,
            "record_date" : this.clevertapDate,
            "os" : localStorage.getItem('getDevicePlatform'),
            "userRoleId" : localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "userEmail" : localStorage.getItem('cv5userEmail'),
            "Identity":localStorage.getItem('userIdentity'),
            "userName" : object.username,
            "tags" : object.forum_tags,
            "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
            "location":localStorage.getItem('location'),
            "specialities":localStorage.getItem('usrSpecialities'),
            "subSpecialities": localStorage.getItem('cv5usrRolesubType')
        };

        this.clevertap_object.recordEventWithNameAndProps("openedForum",params);*/
        var _this = this;
        var text_arr = [object.username, object.email, object.first_time, object.forum_tags];
        var text = JSON.stringify(text_arr);
        //var text = 'abhishek#*#abbhishek.chavan+1@oneleap.in#*#no';//+object.email+'#*#'+object.first_time;
        var encode_string = window.btoa(text);
        var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t=' + encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        ref.on('loadstop').subscribe(function (event) {
            _this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe(function (event) {
            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
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
    NetworkCheckProvider.prototype.forTrigerActionClevertap = function (type, action) {
        var _this = this;
        this.storage_object.get('user_logged_in').then(function (val) {
            if (val != 0 || val != null) {
                var params = {
                    "record_time": _this.dtStr,
                    "record_date": _this.clevertapDate,
                    "os": localStorage.getItem('getDevicePlatform'),
                    "userRoleId": localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "userEmail": localStorage.getItem('cv5userEmail'),
                    "Identity": localStorage.getItem('userIdentity'),
                    "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                    "location": localStorage.getItem('location'),
                    "specialities": localStorage.getItem('usrSpecialities'),
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                    "intractContenttype": type,
                    "actionClicked": action
                };
                _this.clevertap_object.recordEventWithNameAndProps("clickedOnTriggerAction", params);
            }
        });
    };
    NetworkCheckProvider.prototype.dateCheck = function (from, till, current) {
        var fromDate, tillDate, currentDate;
        fromDate = Date.parse(from);
        tillDate = Date.parse(till);
        currentDate = Date.parse(current);
        if ((currentDate <= tillDate && currentDate >= fromDate)) {
            return true;
        }
        else {
            return false;
        }
    };
    NetworkCheckProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], NetworkCheckProvider);
    return NetworkCheckProvider;
}());

//# sourceMappingURL=network_check.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = {
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": false,
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCJgAyuWNAESAGnLEN1hWQ8mEbbPYkJgmo",
        "authDomain": "ionic3-yellow.firebaseapp.com",
        "databaseURL": "https://ionic3-yellow.firebaseio.com",
        "projectId": "ionic3-yellow",
        "storageBucket": "ionic3-yellow.appspot.com",
        "messagingSenderId": "450167842906"
    },
    "MAP_KEY": {
        "apiKey": "AIzaSyCB7jsMv0hjwkVRan7vZZ9hDlI-dQNZRV8"
    }
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_videosharesocial_videosharesocial__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var MyApp = /** @class */ (function () {
    function MyApp(httpservice, http, databaseprovider, device, file, injector) {
        var _this = this;
        this.httpservice = httpservice;
        this.http = http;
        this.databaseprovider = databaseprovider;
        this.device = device;
        this.file = file;
        this.injector = injector;
        //rootPage = "HomePage";
        this.rootPage = "";
        this.counter = 0;
        this.counter_root_page = 0;
        this.clevertapId = 0;
        this.test = [];
        this.secureKey = '12345678910123456789012345678901';
        this.secureIV = '1234567891123456';
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.splash_screen_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]);
        this.status_bar_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]);
        this.modal_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.in_app_browser_object = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]);
        this.app_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]);
        this.social_sharing_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */]);
        this.onesignal_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_15__ionic_native_clevertap__["a" /* CleverTap */]();
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.app_version_object = injector.get(__WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__["a" /* AppVersion */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_19__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.loading_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_20__services_loading_service__["a" /* LoadingService */]);
        this.for_videoshare_object = injector.get(__WEBPACK_IMPORTED_MODULE_21__providers_videosharesocial_videosharesocial__["a" /* VideosharesocialProvider */]);
        this.dtStr = this.httpservice.dtStr();
        this.clevertapDate = this.httpservice.clevertapDate();
        this.platform_object.ready().then(function () {
            var model = device.model;
            localStorage.setItem('modelNo', model);
            var deviceID = device.uuid;
            localStorage.setItem('getDeviceuuid', deviceID);
            var string = device.version;
            localStorage.setItem('getDeviceversion', string);
            var devicePlatform = device.platform;
            localStorage.setItem('getDevicePlatform', devicePlatform);
            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            localStorage.setItem('app_sync_dashboard', 'yes');
            localStorage.setItem('app_headerNotification', 'yes');
            localStorage.setItem('page_array_push', 'yes');
            localStorage.setItem('showrandomVideo', 'yes');
            localStorage.setItem('arrayOfTags', 'yes');
            localStorage.setItem('applaunchPopup', 'yes');
            _this.httpservice.getAppDetails(devicePlatform).subscribe(function (data) {
                var osTypeDetails = data[0];
                _this.app_version_object.getVersionNumber().then(function (version) {
                    _this.app_version_number = version;
                });
            });
            //for video files
            _this.file.createDir(_this.file.dataDirectory, 'V2CardioMedia', true).then(function (mediaval) {
            }).catch(function (e) { });
            //for video icon files
            _this.file.createDir(_this.file.dataDirectory, 'icons', true).then(function (iconval) {
            }).catch(function (e) { });
            //for drawon imgae files
            _this.file.createDir(_this.file.dataDirectory, 'drawon', true).then(function (drownval) {
            }).catch(function (e) { });
            _this.file.createDir(_this.file.dataDirectory, 'splashes', true).then(function (splashval) {
            }).catch(function (e) { });
            /*folder is for channels images and logo */
            _this.file.createDir(_this.file.dataDirectory, 'channels', true).then(function (channelsval) {
            }).catch(function (e) { });
            var android_play_store_link = "https://play.google.com/store/apps/details?id=com.cardiovisual.app";
            localStorage.setItem('android_play_store_link', android_play_store_link);
            var ios_app_store_link = "https://itunes.apple.com/us/app/cardiovisual-heart-health/id1009028152?ls=1&mt=8";
            localStorage.setItem('ios_app_store_link', ios_app_store_link);
            localStorage.setItem('myProductflg', 'false');
            localStorage.setItem('productID', 'false');
            // Branch initialization
            _this.platform_object.resume.subscribe(function () {
                branchInit();
            });
            var branchInit = function () {
                if (!_this.platform_object.is('cordova')) {
                    return;
                }
                var Branch = window["Branch"];
                localStorage.setItem('branch_flag', '');
                Branch.initSession(function (data) {
                }).then(function (data) {
                    if (data["+clicked_branch_link"]) {
                        // read deep link data on click
                        if (data.hasOwnProperty('sub_topic_ids')) {
                            // playlist
                            var subTopicIds = data.sub_topic_ids;
                            var playListName = data.playlists_name;
                            var user_type = '';
                            _this.storage_object.get('user_logged_in').then(function (val) {
                                if (val == 0 || val == null) {
                                    var confirmalert = _this.alert_controller_object.create({
                                        title: 'Are you a healthcare professional',
                                        message: 'Yes/No',
                                        buttons: [
                                            {
                                                text: 'Yes',
                                                handler: function () {
                                                    user_type = "doctor";
                                                }
                                            }, {
                                                text: 'No',
                                                handler: function () {
                                                    user_type = "patient";
                                                }
                                            }
                                        ],
                                        enableBackdropDismiss: false // <- Here! :)
                                    });
                                    confirmalert.present();
                                    confirmalert.onDidDismiss(function (alertData) {
                                        _this.databaseprovider.getTopicsAPIData(user_type);
                                        _this.databaseprovider.getCategoriesAPIData(user_type);
                                        _this.databaseprovider.forbranchSubTopicsAPIData(user_type);
                                        _this.params = {
                                            "record_time": _this.dtStr,
                                            "record_date": _this.clevertapDate,
                                            "os": localStorage.getItem('getDevicePlatform'),
                                            "userRoleId": (user_type == "doctor") ? 1 : 5,
                                            "userType": user_type,
                                            "playlistName": data.playlists_name
                                        };
                                        _this.clevertap_object.recordEventWithNameAndProps("openedSharedPlaylist", _this.params);
                                        var subtopics_id = subTopicIds;
                                        subtopics_id = subtopics_id.split(', ');
                                        var that = _this;
                                        that.test = [];
                                        __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["each"](subtopics_id, function (value, index) {
                                            var query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                            that.databaseprovider.fetchAllData('new_sub_topics', query).then(function (data) {
                                                if (data.length > 0) {
                                                    that.test.push(data[0]);
                                                }
                                            });
                                        });
                                        _this.loading_service_object.show();
                                        setTimeout(function () {
                                            _this.loading_service_object.hide();
                                            _this.nav.push('VideoDetailsPage', { data: that.test, type: 'playlist', index: 0, 'header': 'hide', 'frmbranch': 'branchplaylist', 'playListName': playListName, 'sendTo': 'Branch' });
                                        }, 3000);
                                    });
                                }
                                else {
                                    var confirmalert = _this.alert_controller_object.create({
                                        title: 'Click OK to watch this playlist.',
                                        message: '',
                                        buttons: [
                                            {
                                                text: 'OK',
                                                handler: function () {
                                                    console.log('OK clicked: ');
                                                }
                                            }
                                        ]
                                    });
                                    confirmalert.present();
                                    confirmalert.onDidDismiss(function (alertData) {
                                        _this.params = {
                                            "record_time": _this.dtStr,
                                            "record_date": _this.clevertapDate,
                                            "os": localStorage.getItem('getDevicePlatform'),
                                            "userRoleId": localStorage.getItem('cv5userRoleId'),
                                            "userType": localStorage.getItem('cv5usrType'),
                                            "userEmail": localStorage.getItem('cv5userEmail'),
                                            "specialities": localStorage.getItem('usrSpecialities'),
                                            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                                            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                            "Identity": localStorage.getItem('userIdentity'),
                                            "playlistContentFor": "Education",
                                            "playlistName": data.playlists_name
                                        };
                                        _this.clevertap_object.recordEventWithNameAndProps("openedSharedPlaylist", _this.params);
                                        var subtopics_id = subTopicIds;
                                        subtopics_id = subtopics_id.split(', ');
                                        var that = _this;
                                        that.test = [];
                                        __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["each"](subtopics_id, function (value, index) {
                                            var query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + value + " AND isActive = 1");
                                            that.databaseprovider.fetchAllData('new_sub_topics', query).then(function (data) {
                                                if (data.length > 0) {
                                                    that.test.push(data[0]);
                                                }
                                            });
                                        });
                                        _this.loading_service_object.show();
                                        setTimeout(function () {
                                            _this.loading_service_object.hide();
                                            _this.nav.push('VideoDetailsPage', { data: that.test, type: 'playlist', index: 0, 'header': 'hide', 'frmbranch': 'branchplaylist', 'playListName': playListName, 'sendTo': 'Branch' });
                                        }, 3000);
                                        // var query:string[] = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN("+subTopicIds+") AND isActive = 1");
                                        // this.databaseprovider.fetchAllData('new_sub_topics' , query).then(data => { 
                                        //   //this.branchplaylist = data; 
                                        //   this.nav.push('VideoDetailsPage', {data:data, type:'playlist', index:0, 'header':'hide', 'frmbranch':'branchplaylist'});
                                        // }); 
                                    });
                                }
                            });
                        }
                        else if (data.hasOwnProperty('custom_id')) {
                            // indivisual video
                            _this.storage_object.get('user_logged_in').then(function (val) {
                                if (val == 0 || val == null) {
                                    _this.nav.setRoot('LoginPage');
                                    _this.params = {
                                        "record_time": _this.dtStr,
                                        "record_date": _this.clevertapDate,
                                        "os": localStorage.getItem('getDevicePlatform'),
                                        "userLoggedIn": "user_logged_in:-" + false,
                                        "islogin": false
                                    };
                                    var ref = _this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?id=' + data.custom_id, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                                    ref.on('loadstop').subscribe(function (event) {
                                        _this.screen_orientation_object.unlock();
                                    });
                                    ref.on('exit').subscribe(function (event) {
                                        _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                                    });
                                }
                                else {
                                    //this.nav.setRoot('DashboardPage');
                                    _this.params = {
                                        "record_time": _this.dtStr,
                                        "record_date": _this.clevertapDate,
                                        "os": localStorage.getItem('getDevicePlatform'),
                                        "userRoleId": localStorage.getItem('cv5userRoleId'),
                                        "userType": localStorage.getItem('cv5usrType'),
                                        "userEmail": localStorage.getItem('cv5userEmail'),
                                        "Identity": localStorage.getItem('userIdentity'),
                                        "specialities": localStorage.getItem('usrSpecialities'),
                                        "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                                        "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                        "videoContentFor": 'Education',
                                        "userLoggedIn": "user_logged_in:-" + true,
                                        "islogin": true
                                    };
                                    var user_type = localStorage.getItem('cv5usrType');
                                    var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + data.custom_id);
                                    _this.databaseprovider.fetchAllData('new_sub_topics', querystring).then(function (subTopics_data) {
                                        if (subTopics_data.length == 0) {
                                            _this.databaseprovider.getSingleSubtopic(user_type, data.custom_id);
                                        }
                                        setTimeout(function () {
                                            _this.databaseprovider.fetchAllData('new_sub_topics', querystring).then(function (subTopics_data1) {
                                                if (subTopics_data1.length > 0) {
                                                    setTimeout(function () {
                                                        var params1 = {
                                                            "videoName": subTopics_data1[0].name
                                                        };
                                                        var params2 = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["extend"](_this.params, params1);
                                                        _this.clevertap_object.recordEventWithNameAndProps("openedSharedVideo", params2);
                                                        _this.nav.push('VideoDetailsPage', { pageItem: subTopics_data1[0].name, coloR: subTopics_data1[0].hexcodeBase, icondash: subTopics_data1[0].iconName, data: subTopics_data1[0], 'header': 'show', 'request_from': 'video_list', previousPage: 'appComponent', 'sendTo': 'Branch' });
                                                    }, 400);
                                                }
                                            });
                                        }, 2000);
                                    });
                                }
                                if (val == 0 || val == null) {
                                    _this.httpservice.getParticularSubTopicIdAPIData(data.custom_id).subscribe(function (subTopicIdAPIData) {
                                        var params1 = {
                                            "videoName": subTopicIdAPIData[0].name
                                        };
                                        var params2 = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["extend"](_this.params, params1);
                                        _this.clevertap_object.recordEventWithNameAndProps("openedSharedVideo", params2);
                                    }, function (err) {
                                    });
                                }
                            });
                        }
                        else if (data.hasOwnProperty('information_id')) {
                            _this.storage_object.get('user_logged_in').then(function (val) {
                                if (val == 0 || val == null) {
                                    _this.nav.setRoot('LoginPage');
                                    _this.infoparams = {
                                        "record_time": _this.dtStr,
                                        "record_date": _this.clevertapDate,
                                        "os": localStorage.getItem('getDevicePlatform'),
                                        "userLoggedIn": "user_logged_in:-" + false,
                                        "islogin": false
                                    };
                                    var ref = _this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?id=' + data.information_id, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                                    ref.on('loadstop').subscribe(function (event) {
                                        _this.screen_orientation_object.unlock();
                                    });
                                    ref.on('exit').subscribe(function (event) {
                                        _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                                    });
                                }
                                else {
                                    //this.nav.setRoot('DashboardPage');
                                    _this.infoparams = {
                                        "record_time": _this.dtStr,
                                        "record_date": _this.clevertapDate,
                                        "os": localStorage.getItem('getDevicePlatform'),
                                        "userRoleId": localStorage.getItem('cv5userRoleId'),
                                        "userType": localStorage.getItem('cv5usrType'),
                                        "userEmail": localStorage.getItem('cv5userEmail'),
                                        "Identity": localStorage.getItem('userIdentity'),
                                        "specialities": localStorage.getItem('usrSpecialities'),
                                        "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                                        "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                        "videoContentFor": 'Information',
                                        "userLoggedIn": "user_logged_in:-" + true,
                                        "islogin": true
                                    };
                                    var user_type = localStorage.getItem('cv5usrType');
                                    var infoquerystring = new Array("join information_data on information.id = information_data.id where information.id=" + data.information_id);
                                    _this.databaseprovider.fetchAllData('information', infoquerystring).then(function (infodata) {
                                        if (infodata.length == 0) {
                                            _this.databaseprovider.getSingleInformation(user_type, data.information_id);
                                        }
                                        setTimeout(function () {
                                            _this.databaseprovider.fetchAllData('information', infoquerystring).then(function (infodata1) {
                                                if (infodata1.length > 0) {
                                                    setTimeout(function () {
                                                        _this.nav.push('InformationVideoDetailsPage', { pageItem: infodata1[0].name, coloR: infodata1[0].hexcodeBase, icondash: infodata1[0].iconName, data: infodata1[0], 'header': 'show', 'request_from': 'video_list', previousPage: 'appComponent', 'sendTo': 'Branch' });
                                                    }, 400);
                                                }
                                            });
                                        }, 2000);
                                    });
                                }
                            });
                            _this.httpservice.getSingleInformationVideo(data.information_id).subscribe(function (individualVideoData) {
                                if (localStorage.getItem('cv5userRoleId') == '1') {
                                    var vidName = individualVideoData[0].hcp_name;
                                }
                                else if (localStorage.getItem('cv5userRoleId') == '5') {
                                    var vidName = individualVideoData[0].nonhcp_name;
                                }
                                else {
                                    var vidName = individualVideoData[0].hcp_name;
                                }
                                var infoparams1 = {
                                    "videoName": vidName
                                };
                                var infoparams2 = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["extend"](_this.infoparams, infoparams1);
                                _this.clevertap_object.recordEventWithNameAndProps("openedSharedVideo", infoparams2);
                            }, function (informationVideoErr) {
                            });
                        }
                        else if (data.hasOwnProperty('forum_link')) {
                            _this.storage_object.get('user_logged_in').then(function (val) {
                                if (!(val == 0 || val == null)) {
                                    _this.onPromptForQna({ 'slug': data.forum_link, 'title': data.forum_title });
                                }
                            });
                        }
                        else if (data.hasOwnProperty('referral_code')) {
                            localStorage.setItem('referred_by', data.referral_code);
                        }
                        else if (data.hasOwnProperty('web_link')) {
                            _this.params = {
                                "record_time": _this.dtStr,
                                "record_date": _this.clevertapDate,
                                "os": localStorage.getItem('getDevicePlatform'),
                                "userRoleId": localStorage.getItem('cv5userRoleId'),
                                "userType": localStorage.getItem('cv5usrType'),
                                "userEmail": localStorage.getItem('cv5userEmail'),
                                "Identity": localStorage.getItem('userIdentity'),
                                "specialities": localStorage.getItem('usrSpecialities'),
                                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                                "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                "userLoggedIn": "user_logged_in:-" + true,
                                "islogin": true,
                                "contentName": data.$og_title,
                                "location": localStorage.getItem('location')
                            };
                            _this.clevertap_object.recordEventWithNameAndProps("openedSharedLink", _this.params);
                            var ref = _this.in_app_browser_object.create(data.web_link, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                            ref.on('loadstop').subscribe(function (event) {
                                _this.screen_orientation_object.unlock();
                            });
                            ref.on('exit').subscribe(function (event) {
                                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                            });
                        }
                        else if (data.hasOwnProperty('whatsnew_id')) {
                            localStorage.setItem('branch_flag', 'yes');
                            _this.loading_service_object.show();
                            _this.storage_object.get('user_logged_in').then(function (val) {
                                if (val == 0 || val == null) {
                                    var whatsnew_url = _this.localapi + "/api/whatsnews/" + data.whatsnew_id;
                                    _this.httpservice.fetchDataFromapi(whatsnew_url).subscribe(function (whatsnew_data) {
                                        var list_values = JSON.parse(whatsnew_data.list_values);
                                        var custom_id = 0;
                                        if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](list_values.Condition) > 0) {
                                            custom_id = list_values.Condition[0];
                                        }
                                        else if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](list_values.Expert) > 0) {
                                            custom_id = list_values.Expert[0];
                                        }
                                        else if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](list_values.education) > 0) {
                                            custom_id = list_values.education[0];
                                        }
                                        else if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](list_values) > 0) {
                                            custom_id = list_values[0];
                                        }
                                        localStorage.setItem('branch_flag', '');
                                        var ref = _this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?wid=' + custom_id, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                                        ref.on('loadstop').subscribe(function (event) {
                                            _this.screen_orientation_object.unlock();
                                        });
                                        ref.on('exit').subscribe(function (event) {
                                            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                                        });
                                    });
                                }
                                else {
                                    var whatsnew_url = _this.localapi + "/api/whatsnews/" + data.whatsnew_id;
                                    _this.httpservice.fetchDataFromapi(whatsnew_url).subscribe(function (whatsnew_data) {
                                        _this.params = {
                                            "record_time": _this.dtStr,
                                            "record_date": _this.clevertapDate,
                                            "os": localStorage.getItem('getDevicePlatform'),
                                            "userRoleId": localStorage.getItem('cv5userRoleId'),
                                            "userType": localStorage.getItem('cv5usrType'),
                                            "userEmail": localStorage.getItem('cv5userEmail'),
                                            "specialities": localStorage.getItem('usrSpecialities'),
                                            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                                            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                            "Identity": localStorage.getItem('userIdentity'),
                                            "playlistContentFor": "Whatsnew",
                                            "playlistName": whatsnew_data.name
                                        };
                                        _this.clevertap_object.recordEventWithNameAndProps("openedSharedPlaylist", _this.params);
                                        switch (whatsnew_data.template) {
                                            case 'expert_playlist':
                                                var list_json = JSON.parse(whatsnew_data.list_values);
                                                _this.updated_id = '';
                                                for (var i = 0; i < list_json.length; i++) {
                                                    if (_this.updated_id == '') {
                                                        _this.updated_id = list_json[i];
                                                    }
                                                    else {
                                                        _this.updated_id = _this.updated_id + ',' + list_json[i];
                                                    }
                                                }
                                                setTimeout(function () {
                                                    if (whatsnew_data.source == 'education') {
                                                        var subtopic_url = _this.localapi + '/api/subtopics?filter={"where":{"id":{"inq":[' + list_json + ']}}}';
                                                        _this.httpservice.fetchDataFromapi(subtopic_url).subscribe(function (topic_data) {
                                                            var topic_ids = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["pluck"](topic_data, 'id');
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
                                                    else if (whatsnew_data.source == 'information') {
                                                        var info_url = _this.localapi + '/api/information?filter={"where": {"id": {"inq":[' + list_json + ']}}}';
                                                        _this.httpservice.fetchDataFromapi(info_url).subscribe(function (topic_data) {
                                                            var topic_ids = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["pluck"](topic_data, 'id');
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
                                                }, 2000);
                                                setTimeout(function () {
                                                    if (whatsnew_data.source == 'education') {
                                                        var subtopic_url1 = _this.localapi + '/api/subtopics?filter[where][isActive]=1&filter[where][id]=' + _this.valid_ids;
                                                        _this.httpservice.fetchDataFromapi(subtopic_url1).subscribe(function (topic_data) {
                                                            topic_data[0].isFavourite = 0;
                                                            _this.nav.push('WhatsNewDetailsPage', { data: whatsnew_data, type: whatsnew_data.template, index: 0, 'header': 'hide', 'display_playlist': topic_data[0] });
                                                            _this.loading_service_object.hide();
                                                        });
                                                    }
                                                }, 3000);
                                                break;
                                            case 'tab_list':
                                                localStorage.setItem('segment_name', whatsnew_data.source);
                                                _this.nav.push('ItemDetailsPageTabs', { pageItem: whatsnew_data.name, data: whatsnew_data, request_from: 'branch' });
                                                _this.loading_service_object.hide();
                                                break;
                                            case 'wordpress_blog':
                                                var network_type = _this.network_check_object.getNetworkType();
                                                if (network_type == 'none') {
                                                    _this.toast_controller_object.create({
                                                        message: 'You are now offline.',
                                                        position: 'bottom',
                                                        duration: 5000
                                                    }).present();
                                                    _this.loading_service_object.hide();
                                                }
                                                else {
                                                    //this.forClevertapRecords(item, type, list);
                                                    if (whatsnew_data.list_values == undefined || whatsnew_data.list_values == 'undefined') {
                                                        var ref = _this.in_app_browser_object.create(whatsnew_data.blog_link, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                                                        ref.on('loadstop').subscribe(function (event) {
                                                            _this.screen_orientation_object.unlock();
                                                        });
                                                        ref.on('exit').subscribe(function (event) {
                                                            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                                                        });
                                                        _this.loading_service_object.hide();
                                                    }
                                                    else {
                                                        var values = JSON.parse(whatsnew_data.list_values);
                                                        var ref = _this.in_app_browser_object.create(values.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                                                        ref.on('loadstop').subscribe(function (event) {
                                                            _this.screen_orientation_object.unlock();
                                                        });
                                                        ref.on('exit').subscribe(function (event) {
                                                            _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                                                        });
                                                        _this.loading_service_object.hide();
                                                    }
                                                }
                                                break;
                                            case 'video_detail':
                                                var list_json = JSON.parse(whatsnew_data.list_values);
                                                if (whatsnew_data.source == 'education') {
                                                    var subtopic_url = _this.localapi + '/api/subtopics?filter[where][isActive]=1&filter[where][id]=' + list_json.Condition[0];
                                                    _this.httpservice.fetchDataFromapi(subtopic_url).subscribe(function (topic_data) {
                                                        topic_data[0].isFavourite = 0;
                                                        _this.nav.push('WhatsNewDetailsPage', { data: whatsnew_data, type: whatsnew_data.template, index: 0, 'header': 'hide', 'display_data': topic_data[0], 'request_from': 'splash' });
                                                    });
                                                }
                                                else if (whatsnew_data.source == 'information') {
                                                    var info_url = _this.localapi + '/api/information?filter[where][isActive]=1&filter[where][id]=' + list_json.Expert[0];
                                                    _this.httpservice.fetchDataFromapi(info_url).subscribe(function (topic_data) {
                                                        topic_data[0].isFavourite = 0;
                                                        _this.nav.push('WhatsNewDetailsPage', { data: whatsnew_data, type: whatsnew_data.template, index: 0, 'header': 'hide', 'display_data': topic_data[0], 'request_from': 'splash' });
                                                    });
                                                }
                                                break;
                                        }
                                    });
                                }
                            });
                        }
                    }
                }).catch(function (err) {
                });
                Branch.setIdentity("cardio_" + localStorage.getItem('getCleverTapID')).then(function (res) {
                    // only canonicalIdentifier is required
                    var properties2 = {
                        canonicalIdentifier: 'cardiovisual',
                        title: 'CardioVisual'
                    };
                    var branchUniversalObj = null;
                    if (localStorage.getItem('isLinkSet') == null) {
                        // create a branchUniversalObj variable to reference with other Branch methods
                        Branch.createBranchUniversalObject(properties2).then(function (res) {
                            branchUniversalObj = res;
                        }).catch(function (err) {
                            console.log(JSON.stringify(err));
                        });
                    }
                });
            };
            branchInit();
            _this.initializeApp();
        });
        var user_role_subtype = localStorage.getItem('cv5usrRolesubType');
        var user_specialities = localStorage.getItem('usrSpecialities');
        if (user_role_subtype == 'medical-device-pharma-professional' || user_role_subtype == 'Medical Device/Pharma Professional' || user_role_subtype == 'patient' || user_role_subtype == 'Patient' || user_role_subtype == 'curious-learner' || user_role_subtype == 'Curious learner/Other' || user_specialities == 'Non-Healthcare Professional' || user_specialities == 'Healthcare Industry Professional') {
            //if(user_role_subtype == 'medical-device-pharma-professional' || user_role_subtype == 'Medical Device/Pharma Professional' || user_role_subtype == 'patient' || user_role_subtype == 'Patient' || user_role_subtype == 'curious-learner' || user_role_subtype == 'Curious learner/Other' ){
            this.pages = [
                { title: 'Learn Something New', component: '', icon: "icon-player-play menu-icon-size" },
                { title: 'Upgrade Plan', component: 'UpgradePlanPage', icon: "icon-upgrade" },
                { title: 'Scan & Share', component: 'QrcodePage', icon: "icon-video-icons-share-vid menu-icon-size" },
                { title: 'About', component: '', icon: "icon-about-us" },
                { title: 'Contact Us', component: '', icon: "icon-contact-us" },
                { title: 'Log Out', component: '', icon: "icon-logout" },
            ];
        }
        else {
            this.pages = [
                { title: 'Learn Something New', component: '', icon: "icon-player-play menu-icon-size" },
                { title: 'Upgrade Plan', component: 'UpgradePlanPage', icon: "icon-upgrade" },
                { title: 'Scan & Share', component: 'QrcodePage', icon: "icon-video-icons-share-vid menu-icon-size" },
                { title: 'About', component: '', icon: "icon-about-us" },
                { title: 'Contact Us', component: '', icon: "icon-contact-us" },
                { title: 'Log Out', component: '', icon: "icon-logout" },
            ];
        }
        this.params = {
            "background": "assets/images/background/cardio-user-setup-bg.jpg",
            "image": "assets/images/logo/cv-logo-subscription.png",
            "title": "CardioVisual"
        };
    }
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modal_controller_object.create("IntroPage");
        profileModal.present();
    };
    MyApp.prototype.doubleBackPress = function () {
        var toast = this.toast_controller_object.create({
            message: "Press Again to Exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.localapi = this.httpservice.getApi();
        this.platform_object.ready().then(function () {
            /*------------------------------------- clevertap -------------------------------------*/
            document.addEventListener('onCleverTapProfileDidInitialize', function (e) {
                console.log("onCleverTapProfileDidInitialize");
            });
            document.addEventListener('onCleverTapInAppNotificationDismissed', function (e) {
                console.log("onCleverTapInAppNotificationDismissed");
            });
            document.addEventListener('onDeepLink', function (e) {
                console.log("onDeepLink");
            });
            document.addEventListener('onPushNotification', function (e) {
                console.log("onPushNotification");
            });
            _this.clevertap_object.setDebugLevel(2);
            _this.clevertap_object.enablePersonalization();
            _this.clevertap_object.registerPush();
            /*-------------------------------End CleverTap--------------------------------------------------------------*/
            /* OneSignal initialization start by: Sanjeev */
            // window["plugins"].OneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });
            // this.onesignal_object.startInit("58d2188a-4144-4627-8548-9cd386b16746", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID");
            // this.onesignal_object.inFocusDisplaying(this.onesignal_object.OSInFocusDisplayOption.Notification);
            // this.onesignal_object.handleNotificationReceived().subscribe(() => {
            //  // do something when notification is received
            // });
            // this.onesignal_object.handleNotificationOpened().subscribe((data) => { 
            //   let payload = data; // getting id and action in additionalData.
            //   this.toDoAction(payload);
            // });
            // this.onesignal_object.endInit();
            setTimeout(function () {
                //  this.onesignal_object.sendTag("appVersion",this.app_version_number);       
                //   this.onesignal_object.getPermissionSubscriptionState().then(information => {
                //     this.notificacioneStatus = information.subscriptionStatus.subscribed;
                //     localStorage.setItem('getSubscriptionStatus', this.notificacioneStatus);
                //   });         
            }, 3000);
            /* Onesignal end */
            /* splash screen start */
            _this.storage_object.get('user_logged_in').then(function (val) {
                if (val == 0 || val == null) {
                    var onetwothreeupdate = new Array("");
                    _this.databaseprovider.fetchAllData('new_user_info', onetwothreeupdate).then(function (one_to_threeupdateResult) {
                        if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](one_to_threeupdateResult) > 0) {
                            localStorage.setItem('userliveId', one_to_threeupdateResult[0].liveId);
                            var userType = one_to_threeupdateResult[0].userRoleId;
                            var userROleType = (userType == 1) ? "doctor" : "patient";
                            localStorage.setItem('cv5usrType', userROleType);
                            localStorage.setItem('cv5userEmail', one_to_threeupdateResult[0].email);
                            localStorage.setItem('cv5userRoleId', one_to_threeupdateResult[0].userRoleId);
                            localStorage.setItem('cv5usrRolesubType', one_to_threeupdateResult[0].userRoleSubType);
                            localStorage.setItem('userIdentity', userROleType + one_to_threeupdateResult[0].liveId);
                            localStorage.setItem('verified', one_to_threeupdateResult[0].verified);
                            localStorage.setItem('location', one_to_threeupdateResult[0].location);
                            _this.storage_object.set('user_logged_in', one_to_threeupdateResult[0].liveId);
                            _this.databaseprovider.newUserInfoAddColumn(one_to_threeupdateResult[0].liveId);
                            // Get topics detail from API
                            _this.databaseprovider.getTopicsAPIData(userROleType);
                            //insert playlist data from api
                            _this.databaseprovider.insertPlaylistsAPIData(one_to_threeupdateResult[0].liveId);
                            // Get categories detail from API
                            _this.databaseprovider.getCategoriesAPIData(userROleType);
                            _this.databaseprovider.getCardioSplashes(userROleType);
                            _this.databaseprovider.getSubTopicsAPIData(userROleType);
                            _this.databaseprovider.getOrderDetailsAPIData(one_to_threeupdateResult[0].liveId);
                            //information table
                            _this.databaseprovider.getInformationAPIData(userROleType);
                            //channels table
                            _this.databaseprovider.getChannelsApiData(userROleType);
                            //custom_lisiting
                            _this.databaseprovider.getCutomlistingApi();
                            //custom video json
                            _this.databaseprovider.getCutomVideoJsonApi();
                            _this.databaseprovider.getSponsoredByData(userROleType);
                            _this.databaseprovider.getUserNotificationData(userROleType);
                            var loading = _this.loading_controller_object.create({
                                //spinner: 'ios',
                                spinner: 'dots',
                                content: "<div class='custom-spinner-container'>Please wait, app is being updated.</div>",
                                duration: 7700,
                                enableBackdropDismiss: false
                            });
                            loading.present();
                            setTimeout(function () {
                                _this.nav.setRoot('DashboardPage', { forAppUpdate: 'forAppUpgrade' });
                            }, 8000);
                        }
                        else {
                            _this.rootPage = "IntroPage";
                        }
                    }, function (onetwothreeupdateError) {
                    });
                }
                else {
                    var userData = new Array("");
                    _this.databaseprovider.fetchAllData('new_user_info', userData).then(function (userresult) {
                        _this.databaseprovider.newUserInfoAddColumn(userresult[0].liveId);
                        _this.userEmail = userresult[0].email;
                        _this.usrType = userresult[0].user_type;
                        _this.userRoleId = userresult[0].userRoleId;
                        // this.onesignal_object.sendTags({"userType": this.userRoleId, "profession": this.usrType, "email": this.userEmail,"userRolesubtype":userresult[0].user_role_sub_type});
                        /* set user details for clavertap use start */
                        localStorage.setItem('cv5userEmail', _this.userEmail);
                        localStorage.setItem('cv5userRoleId', _this.userRoleId);
                        localStorage.setItem('cv5usrType', _this.usrType);
                        localStorage.setItem('cv5usrRolesubType', userresult[0].user_role_sub_type);
                        localStorage.setItem('userIdentity', _this.usrType + userresult[0].liveId);
                        localStorage.setItem('verified', userresult[0].verified);
                        localStorage.setItem('userliveId', userresult[0].liveId);
                        localStorage.setItem('loginMedium', userresult[0].medium);
                        localStorage.setItem('location', userresult[0].location);
                        var params = {
                            "record_time": _this.dtStr,
                            "record_date": _this.clevertapDate,
                            "os": localStorage.getItem('getDevicePlatform'),
                            "modelNo": localStorage.getItem('modelNo'),
                            "deviceversion": localStorage.getItem('getDeviceversion'),
                            "userRoleId": localStorage.getItem('cv5userRoleId'),
                            "userType": localStorage.getItem('cv5usrType'),
                            "userEmail": localStorage.getItem('cv5userEmail'),
                            "specialities": localStorage.getItem('usrSpecialities'),
                            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                            "location": localStorage.getItem('location')
                        };
                        // Set clevertap Custom AppLaunch event.
                        _this.clevertap_object.recordEventWithNameAndProps("myAppLaunch", params);
                        _this.clevertap_object.profileSet({
                            "Location": localStorage.getItem('location'),
                            "UserRoleId": localStorage.getItem('cv5userRoleId'),
                            "UserType": localStorage.getItem('cv5usrType'),
                            "Specialities": localStorage.getItem('usrSpecialities'),
                            "SubSpecialities": localStorage.getItem('cv5usrRolesubType'),
                            "medium": localStorage.getItem('loginMedium')
                        });
                        /* set user details End */
                        setTimeout(function () {
                            if (userresult.length > 0 && localStorage.getItem('branch_flag') == '') {
                                var network_type = _this.network_check_object.getNetworkType();
                                if (network_type == 'none') {
                                    _this.nav.setRoot('DashboardPage');
                                    // this.nav.setRoot('WhatsNewPage');
                                }
                                else {
                                    if (userresult[0].verified != 0 && userresult[0].verified != null) {
                                        var userType = (userresult[0].userRoleId == 1) ? "doctor" : "patient";
                                        /*var splash_condition = new Array(" WHERE isFor='"+userType+"' OR isFor='all' ORDER BY position DESC");
                                        this.databaseprovider.fetchAllData('new_cardio_splashes' , splash_condition).then(splash_data => {*/
                                        _this.httpservice.getnewSplashes().subscribe(function (splash_data) {
                                            var splash_data_1 = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["filter"](splash_data, function (s_data1) {
                                                return (s_data1.isFor == userType || s_data1.isFor == 'all');
                                            });
                                            if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](splash_data_1) > 0) {
                                                var data2 = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["filter"](splash_data_1, function (data1) {
                                                    return (data1.isSponsor == 1);
                                                });
                                                if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](data2) > 0) {
                                                    _this.nav.setRoot('SplashesPage', { sponsordbyResult: data2, type: 'sponsordBy' });
                                                }
                                                else {
                                                    _this.nav.setRoot('DashboardPage');
                                                    // this.nav.setRoot('WhatsNewPage');
                                                }
                                            }
                                            else {
                                                _this.nav.setRoot('DashboardPage');
                                                // this.nav.setRoot('WhatsNewPage');
                                            }
                                        }, function (error) {
                                            _this.httpservice.getSponsorSplashes().subscribe(function (data) {
                                                if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](data) > 0) {
                                                    var data2 = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["filter"](data, function (data1) {
                                                        return (data1.isFor == userType || data1.isFor == "all");
                                                    });
                                                    if (__WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["size"](data2) > 0) {
                                                        _this.nav.setRoot('SplashesPage', { sponsordbyResult: data2, type: 'sponsordBy' });
                                                    }
                                                    else {
                                                        _this.nav.setRoot('DashboardPage');
                                                        // this.nav.setRoot('WhatsNewPage');
                                                    }
                                                }
                                                else {
                                                    _this.nav.setRoot('DashboardPage');
                                                    // this.nav.setRoot('WhatsNewPage');
                                                }
                                            }, function (err) {
                                            });
                                        });
                                    }
                                    else {
                                        _this.nav.setRoot('RegisterPage');
                                    }
                                }
                            }
                            else if (localStorage.getItem('branch_flag') == '') {
                                _this.rootPage = "IntroPage";
                            }
                        }, 1000);
                    });
                }
            });
            /* splash screen end */
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.status_bar_object.overlaysWebView(false);
            _this.status_bar_object.styleDefault();
            _this.status_bar_object.backgroundColorByHexString('#f0f0f0');
            _this.splash_screen_object.hide();
            //localStorage.setItem("mailChimpLocal", "true");
            var offline = Object(__WEBPACK_IMPORTED_MODULE_8_rxjs__["fromEvent"])(window, "offline");
            var online = Object(__WEBPACK_IMPORTED_MODULE_8_rxjs__["fromEvent"])(window, "online");
            offline.subscribe(function () {
                var toast1 = _this.toast_controller_object.create({
                    message: 'You are Offline',
                    position: 'bottom',
                    duration: 5000,
                    cssClass: 'normal-button'
                });
                toast1.present();
                toast1.onDidDismiss(function () {
                    //alert('Dismissed');
                });
            });
            online.subscribe(function () {
                var toast2 = _this.toast_controller_object.create({
                    message: 'Back Online',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'green-button'
                });
                toast2.present();
            });
            /* DOUBLE BACK EXIT start */
            _this.platform_object.registerBackButtonAction(function () {
                var nav = _this.app_object.getActiveNavs()[0];
                var activeView = nav.getActive();
                if (activeView.name != 'DashboardPage') {
                    _this.counter = 0;
                    _this.nav.pop();
                }
                else {
                    _this.doubleBackPress();
                    _this.counter++;
                    if (_this.counter == 2) {
                        _this.platform_object.exitApp();
                    }
                }
            }, 0);
            /* DOUBLE BACK EXIT end */
            /*Initialize Freshchat with your AppId & AppKey from your portal
             *https://web.Freshchat.com/settings/apisdk
             *Freshchat init start
             *Sanjeev Kumar 6th may 2019
             */
            (window.Freshchat).init({
                appId: 'ef339760-dcd9-46e7-903b-af831966d4ac',
                appKey: 'fa99ad4c-6f87-4946-af8e-87a47ee6e2e1',
                gallerySelectionEnabled: true,
                cameraCaptureEnabled: true,
                teamMemberInfoVisible: true,
                notificationSoundEnabled: true,
                showNotificationBanner: true,
            }, function (success) {
            });
            /* Freshchat init END*/
            //branchInit();
        }); //device ready end
        // document.addEventListener('deviceready', function() {
        //     branchInit();
        // }, false);
    }; //initializeApp End
    /*---------------------------------------------------------------------------------------------*/
    MyApp.prototype.toDoAction = function (data) {
        var _this = this;
        try {
            if (data.notification.payload.hasOwnProperty("additionalData")) {
                var additional_data = data.notification.payload.additionalData;
                var idVideo = additional_data.video_id;
                var informationID = additional_data.information_id;
                var user_type = localStorage.getItem('cv5usrType');
                if ((!idVideo || idVideo != null) && idVideo != undefined) {
                    this.storage_object.get('user_logged_in').then(function (val) {
                        if (val == 0 || val == null) {
                            _this.nav.setRoot('LoginPage');
                            var params = {
                                "record_time": _this.dtStr,
                                "record_date": _this.clevertapDate,
                                "os": localStorage.getItem('getDevicePlatform'),
                                "videoName": "webUrl::= https://pulse.cardiovisual.com/video/?id=" + idVideo,
                                "islogin": false
                            };
                            _this.clevertap_object.recordEventWithNameAndProps("openedOneSignalPushVideo", params);
                            var ref = _this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?id=' + idVideo, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                            ref.on('loadstop').subscribe(function (event) {
                                _this.screen_orientation_object.unlock();
                            });
                            ref.on('exit').subscribe(function (event) {
                                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                            });
                        }
                        else {
                            //this.nav.setRoot('DashboardPage');
                            _this.params = {
                                "record_time": _this.dtStr,
                                "record_date": _this.clevertapDate,
                                "os": localStorage.getItem('getDevicePlatform'),
                                "userRoleId": localStorage.getItem('cv5userRoleId'),
                                "userType": localStorage.getItem('cv5usrType'),
                                "userEmail": localStorage.getItem('cv5userEmail'),
                                "specialities": localStorage.getItem('usrSpecialities'),
                                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                                "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                "Identity": localStorage.getItem('userIdentity'),
                                "location": localStorage.getItem('location'),
                                "videoContentFor": 'Education',
                                "islogin": true
                            };
                            var querystring = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id=" + idVideo);
                            _this.databaseprovider.fetchAllData('new_sub_topics', querystring).then(function (subTopic_data) {
                                if (subTopic_data.length == 0) {
                                    _this.databaseprovider.getSingleSubtopic(user_type, idVideo);
                                }
                                setTimeout(function () {
                                    _this.databaseprovider.fetchAllData('new_sub_topics', querystring).then(function (subTopic_data1) {
                                        if (subTopic_data1.length > 0) {
                                            setTimeout(function () {
                                                var params1 = {
                                                    "videoName": subTopic_data1[0].name
                                                };
                                                var params2 = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["extend"](_this.params, params1);
                                                _this.clevertap_object.recordEventWithNameAndProps("openedOneSignalPushVideo", params2);
                                                _this.nav.push('VideoDetailsPage', { pageItem: subTopic_data1[0].name, coloR: subTopic_data1[0].hexcodeBase, icondash: subTopic_data1[0].iconName, data: subTopic_data1[0], 'header': 'show', 'request_from': 'video_list', previousPage: 'appComponent', 'sendTo': 'OneSignal' });
                                            }, 400);
                                        }
                                    });
                                }, 2000);
                            });
                        }
                    });
                }
                else if ((!informationID || informationID != null) && informationID != undefined) {
                    this.storage_object.get('user_logged_in').then(function (val) {
                        if (val == 0 || val == null) {
                            _this.nav.setRoot('LoginPage');
                            var params = {
                                "record_time": _this.dtStr,
                                "record_date": _this.clevertapDate,
                                "os": localStorage.getItem('getDevicePlatform'),
                                "videoName": "webUrl::= https://pulse.cardiovisual.com/video/?id=" + informationID,
                                "islogin": false
                            };
                            _this.clevertap_object.recordEventWithNameAndProps("openedOneSignalPushVideo", params);
                            var ref = _this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?id=' + informationID, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
                            ref.on('loadstop').subscribe(function (event) {
                                _this.screen_orientation_object.unlock();
                            });
                            ref.on('exit').subscribe(function (event) {
                                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                            });
                        }
                        else {
                            //this.nav.setRoot('DashboardPage');
                            _this.params = {
                                "record_time": _this.dtStr,
                                "record_date": _this.clevertapDate,
                                "os": localStorage.getItem('getDevicePlatform'),
                                "userRoleId": localStorage.getItem('cv5userRoleId'),
                                "userType": localStorage.getItem('cv5usrType'),
                                "userEmail": localStorage.getItem('cv5userEmail'),
                                "specialities": localStorage.getItem('usrSpecialities'),
                                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                                "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                                "Identity": localStorage.getItem('userIdentity'),
                                "location": localStorage.getItem('location'),
                                "videoContentFor": 'Information',
                                "islogin": true
                            };
                            var infoquerystring = new Array("join information_data on information.id = information_data.id where information.id=" + informationID);
                            _this.databaseprovider.fetchAllData('information', infoquerystring).then(function (infodata) {
                                if (infodata.length == 0) {
                                    _this.databaseprovider.getSingleInformation(user_type, informationID);
                                }
                                setTimeout(function () {
                                    _this.databaseprovider.fetchAllData('information', infoquerystring).then(function (infodata1) {
                                        if (infodata1.length > 0) {
                                            setTimeout(function () {
                                                var params1 = {
                                                    "videoName": infodata1[0].name
                                                };
                                                var params2 = __WEBPACK_IMPORTED_MODULE_10_underscore_underscore__["extend"](_this.params, params1);
                                                _this.clevertap_object.recordEventWithNameAndProps("openedOneSignalPushVideo", params2);
                                                _this.nav.push('InformationVideoDetailsPage', { pageItem: infodata1[0].name, coloR: infodata1[0].hexcodeBase, icondash: infodata1[0].iconName, data: infodata1[0], 'header': 'show', 'request_from': 'video_list', previousPage: 'appComponent', 'sendTo': 'OneSignal' });
                                            }, 400);
                                        }
                                    });
                                }, 2000);
                            });
                        }
                    });
                }
            }
        }
        catch (e) {
            console.warn(e);
        }
    };
    // openPage(page) {
    //   this.nav.setRoot(page.component);
    // };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.title === 'How to Use') {
            this.loading_service_object.show();
            var howto_query = new Array("WHERE name like '%How to Use%'");
            this.databaseprovider.fetchAllData('whatsnew', howto_query).then(function (data) {
                var list_values = JSON.parse(data[0].list_values);
                var json_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + list_values[0] + " AND isActive = 1");
                _this.databaseprovider.fetchAllData('new_sub_topics', json_query).then(function (topic_data) {
                    setTimeout(function () {
                        if (topic_data.length > 0) {
                            _this.nav.push('WhatsNewDetailsPage', { data: data[0], type: data[0].template, index: 0, 'header': 'hide', 'display_playlist': topic_data[0], 'sendTo': 'How to Use' });
                        }
                        else {
                            _this.toast_controller_object.create({
                                message: 'Content is not available.',
                                position: 'bottom',
                                duration: 3000
                            }).present();
                        }
                        _this.loading_service_object.hide();
                    }, 2000);
                });
            });
            //this.openModal('How to Use');
        }
        else if (page.title === 'How to Share') {
            this.openModal('How to Share');
        }
        else if (page.title === 'About') {
            this.openModal('About Us');
        }
        else if (page.title === 'Privacy Policy') {
            this.openModal('Privacy Policy');
        }
        else if (page.title === 'Log Out') {
            this.logout();
        }
        else if (page.title === 'Forum Rules') {
            //this.forumLink();
            //this.forumRuleLink();
            this.openModal('Forum Rules');
        }
        else if (page.title === 'Terms of Service') {
            this.termsOfService();
        }
        else if (page.title === 'Share the App') {
            this.shareApplink();
        }
        else if (page.title === 'Feedback' || page.title === 'Contact Us') {
            this.leaveMessage();
        }
        else if (page.title === 'Upgrade Plan') {
            var flg = localStorage.getItem('myProductflg');
            if (flg == 'false' || flg == null || flg == '') {
                this.nav.push('UpgradePlanPage', { previousPage: 'fromSideMenu' });
            }
            else {
                this.nav.push('PlandetailsPage', { previousPage: 'fromSideMenu' });
            }
        }
        else if (page.title === 'Scan & Share') {
            this.nav.push('QrcodePage', { previousPage: 'fromSideMenu' });
        }
        else if (page.title === 'Learn Something New') {
            // code...
            var roleId = localStorage.getItem('cv5userRoleId');
            if (roleId == '5') {
                this.nav.setRoot('OrientationPlaylistNonHcp', { previousPage: 'fromSideMenu' });
            }
            else {
                this.nav.setRoot('OrientationPlaylistHcp', { previousPage: 'fromSideMenu' });
            }
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    ;
    MyApp.prototype.openModal = function (myData) {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal_controller_object.create('ModalPage', { data: myData }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
        });
        myModal.onWillDismiss(function (data) {
        });
    };
    /*leave feedback by: sanjeev*/
    MyApp.prototype.leaveMessage = function () {
        var usrType = '';
        var userEmail = localStorage.getItem('cv5userEmail');
        var name = userEmail.substring(0, userEmail.lastIndexOf("@"));
        var userType = (this.userRoleId == 1) ? "doctor" : "patient";
        if (userType != "doctor") {
            usrType = 'nonhcp';
        }
        else {
            usrType = 'hcp';
        }
        var userInfo = {
            "firstName": name,
            "lastName": usrType,
            "email": userEmail,
            "externalId": userEmail
        };
        (window.Freshchat).updateUser(userInfo);
        var userProperties = {
            "userRoleId": localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "organisation": "CardioVisual"
        };
        (window.Freshchat).updateUserProperties(userProperties);
        //window.Freshchat.setExternalID('sanjeev.kumar@oneleap.in');
        (window.Freshchat).showConversations();
    };
    /*End*/
    MyApp.prototype.termsOfService = function () {
        this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return null;
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return null;
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var confirmPopup = this.alert_controller_object.create({
            title: '',
            message: '<h4 style="color:#ffffff; text-align:center;">Are you sure you want to logout?</h4>',
            buttons: [{
                    text: 'No',
                    handler: function () { }
                }, {
                    text: 'Yes',
                    handler: function (e) {
                        _this.storage_object.get('user_logged_in').then(function (val) {
                            var device_token = _this.databaseprovider.getOSSpecificUUID(val);
                            var deviceData = {
                                "userId": val,
                                "deviceToken": device_token
                            };
                            _this.httpservice.getDeviceDatas(deviceData).subscribe(function (user_data) {
                                if (user_data.length > 0) {
                                    var params = { "updatedAt": new Date().toISOString(), "status": '0' };
                                    _this.http_object.put(_this.localapi + "/api/devices/" + user_data[0].id, params).subscribe(function (data) {
                                    }, function (error) {
                                        console.log(error);
                                    });
                                }
                            }, function (err) {
                                console.log('err->' + err);
                            });
                        });
                        var params = {
                            "record_time": _this.dtStr,
                            "record_date": _this.clevertapDate,
                            "os": localStorage.getItem('getDevicePlatform'),
                            "modelNo": localStorage.getItem('modelNo'),
                            "deviceversion": localStorage.getItem('getDeviceversion'),
                            "userRoleId": localStorage.getItem('cv5userRoleId'),
                            "userType": localStorage.getItem('cv5usrType'),
                            "userEmail": localStorage.getItem('cv5userEmail'),
                            "specialities": localStorage.getItem('usrSpecialities'),
                            "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                            "loggedInMedium": localStorage.getItem('loginMedium'),
                            "location": localStorage.getItem('location')
                        };
                        _this.clevertap_object.recordEventWithNameAndProps("clickedLogout", params);
                        _this.databaseprovider.deleteRecords("DELETE FROM new_user_info");
                        //this.sqlite_sync.deleteUserInfo();
                        _this.storage_object.set('user_logged_in', 0);
                        _this.storage_object.set('get_started_page_counter', 0);
                        localStorage.setItem('cv5userEmail', '');
                        localStorage.setItem('cv5userRoleId', '');
                        localStorage.setItem('cv5usrType', '');
                        localStorage.setItem('cv5usrRolesubType', '');
                        localStorage.setItem('userIdentity', '');
                        localStorage.setItem('getCleverTapID', '');
                        localStorage.setItem('updatedPlayerId', '');
                        localStorage.setItem('liveId', '');
                        localStorage.setItem('verified', '');
                        localStorage.setItem('isLinkSet', '');
                        localStorage.setItem('shownContent', '');
                        localStorage.setItem('productActiveTill', '');
                        localStorage.setItem('myProductflg', 'false');
                        localStorage.setItem('userProAccess', '');
                        localStorage.setItem('productExpired', '');
                        localStorage.setItem('productID', 'false');
                        localStorage.setItem('productType', '');
                        localStorage.setItem('productExpiredate', '');
                        localStorage.setItem('promotionalCodeStatus', '');
                        localStorage.setItem('canvasimgshare', 'notset');
                        localStorage.setItem('canDownloadAccess', 'false');
                        localStorage.setItem('Downloadque', '');
                        localStorage.setItem('app_sync_dashboard', 'yes');
                        localStorage.setItem('page_array_push', 'yes');
                        localStorage.setItem('showrandomVideo', 'yes');
                        localStorage.setItem('arrayOfTags', 'yes');
                        localStorage.setItem('loginMedium', 'false');
                        localStorage.setItem('ratingDialogShown', 'null');
                        localStorage.setItem('userliveId', '');
                        localStorage.setItem('InfoDownloadque', '');
                        localStorage.setItem('usrSpecialities', '');
                        localStorage.setItem('referral_code', '');
                        localStorage.setItem('referred_by', '');
                        localStorage.setItem('applaunchPopup', 'yes');
                        _this.nav.setRoot("LoginPage");
                    }
                }]
        });
        confirmPopup.present();
    };
    MyApp.prototype.shareApplink = function () {
        var options = {
            //message: 'Please download CardioVisual: A free heart health app that has easy-to-understand educational videos of heart conditions and treatments. Available for iOS and Android.', // not supported on some apps (Facebook, Instagram) 
            message: 'Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
            subject: 'Download CardioVisual',
            files: [],
            url: localStorage.getItem('isLinkSet'),
            chooserTitle: '' // Android only, you can override the default share sheet title 
        };
        var params = {
            "userType": localStorage.getItem('cv5usrType')
        };
        // Set clevertap Custom AppLaunch event.
        this.clevertap_object.recordEventWithNameAndProps("appSharing", params);
        this.social_sharing_object.shareWithOptions(options);
        if (localStorage.getItem('ratingDialogShown') == null || localStorage.getItem('ratingDialogShown') == 'null' || localStorage.getItem('ratingDialogShown') == "" || localStorage.getItem('ratingDialogShown') == "undefined") {
            //this.httpservice.showRateDialogueBox();
            localStorage.setItem('ratingDialogShown', 'true');
        }
    };
    MyApp.prototype.onPromptForQna = function (forum) {
        this.for_videoshare_object.discussPromptForProffesional(forum, 'From Branch Link', 'From Branch Link');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\app\app.html"*/'\n\n<!-- <ion-split-pane when="md"> -->\n\n  <ion-menu [content]="content" *ngIf="params != null" persistent="true">\n\n    <!-- Menu Main Top -->\n\n    <!-- <ion-header padding background-size header-background-image class="back-color"\n\n    [ngStyle]="{\'background-image\': \'url(\' + params.background + \')\'}">\n\n      <ion-thumbnail>\n\n      </ion-thumbnail>\n\n       <h2 style="color: #e30808 !important;" item-title text-center>{{params.title}}</h2>\n\n    </ion-header> -->\n\n    <!-- Menu Main List -->\n\n    <!-- <ion-header>\n\n      <h2 style="color: #e30808 !important;" item-title text-center>{{params.title}}</h2>\n\n    </ion-header> -->\n\n\n\n    <ion-content class="menu custom-menu" style="background-color:#fff; min-height: 100% !important;opacity:2.6;">\n\n      <ion-list no-margin no-padding tappable class="menu_list">\n\n        <button  class="sidetrans boldtransition" menuClose ion-item  no-padding main-menu *ngFor="let p of pages" (click)="openPage(p)"  >\n\n        <ion-icon padding-left>\n\n          <i class="icon {{p.icon}}"></i>\n\n        </ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n\n\n       \n\n    \n\n      </ion-list>\n\n    </ion-content>\n\n    <ion-footer class="bar-stable">\n\n        <ion-item nav-clear menu-close href="#" style="width: 100%; position:fixed;bottom:0; text-align: center;"><i style="color: #e30808 !important; font-size: 1.6em;" class="icon-footer-icon-mycv"></i> <p style="color: #0a0a0a !important;" item-title text-center>V {{app_version_number}}</p></ion-item>\n\n     \n\n    </ion-footer>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n <!--  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav> -->\n\n  <ion-nav [root]="rootPage" #content  swipeBackEnabled="false" style=""></ion-nav>\n\n<!-- </ion-split-pane> -->\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\app\app.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_12__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__network_check_network_check__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite_porter__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(injector, sqlitePorter) {
        var _this = this;
        this.injector = injector;
        this.sqlitePorter = sqlitePorter;
        this.type = {};
        this.b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        this.encrypt_key = "CaRdiOvIsUalOne2Three4";
        this.online = true;
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]);
        this.sqlite_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* Platform */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__services_HttpService__["a" /* HttpService */]);
        this.device_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */]);
        this.file_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */]);
        this.file_transfer_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.localapi = this.http_service_object.getApi();
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["BehaviorSubject"](false);
        this.platform_object.ready().then(function () {
            var isAndroid = _this.platform_object.is('android');
            if (isAndroid) {
                _this.sqlite_object.create({
                    name: 'cardioDB.db',
                    location: 'default'
                })
                    .then(function (db) {
                    _this.db = db;
                });
            }
            else {
                //alert('ios');
                _this.sqlite_object.create({
                    name: 'cardioDB.db',
                    iosDatabaseLocation: 'Library'
                })
                    .then(function (db) {
                    _this.db = db;
                });
            }
        });
    }
    DatabaseProvider.prototype.openDatabase = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var name = "cardioDB.db";
            var sqlite_db = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]();
            var isAndroid = _this.platform_object.is('android');
            if (isAndroid) {
                sqlite_db.create({
                    name: name,
                    location: 'default'
                }).then(function (db) {
                    _this.db = db;
                    resolve(db);
                }, function (err) {
                    reject(err);
                });
            }
            else {
                //alert('openDatabase ios');
                sqlite_db.create({
                    name: name,
                    iosDatabaseLocation: 'Library'
                }).then(function (db) {
                    _this.db = db;
                    resolve(db);
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    DatabaseProvider.prototype.fetchAllData = function (table, array_values) {
        var query = "Select * FROM " + table + "  " + array_values + " ";
        return this.db.executeSql(query, []).then(function (data) {
            var out = [];
            for (var i = 0; i < data.rows.length; i++) {
                out.push(data.rows.item(i));
            }
            return out;
        }, function (err) {
            return [];
        });
    };
    DatabaseProvider.prototype.updateRecord = function (tblName, columns, values) {
        var query = "UPDATE " + tblName + " SET ";
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var col = columns_1[_i];
            query += col + "=?,";
        }
        query = query.substr(0, query.length - 1);
        query += " WHERE id = ?;";
        return this.db.executeSql(query, values).then(function (data) {
            return data;
        }, function (err) {
            return [];
        });
    };
    DatabaseProvider.prototype.putLoginMedium = function (user_id) {
        var _this = this;
        var user_data = { "medium": 'app' };
        this.http_object.put(this.localapi + "/api/CardiovisualUsers/" + user_id, user_data).subscribe(function (data) {
            var columns = ['medium'];
            var values = ['app', user_id];
            _this.updateRecord('new_user_info', columns, values);
        }, function (error) {
            //console.log('171 '+error);
        });
    };
    DatabaseProvider.prototype.getOSSpecificUUID = function (user_id) {
        return this.device_object.uuid;
    };
    DatabaseProvider.prototype.deleteRecords = function (query) {
        return this.db.executeSql(query, []).then(function (data) {
            return data;
        }, function (err) {
            return [];
        });
    };
    DatabaseProvider.prototype.insertPlaylistsAPIData = function (liveId) {
        var _this = this;
        this.http_service_object.getPlaylists().subscribe(function (data) {
            _this.syncPlaylists(data, liveId);
        }, function (err) {
            //console.log(' playlist err->'+err);
        });
    };
    DatabaseProvider.prototype.syncPlaylists = function (pData, liveId) {
        var _this = this;
        this.db.executeSql("DROP TABLE IF EXISTS playlists");
        var query = "INSERT INTO playlists (id, name, description, sub_topic_ids, topic_id, url, active, createdAt, updatedAt, shareUrl, position, is_paid, is_for, long_description, isFavourite) VALUES ";
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](pData, function (data, index) {
            query += '(' + data.id + ', "' + data.name + '", "' + data.description + '", "' + data.subTopicIds + '", "' + data.topic_id + '", "' + data.url + '", "' + data.active + '", "' + data.createdAt + '", "' + data.updatedAt + '", "' + data.shareUrl + '", ' + data.position + ', ' + data.is_paid + ', "' + data.isFor + '", "' + data.long_description + '",0),';
        });
        query = query.replace(/,\s*$/, ";");
        var playlists = 'CREATE TABLE IF NOT EXISTS playlists (id INTEGER PRIMARY KEY, name TEXT, description TEXT, sub_topic_ids TEXT, topic_id INTEGER, URL TEXT, active TEXT, createdAt TEXT, updatedAt TEXT, shareUrl TEXT, position INTEGER, is_paid INTEGER, is_for TEXT, long_description TEXT, isFavourite INTEGER)';
        this.db.executeSql(playlists);
        this.db.executeSql(query, []).then(function (data) {
            _this.getPlaylistFavorites(liveId);
            return data;
        }, function (err) {
            return [];
        });
    };
    DatabaseProvider.prototype.getPlaylistFavorites = function (liveId) {
        var _this = this;
        this.http_service_object.getPlaylistFavoritesData(liveId).subscribe(function (data) {
            _this.syncPlaylistFavorites(data);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.syncPlaylistFavorites = function (pData) {
        var updated_id = '';
        for (var i = 0; i < pData.length; i++) {
            if (updated_id == '') {
                updated_id = pData[i]['subtopicId'];
            }
            else {
                updated_id = updated_id + ',' + pData[i]['subtopicId'];
            }
        }
        if (updated_id != '') {
            var query = "UPDATE playlists SET isFavourite=1 WHERE id IN (" + updated_id + ")";
            return this.db.executeSql(query, []).then(function (data) {
                return data;
            }, function (err) {
                return [];
            });
        }
    };
    //mark favorites to playlist 
    DatabaseProvider.prototype.setPlaylistFavorites = function (liveId, playlist_id) {
        var _this = this;
        var post_url = this.http_service_object.getPosturl('favorites');
        this.http_service_object.getFavoriteswithPlaylistId(liveId, playlist_id).subscribe(function (data) {
            var favorite_data = data;
            if (favorite_data.length > 0) {
                _this.http_object.delete(post_url + '/' + favorite_data[0].id).subscribe(function (resp) { _this.updateRecord('playlists', ['isFavourite'], ['0', playlist_id]); }, function (error) { return console.log('Error---->123.' + JSON.stringify(error)); });
            }
            else {
                _this.http_object.post(post_url, { "cardiovisualUserId": liveId, "subtopicId": playlist_id, "type": "playlist" }).subscribe(function (data) {
                    _this.updateRecord('playlists', ['isFavourite'], ['1', playlist_id]);
                }, function (error) {
                    //console.log('Error---->321.'+JSON.stringify(error))
                });
            }
        }, function (err) {
            //console.log('Err---->1234.'+JSON.stringify(err))
        });
    };
    DatabaseProvider.prototype.getCategoriesAPIData = function (type_user) {
        var _this = this;
        this.http_service_object.getNewCategory().subscribe(function (data) {
            return _this.bulkInsertCategories(data, type_user);
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.bulkInsertCategories = function (apiData, type_user) {
        //      var _json_stringify = JSON.stringify;
        //         JSON.stringify = function(value) {
        //             var _array_tojson = Array.prototype.toJSON;
        //             delete Array.prototype.toJSON;
        //             var r=_json_stringify(value);
        //             Array.prototype.toJSON = _array_tojson;
        //             return r;
        //         };
        //var prejson = '{"data":{"inserts":{"new_category":';
        var apiDataStr = JSON.stringify(apiData);
        if (type_user == "doctor") {
            var apiDataStr = apiDataStr.replace(/"(p[^"]+)"\s*:\s*"([^"]+)",?/g, "");
        }
        else {
            var apiDataStr = apiDataStr.replace(/"([name^"]+)"\s*:\s*"([^"]+)",?/g, "");
            var apiDataStr = apiDataStr.replace(/"(p[^"]+)"\s*:",?/g, '"name":"');
        }
        var apiDataStr = apiDataStr.replace(/"(i[^"]+)"\s*:\s*"([^"]+)",?/g, "");
        var prejson = '{"structure":{"tables":{"new_category":"([id] INTEGER PRIMARY KEY, [name] TEXT NOT NULL, [hexcodeBase] TEXT, [hexcodeContrast] TEXT, [position] INTEGER, [createdAt] TEXT, [updatedAt] TEXT)"},"otherSQL":["CREATE UNIQUE INDEX category_id ON new_category(id)"]},"data":{"inserts":{"new_category":';
        var postjson = '}}}';
        var finaljson = prejson + apiDataStr + postjson;
        var ffinaljson = finaljson.replace(/\\/g, '');
        //alert(ffinaljson);
        //console.log(ffinaljson);
        //         var successFn = function(count){
        //             console.log("Successfully imported JSON to DB; equivalent to "+count+" SQL statements");
        //         };
        //         var errorFn = function(error){
        //             console.log(JSON.stringify(error));
        //         };
        //         var progressFn = function(current, total){
        //             console.log("Imported "+current+"/"+total+" statements");
        //         };
        this.sqlitePorter.importJsonToDb(this.db, ffinaljson);
        //         , {
        //             successFn: successFn,
        //             errorFn: errorFn,
        //             progressFn: progressFn
        //         });
    };
    DatabaseProvider.prototype.getSubTopicsAPIData = function (type_user) {
        var _this = this;
        this.http_service_object.getSubtopicDatas(type_user).subscribe(function (data) {
            _this.bulkInsertSubTopics(data, type_user);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.getFavoritesAPIData = function (liveId) {
        var _this = this;
        this.http_service_object.getFavoritesDatas(liveId).subscribe(function (data) {
            _this.syncFavorites(data);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.syncFavorites = function (pData) {
        var updated_id = '';
        for (var i = 0; i < pData.length; i++) {
            if (updated_id == '') {
                updated_id = pData[i]['subtopicId'];
            }
            else {
                updated_id = updated_id + ',' + pData[i]['subtopicId'];
            }
        }
        if (updated_id != '') {
            var query = "UPDATE subtopic_data SET isFavourite=1 WHERE id IN (" + updated_id + ")";
            var query2 = "UPDATE subtopic_data SET isFavourite=0 WHERE id NOT IN (" + updated_id + ")";
            this.db.executeSql(query2, []);
            return this.db.executeSql(query, []).then(function (data) {
                return data;
            }, function (err) {
                //alert('Error: ' + err);
                return [];
            });
        }
    };
    DatabaseProvider.prototype.updateNewUserInfo = function (params) {
        var query = "UPDATE new_user_info SET email = '" + params.email + "', username = '" + params.username + "', user_type = '" + params.user_type + "', isPaid = " + params.isPaid + ", userRoleId = " + params.userRoleId + ", discoveryMethodId = " + params.discoveryMethodId + ", liveId = " + params.liveId + ", full_name = '" + params.fullname + "', password = '" + params.password + "', gender = '" + params.gender + "', profile_pic = '" + params.profilePic + "', medium = '" + params.medium + "', facebook_id = '" + params.facebookId + "', specialities= '" + params.specialities + "',user_role_sub_type = '" + params.userRoleSubType + "', verified = " + params.verified + ", birthyear = '" + params.birthyear + "', location= '" + params.location + "',state='" + params.state + "', referral_code='" + params.referral_code + "', referred_by='" + params.referred_by + "', npi_number=" + params.npi_number + ", npi_id=" + params.npi_id + "";
        return this.db.executeSql(query, []).then(function (data) {
            return data;
        }, function (err) {
            return [];
        });
    };
    DatabaseProvider.prototype.insertNewUserInfo = function (params) {
        var query = "INSERT INTO new_user_info (email, username, user_type, isPaid, userRoleId, discoveryMethodId, liveId, full_name, password, gender, profile_pic, medium, facebook_id, specialities, user_role_sub_type, verified, birthyear,location, state, referral_code, referred_by, npi_number, npi_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        var sql_params = [params.email, params.username, params.user_type, params.isPaid, params.userRoleId, params.discoveryMethodId, params.liveId, params.fullname, params.password, params.gender, params.profilePic, params.medium, params.facebookId, params.specialities, params.userRoleSubType, params.verified, params.birthyear, params.location, params.state, params.referral_code, params.referred_by, params.npi_number, params.npi_id];
        return this.db.executeSql(query, sql_params).then(function (data) {
            return data;
        }, function (err) {
            return [];
        });
    };
    DatabaseProvider.prototype.saveDeviceDataToApi = function (deviceData) {
        var _this = this;
        this.http_service_object.getDeviceDatas(deviceData).subscribe(function (user_data) {
            var post_url = _this.http_service_object.getPosturl('devices');
            if (user_data.length == 0) {
                _this.http_object.post(post_url, deviceData).subscribe(function (data) {
                    //alert('after insert '+ JSON.stringify(data['_body']));
                }, function (error) {
                    //console.log(error);
                });
            }
            else {
                var filteredData = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["where"](user_data, { deviceToken: deviceData.deviceToken, userId: deviceData.userId });
                _this.http_object.put(post_url + '/' + filteredData[0].id, deviceData).subscribe(function (data) {
                    //alert('after insert '+ JSON.stringify(data['_body']));
                }, function (error) {
                    //console.log(error);
                });
            }
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.setFavorites = function (liveId, subtopicId) {
        var _this = this;
        var post_url = this.http_service_object.getPosturl('favorites');
        this.http_service_object.getFavoriteswithsubtopicid(liveId, subtopicId).subscribe(function (data) {
            var favorite_data = data;
            if (favorite_data.length > 0) {
                _this.http_object.delete(post_url + '/' + favorite_data[0].id).subscribe(function (resp) { _this.updateRecord('subtopic_data', ['isFavourite'], ['0', subtopicId]); }, function (error) { return console.log('Error---->123.' + JSON.stringify(error)); });
            }
            else {
                _this.http_object.post(post_url, { "cardiovisualUserId": liveId, "subtopicId": subtopicId, "type": "subtopic" }).subscribe(function (data) {
                    _this.updateRecord('subtopic_data', ['isFavourite'], ['1', subtopicId]);
                }, function (error) {
                    //console.log('Error---->321.'+JSON.stringify(error))
                });
            }
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.listSubTopicsDataId = function () {
        var query = "SELECT id FROM subtopic_data";
        this.openDatabase().then(function (db) {
            return db.executeSql(query);
        }).catch(function () {
            //console.log("459 Promise Rejected");
        });
    };
    //not added
    DatabaseProvider.prototype.downloadAll = function () {
        var _this = this;
        /*-------------------------------------- logic to download all icons --------------------------------------*/
        // gets all undownloaded 
        var subtopic_query = new Array(" JOIN subtopic_data ON subtopic_data.id = new_sub_topics.id WHERE subtopic_data.localIconUrl = ''");
        this.fetchAllData('new_sub_topics', subtopic_query).then(function (subtopic_result) {
            if (subtopic_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'icons/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](subtopic_result.length, function (i) {
                    // Download specific image
                    //var imagename = subtopic_result[i].iconUrl.split("/").pop();
                    var imagename = subtopic_result[i].imageName;
                    fileTransfer.download(subtopic_result[i].iconUrl, path + imagename).then(function (entry) {
                        var icon_url = 'icons/' + imagename;
                        var querystring = " UPDATE subtopic_data SET localIconUrl = '" + icon_url + "' WHERE id = " + subtopic_result[i].id;
                        db.executeSql(querystring, []);
                    });
                });
            }
        });
        /*----------------------------------------------------------------------------------------------------------*
        /*------------------------------------- logic to download all drawon --------------------------------------*/
        var subtopic_query = new Array(" JOIN subtopic_data ON subtopic_data.id = new_sub_topics.id WHERE (new_sub_topics.subTopicType='image' AND subtopic_data.downloaded = 0)");
        this.fetchAllData('new_sub_topics', subtopic_query).then(function (drawon_result) {
            if (drawon_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'drawon/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](drawon_result.length, function (i) {
                    // Download specific image
                    //var filename = drawon_result[i].url.split("/").pop();
                    var filename = drawon_result[i].videoName;
                    fileTransfer.download(drawon_result[i].url, path + filename).then(function (entry) {
                        var drawon_image_url = 'drawon/' + filename;
                        var drawon_query = " UPDATE subtopic_data SET localUrl = '" + drawon_image_url + "' WHERE id = " + drawon_result[i].id;
                        db.executeSql(drawon_query, []);
                    });
                });
            }
        });
    };
    DatabaseProvider.prototype.bulkInsertSubTopics = function (apiData, type_user) {
        var _this = this;
        var apiDataStr = JSON.stringify(apiData);
        if (type_user == "doctor") {
            var apiDataStr = apiDataStr.replace(/"patientFriendlyDescription":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/"patientFriendlyDescription":null,/ig, "");
            var apiDataStr = apiDataStr.replace(/"isPatientDownloadable":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"isPatientStreamed":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"patientFriendlyName":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
        }
        else {
            var apiDataStr = apiDataStr.replace(/"description":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/"name":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/patientFriendlyDescription/ig, "description");
            var apiDataStr = apiDataStr.replace(/patientFriendlyName/ig, "name");
            var apiDataStr = apiDataStr.replace(/"isDownloadable":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"isStreamed":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/isPatientStreamed/ig, "isStreamed");
            var apiDataStr = apiDataStr.replace(/isPatientDownloadable/ig, "isDownloadable");
        }
        var apiDataStr = apiDataStr.replace(/"patientDescription":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"patientDescription":null,/ig, "");
        var apiDataStr = apiDataStr.replace(/"filesize":"[0-9.]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"filesize":"",/ig, "");
        var apiDataStr = apiDataStr.replace(/"resolution":"[0-9x]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"resolution":"",/ig, "");
        var apiDataStr = apiDataStr.replace(/"isWeb":[0-9],/ig, "");
        var apiDataStr = apiDataStr.replace(/"slug":"[0-9a-zA-z-]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/contentType/ig, "otherType");
        var apiDataStr = apiDataStr.replace(/"topicId":[0-9],/ig, "");
        var apiDataStr = apiDataStr.replace(/"categoryId":[0-9],/ig, "");
        var apiDataStr = apiDataStr.replace(/newTopicid/ig, "topicId");
        var apiDataStr = apiDataStr.replace(/newCategoryId/ig, "categoryId");
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.jpg)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.jpeg)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/("iconUrl":"")+/ig, '$1,"imageName":""');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.pdf)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.m4v)/ig, '$1","videoName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.mp4)/ig, '$1","videoName":"$1');
        var apiDataStr = apiDataStr.replace(/"url":"([a-zA-Z0-9-.() _\/\:]+?[_.\w-]+\.jpg)+",/ig, '"url":"$1","videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"videoName":"[a-zA-Z0-9-.() _\/\:]+?([_.\w-]+\.jpg)+",/ig, '"videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"url":"([a-zA-Z0-9-.() _\/\:]+?[_.\w-]+\.jpeg)+",/ig, '"url":"$1","videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"videoName":"[a-zA-Z0-9-.() _\/\:]+?([_.\w-]+\.jpeg)+",/ig, '"videoName":"$1",');
        var prejson = '{"structure":{"tables":{"new_sub_topics":"([id] INTEGER PRIMARY KEY, [name] TEXT NOT NULL, [topicId] INTEGER, [categoryId] INTEGER, [subTopicType] TEXT, [title] TEXT, [description] TEXT, [url] TEXT, [isPaid] INTEGER, [copyrightInfo] TEXT, [sponsoredName] TEXT, [sponsoredLink] TEXT, [position] INTEGER, [iconUrl] TEXT, [isStreamed] INTEGER, [isAd] INTEGER, [isActive] INTEGER, [isDownloadable] INTEGER, [timings] TEXT, [createdAt] TEXT, [updatedAt] TEXT, [imageName] TEXT, [videoName] TEXT, [shareUrl] TEXT, [tag] TEXT, [forum_tags] TEXT, [viewCount] INTEGER, [expiryDate] TEXT, [duration] TEXT, [otherType] TEXT)"},"otherSQL":["CREATE UNIQUE INDEX new_sub_topics_id ON new_sub_topics(id)"]},"data":{"inserts":{"new_sub_topics":';
        var postjson = '}}}';
        var finaljson = prejson + apiDataStr + postjson;
        var subtopic_ids = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["pluck"](JSON.parse(JSON.stringify(apiData)), 'id');
        var subtopic_ids_json = JSON.stringify(subtopic_ids);
        var final_subtopic_datatable = subtopic_ids_json.replace(/([0-9]+)/ig, '{"id":"$1","localUrl":"","localIconUrl":"","downloaded":"0","isVisible":"1","isFavourite":"0"}');
        var pre_subtd_json = '{"structure":{"tables":{"subtopic_data":"([id] INTEGER PRIMARY KEY, [localUrl] TEXT, [localIconUrl] TEXT, [downloaded] INTEGER, [isVisible] INTEGER, [isFavourite] INTEGER)"},"otherSQL":["CREATE UNIQUE INDEX subtopic_data_id ON subtopic_data(id)"]},"data":{"inserts":{"subtopic_data":';
        var post_subtd_json = '}}}';
        var final_subtd_json = pre_subtd_json + final_subtopic_datatable + post_subtd_json;
        this.openDatabase().then(function (db) {
            //                     var successFn = function(count){
            //                         alert("Successfully imported JSON to DB; equivalent to "+count+" SQL statements");
            //                     };
            //                     var errorFn = function(error){
            //                         alert(JSON.stringify(error.message));
            //                         //console.log(JSON.stringify(error));
            //                         console.log("message:"+JSON.stringify(error.message));
            //                     };
            //                     var progressFn = function(current, total){
            //                         console.log("Imported "+current+"/"+total+" statements");
            //                     };
            _this.sqlitePorter.importJsonToDb(db, finaljson);
            //                     , {
            //                         successFn: successFn,
            //                         errorFn: errorFn,
            //                         progressFn: progressFn
            //                     });
            _this.sqlitePorter.importJsonToDb(db, final_subtd_json);
            //                     , {
            //                         successFn: successFn,
            //                         errorFn: errorFn,
            //                         progressFn: progressFn
            //                     });
            _this.storage_object.get('user_logged_in').then(function (val) {
                if (val != 0) {
                    _this.getFavoritesAPIData(val);
                    _this.getDownloadsAPIData(val);
                }
            });
            //alert('bulk insert sub topic');
            _this.downloadAll();
        }).catch(function () {
            //console.log("575 Promise Rejected");
        });
    };
    //not added
    DatabaseProvider.prototype.getCardioSplashes = function (type_user) {
        var _this = this;
        this.http_service_object.getnewSplashes().subscribe(function (splashdata) {
            _this.bulkInsertSplashes(splashdata);
        }, function (err) {
            //alert(err);
        });
    };
    //not added
    DatabaseProvider.prototype.bulkInsertSplashes = function (apiData) {
        var query = "INSERT INTO new_cardio_splashes (id, sponsoredName, imageUrl, contentType, contentUrl, isSplash, isPoweredBy, isSponsor, isOnboarding, fileName, updatedAt, isFor, downloaded, position) VALUES ";
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            var fileName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.imageUrl.split("/"));
            query += '(' + data.id + ',"' + data.sponsorName + '", "' + data.imageUrl + '", "' + data.contentType + '", "' + data.contentUrl + '", ' + data.isSplash + ', ' + data.isPoweredBy + ', ' + data.isSponsor + ', ' + data.isOnboarding + ', "' + fileName + '", "' + data.updatedAt + '", "' + data.isFor + '", 0,' + data.position + '),';
        });
        query = query.replace(/,\s*$/, ";");
        this.openDatabase().then(function (db) {
            var drop_cardio_splashes = 'DROP TABLE IF EXISTS new_cardio_splashes';
            var new_cardio_splashes = 'CREATE TABLE IF NOT EXISTS new_cardio_splashes (id INTEGER PRIMARY KEY, sponsoredName TEXT NOT NULL UNIQUE, imageUrl TEXT, contentType TEXT, contentUrl TEXT, isSplash INTEGER, isPoweredBy INTEGER, isSponsor INTEGER, isOnboarding INTEGER, localUrl TEXT, downloaded INTEGER, shown INTEGER, fileName TEXT, updatedAt TEXT, isFor TEXT, position INTEGER)';
            db.executeSql(drop_cardio_splashes, []);
            db.executeSql(new_cardio_splashes, []);
            db.executeSql(query, []).then(function (success2) {
                this.downloadAllSplashes();
            }, function (err2) {
                //alert('err2 '+JSON.stringify(err2));
            });
            /*db.executeSql(query).then((data) => {
                alert('successs '+JSON.stringify(data));
            this.downloadAllSplashes();

            }).catch(e => {
                // Remove all old entries;
                //this.deleteRecords("DELETE FROM new_cardio_splashes");
                // Redo Bulk insert as data is already present.
                //this.syncSplashesAPIData(apiData);
            });*/
        }).catch(function () {
            //console.log("633 Promise Rejected");
        });
    };
    //not added
    DatabaseProvider.prototype.downloadAllSplashes = function () {
        var _this = this;
        var query = "SELECT * FROM new_cardio_splashes where downloaded = 0";
        this.openDatabase().then(function (db) {
            db.executeSql(query, []).then(function (results) {
                var allFilesToBeDownloaded = [];
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](results.rows.length, function (i) {
                    var data = results.rows.item(i);
                    var fileName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.imageUrl.split("/"));
                    allFilesToBeDownloaded.push({ "url": data.imageUrl, "file": fileName, "id": data.id });
                });
                _this.downloadAndSaveSplashes(allFilesToBeDownloaded);
            });
        }).catch(function () {
            //console.log("654 Promise Rejected");
        });
    };
    //not added
    DatabaseProvider.prototype.downloadAndSaveSplashes = function (data) {
        // Iterate through all the array elements.
        var fileTransfer = this.file_transfer_object.create();
        var path = this.file_object.dataDirectory;
        var db = this.db;
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](data.length, function (i) {
            fileTransfer.download(data[i].url, path + 'splashes/' + data[i].file).then(function (entry) {
                var splash_image_url = 'splashes/' + data[i].file;
                var splash_query = "UPDATE new_cardio_splashes SET localUrl = '" + splash_image_url + "', downloaded=1 WHERE id = " + data[i].id;
                db.executeSql(splash_query, []);
            });
        });
    };
    //not added
    DatabaseProvider.prototype.syncSplashesAPIData = function (apiData) {
        var query = "INSERT INTO new_cardio_splashes (id, sponsoredName, imageUrl, contentType, contentUrl, isSplash, isPoweredBy, isSponsor, isOnboarding, fileName, updatedAt, position) VALUES ";
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            var fileName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.imageUrl.split("/"));
            query += '(' + data.id + ', "' + data.sponsorName + '", "' + data.imageUrl + '", "' + data.contentType + '", "' + data.contentUrl + '", ' + data.isSplash + ', ' + data.isPoweredBy + ', ' + data.isSponsor + ', ' + data.isOnboarding + ', "' + fileName + '", "' + data.updatedAt + '", ' + data.position + '),'; // splash_data_query += '('+data.id+', "", 0, 0),';
        });
        query = query.replace(/,\s*$/, ";");
        // Resync all data back.
        this.openDatabase().then(function (db) {
            db.executeSql(query, []).then(function (data) {
                var allSplashesIds = [];
                var query1 = "SELECT id FROM cardio_splash_data";
                var result = db.executeSql(query, []);
            }).catch(function (e) { });
        }).catch(function () {
            //console.log("706 Promise Rejected");
        });
    };
    //not added
    DatabaseProvider.prototype.getTopicsAPIData = function (type_user) {
        var _this = this;
        this.http_service_object.getnewtopics().subscribe(function (newtopicsdata) {
            _this.bulkInsertTopics(newtopicsdata, type_user);
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.bulkInsertTopics = function (apiData, type_user) {
        var apiDataStr = JSON.stringify(apiData);
        if (type_user == "doctor") {
            var apiDataStr = apiDataStr.replace(/"(p[^"]+)"\s*:\s*"([^"]+)",?/g, "");
        }
        else {
            var apiDataStr = apiDataStr.replace(/"([name^"]+)"\s*:\s*"([^"]+)",?/g, "");
            var apiDataStr = apiDataStr.replace(/"(p[^"]+)"\s*:",?/g, '"name":"');
        }
        var apiDataStr = apiDataStr.replace(/"(s[^"]+)"\s*:",?/g, '"showInformation":"');
        var apiDataStr = apiDataStr.replace(/"isActive":1,/ig, "");
        var prejson = '{"structure":{"tables":{"new_topics":"([id] INTEGER PRIMARY KEY, [name] TEXT NOT NULL, [iconName] TEXT, [hexcodeBase] TEXT, [hexcodeContrast] TEXT, [hexcodeShadow] TEXT, [position] INTEGER, [old_ids] TEXT, [createdAt] TEXT, [updatedAt] TEXT, [showInformation] TEXT)"},"otherSQL":["CREATE UNIQUE INDEX topic_id ON new_topics(id)"]},"data":{"inserts":{"new_topics":';
        var postjson = '}}}';
        var finaljson = prejson + apiDataStr + postjson;
        var ffinaljson = finaljson.replace(/\\/g, '');
        var ffinaljson = ffinaljson.replace(/^\s+/, "").replace(/\s+$/, "");
        //         var successFn = function(count){
        //             console.log("Successfully imported JSON to DB; equivalent to "+count+" SQL statements");
        //         };
        //         var errorFn = function(error){
        //             console.log(JSON.stringify(error));
        //         };
        //         var progressFn = function(current, total){
        //             console.log("Imported "+current+"/"+total+" statements");
        //         };
        this.sqlitePorter.importJsonToDb(this.db, ffinaljson);
        //         , {
        //             successFn: successFn,
        //             errorFn: errorFn,
        //             progressFn: progressFn
        //         });
    };
    DatabaseProvider.prototype.storeUserdata = function (user_data) {
        var user_type = (user_data.userRoleId == 1) ? 'doctor' : 'patient';
        var password = this.encode(user_data.password);
        var drop_user_data = 'DROP TABLE IF EXISTS new_user_info';
        var new_user_data = 'CREATE TABLE IF NOT EXISTS new_user_info (id INTEGER PRIMARY KEY, email TEXT, username TEXT, user_type TEXT, isPaid INTEGER, userRoleId INTEGER, discoveryMethodId INTEGER, liveId INTEGER, full_name TEXT, password TEXT, gender TEXT, profile_pic TEXT, medium TEXT, facebook_id TEXT, specialities TEXT, user_role_sub_type TEXT, verified TEXT, birthyear TEXT, location TEXT, state TEXT, referral_code TEXT,referred_by INTEGER, npi_number INTEGER,npi_id INTEGER)';
        var query = "INSERT INTO new_user_info ('email', 'username', 'user_type', 'isPaid', 'userRoleId', 'discoveryMethodId', 'liveId', 'full_name', 'password', 'gender', 'profile_pic', 'facebook_id', 'specialities', 'user_role_sub_type', 'verified', 'location','medium', 'state', 'referral_code', 'referred_by', 'npi_number','npi_id') VALUES ";
        query += "('" + user_data.email + "', '" + user_data.username + "', '" + user_type + "', " + user_data.isPaid + "," + user_data.userRoleId + ", " + user_data.discoveryMethodId + ", " + user_data.liveId + ", '" + user_data.fullname + "', '" + user_data.password + "', '" + user_data.gender + "', '" + user_data.profilePic + "', '" + user_data.facebookId + "', '" + user_data.specialities + "','" + user_data.userRoleSubType + "', '" + user_data.verified + "', '" + user_data.location + "', '" + user_data.medium + "','" + user_data.state + "','" + user_data.referral_code + "'," + user_data.referred_by + "," + user_data.npi_number + "," + user_data.npi_id + ")";
        this.openDatabase().then(function (db) {
            db.executeSql(drop_user_data, []);
            db.executeSql(new_user_data, []);
            db.executeSql(query, []).then(function (success) {
            }, function (err123) {
                //console.log("err123: " + JSON.stringify(err123));
            });
        }, function (err) {
            //console.log("Error opening database: " + err);
        }).catch(function () {
            //console.log("789 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.encode = function (data) {
        data = this.xor_encrypt(this.encrypt_key, data);
        return this.b64_encode(data);
    };
    DatabaseProvider.prototype.b64_encode = function (data) {
        var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
        if (!data) {
            return data;
        }
        do {
            o1 = data[i++];
            o2 = data[i++];
            o3 = data[i++];
            bits = o1 << 16 | o2 << 8 | o3;
            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;
            enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
        } while (i < data.length);
        r = data.length % 3;
        return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
    };
    DatabaseProvider.prototype.xor_encrypt = function (key, data) {
        return __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["map"](data, function (c, i) {
            return c.charCodeAt(0) ^ key.charCodeAt(Math.floor(i % key.length));
        });
    };
    DatabaseProvider.prototype.updateUserinfoForForum = function (live_id, params) {
        var _this = this;
        var username = params.username;
        var email = params.email;
        //var url = this.http_service_object.getdata('user', '');
        var user_data = {};
        if (username != '') {
            user_data = { "username": username };
            this.http_object.put(this.localapi + "/api/CardiovisualUsers/" + live_id, user_data).subscribe(function (data) {
                var query = "UPDATE new_user_info SET username = '" + username + "' WHERE id = 1";
                _this.db.executeSql(query, []).then(function (data) {
                    return data;
                }, function (err) {
                    //alert('Error: ' + JSON.stringify(err));
                    return [];
                });
            }, function (error) {
                //console.log(error);
            });
        }
        if (email != '') {
            user_data = { "email": email };
            this.http_object.put(this.localapi + "/api/CardiovisualUsers/" + live_id, user_data).subscribe(function (data) {
                var query = "UPDATE new_user_info SET email = '" + email + "' WHERE id = 1";
                _this.db.executeSql(query, []).then(function (data) {
                    return data;
                }, function (err) {
                    //alert('Error: ' + JSON.stringify(err));
                    return [];
                });
            }, function (error) {
                //console.log(error);
            });
        }
    };
    DatabaseProvider.prototype.updateData = function (query) {
        return this.db.executeSql(query, []).then(function (data) {
            //alert('success '+JSON.stringify(data));
            return data;
        }, function (err) {
            //alert('Error: ' + JSON.stringify(err));
            return [];
        });
    };
    DatabaseProvider.prototype.getDownloadsAPIData = function (liveId) {
        var _this = this;
        this.http_service_object.getDownloadsDatas(liveId).subscribe(function (data) {
            _this.syncDownloads(data);
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.syncDownloads = function (pData) {
        var updated_id = '';
        for (var i = 0; i < pData.length; i++) {
            if (updated_id == '') {
                updated_id = pData[i]['subtopicId'];
            }
            else {
                updated_id = updated_id + ',' + pData[i]['subtopicId'];
            }
        }
        if (updated_id != '') {
            var query = "UPDATE subtopic_data SET downloaded=1 WHERE id IN (" + updated_id + ")";
            return this.db.executeSql(query, []).then(function (data) {
                return data;
            }, function (err) {
                //alert('Error: ' + err);
                return [];
            });
        }
    };
    DatabaseProvider.prototype.getOrderDetailsAPIData = function (user_id) {
        //alert('hiii');
        var _this = this;
        this.http_service_object.getUserPurchasedDataFromApi(user_id).subscribe(function (orderdetailsdata) {
            _this.SyncInsertOrderDetails(orderdetailsdata);
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.SyncInsertOrderDetails = function (orderdetailsdata) {
        //alert('hey');
        var query = 'INSERT INTO "order_details" ("product_id","expiry_time","product_type","created_at","user_id") VALUES';
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](orderdetailsdata, function (data, index) {
            query += "('" + data.productId + "','" + data.expiryTime + "','" + data.productType + "','" + data.createdAt + "'," + data.cardiovisualUserId + "),";
        });
        query = query.replace(/,\s*$/, ";");
        this.openDatabase().then(function (db) {
            //alert('database SyncInsertOrderDetails');
            var drop_order_details = 'DROP TABLE IF EXISTS order_details';
            var order_details = 'CREATE TABLE IF NOT EXISTS order_details (id INTEGER PRIMARY KEY, product_id TEXT, expiry_time TEXT, product_type TEXT, created_at TEXT, user_id INTEGER)';
            db.executeSql(drop_order_details, []);
            db.executeSql(order_details, []);
            db.executeSql(query);
        }).catch(function () {
            //console.log("948 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.dashboardSubTopicsAPIData = function (type_user) {
        var _this = this;
        //first sync old images from sqlite to api data, so we get the difference and only that images we have to download 
        this.dashboardSyncIconAndDrawOn(type_user);
        var delete_subtopics = 'DROP TABLE IF EXISTS new_sub_topics';
        var new_subtopics = 'CREATE TABLE IF NOT EXISTS new_sub_topics (id INTEGER PRIMARY KEY, name TEXT NOT NULL, topicId INTEGER, categoryId INTEGER, subTopicType TEXT, title TEXT, description TEXT, url TEXT, isPaid INTEGER, copyrightInfo TEXT, sponsoredName TEXT, sponsoredLink TEXT, position INTEGER, iconUrl TEXT, isStreamed INTEGER, isAd INTEGER, isActive INTEGER, isDownloadable INTEGER, timings TEXT, createdAt TEXT, updatedAt TEXT, imageName TEXT, videoName TEXT, shareUrl TEXT, tag TEXT, forum_tags TEXT, viewCount INTEGER, expiryDate TEXT, duration TEXT, otherType TEXT)';
        // Remove all old entries;
        //this.deleteRecords("DELETE FROM new_sub_topics");
        this.http_service_object.getSubtopicDatas(type_user).subscribe(function (apiData) {
            // Generate BulkInsert query from API.
            //alert('sync api data '+JSON.stringify(apiData));
            var query = "INSERT INTO new_sub_topics (id,name,topicId,categoryId,subTopicType,title,description,url,isPaid,copyrightInfo,sponsoredName,sponsoredLink,position,iconUrl,isStreamed,isAd,isActive,isDownloadable,timings,createdAt,updatedAt,imageName,videoName,shareUrl,tag, forum_tags, viewCount,expiryDate,duration,otherType) VALUES ";
            __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
                var imageName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.iconUrl.split("/"));
                var videoName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.url.split("/"));
                if (type_user == "doctor") {
                    var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
                    query += '(' + data.id + ', "' + data.name + '", ' + data.newTopicId + ', ' + data.newCategoryId + ', "' + data.subTopicType + '", "' + data.title + '", "' + data.description + '", "' + data.url + '", ' + data.isPaid + ', "' + data.copyrightInfo + '", "' + data.sponsoredName + '", "' + data.sponsoredLink + '", ' + data.position + ', "' + data.iconUrl + '", ' + data.isStreamed + ', ' + data.isAd + ', ' + data.isActive + ', ' + data.isDownloadable + ', "' + data.timings + '", "' + data.createdAt + '", "' + data.updatedAt + '", "' + imageName + '", "' + videoName + '","' + data.shareUrl + '", "' + data.tag + '", "' + data.forum_tags + '", ' + data.viewCount + ', "' + temp_expiry_date + '", "' + data.duration + '", "' + data.contentType + '"),';
                }
                else {
                    var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
                    query += '(' + data.id + ', "' + data.patientFriendlyName + '", ' + data.newTopicId + ', ' + data.newCategoryId + ', "' + data.subTopicType + '", "' + data.title + '", "' + data.patientFriendlyDescription + '", "' + data.url + '", ' + data.isPaid + ', "' + data.copyrightInfo + '", "' + data.sponsoredName + '", "' + data.sponsoredLink + '", ' + data.position + ', "' + data.iconUrl + '", ' + data.isPatientStreamed + ', ' + data.isAd + ', ' + data.isActive + ', ' + data.isPatientDownloadable + ', "' + data.timings + '", "' + data.createdAt + '", "' + data.updatedAt + '", "' + imageName + '", "' + videoName + '","' + data.shareUrl + '", "' + data.tag + '", "' + data.forum_tags + '", ' + data.viewCount + ', "' + temp_expiry_date + '", "' + data.duration + '", "' + data.contentType + '"),';
                }
            });
            query = query.replace(/,\s*$/, ";");
            //alert('sync query '+JSON.stringify(query));
            var allsubtopicids = [];
            // Resync all data back.
            _this.openDatabase().then(function (db) {
                db.executeSql(delete_subtopics, []);
                db.executeSql(new_subtopics, []);
                db.executeSql(query, []);
                var subtopic_data_query = new Array("");
                _this.fetchAllData('subtopic_data', subtopic_data_query).then(function (result) {
                    __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](result.length, function (i) {
                        allsubtopicids.push(result[i].id);
                    });
                    var all_ids = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["pluck"](apiData, "id");
                    var difference_ids = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["difference"](all_ids, allsubtopicids);
                    if (difference_ids.length > 0) {
                        var subtopic_data_query = "INSERT INTO subtopic_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";
                        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](difference_ids, function (id, index) {
                            subtopic_data_query += '(' + id + ', "", "", 0, 1, 0),';
                        });
                        subtopic_data_query = subtopic_data_query.replace(/,\s*$/, ";");
                        _this.openDatabase().then(function (db) {
                            db.executeSql(subtopic_data_query, []);
                            _this.downloadAll();
                        });
                    }
                });
            }).catch(function () {
                //console.log("1029 Promise Rejected");
            });
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.dashboardSyncIconAndDrawOn = function (type_user) {
        var _this = this;
        //check for mp4 and m4v link on icon url
        var query_1 = new Array(" JOIN subtopic_data on new_sub_topics.id = subtopic_data.id where isActive=1");
        this.fetchAllData('new_sub_topics', query_1).then(function (topic_result) {
            if (topic_result.length > 0) {
                var again_download_icon = [];
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](topic_result.length, function (i) {
                    var local_url_extension = topic_result[i].localIconUrl.split(".").pop();
                    if (local_url_extension == 'mp4' || local_url_extension == 'm4v') {
                        again_download_icon.push({ 'id': topic_result[i].id, 'iconUrl': topic_result[i].iconUrl });
                    }
                });
            }
            if (again_download_icon.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory;
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](again_download_icon.length, function (i) {
                    var new_imagename = again_download_icon[i].iconUrl.split("/").pop();
                    fileTransfer.download(again_download_icon[i].iconUrl, path + 'icons/' + new_imagename).then(function (new_entry1) {
                        var new_icon_url = 'icons/' + new_imagename;
                        var new_querystring1 = "UPDATE subtopic_data SET localIconUrl = '" + new_icon_url + "' WHERE id = " + again_download_icon[i].id;
                        db.executeSql(new_querystring1, []);
                    });
                });
            }
        });
        var subtopic_query = new Array("");
        this.fetchAllData('new_sub_topics', subtopic_query).then(function (subtopic_result) {
            _this.http_service_object.getSubtopicDatas(type_user).subscribe(function (apiData) {
                var update_data = [];
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](apiData.length, function (i) {
                    if (apiData[i].iconUrl != subtopic_result[i].iconUrl) {
                        update_data.push({ 'id': apiData[i].id, 'iconUrl': apiData[i].iconUrl, 'url': apiData[i].url, 'subTopicType': apiData[i].subTopicType });
                    }
                    if (apiData[i].subTopicType == 'image' && ((apiData[i].iconUrl != subtopic_result[i].iconUrl) || (apiData[i].url != subtopic_result[i].url))) {
                        update_data.push({ 'id': apiData[i].id, 'iconUrl': apiData[i].iconUrl, 'url': apiData[i].url, 'subTopicType': apiData[i].subTopicType });
                    }
                });
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory;
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](update_data.length, function (i) {
                    // Download specific image
                    var imagename = update_data[i].iconUrl.split("/").pop();
                    fileTransfer.download(update_data[i].iconUrl, path + 'icons/' + imagename).then(function (entry1) {
                        //var icon_url = entry1.toURL();
                        var icon_url = 'icons/' + imagename;
                        var querystring1 = "UPDATE subtopic_data SET localIconUrl = '" + icon_url + "' WHERE id = " + update_data[i].id;
                        db.executeSql(querystring1, []);
                    });
                    //for drawon image
                    if (update_data[i].subTopicType == 'image') {
                        var drawon_imagename = update_data[i].url.split("/").pop();
                        fileTransfer.download(update_data[i].url, path + 'drawon/' + drawon_imagename).then(function (entry2) {
                            //var local_url = entry2.toURL();
                            var local_url = 'drawon/' + drawon_imagename;
                            var querystring2 = " UPDATE subtopic_data SET localUrl = '" + local_url + "' WHERE id = " + update_data[i].id;
                            db.executeSql(querystring2, []);
                        });
                    }
                });
            });
        });
    };
    DatabaseProvider.prototype.updatePassword = function (password, user_id) {
        var localapi = this.http_service_object.getApi();
        var url = localapi + "/api/CardiovisualUsers/" + user_id;
        var data = { "password": this.encode(password) };
        this.http_service_object.updatePasswordtoApi(url, data);
    };
    DatabaseProvider.prototype.forbranchSubTopicsAPIData = function (type_user) {
        var _this = this;
        this.http_service_object.getSubtopicDatas(type_user).subscribe(function (data) {
            _this.forbranchbulkInsertSubTopics(data, type_user);
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.forbranchbulkInsertSubTopics = function (apiData, type_user) {
        var _this = this;
        var delete_subtopics = 'DROP TABLE IF EXISTS new_sub_topics';
        var delete_subtopcs_data = 'DROP TABLE IF EXISTS subtopic_data';
        var new_subtopics = 'CREATE TABLE IF NOT EXISTS new_sub_topics (id INTEGER PRIMARY KEY, name TEXT NOT NULL, topicId INTEGER, categoryId INTEGER, subTopicType TEXT, title TEXT, description TEXT, url TEXT, isPaid INTEGER, copyrightInfo TEXT, sponsoredName TEXT, sponsoredLink TEXT, position INTEGER, iconUrl TEXT, isStreamed INTEGER, isAd INTEGER, isActive INTEGER, isDownloadable INTEGER, timings TEXT, createdAt TEXT, updatedAt TEXT, imageName TEXT, videoName TEXT, shareUrl TEXT, tag TEXT, forum_tags TEXT, viewCount INTEGER, expiryDate TEXT, duration TEXT,otherType TEXT)';
        var subtopic_data = 'CREATE TABLE IF NOT EXISTS subtopic_data (id INTEGER PRIMARY KEY, localUrl TEXT, localIconUrl TEXT, downloaded INTEGER, isVisible INTEGER, isFavourite INTEGER)';
        var query = "INSERT INTO new_sub_topics (id,name,topicId,categoryId,subTopicType,title,description,url,isPaid,copyrightInfo,sponsoredName,sponsoredLink,position,iconUrl,isStreamed,isAd,isActive,isDownloadable,timings,createdAt,updatedAt,imageName,videoName,shareUrl,tag,forum_tags,viewCount,expiryDate,duration,otherType) VALUES ";
        var subtopic_data_query = "INSERT INTO subtopic_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";
        //alert('api data '+JSON.stringify(apiData));
        //alert('type_user '+type_user);
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            var imageName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.iconUrl.split("/"));
            var videoName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.url.split("/"));
            subtopic_data_query += '(' + data.id + ', "", "", 0, 1, 0),';
            var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
            if (type_user == "doctor") {
                query += '(' + data.id + ', "' + data.name + '", ' + data.newTopicId + ', ' + data.newCategoryId + ', "' + data.subTopicType + '", "' + data.title + '", "' + data.description + '", "' + data.url + '", ' + data.isPaid + ', "' + data.copyrightInfo + '", "' + data.sponsoredName + '", "' + data.sponsoredLink + '", ' + data.position + ', "' + data.iconUrl + '", ' + data.isStreamed + ', ' + data.isAd + ', ' + data.isActive + ', ' + data.isDownloadable + ', "' + data.timings + '", "' + data.createdAt + '", "' + data.updatedAt + '", "' + imageName + '", "' + videoName + '","' + data.shareUrl + '", "' + data.tag + '", "' + data.forum_tags + '", ' + data.viewCount + ', "' + temp_expiry_date + '", "' + data.duration + '", "' + data.contentType + '"),';
            }
            else {
                var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
                query += '(' + data.id + ', "' + data.patientFriendlyName + '", ' + data.newTopicId + ', ' + data.newCategoryId + ', "' + data.subTopicType + '", "' + data.title + '", "' + data.patientFriendlyDescription + '", "' + data.url + '", ' + data.isPaid + ', "' + data.copyrightInfo + '", "' + data.sponsoredName + '", "' + data.sponsoredLink + '", ' + data.position + ', "' + data.iconUrl + '", ' + data.isPatientStreamed + ', ' + data.isAd + ', ' + data.isActive + ', ' + data.isPatientDownloadable + ', "' + data.timings + '", "' + data.createdAt + '", "' + data.updatedAt + '", "' + imageName + '", "' + videoName + '","' + data.shareUrl + '", "' + data.tag + '", "' + data.forum_tags + '", ' + data.viewCount + ', "' + temp_expiry_date + '", "' + data.duration + '", "' + data.contentType + '"),';
            }
        });
        query = query.replace(/,\s*$/, ";");
        subtopic_data_query = subtopic_data_query.replace(/,\s*$/, ";");
        //alert('query '+query);
        //alert('subtopic_data_query '+subtopic_data_query);
        this.openDatabase().then(function (db) {
            db.executeSql(delete_subtopics, []);
            db.executeSql(delete_subtopcs_data, []);
            db.executeSql(new_subtopics, []);
            db.executeSql(subtopic_data, []);
            db.executeSql(query, []);
            db.executeSql(subtopic_data_query, []);
            _this.storage_object.get('user_logged_in').then(function (val) {
                if (val != 0) {
                    _this.getFavoritesAPIData(val);
                    _this.getDownloadsAPIData(val);
                }
            });
        }).catch(function () {
            //console.log("1189 Promise Rejected");
        });
    };
    /* start for like dislike by:Sanjeev */
    DatabaseProvider.prototype.getLikeAPIData = function (liveId) {
        var _this = this;
        //alert('liveId-->'+liveId);
        this.http_service_object.getLikesData(liveId).subscribe(function (data) {
            //alert('data-->'+JSON.stringify(data));
            _this.bulkInsertLikeslists(data, liveId);
        }, function (err) {
            //alert('err->'+err);
        });
    };
    DatabaseProvider.prototype.bulkInsertLikeslists = function (apiData, liveId) {
        var delete_likes = 'DROP TABLE IF EXISTS likes';
        var create_likes = 'CREATE TABLE IF NOT EXISTS likes (id INTEGER PRIMARY KEY, cardiovisualUserId TEXT, subtopicId TEXT, createdAt TEXT, updatedAt TEXT)';
        var likes_insert_query = "INSERT INTO likes (id, cardiovisualUserId, subtopicId, createdAt, updatedAt) VALUES";
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            likes_insert_query += '(' + data.id + ', ' + data.cardiovisualUserId + ', ' + data.subtopicId + ', "' + data.createdAt + '", "' + data.updatedAt + '"),';
        });
        likes_insert_query = likes_insert_query.replace(/,\s*$/, ";");
        this.openDatabase().then(function (db) {
            db.executeSql(delete_likes, []);
            db.executeSql(create_likes, []);
            db.executeSql(likes_insert_query, []);
        }).catch(function () {
            //console.log("1221 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.setLikeDislikes = function (liveId, subtopicId, classElement) {
        //alert('database liveId-->'+liveId +'subtopicId--->'+subtopicId+ 'classElement-->'+classElement);
        var _this = this;
        var api_url = this.http_service_object.getApi();
        this.http_service_object.getLikesWithsubtopicidAndliveId(liveId, subtopicId).subscribe(function (successLikedata) {
            if (__WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["size"](successLikedata) > 0) {
                // code...
                _this.http_object.delete(api_url + '/api/likes/' + successLikedata[0].id).subscribe(function (resp) {
                    //this.updateRecord('likes', ['isFavourite'], ['0', subtopicId]);
                    _this.updateLikesCount(liveId, subtopicId, classElement);
                }, function (deleteApierror) { return console.log('deleteApierror-->' + JSON.stringify(deleteApierror)); });
            }
            else {
                _this.http_object.post(api_url + "/api/likes", { "cardiovisualUserId": liveId, "subtopicId": subtopicId }).subscribe(function (apiLkedata) {
                    _this.updateLikesCount(liveId, subtopicId, classElement);
                }, function (insertApierror) {
                    //console.log('insertApierror--->'+JSON.stringify(insertApierror))
                });
            }
        }, function (likeerr) {
            //console.log('likeerr---->'+JSON.stringify(likeerr));
        });
    };
    DatabaseProvider.prototype.updateLikesCount = function (liveId, subtopicId, classElement) {
        var _this = this;
        var network_type = this.network_check_object.getNetworkType();
        var apiUrl = this.http_service_object.getApi();
        this.http_object.get(apiUrl + "/api/likes/count?where[subtopicId]=" + subtopicId).subscribe(function (countSuccess) {
            var likesCount = document.getElementById("likes-count");
            var iconLikesColor = document.getElementById("icon-likes-color");
            //loader.style.background = '#fff';
            //likesCount.innerHTML = countSuccess['count']+'&nbsp;Likes';
            _this.http_service_object.getLikesWithsubtopicidAndliveId(liveId, subtopicId).subscribe(function (updateCountLikedata) {
                if (__WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["size"](updateCountLikedata) > 0) {
                    //angular.element('.fa.fa-thumbs-up').css('color','#e85f4f');
                    //iconLikesColor.style.color = '#e85f4f';
                    iconLikesColor.style.color = '#000000';
                }
                else {
                    //angular.element('.fa.fa-thumbs-up').css('color','#000000');
                    //iconLikesColor.style.color = '#000000';
                    iconLikesColor.style.color = '#CCCCCC';
                }
            }, function (updateCountlikeerr) {
                //console.log('updateCountlikeerr---->'+JSON.stringify(updateCountlikeerr));
            });
        }, function (countError) {
            //console.log('countError---->'+JSON.stringify(countError));
        });
    };
    /* End for like dislike by:Sanjeev */
    /*information tab :abishek  24sept2019  start*/
    /*for information table*/
    DatabaseProvider.prototype.getInformationAPIData = function (type_user) {
        var _this = this;
        this.http_service_object.getInformationData(type_user).subscribe(function (data) {
            _this.bulkInsertInformation(data, type_user);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.bulkInsertInformation = function (apiData, type_user) {
        var _this = this;
        var apiDataStr = JSON.stringify(apiData);
        if (type_user == "doctor") {
            var apiDataStr = apiDataStr.replace(/"nonhcp_descr":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/"nonhcp_descr":null,/ig, "");
            var apiDataStr = apiDataStr.replace(/"isPatientDownloadable":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"isPatientStreamed":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"nonhcp_name":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/hcp_name/ig, "name");
            var apiDataStr = apiDataStr.replace(/hcp_descr/ig, "description");
        }
        else {
            var apiDataStr = apiDataStr.replace(/"hcp_descr":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/"hcp_descr":null,/ig, "");
            var apiDataStr = apiDataStr.replace(/"isDownloadable":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"isStreamed":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/isPatientDownloadable/ig, "isDownloadable");
            var apiDataStr = apiDataStr.replace(/isPatientStreamed/ig, "isStreamed");
            var apiDataStr = apiDataStr.replace(/"hcp_name":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/nonhcp_name/ig, "name");
            var apiDataStr = apiDataStr.replace(/nonhcp_descr/ig, "description");
        }
        var apiDataStr = apiDataStr.replace(/video_url/ig, "url");
        var apiDataStr = apiDataStr.replace(/video_image/ig, "iconUrl");
        var apiDataStr = apiDataStr.replace(/channel_id/ig, "channelId");
        var apiDataStr = apiDataStr.replace(/"copyright"/ig, '"copyrightInfo"');
        var apiDataStr = apiDataStr.replace(/"type"/ig, '"subTopicType"');
        var apiDataStr = apiDataStr.replace(/"filesize":"[0-9.]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"filesize":"",/ig, "");
        var apiDataStr = apiDataStr.replace(/"resolution":"[0-9x]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"resolution":"",/ig, "");
        var apiDataStr = apiDataStr.replace(/"slug":"[0-9a-zA-z-]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"slug":"",/ig, "");
        var apiDataStr = apiDataStr.replace(/contentType/ig, "otherType");
        var apiDataStr = apiDataStr.replace(/new_topicId/ig, "topicId");
        var apiDataStr = apiDataStr.replace(/new_categoryId/ig, "categoryId");
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.jpg)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.jpeg)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.png)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/("iconUrl":"")+/ig, '$1,"imageName":""');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.pdf)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.m4v)/ig, '$1","videoName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.mp4)/ig, '$1","videoName":"$1');
        var apiDataStr = apiDataStr.replace(/"url":"[a-zA-Z0-9-.() _\/\:]+?([_.\w-]+\.jpg)+",/ig, '"url":"$1","videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"url":"[a-zA-Z0-9-.() _\/\:]+?([_.\w-]+\.jpeg)+",/ig, '"url":"$1","videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"otherType":"link",/gm, '"videoName":"NA","otherType":"link",');
        var prejson = '{"structure":{"tables":{"information":"([id] INTEGER PRIMARY KEY, [name] TEXT NOT NULL, [description] TEXT, [topicId] INTEGER, [categoryId] INTEGER, [channelId] INTEGER, [url] TEXT, [videoName] TEXT, [iconUrl] TEXT, [imageName] TEXT, [duration] TEXT, [copyrightInfo] TEXT, [isActive] INTEGER, [isStreamed] INTEGER, [isDownloadable] INTEGER, [isPaid] INTEGER, [isAd] INTEGER, [position] INTEGER, [tag] TEXT, [forum_tags] TEXT, [shareUrl] TEXT, [sponsoredName] TEXT, [sponsoredLink] TEXT, [viewCount] INTEGER, [expiryDate] TEXT, [subTopicType] TEXT, [otherType] TEXT, [createdAt] TEXT, [updatedAt] TEXT)"},"otherSQL":["CREATE UNIQUE INDEX information_id ON information(id)"]},"data":{"inserts":{"information":';
        var postjson = '}}}';
        var finaljson = prejson + apiDataStr + postjson;
        var information_ids = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["pluck"](JSON.parse(JSON.stringify(apiData)), 'id');
        var info_ids_json = JSON.stringify(information_ids);
        var final_info_datatable = info_ids_json.replace(/([0-9]+)/ig, '{"id":"$1","localUrl":"","localIconUrl":"","downloaded":"0","isVisible":"1","isFavourite":"0"}');
        var pre_infod = '{"structure":{"tables":{"information_data":"([id] INTEGER PRIMARY KEY, [localUrl] TEXT, [localIconUrl] TEXT, [downloaded] INTEGER, [isVisible] INTEGER, [isFavourite] INTEGER)"},"otherSQL":["CREATE UNIQUE INDEX information_data_id ON information_data(id)"]},"data":{"inserts":{"information_data":';
        var post_infod_json = '}}}';
        var final_infod_json = pre_infod + final_info_datatable + post_infod_json;
        this.openDatabase().then(function (db) {
            var successFn = function (count) {
                alert("Successfully imported JSON to DB; equivalent to " + count + " SQL statements");
            };
            var errorFn = function (error) {
                alert(JSON.stringify(error.message));
                console.log("message:" + JSON.stringify(error.message));
            };
            var progressFn = function (current, total) {
                console.log("Imported " + current + "/" + total + " statements");
            };
            _this.sqlitePorter.importJsonToDb(db, finaljson);
            //             ,{
            //                 successFn: successFn,
            //                 errorFn: errorFn,
            //                 progressFn: progressFn
            //             });
            _this.sqlitePorter.importJsonToDb(db, final_infod_json);
            //              ,{
            //                     successFn: successFn,
            //                     errorFn: errorFn,
            //                     progressFn: progressFn
            //             });
            _this.storage_object.get('user_logged_in').then(function (val) {
                if (val != 0) {
                    _this.getInformationFavoritesAPIData(val);
                    _this.getInformationDownloadsAPIData(val);
                }
            });
            _this.downloadInformationAll();
        }).catch(function () {
            //console.log("1364 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.getInformationFavoritesAPIData = function (liveId) {
        var _this = this;
        this.http_service_object.getInformationFavoritesDatas(liveId).subscribe(function (data) {
            _this.syncInformationFavorites(data);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.syncInformationFavorites = function (pData) {
        var updated_id = '';
        for (var i = 0; i < pData.length; i++) {
            if (updated_id == '') {
                updated_id = pData[i]['subtopicId'];
            }
            else {
                updated_id = updated_id + ',' + pData[i]['subtopicId'];
            }
        }
        if (updated_id != '') {
            var query = "UPDATE information_data SET isFavourite=1 WHERE id IN (" + updated_id + ")";
            var query2 = "UPDATE information_data SET isFavourite=0 WHERE id NOT IN (" + updated_id + ")";
            this.db.executeSql(query2, []);
            return this.db.executeSql(query, []).then(function (data) {
                return data;
            }, function (err) {
                //alert('Error: ' + err);
                return [];
            });
        }
    };
    DatabaseProvider.prototype.getInformationDownloadsAPIData = function (liveId) {
        var _this = this;
        this.http_service_object.getInformationDownloadsDatas(liveId).subscribe(function (data) {
            _this.syncInformationDownloads(data);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.syncInformationDownloads = function (pData) {
        var updated_id = '';
        for (var i = 0; i < pData.length; i++) {
            if (updated_id == '') {
                updated_id = pData[i]['informationId'];
            }
            else {
                updated_id = updated_id + ',' + pData[i]['informationId'];
            }
        }
        if (updated_id != '') {
            var query = "UPDATE information_data SET downloaded=1 WHERE id IN (" + updated_id + ")";
            return this.db.executeSql(query, []).then(function (data) {
                return data;
            }, function (err) {
                //alert('Error: ' + err);
                return [];
            });
        }
    };
    DatabaseProvider.prototype.downloadInformationAll = function () {
        var _this = this;
        /*-------------------------------------- logic to download all icons --------------------------------------*/
        // gets all undownloaded 
        var info_query = new Array(" JOIN information_data ON information_data.id = information.id WHERE information_data.localIconUrl = ''");
        this.fetchAllData('information', info_query).then(function (info_result) {
            if (info_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'icons/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](info_result.length, function (i) {
                    // Download specific image
                    var imagename = info_result[i].imageName;
                    fileTransfer.download(info_result[i].iconUrl, path + imagename).then(function (entry) {
                        var icon_url = 'icons/' + imagename;
                        var querystring = " UPDATE information_data SET localIconUrl = '" + icon_url + "' WHERE id = " + info_result[i].id;
                        db.executeSql(querystring, []);
                    });
                });
            }
        });
        /*----------------------------------------------------------------------------------------------------------*
        /*------------------------------------- logic to download all drawon --------------------------------------*/
        var info_query = new Array(" JOIN information_data ON information_data.id = information.id WHERE (information.subTopicType='image' AND information_data.downloaded = 0)");
        this.fetchAllData('information', info_query).then(function (drawon_result) {
            if (drawon_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'drawon/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](drawon_result.length, function (i) {
                    // Download specific image
                    //var filename = drawon_result[i].url.split("/").pop();
                    var filename = drawon_result[i].imageName;
                    fileTransfer.download(drawon_result[i].url, path + filename).then(function (entry) {
                        var drawon_image_url = 'drawon/' + filename;
                        var drawon_query = " UPDATE information_data SET localUrl = '" + drawon_image_url + "' WHERE id = " + drawon_result[i].id;
                        db.executeSql(drawon_query, []);
                    });
                });
            }
        });
    };
    DatabaseProvider.prototype.dashboardInformationAPIData = function (type_user) {
        var _this = this;
        //first check for the information data table 
        var create_information_data = 'CREATE TABLE IF NOT EXISTS information_data (id INTEGER PRIMARY KEY, localUrl TEXT, localIconUrl TEXT, downloaded INTEGER, isVisible INTEGER, isFavourite INTEGER)';
        var information_data_query = "INSERT INTO information_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";
        this.http_service_object.getInformationData(type_user).subscribe(function (apiData) {
            information_data_query += '(' + apiData.id + ', "", "", 0, 1, 0),';
        });
        information_data_query = information_data_query.replace(/,\s*$/, ";");
        this.openDatabase().then(function (db) {
            db.executeSql(create_information_data, []).then(function (success) {
                db.executeSql(information_data_query, []);
            });
        }).catch(function () {
            //console.log("1509 Promise Rejected");
        });
        //first sync old images from sqlite to api data, so we get the difference and only that images we have to download 
        this.dashboardSyncInformationIconAndDrawOn(type_user);
        var delete_infromation = 'DROP TABLE IF EXISTS information';
        var create_information = 'CREATE TABLE IF NOT EXISTS information (id INTEGER PRIMARY KEY, name TEXT NOT NULL, description TEXT, topicId INTEGER, categoryId INTEGER, channelId INTEGER, url TEXT, videoName TEXT, iconUrl TEXT, imageName TEXT, duration TEXT, copyrightInfo TEXT, isActive INTEGER, isStreamed INTEGER,isDownloadable INTEGER, isPaid INTEGER, isAd INTEGER, position INTEGER, tag TEXT, forum_tags TEXT, shareUrl TEXT, sponsoredName TEXT, sponsoredLink TEXT, viewCount INTEGER, expiryDate TEXT, subTopicType TEXT, otherType TEXT, createdAt TEXT, updatedAt TEXT)';
        this.http_service_object.getInformationData(type_user).subscribe(function (apiData) {
            // Generate BulkInsert query from API.
            var information_query = "INSERT INTO information (id, name, topicId, categoryId, channelId, description, url, isPaid, copyrightInfo, sponsoredName, sponsoredLink, position, iconUrl, isStreamed, isAd, isActive, isDownloadable, createdAt, updatedAt, imageName, videoName, shareUrl, tag, forum_tags, viewCount, expiryDate, duration, subTopicType, otherType) VALUES ";
            __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
                var imageName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.video_image.split("/"));
                var videoName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.video_url.split("/"));
                var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
                if (type_user == "doctor") {
                    information_query += '(' + data.id + ', "' + data.hcp_name + '", ' + data.new_topicId + ', ' + data.new_categoryId + ', ' + data.channel_id + ', "' + data.hcp_descr + '", "' + data.video_url + '", ' + data.isPaid + ', "' + data.copyright + '", "' + data.sponsoredName + '", "' + data.sponsoredLink + '", ' + data.position + ', "' + data.video_image + '", ' + data.isStreamed + ', ' + data.isAd + ', ' + data.isActive + ', ' + data.isDownloadable + ', "' + data.createdAt + '", "' + data.updatedAt + '", "' + imageName + '", "' + videoName + '","' + data.shareUrl + '", "' + data.tag + '", "' + data.forum_tags + '", ' + data.viewCount + ', "' + temp_expiry_date + '", "' + data.duration + '","' + data.type + '","' + data.contentType + '"),';
                }
                else {
                    var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
                    information_query += '(' + data.id + ', "' + data.nonhcp_name + '", ' + data.new_topicId + ', ' + data.new_categoryId + ',' + data.channel_id + ', "' + data.nonhcp_descr + '", "' + data.video_url + '", ' + data.isPaid + ', "' + data.copyright + '", "' + data.sponsoredName + '", "' + data.sponsoredLink + '", ' + data.position + ', "' + data.video_image + '", ' + data.isPatientStreamed + ', ' + data.isAd + ', ' + data.isActive + ', ' + data.isPatientDownloadable + ', "' + data.createdAt + '", "' + data.updatedAt + '", "' + imageName + '", "' + videoName + '","' + data.shareUrl + '", "' + data.tag + '", "' + data.forum_tags + '", ' + data.viewCount + ', "' + temp_expiry_date + '", "' + data.duration + '","' + data.type + '","' + data.contentType + '"),';
                }
            });
            information_query = information_query.replace(/,\s*$/, ";");
            var allinfotopics = [];
            // Resync all data back.
            _this.openDatabase().then(function (db) {
                db.executeSql(delete_infromation);
                db.executeSql(create_information);
                db.executeSql(information_query);
                var information_data_query = new Array("");
                _this.fetchAllData('information_data', information_data_query).then(function (result) {
                    __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](result.length, function (i) {
                        allinfotopics.push(result[i].id);
                    });
                    var all_ids = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["pluck"](apiData, "id");
                    var difference_ids = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["difference"](all_ids, allinfotopics);
                    if (difference_ids.length > 0) {
                        var information_data_insert_query = "INSERT INTO information_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";
                        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](difference_ids, function (id, index) {
                            information_data_insert_query += '(' + id + ', "", "", 0, 1, 0),';
                        });
                        information_data_insert_query = information_data_insert_query.replace(/,\s*$/, ";");
                        _this.openDatabase().then(function (db) {
                            db.executeSql(information_data_insert_query);
                            _this.downloadInformationAll();
                        });
                    }
                });
            }).catch(function () {
                //console.log("1583 Promise Rejected");
            });
        }, function (err) {
            //alert(err);
        });
    };
    DatabaseProvider.prototype.dashboardSyncInformationIconAndDrawOn = function (type_user) {
        var _this = this;
        var information_query = new Array("");
        this.fetchAllData('information', information_query).then(function (information_result) {
            _this.http_service_object.getInformationData(type_user).subscribe(function (apiData) {
                var update_data = [];
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](apiData.length, function (i) {
                    if (apiData[i].video_image != information_result[i].iconUrl) {
                        update_data.push({ 'id': apiData[i].id, 'iconUrl': apiData[i].video_image, 'url': apiData[i].video_url, 'subTopicType': apiData[i].contentType });
                    }
                    if (apiData[i].contentType == 'image' && ((apiData[i].video_image != information_result[i].iconUrl) || (apiData[i].video_url != information_result[i].url))) {
                        update_data.push({ 'id': apiData[i].id, 'iconUrl': apiData[i].video_image, 'url': apiData[i].video_url, 'subTopicType': apiData[i].contentType });
                    }
                });
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory;
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](update_data.length, function (i) {
                    // Download specific image
                    var imagename = update_data[i].iconUrl.split("/").pop();
                    fileTransfer.download(update_data[i].iconUrl, path + 'icons/' + imagename).then(function (entry1) {
                        var icon_url = entry1.toURL();
                        var querystring1 = "UPDATE information_data SET localIconUrl = '" + icon_url + "' WHERE id = " + update_data[i].id;
                        db.executeSql(querystring1, []);
                    });
                    //for drawon image
                    if (update_data[i].subTopicType == 'image') {
                        var drawon_imagename = update_data[i].url.split("/").pop();
                        fileTransfer.download(update_data[i].url, path + 'drawon/' + drawon_imagename).then(function (entry2) {
                            var local_url = entry2.toURL();
                            var querystring2 = " UPDATE information_data SET localUrl = '" + local_url + "' WHERE id = " + update_data[i].id;
                            db.executeSql(querystring2, []);
                        });
                    }
                });
            });
        });
    };
    DatabaseProvider.prototype.setinformationFavorites = function (liveId, infoId) {
        var _this = this;
        var post_url = this.http_service_object.getPosturl('favorites');
        this.http_service_object.getFavoriteswithinformationId(liveId, infoId).subscribe(function (data) {
            var favorite_data = data;
            if (favorite_data.length > 0) {
                _this.http_object.delete(post_url + '/' + favorite_data[0].id).subscribe(function (resp) { _this.updateRecord('information_data', ['isFavourite'], ['0', infoId]); }, function (error) { return console.log('Error---->123.' + JSON.stringify(error)); });
            }
            else {
                _this.http_object.post(post_url, { "cardiovisualUserId": liveId, "subtopicId": infoId, "type": "information" }).subscribe(function (data) {
                    _this.updateRecord('information_data', ['isFavourite'], ['1', infoId]);
                }, function (error) {
                    //console.log('Error---->321.'+JSON.stringify(error))
                });
            }
        }, function (err) {
            //alert(err);
        });
    };
    /*information tab  end*/
    /* channels start */
    /*create channel table*/
    DatabaseProvider.prototype.getChannelsApiData = function (type_user) {
        var _this = this;
        this.http_service_object.getChannelsData(type_user).subscribe(function (data) {
            _this.bulkInsertChannels(data, type_user);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.bulkInsertChannels = function (apiData, type_user) {
        var _this = this;
        var drop_channels = 'DROP TABLE IF EXISTS channels';
        var create_channels = 'CREATE TABLE IF NOT EXISTS channels (id INTEGER PRIMARY KEY, name TEXT NOT NULL, logo TEXT, logo_filename TEXT, icon TEXT, hexcode TEXT, position INTEGER, isActive INTEGER, createdAt TEXT, updatedAt TEXT)';
        var insert_chanels_query = "INSERT INTO channels (id, name, logo, logo_filename, icon, hexcode, position, isActive, createdAt, updatedAt) VALUES ";
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            var logo_fileName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.logo.split("/"));
            insert_chanels_query += '(' + data.id + ', "' + data.name + '", "' + data.logo + '", "' + logo_fileName + '", "' + data.icon + '", "' + data.hexcode + '", ' + data.position + ', ' + data.active + ', "' + data.createdAt + '", "' + data.updatedAt + '"),';
        });
        insert_chanels_query = insert_chanels_query.replace(/,\s*$/, ";");
        this.openDatabase().then(function (db) {
            db.executeSql(drop_channels, []);
            db.executeSql(create_channels, []);
            db.executeSql(insert_chanels_query, []);
            _this.downloadChannelsdata();
        }).catch(function () {
            //console.log("1699 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.downloadChannelsdata = function () {
        var _this = this;
        var channel_query = new Array("");
        this.fetchAllData('channels', channel_query).then(function (channel_result) {
            if (channel_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'channels/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](channel_result.length, function (i) {
                    // Download specific image
                    var logo_filename = channel_result[i].logo_filename;
                    fileTransfer.download(channel_result[i].logo, path + logo_filename).then(function (entry) {
                        /*var icon_url = 'channels/'+logo_filename;
                        var querystring = " UPDATE channels SET localIconUrl = '"+icon_url+"' WHERE id = "+channel_result[i].id;
                        db.executeSql(querystring, []);*/
                    });
                });
            }
        });
    };
    /* channels End */
    //create custom liting table 25 October 2019 start
    DatabaseProvider.prototype.getCutomlistingApi = function () {
        var _this = this;
        this.http_service_object.getCustomListingData().subscribe(function (data) {
            _this.bulkInsertCustomListing(data);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.bulkInsertCustomListing = function (apiData) {
        var drop_custom_listing = 'DROP TABLE IF EXISTS custom_listing';
        var create_custom_listing = 'CREATE TABLE IF NOT EXISTS custom_listing (id INTEGER PRIMARY KEY, name TEXT, type TEXT, list_values TEXT)';
        var insert_custom_listing_query = "INSERT INTO custom_listing (name, type, list_values) VALUES ";
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            insert_custom_listing_query += "('" + data.name + "','" + data.type + "','" + data.list_values + "'),";
        });
        insert_custom_listing_query = insert_custom_listing_query.replace(/,\s*$/, ";");
        this.openDatabase().then(function (db) {
            db.executeSql(drop_custom_listing, []);
            db.executeSql(create_custom_listing, []);
            db.executeSql(insert_custom_listing_query, []);
        }).catch(function () {
            //console.log("1756 Promise Rejected");
        });
    };
    //create custom video jsons table
    DatabaseProvider.prototype.getCutomVideoJsonApi = function () {
        var _this = this;
        this.http_service_object.getCutomVideoJsonData().subscribe(function (data) {
            _this.bulkInsertCutomVideoJson(data);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.bulkInsertCutomVideoJson = function (apiData) {
        //alert('apiData--->'+JSON.stringify(apiData));
        var drop_custom_video_json = 'DROP TABLE IF EXISTS custom_video_json';
        var create_custom_video_json = 'CREATE TABLE IF NOT EXISTS custom_video_json (id INTEGER PRIMARY KEY, sub_topic_id INTEGER, type TEXT, list_values TEXT)';
        var insert_custom_video_json_query = "INSERT INTO custom_video_json (sub_topic_id, type, list_values) VALUES ";
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            insert_custom_video_json_query += "(" + data.sub_topic_id + ",'" + data.type + "','" + data.list_values + "'),";
        });
        insert_custom_video_json_query = insert_custom_video_json_query.replace(/,\s*$/, ";");
        this.openDatabase().then(function (db) {
            db.executeSql(drop_custom_video_json, []);
            db.executeSql(create_custom_video_json, []);
            db.executeSql(insert_custom_video_json_query, []);
        }).catch(function () {
            //console.log("1788 Promise Rejected");
        });
    };
    // 25 October 2015 End
    //sponsored by link in my cv page
    /*
        userType : doctor, patient
    */
    DatabaseProvider.prototype.getSponsoredByData = function (userType) {
        var _this = this;
        this.http_service_object.getSponsoredByDataApi().subscribe(function (data) {
            _this.bulkInsertSponsoredBy(data, userType);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.bulkInsertSponsoredBy = function (apiData, userType) {
        var _this = this;
        var drop_custom_video_json = 'DROP TABLE IF EXISTS sponsored_by';
        var create_custom_video_json = 'CREATE TABLE IF NOT EXISTS sponsored_by (id INTEGER PRIMARY KEY, user_type TEXT, sponsored_by_image_url TEXT, local_image_url TEXT, sponsored_by_link TEXT, local_link TEXT, is_active INTEGER, content_type TEXT)';
        var insert_custom_video_json_query = "INSERT INTO sponsored_by (user_type, sponsored_by_image_url, sponsored_by_link, is_active, content_type, local_image_url, local_link) VALUES ";
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            if (data.isFor == userType || data.isFor == 'all') {
                insert_custom_video_json_query += "('" + data.isFor + "','" + data.imageUrl + "','" + data.contentUrl + "', " + data.active + ", '" + data.contentType + "', '', ''),";
            }
        });
        insert_custom_video_json_query = insert_custom_video_json_query.replace(/,\s*$/, ";");
        this.openDatabase().then(function (db) {
            db.executeSql(drop_custom_video_json, []);
            db.executeSql(create_custom_video_json, []);
            db.executeSql(insert_custom_video_json_query, []);
            _this.downloadSponsoredByData();
        }).catch(function () {
            //console.log("1828 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.downloadSponsoredByData = function () {
        var _this = this;
        var sponsored_by_query = new Array(" WHERE local_image_url=''");
        this.fetchAllData('sponsored_by', sponsored_by_query).then(function (sponsored_by_result) {
            if (sponsored_by_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'channels/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](sponsored_by_result.length, function (i) {
                    // Download specific image
                    var logo_filename = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](sponsored_by_result[i].sponsored_by_image_url.split("/"));
                    fileTransfer.download(sponsored_by_result[i].sponsored_by_image_url, path + logo_filename).then(function (entry) {
                        var icon_url = 'channels/' + logo_filename;
                        var querystring = " UPDATE sponsored_by SET local_image_url = '" + icon_url + "' WHERE id = " + sponsored_by_result[i].id;
                        db.executeSql(querystring, []);
                    });
                });
            }
        });
        var sponsored_by_video_query = new Array(" WHERE local_link='' AND content_type='video'");
        this.fetchAllData('sponsored_by', sponsored_by_video_query).then(function (sponsored_by_video_result) {
            if (sponsored_by_video_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'channels/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](sponsored_by_video_result.length, function (i) {
                    // Download specific image
                    var video_filename = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](sponsored_by_video_result[i].sponsored_by_link.split("/"));
                    fileTransfer.download(sponsored_by_video_result[i].sponsored_by_link, path + video_filename).then(function (entry) {
                        var video_url = 'channels/' + video_filename;
                        var querystring = " UPDATE sponsored_by SET local_link = '" + video_url + "' WHERE id = " + sponsored_by_video_result[i].id;
                        db.executeSql(querystring, []);
                    });
                });
            }
        });
    };
    DatabaseProvider.prototype.newUserInfoAddColumn = function (liveId) {
        var _this = this;
        this.http_service_object.getUserInfoByLiveId(liveId).subscribe(function (addColumndata) {
            var chk_specialities = addColumndata.specialities;
            if (chk_specialities == '' || chk_specialities == 'null' || chk_specialities == 'undefined' || chk_specialities == null || chk_specialities == undefined) {
                _this.openDatabase().then(function (db) {
                    var query = 'Alter TABLE new_user_info ADD COLUMN specialities TEXT';
                    db.executeSql(query, []).then(function (data12) {
                        //console.log('data12 '+JSON.stringify(data12));
                    }, function (error1) {
                        //alert('error error1 '+JSON.stringify(error1));
                    });
                }).catch(function () {
                    //console.log("1892 Promise Rejected");
                });
            }
            else {
                _this.openDatabase().then(function (db) {
                    var query = 'Alter TABLE new_user_info ADD COLUMN specialities TEXT';
                    db.executeSql(query, []).then(function (data12) {
                        var user_role_sub_type = addColumndata.userRoleSubType;
                        var update_query = "UPDATE new_user_info SET specialities = '" + chk_specialities + "', user_role_sub_type='" + user_role_sub_type + "' WHERE liveId =" + liveId;
                        db.executeSql(update_query, []);
                    }, function (error1) {
                        //console.log('error error1 '+JSON.stringify(error1));
                    });
                }).catch(function () {
                    //console.log("1910 Promise Rejected");
                });
            }
            var chk_state = addColumndata.state;
            if (chk_state == '' || chk_state == 'null' || chk_state == 'undefined' || chk_state == null || chk_state == undefined) {
                var addState = 'Alter TABLE new_user_info ADD COLUMN state TEXT';
                var addRefferal_code = 'Alter TABLE new_user_info ADD COLUMN referral_code TEXT';
                var addReffered_by = 'Alter TABLE new_user_info ADD COLUMN referred_by INTEGER';
                var addNpi_number = 'Alter TABLE new_user_info ADD COLUMN npi_number INTEGER';
                var addNpi_id = 'Alter TABLE new_user_info ADD COLUMN npi_id INTEGER';
                _this.openDatabase().then(function (db) {
                    db.executeSql(addState, []);
                    db.executeSql(addRefferal_code, []);
                    db.executeSql(addReffered_by, []);
                    db.executeSql(addNpi_number, []);
                    db.executeSql(addNpi_id, []);
                }).catch(function () {
                    //console.log("1929 Promise Rejected");
                });
            }
        }, function (err) {
            //alert('Err---->1234.'+JSON.stringify(err));
        });
    };
    //whatsnew data
    DatabaseProvider.prototype.getWhatsnewData = function (user_type) {
        var _this = this;
        this.http_service_object.getWhatsnewData().subscribe(function (data) {
            //alert('whatsnew data---->'+JSON.stringify(data));
            _this.bulkInsertWhatsnew(data, user_type);
        }, function (err) {
            //console.log('err->'+err);
        });
    };
    DatabaseProvider.prototype.bulkInsertWhatsnew = function (apiData, user_type) {
        var _this = this;
        var drop_whatsnew = 'DROP TABLE IF EXISTS whatsnew';
        var create_whatsnew = 'CREATE TABLE IF NOT EXISTS whatsnew (id INTEGER PRIMARY KEY, name TEXT, type TEXT, image_url TEXT, local_image_url TEXT, source TEXT, template TEXT, list_values TEXT, position INTEGER, is_active INTEGER)';
        var insert_whatsnew_query = "INSERT INTO whatsnew (id, name, image_url, type, source, template, position, list_values, is_active) VALUES ";
        var insert_whatsnew_query_data = '';
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            if (data.isFor == user_type || data.isFor == 'all') {
                insert_whatsnew_query_data += "(" + data.id + ", '" + data.name + "','" + data.image + "','" + data.type + "', '" + data.source + "', '" + data.template + "', " + data.position + ", '" + data.list_values + "', " + data.isActive + "),";
            }
        });
        insert_whatsnew_query_data = insert_whatsnew_query_data.replace(/,\s*$/, ";");
        if (insert_whatsnew_query_data != '') {
            insert_whatsnew_query += insert_whatsnew_query_data;
        }
        this.openDatabase().then(function (db) {
            db.executeSql(drop_whatsnew, []);
            db.executeSql(create_whatsnew, []);
            if (insert_whatsnew_query_data != '') {
                db.executeSql(insert_whatsnew_query, []);
                _this.downloadWhatsnewData(apiData);
            }
        }).catch(function () {
            //console.log("1978 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.downloadWhatsnewData = function (apiData) {
        var that = this;
        var fileTransfer = this.file_transfer_object.create();
        var path = this.file_object.dataDirectory + 'icons/';
        var db = this.db;
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            if (data.image != '') {
                var image_name = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](data.image.split("/"));
                fileTransfer.download(data.image, path + image_name).then(function (entry) {
                    var image_url = 'icons/' + image_name;
                    var querystring = " UPDATE whatsnew SET local_image_url = '" + image_url + "' WHERE id = " + data.id;
                    db.executeSql(querystring, []);
                });
            }
        });
    };
    DatabaseProvider.prototype.getWhatsnewSectionTitleData = function (user_type) {
        var _this = this;
        this.http_service_object.getWhatsnewSectionTitleData().subscribe(function (data) {
            _this.bulkInsertWhatsnewTitle(data, user_type);
        }, function (err) {
            //console.log('err->'+err);
        });
        var data = [];
        this.bulkInsertWhatsnewTitle(data, user_type);
    };
    DatabaseProvider.prototype.bulkInsertWhatsnewTitle = function (apiData, user_type) {
        var drop_whatsnewtitle = 'DROP TABLE IF EXISTS whatsnewtitle';
        var create_whatsnewtitle = 'CREATE TABLE IF NOT EXISTS whatsnewtitle (id INTEGER PRIMARY KEY, name TEXT, type TEXT, is_for TEXT, screen TEXT, is_active INTEGER)';
        var insert_whatsnewtitle_query = "INSERT INTO whatsnewtitle (id, name, type, is_for, screen, is_active) VALUES ";
        var insert_whatsnewtitle_query_data = '';
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
            if (data.isFor == user_type || data.isFor == 'all') {
                insert_whatsnewtitle_query_data += "(" + data.id + ", '" + data.cvvalue + "','" + data.cvkey + "', '" + data.isFor + "', '" + data.screen + "', " + data.isActive + "),";
            }
        });
        insert_whatsnewtitle_query_data = insert_whatsnewtitle_query_data.replace(/,\s*$/, ";");
        if (insert_whatsnewtitle_query_data != '') {
            insert_whatsnewtitle_query += insert_whatsnewtitle_query_data;
        }
        this.openDatabase().then(function (db) {
            db.executeSql(drop_whatsnewtitle, []);
            db.executeSql(create_whatsnewtitle, []);
            if (insert_whatsnewtitle_query_data != '') {
                db.executeSql(insert_whatsnewtitle_query, []);
            }
        }).catch(function () {
            //console.log("2037 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.getCustomPlaylistData = function (user_id) {
        var _this = this;
        this.http_service_object.getCustomPlaylistData(user_id).subscribe(function (result) {
            _this.bulkInsertCustomPlaylist(result, user_id);
        });
    };
    DatabaseProvider.prototype.bulkInsertCustomPlaylist = function (apiData, user_id) {
        var drop_customplaylist = 'DROP TABLE IF EXISTS custom_playlist';
        var create_customplaylist = 'CREATE TABLE IF NOT EXISTS custom_playlist (id INTEGER PRIMARY KEY, name TEXT, user_id INTEGER, list_values TEXT)';
        var insert_customplaylist_query = "INSERT INTO custom_playlist (id, name, user_id, list_values) VALUES ";
        var insert_customplaylist_query_data = '';
        if (apiData.length > 0) {
            __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiData, function (data, index) {
                insert_customplaylist_query_data += "(" + data.id + ", '" + data.name + "', " + data.userId + ", '" + data.listValues + "'),";
            });
        }
        insert_customplaylist_query_data = insert_customplaylist_query_data.replace(/,\s*$/, ";");
        if (insert_customplaylist_query_data != '') {
            insert_customplaylist_query += insert_customplaylist_query_data;
        }
        this.openDatabase().then(function (db) {
            db.executeSql(drop_customplaylist, []);
            db.executeSql(create_customplaylist, []);
            if (insert_customplaylist_query_data != '') {
                db.executeSql(insert_customplaylist_query, []);
            }
        }).catch(function () {
            //console.log("2074 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.getSingleSubtopic = function (user_type, subtopic_id) {
        var _this = this;
        this.http_service_object.getSingleSubtopic(user_type, subtopic_id).subscribe(function (result) {
            _this.insertSingleSubtopic(result, user_type, subtopic_id);
        });
    };
    DatabaseProvider.prototype.insertSingleSubtopic = function (apidata, type_user, subtopic_id) {
        var _this = this;
        var query = "INSERT INTO new_sub_topics (id,name,topicId,categoryId,subTopicType,title,description,url,isPaid,copyrightInfo,sponsoredName,sponsoredLink,position,iconUrl,isStreamed,isAd,isActive,isDownloadable,timings,createdAt,updatedAt,imageName,videoName,shareUrl,tag,forum_tags,viewCount,expiryDate,duration,otherType) VALUES ";
        var subtopic_data_query = "INSERT INTO subtopic_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";
        var imageName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](apidata.iconUrl.split("/"));
        var videoName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](apidata.url.split("/"));
        subtopic_data_query += '(' + apidata.id + ', "", "", 0, 1, 0)';
        var temp_expiry_date = (apidata.expiryDate != null) ? new Date(apidata.expiryDate).getTime() : apidata.expiryDate;
        if (type_user == "doctor") {
            query += '(' + apidata.id + ', "' + apidata.name + '", ' + apidata.newTopicId + ', ' + apidata.newCategoryId + ', "' + apidata.subTopicType + '", "' + apidata.title + '", "' + apidata.description + '", "' + apidata.url + '", ' + apidata.isPaid + ', "' + apidata.copyrightInfo + '", "' + apidata.sponsoredName + '", "' + apidata.sponsoredLink + '", ' + apidata.position + ', "' + apidata.iconUrl + '", ' + apidata.isStreamed + ', ' + apidata.isAd + ', ' + apidata.isActive + ', ' + apidata.isDownloadable + ', "' + apidata.timings + '", "' + apidata.createdAt + '", "' + apidata.updatedAt + '", "' + imageName + '", "' + videoName + '","' + apidata.shareUrl + '", "' + apidata.tag + '", "' + apidata.forum_tags + '", ' + apidata.viewCount + ', "' + temp_expiry_date + '", "' + apidata.duration + '", "' + apidata.contentType + '")';
        }
        else {
            var temp_expiry_date = (apidata.expiryDate != null) ? new Date(apidata.expiryDate).getTime() : apidata.expiryDate;
            query += '(' + apidata.id + ', "' + apidata.patientFriendlyName + '", ' + apidata.newTopicId + ', ' + apidata.newCategoryId + ', "' + apidata.subTopicType + '", "' + apidata.title + '", "' + apidata.patientFriendlyDescription + '", "' + apidata.url + '", ' + apidata.isPaid + ', "' + apidata.copyrightInfo + '", "' + apidata.sponsoredName + '", "' + apidata.sponsoredLink + '", ' + apidata.position + ', "' + apidata.iconUrl + '", ' + apidata.isPatientStreamed + ', ' + apidata.isAd + ', ' + apidata.isActive + ', ' + apidata.isPatientDownloadable + ', "' + apidata.timings + '", "' + apidata.createdAt + '", "' + apidata.updatedAt + '", "' + imageName + '", "' + videoName + '","' + apidata.shareUrl + '", "' + apidata.tag + '", "' + apidata.forum_tags + '", ' + apidata.viewCount + ', "' + temp_expiry_date + '", "' + apidata.duration + '", "' + apidata.contentType + '")';
        }
        this.openDatabase().then(function (db) {
            db.executeSql(query, []);
            db.executeSql(subtopic_data_query);
            _this.storage_object.get('user_logged_in').then(function (val) {
                if (val != 0) {
                    _this.getFavoritesAPIData(val);
                    _this.getDownloadsAPIData(val);
                }
            });
            _this.downloadSinglSubtopic(subtopic_id);
        }).catch(function () {
            //console.log("2121 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.downloadSinglSubtopic = function (subtopic_id) {
        var _this = this;
        // gets all undownloaded 
        var subtopic_query = new Array(" JOIN subtopic_data ON subtopic_data.id = new_sub_topics.id WHERE new_sub_topics.subtopic_data.id =" + subtopic_id);
        this.fetchAllData('new_sub_topics', subtopic_query).then(function (subtopic_result) {
            if (subtopic_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'icons/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](subtopic_result.length, function (i) {
                    // Download specific image
                    //var imagename = subtopic_result[i].iconUrl.split("/").pop();
                    var imagename = subtopic_result[i].imageName;
                    fileTransfer.download(subtopic_result[i].iconUrl, path + imagename).then(function (entry) {
                        var icon_url = 'icons/' + imagename;
                        var querystring = " UPDATE subtopic_data SET localIconUrl = '" + icon_url + "' WHERE id = " + subtopic_result[i].id;
                        db.executeSql(querystring, []);
                    });
                });
            }
        });
        var subtopic_query = new Array(" JOIN subtopic_data ON subtopic_data.id = new_sub_topics.id WHERE new_sub_topics.subtopic_data.id =" + subtopic_id);
        this.fetchAllData('new_sub_topics', subtopic_query).then(function (drawon_result) {
            if (drawon_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'drawon/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](drawon_result.length, function (i) {
                    // Download specific image
                    //var filename = drawon_result[i].url.split("/").pop();
                    var filename = drawon_result[i].videoName;
                    fileTransfer.download(drawon_result[i].url, path + filename).then(function (entry) {
                        var drawon_image_url = 'drawon/' + filename;
                        var drawon_query = " UPDATE subtopic_data SET localUrl = '" + drawon_image_url + "' WHERE id = " + drawon_result[i].id;
                        db.executeSql(drawon_query, []);
                    });
                });
            }
        });
    };
    DatabaseProvider.prototype.getSingleInformation = function (user_type, info_id) {
        var _this = this;
        this.http_service_object.getSingleInformation(user_type, info_id).subscribe(function (result) {
            _this.insertSingleInformation(result, user_type, info_id);
        });
    };
    DatabaseProvider.prototype.insertSingleInformation = function (apidata, type_user, info_id) {
        var _this = this;
        var information_query = "INSERT INTO information (id, name, topicId, categoryId, channelId, description, url, isPaid, copyrightInfo, sponsoredName, sponsoredLink, position, iconUrl, isStreamed, isAd, isActive, isDownloadable, createdAt, updatedAt, imageName, videoName, shareUrl, tag, forum_tags, viewCount, expiryDate, duration, subTopicType, otherType) VALUES ";
        var information_data_query = "INSERT INTO information_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";
        var imageName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](apidata.video_image.split("/"));
        var videoName = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["last"](apidata.video_url.split("/"));
        information_data_query += '(' + apidata.id + ', "", "", 0, 1, 0)';
        var temp_expiry_date = (apidata.expiryDate != null) ? new Date(apidata.expiryDate).getTime() : apidata.expiryDate;
        if (type_user == "doctor") {
            information_query += '(' + apidata.id + ', "' + apidata.hcp_name + '", ' + apidata.new_topicId + ', ' + apidata.new_categoryId + ', ' + apidata.channel_id + ', "' + apidata.hcp_descr + '", "' + apidata.video_url + '", ' + apidata.isPaid + ', "' + apidata.copyright + '", "' + apidata.sponsoredName + '", "' + apidata.sponsoredLink + '", ' + apidata.position + ', "' + apidata.video_image + '", ' + apidata.isStreamed + ', ' + apidata.isAd + ', ' + apidata.isActive + ', ' + apidata.isDownloadable + ', "' + apidata.createdAt + '", "' + apidata.updatedAt + '", "' + imageName + '", "' + videoName + '","' + apidata.shareUrl + '", "' + apidata.tag + '", "' + apidata.forum_tags + '", ' + apidata.viewCount + ', "' + temp_expiry_date + '", "' + apidata.duration + '", "' + apidata.type + '", "' + apidata.contentType + '")';
        }
        else {
            var temp_expiry_date = (apidata.expiryDate != null) ? new Date(apidata.expiryDate).getTime() : apidata.expiryDate;
            information_query += '(' + apidata.id + ', "' + apidata.nonhcp_name + '", ' + apidata.new_topicId + ', ' + apidata.new_categoryId + ',' + apidata.channel_id + ', "' + apidata.nonhcp_descr + '", "' + apidata.video_url + '", ' + apidata.isPaid + ', "' + apidata.copyright + '", "' + apidata.sponsoredName + '", "' + apidata.sponsoredLink + '", ' + apidata.position + ', "' + apidata.video_image + '", ' + apidata.isPatientStreamed + ', ' + apidata.isAd + ', ' + apidata.isActive + ', ' + apidata.isPatientDownloadable + ', "' + apidata.createdAt + '", "' + apidata.updatedAt + '", "' + imageName + '", "' + videoName + '","' + apidata.shareUrl + '", "' + apidata.tag + '", "' + apidata.forum_tags + '", ' + apidata.viewCount + ', "' + temp_expiry_date + '", "' + apidata.duration + '", "' + apidata.type + '", "' + apidata.contentType + '")';
        }
        this.openDatabase().then(function (db) {
            db.executeSql(information_query, []);
            db.executeSql(information_data_query, []);
            _this.storage_object.get('user_logged_in').then(function (val) {
                if (val != 0) {
                    _this.getInformationFavoritesAPIData(val);
                    _this.getInformationDownloadsAPIData(val);
                }
            });
            _this.downloadSingleInformation(info_id);
        }).catch(function () {
            //console.log("2220 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.downloadSingleInformation = function (info_id) {
        var _this = this;
        // gets all undownloaded 
        var info_query = new Array(" JOIN information_data ON information_data.id = information.id WHERE information_data.id =" + info_id);
        this.fetchAllData('information', info_query).then(function (info_result) {
            if (info_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'icons/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](info_result.length, function (i) {
                    // Download specific image
                    var imagename = info_result[i].imageName;
                    fileTransfer.download(info_result[i].iconUrl, path + imagename).then(function (entry) {
                        var icon_url = 'icons/' + imagename;
                        var querystring = " UPDATE information_data SET localIconUrl = '" + icon_url + "' WHERE id = " + info_result[i].id;
                        db.executeSql(querystring, []);
                    });
                });
            }
        });
        var info_query = new Array(" JOIN information_data ON information_data.id = information.id WHERE information.id =" + info_id);
        this.fetchAllData('information', info_query).then(function (drawon_result) {
            if (drawon_result.length > 0) {
                var fileTransfer = _this.file_transfer_object.create();
                var path = _this.file_object.dataDirectory + 'drawon/';
                var db = _this.db;
                __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["times"](drawon_result.length, function (i) {
                    // Download specific image
                    //var filename = drawon_result[i].url.split("/").pop();
                    var filename = drawon_result[i].imageName;
                    fileTransfer.download(drawon_result[i].url, path + filename).then(function (entry) {
                        var drawon_image_url = 'drawon/' + filename;
                        var drawon_query = " UPDATE information_data SET localUrl = '" + drawon_image_url + "' WHERE id = " + drawon_result[i].id;
                        db.executeSql(drawon_query, []);
                    });
                });
            }
        });
    };
    DatabaseProvider.prototype.updateUserLocalDB = function (live_id) {
        var _this = this;
        this.http_service_object.getUserInfoByLiveId(live_id).subscribe(function (data) {
            var userData = {
                "email": data.email,
                "username": data.username,
                "user_type": (data.userRoleId == 1) ? "doctor" : "patient",
                "isPaid": data.isPaid,
                "userRoleId": data.userRoleId,
                "discoveryMethodId": data.discoveryMethodId,
                "clevertapId": data.clevertapId,
                "liveId": live_id,
                "fullname": data.fullname,
                "password": data.password,
                "gender": data.gender,
                "birthyear": data.birthyear,
                "profilePic": data.profilePic,
                "medium": data.medium,
                "facebookId": data.facebookId,
                "specialities": data.specialities,
                "userRoleSubType": data.userRoleSubType,
                "verified": data.verified,
                "location": data.location,
                "state": data.state,
                "referral_code": data.referral_code,
                "referred_by": data.referred_by,
                "npi_number": data.npi_number,
                "npi_id": data.npi_id
            };
            localStorage.setItem('usrSpecialities', data.specialities);
            localStorage.setItem('location', data.location);
            localStorage.setItem('cv5usrRolesubType', data.userRoleSubType);
            _this.storeUserdata(userData);
        });
    };
    DatabaseProvider.prototype.getUserNotificationData = function (type_user) {
        var _this = this;
        this.http_service_object.inAppNotification().subscribe(function (notificationData) {
            var apiNotiData = [];
            apiNotiData = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["filter"](notificationData, function (value) {
                return (value.isFor == type_user || value.isFor == "All");
            });
            setTimeout(function () {
                _this.insertFreshNotification(apiNotiData);
            }, 1000);
        }, function (notierr) {
            //console.log('user Notification err->'+notierr);
        });
    };
    DatabaseProvider.prototype.insertFreshNotification = function (apiNotiData) {
        var drop_freshNotificationList = 'DROP TABLE IF EXISTS freshNotificationList';
        var create_table_query = 'CREATE TABLE IF NOT EXISTS freshNotificationList (id INTEGER PRIMARY KEY,  notification_id INTEGER, title TEXT,description TEXT, contentImage TEXT, list_values TEXT, contentFor TEXT, contentType TEXT, isFor TEXT,template TEXT, position INTEGER, isActive INTEGER, location TEXT, activeFrom TEXT, activeTill TEXT,createdAt TEXT, messageSeen TEXT)';
        var insert_freshNotification_query = "INSERT INTO freshNotificationList (notification_id, title, description, contentImage, list_values, contentFor, contentType, isFor, template, position, isActive, location, activeFrom, activeTill, createdAt, messageSeen) VALUES ";
        var insert_query = '';
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiNotiData, function (data, index) {
            insert_query += "(" + data.id + ",'" + data.title + "','" + data.description + "','" + data.contentImage + "', '" + data.contentList + "', '" + data.contentFor + "', '" + data.contentType + "', '" + data.isFor + "', '" + data.template + "', '" + data.position + "', '" + data.isActive + "', '" + data.location + "', '" + data.activeFrom + "', '" + data.activeTill + "', '" + data.createdAt + "', '" + data.messageSeen + "'),";
        });
        insert_query = insert_query.replace(/,\s*$/, ";");
        if (insert_query != '') {
            insert_freshNotification_query += insert_query;
        }
        this.openDatabase().then(function (db) {
            db.executeSql(drop_freshNotificationList, []);
            db.executeSql(create_table_query, []);
            db.executeSql(insert_freshNotification_query, []).then(function (inserNotidata) {
            }, function (insertNotidataerr) {
                return [];
            });
        }).catch(function () {
            //console.log("2358 Promise Rejected");
        });
    };
    DatabaseProvider.prototype.newNotificationData = function (type_user) {
        var _this = this;
        this.http_service_object.newNotificationSync(localStorage.getItem('notificationID')).subscribe(function (notificationData) {
            var apiNotiData = [];
            apiNotiData = __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["filter"](notificationData, function (value) {
                return (value.isFor == type_user || value.isFor == "All");
            });
            setTimeout(function () {
                _this.insertNewNotificationSync(apiNotiData);
            }, 1000);
        }, function (notierr) {
            //console.log('user Notification err->'+notierr);
        });
    };
    DatabaseProvider.prototype.insertNewNotificationSync = function (apiNotiData) {
        var insert_freshNotification_query = "INSERT INTO freshNotificationList (notification_id, title, description, contentImage, list_values, contentFor, contentType, isFor, template, position, isActive, location, activeFrom, activeTill, createdAt, messageSeen) VALUES ";
        var insert_query = '';
        __WEBPACK_IMPORTED_MODULE_2_underscore_underscore__["each"](apiNotiData, function (data, index) {
            insert_query += "(" + data.id + ",'" + data.title + "','" + data.description + "','" + data.contentImage + "', '" + data.contentList + "', '" + data.contentFor + "', '" + data.contentType + "', '" + data.isFor + "', '" + data.template + "', '" + data.position + "', '" + data.isActive + "', '" + data.location + "', '" + data.activeFrom + "', '" + data.activeTill + "', '" + data.createdAt + "', '" + data.messageSeen + "'),";
        });
        insert_query = insert_query.replace(/,\s*$/, ";");
        if (insert_query != '') {
            insert_freshNotification_query += insert_query;
        }
        this.openDatabase().then(function (db) {
            db.executeSql(insert_freshNotification_query, []).then(function (inserNotidata) {
            }, function (insertNotidataerr) {
                return [];
            });
        }).catch(function () {
            //console.log("2402 Promise Rejected");
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite_porter__["a" /* SQLitePorter */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map