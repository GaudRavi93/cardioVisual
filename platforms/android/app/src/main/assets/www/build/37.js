webpackJsonp([37],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */]),
            ],
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());

//# sourceMappingURL=forgotpassword.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_clevertap__ = __webpack_require__(49);
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
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, navParams, httpservice, databaseprovider, alertCtrl, clevertap) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservice = httpservice;
        this.databaseprovider = databaseprovider;
        this.alertCtrl = alertCtrl;
        this.clevertap = clevertap;
        this.error_msg = '';
        this.type = '';
        this.verification_code = '';
        this.api_verification_code = '';
        this.password = '';
        this.confirm_password = '';
        this.dtStr = this.httpservice.dtStr();
        this.clevertapDate = this.httpservice.clevertapDate();
        this.type = navParams.get('type');
        this.email = navParams.get('email');
        if (this.type == 'verification_code') {
            this.api_verification_code = navParams.get('verification_code');
        }
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.gotologin = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    ForgotpasswordPage.prototype.gotoForgotpasswordPage = function () {
        this.navCtrl.push('ForgotpasswordPage', { 'type': 'forgot_password' });
    };
    ForgotpasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        this.error_msg = '';
        if (this.email == "") {
            this.error_msg = 'Please enter your email.';
        }
        else if (this.email != "" && !this.validateEmail(this.email)) {
            this.error_msg = 'Please enter valid email address.';
        }
        if (this.error_msg == '' && this.email != '') {
            this.httpservice.checkEmailExistsInCMS(this.email).subscribe(function (data) {
                if ((__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](data) > 0) && (data[0].verified != 0 && data[0].verified != null)) {
                    _this.httpservice.getVerificationCode(_this.email).subscribe(function (codedata) {
                        var params = {
                            "record_time": _this.dtStr,
                            "record_date": _this.clevertapDate,
                            "os": localStorage.getItem('getDevicePlatform'),
                            "modelNo": localStorage.getItem('modelNo'),
                            "deviceversion": localStorage.getItem('getDeviceversion'),
                            "inputEmailValue": _this.email
                        };
                        _this.clevertap.recordEventWithNameAndProps("clickedOnForgotPassword", params);
                        _this.navCtrl.push('ForgotpasswordPage', { 'type': 'verification_code', 'email': _this.email, 'verification_code': codedata.code });
                    });
                }
                else {
                    var confirmPopup = _this.alertCtrl.create({
                        title: '',
                        message: '<h4 style="color:#ffffff; text-align:center;">Please sign up for CardioVisual.</h4>',
                        buttons: ['Dismiss']
                    });
                    confirmPopup.present();
                }
            });
        }
    };
    ForgotpasswordPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ForgotpasswordPage.prototype.passwordverify = function () {
        this.error_msg = '';
        if (this.verification_code == '') {
            this.error_msg = 'Please enter valid verification code.';
        }
        else if (this.verification_code != '' && (this.api_verification_code != this.verification_code)) {
            this.error_msg = 'Verification code and entered code do not match.';
        }
        else {
            var confirmPopup = this.alertCtrl.create({
                title: '',
                message: '<h4 style="color:#ffffff; text-align:center;">Thank You, Now please create a new Password</h4>',
                buttons: ['Dismiss']
            });
            confirmPopup.present();
            this.navCtrl.push('ForgotpasswordPage', { 'type': 'change_password', 'email': this.email });
        }
    };
    ForgotpasswordPage.prototype.changePassword = function () {
        var _this = this;
        this.error_msg = '';
        if (this.password == '' || this.password == undefined) {
            this.error_msg = 'Password is required';
        }
        if (this.confirm_password == '') {
            this.error_msg = 'Confirm Password is required';
        }
        if (this.password != this.confirm_password) {
            this.error_msg = 'Password and Confirm Password do not match';
        }
        if (this.error_msg == '' && this.password != '' && this.confirm_password != '') {
            this.httpservice.checkEmailExistsInCMS(this.email).subscribe(function (data) {
                if (__WEBPACK_IMPORTED_MODULE_4_underscore_underscore__["size"](data) > 0) {
                    _this.databaseprovider.updatePassword(_this.password, data[0].id);
                    var confirmPopup = _this.alertCtrl.create({
                        title: '',
                        message: '<h4 style="color:#ffffff; text-align:center;">Password changed successfully. Please login to continue.</h4>',
                        buttons: ['Dismiss']
                    });
                    confirmPopup.present();
                    _this.navCtrl.setRoot('LoginPage');
                }
                else {
                    var confirmPopup = _this.alertCtrl.create({
                        title: '',
                        message: '<h4 style="color:#ffffff; text-align:center;">Please sign up for CardioVisual.</h4>',
                        buttons: ['Dismiss']
                    });
                    confirmPopup.present();
                }
            });
        }
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\forgotpassword\forgotpassword.html"*/'<!--\n  Generated template for the ForgotpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding="false" class="" *ngIf="type ==\'forgot_password\'">\n    <div>\n        <p class="or-tag font20 text-center" style="color: #151313;"><b>Forgot Password</b></p>\n        <form name="forgotpasswordForm" style="margin-top: 10px;">\n          <div class="error text-center">{{error_msg}}</div>\n            <p class="text-center">\n               <input type="email" id="email" name="email"  value="" placeholder="Email Address" [(ngModel)]="email" />\n            </p>\n            <div class="text-center">\n                <button class="white-button-btn" (click)="forgotPassword()"><b>SUBMIT</b></button>\n            </div>\n        </form>\n        <div class="text-center terms-message" >\n          <a class="alinks text-right" (click)="gotologin()" style="color: #151313;"><b>Back to Login</b></a>\n        </div>\n    </div>\n</ion-content>\n\n<ion-content padding="false" class="" *ngIf="type ==\'verification_code\'">\n\n    <div>\n        <p class="text-center or-tag font20" style="color: #151313;"><b>Verification Code</b></p>\n        <p class="text-center" style="color: #151313;">Please enter the code you received in your email</p>\n        <form name="forgotpasswordverifyForm" style="margin-top: 10px;">\n          <div class="error text-center">{{error_msg}}</div>\n            <p class="text-center">\n               <input type="text" id="verification_code" name="verification_code"  value="" placeholder="Verification Code" [(ngModel)]="verification_code" />\n            </p>\n            \n            <div class="text-center">\n                <button class="white-button-btn" (click)="passwordverify()"><b>SUBMIT</b></button>\n            </div>\n        </form>\n        <div class="text-center terms-message" >\n          <a class="alinks text-left" style="color: #151313;" (click)="gotoForgotpasswordPage()" ><b>Forgot Password</b></a><span style="color: #0F0505;"> | </span>\n          <a class="alinks text-right" (click)="gotologin()" style="color: #151313;"><b>Back to Login</b></a>\n\n        </div>\n    </div>\n</ion-content>\n\n\n<ion-content padding="false" scroll="false" class="user-setup user-thankyou" *ngIf="type ==\'change_password\'">\n    <!-- <img src="img/cardio-user-setup-bg.jpg" id="login-top-banner"> -->\n    \n    <div id="forgot_password" class="loginScreen-center">\n        <p class="text-center pg-message" style="color: #151313;"><b>Change Password</b></p>\n        <form name="changePasswordForm">\n            <p class="text-center">\n                <input type="password" id="password" name="password" required value="" placeholder="Password" [(ngModel)]="password"/>\n            </p>\n            <p class="text-center">\n                <input type="password" id="confirm_password" name="confirm_password" required value="" placeholder="Re-Type Password" [(ngModel)]="confirm_password"/>\n            </p>\n        </form>\n    </div>\n    <!-- <div class="text-center bottom-div">\n        <button class="button-btn" ng-click="save()">Submit</button>\n    </div> -->\n    <div class="text-center">\n        <button class="previous" (click)="changePassword()"><b>SUBMIT</b></button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_clevertap__["a" /* CleverTap */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ })

});
//# sourceMappingURL=37.js.map