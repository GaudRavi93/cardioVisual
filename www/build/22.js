webpackJsonp([22],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
    VideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]),
            ],
        })
    ], VideoPageModule);
    return VideoPageModule;
}());

//# sourceMappingURL=video.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_radient_settings_radient_settings__ = __webpack_require__(316);
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
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl, navParams, radientSetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.radientSetting = radientSetting;
    }
    // When we enter Tab 1 page from another tab page we play our content
    VideoPage.prototype.ionViewDidEnter = function () {
        // if (this.rmp && this.rmp.getReady()) {
        //   //this.rmp.play(); 
        // }
    };
    // When we leave Tab 1 page for another tab page we pause our content
    VideoPage.prototype.ionViewWillLeave = function () {
        // if (this.rmp && this.rmp.getReady()) {
        //   this.rmp.pause();
        // }
    };
    // When Tab 1 page initially loads we configure and init our player
    VideoPage.prototype.ionViewDidLoad = function () {
        //this.radientSetting.getRadientSettings('https://5b44cf20b0388.streamlock.net:8443/vod/smil:bbb.smil/playlist.m3u8','https://www.radiantmediaplayer.com/media/playlist/poster/item-1.jpg');
        /*
        var src = {
            hls: 'https://5b44cf20b0388.streamlock.net:8443/vod/smil:bbb.smil/playlist.m3u8'
        };
        var settings = {
            licenseKey: 'd3F2aHVrYnNreUAxNTg2MzU2',
            src: src,
            width: 640,
            height: 360,
            contentMetadata: {
                poster: [
                    'https://www.radiantmediaplayer.com/media/playlist/poster/item-1.jpg'
                ]
            }
        };
        this.rmp = new RadiantMP(this.elementID);
        this.rmp.init(settings);
        */
    };
    VideoPage.prototype.videoItemClick = function () {
        //this.radientSetting.getRadientSettings('https://static.cardiovisual.com/videos/Device/Cardiac/DyeVertContrastReductionSystem.m4v','https://static.cardiovisual.com/images/Device/Cardiac/DyeVertContrastReductionSystem.jpg');
        /*
        var src = {
            hls: 'https://static.cardiovisual.com/videos/Device/Cardiac/DyeVertContrastReductionSystem.m4v'
        };
        var settings = {
            licenseKey: 'd3F2aHVrYnNreUAxNTg2MzU2',
            src: src,
            width: 640,
            height: 360,
            contentMetadata: {
                poster: [
                    'https://static.cardiovisual.com/images/Device/Cardiac/DyeVertContrastReductionSystem.jpg'
                ]
            }
        };
        this.rmp = new RadiantMP(this.elementID);
        this.rmp.init(settings);
        */
    };
    VideoPage.prototype.videoItemClick2 = function () {
        //this.radientSetting.getRadientSettings('https://static.cardiovisual.com/videos/Treatment/Cardiac/ReducingAKICathLab.mp4','https://static.cardiovisual.com/images/Treatment/Cardiac/ReducingAKICathLab.jpg');
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-video',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\video\video.html"*/'<!--\n  Generated template for the VideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>video</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div id="rmpPlayer1"></div>\n	<button ion-button (click)="videoItemClick()" id="setSrcMp41">\n        <ion-icon name="log-out"></ion-icon>\n    </button>\n    <button ion-button (click)="videoItemClick2()" id="setSrcMp42">\n        <ion-icon name="log-out"></ion-icon>\n    </button>\n    <div id="getSrc"></div>\n    <div id="getSrcResult"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\video\video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_radient_settings_radient_settings__["a" /* RadientSettingsProvider */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ })

});
//# sourceMappingURL=22.js.map