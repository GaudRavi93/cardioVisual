webpackJsonp([32],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__modal__["a" /* ModalPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_countryandrolelist_countryandrolelist__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__ = __webpack_require__(63);
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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(screenOrientation, injector) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.injector = injector;
        this.viewdata = '';
        this.email = '';
        this.username = '';
        this.msg = '';
        this.live_id = '';
        this.ioncontentClicked = false;
        this.playlist_data = [];
        this.isShow = false;
        this.ports = [];
        this.myStates = [];
        this.doctorports = [];
        this.myuserRoles = [];
        this.error_msg = '';
        this.visitSite = function (flag) {
            if (flag == 0) {
                this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
            }
            else if (flag == 1) {
                var isAndroid = this.platform_object.is('android');
                var isios = this.platform_object.is('ios');
                if (isAndroid) {
                    this.in_app_browser_object.create('https://play.google.com/store/apps/details?id=com.cardiovisual.app', '_blank', 'location=yes');
                }
                else {
                    this.in_app_browser_object.create('https://itunes.apple.com/us/app/cardiovisual-heart-health/id1009028152?ls=1&mt=8', '_blank', 'location=yes');
                }
            }
        };
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]);
        this.view_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_loading_service__["a" /* LoadingService */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]);
        this.toast_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__services_toast_service__["a" /* ToastService */]);
        this.country_and_role_list_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]);
        this.ionic_app_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicApp */]);
        this.network_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.screen_orientation_object = injector.get(__WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__["a" /* ScreenOrientation */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]);
        this.shownContent = localStorage.getItem('shownContent');
        this.productID = localStorage.getItem('productID');
        this.localapi = this.http_service_object.getApi();
        this.network_status = 'connected';
        this.network_object.onDisconnect().subscribe(function () {
            _this.network_status = 'not_connected';
        });
        this.network_object.onConnect().subscribe(function () {
            _this.network_status = 'connected';
        });
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        this.viewdata = this.nav_params_object.get('data');
        this.locationCheck = localStorage.getItem('location');
        if (this.viewdata == 'ProfessionInfo') {
            var userRole_Id = this.nav_params_object.get('userRoleID');
            if (userRole_Id == "1") {
                this.doctorports = this.country_and_role_list_provider_object.getOnlyDoctorRoles();
            }
            else if (userRole_Id == "5") {
                this.doctorports = this.country_and_role_list_provider_object.getPatientRoles();
            }
            else {
                this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
            }
            this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
            this.myStates = this.country_and_role_list_provider_object.getUSstate();
            this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles();
        }
    };
    ModalPage.prototype.docPortChange = function (event) {
        console.log('doc port:' + event.value);
    };
    ModalPage.prototype.portChange = function (event) {
        console.log('port:' + event.value);
        if (event.value['name'] == "United States of America") {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    };
    ModalPage.prototype.stateChange = function (event) {
        console.log('stateChange value:' + JSON.stringify(event.value));
    };
    ModalPage.prototype.getGroupText = function (port, portIndex, ports) {
        if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
            return port.country.name;
        }
        return null;
    };
    ModalPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.viewdata = this.nav_params_object.get('data');
        this.storage_object.get('user_logged_in').then(function (val) {
            _this.live_id = val;
        });
        if (this.viewdata == 'forum') {
            var userdata = this.nav_params_object.get('userdata');
            this.request_from = this.nav_params_object.get('request_from');
            this.email = userdata.email;
            this.username = userdata.username;
            this.user_type = (userdata.userRoleId == 1) ? 'Doctor' : 'Patient';
            this.messageShow = (userdata.userRoleId == 1) ? "This moderated forum is for clinicians only. We request you to verify your email address and create your username" : "This is a moderated discussion forum for non-clinicians. We request you to verify your email address and create your username";
            var disabled = '';
            if (this.email != '') {
                disabled = 'true';
            }
            if (this.email != '') {
                disabled = 'true';
            }
            this.obj = { 'userEmail': this.email, 'username': this.username, 'disabled': disabled, 'user_type': this.user_type };
        }
        //if(this.viewdata == 'View Profile'){
        if (this.viewdata == 'Manage Profile') {
            this.user_data = this.nav_params_object.get('userdata');
            this.request_from = this.nav_params_object.get('request_from');
            //this.cv_subscriptionId = this.inappProvider.cv_subscriptionId();
            //this.cv_productId = this.inappProvider.cv_productId();
            //this.cv_subscriptionId_monthly = this.inappProvider.cv_subscriptionId_monthly();
            //this.shownContent = localStorage.getItem('shownContent');
        }
        if (this.viewdata == 'Add to Playlist') {
            var type = this.nav_params_object.get('type');
            this.obj = { 'playlist_name': '', 'playlist': '', 'type': type };
            this.video_data = this.nav_params_object.get('video_data');
            var live_id = localStorage.getItem('userliveId');
            var playlist_query = new Array(" WHERE user_id=" + live_id);
            this.database_provider_object.fetchAllData('custom_playlist', playlist_query).then(function (result) {
                _this.playlist_data = result;
            });
            /*this.playlist_data = [{'id':1, 'name':'Playlist 1' , 'list_values':'{"education":"", "information":""}'}, {'id':2, 'name':'Playlist 2', 'list_values':'{"education":"", "information":""}'}, {'id':3, 'name':'Playlist 3', 'list_values':'{"education":"", "information":""}'}];*/
        }
        if (this.viewdata == 'New Release') {
            this.img_Url = this.nav_params_object.get('contentUrl');
        }
    };
    ModalPage.prototype.closeModal = function () {
        // const data = {
        //   name: 'John Doe',
        //   occupation: 'Milkman'
        // };
        // this.view_controller_object.dismiss(data);
        this.view_controller_object.dismiss();
    };
    ModalPage.prototype.disclaimerpage = function (myData) {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal_controllar_object.create('ModalPage', { data: myData }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log(" on model.ts ->I have dismissed.");
            console.log(data);
        });
        myModal.onWillDismiss(function (data) {
            console.log("on model.ts -> I'm about to dismiss");
            console.log(data);
        });
    };
    ModalPage.prototype.forumDetailSubmit = function (object) {
        var _this = this;
        var first_time = 'no';
        var flag = 'go';
        var email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var username_pattern = new RegExp("^[-a-zA-Z0-9]+$");
        this.msg = '';
        if (object.disabled == '') {
            first_time = 'yes';
        }
        if (object.userEmail == '') {
            this.msg += 'Please enter email';
            flag = 'stop';
        }
        if (object.username == '') {
            this.msg += 'Please enter username.';
            flag = 'stop';
        }
        if (object.userEmail != '' && (!email_pattern.test(object.userEmail))) {
            this.msg += 'Please enter proper email.';
            flag = 'stop';
        }
        this.http_service_object.checkEmailExists(object.userEmail).subscribe(function (data) {
            if (object.userEmail != '' && first_time == 'yes' && data.length > 0) {
                flag = 'stop';
                _this.msg += 'The email has already been taken.';
            }
            else {
                flag = 'stop';
            }
        });
        if (object.username != '' && (object.username.length < 4) || (object.username.length > 16)) {
            this.msg += 'Username should be 4 to 16 letters long.' + '<br/>';
            flag = 'stop';
        }
        else if (object.username != '' && (!username_pattern.test(object.username))) {
            this.msg += 'The username may only contain letters, numbers and dashes.';
            flag = 'stop';
        }
        else {
            flag = 'stop';
        }
        if (this.msg == '') {
            this.view_controller_object.dismiss();
            object.username = object.username.toLowerCase();
            this.database_provider_object.updateUserinfoForForum(this.live_id, { 'email': object.userEmail, 'username': object.username });
            if (!(this.request_from == 'view_profile')) {
                this.redirectToForumDashboard({ 'email': object.userEmail, 'username': object.username, 'first_time': first_time, 'user_type': object.user_type });
            }
        }
    };
    ModalPage.prototype.redirectToForumDashboard = function (object) {
        var _this = this;
        var text_arr = [object.username, object.email, object.first_time];
        var text = JSON.stringify(text_arr);
        //var text = 'abhishek#*#abbhishek.chavan+1@oneleap.in#*#no';//+object.email+'#*#'+object.first_time;
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
    ModalPage.prototype.setUsername = function (user_data) {
        var _this = this;
        var user_query = new Array("");
        this.database_provider_object.fetchAllData('new_user_info', user_query).then(function (userresult) {
            var myModalOptions = {
                enableBackdropDismiss: false
            };
            var myModal = _this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata: userresult[0], request_from: 'view_profile' }, myModalOptions);
            myModal.present();
        });
    };
    ModalPage.prototype.chatwithus = function () {
        var usrType = '';
        var userEmail = localStorage.getItem('cv5userEmail');
        var name = userEmail.substring(0, userEmail.lastIndexOf("@"));
        var userRoleId = localStorage.getItem('cv5userRoleId');
        var userType = (userRoleId == '1') ? "doctor" : "patient";
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
            "userRoleId": userRoleId,
            "userType": usrType,
            "organisation": "CardioVisual"
        };
        (window.Freshchat).updateUserProperties(userProperties);
        //window.Freshchat.setExternalID('sanjeev.kumar@oneleap.in');
        (window.Freshchat).showConversations();
    };
    ModalPage.prototype.editProfile = function () {
        var _this = this;
        this.storage_object.get('user_logged_in').then(function (val) {
            var text_arr = [val];
            var text = JSON.stringify(text_arr);
            var encode_string = window.btoa(text);
            var browser = _this.in_app_browser_object.create('https://profile.cardiovisual.com/user/' + encode_string, '_blank', 'location=no,hardwareback=yes,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
            browser.on('loadstop').subscribe(function (event) {
                _this.screen_orientation_object.unlock();
            });
            browser.on('exit').subscribe(function (event) {
                _this.screen_orientation_object.lock(_this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                _this.updateLocalDB();
                _this.closeModal();
            });
        });
    };
    ModalPage.prototype.radiocheck = function (value) {
        var loader = document.getElementById("create_playlist");
        if (value == 'create_new') {
            loader.style.display = 'block';
        }
        else {
            loader.style.display = 'none';
            //loader = '';
        }
    };
    ModalPage.prototype.playlistSubmit = function (object) {
        var _this = this;
        this.msg = '';
        if (object.playlist == '') {
            this.msg = 'Select atleast 1 Playlist';
        }
        if (object.playlist == 'create_new' && object.playlist_name == '') {
            this.msg = 'Please enter playlist name.';
        }
        var test = '';
        var live_id = localStorage.getItem('userliveId');
        var post_url = this.http_service_object.getPosturl('userplaylists');
        switch (true) {
            case (this.msg == '' && object.playlist == 'create_new' && object.type == 'information'):
                test = '{"education":[],"information":[' + this.video_data.id + ']}';
                var insert_sql = new Array("Insert into custom_playlist(name, user_id, list_values) values ('" + object.playlist_name + "', " + live_id + ", '" + test + "')");
                this.database_provider_object.updateData(insert_sql);
                this.http_object.post(post_url, { "name": object.playlist_name, "userId": this.live_id, "listValues": test }).subscribe(function (data) {
                    var response = JSON.parse(data['_body']);
                    localStorage.setItem('temPlaylistID', response.id);
                });
                this.closeModal();
                this.toast_service_object.presentToast("Video added to Playlist.");
                break;
            case (this.msg == '' && object.playlist == 'create_new' && object.type == 'education'):
                test = '{"education":[' + this.video_data.id + '],"information":[]}';
                var insert_sql = new Array("Insert into custom_playlist(name, user_id, list_values) values ('" + object.playlist_name + "', " + live_id + ", '" + test + "')");
                this.database_provider_object.updateData(insert_sql);
                this.http_object.post(post_url, { "name": object.playlist_name, "userId": this.live_id, "listValues": test }).subscribe(function (data) {
                    var response = JSON.parse(data['_body']);
                    localStorage.setItem('temPlaylistID', response.id);
                });
                this.closeModal();
                this.toast_service_object.presentToast("Video added to Playlist.");
                break;
            case (this.msg == '' && object.playlist != 'create_new' && object.type == 'information' && object.playlist == '1'):
                var custom_playlist = new Array(" WHERE id=" + object.playlist);
                this.database_provider_object.fetchAllData('custom_playlist', custom_playlist).then(function (custom_playlist_data) {
                    var list_values = JSON.parse(custom_playlist_data[0].list_values);
                    list_values.information.push(_this.video_data.id);
                    list_values.information = __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["uniq"](list_values.information);
                    list_values = JSON.stringify(list_values);
                    var custom_playlist_api_data = { "listValues": list_values };
                    _this.playListID = localStorage.getItem('temPlaylistID');
                    _this.http_object.put(post_url + "/" + _this.playListID, custom_playlist_api_data).subscribe(function (data) { });
                    var update_query = new Array("UPDATE custom_playlist SET list_values='" + list_values + "' WHERE id=" + object.playlist);
                    _this.database_provider_object.updateData(update_query);
                });
                this.closeModal();
                this.toast_service_object.presentToast("Video added to Playlist.");
                break;
            case (this.msg == '' && object.playlist != 'create_new' && object.type == 'education' && object.playlist == '1'):
                var custom_playlist = new Array(" WHERE id=" + object.playlist);
                this.database_provider_object.fetchAllData('custom_playlist', custom_playlist).then(function (custom_playlist_data) {
                    var list_values = JSON.parse(custom_playlist_data[0].list_values);
                    list_values.education.push(_this.video_data.id);
                    list_values.education = __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["uniq"](list_values.education);
                    list_values = JSON.stringify(list_values);
                    var custom_playlist_api_data = { "listValues": list_values };
                    _this.playListID = localStorage.getItem('temPlaylistID');
                    _this.http_object.put(post_url + "/" + _this.playListID, custom_playlist_api_data).subscribe(function (data) { });
                    var update_query = new Array("UPDATE custom_playlist SET list_values='" + list_values + "' WHERE id=" + object.playlist);
                    _this.database_provider_object.updateData(update_query);
                });
                this.closeModal();
                this.toast_service_object.presentToast("Video added to Playlist.");
                break;
            case (this.msg == '' && object.playlist != 'create_new' && object.type == 'information' && object.playlist != '1'):
                var custom_playlist = new Array(" WHERE id=" + object.playlist);
                this.database_provider_object.fetchAllData('custom_playlist', custom_playlist).then(function (custom_playlist_data) {
                    var list_values = JSON.parse(custom_playlist_data[0].list_values);
                    list_values.information.push(_this.video_data.id);
                    list_values.information = __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["uniq"](list_values.information);
                    list_values = JSON.stringify(list_values);
                    var custom_playlist_api_data = { "listValues": list_values };
                    _this.playListID = object.playlist;
                    _this.http_object.put(post_url + "/" + _this.playListID, custom_playlist_api_data).subscribe(function (data) { });
                    var update_query = new Array("UPDATE custom_playlist SET list_values='" + list_values + "' WHERE id=" + object.playlist);
                    _this.database_provider_object.updateData(update_query);
                });
                this.closeModal();
                this.toast_service_object.presentToast("Video added to Playlist.");
                break;
            case (this.msg == '' && object.playlist != 'create_new' && object.type == 'education' && object.playlist != '1'):
                var custom_playlist = new Array(" WHERE id=" + object.playlist);
                this.database_provider_object.fetchAllData('custom_playlist', custom_playlist).then(function (custom_playlist_data) {
                    var list_values = JSON.parse(custom_playlist_data[0].list_values);
                    list_values.education.push(_this.video_data.id);
                    list_values.education = __WEBPACK_IMPORTED_MODULE_9_underscore_underscore__["uniq"](list_values.education);
                    list_values = JSON.stringify(list_values);
                    var custom_playlist_api_data = { "listValues": list_values };
                    _this.playListID = object.playlist;
                    _this.http_object.put(post_url + "/" + _this.playListID, custom_playlist_api_data).subscribe(function (data) { });
                    var update_query = new Array("UPDATE custom_playlist SET list_values='" + list_values + "' WHERE id=" + object.playlist);
                    _this.database_provider_object.updateData(update_query);
                });
                this.closeModal();
                this.toast_service_object.presentToast("Video added to Playlist.");
                break;
        }
    };
    ModalPage.prototype.updateLocalDB = function () {
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
    ModalPage.prototype.onProfessionSubmit = function () {
        var _this = this;
        var country = this.port;
        var usaState = this.myState;
        var doctor = this.doctorport;
        var doctor_code = doctor['doctorcode'];
        var splitTest = doctor_code.split(":");
        var specialities = splitTest[0];
        var sub_Specialities = splitTest[1];
        var activePortal = this.ionic_app_object._modalPortal.getActive();
        var userData = new Array("");
        this.database_provider_object.fetchAllData('new_user_info', userData).then(function (userlaunchresult) {
            var liveId = userlaunchresult[0].liveId;
            var password = userlaunchresult[0].password;
            switch (true) {
                case (_this.network_status != 'connected'):
                    _this.toast_controller_object.create({
                        message: 'You are Offline',
                        duration: 3000,
                        position: 'bottom'
                    }).present();
                    break;
                case (_this.network_status == 'connected' && (typeof doctor === "undefined" || doctor == '')):
                    _this.error_msg = "Please Select Your Profession";
                    break;
                case (_this.network_status == 'connected' && doctor != '' && (typeof country === "undefined" || country == '') && _this.locationCheck == '' && _this.isShow == true && (typeof usaState === "undefined" || usaState == '') && _this.locationCheck == ''):
                    _this.error_msg = '';
                    _this.loading_service_object.show();
                    var usercountry = "";
                    _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + liveId, { "location": usercountry, "state": usa_State_code, "specialities": specialities, "userRoleSubType": sub_Specialities }).subscribe(function (locationInsertSuccess) {
                        var response = JSON.parse(locationInsertSuccess['_body']);
                        var doctor = '';
                        var country = '';
                        var usaState = '';
                        _this.updateLocalDBforProfession(response, password);
                        localStorage.setItem('professionSubmit', 'yes');
                        setTimeout(function () {
                            _this.loading_service_object.hide();
                            if (activePortal) {
                                activePortal.dismiss();
                                return;
                            }
                        }, 3000);
                    }, function (locationInsertError) {
                        _this.loading_service_object.hide();
                    });
                    break;
                case (_this.network_status == 'connected' && doctor != '' && _this.locationCheck != '' && _this.isShow):
                    _this.error_msg = '';
                    _this.loading_service_object.show();
                    var usercountry = localStorage.getItem('location');
                    var usa_State_code = localStorage.getItem('State_code');
                    _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + liveId, { "location": usercountry, "state": usa_State_code, "specialities": specialities, "userRoleSubType": sub_Specialities }).subscribe(function (locationInsertSuccess) {
                        var response = JSON.parse(locationInsertSuccess['_body']);
                        var doctor = '';
                        var country = '';
                        var usaState = '';
                        _this.updateLocalDBforProfession(response, password);
                        localStorage.setItem('professionSubmit', 'yes');
                        setTimeout(function () {
                            _this.loading_service_object.hide();
                            if (activePortal) {
                                activePortal.dismiss();
                                return;
                            }
                        }, 3000);
                    }, function (locationInsertError) {
                        _this.loading_service_object.hide();
                    });
                    break;
                case (_this.network_status == 'connected' && doctor != '' && country != '' && _this.isShow == true):
                    _this.error_msg = '';
                    _this.loading_service_object.show();
                    var usercountry = country['name'];
                    var usa_State = usaState['name'];
                    var usa_State_code = usaState['code'];
                    _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + liveId, { "location": usercountry, "state": usa_State_code, "specialities": specialities, "userRoleSubType": sub_Specialities }).subscribe(function (locationInsertSuccess) {
                        var response = JSON.parse(locationInsertSuccess['_body']);
                        var doctor = '';
                        var country = '';
                        var usaState = '';
                        _this.updateLocalDBforProfession(response, password);
                        localStorage.setItem('professionSubmit', 'yes');
                        setTimeout(function () {
                            _this.loading_service_object.hide();
                            if (activePortal) {
                                activePortal.dismiss();
                                return;
                            }
                        }, 3000);
                    }, function (locationInsertError) {
                        _this.loading_service_object.hide();
                    });
                    break;
                case (_this.network_status == 'connected' && doctor != '' && _this.locationCheck == '' && _this.isShow == false):
                    _this.error_msg = '';
                    _this.loading_service_object.show();
                    var usercountry = "";
                    var usa_State = "";
                    var usa_State_code = "";
                    _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + liveId, { "location": usercountry, "state": usa_State_code, "specialities": specialities, "userRoleSubType": sub_Specialities }).subscribe(function (locationInsertSuccess) {
                        var response = JSON.parse(locationInsertSuccess['_body']);
                        var doctor = '';
                        var country = '';
                        var usaState = '';
                        _this.updateLocalDBforProfession(response, password);
                        localStorage.setItem('professionSubmit', 'yes');
                        setTimeout(function () {
                            _this.loading_service_object.hide();
                            if (activePortal) {
                                activePortal.dismiss();
                                return;
                            }
                        }, 3000);
                    }, function (locationInsertError) {
                        _this.loading_service_object.hide();
                    });
                    break;
                case (_this.network_status == 'connected' && doctor != '' && _this.locationCheck != '' && _this.isShow == false):
                    _this.error_msg = '';
                    _this.loading_service_object.show();
                    var usercountry = localStorage.getItem('location');
                    var usa_State_code = localStorage.getItem('State_code');
                    _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + liveId, { "location": usercountry, "state": usa_State_code, "specialities": specialities, "userRoleSubType": sub_Specialities }).subscribe(function (locationInsertSuccess) {
                        var response = JSON.parse(locationInsertSuccess['_body']);
                        var doctor = '';
                        var country = '';
                        var usaState = '';
                        _this.updateLocalDBforProfession(response, password);
                        localStorage.setItem('professionSubmit', 'yes');
                        setTimeout(function () {
                            _this.loading_service_object.hide();
                            if (activePortal) {
                                activePortal.dismiss();
                                return;
                            }
                        }, 3000);
                    }, function (locationInsertError) {
                        _this.loading_service_object.hide();
                    });
                    break;
                case (_this.network_status == 'connected' && doctor != '' && country != '' && _this.isShow == false):
                    _this.error_msg = '';
                    _this.loading_service_object.show();
                    var usercountry = country['name'];
                    var usa_State_code = localStorage.getItem('State_code');
                    _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + liveId, { "location": usercountry, "state": usa_State_code, "specialities": specialities, "userRoleSubType": sub_Specialities }).subscribe(function (locationInsertSuccess) {
                        var response = JSON.parse(locationInsertSuccess['_body']);
                        var doctor = '';
                        var country = '';
                        var usaState = '';
                        _this.updateLocalDBforProfession(response, password);
                        localStorage.setItem('professionSubmit', 'yes');
                        setTimeout(function () {
                            _this.loading_service_object.hide();
                            if (activePortal) {
                                activePortal.dismiss();
                                return;
                            }
                        }, 3000);
                    }, function (locationInsertError) {
                        _this.loading_service_object.hide();
                    });
                    break;
            }
        });
    };
    ModalPage.prototype.updateLocalDBforProfession = function (data, password) {
        var liveId = data.id;
        var userData = {
            "email": data.email,
            "user_type": (data.userRoleId == 1) ? "doctor" : "patient",
            "isPaid": data.isPaid,
            "userRoleId": data.userRoleId,
            "discoveryMethodId": data.discoveryMethodId,
            "clevertapId": data.clevertapId,
            "liveId": liveId,
            "fullname": data.fullname,
            "password": password,
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
        this.database_provider_object.storeUserdata(userData);
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="viewdata != \'forum\'"><b>{{viewdata}}</b></ion-title>\n    <ion-title *ngIf="viewdata == \'forum\'"><b>Discuss</b></ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="viewdata == \'New Release\'">\n  <div class="zoom">\n    <img class="cover" alt="" src="{{img_Url}}">\n  </div>\n</ion-content>\n\n<ion-content padding *ngIf="viewdata == \'How to Share\'">\n    <!-- <div *ngIf="isTablet">\n        <img class="cover" src="assets/images/how_to_tablet.jpg">\n    </div> -->\n    <!-- <div *ngIf="!isTablet">\n        <img class="cover" src="assets/images/how_to_phone.jpg">\n    </div> -->\n    <div class="zoom">\n      <!-- <img class="cover" alt="" src="assets/images/how_to_phone.jpg"> -->\n      <img class="cover" alt="" src="https://static.cardiovisual.com/images/cvapp/how_to_share-tablet.jpg">\n    </div>\n</ion-content>\n\n<ion-content class="popup-content" style="padding:0 16px;" scroll="false" padding *ngIf="viewdata == \'About Us\'">\n    <!-- <img src="img/icon.png" alt="" class="about-logo"> -->\n    <img src="assets/images/icon.png" alt="" class="about-logo">\n    <div class="row align-center margin-0">Developed by practicing cardiologists, CardioVisual provides a vast library of educational videos and illustrations from trusted sources to help patients clearly understand complex cardiac and vascular conditions, treatments, procedures and devices.</div>            \n    <div class="row popup-row">\n        <div class="col secondDiv">\n            <div class="row color-b" style="padding: 0;">\n                <div class="col" (click)="visitSite(1)"><a target=\'_blank\' href="javascript:void(0);" style="color:#0073D6;">Info and Support</a></div>\n            </div>\n            <!-- <div class="row color-b" style="margin-top: 0px;padding: 0;"> -->\n            <div class="row color-b" style="padding: 0;">\n                <div class="col" (click)="disclaimerpage(\'Disclaimer\');"><a target=\'_blank\' href="javascript:void(0);" style="color:#0073D6;">Disclaimer</a></div>\n            </div>\n            <div class="row color-b" style="padding: 0;">\n                <div class="col" (click)="visitSite(0)"><a target=\'_blank\' href="javascript:void(0);" style="color:#0073D6;">End User License Agreement</a></div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n\n<ion-content  padding *ngIf="viewdata == \'Privacy Policy\'">\n  <div style="padding:16px;">\n    <p class="text-center"><img src="assets/images/cv-logo-subscription.png" alt="" class="static-page-logo" ></p>\n    <h3><em>Your privacy is critically important to us. MedicalVisual,Inc 2019 operates under a few fundamental principles:</em></h3>\n    <p>We don&rsquo;t ask you for personal information unless we truly need it. (We can&rsquo;t stand services that ask you for things like your gender or income level for no apparent reason.)</p>\n    <p>We don&rsquo;t share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</p>\n    <p>We don&rsquo;t store personal information on our servers unless required for the ongoing operation of one of our services.</p>\n    <p>Below is our privacy policy, which incorporates these goals.</p>\n    <p>If you have questions about deleting or correcting your personal data \n    <!-- <p>If you have questions about deleting or correcting your personal data please contact us at <a href="mailto:info@cardiovisual.com?Subject=Question%20regarding%20my%20account%20information">info@cardiovisual.com</a> -->\n    <span style="text-decoration: underline; color: #f06262 !important;" (click)="chatwithus()"> <b>Please contact us</b></span>\n    .</p>\n    <p>It is MedicalVisual&rsquo;s policy to respect your privacy regarding any information we may collect while operating our apps.</p>\n    <h3>Gathering of Personally-Identifying Information</h3>\n    <p>MedicalVisual,Inc 2019, via its CardioVisual app, collects &mdash; but does not distribute in any way &mdash; personally identifiable information (PII).\n    <p>MedicalVisual may disclose to third party services certain personally identifiable information listed below:\n    a.)information you provide us such as email, device IMEI number.\n    b.)information we collect as you access and use our service, including device information, location and network carrier\n    This information is shared with third party service providers so that we can:\n    a.)personalize the app for you \n    b.)perform behavioral analytics</p>\n    <p>From time to time, MedicalVisual may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its apps.</p>\n    <h3>Protection of Certain Personally-Identifying Information</h3>\n    <p>MedicalVisual discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on MedicalVisual&rsquo;s behalf, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using the CardioVisual app, you consent to the transfer of such information to them. MedicalVisual will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, MedicalVisual discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when MedicalVisual believes in good faith that disclosure is reasonably necessary to protect the property or rights of MedicalVisual, third parties or the public at large. If you are a user of the CardioVisual app, and have supplied your email address, MedicalVisual may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what&rsquo;s going on with MedicalVisual and our products. We expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. MedicalVisual takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>\n    <h3>Business Transfers</h3>\n    <p>If MedicalVisual or substantially all of its assets, were acquired, or in the unlikely event that MedicalVisual goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of MedicalVisual may continue to use your personal information as set forth in this policy.</p>\n    <h3>Privacy Policy Changes</h3>\n    <p>Although most changes are likely to be minor, MedicalVisual may change its Privacy Policy from time to time, and in MedicalVisual&rsquo;s sole discretion. MedicalVisual encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this app after any change in this Privacy Policy will constitute your acceptance of such change.</p>\n  </div>\n</ion-content>\n\n<ion-content padding class="disclaimer-popup-content "*ngIf="viewdata == \'Disclaimer\'">\n    <div style="padding:16px;">\n        <p><b>Disclaimer:</b></p>\n        <p>The content of this application are for informational purposes only and is not intended to be a \n        substitute for professional medical advice, diagnosis or treatment. The content for this CardioVisual\n        app comes from a variety of sources with appropriate copyright release agreements. </p>\n        \n        <p>We thank these companies and sources for granting the permission to use the animation videos and graphics. \n          CardioVisual does not assume any responsibility for the medical care and treatment of patients, or any \n        clinical decisions related thereto. CardioVisual is not responsible for errors or omissions, or \n        consequences from application of the information presented, and make no warranty, express or \n        implied, with respect to the currency, completeness or accuracy of the contents of this application. </p>\n        \n        <p>Reference in this application to any specific commercial product, service, manufacturer or company \n        does not constitute its endorsement or recommendation by CardioVisual or your medical provider. \n        </p>\n        <br><br><br>\n    </div>\n</ion-content>\n\n\n<ion-content  padding *ngIf="viewdata == \'forum\'">\n    <div style="">\n        <p style="text-align:center;">{{messageShow}}</p>\n        <br /><br />\n        <div class="error">{{msg}}</div> \n        <br />  \n        <form name="ForumDetailForm"> \n          <div>\n            <label style="">Email</label><br />\n            <input type="email" id="email" name="email" required placeholder="Email" [(ngModel)]="obj.userEmail" disabled="{{obj.disabled}}"/>  \n          </div>\n          <br />\n          <div>\n            <label style="">Create your Username</label><br />\n            <input type="text" min="4" max="16" id="username" name="username" required placeholder="Username"  [(ngModel)]="obj.username"/>\n          </div>\n          <br/>\n          <div class="">\n            <button class="button-btn-inappnew" type="submit" (click)="forumDetailSubmit(obj)">Proceed</button>\n          </div>\n        </form>\n        \n    </div>\n</ion-content>\n\n<ion-content padding class="popup-content"  *ngIf="viewdata == \'Subscription Terms\'">\n    <div class="">\n        <p class="text-center"><img src="assets/images/cv-logo-subscription.png" alt="" class="static-page-logo" ></p>\n        <h2><span style="color: #000000;"><span><span style="font-size: small;">Subscriber Accounts</span></span></span></h2>\n        <p><span style="font-family: Times, serif;"><span style="font-size: small;"><span style="color: #000000;"><span>If you create a subscriber account for CardioVisual app, you agree to complete the registration process by providing current, complete, and accurate information as required by MedicalVisual. You are responsible for all activities that occur under your account. You agree to notify MedicalVisual immediately of any unauthorized use of your account or any other breach of security. MedicalVisual will not be liable for any loss that you may incur as a result of someone else using your account, either with or without your knowledge. In addition, you may be held liable for any losses incurred by MedicalVisual or another party due to someone else using your account. You may not use anyone else’s account at any time.</span></span></span></span></p>\n        <p><span style="color: #333333;"><span><span style="font-size: small;"><b>1. Subscription, Purchase, Free Trials, Payment methods and Cancellation</b></span></span></span></p>\n        <p><span style="color: #333333;"><span><span style="font-size: small;"><b>a. Subscription and Purchase</b></span></span></span></p>\n        <p><span style="color: #222222;"><span><span style="font-size: small;"> Payment will be charged to iTunes or Play Store account at confirmation of purchase. Subscription will automatically renew unless auto-renew is turned off at least 24-hours before the end of the current period. Account will be charged for renewal within 24-hours prior to the end of the current period, and identify the cost of the renewal. Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user’s Account Settings after purchase. </span></span></span><span style="color: #333333;"><span><span style="font-size: small;">We reserve the right to modify, terminate or otherwise amend our offered subscription or purchase plans.</span></span></span></p>\n        <p><span style="color: #333333;"><span><span style="font-size: small;"><b>b. Free Trials</b></span></span></span></p>\n        <p><span style="color: #333333;"><span><span style="font-size: small;"> Your CardioVisual subscription or purchase may start with a free trial. The free trial period lasts for one week, or as otherwise specified during sign-up. For combinations with other offers, restrictions may apply. </span></span></span></p>\n        <p><span style="color: #333333;"><span><span style="font-size: small;"> We reserve the right to adjust pricing for our service or any components thereof in any manner and at any time as we may determine in our sole and absolute discretion. Except as otherwise expressly provided for in these Terms of Use, any price changes to your service will be notified via iTunes or Play Store accounts.</span></span></span></p>\n        <p><span style="color: #333333;"><span><span style="font-size: small;"><b>c. Payment Methods.</b></span></span></span><span style="color: #333333;"><span><span style="font-size: small;">&nbsp;</span></span></span></p>\n        <p><span style="color: #222222;"><span><span style="font-size: small;"> Payment will be charged to iTunes or Play Store account at confirmation of purchase.</span></span></span></p>\n        <p><span style="color: #333333;"><span><span style="font-size: small;"><b>d. Cancellation.</b></span></span></span><span style="color: #333333;"><span><span style="font-size: small;">&nbsp;</span></span></span></p>\n        <p><span style="color: #333333;"><span><span style="font-size: small;"> You may cancel your CardioVisual subscription via iTunes or Play Store at any time, and you will continue to have access to the CardioVisual basic service without the features of the subscription or upgrade. </span></span></span><span style="color: #222222;"><span><span style="font-size: small;">Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user’s account Settings after purchase. </span></span></span><span style="color: #333333;"><span><span style="font-size: small;">We do not provide refunds or credits for any partial subscription periods. </span></span></span></p>\n    </div>\n</ion-content>\n\n<ion-content padding class="popup-content"  *ngIf="viewdata == \'Free Trial terms\'">\n  <p class="text-center"><img src="assets/images/cv-logo-subscription.png" alt="" class="static-page-logo" ></p>\n  <div class="row popup-row">\n      <div class="col secondDiv">\n          <ul class="text-left font16 subscription-terms-popup" >\n              <li>\n                  Your subscription starts with 1 week free trial.\n              </li>\n              <li>\n                  In most cases free trial requires you to provide payment details that will get billed for a subsbscription once the free trial expires.\n              </li>\n              <li *ngIf="os!=\'Android\'">\n                  If you do not wish to get billed once your trial expires, you must cancel CardioVisual premium auto-renewalable prior to expiration of your trial from your iTunes Account.\n              </li>\n              <li *ngIf="os==\'Android\'">\n                  If you do not wish to get billed once your trial expires, you must cancel CardioVisual premium auto-renewalable prior to expiration of your trial from your Google Play Account.\n              </li>\n          </ul>\n          \n      </div>\n  </div>\n</ion-content>\n\n<ion-content  padding class="popup-content" *ngIf="viewdata == \'Forum Rules\'">\n  <div style="padding:16px;">\n    <p>\n      To ensure the best possible experience for all members, we have established some basic guidelines for participation.\n    </p>  \n\n    <p>By joining and using this discussion forum, you agree that you have read and will follow these rules and guidelines. You also agree to reserve discussions and shared files and content to that best suited to the medium. This is a great medium with which to solicit the advice of your peers, benefit from their experience, and participate in an ongoing conversation. </p>\n\n    <p>Please take a moment to acquaint yourself with these important guidelines. If you have questions or feedback, please contact us. In order to preserve a climate that encourages both civil and fruitful dialogue, we reserve the right to suspend or terminate membership in this forum for anyone who violate these rules.</p>\n\n    <h3>The Rules</h3>\n    <div class="row popup-row">\n      <div class="col secondDiv">\n        <ul class="text-left font16 subscription-terms-popup" >\n          <li>\n            Don’t challenge or attack others. The discussions and comments are meant to stimulate conversation not to create contention. Let others have their say, just as you may. \n          </li>\n          <li>\n            Don’t post commercial messages on any discussion list, resource library entry, or other area where others might see it. Contact people directly with product and service information if you believe it would help them.\n          </li>\n          <li>\n            Use caution when discussing products. Information posted on the forum is available for all to see, and comments are subject to libel, slander, and antitrust laws.\n          </li>\n          <li>\n            All defamatory, abusive, profane, threatening, offensive, or illegal materials are strictly prohibited. Do not post anything that you would not want the world to see or that you would not want anyone to know came from you.\n          </li>\n          <li>\n            Please note carefully all items listed in the disclaimer and legal rules below, particularly regarding the copyright ownership of information posted.\n          </li>\n          <li>\n            Remember that other participants have the right to reproduce postings to this site unless you specify otherwise.\n          </li>\n          <li>\n            Post your message or documents only to the most appropriate topics or discussions. Do not spam several topics with the same message.\n          </li>\n        </ul>\n      \n      </div>\n    </div>\n  \n      \n    <h3>Discussion Group Etiquette</h3>\n     \n    <div class="row popup-row">\n      <div class="col secondDiv">\n          <ul class="text-left font16 subscription-terms-popup" >\n            <li>\n              State concisely and clearly the topic of your comments in the subject line. This allows members to respond  more appropriately to your posting and makes it easier for members to search the archives by subject. \n            </li>\n            <li>\n              Include only the relevant portions of the original message in your reply. Delete any header information, and put your response before the original posting. \n            </li>  \n            <li>\n              Only send a message to the entire list when it contains information that everyone can benefit from.\n            </li>  \n            <li>\n              Do not send administrative messages, such as remove me from the list. Instead, use interface to change your  settings or to remove yourself from a list. If you are changing e-mail addresses, you do not need to remove yourself from the list and rejoin under your new e-mail address. Simply change your settings. \n            </li>\n            <li>\n              Warn other list subscribers of lengthy messages either in the subject line or at the beginning of the message body with a line that says “Long Message.” \n            </li>\n          </ul>\n        </div>\n      </div>\n\n\n    <h3>The Legal Stuff</h3>\n    <p>\n      This site is provided as a service for the users of CardioVisual app. CardioVisual is not responsible for the opinions and information posted on this site by others. We disclaim all warranties with regard to information posted on this site, whether posted by CardioVisual or any third party; this disclaimer includes all implied warranties of merchantability and fitness. In no event shall CardioVisual be liable for any special, indirect, or consequential damages or any damages whatsoever resulting from loss of use, data, or profits, arising out of or in connection with the use or performance of any information posted on this site.\n    </p>\n    <p>  \n      Do not post any defamatory, abusive, profane, threatening, offensive, or illegal materials. Do not post any information or other material protected by copyright without the permission of the copyright owner. By posting material, the posting party warrants and represents that he or she owns the copyright with respect to such material or has received permission from the copyright owner. In addition, the posting party grants CardioVisual and users of this site the nonexclusive right and license to display, copy, publish, distribute, transmit, print, and use such information or other material.\n    </p>  \n    <p>\n      Messages should not be posted if they encourage or facilitate members to arrive at any agreement that either expressly or impliedly leads to price fixing, a boycott of another’s business, or other conduct intended to illegally restrict free trade. Messages that encourage or facilitate an agreement about the following subjects are inappropriate: prices, discounts, or terms or conditions of sale; salaries; profits, profit margins, or cost data; market shares, sales territories, or markets; allocation of customers or territories; or selection, rejection, or termination of customers or suppliers.\n    </p>  \n    <p>\n      CardioVisual does not actively monitor the site for inappropriate postings and does not on its own undertake editorial control of postings. However, in the event that any inappropriate posting is brought to the attention of CardioVisual we will take all appropriate action.\n    </p>\n    <p>  \n      CardioVisal reserves the right to terminate access to any user who does not abide by these guidelines.\n    </p>  \n\n    <h3>PRIVACY POLICY</h3>\n\n    <p>WE RESPECT YOUR PRIVACY</p>\n    <p>\n      Any personal information you provide to us including and similar to your name, address, telephone number and e-mail address will not be released, sold, or rented to any entities or individuals outside of our organization except as noted below.\n    </p>\n\n    <p>WITH WHOM DO WE SHARE THE PERSONAL INFORMATION WE COLLECT THROUGH THIS SITE</p>\n\n    <p>Our Service Providers. <br/>\n      We may share your personal information with companies (including our affiliates) that perform services on our behalf, for example, companies that help process credit card payments. Our service providers are required by contract to protect the confidentiality of the personal information we share with them and to use it only to provide specific services on our behalf. \n    </p>  \n\n    <h3>Business Transfers. </h3>\n    <p>\n      Your personal information may be transferred to another entity (either an affiliated entity or an unrelated third party) in connection with a merger, reorganization, dissolution or similar corporate event. If such a transfer were ever to occur, the acquiring entity’s use of your personal information will still be subject to this Privacy Policy. \n    </p>  \n\n    <h3>Government and Legal Disclosures </h3>\n    <p>\n      We may disclose the personal information we collect through this Site, when we, in good faith, believe disclosure is appropriate to comply with the law (or a court order or subpoena); to prevent or investigate a possible crime, such as fraud or identity theft; to enforce our Terms and Conditions or other agreements that govern your use of this Site; or to protect the rights, property or safety of our company, our users, or others.\n    </p>  \n\n    <h3>EXTERNAL SITES.</h3>\n    <p>\n      We are not responsible for the content of external internet sites. You are advised to read the privacy policy of external sites before disclosing any personal information.\n    </p>  \n\n    <h3>COOKIES</h3>\n    <p>\n      A “cookie” is a small data text file that is placed in your browser and allows us to recognize you each time you visit this site (personalization, etc). Cookies themselves do not contain any personal information, and we do not use cookies to collect personal information. Cookies may also be used by 3rd party content providers such as news feeds.\n    </p>  \n\n    <h3>REMEMBER THE RISKS WHENEVER YOU USE THE INTERNET</h3>\n    <p>\n      While we do our best to protect your personal information, we cannot guarantee the security of any information that you transmit to us and you are solely responsible for maintaining the secrecy of any passwords or other account information. In addition other Internet sites or services that may be accessible through our site have separate data and privacy practices independent of us, and therefore we disclaim any responsibility or liability for their policies or actions. Please contact those vendors and others directly if you have any questions about their privacy policies. For any other information please contact us using the Contact Us page.\n    </p>  \n  </div>\n</ion-content> \n\n<ion-content padding class="popup-content" *ngIf="viewdata == \'Manage Profile\'">\n  <div style="">\n\n    <div style="font-size: 2rem;border-bottom:1px solid #e7e7e7;">\n      <p style="text-align: left;">Full Name :\n        <span style="font-weight: 500;float: right;">{{user_data.full_name}}</span>\n      </p>\n    </div>\n    \n    <div style="font-size: 2rem;border-bottom:1px solid #e7e7e7;">\n      <p style="text-align: left;">Email :\n        <span style="font-weight: 500;float: right;">{{user_data.email}}</span>\n      </p>  \n    </div>\n    \n    <!-- <div style="font-size: 2rem;border-bottom:1px solid #e7e7e7;">\n      <p style="text-align: left;">Active Plan :\n        <span class="font20 newred" style="font-weight: 500;float: right;" *ngIf="productID!= cv_subscriptionId" >CardioVisual Pro </span><br/>\n        <span class="font20 newred" style="font-weight: 500;float: right;" *ngIf="productID == cv_subscriptionId">{{shownContent == \'true\' ? "CardioVisual Premium  (Now PRO)" : "CardioVisual Pro"}} </span><br/>\n      </p>  \n    </div> -->\n\n    <div style="font-size: 2rem;border-bottom:1px solid #e7e7e7;" *ngIf="!(user_data.userRoleSubType == \'medical-device-pharma-professional\' || user_data.userRoleSubType == \'Medical Device/Pharma Professional\' || user_data.userRoleSubType == \'patient\' || user_data.userRoleSubType == \'Patient\' || user_data.userRoleSubType == \'curious-learner\' || user_data.userRoleSubType == \'Curious learner/Other\' || user_data.specialities ==\'Non-Healthcare Professional\' || user_data.specialities ==\'Healthcare Industry Professional\')">\n\n      <p style="text-align: left;">QnA Username :\n\n        <span (click)="setUsername(user_data)" *ngIf="user_data.username == undefined || user_data.username == \'undefined\' || user_data.username == \'\' || user_data.username == \'null\' || user_data.username == null " style="float: right;"><u>Set Username</u></span>\n\n        <span *ngIf=\'user_data.username != "undefined"\' style="font-weight: 500;float: right;">{{user_data.username}}</span>\n\n      </p>\n    </div>\n    \n    <div style="font-size: 2rem;border-bottom:1px solid #e7e7e7;">\n      <p style="text-align: left;">Speciality :\n        <span style="font-weight: 500;float: right;">{{user_data.specialities}}</span>\n      </p>  \n    </div>\n    \n    <div style="font-size: 2rem;border-bottom:1px solid #e7e7e7;">\n      <p style="text-align: left;">Sub Speciality :\n        <span style="font-weight: 500;float: right;">{{user_data.user_role_sub_type}}</span> \n      </p>  \n    </div>\n\n\n    <div class="mainDIV">\n      <div class="childTwo" (click)="editProfile()"><i class="icon-pencil subtopic-card-img-icon" style="color:#28bf30; font-size: 12px;"></i> <b> Edit </b>\n      </div>\n      <div class="childOne" (click)="chatwithus()"><ion-icon name="trash" style="font-size: 16px;"></ion-icon><b>Delete</b>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n<ion-content padding class="popup-content" *ngIf="viewdata == \'Add to Playlist\'">\n\n  <div class="error" style="margin-bottom: 10px;">{{msg}}</div> \n  \n  <form name="addPlaylistForm"> \n\n    <ion-list radio-group name="playlist" id="playlist" [(ngModel)]="obj.playlist" style="">\n      <ion-item style=" border-bottom:1px solid grey;" *ngFor="let playlist of playlist_data">\n        <ion-label style="color:black;">{{playlist.name}}</ion-label>\n        <ion-radio (click)="radiocheck(playlist.id)" value="{{playlist.id}}"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label style="color:black;">Create New</ion-label>\n        <ion-radio (click)="radiocheck(\'create_new\')" value="create_new"></ion-radio>\n      </ion-item>\n\n      <ion-item id="create_playlist" style="display: none;">\n        <input type="text" placeholder="Playlist Name" value="" name="playlist_name" id="playlist_name" [(ngModel)]="obj.playlist_name" style="margin-bottom: 10px;">\n      </ion-item>\n    </ion-list>\n    \n    <button class="custom-playList-btn" type="submit" (click)="playlistSubmit(obj)">Submit</button>\n    \n  </form>   \n</ion-content>\n<ion-content padding class="popup-content" *ngIf="viewdata == \'ProfessionInfo\'" (tabGotClosed)="onTabGotClosed($event)">\n\n  <div id="professionregister" class="profession-register">\n    <form name="signUpForm" novalidate=""  (ngSubmit)="onProfessionSubmit()">\n      <div class="error text-center">{{error_msg}}</div>\n        <p *ngIf="!locationCheck">\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable\n              item-content\n              name ="port"\n              [(ngModel)]="port"\n              [items]="ports"\n              itemValueField="name"\n              itemTextField="name"\n              [canSearch]="true"\n              placeholder="Select Country (Optional)"\n              (onChange)="portChange($event)">\n            </ionic-selectable>\n          </ion-item> \n        </p><br/>\n        <p *ngIf="isShow">\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable\n              item-content\n              name ="myState"\n              [(ngModel)]="myState"\n              [items]="myStates"\n              itemValueField="code"\n              itemTextField="name"\n              [canSearch]="true"\n              placeholder="Select State"\n              (onChange)="stateChange($event)">\n            </ionic-selectable>\n          </ion-item>\n          <br/> \n        </p>\n        <p>\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable \n              item-content\n              [(ngModel)]="doctorport"\n              name ="doctorport"\n              itemValueField="doctorcode"\n              itemTextField="name"\n              [items]="doctorports" \n              [canSearch]="true"\n              placeholder="Select Profession"\n              [hasVirtualScroll]="true"\n              [virtualScrollHeaderFn]="getGroupText"\n              (onChange)="docPortChange($event)">\n            </ionic-selectable>\n          </ion-item>\n        </p>       \n        <div class="text-center">\n          <button class="white-button-btn"><b>SUBMIT</b></button>\n        </div>\n    </form>\n  </div>  \n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=32.js.map