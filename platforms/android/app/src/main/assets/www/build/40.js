webpackJsonp([40],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllcmetopiclistPageModule", function() { return AllcmetopiclistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allcmetopiclist__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllcmetopiclistPageModule = /** @class */ (function () {
    function AllcmetopiclistPageModule() {
    }
    AllcmetopiclistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__allcmetopiclist__["a" /* AllcmetopiclistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__allcmetopiclist__["a" /* AllcmetopiclistPage */]),
            ],
        })
    ], AllcmetopiclistPageModule);
    return AllcmetopiclistPageModule;
}());

//# sourceMappingURL=allcmetopiclist.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllcmetopiclistPage; });
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


/**
 * Generated class for the AllcmetopiclistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllcmetopiclistPage = /** @class */ (function () {
    function AllcmetopiclistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.data = [
            {
                "id": 1,
                "title": "Optimizing Survival from Distributive Shock",
                "description": "To provide information about the early identification of sepsis and the appropriate interventions to help patients survive sepsis.",
                "total_Chapter": "4",
                "total_duration": "14 mins",
                "Authors": "Adrijana K. Anderson",
                "Categories": "Evidence Based Practice , Practice Guidelines"
            },
            {
                "id": 2,
                "title": "Fever and Infection in the Long-term Care Resident",
                "description": "This learning activity will engage nurse practitioners and other health professionals in a clinically-focused case study to develop skills in identification and management of distributive shock in a resident of a long-term care facility.",
                "total_Chapter": "13",
                "total_duration": "54 mins",
                "Authors": "Adrijana K. Anderson",
                "Categories": "Evidence Based Practice , Infection , Practice Guidelines"
            },
            {
                "id": 3,
                "title": "Optimizing Survival from Distributive Shock Optimizing Survival from Distributive Shock",
                "description": "To provide information about the early identification of sepsis and the appropriate interventions to help patients survive sepsis.",
                "total_Chapter": "8",
                "total_duration": "124 mins",
                "Authors": "Adrijana K. Anderson",
                "Categories": "Evidence Based Practice"
            },
            {
                "id": 4,
                "title": "Fever and Infection in the Long-term Care Resident",
                "description": "This learning activity will engage nurse practitioners and other health professionals in a clinically-focused case study to develop skills in identification and management of distributive shock in a resident of a long-term care facility.",
                "total_Chapter": "9",
                "total_duration": "140 mins",
                "Authors": "Adrijana K. Anderson",
                "Categories": "Evidence Based Practice , Infection , Practice Guidelines"
            },
            {
                "id": 5,
                "title": "Optimizing Survival from Distributive Shock Optimizing Survival from Distributive Shock",
                "description": "To provide information about the early identification of sepsis and the appropriate interventions to help patients survive sepsis.",
                "total_Chapter": "4",
                "total_duration": "14 mins",
                "Authors": "Adrijana K. Anderson",
                "Categories": "Evidence Based Practice , Practice Guidelines"
            }
        ];
    }
    AllcmetopiclistPage.prototype.ionViewDidLoad = function () {
    };
    AllcmetopiclistPage.prototype.startNow = function () {
        this.navCtrl.push("CmetopicListPage", { 'exmTopic': 'Optimizing Survival from Distributive Shock' });
    };
    AllcmetopiclistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-allcmetopiclist',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\allcmetopiclist\allcmetopiclist.html"*/'<!--\n  Generated template for the AllcmetopiclistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="headerColor">\n    <ion-title>All Topic List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- <ion-list>\n        <ion-item *ngFor="let grocery of groceries">{{grocery}}</ion-item>\n    </ion-list>-->\n    <ion-list> \n	    <ion-row>\n        <ion-item class="card card-1" *ngFor="let group of data;">\n          <div class = "">\n            <h4 class="divtext">{{group.title}}</h4>\n            <p class="divtext">{{group.description.slice(0,140)}}...</p>\n          </div>\n          <div style="" class="bottomDiv">\n            <div class="innerClass firsttext">{{group.total_Chapter}} Chapter&raquo;</div>\n            <div class="innerClass middletext">{{group.total_duration}}</div>\n            <div class="innerClass lasttest" (click)="startNow();">Start Now</div>\n          </div>\n        </ion-item>\n	    </ion-row>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\allcmetopiclist\allcmetopiclist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AllcmetopiclistPage);
    return AllcmetopiclistPage;
}());

//# sourceMappingURL=allcmetopiclist.js.map

/***/ })

});
//# sourceMappingURL=40.js.map