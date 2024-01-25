webpackJsonp([34],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore_underscore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.getStartedMsg = "Get Started";
        this.buttonAnime = false;
        this.pagerShow = true;
        this.isLastSlide = false;
        this.splash_screen_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]);
        this.loading_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__services_HttpService__["a" /* HttpService */]);
        this.splash_screen_object.hide();
        this.loading_service_object.show();
        this.http_service_object.getIntroScreen().subscribe(function (data) {
            _this.onboardingImgs = data;
            if (__WEBPACK_IMPORTED_MODULE_7_underscore_underscore__["size"](data) == 1) {
                _this.isLastSlide = true;
                _this.buttonAnime = true;
                _this.pagerShow = false;
                _this.getStarted();
            }
            else {
                _this.isLastSlide = false;
                _this.buttonAnime = false;
                _this.pagerShow = true;
                _this.getStarted();
            }
            _this.loading_service_object.hide();
        }, function (err) {
            console.log('err->' + err);
            //alert(err);
        });
    }
    IntroPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (this.slides.isEnd()) {
            this.isLastSlide = true;
            this.buttonAnime = true;
        }
        else {
            this.isLastSlide = false;
            this.buttonAnime = false;
        }
    };
    IntroPage.prototype.getStarted = function () {
        this.storage_object.set('get_started_page_counter', 1);
        this.navCtrl.push('LoginPage');
        //this.navCtrl.push('OnboardingPage');
    };
    IntroPage.prototype.next = function () {
        this.slides.slideNext();
        this.slideChanged();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* Slides */])
    ], IntroPage.prototype, "slides", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\pages\intro\intro.html"*/'<!--\n\n  Generated template for the IntroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content>\n\n    <ion-slides pager="{{pagerShow}}" #slides (ionSlideDidChange)="slideChanged()"  direction="vertical" effect="fade">\n\n        <ion-slide *ngFor="let data of onboardingImgs; let i = index;" background-size [ngStyle]="{ \'background-image\': \'url(\'+ data.imageUrl +\')\' }">\n\n            \n\n        <button tappable ion-button button large class="animated next" color="primary" [hidden]="isLastSlide" (click)="next()">NEXT</button>    \n\n        </ion-slide>\n\n    </ion-slides>\n\n\n\n   <button tappable ion-button button large class="animated" color="primary" [hidden]="!isLastSlide" (click)="getStarted()" id="getStarted" [ngClass]="{\'fadeOut\' : buttonAnime == false}">{{ getStartedMsg }}</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\pages\intro\intro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Injector */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=34.js.map