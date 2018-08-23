webpackJsonpUCodeFirst([0,2,3],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="./_references.d.ts"/>
	/*! BlueLeet
	 * http://blueleet.com/
	 * Copyright (c) 2016 BlueLeet;
	 * Licensed
	 */
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(1);
	// Import Resources
	var settings_resource_1 = __webpack_require__(2);
	angular.module("umbraco.resources").service("blSettingsResource", settings_resource_1.SettingsResource);
	// Import Controllers
	var ucodeFirstDashboard_controller_1 = __webpack_require__(3);
	var manage_controller_1 = __webpack_require__(4);
	angular.module("umbraco").controller("BlueLeet.Backoffice.UCodeFirstDashboardController", ucodeFirstDashboard_controller_1.UCodeFirstDashboardController);
	angular.module("umbraco").controller("BlueLeet.Backoffice.UCodeFirstManageController", manage_controller_1.UCodeFirstManageController);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = angular;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	/// <reference path="../_references.d.ts"/>
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc helper
	* @name BlueLeet.SettingsResource
	* @function
	*
	* @description
	* Defines a settings resource.
	*/
	var SettingsResource = /** @class */function () {
	    function SettingsResource($http) {
	        this.$inject = ["$http"];
	        this.$http = $http;
	    }
	    SettingsResource.prototype.getUCodeFirstVersion = function () {
	        return this.$http.get(Umbraco.Sys.ServerVariables.ucodeFirstSection.baseApiUrl + "GetUCodeFirstVersion");
	    };
	    return SettingsResource;
	}();
	exports.SettingsResource = SettingsResource;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc helper
	* @name BlueLeet.UCodeFirstDashboardController
	* @function
	*
	* @description
	* Defines a dashboard controller for UCodeFirst.
	*/
	var UCodeFirstDashboardController = /** @class */function () {
	    function UCodeFirstDashboardController($routeParams, blSettingsResource) {
	        var _this = this;
	        this.$routeParams = $routeParams;
	        this.blSettingsResource = blSettingsResource;
	        this.ucodeFirstVersion = null;
	        this.loaded = false;
	        this.$inject = ["$routeParams", "blSettingsResource"];
	        blSettingsResource.getUCodeFirstVersion().success(function (response) {
	            _this.ucodeFirstVersion = response;
	            _this.loaded = true;
	        });
	    }
	    return UCodeFirstDashboardController;
	}();
	exports.UCodeFirstDashboardController = UCodeFirstDashboardController;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	/// <reference path="../_references.d.ts"/>
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* @ngdoc helper
	* @name BlueLeet.UCodeFirstDashboardController
	* @function
	*
	* @description
	* Defines the manage section controller.
	*/
	var UCodeFirstManageController = /** @class */function () {
	    function UCodeFirstManageController($routeParams) {
	        this.$routeParams = $routeParams;
	        this.$inject = ["$routeParams"];
	        // Get the ID from the route parameters (URL)
	        var id = $routeParams.id;
	    }
	    return UCodeFirstManageController;
	}();
	exports.UCodeFirstManageController = UCodeFirstManageController;
	//angular.module("umbraco").controller("BlueLeet.Backoffice.UCodeFirstManageController", ($scope, $routeParams, $http) => {
	//    // Get the ID from the route parameters (URL)
	//    var id = $routeParams.id;
	//});

/***/ })
]);
//# sourceMappingURL=BlueLeet.UCodeFirst.js.map