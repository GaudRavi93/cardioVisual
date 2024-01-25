webpackJsonp([27],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupwithapplePageModule", function() { return SignupwithapplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupwithapple__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupwithapplePageModule = /** @class */ (function () {
    function SignupwithapplePageModule() {
    }
    SignupwithapplePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signupwithapple__["a" /* SignupwithapplePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signupwithapple__["a" /* SignupwithapplePage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], SignupwithapplePageModule);
    return SignupwithapplePageModule;
}());

//# sourceMappingURL=signupwithapple.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupwithapplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_countryandrolelist_countryandrolelist__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(109);
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
 * Generated class for the SignupwithapplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupwithapplePage = /** @class */ (function () {
    function SignupwithapplePage(navCtrl, injector) {
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.ports = [];
        this.myuserRoles = [];
        this.doctorports = [];
        this.doctorRoles = [];
        this.myStates = [];
        this.isShow = false;
        this.error_msg = '';
        this.isLoggedIn = false;
        this.country_and_role_list_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__services_loading_service__["a" /* LoadingService */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_HttpService__["a" /* HttpService */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_10__ionic_native_clevertap__["a" /* CleverTap */]();
        this.device_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */]);
        this.localapi = this.http_service_object.getApi();
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
    }
    SignupwithapplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad signupwithapple');
        this.specilitiesDropDown = true;
        this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
        this.myStates = this.country_and_role_list_provider_object.getUSstate();
        this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); // This will log "I do something useful!"
        this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
    };
    SignupwithapplePage.prototype.portChange = function (event) {
        //console.log('port:'+ event.value);
        if (event.value['name'] == "United States of America") {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    };
    SignupwithapplePage.prototype.stateChange = function (event) {
        console.log('stateChange value:' + JSON.stringify(event.value));
    };
    SignupwithapplePage.prototype.docPortChange = function (event) {
        console.log('doc port:' + event.value);
    };
    SignupwithapplePage.prototype.getGroupText = function (port, portIndex, ports) {
        if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
            return port.country.name;
        }
        return null;
    };
    SignupwithapplePage.prototype.roleChange = function (event) {
        console.log('role:', event.value);
    };
    SignupwithapplePage.prototype.onAppleSignIn = function () {
        var that = this;
        window.cordova.plugins.SignInWithApple.signin({ requestedScopes: [0, 1] }, function (succ) {
            console.log(succ);
            that.loading_service_object.show();
            that.appleLoginSuccess(succ);
        }, function (err) {
            //console.error(err)
        });
    };
    SignupwithapplePage.prototype.appleLoginSuccess = function (succ) {
        var _this = this;
        this.isLoggedIn = true;
        this.appleDetails = succ;
        this.appleemail = succ.email;
        this.appleUserID = succ.user;
        this.popup_user_type = '';
        if (this.appleemail != '') {
            var userParams = succ.email;
        }
        else {
            var userParams = succ.user;
        }
        this.http_service_object.appleUserIDExists(userParams).subscribe(function (data) {
            if ((__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](data) > 0) && (data[0].verified == 1)) {
                _this.directSignIN(data);
            }
            else {
                _this.loading_service_object.hide();
                _this.specilitiesDropDown = false;
                var confirmalert = _this.alert_controller_object.create({
                    title: "<p style=\"color:#1c1b1b;\">Thank you. Please provide your profession and country to help us customize the app.</p>",
                    subTitle: "<p style=\"text-align:center;\"> <strong>Are you a healthcare professional ? </strong></p>",
                    message: "\n\t\t\t        <ul>\n\t\t\t          <li><strong>Choose <b>'YES'</b> if you are a Doctor or Medical / Healthcare Industry Professional.</strong></li><br/>\n\t\t\t          <li><strong>Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient.</strong></li>\n\t\t\t        </ul>\n\t\t\t      ",
                    cssClass: 'google-popup-pin',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: function () {
                                //console.log('OK clicked: ');
                                _this.popup_user_type = "1";
                            }
                        }, {
                            text: 'No',
                            handler: function () {
                                //console.log('Cancel clicked');
                                _this.popup_user_type = "5";
                            }
                        }
                    ],
                    enableBackdropDismiss: false // <- Here! :)
                });
                confirmalert.present();
                confirmalert.onDidDismiss(function (alertData) {
                    if (_this.popup_user_type == "1") {
                        _this.doctorports = _this.country_and_role_list_provider_object.getOnlyDoctorRoles();
                    }
                    else if (_this.popup_user_type == "5") {
                        _this.doctorports = _this.country_and_role_list_provider_object.getPatientRoles();
                    }
                    else {
                        _this.doctorports = _this.country_and_role_list_provider_object.getSpecialitiesPorts();
                    }
                });
            }
        });
    };
    SignupwithapplePage.prototype.directSignIN = function (userDetails) {
        var _this = this;
        this.http_object.put(this.localapi + "/api/CardiovisualUsers/" + userDetails[0].id, {
            "fullname": userDetails[0].name,
            "email": userDetails[0].email,
            "gender": userDetails[0].gender,
            "medium": userDetails[0].medium,
            "facebookId": userDetails[0].facebookId
        }).subscribe(function (userDataInsertSuccess) {
            var userType = '';
            if (userDetails[0].userRoleId == '5')
                userType = 'patient';
            else
                userType = 'doctor';
            localStorage.setItem('cv5userEmail', userDetails[0].email);
            localStorage.setItem('cv5userRoleId', userDetails[0].userRoleId);
            localStorage.setItem('cv5usrType', userType);
            localStorage.setItem('cv5usrRolesubType', userDetails[0].userRoleSubType);
            localStorage.setItem('userIdentity', userType + userDetails[0].id);
            localStorage.setItem('verified', userDetails[0].verified);
            localStorage.setItem('myProductflg', 'false');
            localStorage.setItem('productID', 'false');
            _this.http_service_object.getRegisteredDeviceCount(userDetails[0].id).subscribe(function (device_data) {
                console.log('device_data response--->' + JSON.stringify(device_data));
                if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](device_data) > 0) {
                    var myDeviceStatus = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["where"](device_data, { deviceToken: _this.database_provider_object.getOSSpecificUUID(userDetails[0].id) });
                    console.log('myDeviceStatus-->' + JSON.stringify(myDeviceStatus));
                    var osType = _this.device_object.platform.toLowerCase();
                    console.log('osType-->' + osType);
                    _this.http_service_object.getAppDetails(osType).subscribe(function (appDetails) {
                        var limit_device_count = appDetails[0].maxDeviceLimit;
                        if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](myDeviceStatus) > 0 && myDeviceStatus.status) {
                            _this.loginSuccess(userDetails, userDetails[0].password);
                        }
                        else if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](device_data) < limit_device_count) {
                            _this.loginSuccess(userDetails, userDetails[0].password);
                        }
                        else {
                            _this.loading_service_object.hide();
                            _this.storage_object.set('user_logged_in', 0);
                            var confirmPopup = _this.alert_controller_object.create({
                                title: '',
                                message: '<p style="color:#ffffff; text-align:center;">You have reached limit of installing this app on multiple devices. Please logout from other device to continue.</p>',
                                enableBackdropDismiss: true,
                                buttons: [{
                                        text: 'Manage Devices',
                                        handler: function () {
                                            _this.navCtrl.push('ManageDevicesPage', { 'request_from': 'login_page', 'user_data': userDetails });
                                        }
                                    }]
                            });
                            confirmPopup.present();
                        }
                    });
                }
                else {
                    _this.loginSuccess(userDetails, userDetails[0].password);
                }
            }, function (err) {
                _this.loading_service_object.hide();
                console.log('getRegisteredDeviceCount err->' + JSON.stringify(err));
            });
        }, function (userDataInsertError) {
            _this.loading_service_object.hide();
            console.log(userDataInsertError.text());
        });
    };
    SignupwithapplePage.prototype.submitApplelogin = function () {
        var _this = this;
        var country = this.port;
        var usaState = this.myState;
        var doctor = this.doctorport;
        var userConsnt = this.userConsent3;
        if (this.isLoggedIn === false || this.appleDetails == '') {
            this.error_msg = "Please Signup with Apple.";
        }
        else if (userConsnt === false || userConsnt == undefined) {
            this.error_msg = "Please acknowledge the privacy policy & terms of service";
        }
        else if (this.appleDetails != '' && userConsnt != false) {
            this.error_msg = '';
            this.loading_service_object.show();
            if (typeof country === "undefined" || country == '') {
                var usercountry = "";
            }
            else {
                var usercountry = country['name'];
            }
            if (this.isShow) {
                if (typeof usaState === "undefined" || usaState == '') {
                    var usa_State = "";
                    var usa_State_code = "";
                }
                else {
                    var usa_State = usaState['name'];
                    var usa_State_code = usaState['code'];
                }
            }
            else {
                var usa_State = "";
                var usa_State_code = "";
            }
            if (typeof doctor === "undefined" || doctor == '') {
                var specialities = "";
                var sub_Specialities = "";
            }
            else {
                var doctorCodeName = doctor['name'];
                var doctor_code = doctor['doctorcode'];
                var splitTest = doctor_code.split(":");
                var specialities = splitTest[0];
                var sub_Specialities = splitTest[1];
            }
            this.userType = this.popup_user_type;
            var referral_code = this.appleemail.substring(0, 4) + '' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
            this.http_object.post(this.localapi + "/api/CardiovisualUsers", {
                "fullname": "",
                "email": this.appleemail,
                "password": "",
                "gender": null,
                "userRoleId": this.userType,
                "discoveryMethodId": 0,
                "clevertapId": "",
                "branchId": "",
                "branchLink": "",
                "branchWebUrl": "",
                "profilePic": "",
                "medium": "apple",
                "facebookId": this.appleUserID,
                "specialities": specialities,
                "userRoleSubType": sub_Specialities,
                "location": usercountry,
                "state": usa_State_code,
                "referral_code": referral_code,
                "npi_number": 0,
                "npi_id": 0,
                "referred_by": 0,
                "verified": 1,
                "username": "",
                "isPaid": 0
            }).subscribe(function (userDataInsertSuccess) {
                _this.loading_service_object.hide();
                var response = JSON.parse(userDataInsertSuccess['_body']);
                var myuserRole = '';
                var country = '';
                var doctor = '';
                var usaState = '';
                var userRoleparams = (_this.userType == 1) ? "doctor" : "patient";
                localStorage.setItem('cv5userEmail', response.email);
                localStorage.setItem('cv5userRoleId', response.userRoleId);
                localStorage.setItem('cv5usrType', userRoleparams);
                localStorage.setItem('usrSpecialities', response.specialities);
                localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
                localStorage.setItem('userIdentity', userRoleparams + response.id);
                localStorage.setItem('verified', response.verified);
                localStorage.setItem('userliveId', response.id);
                _this.storage_object.set('user_logged_in', response.id);
                localStorage.setItem('location', response.location);
                localStorage.setItem('State_code', response.state);
                localStorage.setItem('myProductflg', 'false');
                localStorage.setItem('productID', 'false');
                _this.syncLocalDB(_this.userType);
                _this.insertUpdateLocalDB(response, "");
                _this.http_service_object.getPoweredByData(userRoleparams).subscribe(function (results) {
                    //console.log('results-->'+JSON.stringify(results));
                    var that = _this;
                    var splash_data = [];
                    splash_data = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["filter"](results, function (value) {
                        return (value.isFor == userRoleparams || value.isFor == "all");
                    });
                    if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](splash_data) > 0) {
                        _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: _this.userType });
                    }
                    else {
                        //console.log('no splashes results-->'+userRoleparams);
                        _this.navCtrl.setRoot('DashboardPage');
                        // this.navCtrl.setRoot('WhatsNewPage');
                    }
                }, function (err) {
                    console.log('err1->' + err);
                });
            }, function (error) {
                console.log('userDataInsertError->' + error);
                _this.loading_service_object.hide();
            });
        }
    };
    SignupwithapplePage.prototype.loginSuccess = function (data, password) {
        var _this = this;
        //console.log('data---->'+JSON.stringify(data));
        this.storage_object.set('user_logged_in', data[0].id);
        localStorage.setItem('userliveId', data[0].id);
        this.syncLocalDB(data[0].userRoleId);
        this.insertUpdateLocalDB(data[0], password);
        this.loading_service_object.hide();
        this.userType = data[0].userRoleId;
        //console.log('this.userType--> login success-->'+this.userType);
        this.userRoleparams = (this.userType == 1) ? "doctor" : "patient";
        this.http_service_object.getPoweredByData(this.userRoleparams).subscribe(function (results) {
            //console.log('results-->'+JSON.stringify(results));
            var that = _this;
            var splash_data = [];
            splash_data = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["filter"](results, function (value) {
                return (value.isFor == that.userRoleparams || value.isFor == "all");
            });
            if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](splash_data) > 0) {
                _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: _this.userType });
            }
            else {
                //console.log('no splashes results-->'+this.userRoleparams);
                _this.navCtrl.setRoot('DashboardPage');
                // this.navCtrl.setRoot('WhatsNewPage');
            }
        }, function (err) {
            console.log('err->' + err);
            //alert(err);
        });
    };
    SignupwithapplePage.prototype.syncLocalDB = function (user_type) {
        var userID = localStorage.getItem('userliveId');
        var email = localStorage.getItem('cv5userEmail');
        user_type = (user_type == 1) ? "doctor" : "patient";
        this.loading_service_object.generateandSaveLinks(userID, user_type, email);
        // Get topics detail from API
        //alert('sync user_type-->'+user_type);
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
        //whatsnew page section title
        this.database_provider_object.getWhatsnewSectionTitleData(user_type);
        this.database_provider_object.getCustomPlaylistData(localStorage.getItem('userliveId'));
        this.database_provider_object.getUserNotificationData(user_type);
        localStorage.setItem('onlyForWhatsnew', 'nosync');
        localStorage.setItem('app_sync_dashboard', 'no');
    };
    SignupwithapplePage.prototype.insertUpdateLocalDB = function (result, password) {
        var _this = this;
        var userData = {
            "email": result.email,
            "user_type": (result.userRoleId == 1) ? "doctor" : "patient",
            "isPaid": result.isPaid,
            "userRoleId": result.userRoleId,
            "discoveryMethodId": result.discoveryMethodId,
            "clevertapId": result.clevertapId,
            "liveId": result.id,
            "fullname": result.fullname,
            "password": password,
            "gender": result.gender,
            "birthyear": result.birthyear,
            "profilePic": result.profilePic,
            "medium": result.medium,
            "facebookId": result.facebookId,
            "specialities": result.specialities,
            "userRoleSubType": result.userRoleSubType,
            "location": result.location,
            "verified": result.verified,
            "username": result.username,
            "state": result.state,
            "referral_code": result.referral_code,
            "referred_by": result.referred_by,
            "npi_number": result.npi_number,
            "npi_id": result.npi_id
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
        var user_type_temp = (result.userRoleId == 1) ? "doctor" : "patient";
        this.clevertap_object.onUserLogin({
            "Identity": user_type_temp + result.id,
            "Name": "'" + result.fullname + "'",
            "Email": "'" + result.email + "'",
            "Photo": result.profilePic,
            "Location": "'" + result.location + "'",
            "UserRoleId": "'" + result.userRoleId + "'",
            "UserType": "'" + user_type_temp + "'",
            "Specialities": "'" + result.specialities + "'",
            "SubSpecialities": "'" + result.userRoleSubType + "'",
            "medium": "'" + result.medium + "'",
            "custom": "Login with Apple"
        });
        var params = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "userRoleId": result.userRoleId,
            "userType": user_type_temp,
            "userEmail": result.email,
            "medium": result.medium,
            "verified": result.verified,
            "specialities": result.specialities,
            "subSpecialities": result.userRoleSubType,
            "userRoleSubType": result.userRoleSubType,
            "location": result.location,
            "Identity": user_type_temp + result.id
        };
        this.clevertap_object.recordEventWithNameAndProps("appleLogin", params);
        //stores device data on server
        var devicesData = {
            "deviceToken": localStorage.getItem('getDeviceuuid'),
            "deviceType": localStorage.getItem('getDevicePlatform'),
            "userId": result.id,
            "osVersion": localStorage.getItem('getDeviceversion'),
            "model": localStorage.getItem('modelNo'),
            "updatedAt": new Date().toISOString(),
            "status": 1
        };
        this.database_provider_object.saveDeviceDataToApi(devicesData);
    };
    SignupwithapplePage.prototype.termsofservice = function () {
        this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
    };
    SignupwithapplePage.prototype.privacypolicy = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal_controllar_object.create('ModalPage', { data: 'Privacy Policy' }, myModalOptions);
        myModal.present();
    };
    SignupwithapplePage.prototype.goBack = function () {
        this.navCtrl.push('LoginPage');
    };
    SignupwithapplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signupwithapple',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\signupwithapple\signupwithapple.html"*/'<!--\n\n  Generated template for the SignupwithapplePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header style="background-color: transparent !important;" translucent>\n\n  <ion-navbar>\n\n	<ion-title>\n\n		Apple Sign In\n\n	</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<!-- <ion-content padding> -->\n\n<ion-content padding="false" class="user-setup-new user-register">\n\n  <button class="previous" (click)="goBack()">&laquo;BACK</button>\n\n	<div id="register" class="loginScreen-center">\n\n        <form>\n\n            <div class="text-center" >\n\n                <img src="assets/images/cv-logo-subscription.png" style="height: 50px; width: 50px;">\n\n            </div>\n\n            <div class="error text-center">{{error_msg}}</div>\n\n            <p class="text-center">             \n\n              <button class="loginBtn loginBtn--apple" style="" (click)="onAppleSignIn()">\n\n                  <ion-icon name="logo-apple" slot="start" class="appleLogo"></ion-icon>\n\n                  <b style="text-align: center;" class="appleLoginText">Sign in with Apple</b>\n\n              </button>\n\n            </p>\n\n           <p class="text-center pg-second-message" style="color: #151313;"></p>\n\n\n\n            <p style="margin-top: 3px;">\n\n            <ion-item class="selectdrop" text-center  [ngClass]="{\'disabled\': specilitiesDropDown == true, \'notdisabled\':specilitiesDropDown == flase }">\n\n                <ionic-selectable \n\n                    item-content\n\n                    [(ngModel)]="doctorport"\n\n                    name ="doctorport"\n\n                    itemValueField="doctorcode"\n\n                    itemTextField="name"\n\n                    [items]="doctorports" \n\n                    [canSearch]="true"\n\n                    placeholder="Select Profession"\n\n                    [hasVirtualScroll]="true"\n\n                    [virtualScrollHeaderFn]="getGroupText"\n\n                    (onChange)="docPortChange($event)">\n\n                </ionic-selectable>\n\n            </ion-item>\n\n            </p><br/>\n\n            <p>\n\n              <ion-item class="selectdrop" text-center>\n\n                <ionic-selectable\n\n                item-content\n\n                name ="port"\n\n                [(ngModel)]="port"\n\n                [items]="ports"\n\n                itemValueField="name"\n\n                itemTextField="name"\n\n                [canSearch]="true"\n\n                placeholder="Select Country"\n\n                (onChange)="portChange($event)">\n\n                </ionic-selectable>\n\n              </ion-item>	\n\n            </p><br />\n\n            \n\n            <p *ngIf="isShow">\n\n              <ion-item class="selectdrop" text-center>\n\n                <ionic-selectable\n\n                  item-content\n\n                  name ="myState"\n\n                  [(ngModel)]="myState"\n\n                  [items]="myStates"\n\n                  itemValueField="code"\n\n                  itemTextField="name"\n\n                  [canSearch]="true"\n\n                  placeholder="Select State"\n\n                  (onChange)="stateChange($event)">\n\n                </ionic-selectable>\n\n              </ion-item>\n\n            </p>\n\n            <div class="userConsent" style="margin-bottom: 14px;">\n\n              <p class=""> \n\n                <ion-checkbox [(ngModel)]="userConsent3" name="userConsent3"></ion-checkbox> \n\n              </p>\n\n              <p class="font12" style="color: #151313;">I agree to the  <a class="alinks" (click)="privacypolicy()"  style="text-decoration: underline; color: #e85f4f; font-weight: bold;">Privacy Policy</a> & <a class="alinks" (click)="termsofservice()"  style="text-decoration: underline; color: #e85f4f; font-weight: bold;" >Terms of Service</a> </p>\n\n            </div>\n\n            <p id="register_horizotalBar" style="margin: 19px; margin-top: 47px;"></p>\n\n            <div class="text-center">\n\n                <button class="white-button-btn" (click)="submitApplelogin()"><b>SUBMIT</b></button>\n\n            </div>\n\n        </form>\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\signupwithapple\signupwithapple.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], SignupwithapplePage);
    return SignupwithapplePage;
}());

//# sourceMappingURL=signupwithapple.js.map

/***/ })

});
//# sourceMappingURL=27.js.map