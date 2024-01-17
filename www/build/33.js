webpackJsonp([33],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_network_check_network_check__ = __webpack_require__(61);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.params = {};
        this.loader = {};
        this.error_msg = '';
        this.app_details = {};
        this.showAppleSignIn = false;
        this.platform_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]);
        this.network_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]);
        this.loading_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]);
        this.device_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__services_loading_service__["a" /* LoadingService */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_10__ionic_native_clevertap__["a" /* CleverTap */]();
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.loader = this.loading_controller_object.create({
            spinner: 'crescent'
        });
        this.username = "";
        this.password = "";
        this.data = {
            "username": "Username",
            "password": "Password",
            "register": "Register",
            "login": "Submit",
            "skip": "Skip",
            /*"logo": "assets/images/logo/login.png"*/
            "logo": "assets/images/cv-logo.png"
        };
        this.network_status = 'connected';
        this.network_object.onDisconnect().subscribe(function () {
            _this.network_status = 'not_connected';
        });
        this.network_object.onConnect().subscribe(function () {
            _this.network_status = 'connected';
        });
        this.network_check_object.getPageAction('LoginPage', 'start', '', 'All');
    }
    LoginPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.onFacebook = function () {
        this.navCtrl.push('SignupwithfacebookPage');
    };
    LoginPage.prototype.onGoogle = function () {
        this.navCtrl.push('SignupwithgooglePage');
    };
    LoginPage.prototype.openAppleSignIn = function () {
        this.navCtrl.push('SignupwithapplePage');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.showAppleSignIn = this.platform_object.is('ios');
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.network_check_object.getPageAction('WhatsNewPage', 'end', '', 'All');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.network_status == 'connected') {
            if (this.username == "") {
                this.error_msg = 'Please enter your email & password.';
            }
            else if (this.username != "" && !this.validateEmail(this.username)) {
                this.error_msg = 'Please enter valid email address';
            }
            else if (this.password == '') {
                this.error_msg = 'Please enter your password.';
            }
            else if (this.username != '' && this.password != '') {
                this.error_msg = '';
                this.loading_service_object.login();
                var password = this.database_provider_object.encode(this.password);
                var authData = {
                    'username': this.username,
                    'password': password
                };
                this.http_service_object.userAuthenticaton(authData).subscribe(function (userdata) {
                    if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](userdata) == 0) {
                        _this.error_msg = 'Please enter correct email';
                        _this.loading_service_object.hide();
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](userdata) > 0 && userdata[0].password != password) {
                        _this.error_msg = 'Please enter correct password';
                        _this.loading_service_object.hide();
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](userdata) > 0 && userdata[0].password == password) {
                        var userType = userdata[0].userRoleId;
                        var userROleType = (userType == 1) ? "doctor" : "patient";
                        localStorage.setItem('cv5usrType', userROleType);
                        localStorage.setItem('cv5userEmail', userdata[0].email);
                        localStorage.setItem('cv5userRoleId', userdata[0].userRoleId);
                        localStorage.setItem('usrSpecialities', userdata[0].specialities);
                        localStorage.setItem('cv5usrRolesubType', userdata[0].userRoleSubType);
                        localStorage.setItem('userIdentity', userROleType + userdata[0].id);
                        localStorage.setItem('verified', userdata[0].verified);
                        localStorage.setItem('location', userdata[0].location);
                        localStorage.setItem('State_code', userdata[0].state);
                        localStorage.setItem('myProductflg', 'false');
                        localStorage.setItem('productID', 'false');
                        localStorage.setItem('referred_by', userdata[0].referred_by);
                        localStorage.setItem('referral_code', userdata[0].referral_code);
                        //this.database_provider_object.storeUserdata(userdata[0]);
                        _this.database_provider_object.putLoginMedium(userdata[0].id);
                        _this.http_service_object.getRegisteredDeviceCount(userdata[0].id).subscribe(function (device_data) {
                            console.log('device_data response--->' + JSON.stringify(device_data));
                            if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](device_data) > 0) {
                                var myDeviceStatus = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["where"](device_data, { deviceToken: _this.database_provider_object.getOSSpecificUUID(userdata[0].id) });
                                console.log('myDeviceStatus-->' + JSON.stringify(myDeviceStatus));
                                var osType = _this.device_object.platform.toLowerCase();
                                console.log('osType-->' + osType);
                                _this.http_service_object.getAppDetails(osType).subscribe(function (appDetails) {
                                    var limit_device_count = appDetails[0].maxDeviceLimit;
                                    // if(_.size(myDeviceStatus) > 0 && myDeviceStatus.status){
                                    // 	console.log(userdata[0]);
                                    // 	this.loginSuccess(userdata[0], this.password);
                                    // }else if(_.size(device_data) < limit_device_count){
                                    _this.loginSuccess(userdata[0], _this.password);
                                    // }else{
                                    // 	this.loading_service_object.hide();
                                    // 	//alert('device_restriction_message');
                                    // 	this.storage_object.set('user_logged_in', 0);
                                    // 	var confirmPopup = this.alert_controller_object.create({
                                    // 	   title: '',
                                    // 	   message: '<p style="color:#ffffff; text-align:center;">You have reached limit of installing this app on multiple devices. Please logout from other device to continue.</p>',
                                    // 	   enableBackdropDismiss: true,
                                    // 	   buttons: [{ text: 'Dismiss', handler: () => {} },
                                    // 	   	{ text: 'Manage Devices', handler: () => {
                                    // 	   	this.navCtrl.push('ManageDevicesPage', {'request_from':'login_page', 'user_data':userdata});
                                    // 	   	}}
                                    // 	   ]
                                    // 	  });
                                    // 	confirmPopup.present();
                                    // }
                                });
                            }
                            else {
                                _this.loginSuccess(userdata[0], _this.password);
                            }
                        }, function (err) {
                            console.log('getRegisteredDeviceCount err->' + JSON.stringify(err));
                        });
                    }
                }, function (err) {
                    console.log('err->' + err);
                });
            }
        }
        else {
            this.toast_controller_object.create({
                message: 'You are Offline',
                duration: 3000,
                position: 'bottom'
            }).present();
            this.loader.dismiss();
        }
    };
    LoginPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    LoginPage.prototype.loginSuccess = function (data, password) {
        var _this = this;
        localStorage.setItem('userliveId', data.id);
        this.storage_object.set('user_logged_in', data.id);
        this.syncLocalDB(data.userRoleId);
        this.insertUpdateLocalDB(data, password);
        var userRoleparams = (data.userRoleId == 1) ? "doctor" : "patient";
        this.http_service_object.getPoweredByData(userRoleparams).subscribe(function (results) {
            _this.loading_service_object.hide();
            _this.loader.dismiss();
            var that = _this;
            var splash_data = [];
            splash_data = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["filter"](results, function (value) {
                return (value.isFor == userRoleparams || value.isFor == "all");
            });
            if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](splash_data) > 0) {
                _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: data.userRoleId });
                //$state.go('app.hcpbanner',{ usertype : userType});
            }
            else {
                _this.navCtrl.setRoot('DashboardPage');
                // this.navCtrl.setRoot('WhatsNewPage');
                // if(data.userRoleId == 5){
                // 	this.navCtrl.setRoot('OrientationPlaylistNonHcp'); 
                // } else {
                // 	this.navCtrl.setRoot('OrientationPlaylistHcp');  
                // }
            }
        }, function (err) {
            _this.loading_service_object.hide();
        });
    };
    LoginPage.prototype.syncLocalDB = function (user_type) {
        user_type = (user_type == 1) ? "doctor" : "patient";
        var userID = localStorage.getItem('userliveId');
        var email = localStorage.getItem('cv5userEmail');
        this.loading_service_object.generateandSaveLinks(userID, user_type, email);
        if (this.network_status == 'connected') {
            // Get topics detail from API
            this.database_provider_object.getTopicsAPIData(user_type);
            this.database_provider_object.dashboardInformationAPIData(user_type);
            //insert playlist data from api
            this.database_provider_object.insertPlaylistsAPIData(userID);
            // Get categories detail from API
            this.database_provider_object.getCategoriesAPIData(user_type);
            this.database_provider_object.getCardioSplashes(user_type);
            this.database_provider_object.getSubTopicsAPIData(user_type);
            this.database_provider_object.getOrderDetailsAPIData(userID);
            //information table
            this.database_provider_object.getInformationAPIData(user_type);
            //channels table
            this.database_provider_object.getChannelsApiData(user_type);
            //custom_lisiting
            this.database_provider_object.getCutomlistingApi();
            //custom video json
            this.database_provider_object.getCutomVideoJsonApi();
            //sponsored by table
            this.database_provider_object.getSponsoredByData(user_type);
            //whatsnew data by table
            this.database_provider_object.getWhatsnewData(user_type);
            this.database_provider_object.getWhatsnewSectionTitleData(user_type);
            this.database_provider_object.getCustomPlaylistData(localStorage.getItem('userliveId'));
            this.database_provider_object.getUserNotificationData(user_type);
            localStorage.setItem('onlyForWhatsnew', 'nosync');
            localStorage.setItem('app_sync_dashboard', 'no');
            localStorage.setItem('clevertapInitialize', 'yes');
        }
        else {
            this.toast_controller_object.create({
                message: 'Please check internet connection.',
                duration: 3000,
                position: 'bottom'
            }).present();
        }
    };
    LoginPage.prototype.insertUpdateLocalDB = function (data, password) {
        var _this = this;
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
            "username": data.username,
            "state": data.state,
            "referral_code": data.referral_code,
            "referred_by": data.referred_by,
            "npi_number": data.npi_number,
            "npi_id": data.npi_id
        };
        var userCondition = new Array("");
        this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (userresult) {
            if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](userresult) > 0) {
                _this.database_provider_object.updateNewUserInfo(userData);
            }
            else {
                _this.database_provider_object.storeUserdata(userData);
            }
        });
        /* update user device info*/
        // var devicesData = {
        //     "deviceToken": this.database_provider_object.getOSSpecificUUID(liveId),
        //     "deviceType": this.device_object.platform_object.toLowerCase(),
        //     "userId": liveId,
        //     "osVersion": this.device_object.version,
        //     "latitude": latitude,
        //     "longitude":longitude,
        //     "model": this.device_object.model,
        //     "updatedAt":new Date().toISOString(),
        //     "status":1
        // }
        var userType = (data.userRoleId == 1) ? "doctor" : "patient";
        this.clevertap_object.onUserLogin({
            "Identity": localStorage.getItem('userIdentity'),
            "Email": "'" + data.email + "'",
        });
        // this.clevertap_object.profileSet({
        // 	"Name":"'"+this.getNameFromEmail(data.email)+"'",
        // 	"Identity": localStorage.getItem('userIdentity'),
        // 	"Email":"'"+data.email+"'",
        // 	"Location":"'"+data.location+"'",
        // 	"UserRoleId":"'"+data.userRoleId+"'",
        // 	"UserType":"'"+userType+"'",
        // 	"Specialities":"'"+data.specialities+"'",
        // 	"SubSpecialities":"'"+data.userRoleSubType+"'",
        // 	"medium" :"'"+ data.medium+"'",
        // 	"custom":"Login with App"
        // });
        var devicesData = {
            "deviceToken": localStorage.getItem('getDeviceuuid'),
            "deviceType": localStorage.getItem('getDevicePlatform'),
            "userId": liveId,
            "osVersion": localStorage.getItem('getDeviceversion'),
            //"latitude": latitude,
            //"longitude":longitude,
            "model": localStorage.getItem('modelNo'),
            "updatedAt": new Date().toISOString(),
            "status": 1
        };
        this.database_provider_object.saveDeviceDataToApi(devicesData); //stores device data on server    	
    };
    LoginPage.prototype.getNameFromEmail = function (email) {
        var name = email.replace(/^(.+)@(.+)$/g, '$1').replace(/[\. __]+/g, " ").replace(/\s|[0-9]/g, ' ');
        return name;
    };
    LoginPage.prototype.gotoForgotpasswordPage = function () {
        this.navCtrl.push('ForgotpasswordPage', { 'type': 'forgot_password' });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\login\login.html"*/'\n<ion-content padding="false" class="user-setup-new user-interested-hcp">\n    <div id="login" class="loginScreen-center">\n        <!-- <p class="or-tag font20" style="color: #151313;"><b>Log In</b></p> -->\n         <div class="text-center" >\n            <img src="assets/images/cv-logo-subscription.png" style="height: 60px; width: 60px;">\n        </div>\n        <p class="text-center">             \n            <button class="loginBtn loginBtn--apple" style="" (click)="openAppleSignIn()" *ngIf="showAppleSignIn">\n                <ion-icon name="logo-apple" slot="start" class="appleLogo"></ion-icon>\n                <b style="text-align: center;" class="appleLoginText">Sign in with Apple</b>\n            </button>\n        </p>\n\n        <p class="text-center">\n            <button class="loginBtn loginBtn--facebook"  style="text-align: center;" (click)="onFacebook()"><b>Sign in with Facebook</b></button>\n        </p>\n\n        <p class="text-center">\n            <button class="loginBtn loginBtn--google custombuttonGap" style="text-align: center;" (click)="onGoogle()"><b class="googleLoginText">Sign in with Google</b></button>\n        </p>\n        <span class="text-center" style="color: #151313;"><h5> Or Login with email </h5> </span>\n        <form name="loginForm" style="margin-top: 12px;">\n          <div class="error text-center">{{error_msg}}</div>\n            <p class="text-center">\n               <input type="email" id="email" name="email"  value="" placeholder="Email Address" [(ngModel)]="username" />\n            </p>\n            <p class="text-center">\n                <input type="password" id="password" name="password" value="" placeholder="Password" [(ngModel)]="password" />\n            </p>\n            <div class="text-center terms-message" style="margin-top: 10px;">\n                <a class="alinks text-left" style="color: #151313; #151313; font-size: 14px;" (click)="gotoForgotpasswordPage()"><strong>Forgot Password</strong></a><span style="color: #0F0505;"> | </span>\n                <a class="alinks text-right" (click)="register()" style="color: #151313; font-size: 14px;"><strong>Don\'t have an account?</strong>&nbsp;<span style="color: red;"><b>Sign Up</b></span></a>\n\n            </div>\n            <div class="text-center">\n                <button class="white-button-btn" (click)="login()"><b>SUBMIT</b></button>\n            </div>\n        </form>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=33.js.map