webpackJsonp([41],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AaplaunchlocationPageModule", function() { return AaplaunchlocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aaplaunchlocation__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AaplaunchlocationPageModule = /** @class */ (function () {
    function AaplaunchlocationPageModule() {
    }
    AaplaunchlocationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__aaplaunchlocation__["a" /* AaplaunchlocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__aaplaunchlocation__["a" /* AaplaunchlocationPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], AaplaunchlocationPageModule);
    return AaplaunchlocationPageModule;
}());

//# sourceMappingURL=aaplaunchlocation.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AaplaunchlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_countryandrolelist_countryandrolelist__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(183);
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
 * Generated class for the AaplaunchlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AaplaunchlocationPage = /** @class */ (function () {
    function AaplaunchlocationPage(navCtrl, httpservice, databaseprovider, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.httpservice = httpservice;
        this.databaseprovider = databaseprovider;
        this.injector = injector;
        this.ports = [];
        this.doctorports = [];
        this.error_msg = '';
        this.navParams = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]);
        this.network_object = injector.get(__WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */]);
        this.localapi = this.httpservice.getApi();
        this.requestType = this.navParams.get("forDropDownType");
        this.requestRoleID = this.navParams.get("usrRoleID");
        this.network_status = 'connected';
        this.network_object.onDisconnect().subscribe(function () {
            _this.network_status = 'not_connected';
        });
        this.network_object.onConnect().subscribe(function () {
            _this.network_status = 'connected';
        });
        this.country_and_role_list_provider_object = new __WEBPACK_IMPORTED_MODULE_3__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]();
        this.http_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */]);
        this.toast_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* ToastController */]);
    }
    AaplaunchlocationPage.prototype.ionViewDidLoad = function () {
        this.ports = this.country_and_role_list_provider_object.getports(); // This will log "I do something useful!"
        if (this.requestRoleID == '1') {
            // code...
            this.doctorports = this.country_and_role_list_provider_object.getOnlyDoctorRoles();
        }
        else if (this.requestRoleID == '5') {
            // code...	
            this.doctorports = this.country_and_role_list_provider_object.getPatientRoles();
        }
        else {
            this.doctorports = this.country_and_role_list_provider_object.getSpecialitiesPorts();
        }
    };
    AaplaunchlocationPage.prototype.portChange = function (event) {
        console.log('port:' + event.value);
    };
    AaplaunchlocationPage.prototype.getGroupText = function (port, portIndex, ports) {
        if (portIndex === 0 || port.country.id !== ports[portIndex - 1].country.id) {
            return port.country.name;
        }
        return null;
    };
    AaplaunchlocationPage.prototype.onLocationSubmit = function () {
        var _this = this;
        var liveId = localStorage.getItem('userliveId');
        if (this.network_status == 'connected') {
            var userData = new Array("");
            this.databaseprovider.fetchAllData('new_user_info', userData).then(function (userlaunchresult) {
                var liveId = userlaunchresult[0].liveId;
                var password = userlaunchresult[0].password;
                var country = _this.port;
                var doctor = _this.doctorport;
                if (_this.requestType == 'chkLocation') {
                    // code...
                    if (typeof country === "undefined" || country == '') {
                        _this.error_msg = 'Please select Country.';
                    }
                    else if (country != '') {
                        _this.error_msg = '';
                        _this.loading_service_object.usercountry();
                        var usercountry = country['name'];
                        _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + liveId, {
                            "location": usercountry
                        }).subscribe(function (locationInsertSuccess) {
                            var response = JSON.parse(locationInsertSuccess['_body']);
                            var country = '';
                            _this.updateLocalDB(response, password);
                            setTimeout(function () {
                                _this.loading_service_object.hide();
                                _this.navCtrl.setRoot('WhatsNewPage');
                            }, 3000);
                        }, function (locationInsertError) {
                            _this.loading_service_object.hide();
                        });
                    }
                }
                else if (_this.requestType == 'chkspecialities') {
                    // code...
                    if (typeof doctor === "undefined" || doctor == '') {
                        _this.error_msg = "Please Select Your Profession";
                    }
                    else if (doctor != '') {
                        _this.error_msg = '';
                        _this.loading_service_object.userspecialities();
                        var doctorCodeName = doctor['name'];
                        var doctor_code = doctor['doctorcode'];
                        var splitTest = doctor_code.split(":");
                        var specialities = splitTest[0];
                        var sub_Specialities = splitTest[1];
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
                                // code...
                                _this.userType = 1;
                                break;
                            case "PA/NP/Nurse:Other":
                                // code...
                                _this.userType = 1;
                                break;
                            case "Medical Trainee/Fellow:Fellow/Resident":
                                // code...
                                _this.userType = 1;
                                break;
                            case "Medical Trainee/Fellow:Student":
                                // code...
                                _this.userType = 1;
                                break;
                            case "Medical Trainee/Fellow:Other":
                                // code...
                                _this.userType = 1;
                                break;
                            case "Other Medical Professional:Ex Physio/Rehab":
                                // code...
                                _this.userType = 1;
                                break;
                            case "Other Medical Professional:Tech":
                                // code...
                                _this.userType = 1;
                                break;
                            case "Other Medical Professional:Educators":
                                // code...
                                _this.userType = 1;
                                break;
                            case "Other Medical Professional:Other":
                                // code...
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
                        _this.http_object.put(_this.localapi + "/api/CardiovisualUsers/" + liveId, {
                            "specialities": specialities,
                            "userRoleSubType": sub_Specialities,
                            "userRoleId": _this.userType
                        }).subscribe(function (locationInsertSuccess) {
                            var response = JSON.parse(locationInsertSuccess['_body']);
                            var doctor = '';
                            _this.updateLocalDB(response, password);
                            setTimeout(function () {
                                _this.loading_service_object.hide();
                                _this.navCtrl.setRoot('WhatsNewPage');
                            }, 3000);
                        }, function (locationInsertError) {
                            _this.loading_service_object.hide();
                        });
                    }
                }
            });
        }
        else {
            this.toast_controller_object.create({
                message: 'You are Offline',
                duration: 3000,
                position: 'bottom'
            }).present();
        }
    };
    AaplaunchlocationPage.prototype.updateLocalDB = function (data, password) {
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
        //this.databaseprovider.updateNewUserInfo(userData);
        this.databaseprovider.storeUserdata(userData);
    };
    AaplaunchlocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-aaplaunchlocation',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\aaplaunchlocation\aaplaunchlocation.html"*/'\n<ion-content padding="false" class="user-setup-new">\n  \n  <div id="register" class="user-register"  *ngIf="requestType == \'chkLocation\'">\n    <p class="or-tag font20" style="color: #151313;"><b>Choose Your Country Or Region</b></p>\n    <form name="signUpForm" novalidate=""  (ngSubmit)="onLocationSubmit()">\n      <div class="error text-center">{{error_msg}}</div>\n\n        <p class="text-center pg-second-message" style="color: #151313;">Please select your country to help us optimize streaming and personalize the video content for you. </p>\n        <p>\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable\n              item-content\n              name ="port"\n              [(ngModel)]="port"\n              [items]="ports"\n              itemValueField="name"\n              itemTextField="name"\n              [canSearch]="true"\n              placeholder="Please Select Country"\n              (onChange)="portChange($event)">\n            </ionic-selectable>\n          </ion-item> \n        </p>\n\n        <div class="text-center">\n            <button class="white-button-btn"><b>SUBMIT</b></button>\n        </div>\n    </form>\n  </div>\n\n\n  <div id="register" class="user-register"  *ngIf="requestType == \'chkspecialities\'">\n    <p class="or-tag font20" style="color: #151313;"><b>Choose Your Profession or Speciality</b></p>\n    <form name="signUpForm" novalidate=""  (ngSubmit)="onLocationSubmit()">\n      <div class="error text-center">{{error_msg}}</div>\n\n        <p class="text-center pg-second-message" style="color: #151313;">Please select your Profession/Speciality to help us optimize streaming and personalize the video content for you. </p>\n        <p>\n          <ion-item class="selectdrop" text-center>\n            <ionic-selectable \n              item-content\n              [(ngModel)]="doctorport"\n              name ="doctorport"\n              itemValueField="doctorcode"\n              itemTextField="name"\n              [items]="doctorports" \n              [canSearch]="true"\n              placeholder="Please Select Your Profession"\n              [hasVirtualScroll]="true"\n              [virtualScrollHeaderFn]="getGroupText"\n              (onChange)="docPortChange($event)">\n            </ionic-selectable>\n          </ion-item>\n        </p>\n\n        <div class="text-center">\n            <button class="white-button-btn"><b>SUBMIT</b></button>\n        </div>\n    </form>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\aaplaunchlocation\aaplaunchlocation.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_countryandrolelist_countryandrolelist__["a" /* CountryandrolelistProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Injector */]])
    ], AaplaunchlocationPage);
    return AaplaunchlocationPage;
}());

//# sourceMappingURL=aaplaunchlocation.js.map

/***/ })

});
//# sourceMappingURL=41.js.map