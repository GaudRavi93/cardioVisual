webpackJsonp([28],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_countryandrolelist_countryandrolelist__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(81);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.ports = [];
        this.myuserRoles = [];
        this.doctorports = [];
        this.error_msg = '';
        this.doctorRoles = [];
        this.myStates = [];
        this.isShow = false;
        this.showAppleSignIn = false;
        this.http_service = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_HttpService__["a" /* HttpService */]);
        this.network_check = injector.get(__WEBPACK_IMPORTED_MODULE_11__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        this.dtStr = this.http_service.dtStr();
        this.clevertapDate = this.http_service.clevertapDate();
        this.localapi = this.http_service.getApi();
        setTimeout(function () {
            _this.network_check.getPageAction('RegisterPage', 'start', '', 'All');
        }, 1000);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_clevertap__["a" /* CleverTap */]();
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]);
        this.loading_service = injector.get(__WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]);
        this.modal_controllar_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */]);
    }
    RegisterPage.prototype.ionViewWillLeave = function () {
        this.network_check.getPageAction('RegisterPage', 'end', '', 'All');
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var user_type = '';
        var role_provider_object = new __WEBPACK_IMPORTED_MODULE_3__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]();
        var confirmalert = this.alert_controller_object.create({
            title: 'Are you a healthcare professional ?',
            message: "<ul><li><strong> Choose <b>'YES'</b> if you are a Doctor or Medical / Healthcare Industry Professional. </strong></li><br/>\n\t          <li><strong> Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient. </strong></li>\n\t        </ul>",
            cssClass: 'popup-pin',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        user_type = "1";
                    }
                }, {
                    text: 'No',
                    handler: function () {
                        user_type = "5";
                    }
                }
            ],
            enableBackdropDismiss: false // <- Here! :)
        });
        confirmalert.present();
        confirmalert.onDidDismiss(function (alertData) {
            if (user_type == "1") {
                //this.doctorports = this.countryandrolelist.getOnlyDoctorRoles();
                //alert('107 '+JSON.stringify(this.doctorports));
                _this.doctorports = role_provider_object.getOnlyDoctorRoles();
            }
            else if (user_type == "5") {
                _this.doctorports = role_provider_object.getPatientRoles();
            }
            else {
                _this.doctorports = role_provider_object.getSpecialitiesPorts();
            }
        });
        this.ports = role_provider_object.getports();
        this.myuserRoles = role_provider_object.getmyuserRoles();
        this.myStates = role_provider_object.getUSstate();
    };
    RegisterPage.prototype.portChange = function (event) {
        if (event.value['name'] == "United States of America") {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    };
    RegisterPage.prototype.stateChange = function (event) { };
    RegisterPage.prototype.docPortChange = function (event) { };
    RegisterPage.prototype.roleChange = function (event) { };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.push('LoginPage');
    };
    RegisterPage.prototype.onFacebook = function () {
        this.navCtrl.push('SignupwithfacebookPage');
        //this.navCtrl.push('DashboardPage');
    };
    RegisterPage.prototype.onGoogle = function () {
        this.navCtrl.push('SignupwithgooglePage');
    };
    RegisterPage.prototype.getGroupText = function (port, portIndex, ports) {
        if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
            return port.country.name;
        }
        return null;
    };
    RegisterPage.prototype.onFormSubmit = function () {
        var _this = this;
        var email = this.email;
        var password = this.password;
        var retypepassword = this.retypepassword;
        var myuserRole = this.myuserRole;
        var country = this.port;
        var userConsnt = this.userConsent;
        var doctor = this.doctorport;
        var usaState = this.myState;
        var referred_by = this.referred_by;
        var referral_code_result = this.validate_referred_by(referred_by);
        var full_name = this.fullName;
        if (typeof full_name === "undefined" || full_name == '') {
            this.error_msg = "Please enter your full name.";
        }
        else if (typeof email === "undefined" || email == '') {
            this.error_msg = 'Please enter your email.';
        }
        else if (email != "" && !this.validateEmail(email)) {
            this.error_msg = 'Please enter valid email address';
        }
        else if (typeof password === "undefined" || password == '') {
            this.error_msg = 'Please enter your password.';
        }
        else if (typeof retypepassword === "undefined" || retypepassword == '') {
            this.error_msg = 'Please Re type your password.';
        }
        else if (password != retypepassword) {
            this.error_msg = "Password doesn't match!";
        } /*else if(typeof myuserRole === "undefined"  || myuserRole == '') {
          this.error_msg = "Please Select Your Profession";
        }*/
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
            this.error_msg = "Please acknowledge the privacy policy & terms of service";
        } /*else if(referred_by !=''){
  
              //setTimeout(() => {
                  alert('settimeout '+JSON.stringify(referral_code_result));
                  if(_.size(referral_code_result) == 0 ){
                      this.error_msg = "Please enter valid referral code";
                  }
              //},2500);
        }*/
        else if (email != '' && password != '' && retypepassword != '' && full_name != '' && country != '' && userConsnt != false && doctor != '' && ((usaState != '' && this.isShow == true) || this.isShow == false)) {
            this.error_msg = '';
            this.loading_service.userregistrationshow();
            var encrptpassword = this.database_provider_object.encode(password);
            //var userRole =  myuserRole['role'];
            //var userRole =  myuserRole['code'];
            var usercountry = country['name'];
            var doctorCodeName = doctor['name'];
            var doctor_code = doctor['doctorcode'];
            var splitTest = doctor_code.split(":");
            var specialities = splitTest[0];
            var sub_Specialities = splitTest[1];
            if (this.isShow) {
                var usa_State = usaState['name'];
                var usa_State_code = usaState['code'];
            }
            else {
                var usa_State = "";
                var usa_State_code = "";
            }
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
                    this.userType = 1;
                    break;
                case "PA/NP/Nurse:Other":
                    this.userType = 1;
                    break;
                case "Medical Trainee/Fellow:Fellow/Resident":
                    this.userType = 1;
                    break;
                case "Medical Trainee/Fellow:Student":
                    this.userType = 1;
                    break;
                case "Medical Trainee/Fellow:Other":
                    this.userType = 1;
                    break;
                case "Other Medical Professional:Ex Physio/Rehab":
                    this.userType = 1;
                    break;
                case "Other Medical Professional:Tech":
                    this.userType = 1;
                    break;
                case "Other Medical Professional:Educators":
                    this.userType = 1;
                    break;
                case "Other Medical Professional:Other":
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
            this.http_service.checkEmailExists(email).subscribe(function (data) {
                if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](data) > 0) {
                    _this.loading_service.hide();
                    if (data[0].verified == 1) {
                        var confirmPopup = _this.alert_controller_object.create({
                            title: '',
                            message: '<p style="color:#ffffff; text-align:center;">You have already registered with this email id. Please login to continue..</p>',
                            enableBackdropDismiss: true,
                            buttons: ['Dismiss']
                        });
                        confirmPopup.present();
                        _this.error_msg = 'You have already registered with this email id. Please login to continue.';
                        _this.navCtrl.push('LoginPage');
                    }
                    else {
                        _this.navCtrl.push('LoginPage');
                    }
                }
                else {
                    var referral_code = email.substring(0, 4) + '' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                    _this.http_object.post(_this.localapi + "/api/CardiovisualUsers", {
                        "fullname": full_name,
                        "email": email,
                        "password": encrptpassword,
                        "gender": null,
                        "userRoleId": _this.userType,
                        "discoveryMethodId": 0,
                        "clevertapId": "",
                        "branchId": "",
                        "branchLink": "",
                        "branchWebUrl": "",
                        "profilePic": "",
                        "medium": "app",
                        "facebookId": "",
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
                    }).subscribe(function (registerUserData) {
                        var response = JSON.parse(registerUserData['_body']);
                        var email = '';
                        var password = '';
                        var retypepassword = '';
                        var myuserRole = '';
                        var country = '';
                        var doctor = '';
                        var usaState = '';
                        full_name = '';
                        _this.insertUpdateLocalDB(response, _this.password);
                        _this.syncLocalDB(_this.userType);
                        localStorage.setItem('userliveId', response.id);
                        _this.storage_object.set('user_logged_in', response.id);
                        var userRoleparams = (_this.userType == 1) ? "doctor" : "patient";
                        localStorage.setItem('cv5userEmail', response.email);
                        localStorage.setItem('cv5userRoleId', response.userRoleId);
                        localStorage.setItem('cv5usrType', userRoleparams);
                        localStorage.setItem('usrSpecialities', response.specialities);
                        localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
                        localStorage.setItem('userIdentity', _this.userType + response.id);
                        localStorage.setItem('verified', response.verified);
                        localStorage.setItem('location', response.location);
                        localStorage.setItem('myProductflg', 'false');
                        localStorage.setItem('productID', 'false');
                        _this.http_service.getPoweredByData(userRoleparams).subscribe(function (results) {
                            var that = _this;
                            var splash_data = [];
                            splash_data = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["filter"](results, function (value) {
                                return (value.isFor == userRoleparams || value.isFor == "all");
                            });
                            if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](splash_data) > 0) {
                                _this.loading_service.hide();
                                _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: _this.userType });
                            }
                            else {
                                setTimeout(function () {
                                    _this.loading_service.hide();
                                    _this.navCtrl.setRoot('DashboardPage');
                                    // this.navCtrl.setRoot('WhatsNewPage');
                                }, 7000);
                                /*if(this.userType == 5){
                                    this.navCtrl.setRoot('OrientationPlaylistNonHcp');
                                } else {
                                    this.navCtrl.setRoot('OrientationPlaylistHcp');
                                }*/
                            }
                        });
                    });
                }
            });
        }
    };
    RegisterPage.prototype.referal_onFormSubmit = function () {
        var _this = this;
        this.loading_service.userregistrationshow();
        var email = this.email;
        var password = this.password;
        var retypepassword = this.retypepassword;
        var myuserRole = this.myuserRole;
        var country = this.port;
        var userConsnt = this.userConsent;
        var doctor = this.doctorport;
        var usaState = this.myState;
        var referred_by = this.referred_by;
        this.error_msg = '';
        if (typeof email === "undefined" || email == '') {
            this.error_msg = 'Please enter your email.';
        }
        else if (email != "" && !this.validateEmail(email)) {
            this.error_msg = 'Please enter valid email address';
        }
        else if (typeof password === "undefined" || password == '') {
            this.error_msg = 'Please enter your password.';
        }
        else if (typeof retypepassword === "undefined" || retypepassword == '') {
            this.error_msg = 'Please Re type your password.';
        }
        else if (password != retypepassword) {
            this.error_msg = "Password doesn't match!";
        } /*else if(typeof myuserRole === "undefined"  || myuserRole == '') {
            this.error_msg = "Please Select Your Profession";
        }*/
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
        else if (this.referred_by != '') {
            this.http_service.checkReferralCode(referred_by).subscribe(function (result) {
                _this.referral_code_result = result;
            });
            setTimeout(function () {
                if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](_this.referral_code_result) == 0 || _this.referral_code_result == 'undefined') {
                    _this.error_msg = "Please enter valid referral code";
                }
            }, 2500);
        }
        if (this.error_msg != '') {
            this.loading_service.hide();
        }
        setTimeout(function () {
            if (email != '' && password != '' && retypepassword != '' && country != '' && userConsnt != false && doctor != '' && (((usaState != '') && _this.isShow == true) || _this.isShow == false) && _this.error_msg == '') {
                _this.error_msg = '';
                var encrptpassword = _this.database_provider_object.encode(password);
                //var userRole =  myuserRole['role'];
                //var userRole =  myuserRole['code'];
                var usercountry = country['name'];
                var doctorCodeName = doctor['name'];
                var doctor_code = doctor['doctorcode'];
                var splitTest = doctor_code.split(":");
                var specialities = splitTest[0];
                var sub_Specialities = splitTest[1];
                if (_this.isShow) {
                    var usa_State = usaState['name'];
                    var usa_State_code = usaState['code'];
                }
                else {
                    var usa_State = "";
                    var usa_State_code = "";
                }
                switch (doctor_code) {
                    case "Cardiovascular Doctor:EP":
                        // code...
                        _this.userType = 1;
                        break;
                    case "Cardiovascular Doctor:Invasive":
                        _this.userType = 1;
                        break;
                    case "Cardiovascular Doctor:Non-Invasive":
                        _this.userType = 1;
                        break;
                    case "Cardiovascular Doctor:Surgeon":
                        _this.userType = 1;
                        break;
                    case "Cardiovascular Doctor:Other":
                        _this.userType = 1;
                        break;
                    case "Doctor:Int. Med/FM":
                        _this.userType = 1;
                        break;
                    case "Doctor:Endocrinologist":
                        _this.userType = 1;
                        break;
                    case "Doctor:Physiotherapist":
                        _this.userType = 1;
                        break;
                    case "Doctor:Other":
                        _this.userType = 1;
                        break;
                    case "PA/NP/Nurse:PA/NP/RN":
                        _this.userType = 1;
                        break;
                    case "PA/NP/Nurse:Student":
                        _this.userType = 1;
                        break;
                    case "PA/NP/Nurse:Other":
                        _this.userType = 1;
                        break;
                    case "Medical Trainee/Fellow:Fellow/Resident":
                        _this.userType = 1;
                        break;
                    case "Medical Trainee/Fellow:Student":
                        _this.userType = 1;
                        break;
                    case "Medical Trainee/Fellow:Other":
                        _this.userType = 1;
                        break;
                    case "Other Medical Professional:Ex Physio/Rehab":
                        _this.userType = 1;
                        break;
                    case "Other Medical Professional:Tech":
                        _this.userType = 1;
                        break;
                    case "Other Medical Professional:Educators":
                        _this.userType = 1;
                        break;
                    case "Other Medical Professional:Other":
                        _this.userType = 1;
                        break;
                    case "Non-Healthcare Professional:Curious Learner":
                        _this.userType = 5;
                        break;
                    case "Non-Healthcare Professional:Media":
                        _this.userType = 5;
                        break;
                    case "Non-Healthcare Professional:Other":
                        _this.userType = 5;
                        break;
                    case "Patient:Patient":
                        _this.userType = 5;
                        break;
                    case "Healthcare Industry Professional:Device":
                        _this.userType = 1;
                        break;
                    case "Healthcare Industry Professional:Pharma":
                        _this.userType = 1;
                        break;
                    case "Healthcare Industry Professional:Other":
                        _this.userType = 1;
                        break;
                }
                _this.http_service.checkEmailExists(email).subscribe(function (data) {
                    if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](data) > 0) {
                        _this.loading_service.hide();
                        if (data[0].verified == 1) {
                            var confirmPopup = _this.alert_controller_object.create({
                                title: '',
                                message: '<p style="color:#ffffff; text-align:center;">You have already registered with this email id. Please login to continue..</p>',
                                enableBackdropDismiss: true,
                                buttons: ['Dismiss']
                            });
                            confirmPopup.present();
                            _this.error_msg = 'You have already registered with this email id. Please login to continue.';
                            _this.navCtrl.push('LoginPage');
                        }
                        else {
                            _this.navCtrl.push('LoginPage');
                        }
                    }
                    else {
                        var referral_code = email.substring(0, 4) + '' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                        var referred_by_user_id = 0;
                        if (referred_by != '') {
                            referred_by_user_id = _this.referral_code_result[0].id;
                        }
                        _this.http_object.post(_this.localapi + "/api/CardiovisualUsers", {
                            "fullname": "",
                            "email": email,
                            "password": encrptpassword,
                            "gender": null,
                            "userRoleId": _this.userType,
                            "discoveryMethodId": 0,
                            "clevertapId": "",
                            "branchId": "",
                            "branchLink": "",
                            "branchWebUrl": "",
                            "profilePic": "",
                            "medium": "app",
                            "facebookId": "",
                            "specialities": specialities,
                            "userRoleSubType": sub_Specialities,
                            "location": usercountry,
                            "state": usa_State_code,
                            "referral_code": referral_code,
                            "npi_number": 0,
                            "npi_id": 0,
                            "referred_by": referred_by_user_id,
                            "verified": 1,
                            "username": "",
                            "isPaid": 0
                        }).subscribe(function (registerUserData) {
                            var response = JSON.parse(registerUserData['_body']);
                            var email = '';
                            var password = '';
                            var retypepassword = '';
                            var myuserRole = '';
                            var country = '';
                            var doctor = '';
                            var usaState = '';
                            _this.insertUpdateLocalDB(response, _this.password);
                            _this.syncLocalDB(_this.userType);
                            localStorage.setItem('userliveId', response.id);
                            _this.storage_object.set('user_logged_in', response.id);
                            var userRoleparams = (_this.userType == 1) ? "doctor" : "patient";
                            localStorage.setItem('cv5userEmail', response.email);
                            localStorage.setItem('cv5userRoleId', response.userRoleId);
                            localStorage.setItem('cv5usrType', userRoleparams);
                            localStorage.setItem('usrSpecialities', response.specialities);
                            localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
                            localStorage.setItem('userIdentity', _this.userType + response.id);
                            localStorage.setItem('verified', response.verified);
                            localStorage.setItem('location', response.location);
                            localStorage.setItem('myProductflg', 'false');
                            localStorage.setItem('productID', 'false');
                            localStorage.setItem('referral_code', response.referral_code);
                            localStorage.setItem('referred_by', response.referred_by);
                            _this.http_service.getPoweredByData(userRoleparams).subscribe(function (results) {
                                var that = _this;
                                var splash_data = [];
                                splash_data = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["filter"](results, function (value) {
                                    return (value.isFor == userRoleparams || value.isFor == "all");
                                });
                                if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](splash_data) > 0) {
                                    _this.loading_service.hide();
                                    _this.navCtrl.setRoot('SplashesPage', { powerdbyResult: splash_data, type: 'PoweredBy', userType: _this.userType });
                                }
                                else {
                                    setTimeout(function () {
                                        _this.loading_service.hide();
                                        _this.navCtrl.setRoot('DashboardPage');
                                        // this.navCtrl.setRoot('WhatsNewPage');
                                    }, 7000);
                                }
                            });
                        });
                    }
                });
            }
        }, 3000);
    };
    RegisterPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    RegisterPage.prototype.insertUpdateLocalDB = function (data, password) {
        var _this = this;
        var liveId = data.id;
        var userData = {
            "email": data.email,
            "username": "",
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
        var userType = (data.userRoleId == 1) ? "doctor" : "patient";
        this.clevertap_object.onUserLogin({
            "Identity": userType + data.id,
            "Email": "'" + data.email + "'",
            "Location": "'" + data.location + "'",
            "UserRoleId": "'" + data.userRoleId + "'",
            "UserType": "'" + userType + "'",
            "Specialities": "'" + data.specialities + "'",
            "SubSpecialities": "'" + data.userRoleSubType + "'",
            "medium": "'" + data.medium + "'",
            "custom": "Registration with Email"
        });
        /*this.clevertap.onUserLogin({
            "Identity":userType+data.id,
            "Email":"'"+data.email+"'",
            "Location":"'"+data.location+"'",
            "UserRoleId":"'"+data.userRoleId+"'",
            "UserType":"'"+userType+"'",
            "Specialities":"'"+data.specialities+"'",
            "SubSpecialities":"'"+data.userRoleSubType+"'",
            "medium" :"'"+ data.medium+"'",
            "custom":"Registration with Email"
        });*/
        this.clevertap_object.profileSet({
            "Name": "'" + this.getNameFromEmail(data.email) + "'",
        });
        var params = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "userRoleId": data.userRoleId,
            "userType": userType,
            "specialities": data.specialities,
            "subSpecialities": data.userRoleSubType,
            "userEmail": data.email,
            "medium": data.medium,
            "verified": data.verified,
            "userRoleSubType": data.userRoleSubType,
            "location": data.location
        };
        this.clevertap_object.recordEventWithNameAndProps("userRegistration", params);
        var userCondition = new Array("");
        this.database_provider_object.fetchAllData('new_user_info', userCondition).then(function (userresult) {
            if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](userresult) > 0) {
                _this.database_provider_object.updateNewUserInfo(userData);
            }
            else {
                _this.database_provider_object.storeUserdata(userData);
            }
        });
        var devicesData = {
            "deviceToken": localStorage.getItem('getDeviceuuid'),
            "deviceType": localStorage.getItem('getDevicePlatform'),
            "userId": liveId,
            "osVersion": localStorage.getItem('getDeviceversion'),
            "model": localStorage.getItem('modelNo'),
            "updatedAt": new Date().toISOString(),
            "status": 1
        };
        this.database_provider_object.saveDeviceDataToApi(devicesData);
    };
    RegisterPage.prototype.syncLocalDB = function (userType) {
        var userID = localStorage.getItem('userliveId');
        userType = (userType == 1) ? "doctor" : "patient";
        var email = localStorage.getItem('cv5userEmail');
        this.loading_service.generateandSaveLinks(userID, userType, email);
        // Get topics detail from API
        this.database_provider_object.getTopicsAPIData(userType);
        this.database_provider_object.dashboardInformationAPIData(userType);
        //insert playlist data from api
        this.database_provider_object.insertPlaylistsAPIData(localStorage.getItem('userliveId'));
        // Get categories detail from API
        this.database_provider_object.getCategoriesAPIData(userType);
        this.database_provider_object.getCardioSplashes(userType);
        this.database_provider_object.getSubTopicsAPIData(userType);
        this.database_provider_object.getOrderDetailsAPIData(localStorage.getItem('userliveId'));
        //information table
        this.database_provider_object.getInformationAPIData(userType);
        //channels table
        this.database_provider_object.getChannelsApiData(userType);
        //custom_lisiting
        this.database_provider_object.getCutomlistingApi();
        //custom video json
        this.database_provider_object.getCutomVideoJsonApi();
        //sponsored by table
        this.database_provider_object.getSponsoredByData(userType);
        //whatsnew data by table
        this.database_provider_object.getWhatsnewData(userType);
        //whatsnew page section title
        this.database_provider_object.getWhatsnewSectionTitleData(userType);
        //custom playlist
        this.database_provider_object.getCustomPlaylistData(localStorage.getItem('userliveId'));
        this.database_provider_object.getUserNotificationData(userType);
        localStorage.setItem('app_sync_whatsnew', 'noSync');
    };
    RegisterPage.prototype.termsofservice = function () {
        new __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
        //this.inappBrowser.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
    };
    RegisterPage.prototype.getNameFromEmail = function (email) {
        var name = email.replace(/^(.+)@(.+)$/g, '$1').replace(/[\. __]+/g, " ").replace(/\s|[0-9]/g, ' ');
        return name;
    };
    RegisterPage.prototype.privacypolicy = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal_controllar_object.create('ModalPage', { data: 'Privacy Policy' }, myModalOptions);
        myModal.present();
    };
    RegisterPage.prototype.validate_referred_by = function (referral_code) {
        this.http_service.checkReferralCode(referral_code).subscribe(function (result) {
            return result;
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\register\register.html"*/'\n<ion-content padding="false" class="user-setup-new">\n  \n  <div id="register" class="user-register">\n    <p class="or-tag font15" style="color: #151313;"><b>Sign Up with Email</b></p>\n    <form name="signUpForm" novalidate=""  (ngSubmit)="onFormSubmit()">\n      <div class="error text-center">{{error_msg}}</div>\n        <p class="text-center">\n            <input type="text" id="fullName" name="fullName" required value="" [(ngModel)]="fullName" placeholder="Full Name"/>\n        </p>\n        <p class="text-center">\n            <input type="email" id="email" name="email" required value="" [(ngModel)]="email" placeholder="Email Address"/>\n        </p>\n        <p class="text-center">\n            <input type="password" id="password" name="password" required value="" [(ngModel)]="password" placeholder="Create Password"/>\n        </p>\n        <p class="text-center">\n            <input type="password" id="retypepassword" name="retypepassword" required value="" [(ngModel)]="retypepassword" placeholder="Re-Type Password" />\n        </p>\n        <!-- <p class="text-center pg-second-message"> </p> -->\n        <p class="text-center pg-second-message" style="color: #151313;">Please provide your profession and country to help us customize the app.</p>\n        <!-- <p>\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable\n              item-content\n              name ="myuserRole"\n              [(ngModel)]="myuserRole"\n              [items]="myuserRoles"\n              itemValueField="code"\n              itemTextField="role"\n              [canSearch]="true"\n              placeholder="Please Select Your Profession"\n              (onChange)="roleChange($event)">\n              \n            </ionic-selectable>\n          </ion-item> \n        </p><br/> -->\n        <p>\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable\n              item-content\n              name ="port"\n              [(ngModel)]="port"\n              [items]="ports"\n              itemValueField="name"\n              itemTextField="name"\n              [canSearch]="true"\n              placeholder="Please Select Country"\n              (onChange)="portChange($event)">\n            </ionic-selectable>\n          </ion-item> \n        </p><br/>\n        <p *ngIf="isShow">\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable\n              item-content\n              name ="myState"\n              [(ngModel)]="myState"\n              [items]="myStates"\n              itemValueField="code"\n              itemTextField="name"\n              [canSearch]="true"\n              placeholder="Select State"\n              (onChange)="stateChange($event)">\n            </ionic-selectable>\n          </ion-item>\n          <br/> \n        </p>\n\n        <p>\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable \n              item-content\n              [(ngModel)]="doctorport"\n              name ="doctorport"\n              itemValueField="doctorcode"\n              itemTextField="name"\n              [items]="doctorports" \n              [canSearch]="true"\n              placeholder="Please Select Your Role"\n              [hasVirtualScroll]="true"\n              [virtualScrollHeaderFn]="getGroupText"\n              (onChange)="docPortChange($event)">\n            </ionic-selectable>\n          </ion-item>\n        </p>\n        \n        <!-- <p class="text-center">\n          <input type="text" id="referred_by" name="referred_by" value="" [(ngModel)]="referred_by" placeholder="Referral Code"/>\n        </p> -->\n\n\n        <!-- <div class="text-center terms-message" >\n          <a class="alinks text-left" (click)="termsofservice()"  style="margin-right:12px;  text-decoration: underline; color: #151313;" >Terms of Service</a> \n          <a class="alinks text-right" (click)="privacypolicy()"  style="margin-right:8px; text-decoration: underline; color: #151313;">Privacy Policy</a> \n        </div> -->\n        <!-- <p class="text-center font12 white" style="color: #151313;">By clicking on submit,I agree to the privacy policy & terms of service.</p> -->\n        <div class="userConsent">\n          <p class=""> \n            <ion-checkbox [(ngModel)]="userConsent" name="userConsent"></ion-checkbox> \n          </p>\n          <p class="font12" style="color: #151313;">I agree to the  <a class="alinks" (click)="privacypolicy()"  style="color: #e85f4f; font-weight: bold;">Privacy Policy</a> & <a class="alinks" (click)="termsofservice()"  style="color: #e85f4f; font-weight: bold;" >Terms of Service</a> </p>\n        </div>\n       \n        <div class="text-center">\n            <button class="white-button-btn"><b>SUBMIT</b></button>\n        </div>\n    </form>\n    <p class="text-center">\n        <button class="loginBtn loginBtn--facebook"  style="text-align: center;" (click)="onFacebook()"><b>Login or Sign Up with Facebook</b></button>\n    </p>\n    <p class="text-center">\n        <!-- <button class="loginBtn loginBtn--google" style="text-align: center;" (click)="onGoogle()"><b>Sign Up with Google</b></button> -->\n        <button class="loginBtn loginBtn--google" style="text-align: center;" (click)="onGoogle()"><b>Login or Sign Up with Google</b></button>\n    </p>\n    <div id="register_horizotalBar"></div>\n    <p class="text-center font24" style="margin: 18px 0px 0px 0px;">Already a Member ?</p>\n    <p class="text-center">\n      <button class="white-button-btn" (click)="goBack()">CLICK HERE TO LOG IN</button>\n    </p>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\register\register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Injector */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=28.js.map