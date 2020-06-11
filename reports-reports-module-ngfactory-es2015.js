(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module-ngfactory"],{

/***/ "./src/app/reports/reports-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/reports/reports-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component */ "./src/app/reports/reports.component.ts");


const ɵ0 = {
    breadcrumb: 'Restaurant Stats'
};
const routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_1__["ReportsComponent"],
        data: ɵ0
    }
];
class ReportsRoutingModule {
}



/***/ }),

/***/ "./src/app/reports/reports.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/reports/reports.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_ReportsComponent, View_ReportsComponent_0, View_ReportsComponent_Host_0, ReportsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ReportsComponent", function() { return RenderType_ReportsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReportsComponent_0", function() { return View_ReportsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReportsComponent_Host_0", function() { return View_ReportsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponentNgFactory", function() { return ReportsComponentNgFactory; });
/* harmony import */ var _reports_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.component.scss.shim.ngstyle */ "./src/app/reports/reports.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util.service */ "./src/app/services/util.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ReportsComponent = [_reports_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ReportsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ReportsComponent, data: {} });

function View_ReportsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["reports works!"]))], null, null); }
function View_ReportsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-reports", [], null, null, null, View_ReportsComponent_0, RenderType_ReportsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"], [_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ReportsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-reports", _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"], View_ReportsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/reports/reports.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/reports/reports.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ReportsComponent {
    constructor(util) {
        this.util = util;
        console.log(this.util.getReport());
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/reports/reports.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/reports/reports.module.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: ReportsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModuleNgFactory", function() { return ReportsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reports_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.module */ "./src/app/reports/reports.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _reports_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component.ngfactory */ "./src/app/reports/reports.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/reports/reports-routing.module.ts");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports.component */ "./src/app/reports/reports.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var ReportsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_reports_module__WEBPACK_IMPORTED_MODULE_1__["ReportsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _reports_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ReportsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _reports_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReportsRoutingModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReportsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _reports_module__WEBPACK_IMPORTED_MODULE_1__["ReportsModule"], _reports_module__WEBPACK_IMPORTED_MODULE_1__["ReportsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () { return [[{ path: "", component: _reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"], data: _reports_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ0"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
class ReportsModule {
}


/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class UtilService {
    constructor() { }
    setReport(data) {
        this.report = data;
    }
    getReport() {
        return this.report;
    }
}
UtilService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function UtilService_Factory() { return new UtilService(); }, token: UtilService, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=reports-reports-module-ngfactory-es2015.js.map