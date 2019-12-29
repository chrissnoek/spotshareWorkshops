/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/css/style.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./src/css/style.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"@tailwind base;\\n@tailwind components;\\n@tailwind utilities;\\nh1 {\\n  font-size: 1.5rem; }\\n\\nh2 {\\n  font-size: 1.25rem; }\\n\\nh3 {\\n  font-size: 1.125rem; }\\n\\na {\\n  color: #3182ce;\\n  text-decoration: underline; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_services_httpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/services/httpService */ \"./src/services/httpService.js\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n // const initialPhotos = [\n//   {\n//     id: 8046,\n//     memberId: 4790,\n//     locationId: 2289,\n//     eventId: 1,\n//     created: new Date(\"2018-08-15\"),\n//     title: \"I love Zeeland\",\n//     description: \"I love Zeeland\",\n//     date: new Date(\"2019-09-24T19:00:26\"),\n//     likes: 10,\n//     likesThisWeek: 1,\n//     exif: {\n//       brand: \"Canon\",\n//       apeture: \"16\",\n//       shutterspeed: \"8/1\",\n//       ISO: \"100\",\n//       camera: \"Canon EOS 6D Mark II\"\n//     },\n//     image: {\n//       imageSmall: \"\",\n//       imageLarge: \"\",\n//       imageThumbnail: \"\"\n//     }\n//   },\n//   {\n//     id: 8047,\n//     memberId: 4790,\n//     locationId: 2289,\n//     eventId: 1,\n//     created: new Date(\"2018-08-15\"),\n//     title: \"I love Zeeland\",\n//     description: \"I love Zeeland\",\n//     date: new Date(\"2019-09-24T19:00:26\"),\n//     likes: 10,\n//     likesThisWeek: 1,\n//     exif: {\n//       brand: \"Canon\",\n//       apeture: \"16\",\n//       shutterspeed: \"8/1\",\n//       ISO: \"100\",\n//       camera: \"Canon EOS 6D Mark III\"\n//     },\n//     image: {\n//       imageSmall: \"\",\n//       imageLarge: \"\",\n//       imageThumbnail: \"\"\n//     }\n//   }\n// ];\n// a regex to see if a value is a date\n\nvar dateRegex = new RegExp(\"^\\\\d\\\\d\\\\d\\\\d-\\\\d\\\\d-\\\\d\\\\d\"); // a reviver to pass to the JSON parse function in fetchdata() to return the isoString to a date type\n\nfunction jsonDateReviver(key, value) {\n  if (dateRegex.test(value)) return new Date(value);\n  return value;\n}\n\nvar WorkshopFilter =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(WorkshopFilter, _Component);\n\n  function WorkshopFilter() {\n    _classCallCheck(this, WorkshopFilter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(WorkshopFilter).apply(this, arguments));\n  }\n\n  _createClass(WorkshopFilter, [{\n    key: \"render\",\n    //asdf\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is a placholder for the WorkshopFilter\");\n    }\n  }]);\n\n  return WorkshopFilter;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction WorkshopView(props) {\n  var workshop = props.workshop;\n  console.log(workshop);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"workshopCard rounded relative overflow-hidden my-2\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"relative rounded\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\",\n    className: \"absolute w-full h-full z-10\",\n    title: \"Bekijk foto Roermond oude stad van Adelheid- smitt\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: workshop.images.imageWatermark,\n    className: \"object-cover  w-full h-48  block\",\n    alt: \"Foto Roermond oude stad van Adelheid- smitt\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"workshopContent p-4 absolute bottom-0 left-0\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"text-white\"\n  }, // convert date type to a readable date string\n  workshop.date.toDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"workshopInfo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"text-white\"\n  }, workshop.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"text-white\"\n  }, workshop.place)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"clear\"\n  })))));\n}\n\nfunction WorkshopCarousel(props) {\n  var workshops = props.workshops.map(function (workshop) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkshopView, {\n      key: workshop.id,\n      workshop: workshop\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, workshops);\n}\n\nvar WorkshopAdd =\n/*#__PURE__*/\nfunction (_Component2) {\n  _inherits(WorkshopAdd, _Component2);\n\n  function WorkshopAdd() {\n    var _this;\n\n    _classCallCheck(this, WorkshopAdd);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(WorkshopAdd).call(this));\n\n    _this.handleInputChange = function (e) {\n      var target = event.target;\n      var value = target.type === \"checkbox\" ? target.checked : target.value;\n      var name = target.name;\n\n      _this.setState(_defineProperty({}, name, value));\n    };\n\n    _this.state = {};\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    _this.fileInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    return _this;\n  }\n\n  _createClass(WorkshopAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      var form, data, uploadedFile, _ref, resources, imageThumb, imageOriginal, imageWatermark, workshop;\n\n      return regeneratorRuntime.async(function handleSubmit$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              form = document.forms.workshopAdd;\n              data = new FormData();\n              uploadedFile = this.fileInput.current.files[0];\n              data.append(\"workshopImage\", uploadedFile);\n              console.log(window.ENV);\n              _context.next = 8;\n              return regeneratorRuntime.awrap(_src_services_httpService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('http://localhost:3000/api/images/upload', data));\n\n            case 8:\n              _ref = _context.sent;\n              resources = _ref.data;\n              console.log(resources); //0 = thumb, 1 == watermakrk 2 == original\n\n              imageThumb = \"https://dkotwt30gflnm.cloudfront.net/\" + resources.transforms.find(function (elem) {\n                return elem.id === \"thumbnail\";\n              }).key;\n              imageOriginal = \"https://dkotwt30gflnm.cloudfront.net/\" + resources.transforms.find(function (elem) {\n                return elem.id === \"original\";\n              }).key;\n              imageWatermark = \"https://dkotwt30gflnm.cloudfront.net/\" + resources.transforms.find(function (elem) {\n                return elem.id === \"watermark\";\n              }).key;\n              workshop = {\n                title: form.title.value,\n                place: form.place.value,\n                date: new Date(form.date.value).toISOString(),\n                description: form.desc.value,\n                images: {\n                  imageThumb: imageThumb,\n                  imageOriginal: imageOriginal,\n                  imageWatermark: imageWatermark\n                }\n              };\n              this.props.createWorkshop(workshop);\n              form.title.value = \"\";\n              form.place.value = \"\";\n              form.date.value = \"\";\n              form.desc.value = \"\";\n\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, null, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        name: \"workshopAdd\",\n        encType: \"multipart/form-data\",\n        onSubmit: this.handleSubmit,\n        onChange: this.handleChange,\n        className: \"block py-3 px-4 border border-gray-300 rounded\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"my-2\"\n      }, \"Add workshop\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"title\",\n        placeholder: \"Titel\",\n        className: \"border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"place\",\n        placeholder: \"Plaats\",\n        className: \"border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"date\",\n        name: \"date\",\n        placeholder: \"Datum\",\n        className: \"border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"file\",\n        name: \"workshopImage\",\n        ref: this.fileInput,\n        className: \"border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"desc\",\n        placeholder: \"Beschrijving\",\n        className: \"border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"block px-3 py- my-2 bg-blue-600 text-white rounded text-l\"\n      }, \"Add\"));\n    }\n  }]);\n\n  return WorkshopAdd;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction graphQLFetch(query) {\n  var variables,\n      response,\n      body,\n      result,\n      error,\n      details,\n      _args2 = arguments;\n  return regeneratorRuntime.async(function graphQLFetch$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          variables = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};\n          _context2.prev = 1;\n          console.log(window.ENV.UI_API_ENDPOINT);\n          _context2.next = 5;\n          return regeneratorRuntime.awrap(fetch(window.ENV.UI_API_ENDPOINT, {\n            method: \"POST\",\n            headers: {\n              \"Content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n              query: query,\n              variables: variables\n            })\n          }));\n\n        case 5:\n          response = _context2.sent;\n          _context2.next = 8;\n          return regeneratorRuntime.awrap(response.text());\n\n        case 8:\n          body = _context2.sent;\n          result = JSON.parse(body, jsonDateReviver); // alert the error message whenthe result is containing erros\n\n          if (result.errors) {\n            error = result.errors[0];\n\n            if (error.extensions.code == \"BAD_USER_INPUT\") {\n              console.log(error);\n              details = error.extensions.exception.errors.join(\"\\n \");\n              alert(\"\".concat(error.message, \"\\n \").concat(details));\n            } else {\n              alert(\"\".concat(error.extensions.code, \"\\n \").concat(error.message));\n            }\n          }\n\n          return _context2.abrupt(\"return\", result.data);\n\n        case 14:\n          _context2.prev = 14;\n          _context2.t0 = _context2[\"catch\"](1);\n          alert(\"Error in sending data to server: \".concat(_context2.t0.message));\n\n        case 17:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, null, null, [[1, 14]]);\n}\n\nvar WorkshopPage =\n/*#__PURE__*/\nfunction (_Component3) {\n  _inherits(WorkshopPage, _Component3);\n\n  function WorkshopPage() {\n    var _this2;\n\n    _classCallCheck(this, WorkshopPage);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(WorkshopPage).call(this));\n\n    _this2.createWorkshop = function _callee(workshop) {\n      var query, data;\n      return regeneratorRuntime.async(function _callee$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              // create a mutation query with a variable, which is passed in the body in the fetch\n              // first addAWorkshop is just a mutation name, afther is the variable and the type which is workshopinputs\n              // next is the actual mutation which is getting the $workshop variable\n              // the query should return only the id\n              query = \"mutation addAWorkshop($workshop: WorkshopInputs!) {\\n        workshopAdd(workshop: $workshop) {\\n          id\\n        }\\n    }\";\n              _context3.next = 3;\n              return regeneratorRuntime.awrap(graphQLFetch(query, {\n                workshop: workshop\n              }));\n\n            case 3:\n              data = _context3.sent;\n\n              if (data) {\n                _this2.loadData();\n              }\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      });\n    };\n\n    _this2.state = {\n      workshops: []\n    };\n    return _this2;\n  }\n\n  _createClass(WorkshopPage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"loadData\",\n    value: function loadData() {\n      var query, data;\n      return regeneratorRuntime.async(function loadData$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              query = \"query {\\n      workshopList {\\n        id\\n        title\\n        date\\n        created\\n        place\\n        images {\\n          imageThumb\\n          imageOriginal\\n          imageWatermark\\n        }\\n      }\\n    }\";\n              _context4.next = 3;\n              return regeneratorRuntime.awrap(graphQLFetch(query));\n\n            case 3:\n              data = _context4.sent;\n              console.log(data);\n\n              if (data) {\n                this.setState({\n                  workshops: data.workshopList\n                });\n              }\n\n            case 6:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, null, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"page\",\n        className: \"p-6\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Upcoming Workshops\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkshopFilter, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkshopCarousel, {\n        workshops: this.state.workshops\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkshopAdd, {\n        createWorkshop: this.createWorkshop\n      }));\n    }\n  }]);\n\n  return WorkshopPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkshopPage);\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src??postcss!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/css/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.jsx */ \"./src/App.jsx\");\n\n\n // render\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById(\"contents\"));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services/httpService.js":
/*!*************************************!*\
  !*** ./src/services/httpService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(null, function (error) {\n  var expextedError = error.response && error.response.status >= 400 && error.response.status < 500;\n\n  if (!expextedError) {\n    console.log(\"Logging the error\", error);\n    alert(\"An unexpected error occured.\");\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: axios__WEBPACK_IMPORTED_MODULE_0___default.a.get,\n  post: axios__WEBPACK_IMPORTED_MODULE_0___default.a.post,\n  put: axios__WEBPACK_IMPORTED_MODULE_0___default.a.put,\n  delete: axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete\n});\n\n//# sourceURL=webpack:///./src/services/httpService.js?");

/***/ })

/******/ });