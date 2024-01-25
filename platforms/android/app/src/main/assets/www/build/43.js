webpackJsonp([43],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsLayout2Module", function() { return TabsLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_layout_2__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsLayout2Module = /** @class */ (function () {
    function TabsLayout2Module() {
    }
    TabsLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_layout_2__["a" /* TabsLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_layout_2__["a" /* TabsLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_layout_2__["a" /* TabsLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], TabsLayout2Module);
    return TabsLayout2Module;
}());

//# sourceMappingURL=tabs-layout-2.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsLayout2; });
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


var TabsLayout2 = /** @class */ (function () {
    function TabsLayout2(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.tab_data = [];
        this.category_data = navParams.get('data');
        this.request_from = navParams.get("request_from");
        localStorage.setItem('dashboard_category_id', this.category_data.id);
        this.segment_name = localStorage.getItem('segment_name');
        this.page = navParams.get("pageItem");
        this.expert_data = { newtopics_id: this.category_data.id, category_id: '4', topicName: this.category_data.name };
        this.learn_data = { newtopics_id: this.category_data.id, category_id: '5', topicName: this.category_data.name };
        this.featured_data = { newtopics_id: this.category_data.id, category_id: '6', topicName: this.category_data.name };
        this.product_data = { newtopics_id: this.category_data.id, category_id: '7', topicName: this.category_data.name };
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
        if (this.request_from == 'whatsnew_page') {
            this.coloR = 'cardiac';
            this.category_data = navParams.get('data');
            var list_json_value = JSON.parse(this.category_data.list_values);
            this.expert_data = { category_id: '4', topicName: this.category_data.name, request_from: 'whatsnew_page', data: list_json_value.Expert };
            this.learn_data = { category_id: '5', topicName: this.category_data.name, request_from: 'whatsnew_page', data: list_json_value.Learn };
            this.featured_data = { category_id: '6', topicName: this.category_data.name, request_from: 'whatsnew_page', data: list_json_value.Featured };
            this.product_data = { category_id: '7', topicName: this.category_data.name, request_from: 'whatsnew_page', data: list_json_value.Product };
        }
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], TabsLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], TabsLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('clrclass'),
        __metadata("design:type", String)
    ], TabsLayout2.prototype, "clrclass", void 0);
    TabsLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tabs-layout-2',template:/*ion-inline-start:"C:\Users\pc\Downloads\cardioVisual\src\components\tabs\layout-2\tabs.html"*/'<ion-tabs #info_tabs tabsPlacement=\'top\' tabs-content [ngClass]="coloR" class="category_tabs">\n\n\n\n        <ion-tab tabTitle="Expert" root="InformationTab" [rootParams]="expert_data" Class="expert"></ion-tab>\n\n\n\n        <ion-tab tabTitle="Learn" root="InformationTab" [rootParams]="learn_data" Class="learn"></ion-tab>\n\n\n\n        <ion-tab tabTitle="Featured" root="InformationTab" [rootParams]="featured_data" Class="featured"></ion-tab>\n\n        \n\n        <ion-tab tabTitle="Product" root="InformationTab" [rootParams]="product_data" Class="product"></ion-tab>\n\n\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\pc\Downloads\cardioVisual\src\components\tabs\layout-2\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TabsLayout2);
    return TabsLayout2;
}());

//# sourceMappingURL=tabs-layout-2.js.map

/***/ })

});
//# sourceMappingURL=43.js.map