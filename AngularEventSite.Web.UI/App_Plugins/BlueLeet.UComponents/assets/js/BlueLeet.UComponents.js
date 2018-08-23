webpackJsonpUComponents([0,2,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./_references.d.ts"/>
	/*! BlueLeet
	 * http://blueleet.com/
	 * Copyright (c) 2016 BlueLeet;
	 * Licensed
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(1);
	// Import Resources
	var Datatype_Resource_1 = __webpack_require__(2);
	var Dictionary_Resource_1 = __webpack_require__(3);
	var Editor_Helper_Resource_1 = __webpack_require__(4);
	var Slimsy_Resource_1 = __webpack_require__(5);
	var ThemePicker_Resource_1 = __webpack_require__(6);
	angular.module("umbraco.resources").service("datatypeResource", Datatype_Resource_1.DatatypeResource);
	angular.module("umbraco.resources").service("dictionaryResource", Dictionary_Resource_1.DictionaryResource);
	angular.module("umbraco.resources").service("editorHelperResource", Editor_Helper_Resource_1.EditorHelperResource);
	angular.module("umbraco.resources").service("slimsyResource", Slimsy_Resource_1.SlimsyResource);
	angular.module("umbraco.resources").service("themePickerResource", ThemePicker_Resource_1.ThemePickerResource);
	// Import Services
	var Text_Pixel_Service_1 = __webpack_require__(72);
	var Share_Seo_Data_Service_1 = __webpack_require__(73);
	angular.module("umbraco.services").service("textPixelService", Text_Pixel_Service_1.TextPixelService);
	angular.module("umbraco.services").service("shareSeoDataService", Share_Seo_Data_Service_1.ShareSeoDataService);
	// Import Directives
	var rangesliderDirective_1 = __webpack_require__(75);
	var GridRteController_1 = __webpack_require__(76);
	angular.module("umbraco.directives").directive("rangeslider", rangesliderDirective_1.RangeSliderDirective);
	angular.module("umbraco.directives").directive("extendedGridRte", GridRteController_1.ExtendedGridRteController);
	// Import Pipes (filters)
	var capitalizePipe_1 = __webpack_require__(77);
	angular.module("umbraco").filter("capitalize", capitalizePipe_1.Capitalize);
	// Import Controllers
	var dashboardController_1 = __webpack_require__(78);
	var googleMapsController_1 = __webpack_require__(89);
	var googleMapsSettingController_1 = __webpack_require__(90);
	var goToTopController_1 = __webpack_require__(91);
	var headlineController_1 = __webpack_require__(92);
	var headlineNLeadController_1 = __webpack_require__(93);
	var cardController_1 = __webpack_require__(94);
	var cardSettingController_1 = __webpack_require__(119);
	var imageNTextController_1 = __webpack_require__(120);
	var imageNTextSettingController_1 = __webpack_require__(121);
	var imageSettingController_1 = __webpack_require__(122);
	var quoteController_1 = __webpack_require__(123);
	var separatorController_1 = __webpack_require__(124);
	var externalLinkController_1 = __webpack_require__(125);
	var treeSourceController_1 = __webpack_require__(126);
	var multiTreeSourceController_1 = __webpack_require__(127);
	var advancedSeoPreviewController_1 = __webpack_require__(128);
	var dropdownController_1 = __webpack_require__(129);
	var multiLinkPickerController_1 = __webpack_require__(97);
	var robotsController_1 = __webpack_require__(130);
	var textBoxKeywordController_1 = __webpack_require__(131);
	var textWithModeCountController_1 = __webpack_require__(132);
	var toggleBoxAndSliderController_1 = __webpack_require__(133);
	var toggleBoxController_1 = __webpack_require__(134);
	var themePickerController_1 = __webpack_require__(135);
	var macroListController_1 = __webpack_require__(136);
	var keyValuePairEditorController_1 = __webpack_require__(137);
	angular.module("umbraco").controller("BlueLeet.Extendings.DashboardController", dashboardController_1.DashboardController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.GoogleMapsController", googleMapsController_1.GoogleMapsController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.GoogleMapsSettingController", googleMapsSettingController_1.GoogleMapsSettingController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.GoToTopController", goToTopController_1.GoToTopController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.HeadlineController", headlineController_1.HeadlineController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.HeadlineNLeadController", headlineNLeadController_1.HeadlineNLeadController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.CardController", cardController_1.CardController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.CardSettingController", cardSettingController_1.CardSettingController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.ImageNTextController", imageNTextController_1.ImageNTextController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.ImageNTextSettingController", imageNTextSettingController_1.ImageNTextSettingController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.ImageSettingController", imageSettingController_1.ImageSettingController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.QuoteController", quoteController_1.QuoteController);
	angular.module("umbraco").controller("BlueLeet.GridEditors.SeparatorController", separatorController_1.SeparatorController);
	angular.module("umbraco").controller("BlueLeet.PreValueEditors.ExternalLinkController", externalLinkController_1.ExternalLinkController);
	angular.module("umbraco").controller("BlueLeet.PreValueEditors.TreeSourceController", treeSourceController_1.TreeSourceController);
	angular.module("umbraco").controller("BlueLeet.PreValueEditors.MultiTreeSourceController", multiTreeSourceController_1.MultiTreeSourceController);
	angular.module("umbraco").controller("BlueLeet.PreValueEditors.MacroListController", macroListController_1.MacroListController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.AdvancedSeoPreviewController", advancedSeoPreviewController_1.AdvancedSeoPreviewController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.DropdownController", dropdownController_1.DropdownController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.MultiLinkPickerController", multiLinkPickerController_1.MultiLinkPickerController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.RobotsController", robotsController_1.RobotsController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.TextBoxKeywordController", textBoxKeywordController_1.TextBoxKeywordController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.TextWithModeCountController", textWithModeCountController_1.TextWithModeCountController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.ToggleBoxAndSliderController", toggleBoxAndSliderController_1.ToggleBoxAndSliderController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.ToggleBoxController", toggleBoxController_1.ToggleBoxController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.ThemePickerController", themePickerController_1.ThemePickerController);
	angular.module("umbraco").controller("BlueLeet.PropertyEditors.KeyValuePairEditorController", keyValuePairEditorController_1.KeyValuePairEditorController);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/// <reference path="../_references.d.ts"/>
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc helper
	* @name BlueLeet.DatatypeResource
	* @function
	*
	* @description
	* Defines a common helper for blueleet editors.
	*/
	var DatatypeResource = function () {
	    function DatatypeResource($http) {
	        this.$inject = ["$http"];
	        this.$http = $http;
	    }
	    DatatypeResource.prototype.getByName = function (name) {
	        return this.$http.get("backoffice/BlueLeet/DataTypeService/GetByName?name=" + name);
	    };
	    return DatatypeResource;
	}();
	exports.DatatypeResource = DatatypeResource;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../_references.d.ts"/>
	var DictionaryResource = function () {
	    function DictionaryResource($q, $http) {
	        this.$inject = ["$q", "$http"];
	        this.$q = $q;
	        this.$http = $http;
	    }
	    DictionaryResource.prototype.getText = function (path) {
	        var _this = this;
	        return this.$http.get("/umbraco/backoffice/UmbracoApi/Authentication/GetCurrentUser").then(function (response) {
	            var lang = response.data.locale.split("-")[0];
	            return _this.$http.get("/Umbraco/Api/DictionaryApi/GetText?path=" + path + "&language=" + lang);
	        });
	    };
	    return DictionaryResource;
	}();
	exports.DictionaryResource = DictionaryResource;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../_references.d.ts"/>
	/**
	* @ngdoc helper
	* @name BlueLeet.BlueLeetEditorHelper
	* @function
	*
	* @description
	* Defines a common helper for blueleet editors.
	*/
	var EditorHelperResource = function () {
	    function EditorHelperResource(dictionaryResource, dialogService) {
	        this.$inject = ["dictionaryResource", "dialogService"];
	        this.dictionaryResource = dictionaryResource;
	        this.dialogService = dialogService;
	    }
	    EditorHelperResource.prototype.hasSetting = function (hasEditorSetting, sectionGrid, editorAlias) {
	        if (sectionGrid === 3 && editorAlias === "rte") {
	            return false;
	        } else {
	            return hasEditorSetting ? true : false;
	        }
	    };
	    EditorHelperResource.prototype.openEditorSetting = function (control) {
	        var _this = this;
	        if (control.editor.config.hasSetting) {
	            var dictionary;
	            if (control.editor.config.dictionaryPath) {
	                this.dictionaryResource.GetText(control.editor.config.dictionaryPath).then(function (response) {
	                    dictionary = response.data.language;
	                    if (control.editor.config.settingTemplate) {
	                        _this.dialogService.open({
	                            template: control.editor.config.settingTemplate,
	                            callback: function callback(data) {
	                                return data;
	                            },
	                            dialogData: {
	                                model: control,
	                                dic: dictionary
	                            }
	                        });
	                    }
	                });
	            }
	        }
	    };
	    return EditorHelperResource;
	}();
	exports.EditorHelperResource = EditorHelperResource;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/// <reference path="../_references.d.ts"/>
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc helper
	* @name BlueLeet.SlimsyResource
	* @function
	*
	* @description
	* Defines a slimsy resource for resposnive img's.
	*/
	var SlimsyResource = function () {
	    function SlimsyResource($http) {
	        this.$inject = ["$http"];
	        this.$http = $http;
	    }
	    SlimsyResource.prototype.getImageUrl = function (id, width, height) {
	        var config = {
	            params: { id: id, width: width, height: height },
	            headers: { "Accept": "application/json" }
	        };
	        return this.$http.get("backoffice/BlueLeet/SlimsyResource/GetResponsiveImageUrl", config);
	    };
	    return SlimsyResource;
	}();
	exports.SlimsyResource = SlimsyResource;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../_references.d.ts"/>
	"use strict";
	
	var _promise = __webpack_require__(7);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc helper
	* @name BlueLeet.ThemePickerResource
	* @function
	*
	* @description
	* Defines a theme resource for handeling themes.
	*/
	var ThemePickerResource = function () {
	    function ThemePickerResource($http, angularHelper) {
	        this.$inject = ["$http", "angularHelper"];
	        this.$http = $http;
	        this.angularHelper = angularHelper;
	    }
	    ThemePickerResource.prototype.getThemes = function ($scope) {
	        var _this = this;
	        return new _promise2.default(function (resolve) {
	            _this.angularHelper.safeApply($scope, function () {
	                var config = {
	                    params: {},
	                    headers: { "Accept": "application/json" }
	                };
	                _this.$http.get("backoffice/BlueLeet/ThemePickerResource/GetAll", config).then(function (value) {
	                    resolve(value);
	                });
	            });
	        });
	    };
	    return ThemePickerResource;
	}();
	exports.ThemePickerResource = ThemePickerResource;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(54);
	__webpack_require__(58);
	module.exports = __webpack_require__(18).Promise;

/***/ },
/* 9 */
/***/ function(module, exports) {



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(11)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(14)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(12)
	  , defined   = __webpack_require__(13);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(15)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(31)
	  , hide           = __webpack_require__(21)
	  , has            = __webpack_require__(32)
	  , Iterators      = __webpack_require__(33)
	  , $iterCreate    = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(50)
	  , getPrototypeOf = __webpack_require__(52)
	  , ITERATOR       = __webpack_require__(51)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(17)
	  , core      = __webpack_require__(18)
	  , ctx       = __webpack_require__(19)
	  , hide      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 17 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(22)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(26) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(23)
	  , IE8_DOM_DEFINE = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(29)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(26) && !__webpack_require__(27)(function(){
	  return Object.defineProperty(__webpack_require__(28)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(27)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24)
	  , document = __webpack_require__(17).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(24);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 32 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(35)
	  , descriptor     = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(50)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(51)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(23)
	  , dPs         = __webpack_require__(36)
	  , enumBugKeys = __webpack_require__(48)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(28)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(49).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(22)
	  , anObject = __webpack_require__(23)
	  , getKeys  = __webpack_require__(37);
	
	module.exports = __webpack_require__(26) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(38)
	  , enumBugKeys = __webpack_require__(48);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(32)
	  , toIObject    = __webpack_require__(39)
	  , arrayIndexOf = __webpack_require__(42)(false)
	  , IE_PROTO     = __webpack_require__(45)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(40)
	  , defined = __webpack_require__(13);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(41);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(39)
	  , toLength  = __webpack_require__(43)
	  , toIndex   = __webpack_require__(44);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(12)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(12)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(46)('keys')
	  , uid    = __webpack_require__(47);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(17)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17).document && document.documentElement;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(22).f
	  , has = __webpack_require__(32)
	  , TAG = __webpack_require__(51)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(46)('wks')
	  , uid        = __webpack_require__(47)
	  , Symbol     = __webpack_require__(17).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(32)
	  , toObject    = __webpack_require__(53)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(13);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55);
	var global        = __webpack_require__(17)
	  , hide          = __webpack_require__(21)
	  , Iterators     = __webpack_require__(33)
	  , TO_STRING_TAG = __webpack_require__(51)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(56)
	  , step             = __webpack_require__(57)
	  , Iterators        = __webpack_require__(33)
	  , toIObject        = __webpack_require__(39);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(14)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(15)
	  , global             = __webpack_require__(17)
	  , ctx                = __webpack_require__(19)
	  , classof            = __webpack_require__(59)
	  , $export            = __webpack_require__(16)
	  , isObject           = __webpack_require__(24)
	  , aFunction          = __webpack_require__(20)
	  , anInstance         = __webpack_require__(60)
	  , forOf              = __webpack_require__(61)
	  , speciesConstructor = __webpack_require__(65)
	  , task               = __webpack_require__(66).set
	  , microtask          = __webpack_require__(68)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(51)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(69)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(50)($Promise, PROMISE);
	__webpack_require__(70)(PROMISE);
	Wrapper = __webpack_require__(18)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(71)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(41)
	  , TAG = __webpack_require__(51)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(19)
	  , call        = __webpack_require__(62)
	  , isArrayIter = __webpack_require__(63)
	  , anObject    = __webpack_require__(23)
	  , toLength    = __webpack_require__(43)
	  , getIterFn   = __webpack_require__(64)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(23);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(33)
	  , ITERATOR   = __webpack_require__(51)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(59)
	  , ITERATOR  = __webpack_require__(51)('iterator')
	  , Iterators = __webpack_require__(33);
	module.exports = __webpack_require__(18).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(23)
	  , aFunction = __webpack_require__(20)
	  , SPECIES   = __webpack_require__(51)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(19)
	  , invoke             = __webpack_require__(67)
	  , html               = __webpack_require__(49)
	  , cel                = __webpack_require__(28)
	  , global             = __webpack_require__(17)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(41)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(17)
	  , macrotask = __webpack_require__(66).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(41)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(21);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(17)
	  , core        = __webpack_require__(18)
	  , dP          = __webpack_require__(22)
	  , DESCRIPTORS = __webpack_require__(26)
	  , SPECIES     = __webpack_require__(51)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(51)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	/// <reference path="../_references.d.ts"/>
	/*! BlueLeet
	 * http://blueleet.com/
	 * Copyright (c) 2016 BlueLeet;
	 * Licensed
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc service
	* @name BlueLeet.DictionaryResource
	* @description
	* This Resource performs lookups to a variety of translation methods.
	*/
	var TextPixelService = function () {
	    function TextPixelService() {
	        $(document).ready(function () {
	            $.fn.textWidth = function (text, font) {
	                if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $("<span>").hide().appendTo(document.body);
	                $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css("font", font || this.css("font"));
	                return $.fn.textWidth.fakeEl.width();
	            };
	        });
	    }
	    TextPixelService.prototype.getWidth = function (text, font) {
	        if (font === void 0) {
	            font = "18px arial";
	        }
	        return $.fn.textWidth(text, font);
	    };
	    return TextPixelService;
	}();
	exports.TextPixelService = TextPixelService;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../_references.d.ts"/>
	var _ = __webpack_require__(74);
	/**
	* @ngdoc service
	* @name BlueLeet.ShareSeoDataService
	* @function
	*
	* @description
	* This Service performs handles a variety of tasks related to SEO informations.
	*/
	var ShareSeoDataService = function () {
	    function ShareSeoDataService($rootScope) {
	        var _this = this;
	        this.title = "";
	        this.titleMaxCount = null;
	        this.description = "";
	        this.descriptionMaxCount = null;
	        this.keywords = [];
	        this.specialChars = [".", ",", ":", ";"];
	        this.titleSplit = [];
	        this.descriptionSplit = [];
	        this.getTitle = function () {
	            return _this.title;
	        };
	        this.getTitleMaxCount = function () {
	            return _this.titleMaxCount;
	        };
	        this.getDescription = function () {
	            return _this.description;
	        };
	        this.getDescriptionMaxCount = function () {
	            return _this.descriptionMaxCount;
	        };
	        this.getKeywords = function () {
	            return _this.keywords;
	        };
	        this.$rootScope = $rootScope;
	    }
	    ShareSeoDataService.prototype.checkHasFoundKeyword = function (keyword) {
	        var result = { title: false, desc: false };
	        if (this.title) {
	            result.title = this.searchWord(this.titleSplit, keyword);
	        }
	        if (this.description) {
	            result.desc = this.searchWord(this.descriptionSplit, keyword);
	        }
	        return result;
	    };
	    ;
	    ShareSeoDataService.prototype.removeKeywords = function (index) {
	        var removedKeyword = this.keywords.splice(index, 1)[0];
	        this.broadcastKeywordRemove(removedKeyword);
	    };
	    ;
	    ShareSeoDataService.prototype.filterSpecialChars = function (word) {
	        var _this = this;
	        var filterWord = word;
	        var lastChar = word.substr(word.length - 1);
	        _.each(this.specialChars, function (c) {
	            if (lastChar === c) {
	                filterWord = filterWord.replace(c, "");
	                _this.filterSpecialChars(filterWord);
	            }
	        });
	        return filterWord;
	    };
	    ;
	    ShareSeoDataService.prototype.setTitle = function (value, maxCount) {
	        if (value == null) {
	            throw new TypeError("value can not be null or undefined!");
	        }
	        this.title = value;
	        this.titleSplit = this.getReducedArray(value);
	        this.titleMaxCount = maxCount;
	        this.broadcastTitle(value);
	        this.broadcastPreview();
	    };
	    ;
	    ShareSeoDataService.prototype.setDescription = function (value, maxCount) {
	        if (value == null) {
	            throw new TypeError("value can not be null or undefined!");
	        }
	        this.description = value;
	        this.descriptionSplit = this.getReducedArray(value);
	        this.descriptionMaxCount = maxCount;
	        this.broadcastDescription(value);
	        this.broadcastPreview();
	    };
	    ;
	    ShareSeoDataService.prototype.setKeywords = function (keyword) {
	        if (keyword == null) {
	            throw new TypeError("value can not be null or undefined!");
	        }
	        this.keywords.push(keyword);
	        this.broadcastKeywordAdd(keyword);
	    };
	    ;
	    ShareSeoDataService.prototype.onTitleUpdate = function ($scope, callback) {
	        $scope.$on("searchDataService.onTitleUpdate", function (context, data) {
	            callback(context, data);
	        });
	    };
	    ShareSeoDataService.prototype.onDescriptionUpdate = function ($scope, callback) {
	        $scope.$on("searchDataService.onDescriptionUpdate", function (context, data) {
	            callback(context, data);
	        });
	    };
	    ShareSeoDataService.prototype.onKeywordAdded = function ($scope, callback) {
	        $scope.$on("searchDataService.onKeywordAdded", function (context, data) {
	            callback(context, data);
	        });
	    };
	    ShareSeoDataService.prototype.onKeywordRemoved = function ($scope, callback) {
	        $scope.$on("searchDataService.onKeywordRemoved", function (context, data) {
	            callback(context, data);
	        });
	    };
	    ShareSeoDataService.prototype.onPreviewUpdate = function ($scope, callback) {
	        $scope.$on("searchDataService.onPreviewUpdate", function (context, data) {
	            callback(context, data);
	        });
	    };
	    ShareSeoDataService.prototype.searchWord = function (items, keyword) {
	        var hasFound = false;
	        if (items.length > 0) {
	            items.forEach(function (word) {
	                if (word.toLowerCase() === keyword.toLowerCase()) {
	                    hasFound = true;
	                }
	            });
	        }
	        return hasFound;
	    };
	    ;
	    ShareSeoDataService.prototype.getReducedArray = function (text) {
	        var _this = this;
	        var textSplit = text.split(" ");
	        textSplit = textSplit.reduce(function (previousValue, currentValue) {
	            currentValue = _this.filterSpecialChars(currentValue);
	            previousValue.push(currentValue);
	            return previousValue;
	        }, []);
	        return textSplit;
	    };
	    ShareSeoDataService.prototype.broadcastTitle = function (newValue) {
	        this.$rootScope.$broadcast("shareSeoDataService.onTitleUpdate", newValue);
	    };
	    ShareSeoDataService.prototype.broadcastDescription = function (newValue) {
	        this.$rootScope.$broadcast("shareSeoDataService.onDescriptionUpdate", newValue);
	    };
	    ShareSeoDataService.prototype.broadcastKeywordAdd = function (newValue) {
	        this.$rootScope.$broadcast("shareSeoDataService.onKeywordAdded", newValue);
	    };
	    ShareSeoDataService.prototype.broadcastKeywordRemove = function (newValue) {
	        this.$rootScope.$broadcast("shareSeoDataService.onKeywordRemoved", newValue);
	    };
	    ShareSeoDataService.prototype.broadcastPreview = function () {
	        var newValue = {
	            title: this.title,
	            titleMaxCount: this.titleMaxCount,
	            description: this.description,
	            descriptionMaxCount: this.descriptionMaxCount,
	            keywords: this.keywords
	        };
	        this.$rootScope.$broadcast("shareSeoDataService.onPreviewUpdate", newValue);
	    };
	    return ShareSeoDataService;
	}();
	exports.ShareSeoDataService = ShareSeoDataService;

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc directive
	* @name BlueLeet.RangeSliderDirective
	* @function
	*
	* @description
	* Handles the rangeslider jquery plugin.
	*/
	var RangeSliderDirective = function () {
	    function RangeSliderDirective() {
	        this.restrict = "A";
	        this.scope = {
	            "polyfill": "=",
	            "rangeClass": "=",
	            "disabledClass": "=",
	            "horizontalClass": "=",
	            "verticalClass": "=",
	            "fillClass": "=",
	            "handleClass": "=",
	            "onInit": "&",
	            "onSlide": "&",
	            "onSlideEnd": "&"
	        };
	        this.link = function (scope, element) {
	            $(element).rangeslider(scope);
	        };
	    }
	    return RangeSliderDirective;
	}();
	exports.RangeSliderDirective = RangeSliderDirective;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(74);
	function ExtendedGridRteController(tinyMceService, stylesheetResource, angularHelper, assetsService, $q, $timeout) {
	    return {
	        scope: {
	            uniqueId: '=',
	            value: '=',
	            onClick: '&',
	            onFocus: '&',
	            onBlur: '&',
	            onInit: '&',
	            configuration: "=",
	            onMediaPickerClick: "=",
	            onEmbedClick: "=",
	            onMacroPickerClick: "=",
	            onLinkPickerClick: "="
	        },
	        template: "<textarea ng-model=\"value\" rows=\"10\" class=\"mceNoEditor\" style=\"overflow:hidden\" id=\"{{uniqueId}}\"></textarea>",
	        replace: true,
	        link: function link(scope, element, attrs) {
	            var initTiny = function initTiny() {
	                // we always fetch the default one, and then override parts with our own
	                tinyMceService.configuration().then(function (tinyMceConfig) {
	                    //config value from general tinymce.config file
	                    var validElements = tinyMceConfig.validElements;
	                    var fallbackStyles = [{ title: "Page header", block: "h2" }, { title: "Section header", block: "h3" }, { title: "Paragraph header", block: "h4" }, { title: "Normal", block: "p" }, { title: "Quote", block: "blockquote" }, { title: "Code", block: "code" }];
	                    // These are absolutely required in order for the macros to render inline
	                    // we put these as extended elements because they get merged on top of the normal allowed elements by tiny mce
	                    var extendedValidElements = "@[id|class|style],-div[id|dir|class|align|style],ins[datetime|cite],-ul[class|style],-li[class|style],-h1[id|dir|class|align|style],-h2[id|dir|class|align|style],-h3[id|dir|class|align|style],-h4[id|dir|class|align|style],-h5[id|dir|class|align|style],-h6[id|style|dir|class|align],span[id|class|style]";
	                    var invalidElements = tinyMceConfig.inValidElements;
	                    var plugins = _.map(tinyMceConfig.plugins, function (plugin) {
	                        if (plugin.useOnFrontend) {
	                            return plugin.name;
	                        }
	                    }).join(" ") + " autoresize";
	                    // config value on the data type
	                    var toolbar = ["code", "styleselect", "bold", "italic", "alignleft", "aligncenter", "alignright", "bullist", "numlist", "link", "umbmediapicker", "umbembeddialog"].join(" | ");
	                    var stylesheets = [];
	                    var styleFormats = [];
	                    var awaits = [];
	                    //queue file loading
	                    if (typeof tinymce === "undefined") {
	                        awaits.push(assetsService.loadJs("lib/tinymce/tinymce.min.js", scope));
	                    }
	                    if (scope.configuration && scope.configuration.toolbar) {
	                        toolbar = scope.configuration.toolbar.join(' | ');
	                    }
	                    if (scope.configuration && scope.configuration.stylesheets) {
	                        angular.forEach(scope.configuration.stylesheets, function (stylesheet, key) {
	                            stylesheets.push(Umbraco.Sys.ServerVariables.umbracoSettings.cssPath + "/" + stylesheet + ".css");
	                            awaits.push(stylesheetResource.getRulesByName(stylesheet).then(function (rules) {
	                                angular.forEach(rules, function (rule) {
	                                    var r = {};
	                                    var split = "";
	                                    r.title = rule.name;
	                                    if (rule.selector[0] === ".") {
	                                        r.inline = "span";
	                                        r.classes = rule.selector.substring(1);
	                                    } else if (rule.selector[0] === "#") {
	                                        //Even though this will render in the style drop down, it will not actually be applied
	                                        // to the elements, don't think TinyMCE even supports this and it doesn't really make much sense
	                                        // since only one element can have one id.
	                                        r.inline = "span";
	                                        r.attributes = { id: rule.selector.substring(1) };
	                                    } else if (rule.selector[0] !== "." && rule.selector.indexOf(".") > -1) {
	                                        split = rule.selector.split(".");
	                                        r.block = split[0];
	                                        r.classes = rule.selector.substring(rule.selector.indexOf(".") + 1).replace(".", " ");
	                                    } else if (rule.selector[0] !== "#" && rule.selector.indexOf("#") > -1) {
	                                        split = rule.selector.split("#");
	                                        r.block = split[0];
	                                        r.classes = rule.selector.substring(rule.selector.indexOf("#") + 1);
	                                    } else {
	                                        r.block = rule.selector;
	                                    }
	                                    styleFormats.push(r);
	                                });
	                            }));
	                        });
	                    } else {
	                        stylesheets.push("views/propertyeditors/grid/config/grid.default.rtestyles.css");
	                        styleFormats = fallbackStyles;
	                    }
	                    // stores a reference to the editor
	                    var tinyMceEditor = null;
	                    $q.all(awaits).then(function () {
	                        var uniqueId = scope.uniqueId;
	                        // create a baseline Config to exten upon
	                        var baseLineConfigObj = {
	                            mode: "exact",
	                            skin: "umbraco",
	                            plugins: plugins,
	                            valid_elements: validElements,
	                            invalid_elements: invalidElements,
	                            extended_valid_elements: extendedValidElements,
	                            menubar: false,
	                            statusbar: false,
	                            relative_urls: false,
	                            toolbar: toolbar,
	                            content_css: stylesheets,
	                            style_formats: styleFormats,
	                            autoresize_bottom_margin: 0
	                        };
	                        if (tinyMceConfig.customConfig) {
	                            // if there is some custom config, we need to see if the string value of each item might actually be json and if so, we need to
	                            // convert it to json instead of having it as a string since this is what tinymce requires
	                            for (var i in tinyMceConfig.customConfig) {
	                                var val = tinyMceConfig.customConfig[i];
	                                if (val) {
	                                    val = val.toString().trim();
	                                    if (val.detectIsJson()) {
	                                        try {
	                                            tinyMceConfig.customConfig[i] = JSON.parse(val);
	                                            // now we need to check if this custom config key is defined in our baseline, if it is we don't want to
	                                            // overwrite the baseline config item if it is an array, we want to concat the items in the array, otherwise
	                                            // if it's an object it will overwrite the baseline
	                                            if (angular.isArray(baseLineConfigObj[i]) && angular.isArray(tinyMceConfig.customConfig[i])) {
	                                                // concat it and below this concat'd array will overwrite the baseline in angular.extend
	                                                tinyMceConfig.customConfig[i] = baseLineConfigObj[i].concat(tinyMceConfig.customConfig[i]);
	                                            }
	                                        } catch (e) {
	                                            // cannot parse, we'll just leave it
	                                        }
	                                    }
	                                }
	                            }
	                            angular.extend(baseLineConfigObj, tinyMceConfig.customConfig);
	                        }
	                        // set all the things that user configs should not be able to override
	                        baseLineConfigObj.elements = uniqueId;
	                        baseLineConfigObj.setup = function (editor) {
	                            // set the reference
	                            tinyMceEditor = editor;
	                            // enable browser based spell checking
	                            editor.on('init', function (e) {
	                                editor.getBody().setAttribute('spellcheck', true);
	                                // force overflow to hidden to prevent no needed scroll
	                                editor.getBody().style.overflow = "hidden";
	                                if (scope.onInit) {
	                                    scope.onInit({ editor: editor });
	                                }
	                                $timeout(function () {
	                                    if (scope.value === null) {
	                                        editor.focus();
	                                    }
	                                }, 400);
	                            });
	                            // pin toolbar to top of screen if we have focus and it scrolls off the screen
	                            var pinToolbar = function pinToolbar() {
	                                var _toolbar = $(editor.editorContainer).find(".mce-toolbar");
	                                var toolbarHeight = _toolbar.height();
	                                var _tinyMce = $(editor.editorContainer);
	                                var tinyMceRect = _tinyMce[0].getBoundingClientRect();
	                                var tinyMceTop = tinyMceRect.top;
	                                var tinyMceBottom = tinyMceRect.bottom;
	                                var tinyMceWidth = tinyMceRect.width;
	                                var _tinyMceEditArea = _tinyMce.find(".mce-edit-area");
	                                // set padding in top of mce so the content does not "jump" up
	                                _tinyMceEditArea.css("padding-top", toolbarHeight);
	                                if (tinyMceTop < 160 && 160 + toolbarHeight < tinyMceBottom) {
	                                    _toolbar.css("visibility", "visible").css("position", "fixed").css("top", "160px").css("margin-top", "0").css("width", tinyMceWidth);
	                                } else {
	                                    _toolbar.css("visibility", "visible").css("position", "absolute").css("top", "auto").css("margin-top", "0").css("width", tinyMceWidth);
	                                }
	                            };
	                            // unpin toolbar to top of screen
	                            var unpinToolbar = function unpinToolbar() {
	                                var _toolbar = $(editor.editorContainer).find(".mce-toolbar");
	                                var _tinyMce = $(editor.editorContainer);
	                                var _tinyMceEditArea = _tinyMce.find(".mce-edit-area");
	                                // reset padding in top of mce so the content does not "jump" up
	                                _tinyMceEditArea.css("padding-top", "0");
	                                _toolbar.css("position", "static");
	                            };
	                            // when we leave the editor (maybe)
	                            editor.on('blur', function (e) {
	                                editor.save();
	                                angularHelper.safeApply(scope, function () {
	                                    scope.value = editor.getContent();
	                                    var _toolbar = $(editor.editorContainer).find(".mce-toolbar");
	                                    if (scope.onBlur) {
	                                        scope.onBlur();
	                                    }
	                                    unpinToolbar();
	                                    $('.umb-panel-body').off('scroll', pinToolbar);
	                                });
	                            });
	                            // Focus on editor
	                            editor.on('focus', function (e) {
	                                angularHelper.safeApply(scope, function () {
	                                    if (scope.onFocus) {
	                                        scope.onFocus();
	                                    }
	                                    pinToolbar();
	                                    $('.umb-panel-body').on('scroll', pinToolbar);
	                                });
	                            });
	                            // Click on editor
	                            editor.on('click', function (e) {
	                                angularHelper.safeApply(scope, function () {
	                                    if (scope.onClick) {
	                                        scope.onClick();
	                                    }
	                                    pinToolbar();
	                                    $('.umb-panel-body').on('scroll', pinToolbar);
	                                });
	                            });
	                            // when buttons modify content
	                            editor.on('ExecCommand', function (e) {
	                                editor.save();
	                                angularHelper.safeApply(scope, function () {
	                                    scope.value = editor.getContent();
	                                });
	                            });
	                            // Update model on keypress
	                            editor.on('KeyUp', function (e) {
	                                editor.save();
	                                angularHelper.safeApply(scope, function () {
	                                    scope.value = editor.getContent();
	                                });
	                            });
	                            // Update model on change, i.e. copy/pasted text, plugins altering content
	                            editor.on('SetContent', function (e) {
	                                if (!e.initial) {
	                                    editor.save();
	                                    angularHelper.safeApply(scope, function () {
	                                        scope.value = editor.getContent();
	                                    });
	                                }
	                            });
	                            editor.on('ObjectResized', function (e) {
	                                var qs = "?width=" + e.width + "&height=" + e.height;
	                                var srcAttr = $(e.target).attr("src");
	                                var path = srcAttr.split("?")[0];
	                                $(e.target).attr("data-mce-src", path + qs);
	                            });
	                            // Create the insert link plugin
	                            tinyMceService.createLinkPicker(editor, scope, function (currentTarget, anchorElement) {
	                                if (scope.onLinkPickerClick) {
	                                    scope.onLinkPickerClick(editor, currentTarget, anchorElement);
	                                }
	                            });
	                            // Create the insert media plugin
	                            tinyMceService.createMediaPicker(editor, scope, function (currentTarget, userData) {
	                                if (scope.onMediaPickerClick) {
	                                    scope.onMediaPickerClick(editor, currentTarget, userData);
	                                }
	                            });
	                            // Create the embedded plugin
	                            tinyMceService.createInsertEmbeddedMedia(editor, scope, function () {
	                                if (scope.onEmbedClick) {
	                                    scope.onEmbedClick(editor);
	                                }
	                            });
	                            // Create the insert macro plugin
	                            tinyMceService.createInsertMacro(editor, scope, function (dialogData) {
	                                if (scope.onMacroPickerClick) {
	                                    scope.onMacroPickerClick(editor, dialogData);
	                                }
	                            });
	                        };
	                        /** Loads in the editor */
	                        function loadTinyMce() {
	                            // we need to add a timeout here, to force a redraw so TinyMCE can find
	                            // the elements needed
	                            $timeout(function () {
	                                tinymce.DOM.events.domLoaded = true;
	                                tinymce.init(baseLineConfigObj);
	                            }, 150, false);
	                        }
	                        loadTinyMce();
	                        //here we declare a special method which will be called whenever the value has changed from the server
	                        //this is instead of doing a watch on the model.value = faster
	                        //scope.model.onValueChanged = function (newVal, oldVal) {
	                        //    //update the display val again if it has changed from the server;
	                        //    tinyMceEditor.setContent(newVal, { format: 'raw' });
	                        //    //we need to manually fire this event since it is only ever fired based on loading from the DOM, this
	                        //    // is required for our plugins listening to this event to execute
	                        //    tinyMceEditor.fire('LoadContent', null);
	                        //};
	                        //listen for formSubmitting event (the result is callback used to remove the event subscription)
	                        var unsubscribe = scope.$on("formSubmitting", function () {
	                            //TODO: Here we should parse out the macro rendered content so we can save on a lot of bytes in data xfer
	                            // we do parse it out on the server side but would be nice to do that on the client side before as well.
	                            scope.value = tinyMceEditor.getContent();
	                        });
	                        //when the element is disposed we need to unsubscribe!
	                        // NOTE: this is very important otherwise if this is part of a modal, the listener still exists because the dom
	                        // element might still be there even after the modal has been hidden.
	                        scope.$on('$destroy', function () {
	                            unsubscribe();
	                        });
	                    });
	                });
	            };
	            initTiny();
	        }
	    };
	}
	exports.ExtendedGridRteController = ExtendedGridRteController;
	;

/***/ },
/* 77 */
/***/ function(module, exports) {

	/// <reference path="../../_references.d.ts"/>
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	function Capitalize() {
	    return function (input) {
	        return input.substring(0, 1).toUpperCase() + input.substring(1);
	    };
	}
	exports.Capitalize = Capitalize;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var ControllerBase_1 = __webpack_require__(88);
	/**
	* @ngdoc controller
	* @name BlueLeet.DashboardController
	* @function
	*
	* @description
	* Handles the BlueLeet dashbord.
	*/
	var DashboardController = function (_super) {
	    __extends(DashboardController, _super);
	    function DashboardController($scope, $routeParams, $q, angularHelper, dialogService, localizationService) {
	        var _this = this;
	        var beforeInitialize = function beforeInitialize() {
	            _this.dialogService = dialogService;
	            _this.localizationService = localizationService;
	            _this.dictionary = {};
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, undefined, beforeInitialize) || this;
	        return _this;
	    }
	    DashboardController.prototype.load = function () {
	        var _this = this;
	        // load localizations
	        return this.$q.all([this.localizationService.localize("blueleetDashboard_contactSupportEmail").then(function (value) {
	            _this.dictionary.contactSupportEmail = value;
	        }), this.localizationService.localize("blueleetDashboard_contactEmail").then(function (value) {
	            _this.dictionary.contactEmail = value;
	        })]);
	    };
	    return DashboardController;
	}(ControllerBase_1.ControllerBase);
	DashboardController.$inject = ["$scope", "$routeParams", "$q", "angularHelper", "dialogService", "localizationService"];
	exports.DashboardController = DashboardController;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	var $Object = __webpack_require__(18).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(35)});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	module.exports = __webpack_require__(18).Object.setPrototypeOf;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(16);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(85).set});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(24)
	  , anObject = __webpack_require__(23);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(19)(Function.call, __webpack_require__(86).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(87)
	  , createDesc     = __webpack_require__(30)
	  , toIObject      = __webpack_require__(39)
	  , toPrimitive    = __webpack_require__(29)
	  , has            = __webpack_require__(32)
	  , IE8_DOM_DEFINE = __webpack_require__(25)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(26) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _promise = __webpack_require__(7);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var ControllerBase = function () {
	    function ControllerBase($scope, $q, angularHelper, updateBehaviorFactory, beforeInitialize, formSubmitting, onDestroy, onContentLoaded) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$q = $q;
	        this.angularHelper = angularHelper;
	        this.updateBehaviorFactory = updateBehaviorFactory;
	        this.isValid = true;
	        this.updateBehavior = null;
	        this.loading = true;
	        if (beforeInitialize != null) {
	            // Run any code before initialize
	            beforeInitialize();
	        }
	        if (updateBehaviorFactory != null) {
	            this.updateBehavior = this.updateBehaviorFactory();
	        }
	        this.initialize();
	        this.listenForDirty();
	        // trigger new api
	        this.loadPromise().then(function () {
	            _this.$scope.$apply(function () {
	                _this.load() // <= obsolete
	                .then(function () {
	                    // loading is complete
	                    _this.loading = false;
	                    if (_this.updateBehavior != null) {
	                        _this.update();
	                    }
	                });
	            });
	        });
	        // Subscribe to events if they are set.
	        if (onDestroy != null) {
	            $scope.$on("$destroy", onDestroy);
	        }
	        if (onContentLoaded != null) {
	            $scope.$watch("$viewContentLoaded", onContentLoaded);
	        }
	        if (formSubmitting != null) {
	            var formSubmittingUnsubscribe_1 = this.$scope.$on("formSubmitting", formSubmitting);
	            $scope.$on('$destroy', function () {
	                formSubmittingUnsubscribe_1();
	            });
	        }
	    }
	    ControllerBase.prototype.initialize = function () {};
	    ControllerBase.prototype.listenForDirty = function () {
	        var _this = this;
	        // Subscribe to events
	        this.$scope.$watch("model.value", function (newValue, oldValue) {
	            if (newValue !== oldValue) {
	                _this.setDirty();
	            }
	        }, true);
	    };
	    ControllerBase.prototype.setDirty = function () {
	        if (!this.isDirty) {
	            this.isDirty = true;
	            var currentForm = this.angularHelper.getCurrentForm(this.$scope);
	            currentForm.$setDirty();
	        }
	    };
	    ControllerBase.prototype.update = function (newValue, updateExisting) {
	        if (this.updateBehavior == null) {
	            throw new ReferenceError("No update behavior is set!");
	        }
	        this.isValid = true;
	        this.updateBehavior.update(this, newValue, updateExisting);
	    };
	    ControllerBase.prototype.loadPromise = function () {
	        return _promise2.default.resolve(null);
	    };
	    ControllerBase.prototype.load = function () {
	        return this.$q.when(null);
	    };
	    return ControllerBase;
	}();
	exports.ControllerBase = ControllerBase;

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.GoogleMapsController
	* @function
	*
	* @description
	* Handles the Google maps property editor.
	*/
	function GoogleMapsController($scope, $timeout, $rootScope, $element, dialogService, angularHelper) {
	    $scope.isDirty = false;
	    $scope.overlay = null;
	    if (!$scope.control.value) {
	        $scope.control.value = "";
	    }
	    $scope.setDirty = function () {
	        if (!$scope.isDirty) {
	            $scope.isDirty = true;
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setDirty();
	        }
	    };
	    $scope.openSetting = function () {
	        $scope.overlay = {
	            view: $scope.control.editor.config.settingTemplate,
	            title: "Google Map",
	            show: true,
	            mapsValue: $scope.control.value,
	            submit: function submit(model) {
	                $scope.control.value = model.mapsValue;
	                $scope.overlay.show = false;
	                $scope.overlay = null;
	            },
	            close: function close(oldModel) {
	                $scope.overlay.show = false;
	                $scope.overlay = null;
	            }
	        };
	    };
	    $scope.$watch("control.value", function (newValue, oldValue) {
	        $timeout(function () {
	            $($element).find(".bl-googleMaps-map").html($scope.control.value);
	        }, 500);
	        if (newValue !== oldValue) {
	            $scope.setDirty();
	        }
	    }, true);
	}
	exports.GoogleMapsController = GoogleMapsController;

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.GoogleMapsSettingController
	* @function
	*
	* @description
	* Handles the Google maps property editor settings.
	*/
	function GoogleMapsSettingController($scope) {
	    //$scope.model = $scope.dialogData.model;
	}
	exports.GoogleMapsSettingController = GoogleMapsSettingController;

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.GoToTopController
	* @function
	*
	* @description
	* Handles the go to top property editor.
	*/
	function GoToTopController($scope) {}
	exports.GoToTopController = GoToTopController;

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.HeadlineController
	* @function
	*
	* @description
	* Handles the headline property editor.
	*/
	function HeadlineController($scope, $timeout, $element, angularHelper) {
	    $scope.isDirty = false;
	    $scope.$watch("control.value", function (newValue, oldValue) {
	        if (newValue !== oldValue) {
	            $scope.setDirty();
	        }
	    }, true);
	    $scope.setDirty = function () {
	        if (!$scope.isDirty) {
	            $scope.isDirty = true;
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setDirty();
	        }
	    };
	}
	exports.HeadlineController = HeadlineController;

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.HeadlineLeadController
	* @function
	*
	* @description
	* Handles the headline with lead property editor.
	*/
	function HeadlineNLeadController($scope, $timeout, $element, angularHelper) {
	    $scope.isDirty = false;
	    $scope.$watch("control.value", function (newValue, oldValue) {
	        if (newValue !== oldValue) {
	            $scope.setDirty();
	        }
	    }, true);
	    $scope.setDirty = function () {
	        if (!$scope.isDirty) {
	            $scope.isDirty = true;
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setDirty();
	        }
	    };
	    if (!$scope.control.value) {
	        $scope.control.value = {
	            headline: "",
	            lead: ""
	        };
	    }
	}
	exports.HeadlineNLeadController = HeadlineNLeadController;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _stringify = __webpack_require__(95);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _promise = __webpack_require__(7);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(74);
	var multiLinkPickerController_1 = __webpack_require__(97);
	var ControllerBase_1 = __webpack_require__(88);
	var Link_1 = __webpack_require__(118);
	var TreeSourceModel_1 = __webpack_require__(98);
	var TreeSourceType_1 = __webpack_require__(117);
	var CardImageMetaInfo = function () {
	    function CardImageMetaInfo() {}
	    return CardImageMetaInfo;
	}();
	exports.CardImageMetaInfo = CardImageMetaInfo;
	var CardImage = function () {
	    function CardImage(id, altText, title) {
	        if (id === void 0) {
	            id = -1;
	        }
	        if (altText === void 0) {
	            altText = "";
	        }
	        if (title === void 0) {
	            title = "";
	        }
	        this.url = "";
	        this.name = "";
	        this.icon = "";
	        this.altText = "";
	        this.title = "";
	        this.id = id;
	        this.altText = altText;
	        this.title = title;
	    }
	    Object.defineProperty(CardImage.prototype, "id", {
	        get: function get() {
	            return this._id;
	        },
	        set: function set(value) {
	            this._id = _.isString(value) ? parseInt(value) : value;
	            this.isResolveld = false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CardImage.prototype.updateLazyInfo = function () {
	        var _this = this;
	        var $injector = angular.element("body").injector();
	        var mediaResource = $injector.get("mediaResource");
	        var mediaHelper = $injector.get("mediaHelper");
	        return new _promise2.default(function (resolve) {
	            if (_this.isResolveld) {
	                resolve(_this);
	                return _this;
	            }
	            _this.isResolveld = true;
	            if (_this._id === -1) {
	                resolve(null);
	                return _this;
	            }
	            return mediaResource.getById(_this._id).then(function (media) {
	                _this.name = media.name;
	                _this.icon = media.icon;
	                _this.url = mediaHelper.resolveFile(media);
	                resolve(_this);
	                return _this;
	            });
	        });
	    };
	    // ReSharper disable once InconsistentNaming
	    CardImage.prototype.toJSON = function () {
	        return {
	            id: this.id,
	            altText: this.altText,
	            title: this.title
	        };
	    };
	    CardImage.parse = function (value) {
	        var cardImage = new CardImage();
	        if (_.isUndefined(value) || _.isNull(value)) {
	            return cardImage;
	        }
	        if (_.isString(value)) {
	            var jObject = JSON.parse(value);
	            cardImage.id = jObject.id;
	            cardImage.altText = jObject.altText;
	            cardImage.title = jObject.title;
	        } else {
	            cardImage.id = value.id;
	            cardImage.altText = value.altText;
	            cardImage.title = value.title;
	        }
	        return cardImage;
	    };
	    return CardImage;
	}();
	exports.CardImage = CardImage;
	var CardValue = function () {
	    function CardValue() {
	        this.image = null;
	        this.link = null;
	        this.title = null;
	        this.content = null;
	    }
	    // ReSharper disable once InconsistentNaming
	    CardValue.fromJSON = function (value) {
	        var cardValue = new CardValue();
	        if (_.isString(value)) {
	            var jObject = JSON.parse(value);
	            cardValue.image = CardImage.parse(jObject.image);
	            cardValue.link = Link_1.Link.parse(jObject.link);
	            cardValue.title = jObject.title;
	            cardValue.content = jObject.content;
	        }
	        return cardValue;
	    };
	    return CardValue;
	}();
	exports.CardValue = CardValue;
	/**
	* @ngdoc controller
	* @name BlueLeet.CardController
	* @function
	*
	* @description
	* Handles the card property editor.
	*/
	var CardController = function (_super) {
	    __extends(CardController, _super);
	    function CardController($scope, $q, $timeout, $element, dialogService, dictionaryResource, angularHelper, slimsyResource, entityResource, eventsService, mediaHelper, textPixelService) {
	        var _this = this;
	        var beforeInitialize = function beforeInitialize() {
	            _this.$timeout = $timeout;
	            _this.$element = $element;
	            _this.dialogService = dialogService;
	            _this.dictionaryResource = dictionaryResource;
	            _this.slimsyResource = slimsyResource;
	            _this.entityResource = entityResource;
	            _this.eventsService = eventsService;
	            _this.textPixelService = textPixelService;
	            _this.mediaHelper = mediaHelper;
	            _this.isEmptyModel = false;
	            _this.isInit = true;
	            _this.rteConfig = {
	                toolbar: ["code", "removeformat", "undo", "redo", "cut", "copy", "styleselect"],
	                stylesheets: ["RTE_Header"],
	                dimensions: { height: 0 },
	                maxImageSize: 0
	            };
	            _this.rteConfigContent = {
	                toolbar: ["code", "removeformat", "undo", "redo", "cut", "copy", "styleselect", "bold", "italic", "underline", "strikethrough", "alignleft", "aligncenter", "alignright", "alignjustify", "bullist", "numlist", "outdent", "indent", "link", "unlink", "hr", "subscript", "superscript", "charmap"],
	                stylesheets: ["RTE_2ColsContent"],
	                dimensions: { height: 200 },
	                maxImageSize: 500
	            };
	            if ((_.isUndefined($scope.control.value) || _.isNull($scope.control.value)) === false && _.isString($scope.control.value)) {
	                _this.renderModel = CardValue.fromJSON($scope.control.value);
	                _this.oldModel = CardValue.fromJSON($scope.control.value);
	            } else {
	                _this.isEmptyModel = true;
	                _this.renderModel = new CardValue();
	                _this.oldModel = new CardValue();
	            }
	        };
	        var formSubmitting = function formSubmitting() {
	            if (_this.isDirty) {
	                if (_.isEqual(_this.renderModel, new CardValue())) {
	                    _this.$scope.control.value = null;
	                } else {
	                    _this.$scope.control.value = (0, _stringify2.default)(_this.renderModel);
	                }
	            }
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, null, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    CardController.prototype.loadPromise = function () {
	        if (this.renderModel.image) {
	            return this.renderModel.image.updateLazyInfo();
	        }
	        return _super.prototype.loadPromise.call(this);
	    };
	    CardController.prototype.onTitleInit = function (editor) {
	        this.setLimitedRTE();
	        editor.hide();
	        editor.show();
	    };
	    CardController.prototype.onContentInit = function (editor) {
	        editor.hide();
	        editor.show();
	    };
	    CardController.prototype.onTitleBlur = function () {
	        if (_.isNull(this.renderModel.title) || _.isEqual(this.renderModel.title, this.oldModel.title)) {
	            return;
	        }
	        this.setDirty();
	    };
	    CardController.prototype.onContentBlur = function () {
	        if (_.isNull(this.renderModel.content) || _.isEqual(this.renderModel.content, this.oldModel.content)) {
	            return;
	        }
	        this.setDirty();
	    };
	    CardController.prototype.editLink = function () {
	        var self = this;
	        var config = new multiLinkPickerController_1.MultiLinkPickerPreValues();
	        config.maxNumberOfItems = 1;
	        config.externalPicker = true;
	        config.mergeRoots = true;
	        config.multiPicker = false;
	        config.treeSources = [];
	        config.treeSources.push(TreeSourceModel_1.TreeSourceModel.copyFrom({ type: TreeSourceType_1.TreeSourceType.Content, sourceName: "Internal Content" }));
	        config.treeSources.push(TreeSourceModel_1.TreeSourceModel.copyFrom({ type: TreeSourceType_1.TreeSourceType.Media, sourceName: "Internal Media" }));
	        this.overlay = {
	            view: "/App_Plugins/BlueLeet.UComponents/propertyEditors/multiLinkPicker/multiLinkPicker.html",
	            show: true,
	            hideHeader: true,
	            submit: function submit(model) {
	                var link = model.value[0];
	                self.renderModel.link = link;
	                self.setDirty();
	                self.overlay.show = false;
	                self.overlay = null;
	            },
	            close: function close() {
	                self.overlay.show = false;
	                self.overlay = null;
	            },
	            dialogModel: {
	                value: this.renderModel.link === null ? "" : [Link_1.Link.parse(this.renderModel.link)],
	                config: config
	            }
	        };
	    };
	    CardController.prototype.selectImage = function () {
	        var self = this;
	        self.overlay = {
	            view: "/App_Plugins/BlueLeet.UComponents/gridEditors/card/settings.html",
	            show: true,
	            hideHeader: true,
	            selectedImage: self.renderModel.image,
	            submit: function submit(model) {
	                self.renderModel.image = model.value;
	                self.setDirty();
	                self.overlay.show = false;
	                self.overlay = null;
	            },
	            close: function close() {
	                self.overlay.show = false;
	                self.overlay = null;
	            }
	        };
	        self.overlay.show = true;
	    };
	    CardController.prototype.setLimitedRTE = function () {
	        this.$scope.diablelsTools = ["Align left", "Align right", "Justify", "Bold", "Italic", "Underline", "Strikethrough", "Align center", "Bullet list", "Decrease indent", "Increase indent", "Insert/edit link", "Remove link", "Insert horizontal rule", "Subscript", "Superscript", "Special character", "Numbered list"];
	        var buttons = $(this.$element).find(".bl-column-title .mce-btn-group button");
	        if (buttons.length > 0) {
	            this.$scope.setRteDropdown = true;
	            this.removeRTEControl(buttons);
	        }
	    };
	    CardController.prototype.removeRTEControl = function (buttons) {
	        var _this = this;
	        $(buttons).each(function (index, element) {
	            if ($(element).html().indexOf("italic") > -1) {
	                $(element).remove();
	            }
	            if ($(element).html().indexOf("mce-caret") > -1) {
	                $(element).click(function () {
	                    _this.$timeout(function () {
	                        _this.removeStyles();
	                    }, 1);
	                });
	            }
	        });
	    };
	    CardController.prototype.removeStyles = function () {
	        if ($(".mce-menu").length && this.$scope.setRteDropdown) {
	            this.$scope.setRteDropdown = false;
	            $($(".mce-menu")[$(".mce-menu").length - 1]).find(".mce-stack-layout-item").each(function (index, element) {
	                if ($(element).html().indexOf("Color Header") === -1) {
	                    $(element).hide();
	                }
	            });
	        }
	    };
	    CardController.prototype.showSelection = function () {
	        var textComponent = document.getElementById(this.$scope.control.$uniqueId);
	        var selectedText = "";
	        var startPos = 0;
	        var textLength = 0;
	        // IE version
	        if (document.selection != undefined) {
	            textComponent.focus();
	            var sel = document.selection.createRange();
	            selectedText = sel.text;
	            startPos = sel.startOffset;
	            textLength = selectedText.length;
	        } else if (textComponent.selectionStart != undefined) {
	            startPos = textComponent.selectionStart;
	            var endPos = textComponent.selectionEnd;
	            selectedText = textComponent.value.substring(startPos, endPos);
	            textLength = selectedText.length;
	        }
	        var hightlightFormat = "<span class='colorHeader'>#text#</span>";
	        hightlightFormat = hightlightFormat.replace("#text#", selectedText);
	        this.rep(this.renderModel.title, startPos, hightlightFormat, textLength);
	    };
	    CardController.prototype.rep = function (str, index, newStr, textLength) {
	        str = this.setCharAt(str, index, newStr, textLength);
	        this.renderModel.title = str;
	    };
	    CardController.prototype.setCharAt = function (str, index, chr, textLength) {
	        if (index > str.length - 1) return str;
	        return str.substr(0, index) + chr + str.substr(index + textLength);
	    };
	    return CardController;
	}(ControllerBase_1.ControllerBase);
	CardController.$inject = ["$scope", "$q", "$timeout", "$element", "dialogService", "dictionaryResource", "angularHelper", "slimsyResource", "entityResource", "eventsService", "mediaHelper", "textPixelService"];
	exports.CardController = CardController;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(18)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _promise = __webpack_require__(7);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _stringify = __webpack_require__(95);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(74);
	var ControllerBase_1 = __webpack_require__(88);
	var TreeSourceModel_1 = __webpack_require__(98);
	var Link_1 = __webpack_require__(118);
	var TreeSourceHelper_1 = __webpack_require__(99);
	var TreeSourceType_1 = __webpack_require__(117);
	var MultiLinkPickerPreValues = function () {
	    function MultiLinkPickerPreValues() {}
	    MultiLinkPickerPreValues.parse = function (value, defaults) {
	        var v = defaults || new MultiLinkPickerPreValues();
	        v = _.extend(v, value);
	        var mergeRoots = (0, _stringify2.default)(v.mergeRoots);
	        var multiPicker = (0, _stringify2.default)(v.multiPicker);
	        var externalPicker = (0, _stringify2.default)(v.externalPicker);
	        v.maxNumberOfItems = parseInt(v.maxNumberOfItems + "");
	        v.minNumberOfItems = parseInt(v.minNumberOfItems + "");
	        v.mergeRoots = mergeRoots === "1" || mergeRoots === "true";
	        v.multiPicker = multiPicker === "1" || multiPicker === "true";
	        v.externalPicker = externalPicker === "1" || externalPicker === "true";
	        v.treeSources = v.treeSources;
	        return v;
	    };
	    return MultiLinkPickerPreValues;
	}();
	exports.MultiLinkPickerPreValues = MultiLinkPickerPreValues;
	/**
	* @ngdoc controller
	* @name BlueLeet.MultiLinkPickerController
	* @function
	*
	* @description
	* Handles the multi url picker property editor.
	*/
	var MultiLinkPickerController = function (_super) {
	    __extends(MultiLinkPickerController, _super);
	    function MultiLinkPickerController($injector, $scope, $q, $routeParams, angularHelper, notificationsService, iconHelper, entityResource) {
	        var _this = this;
	        var beforeInitialize = function beforeInitialize() {
	            _this.multiLinkPickerForm = {};
	            _this.contentIds = [];
	            _this.mediaIds = [];
	            _this.memberIds = [];
	            _this.contentTreeSources = [];
	            _this.mediaTreeSources = [];
	            _this.memberTreeSources = [];
	            _this.renderModel = [];
	            _this.cfg = { maxNumberOfItems: 0, minNumberOfItems: 0, mergeRoots: false, multiPicker: false, externalPicker: false, treeSources: [] };
	            _this.sortableOptions = { handle: ".handle" };
	            _this.iconHelper = iconHelper;
	            _this.entityResource = entityResource;
	            _this.$routeParams = $routeParams;
	            _this.isDialog = false;
	            _this.promises = [];
	            if ($scope.model.dialogModel) {
	                _this.isDialog = true;
	                $scope.model.value = $scope.model.dialogModel.value;
	                $scope.model.config = $scope.model.dialogModel.config;
	            }
	            if ($scope.model.config) {
	                _this.cfg = MultiLinkPickerPreValues.parse($scope.model.config, _this.cfg);
	            }
	            // map this object to its class
	            _this.cfg.treeSources = _.map(_this.cfg.treeSources, function (source) {
	                return TreeSourceModel_1.TreeSourceModel.copyFrom(source);
	            });
	            if (_this.cfg.maxNumberOfItems <= 0) {
	                delete _this.cfg.maxNumberOfItems;
	            }
	            if (_this.cfg.minNumberOfItems <= 0) {
	                _this.cfg.minNumberOfItems = 0;
	            }
	            if (_.isArray($scope.model.value) && !_.isEmpty($scope.model.value)) {
	                _.forEach($scope.model.value, function (item) {
	                    // convert the item to a link object.
	                    item = Link_1.Link.parse(item);
	                    _this.renderModel.push(item);
	                    if (item.id) {
	                        if (item.sourceType === TreeSourceType_1.TreeSourceType.Media) {
	                            _this.mediaIds.push(item.id);
	                        } else if (item.sourceType === TreeSourceType_1.TreeSourceType.Content) {
	                            _this.contentIds.push(item.id);
	                        } else if (item.sourceType === TreeSourceType_1.TreeSourceType.Member) {
	                            _this.memberIds.push(item.id);
	                        }
	                    }
	                });
	            }
	            // Map tree sources to its respective category.
	            _.each(_this.cfg.treeSources, function (source) {
	                _this.promises.push(source.updateLazyInfo());
	                switch (source.type) {
	                    case TreeSourceType_1.TreeSourceType.Content:
	                        _this.contentTreeSources.push(source.id);
	                        break;
	                    case TreeSourceType_1.TreeSourceType.Media:
	                        _this.mediaTreeSources.push(source.id);
	                        break;
	                    case TreeSourceType_1.TreeSourceType.Member:
	                        _this.memberTreeSources.push(source.value);
	                        break;
	                }
	            });
	        };
	        var formSubmitting = function formSubmitting() {
	            if (_this.isDirty) {
	                if (_this.renderModel.length) {
	                    if (_this.isDialog) {
	                        // This is a dialog lets not stringify the value
	                        $scope.model.value = _this.renderModel;
	                    } else {
	                        // If we dont save it as json string it will throw.
	                        $scope.model.value = (0, _stringify2.default)(_this.renderModel);
	                    }
	                } else {
	                    $scope.model.value = null;
	                }
	            }
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, null, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    MultiLinkPickerController.prototype.listenForDirty = function () {
	        // Do nothing as we check this elsewhere.
	    };
	    MultiLinkPickerController.prototype.loadPromise = function () {
	        return _promise2.default.all(this.promises);
	    };
	    MultiLinkPickerController.prototype.load = function () {
	        var self = this;
	        var promises = [];
	        if (self.contentIds.length > 0) {
	            promises.push(self.entityResource.getByIds(self.contentIds, "Document").then(function (nodes) {
	                self.setIcon(nodes);
	            }));
	        }
	        if (this.mediaIds.length > 0) {
	            promises.push(self.entityResource.getByIds(self.mediaIds, "Media").then(function (nodes) {
	                self.setIcon(nodes);
	            }));
	        }
	        if (this.memberIds.length > 0) {
	            promises.push(self.entityResource.getByIds(self.memberIds, "Member").then(function (nodes) {
	                self.setIcon(nodes);
	            }));
	        }
	        return this.$q.all(promises);
	    };
	    MultiLinkPickerController.prototype.setIcon = function (nodes) {
	        if (_.isArray(nodes)) {
	            _.each(nodes, this.setIcon, this);
	        } else {
	            var item = _.find(this.renderModel, function (l) {
	                return l.id === nodes.id;
	            });
	            item.icon = this.iconHelper.convertFromLegacyIcon(nodes.icon);
	        }
	    };
	    ;
	    MultiLinkPickerController.prototype.openLinkPicker = function (sourceType, callbackItem) {
	        var self = this;
	        var entityType = TreeSourceHelper_1.TreeSourceHelper.getEntityType(sourceType);
	        var itemsCopy = jQuery.extend(true, [], self.renderModel);
	        var customTreeParams = "pageId=" + self.$routeParams.id + "&mergeRoots=" + self.cfg.mergeRoots;
	        var treeAlias = "blueleetFilteredContentTree";
	        var section = "blueleetFilteredContentTree";
	        if (self.contentTreeSources.length && sourceType === TreeSourceType_1.TreeSourceType.Content) {
	            customTreeParams += "&contentIds=" + self.contentTreeSources.join();
	        } else if (self.mediaTreeSources.length && sourceType === TreeSourceType_1.TreeSourceType.Media) {
	            treeAlias = "blueleetFilteredMediaTree";
	            section = "blueleetFilteredMediaTree";
	            customTreeParams += "&mediaIds=" + self.mediaTreeSources.join();
	        } else if (self.memberTreeSources.length && sourceType === TreeSourceType_1.TreeSourceType.Member) {
	            treeAlias = "blueleetFilteredMemberTree";
	            section = "blueleetFilteredMemberTree";
	            customTreeParams += "&memberIds=" + self.memberTreeSources.join();
	        }
	        self.$scope.overlay = {
	            filterCssClass: "not-allowed not-published",
	            minNumber: self.cfg.minNumberOfItems,
	            maxNumber: self.cfg.maxNumberOfItems,
	            entityType: entityType,
	            treeAlias: treeAlias,
	            section: section,
	            customTreeParams: customTreeParams,
	            onlyInitialized: true,
	            view: "treePicker",
	            multiPicker: self.cfg.multiPicker,
	            hideHeader: true,
	            show: true,
	            submit: function submit(model) {
	                if (angular.isArray(model.selection)) {
	                    _.each(model.selection, function (e) {
	                        if (callbackItem) {
	                            callbackItem(e);
	                        } else {
	                            self.addLink(sourceType, e);
	                        }
	                    });
	                } else {
	                    if (callbackItem) {
	                        callbackItem(model);
	                    } else {
	                        self.addLink(sourceType, model);
	                    }
	                }
	                var diff = _.difference(self.renderModel, itemsCopy);
	                if (diff.length) {
	                    self.setDirty();
	                }
	                self.$scope.overlay.show = false;
	                self.$scope.overlay = null;
	            },
	            close: function close(oldModel) {
	                self.$scope.overlay.show = false;
	                self.$scope.overlay = null;
	            }
	        };
	    };
	    ;
	    MultiLinkPickerController.prototype.openExternalLinkPicker = function (link, callbackItem) {
	        var self = this;
	        var target = null;
	        if (link) {
	            target = {
	                url: link.url,
	                name: link.name,
	                target: link.target
	            };
	        }
	        self.$scope.overlay = {
	            target: target,
	            view: "/App_Plugins/BlueLeet.UComponents/preValueEditors/externalLink/externalLink.html",
	            hideHeader: true,
	            show: true,
	            submit: function submit(model) {
	                if (callbackItem) {
	                    callbackItem(model.value);
	                } else {
	                    self.addLink(TreeSourceType_1.TreeSourceType.ExternalUrl, model.value);
	                }
	                if (_.isEqual(target, model.value) === false) {
	                    self.setDirty();
	                }
	                self.$scope.overlay.show = false;
	                self.$scope.overlay = null;
	            },
	            close: function close() {
	                self.$scope.overlay.show = false;
	                self.$scope.overlay = null;
	            }
	        };
	    };
	    ;
	    MultiLinkPickerController.prototype.openContentLinkPicker = function () {
	        this.openLinkPicker(TreeSourceType_1.TreeSourceType.Content);
	    };
	    MultiLinkPickerController.prototype.openMediaLinkPicker = function () {
	        this.openLinkPicker(TreeSourceType_1.TreeSourceType.Media);
	    };
	    MultiLinkPickerController.prototype.openMemberLinkPicker = function () {
	        this.openLinkPicker(TreeSourceType_1.TreeSourceType.Member);
	    };
	    MultiLinkPickerController.prototype.addLink = function (sourceType, e) {
	        var link = Link_1.Link.parse(e, sourceType);
	        this.renderModel.push(link);
	    };
	    MultiLinkPickerController.prototype.edit = function (node) {
	        var _this = this;
	        if (node.sourceType === TreeSourceType_1.TreeSourceType.ExternalUrl) {
	            this.openExternalLinkPicker(node, function (link) {
	                _this.replaceLink(node, link, TreeSourceType_1.TreeSourceType.ExternalUrl);
	            });
	        } else {
	            this.openLinkPicker(node.sourceType, function (link) {
	                _this.replaceLink(node, link, node.sourceType);
	            });
	        }
	    };
	    ;
	    MultiLinkPickerController.prototype.remove = function (node) {
	        var index = this.renderModel.indexOf(node);
	        this.renderModel.splice(index, 1);
	    };
	    ;
	    MultiLinkPickerController.prototype.replaceLink = function (oldLink, e, sourceType) {
	        var link = Link_1.Link.parse(e, sourceType);
	        var index = this.renderModel.indexOf(oldLink);
	        this.renderModel[index] = link;
	    };
	    MultiLinkPickerController.prototype.getDialogType = function (type) {
	        switch (type) {
	            case "Media":
	                return "media";
	            case "Member":
	                return "member";
	            default:
	                return "content";
	        }
	    };
	    return MultiLinkPickerController;
	}(ControllerBase_1.ControllerBase);
	MultiLinkPickerController.$inject = ["$injector", "$scope", "$q", "$routeParams", "angularHelper", "notificationsService", "iconHelper", "entityResource"];
	exports.MultiLinkPickerController = MultiLinkPickerController;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _promise = __webpack_require__(7);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(74);
	var SourceHelper = __webpack_require__(99);
	var TreeSourceType_1 = __webpack_require__(117);
	var TreeSourceModel = function () {
	    function TreeSourceModel(type, id, value, sourceName, query) {
	        this._type = type;
	        this.query = query;
	        this.id = id;
	        this.value = value;
	        this.sourceName = sourceName;
	        this.name = "";
	        this.icon = "";
	        this.updateLazyInfo();
	    }
	    Object.defineProperty(TreeSourceModel.prototype, "id", {
	        get: function get() {
	            return this._id;
	        },
	        set: function set(value) {
	            var _this = this;
	            this.isResolveld = false;
	            if (this.type === TreeSourceType_1.TreeSourceType.Member || this.type === TreeSourceType_1.TreeSourceType.ExternalUrl) {
	                return;
	            }
	            if (value === undefined || value === null) {
	                if (this.query === undefined || this.query === "" || this.query === null) {
	                    throw new Error("An id or query must be specified!");
	                }
	            } else if (this.query !== undefined && this.query !== "" && this.query !== null) {
	                var $injector = angular.element("body").injector();
	                var entityResource = $injector.get("entityResource");
	                var $routeParams = $injector.get("$routeParams");
	                var rootId = $routeParams.id;
	                var entityType = this.getEntityType();
	                entityResource.getByQuery(this.query, rootId, entityType).then(function (ent) {
	                    if (ent != null) {
	                        _this._id = ent.id;
	                    }
	                });
	            } else {
	                this._id = _.isString(value) ? parseInt(value) : value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeSourceModel.prototype, "value", {
	        get: function get() {
	            return this._value;
	        },
	        set: function set(value) {
	            if (this.type === TreeSourceType_1.TreeSourceType.Member || this.type === TreeSourceType_1.TreeSourceType.ExternalUrl) {
	                this._value = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeSourceModel.prototype, "type", {
	        get: function get() {
	            return this._type;
	        },
	        set: function set(value) {
	            this._type = value;
	            this._typeText = TreeSourceType_1.TreeSourceType[value];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeSourceModel.prototype, "typeText", {
	        get: function get() {
	            return this._typeText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    // ReSharper disable once InconsistentNaming
	    TreeSourceModel.prototype.toJSON = function () {
	        return {
	            id: this._id,
	            value: this._value || this._id,
	            query: this.query,
	            sourceName: this.sourceName,
	            type: this._type,
	            typeText: this._typeText
	        };
	    };
	    TreeSourceModel.prototype.getEntityType = function () {
	        return SourceHelper.TreeSourceHelper.getEntityType(this.type);
	    };
	    TreeSourceModel.prototype.updateLazyInfo = function () {
	        var _this = this;
	        var $injector = angular.element("body").injector();
	        var entityResource = $injector.get("entityResource");
	        //const $routeParams = $injector.get<any>("$routeParams");
	        var promise = new _promise2.default(function (resolve) {
	            if (_this.isResolveld) {
	                resolve(_this);
	                return _this;
	            }
	            _this.isResolveld = true;
	            if (_this.type === TreeSourceType_1.TreeSourceType.ExternalUrl) {
	                _this.icon = "icon-globe";
	                resolve(_this);
	            } else if (_this.type === TreeSourceType_1.TreeSourceType.Member) {
	                _this.name = _this.value;
	                _this.icon = "icon-users";
	                resolve(_this);
	            } else if (_this.type === TreeSourceType_1.TreeSourceType.Content || _this.type === TreeSourceType_1.TreeSourceType.Media) {
	                if (_this.id === -1 || _this.id === null || _this.id === undefined) {
	                    resolve(null);
	                    return _this;
	                }
	                var ent = _this.getEntityType();
	                var idToGet = _this.id;
	                entityResource.getById(idToGet, ent).then(function (item) {
	                    _this.name = item.name;
	                    _this.icon = item.icon;
	                    resolve(_this);
	                });
	            }
	            return _this;
	        });
	        //TreeSourceModel.promises.push(promise);
	        return promise;
	    };
	    TreeSourceModel.copyFrom = function (node) {
	        //var $injector = angular.element("body").injector();
	        //var treeSource = $injector.instantiate(TreeSourceModel, { type: node.type, id: -1, value: "", sourceName: "", query: "" });
	        var treeSource = new TreeSourceModel(node.type, -1, "", "", "");
	        return jQuery.extend(true, treeSource, node);
	    };
	    return TreeSourceModel;
	}();
	exports.TreeSourceModel = TreeSourceModel;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof2 = __webpack_require__(100);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var TreeSourceType_1 = __webpack_require__(117);
	var TreeSourceHelper = function () {
	    function TreeSourceHelper() {}
	    TreeSourceHelper.parseSourceType = function (value) {
	        if (typeof value == "string") {
	            return parseInt(value);
	        } else if (typeof value == "number") {
	            return value;
	        }
	        throw "Can not parse " + value + " of type " + (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) + " to a TreeSourceType";
	    };
	    TreeSourceHelper.getEntityType = function (sourceType) {
	        var ent = "Document";
	        if (sourceType === TreeSourceType_1.TreeSourceType.Media) {
	            ent = "Media";
	        } else if (sourceType === TreeSourceType_1.TreeSourceType.Member) {
	            ent = "Member";
	        } else if (sourceType === TreeSourceType_1.TreeSourceType.ExternalUrl) {
	            ent = "";
	        }
	        return ent;
	    };
	    return TreeSourceHelper;
	}();
	exports.TreeSourceHelper = TreeSourceHelper;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(101);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(104);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	__webpack_require__(54);
	module.exports = __webpack_require__(103).f('iterator');

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(51);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106);
	__webpack_require__(9);
	__webpack_require__(115);
	__webpack_require__(116);
	module.exports = __webpack_require__(18).Symbol;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(17)
	  , has            = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(26)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(31)
	  , META           = __webpack_require__(107).KEY
	  , $fails         = __webpack_require__(27)
	  , shared         = __webpack_require__(46)
	  , setToStringTag = __webpack_require__(50)
	  , uid            = __webpack_require__(47)
	  , wks            = __webpack_require__(51)
	  , wksExt         = __webpack_require__(103)
	  , wksDefine      = __webpack_require__(108)
	  , keyOf          = __webpack_require__(109)
	  , enumKeys       = __webpack_require__(110)
	  , isArray        = __webpack_require__(112)
	  , anObject       = __webpack_require__(23)
	  , toIObject      = __webpack_require__(39)
	  , toPrimitive    = __webpack_require__(29)
	  , createDesc     = __webpack_require__(30)
	  , _create        = __webpack_require__(35)
	  , gOPNExt        = __webpack_require__(113)
	  , $GOPD          = __webpack_require__(86)
	  , $DP            = __webpack_require__(22)
	  , $keys          = __webpack_require__(37)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(114).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(87).f  = $propertyIsEnumerable;
	  __webpack_require__(111).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(15)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(47)('meta')
	  , isObject = __webpack_require__(24)
	  , has      = __webpack_require__(32)
	  , setDesc  = __webpack_require__(22).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(27)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(17)
	  , core           = __webpack_require__(18)
	  , LIBRARY        = __webpack_require__(15)
	  , wksExt         = __webpack_require__(103)
	  , defineProperty = __webpack_require__(22).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(37)
	  , toIObject = __webpack_require__(39);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(37)
	  , gOPS    = __webpack_require__(111)
	  , pIE     = __webpack_require__(87);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(41);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(39)
	  , gOPN      = __webpack_require__(114).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(38)
	  , hiddenKeys = __webpack_require__(48).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108)('asyncIterator');

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108)('observable');

/***/ },
/* 117 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var TreeSourceType;
	(function (TreeSourceType) {
	    TreeSourceType[TreeSourceType["Content"] = 0] = "Content";
	    TreeSourceType[TreeSourceType["Media"] = 1] = "Media";
	    TreeSourceType[TreeSourceType["Member"] = 2] = "Member";
	    TreeSourceType[TreeSourceType["ExternalUrl"] = 3] = "ExternalUrl";
	})(TreeSourceType = exports.TreeSourceType || (exports.TreeSourceType = {}));

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _promise = __webpack_require__(7);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(74);
	var TreeSourceType_1 = __webpack_require__(117);
	var TreeSourceHelper_1 = __webpack_require__(99);
	var Link = function () {
	    function Link(id, name, url, target, icon, sourceType) {
	        this.id = id;
	        this._name = name;
	        this._url = url;
	        this._target = target;
	        this._icon = icon;
	        this._sourceType = sourceType;
	        this.updateLazyInfo();
	    }
	    Object.defineProperty(Link.prototype, "id", {
	        get: function get() {
	            return this._id;
	        },
	        set: function set(value) {
	            this._id = _.isString(value) ? parseInt(value) : value;
	            this.isResolveld = false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Link.prototype, "name", {
	        get: function get() {
	            this.updateLazyInfo();
	            return this._name;
	        },
	        set: function set(value) {
	            this._name = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Link.prototype, "url", {
	        get: function get() {
	            this.updateLazyInfo();
	            return this._url;
	        },
	        set: function set(value) {
	            this._url = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Link.prototype, "target", {
	        get: function get() {
	            this.updateLazyInfo();
	            return this._target;
	        },
	        set: function set(value) {
	            this._target = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Link.prototype, "icon", {
	        get: function get() {
	            this.updateLazyInfo();
	            return this._icon;
	        },
	        set: function set(value) {
	            this._icon = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Link.prototype, "sourceType", {
	        get: function get() {
	            this.updateLazyInfo();
	            return this._sourceType;
	        },
	        set: function set(value) {
	            this._sourceType = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    // ReSharper disable once InconsistentNaming
	    Link.prototype.toJSON = function () {
	        var result;
	        if (this.sourceType === TreeSourceType_1.TreeSourceType.ExternalUrl) {
	            result = {
	                name: this.name,
	                url: this.url,
	                target: this.target,
	                icon: this.icon,
	                sourceType: this.sourceType
	            };
	        } else {
	            result = {
	                id: this._id,
	                target: this.target,
	                sourceType: this.sourceType
	            };
	        }
	        return result;
	    };
	    Link.parse = function (o, sourceType) {
	        var treeSourceType;
	        if (_.isUndefined(sourceType) || _.isNull(sourceType) || !_.isNumber(sourceType) || _.isNaN(sourceType)) {
	            if (_.isUndefined(o) || _.isNull(o)) {
	                return null;
	            } else {
	                treeSourceType = o.sourceType;
	            }
	        } else {
	            treeSourceType = sourceType;
	        }
	        var link = new Link(o.id, o.name, o.url, o.target, o.icon, treeSourceType);
	        return link;
	    };
	    Link.prototype.updateLazyInfo = function () {
	        var _this = this;
	        var $injector = angular.element("body").injector();
	        var mediaResource = $injector.get("mediaResource");
	        var mediaHelper = $injector.get("mediaHelper");
	        var contentResource = $injector.get("contentResource");
	        //const $routeParams = $injector.get<any>("$routeParams");
	        var promise = new _promise2.default(function (resolve) {
	            if (_this.isResolveld) {
	                resolve(_this);
	                return _this;
	            }
	            _this.isResolveld = true;
	            if (_this.sourceType === TreeSourceType_1.TreeSourceType.ExternalUrl) {
	                _this.icon = "icon-globe";
	                resolve(_this);
	            } else if (_this.sourceType === TreeSourceType_1.TreeSourceType.Member) {
	                _this.icon = "icon-user";
	                resolve(_this);
	            } else if (_this.sourceType === TreeSourceType_1.TreeSourceType.Content) {
	                if (_this.id === -1 || _this.id === null || _this.id === undefined) {
	                    resolve(null);
	                    return _this;
	                }
	                var ent = TreeSourceHelper_1.TreeSourceHelper.getEntityType(_this.sourceType);
	                contentResource.getById(_this.id, ent).then(function (item) {
	                    _this.name = item.name;
	                    _this.icon = item.icon;
	                    _this.url = item.url;
	                    if (_.isEmpty(_this.icon)) {
	                        _this.icon = _this.sourceType === TreeSourceType_1.TreeSourceType.Content ? "icon-umb-content" : "icon-picture";
	                    }
	                    resolve(_this);
	                });
	            } else if (_this.sourceType === TreeSourceType_1.TreeSourceType.Media) {
	                if (_this.id === -1 || _this.id === null || _this.id === undefined) {
	                    resolve(null);
	                    return _this;
	                }
	                var ent = TreeSourceHelper_1.TreeSourceHelper.getEntityType(_this.sourceType);
	                mediaResource.getById(_this.id, ent).then(function (item) {
	                    _this.name = item.name;
	                    _this.icon = item.icon;
	                    _this.url = mediaHelper.resolveFile(item);
	                    _this.sourceType = TreeSourceType_1.TreeSourceType.Content;
	                    if (_.isEmpty(_this.icon)) {
	                        _this.icon = _this.sourceType === TreeSourceType_1.TreeSourceType.Content ? "icon-umb-content" : "icon-picture";
	                    }
	                    resolve(_this);
	                });
	            } else {
	                resolve(_this);
	            }
	            return _this;
	        });
	        //TreeSourceModel.promises.push(promise);
	        return promise;
	    };
	    return Link;
	}();
	exports.Link = Link;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var cardController_1 = __webpack_require__(94);
	/**
	* @ngdoc controller
	* @name BlueLeet.CardSettingController
	* @function
	*
	* @description
	* Handles the card property editor settings.
	*/
	var CardSettingController = function () {
	    function CardSettingController($scope, $timeout, $rootScope, dialogService, notificationsService, slimsyResource) {
	        this.$inject = ["$scope", "$timeout", "$rootScope", "dialogService", "notificationsService", "slimsyResource"];
	        this.$scope = $scope;
	        this.$timeout = $timeout;
	        this.$rootScope = $rootScope;
	        this.dialogService = dialogService;
	        this.notificationsService = notificationsService;
	        this.slimsyResource = slimsyResource;
	        this.$scope.model.value = this.$scope.model.selectedImage || new cardController_1.CardImage(-1, "", "");
	    }
	    CardSettingController.prototype.selectImage = function () {
	        var self = this;
	        self.overlay = {
	            view: "mediapicker",
	            disableFolderSelect: true,
	            show: true,
	            hideHeader: true,
	            onlyImages: true,
	            showDetails: false,
	            multiPicker: false,
	            submit: function submit(model) {
	                var media = model.selectedImages[0];
	                var value = new cardController_1.CardImage(media.id, media.altText || self.$scope.model.value.altText, self.$scope.model.value.title);
	                value.url = media.image;
	                value.icon = media.icon;
	                self.$scope.model.value = value;
	                self.overlay.show = false;
	                self.overlay = null;
	            },
	            close: function close() {
	                self.overlay.show = false;
	                self.overlay = null;
	            }
	        };
	    };
	    CardSettingController.prototype.removeImage = function () {
	        var self = this;
	        self.$scope.model.value.url = "";
	        self.$scope.model.value.name = "";
	    };
	    return CardSettingController;
	}();
	exports.CardSettingController = CardSettingController;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	//import * as angular from "angular";
	//import * as jquery from "jquery";
	//import * as umbraco from "umbraco";
	var _ = __webpack_require__(74);
	var ImageNTextValue = function () {
	    function ImageNTextValue() {
	        this.image = {
	            url: "",
	            name: "",
	            alt: "",
	            title: ""
	        };
	        this.align = "left";
	        this.link = null;
	        this.title = "";
	        this.content = "";
	    }
	    return ImageNTextValue;
	}();
	exports.ImageNTextValue = ImageNTextValue;
	//export class ImageNTextController {
	//    private angularHelper;
	//    private $element;
	//    private dictionaryResource;
	//    private dialogService;
	//    private $timeout;
	//    private $scope;
	//    private setRteDropdown: boolean;
	//    public dirty: boolean = false;
	//    public rteConfig: IRteConfig = {
	//        toolbar: ["code", "removeformat", "undo", "redo", "cut", "copy", "styleselect"],
	//        stylesheets: ["RTE_Header"],
	//        dimensions: { height: 0 },
	//        maxImageSize: 0
	//    };
	//    public rteConfigContent: IRteConfig = {
	//        toolbar: [
	//            "code", "removeformat", "undo", "redo", "cut", "copy", "styleselect", "bold", "italic", "underline",
	//            "strikethrough", "alignleft", "aligncenter", "alignright", "alignjustify", "bullist", "numlist",
	//            "outdent", "indent", "link", "unlink", "hr", "subscript", "superscript", "charmap"
	//        ],
	//        stylesheets: ["RTE_2ColsContent"],
	//        dimensions: { height: 200 },
	//        maxImageSize: 500
	//    };
	//    $inject = ["$scope", "$timeout", "dialogService", "dictionaryResource", "$element", "angularHelper"];
	//    constructor($scope, $timeout, dialogService, dictionaryResource, $element, angularHelper) {
	//        this.angularHelper = angularHelper;
	//        this.$element = $element;
	//        this.dictionaryResource = dictionaryResource;
	//        this.dialogService = dialogService;
	//        this.$timeout = $timeout;
	//        this.$scope = $scope;
	//        if (!$scope.control.value) {
	//            $scope.control.value = new ImageNTextValue();
	//        }
	//        $scope.$watch("control.value",
	//            (n, o) => {
	//                if (n !== o) {
	//                    this.setDirty();
	//                }
	//            }, true);
	//    }
	//    openSetting() {
	//        const self = this;
	//        this.setLimitedRte();
	//        this.dialogService.open({
	//            template: "/App_Plugins/BlueLeet.UComponents/gridEditors/imageText/settings.html",
	//            dialogData: {
	//                model: self,
	//                dic: this.$scope.dictionary
	//            }
	//        });
	//    }
	//    setDirty() {
	//        if (!this.dirty) {
	//            this.dirty = true;
	//            var currentForm = this.angularHelper.getCurrentForm(this.$scope);
	//            currentForm.$setDirty();
	//        }
	//    }
	//    setLimitedRte(numberOfTry?: number) {
	//        this.$scope.diablelsTools = [
	//            "Align left", "Align right", "Justify", "Bold", "Italic", "Underline", "Strikethrough",
	//            "Align center", "Bullet list", "Decrease indent", "Increase indent", "Insert/edit link",
	//            "Remove link",
	//            "Insert horizontal rule", "Subscript", "Superscript", "Special character", "Numbered list"
	//        ];
	//        var buttons = $(this.$element).find(".bl-column-title .mce-btn-group button");
	//        if (buttons.length > 0) {
	//            this.setRteDropdown = true;
	//            this.removeRteControl(buttons);
	//        } else {
	//            numberOfTry++;
	//            if (numberOfTry < 20) {
	//                this.$timeout(() => {
	//                    this.setLimitedRte(numberOfTry);
	//                }, 500);
	//            }
	//        }
	//    }
	//    removeRteControl(buttons) {
	//        const self = this;
	//        $(buttons).each(function () {
	//            // ReSharper disable once SuspiciousThisUsage
	//            if ($(this).html().indexOf("italic") > -1) {
	//                // ReSharper disable once SuspiciousThisUsage
	//                $(this).remove();
	//            }
	//            // ReSharper disable once SuspiciousThisUsage
	//            if ($(this).html().indexOf("mce-caret") > -1) {
	//                // ReSharper disable once SuspiciousThisUsage
	//                $(this).click(() => {
	//                    self.$timeout(() => {
	//                        self.removeStyles();
	//                    }, 1);
	//                });
	//            }
	//        });
	//    }
	//    removeStyles() {
	//        if ($(".mce-menu").length && this.setRteDropdown) {
	//            this.setRteDropdown = false;
	//            $($(".mce-menu")[$(".mce-menu").length - 1])
	//                .find(".mce-stack-layout-item")
	//                .each(function () {
	//                    // ReSharper disable once SuspiciousThisUsage
	//                    if ($(this).html().indexOf("Color Header") === -1) {
	//                        // ReSharper disable once SuspiciousThisUsage
	//                        $(this).hide();
	//                    }
	//                });
	//        }
	//    }
	//    showSelection() {
	//        var textComponent = (<any>document).getElementById(this.$scope.control.$uniqueId);
	//        var selectedText = "";
	//        var startPos = 0;
	//        var textLength = 0;
	//        // IE version
	//        if ((<any>document).selection != undefined) {
	//            textComponent.focus();
	//            var sel = (<any>document).selection.createRange();
	//            selectedText = sel.text;
	//            startPos = sel.startOffset;
	//            textLength = selectedText.length;
	//        }
	//        // Mozilla version
	//        else if (textComponent.selectionStart != undefined) {
	//            startPos = textComponent.selectionStart;
	//            var endPos = textComponent.selectionEnd;
	//            selectedText = textComponent.value.substring(startPos, endPos);
	//            textLength = selectedText.length;
	//        }
	//        var hightlightFormat = "<span class='colorHeader'>#text#</span>";
	//        hightlightFormat = hightlightFormat.replace("#text#", selectedText);
	//        this.rep(this.$scope.control.value.title, startPos, hightlightFormat, textLength);
	//    }
	//    rep(str: string, index: number, newStr: string, textLength: number) {
	//        str = this.setCharAt(str, index, newStr, textLength);
	//        console.log(str);
	//        this.$scope.control.value.title = str;
	//    }
	//    setCharAt(str: string, index: number, chr: string, textLength: number) {
	//        if (index > str.length - 1) return str;
	//        return str.substr(0, index) + chr + str.substr(index + textLength);
	//    }
	//}
	function ImageNTextController($scope, $timeout, dialogService, dictionaryResource, $element, angularHelper) {
	    $scope.isDirty = false;
	    $scope.rteConfig = {
	        toolbar: ["code", "removeformat", "undo", "redo", "cut", "copy", "styleselect"],
	        stylesheets: ["RTE_Header"],
	        dimensions: { height: 0 },
	        maxImageSize: 0
	    };
	    $scope.rteConfigContent = {
	        toolbar: ["code", "removeformat", "undo", "redo", "cut", "copy", "styleselect", "bold", "italic", "underline", "strikethrough", "alignleft", "aligncenter", "alignright", "alignjustify", "bullist", "numlist", "outdent", "indent", "link", "unlink", "hr", "subscript", "superscript", "charmap"],
	        stylesheets: ["RTE_2ColsContent"],
	        dimensions: { height: 200 },
	        maxImageSize: 500
	    };
	    if (_.isEmpty($scope.control.value) || _.isNull($scope.control.value) || _.isUndefined($scope.control.value)) {
	        $scope.control.value = {
	            image: {
	                url: "",
	                name: "",
	                alt: "",
	                title: ""
	            },
	            align: "left",
	            link: null,
	            title: "",
	            content: ""
	        };
	    }
	    $scope.openSetting = function (control) {
	        $scope.setLimitedRTE();
	        dialogService.open({
	            template: "/App_Plugins/BlueLeet.UComponents/gridEditors/imageText/settings.html",
	            dialogData: {
	                model: control
	            }
	        });
	    };
	    $scope.setDirty = function () {
	        if (!$scope.isDirty) {
	            $scope.isDirty = true;
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setDirty();
	        }
	    };
	    $scope.$watch("control.value", function (n, o) {
	        if (n !== o) {
	            $scope.setDirty();
	        }
	    }, true);
	    $scope.setLimitedRTE = function (numberOfTry) {
	        $scope.diablelsTools = ["Align left", "Align right", "Justify", "Bold", "Italic", "Underline", "Strikethrough", "Align center", "Bullet list", "Decrease indent", "Increase indent", "Insert/edit link", "Remove link", "Insert horizontal rule", "Subscript", "Superscript", "Special character", "Numbered list"];
	        var buttons = $($element).find(".bl-column-title .mce-btn-group button");
	        if (buttons.length > 0) {
	            $scope.setRteDropdown = true;
	            $scope.removeRTEControl(buttons);
	        } else {
	            numberOfTry++;
	            if (numberOfTry < 20) {
	                $timeout(function () {
	                    $scope.setLimitedRTE(numberOfTry);
	                }, 500);
	            }
	        }
	    };
	    $scope.removeRTEControl = function (buttons) {
	        $(buttons).each(function () {
	            if ($(this).html().indexOf("italic") > -1) {
	                $(this).remove();
	            }
	            if ($(this).html().indexOf("mce-caret") > -1) {
	                $(this).click(function () {
	                    $timeout(function () {
	                        $scope.removeStyles();
	                    }, 1);
	                });
	            }
	        });
	    };
	    $scope.removeStyles = function () {
	        if ($(".mce-menu").length && $scope.setRteDropdown) {
	            $scope.setRteDropdown = false;
	            $($(".mce-menu")[$(".mce-menu").length - 1]).find(".mce-stack-layout-item").each(function () {
	                if ($(this).html().indexOf("Color Header") === -1) {
	                    $(this).hide();
	                }
	            });
	        }
	    };
	    $scope.showSelection = function () {
	        var textComponent = document.getElementById($scope.control.$uniqueId);
	        var selectedText = "";
	        var startPos = 0;
	        var textLength = 0;
	        // IE version
	        if (document.selection != undefined) {
	            textComponent.focus();
	            var sel = document.selection.createRange();
	            selectedText = sel.text;
	            startPos = sel.startOffset;
	            textLength = selectedText.length;
	        } else if (textComponent.selectionStart != undefined) {
	            startPos = textComponent.selectionStart;
	            var endPos = textComponent.selectionEnd;
	            selectedText = textComponent.value.substring(startPos, endPos);
	            textLength = selectedText.length;
	        }
	        var hightlightFormat = "<span class='colorHeader'>#text#</span>";
	        hightlightFormat = hightlightFormat.replace("#text#", selectedText);
	        rep($scope.control.value.title, startPos, hightlightFormat, textLength);
	    };
	    function rep(str, index, newStr, textLength) {
	        str = setCharAt(str, index, newStr, textLength);
	        console.log(str);
	        $scope.control.value.title = str;
	    }
	    function setCharAt(str, index, chr, textLength) {
	        if (index > str.length - 1) return str;
	        return str.substr(0, index) + chr + str.substr(index + textLength);
	    }
	}
	exports.ImageNTextController = ImageNTextController;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var angular = __webpack_require__(1);
	/**
	* @ngdoc controller
	* @name BlueLeet.ImageNTextSettingController
	* @function
	*
	* @description
	* Handles the image and text property editor settings.
	*/
	var ImageNTextSettingController = function () {
	    function ImageNTextSettingController($scope, $timeout, $rootScope, dialogService, notificationsService, slimsyResource) {
	        // public model: any;
	        this.$inject = ["$scope", "$timeout", "$rootScope", "dialogService", "notificationsService", "slimsyResource"];
	        this.$scope = $scope;
	        this.$timeout = $timeout;
	        this.$rootScope = $rootScope;
	        this.dialogService = dialogService;
	        this.notificationsService = notificationsService;
	        this.slimsyResource = slimsyResource;
	        this.$scope.model = $scope.dialogData.model;
	    }
	    ImageNTextSettingController.prototype.editLink = function () {
	        var self = this;
	        this.dialogService.linkPicker({
	            callback: function callback(data) {
	                self.$scope.model.value.link = {
	                    name: data.name,
	                    id: data.id,
	                    url: data.url,
	                    target: data.target
	                };
	            },
	            currentTarget: self.$scope.model.value.link
	        });
	    };
	    ImageNTextSettingController.prototype.selectImage = function () {
	        var self = this;
	        this.dialogService.mediaPicker({
	            startNodeId: -1,
	            multiPicker: false,
	            callback: function callback(data) {
	                if (data.contentTypeAlias === "Image") {
	                    self.slimsyResource.getImageUrl(data.id, 555, 334).then(function (response) {
	                        var url = angular.fromJson(response.data);
	                        self.$scope.model.value.image.url = url;
	                    });
	                    self.$scope.model.value.image.id = data.id;
	                    self.$scope.model.value.image.name = data.name;
	                } else {
	                    self.notificationsService.error("Fail", ": Please select image only.");
	                }
	            }
	        });
	    };
	    ImageNTextSettingController.prototype.removeImage = function () {
	        var self = this;
	        self.$scope.model.value.image.url = "";
	        self.$scope.model.value.image.name = "";
	    };
	    return ImageNTextSettingController;
	}();
	exports.ImageNTextSettingController = ImageNTextSettingController;

/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.ImageSettingController
	* @function
	*
	* @description
	* Handles the image property editor settings.
	*/
	function ImageSettingController($scope, $timeout, $rootScope, dialogService, notificationsService) {
	    $scope.model = $scope.dialogData.model;
	    $scope.editLink = function () {
	        dialogService.linkPicker({
	            callback: function callback(data) {
	                $scope.model.value.link = {
	                    name: data.name,
	                    id: data.id,
	                    url: data.url,
	                    target: data.target
	                };
	            },
	            currentTarget: $scope.model.value.link
	        });
	    };
	    $scope.selectImage = function () {
	        dialogService.mediaPicker({
	            startNodeId: -1,
	            multiPicker: false,
	            callback: function callback(data) {
	                // ToDo: configure image data types somewere ?
	                if (data.contentTypeAlias === "Image") {
	                    $scope.model.value.image.url = data.image;
	                    $scope.model.value.image.name = data.name;
	                } else {
	                    notificationsService.error("Fail", ": Please select image only.");
	                }
	            }
	        });
	    };
	}
	exports.ImageSettingController = ImageSettingController;

/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.QuoteController
	* @function
	*
	* @description
	* Handles the quote property editor.
	*/
	function QuoteController($scope, $timeout, $rootScope, $element, dialogService, angularHelper) {
	    $scope.isDirty = false;
	    if (!$scope.control.value) {
	        $scope.control.value = {
	            quotetext: "",
	            authorname: "",
	            authordescription: ""
	        };
	    }
	    $scope.setPlaceholder = function () {
	        if (!$scope.control.value.quotetext) {
	            $scope.control.value.quotetext = $scope.dictionary.placeholderquote;
	        }
	    };
	    $scope.configrte = {
	        "toolbar": [],
	        "stylesheets": ["RTE_Quote"], "dimensions": { "height": 500 }, "maxImageSize": 500
	    };
	    $scope.hideToolbar = function () {
	        $timeout(function () {
	            var element = $($element).find(".mce-toolbar");
	            element.remove();
	        }, 1000);
	    };
	    $scope.hideToolbar();
	    $scope.$watch("control.value", function (newValue, oldValue) {
	        if (newValue !== oldValue) {
	            $scope.setDirty();
	        }
	    }, true);
	    $scope.setDirty = function () {
	        if (!$scope.isDirty) {
	            $scope.isDirty = true;
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setDirty();
	        }
	    };
	}
	exports.QuoteController = QuoteController;

/***/ },
/* 124 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.SeparatorController
	* @function
	*
	* @description
	* Handles the separator property editor.
	*/
	function SeparatorController($scope) {}
	exports.SeparatorController = SeparatorController;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var ControllerBase_1 = __webpack_require__(88);
	/**
	* @ngdoc controller
	* @name MultiTreeSourceController
	* @function
	*
	* @description
	* Handles the multi tree source pre value editor.
	*/
	var ExternalLinkController = function (_super) {
	    __extends(ExternalLinkController, _super);
	    function ExternalLinkController($injector, $q, $scope, angularHelper, dialogService, entityResource, $log) {
	        var _this = this;
	        var beforeInitialize = function beforeInitialize() {
	            _this.$injector = $injector;
	            _this.$q = $q;
	            _this.dialogService = dialogService;
	            _this.entityResource = entityResource;
	            _this.$log = $log;
	            _this.target = { url: "", name: "", target: "" };
	            if (!_this.$scope.model) {
	                _this.$scope.model = {};
	            }
	            if (!_this.$scope.model.value) {
	                _this.$scope.model.value = {};
	            }
	            if (_this.$scope.model.target) {
	                jQuery.extend(true, _this.target, _this.$scope.model.target);
	            } else {
	                jQuery.extend(true, _this.target, _this.$scope.model.value);
	            }
	        };
	        var formSubmitting = function formSubmitting() {
	            jQuery.extend(true, _this.$scope.model.value, _this.target);
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, null, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    return ExternalLinkController;
	}(ControllerBase_1.ControllerBase);
	ExternalLinkController.$inject = ["$injector", "$q", "$scope", "angularHelper", "dialogService", "entityResource", "$log"];
	exports.ExternalLinkController = ExternalLinkController;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var ControllerBase_1 = __webpack_require__(88);
	var TreeSourceType_1 = __webpack_require__(117);
	var TreeSourceHelper_1 = __webpack_require__(99);
	var TreeSourceModel_1 = __webpack_require__(98);
	/**
	* @ngdoc controller
	* @name MultiTreeSourceController
	* @function
	*
	* @description
	* Handles the multi tree source pre value editor.
	*/
	var TreeSourceController = function (_super) {
	    __extends(TreeSourceController, _super);
	    function TreeSourceController($injector, $q, $scope, angularHelper, dialogService, entityResource, $log, iconHelper) {
	        var _this = this;
	        var beforeInitialize = function beforeInitialize() {
	            _this.$injector = $injector;
	            _this.$q = $q;
	            _this.dialogService = dialogService;
	            _this.entityResource = entityResource;
	            _this.$log = $log;
	            _this.iconHelper = iconHelper;
	            if (!_this.$scope.model) {
	                _this.$scope.model = {};
	            }
	            if (!_this.$scope.model.value) {
	                _this.$scope.model.value = {
	                    type: TreeSourceType_1.TreeSourceType.Content
	                };
	            }
	            if (_this.$scope.model.value.id && _this.$scope.model.value.type !== TreeSourceType_1.TreeSourceType.Member) {
	                var ent = TreeSourceHelper_1.TreeSourceHelper.getEntityType(_this.$scope.model.value.type);
	                entityResource.getById(_this.$scope.model.value.id, ent).then(function (item) {
	                    item.icon = iconHelper.convertFromLegacyIcon(item.icon);
	                    _this.$scope.node = item;
	                });
	            }
	        };
	        var formSubmitting = function formSubmitting() {
	            // this.$scope.model.value = this.renderModel;
	            // we always need to ensure we dont submit anything broken
	            if (_this.$scope.model.value.type === TreeSourceType_1.TreeSourceType.Member) {
	                _this.$scope.model.value.id = -1;
	                _this.$scope.model.value.query = "";
	            }
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, null, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    TreeSourceController.prototype.openContentPicker = function () {
	        var self = this;
	        var view = "treepicker";
	        var section = "content";
	        var treeAlias = "content";
	        var type = TreeSourceHelper_1.TreeSourceHelper.parseSourceType(self.$scope.model.value.type);
	        if (type === TreeSourceType_1.TreeSourceType.Member) {
	            view = "membergrouppicker";
	            section = "memberGroup";
	            treeAlias = "memberGroup";
	        } else if (type === TreeSourceType_1.TreeSourceType.Media) {
	            section = "media";
	            treeAlias = "media";
	        }
	        this.treePickerOverlay = {
	            view: view,
	            section: section,
	            treeAlias: treeAlias,
	            multiPicker: false,
	            show: true,
	            submit: function submit(model) {
	                var treeSource;
	                switch (type) {
	                    case TreeSourceType_1.TreeSourceType.Member:
	                        treeSource = new TreeSourceModel_1.TreeSourceModel(type, -1, model.selectedMemberGroup || model.selectedMemberGroups.join(), TreeSourceType_1.TreeSourceType[type], "");
	                        //treeSource = self.$injector.instantiate(TreeSourceModel,
	                        //    {
	                        //        type: type,
	                        //        id: -1,
	                        //        value: model.selectedMemberGroup || model.selectedMemberGroups.join(),
	                        //        query: "",
	                        //        sourceName: TreeSourceType[type]
	                        //    });
	                        break;
	                    default:
	                        treeSource = new TreeSourceModel_1.TreeSourceModel(type, model.selection[0].id, "", TreeSourceType_1.TreeSourceType[type], "");
	                        //treeSource = self.$injector.instantiate(TreeSourceModel,
	                        //    {
	                        //        type: type,
	                        //        id: model.selection[0].id,
	                        //        value: "",
	                        //        query: "",
	                        //        sourceName: TreeSourceType[type]
	                        //    });
	                        break;
	                }
	                self.populate(treeSource);
	                self.treePickerOverlay.show = false;
	                self.treePickerOverlay = null;
	            }
	        };
	    };
	    TreeSourceController.prototype.populate = function (item) {
	        this.clear();
	        this.$scope.node = item;
	        // Save everything
	        jQuery.extend(true, this.$scope.model.value, item);
	    };
	    TreeSourceController.prototype.clear = function () {
	        this.$scope.model.value.id = undefined;
	        this.$scope.node = undefined;
	        this.$scope.model.value.query = undefined;
	    };
	    return TreeSourceController;
	}(ControllerBase_1.ControllerBase);
	TreeSourceController.$inject = ["$injector", "$q", "$scope", "angularHelper", "dialogService", "entityResource", "$log", "iconHelper"];
	exports.TreeSourceController = TreeSourceController;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _promise = __webpack_require__(7);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var _ = __webpack_require__(74);
	var ControllerBase_1 = __webpack_require__(88);
	var TreeSourceModel_1 = __webpack_require__(98);
	var TreeSourceType_1 = __webpack_require__(117);
	/**
	* @ngdoc BlueLeet.IViewUpdate<TextBoxKeywordController>
	* @name DefaultUpdateBehavior
	* @function
	*
	* @description
	* Handles the 'Default' update mode.
	*/
	var DefaultUpdateBehavior = function () {
	    function DefaultUpdateBehavior($scope, entityResource, notificationsService, iconHelper) {
	        this.$scope = $scope;
	        this.entityResource = entityResource;
	        this.notificationsService = notificationsService;
	        this.iconHelper = iconHelper;
	    }
	    DefaultUpdateBehavior.prototype.update = function (vm, newValue, updateExisting) {
	        if (_.isUndefined(newValue)) {
	            return;
	        }
	        if (updateExisting) {
	            var item = _.find(vm.treeSources, function (x) {
	                return x.sourceName === newValue.sourceName;
	            });
	            this.updateTreeSource(item, newValue);
	        } else {
	            vm.treeSources.push(newValue);
	            vm.sourceName = "";
	        }
	    };
	    DefaultUpdateBehavior.prototype.updateTreeSource = function (existing, value) {
	        jQuery.extend(true, existing, value);
	    };
	    return DefaultUpdateBehavior;
	}();
	DefaultUpdateBehavior.$inject = ["$scope", "entityResource", "notificationsService"];
	exports.DefaultUpdateBehavior = DefaultUpdateBehavior;
	/**
	* @ngdoc controller
	* @name MultiTreeSourceController
	* @function
	*
	* @description
	* Handles the multi tree source pre value editor.
	*/
	var MultiTreeSourceController = function (_super) {
	    __extends(MultiTreeSourceController, _super);
	    function MultiTreeSourceController($injector, $scope, $q, angularHelper, notificationsService) {
	        var _this = this;
	        var updateBehaviorFactory = function updateBehaviorFactory() {
	            return $injector.instantiate(DefaultUpdateBehavior, { $scope: $scope });
	        };
	        var beforeInitialize = function beforeInitialize() {
	            _this.$injector = $injector;
	            _this.$q = $q;
	            _this.notificationsService = notificationsService;
	            _this.sourceName = "";
	            _this.sortableOptions = { handle: ".handle" };
	            _this.treeSources = [];
	            _this.promises = [];
	            if (_.isArray($scope.model.value) && !_.isEmpty($scope.model.value)) {
	                _.forEach($scope.model.value, function (item) {
	                    //var treeSource = $injector.instantiate(TreeSourceModel, { type: item.type, id: item.id, value: item.value, sourceName: item.sourceName, query: item.query });
	                    var treeSource = new TreeSourceModel_1.TreeSourceModel(item.type, item.id, item.value, item.sourceName, item.query);
	                    _this.promises.push(treeSource.updateLazyInfo());
	                    _this.treeSources.push(treeSource);
	                });
	            }
	        };
	        var formSubmitting = function formSubmitting() {
	            $scope.model.value = [];
	            _.forEach(_this.treeSources, function (item) {
	                $scope.model.value.push(item);
	            });
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, updateBehaviorFactory, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    MultiTreeSourceController.prototype.loadPromise = function () {
	        return _promise2.default.all(this.promises);
	    };
	    MultiTreeSourceController.prototype.openTreeSourcePicker = function (treeSourceModel, isEdit) {
	        var _this = this;
	        if (isEdit === void 0) {
	            isEdit = false;
	        }
	        var type = TreeSourceType_1.TreeSourceType[treeSourceModel.type];
	        this.overlay = {};
	        this.overlay.view = "/App_Plugins/BlueLeet.UComponents/preValueEditors/treesource/treesource.html";
	        this.overlay.multiPicker = "0";
	        this.overlay.startNodeId = treeSourceModel.id;
	        this.overlay.model = {};
	        this.overlay.model.value = {};
	        this.overlay.model.value.id = treeSourceModel.id;
	        this.overlay.model.value.type = type;
	        this.overlay.model.value.query = treeSourceModel.query;
	        this.overlay.show = true;
	        this.overlay.submit = function (model) {
	            // merge the changes.
	            jQuery.extend(true, treeSourceModel, model.value);
	            _this.update(treeSourceModel, isEdit);
	            _this.overlay.show = false;
	            _this.overlay = null;
	        };
	        this.overlay.close = function () {
	            _this.overlay.show = false;
	            _this.overlay = null;
	        };
	    };
	    MultiTreeSourceController.prototype.addTreeSource = function () {
	        // this is a new tree source check if it's valid.
	        if (_.isEmpty(this.sourceName)) {
	            this.notificationsService.warning("Source name is required", "The source name field must not be empty!");
	            return;
	        }
	        if (_.findWhere(this.treeSources, { sourceName: this.sourceName })) {
	            this.notificationsService.warning("Tree source exists", "'" + this.sourceName + "' already exists in the list!");
	            return;
	        }
	        //var treeSource = this.$injector.instantiate(TreeSourceModel, { type: TreeSourceType[TreeSourceType.Content], id: -1, value: "", sourceName: this.sourceName, query: "" });
	        var treeSource = new TreeSourceModel_1.TreeSourceModel(TreeSourceType_1.TreeSourceType.Content, -1, "", this.sourceName, "");
	        this.openTreeSourcePicker(treeSource);
	    };
	    MultiTreeSourceController.prototype.remove = function (index) {
	        this.treeSources.splice(index, 1);
	    };
	    ;
	    MultiTreeSourceController.prototype.edit = function (index) {
	        var treeSource = this.treeSources[index];
	        this.openTreeSourcePicker(treeSource, true);
	    };
	    MultiTreeSourceController.prototype.showHandle = function () {
	        return _.any(this.treeSources) && this.treeSources.length > 1;
	    };
	    return MultiTreeSourceController;
	}(ControllerBase_1.ControllerBase);
	MultiTreeSourceController.$inject = ["$injector", "$scope", "$q", "angularHelper", "notificationsService"];
	exports.MultiTreeSourceController = MultiTreeSourceController;

/***/ },
/* 128 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.AdvancedSeoPreviewController
	* @function
	*
	* @description
	* Handles the SEO preview property editor.
	*/
	function AdvancedSeoPreviewController($scope, $element, dialogService, $timeout, $rootScope, $compile, angularHelper, shareSeoDataService) {
	    shareSeoDataService.onPreviewUpdate($scope, function (context, data) {
	        $scope.title = data.title;
	        $scope.titleMaxCount = data.titleMaxCount;
	        $scope.description = data.description;
	        $scope.descriptionMaxCount = data.descriptionMaxCount;
	        $($element).find(".bl-module-advancedSeoPreview .preview-wrapper .preview-container").width($scope.titleMaxCount);
	    });
	    $scope.getUrl = function () {
	        return $scope.protocolAndHost() + $scope.getParentContent().urls[0];
	    };
	    $scope.protocolAndHost = function () {
	        var http = location.protocol;
	        var slashes = http.concat("//");
	        return slashes.concat(window.location.hostname);
	    };
	    $scope.getParentContent = function () {
	        var currentScope = $scope.$parent;
	        for (var i = 0; i < 150; i++) {
	            if (currentScope.content) {
	                return currentScope.content;
	            }
	            currentScope = currentScope.$parent;
	        }
	        return $scope.content;
	    };
	}
	exports.AdvancedSeoPreviewController = AdvancedSeoPreviewController;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../_references.d.ts"/>
	"use strict";
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc controller
	* @name BlueLeet.DropdownController
	* @function
	*
	* @description
	* Handles the drop-down property editor.
	*/
	var ControllerBase_1 = __webpack_require__(88);
	var DropdownController = function (_super) {
	    __extends(DropdownController, _super);
	    function DropdownController($scope, angularHelper, $q) {
	        var _this = this;
	        var beforeInitialize = function beforeInitialize() {
	            if ($scope.model.value === "") {
	                if ($scope.model.config.options.length) {
	                    _this.dropdown = $scope.model.config.options[0];
	                }
	            } else {
	                var index = 0;
	                $scope.model.config.options.filter(function (option) {
	                    if (option.value === $scope.model.value) {
	                        _this.dropdown = $scope.model.config.options[index];
	                    }
	                    index++;
	                });
	            }
	        };
	        var formSubmitting = function formSubmitting() {
	            _this.$scope.model.value = _this.dropdown.value;
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, null, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    return DropdownController;
	}(ControllerBase_1.ControllerBase);
	exports.DropdownController = DropdownController;

/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	/**
	* @ngdoc controller
	* @name BlueLeet.RobotsController
	* @function
	*
	* @description
	* Handles the robots property editor.
	*/
	function RobotsController($scope, $q, $routeParams, $element, angularHelper, localizationService) {
	    var vm = this;
	    vm.loading = true;
	    vm.isDirty = false;
	    vm.dictionary = {};
	    var checkbox = $($element).find(".bl-statebox");
	    $q.all([
	    // load localizations
	    localizationService.localize("blueleetRobots_allowAll").then(function (value) {
	        vm.dictionary.allowAll = value;
	    }), localizationService.localize("blueleetRobots_disallowAll").then(function (value) {
	        vm.dictionary.disallowAll = value;
	    }), localizationService.localize("blueleetRobots_automatic").then(function (value) {
	        vm.dictionary.automatic = value;
	    }), localizationService.localize("blueleetRobots_automaticDescription").then(function (value) {
	        vm.dictionary.automaticDescription = value;
	    })]).then(function () {
	        // initialization loading is complete
	        vm.loading = false;
	        initialize();
	    });
	    vm.setTo = function (option) {
	        $scope.model.value.Option = option;
	        vm.setCheckbox();
	        if (option === 0) {
	            $scope.model.value.Content = getDisallowAll();
	            vm.ShowContent = $scope.model.value.Content;
	        } else if (option === 1) {
	            $scope.model.value.Content = getAllowAll();
	            vm.ShowContent = $scope.model.value.Content;
	        } else if (option === 2) {
	            $scope.model.value.Content = getDisallowUmbraco();
	            vm.ShowContent = vm.dictionary.automaticDescription;
	        }
	        vm.setDirty();
	    };
	    vm.setCheckbox = function () {
	        $(checkbox).removeClass("bl-statebox-active");
	        $(checkbox[$scope.model.value.Option]).addClass("bl-statebox-active");
	    };
	    vm.setDirty = function () {
	        if (!vm.isDirty) {
	            vm.isDirty = true;
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setDirty();
	        }
	    };
	    function initialize() {
	        if (!$scope.model.value) {
	            $scope.model.value = {};
	            $scope.model.value.Option = 0;
	            $scope.model.value.Content = getDisallowAll();
	        }
	        vm.setTo($scope.model.value.Option);
	        vm.setCheckbox();
	    }
	    function getDisallowAll() {
	        return "User-agent: *" + "\n" + "Disallow: /";
	    }
	    function getDisallowUmbraco() {
	        return "User-agent: *" + "\n" + "Disallow: /aspnet_client/" + "\n" + "Disallow: /bin/" + "\n" + "Disallow: /config/" + "\n" + "Disallow: /css/" + "\n" + "Disallow: /data/" + "\n" + "Disallow: /install/" + "\n" + "Disallow: /masterpages/" + "\n" + "Disallow: /python/" + "\n" + "Disallow: /scripts/" + "\n" + "Disallow: /umbraco/" + "\n" + "Disallow: /umbraco_client/" + "\n" + "Disallow: /usercontrols/" + "\n" + "Disallow: /xslt/";
	    }
	    function getAllowAll() {
	        return "User-agent: *" + "\n" + "Allow: /";
	    }
	}
	exports.RobotsController = RobotsController;
	;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var ControllerBase_1 = __webpack_require__(88);
	/**
	* @ngdoc BlueLeet.IViewUpdate<TextBoxKeywordController>
	* @name DefaultUpdateBehavior
	* @function
	*
	* @description
	* Handles the 'Default' update mode.
	*/
	var DefaultUpdateBehavior = function () {
	    function DefaultUpdateBehavior($scope, shareSeoDataService, notificationsService) {
	        this.$scope = $scope;
	        this.shareSeoDataService = shareSeoDataService;
	        this.notificationsService = notificationsService;
	    }
	    DefaultUpdateBehavior.prototype.update = function (vm) {
	        if (vm.keyword) {
	            var match = vm.keywordList.filter(function (obj) {
	                return obj.toLowerCase() === vm.keyword.toLowerCase();
	            });
	            if (!match.length) {
	                var keyword = vm.keyword.toLowerCase();
	                if (vm.isSeoKeyword) {
	                    var objhasfound = this.shareSeoDataService.checkHasFoundKeyword(keyword);
	                    if (!objhasfound.title) {
	                        this.notificationsService.warning(vm.dictionary.warningHeadline, vm.dictionary.warningMessage.replace("{0}", "<strong>" + keyword + "</strong>").replace("{1}", "<strong>Title</strong>"));
	                    }
	                    if (!objhasfound.desc) {
	                        this.notificationsService.warning(vm.dictionary.warningHeadline, vm.dictionary.warningMessage.replace("{0}", "<strong>" + keyword + "</strong>").replace("{1}", "<strong>Description</strong>"));
	                    }
	                    this.shareSeoDataService.setKeywords(keyword);
	                }
	                vm.keywordList.push(keyword);
	                vm.keyword = "";
	            }
	        }
	    };
	    return DefaultUpdateBehavior;
	}();
	DefaultUpdateBehavior.$inject = ["$scope", "shareSeoDataService", "notificationsService"];
	exports.DefaultUpdateBehavior = DefaultUpdateBehavior;
	/**
	* @ngdoc controller
	* @name TextBoxKeywordController
	* @function
	*
	* @description
	* Handles the textbox Keyword property editor.
	*/
	var TextBoxKeywordController = function (_super) {
	    __extends(TextBoxKeywordController, _super);
	    function TextBoxKeywordController($injector, $scope, angularHelper, $q, localizationService, shareSeoDataService, notificationsService) {
	        var _this = this;
	        if (!$scope.model.value) {
	            $scope.model.value = "";
	        }
	        var updateBehaviorFactory = function updateBehaviorFactory() {
	            return $injector.instantiate(DefaultUpdateBehavior, { $scope: $scope });
	        };
	        var beforeInitialize = function beforeInitialize() {
	            _this.localizationService = localizationService;
	            _this.shareSeoDataService = shareSeoDataService;
	            _this.notificationsService = notificationsService;
	            _this.dictionary = {};
	            if (!$scope.model.value) {
	                _this.keywordList = [];
	            } else {
	                _this.keywordList = $scope.model.value.split(",");
	            }
	            //this.warnOnEmptySave = JSON.parse($scope.model.config.warnOnEmptySave) as boolean;
	            //this.isSeoDescription = JSON.parse($scope.model.config.isSeoDescription) as boolean;
	        };
	        var formSubmitting = function formSubmitting() {
	            _this.keyword = "";
	            if (_this.keywordList.length) {
	                $scope.model.value = _this.keywordList.join(",");
	            } else {
	                $scope.model.value = "";
	            }
	            if (!_this.isSeoKeyword) {
	                return;
	            }
	            if (!_this.keywordList.length) {
	                notificationsService.info(_this.dictionary.infoheadline, _this.dictionary.infomessage);
	            }
	            //else {
	            //    // ToDo: Register every seo editor label so we can say hey 'Title' do not contain keyword 'Keyword1'
	            //    this.keywordList.forEach(obj => {
	            //        var objhasfound = shareSeoDataService.checkHasFoundKeyword(obj);
	            //        if (!objhasfound.title) {
	            //            notificationsService.warning(this.dictionary.warningHeadline,
	            //                this.dictionary.warningMessage.replace("{0}", "<strong>" + obj + "</strong>")
	            //                    .replace("{1}", "<strong>Title</strong>"));
	            //        }
	            //        if (!objhasfound.desc) {
	            //            notificationsService.warning(this.dictionary.warningHeadline,
	            //                this.dictionary.warningMessage.replace("{0}", "<strong>" + obj + "</strong>")
	            //                    .replace("{1}", "<strong>Description</strong>"));
	            //        }
	            //    });
	            //}
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, updateBehaviorFactory, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    TextBoxKeywordController.prototype.initialize = function () {
	        var _this = this;
	        // Set configuration keys
	        this.maxCount = this.$scope.model.config.maxCount;
	        this.alignVertical = JSON.parse(this.$scope.model.config.alignVertical);
	        this.isSeoKeyword = JSON.parse(this.$scope.model.config.isSeoKeyword);
	        if (this.isSeoKeyword && this.keywordList.length) {
	            // Set SEO keywords to service.
	            this.keywordList.forEach(function (keyword) {
	                _this.shareSeoDataService.setKeywords(keyword);
	            });
	        }
	    };
	    TextBoxKeywordController.prototype.listenForDirty = function () {
	        var _this = this;
	        this.$scope.$watch("[vm.keywordList,vm.keyword]", function (newValue, oldValue) {
	            if (newValue[0] !== oldValue[0] || newValue[1] !== oldValue[1]) {
	                _this.setDirty();
	            }
	        }, true);
	    };
	    TextBoxKeywordController.prototype.load = function () {
	        var _this = this;
	        return this.$q.all([this.localizationService.localize("blueleetTextboxKeyWords_warningHeadline").then(function (value) {
	            _this.dictionary.warningHeadline = value;
	        }), this.localizationService.localize("blueleetTextboxKeyWords_warningMessage").then(function (value) {
	            _this.dictionary.warningMessage = value;
	        }), this.localizationService.localize("blueleetTextboxKeyWords_infoHeadline").then(function (value) {
	            _this.dictionary.infoHeadline = value;
	        }), this.localizationService.localize("blueleetTextboxKeyWords_infoMessage").then(function (value) {
	            _this.dictionary.infoMessage = value;
	        })]);
	    };
	    TextBoxKeywordController.prototype.remove = function (index) {
	        this.keywordList.splice(index, 1);
	    };
	    TextBoxKeywordController.prototype.process = function (event) {
	        this.keyword = this.keyword.split(" ").join("");
	        if (event.keyCode === 13) {
	            this.update();
	        }
	    };
	    TextBoxKeywordController.prototype.handleKeypress = function (event) {
	        if (event.keyCode === 32) {
	            event.preventDefault();
	        }
	    };
	    return TextBoxKeywordController;
	}(ControllerBase_1.ControllerBase);
	exports.TextBoxKeywordController = TextBoxKeywordController;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var ControllerBase_1 = __webpack_require__(88);
	/**
	* @ngdoc BlueLeet.IViewUpdate<TextareaWithCharacterCountController>
	* @name StrictUpdateBehavior
	* @function
	*
	* @description
	* Handles the 'Strict' update mode.
	*/
	var StrictUpdateBehavior = function () {
	    function StrictUpdateBehavior($scope, shareSeoDataService, textPixelService) {
	        this.$scope = $scope;
	        this.shareSeoDataService = shareSeoDataService;
	        this.textPixelService = textPixelService;
	    }
	    StrictUpdateBehavior.prototype.getRemainingCount = function (vm) {
	        if (vm.isPixelCount) {
	            return vm.maxCount - this.textPixelService.getWidth(this.$scope.model.value);
	        }
	        return vm.maxCount - this.$scope.model.value.length;
	    };
	    StrictUpdateBehavior.prototype.update = function (vm) {
	        if (vm.isSeoTitle) {
	            this.shareSeoDataService.setTitle(this.$scope.model.value, vm.maxCount);
	        } else if (vm.isSeoDescription) {
	            this.shareSeoDataService.setDescription(this.$scope.model.value, vm.maxCount);
	        }
	        // Calculate the remaining characters
	        vm.remainingCount = this.getRemainingCount(vm);
	        vm.isValid = true;
	        // Is our maximum limit reached?
	        if (vm.remainingCount <= 0) {
	            vm.remainingCount = 0;
	            this.$scope.model.value = this.$scope.model.value.substr(0, vm.maxCount);
	            return;
	        }
	        // Set the correct CSS class
	        if (vm.remainingCount > vm.maxCount) {
	            vm.isValid = false;
	        }
	    };
	    return StrictUpdateBehavior;
	}();
	StrictUpdateBehavior.$inject = ["$scope", "shareSeoDataService", "textPixelService"];
	exports.StrictUpdateBehavior = StrictUpdateBehavior;
	/**
	* @ngdoc BlueLeet.IViewUpdate<TextareaWithCharacterCountController>
	* @name DefaultUpdateBehavior
	* @function
	*
	* @description
	* Handles the 'Default' update mode.
	*/
	var DefaultUpdateBehavior = function () {
	    function DefaultUpdateBehavior($scope, shareSeoDataService, textPixelService) {
	        this.$scope = $scope;
	        this.shareSeoDataService = shareSeoDataService;
	        this.textPixelService = textPixelService;
	    }
	    DefaultUpdateBehavior.prototype.getRemainingCount = function (vm) {
	        if (vm.isPixelCount) {
	            return this.textPixelService.getWidth(this.$scope.model.value);
	        }
	        return this.$scope.model.value.length;
	    };
	    DefaultUpdateBehavior.prototype.update = function (vm) {
	        if (vm.isSeoTitle) {
	            this.shareSeoDataService.setTitle(this.$scope.model.value, vm.maxCount);
	        } else if (vm.isSeoDescription) {
	            this.shareSeoDataService.setDescription(this.$scope.model.value, vm.maxCount);
	        }
	        // Calculate the remaining characters
	        vm.remainingCount = this.getRemainingCount(vm);
	        vm.isValid = true;
	        // Set the correct CSS class
	        if (vm.remainingCount > vm.maxCount) {
	            vm.isValid = false;
	        }
	    };
	    return DefaultUpdateBehavior;
	}();
	DefaultUpdateBehavior.$inject = ["$scope", "shareSeoDataService", "textPixelService"];
	exports.DefaultUpdateBehavior = DefaultUpdateBehavior;
	/**
	* @ngdoc controller
	* @name TextAreaWithCharacterCountCountController
	* @function
	*
	* @description
	* Handles the textarea with character count property editor.
	*/
	var TextWithModeCountController = function (_super) {
	    __extends(TextWithModeCountController, _super);
	    function TextWithModeCountController($injector, $scope, angularHelper, $q, localizationService, shareSeoDataService, notificationsService) {
	        var _this = this;
	        if (!$scope.model.value) {
	            $scope.model.value = "";
	        }
	        var updateBehaviorFactory = function updateBehaviorFactory() {
	            var updateBehavior = DefaultUpdateBehavior;
	            _this.forceMaxCharacters = JSON.parse($scope.model.config.forceMaxCharacters);
	            if (_this.forceMaxCharacters) {
	                updateBehavior = StrictUpdateBehavior;
	            }
	            return $injector.instantiate(updateBehavior, { $scope: $scope });
	        };
	        var beforeInitialize = function beforeInitialize() {
	            _this.localizationService = localizationService;
	            _this.shareSeoDataService = shareSeoDataService;
	            _this.notificationsService = notificationsService;
	            _this.dictionary = {};
	            _this.warnOnEmptySave = JSON.parse($scope.model.config.warnOnEmptySave);
	            _this.isSeoTitle = JSON.parse($scope.model.config.isSeoTitle);
	            _this.isSeoDescription = JSON.parse($scope.model.config.isSeoDescription);
	            _this.isPixelCount = JSON.parse($scope.model.config.countWithPixels);
	            _this.displayAsTextbox = JSON.parse($scope.model.config.displayAsTextbox);
	        };
	        var formSubmitting = function formSubmitting() {
	            if (_this.remainingCount > _this.maxCount) {
	                _this.notificationsService.warning(_this.dictionary.warningHeadline, _this.dictionary.warningMessage);
	            }
	            if (!_this.$scope.model.value && _this.warnOnEmptySave) {
	                _this.notificationsService.info(_this.dictionary.infoHeadline, _this.dictionary.infoMessage);
	            }
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, updateBehaviorFactory, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    TextWithModeCountController.prototype.initialize = function () {
	        // Loads Default Max Count
	        this.maxCount = this.$scope.model.config.maxCount;
	        if (this.isSeoTitle) {
	            // Transfer model to shareData 
	            this.shareSeoDataService.setTitle(this.$scope.model.value, this.maxCount);
	        } else if (this.isSeoDescription) {
	            // Transfer model to shareData 
	            this.shareSeoDataService.setDescription(this.$scope.model.value, this.maxCount);
	        }
	        // Attempts to re-define Max Count by description text
	        if (this.description) {
	            var maxSetInDescription = this.description.match(/\d+/);
	            if (maxSetInDescription) {
	                var newMax = parseInt(maxSetInDescription[0]);
	                if (newMax > 0) {
	                    this.maxCount = Number(this.description.match(/\d+/)[0]);
	                }
	            }
	        }
	    };
	    TextWithModeCountController.prototype.load = function () {
	        var _this = this;
	        return this.$q.all([this.localizationService.localize("blueleetTextWithModeCount_warningHeadline").then(function (value) {
	            _this.dictionary.warningHeadline = value;
	        }), this.localizationService.localize("blueleetTextWithModeCount_warningMessage").then(function (value) {
	            var warningMessage = _this.$scope.model.config.warningMessage;
	            if (!warningMessage) {
	                warningMessage = _this.$scope.model.label;
	            }
	            _this.dictionary.warningMessage = value.replace("{0}", warningMessage);
	        }), this.localizationService.localize("blueleetTextWithModeCount_infoHeadline").then(function (value) {
	            _this.dictionary.infoHeadline = value;
	        }), this.localizationService.localize("blueleetTextWithModeCount_infoMessage").then(function (value) {
	            var infoMessage = _this.$scope.model.config.infoMessage;
	            if (!infoMessage) {
	                infoMessage = _this.$scope.model.label;
	            }
	            _this.dictionary.infoMessage = value.replace("{0}", infoMessage);
	        })]);
	    };
	    return TextWithModeCountController;
	}(ControllerBase_1.ControllerBase);
	TextWithModeCountController.$inject = ["$injector", "$scope", "angularHelper", "$q", "localizationService", "shareSeoDataService", "notificationsService"];
	exports.TextWithModeCountController = TextWithModeCountController;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var _ = __webpack_require__(74);
	/**
	* @ngdoc controller
	* @name BlueLeet.ToggleBoxAndSliderController
	* @function
	*
	* @description
	* Handles the toggle box and slider property editor.
	*/
	function ToggleBoxAndSliderController($scope, angularHelper, $timeout, $element) {
	    var vm = this;
	    var inverse = JSON.parse($scope.model.config.inverse);
	    var rangeSlider = $($element).find(".range-slider");
	    if (!$scope.model.value) {
	        $scope.model.value = {};
	    }
	    if ($scope.model.value.Enabled !== 1 && $scope.model.value.Enabled !== 0) {
	        // The value is corrupt set it to empty.
	        $scope.model.value = {};
	    }
	    var enabled = $scope.model.value.Enabled;
	    if (typeof enabled !== "number" && (_.isUndefined(enabled) || _.isEmpty(enabled))) {
	        var parseDefault = JSON.parse($scope.model.config.default);
	        $scope.model.value.Enabled = parseDefault ? 1 : 0;
	    } else {
	        var savedValue = JSON.parse($scope.model.value.Enabled);
	        if (inverse) {
	            $scope.model.value.Enabled = savedValue ? 0 : 1;
	        } else {
	            $scope.model.value.Enabled = savedValue ? 1 : 0;
	        }
	    }
	    if (!$scope.model.value.Priority) {
	        $scope.model.value.Priority = 0.5;
	    }
	    vm.setActive = function () {
	        if ($scope.model.value.Enabled === 1) {
	            vm.leftActive = true;
	            vm.rightActive = false;
	        } else {
	            vm.rightActive = true;
	            vm.leftActive = false;
	        }
	    };
	    vm.setActive();
	    vm.setTrue = function () {
	        vm.setDirty();
	        $scope.model.value.Enabled = 1;
	        vm.setActive();
	    };
	    vm.setFalse = function () {
	        vm.setDirty();
	        $scope.model.value.Enabled = 0;
	        vm.setActive();
	    };
	    vm.setDirty = function () {
	        if (!vm.isDirty) {
	            vm.isDirty = true;
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setDirty();
	        }
	    };
	    vm.rangeChange = function () {
	        $scope.model.value.Priority = vm.range / 10;
	    };
	    vm.initRange = function () {
	        if (rangeSlider) {
	            vm.range = $scope.model.value.Priority * 10;
	            $timeout(function () {
	                $(rangeSlider).rangeslider({
	                    polyfill: false
	                });
	            }, 500);
	        } else {
	            $timeout(function () {
	                vm.initRange();
	            }, 500);
	        }
	    };
	    vm.initRange();
	    // Listen for formSubmitting event (the result is callback used to remove the event subscription)
	    var unsubscribe = $scope.$on("formSubmitting", function () {
	        if (inverse) {
	            $scope.model.value.Enabled = $scope.model.value.Enabled ? 0 : 1;
	        }
	    });
	    // When the element is disposed we need to unsubscribe!
	    // NOTE: this is very important otherwise if this is part of a modal, the listener still exists because the dom 
	    // element might still be there even after the modal has been hidden.
	    $scope.$on("$destroy", function () {
	        unsubscribe();
	    });
	}
	exports.ToggleBoxAndSliderController = ToggleBoxAndSliderController;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var _ = __webpack_require__(74);
	/**
	* @ngdoc controller
	* @name BlueLeet.ToggleBoxController
	* @function
	*
	* @description
	* Handles the toggle box property editor.
	*/
	function ToggleBoxController($scope, angularHelper) {
	    var vm = this;
	    var inverse = JSON.parse($scope.model.config.inverse);
	    if ($scope.model.value !== "1" && $scope.model.value !== "0") {
	        // The value is corrupt set it to empty.
	        $scope.model.value = "";
	    }
	    if (_.isEmpty($scope.model.value)) {
	        var parseDefault = JSON.parse($scope.model.config.default);
	        $scope.model.value = parseDefault ? 1 : 0;
	    } else {
	        var savedValue = JSON.parse($scope.model.value);
	        if (inverse) {
	            $scope.model.value = savedValue ? 0 : 1;
	        } else {
	            $scope.model.value = savedValue ? 1 : 0;
	        }
	    }
	    vm.setActive = function () {
	        if ($scope.model.value === 1) {
	            vm.leftActive = true;
	            vm.rightActive = false;
	        } else {
	            vm.rightActive = true;
	            vm.leftActive = false;
	        }
	    };
	    vm.setActive();
	    vm.setTrue = function () {
	        vm.setDirty();
	        $scope.model.value = 1;
	        vm.setActive();
	    };
	    vm.setFalse = function () {
	        vm.setDirty();
	        $scope.model.value = 0;
	        vm.setActive();
	    };
	    vm.setDirty = function () {
	        if (!vm.isDirty) {
	            vm.isDirty = true;
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setDirty();
	        }
	    };
	    // Listen for formSubmitting event (the result is callback used to remove the event subscription)
	    var unsubscribe = $scope.$on("formSubmitting", function () {
	        if (inverse) {
	            $scope.model.value = $scope.model.value ? 0 : 1;
	        }
	    });
	    // When the element is disposed we need to unsubscribe!
	    // NOTE: this is very important otherwise if this is part of a modal, the listener still exists because the dom 
	    // element might still be there even after the modal has been hidden.
	    $scope.$on("$destroy", function () {
	        unsubscribe();
	    });
	}
	exports.ToggleBoxController = ToggleBoxController;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _create = __webpack_require__(79);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _setPrototypeOf = __webpack_require__(82);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var ControllerBase_1 = __webpack_require__(88);
	/**
	* @ngdoc controller
	* @name BlueLeet.ThemePickerController
	* @function
	*
	* @description
	* Handles the theme picker property editor.
	*/
	var ThemePickerController = function (_super) {
	    __extends(ThemePickerController, _super);
	    function ThemePickerController($injector, $scope, angularHelper, $q, themePickerResource) {
	        var _this = this;
	        var beforeInitialize = function beforeInitialize() {
	            _this.themePickerResource = themePickerResource;
	            _this.options = [];
	        };
	        var formSubmitting = function formSubmitting() {
	            if (_this.isDirty) {
	                _this.$scope.model.value = _this.renderModel;
	            }
	        };
	        _this = _super.call(this, $scope, $q, angularHelper, null, beforeInitialize, formSubmitting) || this;
	        return _this;
	    }
	    ThemePickerController.prototype.selectDropdown = function () {
	        this.setDirty();
	    };
	    ThemePickerController.prototype.loadPromise = function () {
	        var _this = this;
	        return this.themePickerResource.getAll().then(function (value) {
	            value.filter(function (option) {
	                _this.options.push({ key: option.key, value: option.value });
	            });
	            if (_this.$scope.model.value === "") {
	                if (value.length) {
	                    _this.renderModel = { key: _this.options[0].key, value: _this.options[0].value };
	                    _this.$scope.model.value = _this.options[0].key;
	                }
	            } else {
	                for (var index = 0; index < _this.options.length; index++) {
	                    var option = _this.options[index];
	                    if (option.key === _this.$scope.model.value) {
	                        _this.renderModel = { key: value[index].key, value: value[index].value };
	                        break;
	                    }
	                }
	            }
	        });
	    };
	    return ThemePickerController;
	}(ControllerBase_1.ControllerBase);
	ThemePickerController.$inject = ["$injector", "$scope", "angularHelper", "$q", "themePickerResource"];
	exports.ThemePickerController = ThemePickerController;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var angular = __webpack_require__(1);
	/**
	* @ngdoc controller
	* @name BlueLeet.ToggleBoxController
	* @function
	*
	* @description
	* Handles the macro list property editor.
	*/
	function MacroListController($scope, entityResource, assetsService) {
	    var macroExists = function macroExists(macroList, macroId) {
	        for (var i = 0; i < macroList.length; i++) {
	            if (macroList[i].id === macroId) {
	                return true;
	            }
	        }
	        return false;
	    };
	    var getMacroById = function getMacroById(macroId) {
	        for (var i = 0; i < $scope.macros.length; i++) {
	            if ($scope.macros[i].id === macroId) {
	                return $scope.macros[i];
	            }
	        }
	        return null;
	    };
	    $scope.macros = [];
	    $scope.selectedMacros = [];
	    $scope.toggleMacro = function (macro) {
	        if ($scope.selectedMacros.indexOf(macro) === -1) {
	            $scope.selectedMacros.push(macro);
	        } else {
	            $scope.selectedMacros.splice($scope.selectedMacros.indexOf(macro), 1);
	        }
	    };
	    $scope.isSelected = function (macro) {
	        var indexOf = macroExists($scope.selectedMacros, macro.id);
	        return indexOf;
	    };
	    $scope.sync = function () {
	        var macroList = function macroList() {
	            var tmpMacroList = [];
	            for (var i = 0; i < $scope.selectedMacros.length; i++) {
	                var item = $scope.selectedMacros[i];
	                tmpMacroList.push({ id: item.id });
	            }
	            return tmpMacroList;
	        };
	        $scope.model.value = macroList();
	    };
	    //listen for formSubmitting event (the result is callback used to remove the event subscription)
	    var unsubscribe = $scope.$on("formSubmitting", function () {
	        $scope.sync();
	    });
	    //when the element is disposed we need to unsubscribe!
	    // NOTE: this is very important otherwise if this is part of a modal, the listener still exists because the dom 
	    // element might still be there even after the modal has been hidden.
	    $scope.$on("$destroy", function () {
	        unsubscribe();
	    });
	    //get the macro list
	    entityResource.getAll("Macro", null).then(function (data) {
	        $scope.macros = data;
	        if (angular.isArray($scope.model.value)) {
	            // Select previusly saved macros.
	            for (var i = 0; i < $scope.model.value.length; i++) {
	                var item = $scope.model.value[i];
	                // We don't want to select macros that no longer exists
	                if (macroExists(data, item.id)) {
	                    var macro = getMacroById(item.id);
	                    $scope.selectedMacros.push(macro);
	                }
	            }
	        }
	    });
	}
	exports.MacroListController = MacroListController;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/// <reference path="../../_references.d.ts"/>
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(138);
	/**
	* @ngdoc controller
	* @name BlueLeet.DropdownController
	* @function
	*
	* @description
	* Handles the drop-down property editor.
	*/
	function KeyValuePairEditorController($rootScope, $scope, $element, notificationsService, angularHelper) {
	    var el = $($element);
	    // Check if the editor is in an overlay.
	    var overlayEl = el.parents(".umb-overlay.umb-overlay-right");
	    if (overlayEl.length && overlayEl.width() <= 500) {
	        // increase the width so the editor fit.
	        overlayEl.width("726px");
	    }
	    // setup the default configure
	    var config = {
	        keyTitle: "Key",
	        valueTitle: "Value",
	        useTextarea: false,
	        allowDuplicateKeys: false
	    };
	    if (!angular.isUndefined($scope.model.config) && $scope.model.config !== null) {
	        // for some reason the boolean saves 1 and 0 and 1 results into true but when it is 0 it results in 0 and no false...
	        if ($scope.model.config.useTextarea == 0) {
	            $scope.model.config.useTextarea = false;
	        } else if ($scope.model.config.useTextarea == 1) {
	            $scope.model.config.useTextarea = true;
	        }
	        if ($scope.model.config.allowDuplicateKeys == 0) {
	            $scope.model.config.allowDuplicateKeys = false;
	        } else if ($scope.model.config.allowDuplicateKeys == 1) {
	            $scope.model.config.allowDuplicateKeys = true;
	        }
	        // map the user configure
	        angular.extend(config, $scope.model.config);
	    }
	    // map back to the model
	    $scope.model.config = config;
	    if (!$scope.model.value) {
	        $scope.model.value = [];
	    } else {
	        // Backwards Compatibility
	        for (var i = 0; i < $scope.model.value.length; i++) {
	            if ($scope.model.value[i].value) {
	                $scope.model.value[i].Value = $scope.model.value[i].value;
	                delete $scope.model.value[i].value;
	            }
	            if ($scope.model.value[i].key) {
	                $scope.model.value[i].Key = $scope.model.value[i].key;
	                delete $scope.model.value[i].key;
	            }
	        }
	    }
	    $scope.newKey = '';
	    $scope.newValue = '';
	    $scope.hasError = false;
	    $scope.tmpValue = [];
	    $scope.edit = function (idx) {
	        for (var i = 0; i < $scope.model.value.length; i++) {
	            $scope.model.value[i].edit = false;
	        }
	        $scope.model.value[idx].edit = true;
	        setDirty();
	    };
	    $scope.cancelEdit = function (idx) {
	        $scope.model.value[idx].edit = false;
	        setPristine();
	    };
	    $scope.delete = function (idx) {
	        var removedItem = $scope.model.value.splice(idx, 1)[0];
	        for (var i = 0; i < $scope.tmpValue.length; i++) {
	            if ($scope.tmpValue[i].Key === removedItem.Key) {
	                // The removed item is unsaved do nothing.
	                return;
	            }
	        }
	        // If we get here this item is not unsaved.
	        $scope.hasChanges = true;
	        setDirty();
	    };
	    $scope.add = function () {
	        if ($scope.newKey == "") {
	            $scope.hasError = true;
	            notificationsService.error("Error", $scope.model.config.keyTitle + " can't be empty!");
	        } else if ($scope.model.config.allowDuplicateKeys == false && keyExists($scope.newKey)) {
	            $scope.hasError = true;
	            notificationsService.error("Error", $scope.model.config.keyTitle + " already exists! (" + $scope.newKey + ")");
	        } else {
	            $scope.hasChanges = true;
	            setDirty();
	            var newModel = new function () {
	                this.Key = $scope.newKey;
	                this.Value = $scope.newValue;
	            }();
	            $scope.model.value.push(newModel);
	            $scope.tmpValue.push(newModel);
	            // reset
	            $scope.newKey = '';
	            $scope.newValue = '';
	        }
	    };
	    //defines the options for the jquery sortable    
	    $scope.sortableOptions = {
	        items: ".ui-sortable",
	        cursor: "move"
	    };
	    function setPristine() {
	        if ($scope.hasChanges == false) {
	            var currentForm = angularHelper.getCurrentForm($scope);
	            currentForm.$setPristine();
	        }
	    }
	    function setDirty() {
	        var currentForm = angularHelper.getCurrentForm($scope);
	        if (currentForm.$dirty === false) {
	            currentForm.$setDirty();
	        }
	    }
	    function keyExists(key) {
	        for (var i = 0; i < $scope.model.value.length; i++) {
	            if ($scope.model.value[i].Key === key) {
	                return true;
	            }
	        }
	        return false;
	    }
	}
	exports.KeyValuePairEditorController = KeyValuePairEditorController;

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
]);
//# sourceMappingURL=BlueLeet.UComponents.js.map