webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[role=button]{cursor:pointer}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-contacts\n  (onContactSelect)=\"contactSelected($event)\"\n  *ngIf=\"!showDetails && contacts\">\n</app-contacts>\n<app-contact-details\n  [contact]=\"selectedContact\"\n  (backToContacts)=\"backToContacts($event)\"\n  *ngIf=\"showDetails\">\n</app-contact-details>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__("../../../../../src/app/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(contactService) {
        this.contactService = contactService;
    }
    // Option 2 : Data management from component vs service
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.fetchContacts()
            .subscribe(function (contacts) {
            _this.contacts = contacts;
            _this.contactService.setContacts(contacts);
        });
    };
    AppComponent.prototype.contactSelected = function (contact) {
        this.showDetails = true;
        this.selectedContact = contact;
    };
    AppComponent.prototype.backToContacts = function (event) {
        this.showDetails = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_details_contact_details_component__ = __webpack_require__("../../../../../src/app/contact-details/contact-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_service__ = __webpack_require__("../../../../../src/app/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__contact_details_contact_details_component__["a" /* ContactDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_component__["b" /* SortByPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__contact_service__["a" /* ContactService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact-details/contact-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[role=button]{cursor:pointer}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-details/contact-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <span role=\"button\" class=\"text-info\" (click)=\"back()\">&laquo; Contacts</span>\n    <span role=\"button\" class=\"float-right\" (click)=\"onFavoriteToggle()\">\n      <img *ngIf=\"contact.isFavorite\" src=\"/assets/Favorite-True.png\">\n      <img *ngIf=\"!contact.isFavorite\" src=\"/assets/Favorite-False.png\">\n    </span>\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <div class=\"card-body text-center\">\n        <img [src]=\"contact.largeImageURL\" (error)=\"contact.largeImageURL='/assets/User-Large.png'\" class=\"img-fluid\">\n        <h4 class=\"p-3\">{{contact.name}}</h4>\n        <div class=\"text-muted\">{{contact.companyName}}</div>\n      </div>\n    </li>\n    <li *ngIf=\"contact.phone.home\" class=\"list-group-item\">\n      <div class=\"card-body\">\n        <div class=\"text-muted\">PHONE:</div>\n        <div>\n          <span>{{contact.phone.home}}</span>\n          <span class=\"float-right text-muted\">Home</span>\n        </div>\n      </div>\n    </li>\n    <li *ngIf=\"contact.phone.mobile\" class=\"list-group-item\">\n      <div class=\"card-body\">\n        <div class=\"text-muted\">PHONE:</div>\n        <div>\n          <span>{{contact.phone.mobile}}</span>\n          <span class=\"float-right text-muted\">Mobile</span>\n        </div>\n      </div>\n    </li>\n    <li *ngIf=\"contact.phone.work\" class=\"list-group-item\">\n      <div class=\"card-body\">\n        <div class=\"text-muted\">PHONE:</div>\n        <div>\n          <span>{{contact.phone.work}}</span>\n          <span class=\"float-right text-muted\">Work</span>\n        </div>\n      </div>\n    </li>\n    <li *ngIf=\"contact.address\" class=\"list-group-item\">\n      <div class=\"card-body\">\n        <div class=\"text-muted\">ADDRESS:</div>\n        <div>\n          <div>{{contact.address.street}}</div>\n          <div>{{contact.address.city}}, {{contact.address.state}} {{contact.address.zipCode}}, {{contact.address.country}}</div>\n        </div>\n      </div>\n    </li>\n    <li *ngIf=\"contact.birthdate\" class=\"list-group-item\">\n      <div class=\"card-body\">\n        <div class=\"text-muted\">BIRTHDAY:</div>\n        <div>{{contact.birthdate | date}}</div>\n      </div>\n    </li>\n    <li *ngIf=\"contact.emailAddress\" class=\"list-group-item\">\n      <div class=\"card-body\">\n        <div class=\"text-muted\">EMAIL:</div>\n        <div>{{contact.emailAddress}}</div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/contact-details/contact-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactDetailsComponent = (function () {
    function ContactDetailsComponent() {
        this.backToContacts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ContactDetailsComponent.prototype.onFavoriteToggle = function () {
        this.contact.isFavorite = !this.contact.isFavorite;
    };
    ContactDetailsComponent.prototype.back = function () {
        this.backToContacts.emit({});
    };
    return ContactDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ContactDetailsComponent.prototype, "contact", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ContactDetailsComponent.prototype, "backToContacts", void 0);
ContactDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-contact-details',
        template: __webpack_require__("../../../../../src/app/contact-details/contact-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-details/contact-details.component.css")]
    })
], ContactDetailsComponent);

//# sourceMappingURL=contact-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.fetchContacts = function () {
        return this.http.get('http://www.mocky.io/v2/59d876840f0000660b2a2428');
    };
    ContactService.prototype.setContacts = function (contacts) {
        this.contacts = contacts;
    };
    ContactService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactService.prototype.updateContact = function (changedContact) {
        this.contacts.filter(function (contact) {
            return contact.id === changedContact.id;
        }).map(function (contact) {
            contact = changedContact;
        });
    };
    return ContactService;
}());
ContactService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[role=button]{cursor:pointer}\n#star-emoji:after {\n  content: '\\2B50';\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let contact of contactsData$ | async\">\n  {{contact | json}}\n</div>-->\n\n<div class=\"card\">\n  <h3 class=\"card-header text-center\">\n    Contacts\n  </h3>\n  <ul class=\"list-group list-group-flush\">\n    <small class=\"text-center bg-light\">FAVORITE CONTACTS</small>\n    <li class=\"list-group-item\" role=\"button\" *ngFor=\"let contact of favoriteContacts | sortBy: 'name': false\" (click)=\"contactSelect(contact)\">\n      <div class=\"card-body row\">\n        <div class=\"col-2\">\n          <img [src]=\"contact.smallImageURL\" (error)=\"contact.smallImageURL='/assets/User-Icon-Small@2x.png'\" class=\"img-fluid\">\n        </div>\n        <div class=\"col-10\">\n          <span id=\"star-emoji\"></span>\n          <span class=\"card-title p-1\">{{contact.name}}</span>\n          <div class=\"small text-muted p-3\">{{contact.companyName}}</div>\n        </div>\n      </div>\n    </li>\n    <small class=\"text-center bg-light\">OTHER CONTACTS</small>\n    <li class=\"list-group-item\" role=\"button\" *ngFor=\"let contact of otherContacts | sortBy: 'name': false\" (click)=\"contactSelect(contact)\">\n      <div class=\"card-body row\">\n        <div class=\"col-2\">\n          <img [src]=\"contact.smallImageURL\" (error)=\"contact.smallImageURL='/assets/User-Icon-Small@2x.png'\" class=\"img-fluid\">\n        </div>\n        <div class=\"col-10\">\n          <div class=\"card-title\">{{contact.name}}</div>\n          <small class=\"text-muted\">{{contact.companyName}}</small>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__("../../../../../src/app/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsComponent = (function () {
    function ContactsComponent(contactService) {
        this.contactService = contactService;
        this.onContactSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.favoriteContacts = [];
        this.otherContacts = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts().forEach(function (contact) {
            if (contact.isFavorite) {
                _this.favoriteContacts.push(contact);
            }
            else {
                _this.otherContacts.push(contact);
            }
        });
    };
    ContactsComponent.prototype.contactSelect = function (contact) {
        this.onContactSelect.emit(contact);
    };
    return ContactsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ContactsComponent.prototype, "onContactSelect", void 0);
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]) === "function" && _a || Object])
], ContactsComponent);

var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (arr, prop, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (arr === undefined) {
            return;
        }
        var m = reverse ? -1 : 1;
        return arr.sort(function (a, b) {
            var x = a[prop];
            var y = b[prop];
            return (x === y) ? 0 : (x < y) ? -1 * m : 1 * m;
        });
    };
    return SortByPipe;
}());
SortByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'sortBy'
    })
], SortByPipe);

var _a;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map