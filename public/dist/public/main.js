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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-pills card-header-pills\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <h1>{{class.title}}</h1>\n      <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\">\n        DELETE THIS CLASS\n      </button>\n      <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure you want to delete this class?</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              Deleting this class cannot be undone\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">CLOSE</button>\n              <button (click)=\"deleteClass()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">DELETE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div id=\"applied\">\n        <h3>Waitlist</h3>\n        <table class=\"table table-striped table-bordered\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Student</th>\n              <th scope=\"col\">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let student of applied\">\n              <td>{{student.f_name}} {{student.l_name}}</td>\n              <button (click)=\"onClick(student)\" class=\"btn btn-success\">Accept</button>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div id=\"accepted\">\n        <h3>Enrolled</h3>\n        <table class=\"table table-striped table-bordered\">\n          <thead>\n            <th scope=\"scoped\">Student</th>\n            <th scope=\"scoped\">Action</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let student of accepted\">\n              <td>{{student.f_name}} {{student.l_name}}</td>\n              <button (click)=\"onUnenroll(student)\" class=\"btn btn-warning\">Unenroll</button>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n</body>\n</html>"

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
            capcity: 0
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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-pills card-header-pills\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"row\">\n            <div class='col'>\n              <div class=\"form-group\">\n                <label for=\"class.title\">Class Title</label>\n                <input [(ngModel)]=\"class.title\" name=\"class.title\" type=\"text\" class=\"form-control\" id=\"class.title\" aria-describedby=\"class.title\" placeholder=\"Class Title\">\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"class.grade\">Grade</label>\n                <select [(ngModel)]=\"class.grade\" name=\"class.grade\" class=\"form-control\" id=\"class.grade\">\n                  <option value=\"1st\">1st</option>\n                  <option value=\"2nd\">2nd</option>\n                  <option value=\"3rd\">3rd</option>\n                  <option value=\"4th\">4th</option>\n                  <option value=\"5th\">5th</option>\n                  <option value=\"6th\">6th</option>\n                  <option value=\"7th\">7th</option>\n                  <option value=\"8th\">8th</option>\n                  <option value=\"9th\">9th</option>\n                  <option value=\"10th\">10th</option>\n                  <option value=\"11th\">11th</option>\n                  <option value=\"12th\">12th</option>              \n                </select>\n              </div>\n            </div>\n            <div class='col'>\n              <div class=\"form-group\">\n                <label for=\"student.l_name\">Capacity</label>\n                <input [(ngModel)]=\"class.capacity\" name=\"class.capacity\" type=\"number\" class=\"form-control\" id=\"class.capacity\" aria-describedby=\"class.capacity\">\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"submitBtn\">Create Class</button>\n        </form>\n        <div id=\"class-list\">\n          <h1>Currently Available Classes</h1>\n          <table class=\"table\">\n            <thead>\n              <th>Class Title</th>\n              <th>Grade</th>\n              <th>Capacity</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let class of allClass\">\n                <td>\n                  <a [routerLink]=\"['/admin/class', class._id]\">{{class.title}}</a>\n                </td>\n                <td>{{class.grade}}</td>\n                <td>{{class.capacity}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n    </div>    \n</body>\n</html>"

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
            capacity: 0
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
                capacity: 0
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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <br>\n      <form (submit)=\"onSubmit()\">\n        <div class=\"input-group mb-3\">\n          <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" aria-describedby=\"button-addon2\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"submit\" id=\"button-addon2\">Login</button>\n          </div>\n        </div>\n      </form>\n    </div>    \n</body>\n</html>"

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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-pills card-header-pills\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <h1>Manage pictures for front page</h1>\n      <div>\n        <br>\n        <div class=\"custom-file\">\n          <input (change)=\"frontPage($event)\" type=\"file\" class=\"custom-file-input\" id=\"upfile\" name=\"upfile\">\n          <label class=\"custom-file-label\" for=\"upfile\">Choose file</label>\n        </div>\n        <div>\n          <table>\n            <tbody>\n              <tr *ngFor=\"let pic of frontPics\">\n                <td>\n                  <h6>{{pic.fileName}}</h6>\n                  <img src=\"{{pic.filePath}}\" alt=\"No Image\" class=\"picbox\">\n                  <button (click)=\"deletePic(pic._id)\" class=\"btn btn-danger\">Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <br>\n      <hr>\n      <br>\n      <div id=\"gallery\">\n        <h1>Manage pictures for gallery page</h1>\n        <div class=\"custom-file\">\n          <input (change)=\"galleryPage($event)\" type=\"file\" class=\"custom-file-input\" id=\"upfile\" name=\"upfile\">\n          <label class=\"custom-file-label\" for=\"upfile\">Choose file</label>\n        </div>\n        <div>\n          <table>\n            <tbody>\n              <tr *ngFor=\"let pic of galleryPics\">\n                <td>\n                  <h6>{{pic.fileName}}</h6>\n                  <img src=\"{{pic.filePath}}\" alt=\"No Image\" class=\"picbox\">\n                  <button (click)=\"deletePic(pic._id)\" class=\"btn btn-danger\">Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>    \n</body>\n</html>"

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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-pills card-header-pills\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div id='studentInfo'>\n        <div id=\"left\">\n          <h2>{{student.f_name}} {{student.l_name}}</h2>\n          <p class=\"fontUp\"><span>School:</span> {{student.school}}</p>\n          <p class=\"fontUp\"><span>Grade:</span> {{student.grade}}</p>\n          <p class=\"fontUp\"><span>Home Address:</span> {{parent.street_address}} {{parent.city}}, {{parent.zip}}</p>\n          <br>\n          <p class=\"fontUp\"><span>Guardian:</span> {{parent.f_name}} {{parent.l_name}}</p>\n          <p class=\"fontUp\"><span>Contact Info:</span> {{parent.phone}} // {{parent.email}}</p>\n\n          <h3>Emergency Contact</h3>\n          <p class=\"e_contact\"><span>Name:</span> {{student.e_contact1_name}}</p>\n          <p class=\"e_contact\"><span>Relation:</span> {{student.e_contact1_relation}}</p>\n          <p class=\"e_contact\"><span>Contact:</span> {{student.e_contact1_phone}}</p>\n          <br>\n          <p class=\"e_contact\" [hidden]=\"!student.e_contact2_name\"><span>Name:</span> {{student.e_contact2_name}}</p>\n          <p class=\"e_contact\" [hidden]=\"!student.e_contact2_relation\"><span>Relation:</span> {{student.e_contact2_relation}}</p>\n          <p class=\"e_contact\" [hidden]=\"!student.e_contact2_phone\"><span>Contact:</span> {{student.e_contact2_phone}}</p>\n\n          <textarea [(ngModel)]=\"student.notes\" name=\"student.notes\" cols=\"50\" rows=\"10\">{{student.notes}}</textarea>\n          <button (click)=\"updateNotes()\" class=\"btn btn-primary\">Update Notes</button>\n        </div>\n        <div id=\"right\">\n          <table class=\"table table-striped\">\n              <thead>\n                <th>Allergy Type</th>\n                <th>Severity</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let allergy of dballergy\">\n                  <td>{{allergy.type}}</td>\n                  <td>{{allergy.severity}}</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n      <hr>\n        <form (submit)=\"onEdit()\">\n          <div class=\"form-row\">\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"gradeSelect\">Grade</label>\n                <select [(ngModel)]=\"student.grade\" name=\"student.grade\" class=\"form-control\" id=\"gradeSelect\">\n                  <option value=\"1st\">1st</option>\n                  <option value=\"2nd\">2nd</option>\n                  <option value=\"3rd\">3rd</option>\n                  <option value=\"4th\">4th</option>\n                  <option value=\"5th\">5th</option>\n                  <option value=\"6th\">6th</option>\n                  <option value=\"7th\">7th</option>\n                  <option value=\"8th\">8th</option>\n                  <option value=\"9th\">9th</option>\n                  <option value=\"10th\">10th</option>\n                  <option value=\"11th\">11th</option>\n                  <option value=\"12th\">12th</option>              \n                </select>\n                <!-- <small *ngIf=\"errorMessages['grade']['message'] == 'error' \" class=\"form-text text-danger\">Invalid Grade</small>             -->\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <label for=\"updateBtn\">Edit Information</label>\n              <button type=\"submit\" class=\"btn btn-primary form-control\" id=\"updateBtn\">Submit</button>\n            </div>\n          </div>\n        </form>\n    </div>    \n</body>\n</html>"

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
        this.parent = {
            city: "",
            email: "",
            f_name: "",
            l_name: "",
            street_address: "",
            phone: "",
            zip: ""
        };
        this.student = {
            _id: "",
            f_name: "",
            l_name: "",
            grade: "",
            parent_id: "",
            notes: ""
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
                var parent = _this._httpService.getParent(_this.student.parent_id);
                parent.subscribe(function (data) {
                    _this.parent = data[0];
                });
            });
        });
    };
    ;
    AdminStudentShowComponent.prototype.onEdit = function () {
        var observ = this._httpService.updateStudentOnly(this.student._id, this.student);
        observ.subscribe(function (data) {
        });
    };
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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-pills card-header-pills\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <form (submit)=\"searchFirst()\">\n            <div class='row'>\n              <div class='col'>\n                <div class=\"form-group\">\n                  <label for=\"f_name\">First Name</label>\n                  <input [(ngModel)]=\"f_name_txt\" name=\"f_name_txt\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\" placeholder=\"John\">\n                </div>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" id=\"submitBtn\">Search by First Name</button>\n          </form>\n        </div>\n        <div class=\"col\">\n          <form (submit)=\"searchLast()\">\n            <div class=\"row\">\n              <div class='col'>\n                <div class=\"form-group\">\n                  <label for=\"l_name\">Last Name</label>\n                  <input [(ngModel)]=\"l_name_txt\" name=\"l_name_txt\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\" placeholder=\"Doe\">\n                </div>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" id=\"submitBtn\">Search by Last Name</button>\n          </form>\n        </div>\n      </div>\n\n      <div id=\"studentList\">\n        <h3>List of Students</h3>\n        <table class=\"table\">\n          <thead>\n            <th>Name</th>\n            <th>Grade</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let student of student_list\">\n              <th>\n                <a [routerLink]=\"['/admin/students', student._id]\">{{student.f_name}} {{student.l_name}}</a>\n              </th>\n              <th>{{student.grade}}</th>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      \n    </div>    \n</body>\n</html>"

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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-pills card-header-pills\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/students']\">Student List</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pictures']\">Upload Picture</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/tuition']\">Tuition</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <form (submit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <label for=\"tuition.session\">Session Type</label>\n            <input [(ngModel)]=\"tuition.session\" name=\"tuition.session\" type=\"text\" class=\"form-control\" id=\"tuition.session\" aria-describedby=\"tuition.session\">\n          </div>\n          <div class=\"col-md-6\">\n            <label for=\"tuition.year\">Year</label>\n            <input [(ngModel)]=\"tuition.year\" name=\"tuition.year\" type=\"text\" class=\"form-control\" id=\"tuition.year\" aria-describedby=\"tuition.year\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line1\" name=\"tuition.line1\" type=\"text\" class=\"form-control\" id=\"tuition.line1\" aria-describedby=\"tuition.line1\" placeholder=\"Line 1\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line2\" name=\"tuition.line2\" type=\"text\" class=\"form-control\" id=\"tuition.line2\" aria-describedby=\"tuition.line2\" placeholder=\"Line 2\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line3\" name=\"tuition.line3\" type=\"text\" class=\"form-control\" id=\"tuition.line3\" aria-describedby=\"tuition.line3\" placeholder=\"Line 3\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line4\" name=\"tuition.line4\" type=\"text\" class=\"form-control\" id=\"tuition.line4\" aria-describedby=\"tuition.line4\" placeholder=\"Line 4\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line5\" name=\"tuition.line5\" type=\"text\" class=\"form-control\" id=\"tuition.line5\" aria-describedby=\"tuition.line5\" placeholder=\"Line 5\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line6\" name=\"tuition.line6\" type=\"text\" class=\"form-control\" id=\"tuition.line6\" aria-describedby=\"tuition.line6\" placeholder=\"Line 6\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line7\" name=\"tuition.line7\" type=\"text\" class=\"form-control\" id=\"tuition.line7\" aria-describedby=\"tuition.line7\" placeholder=\"Line 7\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line8\" name=\"tuition.line8\" type=\"text\" class=\"form-control\" id=\"tuition.line8\" aria-describedby=\"tuition.line8\" placeholder=\"Line 8\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line9\" name=\"tuition.line9\" type=\"text\" class=\"form-control\" id=\"tuition.line9\" aria-describedby=\"tuition.line9\" placeholder=\"Line 9\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line10\" name=\"tuition.line10\" type=\"text\" class=\"form-control\" id=\"tuition.line10\" aria-describedby=\"tuition.line10\" placeholder=\"Line 10\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line11\" name=\"tuition.line11\" type=\"text\" class=\"form-control\" id=\"tuition.line11\" aria-describedby=\"tuition.line11\" placeholder=\"Line 11\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line12\" name=\"tuition.line12\" type=\"text\" class=\"form-control\" id=\"tuition.line12\" aria-describedby=\"tuition.line12\" placeholder=\"Line 12\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line13\" name=\"tuition.line13\" type=\"text\" class=\"form-control\" id=\"tuition.line13\" aria-describedby=\"tuition.line13\" placeholder=\"Line 13\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line14\" name=\"tuition.line14\" type=\"text\" class=\"form-control\" id=\"tuition.line14\" aria-describedby=\"tuition.line14\" placeholder=\"Line 14\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line15\" name=\"tuition.line15\" type=\"text\" class=\"form-control\" id=\"tuition.line15\" aria-describedby=\"tuition.line15\" placeholder=\"Line 15\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line16\" name=\"tuition.line16\" type=\"text\" class=\"form-control\" id=\"tuition.line16\" aria-describedby=\"tuition.line16\" placeholder=\"Line 16\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line17\" name=\"tuition.line17\" type=\"text\" class=\"form-control\" id=\"tuition.line17\" aria-describedby=\"tuition.line17\" placeholder=\"Line 17\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line18\" name=\"tuition.line18\" type=\"text\" class=\"form-control\" id=\"tuition.line18\" aria-describedby=\"tuition.line18\" placeholder=\"Line 18\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line19\" name=\"tuition.line19\" type=\"text\" class=\"form-control\" id=\"tuition.line19\" aria-describedby=\"tuition.line19\" placeholder=\"Line 19\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line20\" name=\"tuition.line20\" type=\"text\" class=\"form-control\" id=\"tuition.line20\" aria-describedby=\"tuition.line20\" placeholder=\"Line 20\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line21\" name=\"tuition.line21\" type=\"text\" class=\"form-control\" id=\"tuition.line21\" aria-describedby=\"tuition.line21\" placeholder=\"Line 21\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line22\" name=\"tuition.line22\" type=\"text\" class=\"form-control\" id=\"tuition.line22\" aria-describedby=\"tuition.line22\" placeholder=\"Line 22\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line23\" name=\"tuition.line23\" type=\"text\" class=\"form-control\" id=\"tuition.line23\" aria-describedby=\"tuition.line23\" placeholder=\"Line 23\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line24\" name=\"tuition.line24\" type=\"text\" class=\"form-control\" id=\"tuition.line24\" aria-describedby=\"tuition.line24\" placeholder=\"Line 24\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line25\" name=\"tuition.line25\" type=\"text\" class=\"form-control\" id=\"tuition.line25\" aria-describedby=\"tuition.line25\" placeholder=\"Line 25\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line26\" name=\"tuition.line26\" type=\"text\" class=\"form-control\" id=\"tuition.line26\" aria-describedby=\"tuition.line26\" placeholder=\"Line 26\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line27\" name=\"tuition.line27\" type=\"text\" class=\"form-control\" id=\"tuition.line27\" aria-describedby=\"tuition.line27\" placeholder=\"Line 27\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line28\" name=\"tuition.line28\" type=\"text\" class=\"form-control\" id=\"tuition.line28\" aria-describedby=\"tuition.line28\" placeholder=\"Line 28\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line29\" name=\"tuition.line29\" type=\"text\" class=\"form-control\" id=\"tuition.line29\" aria-describedby=\"tuition.line29\" placeholder=\"Line 29\">\n          </div>\n          <div class=\"col-md-6\">\n            <input [(ngModel)]=\"tuition.line30\" name=\"tuition.line30\" type=\"text\" class=\"form-control\" id=\"tuition.line30\" aria-describedby=\"tuition.line30\" placeholder=\"Line 30\">\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"submitBtn\">Create Tuition</button>\n      </form>\n      <div id=\"tuition-box\">\n        <h6 id=\"tuition-heading\">Current Showing for Tuition</h6>\n        <hr>\n        <div class=\"tuit-box\" *ngFor=\"let tuit of allTuition\">\n          <p>{{tuit.session}}</p>\n          <p>{{tuit.year}}</p>\n          <p>{{tuit.line1}}</p>\n          <p>{{tuit.line2}}</p>\n          <p>{{tuit.line3}}</p>\n          <p>{{tuit.line4}}</p>\n          <p>{{tuit.line5}}</p>\n          <p>{{tuit.line6}}</p>\n          <p>{{tuit.line7}}</p>\n          <p>{{tuit.line8}}</p>\n          <p>{{tuit.line9}}</p>\n          <p>{{tuit.line10}}</p>\n          <p>{{tuit.line11}}</p>\n          <p>{{tuit.line12}}</p>\n          <p>{{tuit.line13}}</p>\n          <p>{{tuit.line14}}</p>\n          <p>{{tuit.line15}}</p>\n          <p>{{tuit.line16}}</p>\n          <p>{{tuit.line17}}</p>\n          <p>{{tuit.line18}}</p>\n          <p>{{tuit.line19}}</p>\n          <p>{{tuit.line20}}</p>\n          <p>{{tuit.line21}}</p>\n          <p>{{tuit.line22}}</p>\n          <p>{{tuit.line23}}</p>\n          <p>{{tuit.line24}}</p>\n          <p>{{tuit.line25}}</p>\n          <p>{{tuit.line26}}</p>\n          <p>{{tuit.line27}}</p>\n          <p>{{tuit.line28}}</p>\n          <p>{{tuit.line29}}</p>\n          <p>{{tuit.line30}}</p>\n          <button (click)=\"deleteTuit(tuit._id)\" class=\"btn btn-danger\">Delete</button>      \n        </div>\n      </div>\n    </div>    \n</body>\n</html>"

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_class_user_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-class/user-class.component */ "./src/app/user-class/user-class.component.ts");
/* harmony import */ var _user_show_class_user_show_class_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-show-class/user-show-class.component */ "./src/app/user-show-class/user-show-class.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-register/user-register.component.ts");
/* harmony import */ var _user_tuition_user_tuition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-tuition/user-tuition.component */ "./src/app/user-tuition/user-tuition.component.ts");
/* harmony import */ var _user_schedule_user_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-schedule/user-schedule.component */ "./src/app/user-schedule/user-schedule.component.ts");
/* harmony import */ var _admin_class_admin_class_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-class/admin-class.component */ "./src/app/admin-class/admin-class.component.ts");
/* harmony import */ var _admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-students/admin-students.component */ "./src/app/admin-students/admin-students.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _user_students_user_students_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-students/user-students.component */ "./src/app/user-students/user-students.component.ts");
/* harmony import */ var _userstudentshow_userstudentshow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userstudentshow/userstudentshow.component */ "./src/app/userstudentshow/userstudentshow.component.ts");
/* harmony import */ var _admin_class_show_admin_class_show_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-class-show/admin-class-show.component */ "./src/app/admin-class-show/admin-class-show.component.ts");
/* harmony import */ var _admin_picture_admin_picture_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-picture/admin-picture.component */ "./src/app/admin-picture/admin-picture.component.ts");
/* harmony import */ var _admin_tuition_admin_tuition_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-tuition/admin-tuition.component */ "./src/app/admin-tuition/admin-tuition.component.ts");
/* harmony import */ var _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-gallery/user-gallery.component */ "./src/app/user-gallery/user-gallery.component.ts");
/* harmony import */ var _admin_student_show_admin_student_show_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-student-show/admin-student-show.component */ "./src/app/admin-student-show/admin-student-show.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user-edit/user-edit.component.ts");





















var routes = [
    // ROUTES FOR USERS //
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'class', component: _user_class_user_class_component__WEBPACK_IMPORTED_MODULE_4__["UserClassComponent"] },
    { path: 'class/:id', component: _user_show_class_user_show_class_component__WEBPACK_IMPORTED_MODULE_5__["UserShowClassComponent"] },
    { path: 'registration', component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_6__["UserRegisterComponent"] },
    { path: 'tuition', component: _user_tuition_user_tuition_component__WEBPACK_IMPORTED_MODULE_7__["UserTuitionComponent"] },
    { path: 'schedule', component: _user_schedule_user_schedule_component__WEBPACK_IMPORTED_MODULE_8__["UserScheduleComponent"] },
    { path: 'register/:id', component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"] },
    { path: 'students', component: _user_students_user_students_component__WEBPACK_IMPORTED_MODULE_12__["UserStudentsComponent"] },
    { path: 'students/:id', component: _userstudentshow_userstudentshow_component__WEBPACK_IMPORTED_MODULE_13__["UserstudentshowComponent"] },
    { path: 'gallery', component: _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_17__["UserGalleryComponent"] },
    { path: 'edit', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"] },
    // ROUTES FOR USERS //
    // ROUTES FOR ADMIN //
    { path: 'login', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_19__["AdminLoginComponent"] },
    { path: 'admin', component: _admin_class_admin_class_component__WEBPACK_IMPORTED_MODULE_9__["AdminClassComponent"] },
    { path: 'admin/class/:id', component: _admin_class_show_admin_class_show_component__WEBPACK_IMPORTED_MODULE_14__["AdminClassShowComponent"] },
    { path: 'admin/students', component: _admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_10__["AdminStudentsComponent"] },
    { path: 'admin/students/:id', component: _admin_student_show_admin_student_show_component__WEBPACK_IMPORTED_MODULE_18__["AdminStudentShowComponent"] },
    { path: 'admin/pictures', component: _admin_picture_admin_picture_component__WEBPACK_IMPORTED_MODULE_15__["AdminPictureComponent"] },
    { path: 'admin/tuition', component: _admin_tuition_admin_tuition_component__WEBPACK_IMPORTED_MODULE_16__["AdminTuitionComponent"] },
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

module.exports = "#contact{\r\n    -webkit-text-emphasis: bold;\r\n            text-emphasis: bold;\r\n    color: white;\r\n    padding-left: 15rem;\r\n}\r\n#link{\r\n    color: white;\r\n}\r\n#topjumbo{\r\n    background-color: rgb(254,191,88)\r\n}\r\n.btn-primary-outline{\r\n    background-color: transparent;\r\n    outline:none;\r\n}\r\n#footer{\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n#footer-text{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdHtcclxuICAgIHRleHQtZW1waGFzaXM6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cmVtO1xyXG59XHJcbiNsaW5re1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiN0b3BqdW1ib3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsMTkxLDg4KVxyXG59XHJcbi5idG4tcHJpbWFyeS1vdXRsaW5le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuI2Zvb3RlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI2Zvb3Rlci10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>Home</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n  <div class=\"container-fluid\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item ml-4\">\n                <a class=\"nav-link\" id=\"link\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"nav-item ml-4\">\n                <a class=\"nav-link\" id=\"link\" [routerLink]=\"['/schedule']\">Calendar</a>\n            </li>\n            <li class=\"nav-item ml-4\">\n                <a class=\"nav-link\" id=\"link\" [routerLink]=\"['/tuition']\">Tuition</a>\n            </li>\n            <li class=\"nav-item ml-4\">  \n                <a class=\"nav-link\" id=\"link\" [routerLink]=\"['/class']\">Classes</a>\n            </li>\n            <li class=\"nav-item ml-4\">  \n                <a class=\"nav-link\" id=\"link\" [routerLink]=\"['/gallery']\">Gallery</a>\n            </li>\n            <li class=\"nav-item ml-4\">\n                <div class=\"dropdown\">\n                    <button class=\"btn btn-secondary dropdown-toggle btn-primary-outline\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Parents\n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" [routerLink]=\"['/registration']\">Login</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/students']\">My Students</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/edit']\">Edit Info</a>\n                    </div>\n                </div>\n            </li>\n            <li class=\"nav-item ml-4\">  \n                <a class=\"nav-link\" id=\"link\" [routerLink]=\"['/login']\">ADMIN</a>\n            </li>\n          </ul>\n      </div>\n\n    </nav>\n  </div>\n  <router-outlet></router-outlet>\n    <div class=\"container-fluid\">\n        <div id=\"footer\" class=\"bg-dark\">\n            <h5 id=\"footer-text\">Contact Us: 626-799-2654 Email: LEARNINGEDGE@GMAIL.COM</h5>\n        </div>\n    </div>\n</body>\n</html>\n"

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
        this._router.navigate(['/home']);
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
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _user_students_user_students_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-students/user-students.component */ "./src/app/user-students/user-students.component.ts");
/* harmony import */ var _userstudentshow_userstudentshow_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./userstudentshow/userstudentshow.component */ "./src/app/userstudentshow/userstudentshow.component.ts");
/* harmony import */ var _admin_class_show_admin_class_show_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-class-show/admin-class-show.component */ "./src/app/admin-class-show/admin-class-show.component.ts");
/* harmony import */ var _admin_picture_admin_picture_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-picture/admin-picture.component */ "./src/app/admin-picture/admin-picture.component.ts");
/* harmony import */ var _admin_tuition_admin_tuition_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin-tuition/admin-tuition.component */ "./src/app/admin-tuition/admin-tuition.component.ts");
/* harmony import */ var _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-gallery/user-gallery.component */ "./src/app/user-gallery/user-gallery.component.ts");
/* harmony import */ var _admin_student_show_admin_student_show_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-student-show/admin-student-show.component */ "./src/app/admin-student-show/admin-student-show.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user-edit/user-edit.component.ts");



























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
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_17__["CreateUserComponent"],
                _user_students_user_students_component__WEBPACK_IMPORTED_MODULE_18__["UserStudentsComponent"],
                _userstudentshow_userstudentshow_component__WEBPACK_IMPORTED_MODULE_19__["UserstudentshowComponent"],
                _admin_class_show_admin_class_show_component__WEBPACK_IMPORTED_MODULE_20__["AdminClassShowComponent"],
                _admin_picture_admin_picture_component__WEBPACK_IMPORTED_MODULE_21__["AdminPictureComponent"],
                _admin_tuition_admin_tuition_component__WEBPACK_IMPORTED_MODULE_22__["AdminTuitionComponent"],
                _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_23__["UserGalleryComponent"],
                _admin_student_show_admin_student_show_component__WEBPACK_IMPORTED_MODULE_24__["AdminStudentShowComponent"],
                _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_25__["AdminLoginComponent"],
                _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_26__["UserEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["StorageServiceModule"]
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

/***/ "./src/app/create-user/create-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-user/create-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#submitBtn{\r\n    background: rgb(73,144,226);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3VibWl0QnRue1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDczLDE0NCwyMjYpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/create-user/create-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-user/create-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <h3>We need some basic information</h3>\n      <form (submit)=\"onSubmit()\">\n      <div class='row'>\n        <div class='col'>\n          <div class=\"form-group\">\n            <label for=\"f_name\">First Name</label>\n            <input [(ngModel)]=\"user.f_name\" name=\"user.f_name\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\" placeholder=\"John\">\n            <small *ngIf=\"errorMessages['f_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid First Name</small>\n          </div>\n        </div>\n        <div class='col'>\n          <div class=\"form-group\">\n            <label for=\"l_name\">Last Name</label>\n            <input [(ngModel)]=\"user.l_name\" name=\"user.l_name\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\" placeholder=\"Doe\">\n            <small *ngIf=\"errorMessages['l_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid Last Name</small>            \n          </div>\n        </div>\n      </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"street_address\">Address</label>\n          <input [(ngModel)]=\"user.street_address\" name=\"user.street_address\" type=\"text\" class=\"form-control\" id=\"street_address\" aria-describedby=\"street_address\" placeholder=\"1315 Fair Oaks Ave.\">\n          <small *ngIf=\"errorMessages['street_address']['message'] == 'error' \" id=\"street_address\" class=\"form-text text-danger\">Invalid Street Address</small>          \n        </div>\n\n\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"city\">City</label>\n            <input [(ngModel)]=\"user.city\" name=\"user.city\" type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"South Pasadena\">\n            <small *ngIf=\"errorMessages['city']['message'] == 'error' \" id=\"city\" class=\"form-text text-danger\">Invalid City</small>          \n          </div>\n          <div class=\"form-group col-md-2\">\n              <label for=\"zip\">Zip</label>\n              <input [(ngModel)]=\"user.zip\" name=\"user.zip\" type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"91030\">\n              <small *ngIf=\"errorMessages['zip']['message'] == 'error' \" id=\"zip\" class=\"form-text text-danger\">Invalid Zip Code</small>\n            </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"phone\">Cell Phone</label>\n            <input [(ngModel)]=\"user.phone\" name=\"user.phone\" type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\" placeholder=\"626-799-2654\">\n            <small *ngIf=\"errorMessages['phone']['message'] == 'error' \" id=\"phone\" class=\"form-text text-danger\">Invalid Phone Number</small>            \n          </div>\n        </div>\n        <br>\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"submitBtn\">Submit</button>\n      </form>\n    </div>    \n</body>\n</html>"

/***/ }),

/***/ "./src/app/create-user/create-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-user/create-user.component.ts ***!
  \******************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.user = {
            uid: "",
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            street_address: "",
            city: "",
            zip: ""
        };
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.errorMessages = {
            f_name: { message: "" },
            l_name: { message: "" },
            city: { message: "" },
            street_address: { message: "" },
            zip: { message: "" },
            phone: { message: "" }
        };
    };
    ;
    CreateUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user.uid = this.storage.get('uid');
        this.user.email = this.storage.get('email');
        var observ = this._httpService.createUser(this.user);
        observ.subscribe(function (data) {
            if (data.errors) {
                _this.errorMessages = {
                    f_name: { message: "" },
                    l_name: { message: "" },
                    city: { message: "" },
                    street_address: { message: "" },
                    zip: { message: "" },
                    phone: { message: "" }
                };
                if (data.errors['f_name']) {
                    _this.errorMessages['f_name']['message'] = "error";
                }
                if (data.errors['l_name']) {
                    _this.errorMessages['l_name']['message'] = "error";
                }
                if (data.errors['phone']) {
                    _this.errorMessages['phone']['message'] = "error";
                }
                if (data.errors['city']) {
                    _this.errorMessages['city']['message'] = "error";
                }
                if (data.errors['street_address']) {
                    _this.errorMessages['street_address']['message'] = "error";
                }
                if (data.errors['zip']) {
                    _this.errorMessages['zip']['message'] = "error";
                }
            }
            else {
                _this._router.navigate(['/students']);
            }
            ;
        });
    };
    ;
    CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/create-user/create-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());

;


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact{\r\n    -webkit-text-emphasis: bold;\r\n            text-emphasis: bold;\r\n    color: white;\r\n    padding-left: 15rem;\r\n}\r\n#navbar{\r\n    background: rgb(73,144,226);\r\n}\r\n#link{\r\n    color: white;\r\n}\r\n#topjumbo{\r\n    background-color: rgb(254,191,88);\r\n    margin-bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDRCQUE0QjtDQUMvQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3R7XHJcbiAgICB0ZXh0LWVtcGhhc2lzOiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXJlbTtcclxufVxyXG4jbmF2YmFye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDczLDE0NCwyMjYpO1xyXG59XHJcbiNsaW5re1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiN0b3BqdW1ib3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsMTkxLDg4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n  <!-- <script src=\"main.js\"></script> -->\n</head>\n<body>\n    <div class=\"container-fluid\">\n        <div class=\"jumbotron p-3\" id=\"topjumbo\">\n            <h1 class=\"display-4\">Welcome to Learning Edge!</h1>\n            <p class=\"lead\">We provide high-tiered secondary education that effectively incorporates proactive teaching to optimize formal education of each student</p>\n            <hr class=\"my-4\">\n            <h6>See our available classes!</h6>\n            <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/class']\" role=\"button\">Learn more</a>\n        </div>\n        <div id=\"carouselMain\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"3000\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"{{firstPic.filePath}}\" alt=\"No Image\">\n              </div>\n              <div *ngFor=\"let pic of allPics\" class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"{{pic.filePath}}\" alt=\"Second slide\">\n              </div>\n            </div>\n\n            <a class=\"carousel-control-prev\" href=\"#carouselMain\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            <a class=\"carousel-control-next\" href=\"#carouselMain\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n\n    </div>\n</body>\n</html>"

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
    function HomeComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
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
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
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
    HttpService.prototype.newUser = function () {
        this._router.navigate(['/register/' + this.storage.get("uid")]);
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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <h1 id=\"classList\">Currently Available Classes</h1>\n      <h3 *ngIf=\"logcheck == false\">You are not logged in. You must login to add students</h3>\n      <div *ngFor=\"let class of allClass\" class=\"col-sm-6 mt-2\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{class.title}}</h5>\n            <p class=\"card-text\">{{class.grade}} Grade</p>\n            <p class=\"card-text\">Capacity: {{class.capacity}} students</p>\n            <a [routerLink]=\"['/class', class._id]\" class=\"btn btn-primary\">Go to Class</a>\n          </div>\n        </div>\n      </div> \n    </div>    \n</body>\n</html>"

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

/***/ "./src/app/user-edit/user-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-edit/user-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <h3 *ngIf=\"update == true\">Your information has been updated</h3>\n      <form (submit)=\"onSubmit()\">\n      <div class='row'>\n        <div class='col'>\n          <div class=\"form-group\">\n            <label for=\"f_name\">First Name</label>\n            <input [(ngModel)]=\"user.f_name\" name=\"user.f_name\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\" placeholder=\"John\">\n            <small *ngIf=\"errorMessages['f_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid First Name</small>\n          </div>\n        </div>\n        <div class='col'>\n          <div class=\"form-group\">\n            <label for=\"l_name\">Last Name</label>\n            <input [(ngModel)]=\"user.l_name\" name=\"user.l_name\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\" placeholder=\"Doe\">\n            <small *ngIf=\"errorMessages['l_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid Last Name</small>            \n          </div>\n        </div>\n      </div>\n        <div class=\"form-group\">\n          <label for=\"street_address\">Address</label>\n          <input [(ngModel)]=\"user.street_address\" name=\"user.street_address\" type=\"text\" class=\"form-control\" id=\"street_address\" aria-describedby=\"street_address\" placeholder=\"1315 Fair Oaks Ave.\">\n          <small *ngIf=\"errorMessages['street_address']['message'] == 'error' \" id=\"street_address\" class=\"form-text text-danger\">Invalid Street Address</small>          \n        </div>\n\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"city\">City</label>\n            <input [(ngModel)]=\"user.city\" name=\"user.city\" type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"South Pasadena\">\n            <small *ngIf=\"errorMessages['city']['message'] == 'error' \" id=\"city\" class=\"form-text text-danger\">Invalid City</small>          \n          </div>\n          <div class=\"form-group col-md-2\">\n              <label for=\"zip\">Zip</label>\n              <input [(ngModel)]=\"user.zip\" name=\"user.zip\" type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"91030\">\n              <small *ngIf=\"errorMessages['zip']['message'] == 'error' \" id=\"zip\" class=\"form-text text-danger\">Invalid Zip Code</small>\n            </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"phone\">Cell Phone</label>\n            <input [(ngModel)]=\"user.phone\" name=\"user.phone\" type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\" placeholder=\"626-799-2654\">\n            <small *ngIf=\"errorMessages['phone']['message'] == 'error' \" id=\"phone\" class=\"form-text text-danger\">Invalid Phone Number</small>            \n          </div>\n        </div>\n        <br>\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"submitBtn\">Update Information</button>\n      </form>\n    </div>    \n</body>\n</html>"

/***/ }),

/***/ "./src/app/user-edit/user-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.ts ***!
  \**************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.user = {
            uid: "",
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            street_address: "",
            city: "",
            zip: ""
        };
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observ = this._httpService.getUser();
        observ.subscribe(function (data) {
            _this.user = data[0];
        });
        this.errorMessages = {
            f_name: { message: "" },
            l_name: { message: "" },
            city: { message: "" },
            street_address: { message: "" },
            zip: { message: "" },
            phone: { message: "" }
        };
    };
    ;
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var observ = this._httpService.updateUser(this.user);
        observ.subscribe(function (data) {
            if (data == "success") {
                _this.update = true;
                _this.ngOnInit();
            }
        });
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/user-edit/user-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/user-gallery/user-gallery.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-gallery/user-gallery.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pic{\r\n    margin: 5px;\r\n    border: 5px solid black;\r\n    display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1nYWxsZXJ5L3VzZXItZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWdhbGxlcnkvdXNlci1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGlje1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user-gallery/user-gallery.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-gallery/user-gallery.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  <div class=\"container-fluid\">\n    <img *ngFor=\"let pic of gallery\" src=\"{{pic.filePath}}\" alt=\"No Image\" id=\"pic\" class=\"col-md-5\">\n  </div>\n</body>\n</html>"

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





var UserGalleryComponent = /** @class */ (function () {
    function UserGalleryComponent(_httpService, _router, storage) {
        this._httpService = _httpService;
        this._router = _router;
        this.storage = storage;
        this.gallery = [];
    }
    UserGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observ = this._httpService.getGalleryPics();
        observ.subscribe(function (data) {
            console.log(data);
            _this.gallery = data;
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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n    <div class=\"card text-center\">\n      <div class=\"card-header\">\n        You will be redirected\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Sign-In using your Google Account</h5>\n        <a id=\"googbutton\" class=\"btn btn-primary\">Google</a>\n        <a id=\"googbuttonout\" class=\"btn btn-secondary\">Sign-Out</a>\n        <h4 *ngIf=\"fireLog == true\">You are currently logged in</h4>\n        <h4 *ngIf=\"fireLog == false\">You are currently not logged in</h4>\n      </div>\n      <div class=\"card-footer text-muted\">\n        Powered by Google\n      </div>\n    </div>\n\n    </div>\n</body>\n</html>"

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
                var observ = _this._httpService.findUser(firebaseUser.uid);
                observ.subscribe(function (data) {
                    if (data == false) {
                        _this._httpService.newUser();
                    }
                });
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

module.exports = "#container{\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zY2hlZHVsZS91c2VyLXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMiLCJmaWxlIjoic3JjL2FwcC91c2VyLXNjaGVkdWxlL3VzZXItc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-schedule/user-schedule.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-schedule/user-schedule.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\" />\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<title>Home</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n<div class='container-fluid' id=\"container\">\n  <h2>Current Schedule</h2>\n  <iframe src=\"https://calendar.google.com/calendar/embed?showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23c0c0c0&amp;src=learningedgecenter%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FLos_Angeles\" style=\"border:solid 1px #777\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>\n  <iframe src=\"https://calendar.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=learningedgecenter%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FLos_Angeles\" style=\"border-width:0\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>\n</div>\n</body>\n</html>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2hvdy1jbGFzcy91c2VyLXNob3ctY2xhc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-show-class/user-show-class.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user-show-class/user-show-class.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <h2>Which student is interested in this class?</h2>\n          <div class=\"card w-50\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{class.title}}</h5>\n              <p class=\"card-text\">{{class.grade}} Grade</p>\n              <p class=\"card-text\">Capacity: {{class.capacity}} students</p>\n            </div>\n          </div>\n          <h6>Choose</h6>\n          <form (submit)=\"onSubmit()\">\n            <select [(ngModel)]=\"applyStudent\" name=\"applyStudent\">\n              <option *ngFor=\"let student of students\" value=\"{{student._id}}\">{{student.f_name}} {{student.l_name}}</option>\n            </select>\n            <br>\n            <button type=\"submit\" class=\"btn btn-primary\" id=\"submitBtn\">Waitlist</button>\n          </form>\n    </div>\n</body>\n</html>"

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
            capcity: 0
        };
    }
    UserShowClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observ = this._httpService.getUser();
        observ.subscribe(function (data) {
            _this.user = data['0'];
            _this.students = data['0'].students;
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.classID = params['id'];
            var observ = _this._httpService.getClass(_this.classID);
            observ.subscribe(function (data) {
                _this.class = data['0'];
            });
        });
    };
    ;
    UserShowClassComponent.prototype.onSubmit = function () {
        for (var i = 0; i < this.students.length; i++) {
            if (this.students[i]._id == this.applyStudent) {
                this.applyStudent = this.students[i];
                var observ = this._httpService.addStudentToClass(this.applyStudent, this.classID);
                observ.subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/bootstrap/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div id='showstudent'>\n        <h3>Current Students</h3>\n        <h4 [hidden]=\"students[0]\">You currently have no students added</h4>\n        <div *ngFor=\"let student of students\" class=\"card m-3\" id=\"studcard\" style=\"width: 18rem;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{student.f_name}} {{student.l_name}}</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{student.grade}} Grade</h6>\n            <p class=\"card-text\">{{student.school}}</p>\n            <a class=\"card-link\" [routerLink]=\"['/students', student._id]\">Show</a>\n          </div>\n        </div>\n      </div>\n      <h3>Add a Student</h3>\n      <form (submit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class='col-md-3 col-sm-12'>\n              <div class=\"form-group\">\n                <label for=\"student.f_name\">First Name</label>\n                <input [(ngModel)]=\"student.f_name\" name=\"student.f_name\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\">\n                <small *ngIf=\"errorMessages['f_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid First Name</small>\n              </div>\n            </div>\n            <div class='col-md-3 col-sm-12'>\n              <div class=\"form-group\">\n                <label for=\"student.l_name\">Last Name</label>\n                <input [(ngModel)]=\"student.l_name\" name=\"student.l_name\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\">\n                <small *ngIf=\"errorMessages['l_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid Last Name</small>            \n              </div>\n            </div>\n            <div class='col-md-3 col-sm-12'>\n              <div class=\"form-group\">\n                <label for=\"student.school\">School</label>\n                <input [(ngModel)]=\"student.school\" name=\"student.school\" type=\"text\" class=\"form-control\" id=\"school\" aria-describedby=\"school\">\n                <small *ngIf=\"errorMessages['school']['message'] == 'error' \" id=\"school\" class=\"form-text text-danger\">Require School</small>            \n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"gradeSelect\">Grade</label>\n                <select [(ngModel)]=\"student.grade\" name=\"student.grade\" class=\"form-control\" id=\"gradeSelect\">\n                  <option value=\"1st\">1st</option>\n                  <option value=\"2nd\">2nd</option>\n                  <option value=\"3rd\">3rd</option>\n                  <option value=\"4th\">4th</option>\n                  <option value=\"5th\">5th</option>\n                  <option value=\"6th\">6th</option>\n                  <option value=\"7th\">7th</option>\n                  <option value=\"8th\">8th</option>\n                  <option value=\"9th\">9th</option>\n                  <option value=\"10th\">10th</option>\n                  <option value=\"11th\">11th</option>\n                  <option value=\"12th\">12th</option>              \n                </select>\n                <small *ngIf=\"errorMessages['grade']['message'] == 'error' \" class=\"form-text text-danger\">Invalid Grade</small>            \n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"student.e_contact1_name\">Emergency Contact(Required)</label>\n                <input [(ngModel)]=\"student.e_contact1_name\" name=\"student.e_contact1_name\" type=\"text\" class=\"form-control\" id=\"e_contact1_name\" aria-describedby=\"e_contact1_name\">\n                <small *ngIf=\"errorMessages['e_contact1_name']['message'] == 'error' \" id=\"e_contact1_name\" class=\"form-text text-danger\">Requires Name</small>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"student.e_contact1_relation\">Relation</label>\n                <input [(ngModel)]=\"student.e_contact1_relation\" name=\"student.e_contact1_relation\" type=\"text\" class=\"form-control\" id=\"e_contact1_relation\" aria-describedby=\"e_contact1_relation\">\n                <small *ngIf=\"errorMessages['e_contact1_relation']['message'] == 'error' \" id=\"e_contact1_relation\" class=\"form-text text-danger\">Requires Relation</small>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"student.e_contact1_phone\">Phone</label>\n                <input [(ngModel)]=\"student.e_contact1_phone\" name=\"student.e_contact1_phone\" type=\"text\" class=\"form-control\" id=\"e_contact1_phone\" aria-describedby=\"e_contact1_phone\">\n                <small *ngIf=\"errorMessages['e_contact1_phone']['message'] == 'error' \" id=\"e_contact1_phone\" class=\"form-text text-danger\">Requires Phone</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"student.e_contact2_name\">Emergency Contact(Optional)</label>\n                <input [(ngModel)]=\"student.e_contact2_name\" name=\"student.e_contact2_name\" type=\"text\" class=\"form-control\" id=\"e_contact2_name\" aria-describedby=\"e_contact2_name\">\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"student.e_contact2_relation\">Relation</label>\n                <input [(ngModel)]=\"student.e_contact2_relation\" name=\"student.e_contact2_relation\" type=\"text\" class=\"form-control\" id=\"e_contact2_relation\" aria-describedby=\"e_contact2_relation\">\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"student.e_contact2_phone\">Phone</label>\n                <input [(ngModel)]=\"student.e_contact2_phone\" name=\"student.e_contact2_phone\" type=\"text\" class=\"form-control\" id=\"e_contact2_phone\" aria-describedby=\"e_contact2_phone\">\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit Student</button>\n      </form>\n      <br>\n      <br>\n    </div>    \n</body>\n</html>"

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
        this.student = {
            f_name: "",
            l_name: "",
            grade: "",
            parent_id: "",
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
        ;
        var observ = this._httpService.getUser();
        observ.subscribe(function (data) {
            _this.user = data['0'];
            _this.students = data['0'].students;
        });
        this.errorMessages = {
            f_name: { message: "" },
            l_name: { message: "" },
            grade: { message: "" },
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
        var observ = this._httpService.addStudent(this.student);
        observ.subscribe(function (data) {
            if (data.errors) {
                _this.errorMessages = {
                    f_name: { message: "" },
                    l_name: { message: "" },
                    grade: { message: "" },
                    e_contact1_name: { message: "" },
                    e_contact1_relation: { message: "" },
                    e_contact1_phone: { message: "" },
                    school: { message: "" }
                };
                if (data.errors['f_name']) {
                    _this.errorMessages['f_name']['message'] = "error";
                }
                if (data.errors['l_name']) {
                    _this.errorMessages['l_name']['message'] = "error";
                }
                if (data.errors['grade']) {
                    _this.errorMessages['grade']['message'] = "error";
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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div *ngFor=\"let tuit of tuition\" class=\"col-md-6\" id=\"tuition-box\">\n        <div class=\"card\">\n          <h5 class=\"card-header\">{{tuit.session}}</h5>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{tuit.year}}</h5>\n            <p class=\"card-text\">{{tuit.line1}}</p>\n            <p class=\"card-text\">{{tuit.line2}}</p>\n            <p class=\"card-text\">{{tuit.line3}}</p>\n            <p class=\"card-text\">{{tuit.line4}}</p>\n            <p class=\"card-text\">{{tuit.line5}}</p>\n            <p class=\"card-text\">{{tuit.line6}}</p>\n            <p class=\"card-text\">{{tuit.line7}}</p>\n            <p class=\"card-text\">{{tuit.line8}}</p>\n            <p class=\"card-text\">{{tuit.line9}}</p>\n            <p class=\"card-text\">{{tuit.line10}}</p>\n            <p class=\"card-text\">{{tuit.line11}}</p>\n            <p class=\"card-text\">{{tuit.line12}}</p>\n            <p class=\"card-text\">{{tuit.line13}}</p>\n            <p class=\"card-text\">{{tuit.line14}}</p>\n            <p class=\"card-text\">{{tuit.line15}}</p>\n            <p class=\"card-text\">{{tuit.line16}}</p>\n            <p class=\"card-text\">{{tuit.line17}}</p>\n            <p class=\"card-text\">{{tuit.line18}}</p>\n            <p class=\"card-text\">{{tuit.line19}}</p>\n            <p class=\"card-text\">{{tuit.line20}}</p>\n            <p class=\"card-text\">{{tuit.line21}}</p>\n            <p class=\"card-text\">{{tuit.line22}}</p>\n            <p class=\"card-text\">{{tuit.line23}}</p>\n            <p class=\"card-text\">{{tuit.line24}}</p>\n            <p class=\"card-text\">{{tuit.line25}}</p>\n            <p class=\"card-text\">{{tuit.line26}}</p>\n            <p class=\"card-text\">{{tuit.line27}}</p>\n            <p class=\"card-text\">{{tuit.line28}}</p>\n            <p class=\"card-text\">{{tuit.line29}}</p>\n            <p class=\"card-text\">{{tuit.line30}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card text-white bg-info rounded-0\">\n        <div class=\"card-header\">\n          Policies\n        </div>\n        <div class=\"card-body\">\n          <h6>Tuition is due within 10 days after invoice is sent. A $25 late fee will be charged after the 10th day. $50 charge for returned checks</h6>\n          <h6>Missed days are nonrefundable. Tuition can be prorated with 2 week prior notification for weeks that a student will not be able to attend class</h6>\n          <h6>4 week notification of withdrawal is required or $100 will be charged</h6>\n          <h6>Learning Edge reserves the right to charge $1 per minute after 7:00PM Mon-Thur and 6:30PM on Fridays. If Learning Edge is unable to reach a parent or guardian before 8:00PM, the police department will be contacted.</h6>\n        </div>\n      </div>\n    </div>\n</body>\n</html>"

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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"home.component.css\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n      <div id='studentInfo'>\n        <div id=\"left\">\n          <h2 id=\"title\">Student Info</h2>\n          <h4>{{student.f_name}} {{student.l_name}}</h4>\n          <p class=\"fontUp\">School: {{student.school}}</p>\n          <p class=\"fontUp\">Grade: {{student.grade}}</p>\n          \n          <h3>Emergency Contact</h3>\n          <p class=\"e_contact\">{{student.e_contact1_name}}</p>\n          <p class=\"e_contact\">Relation: {{student.e_contact1_relation}}</p>\n          <p class=\"e_contact\">Contact: {{student.e_contact1_phone}}</p>\n          <br>\n          <br>\n          <p class=\"e_contact\" [hidden]=\"!student.e_contact2_name\">{{student.e_contact2_name}}</p>\n          <p class=\"e_contact\" [hidden]=\"!student.e_contact2_relation\">Relation: {{student.e_contact2_relation}}</p>\n          <p class=\"e_contact\" [hidden]=\"!student.e_contact2_phone\">Phone: {{student.e_contact2_phone}}</p>\n        </div>\n        <div id=\"right\">\n          <table class=\"table table-striped\">\n              <thead>\n                <th>Allergy Type</th>\n                <th>Severity</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let allergy of dballergy\">\n                  <td>{{allergy.type}}</td>\n                  <td>{{allergy.severity}}</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n      <form (submit)=\"onSubmit()\">\n          <div class=\"form-row\">\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"allergy\">Allergy</label>\n                <input [(ngModel)]=\"allergy.type\" name=\"allergy.type\" type=\"text\" class=\"form-control\" id=\"allergy\" aria-describedby=\"allergy\" placeholder=\"Peanut\">\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"allergySelect\">Severity</label>\n                <select [(ngModel)]=\"allergy.severity\" name=\"allergy.severity\" class=\"form-control\" id=\"allergySelect\">\n                    <option value=\"Potentially Fatal\">Potentially Fatal</option>\n                    <option value=\"Damaging to Health\">Damaging to Health</option>\n                    <option value=\"Inconvenient\">Inconvenient</option>\n                  </select>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                  <label for=\"allergyBtn\">Add Allergy</label>\n                  <button type=\"submit\" class=\"btn btn-primary form-control\" id=\"allergyBtn\">Submit</button>\n              </div>\n            </div>\n          </div>\n        </form>\n        <hr>\n          <form (submit)=\"onEdit()\">\n            <div class=\"form-row\">\n                <div class='col-md-3 col-sm-12'>\n                  <div class=\"form-group\">\n                    <label for=\"f_name\">First Name</label>\n                    <input [(ngModel)]=\"student.f_name\" name=\"student.f_name\" type=\"text\" class=\"form-control\" id=\"f_name\" aria-describedby=\"f_name\" placeholder=\"John\">\n                    <!-- <small *ngIf=\"errorMessages['f_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid First Name</small> -->\n                  </div>\n                </div>\n                <div class='col-md-3 col-sm-12'>\n                  <div class=\"form-group\">\n                    <label for=\"l_name\">Last Name</label>\n                    <input [(ngModel)]=\"student.l_name\" name=\"student.l_name\" type=\"text\" class=\"form-control\" id=\"l_name\" aria-describedby=\"l_name\" placeholder=\"Doe\">\n                    <!-- <small *ngIf=\"errorMessages['l_name']['message'] == 'error' \" id=\"f_name\" class=\"form-text text-danger\">Invalid Last Name</small>             -->\n                  </div>\n                </div>\n                <div class=\"col-md-3 col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"gradeSelect\">Grade</label>\n                    <select [(ngModel)]=\"student.grade\" name=\"student.grade\" class=\"form-control\" id=\"gradeSelect\">\n                      <option value=\"1st\">1st</option>\n                      <option value=\"2nd\">2nd</option>\n                      <option value=\"3rd\">3rd</option>\n                      <option value=\"4th\">4th</option>\n                      <option value=\"5th\">5th</option>\n                      <option value=\"6th\">6th</option>\n                      <option value=\"7th\">7th</option>\n                      <option value=\"8th\">8th</option>\n                      <option value=\"9th\">9th</option>\n                      <option value=\"10th\">10th</option>\n                      <option value=\"11th\">11th</option>\n                      <option value=\"12th\">12th</option>              \n                    </select>\n                    <!-- <small *ngIf=\"errorMessages['grade']['message'] == 'error' \" class=\"form-text text-danger\">Invalid Grade</small>             -->\n                  </div>\n                </div>\n                <div class=\"col-md-3 col-sm-12\">\n                  <label for=\"updateBtn\">Edit Information</label>\n                  <button type=\"submit\" class=\"btn btn-primary form-control\" id=\"updateBtn\">Submit</button>\n                </div>\n              </div>\n            </form>\n    </div>    \n\n  <script src=\"assets/bootstrap/js/bootstrap.min.js\"></script>\n  <script src=\"assets/jquery/jquery.min.js\"></script>\n  <script src=\"assets/popper.js/popper.min.js\"></script>\n</body>\n</html>"

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
            parent_id: ""
        };
        this.allergy = {
            type: "",
            severity: ""
        };
        this.errorMessages = {
            f_name: { message: "" },
            l_name: { message: "" },
            grade: { message: "" }
        };
        this.dballergy = [];
    }
    UserstudentshowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.studentID = params['id'];
            var observ = _this._httpService.getStudent(_this.studentID);
            observ.subscribe(function (data) {
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
                _this.errorMessages = {
                    f_name: { message: "" },
                    l_name: { message: "" },
                    grade: { message: "" }
                };
                if (data.errors['f_name']) {
                    _this.errorMessages['f_name']['message'] = "error";
                }
                if (data.errors['l_name']) {
                    _this.errorMessages['l_name']['message'] = "error";
                }
                if (data.errors['grade']) {
                    _this.errorMessages['grade']['message'] = "error";
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

module.exports = __webpack_require__(/*! C:\Users\Edward Im\Desktop\MEAN_projects\learning_edge_project\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map