webpackJsonp([0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/profile/profile.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "/*!\r\n * This file contains references to the main sass file for use outside.\r\n */\n/*!\r\n *  Color settings\r\n */\n/*!\r\n *  Global settings.\r\n */\n/*!\r\n *  Font awsome settings\r\n */\n/*!\r\n *  Ionicons settings\r\n */\n/*!\r\n *  Bootstrap settings\r\n */\n/*!\r\n *  Navbar settings.\r\n */\n/*!\r\n *  Widget settings.\r\n */\n/*!\r\n *  Widget search settings.\r\n */\n/*!\r\n *  Tools base (this should get imported before any other tool)\r\n */\n/*!\r\n *  Asset helper tools\r\n *  Source: https://css-tricks.com/snippets/sass/simple-asset-helper-functions/\r\n */\n/*!\r\n *  Mixins & functions\r\n */\nprofile-panel {\n  display: block;\n  word-wrap: break-word;\n}\n\nprofile-panel h3 {\n  font-size: 15px;\n  line-height: 15px;\n}\n\nprofile-panel .profile h3 {\n  padding: 0 5px;\n}\n\nprofile-panel .profile-image {\n  width: 100%;\n  border: 5px solid white;\n  outline: 1px solid #dbdee0;\n}\n\nprofile-panel ul.profile-details {\n  margin-top: 10px;\n  padding: 0 5px;\n  list-style: none;\n  color: #7c848d;\n}\n\nprofile-panel ul.profile-details li {\n  position: relative;\n  margin: 0 0 20px 0;\n  padding-left: 22px;\n}\n\nprofile-panel ul.profile-details li div {\n  color: #b2b8bd;\n}\n\nprofile-panel ul.profile-details li div i {\n  position: absolute;\n  top: 4px;\n  left: -5px;\n  color: #ced1d4;\n  width: 20px;\n  text-align: center;\n}\n\nprofile-panel ul.friends-list {\n  padding: 0;\n  list-style: none;\n}\n\nprofile-panel ul.friends-list li {\n  width: auto;\n  min-width: 170px;\n  margin-bottom: 20px;\n  border: 1px solid #e9ebec;\n  background: #f7f7f8;\n  float: left;\n  padding: 5px;\n  margin: 0 0 5px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nprofile-panel ul.friends-list li .avatar {\n  float: left;\n  margin-right: 10px;\n  width: 40px;\n}\n\nprofile-panel ul.friends-list li a {\n  display: inline-block;\n  font-size: 22px;\n  line-height: 8px;\n  text-decoration: none;\n  color: #b2b8bd;\n}\n\nprofile-panel ul.friends-list li .avatar img {\n  width: 40px;\n}\n\nprofile-panel .pane-photos a {\n  display: inline-block;\n}\n\nprofile-panel .pane-photos .widget-card-list .widget-card .card-content .btn {\n  opacity: 0.9;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5), 0px 2px 3px rgba(0, 0, 0, 0.5);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-bottom: 0;\n  background-origin: border-box;\n  background-size: 100%;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.25)), linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0));\n}\n\nprofile-panel .pane-photos .widget-card-list .widget-card,\nprofile-panel .pane-photos .widget-card-list .widget-card .card {\n  position: relative;\n  display: inline-block;\n}\n\nprofile-panel .pane-photos .widget-card-list .widget-card .card-content,\nprofile-panel .pane-photos .card-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo {\n  width: 100%;\n  text-align: center;\n  font-weight: normal;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-row {\n  display: block;\n  position: relative;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-body {\n  margin: 0 auto;\n  border-radius: 4px;\n  background-color: white;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-body picture {\n  display: block;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-body picture .img-fluid {\n  display: inline;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-body .inline-editor {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 5px;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-body .editor {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 5px;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-nav {\n  display: block;\n  pointer-events: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-nav .nav-prev,\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-nav .nav-next {\n  height: 100%;\n  cursor: pointer;\n  display: block;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  transition: opacity 0.6s;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-nav .nav-prev:hover,\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-nav .nav-next:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-nav .nav-prev {\n  background: url(" + __webpack_require__("./src/typescript/components/profile/prev.png") + ") left 48% no-repeat;\n  width: 34%;\n  left: 0;\n  float: left;\n}\n\nprofile-panel .pane-photos .widget-card-list .modal-photo .modal-nav .nav-next {\n  background: url(" + __webpack_require__("./src/typescript/components/profile/next.png") + ") right 48% no-repeat;\n  width: 64%;\n  right: 0;\n  float: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/typescript/components/profile/profile.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./src/typescript/components/profile/profile.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./profile.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./profile.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=7ee0c77d6d45c783c6ba.0.chunk.js.map