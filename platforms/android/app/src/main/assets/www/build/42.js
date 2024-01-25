webpackJsonp([42],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsLayout3Module", function() { return TabsLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_layout_3__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsLayout3Module = /** @class */ (function () {
    function TabsLayout3Module() {
    }
    TabsLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_layout_3__["a" /* TabsLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_layout_3__["a" /* TabsLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_layout_3__["a" /* TabsLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], TabsLayout3Module);
    return TabsLayout3Module;
}());

//# sourceMappingURL=tabs-layout-3.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsLayout3 = /** @class */ (function () {
    function TabsLayout3(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.tab_data = [];
        this.segment_name = 'education';
        this.page = navParams.get("pageItem");
        this.request_from = navParams.get("request_from");
        this.segment_name = localStorage.getItem('segment_name');
        if (this.page !== 'channels') {
            // code...
            this.category_data = navParams.get('data');
            this.condition_data = { newtopics_id: this.category_data.id, category_id: '1', topicName: this.category_data.name };
            this.treatment_data = { newtopics_id: this.category_data.id, category_id: '2', topicName: this.category_data.name };
            this.device_data = { newtopics_id: this.category_data.id, category_id: '3', topicName: this.category_data.name };
            //this.favorites_data = {newtopics_id : this.category_data.id, category_id: 'favorites' };
            localStorage.setItem('dashboard_category_id', this.category_data.id);
            switch (this.page) {
                case 'Cardiac':
                case 'Heart': {
                    this.coloR = 'cardiac';
                    break;
                }
                case 'Ep':
                case 'Rhythm': {
                    this.coloR = 'ep';
                    break;
                }
                case 'Structural':
                case 'Structure': {
                    this.coloR = 'structural';
                    break;
                }
                case 'Vascular':
                case 'Circulation': {
                    this.coloR = 'vascular';
                    break;
                }
                case 'Heart Health': {
                    this.coloR = 'health';
                    break;
                }
                case 'Diabetes': {
                    this.coloR = 'diabetes';
                    break;
                }
                default: {
                    this.coloR = 'ep';
                    break;
                }
            }
        }
        else if (this.page === 'channels') {
            this.page1 = navParams.get("pageItem1");
            this.channel_data = navParams.get('chnldata');
            this.videos_data = { channelDATA: this.channel_data, shownContent: 'video' };
            this.documents_data = { channelDATA: this.channel_data, shownContent: 'document' };
            this.image_data = { channelDATA: this.channel_data, shownContent: 'image' };
            this.others_data = { channelDATA: this.channel_data, shownContent: 'other' };
            /*
            switch(this.page1) {
                case 'Abbott':{
                    this.coloR = 'abbott';
                    break;
                }
                case 'AstraZeneca':{
                    this.coloR = 'astrazeneca';
                    break;
                }
                case 'Philips':{
                    this.coloR = 'philips';
                    break;
                }
                case 'Medtronic':{
                    this.coloR = 'medtronic';
                    break;
                }
                default: {
                    this.coloR = 'abbott';
                    break;
                }
            }
            */
            switch (this.page1) {
                case 'Abbott':
                case 'AstraZeneca':
                case 'Philips':
                case 'Medtronic':
                    this.coloR = 'abbott';
                    break;
                default:
                    this.coloR = 'abbott';
                    break;
            }
        }
        if (this.request_from == 'whatsnew_page') {
            this.coloR = 'cardiac';
            this.category_data = navParams.get('data');
            var list_json_value = JSON.parse(this.category_data.list_values);
            this.condition_data = { category_id: '1', topicName: this.category_data.name, request_from: 'whatsnew_page', data: list_json_value.Condition };
            this.treatment_data = { category_id: '2', topicName: this.category_data.name, request_from: 'whatsnew_page', data: list_json_value.Treatment };
            this.device_data = { category_id: '3', topicName: this.category_data.name, request_from: 'whatsnew_page', data: list_json_value.Device };
        }
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], TabsLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('chnldata'),
        __metadata("design:type", Object)
    ], TabsLayout3.prototype, "chnldata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], TabsLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('clrclass'),
        __metadata("design:type", String)
    ], TabsLayout3.prototype, "clrclass", void 0);
    TabsLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tabs-layout-3',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\components\tabs\layout-3\tabs.html"*/'\n\n\n\n<ion-tabs #tabs tabsPlacement=\'top\' tabs-content [ngClass]="coloR" *ngIf="page != \'Favorites\' && page != \'channels\'" class="category_tabs">\n\n        <ion-tab tabTitle="Condition" root="TabPage2" [rootParams]="condition_data" Class="condition"></ion-tab>\n\n\n\n        <ion-tab tabTitle="Treatment" root="TabPage2" [rootParams]="treatment_data" Class="treatment"></ion-tab>\n\n\n\n        <ion-tab tabTitle="Device" root="TabPage2" [rootParams]="device_data" Class="device"></ion-tab>\n\n        \n\n        <ion-tab *ngIf="request_from != \'whatsnew_page\'||request_from != \'splash\'" tabTitle="Playlist" root="PlaylistPage" Class="playlist" [rootParams]="category_data"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-tabs #tabs tabsPlacement=\'top\' tabs-content [ngClass]="coloR" *ngIf="page == \'channels\'">\n\n	<ion-tab tabTitle="Video" root="ChannelListTabsPage" [rootParams]="videos_data" Class="videos"></ion-tab>\n\n	<ion-tab tabTitle="Document" root="ChannelListTabsPage" [rootParams]="documents_data" Class="documents"></ion-tab>\n\n	<ion-tab tabTitle="Image" root="ChannelListTabsPage" [rootParams]="image_data" Class="image"></ion-tab>\n\n	<ion-tab tabTitle="Other" root="ChannelListTabsPage" [rootParams]="others_data" Class="others"></ion-tab>\n\n	<!-- <ion-tab tabTitle="Playlist" root="PlaylistPage" Class="playlist"></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\components\tabs\layout-3\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TabsLayout3);
    return TabsLayout3;
}());

//# sourceMappingURL=tabs-layout-3.js.map

/***/ })

});
//# sourceMappingURL=42.js.map