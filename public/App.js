"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./css/style.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "workshopCard rounded relative overflow-hidden my-2"
  }, _react.default.createElement("div", {
    className: "relative rounded"
  }, _react.default.createElement("a", {
    href: "#",
    className: "absolute w-full h-full z-10",
    title: "Bekijk foto Roermond oude stad van Adelheid- smitt"
  }), _react.default.createElement("img", {
    src: "https://www.spotshare.nl/site/assets/files/8066/eos_6d-8472_roermond.746x746-pim2-thumbhome746.jpg",
    className: "object-cover  w-full h-48  block",
    alt: "Foto Roermond oude stad van Adelheid- smitt"
  }), _react.default.createElement("div", {
    className: "workshopContent p-4 absolute bottom-0 left-0"
  }, _react.default.createElement("span", {
    className: "text-white"
  }, workshop.date), _react.default.createElement("div", {
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
  console.log(props);
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
    _this.state = {};
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  } // handleChange = e => {
  //   console.log(e, this);
  //   const target = event.target;
  //   console.log(target.value);
  // };


  _createClass(WorkshopAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      console.log(e);
      var form = document.forms.workshopAdd;
      var workshop = {
        owner: form.owner.value,
        title: form.title.value,
        status: "New"
      };
      this.props.createWorkshop(workshop);
      form.owner.value = "";
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("form", {
        name: "workshopAdd",
        onSubmit: this.handleSubmit,
        onChange: this.handleChange,
        className: "block py-3 px-4 border border-gray-300 rounded"
      }, _react.default.createElement("h3", {
        className: "my-2"
      }, "Add workshop"), _react.default.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title",
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("input", {
        type: "date",
        name: "date",
        placeholder: "Date",
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("input", {
        type: "file",
        name: "image",
        id: "image",
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("input", {
        type: "text",
        name: "desc",
        placeholder: "Descrtiption",
        className: "border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
      }), _react.default.createElement("button", {
        className: "block px-3 py- my-2 bg-blue-600 text-white rounded text-l"
      }, "Add"));
    }
  }]);

  return WorkshopAdd;
}(_react.Component);

var WorkshopPage =
/*#__PURE__*/
function (_Component3) {
  _inherits(WorkshopPage, _Component3);

  function WorkshopPage() {
    var _this2;

    _classCallCheck(this, WorkshopPage);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(WorkshopPage).call(this));

    _this2.createWorkshop = function (workshop) {
      // add a unique id to the new issue
      workshop.id = _this2.state.workshops.length + 1; // fill in yet to be filled object fiels of the new issue

      issue.created = new Date(); //get the current workshop from the state

      var newWorkshops = _toConsumableArray(_this2.state.workshops); // push the new created issue to the array


      newWorkshops.push(issue); // set the new state with the new photos using object destructuring

      _this2.setState({
        workshops: newWorkshops
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
    value: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var query, response, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n      workshopList {\n        id\n        memberId\n        title\n        date\n        created\n        place\n      }\n    }";
                _context.next = 3;
                return fetch("/graphql", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    query: query
                  })
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                result = _context.sent;
                this.setState({
                  workshops: result.data.workshopList
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.workshops);
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