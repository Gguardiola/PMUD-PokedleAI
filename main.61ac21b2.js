// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Dqlq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pokemon = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Pokemon = exports.Pokemon = /*#__PURE__*/function () {
  function Pokemon(_ref, resists, weakTo) {
    var name = _ref.name,
      type = _ref.type,
      imgPath = _ref.imgPath,
      gen = _ref.gen;
    _classCallCheck(this, Pokemon);
    this._name = name;
    this._type = type;
    this._imgPath = imgPath;
    this._gen = gen;
    if (resists !== undefined) this.setResists(resists);
    if (weakTo !== undefined) this.setWeakTo(weakTo);
  }
  _createClass(Pokemon, [{
    key: "setResists",
    value: function setResists(resists) {
      this._resists = resists;
    }
  }, {
    key: "setWeakTo",
    value: function setWeakTo(weakTo) {
      this._weakTo = weakTo;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "imgPath",
    get: function get() {
      return this._imgPath;
    }
  }, {
    key: "gen",
    get: function get() {
      return this._gen;
    }
  }, {
    key: "resists",
    get: function get() {
      return this._resists;
    }
  }, {
    key: "weakTo",
    get: function get() {
      return this._weakTo;
    }
  }]);
  return Pokemon;
}();
},{}],"DxTu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_HINTS = exports.MAX_ATTEMPS = exports.ATTEMPTS_IMG = void 0;
var MAX_HINTS = exports.MAX_HINTS = 3;
var MAX_ATTEMPS = exports.MAX_ATTEMPS = 5;
var ATTEMPTS_IMG = exports.ATTEMPTS_IMG = "https://i.imgur.com/m4UWjJD.png";
},{}],"uMJi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameView = void 0;
var env = _interopRequireWildcard(require("../lib/constants.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MAX_ATTEMPS = env.MAX_ATTEMPS;
var MAX_HINTS = env.MAX_HINTS;
var ATTEMPTS_IMG = env.ATTEMPTS_IMG;
var GameView = exports.GameView = /*#__PURE__*/function () {
  function GameView() {
    _classCallCheck(this, GameView);
  }
  _createClass(GameView, [{
    key: "render",
    value: function render(pokemon) {
      $("#img-col").empty();
      $("#buttons-col").empty();
      $("#input-col").empty();
      $("#attempts-container").empty();
      $("#feedback-col").empty();
      for (var i = 0; i < MAX_ATTEMPS; i++) {
        $("#attempts-container").append($("<img>").height(80).width(80).attr("src", ATTEMPTS_IMG).addClass("attempt-".concat(i + 1)));
      }
      $("#img-col").append($('<img>').attr('src', pokemon.imgPath).addClass('pokeImg shadow mb-5 bg-body-tertiary rounded-3 mx-auto d-block w-50'));
      $("#buttons-col").append($('<button>').text('Hint').addClass("btn btn-outline-danger showHint"));
      $("#buttons-col").append($('<button>').text('Reroll').addClass("btn btn-outline-warning nextPokemon"));
      $("#input-col").append($('<input>').attr("type", "text").attr("aria-describedby", "inputGroup-sizing-lg").attr("aria-label", "Sizing example input").attr("placeholder", "Guess the pokemon!").addClass("mb-3 mt-3 p-3 inputPokemon form-control"));
      $("#input-col").append($('<button>').text("Guess!").addClass("ps-5 pe-5 btn btn-primary btn-lg guessPokemon"));
    }
  }, {
    key: "failedAttempt",
    value: function failedAttempt(attempts) {
      $(".attempt-".concat(MAX_ATTEMPS - attempts)).addClass("opacity-25 waveText");
    }
  }, {
    key: "disableHints",
    value: function disableHints() {
      $(".showHint").attr("disabled", "");
    }
  }, {
    key: "rerollGame",
    value: function rerollGame() {
      $("#text-col").empty();
      $("#text-col").append($('<h1>').text("?????").addClass("mb-4"));
    }
  }, {
    key: "triggerWin",
    value: function triggerWin(pokemon) {
      $(".confetti").removeClass("visually-hidden");
      $("#text-col").empty();
      $("#text-col").append($('<h1>').text(pokemon.name).addClass("mb-4 pokeName pulsing"));
      $(".pokeImg").addClass("pulsing");
      $(".showHint").attr("disabled", "");
      $(".nextPokemon").attr("disabled", "");
      $(".input").attr("disabled", "");
      $(".guessPokemon").attr("disabled", "").attr("readonly", "");
      setTimeout(function () {
        $(".confetti").addClass("visually-hidden");
      }, 3700);
    }
  }, {
    key: "triggerGameOver",
    value: function triggerGameOver(pokemon) {
      $("#text-col").empty();
      $("#text-col").append($('<h1>').text(pokemon.name).addClass("mb-4 pokeName pulsing pulse-gameover"));
      $(".pokeImg").addClass("pulsing pulse-gameover-img");
      $(".showHint").attr("disabled", "");
      $(".nextPokemon").attr("disabled", "");
      $(".input").attr("disabled", "");
      $(".guessPokemon").attr("disabled", "").attr("readonly", "");
    }
  }]);
  return GameView;
}();
},{"../lib/constants.js":"DxTu"}],"sdjq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameManager = void 0;
var _Pokemon = require("../models/Pokemon.js");
var _GameView = require("../views/GameView.js");
var env = _interopRequireWildcard(require("../lib/constants.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MAX_ATTEMPS = env.MAX_ATTEMPS;
var MAX_HINTS = env.MAX_HINTS;
var GameManager = exports.GameManager = /*#__PURE__*/function () {
  function GameManager() {
    _classCallCheck(this, GameManager);
    this.pokemons = [new _Pokemon.Pokemon({
      name: 'Meowth',
      type: ["NORMAL"],
      imgPath: "https://i.imgur.com/B0JXocb.jpg",
      gen: "I"
    }), new _Pokemon.Pokemon({
      name: 'Sharkpedo',
      type: ["WATER", "DARK"],
      imgPath: "https://i.imgur.com/qs7AlwH.jpg",
      gen: "III"
    }), new _Pokemon.Pokemon({
      name: 'Snorlax',
      type: ["NORMAL"],
      imgPath: "https://i.imgur.com/j7RRFvO.png",
      gen: "I"
    }), new _Pokemon.Pokemon({
      name: 'Druddigon',
      type: ["DRAGON"],
      imgPath: "https://i.imgur.com/5UI1ouV.jpg",
      gen: "V"
    }), new _Pokemon.Pokemon({
      name: 'Ukown',
      type: ["PSYCHIC"],
      imgPath: "https://i.imgur.com/bNOLUsQ.jpg",
      gen: "II"
    }), new _Pokemon.Pokemon({
      name: 'Rowlet',
      type: ["GRASS", "FLYING"],
      imgPath: "https://i.imgur.com/Zxi7dCH.jpg",
      gen: "VII"
    }), new _Pokemon.Pokemon({
      name: 'Reshiram',
      type: ["DRAGON", "FIRE"],
      imgPath: "https://i.imgur.com/nXalWAf.jpg",
      gen: "V"
    }), new _Pokemon.Pokemon({
      name: 'Dialga',
      type: ["STEEL", "DRAGON"],
      imgPath: "https://i.imgur.com/Kv5jfU4.jpg",
      gen: "IV"
    }), new _Pokemon.Pokemon({
      name: 'Palkia',
      type: ["WATER", "DRAGON"],
      imgPath: "https://i.imgur.com/KprMDet.jpg",
      gen: "IV"
    }), new _Pokemon.Pokemon({
      name: 'Haunter',
      type: ["GHOST", "POISON"],
      imgPath: "https://i.imgur.com/op2tlGv.jpg",
      gen: "I"
    }), new _Pokemon.Pokemon({
      name: 'Zangoose',
      type: ["NORMAL"],
      imgPath: "https://i.imgur.com/2YmGQal.jpg",
      gen: "III"
    }), new _Pokemon.Pokemon({
      name: 'Gardevoir',
      type: ["FAIRY", "PSYCHIC"],
      imgPath: "https://i.imgur.com/MQKhWsi.jpg",
      gen: "IV"
    }), new _Pokemon.Pokemon({
      name: 'Horsea',
      type: ["WATER"],
      imgPath: "https://i.imgur.com/qrkjjfd.jpg",
      gen: "I"
    }), new _Pokemon.Pokemon({
      name: 'Dratini',
      type: ["DRAGON"],
      imgPath: "https://i.imgur.com/ZQBwbY9.jpg",
      gen: "I"
    }), new _Pokemon.Pokemon({
      name: 'Infernape',
      type: ["FIRE", "FIGHTING"],
      imgPath: "https://i.imgur.com/4VA4DDG.jpg",
      gen: "IV"
    }), new _Pokemon.Pokemon({
      name: 'Luxray',
      type: ["ELECTRIC"],
      imgPath: "https://i.imgur.com/moYFEI8.jpg",
      gen: "IV"
    }), new _Pokemon.Pokemon({
      name: 'Raticate',
      type: ["NORMAL"],
      imgPath: "https://i.imgur.com/F57sQ9s.jpg",
      gen: "I"
    }, undefined, ["FIGHTING"]), new _Pokemon.Pokemon({
      name: 'Treecko',
      type: ["GRASS"],
      imgPath: "https://i.imgur.com/S3QePBj.jpg",
      gen: "III"
    }), new _Pokemon.Pokemon({
      name: 'Ekans',
      type: ["POISON"],
      imgPath: "https://i.imgur.com/hwaUWcy.jpg",
      gen: "I"
    }), new _Pokemon.Pokemon({
      name: 'Combusken',
      type: ["FIRE", "FIGHTING"],
      imgPath: "https://i.imgur.com/OYu52ZU.jpg",
      gen: "III"
    })];
    this.currentPokemon = this.pokemons[0];
    this.gameView = new _GameView.GameView();
    this.attempts = MAX_ATTEMPS;
    this.hintCounter = 0;
  }
  _createClass(GameManager, [{
    key: "init",
    value: function init() {
      this.eventListeners();
      this.nextRound();
      this.gameView.render(this.currentPokemon);
    }
  }, {
    key: "eventListeners",
    value: function eventListeners() {
      var _this = this;
      $(document).on('click', ".showHint", function () {
        _this.showHint();
      });
      $(document).on('click', ".nextPokemon", function () {
        _this.nextRound(true);
      });
      $(document).on('click', ".guessPokemon", function () {
        _this.guessTry($(".inputPokemon").val());
      });
    }
  }, {
    key: "nextRound",
    value: function nextRound(isClicked) {
      this.getRandomPokemon(isClicked);
      this.attempts = MAX_ATTEMPS;
      this.hintCounter = 0;
      this.gameView.render(this.currentPokemon);
      this.gameView.rerollGame();
    }
  }, {
    key: "getRandomPokemon",
    value: function getRandomPokemon(isClicked) {
      var isAlreadyInit = localStorage.getItem("isInit") !== null;
      if (!isAlreadyInit || isClicked) {
        var randomIndex = Math.floor(Math.random() * this.pokemons.length);
        localStorage["currentPokemon"] = JSON.stringify({
          name: this.pokemons[randomIndex].name,
          type: this.pokemons[randomIndex].type,
          imgPath: this.pokemons[randomIndex].imgPath,
          gen: this.pokemons[randomIndex].gen,
          resists: this.pokemons[randomIndex].resists,
          weakTo: this.pokemons[randomIndex].weakTo
        });
        localStorage["isInit"] = "yes";
        this.currentPokemon = this.pokemons[randomIndex];
      } else {
        var lastPokemon = JSON.parse(localStorage["currentPokemon"]);
        var _iterator = _createForOfIteratorHelper(this.pokemons),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var poke = _step.value;
            if (poke.name == lastPokemon.name) {
              this.currentPokemon = poke;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "guessTry",
    value: function guessTry(tryInput) {
      var _this2 = this;
      console.log(tryInput);
      if (tryInput.toString().length == 0) alert("Escribe un pokemon!");else if (this.currentPokemon.name.toLowerCase() == tryInput.toString().toLowerCase()) {
        this.gameView.triggerWin(this.currentPokemon);
        setTimeout(function () {
          _this2.nextRound(true);
        }, 3700);
      } else {
        this.attempts -= 1;
        this.gameView.failedAttempt(this.attempts);
        this.checkEndgame();
      }
    }
  }, {
    key: "showHint",
    value: function showHint() {
      if (this.hintCounter != MAX_HINTS) {
        this.attempts -= 1;
        this.gameView.failedAttempt(this.attempts);
        this.hintCounter += 1;
        switch (this.hintCounter) {
          case 1:
            alert("Hint: Pok\xE9mon's type(s): \"".concat(this.currentPokemon.type, "\"."));
            break;
          case 2:
            alert("Hint: Pok\xE9mon's generation is: \"".concat(this.currentPokemon.gen, "\"."));
            break;
          case 3:
            this.gameView.disableHints();
            alert("Hint: The Pok\xE9mon's name starts with the letter \"".concat(this.currentPokemon.name.charAt(0), "\"."));
            break;
          default:
            break;
        }
        this.checkEndgame();
      }
    }
  }, {
    key: "checkEndgame",
    value: function checkEndgame() {
      var _this3 = this;
      if (this.attempts == 0) {
        this.gameView.triggerGameOver(this.currentPokemon);
        setTimeout(function () {
          _this3.nextRound(true);
        }, 2000);
      }
    }
  }]);
  return GameManager;
}();
},{"../models/Pokemon.js":"Dqlq","../views/GameView.js":"uMJi","../lib/constants.js":"DxTu"}],"J3CD":[function(require,module,exports) {
"use strict";

var _GameManager = require("./controllers/GameManager.js");
$(function () {
  var gameManager = new _GameManager.GameManager();
  gameManager.init();
});
},{"./controllers/GameManager.js":"sdjq"}]},{},["J3CD"], null)
//# sourceMappingURL=main.61ac21b2.js.map