webpackJsonp([26],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupwithfacebookPageModule", function() { return SignupwithfacebookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupwithfacebook__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupwithfacebookPageModule = /** @class */ (function () {
    function SignupwithfacebookPageModule() {
    }
    SignupwithfacebookPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signupwithfacebook__["a" /* SignupwithfacebookPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signupwithfacebook__["a" /* SignupwithfacebookPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], SignupwithfacebookPageModule);
    return SignupwithfacebookPageModule;
}());

//# sourceMappingURL=signupwithfacebook.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupwithfacebookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_countryandrolelist_countryandrolelist__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__);
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














/**
 * Generated class for the SignupwithfacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupwithfacebookPage = /** @class */ (function () {
    function SignupwithfacebookPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.ports = [];
        this.myuserRoles = [];
        this.isLoggedIn = false;
        this.users = '';
        this.name = '';
        this.email = '';
        this.gender = '';
        this.picture = '';
        this.error_msg = '';
        this.doctorports = [];
        this.doctorRoles = [];
        this.myStates = [];
        this.isShow = false;
        this.country_and_role_list_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]);
        this.facebook_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__services_HttpService__["a" /* HttpService */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]);
        this.device_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_12__ionic_native_clevertap__["a" /* CleverTap */]();
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_13__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_loading_service__["a" /* LoadingService */]);
        this.localapi = this.http_service_object.getApi();
        this.dtStr = this.http_service_object.dtStr();
        //console.log('dtStr-->'+this.dtStr);
        this.clevertapDate = this.http_service_object.clevertapDate();
        setTimeout(function () {
            _this.network_check_object.getPageAction('SignupwithfacebookPage', 'start', '', localStorage.getItem('cv5usrType'));
        }, 1000);
    }
    SignupwithfacebookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupwithfacebookPage');
        this.specilitiesDropDown = true;
        //console.log('ithis.country_and_role_list_provider_object.getmyuserRoles()-->'+JSON.stringify(this.country_and_role_list_provider_object.getmyuserRoles()));
        this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
        this.myStates = this.country_and_role_list_provider_object.getUSstate();
        this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); // This will log "I do something useful!"
        this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
    };
    SignupwithfacebookPage.prototype.ionViewWillLeave = function () {
        this.network_check_object.getPageAction('SignupwithfacebookPage', 'end', '', 'All');
    };
    SignupwithfacebookPage.prototype.portChange = function (event) {
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
    SignupwithfacebookPage.prototype.stateChange = function (event) {
        console.log('stateChange value:' + JSON.stringify(event.value));
    };
    SignupwithfacebookPage.prototype.docPortChange = function (event) {
        console.log('doc port:' + event.value);
    };
    SignupwithfacebookPage.prototype.getGroupText = function (port, portIndex, ports) {
        if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
            return port.country.name;
        }
        return null;
    };
    SignupwithfacebookPage.prototype.roleChange = function (event) {
        console.log('role:', event.value);
    };
    SignupwithfacebookPage.prototype.goBack = function () {
        this.navCtrl.push('LoginPage');
    };
    SignupwithfacebookPage.prototype.facebookSignIn = function () {
        var _this = this;
        //console.log('hi--1');
        //alert('hi--1');
        this.facebook_object.getLoginStatus()
            .then(function (res) {
            //console.log('hi--2'+JSON.stringify(res.status));
            //alert('hi--2'+JSON.stringify(res));
            //alert('---->-->->->'+JSON.stringify(res.status));
            if (res.status === "connected") {
                _this.loading_service_object.show();
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                //alert('not connecnt');
                _this.loading_service_object.show();
                _this.isLoggedIn = false;
                _this.facebook_object.login(['email', 'public_profile'])
                    .then(function (res) {
                    if (res.status === "connected") {
                        _this.isLoggedIn = true;
                        _this.getUserDetail(res.authResponse.userID);
                    }
                    else {
                        _this.loading_service_object.hide();
                        _this.isLoggedIn = false;
                    }
                })
                    .catch(function (e) { return console.log('Error logging into Facebook------->' + JSON.stringify(e)); });
                _this.loading_service_object.hide();
            }
        })
            .catch(function (e) { return console.log('facebook error--->' + e); });
    };
    SignupwithfacebookPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.facebook_object.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            _this.loading_service_object.hide();
            //alert('getUserDetail res---->'+JSON.stringify(res));
            //console.log('getUserDetail res---->'+JSON.stringify(res));
            //console.log('userid-->'+userid);
            _this.fbDetails = res;
            _this.fbUserId = userid;
            //this.users = res;
            _this.name = res.name;
            _this.email = res.email;
            _this.gender = res.gender;
            _this.picture = res.picture.data.url;
            if (res.hasOwnProperty('email')) {
                _this.http_service_object.checkEmailExists(res.email).subscribe(function (data) {
                    //console.log('_.size(data)--->'+_.size(data));
                    //alert('hi-3');
                    if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](data) > 0) {
                        //alert('hi-4');
                        if (data[0].verified == 1) {
                            //alert('hi-6');
                            ////console.log("datata complete---"+JSON.stringify(profileInfo));
                            _this.putOnlyFBData(data, res, userid);
                        }
                        else {
                            _this.loading_service_object.hide();
                            _this.specilitiesDropDown = false;
                            // var confirmPopupFace = this.alert_controller_object.create({
                            // 	title: '',
                            // 	message: '<p style="color:#ffffff; text-align:center;">Thank you. Now please choose your profession and country..</p>',
                            // 	enableBackdropDismiss: true,
                            // 	buttons: ['Dismiss']
                            // });
                            // confirmPopupFace.present();
                            //alert("Thank you. Now please choose your profession and country.");
                            var user_type = '';
                            var confirmalert = _this.alert_controller_object.create({
                                title: "<p style=\"color:#1c1b1b;\">Thank you. Please provide your profession and country to help us customize the app.</p>",
                                //title: `Are you a healthcare professional`,
                                subTitle: "<p style=\"text-align:center;\"> <strong>Are you a healthcare professional ? </strong></p>",
                                message: "\n\t\t\t\t\t\t        <ul>\n\t\t\t\t\t\t          <li><strong>Choose <b>'YES'</b> if you are a Doctor or Medical / Healthcare Industry Professional.</strong></li><br/>\n\t\t\t\t\t\t          <li><strong>Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient.</strong></li>\n\t\t\t\t\t\t        </ul>\n\t\t\t\t\t\t      ",
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
                    }
                    else {
                        //alert('hi-5');
                        _this.loading_service_object.hide();
                        _this.specilitiesDropDown = false;
                        // var confirmPopupFace = this.alert_controller_object.create({
                        // 		title: '',
                        // 		message: '<p style="color:#ffffff; text-align:center;">Thank you. Now please choose your profession and country..</p>',
                        // 		enableBackdropDismiss: true,
                        // 		buttons: ['Dismiss']
                        // 	});
                        // confirmPopupFace.present();
                        var user_type = '';
                        var confirmalert = _this.alert_controller_object.create({
                            title: "<p style=\"color:#1c1b1b;\">Thank you. Please provide your profession and country to help us customize the app.</p>",
                            //title: `Are you a healthcare professional`,
                            subTitle: "<p style=\"text-align:center;\"> <strong>Are you a healthcare professional ? </strong></p>",
                            message: "\n\t\t\t\t\t        <ul>\n\t\t\t\t\t          <li><strong>Choose <b>'YES'</b> if you are a Doctor or Medical / Healthcare Industry Professional.</strong></li><br/>\n\t\t\t\t\t          <li><strong>Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient.</strong></li>\n\t\t\t\t\t        </ul>\n\t\t\t\t\t      ",
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
                _this.tmpDetails = res;
                _this.tmpDetails.medium = "facebook";
                _this.loading_service_object.hide();
                _this.navCtrl.setRoot('SignupwithsocialnoemailPage', { 'tmp_Details': res });
            }
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    SignupwithfacebookPage.prototype.submitlogin = function () {
        var _this = this;
        var myuserRole = this.myuserRole;
        var country = this.port;
        var usaState = this.myState;
        var fbDetails = this.fbDetails;
        var userConsnt = this.userConsent1;
        var doctor = this.doctorport;
        console.log('fbDetails-->' + JSON.stringify(this.fbDetails));
        console.log('fbDetails-->' + JSON.stringify(this.fbDetails));
        console.log('this.gender-->' + JSON.stringify(this.gender));
        //alert('this.gender-->'+JSON.stringify(this.gender));
        this.gender = '';
        if (this.gender == 'male') {
            this.fbGender = 'M';
        }
        else if (this.gender == 'female') {
            this.fbGender = 'F';
        }
        //alert('this.fbGender-->'+JSON.stringify(this.fbGender));
        //alert('fbDetails.gender-->'+JSON.stringify(fbDetails.gender));
        if (this.isLoggedIn === false || this.fbDetails == '' || this.fbDetails == undefined) {
            this.error_msg = "Please Signup with Facebook.";
        }
        /*else if(typeof myuserRole === "undefined"  || myuserRole == '') {
            this.error_msg = "Please Select Your Profession";
        }*/ else if (typeof country === "undefined" || country == '') {
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
        else if (doctor != '' && country != '' && this.fbDetails != '' && userConsnt != false && ((usaState != '' && this.isShow == true) || this.isShow == false)) {
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
            this.http_service_object.checkEmailExists(fbDetails.email).subscribe(function (data) {
                console.log('_.size(data)--->' + __WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](data));
                //alert('_.size(data)--->'+_.size(data));
                if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](data) > 0) {
                    _this.loading_service_object.hide();
                    console.log('data --->' + JSON.stringify(data));
                    console.log('data--->id-->' + JSON.stringify(data.id));
                    console.log('data--->id 0-->' + JSON.stringify(data[0].id));
                    _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + data[0].id, {
                        "fullname": fbDetails.name,
                        "email": fbDetails.email,
                        "gender": fbDetails.gender,
                        "profilePic": fbDetails.picture.data.url,
                        "medium": "facebook",
                        "facebookId": fbDetails.id,
                        "userRoleId": _this.userType,
                        "specialities": specialities,
                        "userRoleSubType": sub_Specialities,
                        "location": usercountry,
                        "verified": 1
                    }).subscribe(function (userDataInsertSuccess) {
                        console.log(userDataInsertSuccess.text());
                        var response = JSON.parse(userDataInsertSuccess['_body']);
                        //console.log('userDataInsertSuccess.text()--->'+JSON.stringify(response));
                        _this.loading_service_object.hide();
                        var myuserRole = '';
                        var country = '';
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
                        localStorage.setItem('myProductflg', 'false');
                        localStorage.setItem('productID', 'false');
                        localStorage.setItem('location', response.location);
                        localStorage.setItem('referred_by', response.referred_by);
                        localStorage.setItem('referral_code', response.referral_code);
                        _this.syncLocalDB(_this.userType);
                        _this.insertUpdateLocalDB(response, "");
                        _this.http_service_object.getPoweredByData(userRoleparams).subscribe(function (results) {
                            console.log('results-->' + JSON.stringify(results));
                            _this.loading_service_object.hide();
                            var that = _this;
                            var splash_data = [];
                            splash_data = __WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["filter"](results, function (value) {
                                return (value.isFor == userRoleparams || value.isFor == "all");
                            });
                            if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](splash_data) > 0) {
                                _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: _this.userType });
                                //$state.go('app.hcpbanner',{ usertype : userType});
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
                            _this.loading_service_object.hide();
                        });
                    }, function (userDataInsertError) {
                        _this.loading_service_object.hide();
                        //alert(userDataInsertError.text());
                        console.log(userDataInsertError.text());
                    });
                }
                else {
                    var referral_code = fbDetails.email.substring(0, 4) + '' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                    localStorage.setItem('referral_code', referral_code);
                    _this.http_object.post(_this.localapi + "/api/CardiovisualUsers", {
                        "fullname": fbDetails.name,
                        "email": fbDetails.email,
                        "password": "",
                        "gender": fbDetails.gender,
                        "userRoleId": _this.userType,
                        "discoveryMethodId": 0,
                        "clevertapId": "",
                        "branchId": "",
                        "branchLink": "",
                        "branchWebUrl": "",
                        "profilePic": fbDetails.picture.data.url,
                        "medium": "facebook",
                        "facebookId": fbDetails.id,
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
                    }).subscribe(function (userDataInsertSuccess1) {
                        _this.loading_service_object.hide();
                        var myuserRole = '';
                        var country = '';
                        var usaState = '';
                        var response = JSON.parse(userDataInsertSuccess1['_body']);
                        //alert('---response---->'+JSON.stringify(response));
                        console.log('---response---->' + JSON.stringify(response));
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
                        localStorage.setItem('myProductflg', 'false');
                        localStorage.setItem('productID', 'false');
                        localStorage.setItem('location', response.location);
                        _this.syncLocalDB(_this.userType);
                        _this.insertUpdateLocalDB(response, "");
                        _this.http_service_object.getPoweredByData(userRoleparams).subscribe(function (results) {
                            console.log('results-->' + JSON.stringify(results));
                            _this.loading_service_object.hide();
                            var that = _this;
                            var splash_data = [];
                            splash_data = __WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["filter"](results, function (value) {
                                return (value.isFor == userRoleparams || value.isFor == "all");
                            });
                            if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](splash_data) > 0) {
                                _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: _this.userType });
                                //$state.go('app.hcpbanner',{ usertype : userType});
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
                            _this.loading_service_object.hide();
                            console.log('err1->' + err);
                            //alert(err);
                        });
                        //sqlitedatabaseService.signUpToMailChimp(userDataInsertSuccess); 
                        //"ok":true  
                    }, function (error) {
                        console.log('userDataInsertError->' + error);
                        _this.loading_service_object.hide();
                    });
                }
            }, function (err) {
                console.log('err->' + err);
                //alert(err);
            });
        }
    };
    SignupwithfacebookPage.prototype.putOnlyFBData = function (userDetails, fbProfileDetails, fbUserId) {
        var _this = this;
        //console.log('putOnlyFBData');
        this.http_object.put(this.localapi + "/api/CardiovisualUsers/" + userDetails[0].id, {
            "fullname": fbProfileDetails.name,
            "email": fbProfileDetails.email,
            "gender": fbProfileDetails.gender,
            "profilePic": fbProfileDetails.picture.data.url,
            "medium": "facebook",
            "facebookId": fbUserId
        }).subscribe(function (userDataInsertSuccess) {
            _this.loading_service_object.hide();
            //console.log(userDataInsertSuccess.text());
            //console.log('userDetails[0].password-->'+userDetails[0].password);
            //console.log('userDetails.password-->'+userDetails.password);
            //console.log('userDataInsertSuccess in put only fb data-->'+JSON.stringify(userDataInsertSuccess));
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
            // this.storage_object.set('user_logged_in', userDetails[0].id);
            // localStorage.setItem('userliveId',userDetails[0].id);
            localStorage.setItem('myProductflg', 'false');
            localStorage.setItem('productID', 'false');
            _this.http_service_object.getRegisteredDeviceCount(userDetails[0].id).subscribe(function (device_data) {
                console.log('device_data response--->' + JSON.stringify(device_data));
                if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](device_data) > 0) {
                    var myDeviceStatus = __WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["where"](device_data, { deviceToken: _this.database_provider_object.getOSSpecificUUID(userDetails[0].id) });
                    console.log('myDeviceStatus-->' + JSON.stringify(myDeviceStatus));
                    var osType = _this.device_object.platform.toLowerCase();
                    console.log('osType-->' + osType);
                    _this.http_service_object.getAppDetails(osType).subscribe(function (appDetails) {
                        var limit_device_count = appDetails[0].maxDeviceLimit;
                        if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](myDeviceStatus) > 0 && myDeviceStatus.status) {
                            _this.loginSuccess(userDetails, userDetails[0].password, userDataInsertSuccess);
                        }
                        else if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](device_data) < limit_device_count) {
                            _this.loginSuccess(userDetails, userDetails[0].password, userDataInsertSuccess);
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
                    _this.loginSuccess(userDetails, userDetails[0].password, userDataInsertSuccess);
                }
            }, function (err) {
                _this.loading_service_object.hide();
                console.log('getRegisteredDeviceCount err->' + JSON.stringify(err));
                //alert(err);
            });
        }, function (userDataInsertError) {
            _this.loading_service_object.hide();
            //alert(userDataInsertError.text());
            console.log(userDataInsertError.text());
        });
    };
    SignupwithfacebookPage.prototype.loginSuccess = function (data, password, userDataInsertSuccess) {
        var _this = this;
        //console.log('data---->'+JSON.stringify(data));
        this.storage_object.set('user_logged_in', data[0].id);
        localStorage.setItem('userliveId', data[0].id);
        this.syncLocalDB(data[0].userRoleId);
        this.insertUpdateLocalDB(data[0], password);
        this.loading_service_object.hide();
        //sqlitedatabaseService.signUpToMailChimp(userDataInsertSuccess);
        this.userType = data[0].userRoleId;
        console.log('this.userType--> login success-->' + this.userType);
        /*by Sanjeev 2019 a[ril] 11*/
        this.userRoleparams = (this.userType == 1) ? "doctor" : "patient";
        this.http_service_object.getPoweredByData(this.userRoleparams).subscribe(function (results) {
            console.log('results-->' + JSON.stringify(results));
            var that = _this;
            var splash_data = [];
            splash_data = __WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["filter"](results, function (value) {
                return (value.isFor == that.userRoleparams || value.isFor == "all");
            });
            if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](splash_data) > 0) {
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
    SignupwithfacebookPage.prototype.syncLocalDB = function (user_type) {
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
    SignupwithfacebookPage.prototype.insertUpdateLocalDB = function (result, password) {
        var _this = this;
        console.log('insertUpdateLocalDB result-->' + JSON.stringify(result));
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
        console.log('insertUpdateLocalDB userData-->' + JSON.stringify(userData));
        var userCondition = new Array("");
        this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (userresult) {
            if (__WEBPACK_IMPORTED_MODULE_8_underscore_underscore__["size"](userresult) > 0) {
                _this.database_provider_object.updateNewUserInfo(userData);
            }
            else {
                //this.database_provider_object.insertNewUserInfo(userData);
                _this.database_provider_object.storeUserdata(userData);
            }
        });
        var user_type_temp = (result.userRoleId == 1) ? "doctor" : "patient";
        this.clevertap_object.onUserLogin({
            "Identity": user_type_temp + result.id,
            "Email": "'" + result.email + "'",
            "custom": "Login with Facebook"
        });
        // this.clevertap_object.profileSet({
        // 	"Name":"'"+result.fullname+"'",
        // 	"Gender" : result.gender,
        // 	"Photo":  result.profilePic,
        // 	"Location":"'"+result.location+"'",
        // 	"UserRoleId":"'"+result.userRoleId+"'",
        // 	"UserType":"'"+user_type_temp+"'",
        // 	"Specialities":"'"+result.specialities+"'",
        // 	"SubSpecialities":"'"+result.userRoleSubType+"'",
        // 	"medium" :"'"+ result.medium+"'",
        // });
        /*
        var params = {
            "record_time" : this.dtStr,
            "record_date" : this.clevertapDate,
            "os" : localStorage.getItem('getDevicePlatform'),
            "userRoleId" : result.userRoleId,
            "userType": user_type_temp,
            "userEmail" : result.email,
            "medium" : result.medium,
            "verified" : result.verified,
            "specialities": result.specialities,
            "subSpecialities": result.userRoleSubType,
            "userRoleSubType" : result.userRoleSubType,
            "location" : result.location
        };
        this.clevertap_object.recordEventWithNameAndProps("facebookLogin",params);
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
    SignupwithfacebookPage.prototype.termsofservice = function () {
        this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
    };
    SignupwithfacebookPage.prototype.privacypolicy = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal_controllar_object.create('ModalPage', { data: 'Privacy Policy' }, myModalOptions);
        myModal.present();
    };
    SignupwithfacebookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signupwithfacebook',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\signupwithfacebook\signupwithfacebook.html"*/'<!--\n  Generated template for the SignupwithfacebookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding="false" class="user-setup-new user-register">\n\n  <button class="previous" (click)="goBack()">&laquo;BACK</button>\n  <div id="register" class="loginScreen-center">\n    <form>\n    	<div class="error text-center">{{error_msg}}</div>\n        <p class="text-center">\n            <button class="loginBtn loginBtn--facebook signup-btn" style="text-align: center;" (click)="facebookSignIn()"><b>Sign in with Facebook</b></button>\n        </p>\n        <p class="text-center pg-second-message" style="color: #151313;"></p>\n        <p style="margin-top: 3px;">\n          <ion-item class="selectdrop" text-center  [ngClass]="{\'disabled\': specilitiesDropDown == true, \'notdisabled\':specilitiesDropDown == flase }">\n            <ionic-selectable \n                item-content\n                [(ngModel)]="doctorport"\n                name ="doctorport"\n                itemValueField="doctorcode"\n                itemTextField="name"\n                [items]="doctorports" \n                [canSearch]="true"\n                placeholder="Select Profession"\n                [hasVirtualScroll]="true"\n                [virtualScrollHeaderFn]="getGroupText"\n                (onChange)="docPortChange($event)">\n            </ionic-selectable>\n          </ion-item>\n        </p><br/>\n        <p>\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable\n            item-content\n            name ="port"\n            [(ngModel)]="port"\n            [items]="ports"\n            itemValueField="name"\n            itemTextField="name"\n            [canSearch]="true"\n            placeholder="Select Country"\n            (onChange)="portChange($event)">\n            </ionic-selectable>\n          </ion-item>	\n        </p><br />\n        <p *ngIf="isShow">\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable\n              item-content\n              name ="myState"\n              [(ngModel)]="myState"\n              [items]="myStates"\n              itemValueField="code"\n              itemTextField="name"\n              [canSearch]="true"\n              placeholder="Select State"\n              (onChange)="stateChange($event)">\n            </ionic-selectable>\n          </ion-item>\n        </p>\n        <div class="userConsent" style="">\n          <p class=""> \n            <ion-checkbox [(ngModel)]="userConsent1" name="userConsent1"></ion-checkbox> \n          </p>\n          <p class="font12" style="color: #151313;">I agree to the  <a class="alinks" (click)="privacypolicy()"  style="color: #e85f4f; font-weight: bold;">Privacy Policy</a> & <a class="alinks" (click)="termsofservice()"  style="color: #e85f4f; font-weight: bold;" >Terms of Service</a> </p>\n        </div>\n\n        <p id="register_horizotalBar" style="margin: 19px; margin-top: 47px;"></p>\n        <div class="text-center">\n            <button class="white-button-btn" (click)="submitlogin()"><b>SUBMIT</b></button>\n        </div>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\signupwithfacebook\signupwithfacebook.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], SignupwithfacebookPage);
    return SignupwithfacebookPage;
}());

//# sourceMappingURL=signupwithfacebook.js.map

/***/ })

});
//# sourceMappingURL=26.js.map