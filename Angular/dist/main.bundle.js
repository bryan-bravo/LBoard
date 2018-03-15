webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    //---user stuff-----------
    UserService.prototype.deleteUser = function (username) {
        var ep = this.prepEndpoint('deleteUser/' + username);
        return this.http.delete(ep).map(function (res) { return res.json(); });
    };
    //-------FriendStuff------ 
    UserService.prototype.getFriends = function (username) {
        var ep = this.prepEndpoint('getFriends/' + username);
        return this.http.get(ep).map(function (res) { return res.json(); });
    };
    UserService.prototype.addFriend = function (friendName) {
        var bodystuff = {
            name: friendName,
            parentUserName: JSON.parse(localStorage.getItem("user")).username
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('addfriend');
        return this.http.post(ep, bodystuff, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteFriend = function (friendid) {
        var ep = this.prepEndpoint('deleteFriend/' + friendid);
        return this.http.delete(ep).map(function (res) { return res.json(); });
    };
    UserService.prototype.getFriendById = function (friendId) {
        var ep = this.prepEndpoint('getFriendById/' + friendId);
        return this.http.get(ep).map(function (res) { return res.json(); });
    };
    UserService.prototype.getFriendLs = function (friendId) {
        var ep = this.prepEndpoint('friendHome/' + friendId);
        return this.http.get(ep).map(function (res) { return res.json(); });
    };
    UserService.prototype.changeFriendPhoto = function (friendId, filebuffer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var input = new FormData();
        var ep = this.prepEndpoint('changephoto');
        input.append("friendId", friendId);
        input.append("image", filebuffer);
        return this.http.post(ep, input, { headers: headers }).map(function (res) { return res.json(); });
    };
    //---------LStuff---------
    UserService.prototype.addL = function (L) {
        var ep = this.prepEndpoint('addL');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var input = new FormData();
        input.append("title", L.title);
        input.append("desc", L.desc);
        input.append("friendId", L.friendId);
        input.append("image", L.file);
        return this.http.post(ep, input, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //gives where the http request will be
    UserService.prototype.prepEndpoint = function (ep) {
        if (!this.isDev) {
            return 'controllers/' + ep;
        }
        else {
            return 'http://localhost:8080/controllers/' + ep;
        }
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/user.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(464);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/main.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.index = 0;
        this.links = ["./assets/img1.jpg", "./assets/img2.jpg", "./assets/img3.png"];
    }
    AppComponent.prototype.changePicture = function () {
        if (this.index > 2)
            this.index = 0;
        this.link = this.links[this.index];
        this.index++;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.link = this.links[this.index];
        window.setInterval(function () { _this.changePicture(); }, 2500);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(547),
            styles: [__webpack_require__(540)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_userhome_userhome_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authguard_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_friends_ls_friends_ls_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_img_cropper__ = __webpack_require__(320);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'userhome', component: __WEBPACK_IMPORTED_MODULE_10__components_userhome_userhome_component__["a" /* UserHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_authguard_service__["a" /* AuthGuardService */]] },
    { path: 'friendsls/:friendId', component: __WEBPACK_IMPORTED_MODULE_15__components_friends_ls_friends_ls_component__["a" /* FriendsLsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_authguard_service__["a" /* AuthGuardService */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_userhome_userhome_component__["a" /* UserHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_friends_ls_friends_ls_component__["a" /* FriendsLsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_img_cropper__["a" /* ImageCropperComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_authguard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/app.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(authService, userService, router, flashMessage) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    //functions
    DashboardComponent.prototype.ngOnInit = function () {
        this.showLogin = false;
    };
    DashboardComponent.prototype.toggleLogin = function () {
        this.showLogin = !this.showLogin;
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(548),
            styles: [__webpack_require__(541)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/dashboard.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__ = __webpack_require__(320);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsLsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsLsComponent = (function () {
    function FriendsLsComponent(navrouter, router, userService, flashMessage) {
        this.navrouter = navrouter;
        this.router = router;
        this.userService = userService;
        this.flashMessage = flashMessage;
        this.cropperSettings1 = new __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__["b" /* CropperSettings */]();
        this.cropperSettings1.width = 200;
        this.cropperSettings1.height = 200;
        this.cropperSettings1.croppedWidth = 200;
        this.cropperSettings1.croppedHeight = 200;
        this.cropperSettings1.canvasWidth = 300;
        this.cropperSettings1.canvasHeight = 200;
        this.cropperSettings1.minWidth = 100;
        this.cropperSettings1.minHeight = 100;
        this.cropperSettings1.rounded = false;
        this.cropperSettings1.noFileInput = true;
        this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;
        this.data1 = {};
    }
    FriendsLsComponent.prototype.ngOnInit = function () {
        this.profileSrc = '../../../assets/profile_default.png';
        this.getParams();
        this.populateLData();
        this.getFriendById();
        this.showAddForm = false;
        this.showWarning = false;
        this.showWarning = false;
        this.showUpdatePhoto = false;
    };
    FriendsLsComponent.prototype.getParams = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.friendId = params['friendId'];
        });
    };
    FriendsLsComponent.prototype.populateLData = function () {
        var _this = this;
        this.userService.getFriendLs(this.friendId).subscribe(function (Ls) {
            Ls.forEach(function (L) {
                if (L.hasOwnProperty("image"))
                    L.hasImage = true;
                else
                    L.hasImage = false;
            });
            _this.Ls = Ls;
        });
    };
    FriendsLsComponent.prototype.getFriendById = function () {
        var _this = this;
        this.userService.getFriendById(this.friendId).subscribe(function (friend) {
            _this.currentFriend = friend;
            if (friend.hasOwnProperty('image'))
                _this.profileSrc = ("data:image/png;base64," + friend.image.data);
        });
    };
    FriendsLsComponent.prototype.navUserHome = function () {
        this.navrouter.navigate(['userhome']);
    };
    FriendsLsComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    FriendsLsComponent.prototype.cropped = function (bounds) {
        if (this.data1.image.includes('data:image/jpeg;base64'))
            this.data1.image = this.data1.image.replace('data:image/jpeg;base64,', '');
        if (this.data1.image.includes('data:image/png;base64'))
            this.data1.image = this.data1.image.replace('data:image/png;base64,', '');
    };
    //heart of component
    FriendsLsComponent.prototype.onAddLSubmit = function () {
        var _this = this;
        if (!this.newTitle || !this.newDesc) {
            return;
        }
        var newL = {
            title: this.newTitle,
            desc: this.newDesc,
            friendId: this.friendId,
            file: this.data1.image
        };
        this.userService.addL(newL).subscribe(function (L) {
            if (L.success == false) {
                _this.flashMessage.show(L.msg, { cssClass: 'warning', timeout: 3000 });
            }
            else {
                if (L.hasOwnProperty("image"))
                    L.hasImage = true;
                else
                    L.hasImage = false;
                _this.Ls.push(L);
                _this.resetFormHelpers();
                _this.currentFriend.lCount++;
            }
        });
    };
    FriendsLsComponent.prototype.onUpdatePicture = function () {
        var _this = this;
        this.userService.changeFriendPhoto(this.friendId, this.data1.image)
            .subscribe(function (friend) {
            if (friend.hasOwnProperty('image'))
                _this.profileSrc = ("data:image/png;base64," + friend.image.data);
            _this.resetFormHelpers();
        });
    };
    FriendsLsComponent.prototype.getFileFromInput = function (fileInput) {
        var fi = fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            return fileToUpload;
        }
        return null;
    };
    //display functions
    FriendsLsComponent.prototype.changeAddFormState = function () {
        this.resetFormHelpers();
        this.showAddForm = true;
    };
    FriendsLsComponent.prototype.changeWarningState = function () {
        this.showWarning = true;
    };
    FriendsLsComponent.prototype.changeUpdatePhotoState = function () {
        this.resetFormHelpers();
        this.showUpdatePhoto = true;
    };
    FriendsLsComponent.prototype.resetFormHelpers = function () {
        this.showWarning = false;
        this.showAddForm = false;
        this.showUpdatePhoto = false;
        this.newTitle = '';
        this.newDesc = '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cropper', undefined), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__["a" /* ImageCropperComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__["a" /* ImageCropperComponent */]) === 'function' && _a) || Object)
    ], FriendsLsComponent.prototype, "cropper", void 0);
    FriendsLsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends-ls',
            template: __webpack_require__(549),
            styles: [__webpack_require__(542)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object])
    ], FriendsLsComponent);
    return FriendsLsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/friends-ls.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(550),
            styles: [__webpack_require__(543)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/home.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.warning = '';
        this.showWarning = false;
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        //make model
        var user = {
            username: this.username,
            password: this.password
        };
        //comm with server
        if (!this.username || !this.password) {
            this.warning = 'Empty Field(s)';
            this.showWarning = true;
            return;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                //the data returned if successful:  
                _this.authService.storeUserData(data.token, data.user);
                _this.loggedIn.emit(false);
                _this.router.navigate(['userhome']); //user home
            }
            else {
                _this.warning = data.msg;
                _this.showWarning = true;
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "loggedIn", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(551),
            styles: [__webpack_require__(544)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/login.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.warning = '';
        this.showWarning = false;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (!this.name || !this.username || !this.password || !this.retypepassword) {
            this.warning = 'Empty Field(s)';
            this.showWarning = true;
            return;
        }
        if (this.password != this.retypepassword) {
            this.warning = 'Passwords do not match';
            this.showWarning = true;
            var password = document.getElementById('password');
            var retypepassword = document.getElementById('retypepassword');
            password.value = '';
            retypepassword.value = '';
            return;
        }
        var user = {
            name: this.name,
            username: this.username,
            password: this.password
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.warning = 'Registration successful, you can now log in';
                _this.showWarning = true;
                _this.router.navigate(['/login']);
            }
            else {
                _this.warning = data.msg;
                _this.showWarning = true;
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(552),
            styles: [__webpack_require__(545)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/register.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserHomeComponent = (function () {
    function UserHomeComponent(userService, router, authService, flashMessage) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        this.populateData();
        this.actionSelector = '';
        this.warningMessage = false;
    };
    //logic functions
    UserHomeComponent.prototype.populateData = function () {
        var _this = this;
        var parentName = JSON.parse(localStorage.getItem("user")).username;
        this.name = JSON.parse(localStorage.getItem("user")).name;
        this.userService.getFriends(parentName).subscribe(function (friends) {
            friends.forEach(function (friend) {
                if (friend.hasOwnProperty("image")) {
                    friend.image.data = ("data:image/png;base64," + friend.image.data);
                }
                else {
                    friend.image = { data: "../../../assets/profile_default.png" };
                }
            });
            _this.friends = friends;
            _this.friendCount = _this.friends.length;
        });
    };
    UserHomeComponent.prototype.onAddFriendSubmit = function () {
        var _this = this;
        if (this.friendCount == 10) {
            this.flashMessage.show('To make your friends compete for your friendship you are only allowed ten friends, delete the non important ones.', {
                cssClass: 'warning',
                timeout: 5000
            });
            return;
        }
        if (!this.newFriendName) {
            this.flashMessage.show('Empty field(s).', {
                cssClass: 'warning',
                timeout: 3000
            });
            return;
        }
        this.userService.addFriend(this.newFriendName).subscribe(function (data) {
            if (data.success == false) {
                _this.flashMessage.show('Friend could not be added.', {
                    cssClass: 'danger',
                    timeout: 3000
                });
            }
            else {
                _this.flashMessage.show('Friend added.', {
                    cssClass: 'success',
                    timeout: 1000
                });
                data.image = { data: "../../../assets/profile_default.png" };
                _this.friends.push(data);
                _this.friendCount = _this.friends.length;
                _this.resetFormHelpers();
            }
        });
    };
    UserHomeComponent.prototype.deleteFriendChosen = function (friendid) {
        this.delFriendId = friendid;
        this.setWarningMessage(true);
    };
    UserHomeComponent.prototype.deleteFriend = function () {
        var _this = this;
        this.userService.deleteFriend(this.delFriendId).subscribe(function (response) {
            if (response.success) {
                for (var i = _this.friends.length - 1; i >= 0; i--)
                    if (_this.friends[i]._id == _this.delFriendId)
                        _this.friends.splice(i, 1);
                _this.friendCount--;
                _this.resetFormHelpers();
            }
            else {
                _this.resetFormHelpers;
            }
        });
    };
    UserHomeComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(JSON.parse(localStorage.getItem("user")).username)
            .subscribe(function (response) {
            localStorage.clear();
            _this.router.navigate(['/login']);
        });
    };
    UserHomeComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        return false;
    };
    //get aspect ratio
    UserHomeComponent.prototype.setFriendContainerStyle = function (direction) {
        var iconContainerHeight = document.getElementById("iconContainer").offsetWidth;
        //get 30 percent of that
        var formattedHeight = ((iconContainerHeight * 32) / 100 + "px");
        return { 'min-height': formattedHeight };
    };
    //display functions
    UserHomeComponent.prototype.setActionSelector = function (value) {
        this.resetFormHelpers();
        this.actionSelector = value;
    };
    UserHomeComponent.prototype.setWarningMessage = function (value) {
        this.warningMessage = value;
    };
    UserHomeComponent.prototype.deleteUserPrompt = function () {
        this.setWarningMessage(true);
    };
    UserHomeComponent.prototype.resetFormHelpers = function () {
        this.newFriendName = '';
        this.delFriendId = '';
        this.actionSelector = '';
        this.warningMessage = false;
    };
    UserHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userhome',
            template: __webpack_require__(553),
            styles: [__webpack_require__(546)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], UserHomeComponent);
    return UserHomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/userhome.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a, _b;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/authguard.service.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/environment.js.map

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = " /* big screen */\n#container{\n\ttext-align:center;\n\toverflow:hidden;\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n\t}\n\n /* medium screen */\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "\n#container {\n  height: 5vh;\n  background-color: rgb(78, 166, 169);\n  color: white;\n  margin-top: 0px;\n}\n\n.flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0px 0px 0px 0px;\n  width: 100%;\n}\n\nlabel:hover {\n    color: rgb(224, 105, 105);\n}\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "@media(orientation:portrait) and (max-width:760px){\n  :host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 5vw 0;\n  }\n  /* dashbar */\n  #friendContainer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n    border: 5px solid rgb(0, 168, 230);\n    height: auto;\n    width: 90vw;\n    background-color: white;\n  }\n  #flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: auto;\n    width: 100%;\n    float: left;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  #friendpicturecontainer {\n    height: 50vw;\n    width: 50vw;\n    margin: 0px 20vw;\n    border-radius: 100%;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  #friendpicture {\n    height: 100%;\n    cursor: pointer;\n  }\n  /* add L */\n  #addL,\n  #profileupload {\n    width: 80%;\n    padding: 1em;\n    background-color: rgb(206, 232, 243);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    text-align: left;\n  }\n  .exit {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n  }\n  .img-crop {\n    background-color: rgb(206, 232, 243);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .local-warning {\n    margin: 5px 0;\n  }\n  /* L stuff */\n  .L {\n    background-color: white;\n    display: block;\n    border: 2px solid rgb(0, 168, 230);\n    height: auto;\n    width: 90vw;\n    margin-top: 5vw;\n  }\n  .top {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    background-color: rgb(206, 232, 243);\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  #title {\n    margin-left: 10%;\n    padding-top: 2%;\n  }\n  #date {\n    margin-right: 10%;\n    padding-top: 2%;\n  }\n  .imagecontainer {\n    height: 60vw;\n    background-color: #9ab9b9;\n  }\n  .limage {\n    height: 100%;\n  }\n  .description {\n    padding: .5em;\n  }\n}\n@media (orientation:landscape) and (max-width:760px){\n  :host {\n    display: block;\n    height: 100%;\n    width: 100%;\n  }\n  /* dashbar */\n  #dashbar {\n    border-bottom: 1px solid rgb(0, 168, 230);\n    width: 80%;\n    padding: 1em 0;\n    margin: 1em 9.9%;\n  }\n  #flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  #flex-container>* {\n    margin-right: 5px;\n  }\n  #friendpicturecontainer {\n    height: 10vw;\n    float: left;\n    position: relative;\n    -webkit-transform: translate(-2vw, -2vh);\n            transform: translate(-2vw, -2vh);\n  }\n  #friendpicture {\n    border: 1px solid rgb(0, 168, 230);\n    border-radius: 100%;\n    height: 100%;\n  }\n  /* add L */\n  #addL,\n  #profileupload {\n    min-width: 20vw;\n    padding: 1em;\n    background-color: rgb(206, 232, 243);\n    position: absolute;\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    text-align: left;\n  }\n  .exit {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n  }\n  .img-crop {\n    background-color: rgb(206, 232, 243);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .local-warning {\n    margin: 5px 0;\n  }\n  /* lstuff */\n  .L {\n    background-color: white;\n    display: block;\n    border: 2px solid rgb(0, 168, 230);\n    height: auto;\n    width: 60vw;\n    margin: 5vw 20vw 0 20vw;\n  }\n  .top {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 5px;\n    background-color: rgb(206, 232, 243);\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .imagecontainer {\n    height: 20vw;\n    background-color: #9ab9b9;\n  }\n  .limage {\n    height: 100%;\n  }\n  .description {\n    padding: .5em;\n  }\n}\n@media(orientation:portrait) and (min-width:761px){\n  :host {\n    display: block;\n    height: 100%;\n    width: 100%;\n  }\n  /* dashbar */\n  #dashbar {\n    border-bottom: 1px solid rgb(0, 168, 230);\n    width: 80%;\n    padding: 1em 0;\n    margin: 1em 9.9%;\n  }\n  #flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  #flex-container>* {\n    margin-right: 5px;\n  }\n  #friendpicturecontainer {\n    height: 10vw;\n    float: left;\n    position: relative;\n    -webkit-transform: translate(-2vw, -2vh);\n            transform: translate(-2vw, -2vh);\n  }\n  #friendpicture {\n    border: 1px solid rgb(0, 168, 230);\n    border-radius: 100%;\n    height: 100%;\n  }\n  /* add L */\n  #addL,\n  #profileupload {\n    min-width: 20vw;\n    padding: 1em;\n    background-color: rgb(206, 232, 243);\n    position: absolute;\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    text-align: left;\n  }\n  .exit {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n  }\n  .img-crop {\n    background-color: rgb(206, 232, 243);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .local-warning {\n    margin: 5px 0;\n  }\n  /* lstuff */\n  .L {\n    background-color: white;\n    display: block;\n    border: 2px solid rgb(0, 168, 230);\n    height: auto;\n    width: 60vw;\n    margin: 5vw 20vw 0 20vw;\n  }\n  .top {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 5px;\n    background-color: rgb(206, 232, 243);\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .imagecontainer {\n    height: 20vw;\n    background-color: #9ab9b9;\n  }\n  .limage {\n    height: 100%;\n  }\n  .description {\n    padding: .5em;\n  }\n}\n@media(orientation:landscape) and (min-width:1024px){\n  :host {\n    display: block;\n    height: 100%;\n    width: 100%;\n  }\n  /* dashbar */\n  #dashbar {\n    border-bottom: 1px solid rgb(0, 168, 230);\n    width: 80%;\n    padding: 1em 0;\n    margin: 1em 9.9%;\n  }\n  #flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  #flex-container>* {\n    margin-right: 5px;\n  }\n  #friendpicturecontainer {\n    height: 10vw;\n    float: left;\n    position: relative;\n    -webkit-transform: translate(-2vw, -2vh);\n            transform: translate(-2vw, -2vh);\n  }\n  #friendpicture {\n    border: 1px solid rgb(0, 168, 230);\n    border-radius: 100%;\n    height: 100%;\n  }\n  /* add L */\n  #addL,\n  #profileupload {\n    min-width: 20vw;\n    padding: 1em;\n    background-color: rgb(206, 232, 243);\n    position: absolute;\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    text-align: left;\n  }\n  .exit {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n  }\n  .img-crop {\n    background-color: rgb(206, 232, 243);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .local-warning {\n    margin: 5px 0;\n  }\n  /* lstuff */\n  .L {\n    background-color: white;\n    display: block;\n    border: 2px solid rgb(0, 168, 230);\n    height: auto;\n    width: 60vw;\n    margin: 5vw 20vw 0 20vw;\n  }\n  .top {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 5px;\n    background-color: rgb(206, 232, 243);\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .imagecontainer {\n    height: 20vw;\n    background-color: #9ab9b9;\n  }\n  .limage {\n    height: 100%;\n  }\n  .description {\n    padding: .5em;\n  }\n}\n\n"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "/* small screen portrait */\n\n.content {\n  bottom: 0;\n  padding: 0 1em;\n  line-height: 1.2em;\n  font-size: 1.2em;\n}\n\n.lboard-desc {\n  font-size: 1.75em;\n}\n#image1 {\n  background-image: url('../assets/cover1.jpg');\n}\n#image2 {\n  background-image: url('../assets/cover2.jpg');\n}\n#image3 {\n  background-image: url('../assets/cover3.jpg');\n}\n\n@media(orientation:portrait) and (max-width:1024px) {\n  #top {\n    height: 20vh;\n    width: 100vw;\n    background-color: white;\n  }\n  .lboard {\n    font-size: 3em;\n    padding: 5%;\n  }\n  .lboard-desc {\n    font-size:1em;\n    margin-bottom: 1em;\n  }\n  #bottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    height: auto;\n    width: 100vw;\n  }\n\n  .images {\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 100%;\n    height: 0;\n    padding-top: 66.64%\n  }\n  .text-box {\n    background-color: white;\n    margin: .5em 0;\n  }\n  .title {\n    font-size: 1.75em;\n    padding: .5em 0;\n  }\n}\n\n\n/* small screen landscape */\n\n@media(orientation:landscape) and (max-width:1024px) {\n  #top {\n    height: 40vh;\n    width: 100vw;\n    background-color: white;\n  }\n  .lboard {\n    font-size: 3em;\n    padding: 5%;\n  }\n  #bottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    height: auto;\n    width: 100vw;\n  }\n\n  .images {\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 100%;\n    height: 0;\n    padding-top: 66.64%\n  }\n  .text-box {\n    background-color: white;\n    margin: 1em;\n  }\n  .title {\n    font-size: 1.75em;\n    padding: .5em 0;\n  }\n}\n\n\n/* medium screens */\n\n@media(orientation:landscape) and (min-width:1025px) {\n  #top {\n    height: 40vh;\n    width: 100vw;\n    background-color: white;\n  }\n  .lboard {\n    width: 30%;\n    font-size: 5em;\n    margin: 0;\n    padding: 5%;\n  }\n  #bottom {\n    display: -ms-grid;\n    display: grid;\n    height: auto;\n    width: 100vw;\n    grid-auto-columns: 1fr 1fr 1fr;\n    grid-auto-rows: 1fr 1fr 1fr;\n    grid-gap: 1em;\n    margin: 1em 0;\n  }\n  #bottom>* {\n    height: 50vh;\n  }\n  .text-box {\n    background-color: white;\n    /* margin:1em; */\n  }\n  .title {\n    font-size: 1.75em;\n    padding: .5em 0;\n    margin-top: .5em;\n  }\n  .content {\n    bottom: 0;\n    padding: 0 1em;\n  }\n  #image1 {\n    grid-area: 1/1/2/3;\n    /* margin-top:1em; */\n  }\n  #text1 {\n    grid-area: 1/3/2/4;\n  }\n  #image2 {\n    grid-area: 2/2/3/4;\n  }\n  #text2 {\n    grid-area: 2/1/3/2;\n  }\n  #image3 {\n    grid-area: 3/1/4/3;\n  }\n  #text3 {\n    grid-area: 3/3/4/4;\n  }\n  .images {\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "@media(orientation:portrait) and (max-width:760px){\n\t#container{\n\t\tbackground-color: rgb(206, 232, 243);\n\t\tmargin: 5px 15vw;\n\t\tpadding:.5em;\n\t\tdisplay:-webkit-box;\n\t\tdisplay:-ms-flexbox;\n\t\tdisplay:flex;\n\t\t-webkit-box-orient:vertical;\n\t\t-webkit-box-direction:normal;\n\t\t    -ms-flex-direction:column;\n\t\t        flex-direction:column;\n\t\t-ms-flex-pack:distribute;\n\t\t    justify-content:space-around;\n\t\t-webkit-box-align:stretch;\n\t\t    -ms-flex-align:stretch;\n\t\t        align-items:stretch;\n\t\tposition:relative;\n\t}\n\n}\n@media(orientation:portrait) and (min-width:761px){\n\t#container{\n\t\tbackground-color: rgb(206, 232, 243);\n\t\tmargin: 0 35vw;\n\t\tpadding:.5em;\n\t\tdisplay:-webkit-box;\n\t\tdisplay:-ms-flexbox;\n\t\tdisplay:flex;\n\t\t-webkit-box-orient:vertical;\n\t\t-webkit-box-direction:normal;\n\t\t    -ms-flex-direction:column;\n\t\t        flex-direction:column;\n\t\t-ms-flex-pack:distribute;\n\t\t    justify-content:space-around;\n\t\t-webkit-box-align:stretch;\n\t\t    -ms-flex-align:stretch;\n\t\t        align-items:stretch;\n\t\tposition:relative;\n\t}\n\n}\n@media (orientation:landscape){\n\t#container{\n\t\tbackground-color: rgb(206, 232, 243);\n\t\t/* border: 2px solid rgb(0, 37, 51); */\n\t\tmargin-left:50vw;\n\t\tpadding:.5em;\n\t\tdisplay:-webkit-box;\n\t\tdisplay:-ms-flexbox;\n\t\tdisplay:flex;\n\t\t-webkit-box-orient:vertical;\n\t\t-webkit-box-direction:normal;\n\t\t    -ms-flex-direction:column;\n\t\t        flex-direction:column;\n\t\t-ms-flex-pack:distribute;\n\t\t    justify-content:space-around;\n\t\t-webkit-box-align:stretch;\n\t\t    -ms-flex-align:stretch;\n\t\t        align-items:stretch;\n\t\tposition:absolute;\n\t\tz-index:1;\n\t}\n\n}\n#container>*{\n\tmargin-bottom: 5px;\n}\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "@media(orientation:portrait) and (max-width:760px) {\n  #container {\n    height: auto;\n    background-color: rgb(255, 255, 255);\n    padding: 1em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n}\n\n@media(orientation:portrait) and (min-width:761px) {\n  #container {\n    height: auto;\n    background-color: rgb(255, 255, 255);\n    margin: 0 10%;\n    padding: 1em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n}\n\n@media(orientation:landscape) {\n  #container {\n    height: 100vh;\n    width: 60%;\n    background-color: rgb(255, 255, 255);\n    margin: 0 20%;\n    padding: 1em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n}\n\n:host {\n  height: 100%;\n  width: 100%;\n}\n\n#container>* {\n  margin-bottom: 5px;\n}\n\np.success {\n  background-color: rgb(77, 255, 77);\n}\n"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%;\n  background-color: white;\n}\n.settingsoption:hover,\n.warningoption:hover {\n  background-color: rgb(153, 226, 255);\n  color: rgb(0, 37, 51);\n}\n.settingsoption:hover,\n.warningoption:hover {\n  background-color: rgb(153, 226, 255);\n  color: rgb(0, 37, 51);\n}\nul {\n  margin-top:1em;\n  list-style-type: none;\n}\nli {\n  width: 100%;\n  background-color: white;\n  margin: 0 0 3px 0;\n  height: 21px;\n}\n.liDeleteButton {\n  height:100%;\n  border: none;\n  text-decoration: none;\n  color: white;\n  background-color: rgb(255, 92, 51);\n  float: right;\n  cursor: pointer;\n}\n.friendimage {\n  height:100%;\n  width: 100%;\n  cursor: hand;\n  cursor: pointer;\n}\n.friendcontainer, .imagecontainer {\n  width: 100%;\n  border-radius: 100%;\n  overflow:hidden;\n\n}  \n.friendname{\ncolor:black;\n}\n\n#warningmessage > *{\n  margin-top: 1em ;\n}\n/* ---------------------------------------- */\n/* mobile porttrait */\n@media(orientation:portrait) and (max-width:760px){\n  #dash {\n    padding: 1em;\n    border-bottom: 1px solid rgb(0, 168, 230);\n    /* display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center; */\n    display:-ms-grid;\n    display:grid;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n    grid-gap:.2em;\n  }\n\n  #manageFriends,#settings {\n    width: 90vw;\n    margin:3px;\n    padding: 1em;\n    background-color: rgb(206, 232, 243);\n    position: absolute;\n  }\n\n  #iconContainer {\n    width: 80%;\n    margin: 1em 9.9%;\n    display:-ms-grid;\n    display:grid;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 1em;\n \n  }\n\n}\n/* mobile landscape */\n@media (orientation:landscape) and (max-width:760px){\n  #dash {\n    width: 80%;\n    padding: 1em;\n    margin: 1em 9.9%;\n    border-bottom: 1px solid rgb(0, 168, 230);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  #dash>* {\n    margin-right: 5px;\n  }\n  #manageFriends,#settings {\n    margin: auto;\n    padding: 1em;\n    background-color: rgb(206, 232, 243);\n    position: absolute;\n    -webkit-transform: translateX(60%);\n            transform: translateX(60%);\n  }\n\n  #iconContainer {\n    width: 80%;\n    margin: 1em 9.9%;\n    display:-ms-grid;\n    display:grid;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 1em;\n \n  }\n}\n/* tablet portrait */\n@media(orientation:portrait) and (min-width:761px){\n\n  #dash {\n    padding: 1em;\n    border-bottom: 1px solid rgb(0, 168, 230);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n\n  }\n  #dash>* {\n    margin-right: 5px;\n  }\n\n   #manageFriends,#settings {\n    margin: auto;\n    padding: 1em;\n    background-color: rgb(206, 232, 243);\n    position: absolute;\n    -webkit-transform: translateX(60%);\n            transform: translateX(60%);\n  }\n\n  #iconContainer {\n    width: 80%;\n    margin: 1em 9.9%;\n    display:-ms-grid;\n    display:grid;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 1em;\n \n  }\n\n}\n/* tablet landscape and laptop */\n@media(orientation:landscape) and (min-width:1024px){\n  #dash {\n    width: 80%;\n    padding: 1em;\n    margin: 1em 9.9%;\n    border-bottom: 1px solid rgb(0, 168, 230);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  #dash>* {\n    margin-right: 5px;\n  }\n  #manageFriends,#settings {\n    width: 20vw;\n    margin: auto;\n    padding: 1em;\n    background-color: rgb(206, 232, 243);\n    position: absolute;\n    -webkit-transform: translateX(90%);\n            transform: translateX(90%);\n  }\n  \n  #iconContainer {\n    width: 80%;\n    margin: 1em 9.9%;\n    display:-ms-grid;\n    display:grid;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 1em;\n \n  }\n\n}\n"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div id ='container'>\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<div id='container' class='flex-container'>\n\n  <h3><!-- logo -->LBoard</h3>\n\n  <h3>{{userName}}</h3>\n\n  <label *ngIf=\"!authService.loggedIn()\" (click)='toggleLogin()'>Login</label>\n\n  <label *ngIf=\"!authService.loggedIn()\" (click)='showLogin=false' [routerLink]=\"['/register']\">Register</label>\n\n  <label *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/userhome']\">Home</label>\n</div>\n<app-login *ngIf='showLogin' (loggedIn)='toggleLogin()'></app-login>\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<!-- dashboard -->\n\n<div id='dashbar' class='animated bounceInRight '>\n  <div id='friendpicturecontainer' title='Update Profile Picture'>\n    <img id='friendpicture' src=\"{{profileSrc}}\" (click)=\"changeUpdatePhotoState()\" />\n  </div>\n  <div id='flex-container'>\n    <label class=''>{{currentFriend?.name}}</label>\n    <label class=''>#L:{{currentFriend?.lCount}}</label>\n    <!-- <button (click)=\"navUserHome()\">Home</button> -->\n    <button (click)=\"changeAddFormState()\" class='button'>New L</button>\n  </div>\n</div>\n<!-- add L -->\n<form *ngIf=\"showAddForm\" (submit)=\"onAddLSubmit()\" id='addL' class='animated fadeIn'>\n  <img src='../../../assets/cross-out.png' class='exit' (click)='resetFormHelpers()'>\n  <label>Title</label>\n  <input type=\"text\" [(ngModel)]=\"newTitle\" name=\"title\">\n  <label>Description</label>\n  <input id='add-l-width' type=\"text\" [(ngModel)]=\"newDesc\" name=\"desc\">\n  <!-- file input -->\n  <label>Image (optional)</label>\n  <input  type=file (change)='fileChangeListener($event)' />\n  <img-cropper [image]=\"data1\" #cropper [settings]=\"cropperSettings1\" (onCrop)=\"cropped($event)\" ></img-cropper>\n  <button type=\"button\" (click)=\"changeWarningState()\" class='button'>Submit</button>\n  <div id='warning' *ngIf=\"showWarning\">\n    <p>\n      Is your information Correct? The LBoard ensures immutablity of L's\n    </p>\n    <input type=\"submit\" value=\"Yes\" class='button'>\n    <button type='button' (click)=\"resetFormHelpers()\" class='button'> No</button>\n  </div>\n</form>\n<!--  profile upload -->\n<div id='profileupload' *ngIf=\"showUpdatePhoto\" class='animated fadeIn'>\n  <img src='../../../assets/cross-out.png' class='exit' (click)='resetFormHelpers()'>\n\n  <label>Please upload an image of your friend</label>\n  <input  id='profile-width' type=file (change)='fileChangeListener($event)' />\n  <img-cropper [image]=\"data1\" #cropper [settings]=\"cropperSettings1\" (onCrop)=\"cropped($event)\" ></img-cropper>\n  <button id='updatephotosubmit' (click)=\"onUpdatePicture()\" class='button'>Upload</button>\n</div>\n\n<!-- going to be the Ls for display-->\n<div id='lContainer'>\n  <div class='L' *ngFor='let L of Ls'>\n    <div class='top'>\n      <label id='title'>{{L.title}}</label>\n      <label id='date'>{{L.date}}</label>\n    </div>\n    <div class='imagecontainer' *ngIf=\"L.hasImage\">\n      <img class='limage' src=\"data:image/png;base64,{{L.image.data}}\" />\n      <!-- <img class='limage' src=\"{{L.image.data}}\" /> -->\n    </div>\n    <p class='description'> {{L.desc}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<div id='top'>\n    <p  class='lboard'>LBoard</p>\n    <!-- <p>For those mistakes that need to go down in history.</p> -->\n    <p class='lboard-desc' >For the memories too important to forget</p>\n</div>\n<div id='bottom'>\n    <div class='images' id='image1'></div>\n    <div id='text1' class='text-box'>\n        <p class='title'>Memories</p>\n        <p class='content'>Friends and family are what makes life worth living. Friends and family are the reason the LBoard was created. To save events with the ones dearest to you.</p>\n    </div>\n    <div class='images' id='image2'></div>\n    <div id='text2' class='text-box'>\n        <p class='title'>Privacy</p>\n        <p class='content'> You can't deny though that some of your best memories were made doing stupid things. Stupid things you wouldn't want family or employers to see. With the LBoard only you can access your events.</p>\n    </div>\n    <div class='images' id='image3'></div>\n    <div id='text3' class='text-box'>\n        <p class='title'>Immutability</p>\n        <p class='content'>So why LBoard? Ever had an event where someone did something stupid or committed a party foul? Its funny how the story changes by the person who committed such acts. With the LBoard, once its in ... its there for the rest of time.</p>\n    </div>\n</div>"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onLoginSubmit()\" id='container' class='animated bounceInDown'>\n\t<p> Welcome back</p>\n\t<label >Username</label>\n\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\"> \n\t<label >Password</label>\n\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" > \n\t<p class='warning-message'  *ngIf='showWarning'>{{warning}}</p>\n\t<input type=\"submit\"  value=\"Submit\" class='button' id='submit'>\n</form>\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "\n<form (submit)='onRegisterSubmit()' id='container' class='animated fadeIn'>\n    <h3>Please fill out the following</h3>\n    <label >Name</label>\n    <input type='text' [(ngModel)]='name' name='name' >\n\n    <label>Username</label>\n    <input  type='text' [(ngModel)]='username' name='username' >\n\t\n    <label  >Password</label>\n    <input  id='password' type='password'\t[(ngModel)]='password' name='password' >\n    \n\t<label >Retype Password</label>\n    <input  id='retypepassword' type='password' [(ngModel)]='retypepassword' name='retypepassword'>\n    <p class='warning-message' *ngIf='showWarning' [class.success]='warning==\"Registration successful, you can now log in\"'>{{warning}}</p>\n\t<input  class='button' type='submit'  value='Register'>\n</form>\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<!-- USER DASHBOARD -->\n<div id='dash'>\n  <label>Welcome, {{name}}</label>\n\n  <button (click)='setActionSelector(\"manageFriends\")' class='button'>\n    Manage Friends\n  </button>\n\n  <button (click)='setActionSelector(\"settings\")' class='button'>\n    Settings\n  </button>\n\t<flash-messages></flash-messages>\n\n</div>\n\n<!-- manage friends -->\n<div *ngIf='actionSelector==\"manageFriends\"' id='manageFriends' class='animated fadeIn'>\n  <img src='../../../assets/cross-out.png' class='exit'  (click)='resetFormHelpers()'>\n  <form (submit)=\"onAddFriendSubmit()\" id='addFriend'>\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"newFriendName\" name=\"newFriendName\">\n    <input type=\"submit\" value=\"Add Friend\" class='button'>\n  </form>\n  <ul>\n    <li *ngFor='let friend of friends'>{{friend.name}}\n      <button class='liDeleteButton' (click)='deleteFriendChosen(friend._id)'>Delete</button>\n    </li>\n  </ul>\n  <div *ngIf='warningMessage' id='warningmessage'>\n    <p>This action cannot be undone.</p>\n    <!-- <button *ngIf=\"getActionSelectorSettings()\" class='warningoption' (click)='deleteUser()'>Proceed</button> -->\n    <button  (click)='deleteFriend()' class='warning'>Proceed</button>\n    <button  (click)='resetFormHelpers()' class='button'>Cancel</button>\n  </div>\n</div>\n\n<!--settings -->\n<div *ngIf='actionSelector==\"settings\"' id='settings'  class='animated fadeIn'>\n    <img src='../../../assets/cross-out.png' class='exit'  (click)='resetFormHelpers()'>\n  <button class='button' (click)='deleteUserPrompt()'>Delete My Account</button>\n  <button class='button' (click)='onLogoutClick()'> LogOut</button>\n  <div *ngIf=warningMessage id='warningmessage'>\n    <p>This action cannot be undone.</p>\n    <button class='warning' (click)='deleteUser()'>Proceed</button>\n    <button class='button' (click)='resetFormHelpers()'>Cancel</button>\n\n  </div>\n</div>\n<!-- friendw  -->\n<div id='iconContainer'>\n  <div class='friendcontainer' *ngFor='let friend of friends' [ngStyle]=\"setFriendContainerStyle()\">\n    <div class='imagecontainer'>\n      <img [routerLink]=\"['/friendsls', friend._id]\" class='friendimage' src='{{friend.image.data}}' />\n    </div>\n    <label class='friendname'>\n    {{friend.name}}\n      </label>\n  </div>\n</div>\n"

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    //
    //communicates with backend to add user
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('registeruser');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //checks for valid username and password
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //sets jwt token and user in local scope
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    //clears the local storage
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    //checks if a token is in local storage
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    //gives where the http request will be
    AuthService.prototype.prepEndpoint = function (ep) {
        if (!this.isDev) {
            return 'controllers/' + ep;
        }
        else {
            return 'http://localhost:8080/controllers/' + ep;
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/projects/Angular/LBoard2/Angular/src/auth.service.js.map

/***/ })

},[576]);
//# sourceMappingURL=main.bundle.map