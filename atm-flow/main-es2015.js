(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-base\">\n  <div class=\"header-wrapper\">\n    <app-header></app-header>\n  </div>\n  <div class=\"body-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/atm-flow/atm-flow.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atm-flow/atm-flow.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngSwitch]=atmflow>\n\n    <div *ngSwitchCase=0 class=\"welcome-message-container\">\n        <div class=\"formPadding\">\n            <img id=\"svgSource\" class=\"carousel-area\" src=\"../../assets/carousel/{{carousalSource[imageNumber]}}\">\n        </div>\n        <div class=\"formPadding\">\n            <button class=\"align-self-end btn btn-primary btn-lg content-right\" style=\"float: right;\" role=\"button\"\n                (click)='onContinue()'>Continue</button>\n        </div>\n    </div>\n\n    <div *ngSwitchCase=1 class=\"formPadding\">\n        <div *ngIf='scannedResult' class=\"row justify-content-center atm-flow-content\">\n            <div class=\" text-center mt-5  card-material\">\n                <div class=\"card-body\">\n                    <h2 class=\"card-title\">Welcome, {{customer.name}}</h2>\n                    <p class=\"card-text align-self-center\">Account No: {{customer.accountNo}}</p>\n                    <div class=\"content-right\">\n                        <button class=\"btn btn-primary mt-2 mx-2\" (click)=\"onConfirm()\">Continue</button>\n                        <button class=\"btn btn-danger mt-2 mx-2\" (click)=\"cleanUp()\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-qrscanner *ngIf='!scannedResult' (scannedDetails)='onScanResult($event)'></app-qrscanner>\n    </div>\n\n    <div *ngSwitchCase=2>\n        <div *ngIf=\"!imageLoading\">\n            <app-facedetection [isLoading]=\"imageLoading\" (image)=\"imageCaptured($event)\"></app-facedetection>\n        </div>\n        <div *ngIf=\"imageLoading\" class=\"loadingimage\">\n            <img class=\"image-loader\" src=\"assets/images/facedetection.gif\" alt=\"\">\n            <h4 class=\"statusMsg\">{{statusMsg}}</h4>\n            <div class=\"spinner-border text-primary\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n            </div>\n        </div>\n    </div>\n\n    <div *ngSwitchCase=3>\n        <div class=\"justify-content-center atm-flow-content formPadding\">\n            <div class=\" text-center mt-5  card-material\">\n                <div class=\"card-body\">\n                    <h2 class=\"card-title\">Account No: {{customer.accountNo}}</h2>\n                    <div class=\"content-right formPadding\">\n                        <button class=\"btn btn-primary mt-2 mx-2\" (click)=\"checkBalance()\">Check Balance</button>\n                        <button class=\"btn btn-primary mt-2 mx-2\" (click)=\"withdrawalPage()\">Cash Withdrawal</button>\n                        <button class=\"btn btn-danger mt-2 mx-2\" (click)=\"cleanUp()\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngSwitchCase=4>\n        <div class=\"justify-content-center atm-flow-content formPadding\">\n            <div class=\" text-center mt-5  card-material\">\n                <div class=\"card-body\">\n                    <h2 class=\"card-title\">Account No: {{customer.accountNo}}</h2>\n                    <p class=\"card-text align-self-center\">Balance: {{customer.balance}}</p><br>\n                    <h3 class=\"card-text align-self-center\">Thank you for banking with us!</h3><br>\n                    <p class=\"card-text align-self-center\">You can also continue Banking</p>\n                </div>\n                <div class=\"content-right formPadding\">\n                    <button class=\"btn btn-primary mt-2 mx-2\" (click)=\"continueBanking()\">Continue Banking</button>\n                    <button class=\"btn btn-danger mt-2 mx-2\" (click)=\"cleanUp()\">Exit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngSwitchCase=5>\n        <div class=\"justify-content-center atm-flow-content formPadding\">\n            <div class=\" text-center mt-5  card-material\">\n                <div class=\"card-body\">\n                    <h2 class=\"card-title\">Enter Amount:</h2>\n                    <p class=\"card-text align-self-center\">Multiples of 100, 200, 500</p>\n                    <input type=\"number\" class=\"form-control center-input\" required [(ngModel)]=\"amountRequired\">\n                </div>\n                <div class=\"content-right formPadding\">\n                    <button class=\"btn btn-primary mt-2 mx-2\" (click)=\"withdrawAmount()\">Continue</button>\n                    <button class=\"btn btn-danger mt-2 mx-2\" (click)=\"cleanUp()\">Exit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<p-toast sticky=true position=\"bottom-right\"></p-toast>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/enrollment/enrollment.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enrollment/enrollment.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-login *ngIf=\"authStatus != 0\"\n           (stateChange)=\"onstateChange()\"></app-login>\n\n<div *ngIf=\"authStatus == 0\"\n     class=\"enrollment card-material\">\n    <div *ngIf=\"enrollmentStep == 0\"\n         class=\"branch-selector form-group card-material formPadding\">\n\n        <span class=\"form-large-text\">Select branch name &nbsp;&nbsp;&nbsp;&nbsp;</span>\n        <span>\n            <p-dropdown [options]=\"bankSelectionList\"\n                        [(ngModel)]=\"selectedBank\"\n                        placeholder=\"---Select---\">\n            </p-dropdown>\n        </span>\n        <div *ngIf=\"selectedBank?.branchCode\"\n             class=\"display-branch-details\">\n            <span class=\"form-large-text\">Branch Code : </span><span\n                  class=\"form-text-color\">{{selectedBank.branchCode}}</span>\n            <span class=\"form-large-text\">IFSC Code : </span><span\n                  class=\"form-text-color\">{{selectedBank.ifscCode}}</span>\n        </div>\n    </div>\n    <div *ngIf=\"enrollmentStep == 0\"\n         class=\"customer-details\">\n        <div class=\"card-material\">\n            <form class=\"customerDetailsForm formPadding\">\n                <div class=\"form-group text-align-left formPadding\">\n                    <label for=\"name\"\n                           class=\"form-large-text\">Customer Name</label>\n                    <input required\n                           name=\"name\"\n                           type=\"text\"\n                           class=\"form-control\"\n                           [(ngModel)]=\"customer.name\"\n                           id=\"name\"\n                           aria-describedby=\"nameHelp\"\n                           placeholder=\"Enter name\">\n                    <small id=\"nameHelp\"\n                           class=\"form-text text-muted\">Ensure the name matches your Identity\n                        proof</small>\n                </div>\n                <div class=\"form-group text-align-left formPadding\">\n                    <label for=\"balance\"\n                           class=\"form-large-text\">Balance</label>\n                    <input type=\"number\"\n                           name=\"balance\"\n                           class=\"form-control\"\n                           required\n                           id=\"balance\"\n                           [(ngModel)]=\"customer.balance\"\n                           placeholder=\"Balance\">\n                </div>\n                <div class=\"form-group formPadding\">\n                    <button type=\"submit\"\n                            class=\"form-button\"\n                            (click)=\"formSubmit()\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div *ngIf=\"enrollmentStep == 2 && !imageLoading\">\n        <app-facedetection [isLoading]=\"imageLoading\"\n                           (image)=\"imageCaptured($event)\"></app-facedetection>\n    </div>\n    <div *ngIf=\"imageLoading\"\n         class=\"loadingimage\">\n        <img src=\"assets/images/facedetection.gif\"\n             alt=\"\">\n        <h4 class=\"statusMsg\">{{statusMsg}}</h4>\n        <div class=\"spinner-border text-primary\"\n             role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n    <div *ngIf=\"enrollmentStep == 3\"\n         class=\"details-view\">\n        <h1 class=\"title\"\n            *ngIf=\"!cardGenerating\">Here's your card!</h1>\n        <h1 class=\"title\"\n            *ngIf=\"cardGenerating\">Please wait while your card is generated</h1>\n        <div>\n            <div class=\"container mt-3\">\n                <div class=\"row justify-content-center\">\n                    <img *ngIf=\"cardGenerating\"\n                         id=\"cardloading\"\n                         src=\"assets/cardgenerating.gif\">\n                    <img src={{cardinString}}\n                         alt=\"\"\n                         id=\"card\"\n                         srcset=\"\">\n                </div>\n                <div class=\"row justify-content-center mt-2\">\n                    <button (click)=\"captureScreen()\"\n                            id=\"btnSave\"\n                            class=\"btn btn-primary \">Export</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"enrollmentStep == 4\">\n        <div class=\"jumbotron text-center\">\n            <h2 class=\"display-5\">\n                Add Another ?\n                <button class=\"btn btn-primary\"\n                        (click)=\"addAnother()\">Add Another</button>\n                or Logout\n                <button class=\"btn btn-danger\"\n                        (click)=\"logOut()\">Log Out</button>\n            </h2>\n        </div>\n    </div>\n</div>\n<p-toast sticky=true\n         position=\"bottom-right\"></p-toast>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facedetection/facedetection.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facedetection/facedetection.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"webcam\">\n    <webcam [height]=\"768\" [width]=\"1024\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\"\n        (imageClick)=\"triggerSnapshot()\" *ngIf=\"showWebcam\" [videoOptions]=\"videoOptions\" [imageQuality]=\"1\"></webcam>\n</div>\n<div class=\"button-controls\" *ngIf=\"buttonControlEnabled\">\n    <button class=\"actionBtn\" (click)=\"triggerSnapshot();\">Take A Snapshot</button>\n    <button class=\"actionBtn\" (click)=\"hideWebcam();\">Hide Webcam</button>\n    <button class=\"actionBtn\" (click)=\"showWebcamfun();\">Show Webcam</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n    <div class=\"navbar-brand \">\n        <img id=\"logo\" src=\"assets/faceidatm-logo.svg\">\n        <span class=\"ml-2 navbar-text\">Next Gen ATM</span>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div id=\"formContent\">\n        <!-- Tabs Titles -->\n        <!-- Icon -->\n        <div class=\"first\">\n            <img src=\"assets/faceidatm-logo.svg\" id=\"icon\" alt=\"User Icon\" />\n        </div>\n        <!-- Login Form -->\n        <form class=\"formPadding\">\n            <input type=\"text\" id=\"login\" class=\"second\" name=\"login\" placeholder=\"Enter username\"\n                [(ngModel)]=\"username\">\n            <input type=\"password\" id=\"password\" class=\"third\" name=\"login\" placeholder=\"Enter password\"\n                [(ngModel)]=\"password\">\n            <input type=\"submit\" class=\"fourth\" value=\"Log In\" (click)=\"submitForm()\">\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/qrscanner/qrscanner.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qrscanner/qrscanner.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row justify-content-center mt-3\">\n        <div  class=\"col-9 center-content\">\n        <div *ngIf='!qrCardDetails' class=\"col-9 center-content\">\n            <div class=\"card-material formPadding\">\n                <h2 class=\"card-title text-center\">Place your card here</h2>\n                <div class=\"qr-scanner\">\n            <zxing-scanner (scanSuccess)=\"scanSuccessHandler($event)\"></zxing-scanner>\n            </div>\n            </div>\n        </div>\n    </div>\n    </div>\n</div>\n<p-toast sticky=true position=\"bottom-right\"></p-toast>\n\n\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/urlselector/urlselector.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/urlselector/urlselector.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n  &nbsp;\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"urlform  mt-5 text-center col-md-4 \">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"assets/faceidatm-logo.svg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <form [formGroup]=urlForm (ngSubmit)='onSubmit(urlForm.value)'>\n            <div class=\"form-group\">\n              <label for=\"baseUrlInput\">NextGenATM Instance</label>\n              <input type=\"text\" class=\"form-control\" required id=\"baseUrlInput\" formControlName='url'\n                placeholder=\"Enter instance URL\">\n            </div>\n            <div class=\"card-text my-2 text-danger\" *ngIf=\"!validUrl\"> Enter a url in valid format</div>\n            <div class=\"card-text my-2 text-danger\" >{{errorMsg}}</div>\n\n            <button type=\"submit\"  class=\"btn btn-primary\">Continue</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<p-toast sticky=true position=\"bottom-right\"></p-toast>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enrollment/enrollment.component */ "./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var _urlselector_urlselector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlselector/urlselector.component */ "./src/app/urlselector/urlselector.component.ts");
/* harmony import */ var _atm_flow_atm_flow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atm-flow/atm-flow.component */ "./src/app/atm-flow/atm-flow.component.ts");






const routes = [
    { path: '', component: _urlselector_urlselector_component__WEBPACK_IMPORTED_MODULE_4__["UrlselectorComponent"], pathMatch: 'full' },
    { path: 'enroll', component: _urlselector_urlselector_component__WEBPACK_IMPORTED_MODULE_4__["UrlselectorComponent"], pathMatch: 'full' },
    { path: 'enrollment', component: _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_3__["EnrollmentComponent"], pathMatch: 'full' },
    { path: 'atm-flow', component: _atm_flow_atm_flow_component__WEBPACK_IMPORTED_MODULE_5__["AtmFlowComponent"], pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true }),],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-base {\n    min-height: 100vh;\n    width: 100%;\n}\n\n.body-wrapper {\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYXNlIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJvZHktd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'NextGenATM';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _facedetection_facedetection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facedetection/facedetection.component */ "./src/app/facedetection/facedetection.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enrollment/enrollment.component */ "./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm2015/primeng-card.js");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/steps */ "./node_modules/primeng/fesm2015/primeng-steps.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm2015/primeng-message.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./qrscanner/qrscanner.component */ "./src/app/qrscanner/qrscanner.component.ts");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _urlselector_urlselector_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./urlselector/urlselector.component */ "./src/app/urlselector/urlselector.component.ts");
/* harmony import */ var _atm_flow_atm_flow_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./atm-flow/atm-flow.component */ "./src/app/atm-flow/atm-flow.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _facedetection_facedetection_component__WEBPACK_IMPORTED_MODULE_6__["FacedetectionComponent"],
            _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_9__["EnrollmentComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_22__["QrscannerComponent"],
            _urlselector_urlselector_component__WEBPACK_IMPORTED_MODULE_24__["UrlselectorComponent"],
            _atm_flow_atm_flow_component__WEBPACK_IMPORTED_MODULE_25__["AtmFlowComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_8__["WebcamModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_14__["CardModule"],
            primeng_steps__WEBPACK_IMPORTED_MODULE_15__["StepsModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_16__["CarouselModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_17__["QRCodeModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_19__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_20__["MessageModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_18__["ToastModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_23__["ZXingScannerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_21__["MessageService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/atm-flow/atm-flow.component.css":
/*!*************************************************!*\
  !*** ./src/app/atm-flow/atm-flow.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron{\n    height: calc(100% - 100px);\n    margin: 0px;\n}\n\n.carousel-area{\n    height:calc(100vh - 300px);\n    width: 1000px;\n    margin: 0 auto;\n    background-color: #4df9fd;\n    display: block;\n}\n\n.atm-flow-content{\n    height:100%;\n    padding: 20px;\n    background: #ecdfae;\n}\n\n.statusMsg{\n    color: white;\n}\n\n.content-right{\n    display: inline-grid;\n}\n\n.image-loader{\n    width: 100%;\n}\n\n.loadingimage{\n    margin: 0 auto;\n    width: 100%;\n    text-align: center;\n    height: calc(100vh - 100px);\n    background-color: black;\n}\n\n.center-input{\n    max-width: 300px;\n    margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRtLWZsb3cvYXRtLWZsb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F0bS1mbG93L2F0bS1mbG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uY2Fyb3VzZWwtYXJlYXtcbiAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGY5ZmQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hdG0tZmxvdy1jb250ZW50e1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2VjZGZhZTtcbn1cblxuLnN0YXR1c01zZ3tcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY29udGVudC1yaWdodHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbn1cblxuLmltYWdlLWxvYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvYWRpbmdpbWFnZXtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uY2VudGVyLWlucHV0e1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/atm-flow/atm-flow.component.ts":
/*!************************************************!*\
  !*** ./src/app/atm-flow/atm-flow.component.ts ***!
  \************************************************/
/*! exports provided: AtmFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtmFlowComponent", function() { return AtmFlowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _middleware_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware.service */ "./src/app/middleware.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timer.service */ "./src/app/timer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AtmFlowComponent = class AtmFlowComponent {
    constructor(middlewareService, timer, messageService, router) {
        this.middlewareService = middlewareService;
        this.timer = timer;
        this.messageService = messageService;
        this.router = router;
        this.customer = {};
        this.imageLoading = false;
        this.statusMsg = '';
        this.amountRequired = '';
        this.operationTimedOut = false;
        this.carousalSource = ['1.svg', '2.png', '3.svg'];
        this.imageNumber = 0;
    }
    ngOnInit() {
        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].welcome;
        this.timer.getTimer().subscribe(() => {
            setTimeout(() => {
                this.cleanUp();
                this.router.navigate(['atm-flow']);
            }, 100000);
            this.operationTimedOut = true;
            this.messageService.add({ severity: 'error', summary: 'Operation Timed out', detail: 'No input received' });
        });
        //Carousel Feature
        this.imageNumber = Math.floor(Math.random() * (this.carousalSource.length));
        setInterval(() => {
            this.changeCarousalImage();
        }, 10000);
    }
    /**
     * To cleanup the current session
     */
    cleanUp() {
        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].welcome;
        this.scannedResult = '';
        this.customer = {};
        this.imageLoading = false;
        this.statusMsg = '';
        this.amountRequired = '';
        this.operationTimedOut = false;
    }
    /**
     * To change the image in carousel
     */
    changeCarousalImage() {
        if (this.imageNumber < this.carousalSource.length - 1) {
            this.imageNumber++;
        }
        else {
            this.imageNumber = 0;
        }
    }
    /**
     * Switch from welcome screen to QR Scanner
     */
    onContinue() {
        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].scan;
        this.timer.startTimer(10000);
    }
    /**
     * To fetch account details of the customer
     * @param $event details in the qr code
     */
    onScanResult($event) {
        this.timer.clearTimer();
        this.scannedResult = $event;
        this.middlewareService.getAccountDetails(this.scannedResult).then((res) => {
            this.customer.customerID = res.customerID;
            this.customer.name = res.name;
            this.customer.accountNo = res.accountNo;
        });
    }
    /**
     * Switch to face detection component
     */
    onConfirm() {
        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].facedetection;
        this.timer.startTimer(3000);
    }
    /**
     * To check faceid against customer id and navigated to transaction type page
     * @param $event base64 string of the image captured
     */
    imageCaptured($event) {
        this.timer.clearTimer();
        this.middlewareService.detectFace($event).then((res) => {
            if (res.Status == 1) {
                this.imageLoading = true;
                this.statusMsg = "Face Detection Starts";
                this.middlewareService.matchFaceWithAccount(this.customer.customerID, $event).then((res) => {
                    if (res.Status == 1) {
                        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].selectTransactionType;
                    }
                    else {
                        this.messageService.add({ severity: 'error', summary: 'Face ID Not Match', detail: 'Face ID not match with the account!' });
                        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].welcome;
                        return;
                    }
                });
            }
            else if (res.Status == 2) {
                this.messageService.add({ severity: 'warn', summary: 'Face detection failed', detail: 'No face found!' });
                return;
            }
            else if (res.Status == 3) {
                this.messageService.add({
                    severity: 'warn', summary: 'Face detection failed', detail: 'More than one face found'
                });
                return;
            }
        });
    }
    /**
     * To check the balance of the customer and then switch the navigation
     */
    checkBalance() {
        this.middlewareService.getAccountBalance(this.customer.customerID).then((res) => {
            this.customer.balance = res.balance;
        });
        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].checkBalance;
    }
    /**
     * Switch to Withdrawal page
     */
    withdrawalPage() {
        this.timer.startTimer(10000);
        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].withdrawalPage;
    }
    /**
     * To withdraw amount from the customer account and switch to check balance
     */
    withdrawAmount() {
        this.timer.clearTimer();
        if (parseInt(this.amountRequired) > 20000) {
            this.messageService.add({
                severity: 'warn', summary: 'Amount Exceeded', detail: 'Please try again later.'
            });
            this.cleanUp();
        }
        else {
            this.middlewareService.withdrawCashFromAccount(this.customer.customerID, this.amountRequired).then((res) => {
                if (res.Status == 1) {
                    this.messageService.add({
                        severity: 'success', summary: 'Cash Withdrawed', detail: 'Cash withdraw successfully!'
                    });
                    this.checkBalance();
                    this.amountRequired = '';
                }
                else {
                    this.messageService.add({
                        severity: 'warn', summary: 'Insufficient Balance', detail: 'You don\'t have sufficient amount to withdrawal. Please try again later.'
                    });
                    this.cleanUp();
                }
            });
        }
    }
    /**
     * To continue banking after withdrawal or check balance
     */
    continueBanking() {
        this.atmflow = _models__WEBPACK_IMPORTED_MODULE_2__["ATMFlow"].selectTransactionType;
    }
};
AtmFlowComponent.ctorParameters = () => [
    { type: _middleware_service__WEBPACK_IMPORTED_MODULE_3__["MiddlewareService"] },
    { type: _timer_service__WEBPACK_IMPORTED_MODULE_5__["TimerService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AtmFlowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-atm-flow',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./atm-flow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/atm-flow/atm-flow.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./atm-flow.component.css */ "./src/app/atm-flow/atm-flow.component.css")).default]
    })
], AtmFlowComponent);



/***/ }),

/***/ "./src/app/enrollment/enrollment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i');\n\n.enrollment{\n    height:100%;\n    padding: 20px;\n    background: #ecdfae;\n}\n\n.branch-selector{\n        text-align: center;\n        display: block;\n        height: 100%;\n        padding: 20px;\n}\n\n.display-branch-details{\n    display: grid;\n    grid-template-columns: auto auto;\n    margin: 0 auto;\n    width: 35%;\n    padding: 20px;\n}\n\n.form-large-text{\n    font-weight: 100;\n    font-size: large;\n}\n\n.form-text-color{\n    color: #1520b8 !important;\n}\n\n.customer-details{\n    margin: 0 auto;\n\n}\n\n.loadingimage{\n    margin: 0 auto;\n    width: 100%;\n    text-align: center;\n    height: calc(100vh - 100px);\n    background-color: black;\n}\n\n.statusMsg{\n    color: white;\n}\n\n.text-align-left{\n    text-align: left;\n}\n\n.form-button{\n    color: #fff;\n    background-color: rgb(25, 101, 252);\n    border-color: rgb(25, 101, 252);\n    border-radius: .25rem;\n    padding: .075rem .75rem;\n}\n\n.form-button:hover {\n    background-color: #39ace7;\n}\n\n.title {\n    margin-bottom: 30px;\n    color: #162969;\n    margin: 0 auto;\n    width: 21%;\n    margin-top:5px;\n    text-align: center;\n}\n\n.card{\nwidth: 320px;\nheight: 190px;\n  -webkit-perspective: 600px;\n  perspective:600px;\n  margin: 0 auto;\n  margin-top: 88px;\n  \n}\n\ncard-display{\n    margin:0 auto;\n}\n\n.card__part{\n  box-shadow: 1px 1px #aaa3a3;\n    top: 0;\n  position: absolute;\nz-index: 1000;\n  left: 0;\n  display: inline-block;\n    width: 320px;\n    height: 190px;\n    background-image: url('https://image.ibb.co/bVnMrc/g3095.png'), -webkit-gradient(linear, left top, right bottom, from(#fd696b), color-stop(#fa616e), color-stop(#f65871), color-stop(#f15075), to(#ec4879));\n    background-image: url('https://image.ibb.co/bVnMrc/g3095.png'), linear-gradient(to right bottom, #fd696b, #fa616e, #f65871, #f15075, #ec4879); /*linear-gradient(to right bottom, #fd8369, #fc7870, #f96e78, #f56581, #ee5d8a)*/\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n   \n    -webkit-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n}\n\n.card__front{\n  padding: 18px;\n-webkit-transform: rotateY(0);\n-moz-transform: rotateY(0);\n}\n\n.card__back {\n  padding: 18px 0;\n-webkit-transform: rotateY(-180deg);\n-moz-transform: rotateY(-180deg);\n}\n\n.card__black-line {\n    margin-top: 5px;\n    height: 38px;\n    background-color: #303030;\n}\n\n.card__logo {\n    height: 16px;\n}\n\n.card__front-logo{\n      position: absolute;\n    top: 18px;\n    right: 18px;\n}\n\n.card__square {\n    border-radius: 5px;\n    height: 30px;\n}\n\n.card_numer {\n    display: block;\n    width: 100%;\n    word-spacing: 4px;\n    font-size: 20px;\n    letter-spacing: 2px;\n    color: #fff;\n    text-align: center;\n    margin-bottom: 20px;\n    margin-top: 20px;\n}\n\n.card__space-75 {\n    width: 75%;\n    float: left;\n}\n\n.card__space-25 {\n    width: 25%;\n    float: left;\n}\n\n.card__label {\n    font-size: 10px;\n    text-transform: uppercase;\n    color: rgba(255,255,255,0.8);\n    letter-spacing: 1px;\n}\n\n.card__info {\n    margin-bottom: 0;\n    margin-top: 5px;\n    font-size: 16px;\n    line-height: 18px;\n    color: #fff;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.card__back-content {\n    padding: 15px 15px 0;\n}\n\n.card__secret--last {\n    color: #303030;\n    text-align: right;\n    margin: 0;\n    font-size: 14px;\n}\n\n.card__secret {\n    padding: 5px 12px;\n    background-color: #fff;\n    position:relative;\n}\n\n.card__secret:before{\n  content:'';\n  position: absolute;\ntop: -3px;\nleft: -3px;\nheight: calc(100% + 6px);\nwidth: calc(100% - 42px);\nborder-radius: 4px;\n  background: repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px);\n}\n\n.card__back-logo {\n    position: absolute;\n    bottom: 15px;\n    right: 15px;\n}\n\n.card__back-square {\n    position: absolute;\n    bottom: 15px;\n    left: 15px;\n}\n\n.card:hover .card__front {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n\n}\n\n.card:hover .card__back {\n    -webkit-transform: rotateY(0deg);\n    -moz-transform: rotateY(0deg);\n}\n\n.qrcode{\n    margin: 0 auto;\n    text-align: center;\n}\n\n#qrcodeinsert{\n    background-image: url(\"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example\");\n}\n\n.qr{\n    text-align: center;\n}\n\nh4{\n    margin: 0 auto;\n    text-align: center;\n}\n\np-messages{\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n}\n\n#dropdownsubmit{\n    margin: 0 auto;\n    margin-top: 21px;\n    /* top: 26px; */\n    display: block;\n}\n\n#card{\n    display: block;\n}\n\n#cardloading{\n    width: 520px;\n    height: 520px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5yb2xsbWVudC9lbnJvbGxtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GOztBQUVuRjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO1FBQ1Esa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxZQUFZO1FBQ1osYUFBYTtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxjQUFjO0lBQ2QsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBSUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtFQUNYLDBCQUEwQjtFQUUxQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjs7QUFFbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0VBQ0UsMkJBQTJCO0lBQ3pCLE1BQU07RUFDUixrQkFBa0I7QUFDcEIsYUFBYTtFQUNYLE9BQU87RUFDUCxxQkFBcUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYiwyTUFBNkk7SUFBN0ksNklBQTZJLEVBQUUsZ0ZBQWdGO0lBQy9OLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjs7SUFFbEIsbUVBQW1FO0lBSW5FLDJEQUEyRDtJQUMzRCxvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2YsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIsbUNBQW1DO0FBQ25DLGdDQUFnQztBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtNQUNNLGtCQUFrQjtJQUNwQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQixTQUFTO0FBQ1QsVUFBVTtBQUNWLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsa0JBQWtCO0VBQ2hCLDZGQUE2RjtBQUMvRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsK0JBQStCOztBQUVuQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEZBQThGO0FBQ2xHOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Vucm9sbG1lbnQvZW5yb2xsbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TcGFjZStNb25vOjQwMCw0MDBpLDcwMCw3MDBpJyk7XG5cbi5lbnJvbGxtZW50e1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2VjZGZhZTtcbn1cblxuLmJyYW5jaC1zZWxlY3RvcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGlzcGxheS1icmFuY2gtZGV0YWlsc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvcm0tbGFyZ2UtdGV4dHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5mb3JtLXRleHQtY29sb3J7XG4gICAgY29sb3I6ICMxNTIwYjggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbn1cblxuLmxvYWRpbmdpbWFnZXtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uc3RhdHVzTXNne1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtYWxpZ24tbGVmdHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZm9ybS1idXR0b257XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAxMDEsIDI1Mik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjUsIDEwMSwgMjUyKTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgcGFkZGluZzogLjA3NXJlbSAuNzVyZW07XG59XG4uZm9ybS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XG59XG5cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiAjMTYyOTY5O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAyMSU7XG4gICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuLmNhcmR7XG53aWR0aDogMzIwcHg7XG5oZWlnaHQ6IDE5MHB4O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA2MDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogNjAwcHg7XG4gIHBlcnNwZWN0aXZlOjYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogODhweDtcbiAgXG59XG5cbmNhcmQtZGlzcGxheXtcbiAgICBtYXJnaW46MCBhdXRvO1xufVxuLmNhcmRfX3BhcnR7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggI2FhYTNhMztcbiAgICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbnotaW5kZXg6IDEwMDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuaWJiLmNvL2JWbk1yYy9nMzA5NS5wbmcnKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2ZkNjk2YiwgI2ZhNjE2ZSwgI2Y2NTg3MSwgI2YxNTA3NSwgI2VjNDg3OSk7IC8qbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2ZkODM2OSwgI2ZjNzg3MCwgI2Y5NmU3OCwgI2Y1NjU4MSwgI2VlNWQ4YSkqL1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2FyZF9fZnJvbnR7XG4gIHBhZGRpbmc6IDE4cHg7XG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcbi1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDApO1xufVxuXG4uY2FyZF9fYmFjayB7XG4gIHBhZGRpbmc6IDE4cHggMDtcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG59XG5cbi5jYXJkX19ibGFjay1saW5lIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG59XG5cbi5jYXJkX19sb2dvIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5jYXJkX19mcm9udC1sb2dve1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMThweDtcbiAgICByaWdodDogMThweDtcbn1cbi5jYXJkX19zcXVhcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jYXJkX251bWVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3b3JkLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZF9fc3BhY2UtNzUge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkX19zcGFjZS0yNSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmNhcmRfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jYXJkX19pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJkX19iYWNrLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwO1xufVxuLmNhcmRfX3NlY3JldC0tbGFzdCB7XG4gICAgY29sb3I6ICMzMDMwMzA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmRfX3NlY3JldCB7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLmNhcmRfX3NlY3JldDpiZWZvcmV7XG4gIGNvbnRlbnQ6Jyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogLTNweDtcbmxlZnQ6IC0zcHg7XG5oZWlnaHQ6IGNhbGMoMTAwJSArIDZweCk7XG53aWR0aDogY2FsYygxMDAlIC0gNDJweCk7XG5ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNlZGVkZWQsICNlZGVkZWQgNXB4LCAjZjlmOWY5IDVweCwgI2Y5ZjlmOSAxMHB4KTtcbn1cblxuLmNhcmRfX2JhY2stbG9nbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTVweDtcbiAgICByaWdodDogMTVweDtcbn1cblxuLmNhcmRfX2JhY2stc3F1YXJlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIGxlZnQ6IDE1cHg7XG59XG5cbi5jYXJkOmhvdmVyIC5jYXJkX19mcm9udCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuXG59XG5cbi5jYXJkOmhvdmVyIC5jYXJkX19iYWNrIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cbi5xcmNvZGV7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcXJjb2RlaW5zZXJ0e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0xNTB4MTUwJmRhdGE9RXhhbXBsZVwiKTtcbn1cblxuLnFye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmg0e1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucC1tZXNzYWdlc3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xufVxuI2Ryb3Bkb3duc3VibWl0e1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgLyogdG9wOiAyNnB4OyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuI2NhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4jY2FyZGxvYWRpbmd7XG4gICAgd2lkdGg6IDUyMHB4O1xuICAgIGhlaWdodDogNTIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.ts ***!
  \****************************************************/
/*! exports provided: EnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentComponent", function() { return EnrollmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _middleware_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware.service */ "./src/app/middleware.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let EnrollmentComponent = class EnrollmentComponent {
    constructor(middlewareService, messageService, router) {
        this.middlewareService = middlewareService;
        this.messageService = messageService;
        this.router = router;
        this.bankSelectionList = [];
        this.validForm = true;
        this.imageLoading = false;
        this.cardGenerating = false;
        this.statusMsg = "Please wait";
        this.msgs = [];
        this.cardinString = "";
    }
    ngOnInit() {
        this.middlewareService.getAuthStatus().subscribe(authState => {
            this.authStatus = authState;
        });
        this.customer = {};
    }
    /**
     * To build the dropdown of available banks
     */
    buildDropdown() {
        this.availableBanksList.forEach(bank => {
            this.bankSelectionList.push({
                label: bank.location,
                value: bank
            });
        });
    }
    /**
     * Handles the user creation form
     */
    formSubmit() {
        if (this.customer.name != null &&
            this.customer.balance != null &&
            this.selectedBank &&
            this.selectedBank.branchCode) {
            this.middlewareService
                .createAccount({
                branchCode: this.selectedBank.branchCode,
                accountNo: this.selectedBank.lastAddedAcNo,
                name: this.customer.name,
                balance: this.customer.balance
            })
                .then((res) => {
                if (res.Status)
                    this.customer.customerID = res.customerID;
                this.enrollmentStep = 2;
            });
        }
        else {
            let messageDetail = "Please fill out the form";
            if (!this.selectedBank) {
                messageDetail = "Please Select a branch";
            }
            this.validForm = false;
            this.messageService.add({
                severity: "warn",
                summary: "Form Error",
                detail: messageDetail
            });
            return;
        }
    }
    /**
     * Handles the image captured by face recognition
     * @param $event the imge in base64
     */
    imageCaptured($event) {
        this.middlewareService.detectFace($event).then((res) => {
            if (res.Status == 1) {
                this.imageLoading = true;
                this.statusMsg = "Indexing Face";
                this.middlewareService
                    .indexFace(this.customer.customerID, $event)
                    .then((res) => {
                    if (res.Status == 1) {
                        this.statusMsg = "Indexing Done";
                        this.enrollmentStep = 3;
                        this.cardGenerating = true;
                        this.middlewareService
                            .generateQrCode(this.customer.customerID)
                            .subscribe((data) => {
                            setTimeout(() => {
                                this.cardinString = "data:image/png;base64," + data.card;
                                this.cardGenerating = false;
                            }, 3000);
                        });
                        this.imageLoading = false;
                    }
                });
            }
            else if (res.Status == 2) {
                this.messageService.add({
                    severity: "warn",
                    summary: "Face detection failed",
                    detail: "No face found!"
                });
            }
            else if (res.Status == 3) {
                this.messageService.add({
                    severity: "warn",
                    summary: "Face detection failed",
                    detail: "More than one face found"
                });
            }
        });
    }
    /**
     * Called when login is successful and initiates the enrollment flow
     */
    onstateChange() {
        // hit when login is successful
        this.enrollmentStep = 0;
        this.middlewareService.getBankDetails().then((res) => {
            this.availableBanksList = res["BankDetails"];
            this.buildDropdown();
        });
    }
    /**
     * Converts the generated card into canvas element for pdf conversion
     */
    captureScreen() {
        var data = document.getElementById("card");
        html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(data, {
            height: 1080,
            width: 1920,
            x: -200,
            y: -150,
            allowTaint: false
        }).then(function (canvas) {
            const contentDataURL = canvas.toDataURL("image/png");
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__("p", "mm", "a4"); // A4 size page of PDF
            var position = 0;
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = (canvas.height * imgWidth) / canvas.width;
            var heightLeft = imgHeight;
            pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
            pdf.save("MYPdf.pdf"); // Generated PDF
        });
        setTimeout(() => {
            this.enrollmentStep = 4;
        }, 2000);
    }
    /**
     * Converts the blob into base64 string
     * @param url location of the image
     * @param callback
     */
    toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
    }
    /**
     * Initiates the logout flow
     */
    logOut() {
        this.middlewareService.logOut();
        this.router.navigate(["/enrollment"]);
    }
    /**
     * Provides option to add another user
     */
    addAnother() {
        this.customer = {};
        this.enrollmentStep = 0;
        this.cardinString = '';
    }
};
EnrollmentComponent.ctorParameters = () => [
    { type: _middleware_service__WEBPACK_IMPORTED_MODULE_2__["MiddlewareService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
EnrollmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-enrollment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enrollment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/enrollment/enrollment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enrollment.component.css */ "./src/app/enrollment/enrollment.component.css")).default]
    })
], EnrollmentComponent);



/***/ }),

/***/ "./src/app/facedetection/facedetection.component.css":
/*!***********************************************************!*\
  !*** ./src/app/facedetection/facedetection.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".face-detection-container {\n    background-color: #000000;\n    height: 100%;\n    text-align: center;\n}\n\n#face-detection-image {\n    display: block;\n    margin: auto;\n}\n\n.message-container {\n    color: white;\n    font-size: 2em;\n}\n\n#webcam {\n    margin: 0 auto;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjZWRldGVjdGlvbi9mYWNlZGV0ZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZmFjZWRldGVjdGlvbi9mYWNlZGV0ZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFjZS1kZXRlY3Rpb24tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmYWNlLWRldGVjdGlvbi1pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWVzc2FnZS1jb250YWluZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuI3dlYmNhbSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/facedetection/facedetection.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/facedetection/facedetection.component.ts ***!
  \**********************************************************/
/*! exports provided: FacedetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacedetectionComponent", function() { return FacedetectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _middleware_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware.service */ "./src/app/middleware.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let FacedetectionComponent = class FacedetectionComponent {
    constructor(middlewareService) {
        this.middlewareService = middlewareService;
        this.buttonControlEnabled = false;
        // outputs image as base64 string
        this.image = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showWebcam = true;
        this.videoOptions = {
            width: 1024,
            height: 768
        };
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
    }
    /**
      * Triggers the webcam to take a photo
     */
    triggerSnapshot() {
        this.trigger.next();
    }
    /**
      * Sends the image captured by the webcam as output
      * @param webcamImage base64 of captured image
     */
    handleImage(webcamImage) {
        this.webcamImage = webcamImage;
        this.image.emit(webcamImage.imageAsBase64);
    }
    /**
      * returns the trigger
     */
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    /**
      * Toggle webcam visibilty
     */
    hideWebcam() {
        this.showWebcam = false;
    }
    showWebcamfun() {
        this.showWebcam = true;
    }
};
FacedetectionComponent.ctorParameters = () => [
    { type: _middleware_service__WEBPACK_IMPORTED_MODULE_2__["MiddlewareService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FacedetectionComponent.prototype, "buttonControlEnabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FacedetectionComponent.prototype, "isLoading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FacedetectionComponent.prototype, "image", void 0);
FacedetectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facedetection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facedetection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facedetection/facedetection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./facedetection.component.css */ "./src/app/facedetection/facedetection.component.css")).default]
    })
], FacedetectionComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n    background-color: rgb(21, 32, 184) !important;\n    height: 100px;\n}\n\n#logo {\n    height: 70px;\n    width: 70px;\n}\n\n.navbar-light .navbar-text {\n    color: white;\n    font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkNBQTZDO0lBQzdDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDMyLCAxODQpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI2xvZ28ge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLXRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n/* STRUCTURE */\n\n.wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n}\n\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n  color: #cccccc;\n}\n\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button],\ninput[type=submit],\ninput[type=reset] {\n  background-color: rgb(25, 101, 252);\n  border: none;\n  color: white;\n  padding: 5px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 20px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover,\ninput[type=submit]:hover,\ninput[type=reset]:hover {\n  background-color: #39ace7;\n}\n\ninput[type=button]:active,\ninput[type=submit]:active,\ninput[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text],\ninput[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder {\n  color: #cccccc;\n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  -webkit-transition: width 0.2s;\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after {\n  width: 100%;\n}\n\n/* OTHERS */\n\n*:focus {\n  outline: none;\n}\n\n#icon {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBR0EsY0FBYzs7QUFFZDtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUVFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QjtBQUM5Qjs7QUFJQSxTQUFTOztBQUVUO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBSUEsbUJBQW1COztBQUVuQjs7O0VBR0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsaURBQWlEO0VBRWpELDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsd0NBQXdDO0VBSXhDLGdDQUFnQztBQUNsQzs7QUFFQTs7O0VBR0UseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFJRSw4QkFBOEI7RUFHOUIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsd0NBQXdDO0VBSXhDLGdDQUFnQztFQUVoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFJQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFZQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUNBQW1DO0VBRW5DLDJCQUEyQjs7RUFFM0IscUNBQXFDO0VBRXJDLDZCQUE2Qjs7RUFFN0IsOEJBQThCO0VBRTlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUUzQixtQkFBbUI7QUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCw4QkFBc0I7RUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBjb2xvcjogIzkyYmFkZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cblxuLyogU1RSVUNUVVJFICovXG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jZm9ybUNvbnRlbnQge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9ybUZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuXG5cbi8qIFRBQlMgKi9cblxuaDIuaW5hY3RpdmUge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuaDIuYWN0aXZlIHtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5cblxuLyogRk9STSBUWVBPR1JBUEhZKi9cblxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDEwMSwgMjUyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXG5pbnB1dFt0eXBlPXJlc2V0XTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlIHtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIEFOSU1BVElPTlMgKi9cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mYWRlSW4ge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgLW1vei1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gIGFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcblxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLmZhZGVJbi5maXJzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzBkMGQwZDtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLyogT1RIRVJTICovXG5cbio6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jaWNvbiB7XG4gIHdpZHRoOiA2MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _middleware_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware.service */ "./src/app/middleware.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");





let LoginComponent = class LoginComponent {
    constructor(middlewareService, messageService) {
        this.middlewareService = middlewareService;
        this.messageService = messageService;
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.msgs = [];
    }
    ngOnInit() { }
    /**
     * Handles the user login form on submit
     */
    submitForm() {
        this.middlewareService
            .login({ username: this.username, password: this.password })
            .subscribe((data) => {
            // update the authstatus in middlewareseervice
            if (data.Status == 1) {
                this.stateChange.emit();
                this.middlewareService.authStatus.next(_models__WEBPACK_IMPORTED_MODULE_4__["AuthState"].authenticated);
                this.messageService.add({
                    severity: "success",
                    summary: "Login Successful",
                    detail: "Logged in successfully"
                });
                return;
            }
            else if (data.Status == 2) {
                this.messageService.add({
                    severity: "error",
                    summary: "Login Failed",
                    detail: "User Does not exist"
                });
                return;
            }
            else if (data.Status == 3) {
                this.messageService.add({
                    severity: "error",
                    summary: "Login Failed",
                    detail: "Invalid Password"
                });
                return;
            }
            else {
                this.messageService.add({
                    severity: "error",
                    summary: "Login Failed",
                    detail: "Something wet wrong"
                });
                return;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _middleware_service__WEBPACK_IMPORTED_MODULE_2__["MiddlewareService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginComponent.prototype, "stateChange", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/middleware.service.ts":
/*!***************************************!*\
  !*** ./src/app/middleware.service.ts ***!
  \***************************************/
/*! exports provided: MiddlewareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareService", function() { return MiddlewareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ "./src/app/models.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let MiddlewareService = class MiddlewareService {
    constructor(http) {
        this.http = http;
        this.imageObj = {
            image: ' '
        };
        this.baseurl = '';
        this.baseurl = '';
        this.authStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](_models__WEBPACK_IMPORTED_MODULE_3__["AuthState"].loggedout);
    }
    /**
      * Dynamically sets the baseURL
      * @param baseUrl the base url in string
     */
    setBaseUrl(baseUrl) {
        this.baseurl = baseUrl;
    }
    /**
      * To authenticate the user
     */
    login(userObj) {
        return this.http.post(this.baseurl + "/auth", userObj);
    }
    /**
      * Log out the current user
     */
    logOut() {
        this.authStatus.next(_models__WEBPACK_IMPORTED_MODULE_3__["AuthState"].loggedout);
    }
    /**
      * return the current login status
     */
    getAuthStatus() {
        return this.authStatus;
    }
    /**
      * Fetches the list of available banks
     */
    getBankDetails() {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseurl + "/bank/getdetails").subscribe((res) => {
                resolve(res);
            });
        });
    }
    /**
      * Creates a new account
      * @param userDetails object containing the details of the user
     */
    createAccount(userDetails) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl + "/account/generatecustid", userDetails).subscribe(response => {
                resolve(response);
            });
        });
    }
    /**
      * Returns the number of faces in the image
      * @param base64string the base64uri of the image to check
     */
    getFaceCount(base64string) {
        let promise = new Promise((resolve, reject) => {
            this.imageObj.image = base64string;
            this.http.post(this.baseurl + "/detectface", this.imageObj).subscribe(response => {
                resolve(response);
            });
        });
        return promise;
    }
    /**
      * Checks if a face is present
      * @param base64string the base64uri of the image to check
     */
    detectFace(base64string) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl + "/faceid/detectface", { "image": base64string }).subscribe(res => {
                resolve(res);
            });
        });
    }
    /**
     * Indexes the face data to store in database
     * @param customerId the customer id
     * @param base64string the base64 string of the face image
     */
    indexFace(customerId, base64string) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl + "/faceid/indexface", { "customerID": customerId, "image": base64string }).subscribe(res => {
                resolve(res);
            });
        });
    }
    /**
     * Returns the generated qrcard as string
     * @param customerId the customer id of the current user
     */
    generateQrCode(customerId) {
        return this.http.post(this.baseurl + "/account/generateqrcard", { "customerID": customerId });
    }
    /**
     * To check account is found against the qr code
     * @param qrCode Scanned details from the qr scanner
     */
    matchQrWithAccount(qrCode) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl + "/auth/matchqr", { "qrCode": qrCode }).subscribe(res => {
                resolve(res);
            });
        });
    }
    /**
     * To fetch the account details of the customer
     * @param customerID Requires customerID
     */
    getAccountDetails(customerID) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl + "/account/getdetails", { "customerID": customerID }).subscribe(res => {
                resolve(res);
            });
        });
    }
    /**
     * Used to match the face dectected with the customer's account
     * @param customerID Used to cross check against customer id
     * @param image Base64 image string
     */
    matchFaceWithAccount(customerID, image) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl + "/faceid/matchface", { "customerID": customerID, "image": image }).subscribe(res => {
                resolve(res);
            });
        });
    }
    /**
     * Used to fetch account balance of the customer
     * @param customerID Use customerid to fetch
     */
    getAccountBalance(customerID) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl + "/account/getbalance", { "customerID": customerID }).subscribe(res => {
                resolve(res);
            });
        });
    }
    /**
     * API Call to withdraw amount from the customer's account
     * @param customerID accepts customer's id
     * @param amount Amount required for the customer
     */
    withdrawCashFromAccount(customerID, amount) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl + "/account/withdrawcash", { "customerID": customerID, "amount": amount }).subscribe(res => {
                resolve(res);
            });
        });
    }
    /**
     * Checks if the service is running
     */
    checkHealth() {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseurl + '/checkhealth').toPromise().then(active => {
                if (active === true)
                    resolve();
                else
                    reject();
            }).catch(() => {
                reject();
            });
        });
    }
};
MiddlewareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MiddlewareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MiddlewareService);



/***/ }),

/***/ "./src/app/models.ts":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: AuthState, EnrollmentStep, ATMFlow, QRMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthState", function() { return AuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentStep", function() { return EnrollmentStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATMFlow", function() { return ATMFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRMatch", function() { return QRMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AuthState;
(function (AuthState) {
    AuthState[AuthState["authenticated"] = 0] = "authenticated";
    AuthState[AuthState["invalidusername"] = 1] = "invalidusername";
    AuthState[AuthState["invalidpassword"] = 2] = "invalidpassword";
    AuthState[AuthState["loggedout"] = 3] = "loggedout";
})(AuthState || (AuthState = {}));
var EnrollmentStep;
(function (EnrollmentStep) {
    EnrollmentStep[EnrollmentStep["selectbranch"] = 0] = "selectbranch";
    EnrollmentStep[EnrollmentStep["enterdetails"] = 1] = "enterdetails";
    EnrollmentStep[EnrollmentStep["facedetection"] = 2] = "facedetection";
    EnrollmentStep[EnrollmentStep["export"] = 3] = "export";
    EnrollmentStep[EnrollmentStep["finalScreen"] = 4] = "finalScreen";
})(EnrollmentStep || (EnrollmentStep = {}));
var ATMFlow;
(function (ATMFlow) {
    ATMFlow[ATMFlow["welcome"] = 0] = "welcome";
    ATMFlow[ATMFlow["scan"] = 1] = "scan";
    ATMFlow[ATMFlow["facedetection"] = 2] = "facedetection";
    ATMFlow[ATMFlow["selectTransactionType"] = 3] = "selectTransactionType";
    ATMFlow[ATMFlow["checkBalance"] = 4] = "checkBalance";
    ATMFlow[ATMFlow["withdrawalPage"] = 5] = "withdrawalPage";
})(ATMFlow || (ATMFlow = {}));
var QRMatch;
(function (QRMatch) {
    QRMatch[QRMatch["AccountFound"] = 0] = "AccountFound";
    QRMatch[QRMatch["AccountNotFound"] = 1] = "AccountNotFound";
})(QRMatch || (QRMatch = {}));


/***/ }),

/***/ "./src/app/qrscanner/qrscanner.component.css":
/*!***************************************************!*\
  !*** ./src/app/qrscanner/qrscanner.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host zxing-scanner::ng-deep video {\n  max-height: calc(100% - 150px);\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: 0 auto;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.qr-scanner {\n  width: 500px;\n  height: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 2px solid blue;\n}\n\n.center-content {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXJzY2FubmVyL3Fyc2Nhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Fyc2Nhbm5lci9xcnNjYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHp4aW5nLXNjYW5uZXI6Om5nLWRlZXAgdmlkZW8ge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXItc2Nhbm5lciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG59XG5cbi5jZW50ZXItY29udGVudCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/qrscanner/qrscanner.component.ts":
/*!**************************************************!*\
  !*** ./src/app/qrscanner/qrscanner.component.ts ***!
  \**************************************************/
/*! exports provided: QrscannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrscannerComponent", function() { return QrscannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _middleware_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware.service */ "./src/app/middleware.service.ts");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timer.service */ "./src/app/timer.service.ts");






let QrscannerComponent = class QrscannerComponent {
    constructor(messageService, timer, middlewareService) {
        this.messageService = messageService;
        this.timer = timer;
        this.middlewareService = middlewareService;
        this.scannedDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    /**
      * Called when the qrcard is successfully scanned
      * @param $event the qrdata in string
       */
    scanSuccessHandler($event) {
        this.timer.resetTimer();
        this.middlewareService.matchQrWithAccount($event).then((res) => {
            if (res.Status === _models__WEBPACK_IMPORTED_MODULE_2__["QRMatch"].AccountNotFound) {
                this.messageService.add({ severity: 'error', summary: 'Account not found', detail: 'Please place the valid QR Card' });
                return;
            }
            else {
                this.scannedDetails.emit($event);
            }
        });
    }
};
QrscannerComponent.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _timer_service__WEBPACK_IMPORTED_MODULE_5__["TimerService"] },
    { type: _middleware_service__WEBPACK_IMPORTED_MODULE_4__["MiddlewareService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QrscannerComponent.prototype, "scannedDetails", void 0);
QrscannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qrscanner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qrscanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/qrscanner/qrscanner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qrscanner.component.css */ "./src/app/qrscanner/qrscanner.component.css")).default]
    })
], QrscannerComponent);



/***/ }),

/***/ "./src/app/timer.service.ts":
/*!**********************************!*\
  !*** ./src/app/timer.service.ts ***!
  \**********************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TimerService = class TimerService {
    constructor() {
        this.timerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Starts the timer with the given timeout
     * @param timeout the required time in microseconds
     */
    startTimer(timeout) {
        if (this.isRunning) {
            this.clearTimer();
        }
        else {
            this.isRunning = true;
            this.timeout = timeout;
            this.stopwatch = setTimeout(() => this.timerSubject.next(true), timeout);
        }
    }
    /**
     * Stops the timer
     */
    clearTimer() {
        this.isRunning = false;
        clearTimeout(this.stopwatch);
    }
    /**
     * Start the timer with given timeout or default timeout
     * @param timeout optional the time in microseconds
     */
    resetTimer(timeout = this.timeout) {
        this.clearTimer();
        this.startTimer(timeout);
    }
    /**
     * Returns the instance of the timer
     */
    getTimer() {
        return this.timerSubject;
    }
};
TimerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TimerService);



/***/ }),

/***/ "./src/app/urlselector/urlselector.component.css":
/*!*******************************************************!*\
  !*** ./src/app/urlselector/urlselector.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VybHNlbGVjdG9yL3VybHNlbGVjdG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/urlselector/urlselector.component.ts":
/*!******************************************************!*\
  !*** ./src/app/urlselector/urlselector.component.ts ***!
  \******************************************************/
/*! exports provided: UrlselectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlselectorComponent", function() { return UrlselectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _middleware_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware.service */ "./src/app/middleware.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");






let UrlselectorComponent = class UrlselectorComponent {
    constructor(formBuilder, router, middlewareService, messageService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.middlewareService = middlewareService;
        this.messageService = messageService;
        this.validUrl = true;
    }
    ngOnInit() {
        this.urlForm = this.formBuilder.group({ url: "" });
    }
    /**
     * Handles the urlselection and validates the entered url
     * @param formValue contains the value of the url form
     */
    onSubmit(formValue) {
        const pattern = /^((http:\/\/)|(www.))(?:([a-zA-Z]+)|(\d+\.\d+.\d+.\d+)):\d+$/gm;
        if (formValue.url === "" || formValue.url === null) {
            this.messageService.add({
                severity: "warn",
                summary: "Field Required",
                detail: "Please fill out the url to continue"
            });
            return;
        }
        else if (formValue.url.match(pattern)) {
            if (formValue.url.includes("5000") || formValue.url.includes("5100")) {
                this.middlewareService.setBaseUrl(formValue.url);
                this.middlewareService
                    .checkHealth()
                    .then(() => {
                    this.router.navigate(['/atm-flow']);
                    //Switch comment while Packing
                    // this.router.navigate(["/enrollment"]);
                })
                    .catch(() => {
                    console.error("Service down");
                    this.errorMsg = "Something went wrong. Please contact the admin.";
                });
            }
            else {
                this.messageService.add({
                    severity: "error",
                    summary: "Port Invalid",
                    detail: "Port is not existing in the instance"
                });
                return;
            }
        }
        else {
            this.messageService.add({
                severity: "error",
                summary: "Invalid URL",
                detail: "Please enter the valid url"
            });
            return;
        }
    }
};
UrlselectorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _middleware_service__WEBPACK_IMPORTED_MODULE_4__["MiddlewareService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
UrlselectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-urlselector",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./urlselector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/urlselector/urlselector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./urlselector.component.css */ "./src/app/urlselector/urlselector.component.css")).default]
    })
], UrlselectorComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jaddu/workspace/faceid_atm/FaceID_FingerPrint_ATM/Workspace/NextGenATM/NextGenATM.UI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map