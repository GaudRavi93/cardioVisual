webpackJsonp([25],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupwithgooglePageModule", function() { return SignupwithgooglePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupwithgoogle__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupwithgooglePageModule = /** @class */ (function () {
    function SignupwithgooglePageModule() {
    }
    SignupwithgooglePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signupwithgoogle__["a" /* SignupwithgooglePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signupwithgoogle__["a" /* SignupwithgooglePage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], SignupwithgooglePageModule);
    return SignupwithgooglePageModule;
}());

//# sourceMappingURL=signupwithgoogle.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupwithgooglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_countryandrolelist_countryandrolelist__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_network_check_network_check__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { GooglePlus } from '@ionic-native/google-plus/ngx';










/**
 * Generated class for the SignupwithgooglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupwithgooglePage = /** @class */ (function () {
    function SignupwithgooglePage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.ports = [];
        this.myuserRoles = [];
        this.isLoggedIn = false;
        this.error_msg = '';
        this.googleDetails = [];
        this.doctorports = [];
        this.doctorRoles = [];
        this.myStates = [];
        this.isShow = false;
        this.country_and_role_list_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]);
        this.google_plus_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_loading_service__["a" /* LoadingService */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__services_HttpService__["a" /* HttpService */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]);
        this.device_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        4;
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_12__ionic_native_clevertap__["a" /* CleverTap */]();
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.localapi = this.http_service_object.getApi();
        this.dtStr = this.http_service_object.dtStr();
        this.clevertapDate = this.http_service_object.clevertapDate();
        setTimeout(function () {
            _this.network_check_object.getPageAction('SignupwithgooglePage', 'start', '', localStorage.getItem('cv5usrType'));
        }, 1000);
    }
    SignupwithgooglePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupwithgooglePage');
        this.specilitiesDropDown = true;
        this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
        this.myStates = this.country_and_role_list_provider_object.getUSstate();
        this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); // This will log "I do something useful!"
        this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
        //this.doctorports = '';
    };
    SignupwithgooglePage.prototype.ionViewWillLeave = function () {
        this.network_check_object.getPageAction('SignupwithgooglePage', 'end', '', 'All');
    };
    SignupwithgooglePage.prototype.portChange = function (event) {
        console.log('port:' + event.value);
        //alert('port:'+JSON.stringify(event.value));
        if (event.value['name'] == "United States of America") {
            // code...
            //alert('event.value[name]-->'+event.value['name']);
            this.isShow = true;
        }
        else {
            //alert('else');
            this.isShow = false;
        }
    };
    SignupwithgooglePage.prototype.stateChange = function (event) {
        console.log('stateChange value:' + JSON.stringify(event.value));
    };
    SignupwithgooglePage.prototype.docPortChange = function (event) {
        console.log('doc port:' + event.value);
    };
    SignupwithgooglePage.prototype.getGroupText = function (port, portIndex, ports) {
        if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
            return port.country.name;
        }
        return null;
    };
    SignupwithgooglePage.prototype.roleChange = function (event) {
        console.log('role:', event.value);
    };
    SignupwithgooglePage.prototype.goBack = function () {
        this.navCtrl.push('LoginPage');
    };
    SignupwithgooglePage.prototype.googleSignIn = function () {
        var _this = this;
        //alert('googleSignIn');
        this.google_plus_object.login({})
            .then(function (res) {
            _this.loading_service_object.googleSignInLoading();
            console.log(res);
            _this.googleLoginSuccess(res);
            //alert('res-->'+JSON.stringify(res));
            _this.displayName = res.displayName;
            _this.email = res.email;
            _this.familyName = res.familyName;
            _this.givenName = res.givenName;
            _this.userId = res.userId;
            _this.imageUrl = res.imageUrl;
            _this.isLoggedIn = true;
        })
            .catch(function (err) {
            console.error(err);
            //alert('err-->'+JSON.stringify(err));
        });
    };
    SignupwithgooglePage.prototype.googleLoginSuccess = function (profileInfo) {
        var _this = this;
        //alert('googleLoginSuccess');
        this.googleDetails = profileInfo;
        this.googleUserId = profileInfo.userId;
        //alert("profileInfo---"+JSON.stringify(profileInfo));
        //console.log("googleUserId---"+JSON.stringify(this.googleUserId));
        if (profileInfo.hasOwnProperty('email')) {
            this.http_service_object.checkEmailExists(profileInfo.email).subscribe(function (data) {
                console.log('_.size(data)--->' + __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](data));
                //alert('_.size(data)--->'+_.size(data));
                if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](data) > 0) {
                    //alert('size data---');
                    _this.specilitiesDropDown = false;
                    if (data[0].verified == 1) {
                        //alert('data[0].verified---'+data[0].verified);
                        ////console.log("datata complete---"+JSON.stringify(profileInfo));
                        _this.putOnlyGoogleData(data[0], profileInfo, _this.googleUserId);
                    }
                    else {
                        _this.loading_service_object.hide();
                        var confirmPopup = _this.alert_controller_object.create({
                            title: '',
                            message: '<p style="color:#ffffff; text-align:center;">Thank you. Now please choose your profession and country..</p>',
                            enableBackdropDismiss: true,
                            buttons: ['Ok']
                        });
                        confirmPopup.present();
                    }
                }
                else {
                    _this.specilitiesDropDown = false;
                    _this.loading_service_object.hide();
                    // var confirmPopup = this.alert_controller_object.create({
                    // 	title: '',
                    // 	message: '<p style="color:#ffffff; text-align:center;">Thank you. Now please choose your profession and country..</p>',
                    // 	enableBackdropDismiss: true,
                    // 	buttons: ['Ok']
                    // });
                    // confirmPopup.present();
                    var user_type = '';
                    var confirmalert = _this.alert_controller_object.create({
                        title: "<p style=\"color:#1c1b1b;\">Thank you. Please provide your profession and country to help us customize the app.</p>",
                        //title: `Are you a healthcare professional`,
                        subTitle: "<p style=\"text-align:center;\"> <strong>Are you a healthcare professional ? </strong></p>",
                        message: "\n\t\t\t\t        <ul>\n\t\t\t\t          <li><strong>Choose <b>'YES'</b> if you are a Doctor or Medical / Healthcare Industry Professional.</strong></li><br/>\n\t\t\t\t          <li><strong>Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient.</strong></li>\n\t\t\t\t        </ul>\n\t\t\t\t      ",
                        cssClass: 'google-popup-pin',
                        buttons: [
                            {
                                text: 'Yes',
                                handler: function () {
                                    console.log('OK clicked: ');
                                    ////console.log("if true");
                                    user_type = "1";
                                }
                            }, {
                                text: 'No',
                                handler: function () {
                                    ////console.log("no clicked");
                                    user_type = "5";
                                    console.log('Cancel clicked');
                                }
                            }
                        ],
                        enableBackdropDismiss: false // <- Here! :)
                    });
                    confirmalert.present();
                    confirmalert.onDidDismiss(function (alertData) {
                        if (user_type == "1") {
                            _this.doctorports = _this.country_and_role_list_provider_object.getOnlyDoctorRoles();
                        }
                        else if (user_type == "5") {
                            _this.doctorports = _this.country_and_role_list_provider_object.getPatientRoles();
                        }
                        else {
                            _this.doctorports = _this.country_and_role_list_provider_object.getSpecialitiesPorts();
                        }
                    });
                }
            });
        }
        else {
        }
    };
    SignupwithgooglePage.prototype.putOnlyGoogleData = function (userDetails, googleProfileDetails, fbUserId) {
        var _this = this;
        //alert('putOnlyGoogleData');
        //alert('userDetailb---->'+JSON.stringify(userDetails));
        console.log('userDetailb---->' + JSON.stringify(userDetails));
        this.http_object.put(this.localapi + "/api/CardiovisualUsers/" + userDetails.id, {
            "fullname": googleProfileDetails.displayName,
            "email": googleProfileDetails.email,
            "gender": "",
            "profilePic": googleProfileDetails.imageUrl,
            "medium": "google",
            "facebookId": googleProfileDetails.userId
        }).subscribe(function (userDataInsertSuccess) {
            //console.log(userDataInsertSuccess.text());
            var userType = '';
            if (userDetails.userRoleId == '5')
                userType = 'patient';
            else
                userType = 'doctor';
            localStorage.setItem('cv5userEmail', userDetails.email);
            localStorage.setItem('cv5userRoleId', userDetails.userRoleId);
            localStorage.setItem('cv5usrType', userType);
            localStorage.setItem('cv5usrRolesubType', userDetails.userRoleSubType);
            localStorage.setItem('userIdentity', userType + userDetails.id);
            localStorage.setItem('verified', userDetails.verified);
            //localStorage.setItem('userliveId',userDetails.id);
            //this.storage_object.set('user_logged_in', userDetails.id);
            localStorage.setItem('myProductflg', 'false');
            localStorage.setItem('productID', 'false');
            _this.http_service_object.getRegisteredDeviceCount(userDetails.id).subscribe(function (device_data) {
                //console.log('device_data response--->'+JSON.stringify(device_data));
                if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](device_data) > 0) {
                    var myDeviceStatus = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["where"](device_data, { deviceToken: _this.database_provider_object.getOSSpecificUUID(userDetails.id) });
                    console.log('myDeviceStatus-->' + JSON.stringify(myDeviceStatus));
                    var osType = _this.device_object.platform.toLowerCase();
                    //console.log('osType-->'+osType);
                    _this.http_service_object.getAppDetails(osType).subscribe(function (appDetails) {
                        var limit_device_count = appDetails[0].maxDeviceLimit;
                        if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](myDeviceStatus) > 0 && myDeviceStatus.status) {
                            _this.loginSuccess(userDetails, userDetails.password, userDataInsertSuccess);
                        }
                        else if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](device_data) < limit_device_count) {
                            _this.loginSuccess(userDetails, userDetails.password, userDataInsertSuccess);
                        }
                        else {
                            _this.loading_service_object.hide();
                            //alert('device_restriction_message');
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
                    _this.loginSuccess(userDetails, userDetails.password, userDataInsertSuccess);
                }
                // this.storage_object.set('user_logged_in', userDetails.id);
                // localStorage.setItem('userliveId',userDetails.id);
            }, function (err) {
                console.log('getRegisteredDeviceCount err->' + JSON.stringify(err));
                //alert(err);
            });
        }, function (userDataInsertError) {
            _this.loading_service_object.hide();
            //alert(userDataInsertError.text());
            console.log(userDataInsertError.text());
        });
    };
    SignupwithgooglePage.prototype.loginSuccess = function (data, password, userDataInsertSuccess) {
        var _this = this;
        //alert('login success');
        //alert('login success data--->'+JSON.stringify(data));
        this.loading_service_object.hide();
        this.storage_object.set('user_logged_in', data.id);
        localStorage.setItem('userliveId', data.id);
        this.syncLocalDB(data.userRoleId);
        this.insertUpdateLocalDB(data, password);
        this.userType = data.userRoleId;
        /*by Sanjeev 2019 april 11 */
        this.userRoleparams = (this.userType == 1) ? "doctor" : "patient";
        this.http_service_object.getPoweredByData(this.userRoleparams).subscribe(function (results) {
            console.log('results-->' + JSON.stringify(results));
            var that = _this;
            var splash_data = [];
            splash_data = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["filter"](results, function (value) {
                return (value.isFor == that.userRoleparams || value.isFor == "all");
            });
            if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](splash_data) > 0) {
                _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: _this.userType });
                //$state.go('app.hcpbanner',{ usertype : userType});
            }
            else {
                console.log('no splashes results-->' + _this.userRoleparams);
                _this.navCtrl.setRoot('DashboardPage');
                // this.navCtrl.setRoot('WhatsNewPage');
                // if(this.userType == 5){
                // 	this.navCtrl.setRoot('OrientationPlaylistNonHcp'); 
                // } else {
                // 	this.navCtrl.setRoot('OrientationPlaylistHcp');  
                // }
            }
        }, function (err) {
            console.log('err->' + err);
            //alert(err);
        });
        /* END */
    };
    SignupwithgooglePage.prototype.submitlogin = function () {
        var _this = this;
        //alert('google login submit');
        var myuserRole = this.myuserRole;
        var country = this.port;
        var usaState = this.myState;
        var google_Details = this.googleDetails;
        var userConsnt = this.userConsent2;
        var doctor = this.doctorport;
        //alert('googleDetails------>'+JSON.stringify(this.googleDetails));
        console.log('google_Details------>' + JSON.stringify(google_Details));
        if (this.isLoggedIn === false || this.googleDetails == '' || this.googleDetails == undefined) {
            this.error_msg = "Please Signup with google.";
        }
        // else if(typeof myuserRole === "undefined"  || myuserRole == '') {
        //  		this.error_msg = "Please Select Your Profession";
        //  	}
        else if (typeof country === "undefined" || country == '') {
            this.error_msg = "Please select Country";
        }
        else if (this.isShow == true && (typeof usaState === "undefined" || usaState == '')) {
            this.error_msg = "Please select State";
        }
        else if (typeof doctor === "undefined" || doctor == '') {
            this.error_msg = "Please Select Your Profession";
        }
        else if (userConsnt === false || userConsnt == undefined) {
            // code...
            this.error_msg = "Please acknowledge the privacy policy & terms of service";
        }
        else if (doctor != '' && country != '' && this.googleDetails != '' && userConsnt != false && ((usaState != '' && this.isShow == true) || this.isShow == false)) {
            this.error_msg = '';
            this.loading_service_object.show();
            //var userRole =  myuserRole['role'];
            var usercountry = country['name'];
            if (this.isShow) {
                var usa_State = usaState['name'];
                var usa_State_code = usaState['code'];
            }
            else {
                var usa_State = "";
                var usa_State_code = "";
            }
            var doctorCodeName = doctor['name'];
            var doctor_code = doctor['doctorcode'];
            var splitTest = doctor_code.split(":");
            var specialities = splitTest[0];
            var sub_Specialities = splitTest[1];
            switch (doctor_code) {
                case "Cardiovascular Doctor:EP":
                    // code...
                    this.userType = 1;
                    break;
                case "Cardiovascular Doctor:Invasive":
                    this.userType = 1;
                    break;
                case "Cardiovascular Doctor:Non-Invasive":
                    this.userType = 1;
                    break;
                case "Cardiovascular Doctor:Surgeon":
                    this.userType = 1;
                    break;
                case "Cardiovascular Doctor:Other":
                    this.userType = 1;
                    break;
                case "Doctor:Int. Med/FM":
                    this.userType = 1;
                    break;
                case "Doctor:Endocrinologist":
                    this.userType = 1;
                    break;
                case "Doctor:Physiotherapist":
                    this.userType = 1;
                    break;
                case "Doctor:Other":
                    this.userType = 1;
                    break;
                case "PA/NP/Nurse:PA/NP/RN":
                    this.userType = 1;
                    break;
                case "PA/NP/Nurse:Student":
                    // code...
                    this.userType = 1;
                    break;
                case "PA/NP/Nurse:Other":
                    // code...
                    this.userType = 1;
                    break;
                case "Medical Trainee/Fellow:Fellow/Resident":
                    // code...
                    this.userType = 1;
                    break;
                case "Medical Trainee/Fellow:Student":
                    // code...
                    this.userType = 1;
                    break;
                case "Medical Trainee/Fellow:Other":
                    // code...
                    this.userType = 1;
                    break;
                case "Other Medical Professional:Ex Physio/Rehab":
                    // code...
                    this.userType = 1;
                    break;
                case "Other Medical Professional:Tech":
                    // code...
                    this.userType = 1;
                    break;
                case "Other Medical Professional:Educators":
                    // code...
                    this.userType = 1;
                    break;
                case "Other Medical Professional:Other":
                    // code...
                    this.userType = 1;
                    break;
                case "Non-Healthcare Professional:Curious Learner":
                    this.userType = 5;
                    break;
                case "Non-Healthcare Professional:Media":
                    this.userType = 5;
                    break;
                case "Non-Healthcare Professional:Other":
                    this.userType = 5;
                    break;
                case "Patient:Patient":
                    this.userType = 5;
                    break;
                case "Healthcare Industry Professional:Device":
                    this.userType = 1;
                    break;
                case "Healthcare Industry Professional:Pharma":
                    this.userType = 1;
                    break;
                case "Healthcare Industry Professional:Other":
                    this.userType = 1;
                    break;
            }
            this.http_service_object.checkEmailExists(google_Details.email).subscribe(function (data) {
                //alert('checkEmailExists _.size(data)--->'+_.size(data));
                if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](data) > 0) {
                    _this.loading_service_object.hide();
                }
                else {
                    //alert('else -1 ');
                    var referral_code = google_Details.email.substring(0, 4) + '' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                    localStorage.setItem('referral_code', referral_code);
                    //alert('else -2 ');
                    _this.http_object.post(_this.localapi + "/api/CardiovisualUsers", {
                        "fullname": google_Details.displayName,
                        "email": google_Details.email,
                        "password": "",
                        "gender": null,
                        "userRoleId": _this.userType,
                        "discoveryMethodId": 0,
                        "clevertapId": "",
                        "branchId": "",
                        "branchLink": "",
                        "branchWebUrl": "",
                        "profilePic": google_Details.imageUrl,
                        "medium": "google",
                        "facebookId": google_Details.userId,
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
                        //alert('userDataInsertSuccess-->'+JSON.stringify(userDataInsertSuccess));
                        //console.log('userDataInsertSuccess-->'+JSON.stringify(userDataInsertSuccess));
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
                        localStorage.setItem('myProductflg', 'false');
                        localStorage.setItem('productID', 'false');
                        _this.syncLocalDB(_this.userType);
                        _this.insertUpdateLocalDB(response, "");
                        _this.http_service_object.getPoweredByData(userRoleparams).subscribe(function (results) {
                            //console.log('results-->'+JSON.stringify(results));
                            var that = _this;
                            var splash_data = [];
                            splash_data = __WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["filter"](results, function (value) {
                                return (value.isFor == userRoleparams || value.isFor == "all");
                            });
                            if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](splash_data) > 0) {
                                _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: _this.userType });
                            }
                            else {
                                console.log('no splashes results-->' + userRoleparams);
                                _this.navCtrl.setRoot('DashboardPage');
                                // this.navCtrl.setRoot('WhatsNewPage');
                                // if(this.userType == 5){
                                // 	this.navCtrl.setRoot('OrientationPlaylistNonHcp'); 
                                // } else {
                                // 	this.navCtrl.setRoot('OrientationPlaylistHcp');  
                                // }
                            }
                        }, function (err) {
                            console.log('err1->' + err);
                            //alert(err);
                        });
                        //sqlitedatabaseService.signUpToMailChimp(userDataInsertSuccess); 
                        //"ok":true  
                    }, function (error) {
                        console.log('userDataInsertError->' + error);
                        // alert('userDataInsertError->'+JSON.stringify(error));
                        //alert('userDataInsertError->'+JSON.stringify(error['_body']));
                        _this.loading_service_object.hide();
                    });
                }
            }, function (err) {
                console.log('err->' + err);
                //alert('err->'+JSON.stringify(err));
                //alert(err);
            });
        }
    };
    SignupwithgooglePage.prototype.syncLocalDB = function (user_type) {
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
        localStorage.setItem('clevertapInitialize', 'yes');
        localStorage.setItem('userRegistrationClevertap', 'yes');
    };
    SignupwithgooglePage.prototype.insertUpdateLocalDB = function (result, password) {
        //alert('insertUpdateLocalDB result---->'+JSON.stringify(result));
        //console.log('insertUpdateLocalDB result---->'+JSON.stringify(result));
        //console.log('result.id---->'+JSON.stringify(result.id));
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
        //console.log('userData---->'+JSON.stringify(userData));
        var userCondition = new Array("");
        this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (userresult) {
            //console.log('fffffff------'+JSON.stringify(userresult));
            if (__WEBPACK_IMPORTED_MODULE_6_underscore_underscore__["size"](userresult) > 0) {
                _this.database_provider_object.updateNewUserInfo(userData);
            }
            else {
                //this.database_provider_object.insertNewUserInfo(userData);
                _this.database_provider_object.storeUserdata(userData);
            }
        }, function (error) {
            //console.log('cccccccc-->'+JSON.stringify(error));
        });
        var user_type_temp = (result.userRoleId == 1) ? "doctor" : "patient";
        this.clevertap_object.onUserLogin({
            "Identity": user_type_temp + result.id,
            "Email": "'" + result.email + "'",
            "custom": "Login with Google"
        });
        /*
        var params = {
            "record_time" : this.dtStr,
            "record_date" : this.clevertapDate,
            "os" : localStorage.getItem('getDevicePlatform'),
            "userRoleId" : result.userRoleId,
            "userType": user_type_temp,
            "specialities": result.specialities,
            "subSpecialities": result.userRoleSubType,
            "userEmail" : result.email,
            "medium" : result.medium,
            "verified" : result.verified,
            "userRoleSubType" : result.userRoleSubType,
            "location" : result.location,
            "Identity": user_type_temp+result.id
        };
        this.clevertap_object.recordEventWithNameAndProps("googleLogin",params);

        */
        //stores device data on server
        var devicesData = {
            "deviceToken": localStorage.getItem('getDeviceuuid'),
            "deviceType": localStorage.getItem('getDevicePlatform'),
            "userId": result.id,
            "osVersion": localStorage.getItem('getDeviceversion'),
            //"latitude": latitude,
            //"longitude":longitude,
            "model": localStorage.getItem('modelNo'),
            "updatedAt": new Date().toISOString(),
            "status": 1
        };
        this.database_provider_object.saveDeviceDataToApi(devicesData);
    };
    SignupwithgooglePage.prototype.termsofservice = function () {
        this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
    };
    SignupwithgooglePage.prototype.privacypolicy = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal_controllar_object.create('ModalPage', { data: 'Privacy Policy' }, myModalOptions);
        myModal.present();
    };
    SignupwithgooglePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signupwithgoogle',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\signupwithgoogle\signupwithgoogle.html"*/'<!--\n\n  Generated template for the SignupwithgooglePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding="false" class="user-setup-new user-register">\n\n    <button class="previous" (click)="goBack()">&laquo;BACK</button>\n\n    <div id="register" class="loginScreen-center">\n\n        <form>\n\n            <div class="text-center" >\n\n                <img src="assets/images/cv-logo-subscription.png" style="height: 50px; width: 50px;">\n\n            </div>\n\n            <div class="error text-center">{{error_msg}}</div>\n\n            <p class="text-center">\n\n                <!-- <button class="loginBtn loginBtn--google signup-btn" style="text-align: center;" (click)="googleSignIn()"><b>Login with Google</b></button> -->\n\n\n\n                <button class="loginBtn loginBtn--google signup-btn" style="text-align: center;" (click)="googleSignIn()"><b>Sign in with Google</b></button>\n\n            </p>\n\n           <!--  <p class="text-center pg-second-message" style="color: #151313;">Please provide your profession and country to help us customize the app.</p> -->\n\n\n\n           <p class="text-center pg-second-message" style="color: #151313;"></p>\n\n\n\n            <p style="margin-top: 3px;">\n\n            	<!-- <ion-item class="selectdrop" text-center>\n\n  				  <ionic-selectable\n\n  				    item-content\n\n  				    name ="myuserRole"\n\n  				    [(ngModel)]="myuserRole"\n\n  				    [items]="myuserRoles"\n\n  				    itemValueField="code"\n\n  				    itemTextField="role"\n\n  				    [canSearch]="true"\n\n  				    placeholder="Please Select Your Profession"\n\n  				    (onChange)="roleChange($event)">\n\n  				  </ionic-selectable>\n\n  				  </ion-item>	\n\n                </p> -->\n\n            <ion-item class="selectdrop" text-center  [ngClass]="{\'disabled\': specilitiesDropDown == true, \'notdisabled\':specilitiesDropDown == flase }">\n\n                <ionic-selectable \n\n                    item-content\n\n                    [(ngModel)]="doctorport"\n\n                    name ="doctorport"\n\n                    itemValueField="doctorcode"\n\n                    itemTextField="name"\n\n                    [items]="doctorports" \n\n                    [canSearch]="true"\n\n                    placeholder="Select Profession"\n\n                    [hasVirtualScroll]="true"\n\n                    [virtualScrollHeaderFn]="getGroupText"\n\n                    (onChange)="docPortChange($event)">\n\n                </ionic-selectable>\n\n            </ion-item>\n\n            </p><br/>\n\n            <p>\n\n              <ion-item class="selectdrop" text-center>\n\n                <ionic-selectable\n\n                item-content\n\n                name ="port"\n\n                [(ngModel)]="port"\n\n                [items]="ports"\n\n                itemValueField="name"\n\n                itemTextField="name"\n\n                [canSearch]="true"\n\n                placeholder="Select Country"\n\n                (onChange)="portChange($event)">\n\n                </ionic-selectable>\n\n              </ion-item>	\n\n            </p><br />\n\n            \n\n            <p *ngIf="isShow">\n\n              <ion-item class="selectdrop" text-center>\n\n                <ionic-selectable\n\n                  item-content\n\n                  name ="myState"\n\n                  [(ngModel)]="myState"\n\n                  [items]="myStates"\n\n                  itemValueField="code"\n\n                  itemTextField="name"\n\n                  [canSearch]="true"\n\n                  placeholder="Select State"\n\n                  (onChange)="stateChange($event)">\n\n                </ionic-selectable>\n\n              </ion-item>\n\n            </p>\n\n            \n\n            <!-- <div class="text-center terms-message" >\n\n                <a class="alinks text-left" style="margin-right:12px;  text-decoration: underline; color: #151313;" (click)="termsofservice()">Terms of Service</a> \n\n                <a class="alinks text-right" style="margin-right:8px; text-decoration: underline; color: #151313;"  (click)="privacypolicy()" >Privacy Policy</a> \n\n            </div>\n\n            <p class="text-center font12 white" style="color: #151313;">By clicking on submit,I agree to the privacy policy & terms of service.</p> -->\n\n            <div class="userConsent" style="margin-bottom: 14px;">\n\n              <p class=""> \n\n                <ion-checkbox [(ngModel)]="userConsent2" name="userConsent2"></ion-checkbox> \n\n              </p>\n\n              <p class="font12" style="color: #151313;">I agree to the  <a class="alinks" (click)="privacypolicy()"  style="color: #e85f4f; font-weight: bold;">Privacy Policy</a> & <a class="alinks" (click)="termsofservice()"  style="color: #e85f4f; font-weight: bold;" >Terms of Service</a> </p>\n\n            </div>\n\n            <p id="register_horizotalBar" style="margin: 19px; margin-top: 47px;"></p>\n\n            <div class="text-center">\n\n                <button class="white-button-btn" (click)="submitlogin()"><b>SUBMIT</b></button>\n\n            </div>\n\n        </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\signupwithgoogle\signupwithgoogle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], SignupwithgooglePage);
    return SignupwithgooglePage;
}());

//# sourceMappingURL=signupwithgoogle.js.map

/***/ })

});
//# sourceMappingURL=25.js.map