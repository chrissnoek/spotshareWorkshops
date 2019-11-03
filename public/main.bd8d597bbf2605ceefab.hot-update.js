webpackHotUpdate("main",{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar initialPhotos = [{\n  id: 8046,\n  memberId: 4790,\n  locationId: 2289,\n  eventId: 1,\n  created: new Date(\"2018-08-15\"),\n  title: \"I love Zeeland\",\n  description: \"I love Zeeland\",\n  date: new Date(\"2019-09-24T19:00:26\"),\n  likes: 10,\n  likesThisWeek: 1,\n  exif: {\n    brand: \"Canon\",\n    apeture: \"16\",\n    shutterspeed: \"8/1\",\n    ISO: \"100\",\n    camera: \"Canon EOS 6D Mark II\"\n  },\n  image: {\n    imageSmall: \"\",\n    imageLarge: \"\",\n    imageThumbnail: \"\"\n  }\n}, {\n  id: 8047,\n  memberId: 4790,\n  locationId: 2289,\n  eventId: 1,\n  created: new Date(\"2018-08-15\"),\n  title: \"I love Zeeland\",\n  description: \"I love Zeeland\",\n  date: new Date(\"2019-09-24T19:00:26\"),\n  likes: 10,\n  likesThisWeek: 1,\n  exif: {\n    brand: \"Canon\",\n    apeture: \"16\",\n    shutterspeed: \"8/1\",\n    ISO: \"100\",\n    camera: \"Canon EOS 6D Mark III\"\n  },\n  image: {\n    imageSmall: \"\",\n    imageLarge: \"\",\n    imageThumbnail: \"\"\n  }\n}];\n\nvar IssueFilter =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(IssueFilter, _Component);\n\n  function IssueFilter() {\n    _classCallCheck(this, IssueFilter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).apply(this, arguments));\n  }\n\n  _createClass(IssueFilter, [{\n    key: \"render\",\n    //asdf\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is a placholder for the issueFilter\");\n    }\n  }]);\n\n  return IssueFilter;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction IssueRow(props) {\n  var issue = props.issue;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, issue.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, issue.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, issue.owner), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, issue.created.toDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, issue.effort), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, issue.due ? issue.due.toDateString() : \"\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, issue.title));\n}\n\nfunction IssueTable(props) {\n  console.log(props);\n  var issueRows = props.photos.map(function (issue) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueRow, {\n      key: issue.id,\n      issue: issue\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"bordered-table border-gray-300\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: \"border border-gray-300\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"border border-gray-300\"\n  }, \"ID\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Status\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Owner\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Created\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Effort\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Due Date\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Title\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", {\n    className: \"border border-gray-300\"\n  }, issueRows)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"h-8 w-8 text-xs bg-white rounded p-4 shadow\"\n  }));\n}\n\nvar IssueAdd =\n/*#__PURE__*/\nfunction (_Component2) {\n  _inherits(IssueAdd, _Component2);\n\n  function IssueAdd() {\n    var _this;\n\n    _classCallCheck(this, IssueAdd);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this));\n    _this.state = {};\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(IssueAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      console.log(e);\n      var form = document.forms.issueAdd;\n      var issue = {\n        owner: form.owner.value,\n        title: form.title.value,\n        status: \"New\"\n      };\n      this.props.createIssue(issue);\n      form.owner.value = \"\";\n      form.title.value = \"\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        name: \"issueAdd\",\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"owner\",\n        placeholder: \"Owner\",\n        onChange: this.handleChange\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"title\",\n        placeholder: \"Title\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Add\"));\n    }\n  }]);\n\n  return IssueAdd;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar PhotoPage =\n/*#__PURE__*/\nfunction (_Component3) {\n  _inherits(PhotoPage, _Component3);\n\n  function PhotoPage() {\n    var _this2;\n\n    _classCallCheck(this, PhotoPage);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PhotoPage).call(this));\n    _this2.state = {\n      photos: []\n    };\n    _this2.createPhoto = _this2.createPhoto.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(PhotoPage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"loadData\",\n    value: function loadData() {\n      var _this3 = this;\n\n      setTimeout(function () {\n        _this3.setState({\n          photos: initialPhotos\n        });\n      }, 500);\n    }\n  }, {\n    key: \"createPhoto\",\n    value: function createPhoto(photo) {\n      // add a unique id to the new issue\n      photo.id = this.state.photos.length + 1; // fill in yet to be filled object fiels of the new issue\n\n      issue.created = new Date(); //get the current photos from the state\n\n      var newPhotos = _toConsumableArray(this.state.photos); // push the new created issue to the array\n\n\n      newPhotos.push(issue); // set the new state with the new photos using object destructuring\n\n      this.setState({\n        photos: newPhotos\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(this.state.photos);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Issue Tracker\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueFilter, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueTable, {\n        photos: this.state.photos\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueAdd, {\n        createIssue: this.createIssue\n      }));\n    }\n  }]);\n\n  return PhotoPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoPage);\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ })

})