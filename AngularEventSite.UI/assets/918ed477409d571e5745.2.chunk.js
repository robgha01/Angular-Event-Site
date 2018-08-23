webpackJsonp([2],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/image-wall/image-wall.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "/*!\r\n * This file contains references to the main sass file for use outside.\r\n */\n/*!\r\n *  Color settings\r\n */\n/*!\r\n *  Global settings.\r\n */\n/*!\r\n *  Font awsome settings\r\n */\n/*!\r\n *  Bootstrap settings\r\n */\n/*!\r\n *  Navbar settings.\r\n */\n/*!\r\n *  Widget settings.\r\n */\n/*!\r\n *  Widget search settings.\r\n */\n/*!\r\n *  Tools base (this should get imported before any other tool)\r\n */\n/*!\r\n *  Asset helper tools\r\n *  Source: https://css-tricks.com/snippets/sass/simple-asset-helper-functions/\r\n */\n/*!\r\n *  Mixins & functions\r\n */\nimage-wall .toolbox-row {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-flow: row;\n      flex-flow: row;\n  margin: 5px;\n}\n\nimage-wall .toolbox-row .btn {\n  font-weight: bold;\n}\n\nimage-wall .toolbox-row .toolbox-label {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin: 5px;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\nimage-wall .toolbox-row .form-array {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-flow: wrap;\n      flex-flow: wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/typescript/components/image-wall/image-wall.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/image-wall/image-wall.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./image-wall.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./image-wall.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=918ed477409d571e5745.2.chunk.js.map