(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-class-show/admin-class-show.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-class-show/admin-class-show.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#applied{\r\n    display: inline-block;\r\n    width: 45%;\r\n    margin: 5px;\r\n}\r\n#accepted{\r\n    display: inline-block;\r\n    width: 45%;\r\n    margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY2xhc3Mtc2hvdy9hZG1pbi1jbGFzcy1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1jbGFzcy1zaG93L2FkbWluLWNsYXNzLXNob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcHBsaWVke1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbiNhY2NlcHRlZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-class-show/admin-class-show.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-class-show/admin-class-show.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <div class=\"container\">\r\n      <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n          <ul class=\"nav nav-pills card-header-pills\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/admin/policy']\">Policy</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <h1>{{class.title}}</h1>\r\n      <h3>{{class.description}}</h3>\r\n      <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\">\r\n        DELETE THIS CLASS\r\n      </button>\r\n      <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure you want to delete this class?</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              Deleting this class cannot be undone\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">CLOSE</button>\r\n              <button (click)=\"deleteClass()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">DELETE</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div id=\"applied\">\r\n        <h3>Waitlist</h3>\r\n        <table class=\"table table-striped table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Student</th>\r\n              <th scope=\"col\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let student of applied\">\r\n              <td>{{student.f_name}} {{student.l_name}}</td>\r\n              <button (click)=\"onClick(student)\" class=\"btn btn-success\">Accept</button>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div id=\"accepted\">\r\n        <h3>Enrolled</h3>\r\n        <table class=\"table table-striped table-bordered\">\r\n          <thead>\r\n            <th scope=\"scoped\">Student</th>\r\n            <th scope=\"scoped\">Action</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let student of accepted\">\r\n              <td>{{student.f_name}} {{student.l_name}}</td>\r\n              <button (click)=\"onUnenroll(student)\" class=\"btn btn-warning\">Unenroll</button>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./src/app/admin-class-show/admin-class-show.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-class-show/admin-class-show.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminClassShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClassShowComponent", function() { return AdminClassShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var AdminClassShowComponent = /** @class */ (function () {
    function AdminClassShowComponent(_httpService, _router, storage, activatedRoute) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.classID = '';
        this.class = {
            title: '',
            grade: '',
            capcity: 0,
            description: ""
        };
        this.applied = [];
        this.accepted = [];
    }
    AdminClassShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.storage.get('adminLog') != true) {
            this._router.navigate(['/admin']);
        }
        this.activatedRoute.params.subscribe(function (params) {
            _this.classID = params['id'];
            var observ = _this._httpService.getClass(_this.classID);
            observ.subscribe(function (data) {
                _this.class = data['0'];
                _this.applied = data['0'].applied;
                _this.accepted = data['0'].accepted;
            });
        });
    };
    ;
    AdminClassShowComponent.prototype.onClick = function (studentObj) {
        var _this = this;
        var observ = this._httpService.acceptStudent(studentObj, this.classID);
        observ.subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    ;
    AdminClassShowComponent.prototype.onUnenroll = function (studentObj) {
        var _this = this;
        var observ = this._httpService.unenrollStudent(studentObj, this.classID);
        observ.subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    ;
    AdminClassShowComponent.prototype.deleteClass = function () {
        var _this = this;
        var observ = this._httpService.deleteClass(this.classID);
        observ.subscribe(function (data) {
            _this._router.navigate(['/admin']);
        });
    };
    ;
    AdminClassShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-class-show',
            template: __webpack_require__(/*! ./admin-class-show.component.html */ "./src/app/admin-class-show/admin-class-show.component.html"),
            styles: [__webpack_require__(/*! ./admin-class-show.component.css */ "./src/app/admin-class-show/admin-class-show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminClassShowComponent);
    return AdminClassShowComponent;
}());



/***/ }),

/***/ "./src/app/admin-class/admin-class.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-class/admin-class.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNsYXNzL2FkbWluLWNsYXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-class/admin-class.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-class/admin-class.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <div class=\"container\">\r\n      <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n          <ul class=\"nav nav-pills card-header-pills\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/admin/policy']\">Policy</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n        <form (submit)=\"onSubmit()\">\r\n          <div class=\"row\">\r\n            <div class='col'>\r\n              <div class=\"form-group\">\r\n                <label for=\"class.title\">Class Title</label>\r\n                <input [(ngModel)]=\"class.title\" name=\"class.title\" type=\"text\" class=\"form-control\" id=\"class.title\" aria-describedby=\"class.title\" placeholder=\"Class Title\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"class.grade\">Grade</label>\r\n                <select [(ngModel)]=\"class.grade\" name=\"class.grade\" class=\"form-control\" id=\"class.grade\">\r\n                  <option value=\"1st\">1st</option>\r\n                  <option value=\"2nd\">2nd</option>\r\n                  <option value=\"3rd\">3rd</option>\r\n                  <option value=\"4th\">4th</option>\r\n                  <option value=\"5th\">5th</option>\r\n                  <option value=\"6th\">6th</option>\r\n                  <option value=\"7th\">7th</option>\r\n                  <option value=\"8th\">8th</option>\r\n                  <option value=\"9th\">9th</option>\r\n                  <option value=\"10th\">10th</option>\r\n                  <option value=\"11th\">11th</option>\r\n                  <option value=\"12th\">12th</option>              \r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class='col'>\r\n              <div class=\"form-group\">\r\n                <label for=\"student.l_name\">Capacity</label>\r\n                <input [(ngModel)]=\"class.capacity\" name=\"class.capacity\" type=\"number\" class=\"form-control\" id=\"class.capacity\" aria-describedby=\"class.capacity\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"class.description\">Class Description</label>\r\n              <input [(ngModel)]=\"class.description\" name=\"class.description\" type=\"text\" class=\"form-control\" id=\"class.description\" aria-describedby=\"class.description\" placeholder=\"Class Description\">\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"submitBtn\">Create Class</button>\r\n        </form>\r\n        <div id=\"class-list\">\r\n          <h1>Currently Available Classes</h1>\r\n          <table class=\"table\">\r\n            <thead>\r\n              <th>Class Title</th>\r\n              <th>Grade</th>\r\n              <th>Capacity</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let class of allClass\">\r\n                <td>\r\n                  <a [routerLink]=\"['/admin/class', class._id]\">{{class.title}}</a>\r\n                </td>\r\n                <td>{{class.grade}}</td>\r\n                <td>{{class.capacity}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </div>    \r\n</body>"

/***/ }),

/***/ "./src/app/admin-class/admin-class.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-class/admin-class.component.ts ***!
  \******************************************************/
/*! exports provided: AdminClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClassComponent", function() { return AdminClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var AdminClassComponent = /** @class */ (function () {
    function AdminClassComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.class = {
            title: "",
            grade: "",
            capacity: 0,
            description: ""
        };
        this.allClass = [];
    }
    AdminClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.storage.get('adminLog') != true) {
            this._router.navigate(['/admin']);
        }
        var observ = this._httpService.getAllClass();
        observ.subscribe(function (data) {
            _this.allClass = data;
        });
    };
    AdminClassComponent.prototype.onSubmit = function () {
        var _this = this;
        var observ = this._httpService.createClass(this.class);
        observ.subscribe(function (data) {
            _this.ngOnInit();
            _this.class = {
                title: "",
                grade: "",
                capacity: 0,
                description: ""
            };
        });
    };
    AdminClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-class',
            template: __webpack_require__(/*! ./admin-class.component.html */ "./src/app/admin-class/admin-class.component.html"),
            styles: [__webpack_require__(/*! ./admin-class.component.css */ "./src/app/admin-class/admin-class.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], AdminClassComponent);
    return AdminClassComponent;
}());



/***/ }),

/***/ "./src/app/admin-login/admin-login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <form (submit)=\"onSubmit()\">\r\n    <div class=\"input-group mb-3\">\r\n      <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" aria-describedby=\"button-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-secondary\" type=\"submit\" id=\"button-addon2\">Login</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>    "

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(_httpService, _router, storage, activatedRoute) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.passcheck = "1315learningedge";
        this.password = "";
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        if (this.storage.get('adminLog') == true) {
            this._router.navigate(['/admin']);
        }
    };
    AdminLoginComponent.prototype.onSubmit = function () {
        if (this.password == this.passcheck) {
            this.storage.set('adminLog', true);
            this._router.navigate(['/admin']);
        }
        else {
            this.password = "";
        }
    };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin-login/admin-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/admin-picture/admin-picture.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-picture/admin-picture.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picbox{\r\n    width: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGljdHVyZS9hZG1pbi1waWN0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGljdHVyZS9hZG1pbi1waWN0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljYm94e1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin-picture/admin-picture.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-picture/admin-picture.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card text-center\">\r\n    <div class=\"card-header\">\r\n      <ul class=\"nav nav-pills card-header-pills\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/policy']\">Policy</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <h1>Manage pictures for front page</h1>\r\n  <div>\r\n    <br>\r\n    <div class=\"custom-file\">\r\n      <input (change)=\"frontPage($event)\" type=\"file\" class=\"custom-file-input\" id=\"upfile\" name=\"upfile\">\r\n      <label class=\"custom-file-label\" for=\"upfile\">Choose file</label>\r\n    </div>\r\n    <div>\r\n      <table>\r\n        <tbody>\r\n          <tr *ngFor=\"let pic of frontPics\">\r\n            <td>\r\n              <h6>{{pic.fileName}}</h6>\r\n              <img src=\"{{pic.filePath}}\" alt=\"No Image\" class=\"picbox\">\r\n              <button (click)=\"deletePic(pic._id)\" class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <hr>\r\n  <br>\r\n  <div id=\"gallery\">\r\n    <h1>Manage pictures for gallery page</h1>\r\n    <div class=\"custom-file\">\r\n      <input (change)=\"galleryPage($event)\" type=\"file\" class=\"custom-file-input\" id=\"upfile\" name=\"upfile\">\r\n      <label class=\"custom-file-label\" for=\"upfile\">Choose file</label>\r\n    </div>\r\n    <div>\r\n      <table>\r\n        <tbody>\r\n          <tr *ngFor=\"let pic of galleryPics\">\r\n            <td>\r\n              <h6>{{pic.fileName}}</h6>\r\n              <img src=\"{{pic.filePath}}\" alt=\"No Image\" class=\"picbox\">\r\n              <button (click)=\"deletePic(pic._id)\" class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>    "

/***/ }),

/***/ "./src/app/admin-picture/admin-picture.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-picture/admin-picture.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPictureComponent", function() { return AdminPictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var AdminPictureComponent = /** @class */ (function () {
    function AdminPictureComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.frontPics = [];
        this.galleryPics = [];
    }
    AdminPictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.storage.get('adminLog') != true) {
            this._router.navigate(['/admin']);
        }
        var front = this._httpService.getFrontPics();
        front.subscribe(function (data) {
            _this.frontPics = data;
        });
        var gallery = this._httpService.getGalleryPics();
        gallery.subscribe(function (data) {
            _this.galleryPics = data;
        });
    };
    ;
    AdminPictureComponent.prototype.deletePic = function (id) {
        var _this = this;
        var observ = this._httpService.deletePic(id);
        observ.subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    AdminPictureComponent.prototype.frontPage = function (event) {
        var _this = this;
        var observ = this._httpService.uploadFrontPic(event.target.files[0]);
        observ.subscribe(function (data) {
            console.log(data);
            _this.ngOnInit();
        });
    };
    AdminPictureComponent.prototype.galleryPage = function (event) {
        var _this = this;
        var observ = this._httpService.uploadGalleryPic(event.target.files[0]);
        observ.subscribe(function (data) {
            console.log(data);
            _this.ngOnInit();
        });
    };
    AdminPictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-picture',
            template: __webpack_require__(/*! ./admin-picture.component.html */ "./src/app/admin-picture/admin-picture.component.html"),
            styles: [__webpack_require__(/*! ./admin-picture.component.css */ "./src/app/admin-picture/admin-picture.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], AdminPictureComponent);
    return AdminPictureComponent;
}());



/***/ }),

/***/ "./src/app/admin-policy/admin-policy.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-policy/admin-policy.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBvbGljeS9hZG1pbi1wb2xpY3kuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-policy/admin-policy.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-policy/admin-policy.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card text-center\">\r\n    <div class=\"card-header\">\r\n      <ul class=\"nav nav-pills card-header-pills\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/policy']\">Policy</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <form (submit)=\"onSubmit()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <input [(ngModel)]=\"policy.line1\" name=\"policy.line1\" type=\"text\" class=\"form-control\" id=\"policy.line1\" aria-describedby=\"policy.line1\" placeholder=\"Line 1\">\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"submitBtn\">Create Policy</button>\r\n  </form>\r\n  <div id=\"policyBox\">\r\n    <h6>Policy</h6>\r\n    <hr>\r\n    <div class=\"policy\" *ngFor=\"let policy of savedPolicy\">\r\n      <p>{{policy.line1}}</p>\r\n      <button (click)=\"deletePolicy(policy._id)\" class=\"btn btn-danger\">Delete</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-policy/admin-policy.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-policy/admin-policy.component.ts ***!
  \********************************************************/
/*! exports provided: AdminPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPolicyComponent", function() { return AdminPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var AdminPolicyComponent = /** @class */ (function () {
    function AdminPolicyComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.policy = {
            line1: ""
        };
    }
    AdminPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observ = this._httpService.getPolicy();
        observ.subscribe(function (data) {
            _this.savedPolicy = data;
        });
    };
    ;
    AdminPolicyComponent.prototype.onSubmit = function () {
        var observ = this._httpService.createPolicy(this.policy);
        observ.subscribe(function (data) {
        });
        this.policy = {
            line1: ""
        };
        this.ngOnInit();
    };
    ;
    AdminPolicyComponent.prototype.deletePolicy = function (policyID) {
        var observ = this._httpService.deletePolicy(policyID);
        observ.subscribe(function (data) {
        });
        this.ngOnInit();
    };
    ;
    AdminPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-policy',
            template: __webpack_require__(/*! ./admin-policy.component.html */ "./src/app/admin-policy/admin-policy.component.html"),
            styles: [__webpack_require__(/*! ./admin-policy.component.css */ "./src/app/admin-policy/admin-policy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], AdminPolicyComponent);
    return AdminPolicyComponent;
}());



/***/ }),

/***/ "./src/app/admin-student-show/admin-student-show.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin-student-show/admin-student-show.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#studentInfo{\r\n    border: 1px solid black;\r\n    padding: 5px;\r\n}\r\n.fontUp{\r\n    font-size: 1.2em;\r\n    margin-bottom: 3px;\r\n}\r\n#title{\r\n    margin-bottom: 1px;\r\n}\r\n.e_contact{\r\n    font-size: 1.2em;\r\n    margin-bottom: 3px;\r\n}\r\n#left{\r\n    display: inline-block;\r\n    width: 40%;\r\n    vertical-align: top;\r\n}\r\n#right{\r\n    display: inline-block;\r\n    width: 40%;\r\n    vertical-align: top;\r\n}\r\nspan{\r\n    font-weight: bold;\r\n}\r\ntextarea{\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tc3R1ZGVudC1zaG93L2FkbWluLXN0dWRlbnQtc2hvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1zdHVkZW50LXNob3cvYWRtaW4tc3R1ZGVudC1zaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3R1ZGVudEluZm97XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZm9udFVwe1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4jdGl0bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuLmVfY29udGFjdHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuI2xlZnR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4jcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5zcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-student-show/admin-student-show.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin-student-show/admin-student-show.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card text-center\">\r\n    <div class=\"card-header\">\r\n      <ul class=\"nav nav-pills card-header-pills\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/policy']\">Policy</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div id='studentInfo'>\r\n    <div id=\"left\">\r\n      <h2>{{student.f_name}} {{student.l_name}}</h2>\r\n      <p class=\"fontUp\"><span>School:</span> {{student.school}}</p>\r\n      <p class=\"fontUp\"><span>Grade:</span> {{student.grade}}</p>\r\n      <p class=\"fontUp\"><span>Home Address:</span> {{student.street_address}} {{student.city}} {{student.zip}}</p>\r\n      <br>\r\n      <p class=\"fontUp\"><span>Guardian:</span> {{student.guardian1_name}}</p>\r\n      <p class=\"fontUp\"><span>Contact Info:</span> {{student.guardian1_email}} // {{student.guardian1_cell}}</p>\r\n\r\n      <p class=\"fontUp\"><span>Guardian:</span> {{student.guardian2_name}}</p>\r\n      <p class=\"fontUp\"><span>Contact Info:</span> {{student.guardian2_email}} // {{student.guardian2_cell}}</p>\r\n\r\n      <h3>Emergency Contact</h3>\r\n      <p class=\"e_contact\"><span>Name:</span> {{student.e_contact1_name}}</p>\r\n      <p class=\"e_contact\"><span>Relation:</span> {{student.e_contact1_relation}}</p>\r\n      <p class=\"e_contact\"><span>Contact:</span> {{student.e_contact1_phone}}</p>\r\n      <br>\r\n      <p class=\"e_contact\" [hidden]=\"!student.e_contact2_name\"><span>Name:</span> {{student.e_contact2_name}}</p>\r\n      <p class=\"e_contact\" [hidden]=\"!student.e_contact2_relation\"><span>Relation:</span> {{student.e_contact2_relation}}</p>\r\n      <p class=\"e_contact\" [hidden]=\"!student.e_contact2_phone\"><span>Contact:</span> {{student.e_contact2_phone}}</p>\r\n\r\n      <textarea [(ngModel)]=\"student.notes\" name=\"student.notes\" cols=\"50\" rows=\"10\">{{student.notes}}</textarea>\r\n      <button (click)=\"updateNotes()\" class=\"btn btn-primary\">Update Notes</button>\r\n    </div>\r\n    <div id=\"right\">\r\n      <table class=\"table table-striped\">\r\n          <thead>\r\n            <th>Allergy Type</th>\r\n            <th>Severity</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let allergy of dballergy\">\r\n              <td>{{allergy.type}}</td>\r\n              <td>{{allergy.severity}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <form (submit)=\"onEdit()\">\r\n    <div class=\"form-row\">\r\n        <div class='col-md-3 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"f_name\">First Name</label>\r\n            <input [(ngModel)]=\"student.f_name\" name=\"student.f_name\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\" placeholder=\"John\">\r\n          </div>\r\n        </div>\r\n        <div class='col-md-3 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"l_name\">Last Name</label>\r\n            <input [(ngModel)]=\"student.l_name\" name=\"student.l_name\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\" placeholder=\"Doe\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"gradeSelect\">Grade</label>\r\n            <select [(ngModel)]=\"student.grade\" name=\"student.grade\" class=\"form-control\" id=\"gradeSelect\">\r\n              <option value=\"1st\">1st</option>\r\n              <option value=\"2nd\">2nd</option>\r\n              <option value=\"3rd\">3rd</option>\r\n              <option value=\"4th\">4th</option>\r\n              <option value=\"5th\">5th</option>\r\n              <option value=\"6th\">6th</option>\r\n              <option value=\"7th\">7th</option>\r\n              <option value=\"8th\">8th</option>\r\n              <option value=\"9th\">9th</option>\r\n              <option value=\"10th\">10th</option>\r\n              <option value=\"11th\">11th</option>\r\n              <option value=\"12th\">12th</option>              \r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-12\">\r\n          <label for=\"updateBtn\">Edit Information</label>\r\n          <button type=\"submit\" class=\"btn btn-primary form-control\" id=\"updateBtn\">Update</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-9 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"street_address\">Address</label>\r\n            <input [(ngModel)]=\"student.street_address\" name=\"student.street_address\" type=\"text\" class=\"form-control\" id=\"street_address\" aria-describedby=\"street_address\" placeholder=\"1315 Fair Oaks Ave.\">\r\n            <small *ngIf=\"errorMessages['street_address']['message'] == 'error' \" id=\"street_address\" class=\"form-text text-danger\">Invalid Street Address</small>          \r\n          </div>\r\n        </div>\r\n        <div class='col-md-3 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"student.school\">School</label>\r\n            <input [(ngModel)]=\"student.school\" name=\"student.school\" type=\"text\" class=\"form-control\" id=\"school\" aria-describedby=\"school\">\r\n            <small *ngIf=\"errorMessages['school']['message'] == 'error' \" id=\"school\" class=\"form-text text-danger\">Require School</small>            \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"city\">City</label>\r\n          <input [(ngModel)]=\"student.city\" name=\"student.city\" type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"South Pasadena\">\r\n          <small *ngIf=\"errorMessages['city']['message'] == 'error' \" id=\"city\" class=\"form-text text-danger\">Invalid City</small>          \r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n            <label for=\"zip\">Zip</label>\r\n            <input [(ngModel)]=\"student.zip\" name=\"student.zip\" type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"91030\">\r\n            <small *ngIf=\"errorMessages['zip']['message'] == 'error' \" id=\"zip\" class=\"form-text text-danger\">Invalid Zip Code</small>\r\n          </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"phone\">Home Phone</label>\r\n          <input [(ngModel)]=\"student.phone\" name=\"student.phone\" type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\" placeholder=\"626-799-2654\">\r\n          <small *ngIf=\"errorMessages['phone']['message'] == 'error' \" id=\"phone\" class=\"form-text text-danger\">Invalid Phone Number</small>            \r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian1_name\">Mother/Guardian</label>\r\n            <input [(ngModel)]=\"student.guardian1_name\" name=\"student.guardian1_name\" type=\"text\" class=\"form-control\" id=\"student.guardian1_name\" aria-describedby=\"guardian1_name\">\r\n            <small *ngIf=\"errorMessages['guardian1_name']['message'] == 'error' \" id=\"guardian1_name\" class=\"form-text text-danger\">Requires Name</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian1_email\">Email</label>\r\n            <input [(ngModel)]=\"student.guardian1_email\" name=\"student.guardian1_email\" type=\"text\" class=\"form-control\" id=\"student.guardian1_email\" aria-describedby=\"guardian1_email\">\r\n            <small *ngIf=\"errorMessages['guardian1_email']['message'] == 'error' \" id=\"guardian1_email\" class=\"form-text text-danger\">Requires Email</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian1_cell\">Cell</label>\r\n            <input [(ngModel)]=\"student.guardian1_cell\" name=\"student.guardian1_cell\" type=\"text\" class=\"form-control\" id=\"student.guardian1_cell\" aria-describedby=\"guardian1_cell\">\r\n            <small *ngIf=\"errorMessages['guardian1_cell']['message'] == 'error' \" id=\"guardian1_cell\" class=\"form-text text-danger\">Requires Email</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian2_name\">Father/Guardian</label>\r\n            <input [(ngModel)]=\"student.guardian2_name\" name=\"student.guardian2_name\" type=\"text\" class=\"form-control\" id=\"student.guardian2_name\" aria-describedby=\"guardian2_name\">\r\n            <small *ngIf=\"errorMessages['guardian2_name']['message'] == 'error' \" id=\"guardian2_name\" class=\"form-text text-danger\">Requires Name</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian2_email\">Email</label>\r\n            <input [(ngModel)]=\"student.guardian2_email\" name=\"student.guardian2_email\" type=\"text\" class=\"form-control\" id=\"student.guardian2_email\" aria-describedby=\"guardian2_email\">\r\n            <small *ngIf=\"errorMessages['guardian2_email']['message'] == 'error' \" id=\"guardian2_email\" class=\"form-text text-danger\">Requires Email</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian2_cell\">Cell</label>\r\n            <input [(ngModel)]=\"student.guardian2_cell\" name=\"student.guardian2_cell\" type=\"text\" class=\"form-control\" id=\"student.guardian2_cell\" aria-describedby=\"guardian2_cell\">\r\n            <small *ngIf=\"errorMessages['guardian2_cell']['message'] == 'error' \" id=\"guardian2_cell\" class=\"form-text text-danger\">Requires Email</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact1_name\">Emergency Contact(Required)</label>\r\n            <input [(ngModel)]=\"student.e_contact1_name\" name=\"student.e_contact1_name\" type=\"text\" class=\"form-control\" id=\"e_contact1_name\" aria-describedby=\"e_contact1_name\">\r\n            <small *ngIf=\"errorMessages['e_contact1_name']['message'] == 'error' \" id=\"e_contact1_name\" class=\"form-text text-danger\">Requires Name</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact1_relation\">Relation</label>\r\n            <input [(ngModel)]=\"student.e_contact1_relation\" name=\"student.e_contact1_relation\" type=\"text\" class=\"form-control\" id=\"e_contact1_relation\" aria-describedby=\"e_contact1_relation\">\r\n            <small *ngIf=\"errorMessages['e_contact1_relation']['message'] == 'error' \" id=\"e_contact1_relation\" class=\"form-text text-danger\">Requires Relation</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact1_phone\">Phone</label>\r\n            <input [(ngModel)]=\"student.e_contact1_phone\" name=\"student.e_contact1_phone\" type=\"text\" class=\"form-control\" id=\"e_contact1_phone\" aria-describedby=\"e_contact1_phone\">\r\n            <small *ngIf=\"errorMessages['e_contact1_phone']['message'] == 'error' \" id=\"e_contact1_phone\" class=\"form-text text-danger\">Requires Phone</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact2_name\">Emergency Contact(Optional)</label>\r\n            <input [(ngModel)]=\"student.e_contact2_name\" name=\"student.e_contact2_name\" type=\"text\" class=\"form-control\" id=\"e_contact2_name\" aria-describedby=\"e_contact2_name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact2_relation\">Relation</label>\r\n            <input [(ngModel)]=\"student.e_contact2_relation\" name=\"student.e_contact2_relation\" type=\"text\" class=\"form-control\" id=\"e_contact2_relation\" aria-describedby=\"e_contact2_relation\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact2_phone\">Phone</label>\r\n            <input [(ngModel)]=\"student.e_contact2_phone\" name=\"student.e_contact2_phone\" type=\"text\" class=\"form-control\" id=\"e_contact2_phone\" aria-describedby=\"e_contact2_phone\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n</div>    "

/***/ }),

/***/ "./src/app/admin-student-show/admin-student-show.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin-student-show/admin-student-show.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminStudentShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentShowComponent", function() { return AdminStudentShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var AdminStudentShowComponent = /** @class */ (function () {
    function AdminStudentShowComponent(_httpService, _router, storage, activatedRoute) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.student = {
            _id: "",
            f_name: "",
            l_name: "",
            grade: "",
            parent_id: "",
            street_address: "",
            city: "",
            zip: "",
            phone: "",
            guardian1_name: "",
            guardian1_email: "",
            guardian1_cell: "",
            guardian2_name: "",
            guardian2_email: "",
            guardian2_cell: "",
            e_contact1_name: "",
            e_contact1_relation: "",
            e_contact1_phone: "",
            e_contact2_name: "",
            e_contact2_relation: "",
            e_contact2_phone: "",
            school: "",
            notes: ""
        };
        this.errorMessages = {
            f_name: { message: "" },
            l_name: { message: "" },
            grade: { message: "" },
            street_address: { message: "" },
            city: { message: "" },
            zip: { message: "" },
            phone: { message: "" },
            guardian1_name: { message: "" },
            guardian1_email: { message: "" },
            guardian1_cell: { message: "" },
            guardian2_name: { message: "" },
            guardian2_email: { message: "" },
            guardian2_cell: { message: "" },
            e_contact1_name: { message: "" },
            e_contact1_relation: { message: "" },
            e_contact1_phone: { message: "" },
            school: { message: "" },
        };
        this.allergy = {
            type: "",
            severity: ""
        };
        this.dballergy = [];
    }
    AdminStudentShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.storage.get('adminLog') != true) {
            this._router.navigate(['/admin']);
        }
        this.activatedRoute.params.subscribe(function (params) {
            _this.studentID = params['id'];
            var observ = _this._httpService.getStudentOnly(_this.studentID);
            observ.subscribe(function (data) {
                _this.student = data[0];
                _this.dballergy = data[0].allergies;
            });
        });
    };
    ;
    AdminStudentShowComponent.prototype.onEdit = function () {
        var _this = this;
        var observ = this._httpService.updateStudent(this.storage.get('uid'), this.student);
        observ.subscribe(function (data) {
            console.log("onEdit returned: ", data);
            if (data.errors) {
                if (data.errors['f_name']) {
                    _this.errorMessages['f_name']['message'] = "error";
                }
                if (data.errors['l_name']) {
                    _this.errorMessages['l_name']['message'] = "error";
                }
                if (data.errors['grade']) {
                    _this.errorMessages['grade']['message'] = "error";
                }
                if (data.errors['street_address']) {
                    _this.errorMessages['street_address']['message'] = "error";
                }
                if (data.errors['city']) {
                    _this.errorMessages['city']['message'] = "error";
                }
                if (data.errors['zip']) {
                    _this.errorMessages['zip']['message'] = "error";
                }
                if (data.errors['phone']) {
                    _this.errorMessages['phone']['message'] = "error";
                }
                if (data.errors['guardian1_name']) {
                    _this.errorMessages['guardian1_name']['message'] = "error";
                }
                if (data.errors['guardian1_email']) {
                    _this.errorMessages['guardian1_email']['message'] = "error";
                }
                if (data.errors['guardian1_cell']) {
                    _this.errorMessages['guardian1_cell']['message'] = "error";
                }
                if (data.errors['guardian2_name']) {
                    _this.errorMessages['guardian2_name']['message'] = "error";
                }
                if (data.errors['guardian2_email']) {
                    _this.errorMessages['guardian2_email']['message'] = "error";
                }
                if (data.errors['guardian2_cell']) {
                    _this.errorMessages['guardian2_cell']['message'] = "error";
                }
                if (data.errors['e_contact1_name']) {
                    _this.errorMessages['e_contact1_name']['message'] = "error";
                }
                if (data.errors['e_contact1_relation']) {
                    _this.errorMessages['e_contact1_relation']['message'] = "error";
                }
                if (data.errors['e_contact1_phone']) {
                    _this.errorMessages['e_contact1_phone']['message'] = "error";
                }
                if (data.errors['school']) {
                    _this.errorMessages['school']['message'] = "error";
                }
            }
        });
    };
    ;
    AdminStudentShowComponent.prototype.updateNotes = function () {
        var observ = this._httpService.updateStudentOnly(this.student._id, this.student);
        observ.subscribe(function (data) {
        });
    };
    AdminStudentShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-student-show',
            template: __webpack_require__(/*! ./admin-student-show.component.html */ "./src/app/admin-student-show/admin-student-show.component.html"),
            styles: [__webpack_require__(/*! ./admin-student-show.component.css */ "./src/app/admin-student-show/admin-student-show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminStudentShowComponent);
    return AdminStudentShowComponent;
}());



/***/ }),

/***/ "./src/app/admin-students/admin-students.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-students/admin-students.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#studcard{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tc3R1ZGVudHMvYWRtaW4tc3R1ZGVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXN0dWRlbnRzL2FkbWluLXN0dWRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3R1ZGNhcmR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-students/admin-students.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-students/admin-students.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card text-center\">\r\n    <div class=\"card-header\">\r\n      <ul class=\"nav nav-pills card-header-pills\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/policy']\">Policy</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form (submit)=\"searchFirst()\">\r\n        <div class='row'>\r\n          <div class='col'>\r\n            <div class=\"form-group\">\r\n              <label for=\"f_name\">First Name</label>\r\n              <input [(ngModel)]=\"f_name_txt\" name=\"f_name_txt\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\" placeholder=\"John\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" id=\"submitBtn\">Search by First Name</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col\">\r\n      <form (submit)=\"searchLast()\">\r\n        <div class=\"row\">\r\n          <div class='col'>\r\n            <div class=\"form-group\">\r\n              <label for=\"l_name\">Last Name</label>\r\n              <input [(ngModel)]=\"l_name_txt\" name=\"l_name_txt\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\" placeholder=\"Doe\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" id=\"submitBtn\">Search by Last Name</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"studentList\">\r\n    <h3>List of Students</h3>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <th>Name</th>\r\n        <th>Grade</th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of student_list\">\r\n          <th>\r\n            <a [routerLink]=\"['/admin/students', student._id]\">{{student.f_name}} {{student.l_name}}</a>\r\n          </th>\r\n          <th>{{student.grade}}</th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>    "

/***/ }),

/***/ "./src/app/admin-students/admin-students.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-students/admin-students.component.ts ***!
  \************************************************************/
/*! exports provided: AdminStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentsComponent", function() { return AdminStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var AdminStudentsComponent = /** @class */ (function () {
    function AdminStudentsComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.f_name_txt = "";
        this.l_name_txt = "";
        this.student_list = [];
    }
    AdminStudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.storage.get('adminLog') != true) {
            this._router.navigate(['/admin']);
        }
        var observ = this._httpService.getAllStudents();
        observ.subscribe(function (data) {
            _this.student_list = data;
        });
    };
    AdminStudentsComponent.prototype.searchFirst = function () {
        var _this = this;
        var observ = this._httpService.findStudentByFirstName(this.f_name_txt);
        observ.subscribe(function (data) {
            _this.student_list = data;
        });
    };
    AdminStudentsComponent.prototype.searchLast = function () {
        var _this = this;
        var observ = this._httpService.findStudentByLastName(this.l_name_txt);
        observ.subscribe(function (data) {
            _this.student_list = data;
        });
    };
    AdminStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-students',
            template: __webpack_require__(/*! ./admin-students.component.html */ "./src/app/admin-students/admin-students.component.html"),
            styles: [__webpack_require__(/*! ./admin-students.component.css */ "./src/app/admin-students/admin-students.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], AdminStudentsComponent);
    return AdminStudentsComponent;
}());



/***/ }),

/***/ "./src/app/admin-tuition/admin-tuition.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-tuition/admin-tuition.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tuition-box{\r\n    border: 1px black solid;\r\n    padding: 10px;\r\n}\r\n.tuit-box{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin: 5px;\r\n}\r\n#tuition-heading{\r\n    margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tdHVpdGlvbi9hZG1pbi10dWl0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXR1aXRpb24vYWRtaW4tdHVpdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3R1aXRpb24tYm94e1xyXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi50dWl0LWJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4jdHVpdGlvbi1oZWFkaW5ne1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-tuition/admin-tuition.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-tuition/admin-tuition.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card text-center\">\r\n    <div class=\"card-header\">\r\n      <ul class=\"nav nav-pills card-header-pills\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin/policy']\">Policy</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <form (submit)=\"onSubmit()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <label for=\"tuition.session\">Session Type</label>\r\n        <input [(ngModel)]=\"tuition.session\" name=\"tuition.session\" type=\"text\" class=\"form-control\" id=\"tuition.session\" aria-describedby=\"tuition.session\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label for=\"tuition.year\">Year</label>\r\n        <input [(ngModel)]=\"tuition.year\" name=\"tuition.year\" type=\"text\" class=\"form-control\" id=\"tuition.year\" aria-describedby=\"tuition.year\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line1\" name=\"tuition.line1\" type=\"text\" class=\"form-control\" id=\"tuition.line1\" aria-describedby=\"tuition.line1\" placeholder=\"Line 1\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line2\" name=\"tuition.line2\" type=\"text\" class=\"form-control\" id=\"tuition.line2\" aria-describedby=\"tuition.line2\" placeholder=\"Line 2\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line3\" name=\"tuition.line3\" type=\"text\" class=\"form-control\" id=\"tuition.line3\" aria-describedby=\"tuition.line3\" placeholder=\"Line 3\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line4\" name=\"tuition.line4\" type=\"text\" class=\"form-control\" id=\"tuition.line4\" aria-describedby=\"tuition.line4\" placeholder=\"Line 4\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line5\" name=\"tuition.line5\" type=\"text\" class=\"form-control\" id=\"tuition.line5\" aria-describedby=\"tuition.line5\" placeholder=\"Line 5\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line6\" name=\"tuition.line6\" type=\"text\" class=\"form-control\" id=\"tuition.line6\" aria-describedby=\"tuition.line6\" placeholder=\"Line 6\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line7\" name=\"tuition.line7\" type=\"text\" class=\"form-control\" id=\"tuition.line7\" aria-describedby=\"tuition.line7\" placeholder=\"Line 7\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line8\" name=\"tuition.line8\" type=\"text\" class=\"form-control\" id=\"tuition.line8\" aria-describedby=\"tuition.line8\" placeholder=\"Line 8\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line9\" name=\"tuition.line9\" type=\"text\" class=\"form-control\" id=\"tuition.line9\" aria-describedby=\"tuition.line9\" placeholder=\"Line 9\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line10\" name=\"tuition.line10\" type=\"text\" class=\"form-control\" id=\"tuition.line10\" aria-describedby=\"tuition.line10\" placeholder=\"Line 10\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line11\" name=\"tuition.line11\" type=\"text\" class=\"form-control\" id=\"tuition.line11\" aria-describedby=\"tuition.line11\" placeholder=\"Line 11\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line12\" name=\"tuition.line12\" type=\"text\" class=\"form-control\" id=\"tuition.line12\" aria-describedby=\"tuition.line12\" placeholder=\"Line 12\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line13\" name=\"tuition.line13\" type=\"text\" class=\"form-control\" id=\"tuition.line13\" aria-describedby=\"tuition.line13\" placeholder=\"Line 13\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line14\" name=\"tuition.line14\" type=\"text\" class=\"form-control\" id=\"tuition.line14\" aria-describedby=\"tuition.line14\" placeholder=\"Line 14\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line15\" name=\"tuition.line15\" type=\"text\" class=\"form-control\" id=\"tuition.line15\" aria-describedby=\"tuition.line15\" placeholder=\"Line 15\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line16\" name=\"tuition.line16\" type=\"text\" class=\"form-control\" id=\"tuition.line16\" aria-describedby=\"tuition.line16\" placeholder=\"Line 16\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line17\" name=\"tuition.line17\" type=\"text\" class=\"form-control\" id=\"tuition.line17\" aria-describedby=\"tuition.line17\" placeholder=\"Line 17\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line18\" name=\"tuition.line18\" type=\"text\" class=\"form-control\" id=\"tuition.line18\" aria-describedby=\"tuition.line18\" placeholder=\"Line 18\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line19\" name=\"tuition.line19\" type=\"text\" class=\"form-control\" id=\"tuition.line19\" aria-describedby=\"tuition.line19\" placeholder=\"Line 19\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line20\" name=\"tuition.line20\" type=\"text\" class=\"form-control\" id=\"tuition.line20\" aria-describedby=\"tuition.line20\" placeholder=\"Line 20\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line21\" name=\"tuition.line21\" type=\"text\" class=\"form-control\" id=\"tuition.line21\" aria-describedby=\"tuition.line21\" placeholder=\"Line 21\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line22\" name=\"tuition.line22\" type=\"text\" class=\"form-control\" id=\"tuition.line22\" aria-describedby=\"tuition.line22\" placeholder=\"Line 22\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line23\" name=\"tuition.line23\" type=\"text\" class=\"form-control\" id=\"tuition.line23\" aria-describedby=\"tuition.line23\" placeholder=\"Line 23\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line24\" name=\"tuition.line24\" type=\"text\" class=\"form-control\" id=\"tuition.line24\" aria-describedby=\"tuition.line24\" placeholder=\"Line 24\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line25\" name=\"tuition.line25\" type=\"text\" class=\"form-control\" id=\"tuition.line25\" aria-describedby=\"tuition.line25\" placeholder=\"Line 25\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line26\" name=\"tuition.line26\" type=\"text\" class=\"form-control\" id=\"tuition.line26\" aria-describedby=\"tuition.line26\" placeholder=\"Line 26\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line27\" name=\"tuition.line27\" type=\"text\" class=\"form-control\" id=\"tuition.line27\" aria-describedby=\"tuition.line27\" placeholder=\"Line 27\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line28\" name=\"tuition.line28\" type=\"text\" class=\"form-control\" id=\"tuition.line28\" aria-describedby=\"tuition.line28\" placeholder=\"Line 28\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line29\" name=\"tuition.line29\" type=\"text\" class=\"form-control\" id=\"tuition.line29\" aria-describedby=\"tuition.line29\" placeholder=\"Line 29\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <input [(ngModel)]=\"tuition.line30\" name=\"tuition.line30\" type=\"text\" class=\"form-control\" id=\"tuition.line30\" aria-describedby=\"tuition.line30\" placeholder=\"Line 30\">\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"submitBtn\">Create Tuition</button>\r\n  </form>\r\n  <div id=\"tuition-box\">\r\n    <h6 id=\"tuition-heading\">Current Showing for Tuition</h6>\r\n    <hr>\r\n    <div class=\"tuit-box\" *ngFor=\"let tuit of allTuition\">\r\n      <p>{{tuit.session}}</p>\r\n      <p>{{tuit.year}}</p>\r\n      <p>{{tuit.line1}}</p>\r\n      <p>{{tuit.line2}}</p>\r\n      <p>{{tuit.line3}}</p>\r\n      <p>{{tuit.line4}}</p>\r\n      <p>{{tuit.line5}}</p>\r\n      <p>{{tuit.line6}}</p>\r\n      <p>{{tuit.line7}}</p>\r\n      <p>{{tuit.line8}}</p>\r\n      <p>{{tuit.line9}}</p>\r\n      <p>{{tuit.line10}}</p>\r\n      <p>{{tuit.line11}}</p>\r\n      <p>{{tuit.line12}}</p>\r\n      <p>{{tuit.line13}}</p>\r\n      <p>{{tuit.line14}}</p>\r\n      <p>{{tuit.line15}}</p>\r\n      <p>{{tuit.line16}}</p>\r\n      <p>{{tuit.line17}}</p>\r\n      <p>{{tuit.line18}}</p>\r\n      <p>{{tuit.line19}}</p>\r\n      <p>{{tuit.line20}}</p>\r\n      <p>{{tuit.line21}}</p>\r\n      <p>{{tuit.line22}}</p>\r\n      <p>{{tuit.line23}}</p>\r\n      <p>{{tuit.line24}}</p>\r\n      <p>{{tuit.line25}}</p>\r\n      <p>{{tuit.line26}}</p>\r\n      <p>{{tuit.line27}}</p>\r\n      <p>{{tuit.line28}}</p>\r\n      <p>{{tuit.line29}}</p>\r\n      <p>{{tuit.line30}}</p>\r\n      <button (click)=\"deleteTuit(tuit._id)\" class=\"btn btn-danger\">Delete</button>\r\n    </div>\r\n  </div>\r\n</div>    "

/***/ }),

/***/ "./src/app/admin-tuition/admin-tuition.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-tuition/admin-tuition.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminTuitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTuitionComponent", function() { return AdminTuitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var AdminTuitionComponent = /** @class */ (function () {
    function AdminTuitionComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.tuition = {
            session: "",
            year: "",
            line1: "",
            line2: "",
            line3: "",
            line4: "",
            line5: "",
            line6: "",
            line7: "",
            line8: "",
            line9: "",
            line10: "",
            line11: "",
            line12: "",
            line13: "",
            line14: "",
            line15: "",
            line16: "",
            line17: "",
            line18: "",
            line19: "",
            line20: "",
            line21: "",
            line22: "",
            line23: "",
            line24: "",
            line25: "",
            line26: "",
            line27: "",
            line28: "",
            line29: "",
            line30: ""
        };
        this.allTuition = [];
    }
    AdminTuitionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.storage.get('adminLog') != true) {
            this._router.navigate(['/admin']);
        }
        var observ = this._httpService.getAllTuition();
        observ.subscribe(function (data) {
            _this.allTuition = data;
        });
        this.tuition = {
            session: "",
            year: "",
            line1: "",
            line2: "",
            line3: "",
            line4: "",
            line5: "",
            line6: "",
            line7: "",
            line8: "",
            line9: "",
            line10: "",
            line11: "",
            line12: "",
            line13: "",
            line14: "",
            line15: "",
            line16: "",
            line17: "",
            line18: "",
            line19: "",
            line20: "",
            line21: "",
            line22: "",
            line23: "",
            line24: "",
            line25: "",
            line26: "",
            line27: "",
            line28: "",
            line29: "",
            line30: ""
        };
    };
    AdminTuitionComponent.prototype.onSubmit = function () {
        var _this = this;
        var observ = this._httpService.createTuition(this.tuition);
        observ.subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    AdminTuitionComponent.prototype.deleteTuit = function (id) {
        var _this = this;
        var observ = this._httpService.deleteTuit(id);
        observ.subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    AdminTuitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-tuition',
            template: __webpack_require__(/*! ./admin-tuition.component.html */ "./src/app/admin-tuition/admin-tuition.component.html"),
            styles: [__webpack_require__(/*! ./admin-tuition.component.css */ "./src/app/admin-tuition/admin-tuition.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], AdminTuitionComponent);
    return AdminTuitionComponent;
}());



/***/ }),

/***/ "./src/app/admin-under-construction/admin-under-construction.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-under-construction/admin-under-construction.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tdW5kZXItY29uc3RydWN0aW9uL2FkbWluLXVuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi11bmRlci1jb25zdHJ1Y3Rpb24vYWRtaW4tdW5kZXItY29uc3RydWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-under-construction/admin-under-construction.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-under-construction/admin-under-construction.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>We are under construction at the moment</h2>\n  <h2>You can contact us through the information below</h2>\n</div>"

/***/ }),

/***/ "./src/app/admin-under-construction/admin-under-construction.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin-under-construction/admin-under-construction.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminUnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUnderConstructionComponent", function() { return AdminUnderConstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminUnderConstructionComponent = /** @class */ (function () {
    function AdminUnderConstructionComponent() {
    }
    AdminUnderConstructionComponent.prototype.ngOnInit = function () {
    };
    AdminUnderConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-under-construction',
            template: __webpack_require__(/*! ./admin-under-construction.component.html */ "./src/app/admin-under-construction/admin-under-construction.component.html"),
            styles: [__webpack_require__(/*! ./admin-under-construction.component.css */ "./src/app/admin-under-construction/admin-under-construction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminUnderConstructionComponent);
    return AdminUnderConstructionComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_class_user_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-class/user-class.component */ "./src/app/user-class/user-class.component.ts");
/* harmony import */ var _user_show_class_user_show_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-show-class/user-show-class.component */ "./src/app/user-show-class/user-show-class.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-register/user-register.component.ts");
/* harmony import */ var _user_tuition_user_tuition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-tuition/user-tuition.component */ "./src/app/user-tuition/user-tuition.component.ts");
/* harmony import */ var _user_schedule_user_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-schedule/user-schedule.component */ "./src/app/user-schedule/user-schedule.component.ts");
/* harmony import */ var _admin_class_admin_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-class/admin-class.component */ "./src/app/admin-class/admin-class.component.ts");
/* harmony import */ var _admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-students/admin-students.component */ "./src/app/admin-students/admin-students.component.ts");
/* harmony import */ var _user_students_user_students_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-students/user-students.component */ "./src/app/user-students/user-students.component.ts");
/* harmony import */ var _userstudentshow_userstudentshow_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userstudentshow/userstudentshow.component */ "./src/app/userstudentshow/userstudentshow.component.ts");
/* harmony import */ var _admin_class_show_admin_class_show_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-class-show/admin-class-show.component */ "./src/app/admin-class-show/admin-class-show.component.ts");
/* harmony import */ var _admin_picture_admin_picture_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-picture/admin-picture.component */ "./src/app/admin-picture/admin-picture.component.ts");
/* harmony import */ var _admin_tuition_admin_tuition_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-tuition/admin-tuition.component */ "./src/app/admin-tuition/admin-tuition.component.ts");
/* harmony import */ var _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-gallery/user-gallery.component */ "./src/app/user-gallery/user-gallery.component.ts");
/* harmony import */ var _admin_student_show_admin_student_show_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-student-show/admin-student-show.component */ "./src/app/admin-student-show/admin-student-show.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_policy_admin_policy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-policy/admin-policy.component */ "./src/app/admin-policy/admin-policy.component.ts");
/* harmony import */ var _user_aboutus_user_aboutus_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-aboutus/user-aboutus.component */ "./src/app/user-aboutus/user-aboutus.component.ts");
/* harmony import */ var _user_contactus_user_contactus_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-contactus/user-contactus.component */ "./src/app/user-contactus/user-contactus.component.ts");
/* harmony import */ var _user_elementary_user_elementary_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-elementary/user-elementary.component */ "./src/app/user-elementary/user-elementary.component.ts");
/* harmony import */ var _user_middleschool_user_middleschool_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-middleschool/user-middleschool.component */ "./src/app/user-middleschool/user-middleschool.component.ts");
/* harmony import */ var _user_highschool_user_highschool_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-highschool/user-highschool.component */ "./src/app/user-highschool/user-highschool.component.ts");
/* harmony import */ var _admin_under_construction_admin_under_construction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-under-construction/admin-under-construction.component */ "./src/app/admin-under-construction/admin-under-construction.component.ts");

























var routes = [
    // ROUTES FOR USERS //
    // {path: '', component: HomeComponent},
    { path: '', component: _admin_under_construction_admin_under_construction_component__WEBPACK_IMPORTED_MODULE_24__["AdminUnderConstructionComponent"] },
    { path: 'class', component: _user_class_user_class_component__WEBPACK_IMPORTED_MODULE_3__["UserClassComponent"] },
    { path: 'class/example', component: _user_show_class_user_show_class_component__WEBPACK_IMPORTED_MODULE_4__["UserShowClassComponent"] },
    { path: 'registration', component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_5__["UserRegisterComponent"] },
    { path: 'tuition', component: _user_tuition_user_tuition_component__WEBPACK_IMPORTED_MODULE_6__["UserTuitionComponent"] },
    { path: 'schedule', component: _user_schedule_user_schedule_component__WEBPACK_IMPORTED_MODULE_7__["UserScheduleComponent"] },
    { path: 'students', component: _user_students_user_students_component__WEBPACK_IMPORTED_MODULE_10__["UserStudentsComponent"] },
    { path: 'students/:id', component: _userstudentshow_userstudentshow_component__WEBPACK_IMPORTED_MODULE_11__["UserstudentshowComponent"] },
    { path: 'gallery', component: _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_15__["UserGalleryComponent"] },
    { path: 'aboutus', component: _user_aboutus_user_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["UserAboutusComponent"] },
    { path: 'contactus', component: _user_contactus_user_contactus_component__WEBPACK_IMPORTED_MODULE_20__["UserContactusComponent"] },
    { path: 'elementaryclasses', component: _user_elementary_user_elementary_component__WEBPACK_IMPORTED_MODULE_21__["UserElementaryComponent"] },
    { path: 'middleschoolclasses', component: _user_middleschool_user_middleschool_component__WEBPACK_IMPORTED_MODULE_22__["UserMiddleschoolComponent"] },
    { path: 'highschoolclasses', component: _user_highschool_user_highschool_component__WEBPACK_IMPORTED_MODULE_23__["UserHighschoolComponent"] },
    // ROUTES FOR USERS //
    // ROUTES FOR ADMIN //
    { path: 'login', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_17__["AdminLoginComponent"] },
    { path: 'admin', component: _admin_class_admin_class_component__WEBPACK_IMPORTED_MODULE_8__["AdminClassComponent"] },
    { path: 'admin/class/:id', component: _admin_class_show_admin_class_show_component__WEBPACK_IMPORTED_MODULE_12__["AdminClassShowComponent"] },
    { path: 'admin/students', component: _admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_9__["AdminStudentsComponent"] },
    { path: 'admin/students/:id', component: _admin_student_show_admin_student_show_component__WEBPACK_IMPORTED_MODULE_16__["AdminStudentShowComponent"] },
    { path: 'admin/pictures', component: _admin_picture_admin_picture_component__WEBPACK_IMPORTED_MODULE_13__["AdminPictureComponent"] },
    { path: 'admin/tuition', component: _admin_tuition_admin_tuition_component__WEBPACK_IMPORTED_MODULE_14__["AdminTuitionComponent"] },
    { path: 'admin/policy', component: _admin_policy_admin_policy_component__WEBPACK_IMPORTED_MODULE_18__["AdminPolicyComponent"] }
    // ROUTES FOR ADMIN //
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact{\r\n    -webkit-text-emphasis: bold;\r\n            text-emphasis: bold;\r\n    color: white;\r\n    padding-left: 15rem;\r\n}\r\n#link{\r\n    color: white;\r\n    float: right;\r\n    font-size: 1.2rem;\r\n}\r\n.btn-primary-outline{\r\n    background-color: transparent;\r\n    outline:none;\r\n}\r\n#footer{\r\n    padding: 5px;\r\n    background-color: #758df0;\r\n}\r\n#footer-text{\r\n    color: white;\r\n    display: inline-block;\r\n}\r\n#navbar{\r\n    background-color: #758df0;\r\n}\r\n#dropdownMenuButton{\r\n    outline-color: #0570C0;\r\n    background-color: #0570C0;\r\n    font-size: 1.2rem;\r\n}\r\n#logo{\r\n    height: 100px;\r\n}\r\nul{\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n#footerAddress{\r\n    display: inline-block;\r\n    text-align: left;\r\n    padding: 5px;\r\n    color: white;\r\n}\r\n#footerNav{\r\n    text-align: right;\r\n}\r\n.footerAddress-row{\r\n    color: white;\r\n    display: block;\r\n}\r\nul > li >a{\r\n    color: white;\r\n}\r\n#footerAddressLink{\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0NBQ2Q7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0e1xyXG4gICAgdGV4dC1lbXBoYXNpczogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVyZW07XHJcbn1cclxuI2xpbmt7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4uYnRuLXByaW1hcnktb3V0bGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcbiNmb290ZXJ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU4ZGYwO1xyXG59XHJcbiNmb290ZXItdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4jbmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1OGRmMDtcclxufVxyXG4jZHJvcGRvd25NZW51QnV0dG9ue1xyXG4gICAgb3V0bGluZS1jb2xvcjogIzA1NzBDMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTcwQzA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4jbG9nb3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxudWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbiNmb290ZXJBZGRyZXNze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jZm9vdGVyTmF2e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmZvb3RlckFkZHJlc3Mtcm93e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudWwgPiBsaSA+YXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jZm9vdGVyQWRkcmVzc0xpbmt7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <title>LEARNING EDGE CENTER</title>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"home.component.css\">\r\n</head>\r\n<body>\r\n  <!-- <div class=\"container\">\r\n    <nav class=\"navbar navbar-expand-lg navbar navbar-light\" id=\"navbar\">\r\n        <div class=\"d-flex flex-grow-1\">\r\n            <span class=\"w-100 d-lg-none d-block\"></span>\r\n            <img class=\"navbar-brand\" id=\"logo\" src=\"assets/img/le_logo_circle.png\" alt=\"\">\r\n            <div class=\"w-100 text-right\">\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar7\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar7\">\r\n            <ul class=\"navbar-nav ml-auto flex-nowrap\">\r\n                <li class=\"nav-item ml-4\">\r\n                    <a class=\"nav-link\" id=\"link\" [routerLink]=\"['']\">Home</a>\r\n                </li>\r\n                <li class=\"nav-item ml-4\">\r\n                    <a class=\"nav-link \" id=\"link\" [routerLink]=\"['/schedule']\">Calendar</a>\r\n                </li>\r\n                <li class=\"nav-item ml-4\">  \r\n                    <a class=\"nav-link\" id=\"link\" [routerLink]=\"['/aboutus']\">About Us</a>\r\n                </li>\r\n                <li class=\"nav-item ml-4\">  \r\n                    <a class=\"nav-link\" id=\"link\" [routerLink]=\"['/contactus']\">Contact</a>\r\n                </li>\r\n                <li class=\"nav-item ml-4\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-secondary dropdown-toggle btn-primary-outline border border-white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            Classes\r\n                        </button>\r\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                            <a class=\"dropdown-item\" [routerLink]=\"['/elementaryclasses']\">Elementary</a>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"['/middleschoolclasses']\">Middle School</a>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"['/highschoolclasses']\">High School</a>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n  </div> -->\r\n  <router-outlet></router-outlet>\r\n    <div class=\"container\">\r\n        <hr>\r\n        <footer class=\"footer\">\r\n            <div id=\"footer\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-9\">\r\n                        <div id=\"footerAddress\">\r\n                            <span class=\"footerAddress-row\">1315 Fair Oaks Blvd #101</span>\r\n                            <span class=\"footerAddress-row\">South Pasadena, CA  91030</span>\r\n                            <span class=\"footerAddress-row\">(626)799-2654</span>\r\n                            <span class=\"footerAddress-row\">learningedgecenter@gmail.com</span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-3\">\r\n                        <div id=\"footerNav\">\r\n                            <ul>\r\n                                <li>\r\n                                    <a [routerLink]=\"['']\">Home</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a [routerLink]=\"['/schedule']\">Schedule</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a [routerLink]=\"['/aboutus']\">About</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a [routerLink]=\"['/contactus']\">Contact</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a [routerLink]=\"['/login']\">Admin</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</body>\r\n</html>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(_http, _router, titleService) {
        this._http = _http;
        this._router = _router;
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Learning Edge');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_class_user_class_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-class/user-class.component */ "./src/app/user-class/user-class.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-register/user-register.component.ts");
/* harmony import */ var _user_tuition_user_tuition_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-tuition/user-tuition.component */ "./src/app/user-tuition/user-tuition.component.ts");
/* harmony import */ var _user_schedule_user_schedule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-schedule/user-schedule.component */ "./src/app/user-schedule/user-schedule.component.ts");
/* harmony import */ var _admin_class_admin_class_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-class/admin-class.component */ "./src/app/admin-class/admin-class.component.ts");
/* harmony import */ var _admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-students/admin-students.component */ "./src/app/admin-students/admin-students.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_show_class_user_show_class_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-show-class/user-show-class.component */ "./src/app/user-show-class/user-show-class.component.ts");
/* harmony import */ var _user_students_user_students_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-students/user-students.component */ "./src/app/user-students/user-students.component.ts");
/* harmony import */ var _userstudentshow_userstudentshow_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./userstudentshow/userstudentshow.component */ "./src/app/userstudentshow/userstudentshow.component.ts");
/* harmony import */ var _admin_class_show_admin_class_show_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-class-show/admin-class-show.component */ "./src/app/admin-class-show/admin-class-show.component.ts");
/* harmony import */ var _admin_picture_admin_picture_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-picture/admin-picture.component */ "./src/app/admin-picture/admin-picture.component.ts");
/* harmony import */ var _admin_tuition_admin_tuition_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-tuition/admin-tuition.component */ "./src/app/admin-tuition/admin-tuition.component.ts");
/* harmony import */ var _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-gallery/user-gallery.component */ "./src/app/user-gallery/user-gallery.component.ts");
/* harmony import */ var _admin_student_show_admin_student_show_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-student-show/admin-student-show.component */ "./src/app/admin-student-show/admin-student-show.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_policy_admin_policy_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-policy/admin-policy.component */ "./src/app/admin-policy/admin-policy.component.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _user_aboutus_user_aboutus_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user-aboutus/user-aboutus.component */ "./src/app/user-aboutus/user-aboutus.component.ts");
/* harmony import */ var _user_contactus_user_contactus_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user-contactus/user-contactus.component */ "./src/app/user-contactus/user-contactus.component.ts");
/* harmony import */ var _user_elementary_user_elementary_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-elementary/user-elementary.component */ "./src/app/user-elementary/user-elementary.component.ts");
/* harmony import */ var _user_middleschool_user_middleschool_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-middleschool/user-middleschool.component */ "./src/app/user-middleschool/user-middleschool.component.ts");
/* harmony import */ var _user_highschool_user_highschool_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./user-highschool/user-highschool.component */ "./src/app/user-highschool/user-highschool.component.ts");
/* harmony import */ var _admin_under_construction_admin_under_construction_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin-under-construction/admin-under-construction.component */ "./src/app/admin-under-construction/admin-under-construction.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _user_class_user_class_component__WEBPACK_IMPORTED_MODULE_9__["UserClassComponent"],
                _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_10__["UserRegisterComponent"],
                _user_tuition_user_tuition_component__WEBPACK_IMPORTED_MODULE_11__["UserTuitionComponent"],
                _user_schedule_user_schedule_component__WEBPACK_IMPORTED_MODULE_12__["UserScheduleComponent"],
                _admin_class_admin_class_component__WEBPACK_IMPORTED_MODULE_13__["AdminClassComponent"],
                _admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_14__["AdminStudentsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _user_show_class_user_show_class_component__WEBPACK_IMPORTED_MODULE_16__["UserShowClassComponent"],
                _user_students_user_students_component__WEBPACK_IMPORTED_MODULE_17__["UserStudentsComponent"],
                _userstudentshow_userstudentshow_component__WEBPACK_IMPORTED_MODULE_18__["UserstudentshowComponent"],
                _admin_class_show_admin_class_show_component__WEBPACK_IMPORTED_MODULE_19__["AdminClassShowComponent"],
                _admin_picture_admin_picture_component__WEBPACK_IMPORTED_MODULE_20__["AdminPictureComponent"],
                _admin_tuition_admin_tuition_component__WEBPACK_IMPORTED_MODULE_21__["AdminTuitionComponent"],
                _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_22__["UserGalleryComponent"],
                _admin_student_show_admin_student_show_component__WEBPACK_IMPORTED_MODULE_23__["AdminStudentShowComponent"],
                _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_24__["AdminLoginComponent"],
                _admin_policy_admin_policy_component__WEBPACK_IMPORTED_MODULE_25__["AdminPolicyComponent"],
                _user_aboutus_user_aboutus_component__WEBPACK_IMPORTED_MODULE_27__["UserAboutusComponent"],
                _user_contactus_user_contactus_component__WEBPACK_IMPORTED_MODULE_28__["UserContactusComponent"],
                _user_elementary_user_elementary_component__WEBPACK_IMPORTED_MODULE_29__["UserElementaryComponent"],
                _user_middleschool_user_middleschool_component__WEBPACK_IMPORTED_MODULE_30__["UserMiddleschoolComponent"],
                _user_highschool_user_highschool_component__WEBPACK_IMPORTED_MODULE_31__["UserHighschoolComponent"],
                _admin_under_construction_admin_under_construction_component__WEBPACK_IMPORTED_MODULE_32__["AdminUnderConstructionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["StorageServiceModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_26__["NgxGalleryModule"]
            ],
            providers: [
                _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact{\r\n    -webkit-text-emphasis: bold;\r\n            text-emphasis: bold;\r\n    color: white;\r\n    padding-left: 15rem;\r\n}\r\n#link{\r\n    color: white;\r\n}\r\n#topjumbo{\r\n    background-color: #FDDA08;\r\n    margin-bottom: 0;\r\n}\r\n#readmore{\r\n    border-width: 10px !important;\r\n    border-color: #436396;\r\n}\r\n#classCard{\r\n    max-height: 300px;\r\n}\r\n#summerBannerCard{\r\n    margin-top: 20px;\r\n    height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0e1xyXG4gICAgdGV4dC1lbXBoYXNpczogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVyZW07XHJcbn1cclxuI2xpbmt7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3RvcGp1bWJve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZEREEwODtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuI3JlYWRtb3Jle1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0MzYzOTY7XHJcbn1cclxuI2NsYXNzQ2FyZHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcbiNzdW1tZXJCYW5uZXJDYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron p-3\" id=\"topjumbo\">\r\n      <h1 class=\"display-4 font-weight-bold\">Welcome to Learning Edge!</h1>  \r\n      <p class=\"lead\">We provide high-tiered secondary education that effectively incorporates proactive teaching to optimize formal education of each student</p>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\" id=\"classContainer\">\r\n    <div class=\"card text-white col-lg-4 border-0\" id=\"classCard\">\r\n      <img class=\"card-img h-100\" src=\"assets/img/elemntary.jpg\" alt=\"Card image\">\r\n      <div class=\"card-img-overlay\">\r\n        <h1 class=\"card-title\">Elementary</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"card text-white col-lg-4 border-0\" id=\"classCard\">\r\n      <img class=\"card-img h-100\" src=\"assets/img/middle.jpg\" alt=\"Card image\">\r\n      <div class=\"card-img-overlay\">\r\n        <h1 class=\"card-title\">Middle School</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"card text-white col-lg-4 border-0\" id=\"classCard\">\r\n      <img class=\"card-img h-100\" src=\"assets/img/high_school.jpg\" alt=\"Card image\">\r\n      <div class=\"card-img-overlay\">\r\n        <h1 class=\"card-title\">High School</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"card text-white col-lg-12 border-0\" id=\"summerBannerCard\">\r\n      <img class=\"card-img h-100\" src=\"assets/img/summer_banner.jpg\" alt=\"Summer Banner\">\r\n      <div class=\"card-img-overlay\">\r\n        <h1 class=\"card-title text-center\" id=\"summerBannerTitle\">Summer Classes</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router, storage, elRef) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.elRef = elRef;
        this.allPics = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observ = this._httpService.getFrontPics();
        observ.subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (i == 0) {
                    _this.firstPic = data[i];
                }
                else {
                    _this.allPics.push(data[i]);
                }
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HttpService = /** @class */ (function () {
    function HttpService(_http, storage, _router) {
        this._http = _http;
        this.storage = storage;
        this._router = _router;
    }
    HttpService.prototype.ngOnInit = function () {
    };
    /**
     *
     * @param {string} uid - UID returned by Google for signed in account
     */
    HttpService.prototype.findUser = function (uid) {
        return this._http.get('/api/usercheck/' + uid);
    };
    HttpService.prototype.findAllUsers = function () {
        return this._http.get('/api/user/all');
    };
    HttpService.prototype.createUser = function (userObj) {
        return this._http.post('/api/user/create', userObj);
    };
    HttpService.prototype.updateUser = function (userObj) {
        return this._http.put('/api/user/' + userObj.uid, userObj);
    };
    HttpService.prototype.getUser = function () {
        return this._http.get('/api/user/' + this.storage.get("uid"));
    };
    HttpService.prototype.getParent = function (parentID) {
        return this._http.get('/api/user/' + parentID);
    };
    HttpService.prototype.getStudent = function (studID) {
        return this._http.get('/api/student/' + studID + '/' + this.storage.get('uid'));
    };
    HttpService.prototype.getStudentOnly = function (studID) {
        return this._http.get('/api/student/' + studID);
    };
    HttpService.prototype.addStudent = function (studObj) {
        return this._http.post('/api/user/' + this.storage.get('uid') + '/addstudent', studObj);
    };
    HttpService.prototype.createAllergy = function (studID, allergyObj) {
        return this._http.post('/api/allergy/' + this.storage.get('uid') + '/' + studID + '/create', allergyObj);
    };
    HttpService.prototype.updateStudent = function (uid, studObj) {
        return this._http.post('/api/student/' + uid + '/updatestudent', studObj);
    };
    HttpService.prototype.updateStudentOnly = function (studID, studObj) {
        return this._http.put('/api/student/' + studID + '/updatestudent', studObj);
    };
    HttpService.prototype.createClass = function (classObj) {
        return this._http.post('/api/class', classObj);
    };
    HttpService.prototype.getAllClass = function () {
        return this._http.get('/api/class');
    };
    HttpService.prototype.getClass = function (classID) {
        return this._http.get('/api/class/' + classID);
    };
    HttpService.prototype.addStudentToClass = function (studObj, classID) {
        return this._http.post('/api/class/' + classID, studObj);
    };
    HttpService.prototype.findStudentByFirstName = function (f_name) {
        return this._http.get('/api/student/firstname/' + f_name);
    };
    HttpService.prototype.findStudentByLastName = function (l_name) {
        return this._http.get('/api/student/lastname/' + l_name);
    };
    HttpService.prototype.getAllStudents = function () {
        return this._http.get('/api/student/all');
    };
    HttpService.prototype.acceptStudent = function (studObj, classID) {
        return this._http.post('/api/admin/class/' + classID, studObj);
    };
    HttpService.prototype.unenrollStudent = function (studObj, classID) {
        return this._http.post('/api/admin/class/' + classID + '/unenroll', studObj);
    };
    HttpService.prototype.deleteClass = function (classID) {
        return this._http.get('/api/admin/class/' + classID + '/delete');
    };
    HttpService.prototype.uploadFrontPic = function (upfile) {
        var pic = new FormData();
        pic.append('frontPicture', upfile);
        return this._http.post('/api/admin/frontpicture', pic);
    };
    HttpService.prototype.getFrontPics = function () {
        return this._http.get('/api/admin/frontpicture');
    };
    HttpService.prototype.uploadGalleryPic = function (upfile) {
        var pic = new FormData();
        pic.append('galleryPicture', upfile);
        return this._http.post('/api/admin/gallerypicture', pic);
    };
    HttpService.prototype.getGalleryPics = function () {
        return this._http.get('/api/admin/gallerypicture');
    };
    HttpService.prototype.deletePic = function (id) {
        return this._http.delete('/api/admin/picture/' + id);
    };
    HttpService.prototype.createTuition = function (tuitObj) {
        return this._http.post('/api/admin/tuition', tuitObj);
    };
    HttpService.prototype.getAllTuition = function () {
        return this._http.get('/api/admin/tuition');
    };
    HttpService.prototype.deleteTuit = function (id) {
        return this._http.delete('/api/admin/tuition/' + id);
    };
    HttpService.prototype.createPolicy = function (policyObj) {
        return this._http.post('/api/admin/policy', policyObj);
    };
    HttpService.prototype.getPolicy = function () {
        return this._http.get('/api/admin/policy');
    };
    HttpService.prototype.deletePolicy = function (policyID) {
        return this._http.get('/api/admin/policy/' + policyID);
    };
    HttpService.prototype.sendSdgMail = function (msg) {
        return this._http.post('/api/admin/sendemail', msg);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HttpService);
    return HttpService;
}());

;


/***/ }),

/***/ "./src/app/user-aboutus/user-aboutus.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-aboutus/user-aboutus.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n#cardBody{\r\n    background-color: #bbdafc;\r\n    border-radius: 0 !important;\r\n}\r\n#collapseOne{\r\n    border-radius: 0 !important;\r\n}\r\n#collapseTwo{\r\n    border-radius: 0 !important;\r\n}\r\n#collapseThree{\r\n    border-radius: 0 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hYm91dHVzL3VzZXItYWJvdXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQiw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLDRCQUE0QjtDQUMvQjtBQUNEO0lBQ0ksNEJBQTRCO0NBQy9CO0FBQ0Q7SUFDSSw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC91c2VyLWFib3V0dXMvdXNlci1hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2NhcmRCb2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGFmYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG4jY29sbGFwc2VPbmV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuI2NvbGxhcHNlVHdve1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcbiNjb2xsYXBzZVRocmVle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-aboutus/user-aboutus.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-aboutus/user-aboutus.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div id=\"header\">\r\n    <h3>ABOUT US</h3>\r\n    <p>\r\n      Established in 2000, LearningEdge has been educating the youth of South Pasadena with little fanfare. Focusing solely on each individual student, LearningEdge has crafted a program designed to push for academic achievement and individual advancement. Many students start working with LearningEdge in elementary and continue on til they graduate high school. With small classes and dedicated teachers, each student is given the exact amount of attention they need to succeed academically as well as indiviudally.\r\n    </p>\r\n    <p>\r\n      With a strong curriculum developed for each individual student, the teachers at LearningEdge work to strengthen academic weaknesses and identify strengths. By taking a multi-faceted approach to education, students become prepared, not just for their own grade level, but beyond as well.\r\n    </p>\r\n  </div>\r\n  <div id=\"accordion\">\r\n    <div class=\"card\" id=\"cardBody\">\r\n      <div class=\"card-header\" id=\"headingOne\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link text-black\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            FREQUENTLY ASKED QUESTION #1\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n        <div class=\"card-body text-black\">\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"cardBody\">\r\n      <div class=\"card-header\" id=\"headingTwo\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link collapsed text-black\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n            FREQUENTLY ASKED QUESTION #2\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n        <div class=\"card-body text-black\">\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"cardBody\">\r\n      <div class=\"card-header\" id=\"headingThree\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link collapsed text-black\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n            FREQUENTLY ASKED QUESTION #3\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n        <div class=\"card-body text-black\">\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-aboutus/user-aboutus.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-aboutus/user-aboutus.component.ts ***!
  \********************************************************/
/*! exports provided: UserAboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAboutusComponent", function() { return UserAboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserAboutusComponent = /** @class */ (function () {
    function UserAboutusComponent() {
    }
    UserAboutusComponent.prototype.ngOnInit = function () {
    };
    UserAboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-aboutus',
            template: __webpack_require__(/*! ./user-aboutus.component.html */ "./src/app/user-aboutus/user-aboutus.component.html"),
            styles: [__webpack_require__(/*! ./user-aboutus.component.css */ "./src/app/user-aboutus/user-aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserAboutusComponent);
    return UserAboutusComponent;
}());



/***/ }),

/***/ "./src/app/user-class/user-class.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-class/user-class.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#classList{\r\n    text-align: center;\r\n    padding-bottom: 5px;\r\n    border-bottom: solid 1px black ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jbGFzcy91c2VyLWNsYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdDQUFnQztDQUNuQyIsImZpbGUiOiJzcmMvYXBwL3VzZXItY2xhc3MvdXNlci1jbGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NsYXNzTGlzdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2sgO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-class/user-class.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-class/user-class.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 id=\"classList\">Currently Available Classes</h1>\r\n  <h3 *ngIf=\"logcheck == false\">You are not logged in. You must login to add students</h3>\r\n  <div *ngFor=\"let class of allClass\" class=\"col-sm-6 mt-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{class.title}}</h5>\r\n        <p class=\"card-text\">{{class.grade}} Grade</p>\r\n        <p class=\"card-text\">Capacity: {{class.capacity}} students</p>\r\n        <p class=\"card-text\">Description: {{class.description}}</p>\r\n        <a [routerLink]=\"['/class', class._id]\" class=\"btn btn-primary\">Go to Class</a>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</div>    "

/***/ }),

/***/ "./src/app/user-class/user-class.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-class/user-class.component.ts ***!
  \****************************************************/
/*! exports provided: UserClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserClassComponent", function() { return UserClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var UserClassComponent = /** @class */ (function () {
    function UserClassComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.allClass = [];
    }
    UserClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observ = this._httpService.getAllClass();
        observ.subscribe(function (data) {
            _this.allClass = data;
        });
        if (!this.storage.get('uid')) {
            this.logcheck = false;
        }
    };
    UserClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-class',
            template: __webpack_require__(/*! ./user-class.component.html */ "./src/app/user-class/user-class.component.html"),
            styles: [__webpack_require__(/*! ./user-class.component.css */ "./src/app/user-class/user-class.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], UserClassComponent);
    return UserClassComponent;
}());



/***/ }),

/***/ "./src/app/user-contactus/user-contactus.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-contactus/user-contactus.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\r\n    text-align: center;\r\n}\r\n#locationBox{\r\n    overflow:hidden;\r\n    padding-bottom:56.25%;\r\n    position:relative;\r\n    height:0;\r\n}\r\n#locationBox iframe{\r\n    left:0;\r\n    top:0;\r\n    height:100%;\r\n    width:100%;\r\n    position:absolute;\r\n}\r\n#hoursTable{\r\n    width: 80%;\r\n    border: solid 3px #C0C0C0;\r\n    padding: 3px;\r\n}\r\nform{\r\n    border: solid 3px #C0C0C0;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jb250YWN0dXMvdXNlci1jb250YWN0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztDQUNaO0FBQ0Q7SUFDSSxPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1jb250YWN0dXMvdXNlci1jb250YWN0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2xvY2F0aW9uQm94e1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206NTYuMjUlO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6MDtcclxufVxyXG4jbG9jYXRpb25Cb3ggaWZyYW1le1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOjA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG4jaG91cnNUYWJsZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjQzBDMEMwO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcbmZvcm17XHJcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjQzBDMEMwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-contactus/user-contactus.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-contactus/user-contactus.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <div class=\"container\">\r\n      <div id=\"header\">\r\n        <h2>Contact Us</h2>\r\n      </div>\r\n      <div id=\"mailBox\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <form (submit)=\"onSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email address</label>\r\n                <input [(ngModel)]=\"msg.from\" name=\"msg.from\" type=\"email\" class=\"form-control\" id=\"email\">\r\n                <small *ngIf=\"msgError.from == 'false'\" id=\"email\" class=\"form-text text-danger\">Enter Valid Email</small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input [(ngModel)]=\"msg.name\" name=\"msg.name\" type=\"text\" class=\"form-control\" id=\"name\">\r\n                <small *ngIf=\"msgError.name == 'false'\" id=\"name\" class=\"form-text text-danger\">Must Enter Name</small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"subject\">Subject</label>\r\n                <input [(ngModel)]=\"msg.subject\" name=\"msg.subject\" type=\"text\" class=\"form-control\" id=\"subject\">\r\n                <small *ngIf=\"msgError.subject == 'false'\" id=\"subject\" class=\"form-text text-danger\">Must Enter Subject</small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"message\">Message</label>\r\n                <textarea [(ngModel)]=\"msg.text\" name=\"msg.text\" class=\"form-control\" id=\"message\" rows=\"3\"></textarea>\r\n                <small *ngIf=\"msgError.text == 'false'\" id=\"message\" class=\"form-text text-danger\">Must Enter Message</small>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <table class=\"table table-sm table-borderless\" id=\"hoursTable\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Hours of Operation</th>\r\n                  <th scope=\"col\"></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>Monday</td>\r\n                  <td>11pm ~ 7pm</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Tuesday</td>\r\n                  <td>11pm ~ 7pm</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Wednesday</td>\r\n                  <td>11pm ~ 7pm</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Thursday</td>\r\n                  <td>11pm ~ 7pm</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Friday</td>\r\n                  <td>11pm ~ 7pm</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div id=\"locationBox\">\r\n        <iframe\r\n        width=\"600\"\r\n        height=\"450\"\r\n        frameborder=\"0\" style=\"border:0\"\r\n        src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBl9uJu8VldXjaa5tSV9gCgSP6iA2ShNwg\r\n          &q=learning+edge+south+pasadena\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./src/app/user-contactus/user-contactus.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-contactus/user-contactus.component.ts ***!
  \************************************************************/
/*! exports provided: UserContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContactusComponent", function() { return UserContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");






var UserContactusComponent = /** @class */ (function () {
    function UserContactusComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.msg = {
            from: '',
            subject: '',
            text: '',
            name: ''
        };
        this.msgError = {
            from: '',
            subject: '',
            text: '',
            name: ''
        };
    }
    UserContactusComponent.prototype.ngOnInit = function () {
    };
    UserContactusComponent.prototype.onSubmit = function () {
        this.msgError = {
            from: '',
            subject: '',
            text: '',
            name: ''
        };
        var validateEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.msg.from, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email);
        var checkEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.msg.from, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var validateSubject = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.msg.subject, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var validateText = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.msg.text, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var validateName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.msg.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        if (validateEmail.errors != null || checkEmail.errors != null) {
            this.msgError.from = 'false';
        }
        if (validateSubject.errors != null) {
            this.msgError.subject = 'false';
        }
        if (validateText.errors != null) {
            this.msgError.text = 'false';
        }
        if (validateName.errors != null) {
            this.msgError.name = 'false';
        }
    };
    ;
    UserContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-contactus',
            template: __webpack_require__(/*! ./user-contactus.component.html */ "./src/app/user-contactus/user-contactus.component.html"),
            styles: [__webpack_require__(/*! ./user-contactus.component.css */ "./src/app/user-contactus/user-contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["WebStorageService"]])
    ], UserContactusComponent);
    return UserContactusComponent;
}());



/***/ }),

/***/ "./src/app/user-elementary/user-elementary.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-elementary/user-elementary.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#classButton{\r\n    color: white;\r\n}\r\n#fallScheduleToggle{\r\n    margin-left: 5px;\r\n}\r\n#summerScheduleToggle{\r\n    margin-left: 5px;\r\n}\r\nh3{\r\n    display: inline-block;\r\n    vertical-align: bottom;\r\n}\r\n#fallSchedule{\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n#summerSchedule{\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1lbGVtZW50YXJ5L3VzZXItZWxlbWVudGFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWVsZW1lbnRhcnkvdXNlci1lbGVtZW50YXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2xhc3NCdXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2ZhbGxTY2hlZHVsZVRvZ2dsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuI3N1bW1lclNjaGVkdWxlVG9nZ2xle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5oM3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuI2ZhbGxTY2hlZHVsZXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4jc3VtbWVyU2NoZWR1bGV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-elementary/user-elementary.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user-elementary/user-elementary.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Elementary</h1>\r\n  <div id=\"scheduleBox\">\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div id=\"regular\" class=\"col-md-6 col-sm-12\">\r\n      <!-- <h3>Fall</h3> -->\r\n      <!-- <button id=\"fallScheduleToggle\" class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#fallSchedule\" aria-expanded=\"false\" aria-controls=\"fallSchedule\">\r\n        Fall Schedule\r\n      </button> -->\r\n      <a data-toggle=\"collapse\" href=\"#fallSchedule\" role=\"button\" aria-expanded=\"false\" aria-controls=\"fallSchedule\">\r\n        <h3>Show Fall Schedule</h3>\r\n      </a>\r\n      <div class=\"collapse\" id=\"fallSchedule\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">TIME</th>\r\n              <th scope=\"col\">CLASS</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>9 ~ 10:30am</td>\r\n              <td>LANGUAGE ARTS</td>\r\n            </tr>\r\n            <tr>\r\n              <td>10:30 ~ 10:45am</td>\r\n              <td>BREAK</td>\r\n            </tr>\r\n            <tr>\r\n              <td>10:45 ~ 12:15pm</td>\r\n              <td>MATH</td>\r\n            </tr>\r\n            <tr>\r\n              <td>12:15 ~ 1pm</td>\r\n              <td>LUNCH</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">TITLE</h5>\r\n          <p class=\"card-text\">5th Grade</p>\r\n          <p class=\"card-text\">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n          <a [routerLink]=\"['/class', class._id]\" id=\"classButton\" class=\"btn btn-primary\">Go to Class</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"summer\" class=\"col-md-6 col-sm-12\">\r\n      <a data-toggle=\"collapse\" href=\"#summerSchedule\" role=\"button\" aria-expanded=\"false\" aria-controls=\"summerSchedule\">\r\n        <h3>Show Summer Schedule</h3>\r\n      </a>\r\n      <div class=\"collapse\" id=\"summerSchedule\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">TIME</th>\r\n              <th scope=\"col\">CLASS</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>9 ~ 10:30am</td>\r\n              <td>LANGUAGE ARTS</td>\r\n            </tr>\r\n            <tr>\r\n              <td>10:30 ~ 10:45am</td>\r\n              <td>BREAK</td>\r\n            </tr>\r\n            <tr>\r\n              <td>10:45 ~ 12:15pm</td>\r\n              <td>MATH</td>\r\n            </tr>\r\n            <tr>\r\n              <td>12:15 ~ 1pm</td>\r\n              <td>LUNCH</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">TITLE</h5>\r\n          <p class=\"card-text\">5th Grade</p>\r\n          <p class=\"card-text\">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n          <a [routerLink]=\"['/class', class._id]\" id=\"classButton\" class=\"btn btn-primary\">Go to Class</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-elementary/user-elementary.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-elementary/user-elementary.component.ts ***!
  \**************************************************************/
/*! exports provided: UserElementaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserElementaryComponent", function() { return UserElementaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserElementaryComponent = /** @class */ (function () {
    function UserElementaryComponent() {
    }
    UserElementaryComponent.prototype.ngOnInit = function () {
    };
    UserElementaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-elementary',
            template: __webpack_require__(/*! ./user-elementary.component.html */ "./src/app/user-elementary/user-elementary.component.html"),
            styles: [__webpack_require__(/*! ./user-elementary.component.css */ "./src/app/user-elementary/user-elementary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserElementaryComponent);
    return UserElementaryComponent;
}());



/***/ }),

/***/ "./src/app/user-gallery/user-gallery.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-gallery/user-gallery.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#galleryBox{\r\n    padding: 2%;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1nYWxsZXJ5L3VzZXItZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZ2FsbGVyeS91c2VyLWdhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNnYWxsZXJ5Qm94e1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user-gallery/user-gallery.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-gallery/user-gallery.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div id=\"galleryBox\">\r\n    <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-gallery/user-gallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-gallery/user-gallery.component.ts ***!
  \********************************************************/
/*! exports provided: UserGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGalleryComponent", function() { return UserGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);







var UserGalleryComponent = /** @class */ (function () {
    function UserGalleryComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.galleryArray = [];
    }
    UserGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        var observ = this._httpService.getGalleryPics();
        observ.subscribe(function (data) {
            data.map(function (pic) {
                _this.galleryArray.push({
                    small: pic.filePath,
                    medium: pic.filePath,
                    big: pic.filePath
                });
            });
            _this.galleryImages = _this.galleryArray;
        });
    };
    UserGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-gallery',
            template: __webpack_require__(/*! ./user-gallery.component.html */ "./src/app/user-gallery/user-gallery.component.html"),
            styles: [__webpack_require__(/*! ./user-gallery.component.css */ "./src/app/user-gallery/user-gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], UserGalleryComponent);
    return UserGalleryComponent;
}());



/***/ }),

/***/ "./src/app/user-highschool/user-highschool.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-highschool/user-highschool.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaGlnaHNjaG9vbC91c2VyLWhpZ2hzY2hvb2wuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-highschool/user-highschool.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user-highschool/user-highschool.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-highschool works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user-highschool/user-highschool.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-highschool/user-highschool.component.ts ***!
  \**************************************************************/
/*! exports provided: UserHighschoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHighschoolComponent", function() { return UserHighschoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserHighschoolComponent = /** @class */ (function () {
    function UserHighschoolComponent() {
    }
    UserHighschoolComponent.prototype.ngOnInit = function () {
    };
    UserHighschoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-highschool',
            template: __webpack_require__(/*! ./user-highschool.component.html */ "./src/app/user-highschool/user-highschool.component.html"),
            styles: [__webpack_require__(/*! ./user-highschool.component.css */ "./src/app/user-highschool/user-highschool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserHighschoolComponent);
    return UserHighschoolComponent;
}());



/***/ }),

/***/ "./src/app/user-middleschool/user-middleschool.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-middleschool/user-middleschool.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWlkZGxlc2Nob29sL3VzZXItbWlkZGxlc2Nob29sLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-middleschool/user-middleschool.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-middleschool/user-middleschool.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-middleschool works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user-middleschool/user-middleschool.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-middleschool/user-middleschool.component.ts ***!
  \******************************************************************/
/*! exports provided: UserMiddleschoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMiddleschoolComponent", function() { return UserMiddleschoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserMiddleschoolComponent = /** @class */ (function () {
    function UserMiddleschoolComponent() {
    }
    UserMiddleschoolComponent.prototype.ngOnInit = function () {
    };
    UserMiddleschoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-middleschool',
            template: __webpack_require__(/*! ./user-middleschool.component.html */ "./src/app/user-middleschool/user-middleschool.component.html"),
            styles: [__webpack_require__(/*! ./user-middleschool.component.css */ "./src/app/user-middleschool/user-middleschool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserMiddleschoolComponent);
    return UserMiddleschoolComponent;
}());



/***/ }),

/***/ "./src/app/user-register/user-register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-register/user-register.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact{\r\n    -webkit-text-emphasis: bold;\r\n            text-emphasis: bold;\r\n    color: white;\r\n    margin-left: 200rem;\r\n}\r\n#navbar{\r\n    background: rgb(73,144,226);\r\n}\r\n#link{\r\n    color: white;\r\n}\r\n.ml-5{\r\n    margin-left: ($spacer * 24) !important;\r\n}\r\n#topjumbo{\r\n    background-color: rgb(254,191,88)\r\n}\r\nh6{\r\n    margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZWdpc3Rlci91c2VyLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDRCQUE0QjtDQUMvQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksdUNBQXVDO0NBQzFDO0FBQ0Q7SUFDSSxpQ0FBaUM7Q0FDcEM7QUFFRDtJQUNJLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnaXN0ZXIvdXNlci1yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3R7XHJcbiAgICB0ZXh0LWVtcGhhc2lzOiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHJlbTtcclxufVxyXG4jbmF2YmFye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDczLDE0NCwyMjYpO1xyXG59XHJcbiNsaW5re1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tbC01e1xyXG4gICAgbWFyZ2luLWxlZnQ6ICgkc3BhY2VyICogMjQpICFpbXBvcnRhbnQ7XHJcbn1cclxuI3RvcGp1bWJve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwxOTEsODgpXHJcbn1cclxuXHJcbmg2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-register/user-register.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-register/user-register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"card text-center\">\r\n  <div class=\"card-header\">\r\n    You will be redirected\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Sign-In using your Google Account</h5>\r\n    <a id=\"googbutton\" class=\"btn btn-primary\">Google</a>\r\n    <a id=\"googbuttonout\" class=\"btn btn-secondary\">Sign-Out</a>\r\n    <h4 *ngIf=\"fireLog == true\">You are currently logged in</h4>\r\n    <h4 *ngIf=\"fireLog == false\">You are currently not logged in</h4>\r\n  </div>\r\n  <div class=\"card-footer text-muted\">\r\n    Powered by Google\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-register/user-register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-register/user-register.component.ts ***!
  \**********************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");







var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = {
            apiKey: "AIzaSyCSEi9QOMSGTBpbCqo3-DuOXV_yc0F2eEY",
            authDomain: "le-website-78ad8.firebaseapp.com",
            databaseURL: "https://le-website-78ad8.firebaseio.com",
            projectId: "le-website-78ad8",
            storageBucket: "le-website-78ad8.appspot.com",
            messagingSenderId: "568996387999"
        };
        if (!firebase_app__WEBPACK_IMPORTED_MODULE_2__["apps"].length) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
        }
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (firebaseUser) {
            if (firebaseUser) {
                _this.storage.set('uid', firebaseUser.uid);
                _this.storage.set('email', firebaseUser.email);
                _this.fireLog = true;
            }
            else {
                _this.fireLog = false;
            }
        });
        var signbutton = document.getElementById('googbutton');
        var signbuttonout = document.getElementById('googbuttonout');
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        signbutton.addEventListener('click', function (e) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithRedirect(provider).then(function (result) {
                this.fireLog == true;
            }).catch(function (error) {
                console.log("Error: ", error);
            });
        });
        signbuttonout.addEventListener('click', function (e) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
            _this.fireLog == false;
            _this.storage.remove('uid');
            _this.storage.remove('email');
        });
    };
    ;
    UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(/*! ./user-register.component.html */ "./src/app/user-register/user-register.component.html"),
            styles: [__webpack_require__(/*! ./user-register.component.css */ "./src/app/user-register/user-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["WebStorageService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-schedule/user-schedule.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-schedule/user-schedule.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 768px){\r\n    #map-responsive{\r\n        overflow:hidden;\r\n        padding-bottom:56.25%;\r\n        position:relative;\r\n        height:0;\r\n        width: 50%;\r\n        display: inline-block;\r\n    }\r\n    #map-responsive iframe{\r\n        left:0;\r\n        right: 0;\r\n        top:0;\r\n        height:100%;\r\n        width:100%;\r\n        position:absolute;\r\n    }\r\n}\r\n@media only screen and (max-width: 768px){\r\n    #map-responsive{\r\n        overflow:hidden;\r\n        padding-bottom:56.25%;\r\n        position:relative;\r\n        height:0;\r\n        width: 100%;\r\n        display: inline-block;\r\n    }\r\n    #map-responsive iframe{\r\n        left:0;\r\n        right: 0;\r\n        top:0;\r\n        height:100%;\r\n        width:100%;\r\n        position:absolute;\r\n    }\r\n}\r\n.title{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zY2hlZHVsZS91c2VyLXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsc0JBQXNCO0tBQ3pCO0lBQ0Q7UUFDSSxPQUFPO1FBQ1AsU0FBUztRQUNULE1BQU07UUFDTixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtLQUNyQjtDQUNKO0FBQ0Q7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxZQUFZO1FBQ1osc0JBQXNCO0tBQ3pCO0lBQ0Q7UUFDSSxPQUFPO1FBQ1AsU0FBUztRQUNULE1BQU07UUFDTixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtLQUNyQjtDQUNKO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLXNjaGVkdWxlL3VzZXItc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgI21hcC1yZXNwb25zaXZle1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTo1Ni4yNSU7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAjbWFwLXJlc3BvbnNpdmUgaWZyYW1le1xyXG4gICAgICAgIGxlZnQ6MDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgI21hcC1yZXNwb25zaXZle1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTo1Ni4yNSU7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgI21hcC1yZXNwb25zaXZlIGlmcmFtZXtcclxuICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIH1cclxufVxyXG4udGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-schedule/user-schedule.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-schedule/user-schedule.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title\">\r\n    <h2>Current Schedule</h2>\r\n  </div>\r\n    <div id=\"map-responsive\">\r\n      <iframe class=\"embed-responsive-item\" src=\"https://calendar.google.com/calendar/embed?showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23c0c0c0&amp;src=learningedgecenter%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FLos_Angeles\" scrolling=\"no\"></iframe>\r\n    </div>\r\n    <div id=\"map-responsive\">\r\n      <iframe class=\"embed-responsive-item\" src=\"https://calendar.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=learningedgecenter%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FLos_Angeles\" scrolling=\"no\"></iframe>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-schedule/user-schedule.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-schedule/user-schedule.component.ts ***!
  \**********************************************************/
/*! exports provided: UserScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserScheduleComponent", function() { return UserScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import * as $ from 'jQuery';
// import  './fullcalendar.js';
var UserScheduleComponent = /** @class */ (function () {
    function UserScheduleComponent() {
    }
    UserScheduleComponent.prototype.ngOnInit = function () {
    };
    UserScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-schedule',
            template: __webpack_require__(/*! ./user-schedule.component.html */ "./src/app/user-schedule/user-schedule.component.html"),
            styles: [__webpack_require__(/*! ./user-schedule.component.css */ "./src/app/user-schedule/user-schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserScheduleComponent);
    return UserScheduleComponent;
}());



/***/ }),

/***/ "./src/app/user-show-class/user-show-class.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-show-class/user-show-class.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#classWindow{\r\n    background-color: #bbdafc;\r\n    border-radius: 0 !important;\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zaG93LWNsYXNzL3VzZXItc2hvdy1jbGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixVQUFVO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2VyLXNob3ctY2xhc3MvdXNlci1zaG93LWNsYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2xhc3NXaW5kb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkYWZjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-show-class/user-show-class.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user-show-class/user-show-class.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\" id=\"classWindow\">\r\n    <h1 class=\"display-4\">CLASS TITLE</h1>\r\n    <p class=\"lead\">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n    <hr class=\"my-4\">\r\n    <div class=\"col-md-6 col-sm-12\">\r\n      <table class=\"table table-sm table-borderless\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">CLASS OPTIONS</th>\r\n            <th scope=\"col\">6 WKS/WEEKLY</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>9:00am ~ 12:15pm</td>\r\n            <td>$1050/200</td>\r\n          </tr>\r\n          <tr>\r\n            <td>9:00am ~ 4:00pm</td>\r\n            <td>$1900/360</td>\r\n          </tr>\r\n          <tr>\r\n            <td>9:00am ~ 6:00pm</td>\r\n            <td>$2150/400</td>\r\n          </tr>\r\n          <tr>\r\n            <td>1:00pm ~ 4:00pm</td>\r\n            <td>$1050/200</td>\r\n          </tr>\r\n          <tr>\r\n            <td>1:00pm ~ 6:00pm</td>\r\n            <td>$1500/280</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-show-class/user-show-class.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-show-class/user-show-class.component.ts ***!
  \**************************************************************/
/*! exports provided: UserShowClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShowClassComponent", function() { return UserShowClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var UserShowClassComponent = /** @class */ (function () {
    function UserShowClassComponent(_httpService, _router, storage, activatedRoute) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.classID = "";
        this.students = [];
        this.class = {
            title: '',
            grade: '',
            capcity: 0,
            description: ""
        };
    }
    UserShowClassComponent.prototype.ngOnInit = function () {
        //   this.activatedRoute.params.subscribe(params=>{
        //     this.classID = params['id']
        //     let observ = this._httpService.getClass(this.classID);
        //     observ.subscribe((data:any)=>{
        //       this.class = data['0']
        //     })
        //   })
    };
    ;
    UserShowClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-show-class',
            template: __webpack_require__(/*! ./user-show-class.component.html */ "./src/app/user-show-class/user-show-class.component.html"),
            styles: [__webpack_require__(/*! ./user-show-class.component.css */ "./src/app/user-show-class/user-show-class.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserShowClassComponent);
    return UserShowClassComponent;
}());



/***/ }),

/***/ "./src/app/user-students/user-students.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-students/user-students.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#studcard{\r\n    display: inline-block\r\n}\r\n#showstudent{\r\n    border: 1px solid black;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zdHVkZW50cy91c2VyLXN0dWRlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1zdHVkZW50cy91c2VyLXN0dWRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3R1ZGNhcmR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxufVxyXG4jc2hvd3N0dWRlbnR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-students/user-students.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-students/user-students.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div id='showstudent'>\r\n    <h3>Current Students</h3>\r\n    <h4 [hidden]=\"students[0]\">You currently have no students added</h4>\r\n    <div *ngFor=\"let student of students\" class=\"card m-3\" id=\"studcard\" style=\"width: 18rem;\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{student.f_name}} {{student.l_name}}</h5>\r\n        <h6 class=\"card-subtitle mb-2 text-muted\">{{student.grade}} Grade</h6>\r\n        <p class=\"card-text\">{{student.school}}</p>\r\n        <a class=\"card-link\" [routerLink]=\"['/students', student._id]\">Add Allergy/Change Info</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <h3>Add a Student</h3>\r\n  <form (submit)=\"onSubmit()\">\r\n    <div class=\"row\">\r\n      <div class='col-md-3 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"student.f_name\">First Name</label>\r\n            <input [(ngModel)]=\"student.f_name\" name=\"student.f_name\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\">\r\n            <small *ngIf=\"errorMessages['f_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid First Name</small>\r\n          </div>\r\n        </div>\r\n        <div class='col-md-3 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"student.l_name\">Last Name</label>\r\n            <input [(ngModel)]=\"student.l_name\" name=\"student.l_name\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\">\r\n            <small *ngIf=\"errorMessages['l_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid Last Name</small>            \r\n          </div>\r\n        </div>\r\n        <div class='col-md-3 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"student.school\">School</label>\r\n            <input [(ngModel)]=\"student.school\" name=\"student.school\" type=\"text\" class=\"form-control\" id=\"school\" aria-describedby=\"school\">\r\n            <small *ngIf=\"errorMessages['school']['message'] == 'error' \" id=\"school\" class=\"form-text text-danger\">Require School</small>            \r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"gradeSelect\">Grade</label>\r\n            <select [(ngModel)]=\"student.grade\" name=\"student.grade\" class=\"form-control\" id=\"gradeSelect\">\r\n              <option value=\"1st\">1st</option>\r\n              <option value=\"2nd\">2nd</option>\r\n              <option value=\"3rd\">3rd</option>\r\n              <option value=\"4th\">4th</option>\r\n              <option value=\"5th\">5th</option>\r\n              <option value=\"6th\">6th</option>\r\n              <option value=\"7th\">7th</option>\r\n              <option value=\"8th\">8th</option>\r\n              <option value=\"9th\">9th</option>\r\n              <option value=\"10th\">10th</option>\r\n              <option value=\"11th\">11th</option>\r\n              <option value=\"12th\">12th</option>              \r\n            </select>\r\n            <small *ngIf=\"errorMessages['grade']['message'] == 'error' \" class=\"form-text text-danger\">Invalid Grade</small>            \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"street_address\">Address</label>\r\n        <input [(ngModel)]=\"student.street_address\" name=\"student.street_address\" type=\"text\" class=\"form-control\" id=\"street_address\" aria-describedby=\"street_address\" placeholder=\"1315 Fair Oaks Ave.\">\r\n        <small *ngIf=\"errorMessages['street_address']['message'] == 'error' \" id=\"street_address\" class=\"form-text text-danger\">Invalid Street Address</small>          \r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"city\">City</label>\r\n          <input [(ngModel)]=\"student.city\" name=\"student.city\" type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"South Pasadena\">\r\n          <small *ngIf=\"errorMessages['city']['message'] == 'error' \" id=\"city\" class=\"form-text text-danger\">Invalid City</small>          \r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n            <label for=\"zip\">Zip</label>\r\n            <input [(ngModel)]=\"student.zip\" name=\"student.zip\" type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"91030\">\r\n            <small *ngIf=\"errorMessages['zip']['message'] == 'error' \" id=\"zip\" class=\"form-text text-danger\">Invalid Zip Code</small>\r\n          </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"phone\">Home Phone</label>\r\n          <input [(ngModel)]=\"student.phone\" name=\"student.phone\" type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\" placeholder=\"626-799-2654\">\r\n          <small *ngIf=\"errorMessages['phone']['message'] == 'error' \" id=\"phone\" class=\"form-text text-danger\">Invalid Phone Number</small>            \r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian1_name\">Mother/Guardian</label>\r\n            <input [(ngModel)]=\"student.guardian1_name\" name=\"student.guardian1_name\" type=\"text\" class=\"form-control\" id=\"student.guardian1_name\" aria-describedby=\"guardian1_name\">\r\n            <small *ngIf=\"errorMessages['guardian1_name']['message'] == 'error' \" id=\"guardian1_name\" class=\"form-text text-danger\">Requires Name</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian1_email\">Email</label>\r\n            <input [(ngModel)]=\"student.guardian1_email\" name=\"student.guardian1_email\" type=\"text\" class=\"form-control\" id=\"student.guardian1_email\" aria-describedby=\"guardian1_email\">\r\n            <small *ngIf=\"errorMessages['guardian1_email']['message'] == 'error' \" id=\"guardian1_email\" class=\"form-text text-danger\">Requires Email</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian1_cell\">Cell</label>\r\n            <input [(ngModel)]=\"student.guardian1_cell\" name=\"student.guardian1_cell\" type=\"text\" class=\"form-control\" id=\"student.guardian1_cell\" aria-describedby=\"guardian1_cell\">\r\n            <small *ngIf=\"errorMessages['guardian1_cell']['message'] == 'error' \" id=\"guardian1_cell\" class=\"form-text text-danger\">Requires Email</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian2_name\">Father/Guardian</label>\r\n            <input [(ngModel)]=\"student.guardian2_name\" name=\"student.guardian2_name\" type=\"text\" class=\"form-control\" id=\"student.guardian2_name\" aria-describedby=\"guardian2_name\">\r\n            <small *ngIf=\"errorMessages['guardian2_name']['message'] == 'error' \" id=\"guardian2_name\" class=\"form-text text-danger\">Requires Name</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian2_email\">Email</label>\r\n            <input [(ngModel)]=\"student.guardian2_email\" name=\"student.guardian2_email\" type=\"text\" class=\"form-control\" id=\"student.guardian2_email\" aria-describedby=\"guardian2_email\">\r\n            <small *ngIf=\"errorMessages['guardian2_email']['message'] == 'error' \" id=\"guardian2_email\" class=\"form-text text-danger\">Requires Email</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.guardian2_cell\">Cell</label>\r\n            <input [(ngModel)]=\"student.guardian2_cell\" name=\"student.guardian2_cell\" type=\"text\" class=\"form-control\" id=\"student.guardian2_cell\" aria-describedby=\"guardian2_cell\">\r\n            <small *ngIf=\"errorMessages['guardian2_cell']['message'] == 'error' \" id=\"guardian2_cell\" class=\"form-text text-danger\">Requires Email</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact1_name\">Emergency Contact(Required)</label>\r\n            <input [(ngModel)]=\"student.e_contact1_name\" name=\"student.e_contact1_name\" type=\"text\" class=\"form-control\" id=\"e_contact1_name\" aria-describedby=\"e_contact1_name\">\r\n            <small *ngIf=\"errorMessages['e_contact1_name']['message'] == 'error' \" id=\"e_contact1_name\" class=\"form-text text-danger\">Requires Name</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact1_relation\">Relation</label>\r\n            <input [(ngModel)]=\"student.e_contact1_relation\" name=\"student.e_contact1_relation\" type=\"text\" class=\"form-control\" id=\"e_contact1_relation\" aria-describedby=\"e_contact1_relation\">\r\n            <small *ngIf=\"errorMessages['e_contact1_relation']['message'] == 'error' \" id=\"e_contact1_relation\" class=\"form-text text-danger\">Requires Relation</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact1_phone\">Phone</label>\r\n            <input [(ngModel)]=\"student.e_contact1_phone\" name=\"student.e_contact1_phone\" type=\"text\" class=\"form-control\" id=\"e_contact1_phone\" aria-describedby=\"e_contact1_phone\">\r\n            <small *ngIf=\"errorMessages['e_contact1_phone']['message'] == 'error' \" id=\"e_contact1_phone\" class=\"form-text text-danger\">Requires Phone</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact2_name\">Emergency Contact(Optional)</label>\r\n            <input [(ngModel)]=\"student.e_contact2_name\" name=\"student.e_contact2_name\" type=\"text\" class=\"form-control\" id=\"e_contact2_name\" aria-describedby=\"e_contact2_name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact2_relation\">Relation</label>\r\n            <input [(ngModel)]=\"student.e_contact2_relation\" name=\"student.e_contact2_relation\" type=\"text\" class=\"form-control\" id=\"e_contact2_relation\" aria-describedby=\"e_contact2_relation\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"student.e_contact2_phone\">Phone</label>\r\n            <input [(ngModel)]=\"student.e_contact2_phone\" name=\"student.e_contact2_phone\" type=\"text\" class=\"form-control\" id=\"e_contact2_phone\" aria-describedby=\"e_contact2_phone\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <h5 *ngFor=\"let pol of policy\">{{pol.line1}}</h5>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input [(ngModel)]=\"checkbox\" name=\"checkbox\" class=\"form-check-input\" type=\"checkbox\" id=\"registerCheck\">\r\n        <label class=\"form-check-label\" for=\"registerCheck\">\r\n          By checking this box, you agree to abide by the terms and conditions provided above.\r\n        </label>\r\n        <small *ngIf=\"checkbox == false\" id=\"registerCheck\" class=\"form-text text-danger\">You must agree to the policies to register</small>\r\n      </div>\r\n      <br>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Submit Student</button>\r\n  </form>\r\n  <br>\r\n  <br>\r\n</div>"

/***/ }),

/***/ "./src/app/user-students/user-students.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-students/user-students.component.ts ***!
  \**********************************************************/
/*! exports provided: UserStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStudentsComponent", function() { return UserStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var UserStudentsComponent = /** @class */ (function () {
    function UserStudentsComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.students = [];
        this.checkbox = false;
        this.student = {
            f_name: "",
            l_name: "",
            grade: "",
            parent_id: "",
            street_address: "",
            city: "",
            zip: "",
            phone: "",
            guardian1_name: "",
            guardian1_email: "",
            guardian1_cell: "",
            guardian2_name: "",
            guardian2_email: "",
            guardian2_cell: "",
            e_contact1_name: "",
            e_contact1_relation: "",
            e_contact1_phone: "",
            e_contact2_name: "",
            e_contact2_relation: "",
            e_contact2_phone: "",
            school: ""
        };
    }
    UserStudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.storage.get('uid')) {
            this._router.navigate(['/registration']);
        }
        else {
            var check = this._httpService.findUser(this.storage.get('uid'));
            check.subscribe(function (data) {
                if (data === false) {
                    _this.newUser = {
                        uid: _this.storage.get("uid")
                    };
                    var create = _this._httpService.createUser(_this.newUser);
                    create.subscribe(function (data) {
                        console.log(data);
                    });
                }
                else {
                    var observ = _this._httpService.getUser();
                    observ.subscribe(function (data) {
                        _this.user = data['0'];
                        _this.students = data['0'].students;
                        console.log(data);
                    });
                }
            });
            var policyObserv = this._httpService.getPolicy();
            policyObserv.subscribe(function (data) {
                _this.policy = data;
            });
        }
        ;
        this.errorMessages = {
            f_name: { message: "" },
            l_name: { message: "" },
            grade: { message: "" },
            street_address: { message: "" },
            city: { message: "" },
            zip: { message: "" },
            phone: { message: "" },
            guardian1_name: { message: "" },
            guardian1_email: { message: "" },
            guardian1_cell: { message: "" },
            guardian2_name: { message: "" },
            guardian2_email: { message: "" },
            guardian2_cell: { message: "" },
            e_contact1_name: { message: "" },
            e_contact1_relation: { message: "" },
            e_contact1_phone: { message: "" },
            school: { message: "" },
        };
        this.student = {
            f_name: "",
            l_name: "",
            grade: "",
            parent_id: this.storage.get('uid'),
            street_address: "",
            city: "",
            zip: "",
            phone: "",
            guardian1_name: "",
            guardian1_email: "",
            guardian1_cell: "",
            guardian2_name: "",
            guardian2_email: "",
            guardian2_cell: "",
            e_contact1_name: "",
            e_contact1_relation: "",
            e_contact1_phone: "",
            e_contact2_name: "",
            e_contact2_relation: "",
            e_contact2_phone: "",
            school: ""
        };
    };
    UserStudentsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.checkbox == false) {
            this.checkboxBool = false;
        }
        else {
            var observ = this._httpService.addStudent(this.student);
            observ.subscribe(function (data) {
                console.log(data);
                if (data === null) {
                    if (data.errors['f_name']) {
                        _this.errorMessages['f_name']['message'] = "error";
                    }
                    if (data.errors['l_name']) {
                        _this.errorMessages['l_name']['message'] = "error";
                    }
                    if (data.errors['grade']) {
                        _this.errorMessages['grade']['message'] = "error";
                    }
                    if (data.errors['street_address']) {
                        _this.errorMessages['street_address']['message'] = "error";
                    }
                    if (data.errors['city']) {
                        _this.errorMessages['city']['message'] = "error";
                    }
                    if (data.errors['zip']) {
                        _this.errorMessages['zip']['message'] = "error";
                    }
                    if (data.errors['phone']) {
                        _this.errorMessages['phone']['message'] = "error";
                    }
                    if (data.errors['guardian1_name']) {
                        _this.errorMessages['guardian1_name']['message'] = "error";
                    }
                    if (data.errors['guardian1_email']) {
                        _this.errorMessages['guardian1_email']['message'] = "error";
                    }
                    if (data.errors['guardian1_cell']) {
                        _this.errorMessages['guardian1_cell']['message'] = "error";
                    }
                    if (data.errors['guardian2_name']) {
                        _this.errorMessages['guardian2_name']['message'] = "error";
                    }
                    if (data.errors['guardian2_email']) {
                        _this.errorMessages['guardian2_email']['message'] = "error";
                    }
                    if (data.errors['guardian2_cell']) {
                        _this.errorMessages['guardian2_cell']['message'] = "error";
                    }
                    if (data.errors['e_contact1_name']) {
                        _this.errorMessages['e_contact1_name']['message'] = "error";
                    }
                    if (data.errors['e_contact1_relation']) {
                        _this.errorMessages['e_contact1_relation']['message'] = "error";
                    }
                    if (data.errors['e_contact1_phone']) {
                        _this.errorMessages['e_contact1_phone']['message'] = "error";
                    }
                    if (data.errors['school']) {
                        _this.errorMessages['school']['message'] = "error";
                    }
                }
                else {
                    _this.ngOnInit();
                }
            });
        }
    };
    UserStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-students',
            template: __webpack_require__(/*! ./user-students.component.html */ "./src/app/user-students/user-students.component.html"),
            styles: [__webpack_require__(/*! ./user-students.component.css */ "./src/app/user-students/user-students.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], UserStudentsComponent);
    return UserStudentsComponent;
}());

;


/***/ }),

/***/ "./src/app/user-tuition/user-tuition.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-tuition/user-tuition.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\r\n    margin-bottom: 15px;\r\n}\r\n#tuition-box{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci10dWl0aW9uL3VzZXItdHVpdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC91c2VyLXR1aXRpb24vdXNlci10dWl0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNntcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuI3R1aXRpb24tYm94e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-tuition/user-tuition.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-tuition/user-tuition.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngFor=\"let tuit of tuition\" class=\"col-md-6\" id=\"tuition-box\">\r\n    <div class=\"card\">\r\n      <h5 class=\"card-header\">{{tuit.session}}</h5>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{tuit.year}}</h5>\r\n        <p class=\"card-text\">{{tuit.line1}}</p>\r\n        <p class=\"card-text\">{{tuit.line2}}</p>\r\n        <p class=\"card-text\">{{tuit.line3}}</p>\r\n        <p class=\"card-text\">{{tuit.line4}}</p>\r\n        <p class=\"card-text\">{{tuit.line5}}</p>\r\n        <p class=\"card-text\">{{tuit.line6}}</p>\r\n        <p class=\"card-text\">{{tuit.line7}}</p>\r\n        <p class=\"card-text\">{{tuit.line8}}</p>\r\n        <p class=\"card-text\">{{tuit.line9}}</p>\r\n        <p class=\"card-text\">{{tuit.line10}}</p>\r\n        <p class=\"card-text\">{{tuit.line11}}</p>\r\n        <p class=\"card-text\">{{tuit.line12}}</p>\r\n        <p class=\"card-text\">{{tuit.line13}}</p>\r\n        <p class=\"card-text\">{{tuit.line14}}</p>\r\n        <p class=\"card-text\">{{tuit.line15}}</p>\r\n        <p class=\"card-text\">{{tuit.line16}}</p>\r\n        <p class=\"card-text\">{{tuit.line17}}</p>\r\n        <p class=\"card-text\">{{tuit.line18}}</p>\r\n        <p class=\"card-text\">{{tuit.line19}}</p>\r\n        <p class=\"card-text\">{{tuit.line20}}</p>\r\n        <p class=\"card-text\">{{tuit.line21}}</p>\r\n        <p class=\"card-text\">{{tuit.line22}}</p>\r\n        <p class=\"card-text\">{{tuit.line23}}</p>\r\n        <p class=\"card-text\">{{tuit.line24}}</p>\r\n        <p class=\"card-text\">{{tuit.line25}}</p>\r\n        <p class=\"card-text\">{{tuit.line26}}</p>\r\n        <p class=\"card-text\">{{tuit.line27}}</p>\r\n        <p class=\"card-text\">{{tuit.line28}}</p>\r\n        <p class=\"card-text\">{{tuit.line29}}</p>\r\n        <p class=\"card-text\">{{tuit.line30}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card text-white bg-info rounded-0\">\r\n    <div class=\"card-header\">\r\n      Policies\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h6 *ngFor=\"let policy of allPolicy\">{{policy.line1}}</h6>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-tuition/user-tuition.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-tuition/user-tuition.component.ts ***!
  \********************************************************/
/*! exports provided: UserTuitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTuitionComponent", function() { return UserTuitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var UserTuitionComponent = /** @class */ (function () {
    function UserTuitionComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
    }
    UserTuitionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observ = this._httpService.getAllTuition();
        observ.subscribe(function (data) {
            _this.tuition = data;
        });
        var policyObserv = this._httpService.getPolicy();
        policyObserv.subscribe(function (data) {
            _this.allPolicy = data;
        });
    };
    UserTuitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-tuition',
            template: __webpack_require__(/*! ./user-tuition.component.html */ "./src/app/user-tuition/user-tuition.component.html"),
            styles: [__webpack_require__(/*! ./user-tuition.component.css */ "./src/app/user-tuition/user-tuition.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], UserTuitionComponent);
    return UserTuitionComponent;
}());



/***/ }),

/***/ "./src/app/userstudentshow/userstudentshow.component.css":
/*!***************************************************************!*\
  !*** ./src/app/userstudentshow/userstudentshow.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#studentInfo{\r\n    border: 1px solid black;\r\n    padding: 5px;\r\n}\r\n.fontUp{\r\n    font-size: 1.2em;\r\n    margin-bottom: 3px;\r\n}\r\n#title{\r\n    margin-bottom: 1px;\r\n}\r\n.e_contact{\r\n    margin-bottom: 3px;\r\n}\r\n#left{\r\n    display: inline-block;\r\n    width: 40%;\r\n    vertical-align: top;\r\n}\r\n#right{\r\n    display: inline-block;\r\n    width: 40%;\r\n    vertical-align: top;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnN0dWRlbnRzaG93L3VzZXJzdHVkZW50c2hvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC91c2Vyc3R1ZGVudHNob3cvdXNlcnN0dWRlbnRzaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3R1ZGVudEluZm97XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZm9udFVwe1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4jdGl0bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuLmVfY29udGFjdHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4jbGVmdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbiNyaWdodHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/userstudentshow/userstudentshow.component.html":
/*!****************************************************************!*\
  !*** ./src/app/userstudentshow/userstudentshow.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div id='studentInfo'>\r\n    <div id=\"left\">\r\n      <h2 id=\"title\">Student Info</h2>\r\n      <h4>{{student.f_name}} {{student.l_name}}</h4>\r\n      <p class=\"fontUp\">School: {{student.school}}</p>\r\n      <p class=\"fontUp\">Grade: {{student.grade}}</p>\r\n    </div>\r\n    <div id=\"right\">\r\n      <table class=\"table table-striped\">\r\n          <thead>\r\n            <th>Allergy Type</th>\r\n            <th>Severity</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let allergy of dballergy\">\r\n              <td>{{allergy.type}}</td>\r\n              <td>{{allergy.severity}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n  </div>\r\n  <form (submit)=\"onSubmit()\">\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"allergy\">Allergy</label>\r\n            <input [(ngModel)]=\"allergy.type\" name=\"allergy.type\" type=\"text\" class=\"form-control\" id=\"allergy\" aria-describedby=\"allergy\" placeholder=\"Peanut\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"allergySelect\">Severity</label>\r\n            <select [(ngModel)]=\"allergy.severity\" name=\"allergy.severity\" class=\"form-control\" id=\"allergySelect\">\r\n                <option value=\"Potentially Fatal\">Potentially Fatal</option>\r\n                <option value=\"Damaging to Health\">Damaging to Health</option>\r\n                <option value=\"Inconvenient\">Inconvenient</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"form-group\">\r\n              <label for=\"allergyBtn\">Add Allergy</label>\r\n              <button type=\"submit\" class=\"btn btn-primary form-control\" id=\"allergyBtn\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <hr>\r\n      <form (submit)=\"onEdit()\">\r\n        <div class=\"form-row\">\r\n            <div class='col-md-3 col-sm-12'>\r\n              <div class=\"form-group\">\r\n                <label for=\"f_name\">First Name</label>\r\n                <input [(ngModel)]=\"student.f_name\" name=\"student.f_name\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\" placeholder=\"John\">\r\n              </div>\r\n            </div>\r\n            <div class='col-md-3 col-sm-12'>\r\n              <div class=\"form-group\">\r\n                <label for=\"l_name\">Last Name</label>\r\n                <input [(ngModel)]=\"student.l_name\" name=\"student.l_name\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\" placeholder=\"Doe\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"gradeSelect\">Grade</label>\r\n                <select [(ngModel)]=\"student.grade\" name=\"student.grade\" class=\"form-control\" id=\"gradeSelect\">\r\n                  <option value=\"1st\">1st</option>\r\n                  <option value=\"2nd\">2nd</option>\r\n                  <option value=\"3rd\">3rd</option>\r\n                  <option value=\"4th\">4th</option>\r\n                  <option value=\"5th\">5th</option>\r\n                  <option value=\"6th\">6th</option>\r\n                  <option value=\"7th\">7th</option>\r\n                  <option value=\"8th\">8th</option>\r\n                  <option value=\"9th\">9th</option>\r\n                  <option value=\"10th\">10th</option>\r\n                  <option value=\"11th\">11th</option>\r\n                  <option value=\"12th\">12th</option>              \r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-12\">\r\n              <label for=\"updateBtn\">Edit Information</label>\r\n              <button type=\"submit\" class=\"btn btn-primary form-control\" id=\"updateBtn\">Update</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-9 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"street_address\">Address</label>\r\n                <input [(ngModel)]=\"student.street_address\" name=\"student.street_address\" type=\"text\" class=\"form-control\" id=\"street_address\" aria-describedby=\"street_address\" placeholder=\"1315 Fair Oaks Ave.\">\r\n                <small *ngIf=\"errorMessages['street_address']['message'] == 'error' \" id=\"street_address\" class=\"form-text text-danger\">Invalid Street Address</small>          \r\n              </div>\r\n            </div>\r\n            <div class='col-md-3 col-sm-12'>\r\n              <div class=\"form-group\">\r\n                <label for=\"student.school\">School</label>\r\n                <input [(ngModel)]=\"student.school\" name=\"student.school\" type=\"text\" class=\"form-control\" id=\"school\" aria-describedby=\"school\">\r\n                <small *ngIf=\"errorMessages['school']['message'] == 'error' \" id=\"school\" class=\"form-text text-danger\">Require School</small>            \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"city\">City</label>\r\n              <input [(ngModel)]=\"student.city\" name=\"student.city\" type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"South Pasadena\">\r\n              <small *ngIf=\"errorMessages['city']['message'] == 'error' \" id=\"city\" class=\"form-text text-danger\">Invalid City</small>          \r\n            </div>\r\n            <div class=\"form-group col-md-2\">\r\n                <label for=\"zip\">Zip</label>\r\n                <input [(ngModel)]=\"student.zip\" name=\"student.zip\" type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"91030\">\r\n                <small *ngIf=\"errorMessages['zip']['message'] == 'error' \" id=\"zip\" class=\"form-text text-danger\">Invalid Zip Code</small>\r\n              </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label for=\"phone\">Home Phone</label>\r\n              <input [(ngModel)]=\"student.phone\" name=\"student.phone\" type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\" placeholder=\"626-799-2654\">\r\n              <small *ngIf=\"errorMessages['phone']['message'] == 'error' \" id=\"phone\" class=\"form-text text-danger\">Invalid Phone Number</small>            \r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.guardian1_name\">Mother/Guardian</label>\r\n                <input [(ngModel)]=\"student.guardian1_name\" name=\"student.guardian1_name\" type=\"text\" class=\"form-control\" id=\"student.guardian1_name\" aria-describedby=\"guardian1_name\">\r\n                <small *ngIf=\"errorMessages['guardian1_name']['message'] == 'error' \" id=\"guardian1_name\" class=\"form-text text-danger\">Requires Name</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.guardian1_email\">Email</label>\r\n                <input [(ngModel)]=\"student.guardian1_email\" name=\"student.guardian1_email\" type=\"text\" class=\"form-control\" id=\"student.guardian1_email\" aria-describedby=\"guardian1_email\">\r\n                <small *ngIf=\"errorMessages['guardian1_email']['message'] == 'error' \" id=\"guardian1_email\" class=\"form-text text-danger\">Requires Email</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.guardian1_cell\">Cell</label>\r\n                <input [(ngModel)]=\"student.guardian1_cell\" name=\"student.guardian1_cell\" type=\"text\" class=\"form-control\" id=\"student.guardian1_cell\" aria-describedby=\"guardian1_cell\">\r\n                <small *ngIf=\"errorMessages['guardian1_cell']['message'] == 'error' \" id=\"guardian1_cell\" class=\"form-text text-danger\">Requires Email</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.guardian2_name\">Father/Guardian</label>\r\n                <input [(ngModel)]=\"student.guardian2_name\" name=\"student.guardian2_name\" type=\"text\" class=\"form-control\" id=\"student.guardian2_name\" aria-describedby=\"guardian2_name\">\r\n                <small *ngIf=\"errorMessages['guardian2_name']['message'] == 'error' \" id=\"guardian2_name\" class=\"form-text text-danger\">Requires Name</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.guardian2_email\">Email</label>\r\n                <input [(ngModel)]=\"student.guardian2_email\" name=\"student.guardian2_email\" type=\"text\" class=\"form-control\" id=\"student.guardian2_email\" aria-describedby=\"guardian2_email\">\r\n                <small *ngIf=\"errorMessages['guardian2_email']['message'] == 'error' \" id=\"guardian2_email\" class=\"form-text text-danger\">Requires Email</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.guardian2_cell\">Cell</label>\r\n                <input [(ngModel)]=\"student.guardian2_cell\" name=\"student.guardian2_cell\" type=\"text\" class=\"form-control\" id=\"student.guardian2_cell\" aria-describedby=\"guardian2_cell\">\r\n                <small *ngIf=\"errorMessages['guardian2_cell']['message'] == 'error' \" id=\"guardian2_cell\" class=\"form-text text-danger\">Requires Email</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.e_contact1_name\">Emergency Contact(Required)</label>\r\n                <input [(ngModel)]=\"student.e_contact1_name\" name=\"student.e_contact1_name\" type=\"text\" class=\"form-control\" id=\"e_contact1_name\" aria-describedby=\"e_contact1_name\">\r\n                <small *ngIf=\"errorMessages['e_contact1_name']['message'] == 'error' \" id=\"e_contact1_name\" class=\"form-text text-danger\">Requires Name</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.e_contact1_relation\">Relation</label>\r\n                <input [(ngModel)]=\"student.e_contact1_relation\" name=\"student.e_contact1_relation\" type=\"text\" class=\"form-control\" id=\"e_contact1_relation\" aria-describedby=\"e_contact1_relation\">\r\n                <small *ngIf=\"errorMessages['e_contact1_relation']['message'] == 'error' \" id=\"e_contact1_relation\" class=\"form-text text-danger\">Requires Relation</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.e_contact1_phone\">Phone</label>\r\n                <input [(ngModel)]=\"student.e_contact1_phone\" name=\"student.e_contact1_phone\" type=\"text\" class=\"form-control\" id=\"e_contact1_phone\" aria-describedby=\"e_contact1_phone\">\r\n                <small *ngIf=\"errorMessages['e_contact1_phone']['message'] == 'error' \" id=\"e_contact1_phone\" class=\"form-text text-danger\">Requires Phone</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.e_contact2_name\">Emergency Contact(Optional)</label>\r\n                <input [(ngModel)]=\"student.e_contact2_name\" name=\"student.e_contact2_name\" type=\"text\" class=\"form-control\" id=\"e_contact2_name\" aria-describedby=\"e_contact2_name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.e_contact2_relation\">Relation</label>\r\n                <input [(ngModel)]=\"student.e_contact2_relation\" name=\"student.e_contact2_relation\" type=\"text\" class=\"form-control\" id=\"e_contact2_relation\" aria-describedby=\"e_contact2_relation\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"student.e_contact2_phone\">Phone</label>\r\n                <input [(ngModel)]=\"student.e_contact2_phone\" name=\"student.e_contact2_phone\" type=\"text\" class=\"form-control\" id=\"e_contact2_phone\" aria-describedby=\"e_contact2_phone\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n</div>"

/***/ }),

/***/ "./src/app/userstudentshow/userstudentshow.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/userstudentshow/userstudentshow.component.ts ***!
  \**************************************************************/
/*! exports provided: UserstudentshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserstudentshowComponent", function() { return UserstudentshowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var UserstudentshowComponent = /** @class */ (function () {
    function UserstudentshowComponent(_httpService, _router, storage, activatedRoute) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.student = {
            f_name: "",
            l_name: "",
            grade: "",
            parent_id: "",
            street_address: "",
            city: "",
            zip: "",
            phone: "",
            guardian1_name: "",
            guardian1_email: "",
            guardian1_cell: "",
            guardian2_name: "",
            guardian2_email: "",
            guardian2_cell: "",
            e_contact1_name: "",
            e_contact1_relation: "",
            e_contact1_phone: "",
            e_contact2_name: "",
            e_contact2_relation: "",
            e_contact2_phone: "",
            school: ""
        };
        this.allergy = {
            type: "",
            severity: ""
        };
        this.errorMessages = {
            f_name: { message: "" },
            l_name: { message: "" },
            grade: { message: "" },
            street_address: { message: "" },
            city: { message: "" },
            zip: { message: "" },
            phone: { message: "" },
            guardian1_name: { message: "" },
            guardian1_email: { message: "" },
            guardian1_cell: { message: "" },
            guardian2_name: { message: "" },
            guardian2_email: { message: "" },
            guardian2_cell: { message: "" },
            e_contact1_name: { message: "" },
            e_contact1_relation: { message: "" },
            e_contact1_phone: { message: "" },
            school: { message: "" },
        };
        this.dballergy = [];
    }
    UserstudentshowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.studentID = params['id'];
            var observ = _this._httpService.getStudent(_this.studentID);
            observ.subscribe(function (data) {
                console.log("Grabbed student:", data);
                _this.student = data;
                _this.dballergy = data.allergies;
            });
        });
    };
    UserstudentshowComponent.prototype.onEdit = function () {
        var _this = this;
        var observ = this._httpService.updateStudent(this.storage.get('uid'), this.student);
        observ.subscribe(function (data) {
            console.log("onEdit returned: ", data);
            if (data.errors) {
                if (data.errors['f_name']) {
                    _this.errorMessages['f_name']['message'] = "error";
                }
                if (data.errors['l_name']) {
                    _this.errorMessages['l_name']['message'] = "error";
                }
                if (data.errors['grade']) {
                    _this.errorMessages['grade']['message'] = "error";
                }
                if (data.errors['street_address']) {
                    _this.errorMessages['street_address']['message'] = "error";
                }
                if (data.errors['city']) {
                    _this.errorMessages['city']['message'] = "error";
                }
                if (data.errors['zip']) {
                    _this.errorMessages['zip']['message'] = "error";
                }
                if (data.errors['phone']) {
                    _this.errorMessages['phone']['message'] = "error";
                }
                if (data.errors['guardian1_name']) {
                    _this.errorMessages['guardian1_name']['message'] = "error";
                }
                if (data.errors['guardian1_email']) {
                    _this.errorMessages['guardian1_email']['message'] = "error";
                }
                if (data.errors['guardian1_cell']) {
                    _this.errorMessages['guardian1_cell']['message'] = "error";
                }
                if (data.errors['guardian2_name']) {
                    _this.errorMessages['guardian2_name']['message'] = "error";
                }
                if (data.errors['guardian2_email']) {
                    _this.errorMessages['guardian2_email']['message'] = "error";
                }
                if (data.errors['guardian2_cell']) {
                    _this.errorMessages['guardian2_cell']['message'] = "error";
                }
                if (data.errors['e_contact1_name']) {
                    _this.errorMessages['e_contact1_name']['message'] = "error";
                }
                if (data.errors['e_contact1_relation']) {
                    _this.errorMessages['e_contact1_relation']['message'] = "error";
                }
                if (data.errors['e_contact1_phone']) {
                    _this.errorMessages['e_contact1_phone']['message'] = "error";
                }
                if (data.errors['school']) {
                    _this.errorMessages['school']['message'] = "error";
                }
            }
        });
    };
    ;
    UserstudentshowComponent.prototype.onSubmit = function () {
        var _this = this;
        var observ = this._httpService.createAllergy(this.studentID, this.allergy);
        observ.subscribe(function (data) {
            var observ = _this._httpService.getStudent(_this.studentID);
            observ.subscribe(function (data) {
                _this.ngOnInit();
                _this.allergy = {
                    type: "",
                    severity: ""
                };
                _this.dballergy = [];
                _this.dballergy = data.allergies;
            });
        });
    };
    ;
    UserstudentshowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userstudentshow',
            template: __webpack_require__(/*! ./userstudentshow.component.html */ "./src/app/userstudentshow/userstudentshow.component.html"),
            styles: [__webpack_require__(/*! ./userstudentshow.component.css */ "./src/app/userstudentshow/userstudentshow.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserstudentshowComponent);
    return UserstudentshowComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Edward Im\Desktop\MEAN_projects\le_site\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map