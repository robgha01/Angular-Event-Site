webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";


/***/ }),

/***/ "./src/assets/images/clock-preview.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/images/clock-preview.png";

/***/ }),

/***/ "./src/assets/images/favicon.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/images/favicon.jpg";

/***/ }),

/***/ "./src/assets/stylesheets/ie10-viewport-bug-workaround.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./src/assets/stylesheets/ie10-viewport-bug-workaround.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!./ie10-viewport-bug-workaround.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!./ie10-viewport-bug-workaround.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/Generics/bootstrap.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// If you don't have ES6 transpiler or have TypeScript then you could use distributed version but will loose module customization
// import "src/bootstrap/dist/js/bootstrap";


Object.defineProperty(exports, "__esModule", { value: true });
// If you have ES6 transpiler then you could code below and will be able to customize what modules will be included in the build.
__webpack_require__("./node_modules/bootstrap/js/src/alert.js");
__webpack_require__("./node_modules/bootstrap/js/src/button.js");
__webpack_require__("./node_modules/bootstrap/js/src/carousel.js");
__webpack_require__("./node_modules/bootstrap/js/src/collapse.js");
__webpack_require__("./node_modules/bootstrap/js/src/dropdown.js");
__webpack_require__("./node_modules/bootstrap/js/src/modal.js");
__webpack_require__("./node_modules/bootstrap/js/src/popover.js");
__webpack_require__("./node_modules/bootstrap/js/src/scrollspy.js");
__webpack_require__("./node_modules/bootstrap/js/src/tab.js");
__webpack_require__("./node_modules/bootstrap/js/src/tooltip.js");

/***/ }),

/***/ "./src/typescript/alert-box.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var AlertBoxEventType;
(function (AlertBoxEventType) {
    AlertBoxEventType[AlertBoxEventType["Info"] = 0] = "Info";
    AlertBoxEventType[AlertBoxEventType["Success"] = 1] = "Success";
    AlertBoxEventType[AlertBoxEventType["Error"] = 2] = "Error";
    AlertBoxEventType[AlertBoxEventType["Warning"] = 3] = "Warning";
})(AlertBoxEventType = exports.AlertBoxEventType || (exports.AlertBoxEventType = {}));
var AlertBoxOptions = function () {
    function AlertBoxOptions(type, message, showClose) {
        if (showClose === void 0) {
            showClose = true;
        }
        this.type = type;
        this.message = message;
        this.showClose = showClose;
    }
    return AlertBoxOptions;
}();
exports.AlertBoxOptions = AlertBoxOptions;
var AlertBoxService = function () {
    function AlertBoxService(broadcaster) {
        this.broadcaster = broadcaster;
    }
    AlertBoxService.prototype.emit = function (data) {
        var key = this.getKey();
        this.broadcaster.broadcast(key, data);
    };
    AlertBoxService.prototype.on = function () {
        var key = this.getKey();
        return this.broadcaster.on(key);
    };
    AlertBoxService.prototype.getKey = function () {
        return "AlertBoxServiceEventType";
    };
    return AlertBoxService;
}();
AlertBoxService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(bl.BroadcasterService)), __metadata("design:paramtypes", [bl.BroadcasterService])], AlertBoxService);
exports.AlertBoxService = AlertBoxService;

/***/ }),

/***/ "./src/typescript/blueleet/ServiceEvent.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var broadcaster_service_1 = __webpack_require__("./src/typescript/blueleet/broadcaster.service.ts");
var ServiceEventType;
(function (ServiceEventType) {
    ServiceEventType[ServiceEventType["RequestBegin"] = 0] = "RequestBegin";
    ServiceEventType[ServiceEventType["RequestEnd"] = 1] = "RequestEnd";
})(ServiceEventType = exports.ServiceEventType || (exports.ServiceEventType = {}));
var ServiceEvent = function () {
    function ServiceEvent(broadcaster) {
        this.broadcaster = broadcaster;
    }
    ServiceEvent.prototype.emit = function (eventType, data) {
        var key = this.getKey(eventType);
        this.broadcaster.broadcast(key, data);
    };
    ServiceEvent.prototype.on = function (eventType) {
        var key = this.getKey(eventType);
        return this.broadcaster.on(key);
    };
    ServiceEvent.prototype.getKey = function (ofType) {
        switch (ofType) {
            case ServiceEventType.RequestBegin:
                return "ServiceEventType:RequestBegin";
            case ServiceEventType.RequestEnd:
                return "ServiceEventType:RequestEnd";
            default:
                return "ServiceEventType:None";
        }
    };
    return ServiceEvent;
}();
ServiceEvent = __decorate([core_1.Injectable(), __param(0, core_1.Inject(broadcaster_service_1.BroadcasterService)), __metadata("design:paramtypes", [broadcaster_service_1.BroadcasterService])], ServiceEvent);
exports.ServiceEvent = ServiceEvent;

/***/ }),

/***/ "./src/typescript/blueleet/Validator/AsyncObservableValidator.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
/**
 * Async validator that debounce's
 */
var AsyncObservableValidator = function () {
    function AsyncObservableValidator() {}
    AsyncObservableValidator.create = function (callback, debounceTime) {
        if (debounceTime === void 0) {
            debounceTime = 1000;
        }
        var changed$ = new Rx.Subject();
        return function (control) {
            changed$.next(); // This will signal the previous stream (if any) to terminate.
            return control.valueChanges.takeUntil(changed$).take(1).debounceTime(debounceTime, Rx.Scheduler.async).switchMap(function (value) {
                return callback(value);
            });
        };
    };
    ;
    return AsyncObservableValidator;
}();
exports.AsyncObservableValidator = AsyncObservableValidator;

/***/ }),

/***/ "./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var AbstractValueAccessor = function () {
    function AbstractValueAccessor() {
        this._onValueChange = new Rx.Subject();
        this.onValueChange = this._onValueChange.asObservable();
        this.$value$ = "";
        this.$preValue$ = null;
    }
    Object.defineProperty(AbstractValueAccessor.prototype, "value", {
        get: function get() {
            return this.$value$;
        },
        set: function set(v) {
            if (v !== this.$value$) {
                this.$value$ = v;
                this._onValueChange.next(v);
                this.onChange(v);
            }
            if (!this.$preValue$) {
                this.$preValue$ = this.$value$;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AbstractValueAccessor.prototype, "preValue", {
        get: function get() {
            if (!this.$preValue$) {
                this.$preValue$ = this.$value$;
            }
            return this.$preValue$;
        },
        enumerable: true,
        configurable: true
    });
    ;
    AbstractValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
    };
    AbstractValueAccessor.prototype.onChange = function (_) {};
    ;
    AbstractValueAccessor.prototype.onTouched = function () {};
    ;
    AbstractValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AbstractValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return AbstractValueAccessor;
}();
exports.AbstractValueAccessor = AbstractValueAccessor;
function MakeProvider(type) {
    return { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () {
            return type;
        }), multi: true };
}
exports.MakeProvider = MakeProvider;

/***/ }),

/***/ "./src/typescript/blueleet/blueleet-umbraco.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
var core_2 = __webpack_require__("./node_modules/angular2-cookie/core.js");
var umbraco_ajax_Service_1 = __webpack_require__("./src/typescript/blueleet/umbraco-ajax-Service.ts");
var config_service_1 = __webpack_require__("./src/typescript/blueleet/config.service.ts");
var broadcaster_service_1 = __webpack_require__("./src/typescript/blueleet/broadcaster.service.ts");
var ServiceEvent_service_1 = __webpack_require__("./src/typescript/blueleet/ServiceEvent.service.ts");
var module_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/module.ts");
var capitalize_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/capitalize.pipe.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var truncate_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/truncate.pipe.ts");
var fader_component_1 = __webpack_require__("./src/typescript/blueleet/components/fader/fader.component.ts");
var pace_progress_component_1 = __webpack_require__("./src/typescript/blueleet/components/load-indicator/pace-progress.component.ts");
var BlueLeetUmbracoModule = BlueLeetUmbracoModule_1 = function () {
    function BlueLeetUmbracoModule() {}
    BlueLeetUmbracoModule.forRoot = function () {
        return {
            ngModule: BlueLeetUmbracoModule_1,
            providers: [core_2.CookieService, truncate_pipe_1.TruncatePipe, capitalize_pipe_1.CapitalizePipe, broadcaster_service_1.BroadcasterService, umbraco_ajax_Service_1.UmbracoAjaxService, config_service_1.ConfigService, ServiceEvent_service_1.ServiceEvent]
        };
    };
    return BlueLeetUmbracoModule;
}();
BlueLeetUmbracoModule = BlueLeetUmbracoModule_1 = __decorate([core_1.NgModule({
    imports: [common_1.CommonModule, http_1.HttpModule, animations_1.BrowserAnimationsModule, forms_1.ReactiveFormsModule, module_1.InlineEditorModule],
    exports: [truncate_pipe_1.TruncatePipe, capitalize_pipe_1.CapitalizePipe, fader_component_1.FaderComponent, pace_progress_component_1.PaceProgressComponent, module_1.InlineEditorModule],
    declarations: [truncate_pipe_1.TruncatePipe, capitalize_pipe_1.CapitalizePipe, fader_component_1.FaderComponent, pace_progress_component_1.PaceProgressComponent]
})], BlueLeetUmbracoModule);
exports.BlueLeetUmbracoModule = BlueLeetUmbracoModule;
var BlueLeetUmbracoModule_1;

/***/ }),

/***/ "./src/typescript/blueleet/broadcaster.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var BroadcasterService = function () {
    function BroadcasterService() {
        this.eventBus = new Rx.Subject();
    }
    BroadcasterService.prototype.broadcast = function (key, data) {
        this.eventBus.next({ key: key, data: data });
    };
    BroadcasterService.prototype.on = function (key) {
        var observable = this.eventBus.asObservable().filter(function (event) {
            if (event.key === key) {
                return true;
            }
            return false;
        }).map(function (event) {
            return event.data;
        });
        return observable;
    };
    return BroadcasterService;
}();
BroadcasterService = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [])], BroadcasterService);
exports.BroadcasterService = BroadcasterService;

/***/ }),

/***/ "./src/typescript/blueleet/components/fader/fader.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FaderComponent = function () {
    function FaderComponent() {
        this.isVisible = true;
    }
    return FaderComponent;
}();
__decorate([core_1.Input(), __metadata("design:type", Boolean)], FaderComponent.prototype, "isVisible", void 0);
FaderComponent = __decorate([core_1.Component({
    selector: "bl-fader",
    animations: [core_1.trigger("visibilityChanged", [core_1.state("true", core_1.style({ opacity: 1 })), core_1.state("false", core_1.style({ opacity: 0 })), core_1.transition("1 => 0", core_1.animate(300, core_1.keyframes([core_1.style({ "opacity": "1" }), core_1.style({ "opacity": "0.7" }), core_1.style({ "opacity": "0" })]))), core_1.transition("0 => 1", core_1.animate(300, core_1.keyframes([core_1.style({ "opacity": "0" }), core_1.style({ "opacity": "0.7" }), core_1.style({ "opacity": "1" })])))])],
    template: "\n      <div [@visibilityChanged]=\"isVisible\" >\n        <ng-content></ng-content>\n      </div>\n  "
})], FaderComponent);
exports.FaderComponent = FaderComponent;

/***/ }),

/***/ "./src/typescript/blueleet/components/load-indicator/pace-progress.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var Pace = __webpack_require__("./node_modules/pace-progress/pace.js");
var PaceProgressComponent = function () {
  function PaceProgressComponent(zone, elementRef) {
    this.zone = zone;
    this.elementRef = elementRef;
    this.defaultOptions = {
      /**
       * How long should it take for the bar to animate to a new
       * point after receiving it
       */
      catchupTime: 100,
      /**
       * How quickly should the bar be moving before it has any progress
       * info from a new source in %/ms
       */
      initialRate: .03,
      /**
       * What is the minimum amount of time the bar should be on the
       * screen.  Irrespective of this number, the bar will always be on screen for
       * 33 * (100 / maxProgressPerFrame) + ghostTime ms.
       */
      minTime: 250,
      /**
       * What is the minimum amount of time the bar should sit after the last update before disappearing
       */
      ghostTime: 100,
      /**
       * Its easy for a bunch of the bar to be eaten in the first few frames
       * before we know how much there is to load.  This limits how much of
       * the bar can be used per frame
       */
      maxProgressPerFrame: 20,
      /**
       * This tweaks the animation easing
       */
      easeFactor: 1.25,
      /**
       * Should pace automatically start when the page is loaded, or should it wait for `start` to
       * be called?  Always false if pace is loaded with AMD or CommonJS.
       */
      startOnPageLoad: true,
      /**
       * Should we restart the browser when pushState or replaceState is called? (Generally
       * means Ajax navigation has occurred)
       */
      restartOnPushState: true,
      /**
       * Should we show the progress bar for every Ajax request (not just regular or Ajax-y page
       * navigation)? Set to false to disable.
       *
       * If so, how many ms does the request have to be running for before we show the progress?
       */
      restartOnRequestAfter: 5000,
      /**
       * What element should the pace element be appended to on the page?
       */
      target: "body",
      elements: {
        /**
         * How frequently in ms should we check for the elements being tested for
         * using the element monitor?
         */
        checkInterval: 100,
        /**
         * What elements should we wait for before deciding the page is fully loaded (not required)
         */
        selectors: ["body"]
      },
      eventLag: {
        /**
         * When we first start measuring event lag, not much is going on in the browser yet, so it's
         * not uncommon for the numbers to be abnormally low for the first few samples.  This configures
         * how many samples we need before we consider a low number to mean completion.
         */
        minSamples: 10,
        /**
         * How many samples should we average to decide what the current lag is?
         */
        sampleCount: 3,
        /**
         * Above how many ms of lag is the CPU considered busy?
         */
        lagThreshold: 3
      },
      ajax: {
        /**
         * Which HTTP methods should we track?
         */
        trackMethods: ["GET", "POST"],
        /**
         * Should we track web socket connections?
         */
        trackWebSockets: false,
        /**
         * A list of regular expressions or substrings of URLS we should ignore (for both tracking and restarting)
         */
        ignoreURLs: [/\/umbraco/, /\/dev-server\.js/, /\/browserLink/]
      }
    };
  }
  PaceProgressComponent.prototype.ngOnInit = function () {
    var opt = {};
    $.extend(opt, this.defaultOptions, this.options);
    Pace.start(opt);
  };
  return PaceProgressComponent;
}();
__decorate([core_1.Input("options"), __metadata("design:type", Object)], PaceProgressComponent.prototype, "options", void 0);
PaceProgressComponent = __decorate([core_1.Component({
  selector: "pace-progress",
  template: "<div class=\"pace-overlay\"></div>"
}), __param(0, core_1.Inject(core_1.NgZone)), __param(1, core_1.Inject(core_1.ElementRef)), __metadata("design:paramtypes", [core_1.NgZone, core_1.ElementRef])], PaceProgressComponent);
exports.PaceProgressComponent = PaceProgressComponent;

/***/ }),

/***/ "./src/typescript/blueleet/config.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _values = __webpack_require__("./node_modules/babel-runtime/core-js/object/values.js");

var _values2 = _interopRequireDefault(_values);

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var core_2 = __webpack_require__("./node_modules/angular2-cookie/core.js");
var ConfigService = function () {
    function ConfigService($http, window, cookieService) {
        this.$http = $http;
        this.window = window;
        this.cookieService = cookieService;
        this.siteConstants = {};
        this.localStore = {};
        this.cookieKey = "configsKey";
        this.localStorageKey = this.cookieKey + ":localStorage";
        this.useCookieStore = true;
        this.loadingInProgress = false;
        this.configSubject = new Rx.BehaviorSubject(null);
        this.configObservable = this.configSubject.asObservable();
        this.url = window.location.protocol + "//" + window.location.host + "/" + "umbraco/surface/configsurface/index";
    }
    ConfigService.prototype.getCookieConfigs = function () {
        if (this.useCookieStore) {
            var cookieValue = this.cookieService.getObject(this.cookieKey);
            if (cookieValue) {
                return cookieValue;
            }
        }
        return null;
    };
    ConfigService.prototype.setCookieConfigs = function (data) {
        if (this.useCookieStore) {
            var expireDate = new Date();
            expireDate.setMinutes(expireDate.getMinutes() + 30);
            this.cookieService.putObject(this.cookieKey, data, { expires: expireDate });
        }
    };
    ConfigService.prototype.ensureConfigs = function () {
        var _this = this;
        var tryGetCookie = this.getCookieConfigs();
        if (tryGetCookie != null) {
            return new _promise2.default(function (resolve) {
                resolve(tryGetCookie);
            });
        }
        if ((0, _keys2.default)(this.siteConstants).length) {
            return new _promise2.default(function (resolve) {
                resolve(_this.siteConstants);
            });
        }
        // No siteConstants found, load them.
        if (!this.loadingInProgress) {
            this.loadingInProgress = true;
            var observable = this.$http.post(this.url, null).finally(function () {
                return _this.loadingInProgress = false;
            }).map(function (res) {
                return res.json();
            }).toPromise().then(function (configs) {
                // Assign the configuration keys with the correct properties from the server.
                var keys = (0, _keys2.default)(configs);
                var values = (0, _values2.default)(configs);
                keys.forEach(function (key, i) {
                    var value = values[i];
                    _this.siteConstants[key] = value;
                });
                _this.setCookieConfigs(_this.siteConstants);
                _this.configSubject.next(_this.siteConstants);
                return _this.siteConstants;
            });
            return observable;
        }
        return this.configObservable.toPromise();
    };
    ConfigService.prototype.getLocalConfig = function (key) {
        return this.localStore[key];
    };
    ConfigService.prototype.addLocalConfig = function (key, value) {
        var tryGetValue = this.getLocalConfig(key);
        if (tryGetValue) {
            this.localStore[key] = value;
        }
    };
    ;
    ConfigService.prototype.setLocalConfig = function (key, value) {
        this.localStore[key] = value;
    };
    return ConfigService;
}();
ConfigService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(http_1.Http)), __param(1, core_1.Inject(Window)), __param(2, core_1.Inject(core_2.CookieService)), __metadata("design:paramtypes", [http_1.Http, Object, core_2.CookieService])], ConfigService);
exports.ConfigService = ConfigService;

/***/ }),

/***/ "./src/typescript/blueleet/extensions/ObjectExtensions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;
Object.isNullOrUndefined = function (object) {
    return !(object !== null && object !== undefined);
};
Object.isNotNullOrUndefined = function (object) {
    return object !== null && object !== undefined;
};
Object.getQueryStringValue = function (param) {
    var sPageUrl = window.location.search.substring(1);
    var sUrlVariables = sPageUrl.split("&");
    for (var i = 0; i < sUrlVariables.length; i++) {
        var sParameterName = sUrlVariables[i].split("=");
        if (sParameterName[0] === param) {
            return decodeURIComponent(sParameterName[1]);
        }
    }
    return null;
};

/***/ }),

/***/ "./src/typescript/blueleet/extensions/StringExtensions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;
String.isNullOrEmpty = function (str) {
    return !str;
};
String.prototype.asUrl = function () {
    var url;
    try {
        url = new URL(this);
    } catch (e) {
        // url is not absolut
        url = new URL(this, document.baseURI);
    }
    return url;
};

/***/ }),

/***/ "./src/typescript/blueleet/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module
 * @description
 * Entry point for all public APIs.
 */
__export(__webpack_require__("./src/typescript/blueleet/broadcaster.service.ts"));
__export(__webpack_require__("./src/typescript/blueleet/umbraco-ajax-Service.ts"));
__export(__webpack_require__("./src/typescript/blueleet/config.service.ts"));
__export(__webpack_require__("./src/typescript/blueleet/ServiceEvent.service.ts"));
// Export modules
__export(__webpack_require__("./src/typescript/blueleet/blueleet-umbraco.module.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/commonDirectives/module.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/module.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/widgets/module.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/language/module.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/language/translator.service.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/cache/module.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/search/module.ts"));

/***/ }),

/***/ "./src/typescript/blueleet/modules/cache/cache.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var core_2 = __webpack_require__("./node_modules/angular2-cookie/core.js");
var storageAvailable = __webpack_require__("./node_modules/storage-available/storage-available.js");
var CacheType;
(function (CacheType) {
    CacheType[CacheType["Session"] = 0] = "Session";
    CacheType[CacheType["Local"] = 1] = "Local";
    CacheType[CacheType["Cookie"] = 2] = "Cookie";
})(CacheType = exports.CacheType || (exports.CacheType = {}));
var CacheProviderBase = function () {
    function CacheProviderBase() {
        /**
         * Prefix for all cache keys
         */
        this.cachePrefix = "bl-";
        /**
         * Suffix for the key name on the expiration items in localStorage
         */
        this.cacheSuffix = "-cacheExpiration";
        /**
         * Expiration date radix (set to Base-36 for most space savings)
         */
        this.expiryRadix = 10;
    }
    return CacheProviderBase;
}();
exports.CacheProviderBase = CacheProviderBase;
var WindowStorageCacheProviderBase = function (_super) {
    __extends(WindowStorageCacheProviderBase, _super);
    function WindowStorageCacheProviderBase(storage, storageSupported) {
        var _this = _super.call(this) || this;
        _this.storage = storage;
        _this.storageSupported = storageSupported;
        _this.isSupported = storageSupported;
        return _this;
    }
    WindowStorageCacheProviderBase.prototype.getCacheItem = function (cacheKey, getCacheItem, expireDate) {
        var _this = this;
        if (this.storageSupported === false) {
            return _promise2.default.resolve(null);
        }
        var item = this.storage.getItem(cacheKey);
        if (item === null) {
            return getCacheItem().then(function (value) {
                var entry = { data: value, expire: expireDate };
                _this.storage.setItem(cacheKey, (0, _stringify2.default)(entry));
                return value;
            });
        }
        try {
            var entry_1 = JSON.parse(item);
            /* return entry as is if not expired. */
            if (!entry_1.data && !entry_1.expire) {
                return _promise2.default.resolve(entry_1);
            }
            var data = entry_1.data,
                expire = entry_1.expire;
            var now = new Date();
            var expiration = new Date(expire);
            if (expire !== -1 && now.getTime() > expiration.getTime()) {
                this.storage.removeItem(cacheKey);
                return getCacheItem().then(function (value) {
                    entry_1 = { data: value, expire: expireDate };
                    _this.storage.setItem(cacheKey, (0, _stringify2.default)(entry_1));
                    return value;
                });
            }
            return _promise2.default.resolve(data);
        } catch (e) {
            /* return item as is if not an object. */
            return _promise2.default.resolve(item);
        }
    };
    WindowStorageCacheProviderBase.prototype.insertCacheItem = function (cacheKey, getCacheItem, expireDate) {
        if (this.storageSupported === false) {
            return;
        }
        getCacheItem().then(function (value) {
            var entry = { data: value, expire: expireDate };
            window.sessionStorage.setItem(cacheKey, (0, _stringify2.default)(entry));
            return value;
        });
    };
    WindowStorageCacheProviderBase.prototype.removeCacheItem = function (cacheKey) {
        if (this.storageSupported === false) {
            return;
        }
        this.storage.removeItem(cacheKey);
    };
    return WindowStorageCacheProviderBase;
}(CacheProviderBase);
exports.WindowStorageCacheProviderBase = WindowStorageCacheProviderBase;
var CacheService = function () {
    function CacheService(sessionCache, localCache, cookieCache) {
        this.sessionCache = sessionCache;
        this.localCache = localCache;
        this.cookieCache = cookieCache;
    }
    CacheService.prototype.getCacheItem = function (cacheKey, getCacheItem, cacheType, expireDate) {
        if (cacheType === void 0) {
            cacheType = CacheType.Session;
        }
        if (cacheType === CacheType.Local && this.localCache.isSupported) {
            return this.localCache.getCacheItem(cacheKey, getCacheItem, expireDate);
        } else if (cacheType === CacheType.Session && this.sessionCache.isSupported) {
            return this.sessionCache.getCacheItem(cacheKey, getCacheItem, expireDate);
        } else {
            return this.cookieCache.getCacheItem(cacheKey, getCacheItem, expireDate);
        }
    };
    CacheService.prototype.insertCacheItem = function (cacheKey, getCacheItem, cacheType, expireDate) {
        if (cacheType === void 0) {
            cacheType = CacheType.Session;
        }
        if (cacheType === CacheType.Local && this.localCache.isSupported) {
            return this.localCache.insertCacheItem(cacheKey, getCacheItem, expireDate);
        } else if (cacheType === CacheType.Session && this.sessionCache.isSupported) {
            return this.sessionCache.insertCacheItem(cacheKey, getCacheItem, expireDate);
        } else {
            return this.cookieCache.insertCacheItem(cacheKey, getCacheItem, expireDate);
        }
    };
    return CacheService;
}();
CacheService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(core_1.forwardRef(function () {
    return SessionStorageCacheProvider;
}))), __param(1, core_1.Inject(core_1.forwardRef(function () {
    return LocalStorageCacheProvider;
}))), __param(2, core_1.Inject(core_1.forwardRef(function () {
    return CookieCacheService;
}))), __metadata("design:paramtypes", [SessionStorageCacheProvider, LocalStorageCacheProvider, CookieCacheService])], CacheService);
exports.CacheService = CacheService;
var SessionStorageCacheProvider = function (_super) {
    __extends(SessionStorageCacheProvider, _super);
    function SessionStorageCacheProvider(cookieService) {
        var _this = _super.call(this, window.sessionStorage, storageAvailable("sessionStorage")) || this;
        _this.cookieService = cookieService;
        return _this;
    }
    return SessionStorageCacheProvider;
}(WindowStorageCacheProviderBase);
SessionStorageCacheProvider = __decorate([core_1.Injectable(), __param(0, core_1.Inject(core_2.CookieService)), __metadata("design:paramtypes", [core_2.CookieService])], SessionStorageCacheProvider);
exports.SessionStorageCacheProvider = SessionStorageCacheProvider;
var LocalStorageCacheProvider = function (_super) {
    __extends(LocalStorageCacheProvider, _super);
    function LocalStorageCacheProvider(cookieService) {
        var _this = _super.call(this, window.localStorage, storageAvailable("localStorage")) || this;
        _this.cookieService = cookieService;
        return _this;
    }
    return LocalStorageCacheProvider;
}(WindowStorageCacheProviderBase);
LocalStorageCacheProvider = __decorate([core_1.Injectable(), __param(0, core_1.Inject(core_2.CookieService)), __metadata("design:paramtypes", [core_2.CookieService])], LocalStorageCacheProvider);
exports.LocalStorageCacheProvider = LocalStorageCacheProvider;
var CookieCacheService = function (_super) {
    __extends(CookieCacheService, _super);
    function CookieCacheService(cookieService) {
        var _this = _super.call(this) || this;
        _this.cookieService = cookieService;
        return _this;
    }
    CookieCacheService.prototype.getCacheItem = function (cacheKey, getCacheItem, expireDate) {
        var _this = this;
        if (expireDate === void 0) {
            expireDate = null;
        }
        var item = this.cookieService.getObject(this.cachePrefix + ":" + cacheKey);
        if (item === undefined || item === null) {
            return getCacheItem().then(function (value) {
                if (expireDate) {
                    _this.cookieService.putObject(_this.cachePrefix + ":" + cacheKey, value, { expires: expireDate });
                } else {
                    _this.cookieService.putObject(_this.cachePrefix + ":" + cacheKey, value);
                }
                return value;
            });
        }
        return _promise2.default.resolve(item);
    };
    CookieCacheService.prototype.insertCacheItem = function (cacheKey, getCacheItem, expireDate) {
        var _this = this;
        if (expireDate === void 0) {
            expireDate = null;
        }
        getCacheItem().then(function (value) {
            if (expireDate) {
                _this.cookieService.putObject(_this.cachePrefix + ":" + cacheKey, value, { expires: expireDate });
            } else {
                _this.cookieService.putObject(_this.cachePrefix + ":" + cacheKey, value);
            }
        });
    };
    CookieCacheService.prototype.removeCacheItem = function (cacheKey) {
        this.cookieService.remove(this.cachePrefix + ":" + cacheKey);
    };
    return CookieCacheService;
}(CacheProviderBase);
CookieCacheService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(core_2.CookieService)), __metadata("design:paramtypes", [core_2.CookieService])], CookieCacheService);
exports.CookieCacheService = CookieCacheService;

/***/ }),

/***/ "./src/typescript/blueleet/modules/cache/module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var cache_service_1 = __webpack_require__("./src/typescript/blueleet/modules/cache/cache.service.ts");
var CacheModule = function () {
    function CacheModule() {}
    return CacheModule;
}();
CacheModule = __decorate([core_1.NgModule({
    imports: [common_1.CommonModule],
    exports: [],
    providers: [cache_service_1.CacheService, cache_service_1.SessionStorageCacheProvider, cache_service_1.LocalStorageCacheProvider, cache_service_1.CookieCacheService]
})], CacheModule);
exports.CacheModule = CacheModule;

/***/ }),

/***/ "./src/typescript/blueleet/modules/commonDirectives/focus.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var focus_service_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.service.ts");
var FocuserDirective = function () {
    function FocuserDirective(element, focusService) {
        this.element = element;
        this.focusService = focusService;
        this.focuser = false; // focus this element when "OnChange" or "AfterContentChecked" is triggered if this is set to true.
        this.contentChecked = null;
    }
    FocuserDirective.prototype.ngOnChanges = function (changes) {
        var focus = changes["focuser"];
        // We only wants to focus if the previous value was false.
        if (focus.currentValue && focus.previousValue === false) {
            this.focusService.focus(this.element);
        }
    };
    FocuserDirective.prototype.ngAfterContentInit = function () {
        this.focusService.register(this, this.element);
    };
    FocuserDirective.prototype.ngAfterContentChecked = function () {
        if (this.focuser) {
            // We need to track if this is the first call to content checked.
            if (this.contentChecked === null) {
                this.contentChecked = false;
                return;
            }
            // If content checked is set to false we run the focus else do nothing.
            if (this.contentChecked === false) {
                this.contentChecked = true;
                this.focusService.focus(this.element);
            }
        }
    };
    return FocuserDirective;
}();
__decorate([core_1.Input(), __metadata("design:type", Boolean)], FocuserDirective.prototype, "focuser", void 0);
FocuserDirective = __decorate([core_1.Directive({ selector: "[focuser]" }), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(focus_service_1.FocusService)), __metadata("design:paramtypes", [core_1.ElementRef, focus_service_1.FocusService])], FocuserDirective);
exports.FocuserDirective = FocuserDirective;

/***/ }),

/***/ "./src/typescript/blueleet/modules/commonDirectives/focus.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FocusService = function () {
    function FocusService() {
        this.focusDirectives = [];
    }
    FocusService.prototype.register = function (focusDir, element) {
        this.focusDirectives.push({ focusDir: focusDir, element: element });
    };
    FocusService.prototype.focus = function (element) {
        var _this = this;
        this.focusDirectives.forEach(function (value) {
            if (element === value.element) {
                _this.doFocus(value);
            }
        });
    };
    FocusService.prototype.reFocus = function () {
        this.focusDirectives.forEach(function (value) {
            if (value.focusDir.hasFocus) {
                value.element.nativeElement.focus(); // Trigger a focus.
            }
        });
    };
    FocusService.prototype.doFocus = function (item) {
        // Reset all hasFocus to false exept item
        this.focusDirectives.forEach(function (value) {
            if (item !== value) {
                value.focusDir.hasFocus = false;
                value.focusDir.focuser = false;
            }
        });
        item.element.nativeElement.focus(); // Trigger the focus.
        item.focusDir.focuser = true; // Ensure item focus is true.
        item.focusDir.hasFocus = true; // Ensure item hasFocus is true.
    };
    return FocusService;
}();
FocusService = __decorate([core_1.Injectable()], FocusService);
exports.FocusService = FocusService;

/***/ }),

/***/ "./src/typescript/blueleet/modules/commonDirectives/module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var focus_directive_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.directive.ts");
var scrollTo_directive_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/scrollTo.directive.ts");
var waypointSticky_directive_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/waypointSticky.directive.ts");
var showAtScroll_directive_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/showAtScroll.directive.ts");
var CommonDirectivesModule = function () {
    function CommonDirectivesModule() {}
    return CommonDirectivesModule;
}();
CommonDirectivesModule = __decorate([core_1.NgModule({
    imports: [common_1.CommonModule],
    exports: [focus_directive_1.FocuserDirective, scrollTo_directive_1.ScrollToDirective, waypointSticky_directive_1.WaypointStickyDirective, showAtScroll_directive_1.ShowAtScrollDirective],
    declarations: [focus_directive_1.FocuserDirective, scrollTo_directive_1.ScrollToDirective, waypointSticky_directive_1.WaypointStickyDirective, showAtScroll_directive_1.ShowAtScrollDirective]
})], CommonDirectivesModule);
exports.CommonDirectivesModule = CommonDirectivesModule;

/***/ }),

/***/ "./src/typescript/blueleet/modules/commonDirectives/scrollTo.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var ScrollToDirective = function () {
    function ScrollToDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.scrollDuration = 1000;
    }
    ScrollToDirective.prototype.onClick = function (event) {
        event.preventDefault();
        var scrollOptions = null;
        if (Object.isNotNullOrUndefined(this.scrollTo) && this.scrollTo !== "") {
            if (_.isNumber(this.scrollTo)) {
                scrollOptions = {
                    scrollTop: this.scrollTo
                };
            } else {
                var target = $(this.scrollTo);
                if (target.length) {
                    scrollOptions = {
                        scrollTop: target.offset().top
                    };
                }
            }
        }
        if (!scrollOptions) {
            // If we get here just scroll until this element is no longer in the viewport
            var offset = this.element.offset();
            var bottom = offset.top + this.element.outerHeight();
            scrollOptions = {
                scrollTop: bottom
            };
        }
        $("html, body").stop().animate(scrollOptions, this.scrollDuration);
    };
    ScrollToDirective.prototype.ngOnInit = function () {
        this.element = $(this.elementRef.nativeElement);
        if (!this.scrollTo) {
            var href = this.element.attr("href");
            if (href.startsWith("#")) {
                this.scrollTo = href;
            }
        }
    };
    return ScrollToDirective;
}();
__decorate([core_1.Input("scroll-to"), __metadata("design:type", String)], ScrollToDirective.prototype, "scrollTo", void 0);
__decorate([core_1.Input("scroll-duration"), __metadata("design:type", Number)], ScrollToDirective.prototype, "scrollDuration", void 0);
__decorate([core_1.HostListener("click", ["$event"]), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], ScrollToDirective.prototype, "onClick", null);
ScrollToDirective = __decorate([core_1.Directive({ selector: "[scroll-to]" }), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Renderer)), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])], ScrollToDirective);
exports.ScrollToDirective = ScrollToDirective;

/***/ }),

/***/ "./src/typescript/blueleet/modules/commonDirectives/showAtScroll.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var ShowAtScrollDirective = function () {
    function ShowAtScrollDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.onStateChange = new Rx.BehaviorSubject(false);
        this.isVisible = false;
        this.hasView = false;
    }
    ShowAtScrollDirective.prototype.onWindowScroll = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop < 0) {
            scrollTop = 0;
        }
        if (scrollTop > $("body").height() - $(window).height()) {
            scrollTop = $("body").height() - $(window).height();
        }
        // console.log($(window).scrollTop(), scrollTop);
        this.isVisible = scrollTop > this.showAtScroll;
        this.onStateChange.next(this.isVisible);
    };
    ShowAtScrollDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.viewContainer.clear();
        this.hasView = false;
        this.onStateChange.subscribe(function (showView) {
            if (showView && !_this.hasView) {
                _this.hasView = true;
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            } else if (!showView && _this.hasView) {
                _this.hasView = false;
                _this.viewContainer.clear();
            }
        });
        // Check if we should show this view or not after the view has initialized.
        this.onWindowScroll();
        Rx.Observable.fromEvent(window, "scroll").throttle(function () {
            return _this.onStateChange;
        }).subscribe(function () {
            _this.onWindowScroll();
        });
    };
    return ShowAtScrollDirective;
}();
__decorate([core_1.Input(), __metadata("design:type", Number)], ShowAtScrollDirective.prototype, "showAtScroll", void 0);
ShowAtScrollDirective = __decorate([core_1.Directive({ selector: "[showAtScroll]" }), __param(0, core_1.Inject(core_1.TemplateRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __metadata("design:paramtypes", [core_1.TemplateRef, core_1.ViewContainerRef])], ShowAtScrollDirective);
exports.ShowAtScrollDirective = ShowAtScrollDirective;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/typescript/blueleet/modules/commonDirectives/waypointSticky.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
__webpack_require__("./node_modules/waypoints/lib/jquery.waypoints.js");
__webpack_require__("./node_modules/waypoints/lib/shortcuts/sticky.js");
var WaypointStickyDirective = function () {
    function WaypointStickyDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.scrolled = false;
        this.scrollTopBoundry = 10;
        this.scrollEventLock = new Rx.BehaviorSubject(null);
        this.prevScrollTop = $(window).scrollTop();
    }
    WaypointStickyDirective.prototype.ngOnInit = function () {
        var self = this;
        this.options = _.extend({}, { bottom: "", top: "", scrolledClass: "scrolled", stuckClass: "stuck" }, this.options);
        var el = $(this.elementRef.nativeElement);
        var offset = el.position().top;
        // ReSharper disable once UnusedLocals
        var sticky = new Waypoint.Sticky({
            element: $(this.elementRef.nativeElement)[0],
            stuckClass: this.options.stuckClass
        });
        $("body").waypoint({
            offset: -(this.scrollTopBoundry + offset),
            handler: function handler() {
                // add / remove scrolled class
                el.toggleClass(self.options.scrolledClass);
                // remove swatch class
                var prefix = "swatch-";
                var classes = el[0].className.split(" ").filter(function (c) {
                    return c.lastIndexOf(prefix, 0) !== 0;
                });
                el[0].className = classes.join(" ");
                // add back swatch class depending on direction above / below scroll point
                // menuContainer.addClass(oxyThemeData.navbarScrolledSwatches[direction]);
                el.one("MSTransitionEnd webkitTransitionEnd oTransitionEnd transitionend", function () {
                    // refresh waypoints only once transition ends in order to get correct offsets for sections.
                    if (!el.hasClass("refreshing")) {
                        Waypoint.refreshAll();
                    }
                    el.toggleClass("refreshing");
                });
            }
        });
    };
    return WaypointStickyDirective;
}();
__decorate([core_1.Input("waypoint-sticky"), __metadata("design:type", Object)], WaypointStickyDirective.prototype, "options", void 0);
WaypointStickyDirective = __decorate([core_1.Directive({ selector: "[waypoint-sticky]" }), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Renderer)), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])], WaypointStickyDirective);
exports.WaypointStickyDirective = WaypointStickyDirective;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/datetime/datetime.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var inline_editor_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var capitalize_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/capitalize.pipe.ts");
var InlineEditorContext_service_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var focus_service_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.service.ts");
var InlineDatetimeComponent = InlineDatetimeComponent_1 = function (_super) {
    __extends(InlineDatetimeComponent, _super);
    function InlineDatetimeComponent(element, renderer, zone, contextService, contextGroupService) {
        var _this = _super.call(this, element, renderer, zone, contextService, contextGroupService) || this;
        _this.element = element;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.contextService = contextService;
        _this.contextGroupService = contextGroupService;
        return _this;
    }
    // Method to display the editable value as text and emit save event to host
    InlineDatetimeComponent.prototype.onSubmit = function (value) {
        if (value === void 0) {
            value = this.value;
        }
        _super.prototype.onSubmit.call(this, value);
    };
    return InlineDatetimeComponent;
}(inline_editor_component_1.InlineEditorComponent);
InlineDatetimeComponent = InlineDatetimeComponent_1 = __decorate([core_1.Component({
    selector: "inline-datetime-editor",
    template: __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/editor-base.html") + __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/datetime/datetime.html"),
    styles: [__webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.scss").toString()],
    providers: [AbstractValueAccessor_1.MakeProvider(InlineDatetimeComponent_1), { provide: inline_editor_component_1.InlineEditorComponent, useExisting: core_1.forwardRef(function () {
            return InlineDatetimeComponent_1;
        }), multi: true }, capitalize_pipe_1.CapitalizePipe, InlineEditorContext_service_1.InlineEditorContextService, focus_service_1.FocusService]
}), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.NgZone, InlineEditorContext_service_1.InlineEditorContextService, InlineEditorContext_service_1.InlineEditorGroupContextService])], InlineDatetimeComponent);
exports.InlineDatetimeComponent = InlineDatetimeComponent;
var InlineDatetimeComponent_1;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/datetime/datetime.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #DefaultPresentation>\r\n    <div *ngIf=\"!editing\">\r\n        <a [ngClass]=\"{'editable-empty': isEmpty }\" (click)=\"edit(value)\">{{ presentControl() }}</a>\r\n    </div>\r\n</ng-template>\r\n<ng-template #DefaultEdit>\r\n    <input #inlineEditControl class=\"form-control\" (blur)=\"onTouched()\" (focusout)=\"onTouched()\" [value]=\"value\" (input)=\"value = $event.target.value\" [required]=\"required\"\r\n           type=\"datetime\" [disabled]=\"disabled\" [name]=\"name\" [(focuser)]=\"focusThis\" />\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/editor-base.html":
/***/ (function(module, exports) {

module.exports = "<ng-template *ngIf=\"showPresentation()\" [ngTemplateOutlet]=\"this.presentationTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>\r\n\r\n<div class=\"inlineEditForm\" *ngIf=\"showEdit() && !openInModal\">\r\n    <div class=\"form-group\" [class.row]=\"formHorizontal\">\r\n        <ng-template [ngTemplateOutlet]=\"this.editTemplate\" [ngOutletContext]=\"{ $implicit: this }\">\r\n        </ng-template>\r\n        <div *ngIf=\"showButtons\" class=\"btn-group\" role=\"saveOrCancel\" aria-label=\"save or cancel\">\r\n            <button [disabled]=\"invalid\" class=\"btn btn-sm btn-primary\" (click)=\"onSubmit(value)\"><span class=\"fa fa-check\"></span></button>\r\n            <button class=\"btn btn-sm btn-danger\" (click)=\"cancel()\"><span class=\"fa fa-remove\"></span></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"openInModal\" bsModal #editModal=\"bs-modal\" #editModalRef (onShown)=\"onModalShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title pull-left\">Redigera</h4>\r\n                <button class=\"close\" (click)=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Stäng</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <ng-template [ngTemplateOutlet]=\"this.editTemplate\" [ngOutletContext]=\"{ $implicit: this }\">\r\n                </ng-template>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-secondary\" (click)=\"cancel()\"><span class=\"fa fa-remove\"></span> Avbryt</button>\r\n                <button [disabled]=\"invalid\" class=\"btn btn-primary\" (click)=\"onSubmit(value)\"><span class=\"fa fa-check\"></span> Spara</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/numeric/numeric.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var inline_editor_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var capitalize_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/capitalize.pipe.ts");
var InlineEditorContext_service_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var focus_service_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.service.ts");
var numericTypes = ["range", "number"];
var InlineNumericComponent = InlineNumericComponent_1 = function (_super) {
    __extends(InlineNumericComponent, _super);
    function InlineNumericComponent(element, renderer, zone, contextService, contextGroupService) {
        var _this = _super.call(this, element, renderer, zone, contextService, contextGroupService) || this;
        _this.element = element;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.contextService = contextService;
        _this.contextGroupService = contextGroupService;
        _this.min = 1;
        _this.max = Infinity;
        _this.type = "number";
        return _this;
    }
    // Method to display the editable value as text and emit save event to host
    InlineNumericComponent.prototype.onSubmit = function (value) {
        if (value === void 0) {
            value = this.value;
        }
        // This is for the range editor.
        var length = numericTypes.indexOf(this.type) !== -1 ? Number(value) : value.length;
        if (length < this.min || length > this.max) {}
        _super.prototype.onSubmit.call(this, value);
    };
    return InlineNumericComponent;
}(inline_editor_component_1.InlineEditorComponent);
__decorate([core_1.Input(), __metadata("design:type", Number)], InlineNumericComponent.prototype, "min", void 0);
__decorate([core_1.Input(), __metadata("design:type", Object)], InlineNumericComponent.prototype, "max", void 0);
InlineNumericComponent = InlineNumericComponent_1 = __decorate([core_1.Component({
    selector: "inline-numeric-editor",
    template: __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/editor-base.html") + __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/numeric/numeric.html"),
    styles: [__webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.scss").toString()],
    providers: [AbstractValueAccessor_1.MakeProvider(InlineNumericComponent_1), { provide: inline_editor_component_1.InlineEditorComponent, useExisting: core_1.forwardRef(function () {
            return InlineNumericComponent_1;
        }), multi: true }, capitalize_pipe_1.CapitalizePipe, InlineEditorContext_service_1.InlineEditorContextService, focus_service_1.FocusService]
}), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.NgZone, InlineEditorContext_service_1.InlineEditorContextService, InlineEditorContext_service_1.InlineEditorGroupContextService])], InlineNumericComponent);
exports.InlineNumericComponent = InlineNumericComponent;
var InlineNumericComponent_1;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/numeric/numeric.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #DefaultPresentation>\r\n    <div *ngIf=\"!editing\">\r\n        <a [ngClass]=\"{'editable-empty': isEmpty }\" (click)=\"edit(value)\">{{ presentControl() }}</a>\r\n    </div>\r\n</ng-template>\r\n<ng-template #DefaultEdit>\r\n    <input #inlineEditControl class=\"form-control\" [value]=\"value\" (input)=\"value = $event.target.value\" [required]=\"required\"\r\n           (blur)=\"onTouched()\" (focusout)=\"onTouched()\"\r\n           type=\"range\" [disabled]=\"disabled\" [max]=\"max\" [min]=\"min\" [name]=\"name\" [(focuser)]=\"focusThis\" />\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/password/password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var inline_editor_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var capitalize_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/capitalize.pipe.ts");
var InlineEditorContext_service_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var focus_service_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.service.ts");
var InlinePasswordComponent = InlinePasswordComponent_1 = function (_super) {
    __extends(InlinePasswordComponent, _super);
    function InlinePasswordComponent(element, renderer, zone, contextService, contextGroupService) {
        var _this = _super.call(this, element, renderer, zone, contextService, contextGroupService) || this;
        _this.element = element;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.contextService = contextService;
        _this.contextGroupService = contextGroupService;
        return _this;
    }
    // Method to display the editable value as text and emit save event to host
    InlinePasswordComponent.prototype.onSubmit = function (value) {
        if (value === void 0) {
            value = this.value;
        }
        _super.prototype.onSubmit.call(this, value);
    };
    InlinePasswordComponent.prototype.presentControl = function () {
        return "*".repeat(this.value.length);
    };
    return InlinePasswordComponent;
}(inline_editor_component_1.InlineEditorComponent);
InlinePasswordComponent = InlinePasswordComponent_1 = __decorate([core_1.Component({
    selector: "inline-password-editor",
    template: __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/editor-base.html") + __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/password/password.html"),
    styles: [__webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.scss").toString()],
    providers: [AbstractValueAccessor_1.MakeProvider(InlinePasswordComponent_1), { provide: inline_editor_component_1.InlineEditorComponent, useExisting: core_1.forwardRef(function () {
            return InlinePasswordComponent_1;
        }), multi: true }, capitalize_pipe_1.CapitalizePipe, InlineEditorContext_service_1.InlineEditorContextService, focus_service_1.FocusService]
}), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.NgZone, InlineEditorContext_service_1.InlineEditorContextService, InlineEditorContext_service_1.InlineEditorGroupContextService])], InlinePasswordComponent);
exports.InlinePasswordComponent = InlinePasswordComponent;
var InlinePasswordComponent_1;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/password/password.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #DefaultPresentation>\r\n    <div *ngIf=\"!editing\">\r\n        <a [ngClass]=\"{'editable-empty': isEmpty }\" (click)=\"edit(value)\">{{ presentControl() }}</a>\r\n    </div>\r\n</ng-template>\r\n<ng-template #DefaultEdit>\r\n    <input #inlineEditControl class=\"form-control\" [value]=\"value\" (input)=\"value = $event.target.value\" [required]=\"required\"\r\n           (blur)=\"onTouched()\" (focusout)=\"onTouched()\"\r\n           type=\"password\" [disabled]=\"disabled\" [name]=\"name\" [placeholder]=\"placeholder\" [size]=\"size\" [(focuser)]=\"focusThis\" />\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/select/select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var inline_editor_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var capitalize_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/capitalize.pipe.ts");
var InlineEditorContext_service_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var focus_service_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.service.ts");
var InlineSelectComponent = InlineSelectComponent_1 = function (_super) {
    __extends(InlineSelectComponent, _super);
    function InlineSelectComponent(element, renderer, zone, contextService, contextGroupService) {
        var _this = _super.call(this, element, renderer, zone, contextService, contextGroupService) || this;
        _this.element = element;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.contextService = contextService;
        _this.contextGroupService = contextGroupService;
        return _this;
    }
    Object.defineProperty(InlineSelectComponent.prototype, "options", {
        get: function get() {
            return this.$options$;
        },
        set: function set(options) {
            this.$options$ = options;
        },
        enumerable: true,
        configurable: true
    });
    // Method to display the editable value as text and emit save event to host
    InlineSelectComponent.prototype.onSubmit = function (value) {
        if (value === void 0) {
            value = this.value;
        }
        _super.prototype.onSubmit.call(this, value);
    };
    return InlineSelectComponent;
}(inline_editor_component_1.InlineEditorComponent);
__decorate([core_1.Input(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], InlineSelectComponent.prototype, "options", null);
InlineSelectComponent = InlineSelectComponent_1 = __decorate([core_1.Component({
    selector: "inline-select-editor",
    template: __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/editor-base.html") + __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/select/select.html"),
    styles: [__webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.scss").toString()],
    providers: [AbstractValueAccessor_1.MakeProvider(InlineSelectComponent_1), { provide: inline_editor_component_1.InlineEditorComponent, useExisting: core_1.forwardRef(function () {
            return InlineSelectComponent_1;
        }), multi: true }, capitalize_pipe_1.CapitalizePipe, InlineEditorContext_service_1.InlineEditorContextService, focus_service_1.FocusService]
}), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.NgZone, InlineEditorContext_service_1.InlineEditorContextService, InlineEditorContext_service_1.InlineEditorGroupContextService])], InlineSelectComponent);
exports.InlineSelectComponent = InlineSelectComponent;
var InlineSelectComponent_1;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/select/select.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #DefaultPresentation>\r\n    <div *ngIf=\"!editing\">\r\n        <a [ngClass]=\"{'editable-empty': isEmpty }\" (click)=\"edit(value)\">{{ presentControl() }}</a>\r\n    </div>\r\n</ng-template>\r\n<ng-template #DefaultEdit>\r\n    <select #inlineEditControl class=\"form-control\" [value]=\"value\" (change)=\"value = $event.target.value\" (blur)=\"onTouched()\" (focusout)=\"onTouched()\" [(focuser)]=\"focusThis\">\r\n        <option *ngFor=\"let opt of options\" [value]=\"opt\">{{opt}}</option>\r\n    </select>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/text/text.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var inline_editor_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var capitalize_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/capitalize.pipe.ts");
var InlineEditorContext_service_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var focus_service_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.service.ts");
var InlineTextComponent = InlineTextComponent_1 = function (_super) {
    __extends(InlineTextComponent, _super);
    function InlineTextComponent(element, renderer, zone, contextService, contextGroupService) {
        var _this = _super.call(this, element, renderer, zone, contextService, contextGroupService) || this;
        _this.element = element;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.contextService = contextService;
        _this.contextGroupService = contextGroupService;
        return _this;
    }
    // Method to display the editable value as text and emit save event to host
    InlineTextComponent.prototype.onSubmit = function (value) {
        if (value === void 0) {
            value = this.value;
        }
        _super.prototype.onSubmit.call(this, value);
    };
    return InlineTextComponent;
}(inline_editor_component_1.InlineEditorComponent);
InlineTextComponent = InlineTextComponent_1 = __decorate([core_1.Component({
    selector: "inline-text-editor",
    template: __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/editor-base.html") + __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/text/text.html"),
    styles: [__webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.scss").toString()],
    providers: [AbstractValueAccessor_1.MakeProvider(InlineTextComponent_1), { provide: inline_editor_component_1.InlineEditorComponent, useExisting: core_1.forwardRef(function () {
            return InlineTextComponent_1;
        }), multi: true }, capitalize_pipe_1.CapitalizePipe, InlineEditorContext_service_1.InlineEditorContextService, focus_service_1.FocusService]
}), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.NgZone, InlineEditorContext_service_1.InlineEditorContextService, InlineEditorContext_service_1.InlineEditorGroupContextService])], InlineTextComponent);
exports.InlineTextComponent = InlineTextComponent;
var InlineTextComponent_1;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/text/text.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #DefaultPresentation>\r\n    <div *ngIf=\"!editing\">\r\n        <a [ngClass]=\"{'editable-empty': isEmpty }\" (click)=\"edit(value)\">{{ presentControl() }}</a>\r\n    </div>\r\n</ng-template>\r\n<ng-template #DefaultEdit>\r\n    <input #inlineEditControl class=\"form-control\" id=\"inline-editor-{{ this.name }}\" [value]=\"value\" (input)=\"value = $event.target.value\"\r\n           (blur)=\"onTouched()\" (focusout)=\"onTouched()\"\r\n           [required]=\"required\" [disabled]=\"disabled\" [name]=\"name\" [placeholder]=\"placeholder\" [(focuser)]=\"focusThis\" />\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/textarea/textarea.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var inline_editor_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var capitalize_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/capitalize.pipe.ts");
var InlineEditorContext_service_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var focus_service_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.service.ts");
var InlineTextareaComponent = InlineTextareaComponent_1 = function (_super) {
    __extends(InlineTextareaComponent, _super);
    function InlineTextareaComponent(element, renderer, zone, contextService, contextGroupService) {
        var _this = _super.call(this, element, renderer, zone, contextService, contextGroupService) || this;
        _this.element = element;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.contextService = contextService;
        _this.contextGroupService = contextGroupService;
        _this.cols = 50;
        _this.rows = 4;
        return _this;
    }
    // Method to display the editable value as text and emit save event to host
    InlineTextareaComponent.prototype.onSubmit = function (value) {
        if (value === void 0) {
            value = this.value;
        }
        _super.prototype.onSubmit.call(this, value);
    };
    return InlineTextareaComponent;
}(inline_editor_component_1.InlineEditorComponent);
__decorate([core_1.Input(), __metadata("design:type", Number)], InlineTextareaComponent.prototype, "cols", void 0);
__decorate([core_1.Input(), __metadata("design:type", Number)], InlineTextareaComponent.prototype, "rows", void 0);
InlineTextareaComponent = InlineTextareaComponent_1 = __decorate([core_1.Component({
    selector: "inline-textarea-editor",
    template: __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/editor-base.html") + __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/textarea/textarea.html"),
    styles: [__webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.scss").toString()],
    providers: [AbstractValueAccessor_1.MakeProvider(InlineTextareaComponent_1), { provide: inline_editor_component_1.InlineEditorComponent, useExisting: core_1.forwardRef(function () {
            return InlineTextareaComponent_1;
        }), multi: true }, capitalize_pipe_1.CapitalizePipe, InlineEditorContext_service_1.InlineEditorContextService, focus_service_1.FocusService]
}), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.NgZone, InlineEditorContext_service_1.InlineEditorContextService, InlineEditorContext_service_1.InlineEditorGroupContextService])], InlineTextareaComponent);
exports.InlineTextareaComponent = InlineTextareaComponent;
var InlineTextareaComponent_1;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/editors/textarea/textarea.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #DefaultPresentation>\r\n    <div *ngIf=\"!editing\">\r\n        <a [ngClass]=\"{'editable-empty': isEmpty }\" (click)=\"edit(value)\">{{ presentControl() }}</a>\r\n    </div>\r\n</ng-template>\r\n<ng-template #DefaultEdit>\r\n    <textarea [rows]=\"rows\" [cols]=\"cols\" #inlineEditControl class=\"form-control\" [value]=\"value\" (change)=\"value = $event.target.value\"\r\n              (blur)=\"onTouched()\" (focusout)=\"onTouched()\"\r\n              [required]=\"required\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" [(focuser)]=\"focusThis\"></textarea>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module
 * @description
 * Entry point for all inline editors.
 */
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var InlineEditorContext_service_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var inline_editor_group_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor-group.component.ts");
var inline_editor_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts");
var numeric_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/numeric/numeric.component.ts");
var select_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/select/select.component.ts");
var datetime_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/datetime/datetime.component.ts");
var password_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/password/password.component.ts");
var text_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/text/text.component.ts");
var textarea_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/textarea/textarea.component.ts");
// exports
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor-group.component.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/datetime/datetime.component.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/numeric/numeric.component.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/password/password.component.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/select/select.component.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/text/text.component.ts"));
__export(__webpack_require__("./src/typescript/blueleet/modules/inline-editor/editors/textarea/textarea.component.ts"));
function inizialize() {
    var inlineEditors = [datetime_component_1.InlineDatetimeComponent, numeric_component_1.InlineNumericComponent, password_component_1.InlinePasswordComponent, select_component_1.InlineSelectComponent, text_component_1.InlineTextComponent, textarea_component_1.InlineTextareaComponent];
    var editors = [inline_editor_group_component_1.InlineEditorGroupComponent, inline_editor_group_component_1.ButtonChangeComponent, inline_editor_component_1.RenderEditorComponent, inline_editor_component_1.PresentationStateComponent, inline_editor_component_1.EditStateComponent].concat(inlineEditors);
    var editorProviders = [];
    var exports = editors;
    var _loop_1 = function _loop_1(editor) {
        var provider = AbstractValueAccessor_1.MakeProvider(editor);
        // Register a value accessor.
        editorProviders.push(provider);
        // Register a relation between base and implamentor.
        editorProviders.push({ provide: inline_editor_component_1.InlineEditorComponent, useExisting: core_1.forwardRef(function () {
                return editor;
            }), multi: true });
    };
    for (var _i = 0, inlineEditors_1 = inlineEditors; _i < inlineEditors_1.length; _i++) {
        var editor = inlineEditors_1[_i];
        _loop_1(editor);
    }
    editorProviders.push(InlineEditorContext_service_1.InlineEditorContextService);
    editorProviders.push(InlineEditorContext_service_1.InlineEditorGroupContextService);
    return { editors: editors, editorProviders: editorProviders, exports: exports };
}
exports.inizialize = inizialize;
;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/inline-editor-group.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var inline_editor_component_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts");
var focus_service_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/focus.service.ts");
var InlineEditorContext_service_1 = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var InlineEditorState;
(function (InlineEditorState) {
    InlineEditorState[InlineEditorState["Save"] = 0] = "Save";
    InlineEditorState[InlineEditorState["Edit"] = 1] = "Edit";
    InlineEditorState[InlineEditorState["Cancel"] = 2] = "Cancel";
})(InlineEditorState = exports.InlineEditorState || (exports.InlineEditorState = {}));
var ButtonChangeComponent = function () {
    function ButtonChangeComponent() {}
    return ButtonChangeComponent;
}();
__decorate([core_1.Input(), __metadata("design:type", InlineEditorGroupComponent)], ButtonChangeComponent.prototype, "inlineEditorGroup", void 0);
ButtonChangeComponent = __decorate([core_1.Component({
    selector: "button-change",
    template: "<button class=\"btn btn-default\" (click)=\"this.inlineEditorGroup.edit()\"><span class=\"fa fa-pencil\"></span> <ng-content></ng-content></button>"
})], ButtonChangeComponent);
exports.ButtonChangeComponent = ButtonChangeComponent;
var InlineEditorGroupComponent = function () {
    function InlineEditorGroupComponent(element, renderer, focusService, contextGroupService) {
        this.element = element;
        this.renderer = renderer;
        this.focusService = focusService;
        this.contextGroupService = contextGroupService;
        // Events
        this.onSave = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
        // Settings
        this.disableSave = false;
        this.openInModal = false;
        this.visible = true;
        this.subjectStateChange = new Rx.ReplaySubject(1);
        this.stateChange = this.subjectStateChange.asObservable();
        this.editTemplates = [];
        this.isEditing = false;
    }
    InlineEditorGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.contextGroupService.editorGroupInstance.value === null) {
            this.inlineEditors.forEach(function (item) {
                item.openInModal = false;
                item.showButtons = false;
                item.showEditState = _this.openInModal === false;
                item.onSave = null;
                item.onEdit = null;
                item.onCancel = null;
                item.onClick = function () {};
                if (item.editing === false && _this.isEditing) {
                    item.edit();
                }
            });
            this.contextGroupService.editorGroupInstance.next(this);
        }
    };
    InlineEditorGroupComponent.prototype.ngOnInit = function () {};
    InlineEditorGroupComponent.prototype.onShown = function () {
        if (this.openInModal) {
            this.focusService.reFocus();
        }
    };
    InlineEditorGroupComponent.prototype.toggleGroupModal = function () {
        var _this = this;
        if (this.editGroupModal.isShown) {
            this.editGroupModal.hide();
        } else {
            this.editGroupModal.show();
        }
        this.inlineEditors.forEach(function (item) {
            item.editing = _this.editGroupModal.isShown;
        });
    };
    InlineEditorGroupComponent.prototype.edit = function () {
        this.isEditing = true;
        if (this.openInModal) {
            this.toggleGroupModal();
        } else {
            this.inlineEditors.forEach(function (item) {
                item.edit();
            });
        }
        if (this.onEdit) {
            this.onEdit.emit(this);
        }
        this.subjectStateChange.next(InlineEditorState.Edit);
    };
    // Method to display the editable value as text and emit save event to host
    InlineEditorGroupComponent.prototype.onSubmit = function () {
        this.isEditing = false;
        this.subjectStateChange.next(InlineEditorState.Save);
        this.onSave.emit(this);
        if (this.openInModal) {
            this.toggleGroupModal();
        }
        this.inlineEditors.forEach(function (item) {
            item.onSubmit();
        });
    };
    // Method to reset the editable value
    InlineEditorGroupComponent.prototype.cancel = function () {
        this.isEditing = false;
        if (this.openInModal) {
            this.toggleGroupModal();
        }
        this.inlineEditors.forEach(function (item) {
            item.cancel();
        });
        if (this.onCancel) {
            this.onCancel.emit(this);
        }
        this.subjectStateChange.next(InlineEditorState.Cancel);
    };
    return InlineEditorGroupComponent;
}();
__decorate([core_1.ViewChild("editGroupModal"), __metadata("design:type", ngx_bootstrap_1.ModalDirective)], InlineEditorGroupComponent.prototype, "editGroupModal", void 0);
__decorate([core_1.ContentChildren(inline_editor_component_1.InlineEditorComponent, { descendants: true }), __metadata("design:type", core_1.QueryList)], InlineEditorGroupComponent.prototype, "inlineEditors", void 0);
__decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InlineEditorGroupComponent.prototype, "onSave", void 0);
__decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InlineEditorGroupComponent.prototype, "onEdit", void 0);
__decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InlineEditorGroupComponent.prototype, "onCancel", void 0);
__decorate([core_1.Input(), __metadata("design:type", Boolean)], InlineEditorGroupComponent.prototype, "disableSave", void 0);
__decorate([core_1.Input(), __metadata("design:type", Boolean)], InlineEditorGroupComponent.prototype, "openInModal", void 0);
__decorate([core_1.Input(), __metadata("design:type", Boolean)], InlineEditorGroupComponent.prototype, "visible", void 0);
InlineEditorGroupComponent = __decorate([core_1.Component({
    selector: "inline-editor-group",
    template: __webpack_require__("./src/typescript/blueleet/modules/inline-editor/inline-editor-group.html"),
    providers: [focus_service_1.FocusService, InlineEditorContext_service_1.InlineEditorGroupContextService]
}), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, focus_service_1.FocusService, InlineEditorContext_service_1.InlineEditorGroupContextService])], InlineEditorGroupComponent);
exports.InlineEditorGroupComponent = InlineEditorGroupComponent;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/inline-editor-group.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n\r\n<div *ngIf=\"openInModal\" bsModal #editGroupModal=\"bs-modal\" (onShown)=\"onShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title pull-left\">Redigera</h4>\r\n                <button class=\"close\" (click)=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Stäng</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"modal-item\" *ngFor=\"let editor of inlineEditors\">\r\n                    <ng-template [ngTemplateOutlet]=\"editor.editTemplate\" [ngOutletContext]=\"{ $implicit: editor }\">\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-secondary\" (click)=\"cancel()\"><span class=\"fa fa-remove\"></span> Avbryt</button>\r\n                <button [disabled]=\"invalid\" class=\"btn btn-primary\" (click)=\"onSubmit(value)\"><span class=\"fa fa-check\"></span> Spara</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<button *ngIf=\"!isEditing\" class=\"btn btn-secondary\" (click)=\"edit()\"><span class=\"fa fa-pencil\"></span> Ändra</button>\r\n<div class=\"btn-group\" role=\"group\" aria-label=\"Avbryt eller spara\" *ngIf=\"!openInModal && isEditing\">\r\n    <button class=\"btn btn-secondary\" (click)=\"cancel()\"><span class=\"fa fa-remove\"></span> Avbryt</button>\r\n    <button [disabled]=\"this.disableSave\" class=\"btn btn-primary\" (click)=\"onSubmit(value)\"><span class=\"fa fa-check\"></span> Spara</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/inline-editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var EditorContextService = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts");
var RenderEditorComponent = function () {
    function RenderEditorComponent(contextService) {
        this.contextService = contextService;
        this.editor = null;
    }
    RenderEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextService.editorInstance.subscribe(function (value) {
            if (Object.isNotNullOrUndefined(value)) {
                _this.editor = value;
            }
        });
    };
    return RenderEditorComponent;
}();
__decorate([core_1.Input(), __metadata("design:type", Object)], RenderEditorComponent.prototype, "editor", void 0);
RenderEditorComponent = __decorate([core_1.Component({
    selector: "render-editor",
    template: "<ng-template [ngTemplateOutlet]=\"editor?.defaultEditTemplate\" [ngOutletContext]=\"{ $implicit: this?.editor }\"></ng-template>"
}), __metadata("design:paramtypes", [EditorContextService.InlineEditorContextService])], RenderEditorComponent);
exports.RenderEditorComponent = RenderEditorComponent;
var PresentationStateComponent = function () {
    function PresentationStateComponent(contextService) {
        this.contextService = contextService;
        this.editor = null;
    }
    PresentationStateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextService.editorInstance.subscribe(function (value) {
            if (Object.isNotNullOrUndefined(value)) {
                _this.editor = value;
            }
        });
    };
    return PresentationStateComponent;
}();
__decorate([core_1.ContentChild(core_1.TemplateRef), __metadata("design:type", core_1.TemplateRef)], PresentationStateComponent.prototype, "template", void 0);
__decorate([core_1.Input(), __metadata("design:type", Object)], PresentationStateComponent.prototype, "editor", void 0);
PresentationStateComponent = __decorate([core_1.Component({
    selector: "presentation-state",
    template: "<ng-template *ngIf=\"this.editor\" [ngTemplateOutlet]=\"this?.template\" [ngOutletContext]=\"{ $implicit: editor }\"></ng-template>"
}), __metadata("design:paramtypes", [EditorContextService.InlineEditorContextService])], PresentationStateComponent);
exports.PresentationStateComponent = PresentationStateComponent;
var EditStateComponent = function () {
    function EditStateComponent(contextService) {
        this.contextService = contextService;
        this.editor = null;
    }
    EditStateComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.contextService.editorInstance.subscribe(function (value) {
            if (Object.isNotNullOrUndefined(value)) {
                _this.editor = value;
            }
        });
    };
    return EditStateComponent;
}();
__decorate([core_1.ContentChild(core_1.TemplateRef), __metadata("design:type", core_1.TemplateRef)], EditStateComponent.prototype, "template", void 0);
__decorate([core_1.Input(), __metadata("design:type", Object)], EditStateComponent.prototype, "editor", void 0);
EditStateComponent = __decorate([core_1.Component({
    selector: "edit-state",
    template: "<ng-template *ngIf=\"this.editor\" [ngTemplateOutlet]=\"this?.template\" [ngOutletContext]=\"{ $implicit: editor }\"></ng-template>"
}), __metadata("design:paramtypes", [EditorContextService.InlineEditorContextService])], EditStateComponent);
exports.EditStateComponent = EditStateComponent;
var InlineEditorComponent = function (_super) {
    __extends(InlineEditorComponent, _super);
    function InlineEditorComponent(element, renderer, zone, contextService, contextGroupService) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.contextService = contextService;
        _this.contextGroupService = contextGroupService;
        // Events
        _this.onSave = new core_1.EventEmitter();
        _this.onEdit = new core_1.EventEmitter();
        _this.onCancel = new core_1.EventEmitter();
        _this.formHorizontal = true;
        _this.showEditState = null;
        return _this;
    }
    InlineEditorComponent.prototype.onClick = function ($event) {
        var targetElement = $event.target;
        if (this.editModalRef.nativeElement.contains(targetElement)) {
            // We are in the edit modal.
            return;
        }
        if (this.showButtons) {
            this.edit();
        }
    };
    InlineEditorComponent.prototype.showPresentation = function () {
        if (Object.isNotNullOrUndefined(this.showEditState) && this.showEditState === false) {
            return true;
        }
        if (this.openInModal) {
            return true;
        }
        if (this.editing === false) {
            return true;
        }
        return false;
    };
    InlineEditorComponent.prototype.showEdit = function () {
        if (Object.isNotNullOrUndefined(this.showEditState) && this.showEditState === false) {
            return false;
        }
        return this.editing;
    };
    InlineEditorComponent.prototype.onModalShown = function () {};
    InlineEditorComponent.prototype.setDisabledState = function (isDisabled) {
        this.invalid = isDisabled;
    };
    InlineEditorComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.contextGroupService.editorGroupInstance.subscribe(function (editorGroup) {
            if (editorGroup) {
                _this.editorGroup = editorGroup;
                _this.showButtons = false;
                if (_this.editorGroup.isEditing && _this.editing === false) {
                    _this.edit();
                }
            }
        });
        if (this.editorGroup) {
            this.showButtons = false;
            if (this.editorGroup.isEditing && this.editing === false) {
                this.edit();
            }
        }
    };
    InlineEditorComponent.prototype.ngOnInit = function () {
        this.setDefaults();
        if (Object.isNotNullOrUndefined(this.inputPresentationTemplate)) {
            this.presentationTemplate = this.inputPresentationTemplate.template;
        } else {
            this.presentationTemplate = this.defaultPresentationTemplate;
        }
        if (Object.isNotNullOrUndefined(this.inputEditTemplate)) {
            this.editTemplate = this.inputEditTemplate.template;
        } else {
            this.editTemplate = this.defaultEditTemplate;
        }
        if (this.editModal) {
            this.editModal.config = { backdrop: "static" };
        }
        this.contextService.editorInstance.next(this);
    };
    InlineEditorComponent.prototype.writeValue = function (value) {
        if (value) {
            _super.prototype.writeValue.call(this, value);
            this.isEmpty = false;
        } else {
            this.isEmpty = true;
        }
    };
    InlineEditorComponent.prototype.hasValue = function () {
        return !this.isEmpty;
    };
    // Method to display the editable value as text and emit save event to host
    InlineEditorComponent.prototype.onSubmit = function (value) {
        if (value === void 0) {
            value = this.value;
        }
        this.writeValue(value);
        if (this.onSave) {
            this.onSave.emit(value);
        }
        if (this.editModal) {
            this.editModal.hide();
        }
        this.editing = false;
        this.isEmpty = false;
    };
    // Method to display the inline edit form and hide the <a> element
    InlineEditorComponent.prototype.edit = function (value) {
        if (value === void 0) {
            value = this.value;
        }
        this.$preValue$ = value; // Store original value in case the form is cancelled
        this.editing = true;
        if (this.onEdit) {
            this.onEdit.emit(this);
        }
        if (this.openInModal && this.editModal) {
            this.editModal.show();
        }
    };
    // Method to reset the editable value
    InlineEditorComponent.prototype.cancel = function () {
        this.value = this.$preValue$;
        if (this.editModal) {
            this.editModal.hide();
        }
        this.editing = false;
        if (this.onCancel) {
            this.onCancel.emit(this);
        }
    };
    InlineEditorComponent.prototype.presentControl = function () {
        return this.isEmpty ? this.empty : this.value;
    };
    InlineEditorComponent.prototype.setDefaults = function () {
        // Configuratable properties.
        if (Object.isNullOrUndefined(this.type)) {
            this.type = "text";
        }
        if (Object.isNullOrUndefined(this.disabled)) {
            this.disabled = false;
        }
        if (Object.isNullOrUndefined(this.placeholder)) {
            this.placeholder = "";
        }
        if (Object.isNullOrUndefined(this.name)) {
            this.name = "";
        }
        if (Object.isNullOrUndefined(this.size)) {
            this.size = 8;
        }
        if (Object.isNullOrUndefined(this.openInModal)) {
            this.openInModal = false;
        }
        if (Object.isNullOrUndefined(this.focusThis)) {
            this.focusThis = false;
        }
        if (Object.isNullOrUndefined(this.empty)) {
            this.empty = "empty";
        }
        // Public state properties.
        if (Object.isNullOrUndefined(this.showButtons)) {
            this.showButtons = true;
        }
        if (Object.isNullOrUndefined(this.editing)) {
            this.editing = false;
        }
        if (Object.isNullOrUndefined(this.isEmpty)) {
            this.isEmpty = false;
        }
        if (Object.isNullOrUndefined(this.invalid)) {
            this.invalid = false;
        }
    };
    return InlineEditorComponent;
}(AbstractValueAccessor_1.AbstractValueAccessor);
__decorate([core_1.ViewChild("inlineEditControl"), __metadata("design:type", core_1.ElementRef)], InlineEditorComponent.prototype, "inlineEditControl", void 0);
__decorate([core_1.ViewChild("editModal"), __metadata("design:type", ngx_bootstrap_1.ModalDirective)], InlineEditorComponent.prototype, "editModal", void 0);
__decorate([core_1.ViewChild("editModalRef"), __metadata("design:type", core_1.ElementRef)], InlineEditorComponent.prototype, "editModalRef", void 0);
__decorate([core_1.ContentChild(RenderEditorComponent), __metadata("design:type", RenderEditorComponent)], InlineEditorComponent.prototype, "renderEditorComponent", void 0);
__decorate([core_1.ViewChild("DefaultPresentation"), __metadata("design:type", core_1.TemplateRef)], InlineEditorComponent.prototype, "defaultPresentationTemplate", void 0);
__decorate([core_1.ViewChild("DefaultEdit"), __metadata("design:type", core_1.TemplateRef)], InlineEditorComponent.prototype, "defaultEditTemplate", void 0);
__decorate([core_1.ContentChild(PresentationStateComponent), __metadata("design:type", PresentationStateComponent)], InlineEditorComponent.prototype, "inputPresentationTemplate", void 0);
__decorate([core_1.ContentChild(EditStateComponent), __metadata("design:type", EditStateComponent)], InlineEditorComponent.prototype, "inputEditTemplate", void 0);
__decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InlineEditorComponent.prototype, "onSave", void 0);
__decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InlineEditorComponent.prototype, "onEdit", void 0);
__decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InlineEditorComponent.prototype, "onCancel", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], InlineEditorComponent.prototype, "type", void 0);
__decorate([core_1.Input(), __metadata("design:type", Boolean)], InlineEditorComponent.prototype, "disabled", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], InlineEditorComponent.prototype, "placeholder", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], InlineEditorComponent.prototype, "name", void 0);
__decorate([core_1.Input(), __metadata("design:type", Number)], InlineEditorComponent.prototype, "size", void 0);
__decorate([core_1.Input(), __metadata("design:type", Boolean)], InlineEditorComponent.prototype, "openInModal", void 0);
__decorate([core_1.Input(), __metadata("design:type", Boolean)], InlineEditorComponent.prototype, "focusThis", void 0);
__decorate([core_1.Input(), __metadata("design:type", Boolean)], InlineEditorComponent.prototype, "formHorizontal", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], InlineEditorComponent.prototype, "empty", void 0);
__decorate([core_1.HostListener("click", ["$event"]), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], InlineEditorComponent.prototype, "onClick", null);
exports.InlineEditorComponent = InlineEditorComponent;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/inline-editor.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/blueleet/modules/inline-editor/inline-editor.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js!./inline-editor.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js!./inline-editor.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_select_compat_1 = __webpack_require__("./node_modules/ng2-select-compat/index.js");
var alert_1 = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var index = __webpack_require__("./src/typescript/blueleet/modules/inline-editor/index.ts");
var module_1 = __webpack_require__("./src/typescript/blueleet/modules/commonDirectives/module.ts");
var configs = index.inizialize();
var InlineEditorModule = InlineEditorModule_1 = function () {
    function InlineEditorModule() {}
    InlineEditorModule.forRoot = function () {
        return {
            ngModule: InlineEditorModule_1,
            providers: configs.editorProviders
        };
    };
    return InlineEditorModule;
}();
InlineEditorModule = InlineEditorModule_1 = __decorate([core_1.NgModule({
    imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, module_1.CommonDirectivesModule, ng2_select_compat_1.SelectModule, alert_1.AlertModule.forRoot(), modal_1.ModalModule.forRoot()],
    exports: configs.exports,
    declarations: configs.editors
})], InlineEditorModule);
exports.InlineEditorModule = InlineEditorModule;
var InlineEditorModule_1;

/***/ }),

/***/ "./src/typescript/blueleet/modules/inline-editor/services/InlineEditorContext.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var InlineEditorContextService = function () {
    function InlineEditorContextService() {
        this.editorInstance = new Rx.BehaviorSubject(null);
    }
    return InlineEditorContextService;
}();
InlineEditorContextService = __decorate([core_1.Injectable()], InlineEditorContextService);
exports.InlineEditorContextService = InlineEditorContextService;
var InlineEditorGroupContextService = function () {
    function InlineEditorGroupContextService() {
        this.editorGroupInstance = new Rx.BehaviorSubject(null);
    }
    return InlineEditorGroupContextService;
}();
InlineEditorGroupContextService = __decorate([core_1.Injectable()], InlineEditorGroupContextService);
exports.InlineEditorGroupContextService = InlineEditorGroupContextService;

/***/ }),

/***/ "./src/typescript/blueleet/modules/language/module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var translator_service_1 = __webpack_require__("./src/typescript/blueleet/modules/language/translator.service.ts");
var module_1 = __webpack_require__("./src/typescript/blueleet/modules/cache/module.ts");
var LanguageModule = function () {
    function LanguageModule() {}
    return LanguageModule;
}();
LanguageModule = __decorate([core_1.NgModule({
    imports: [common_1.CommonModule, module_1.CacheModule],
    exports: [module_1.CacheModule],
    declarations: [],
    providers: [translator_service_1.TranslatorService]
})], LanguageModule);
exports.LanguageModule = LanguageModule;

/***/ }),

/***/ "./src/typescript/blueleet/modules/language/translator.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var umbraco_ajax_Service_1 = __webpack_require__("./src/typescript/blueleet/umbraco-ajax-Service.ts");
var cache_service_1 = __webpack_require__("./src/typescript/blueleet/modules/cache/cache.service.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var TranslatorService = function () {
    function TranslatorService(umbracoAjaxService, cacheService) {
        this.umbracoAjaxService = umbracoAjaxService;
        this.cacheService = cacheService;
    }
    TranslatorService.prototype.translate = function (key, altText, cache) {
        var _this = this;
        if (altText === void 0) {
            altText = "";
        }
        if (cache === void 0) {
            cache = true;
        }
        var valueFactory = function valueFactory() {
            return _this.umbracoAjaxService.post("TranslatorService", "TranslationPost", { key: key, altText: altText });
        };
        return this.cacheService.getCacheItem("TranslatorService:TranslationPost:" + key, valueFactory);
    };
    TranslatorService.prototype.smartTranslate = function (key, value, altText, cache) {
        var _this = this;
        if (altText === void 0) {
            altText = "";
        }
        if (cache === void 0) {
            cache = true;
        }
        var valueFactory = function valueFactory() {
            return _this.umbracoAjaxService.post("TranslatorService", "TranslationPost", { key: key, altText: altText });
        };
        return this.cacheService.getCacheItem("TranslatorService:TranslationPost:" + key, valueFactory).then(function (v) {
            _.templateSettings.interpolate = /{([\s\S]+?)}/g;
            var compiled = _.template(v);
            var compiledValue = compiled(value);
            return compiledValue;
        });
    };
    return TranslatorService;
}();
TranslatorService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(umbraco_ajax_Service_1.UmbracoAjaxService)), __param(1, core_1.Inject(cache_service_1.CacheService)), __metadata("design:paramtypes", [umbraco_ajax_Service_1.UmbracoAjaxService, cache_service_1.CacheService])], TranslatorService);
exports.TranslatorService = TranslatorService;

/***/ }),

/***/ "./src/typescript/blueleet/modules/search/module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var search_component_1 = __webpack_require__("./src/typescript/blueleet/modules/search/search.component.ts");
var search_service_1 = __webpack_require__("./src/typescript/blueleet/modules/search/search.service.ts");
var blueleet_umbraco_module_1 = __webpack_require__("./src/typescript/blueleet/blueleet-umbraco.module.ts");
var SearchModule = SearchModule_1 = function () {
    function SearchModule() {}
    SearchModule.forRoot = function () {
        return {
            ngModule: SearchModule_1,
            providers: [search_service_1.SearchService]
        };
    };
    return SearchModule;
}();
SearchModule = SearchModule_1 = __decorate([core_1.NgModule({
    imports: [common_1.CommonModule, blueleet_umbraco_module_1.BlueLeetUmbracoModule],
    exports: [blueleet_umbraco_module_1.BlueLeetUmbracoModule, search_component_1.SearchComponent],
    declarations: [search_component_1.SearchComponent]
})], SearchModule);
exports.SearchModule = SearchModule;
var SearchModule_1;

/***/ }),

/***/ "./src/typescript/blueleet/modules/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var search_service_1 = __webpack_require__("./src/typescript/blueleet/modules/search/search.service.ts");
var SearchComponent = function () {
    function SearchComponent(searchService, zone, elementRef) {
        this.searchService = searchService;
        this.zone = zone;
        this.elementRef = elementRef;
        this.searchTemplate = null;
        this.onSearchUpdate = new core_1.EventEmitter();
        this.onMatchingWordsUpdate = new core_1.EventEmitter();
    }
    SearchComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var searchTerm = changes["searchTerm"];
        // We only wants to trigger a search if the previous value was different.
        if (searchTerm != null && searchTerm.currentValue !== searchTerm.previousValue) {
            // Only call lookFor if we have any observers
            if (this.onSearchUpdate.observers.length > 0) {
                this.searchService.lookFor(searchTerm.currentValue).then(function (value) {
                    _this.onSearchUpdate.emit(value);
                });
            }
            // Only call lookFor if we have any observers
            if (this.onMatchingWordsUpdate.observers.length > 0) {
                this.searchService.lookForMatchingWords(searchTerm.currentValue).then(function (value) {
                    _this.onMatchingWordsUpdate.emit(value);
                });
            }
        }
    };
    return SearchComponent;
}();
__decorate([core_1.ContentChild(core_1.TemplateRef), __metadata("design:type", core_1.TemplateRef)], SearchComponent.prototype, "searchTemplate", void 0);
__decorate([core_1.Input("searchTerm"), __metadata("design:type", String)], SearchComponent.prototype, "searchTerm", void 0);
__decorate([core_1.Output("onSearchUpdate"), __metadata("design:type", core_1.EventEmitter)], SearchComponent.prototype, "onSearchUpdate", void 0);
__decorate([core_1.Output("onMatchingWordsUpdate"), __metadata("design:type", core_1.EventEmitter)], SearchComponent.prototype, "onMatchingWordsUpdate", void 0);
SearchComponent = __decorate([core_1.Component({
    selector: "bl-search",
    template: "<ng-template [ngTemplateOutlet]=\"this?.searchTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>",
    styles: [__webpack_require__("./src/typescript/blueleet/modules/search/search.scss").toString()]
}), __param(0, core_1.Inject(search_service_1.SearchService)), __param(1, core_1.Inject(core_1.NgZone)), __param(2, core_1.Inject(core_1.ElementRef)), __metadata("design:paramtypes", [search_service_1.SearchService, core_1.NgZone, core_1.ElementRef])], SearchComponent);
exports.SearchComponent = SearchComponent;

/***/ }),

/***/ "./src/typescript/blueleet/modules/search/search.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/blueleet/modules/search/search.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js!./search.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js!./search.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/blueleet/modules/search/search.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var umbraco_ajax_Service_1 = __webpack_require__("./src/typescript/blueleet/umbraco-ajax-Service.ts");
var SearchService = function () {
    function SearchService(umbracoAjaxService) {
        this.umbracoAjaxService = umbracoAjaxService;
    }
    SearchService.prototype.lookFor = function (term) {
        return this.umbracoAjaxService.post("Search", "PostLookFor", { searchTerm: term });
    };
    SearchService.prototype.lookForMatchingWords = function (term) {
        return this.umbracoAjaxService.post("Search", "PostLookForMatchingWords", { searchTerm: term });
    };
    return SearchService;
}();
SearchService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(umbraco_ajax_Service_1.UmbracoAjaxService)), __metadata("design:paramtypes", [umbraco_ajax_Service_1.UmbracoAjaxService])], SearchService);
exports.SearchService = SearchService;

/***/ }),

/***/ "./src/typescript/blueleet/modules/widgets/module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var widget_clock_component_1 = __webpack_require__("./src/typescript/blueleet/modules/widgets/widget-clock/widget-clock.component.ts");
var WidgetsModule = function () {
    function WidgetsModule() {}
    return WidgetsModule;
}();
WidgetsModule = __decorate([core_1.NgModule({
    imports: [common_1.CommonModule],
    exports: [widget_clock_component_1.WidgetClockComponent],
    declarations: [widget_clock_component_1.WidgetClockComponent]
})], WidgetsModule);
exports.WidgetsModule = WidgetsModule;

/***/ }),

/***/ "./src/typescript/blueleet/modules/widgets/widget-clock/analog-hours.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/blueleet/modules/widgets/widget-clock/analog-hours.png";

/***/ }),

/***/ "./src/typescript/blueleet/modules/widgets/widget-clock/analog-minutes.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/blueleet/modules/widgets/widget-clock/analog-minutes.png";

/***/ }),

/***/ "./src/typescript/blueleet/modules/widgets/widget-clock/analog-seconds.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/blueleet/modules/widgets/widget-clock/analog-seconds.png";

/***/ }),

/***/ "./src/typescript/blueleet/modules/widgets/widget-clock/clock.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/blueleet/modules/widgets/widget-clock/clock.png";

/***/ }),

/***/ "./src/typescript/blueleet/modules/widgets/widget-clock/templates/clock.html":
/***/ (function(module, exports) {

module.exports = "<ul #Clock class=\"widget-clock hidden-xs-down hidden-xs-up\">\r\n    <li #Sec class=\"ticker-sec\"></li>\r\n    <li #Hour class=\"ticker-hour\"></li>\r\n    <li #Min class=\"ticker-min\"></li>\r\n</ul>"

/***/ }),

/***/ "./src/typescript/blueleet/modules/widgets/widget-clock/widget-clock.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var UmbracoajaxService = __webpack_require__("./src/typescript/blueleet/umbraco-ajax-Service.ts");
__webpack_require__("./src/typescript/blueleet/modules/widgets/widget-clock/clock.png");
var WidgetClockComponent = function () {
    function WidgetClockComponent(umbracoAjaxService, zone, elementRef) {
        this.umbracoAjaxService = umbracoAjaxService;
        this.zone = zone;
        this.elementRef = elementRef;
        this.timeObservable = Rx.Observable.interval(1000).map(function () {
            return new Date();
        });
    }
    WidgetClockComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.timeObservable.subscribe(function (value) {
            var hours = value.getHours();
            var mins = value.getMinutes();
            var seconds = value.getSeconds();
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            $(_this.clockSec.nativeElement).css({
                "-moz-transform": srotate,
                "-webkit-transform": srotate,
                "-ms-transform": srotate,
                "transform": srotate
            });
            var hdegree = hours * 30 + mins / 2;
            var hrotate = "rotate(" + hdegree + "deg)";
            $(_this.clockHour.nativeElement).css({
                "-moz-transform": hrotate,
                "-webkit-transform": hrotate,
                "-ms-transform": hrotate,
                "transform": hrotate
            });
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            $(_this.clockMin.nativeElement).css({
                "-moz-transform": mrotate,
                "-webkit-transform": mrotate,
                "-ms-transform": mrotate,
                "transform": mrotate
            });
        });
        setTimeout(function () {
            $(_this.clock.nativeElement).removeClass("hidden-xs-up");
        }, 1000);
    };
    return WidgetClockComponent;
}();
__decorate([core_1.ViewChild("Clock"), __metadata("design:type", core_1.ElementRef)], WidgetClockComponent.prototype, "clock", void 0);
__decorate([core_1.ViewChild("Sec"), __metadata("design:type", core_1.ElementRef)], WidgetClockComponent.prototype, "clockSec", void 0);
__decorate([core_1.ViewChild("Hour"), __metadata("design:type", core_1.ElementRef)], WidgetClockComponent.prototype, "clockHour", void 0);
__decorate([core_1.ViewChild("Min"), __metadata("design:type", core_1.ElementRef)], WidgetClockComponent.prototype, "clockMin", void 0);
WidgetClockComponent = __decorate([core_1.Component({
    selector: "widget-clock",
    template: __webpack_require__("./src/typescript/blueleet/modules/widgets/widget-clock/templates/clock.html"),
    styles: [__webpack_require__("./src/typescript/blueleet/modules/widgets/widget-clock/widget-clock.scss").toString()]
}), __param(0, core_1.Inject(UmbracoajaxService.UmbracoAjaxService)), __param(1, core_1.Inject(core_1.NgZone)), __param(2, core_1.Inject(core_1.ElementRef)), __metadata("design:paramtypes", [UmbracoajaxService.UmbracoAjaxService, core_1.NgZone, core_1.ElementRef])], WidgetClockComponent);
exports.WidgetClockComponent = WidgetClockComponent;

/***/ }),

/***/ "./src/typescript/blueleet/modules/widgets/widget-clock/widget-clock.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/blueleet/modules/widgets/widget-clock/widget-clock.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/postcss-loader/index.js!../../../../../../node_modules/sass-loader/index.js!./widget-clock.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/postcss-loader/index.js!../../../../../../node_modules/sass-loader/index.js!./widget-clock.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/blueleet/pipes/capitalize.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var CapitalizePipe = function () {
    function CapitalizePipe() {}
    CapitalizePipe.prototype.transform = function (value) {
        if (!value) {
            return value;
        }
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return CapitalizePipe;
}();
CapitalizePipe = __decorate([core_1.Pipe({ name: "Capitalize" })], CapitalizePipe);
exports.CapitalizePipe = CapitalizePipe;

/***/ }),

/***/ "./src/typescript/blueleet/pipes/truncate.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TruncatePipe = function () {
    function TruncatePipe() {}
    TruncatePipe.prototype.transform = function (value, args) {
        var limit;
        if (Object.isNullOrUndefined(args.length)) {
            limit = args;
        } else if (args.length > 0) {
            limit = parseInt(args[0], 10);
        } else {
            limit = 10;
        }
        var trail;
        if (args.length > 1) {
            trail = args[1];
        } else {
            trail = "...";
        }
        if (value.length > limit) {
            return value.substring(0, limit) + trail;
        }
        return value;
    };
    return TruncatePipe;
}();
TruncatePipe = __decorate([core_1.Pipe({ name: "truncate" })], TruncatePipe);
exports.TruncatePipe = TruncatePipe;

/***/ }),

/***/ "./src/typescript/blueleet/umbraco-ajax-Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var config_service_1 = __webpack_require__("./src/typescript/blueleet/config.service.ts");
var ServiceEvent_service_1 = __webpack_require__("./src/typescript/blueleet/ServiceEvent.service.ts");
var UmbracoAjaxService = function () {
    function UmbracoAjaxService($http, window, blueLeetConfigService, serviceEvent) {
        this.$http = $http;
        this.window = window;
        this.blueLeetConfigService = blueLeetConfigService;
        this.serviceEvent = serviceEvent;
        var currentCulture = $("head").data("culture");
        this.blueLeetConfigService.addLocalConfig("currentCulture", currentCulture);
        this.url = this.getUrl();
    }
    UmbracoAjaxService.prototype.transform = function (data) {
        return $.param(data);
    };
    UmbracoAjaxService.prototype.transformJsonRequest = function (data) {
        return (0, _stringify2.default)(data);
    };
    UmbracoAjaxService.prototype.getUrl = function () {
        return window.location.protocol + "//" + window.location.host + "/";
    };
    UmbracoAjaxService.prototype.getEncryptedRoute = function (controller, action, area, additionalRouteVals) {
        if (area === void 0) {
            area = "";
        }
        if (additionalRouteVals === void 0) {
            additionalRouteVals = null;
        }
        var url = this.url + "umbraco/Api/JsonHelper/SurfaceActionPost";
        console.log("getEncryptedRoute(controller:'" + controller + "', action:'" + action + "', area:'" + area + "')", additionalRouteVals);
        var body = {
            controllerName: controller,
            controllerAction: action,
            area: area,
            additionalRouteVals: additionalRouteVals
        };
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        body = this.transformJsonRequest(body);
        return this.$http.post(url, body, options).map(function (res) {
            var json = res.json();
            return json;
        }).toPromise();
    };
    UmbracoAjaxService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        var ajaxVerificationToken = $("head").data("ajaxVerificationToken");
        if (ajaxVerificationToken) {
            headers.set("RequestVerificationToken", ajaxVerificationToken);
            console.log("setting ajaxVerificationToken header", ajaxVerificationToken);
        }
        return headers;
    };
    UmbracoAjaxService.prototype.getValidController = function (controller) {
        var endsWithControllerRegex = new RegExp("controller$", "gi");
        if (endsWithControllerRegex.test(controller)) {
            console.warn("[blueleet-http] a request was made with controller: '" + controller + "' which is ending with 'controller' please remove the controller part as it is not needed!");
            return controller.replace(new RegExp("controller$", "gi"), "");
        }
        return controller;
    };
    UmbracoAjaxService.prototype.validateNamingConventionForAction = function (controller, action, isPost) {
        if (isPost === void 0) {
            isPost = false;
        }
        if (core_1.isDevMode() === false) {
            return;
        }
        var postConventionRegex = new RegExp("(post$)|(^post)", "gi");
        var getConventionRegex = new RegExp("(get$)|(^get)", "gi");
        if (isPost && !postConventionRegex.test(action)) {
            console.error("Convention: A request was made to controller: '" + controller + "' with an incorrectly named action: '" + action + "' make sure it starts or ends with 'post'.");
        } else if (!isPost && getConventionRegex.test(action)) {
            console.error("Convention: A request was made to controller: '" + controller + "' with an incorrectly named action: '" + action + "' make sure it starts or ends with 'get'.");
        }
    };
    UmbracoAjaxService.prototype.handleServerError = function (response, silentTry) {
        this.handleDone(response);
        if (silentTry) {
            return _promise2.default.resolve();
        }
        if (Object.isNullOrUndefined(response.headers)) {
            return _promise2.default.reject(response);
        } else if (response.headers.has("Content-Type") && response.headers.get("Content-Type").indexOf("application/json") >= 0) {
            var json = response.json();
            return _promise2.default.reject(json);
        } else {
            return _promise2.default.reject(response.text());
        }
    };
    UmbracoAjaxService.prototype.handleDone = function (value) {
        if (!Object.isNullOrUndefined(value)) {
            this.serviceEvent.emit(ServiceEvent_service_1.ServiceEventType.RequestEnd, value);
        }
    };
    UmbracoAjaxService.prototype.post = function (controller, action, parameters, info) {
        var _this = this;
        if (parameters === void 0) {
            parameters = null;
        }
        var defaultInfo = { area: "", noThrow: false };
        info = $.extend(defaultInfo, info || {});
        controller = this.getValidController(controller);
        this.validateNamingConventionForAction(controller, action, true);
        return this.getEncryptedRoute(controller, action, info.area, parameters).then(function (response) {
            _this.serviceEvent.emit(ServiceEvent_service_1.ServiceEventType.RequestBegin);
            var options = new http_1.RequestOptions({
                headers: _this.getHeaders()
            });
            return _this.$http.post(window.location.href, _this.transform(response), options).map(function (res) {
                var data;
                if (res.headers.has("Content-Type") && res.headers.get("Content-Type").indexOf("application/json") >= 0) {
                    data = res.json();
                } else {
                    data = res.text();
                    if (!data) {
                        data = res;
                    }
                }
                _this.handleDone(data);
                return data;
            }).catch(function (r) {
                return _this.handleServerError(r, info.silentTry);
            }).toPromise();
        });
    };
    UmbracoAjaxService.prototype.get = function (controller, action, parameters, info) {
        var _this = this;
        if (parameters === void 0) {
            parameters = null;
        }
        var defaultInfo = { area: "", noThrow: false };
        info = $.extend(defaultInfo, info || {});
        controller = this.getValidController(controller);
        this.validateNamingConventionForAction(controller, action);
        return this.getEncryptedRoute(controller, action, info.area, parameters).then(function (response) {
            _this.serviceEvent.emit(ServiceEvent_service_1.ServiceEventType.RequestBegin);
            var options = new http_1.RequestOptions({
                method: http_1.RequestMethod.Get,
                headers: _this.getHeaders(),
                body: response
            });
            return _this.$http.request(window.location.href, options).map(function (res) {
                var data;
                if (res.headers.has("Content-Type") && res.headers.get("Content-Type").indexOf("application/json") >= 0) {
                    data = res.json();
                } else {
                    data = res.text();
                    if (!data) {
                        data = res;
                    }
                }
                _this.handleDone(data);
                return data;
            }).catch(function (r) {
                return _this.handleServerError(r, info.silentTry);
            }).toPromise();
        });
    };
    return UmbracoAjaxService;
}();
UmbracoAjaxService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(http_1.Http)), __param(1, core_1.Inject(Window)), __param(2, core_1.Inject(config_service_1.ConfigService)), __param(3, core_1.Inject(ServiceEvent_service_1.ServiceEvent)), __metadata("design:paramtypes", [http_1.Http, Object, config_service_1.ConfigService, ServiceEvent_service_1.ServiceEvent])], UmbracoAjaxService);
exports.UmbracoAjaxService = UmbracoAjaxService;

/***/ }),

/***/ "./src/typescript/components/abstraction/TemplateBaseComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var TemplateBaseComponent = function () {
    function TemplateBaseComponent(changeDetectorRef, viewContainerRef, handleTemplateOutput) {
        if (handleTemplateOutput === void 0) {
            handleTemplateOutput = false;
        }
        this.changeDetectorRef = changeDetectorRef;
        this.viewContainerRef = viewContainerRef;
        this.handleTemplateOutput = handleTemplateOutput;
    }
    Object.defineProperty(TemplateBaseComponent.prototype, "viewState", {
        get: function get() {
            return this.viewState$;
        },
        set: function set(value) {
            this.viewState$ = value;
            this.updateTemplate();
        },
        enumerable: true,
        configurable: true
    });
    TemplateBaseComponent.prototype.getTemplate = function () {
        var template = null;
        switch (this.viewState) {
            case enums.DefaultViewState.DefaultTemplate:
                template = this.defaultTemplate;
                break;
        }
        this.currentTemplate = template;
        return template;
    };
    TemplateBaseComponent.prototype.updateTemplate = function () {
        var template = this.getTemplate();
        if (this.currentTemplate !== template) {
            this.currentTemplate = template;
        }
    };
    TemplateBaseComponent.prototype.init = function (templateRef) {
        if (this.handleTemplateOutput) {
            this.context = { $implicit: this };
            if (Object.isNullOrUndefined(this.viewState)) {
                this.viewState = enums.DefaultViewState.DefaultTemplate;
            }
            this.viewRef = this.viewContainerRef.createEmbeddedView(templateRef, this.context);
            this.changeDetectorRef.detectChanges();
        }
    };
    TemplateBaseComponent.prototype.ngOnChanges = function (changes) {
        this.updateTemplate();
        if (this.handleTemplateOutput) {
            if (this.viewRef) {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.viewRef));
            }
            var templateRef = this.currentTemplate;
            if (templateRef) {
                this.viewRef = this.viewContainerRef.createEmbeddedView(templateRef, this.context);
            }
        }
    };
    TemplateBaseComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.handleTemplateOutput) {
            setTimeout(function () {
                _this.context = { $implicit: _this };
                if (Object.isNullOrUndefined(_this.viewState)) {
                    _this.viewState = enums.DefaultViewState.DefaultTemplate;
                }
                _this.viewRef = _this.viewContainerRef.createEmbeddedView(_this.getTemplate(), _this.context);
                _this.changeDetectorRef.detectChanges();
            }, 1);
        } else {
            if (Object.isNullOrUndefined(this.viewState)) {
                this.viewState = enums.DefaultViewState.DefaultTemplate;
            } else {
                this.updateTemplate();
            }
        }
    };
    return TemplateBaseComponent;
}();
__decorate([core_1.ContentChild(core_1.TemplateRef), __metadata("design:type", core_1.TemplateRef)], TemplateBaseComponent.prototype, "defaultTemplate", void 0);
exports.TemplateBaseComponent = TemplateBaseComponent;

/***/ }),

/***/ "./src/typescript/components/bootstrap/alert-box/alert-box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var alert_box_service_1 = __webpack_require__("./src/typescript/alert-box.service.ts");
var BootstrapAlertBoxComponent = function (_super) {
    __extends(BootstrapAlertBoxComponent, _super);
    function BootstrapAlertBoxComponent(changeDetectorRef, viewContainer, ngZone, alertBoxService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.ngZone = ngZone;
        _this.alertBoxService = alertBoxService;
        _this.isGlobal = false;
        _this.alertTemplate = null;
        _this.options = null;
        return _this;
    }
    BootstrapAlertBoxComponent.prototype.ngAfterContentInit = function () {
        this.viewState$ = enums.DefaultViewState.None;
        _super.prototype.ngAfterContentInit.call(this);
    };
    BootstrapAlertBoxComponent.prototype.ngOnInit = function () {
        var self = this;
        if (self.isGlobal) {
            self.alertBoxService.on().subscribe(function (value) {
                self.ngZone.run(function () {
                    self.options = value;
                    if (Object.isNullOrUndefined(value)) {
                        self.viewState = enums.DefaultViewState.None;
                    } else {
                        self.viewState = enums.DefaultViewState.DefaultTemplate;
                    }
                });
            });
        }
    };
    BootstrapAlertBoxComponent.prototype.show = function (options, alertTemplate) {
        if (alertTemplate === void 0) {
            alertTemplate = null;
        }
        this.alertTemplate = alertTemplate;
        this.options = options;
        this.viewState = enums.DefaultViewState.DefaultTemplate;
    };
    BootstrapAlertBoxComponent.prototype.isTypeInfo = function () {
        return this.options != null && this.options.type === alert_box_service_1.AlertBoxEventType.Info;
    };
    BootstrapAlertBoxComponent.prototype.isTypeSuccess = function () {
        return this.options != null && this.options.type === alert_box_service_1.AlertBoxEventType.Success;
    };
    BootstrapAlertBoxComponent.prototype.isTypeWarning = function () {
        return this.options != null && this.options.type === alert_box_service_1.AlertBoxEventType.Warning;
    };
    BootstrapAlertBoxComponent.prototype.isTypeError = function () {
        return this.options != null && this.options.type === alert_box_service_1.AlertBoxEventType.Error;
    };
    return BootstrapAlertBoxComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
__decorate([core_1.ViewChild("DefaultTemplate"), __metadata("design:type", core_1.TemplateRef)], BootstrapAlertBoxComponent.prototype, "defaultTemplate", void 0);
__decorate([core_1.Input("isGlobal"), __metadata("design:type", Boolean)], BootstrapAlertBoxComponent.prototype, "isGlobal", void 0);
BootstrapAlertBoxComponent = __decorate([core_1.Component({
    selector: "alert-box",
    template: __webpack_require__("./src/typescript/components/bootstrap/alert-box/templates/alert-box.html")
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(core_1.NgZone)), __param(3, core_1.Inject(alert_box_service_1.AlertBoxService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, core_1.NgZone, alert_box_service_1.AlertBoxService])], BootstrapAlertBoxComponent);
exports.BootstrapAlertBoxComponent = BootstrapAlertBoxComponent;

/***/ }),

/***/ "./src/typescript/components/bootstrap/alert-box/templates/alert-box.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>\r\n<ng-template #DefaultTemplate>\r\n    <div class=\"alert\" [ngClass]=\"{'alert-info': this.isTypeInfo(), 'alert-success': this.isTypeSuccess(), 'alert-warning': this.isTypeWarning(), 'alert-danger': this.isTypeError() }\" style=\"z-index: 1;\">\r\n        <span *ngIf=\"this?.options?.showClose\" class=\"close\" data-dismiss=\"alert\">&times;</span>\r\n        <p>{{ this?.options?.message }}</p>\r\n        <ng-template [ngTemplateOutlet]=\"this.alertTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/typescript/components/bootstrap/form-input.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var AbstractValueAccessor_1 = __webpack_require__("./src/typescript/blueleet/abstraction/AbstractValueAccessor.ts");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var validation_service_1 = __webpack_require__("./src/typescript/validation.service.ts");
var capitalize_pipe_1 = __webpack_require__("./src/typescript/blueleet/pipes/capitalize.pipe.ts");
var password_verdict_1 = __webpack_require__("./src/typescript/enums/password-verdict.ts");
var BootstrapFormInputComponent = BootstrapFormInputComponent_1 = function (_super) {
    __extends(BootstrapFormInputComponent, _super);
    function BootstrapFormInputComponent(elementRef, renderer, capitalizePipe, validationService, sanitizer, form) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.capitalizePipe = capitalizePipe;
        _this.validationService = validationService;
        _this.sanitizer = sanitizer;
        _this.form = form;
        _this.hasError = false;
        _this.renderedInForm = true;
        _this.lowercase = false;
        _this.label = null;
        _this.name = null;
        _this.type = "text";
        _this.placeholder = "";
        _this.showPasswordStrength = false;
        _this.validateOnBlur = true;
        _this.cssClass = "form-control";
        _this.inputSubject = new Rx.Subject();
        _this.inputValue = ""; // We use this instead of mapping against value to not trigger automatic updates so we can control when validators fire.
        _this.errorMessage = "";
        return _this;
    }
    BootstrapFormInputComponent.prototype.updateErrorMessage = function () {
        var errorMessage = "";
        for (var propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                // First check if we have a attribute with the error message if not use the ValidationService.getValidatorErrorMessage.
                var errorAttr = this.element.attr("error" + this.capitalizePipe.transform(propertyName));
                if (errorAttr) {
                    errorMessage = errorAttr;
                } else {
                    errorMessage = this.sanitizer.sanitize(core_1.SecurityContext.HTML, validation_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]));
                }
                break;
            }
        }
        if (this.errorMessage !== errorMessage) {
            this.errorMessage = this.sanitizer.sanitize(core_1.SecurityContext.HTML, errorMessage);
        }
    };
    BootstrapFormInputComponent.prototype.triggerUpdate = function (value, event) {
        if (this.lowercase) {
            value = value.toLowerCase();
        }
        if (!event.bubbles) {
            this.inputSubject.next(value);
        }
    };
    BootstrapFormInputComponent.prototype.onBlur = function (value) {
        var self = this;
        if (self.validateOnBlur && self.control.untouched) {
            self.control.markAsTouched();
            self.inputSubject.next(value);
        }
    };
    BootstrapFormInputComponent.prototype.onFocusout = function (value) {
        var self = this;
        if (self.control.untouched) {
            self.control.markAsTouched();
        }
        self.inputSubject.next(value);
    };
    BootstrapFormInputComponent.prototype.onFocus = function (value) {
        var self = this;
        if (self.validateOnBlur === false && self.control.untouched) {
            self.control.markAsTouched();
            self.inputSubject.next(value);
        }
    };
    BootstrapFormInputComponent.prototype.updateValue = function (value) {
        var self = this;
        if (self.control.value === value) {
            // Same value, already validated.
            return;
        }
        if (value === "" || Object.isNullOrUndefined(value)) {
            self.control.markAsUntouched();
        } else {
            // Set the control value but trigger value events only if the control is touched.
            self.control.patchValue(value, { emitEvent: self.control.touched });
        }
    };
    BootstrapFormInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        if (self.lowercase) {
            self.renderer.setElementStyle(this.inputElement.nativeElement, "text-transform", "lowercase");
        }
        // subscribe on keyup event and debounce it to prevent spam updatings.
        var inputKeyUpObservable = Rx.Observable.fromEvent(this.inputElement.nativeElement, "keyup").map(function (i) {
            return i.currentTarget.value;
        });
        Rx.Observable.merge(inputKeyUpObservable, this.inputSubject).debounceTime(500).subscribe(function (value) {
            return _this.updateValue(value);
        });
        this.control.statusChanges.subscribe(function () {
            console.log(_this.control.errors);
            var hasError = _this.control.touched && _this.control.invalid;
            if (hasError) {
                _this.updateErrorMessage();
            } else {
                _this.errorMessage = "";
            }
            _this.hasError = hasError;
        });
        if (self.showPasswordStrength) {
            self.validationService.onPasswordStrengthChange().subscribe(function (value) {
                if (self.progressBar) {
                    self.progressBarModel = self.validationService.getPasswordVerdict(value.score);
                    if (self.value === "") {
                        self.progressBarModel.message = "";
                        self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "0%");
                        return;
                    }
                    switch (self.progressBarModel.passwordVerdict) {
                        case password_verdict_1.PasswordVerdict.Weak:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", true);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", false);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "15%");
                            break;
                        case password_verdict_1.PasswordVerdict.Normal:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", true);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", false);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "25%");
                            break;
                        case password_verdict_1.PasswordVerdict.Medium:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", true);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "50%");
                            break;
                        case password_verdict_1.PasswordVerdict.Strong:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", true);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "75%");
                            break;
                        case password_verdict_1.PasswordVerdict.VeryStrong:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", true);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "100%");
                            break;
                    }
                }
            });
        }
    };
    BootstrapFormInputComponent.prototype.ngOnInit = function () {
        this.element = $(this.elementRef.nativeElement);
        if (Object.isNullOrUndefined(this.control)) {
            var controlName = this.element.attr("formControlName");
            if (Object.isNullOrUndefined(controlName)) {
                throw "No formControlName set and 'FormControl' input is not set, either of those must be set!";
            }
            // Find the control in the Host (Parent) form
            var allControls = this.form.form.controls;
            this.control = allControls.hasOwnProperty(controlName) ? allControls[controlName] : null;
            if (Object.isNullOrUndefined(this.control)) {
                throw "Could not find control by " + controlName + "!";
            }
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, "form-group", true);
        this.renderer.setElementClass(this.elementRef.nativeElement, "has-feedback", true);
        if (Object.isNullOrUndefined(this.label) || this.label === "") {
            this.label = this.placeholder;
        }
        // We may have a value already if the form is created with one.
        this.inputValue = this.control.value;
    };
    return BootstrapFormInputComponent;
}(AbstractValueAccessor_1.AbstractValueAccessor);
__decorate([core_1.HostBinding("class.has-error"), __metadata("design:type", Boolean)], BootstrapFormInputComponent.prototype, "hasError", void 0);
__decorate([core_1.Input("FormControl"), __metadata("design:type", forms_1.AbstractControl)], BootstrapFormInputComponent.prototype, "control", void 0);
__decorate([core_1.Input("renderedInForm"), __metadata("design:type", Boolean)], BootstrapFormInputComponent.prototype, "renderedInForm", void 0);
__decorate([core_1.Input("lowercase"), __metadata("design:type", Boolean)], BootstrapFormInputComponent.prototype, "lowercase", void 0);
__decorate([core_1.Input("label"), __metadata("design:type", String)], BootstrapFormInputComponent.prototype, "label", void 0);
__decorate([core_1.Input("name"), __metadata("design:type", String)], BootstrapFormInputComponent.prototype, "name", void 0);
__decorate([core_1.Input("type"), __metadata("design:type", String)], BootstrapFormInputComponent.prototype, "type", void 0);
__decorate([core_1.Input("placeholder"), __metadata("design:type", String)], BootstrapFormInputComponent.prototype, "placeholder", void 0);
__decorate([core_1.Input("showPasswordStrength"), __metadata("design:type", Boolean)], BootstrapFormInputComponent.prototype, "showPasswordStrength", void 0);
__decorate([core_1.Input("validateOnBlur"), __metadata("design:type", Boolean)], BootstrapFormInputComponent.prototype, "validateOnBlur", void 0);
__decorate([core_1.Input("css"), __metadata("design:type", String)], BootstrapFormInputComponent.prototype, "cssClass", void 0);
__decorate([core_1.ViewChild("input"), __metadata("design:type", core_1.ElementRef)], BootstrapFormInputComponent.prototype, "inputElement", void 0);
__decorate([core_1.ViewChild("progressBar"), __metadata("design:type", core_1.ElementRef)], BootstrapFormInputComponent.prototype, "progressBar", void 0);
BootstrapFormInputComponent = BootstrapFormInputComponent_1 = __decorate([core_1.Component({
    selector: "bs-form-input",
    template: __webpack_require__("./src/typescript/components/bootstrap/templates/form-input.html"),
    styles: [__webpack_require__("./src/typescript/components/bootstrap/form-input.scss").toString()],
    providers: [AbstractValueAccessor_1.MakeProvider(BootstrapFormInputComponent_1), capitalize_pipe_1.CapitalizePipe]
}), __param(5, core_1.Host()), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, capitalize_pipe_1.CapitalizePipe, validation_service_1.ValidationService, core_1.Sanitizer, forms_1.FormGroupDirective])], BootstrapFormInputComponent);
exports.BootstrapFormInputComponent = BootstrapFormInputComponent;
var BootstrapFormInputComponent_1;

/***/ }),

/***/ "./src/typescript/components/bootstrap/form-input.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/bootstrap/form-input.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./form-input.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./form-input.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/components/bootstrap/templates/form-input.html":
/***/ (function(module, exports) {

module.exports = "<!--<label *ngIf=\"this.renderedInForm\" class=\"col-md-3 form-control-label\">{{label}}</label>\r\n<div *ngIf=\"this.renderedInForm\" class=\"col-md-9\">\r\n    <input #input [class]=\"cssClass\" [name]=\"name\" [type]=\"type\" [placeholder]=\"placeholder\" (blur)=\"onBlur($event.target.value)\" (focus)=\"onFocus($event.target.value)\" (focusout)=\"onFocusout($event.target.value)\" [value]=\"inputValue\" (input)=\"triggerUpdate($event.target.value, $event)\">\r\n    <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" *ngIf=\"hasError\"></span>\r\n    <div *ngIf=\"showPasswordStrength\" class=\"form-text progress password-progress\">\r\n        <div #progressBar class=\"progress-bar\" role=\"progressbar\" style=\"width: 0;\">\r\n            <p class=\"text-center\">{{ progressBarModel?.message }}</p>\r\n        </div>\r\n    </div>\r\n    <small *ngIf=\"showPasswordStrength && errorMessage !== null\" class=\"form-text\" [innerHTML]=\"errorMessage\"></small>\r\n    <span class=\"form-text\" aria-hidden=\"true\" [innerHTML]=\"errorMessage\" *ngIf=\"!showPasswordStrength && control.touched && control.invalid && errorMessage !== null\"></span>\r\n</div>\r\n<input *ngIf=\"!this.renderedInForm\" #input [class]=\"cssClass\" [name]=\"name\" [type]=\"type\" [placeholder]=\"placeholder\" (blur)=\"onBlur($event.target.value)\" (focus)=\"onFocus($event.target.value)\" (focusout)=\"onFocusout($event.target.value)\" [value]=\"inputValue\" (input)=\"triggerUpdate($event.target.value, $event)\">-->\r\n<input #input [class]=\"cssClass\" [name]=\"name\" [type]=\"type\" [placeholder]=\"placeholder\" (blur)=\"onBlur($event.target.value)\" (focus)=\"onFocus($event.target.value)\" (focusout)=\"onFocusout($event.target.value)\" [value]=\"inputValue\" (input)=\"triggerUpdate($event.target.value, $event)\">\r\n<span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" *ngIf=\"hasError\"></span>\r\n<div *ngIf=\"showPasswordStrength\" class=\"form-text progress password-progress\">\r\n    <div #progressBar class=\"progress-bar\" role=\"progressbar\" style=\"width: 0;\">\r\n        <p class=\"text-center\">{{ progressBarModel?.message }}</p>\r\n    </div>\r\n</div>\r\n<small *ngIf=\"showPasswordStrength && errorMessage !== null\" class=\"form-text\" [innerHTML]=\"errorMessage\"></small>\r\n<span class=\"form-text\" aria-hidden=\"true\" [innerHTML]=\"errorMessage\" *ngIf=\"!showPasswordStrength && control.touched && control.invalid && errorMessage !== null\"></span>"

/***/ }),

/***/ "./src/typescript/components/event/code.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var user_service_1 = __webpack_require__("./src/typescript/user.service.ts");
var event_service_1 = __webpack_require__("./src/typescript/components/event/event.service.ts");
var loginEvent_service_1 = __webpack_require__("./src/typescript/loginEvent.service.ts");
var navigation_service_1 = __webpack_require__("./src/typescript/navigation.service.ts");
var pace = __webpack_require__("./node_modules/pace-progress/pace.js");
var EventCodeComponent = function (_super) {
    __extends(EventCodeComponent, _super);
    function EventCodeComponent(changeDetectorRef, viewContainer, ngZone, formBuilder, modalService, umbracoAjaxService, loginEventService, userService, eventService, navigationService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.ngZone = ngZone;
        _this.formBuilder = formBuilder;
        _this.modalService = modalService;
        _this.umbracoAjaxService = umbracoAjaxService;
        _this.loginEventService = loginEventService;
        _this.userService = userService;
        _this.eventService = eventService;
        _this.navigationService = navigationService;
        _this.member = null;
        _this.eventCode = "";
        return _this;
    }
    EventCodeComponent.prototype.openModal = function (template) {
        var self = this;
        self.modalRef = self.modalService.show(template, { class: "modal-sm" });
    };
    EventCodeComponent.prototype.closeModal = function () {
        var self = this;
        if (self.modalRef) {
            self.modalRef.hide();
        }
    };
    EventCodeComponent.prototype.performUnlockCode = function ($event) {
        if ($event !== null) {
            $event.preventDefault();
        }
        var self = this;
        this.ngZone.run(function () {
            self.userService.hasAccess(true).then(function (hasAccess) {
                if (hasAccess === false) {
                    // Not logged in!
                    self.loginEventService.emit(loginEvent_service_1.LoginEventType.ShowLoginView);
                } else {
                    pace.stop();
                    pace.bar.render();
                    self.eventService.unlockEvent(self.unlockCodeForm.value.eventcode).then(function (value) {
                        switch (value.status) {
                            case event_service_1.EventStatus.Unlocked:
                                self.event = value.event;
                                //self.closeModal();
                                //self.openModal(self.successModalTemplate);
                                self.navigationService.navigate(value.event.url);
                                break;
                            case event_service_1.EventStatus.WrongEventCode:
                                self.closeModal();
                                self.openModal(self.wrongCodeModalTemplate);
                                break;
                            case event_service_1.EventStatus.CompanyAlreadyExists:
                                self.closeModal();
                                self.openModal(self.companyRegisterModalTemplate);
                            default:
                        }
                        pace.stop();
                        pace.start();
                    });
                }
            });
        });
    };
    EventCodeComponent.prototype.ngAfterViewInit = function () {
        var self = this;
    };
    EventCodeComponent.prototype.ngOnInit = function () {
        var self = this;
        self.unlockCodeForm = this.formBuilder.group({
            eventcode: ["", forms_1.Validators.required]
        });
        self.loginEventService.on(loginEvent_service_1.LoginEventType.Success).subscribe(function () {
            if (self.unlockCodeForm.valid) {
                self.performUnlockCode(null);
            }
        });
        self.viewState$ = enums.DefaultViewState.DefaultTemplate;
    };
    return EventCodeComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
__decorate([core_1.ViewChild("DefaultTemplate"), __metadata("design:type", core_1.TemplateRef)], EventCodeComponent.prototype, "defaultTemplate", void 0);
__decorate([core_1.ViewChild("CompanyRegisterModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventCodeComponent.prototype, "companyRegisterModalTemplate", void 0);
__decorate([core_1.ViewChild("SuccessModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventCodeComponent.prototype, "successModalTemplate", void 0);
__decorate([core_1.ViewChild("WrongCodeModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventCodeComponent.prototype, "wrongCodeModalTemplate", void 0);
__decorate([core_1.ContentChild(core_1.TemplateRef), __metadata("design:type", core_1.TemplateRef)], EventCodeComponent.prototype, "contentTemplate", void 0);
EventCodeComponent = __decorate([core_1.Component({
    selector: "event-code",
    template: __webpack_require__("./src/typescript/components/event/templates/code.html"),
    providers: [event_service_1.EventService, navigation_service_1.NavigationService]
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(core_1.NgZone)), __param(3, core_1.Inject(forms_1.FormBuilder)), __param(4, core_1.Inject(modal_1.BsModalService)), __param(5, core_1.Inject(bl.UmbracoAjaxService)), __param(6, core_1.Inject(loginEvent_service_1.LoginEventService)), __param(7, core_1.Inject(user_service_1.UserService)), __param(8, core_1.Inject(event_service_1.EventService)), __param(9, core_1.Inject(navigation_service_1.NavigationService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, core_1.NgZone, forms_1.FormBuilder, modal_1.BsModalService, bl.UmbracoAjaxService, loginEvent_service_1.LoginEventService, user_service_1.UserService, event_service_1.EventService, navigation_service_1.NavigationService])], EventCodeComponent);
exports.EventCodeComponent = EventCodeComponent;

/***/ }),

/***/ "./src/typescript/components/event/event.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var user_service_1 = __webpack_require__("./src/typescript/user.service.ts");
var event_service_1 = __webpack_require__("./src/typescript/components/event/event.service.ts");
var EventComponent = function (_super) {
    __extends(EventComponent, _super);
    function EventComponent(changeDetectorRef, viewContainer, ngZone, modalService, umbracoAjaxService, userService, eventService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.ngZone = ngZone;
        _this.modalService = modalService;
        _this.umbracoAjaxService = umbracoAjaxService;
        _this.userService = userService;
        _this.eventService = eventService;
        _this.updateInterval = 5000;
        _this.eventPage = null;
        _this.member = null;
        _this.isFull = false;
        _this.buttonText = null;
        _this.isUpdating = false;
        _this.alerts = [];
        return _this;
    }
    EventComponent.prototype.openModal = function (template) {
        var self = this;
        self.modalRef = self.modalService.show(template, { class: "modal-sm" });
    };
    EventComponent.prototype.closeModal = function () {
        var self = this;
        self.modalRef.hide();
    };
    EventComponent.prototype.performRegister = function () {
        var self = this;
        self.eventService.register(self.eventId, self.memberId).then(function (value) {
            switch (value) {
                case event_service_1.EventStatus.Registered:
                    self.closeModal();
                    self.openModal(self.registeredModalTemplate);
                    break;
                case event_service_1.EventStatus.CompanyAlreadyExists:
                    self.closeModal();
                    self.openModal(self.registeredModalTemplate);
                    break;
                default:
            }
        });
    };
    EventComponent.prototype.performUnregister = function () {
        var self = this;
        self.eventService.unregister(self.eventId, self.memberId).then(function (value) {
            switch (value) {
                case event_service_1.EventStatus.Unregistered:
                    self.closeModal();
                    self.openModal(self.unregisteredModalTemplate);
                    self.updateState();
                    break;
                default:
            }
        });
    };
    EventComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        self.eventService.stateChange.subscribe(function (value) {
            if (value == null) {
                self.state = null;
                return;
            }
            self.state = value;
            //self.isFull = 1 % self.state.openSpots === 0 || self.state.openSpots === 0;
            if (value.closed) {
                self.buttonText = self.btnEventClosedText;
            } else if (self.isFull && value.isParticipating === false) {
                // Reserv anmälan
                self.buttonText = self.btnRegisterReserveText;
                self.activeButtonTemplate = self.registerReserveModalTemplate;
            } else if (value.isParticipating && value.canUnregister === false) {
                self.buttonText = self.btnUnregisterClosedText;
            } else if (value.isParticipating) {
                self.buttonText = self.btnUnregisterText;
                self.activeButtonTemplate = self.unregisterModalTemplate;
            } else {
                self.buttonText = self.btnRegisterText;
                self.activeButtonTemplate = self.registerModalTemplate;
            }
            self.changeDetectorRef.markForCheck();
        });
        setInterval(function () {
            self.updateState();
        }, self.updateInterval);
    };
    EventComponent.prototype.updateState = function () {
        var self = this;
        if (self.isUpdating) {
            return;
        }
        self.isUpdating = true;
        self.eventService.updateState(self.eventId, self.memberId).then(function () {
            self.isUpdating = false;
        });
    };
    EventComponent.prototype.ngOnInit = function () {
        var self = this;
        __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./src/typescript/components/event/event.scss"));
        self.eventService.getEvent(self.eventId).then(function (value) {
            self.eventPage = value;
        });
        self.userService.getMember().then(function (value) {
            self.member = value;
        });
        self.viewState$ = enums.DefaultViewState.DefaultTemplate;
    };
    return EventComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
__decorate([core_1.ViewChild("DefaultTemplate"), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "defaultTemplate", void 0);
__decorate([core_1.ViewChild("RegisterModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "registerModalTemplate", void 0);
__decorate([core_1.ViewChild("RegisteredModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "registeredModalTemplate", void 0);
__decorate([core_1.ViewChild("CompanyRegisterModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "companyRegisterModalTemplate", void 0);
__decorate([core_1.ViewChild("RegisterReserveModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "registerReserveModalTemplate", void 0);
__decorate([core_1.ViewChild("RegisteredReserveModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "registeredReserveModalTemplate", void 0);
__decorate([core_1.ViewChild("UnregisterModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "unregisterModalTemplate", void 0);
__decorate([core_1.ViewChild("UnregisteredModalTemplate"), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "unregisteredModalTemplate", void 0);
__decorate([core_1.ContentChild(core_1.TemplateRef), __metadata("design:type", core_1.TemplateRef)], EventComponent.prototype, "contentTemplate", void 0);
__decorate([core_1.Input(), __metadata("design:type", Number)], EventComponent.prototype, "updateInterval", void 0);
__decorate([core_1.Input(), __metadata("design:type", Number)], EventComponent.prototype, "eventId", void 0);
__decorate([core_1.Input(), __metadata("design:type", Number)], EventComponent.prototype, "memberId", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], EventComponent.prototype, "btnRegisterText", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], EventComponent.prototype, "btnRegisterReserveText", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], EventComponent.prototype, "btnUnregisterText", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], EventComponent.prototype, "btnUnregisterClosedText", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], EventComponent.prototype, "btnEventClosedText", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], EventComponent.prototype, "registeredText", void 0);
__decorate([core_1.Input(), __metadata("design:type", String)], EventComponent.prototype, "unregisteredText", void 0);
EventComponent = __decorate([core_1.Component({
    selector: "event",
    template: __webpack_require__("./src/typescript/components/event/templates/event.html"),
    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    providers: [event_service_1.EventService]
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(core_1.NgZone)), __param(3, core_1.Inject(modal_1.BsModalService)), __param(4, core_1.Inject(bl.UmbracoAjaxService)), __param(5, core_1.Inject(user_service_1.UserService)), __param(6, core_1.Inject(event_service_1.EventService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, core_1.NgZone, modal_1.BsModalService, bl.UmbracoAjaxService, user_service_1.UserService, event_service_1.EventService])], EventComponent);
exports.EventComponent = EventComponent;

/***/ }),

/***/ "./src/typescript/components/event/event.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var EventService = function () {
    function EventService(umbracoAjaxService) {
        this.umbracoAjaxService = umbracoAjaxService;
        this.stateChange = new Rx.BehaviorSubject(null);
        this.statusUpdate = new Rx.BehaviorSubject(null);
    }
    EventService.prototype.updateState = function (eventId, memberId) {
        var _this = this;
        return new _promise2.default(function (resolve, reject) {
            return _this.umbracoAjaxService.post("Event", "BuildStatePost", { eventId: eventId, memberId: memberId }).catch(function (value) {
                reject(value);
                _this.stateChange.error(value);
            }).then(function (value) {
                if (_.isEqual(value, _this.stateChange.value)) {
                    console.log("updateState => No changes.");
                    // No changes
                    resolve();
                    return;
                }
                resolve(value);
                _this.stateChange.next(value);
            });
        });
    };
    EventService.prototype.getEvent = function (eventId) {
        return this.umbracoAjaxService.post("Event", "GetEventPost", { eventId: eventId });
    };
    EventService.prototype.getMyEvents = function () {
        var _this = this;
        return new _promise2.default(function (resolve, reject) {
            return _this.umbracoAjaxService.post("Event", "GetMyEventsPost").catch(function (value) {
                reject(value);
            }).then(function (value) {
                if (_.isEmpty(value)) {
                    resolve([]);
                    return;
                }
                resolve(value);
            });
        });
    };
    EventService.prototype.register = function (eventId, memberId) {
        var _this = this;
        var args = { eventId: eventId, memberId: memberId };
        return this.umbracoAjaxService.post("Event", "RegisterPost", args).then(function (value) {
            _this.statusUpdate.next(value);
            return value;
        });
    };
    EventService.prototype.unregister = function (eventId, memberId) {
        var _this = this;
        var args = { eventId: eventId, memberId: memberId };
        return this.umbracoAjaxService.post("Event", "UnregisterPost", args).then(function (value) {
            _this.statusUpdate.next(value);
            return value;
        });
    };
    EventService.prototype.unlockEvent = function (eventCode) {
        var _this = this;
        var args = { eventCode: eventCode };
        return this.umbracoAjaxService.post("Event", "UnlockEventPost", args).then(function (value) {
            _this.statusUpdate.next(value);
            return value;
        });
    };
    return EventService;
}();
EventService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(bl.UmbracoAjaxService)), __metadata("design:paramtypes", [bl.UmbracoAjaxService])], EventService);
exports.EventService = EventService;
var EventStatus;
(function (EventStatus) {
    EventStatus[EventStatus["Unknown"] = 0] = "Unknown";
    EventStatus[EventStatus["Registered"] = 1] = "Registered";
    EventStatus[EventStatus["Unregistered"] = 2] = "Unregistered";
    EventStatus[EventStatus["Full"] = 3] = "Full";
    EventStatus[EventStatus["CompanyAlreadyExists"] = 4] = "CompanyAlreadyExists";
    EventStatus[EventStatus["Unlocked"] = 5] = "Unlocked";
    EventStatus[EventStatus["WrongEventCode"] = 6] = "WrongEventCode";
})(EventStatus = exports.EventStatus || (exports.EventStatus = {}));

/***/ }),

/***/ "./src/typescript/components/event/templates/code.html":
/***/ (function(module, exports) {

module.exports = "<template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\">\r\n</template>\r\n<template #DefaultTemplate>\r\n    <div *ngIf=\"alerts?.length > 0\" class=\"row\">\r\n        <div class=\"col-xs-12\" *ngFor=\"let alert of this?.alerts\">\r\n            <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"><span [innerHtml]=\"alert.msg\"></span></alert>\r\n        </div>\r\n    </div>\r\n    <template [ngTemplateOutlet]=\"this?.contentTemplate\" [ngOutletContext]=\"{ $implicit: this }\">\r\n    </template>\r\n    <form class=\"unlock-code-form\" [formGroup]=\"unlockCodeForm\" (ngSubmit)=\"performUnlockCode($event)\" role=\"form\" autocomplete=\"off\" ngNoForm>\r\n        <div class=\"form-group\">\r\n            <label for=\"event-code\">Eventkod</label>\r\n            <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"event-code\" id=\"event-code\" formControlName=\"eventcode\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success btn-lg float-right\" [disabled]=\"!unlockCodeForm.valid\">Lås upp</button>\r\n    </form>\r\n    <ng-template #SuccessModalTemplate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <i class=\"fa fa-check-circle-o fa-4x\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <p>Eventet <a [href]=\"this?.event.url\">{{this?.event.name}}</a> är upplåst!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #WrongCodeModalTemplate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <i class=\"fa fa-times-circle-o fa-4x\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <p>Fel eventkod!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #CompanyRegisterModalTemplate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <i class=\"fa fa-times-circle-o fa-4x\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <p>Det finns redan en person registerad på eventet för {{ member.company }}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</template>\r\n"

/***/ }),

/***/ "./src/typescript/components/event/templates/event.html":
/***/ (function(module, exports) {

module.exports = "<template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\">\r\n</template>\r\n<template #DefaultTemplate>\r\n    <div *ngIf=\"alerts?.length > 0\" class=\"row\">\r\n        <div class=\"col-xs-12\" *ngFor=\"let alert of this?.alerts\">\r\n            <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"><span [innerHtml]=\"alert.msg\"></span></alert>\r\n        </div>\r\n    </div>\r\n    <template [ngTemplateOutlet]=\"this?.contentTemplate\" [ngOutletContext]=\"{ $implicit: this }\">\r\n    </template>\r\n    <button class=\"btn btn-primary d-block mx-auto\" *ngIf=\"this.state && this?.buttonText\" [disabled]=\"!this.activeButtonTemplate\" (click)=\"openModal(activeButtonTemplate)\">{{ buttonText }}</button>\r\n    <ng-template #RegisterModalTemplate>\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Jag anmäler mig till {{ eventPage.eventName }} eventet!</h5>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n            <p>{{ member?.name }}</p>\r\n            <p>{{ member?.company }}</p>\r\n            <p>{{ member?.email }}</p>\r\n            <p>{{ member?.phone }}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button class=\"btn btn-primary d-block mx-auto\" (click)=\"performRegister()\">Bekräftar Anmälan</button>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #RegisteredModalTemplate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <i class=\"fa fa-check-circle-o fa-4x\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <p>Du är anmäld!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #CompanyRegisterModalTemplate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <i class=\"fa fa-times-circle-o fa-4x\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <p>Det finns redan en person registerad på eventet för {{ member.company }}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    \r\n    <ng-template #UnregisterModalTemplate>\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Jag avanmäler mig till {{ eventPage.eventName }} eventet!</h5>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n            <p>{{ member?.name }}</p>\r\n            <p>{{ member?.company }}</p>\r\n            <p>{{ member?.email }}</p>\r\n            <p>{{ member?.phone }}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button class=\"btn btn-primary d-block mx-auto\" (click)=\"performUnregister()\">Bekräftar Avanmälan</button>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #UnregisteredModalTemplate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <i class=\"fa fa-check-circle-o fa-4x\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <p>Du är avanmäld!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</template>\r\n"

/***/ }),

/***/ "./src/typescript/components/forgot-password/forgot-password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var loginEvent_service_1 = __webpack_require__("./src/typescript/loginEvent.service.ts");
var validation_service_1 = __webpack_require__("./src/typescript/validation.service.ts");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var ForgotPasswordViewState;
(function (ForgotPasswordViewState) {
    ForgotPasswordViewState[ForgotPasswordViewState["None"] = 0] = "None";
    ForgotPasswordViewState[ForgotPasswordViewState["DefaultTemplate"] = 1] = "DefaultTemplate";
    ForgotPasswordViewState[ForgotPasswordViewState["NewPasswordTemplate"] = 2] = "NewPasswordTemplate";
    ForgotPasswordViewState[ForgotPasswordViewState["MailSent"] = 3] = "MailSent";
})(ForgotPasswordViewState = exports.ForgotPasswordViewState || (exports.ForgotPasswordViewState = {}));
var ForgotPasswordComponent = function (_super) {
    __extends(ForgotPasswordComponent, _super);
    function ForgotPasswordComponent(changeDetectorRef, viewContainer, formBuilder, ngZone, umbracoAjaxService, loginEventService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.formBuilder = formBuilder;
        _this.ngZone = ngZone;
        _this.umbracoAjaxService = umbracoAjaxService;
        _this.loginEventService = loginEventService;
        return _this;
    }
    Object.defineProperty(ForgotPasswordComponent.prototype, "viewState", {
        get: function get() {
            return this.viewState$;
        },
        set: function set(value) {
            this.viewState$ = value;
            this.updateTemplate();
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.getTemplate = function () {
        var template = null;
        switch (this.viewState) {
            case ForgotPasswordViewState.DefaultTemplate:
                template = this.defaultTemplate;
                break;
            case ForgotPasswordViewState.NewPasswordTemplate:
                template = this.newPasswordTemplate;
                break;
            case ForgotPasswordViewState.MailSent:
                template = this.mailSentTemplate;
                break;
        }
        return template;
    };
    ForgotPasswordComponent.prototype.isValid = function () {
        if (!Object.isNullOrUndefined(this.payload) && this.payload.messageType === enums.GenericMessages.Danger) {
            return false;
        }
        return true;
    };
    ForgotPasswordComponent.prototype.doSubmit = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.ngZone.run(function () {
            _this.umbracoAjaxService.post("MemberSurface", "ForgotPasswordPost", _this.forgotPasswordForm.value).catch(function (error) {
                _this.payload = error;
                if (error.messageType === enums.GenericMessages.Danger && error.status === (enums.MemberStatus.AuthorizationFailure || enums.MemberStatus.FacebookIntegrated)) {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.SignInError, error);
                } else {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.GenericError, error);
                }
            }).then(function (value) {
                if (value) {
                    _this.payload = value;
                    if (value.messageType === enums.GenericMessages.Success) {
                        _this.viewState = ForgotPasswordViewState.MailSent;
                    }
                }
            });
        });
    };
    ForgotPasswordComponent.prototype.doSubmitNewPassword = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.ngZone.run(function () {
            _this.umbracoAjaxService.post("MemberSurface", "NewPasswordPost", _this.forgotPasswordForm.value).catch(function (error) {
                _this.payload = error;
                if (error.messageType === enums.GenericMessages.Danger && error.status === (enums.MemberStatus.AuthorizationFailure || enums.MemberStatus.FacebookIntegrated)) {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.SignInError, error);
                } else if (error.messageType === enums.GenericMessages.Danger && error.status === enums.MemberStatus.LoginExpired) {
                    _this.viewState = ForgotPasswordViewState.DefaultTemplate;
                    _this.forgotPasswordForm = _this.formBuilder.group({
                        email: ["", forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.email])]
                    });
                    if (history) {
                        // Remove the query string.
                        history.pushState(null, "", location.href.split("?")[0]);
                    }
                } else {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.GenericError, error);
                }
            }).then(function (value) {
                if (value) {
                    _this.payload = value;
                    if (value.messageType === enums.GenericMessages.Success) {
                        _this.loginEventService.emit(loginEvent_service_1.LoginEventType.ShowLoginView, value);
                    }
                }
            });
        });
    };
    ForgotPasswordComponent.prototype.ngAfterContentInit = function () {
        this.token = Object.getQueryStringValue("token");
        if (Object.isNullOrUndefined(this.token)) {
            this.viewState = ForgotPasswordViewState.DefaultTemplate;
        } else {
            this.viewState = ForgotPasswordViewState.NewPasswordTemplate;
        }
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.token = Object.getQueryStringValue("token");
        if (Object.isNullOrUndefined(this.token)) {
            this.forgotPasswordForm = this.formBuilder.group({
                email: ["", forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.email])]
            });
        } else {
            // Switch the view to forgot password
            this.loginEventService.emit(loginEvent_service_1.LoginEventType.ShowForgotPasswordView);
            var password = this.formBuilder.control("", validation_service_1.ValidationService.passwordValidator(8));
            var confirmPassword = this.formBuilder.control("", validation_service_1.ValidationService.equalTo(password, "Password", "Confirm Password"));
            this.forgotPasswordForm = this.formBuilder.group({
                password: password,
                confirmPassword: confirmPassword
            });
        }
    };
    return ForgotPasswordComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
__decorate([core_1.ContentChild("NewPassword"), __metadata("design:type", core_1.TemplateRef)], ForgotPasswordComponent.prototype, "newPasswordTemplate", void 0);
__decorate([core_1.ContentChild("MailSent"), __metadata("design:type", core_1.TemplateRef)], ForgotPasswordComponent.prototype, "mailSentTemplate", void 0);
ForgotPasswordComponent = __decorate([core_1.Component({
    selector: "forgot-password",
    template: "<ng-template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>"
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(forms_1.FormBuilder)), __param(3, core_1.Inject(core_1.NgZone)), __param(4, core_1.Inject(bl.UmbracoAjaxService)), __param(5, core_1.Inject(loginEvent_service_1.LoginEventService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, forms_1.FormBuilder, core_1.NgZone, bl.UmbracoAjaxService, loginEvent_service_1.LoginEventService])], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;

/***/ }),

/***/ "./src/typescript/components/login-signup/login-signup-complete.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var loginEvent_service_1 = __webpack_require__("./src/typescript/loginEvent.service.ts");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var LoginSignupCompleteComponent = function (_super) {
    __extends(LoginSignupCompleteComponent, _super);
    function LoginSignupCompleteComponent(changeDetectorRef, viewContainer, ngZone, renderer, loginEventService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.ngZone = ngZone;
        _this.renderer = renderer;
        _this.loginEventService = loginEventService;
        _this.viewState$ = enums.DefaultViewState.None;
        return _this;
    }
    LoginSignupCompleteComponent.prototype.isNeedApproval = function () {
        if (Object.isNullOrUndefined(this.model)) {
            return false;
        }
        return this.model.status === enums.MemberStatus.NeedApproval;
    };
    LoginSignupCompleteComponent.prototype.isEmailAuthorisationNeeded = function () {
        if (Object.isNullOrUndefined(this.model)) {
            return false;
        }
        return this.model.status === enums.MemberStatus.EmailAuthorisationNeeded;
    };
    LoginSignupCompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginEventService.on(loginEvent_service_1.LoginEventType.Success).subscribe(function (value) {
            _this.ngZone.run(function () {
                _this.model = value;
                _this.viewState = enums.DefaultViewState.DefaultTemplate;
            });
        });
    };
    return LoginSignupCompleteComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
LoginSignupCompleteComponent = __decorate([core_1.Component({
    selector: "login-signup-complete",
    template: "<ng-template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>",
    styles: [__webpack_require__("./src/typescript/components/login-signup/login-signup.scss").toString()]
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(core_1.NgZone)), __param(3, core_1.Inject(core_1.Renderer)), __param(4, core_1.Inject(loginEvent_service_1.LoginEventService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, core_1.NgZone, core_1.Renderer, loginEvent_service_1.LoginEventService])], LoginSignupCompleteComponent);
exports.LoginSignupCompleteComponent = LoginSignupCompleteComponent;

/***/ }),

/***/ "./src/typescript/components/login-signup/login-signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var loginEvent_service_1 = __webpack_require__("./src/typescript/loginEvent.service.ts");
var form_input_component_1 = __webpack_require__("./src/typescript/components/bootstrap/form-input.component.ts");
var user_service_1 = __webpack_require__("./src/typescript/user.service.ts");
var generic_messages_enum_1 = __webpack_require__("./src/typescript/enums/generic-messages-enum.ts");
var member_status_enum_1 = __webpack_require__("./src/typescript/enums/member-status-enum.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var LoginSignupViewState;
(function (LoginSignupViewState) {
    LoginSignupViewState[LoginSignupViewState["None"] = 0] = "None";
    LoginSignupViewState[LoginSignupViewState["LoginTemplate"] = 1] = "LoginTemplate";
    LoginSignupViewState[LoginSignupViewState["SignupTemplate"] = 2] = "SignupTemplate";
    LoginSignupViewState[LoginSignupViewState["ForgotPasswordTemplate"] = 3] = "ForgotPasswordTemplate";
    LoginSignupViewState[LoginSignupViewState["EventCodeTemplate"] = 4] = "EventCodeTemplate";
})(LoginSignupViewState = exports.LoginSignupViewState || (exports.LoginSignupViewState = {}));
var LoginSignupComponent = function () {
    function LoginSignupComponent(ngZone, viewContainerRef, renderer, loginEventService, userService, umbracoAjaxService) {
        this.ngZone = ngZone;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.loginEventService = loginEventService;
        this.userService = userService;
        this.umbracoAjaxService = umbracoAjaxService;
        this.viewState$ = LoginSignupViewState.LoginTemplate;
    }
    Object.defineProperty(LoginSignupComponent.prototype, "viewState", {
        get: function get() {
            return this.viewState$;
        },
        set: function set(value) {
            this.viewState$ = value;
            this.currentTemplate = this.getTemplate();
        },
        enumerable: true,
        configurable: true
    });
    LoginSignupComponent.prototype.getTemplate = function () {
        switch (this.viewState) {
            case LoginSignupViewState.LoginTemplate:
                return this.loginTemplate;
            case LoginSignupViewState.SignupTemplate:
                return this.signupTemplate;
            case LoginSignupViewState.ForgotPasswordTemplate:
                return this.forgotPasswordTemplate;
            case LoginSignupViewState.EventCodeTemplate:
                return this.eventCodeTemplate;
            default:
                return null;
        }
    };
    LoginSignupComponent.prototype.showLogin = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.ngZone.run(function () {
            _this.viewState = LoginSignupViewState.LoginTemplate;
            console.log(_this.vc);
        });
    };
    LoginSignupComponent.prototype.showSignup = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.ngZone.run(function () {
            _this.viewState = LoginSignupViewState.SignupTemplate;
            console.log(_this.vc);
        });
    };
    LoginSignupComponent.prototype.showForgotPassword = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.ngZone.run(function () {
            _this.viewState = LoginSignupViewState.ForgotPasswordTemplate;
        });
    };
    LoginSignupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.userService.getMember().catch(function (reason) {
            if (reason.status === member_status_enum_1.MemberStatus.LoginExpired) {
                _this.currentTemplate = _this.getTemplate();
                _this.vc.changes.subscribe(function (value) {});
            }
        }).then(function (value) {
            if (value && value.messageType === generic_messages_enum_1.GenericMessages.Success) {
                window.location.href = "/";
            }
        });
    };
    LoginSignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        var forgotPassToken = Object.getQueryStringValue("token");
        if (!Object.isNullOrUndefined(forgotPassToken)) {
            this.viewState = LoginSignupViewState.ForgotPasswordTemplate;
        }
        var eventCode = Object.getQueryStringValue("code");
        if (!Object.isNullOrUndefined(eventCode) || window.location.pathname === "/kod") {
            this.viewState = LoginSignupViewState.EventCodeTemplate;
        }
        this.loginEventService.on(loginEvent_service_1.LoginEventType.None).subscribe(function () {
            _this.viewState = LoginSignupViewState.None;
        });
        this.loginEventService.on(loginEvent_service_1.LoginEventType.Success).subscribe(function () {
            // ToDo: change this!
            if (window.location.pathname === "/kod") {
                _this.viewState = LoginSignupViewState.EventCodeTemplate;
            } else {
                _this.viewState = LoginSignupViewState.None;
            }
        });
        this.loginEventService.on(loginEvent_service_1.LoginEventType.ShowLoginView).subscribe(function () {
            _this.viewState = LoginSignupViewState.LoginTemplate;
        });
        this.loginEventService.on(loginEvent_service_1.LoginEventType.ShowSignupView).subscribe(function () {
            _this.viewState = LoginSignupViewState.SignupTemplate;
        });
        this.loginEventService.on(loginEvent_service_1.LoginEventType.ShowForgotPasswordView).subscribe(function () {
            _this.viewState = LoginSignupViewState.ForgotPasswordTemplate;
        });
    };
    return LoginSignupComponent;
}();
__decorate([core_1.ContentChild("Login"), __metadata("design:type", core_1.TemplateRef)], LoginSignupComponent.prototype, "loginTemplate", void 0);
__decorate([core_1.ContentChild("Signup"), __metadata("design:type", core_1.TemplateRef)], LoginSignupComponent.prototype, "signupTemplate", void 0);
__decorate([core_1.ContentChild("ForgotPassword"), __metadata("design:type", core_1.TemplateRef)], LoginSignupComponent.prototype, "forgotPasswordTemplate", void 0);
__decorate([core_1.ContentChild("EventCode"), __metadata("design:type", core_1.TemplateRef)], LoginSignupComponent.prototype, "eventCodeTemplate", void 0);
__decorate([core_1.ContentChildren(form_input_component_1.BootstrapFormInputComponent, { descendants: true }), __metadata("design:type", core_1.QueryList)], LoginSignupComponent.prototype, "vc", void 0);
LoginSignupComponent = __decorate([core_1.Component({
    selector: "login-signup",
    template: "<ng-template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>",
    styles: [__webpack_require__("./src/typescript/components/login-signup/login-signup.scss").toString()]
}), __param(0, core_1.Inject(core_1.NgZone)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(core_1.Renderer)), __param(3, core_1.Inject(loginEvent_service_1.LoginEventService)), __param(4, core_1.Inject(user_service_1.UserService)), __param(5, core_1.Inject(bl.UmbracoAjaxService)), __metadata("design:paramtypes", [core_1.NgZone, core_1.ViewContainerRef, core_1.Renderer, loginEvent_service_1.LoginEventService, user_service_1.UserService, bl.UmbracoAjaxService])], LoginSignupComponent);
exports.LoginSignupComponent = LoginSignupComponent;

/***/ }),

/***/ "./src/typescript/components/login-signup/login-signup.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/login-signup/login-signup.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./login-signup.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./login-signup.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/components/login-signup/signout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
// @Protected
var SignoutComponent = function (_super) {
    __extends(SignoutComponent, _super);
    function SignoutComponent(changeDetectorRef, viewContainer, ngZone, renderer, umbracoAjaxService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.ngZone = ngZone;
        _this.renderer = renderer;
        _this.umbracoAjaxService = umbracoAjaxService;
        _this.viewState$ = enums.DefaultViewState.DefaultTemplate;
        return _this;
    }
    SignoutComponent.prototype.signout = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.umbracoAjaxService.post("MemberSurface", "SignOutPost").then(function (value) {
                window.location.href = value.loginUrl;
            });
        });
    };
    SignoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.umbracoAjaxService.post("MemberSurface", "GetMemberPost").then(function (value) {
                _this.model = value;
            }).catch(function (reason) {
                if (reason.status === enums.MemberStatus.LoginExpired) {
                    _this.viewState = enums.DefaultViewState.None;
                }
            });
        });
    };
    return SignoutComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
SignoutComponent = __decorate([core_1.Component({
    selector: "auth-signout",
    template: "<ng-template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>",
    styles: [__webpack_require__("./src/typescript/components/login-signup/signout.scss").toString()]
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(core_1.NgZone)), __param(3, core_1.Inject(core_1.Renderer)), __param(4, core_1.Inject(bl.UmbracoAjaxService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, core_1.NgZone, core_1.Renderer, bl.UmbracoAjaxService])], SignoutComponent);
exports.SignoutComponent = SignoutComponent;

/***/ }),

/***/ "./src/typescript/components/login-signup/signout.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/login-signup/signout.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./signout.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./signout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/components/search-box/search-box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var Protected_1 = __webpack_require__("./src/typescript/decorators/Protected.ts");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var SearchBoxComponent = function (_super) {
    __extends(SearchBoxComponent, _super);
    function SearchBoxComponent(
    // @Inject(bl.ConfigService) private configService: bl.ConfigService,
    // @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService
    changeDetectorRef, viewContainer, formBuilder) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.formBuilder = formBuilder;
        return _this;
    }
    SearchBoxComponent.prototype.doSearch = function ($event) {
        $event.preventDefault();
        console.log("[SearchBoxComponent]:OnSubmit -> search()", this.searchForm);
    };
    SearchBoxComponent.prototype.ngOnInit = function () {
        this.viewState = enums.DefaultViewState.DefaultTemplate;
        this.searchForm = this.formBuilder.group({
            searchWord: ["", forms_1.Validators.required]
        });
        this.searchForm.valueChanges.subscribe(function (value) {
            // do something with value here
            console.log("[SearchBoxComponent] new value:'" + value.searchWord + "'", value);
        });
        // this.configService.ensureConfigs()
        //    .then(configs => {});
    };
    return SearchBoxComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
SearchBoxComponent = __decorate([Protected_1.Protected, core_1.Component({
    selector: "search-box",
    template: "<ng-template [ngTemplateOutlet]=\"this?.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>",
    styles: [__webpack_require__("./src/typescript/components/search-box/search-box.scss").toString()]
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(forms_1.FormBuilder)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, forms_1.FormBuilder])], SearchBoxComponent);
exports.SearchBoxComponent = SearchBoxComponent;

/***/ }),

/***/ "./src/typescript/components/search-box/search-box.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/search-box/search-box.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./search-box.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./search-box.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/components/search-wall/search-wall.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var enums = __webpack_require__("./src/typescript/enums/index.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var Uri = __webpack_require__("./node_modules/urijs/src/URI.js");
var SearchEmptyComponent = function (_super) {
    __extends(SearchEmptyComponent, _super);
    function SearchEmptyComponent(changeDetectorRef, viewContainer) {
        return _super.call(this, changeDetectorRef, viewContainer) || this;
    }
    SearchEmptyComponent.prototype.show = function (term) {
        this.viewState = enums.DefaultViewState.DefaultTemplate;
    };
    SearchEmptyComponent.prototype.hide = function () {
        this.viewState = enums.DefaultViewState.None;
    };
    SearchEmptyComponent.prototype.ngOnInit = function () {
        this.viewState = enums.DefaultViewState.None;
    };
    return SearchEmptyComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
SearchEmptyComponent = __decorate([core_1.Component({
    selector: "search-result-empty",
    template: ""
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef])], SearchEmptyComponent);
exports.SearchEmptyComponent = SearchEmptyComponent;
var SearchWallComponent = function (_super) {
    __extends(SearchWallComponent, _super);
    function SearchWallComponent(changeDetectorRef, viewContainer, formBuilder, configService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.formBuilder = formBuilder;
        _this.configService = configService;
        _this.searchResult = null;
        return _this;
    }
    SearchWallComponent.prototype.onSearchUpdate = function (value) {
        console.log("[SearchBoxComponent => onSearchUpdate] triggered with value:", value);
        this.searchResult = value;
        if (this.searchResultEmpty) {
            if (this.searchResult.results.length === 0) {
                this.searchResultEmpty.show(this.searchWord);
            } else {
                this.searchResultEmpty.hide();
            }
        }
    };
    SearchWallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewState = enums.DefaultViewState.None;
        this.configService.ensureConfigs().then(function (value) {
            var searchQueryKey = value.searchQueryKey;
            var searchTerm = "";
            var url = new Uri(window.location.href);
            if (url.hasQuery(searchQueryKey)) {
                var query = url.search(true);
                searchTerm = query[searchQueryKey];
            }
            _this.searchForm = _this.formBuilder.group({
                searchWord: [searchTerm]
            });
            _this.searchForm.valueChanges.debounceTime(500).subscribe(function (newValue) {
                // do something with value here
                console.log("[SearchBoxComponent] new value:'" + newValue.searchWord + "'", newValue);
                if (newValue.searchWord.length < 2) {
                    return;
                }
                url.setQuery(searchQueryKey, newValue.searchWord);
                var newUrl = url.href();
                // Update the query parameter
                history.pushState("", "", newUrl);
                // Trigger a search change event by assigning a new value to searchWord.
                _this.searchWord = newValue.searchWord;
            });
            _this.viewState = enums.DefaultViewState.DefaultTemplate;
            if (searchTerm.length > 1) {
                // Trigger search.
                _this.searchForm.get("searchWord").patchValue(searchTerm);
            }
        });
    };
    SearchWallComponent.prototype.isContent = function (type) {
        return type === enums.SearchType.Content;
    };
    SearchWallComponent.prototype.isMedia = function (type) {
        return type === enums.SearchType.Media;
    };
    SearchWallComponent.prototype.isFile = function (type) {
        return type === enums.SearchType.File;
    };
    return SearchWallComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
__decorate([core_1.ViewChild("DefaultTemplate"), __metadata("design:type", core_1.TemplateRef)], SearchWallComponent.prototype, "defaultTemplate", void 0);
__decorate([core_1.ContentChild(SearchEmptyComponent), __metadata("design:type", SearchEmptyComponent)], SearchWallComponent.prototype, "searchResultEmpty", void 0);
SearchWallComponent = __decorate([core_1.Component({
    selector: "search-wall",
    template: __webpack_require__("./src/typescript/components/search-wall/templates/search-wall.html"),
    styles: [__webpack_require__("./src/typescript/components/search-wall/search-wall.scss").toString()]
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(forms_1.FormBuilder)), __param(3, core_1.Inject(bl.ConfigService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, forms_1.FormBuilder, bl.ConfigService])], SearchWallComponent);
exports.SearchWallComponent = SearchWallComponent;

/***/ }),

/***/ "./src/typescript/components/search-wall/search-wall.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/search-wall/search-wall.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./search-wall.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./search-wall.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/components/search-wall/templates/search-wall.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>\r\n<ng-template #DefaultTemplate>\r\n    <form [formGroup]=\"searchForm\" class=\"col-12 my-4\">\r\n        <bs-form-input formControlName=\"searchWord\" type=\"text\" name=\"searchWord\" placeholder=\"Sök\" [renderedInForm]=\"false\"></bs-form-input>\r\n    </form>\r\n    <bl-search [searchTerm]=\"this?.searchWord\" (onSearchUpdate)=\"this?.onSearchUpdate($event);\" class=\"col-12\">\r\n        <ng-template>\r\n            <div class=\"card-deck\" *ngIf=\"this?.searchResult\">\r\n                <div *ngFor=\"let result of this.searchResult?.results\" class=\"col-sm-12 my-sm-2 col-md-4\">\r\n                    <div class=\"module-card card-linked card\">\r\n                        <ng-template [ngIf]=\"isContent(result?.type)\">\r\n                            <a class=\"card-link\" [href]=\"result.url\"></a>\r\n                            <div class=\"card-block\">\r\n                                <i class=\"fa fa-circle pull-right\"></i>\r\n                                <h4 class=\"card-title\">{{ result.nodeName }}</h4>\r\n                                <p class=\"card-text\">{{ result.gridFrontPage | truncate: 100 }}</p>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template [ngIf]=\"isMedia(result?.type)\">\r\n                            <a class=\"card-link\" [href]=\"result.url\"></a>\r\n                            <img class=\"card-img-top\" src=\"\" [alt]=\"result.nodeName\">\r\n                            <div class=\"card-block\">\r\n                                <h4 class=\"card-title\">{{ result.nodeName }}</h4>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template [ngIf]=\"isFile(result?.type)\">\r\n                            <a class=\"card-link\" [href]=\"result.url\"></a>\r\n                            <div class=\"card-block\">\r\n                                <h4 class=\"card-title\">{{ result.nodeName }}</h4>\r\n                            </div>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n                <ng-template [ngTemplateOutlet]=\"this.searchResultEmpty?.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>\r\n            </div>\r\n        </ng-template>\r\n    </bl-search>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/typescript/components/simple-login/simple-login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var enums_1 = __webpack_require__("./src/typescript/enums/index.ts");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var loginEvent_service_1 = __webpack_require__("./src/typescript/loginEvent.service.ts");
var generic_messages_enum_1 = __webpack_require__("./src/typescript/enums/generic-messages-enum.ts");
var alert_box_component_1 = __webpack_require__("./src/typescript/components/bootstrap/alert-box/alert-box.component.ts");
var alert_box_service_1 = __webpack_require__("./src/typescript/alert-box.service.ts");
var navigation_service_1 = __webpack_require__("./src/typescript/navigation.service.ts");
var SimpleLoginComponent = function (_super) {
    __extends(SimpleLoginComponent, _super);
    function SimpleLoginComponent(changeDetectorRef, viewContainer, formBuilder, ngZone, router, umbracoAjaxService, loginEventService, navigationService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.formBuilder = formBuilder;
        _this.ngZone = ngZone;
        _this.router = router;
        _this.umbracoAjaxService = umbracoAjaxService;
        _this.loginEventService = loginEventService;
        _this.navigationService = navigationService;
        _this.showForm = true;
        return _this;
    }
    SimpleLoginComponent.prototype.isValid = function () {
        if (!Object.isNullOrUndefined(this.payload) && this.payload.messageType === generic_messages_enum_1.GenericMessages.Danger) {
            return false;
        }
        return true;
    };
    SimpleLoginComponent.prototype.sendConfirmationMail = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.ngZone.run(function () {
            _this.umbracoAjaxService.post("MemberSurface", "SendConfirmationMailPost", { email: _this.payload.user.email }).catch(function (error) {
                _this.payload = error;
                // Show error alert box with message.
                var alertBoxOption = new alert_box_service_1.AlertBoxOptions(alert_box_service_1.AlertBoxEventType.Error, error.message);
                _this.alertBoxComponent.show(alertBoxOption);
                if (error.messageType === generic_messages_enum_1.GenericMessages.Danger && error.status === (enums_1.MemberStatus.AuthorizationFailure || enums_1.MemberStatus.FacebookIntegrated)) {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.SignInError, error);
                } else {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.GenericError, error);
                }
            }).then(function (value) {
                if (value) {
                    _this.payload = value;
                    if (value.messageType === generic_messages_enum_1.GenericMessages.Success) {
                        var alertBoxOption = new alert_box_service_1.AlertBoxOptions(alert_box_service_1.AlertBoxEventType.Success, value.message);
                        _this.alertBoxComponent.show(alertBoxOption);
                    }
                }
            });
        });
    };
    SimpleLoginComponent.prototype.doLogin = function ($event) {
        var _this = this;
        $event.preventDefault();
        console.log("[SimpleLoginFormComponent]:OnSubmit -> doLogin()", this.loginForm);
        this.ngZone.run(function () {
            _this.umbracoAjaxService.post("MemberSurface", "SignInMemberPost", _this.loginForm.value).catch(function (error) {
                _this.payload = error;
                // Show error alert box with message.
                var alertBoxOption = new alert_box_service_1.AlertBoxOptions(alert_box_service_1.AlertBoxEventType.Error, error.message);
                _this.alertBoxComponent.show(alertBoxOption);
                if (error.messageType === generic_messages_enum_1.GenericMessages.Danger && error.status === (enums_1.MemberStatus.AuthorizationFailure || enums_1.MemberStatus.FacebookIntegrated)) {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.SignInError, error);
                } else {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.GenericError, error);
                }
            }).then(function (value) {
                if (value) {
                    _this.payload = value;
                    if (value.messageType === generic_messages_enum_1.GenericMessages.Success) {
                        if (value.status === enums_1.MemberStatus.EmailAuthorisationNeeded) {
                            _this.showForm = false;
                            var alertBoxOption = new alert_box_service_1.AlertBoxOptions(alert_box_service_1.AlertBoxEventType.Success, value.message);
                            _this.alertBoxComponent.show(alertBoxOption, _this.alertEmailConfirmationNeededTemplate);
                            return;
                        }
                        if (value.status === enums_1.MemberStatus.AlreadyLoggedIn) {
                            _this.loginEventService.emit(loginEvent_service_1.LoginEventType.Success, value);
                        } else if (value.status === enums_1.MemberStatus.LoggedIn || value.status === enums_1.MemberStatus.AdminLoggedIn) {
                            _this.loginEventService.emit(loginEvent_service_1.LoginEventType.Success, value);
                            // ToDo: change this!
                            if (window.location.pathname === "/kod") {
                                return;
                            }
                            if (value.redirectTo) {
                                _this.navigationService.navigate(value.redirectTo);
                            } else if (value.loginUrl.asUrl().pathname.indexOf(window.location.pathname) !== -1) {
                                _this.navigationService.navigate("/");
                            } else {
                                _this.navigationService.reload();
                            }
                        }
                    }
                }
            });
        });
    };
    SimpleLoginComponent.prototype.ngOnInit = function () {
        var confirmEmailToken = Object.getQueryStringValue("confirmEmailToken");
        if (!Object.isNullOrUndefined(confirmEmailToken)) {}
        this.loginForm = this.formBuilder.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required],
            remember: ["1"]
        });
    };
    return SimpleLoginComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
__decorate([core_1.ContentChild(alert_box_component_1.BootstrapAlertBoxComponent), __metadata("design:type", alert_box_component_1.BootstrapAlertBoxComponent)], SimpleLoginComponent.prototype, "alertBoxComponent", void 0);
__decorate([core_1.ViewChild("AlertEmailConfirmationNeeded"), __metadata("design:type", core_1.TemplateRef)], SimpleLoginComponent.prototype, "alertEmailConfirmationNeededTemplate", void 0);
__decorate([core_1.Input("emailConfirmationText"), __metadata("design:type", String)], SimpleLoginComponent.prototype, "emailConfirmationText", void 0);
__decorate([core_1.Input("emailConfirmationButtonText"), __metadata("design:type", String)], SimpleLoginComponent.prototype, "emailConfirmationButtonText", void 0);
SimpleLoginComponent = __decorate([core_1.Component({
    selector: "simple-login",
    template: __webpack_require__("./src/typescript/components/simple-login/templates/simple-login.html"),
    providers: [navigation_service_1.NavigationService]
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(forms_1.FormBuilder)), __param(3, core_1.Inject(core_1.NgZone)), __param(4, core_1.Inject(router_1.Router)), __param(5, core_1.Inject(bl.UmbracoAjaxService)), __param(6, core_1.Inject(loginEvent_service_1.LoginEventService)), __param(7, core_1.Inject(navigation_service_1.NavigationService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, forms_1.FormBuilder, core_1.NgZone, router_1.Router, bl.UmbracoAjaxService, loginEvent_service_1.LoginEventService, navigation_service_1.NavigationService])], SimpleLoginComponent);
exports.SimpleLoginComponent = SimpleLoginComponent;

/***/ }),

/***/ "./src/typescript/components/simple-login/templates/simple-login.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>\r\n<ng-template #AlertEmailConfirmationNeeded>\r\n   {{ this.emailConfirmationText }} <button type=\"button\" (click)=\"this.sendConfirmationMail($event)\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> {{ this.emailConfirmationButtonText }}</button>\r\n</ng-template>"

/***/ }),

/***/ "./src/typescript/components/simple-signup/simple-signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var enums_1 = __webpack_require__("./src/typescript/enums/index.ts");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var loginEvent_service_1 = __webpack_require__("./src/typescript/loginEvent.service.ts");
var generic_messages_enum_1 = __webpack_require__("./src/typescript/enums/generic-messages-enum.ts");
var validation_service_1 = __webpack_require__("./src/typescript/validation.service.ts");
var SimpleSignUpComponent = function (_super) {
    __extends(SimpleSignUpComponent, _super);
    function SimpleSignUpComponent(changeDetectorRef, viewContainer, formBuilder, ngZone, umbracoAjaxService, loginEventService, validationService) {
        var _this = _super.call(this, changeDetectorRef, viewContainer) || this;
        _this.formBuilder = formBuilder;
        _this.ngZone = ngZone;
        _this.umbracoAjaxService = umbracoAjaxService;
        _this.loginEventService = loginEventService;
        _this.validationService = validationService;
        _this.signupSuccess = false;
        return _this;
    }
    SimpleSignUpComponent.prototype.isValid = function () {
        if (!Object.isNullOrUndefined(this.payload) && this.payload.messageType === generic_messages_enum_1.GenericMessages.Danger) {
            return false;
        }
        return true;
    };
    SimpleSignUpComponent.prototype.doSignUp = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.ngZone.run(function () {
            _this.umbracoAjaxService.post("MemberSurface", "SignUpMemberPost", _this.signUpForm.value).catch(function (error) {
                _this.payload = error;
                if (error.messageType === generic_messages_enum_1.GenericMessages.Danger && error.status === (enums_1.MemberStatus.AuthorizationFailure || enums_1.MemberStatus.FacebookIntegrated)) {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.SignInError, error);
                } else {
                    _this.loginEventService.emit(loginEvent_service_1.LoginEventType.GenericError, error);
                }
            }).then(function (value) {
                console.log("SignUpMemberPost", value);
                if (value) {
                    _this.payload = value;
                    _this.signupSuccess = true;
                }
            });
        });
    };
    SimpleSignUpComponent.prototype.ngOnInit = function () {
        var password = this.formBuilder.control("", validation_service_1.ValidationService.passwordValidator(8));
        var confirmPassword = this.formBuilder.control("", validation_service_1.ValidationService.equalTo(password, "Password", "Confirm Password"));
        this.signUpForm = this.formBuilder.group({
            phone: ["", forms_1.Validators.required],
            company: ["", forms_1.Validators.required],
            email: ["", forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.email]), this.validationService.emailValidator(this.umbracoAjaxService).bind(this)],
            firstName: ["", forms_1.Validators.required],
            lastName: ["", forms_1.Validators.required],
            passwordGroup: this.formBuilder.group({
                password: password,
                confirmPassword: confirmPassword
            })
        });
    };
    return SimpleSignUpComponent;
}(TemplateBaseComponent_1.TemplateBaseComponent);
SimpleSignUpComponent = __decorate([core_1.Component({
    selector: "simple-signup",
    template: "<ng-template [ngTemplateOutlet]=\"this.currentTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template>"
}), __param(0, core_1.Inject(core_1.ChangeDetectorRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(forms_1.FormBuilder)), __param(3, core_1.Inject(core_1.NgZone)), __param(4, core_1.Inject(bl.UmbracoAjaxService)), __param(5, core_1.Inject(loginEvent_service_1.LoginEventService)), __param(6, core_1.Inject(validation_service_1.ValidationService)), __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ViewContainerRef, forms_1.FormBuilder, core_1.NgZone, bl.UmbracoAjaxService, loginEvent_service_1.LoginEventService, validation_service_1.ValidationService])], SimpleSignUpComponent);
exports.SimpleSignUpComponent = SimpleSignUpComponent;

/***/ }),

/***/ "./src/typescript/components/widget-quickNavigator/quicknav-arrow.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/components/widget-quickNavigator/quicknav-arrow.png";

/***/ }),

/***/ "./src/typescript/components/widget-quickNavigator/templates/quicknavigator.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"widget-quickNavigator\" *ngIf=\"menu\">\r\n    <li class=\"quickNavigator-editLink\">\r\n        <a href=\"{{menu.editLinkUrl}}\" target=\"_self\"><span>Umbraco</span></a>\r\n    </li>\r\n    <li class=\"quickNavigator-dropdown\">\r\n        <a class=\"quickNavigator-dropdown-arrow\" (click)=\"toggle($event)\"></a>\r\n        <ul class=\"quickNavigator-menu\" [ngClass]=\"{'menu-open': isMenuOpen }\">\r\n            <li *ngFor=\"let value of menu?.items\">\r\n                <a href=\"{{ value.url }}\" target=\"{{ value.target }}\">{{ value.name }}</a>\r\n            </li>\r\n            <ng-content></ng-content>\r\n        </ul>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/typescript/components/widget-quickNavigator/umbraco.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/components/widget-quickNavigator/umbraco.svg";

/***/ }),

/***/ "./src/typescript/components/widget-quickNavigator/widget-quickNavigator.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var _1 = __webpack_require__("./src/typescript/blueleet/index.ts");
__webpack_require__("./src/typescript/components/widget-quickNavigator/quicknav-arrow.png");
__webpack_require__("./src/typescript/components/widget-quickNavigator/umbraco.svg");
var WidgetQuickNavigatorComponent = function () {
    function WidgetQuickNavigatorComponent(umbracoAjaxService, zone, elementRef) {
        this.umbracoAjaxService = umbracoAjaxService;
        this.zone = zone;
        this.elementRef = elementRef;
        this.isMenuOpen = false;
        this.menu = undefined;
    }
    WidgetQuickNavigatorComponent.prototype.toggle = function (event) {
        event.preventDefault();
        this.isMenuOpen = !this.isMenuOpen;
    };
    WidgetQuickNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var promise = this.umbracoAjaxService.post("QuickNavigatorWidget", "GetLinkItemsPost", null, { silentTry: true });
        promise.then(function (value) {
            if (value) {
                _this.zone.run(function () {
                    _this.menu = value;
                    $(document).on("click", function ($event) {
                        if (!$($event.target).closest(_this.elementRef.nativeElement).length) {
                            // Hide the component.
                            _this.isMenuOpen = false;
                        }
                    });
                });
            }
        });
    };
    return WidgetQuickNavigatorComponent;
}();
WidgetQuickNavigatorComponent = __decorate([core_1.Component({
    selector: "widget-quick-navigator",
    template: __webpack_require__("./src/typescript/components/widget-quickNavigator/templates/quicknavigator.html"),
    styles: [__webpack_require__("./src/typescript/components/widget-quickNavigator/widget-quickNavigator.scss").toString()]
}), __param(0, core_1.Inject(_1.UmbracoAjaxService)), __param(1, core_1.Inject(core_1.NgZone)), __param(2, core_1.Inject(core_1.ElementRef)), __metadata("design:paramtypes", [_1.UmbracoAjaxService, core_1.NgZone, core_1.ElementRef])], WidgetQuickNavigatorComponent);
exports.WidgetQuickNavigatorComponent = WidgetQuickNavigatorComponent;

/***/ }),

/***/ "./src/typescript/components/widget-quickNavigator/widget-quickNavigator.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/widget-quickNavigator/widget-quickNavigator.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./widget-quickNavigator.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./widget-quickNavigator.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/typescript/decorators/Protected.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TemplateBaseComponent_1 = __webpack_require__("./src/typescript/components/abstraction/TemplateBaseComponent.ts");
var user_service_1 = __webpack_require__("./src/typescript/user.service.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
function Protected(target) {
    if (target.prototype instanceof TemplateBaseComponent_1.TemplateBaseComponent) {
        var ngAfterContentInit_1 = target.prototype.ngAfterContentInit;
        var updateTemplate_1 = target.prototype.updateTemplate;
        Object.defineProperty(target.prototype, "updateTemplate", {
            value: function value() {
                var _this = this;
                var currentTemplateState = this.currentTemplate;
                var viewContainerRef = this.viewContainerRef;
                var zone = viewContainerRef.injector.get(core_1.NgZone);
                var userService = viewContainerRef.injector.get(user_service_1.UserService);
                var args = arguments;
                userService.onHasAccess.subscribe(function (hasAccess) {
                    zone.run(function () {
                        _this.currentTemplate = null;
                        if (_.isBoolean(hasAccess) && hasAccess) {
                            _this.currentTemplate = currentTemplateState;
                            return updateTemplate_1.apply(_this, args);
                        } else {
                            _this.currentTemplate = null;
                            return function () {};
                        }
                    });
                });
            }
        });
        Object.defineProperty(target.prototype, "ngAfterContentInit", {
            value: function value() {
                var _this = this;
                var viewContainerRef = this.viewContainerRef;
                var zone = viewContainerRef.injector.get(core_1.NgZone);
                var userService = viewContainerRef.injector.get(user_service_1.UserService);
                var args = arguments;
                zone.run(function () {
                    userService.onHasAccess.subscribe(function (hasAccess) {
                        if (_.isBoolean(hasAccess) && hasAccess) {
                            return ngAfterContentInit_1.apply(_this, args);
                        } else {
                            _this.currentTemplate = null;
                            return function () {};
                        }
                    });
                });
                return function () {};
            }
        });
        return target;
    }
    console.warn("The object '" + target.constructor.name + "' is not supported for @Protected.");
    return target;
}
exports.Protected = Protected;

/***/ }),

/***/ "./src/typescript/detectDevice.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/**
* Reference: http://detectmobilebrowsers.com/
*/
var DetectDeviceService = function () {
    /* tslint:enable:max-line-length */
    function DetectDeviceService(window) {
        this.window = window;
        /* tslint:disable:max-line-length */
        this.mobileRegex = new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/);
        this.mobilePartialRegex = new RegExp(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i);
    }
    DetectDeviceService.prototype.isMobile = function () {
        var agent = navigator.userAgent || navigator.vendor || window.opera;
        return this.mobileRegex.test(agent) || this.mobilePartialRegex.test(agent.substring(0, 4));
    };
    return DetectDeviceService;
}();
DetectDeviceService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(Window)), __metadata("design:paramtypes", [Window])], DetectDeviceService);
exports.DetectDeviceService = DetectDeviceService;

/***/ }),

/***/ "./src/typescript/dev-helpers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Env = function () {
    function Env() {}
    Env.isProd = function () {
        return "development" === "production";
    };
    Env.isDev = function () {
        return "development" === "development";
    };
    return Env;
}();
exports.Env = Env;

/***/ }),

/***/ "./src/typescript/enums/default-view-state-enum.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var DefaultViewState;
(function (DefaultViewState) {
    DefaultViewState[DefaultViewState["None"] = 0] = "None";
    DefaultViewState[DefaultViewState["DefaultTemplate"] = 1] = "DefaultTemplate";
})(DefaultViewState = exports.DefaultViewState || (exports.DefaultViewState = {}));

/***/ }),

/***/ "./src/typescript/enums/generic-messages-enum.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var GenericMessages;
(function (GenericMessages) {
    GenericMessages[GenericMessages["Warning"] = 0] = "Warning";
    GenericMessages[GenericMessages["Danger"] = 1] = "Danger";
    GenericMessages[GenericMessages["Success"] = 2] = "Success";
    GenericMessages[GenericMessages["Info"] = 3] = "Info";
})(GenericMessages = exports.GenericMessages || (exports.GenericMessages = {}));

/***/ }),

/***/ "./src/typescript/enums/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module
 * @description
 * Entry point for all public enums.
 */
__export(__webpack_require__("./src/typescript/enums/generic-messages-enum.ts"));
__export(__webpack_require__("./src/typescript/enums/member-status-enum.ts"));
__export(__webpack_require__("./src/typescript/enums/default-view-state-enum.ts"));
__export(__webpack_require__("./src/typescript/enums/password-verdict.ts"));
__export(__webpack_require__("./src/typescript/enums/searchType.ts"));

/***/ }),

/***/ "./src/typescript/enums/member-status-enum.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var MemberStatus;
(function (MemberStatus) {
    MemberStatus[MemberStatus["Unknown"] = 0] = "Unknown";
    MemberStatus[MemberStatus["NeedApproval"] = 1] = "NeedApproval";
    MemberStatus[MemberStatus["EmailAuthorisationNeeded"] = 2] = "EmailAuthorisationNeeded";
    MemberStatus[MemberStatus["Registered"] = 3] = "Registered";
    MemberStatus[MemberStatus["NotRegistered"] = 4] = "NotRegistered";
    MemberStatus[MemberStatus["LoginExpired"] = 5] = "LoginExpired";
    MemberStatus[MemberStatus["EmailRetrievalDisallowed"] = 6] = "EmailRetrievalDisallowed";
    MemberStatus[MemberStatus["AlreadyLoggedIn"] = 7] = "AlreadyLoggedIn";
    MemberStatus[MemberStatus["LoggedIn"] = 8] = "LoggedIn";
    MemberStatus[MemberStatus["AuthorizationFailure"] = 9] = "AuthorizationFailure";
    MemberStatus[MemberStatus["FacebookIntegrated"] = 10] = "FacebookIntegrated";
    MemberStatus[MemberStatus["AlreadyRegistered"] = 11] = "AlreadyRegistered";
    MemberStatus[MemberStatus["AdminLoggedIn"] = 12] = "AdminLoggedIn";
})(MemberStatus = exports.MemberStatus || (exports.MemberStatus = {}));

/***/ }),

/***/ "./src/typescript/enums/password-verdict.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var PasswordVerdict;
(function (PasswordVerdict) {
  /**
   * @description Too guessable: risky password.
   */
  PasswordVerdict[PasswordVerdict["Weak"] = 0] = "Weak";
  /**
   * @description Very guessable: protection from throttled online attacks.
   */
  PasswordVerdict[PasswordVerdict["Normal"] = 1] = "Normal";
  /**
   * @description Somewhat guessable: protection from unthrottled online attacks.
   */
  PasswordVerdict[PasswordVerdict["Medium"] = 2] = "Medium";
  /**
   * @description Safely unguessable: moderate protection from offline slow-hash scenario.
   */
  PasswordVerdict[PasswordVerdict["Strong"] = 3] = "Strong";
  /**
   * @description Very unguessable: strong protection from offline slow-hash scenario.
   */
  PasswordVerdict[PasswordVerdict["VeryStrong"] = 4] = "VeryStrong";
})(PasswordVerdict = exports.PasswordVerdict || (exports.PasswordVerdict = {}));

/***/ }),

/***/ "./src/typescript/enums/searchType.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var SearchType;
(function (SearchType) {
  /**
   * @description Marks a content type.
   */
  SearchType[SearchType["Content"] = 0] = "Content";
  /**
   * @description Marks a media type.
   */
  SearchType[SearchType["Media"] = 1] = "Media";
  /**
   * @description Marks a file type.
   */
  SearchType[SearchType["File"] = 2] = "File";
})(SearchType = exports.SearchType || (exports.SearchType = {}));

/***/ }),

/***/ "./src/typescript/hoverable.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var hoverableEvent_service_1 = __webpack_require__("./src/typescript/hoverableEvent.service.ts");
var HoverableGroupDirective = function () {
    function HoverableGroupDirective(eventService) {
        this.eventService = eventService;
        this.showOnHover = true;
    }
    HoverableGroupDirective.prototype.onMouseEnter = function () {
        this.eventService.emit(hoverableEvent_service_1.HoverableEventType.MouseEnter);
    };
    HoverableGroupDirective.prototype.onMouseLeave = function () {
        this.eventService.emit(hoverableEvent_service_1.HoverableEventType.MouseLeave);
    };
    HoverableGroupDirective.prototype.ngOnChanges = function (changes) {
        var group = changes["group"];
        if (group) {
            // Checks if this is an existing item created before.
            if (typeof group.previousValue === "string") {
                this.eventService.setGroup(group.currentValue);
                this.eventService.emit(hoverableEvent_service_1.HoverableEventType.InstanceGroup, this);
            }
        }
    };
    HoverableGroupDirective.prototype.ngAfterContentInit = function () {
        this.eventService.setGroup(this.group);
        this.eventService.emit(hoverableEvent_service_1.HoverableEventType.InstanceGroup, this);
    };
    HoverableGroupDirective.prototype.ngOnInit = function () {};
    return HoverableGroupDirective;
}();
__decorate([core_1.Input("hoverable-group"), __metadata("design:type", String)], HoverableGroupDirective.prototype, "group", void 0);
__decorate([core_1.Input("show-on-hover"), __metadata("design:type", Boolean)], HoverableGroupDirective.prototype, "showOnHover", void 0);
__decorate([core_1.HostListener("mouseenter"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], HoverableGroupDirective.prototype, "onMouseEnter", null);
__decorate([core_1.HostListener("mouseleave"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], HoverableGroupDirective.prototype, "onMouseLeave", null);
HoverableGroupDirective = __decorate([core_1.Directive({
    selector: "[hoverable-group]",
    providers: [hoverableEvent_service_1.HoverableEventService]
}), __param(0, core_1.Inject(hoverableEvent_service_1.HoverableEventService)), __metadata("design:paramtypes", [hoverableEvent_service_1.HoverableEventService])], HoverableGroupDirective);
exports.HoverableGroupDirective = HoverableGroupDirective;
var HoverableDirective = function () {
    function HoverableDirective(elementRef, renderer, eventService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.eventService = eventService;
        this.group = null;
        this.showOnHover = null;
        this.visibleDisplayValue = "inline-block";
        this.displayHiddenValue = "none";
    }
    HoverableDirective.prototype.enter = function () {
        if (this.showOnHover) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", this.orginaValue);
        } else {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", "none");
        }
    };
    HoverableDirective.prototype.leave = function () {
        if (this.showOnHover) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", "none");
        } else {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", this.orginaValue);
        }
    };
    HoverableDirective.prototype.initialize = function (instance) {
        var _this = this;
        if (instance) {
            if (this.showOnHover === null && instance.showOnHover !== null) {
                this.showOnHover = instance.showOnHover;
            }
        }
        if (this.showOnHover) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", "none");
        } else {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", this.orginaValue);
        }
        this.mouseEnterSubscription = this.eventService.on(hoverableEvent_service_1.HoverableEventType.MouseEnter).subscribe(function () {
            _this.enter();
        });
        this.mouseLeaveSubscription = this.eventService.on(hoverableEvent_service_1.HoverableEventType.MouseLeave).subscribe(function () {
            _this.leave();
        });
    };
    HoverableDirective.prototype.updateOrginalValue = function () {
        this.orginaValue = $(this.elementRef.nativeElement).css("display");
    };
    HoverableDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var group = changes["group"];
        if (group) {
            this.eventService.setGroup(group.currentValue);
            if (typeof group.previousValue !== "string") {
                // This is a new entity
                this.updateOrginalValue();
                // We set this as predefined to prevent it from showing up before we can determine if it should or not.
                this.renderer.setElementStyle(this.elementRef.nativeElement, "display", "none");
                if (this.group) {
                    // Subscribe to initialize event.
                    this.eventService.on(hoverableEvent_service_1.HoverableEventType.InstanceGroup).debounceTime(1000).subscribe(function (instance) {
                        // Unsubscrbie if already subscribing.
                        if (_this.mouseLeaveSubscription) {
                            _this.mouseLeaveSubscription.unsubscribe();
                        }
                        if (_this.mouseEnterSubscription) {
                            _this.mouseEnterSubscription.unsubscribe();
                        }
                        // This ensures initialize is called in the correct moment.
                        setTimeout(function () {
                            return _this.initialize(instance);
                        }, 1);
                    });
                }
            }
        }
    };
    HoverableDirective.prototype.ngAfterContentInit = function () {};
    return HoverableDirective;
}();
__decorate([core_1.Input("hoverable"), __metadata("design:type", String)], HoverableDirective.prototype, "group", void 0);
__decorate([core_1.Input("show-on-hover"), __metadata("design:type", Boolean)], HoverableDirective.prototype, "showOnHover", void 0);
__decorate([core_1.Input("visible-display-value"), __metadata("design:type", String)], HoverableDirective.prototype, "visibleDisplayValue", void 0);
HoverableDirective = __decorate([core_1.Directive({
    selector: "[hoverable]",
    providers: [hoverableEvent_service_1.HoverableEventService]
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Renderer)), __param(2, core_1.Inject(hoverableEvent_service_1.HoverableEventService)), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, hoverableEvent_service_1.HoverableEventService])], HoverableDirective);
exports.HoverableDirective = HoverableDirective;

/***/ }),

/***/ "./src/typescript/hoverableEvent.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var HoverableEventType;
(function (HoverableEventType) {
    HoverableEventType[HoverableEventType["MouseEnter"] = 0] = "MouseEnter";
    HoverableEventType[HoverableEventType["MouseLeave"] = 1] = "MouseLeave";
    HoverableEventType[HoverableEventType["InstanceGroup"] = 2] = "InstanceGroup";
})(HoverableEventType = exports.HoverableEventType || (exports.HoverableEventType = {}));
var HoverableEventService = function () {
    function HoverableEventService(broadcaster) {
        this.broadcaster = broadcaster;
        this.group = null;
    }
    HoverableEventService.prototype.emit = function (eventType, data) {
        var key = this.getKey(eventType);
        this.broadcaster.broadcast(key, data);
    };
    HoverableEventService.prototype.on = function (eventType) {
        var key = this.getKey(eventType);
        return this.broadcaster.on(key);
    };
    HoverableEventService.prototype.setGroup = function (value) {
        this.group = value;
    };
    HoverableEventService.prototype.getKey = function (ofType) {
        var key;
        switch (ofType) {
            case HoverableEventType.MouseEnter:
                key = "HoverableEventType:MouseEnter";
                break;
            case HoverableEventType.MouseLeave:
                key = "HoverableEventType:MouseLeave";
                break;
            case HoverableEventType.InstanceGroup:
                key = "HoverableEventType:InstanceGroup";
                break;
            default:
                key = "HoverableEventType:None";
                break;
        }
        return this.group === null ? "" + key : key + ":" + this.group;
    };
    return HoverableEventService;
}();
HoverableEventService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(bl.BroadcasterService)), __metadata("design:paramtypes", [bl.BroadcasterService])], HoverableEventService);
exports.HoverableEventService = HoverableEventService;

/***/ }),

/***/ "./src/typescript/icon-color.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var IconColorDirective = function () {
    function IconColorDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    IconColorDirective.prototype.onMouseEnter = function () {
        this.highlight(this.iconColor);
    };
    IconColorDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    IconColorDirective.prototype.highlight = function (color) {
        this.renderer.setElementStyle(this.$iconElement, "color", color);
    };
    IconColorDirective.prototype.ngOnInit = function () {
        this.$iconElement = $(this.elementRef.nativeElement).find("i")[0];
    };
    return IconColorDirective;
}();
__decorate([core_1.Input("icon-color"), __metadata("design:type", String)], IconColorDirective.prototype, "iconColor", void 0);
__decorate([core_1.HostListener("mouseenter"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], IconColorDirective.prototype, "onMouseEnter", null);
__decorate([core_1.HostListener("mouseleave"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], IconColorDirective.prototype, "onMouseLeave", null);
IconColorDirective = __decorate([core_1.Directive({ selector: "[icon-color]" }), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Renderer)), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])], IconColorDirective);
exports.IconColorDirective = IconColorDirective;

/***/ }),

/***/ "./src/typescript/if-admin.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
var user_service_1 = __webpack_require__("./src/typescript/user.service.ts");
var IfAdminAndDirective = function () {
    function IfAdminAndDirective(templateRef, viewContainer, userService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.userService = userService;
        this.onStateChange = new BehaviorSubject_1.BehaviorSubject(false);
        this.hasView = false;
        this.condition = undefined;
    }
    Object.defineProperty(IfAdminAndDirective.prototype, "ifAdminAnd", {
        set: function set(condition) {
            this.condition = condition;
            if (this.userService.onIsAdminChange.value) {
                if (!condition && this.hasView) {
                    this.onStateChange.next(false);
                } else if (condition && !this.hasView) {
                    this.onStateChange.next(true);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    IfAdminAndDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.viewContainer.clear();
        this.hasView = false;
        this.onStateChange.subscribe(function (showView) {
            if (showView && !_this.hasView) {
                _this.hasView = true;
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            } else if (!showView && _this.hasView) {
                _this.hasView = false;
                _this.viewContainer.clear();
            }
        });
        this.userService.isAdmin().then(function () {
            _this.userService.onIsAdminChange.subscribe(function (isAdmin) {
                if (_this.condition !== undefined && _this.condition === false) {
                    isAdmin = false;
                }
                _this.onStateChange.next(isAdmin);
            });
        });
    };
    return IfAdminAndDirective;
}();
__decorate([core_1.Input("IfAdminAnd"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], IfAdminAndDirective.prototype, "ifAdminAnd", null);
IfAdminAndDirective = __decorate([core_1.Directive({ selector: "[IfAdminAnd]" }), __param(0, core_1.Inject(core_1.TemplateRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(user_service_1.UserService)), __metadata("design:paramtypes", [core_1.TemplateRef, core_1.ViewContainerRef, user_service_1.UserService])], IfAdminAndDirective);
exports.IfAdminAndDirective = IfAdminAndDirective;
var IfAdminDirective = function () {
    function IfAdminDirective(templateRef, viewContainer, userService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.userService = userService;
        this.onStateChange = new BehaviorSubject_1.BehaviorSubject(false);
        this.hasView = false;
    }
    IfAdminDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.viewContainer.clear();
        this.hasView = false;
        this.onStateChange.subscribe(function (showView) {
            if (showView && !_this.hasView) {
                _this.hasView = true;
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            } else if (!showView && _this.hasView) {
                _this.hasView = false;
                _this.viewContainer.clear();
            }
        });
        this.userService.isAdmin().then(function () {
            _this.userService.onIsAdminChange.subscribe(function (isAdmin) {
                _this.onStateChange.next(isAdmin);
            });
        });
    };
    return IfAdminDirective;
}();
IfAdminDirective = __decorate([core_1.Directive({ selector: "[IfAdmin]" }), __param(0, core_1.Inject(core_1.TemplateRef)), __param(1, core_1.Inject(core_1.ViewContainerRef)), __param(2, core_1.Inject(user_service_1.UserService)), __metadata("design:paramtypes", [core_1.TemplateRef, core_1.ViewContainerRef, user_service_1.UserService])], IfAdminDirective);
exports.IfAdminDirective = IfAdminDirective;

/***/ }),

/***/ "./src/typescript/log.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var LogPipe = function () {
    function LogPipe() {}
    LogPipe.prototype.transform = function (value) {
        if (!value) {
            console.log("[LogPipe]: value is:");
            console.log(value);
            return value;
        }
        console.log("[LogPipe]: value is null");
        return value;
    };
    return LogPipe;
}();
LogPipe = __decorate([core_1.Pipe({ name: "log" })], LogPipe);
exports.LogPipe = LogPipe;

/***/ }),

/***/ "./src/typescript/loginEvent.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var LoginEventType;
(function (LoginEventType) {
    LoginEventType[LoginEventType["None"] = 0] = "None";
    LoginEventType[LoginEventType["Success"] = 1] = "Success";
    LoginEventType[LoginEventType["GenericError"] = 2] = "GenericError";
    LoginEventType[LoginEventType["SignInError"] = 3] = "SignInError";
    LoginEventType[LoginEventType["SignUpError"] = 4] = "SignUpError";
    LoginEventType[LoginEventType["ForgotPasswordError"] = 5] = "ForgotPasswordError";
    LoginEventType[LoginEventType["ShowLoginView"] = 6] = "ShowLoginView";
    LoginEventType[LoginEventType["ShowSignupView"] = 7] = "ShowSignupView";
    LoginEventType[LoginEventType["ShowForgotPasswordView"] = 8] = "ShowForgotPasswordView";
})(LoginEventType = exports.LoginEventType || (exports.LoginEventType = {}));
var LoginEventService = function () {
    function LoginEventService(broadcaster) {
        this.broadcaster = broadcaster;
    }
    LoginEventService.prototype.emit = function (eventType, data) {
        var key = this.getKey(eventType);
        this.broadcaster.broadcast(key, data);
        if (eventType !== (LoginEventType.Success || LoginEventType.None)) {
            this.broadcaster.broadcast("LoginEventType:Error", data);
        }
    };
    LoginEventService.prototype.on = function (eventType) {
        var key = this.getKey(eventType);
        return this.broadcaster.on(key);
    };
    LoginEventService.prototype.onError = function () {
        return this.broadcaster.on("LoginEventType:Error");
    };
    LoginEventService.prototype.getKey = function (ofType) {
        switch (ofType) {
            case LoginEventType.Success:
                return "LoginEventType:Success";
            case LoginEventType.ForgotPasswordError:
                return "LoginEventType:ForgotPasswordError";
            case LoginEventType.GenericError:
                return "LoginEventType:GenericError";
            case LoginEventType.SignInError:
                return "LoginEventType:SignInError";
            case LoginEventType.SignUpError:
                return "LoginEventType:SignUpError";
            case LoginEventType.ShowLoginView:
                return "LoginEventType:ShowLoginView";
            case LoginEventType.ShowSignupView:
                return "LoginEventType:ShowSignupView";
            case LoginEventType.ShowForgotPasswordView:
                return "LoginEventType:ShowForgotPasswordView";
            default:
                return "LoginEventType:None";
        }
    };
    return LoginEventService;
}();
LoginEventService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(bl.BroadcasterService)), __metadata("design:paramtypes", [bl.BroadcasterService])], LoginEventService);
exports.LoginEventService = LoginEventService;

/***/ }),

/***/ "./src/typescript/main.app.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var RootAppComponent = function () {
    function RootAppComponent() {}
    RootAppComponent.prototype.ngAfterViewInit = function () {};
    return RootAppComponent;
}();
__decorate([core_1.ContentChild(core_1.TemplateRef), __metadata("design:type", core_1.TemplateRef)], RootAppComponent.prototype, "appTemplate", void 0);
RootAppComponent = __decorate([core_1.Component({
    selector: "app-root",
    template: "<ng-template [ngTemplateOutlet]=\"this.appTemplate\" [ngOutletContext]=\"{ $implicit: this }\"></ng-template><router-outlet></router-outlet>"
})], RootAppComponent);
exports.RootAppComponent = RootAppComponent;
var AppComponent = function () {
    function AppComponent() {}
    AppComponent.prototype.ngAfterViewInit = function () {};
    return AppComponent;
}();
AppComponent = __decorate([core_1.Component({
    selector: "app",
    template: document.getElementById("mainAppContent").innerText // Currently we have no way of using existing html as per to https://github.com/angular/angular/issues/1858 so we use this hack.
})], AppComponent);
exports.AppComponent = AppComponent;

/***/ }),

/***/ "./src/typescript/main.bootstraper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var dev_helpers_1 = __webpack_require__("./src/typescript/dev-helpers.ts");
// ToDo: separate below code into own modules and import for better readability.
// Valor imports
var alert_1 = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var buttons_1 = __webpack_require__("./node_modules/ngx-bootstrap/buttons/index.js");
var popover_1 = __webpack_require__("./node_modules/ngx-bootstrap/popover/index.js");
var browser_1 = __webpack_require__("./node_modules/ngx-bootstrap/utils/facade/browser.js");
// Application specific imports
var main_app_1 = __webpack_require__("./src/typescript/main.app.ts");
var icon_color_directive_1 = __webpack_require__("./src/typescript/icon-color.directive.ts");
var log_pipe_1 = __webpack_require__("./src/typescript/log.pipe.ts");
var detectDevice_service_1 = __webpack_require__("./src/typescript/detectDevice.service.ts");
var widget_search_directive_1 = __webpack_require__("./src/typescript/widget-search.directive.ts");
var widget_quickNavigator_component_1 = __webpack_require__("./src/typescript/components/widget-quickNavigator/widget-quickNavigator.component.ts");
var login_signup_component_1 = __webpack_require__("./src/typescript/components/login-signup/login-signup.component.ts");
var loginEvent_service_1 = __webpack_require__("./src/typescript/loginEvent.service.ts");
var login_signup_complete_component_1 = __webpack_require__("./src/typescript/components/login-signup/login-signup-complete.component.ts");
var search_box_component_1 = __webpack_require__("./src/typescript/components/search-box/search-box.component.ts");
var simple_login_component_1 = __webpack_require__("./src/typescript/components/simple-login/simple-login.component.ts");
var user_service_1 = __webpack_require__("./src/typescript/user.service.ts");
var simple_signup_component_1 = __webpack_require__("./src/typescript/components/simple-signup/simple-signup.component.ts");
var form_input_component_1 = __webpack_require__("./src/typescript/components/bootstrap/form-input.component.ts");
var alert_box_component_1 = __webpack_require__("./src/typescript/components/bootstrap/alert-box/alert-box.component.ts");
var validation_service_1 = __webpack_require__("./src/typescript/validation.service.ts");
var forgot_password_component_1 = __webpack_require__("./src/typescript/components/forgot-password/forgot-password.component.ts");
var signout_component_1 = __webpack_require__("./src/typescript/components/login-signup/signout.component.ts");
var hoverable_directive_1 = __webpack_require__("./src/typescript/hoverable.directive.ts");
var hoverableEvent_service_1 = __webpack_require__("./src/typescript/hoverableEvent.service.ts");
var if_admin_directive_1 = __webpack_require__("./src/typescript/if-admin.directive.ts");
var search_wall_component_1 = __webpack_require__("./src/typescript/components/search-wall/search-wall.component.ts");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var alert_box_service_1 = __webpack_require__("./src/typescript/alert-box.service.ts");
var event_component_1 = __webpack_require__("./src/typescript/components/event/event.component.ts");
var code_component_1 = __webpack_require__("./src/typescript/components/event/code.component.ts");
// Configure ngx-bootstrap
browser_1.window.__theme = "bs4";
// ToDo: Refactor
var appRoutes = [{ path: "**", component: main_app_1.AppComponent } // This matches all routes
];
var extraRouteOpts = {
    enableTracing: false
};
if (dev_helpers_1.Env.isDev()) {
    extraRouteOpts.enableTracing = true;
}
var AppModule = function () {
    function AppModule() {}
    return AppModule;
}();
AppModule = __decorate([core_1.NgModule({
    imports: [router_1.RouterModule.forRoot(appRoutes, extraRouteOpts), platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.ReactiveFormsModule, bl.CommonDirectivesModule, bl.WidgetsModule, bl.BlueLeetUmbracoModule.forRoot(), bl.InlineEditorModule.forRoot(), bl.SearchModule.forRoot(), bl.LanguageModule, alert_1.AlertModule.forRoot(), modal_1.ModalModule.forRoot(), buttons_1.ButtonsModule.forRoot(), popover_1.PopoverModule.forRoot()],
    declarations: [log_pipe_1.LogPipe, main_app_1.RootAppComponent, main_app_1.AppComponent, hoverable_directive_1.HoverableGroupDirective, hoverable_directive_1.HoverableDirective, icon_color_directive_1.IconColorDirective, widget_search_directive_1.WidgetSearchDirective, if_admin_directive_1.IfAdminDirective, if_admin_directive_1.IfAdminAndDirective, widget_quickNavigator_component_1.WidgetQuickNavigatorComponent, login_signup_component_1.LoginSignupComponent, login_signup_complete_component_1.LoginSignupCompleteComponent, simple_login_component_1.SimpleLoginComponent, simple_signup_component_1.SimpleSignUpComponent, forgot_password_component_1.ForgotPasswordComponent, search_box_component_1.SearchBoxComponent, form_input_component_1.BootstrapFormInputComponent, alert_box_component_1.BootstrapAlertBoxComponent, signout_component_1.SignoutComponent, search_wall_component_1.SearchWallComponent, search_wall_component_1.SearchEmptyComponent, event_component_1.EventComponent, code_component_1.EventCodeComponent],
    providers: [{ provide: Window, useValue: browser_1.window }, detectDevice_service_1.DetectDeviceService, user_service_1.UserService, loginEvent_service_1.LoginEventService, validation_service_1.ValidationService, hoverableEvent_service_1.HoverableEventService, alert_box_service_1.AlertBoxService],
    bootstrap: [main_app_1.RootAppComponent]
})], AppModule);
exports.AppModule = AppModule;

/***/ }),

/***/ "./src/typescript/main.browser.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var main_bootstraper_1 = __webpack_require__("./src/typescript/main.bootstraper.ts");
var dev_helpers_1 = __webpack_require__("./src/typescript/dev-helpers.ts");
if (dev_helpers_1.Env.isProd()) {
    core_1.enableProdMode();
}
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(main_bootstraper_1.AppModule, { useDebug: dev_helpers_1.Env.isDev() });
}
exports.main = main;
if (document.readyState === "complete") {
    main();
} else {
    document.addEventListener("DOMContentLoaded", main);
}
// Import assets.
__webpack_require__("./src/assets/stylesheets/ie10-viewport-bug-workaround.css");
__webpack_require__("./src/assets/images/favicon.jpg");
__webpack_require__("./src/assets/images/clock-preview.png");
// Module assets
__webpack_require__("./node_modules/angular2-busy/build/style/busy.css");

/***/ }),

/***/ "./src/typescript/navigation.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var pace = __webpack_require__("./node_modules/pace-progress/pace.js");
var NavigationService = function () {
    function NavigationService(router, ngZone) {
        this.router = router;
        this.ngZone = ngZone;
    }
    NavigationService.prototype.navigate = function (url, paceUnload) {
        if (paceUnload === void 0) {
            paceUnload = true;
        }
        var self = this;
        self.router.navigateByUrl(url);
        self.reload(paceUnload);
    };
    NavigationService.prototype.reload = function (paceUnload) {
        if (paceUnload === void 0) {
            paceUnload = true;
        }
        var self = this;
        window.onbeforeunload = function () {
            pace.stop();
            pace.bar.render();
        };
        self.ngZone.runOutsideAngular(function () {
            window.location.reload();
        });
    };
    return NavigationService;
}();
NavigationService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(router_1.Router)), __param(1, core_1.Inject(core_1.NgZone)), __metadata("design:paramtypes", [router_1.Router, core_1.NgZone])], NavigationService);
exports.NavigationService = NavigationService;

/***/ }),

/***/ "./src/typescript/polyfills.browser.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/core-js/es6/symbol.js");
__webpack_require__("./node_modules/core-js/es6/object.js");
__webpack_require__("./node_modules/core-js/es6/function.js");
__webpack_require__("./node_modules/core-js/es6/parse-int.js");
__webpack_require__("./node_modules/core-js/es6/parse-float.js");
__webpack_require__("./node_modules/core-js/es6/number.js");
__webpack_require__("./node_modules/core-js/es6/math.js");
__webpack_require__("./node_modules/core-js/es6/string.js");
__webpack_require__("./node_modules/core-js/es6/date.js");
__webpack_require__("./node_modules/core-js/es6/array.js");
__webpack_require__("./node_modules/core-js/es6/regexp.js");
__webpack_require__("./node_modules/core-js/es6/map.js");
__webpack_require__("./node_modules/core-js/es6/set.js");
__webpack_require__("./node_modules/core-js/es6/reflect.js");
__webpack_require__("./node_modules/core-js/es7/reflect.js");
// import "reflect-metadata";
// import "core-js/es6";
// import "core-js/es7/reflect";
__webpack_require__("./node_modules/zone.js/dist/zone.js");
// Development
if (true) {
    Error["stackTraceLimit"] = Infinity;
    __webpack_require__("./node_modules/zone.js/dist/long-stack-trace-zone.js");
}

/***/ }),

/***/ "./src/typescript/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
var bl = __webpack_require__("./src/typescript/blueleet/index.ts");
var loginEvent_service_1 = __webpack_require__("./src/typescript/loginEvent.service.ts");
//import {IUser} from "./abstraction/IUser";
var UserService = function () {
    // ReSharper disable once InconsistentNaming
    //private _member: IUser;
    function UserService(umbracoAjaxService, loginEventService) {
        var _this = this;
        this.umbracoAjaxService = umbracoAjaxService;
        this.onHasAccess = new BehaviorSubject_1.BehaviorSubject(false);
        this.onIsAdminChange = new BehaviorSubject_1.BehaviorSubject(false);
        loginEventService.on(loginEvent_service_1.LoginEventType.Success).subscribe(function (value) {
            if (value.user) {
                _this.onHasAccess.next(true);
            }
        });
        loginEventService.onError().subscribe(function () {
            _this.onHasAccess.next(false);
        });
    }
    //get member(): Promise<IUser> {
    //    if (this._member) {
    //        return Promise.resolve(this._member);
    //    }
    //    return this.getMember().then(value => {
    //        this._member = value.user;
    //        return this._member;
    //    });
    //}
    UserService.prototype.getMember = function () {
        var _this = this;
        return this.umbracoAjaxService.post("MemberSurface", "GetMemberPost").then(function (value) {
            if (value) {
                _this.onHasAccess.next(true);
            } else {
                _this.onHasAccess.next(false);
            }
            return value.user;
        });
    };
    UserService.prototype.hasAccess = function (revalidate) {
        var _this = this;
        if (revalidate === void 0) {
            revalidate = true;
        }
        console.log("HasAccess called");
        var value = this.onHasAccess.getValue();
        if (revalidate === false && !Object.isNullOrUndefined(value)) {
            console.log("HasAccess: Using stored value '" + value + "'");
            return _promise2.default.resolve(value);
        }
        var promise = this.umbracoAjaxService.post("MemberSurface", "HasAccessPost").catch(function () {
            console.log("HasAccess-Catch: Evaluated to 'false");
            _this.onHasAccess.next(false);
        }).then(function (v) {
            if (v) {
                console.log("HasAccess-Then: Evaluated to 'true");
                _this.onHasAccess.next(true);
                return true;
            }
            console.log("HasAccess-Then: Evaluated to 'false");
            return false;
        });
        return promise;
    };
    UserService.prototype.isAdmin = function () {
        var _this = this;
        console.log("IsAdmin called");
        var promise = this.umbracoAjaxService.post("MemberSurface", "IsAdminPost").then(function (value) {
            _this.onIsAdminChange.next(value);
            return value;
        });
        return promise;
    };
    return UserService;
}();
UserService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(bl.UmbracoAjaxService)), __param(1, core_1.Inject(loginEvent_service_1.LoginEventService)), __metadata("design:paramtypes", [bl.UmbracoAjaxService, loginEvent_service_1.LoginEventService])], UserService);
exports.UserService = UserService;

/***/ }),

/***/ "./src/typescript/validation.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_validation_1 = __webpack_require__("./node_modules/ng2-validation/dist/index.js");
var Rx = __webpack_require__("./node_modules/rxjs/Rx.js");
var umbraco_ajax_Service_1 = __webpack_require__("./src/typescript/blueleet/umbraco-ajax-Service.ts");
var password_verdict_1 = __webpack_require__("./src/typescript/enums/password-verdict.ts");
var AsyncObservableValidator_1 = __webpack_require__("./src/typescript/blueleet/Validator/AsyncObservableValidator.ts");
var generic_messages_enum_1 = __webpack_require__("./src/typescript/enums/generic-messages-enum.ts");
var zxcvbn = __webpack_require__("./node_modules/zxcvbn/lib/main.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var ValidationService = ValidationService_1 = function () {
    function ValidationService(umbracoAjaxService) {
        if (ValidationService_1.validatorErrorMessages === null) {
            umbracoAjaxService.post("TranslationHelper", "GetValidationServiceMessagesPost").then(function (value) {
                ValidationService_1.validatorErrorMessages = value;
            });
        }
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var getErrorMessage = function getErrorMessage(fallback) {
            if (validatorName === "weakPassword") {
                if (!Object.isNullOrUndefined(validatorValue.strength.feedback.warning)) {
                    return validatorValue.strength.feedback.warning;
                }
            }
            var compiledValue = _.template(fallback)(validatorValue);
            return compiledValue;
        };
        if (validatorName === "creditCard") {
            validatorName = "invalidCreditCard";
        }
        var configValue = getErrorMessage(this.validatorErrorMessages[validatorName]);
        return configValue;
    };
    ValidationService.passwordValidator = function (minLength) {
        var _this = this;
        return function (control) {
            var strength = zxcvbn(control.value);
            _this.passwordStrengthChange.next(strength);
            var length = control.value ? control.value.length : 0;
            if (length < minLength) {
                return { invalidPasswordLength: { requiredLength: minLength, actualLength: length } };
            }
            if (strength.score < 3) {
                return { weakPassword: { strength: strength } };
            }
            return null;
        };
    };
    /**
    * Validator that requires controls to have a value of a range length.
    */
    ValidationService.rangeLength = function (rangeLength) {
        return ng2_validation_1.CustomValidators.rangeLength(rangeLength);
    };
    /**
    * Validator that requires controls to have a value of a min value.
    */
    ValidationService.min = function (min) {
        return forms_1.Validators.minLength(min);
    };
    /**
    * Validator that requires controls to have a value of a max value.
    */
    ValidationService.max = function (max) {
        return forms_1.Validators.maxLength(max);
    };
    /**
    * Validator that requires controls to have a value of a range value.
    */
    ValidationService.range = function (range) {
        return ng2_validation_1.CustomValidators.range(range);
    };
    /**
    * Validator that requires controls to have a value of digits.
    */
    ValidationService.digits = function (control) {
        return ng2_validation_1.CustomValidators.digits(control);
    };
    /**
    * Validator that requires controls to have a value of number.
    */
    ValidationService.number = function (control) {
        return ng2_validation_1.CustomValidators.number(control);
    };
    /**
    * Validator that requires controls to have a value of url.
    */
    ValidationService.url = function (control) {
        return ng2_validation_1.CustomValidators.url(control);
    };
    /**
    * Validator that requires controls to have a value of email.
    */
    ValidationService.email = function (control) {
        return ng2_validation_1.CustomValidators.email(control);
    };
    /**
    * Validator that requires controls to have a value of date.
    */
    ValidationService.date = function (control) {
        return ng2_validation_1.CustomValidators.date(control);
    };
    /**
    * Validator that requires controls to have a value of minDate.
    */
    ValidationService.minDate = function (minDate) {
        return ng2_validation_1.CustomValidators.minDate(minDate);
    };
    /**
    * Validator that requires controls to have a value of maxDate.
    */
    ValidationService.maxDate = function (maxDate) {
        return ng2_validation_1.CustomValidators.maxDate(maxDate);
    };
    /**
    * Validator that requires controls to have a value of dateISO.
    */
    ValidationService.dateISO = function (control) {
        return ng2_validation_1.CustomValidators.dateISO(control);
    };
    /**
    * Validator that requires controls to have a value of creditCard.
    */
    ValidationService.creditCard = function (control) {
        return ng2_validation_1.CustomValidators.creditCard(control);
    };
    /**
    * Validator that requires controls to have a value of JSON.
    */
    ValidationService.json = function (control) {
        return ng2_validation_1.CustomValidators.json(control);
    };
    /**
    * Validator that requires controls to have a value of base64.
    */
    ValidationService.base64 = function (control) {
        return ng2_validation_1.CustomValidators.base64(control);
    };
    /**
    * Validator that requires controls to have a value of phone.
    */
    ValidationService.phone = function (locale) {
        // ToDo: implament phone for sweden local.
        return ng2_validation_1.CustomValidators.phone(locale);
    };
    /**
    * Validator that requires controls to have a value of uuid.
    */
    ValidationService.uuid = function (version) {
        return ng2_validation_1.CustomValidators.uuid(version);
    };
    /**
    * Validator that requires controls to have a value to equal another value.
    */
    ValidationService.equal = function (val) {
        return function (control) {
            if (!Object.isNullOrUndefined(forms_1.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            return val === v ? null : { equal: { equalValue: val } };
        };
    };
    /**
    * Validator that requires controls to have a value to equal another control.
    */
    ValidationService.equalTo = function (equalControl, thisControlName, equalControlName) {
        var subscribe = false;
        return function (control) {
            if (!subscribe) {
                subscribe = true;
                equalControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            var v = control.value;
            return equalControl.value === v ? null : { equalTo: { thisControlName: thisControlName, equalControlName: equalControlName } };
        };
    };
    ValidationService.prototype.pattern = function (p, message) {
        return function (control) {
            if (p.test(control.value)) {
                return { patternInvalidValue: { message: message } };
            }
            return null;
        };
    };
    ValidationService.prototype.usernameValidator = function (umbracoAjaxService) {
        return AsyncObservableValidator_1.AsyncObservableValidator.create(function (value) {
            return umbracoAjaxService.post("MemberSurface", "ValidateUsernamePost", { username: value }).then(function (v) {
                if (v.hasOwnProperty("messageType") && v.messageType === generic_messages_enum_1.GenericMessages.Danger) {
                    return { invalidUsername: v.message };
                }
                if (v) {
                    return { usernameTaken: true };
                } else {
                    return null;
                }
            });
        });
    };
    ValidationService.prototype.emailValidator = function (umbracoAjaxService) {
        return AsyncObservableValidator_1.AsyncObservableValidator.create(function (value) {
            return umbracoAjaxService.post("MemberSurface", "ValidateEmailPost", { email: value }).then(function (v) {
                if (v) {
                    return { emailAlreadyRegistered: true };
                } else {
                    return null;
                }
            });
        });
    };
    ValidationService.prototype.onPasswordStrengthChange = function () {
        return ValidationService_1.passwordStrengthChange.asObservable();
    };
    ValidationService.prototype.getPasswordVerdict = function (score, verdict) {
        if (verdict === void 0) {
            verdict = password_verdict_1.PasswordVerdict;
        }
        if (score === 0 || score === verdict.Weak) {
            return { message: password_verdict_1.PasswordVerdict[password_verdict_1.PasswordVerdict.Weak], passwordVerdict: password_verdict_1.PasswordVerdict.Weak };
        } else if (score === verdict.Normal) {
            return { message: password_verdict_1.PasswordVerdict[password_verdict_1.PasswordVerdict.Normal], passwordVerdict: password_verdict_1.PasswordVerdict.Normal };
        } else if (score === verdict.Medium) {
            return { message: password_verdict_1.PasswordVerdict[password_verdict_1.PasswordVerdict.Medium], passwordVerdict: password_verdict_1.PasswordVerdict.Medium };
        } else if (score === verdict.Strong) {
            return { message: password_verdict_1.PasswordVerdict[password_verdict_1.PasswordVerdict.Strong], passwordVerdict: password_verdict_1.PasswordVerdict.Strong };
        } else if (score <= password_verdict_1.PasswordVerdict.VeryStrong) {
            return { message: "Very Strong", passwordVerdict: password_verdict_1.PasswordVerdict.VeryStrong };
        }
        return null;
    };
    return ValidationService;
}();
ValidationService.passwordStrengthChange = new Rx.Subject();
ValidationService.validatorErrorMessages = null;
ValidationService = ValidationService_1 = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [umbraco_ajax_Service_1.UmbracoAjaxService])], ValidationService);
exports.ValidationService = ValidationService;
var ValidationService_1;

/***/ }),

/***/ "./src/typescript/vendor.browser.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
// Angular 2
__webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
__webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
__webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
__webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
__webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
// Reactive
__webpack_require__("./node_modules/rxjs/Rx.js");
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, CSS, sass
__webpack_require__("./node_modules/tether/dist/js/tether.js");
__webpack_require__("./node_modules/scriptjs/dist/script.js");
// import 'tether/src/css/tether-theme-basic.sass'; // optional
__webpack_require__("./src/typescript/Generics/bootstrap.ts");
// Extensions
__webpack_require__("./src/typescript/blueleet/extensions/ObjectExtensions.ts");
__webpack_require__("./src/typescript/blueleet/extensions/StringExtensions.ts");

/***/ }),

/***/ "./src/typescript/widget-search.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metadata = __webpack_require__("./node_modules/babel-runtime/core-js/reflect/metadata.js");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var detectDevice_service_1 = __webpack_require__("./src/typescript/detectDevice.service.ts");
var WidgetSearchDirective = function () {
    function WidgetSearchDirective(el, detectDeviceService) {
        this.el = el;
        this.detectDeviceService = detectDeviceService;
    }
    WidgetSearchDirective.prototype.onClick = function ($event) {
        this.initSearch($event);
    };
    WidgetSearchDirective.prototype.onTouchStart = function ($event) {
        this.initSearch($event);
    };
    WidgetSearchDirective.prototype.initSearch = function ($event) {
        // trim value
        var searchFor = this.inputEl.val().trim();
        this.inputEl.val(searchFor);
        if (!this.self.hasClass("search-open")) {
            $event.preventDefault();
            this.open();
        } else if (this.self.hasClass("search-open") && /^\s*$/.test(searchFor)) {
            $event.preventDefault();
            this.close();
        }
    };
    WidgetSearchDirective.prototype.open = function () {
        this.self.addClass("search-open");
        if (!this.detectDeviceService.isMobile()) {
            this.inputEl.focus();
        }
    };
    WidgetSearchDirective.prototype.close = function () {
        this.self.blur();
        this.self.removeClass("search-open");
    };
    WidgetSearchDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.self = $(this.el.nativeElement);
        this.inputEl = this.self.find("input.search-input").first();
        this.inputEl.on("click", function (ev) {
            ev.stopPropagation();
        });
        this.inputEl.on("touchstart", function (ev) {
            ev.stopPropagation();
        });
        $(document).on("click", function ($event) {
            if (!$($event.target).closest(_this.self).length) {
                // Hide the component.
                _this.close();
            }
        });
    };
    return WidgetSearchDirective;
}();
__decorate([core_1.HostListener("click", ["$event"]), __metadata("design:type", Function), __metadata("design:paramtypes", [Event]), __metadata("design:returntype", void 0)], WidgetSearchDirective.prototype, "onClick", null);
__decorate([core_1.HostListener("touchstart", ["$event"]), __metadata("design:type", Function), __metadata("design:paramtypes", [Event]), __metadata("design:returntype", void 0)], WidgetSearchDirective.prototype, "onTouchStart", null);
WidgetSearchDirective = __decorate([core_1.Directive({ selector: "[widget-search]" }), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(detectDevice_service_1.DetectDeviceService)), __metadata("design:paramtypes", [core_1.ElementRef, detectDevice_service_1.DetectDeviceService])], WidgetSearchDirective);
exports.WidgetSearchDirective = WidgetSearchDirective;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/typescript/polyfills.browser.ts");
__webpack_require__("./src/typescript/vendor.browser.ts");
module.exports = __webpack_require__("./src/typescript/main.browser.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.js.map