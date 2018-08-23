webpackJsonp([1],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/notification/notification-wall.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "participants {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\nparticipants .list-group {\n  margin-bottom: 0;\n}\n\nparticipants .list-group-item:first-child {\n  border: none;\n}\n\nparticipants .list-group-item:last-child {\n  border: none;\n}\n\nparticipants .list-group-item {\n  border: none;\n  /*border-bottom: 1px solid #ddd;\r\n        border-top: 1px solid #ddd;*/\n  height: auto;\n  min-height: 120px;\n}\n\nparticipants .participant .participant-row {\n  margin-bottom: 10px;\n}\n\nparticipants .participant .participant-row:last-child {\n  margin-bottom: 0;\n}\n\nparticipants .participant .profile-url {\n  margin-right: 1em;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/typescript/components/notification/notification-wall.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/notification/notification-wall.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./notification-wall.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./notification-wall.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=d7aecb10847a0f7a0766.1.chunk.js.map