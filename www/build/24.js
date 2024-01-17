webpackJsonp([24],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupwithsocialnoemailPageModule", function() { return SignupwithsocialnoemailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupwithsocialnoemail__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupwithsocialnoemailPageModule = /** @class */ (function () {
    function SignupwithsocialnoemailPageModule() {
    }
    SignupwithsocialnoemailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signupwithsocialnoemail__["a" /* SignupwithsocialnoemailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signupwithsocialnoemail__["a" /* SignupwithsocialnoemailPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], SignupwithsocialnoemailPageModule);
    return SignupwithsocialnoemailPageModule;
}());

//# sourceMappingURL=signupwithsocialnoemail.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupwithsocialnoemailPage; });
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
 * Generated class for the SignupwithsocialnoemailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupwithsocialnoemailPage = /** @class */ (function () {
    function SignupwithsocialnoemailPage(navCtrl, injector) {
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.ports = [];
        this.myuserRoles = [];
        this.error_msg = '';
        this.doctorports = [];
        this.doctorRoles = [];
        this.myStates = [];
        this.isShow = false;
        this.nav_params_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]);
        this.country_and_role_list_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_4__services_HttpService__["a" /* HttpService */]);
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_clevertap__["a" /* CleverTap */]();
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]);
        this.in_app_browser_object = injector.get(__WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]);
        this.dtStr = this.http_service_object.dtStr();
        //console.log('dtStr-->'+this.dtStr);
        this.clevertapDate = this.http_service_object.clevertapDate();
        this.localapi = this.http_service_object.getApi();
        this.tmpDetails = this.nav_params_object.get('tmp_Details');
    }
    SignupwithsocialnoemailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SignupwithsocialnoemailPage');
        var user_type = '';
        var confirmalert = this.alert_controller_object.create({
            title: "Are you a healthcare professional ?",
            message: "<ul><li><strong> Choose <b>'YES'</b> if you are a Doctor or Medical & Healthcare Industry Professional. </strong></li><br/>\n\t          <li><strong> Choose <b>'No'</b> if you are a Non-Healthcare Professional or Patient. </strong></li>\n\t        </ul>",
            cssClass: 'popup-pin',
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
                // code...
                _this.doctorports = _this.country_and_role_list_provider_object.getOnlyDoctorRoles();
            }
            else if (user_type == "5") {
                // code...	
                _this.doctorports = _this.country_and_role_list_provider_object.getPatientRoles();
            }
            else {
                _this.doctorports = _this.country_and_role_list_provider_object.getSpecialitiesPorts();
            }
        });
        this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
        this.myStates = this.country_and_role_list_provider_object.getUSstate();
        this.myuserRoles = this.country_and_role_list_provider_object.getmyuserRoles(); // This will log "I do something useful!"
        //console.log('ithis.myuserRoles-->'+JSON.stringify(this.myuserRoles));
        //this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
        //console.log('ithis.doctorRoles-->'+this.doctorports);
        //alert('ithis.doctorRoles-->'+this.doctorports);
    };
    SignupwithsocialnoemailPage.prototype.portChange = function (event) {
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
    SignupwithsocialnoemailPage.prototype.stateChange = function (event) {
        console.log('stateChange value:' + JSON.stringify(event.value));
    };
    SignupwithsocialnoemailPage.prototype.docPortChange = function (event) {
        console.log('doc port:' + event.value);
    };
    SignupwithsocialnoemailPage.prototype.roleChange = function (event) {
        console.log('role:', event.value);
    };
    SignupwithsocialnoemailPage.prototype.termsofservice = function () {
        this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
    };
    SignupwithsocialnoemailPage.prototype.privacypolicy = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal_controllar_object.create('ModalPage', { data: 'Privacy Policy' }, myModalOptions);
        myModal.present();
    };
    SignupwithsocialnoemailPage.prototype.getGroupText = function (port, portIndex, ports) {
        if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
            return port.country.name;
        }
        return null;
    };
    SignupwithsocialnoemailPage.prototype.goBack = function () {
        this.navCtrl.push('LoginPage');
    };
    SignupwithsocialnoemailPage.prototype.onfacebokSubmit = function () {
        var _this = this;
        var email = this.email;
        var myuserRole = this.myuserRole;
        var country = this.port;
        var usaState = this.myState;
        var userConsnt = this.userConsent;
        var doctor = this.doctorport;
        if (typeof email === "undefined" || email == '') {
            this.error_msg = 'Please enter your email.';
        }
        else if (email != "" && !this.validateEmail(email)) {
            this.error_msg = 'Please enter valid email address';
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
        // else if(email != '' && myuserRole != '' && country != '' && userConsnt!=false){
        else if (email != '' && doctor != '' && country != '' && userConsnt != false && ((usaState != '' && this.isShow == true) || this.isShow == false)) {
            this.error_msg = '';
            this.loading_service_object.userregistrationshow();
            var userRole = myuserRole['role'];
            var usercountry = country['name'];
            if (this.isShow) {
                var usa_State = usaState['name'];
            }
            else {
                var usa_State = "";
            }
            var doctorCodeName = doctor['name'];
            var doctor_code = doctor['doctorcode'];
            var splitTest = doctor_code.split(":");
            //alert('splitTest--->'+JSON.stringify(splitTest));
            //alert('splitTest[0]--->'+JSON.stringify(splitTest[0]));
            //alert('splitTest[1]--->'+JSON.stringify(splitTest[1]));
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
            this.http_service_object.checkEmailExists(email).subscribe(function (data) {
                //console.log('_.size(data)--->'+_.size(data));
                if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](data) > 0) {
                    _this.loading_service_object.hide();
                    ///alert('hi 12345');
                    console.log('verified--->' + data[0].verified);
                    console.log("hi----email exists" + JSON.stringify(data[0].id));
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
                        "fullname": _this.tmpDetails.name,
                        "email": email,
                        "password": "",
                        "gender": _this.tmpDetails.gender,
                        "userRoleId": _this.userType,
                        "discoveryMethodId": 0,
                        "clevertapId": "",
                        "branchId": "",
                        "branchLink": "",
                        "branchWebUrl": "",
                        "profilePic": _this.tmpDetails.picture.data.url,
                        "medium": "facebook",
                        "facebookId": _this.tmpDetails.id,
                        "specialities": specialities,
                        "userRoleSubType": sub_Specialities,
                        "location": usercountry,
                        "state": usa_State,
                        "referral_code": referral_code,
                        "npi_number": 0,
                        "npi_id": 0,
                        "referred_by": 0,
                        "verified": 1,
                        "username": "",
                        "isPaid": 0
                    }).subscribe(function (registerUserData) {
                        _this.loading_service_object.hide();
                        var response = JSON.parse(registerUserData['_body']);
                        var email = '';
                        var myuserRole = '';
                        var country = '';
                        var doctor = '';
                        var usaState = '';
                        //console.log("response ----registration "+response);
                        //console.log("response ----registration "+JSON.stringify(response));
                        ///console.log("hi----registration "+JSON.stringify(registerUserData));
                        //console.log("registration "+JSON.stringify(response));
                        localStorage.setItem('userliveId', response.id);
                        _this.storage_object.set('user_logged_in', response.id);
                        var userRoleparams = (_this.userType == 1) ? "doctor" : "patient";
                        localStorage.setItem('cv5userEmail', response.email);
                        localStorage.setItem('cv5userRoleId', response.userRoleId);
                        localStorage.setItem('cv5usrType', _this.userType);
                        localStorage.setItem('usrSpecialities', response.specialities);
                        localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
                        localStorage.setItem('cv5usrRolesubType', response.userRoleSubType);
                        localStorage.setItem('userIdentity', _this.userType + response.id);
                        localStorage.setItem('verified', response.verified);
                        localStorage.setItem('myProductflg', 'false');
                        localStorage.setItem('productID', 'false');
                        _this.insertUpdateLocalDB(response);
                        _this.syncLocalDB(_this.userType);
                        _this.http_service_object.getPoweredByData(userRoleparams).subscribe(function (results) {
                            console.log('results-->' + JSON.stringify(results));
                            var that = _this;
                            var splash_data = [];
                            splash_data = __WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["filter"](results, function (value) {
                                return (value.isFor == userRoleparams || value.isFor == "all");
                            });
                            if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](splash_data) > 0) {
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
                            console.log('err->' + err);
                        });
                    }, function (error) {
                        console.log(error);
                    });
                }
            }, function (err) {
                console.log('err->' + err);
            });
        }
    };
    SignupwithsocialnoemailPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    SignupwithsocialnoemailPage.prototype.syncLocalDB = function (user_type) {
        var userID = localStorage.getItem('userliveId');
        var email = localStorage.getItem('cv5userEmail');
        user_type = (user_type == 1) ? "doctor" : "patient";
        this.loading_service_object.generateandSaveLinks(userID, user_type, email);
        // Get topics detail from API
        //alert('sync user_type-->'+user_type+"userID------->"+userID);
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
        //this.database_provider_object.getOrderDetailsAPIData(userID);
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
    SignupwithsocialnoemailPage.prototype.insertUpdateLocalDB = function (result) {
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
            "password": "",
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
            if (__WEBPACK_IMPORTED_MODULE_5_underscore_underscore__["size"](userresult) > 0) {
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
            "Name": "'" + result.fullname + "'",
            "Location": "'" + result.location + "'",
            "UserRoleId": "'" + result.userRoleId + "'",
            "UserType": "'" + user_type_temp + "'",
            "Specialities": "'" + result.specialities + "'",
            "SubSpecialities": "'" + result.userRoleSubType + "'",
            "medium": "'" + result.medium + "'",
            "custom": "Login with Facebook No Email"
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
            "Identity": user_type_temp + result.id,
            "custom": "no email"
        };
        this.clevertap_object.recordEventWithNameAndProps(result.medium + "Login", params);
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
    SignupwithsocialnoemailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-signupwithsocialnoemail',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\signupwithsocialnoemail\signupwithsocialnoemail.html"*/'\n<ion-content padding="false" class="user-setup-new user-register">\n  <p class="or-tag font20" style="color: #151313;"><b>Sign Up</b></p>\n  	<div id="registerfacebok" class="">\n	    <form name="signUpForm" novalidate=""  (ngSubmit)="onfacebokSubmit()">\n	      <div class="error text-center">{{error_msg}}</div>\n	        <p class="text-center">\n	            <input type="email" id="email" name="email" required value="" [(ngModel)]="email" placeholder="Email Address"/>\n	        </p>\n	        <!-- <p class="text-center pg-second-message"> </p> -->\n	        <!-- <p class="text-center pg-second-message" style="color: #151313;">Please provide your profession and country to help us customize the app.</p> -->\n	        <p class="text-center pg-second-message" style="color: #151313;"></p>\n		    <p style="margin-top: 3px;">\n	          <ion-item class="selectdrop" text-center>\n	            <ionic-selectable \n	              item-content\n	              [(ngModel)]="doctorport"\n	              name ="doctorport"\n	              itemValueField="doctorcode"\n	              itemTextField="name"\n	              [items]="doctorports" \n	              [canSearch]="true"\n	              placeholder="Please Select Your Profession"\n	              [hasVirtualScroll]="true"\n	              [virtualScrollHeaderFn]="getGroupText"\n	              (onChange)="docPortChange($event)">\n	            </ionic-selectable>\n	          </ion-item>\n	        </p><br/>\n	        <p>\n	          <ion-item class="selectdrop" text-center>\n	            <ionic-selectable\n	              item-content\n	              name ="port"\n	              [(ngModel)]="port"\n	              [items]="ports"\n	              itemValueField="name"\n	              itemTextField="name"\n	              [canSearch]="true"\n	              placeholder="Please Select Country"\n	              (onChange)="portChange($event)">\n	            </ionic-selectable>\n	          </ion-item> \n	        </p><br/>\n	        <p *ngIf="isShow">\n              <ion-item class="selectdrop" text-center>\n                <ionic-selectable\n                  item-content\n                  name ="myState"\n                  [(ngModel)]="myState"\n                  [items]="myStates"\n                  itemValueField="name"\n                  itemTextField="name"\n                  [canSearch]="true"\n                  placeholder="Select State"\n                  (onChange)="stateChange($event)">\n                </ionic-selectable>\n              </ion-item>\n            </p>\n	        <div class="userConsent" style="">\n              <p class=""> \n                <ion-checkbox [(ngModel)]="userConsent1" name="userConsent1"></ion-checkbox> \n              </p>\n              <p class="font12" style="color: #151313;">I agree to the  <a class="alinks" (click)="privacypolicy()"  style="text-decoration: underline; color: #e85f4f; font-weight: bold;">Privacy Policy</a> & <a class="alinks" (click)="termsofservice()"  style="text-decoration: underline; color: #e85f4f; font-weight: bold;" >Terms of Service</a> </p>\n            </div>\n	       \n	        <div class="text-center">\n	            <button class="white-button-btn"><b>SUBMIT</b></button>\n	        </div>\n\n			<p class="text-center">\n				<button class="white-button-btn" (click)="goBack()">CLICK HERE TO LOG IN</button>\n			</p>\n	    </form>\n\n  	</div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\signupwithsocialnoemail\signupwithsocialnoemail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Injector */]])
    ], SignupwithsocialnoemailPage);
    return SignupwithsocialnoemailPage;
}());

//# sourceMappingURL=signupwithsocialnoemail.js.map

/***/ })

});
//# sourceMappingURL=24.js.map