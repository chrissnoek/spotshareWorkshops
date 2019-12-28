"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _httpService = _interopRequireDefault(require("../src/services/httpService"));

require("./css/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// const initialPhotos = [
//   {
//     id: 8046,
//     memberId: 4790,
//     locationId: 2289,
//     eventId: 1,
//     created: new Date("2018-08-15"),
//     title: "I love Zeeland",
//     description: "I love Zeeland",
//     date: new Date("2019-09-24T19:00:26"),
//     likes: 10,
//     likesThisWeek: 1,
//     exif: {
//       brand: "Canon",
//       apeture: "16",
//       shutterspeed: "8/1",
//       ISO: "100",
//       camera: "Canon EOS 6D Mark II"
//     },
//     image: {
//       imageSmall: "",
//       imageLarge: "",
//       imageThumbnail: ""
//     }
//   },
//   {
//     id: 8047,
//     memberId: 4790,
//     locationId: 2289,
//     eventId: 1,
//     created: new Date("2018-08-15"),
//     title: "I love Zeeland",
//     description: "I love Zeeland",
//     date: new Date("2019-09-24T19:00:26"),
//     likes: 10,
//     likesThisWeek: 1,
//     exif: {
//       brand: "Canon",
//       apeture: "16",
//       shutterspeed: "8/1",
//       ISO: "100",
//       camera: "Canon EOS 6D Mark III"
//     },
//     image: {
//       imageSmall: "",
//       imageLarge: "",
//       imageThumbnail: ""
//     }
//   }
// ];
// a regex to see if a value is a date
var dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d"); // a reviver to pass to the JSON parse function in fetchdata() to return the isoString to a date type

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

var WorkshopFilter =
/*#__PURE__*/
function (_Component) {
  _inherits(WorkshopFilter, _Component);

  function WorkshopFilter() {
    _classCallCheck(this, WorkshopFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(WorkshopFilter).apply(this, arguments));
  }

  _createClass(WorkshopFilter, [{
    key: "render",
    //asdf
    value: function render() {
      return _react.default.createElement("div", null, "This is a placholder for the WorkshopFilter");
    }
  }]);

  return WorkshopFilter;
}(_react.Component);

function WorkshopView(props) {
  var workshop = props.workshop;
  console.log(workshop);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "workshopCard rounded relative overflow-hidden my-2"
  }, _react.default.createElement("div", {
    className: "relative rounded"
  }, _react.default.createElement("a", {
    href: "#",
    className: "absolute w-full h-full z-10",
    title: "Bekijk foto Roermond oude stad van Adelheid- smitt"
  }), _react.default.createElement("img", {
    src: workshop.images.imageWatermark,
    className: "object-cover  w-full h-48  block",
    alt: "Foto Roermond oude stad van Adelheid- smitt"
  }), _react.default.createElement("div", {
    className: "workshopContent p-4 absolute bottom-0 left-0"
  }, _react.default.createElement("span", {
    className: "text-white"
  }, // convert date type to a readable date string
  workshop.date.toDateString()), _react.default.createElement("div", {
    className: "workshopInfo"
  }, _react.default.createElement("h3", {
    className: "text-white"
  }, workshop.title), _react.default.createElement("span", {
    className: "text-white"
  }, workshop.place)), _react.default.createElement("div", {
    className: "clear"
  })))));
}

function WorkshopCarousel(props) {
  var workshops = props.workshops.map(function (workshop) {
    return _react.default.createElement(WorkshopView, {
      key: workshop.id,
      workshop: workshop
    });
  });
  return _react.default.createElement("div", null, workshops);
}

var WorkshopAdd =
/*#__PURE__*/
function (_Component2) {
  _inherits(WorkshopAdd, _Component2);

  function WorkshopAdd() {
    var _this;

    _classCallCheck(this, WorkshopAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WorkshopAdd).call(this));

    _this.handleInputChange = function (e) {
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;

      _this.setState(_defineProperty({}, name, value));
    };

    _this.state = {};
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.fileInput = _react.default.createRef();
    return _this;
  }

  _createClass(WorkshopAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var form, data, uploadedFile, _ref, resources, imageThumb, imageOriginal, imageWatermark, workshop;

      return regeneratorRuntime.async(function handleSubmit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              form = document.forms.workshopAdd;
              data = new FormData();
              uploadedFile = this.fileInput.current.files[0];
              data.append("workshopImage", uploadedFile);
              _context.next = 7;
              return regeneratorRuntime.awrap(_httpService.default.post(window.ENV.UI_API_IMAGE_ENDPOINT, data));

            case 7:
              _ref = _context.sent;
              resources = _ref.data;
              console.log(resources); //0 = thumb, 1 == watermakrk 2 == original

              imageThumb = "https://dkotwt30gflnm.cloudfront.net/" + resources.transforms.find(function (elem) {
                return elem.id === "thumbnail";
              }).key;
              imageOriginal = "https://dkotwt30gflnm.cloudfront.net/" + resources.transforms.find(function (elem) {
                return elem.id === "original";
              }).key;
              imageWatermark = "https://dkotwt30gflnm.cloudfront.net/" + resources.transforms.find(function (elem) {
                return elem.id === "watermark";
              }).key;
              workshop = {
                title: form.title.value,
                place: form.place.value,
                date: new Date(form.date.value).toISOString(),
                description: form.desc.value,
                images: {
                  imageThumb: imageThumb,
                  imageOriginal: imageOriginal,
                  imageWatermark: imageWatermark
                }
              };
              this.props.createWorkshop(workshop);
              form.title.value = "";
              form.place.value = "";
              form.date.value = "";
              form.desc.value = "";

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("form", {
        name: "workshopAdd",
        encType: "multipart/form-data",
        onSubmit: this.handleSubmit,
        onChange: this.handleChange,
        className: "block py-3 px-4 border border-gray-300 rounded"
      }, _react.default.createElement("h3", {
        className: "my-2"
      }, "Add workshop"), _react.default.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Titel",
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("input", {
        type: "text",
        name: "place",
        placeholder: "Plaats",
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("input", {
        type: "date",
        name: "date",
        placeholder: "Datum",
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("input", {
        type: "file",
        name: "workshopImage",
        ref: this.fileInput,
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("input", {
        type: "text",
        name: "desc",
        placeholder: "Beschrijving",
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("button", {
        className: "block px-3 py- my-2 bg-blue-600 text-white rounded text-l"
      }, "Add"));
    }
  }]);

  return WorkshopAdd;
}(_react.Component);

function graphQLFetch(query) {
  var variables,
      response,
      body,
      _result,
      error,
      details,
      _args2 = arguments;

  return regeneratorRuntime.async(function graphQLFetch$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          variables = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          _context2.prev = 1;
          console.log(window.ENV.UI_API_ENDPOINT);
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetch(window.ENV.UI_API_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              query: query,
              variables: variables
            })
          }));

        case 5:
          response = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(response.text());

        case 8:
          body = _context2.sent;
          _result = JSON.parse(body, jsonDateReviver); // alert the error message whenthe result is containing erros

          if (_result.errors) {
            error = _result.errors[0];

            if (error.extensions.code == "BAD_USER_INPUT") {
              console.log(error);
              details = error.extensions.exception.errors.join("\n ");
              alert("".concat(error.message, "\n ").concat(details));
            } else {
              alert("".concat(error.extensions.code, "\n ").concat(error.message));
            }
          }

          return _context2.abrupt("return", _result.data);

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          alert("Error in sending data to server: ".concat(_context2.t0.message));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 14]]);
}

var WorkshopPage =
/*#__PURE__*/
function (_Component3) {
  _inherits(WorkshopPage, _Component3);

  function WorkshopPage() {
    var _this2;

    _classCallCheck(this, WorkshopPage);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(WorkshopPage).call(this));

    _this2.createWorkshop = function _callee(workshop) {
      var query, data;
      return regeneratorRuntime.async(function _callee$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // create a mutation query with a variable, which is passed in the body in the fetch
              // first addAWorkshop is just a mutation name, afther is the variable and the type which is workshopinputs
              // next is the actual mutation which is getting the $workshop variable
              // the query should return only the id
              query = "mutation addAWorkshop($workshop: WorkshopInputs!) {\n        workshopAdd(workshop: $workshop) {\n          id\n        }\n    }";
              _context3.next = 3;
              return regeneratorRuntime.awrap(graphQLFetch(query, {
                workshop: workshop
              }));

            case 3:
              data = _context3.sent;

              if (data) {
                _this2.loadData();
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    };

    _this2.state = {
      workshops: []
    };
    return _this2;
  }

  _createClass(WorkshopPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var query, data;
      return regeneratorRuntime.async(function loadData$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              query = "query {\n      workshopList {\n        id\n        title\n        date\n        created\n        place\n        images {\n          imageThumb\n          imageOriginal\n          imageWatermark\n        }\n      }\n    }";
              _context4.next = 3;
              return regeneratorRuntime.awrap(graphQLFetch(query));

            case 3:
              data = _context4.sent;
              console.log(data);

              if (data) {
                this.setState({
                  workshops: result.data.workshopList
                });
              }

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "page",
        className: "p-6"
      }, _react.default.createElement("h1", null, "Upcoming Workshops"), _react.default.createElement(WorkshopFilter, null), _react.default.createElement("hr", null), _react.default.createElement(WorkshopCarousel, {
        workshops: this.state.workshops
      }), _react.default.createElement("hr", null), _react.default.createElement(WorkshopAdd, {
        createWorkshop: this.createWorkshop
      }));
    }
  }]);

  return WorkshopPage;
}(_react.Component);

var _default = WorkshopPage;
exports.default = _default;