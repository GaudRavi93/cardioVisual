webpackJsonp([30],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientationPlaylistNonHcpModule", function() { return OrientationPlaylistNonHcpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orientation_playlist_nonhcp__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrientationPlaylistNonHcpModule = /** @class */ (function () {
    function OrientationPlaylistNonHcpModule() {
    }
    OrientationPlaylistNonHcpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orientation_playlist_nonhcp__["a" /* OrientationPlaylistNonHcp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orientation_playlist_nonhcp__["a" /* OrientationPlaylistNonHcp */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], OrientationPlaylistNonHcpModule);
    return OrientationPlaylistNonHcpModule;
}());

//# sourceMappingURL=orientation-playlist-nonhcp.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrientationPlaylistNonHcp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpService__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_clevertap__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__ = __webpack_require__(61);
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
 * Generated class for the Orientation Playlist for Non-Hcp page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrientationPlaylistNonHcp = /** @class */ (function () {
    function OrientationPlaylistNonHcp(navCtrl, injector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.injector = injector;
        this.getStartedMsg = "Get Started";
        this.buttonAnime = false;
        this.network_object = injector.get(__WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]);
        this.http_service_object = injector.get(__WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */]);
        this.storage_object = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]);
        this.database_provider_object = injector.get(__WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */]);
        this.loading_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]);
        this.alert_controller_object = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.clevertap_object = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_clevertap__["a" /* CleverTap */]();
        this.network_check_object = injector.get(__WEBPACK_IMPORTED_MODULE_8__providers_network_check_network_check__["a" /* NetworkCheckProvider */]);
        var sync_status = localStorage.getItem('app_sync_dashboard');
        if (sync_status == 'yes') {
            var loading = this.loading_controller_object.create({
                spinner: 'ios',
                content: "<div class='custom-spinner-container'>Getting the app ready for you.</div>",
                duration: 7000,
                enableBackdropDismiss: false
            });
            loading.present();
        }
        this.startSequenceArray = [
            { tag: "RISK", position: 3200 }, { tag: "CAD", position: 20000 }, { tag: "AFIB", position: 16400 },
            { tag: "PAD", position: 10900 }, { tag: "CHF", position: 19400 }, { tag: "LEARN", position: 5800 },
            { tag: "STROKE", position: 13650 }, { tag: "SCD", position: 15850 }, { tag: "AV", position: 13800 },
            { tag: "VEIN", position: 10400 }, { tag: "AAA", position: 10600 }, { tag: "SPANISH", position: 19700 },
            { tag: "NEW", position: 10321 }, { tag: "DIABETES", position: 5800 }
        ];
        this.network_status = 'connected';
        this.network_object.onDisconnect().subscribe(function () {
            _this.network_status = 'not_connected';
        });
        this.network_object.onConnect().subscribe(function () {
            _this.network_status = 'connected';
        });
        setTimeout(function () {
            _this.network_check_object.getPageAction('OrientationPlaylistNonHcp', 'start', '', localStorage.getItem('cv5usrType'));
        }, 1000);
    }
    OrientationPlaylistNonHcp.prototype.ionViewWillLeave = function () {
        this.network_check_object.getPageAction('OrientationPlaylistNonHcp', 'end', '', localStorage.getItem('cv5usrType'));
    };
    OrientationPlaylistNonHcp.prototype.interestSelected = function (type) {
        var old_id = '';
        this.type = type;
        var id = type.toLowerCase(); // current selected tab
        if (this.activeClass == id + '_active') {
            this.activeClass = '';
        }
        else {
            this.activeClass = id + '_active';
        }
        /* change color*/
        this.storage_object.get('orientation_playlist_tag').then(function (val) {
            if (val) {
                old_id = val.toLowerCase();
            }
            else {
                old_id = '';
            }
        });
    };
    OrientationPlaylistNonHcp.prototype.goToDashboard = function () {
        //this.navCtrl.setRoot('ItemDetailsPageSwipeToDismiss');
        var params = {
            "record_time": this.dtStr,
            "record_date": this.clevertapDate,
            "os": localStorage.getItem('getDevicePlatform'),
            "modelNo": localStorage.getItem('modelNo'),
            "deviceversion": localStorage.getItem('getDeviceversion'),
            "userRoleId": localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "userEmail": localStorage.getItem('cv5userEmail'),
            "specialities": localStorage.getItem('usrSpecialities'),
            "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
            "location": localStorage.getItem('location'),
            "clicked": 'skip'
        };
        this.clevertap_object.recordEventWithNameAndProps("clickedOnSkip", params);
        //this.navCtrl.setRoot('DashboardPage');
        this.navCtrl.setRoot('WhatsNewPage');
    };
    OrientationPlaylistNonHcp.prototype.goToVideoDetail = function () {
        var _this = this;
        if (this.type == undefined) {
            var conditionPopup = this.alert_controller_object.create({
                title: '',
                message: '<p style="color:#ffffff; text-align:center;">Please choose any one condition of your interest.</p>',
                enableBackdropDismiss: true,
                buttons: ['Dismiss']
            });
            conditionPopup.present();
            //alert('Please choose any one condition of your interest.');
        }
        else {
            var getInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
            var selected_tag = this.storage_object.set('orientation_playlist_tag', this.type);
            //fetch video details and send to video detrail page.
            var tag = this.type;
            var params = {
                "record_time": this.dtStr,
                "record_date": this.clevertapDate,
                "os": localStorage.getItem('getDevicePlatform'),
                "modelNo": localStorage.getItem('modelNo'),
                "deviceversion": localStorage.getItem('getDeviceversion'),
                "userRoleId": localStorage.getItem('cv5userRoleId'),
                "userType": localStorage.getItem('cv5usrType'),
                "userEmail": localStorage.getItem('cv5userEmail'),
                "specialities": localStorage.getItem('usrSpecialities'),
                "userRoleSubType": localStorage.getItem('cv5usrRolesubType'),
                "location": localStorage.getItem('location'),
                "clicked": this.type
            };
            this.clevertap_object.recordEventWithNameAndProps("clickedOnInterest", params);
            //using json
            var query = new Array("WHERE name='" + tag + "' AND type='orientation'");
            this.database_provider_object.fetchAllData('custom_listing', query).then(function (custom_listing_data) {
                var list_json_value = JSON.parse(custom_listing_data[0].list_values);
                var first_id = list_json_value.Condition[0];
                var condition_query = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " + first_id + " AND isActive = 1");
                _this.database_provider_object.fetchAllData('new_sub_topics', condition_query).then(function (conditionData) {
                    if (conditionData.length > 0) {
                        _this.navCtrl.push('VideoDetailsPage', { data: conditionData[0], tag: tag, previousPage: 'OrientationPlaylistNonHcp', 'header': 'hide', 'request_from': 'tag', 'sendTo': 'OrientationPlaylist' });
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], OrientationPlaylistNonHcp.prototype, "slides", void 0);
    OrientationPlaylistNonHcp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\Users\pc\Downloads\myaapp2\src\pages\orientation-playlist-nonhcp\orientation-playlist-nonhcp.html"*/'<!-- Interested Playlist screen for HCP -->\n<ion-view hide-nav-bar="true">\n  <ion-content padding="false" class="user-interested-hcp interested-hcp-demo-content">\n    <!-- <ion-scroll scrollY="true" style="height: 100%; white-space: nowrap;" class="interests-page-wrapper"> -->\n\n      <h4 style="margin-top:5%; text-align: center;">\n        What are you interested in \n      </h4>\n      <h4 style="text-align: center;">\n        learning about?\n      </h4>\n      \n      <div class="interests-new-wrapper" style="padding:10px 12px 10px 16px;" >\n\n        <div class="row">\n          <div id="risk" class="interested-tags newDesignHcp-nonhcp" (click)="interestSelected(\'RISK\')" [ngClass]="activeClass">\n              <div class="classWithPad">Risk Factors for <br /> Heart Disease</div>\n          </div>\n          <div id="stroke" class="interested-tags div-height" (click)="interestSelected(\'STROKE\')" [ngClass]="activeClass">\n            <div class="classWithPad" >Stroke</div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div id="cad" class="interested-tags newDesignHcp-nonhcp" (click)="interestSelected(\'CAD\')" [ngClass]="activeClass">\n            <div class="classWithPad">Heart Disease or <br />Coronary Artery <br /> Disease</div>\n          </div>\n          <div id="afib" class="interested-tags div-height" (click)="interestSelected(\'AFIB\')" [ngClass]="activeClass">\n            <div class="classWithPad">Atrial Fibrillation <br />  (AFib) </div>           \n          </div>\n        </div>\n\n        <div class="row">\n          <div id="chf" class="interested-tags newDesignHcp-nonhcp" (click)="interestSelected(\'CHF\')" [ngClass]="activeClass">\n            <div class="classWithPad">Heart Failure <br /> (CHF) </div>\n          </div>\n          <div id="learn" class="interested-tags div-height" (click)="interestSelected(\'LEARN\')" [ngClass]="activeClass">\n            <div class="classWithPad">The Heart and <br />Keeping it Healthy</div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div id="pad" class="interested-tags newDesignHcp-nonhcp" (click)="interestSelected(\'PAD\')" [ngClass]="activeClass">\n            <div class="classWithPad">Poor Leg Circulation <br />or Peripheral Artery <br />  Disease (PAD)</div>    \n          </div>\n          <div id="scd" class="interested-tags div-height" (click)="interestSelected(\'SCD\')" [ngClass]="activeClass">\n            <div class="classWithPad">Sudden Cardiac <br /> Death (SCD)</div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div id="av" class="interested-tags newDesignHcp-nonhcp" (click)="interestSelected(\'AV\')" [ngClass]="activeClass">\n            <div class="classWithPad">Aortic Valve  <br /> Stenosis</div>\n          </div>\n          <div id="vein" class="interested-tags div-height" (click)="interestSelected(\'VEIN\')" [ngClass]="activeClass">\n            <div class="classWithPad">Venous <br /> Disease</div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div id="spanish" class="interested-tags newDesignHcp-nonhcp" (click)="interestSelected(\'SPANISH\')" [ngClass]="activeClass">\n            <div class="classWithPad">Spanish <br /> Videos</div>\n          </div>\n          <div id="diabetes" style="" class="interested-tags div-height" (click)="interestSelected(\'DIABETES\')"[ngClass]="activeClass">\n           <div class="classWithPad"> Diabetes </div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div id="new" class="interested-tags newDesignHcp-nonhcp" (click)="interestSelected(\'NEW\')" [ngClass]="activeClass">\n            <div class="classWithPad">New <br /> Videos</div>\n          </div>\n        </div>\n        \n        <div tappable class="containerLink" (click)="goToDashboard()">\n          <a  class="buttonLink" style="color:#e85f4f;">Skip</a>\n          <div class="" style="border-bottom: 1px solid grey; width:98%; margin:20px 4px 20px 3px;"></div>\n        </div>\n      </div>\n      <div tappable class="text-center hidden-tablet interested-hcp-demo" (click)="goToVideoDetail()">\n        <button class="button-btn-new" style="width:100%;" >Submit</button>\n      </div>\n\n      <div tappable class="text-center show-on-tablet bottom-div-interests interested-hcp-demo" (click)="goToVideoDetail()">\n        <button class="button-btn" >Submit</button>\n      </div>\n\n      <!-- </ion-scroll> -->\n    </ion-content>\n</ion-view>'/*ion-inline-end:"C:\Users\pc\Downloads\myaapp2\src\pages\orientation-playlist-nonhcp\orientation-playlist-nonhcp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], OrientationPlaylistNonHcp);
    return OrientationPlaylistNonHcp;
}());

//# sourceMappingURL=orientation-playlist-nonhcp.js.map

/***/ })

});
//# sourceMappingURL=30.js.map