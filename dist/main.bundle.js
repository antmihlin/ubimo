webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-3 col-sm-3\">\n\t\t\t<app-sidebar></app-sidebar>\n\t\t</div>\n\t\t<div class=\"col-xs-9 col-sm-9\">\n\t\t\t<app-map></app-map>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_side_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/side/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_side_ads_list_item_ads_list_item_component__ = __webpack_require__("./src/app/components/side/ads-list-item/ads-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navigation_map_map_component__ = __webpack_require__("./src/app/components/navigation/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navigation_ad_popup_ad_popup_component__ = __webpack_require__("./src/app/components/navigation/ad-popup/ad-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ubimo_ad_dispatcher_service__ = __webpack_require__("./src/app/services/ubimo-ad-dispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_ads_exchange_service__ = __webpack_require__("./src/app/services/ads-exchange.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ubimo_fed_ha_master__ = __webpack_require__("./node_modules/ubimo-fed-ha-master/dist/ad-dispatcher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ubimo_fed_ha_master___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ubimo_fed_ha_master__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_side_ads_type_ads_type_component__ = __webpack_require__("./src/app/components/side/ads-type/ads-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_ads_start_filter_pipe__ = __webpack_require__("./src/app/pipes/ads-start-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_ads_end_filter_pipe__ = __webpack_require__("./src/app/pipes/ads-end-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_array_reverse_pipe__ = __webpack_require__("./src/app/pipes/array-reverse.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Services







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_side_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_side_ads_list_item_ads_list_item_component__["a" /* AdsListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navigation_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navigation_ad_popup_ad_popup_component__["a" /* AdPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_side_ads_type_ads_type_component__["a" /* AdsTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_ads_start_filter_pipe__["a" /* AdsStartFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_ads_end_filter_pipe__["a" /* AdsEndFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_array_reverse_pipe__["a" /* ArrayReversePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_ubimo_ad_dispatcher_service__["a" /* UbimoAdDispatcherService */],
                __WEBPACK_IMPORTED_MODULE_11_ubimo_fed_ha_master__["AdDispatcher"],
                __WEBPACK_IMPORTED_MODULE_10__services_ads_exchange_service__["a" /* AdsExchangeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navigation/ad-popup/ad-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ad-popup__inner\">\t\n\t<img src='{{advertisement.creative.url}}' *ngIf=\"advertisement.type == 'IMAGE'\" />\n\t<video *ngIf=\"advertisement.type == 'VIDEO'\" width=\"320\" height=\"240\"\n\t\tmuted=\"true\" autoplay onloadedmetadata=\"this.muted = true\">\n\t  <source src=\"{{advertisement.creative.url}}\" type=\"video/mp4\">\n\tYour browser does not support the video tag.\n\t</video>\n</div>"

/***/ }),

/***/ "./src/app/components/navigation/ad-popup/ad-popup.component.scss":
/***/ (function(module, exports) {

module.exports = ".ad-popup__inner {\n  vertical-align: middle;\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n  .ad-popup__inner img, .ad-popup__inner video {\n    max-width: 100%;\n    max-height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/navigation/ad-popup/ad-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdPopupComponent = /** @class */ (function () {
    function AdPopupComponent() {
    }
    AdPopupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('ad'),
        __metadata("design:type", Object)
    ], AdPopupComponent.prototype, "advertisement", void 0);
    AdPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-ad-popup',
            template: __webpack_require__("./src/app/components/navigation/ad-popup/ad-popup.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/ad-popup/ad-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdPopupComponent);
    return AdPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-field\">\n\t<app-ad-popup class=\"ad-popup\" [ad]=\"advertisement\" *ngIf=\"advertisement\"\n\t\t[style.left.px]=\"advertisement.coordinate.x\" \n\t\t[style.top.px]=\"advertisement.coordinate.y\"\n\t\t></app-ad-popup>\n\n\t<img src=\"/assets/images/got-map.png\" />\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/map/map.component.scss":
/***/ (function(module, exports) {

module.exports = ".map-field {\n  position: relative; }\n\n.ad-popup {\n  width: 150px;\n  height: 120px;\n  position: absolute;\n  padding: 5px;\n  -webkit-box-shadow: 0 0 6px 1px #6c8198;\n          box-shadow: 0 0 6px 1px #6c8198;\n  background: #fff; }\n"

/***/ }),

/***/ "./src/app/components/navigation/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ubimo_ad_dispatcher_service__ = __webpack_require__("./src/app/services/ubimo-ad-dispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ads_exchange_service__ = __webpack_require__("./src/app/services/ads-exchange.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(_adDispatcher, _adExchange) {
        this._adDispatcher = _adDispatcher;
        this._adExchange = _adExchange;
        this.adsList = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAd();
        this._adExchange.currentAdsList.subscribe(function (data) {
            _this.adsList = data;
        });
    };
    //Start ads streaming
    MapComponent.prototype.getAd = function () {
        var _this = this;
        this._adDispatcher.dispatchAd().subscribe(function (data) {
            _this.advertisement = data;
            _this.advertisement.time = Date.now();
            _this.adsList.push(_this.advertisement);
            _this.changeAdsList();
        });
    };
    //Send updated list to the sidebar
    MapComponent.prototype.changeAdsList = function () {
        this._adExchange.changeAdsList(this.adsList);
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/components/navigation/map/map.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ubimo_ad_dispatcher_service__["a" /* UbimoAdDispatcherService */],
            __WEBPACK_IMPORTED_MODULE_2__services_ads_exchange_service__["a" /* AdsExchangeService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/side/ads-list-item/ads-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<span >{{ad.time | date: 'HH:mm:ss'}}</span>\n<span><app-ads-type [mediaType]=\"ad.type\"></app-ads-type></span>\n<span>{{ad.creative.name}}</span>\n<a href=\"{{ad.creative.url}}\" target=\"_blank\"><fa name=\"link\" ></fa></a>\n<br>\n<span>x:{{ad.coordinate.x}},y:{{ad.coordinate.y}}</span>"

/***/ }),

/***/ "./src/app/components/side/ads-list-item/ads-list-item.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/side/ads-list-item/ads-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdsListItemComponent = /** @class */ (function () {
    function AdsListItemComponent() {
    }
    AdsListItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('ad'),
        __metadata("design:type", Object)
    ], AdsListItemComponent.prototype, "ad", void 0);
    AdsListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'li[app-ads-list-item]',
            template: __webpack_require__("./src/app/components/side/ads-list-item/ads-list-item.component.html"),
            styles: [__webpack_require__("./src/app/components/side/ads-list-item/ads-list-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdsListItemComponent);
    return AdsListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/side/ads-type/ads-type.component.html":
/***/ (function(module, exports) {

module.exports = "<fa *ngIf=\"mediaType=='IMAGE'\" name=\"picture-o\" ></fa>\r\n<fa *ngIf=\"mediaType=='VIDEO'\" name=\"video-camera\" ></fa>"

/***/ }),

/***/ "./src/app/components/side/ads-type/ads-type.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/side/ads-type/ads-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdsTypeComponent = /** @class */ (function () {
    function AdsTypeComponent() {
    }
    AdsTypeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('mediaType'),
        __metadata("design:type", String)
    ], AdsTypeComponent.prototype, "mediaType", void 0);
    AdsTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-ads-type',
            template: __webpack_require__("./src/app/components/side/ads-type/ads-type.component.html"),
            styles: [__webpack_require__("./src/app/components/side/ads-type/ads-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdsTypeComponent);
    return AdsTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/side/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Ads</h3>\n\n<div class=\"sidebar__filters\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"startTime\">Start time</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"startTime\" [(ngModel)]=\"startTime\"\n\t\t\t\t   name=\"startTime\" aria-describedby=\"startTime\" placeholder=\"Start time\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"endTime\">End time</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"endTime\" [(ngModel)]=\"endTime\"\n\t\t\t\t   name=\"endTime\" aria-describedby=\"endTime\" placeholder=\"End time\">\n\t\t</div>\n</div>\n<div class=\"sidebar__list\">\n\t<ul class=\"list-group\">\n\t\t<li app-ads-list-item class=\"list-group-item\" \n\t\t\t*ngFor=\"let ad of ads | adsStartFilter:startTime | adsEndFilter:endTime | arrayReverse\"\n\t\t\t[ad]=\"ad\"></li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/side/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar__list {\n  max-height: 500px;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/components/side/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ads_exchange_service__ = __webpack_require__("./src/app/services/ads-exchange.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_adExchange) {
        this._adExchange = _adExchange;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._adExchange.currentAdsList.subscribe(function (data) {
            _this.ads = data;
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/side/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/side/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ads_exchange_service__["a" /* AdsExchangeService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/ads-end-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsEndFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdsEndFilterPipe = /** @class */ (function () {
    function AdsEndFilterPipe() {
    }
    AdsEndFilterPipe.prototype.transform = function (items, end) {
        if (!items || !end)
            return items;
        return items.filter(function (item) { return item.time < end; });
    };
    AdsEndFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'adsEndFilter',
            pure: false
        })
    ], AdsEndFilterPipe);
    return AdsEndFilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/ads-start-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsStartFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdsStartFilterPipe = /** @class */ (function () {
    function AdsStartFilterPipe() {
    }
    AdsStartFilterPipe.prototype.transform = function (items, start) {
        if (!items || !start)
            return items;
        return items.filter(function (item) { return item.time > start; });
    };
    AdsStartFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'adsStartFilter',
            pure: false
        })
    ], AdsStartFilterPipe);
    return AdsStartFilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/array-reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayReversePipe = /** @class */ (function () {
    function ArrayReversePipe() {
    }
    ArrayReversePipe.prototype.transform = function (values) {
        return values.reverse();
    };
    ArrayReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'arrayReverse',
            pure: false
        })
    ], ArrayReversePipe);
    return ArrayReversePipe;
}());



/***/ }),

/***/ "./src/app/services/ads-exchange.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsExchangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdsExchangeService = /** @class */ (function () {
    function AdsExchangeService() {
        this.adsList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.currentAdsList = this.adsList.asObservable();
    }
    AdsExchangeService.prototype.changeAdsList = function (list) {
        this.adsList.next(list);
    };
    AdsExchangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AdsExchangeService);
    return AdsExchangeService;
}());



/***/ }),

/***/ "./src/app/services/ubimo-ad-dispatcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbimoAdDispatcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ubimo_fed_ha_master__ = __webpack_require__("./node_modules/ubimo-fed-ha-master/dist/ad-dispatcher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ubimo_fed_ha_master___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ubimo_fed_ha_master__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UbimoAdDispatcherService = /** @class */ (function () {
    function UbimoAdDispatcherService(_adDispatcher) {
        this._adDispatcher = _adDispatcher;
    }
    UbimoAdDispatcherService.prototype.dispatchAd = function () {
        return this._adDispatcher.adDispatcher$;
    };
    UbimoAdDispatcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ubimo_fed_ha_master__["AdDispatcher"]])
    ], UbimoAdDispatcherService);
    return UbimoAdDispatcherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map