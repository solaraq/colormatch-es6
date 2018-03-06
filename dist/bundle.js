var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MessageBox.js":
/*!***************************!*\
  !*** ./src/MessageBox.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar template = '<div id=\"messagebox\">' + '<div class=\"header\"><span>Color Match</span></div>' + '<div class=\"body\"><span></span></div>' + '<div class=\"footer\"><button>OK</button></div>' + '</div>';\n\nvar messageBoxBody;\n\nvar render = function render() {\n    $('body').prepend(template);\n};\n\n/**\r\n * Adds an event handler to an element\r\n *\r\n * @param {String} event The event to handle\r\n * @param {Object} el The element to attach a lister to\r\n * @param {Function} fn The callback function to execute\r\n */\nvar addEventListsners = function addEventListsners(event, el, fn) {\n    if (el.addEventListener) {\n        el.addEventListener(event, fn, false);\n    } else if (el.attachEvent) {\n        el.attachEvent('on' + event, fn);\n    }\n};\n\n/**\r\n * Show popup and display message.\r\n *\r\n * @param {String} message The message to display\r\n */\nvar show = exports.show = function show(message) {\n    setTimeout(function () {\n        $('.body span', messageBoxBody).text(message);\n        messageBoxBody.css('visibility', 'visible');\n    }, 0);\n};\n\n/**\r\n * Hide popup.\r\n */\nvar hide = exports.hide = function hide() {\n    messageBoxBody.css('visibility', 'hidden');\n};\n\n/**\r\n * Init.\r\n */\nvar init = exports.init = function init() {\n    render();\n\n    messageBoxBody = $('#messagebox');\n\n    addEventListsners('click', document.querySelector('#messagebox button'), function () {\n        hide();\n    });\n};\n\n//# sourceURL=webpack://app/./src/MessageBox.js?");

/***/ }),

/***/ "./src/StopWatch.js":
/*!**************************!*\
  !*** ./src/StopWatch.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StopWatch = function () {\n    function StopWatch() {\n        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { duration: 5 * 60 * 1000 };\n\n        _classCallCheck(this, StopWatch);\n\n        this.duration = config.duration;\n        this.timeLeft = 0;\n        this.clockTimer = null;\n    }\n\n    _createClass(StopWatch, [{\n        key: 'start',\n        value: function start() {\n            var start = Date.now();\n\n            this.clockTimer = setInterval(function (StopWatch) {\n                var current = Date.now();\n                StopWatch.timeLeft = Math.round((StopWatch.duration - (current - start)) / 1000);\n                StopWatch.seconds = String(StopWatch.timeLeft % 60);\n                StopWatch.seconds = StopWatch.seconds.length === 1 ? '0' + StopWatch.seconds : StopWatch.seconds;\n                StopWatch.minutes = Math.floor(StopWatch.timeLeft / 60);\n            }, 950, this);\n        }\n    }, {\n        key: 'end',\n        value: function end() {\n            clearInterval(this.clockTimer);\n            this.clockTimer = null;\n        }\n    }, {\n        key: 'reset',\n        value: function reset() {\n            this.clockTimer = null;\n        }\n    }, {\n        key: 'getTimeLeft',\n        value: function getTimeLeft() {\n            return {\n                minutes: this.minutes,\n                seconds: this.seconds,\n                timeLeft: this.timeLeft\n            };\n        }\n    }]);\n\n    return StopWatch;\n}();\n\nexports.default = StopWatch;\n\n//# sourceURL=webpack://app/./src/StopWatch.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _colorMatch = __webpack_require__(/*! ./colorMatch.js */ \"./src/colorMatch.js\");\n\nvar colorMatch = _interopRequireWildcard(_colorMatch);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n$(function () {\n    colorMatch.initApp();\n});\n\n//# sourceURL=webpack://app/./src/app.js?");

/***/ }),

/***/ "./src/colorMatch.js":
/*!***************************!*\
  !*** ./src/colorMatch.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.initApp = undefined;\n\nvar _MessageBox = __webpack_require__(/*! ./MessageBox.js */ \"./src/MessageBox.js\");\n\nvar MessageBox = _interopRequireWildcard(_MessageBox);\n\nvar _StopWatch = __webpack_require__(/*! ./StopWatch.js */ \"./src/StopWatch.js\");\n\nvar _StopWatch2 = _interopRequireDefault(_StopWatch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// Holds a reference to the game board dom element\n/**\r\n *  Color match application.\r\n */\n\nvar gameBoard = void 0;\n\n// Holds the timer id for the current game\nvar gameTimer = void 0;\n\n// Holds the timer id for the clock\nvar clockTimer = void 0;\n\n// Holds timer id for automated test\nvar testTimer = void 0;\n\n// Stores sequential index for table cells\nvar tableCellIndex = [];\n\n// Holds a reference to the vertical cells input element\nvar verticalInputField = void 0;\n\n// Holds a reference to the horizontal cells input element\nvar horizontalInputField = void 0;\n\n// Holds a reference to the time input element\nvar timeInputField = void 0;\n\n// Holds values entered for the game\nvar gameData = {\n    rows: 0,\n    columns: 0,\n    time: 0\n};\n\n// Messages to display in popup\nvar messages = {\n    winner: 'Congratulations!, you\\'re a winner!',\n    loser: 'Sorry, you\\'re out of time. Better luck next time!.'\n};\n\n/**\r\n * Simulate game by generating random cell clicks.\r\n */\nvar runTest = function runTest() {\n    testTimer = setInterval(function () {\n        var index = getRandomIndex(1, gameData.rows * gameData.columns);\n        var cell = tableCellIndex[index];\n        tableCellIndex[index][2]++; // count of number of times cell clicked\n        $('tr:nth-child(' + cell[0] + ') TD:nth-child(' + cell[1] + ')', gameBoard).trigger('click');\n    }, 1);\n};\n\n/**\r\n *  Assert cell has expected class.\r\n */\nvar assertCellStateOn = function assertCellStateOn(cell, expected) {\n    return cell.className === expected;\n};\n\n/**\r\n * assert initial cel state of game board.\r\n */\nvar assertInitialBoardState = function assertInitialBoardState() {\n\n    var board = document.querySelector('table#board');\n    var rows = board.rows.length - 1;\n    var columns = board.rows[0].cells.length - 1;\n\n    document.querySelector('#message').innerHTML = '<p>Board state cell test results</p>';\n\n    var failed = false;\n    for (var i = 0; i <= rows; i++) {\n        var row = board.rows[i];\n        for (var j = 0; j <= columns; j++) {\n            var expected = (i + j) % 2 === 0 ? 'on' : '';\n            if (!assertCellStateOn(row.cells[j], expected)) {\n                document.querySelector('#message').innerHTML += '<p>Incorrect cell state: ' + String(i) + ':' + String(j);\n                failed = true;\n            }\n        }\n    }\n\n    if (!failed) {\n        document.querySelector('#message').innerHTML += '<p>Passed all tests</p>';\n    }\n};\n\n/**\r\n * Generate random number within a range.\r\n *\r\n * @param {Number} min Minumum number to generate\r\n * @param {Number} max Maximum number to generate\r\n * @return {Number}\r\n */\nvar getRandomIndex = function getRandomIndex(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\n/**\r\n * Create a table and attach to dom.\r\n *\r\n * @param {Number} rows Number of rows\r\n * @param {Number} cols Number of columns\r\n */\nvar renderTable = function renderTable(rows, cols) {\n\n    var fragment = document.createDocumentFragment();\n    var index = 1;\n    tableCellIndex.length = 0;\n\n    for (var i = 0; i < rows; i++) {\n        var rowEl = document.createElement('tr');\n        fragment.appendChild(rowEl);\n        for (var j = 0; j < cols; j++) {\n            var cell = document.createElement('td');\n            cell.className = (i + j) % 2 === 0 ? 'on' : '';\n            rowEl.appendChild(cell);\n            tableCellIndex[index] = [i + 1, j + 1, 0];\n            index++;\n        }\n    }\n    gameBoard.appendChild(fragment);\n};\n\n/**\r\n * Inverts cells for a particular row.\r\n *\r\n * @param {Number} row Row to invert\r\n * @param {Number} index Index of cell clicked\r\n * @param {Object} currentCell The cell clicked\r\n */\nvar setRowCells = function setRowCells(row, index, currentCell) {\n    var cell = currentCell || $('td:nth-child(' + index + ')', row);\n    cell.toggleClass(\"on\");\n    if (cell.prev().prop(\"tagName\") === 'TD') {\n        cell.prev().toggleClass(\"on\");\n    }\n    if (cell.next().prop(\"tagName\") === 'TD') {\n        cell.next().toggleClass(\"on\");\n    }\n};\n\n/**\r\n * Inverts adjacent cells.\r\n *\r\n * @param {Object} cell The cell clicked\r\n */\nvar setAdjacentCells = function setAdjacentCells(cell) {\n    var cellIndex = cell.cellIndex + 1;\n    var currentRow = $(cell).parent();\n    setRowCells(currentRow, cellIndex, $(cell));\n    if (currentRow.prev().prop(\"tagName\") === 'TR') {\n        setRowCells(currentRow.prev(), cellIndex);\n    }\n    if (currentRow.next().prop(\"tagName\") === 'TR') {\n        setRowCells(currentRow.next(), cellIndex);\n    }\n};\n\n/**\r\n * Cell click handler\r\n *\r\n * @param {Object} cell The cell clicked\r\n */\nvar onCellClick = function onCellClick(cell) {\n    setAdjacentCells(cell);\n    if (isWinner()) {\n        clearTimeout(gameTimer);\n        onGameEnd(undefined);\n        MessageBox.show(messages.winner);\n    }\n};\n\n/**\r\n * Calculates and displays time left.\r\n *\r\n * @param {Number} time The time in seconds\r\n */\nvar initTimer = function initTimer(time) {\n\n    var clock = $('#clock');\n    var stopWatch = new _StopWatch2.default({\n        duration: time\n    });\n\n    stopWatch.start();\n\n    clockTimer = setInterval(function () {\n        var time = stopWatch.getTimeLeft();\n        clock.text(time.minutes + ':' + time.seconds);\n    }, 950);\n};\n\n/**\r\n *  Check if game is won.\r\n */\nvar isWinner = function isWinner() {\n    var cellStateCount = $('td.on', gameBoard).length;\n    return cellStateCount === 0 || cellStateCount === tableCellIndex.length - 1;\n};\n\n/**\r\n * Check imput data is valid.\r\n */\nvar isValidForm = function isValidForm(gameData) {\n    return gameData.rows > 0 && gameData.columns > 0 && gameData.time > 0;\n};\n\n/**\r\n * Get input data.\r\n *\r\n * @return {Object} input data\r\n *  @config {Number} The number of rows\r\n *  @config {Number} The number of columns\r\n *  @config {Number} The time\r\n */\nvar getFormData = function getFormData() {\n    gameData.rows = Math.round(Number(verticalInputField.value));\n    gameData.columns = Math.round(Number(horizontalInputField.value));\n    gameData.time = Math.round(Number(timeInputField.value)) * 1000;\n\n    return gameData;\n};\n\n/**\r\n * On game start handler.\r\n *\r\n * @param {Number} rows The number of rows\r\n * @param {Number} cols The number of columns\r\n * @param {Number} time The time\r\n */\nvar onGameStart = function onGameStart(rows, cols, time) {\n\n    document.querySelector('#message').innerHTML = '';\n\n    $(gameBoard).off();\n    $(gameBoard).empty();\n\n    clearTimeout(gameTimer);\n    clearInterval(clockTimer);\n    clearInterval(testTimer);\n\n    renderTable(rows, cols);\n\n    $(gameBoard).delegate(\"td\", \"click\", function () {\n        onCellClick(this);\n    });\n\n    gameTimer = setTimeout(onGameEnd, time);\n    initTimer(time);\n\n    if (document.querySelector('#run').checked) {\n        runTest();\n    }\n};\n\n/**\r\n * On game end handler.\r\n */\nvar onGameEnd = function onGameEnd() {\n    $(gameBoard).off();\n    clearInterval(clockTimer);\n    clearInterval(testTimer);\n    if (!isWinner()) {\n        MessageBox.show(messages.loser);\n    }\n};\n\n/**\r\n * Initialise game app.\r\n */\nvar init = function init() {\n\n    MessageBox.init();\n    //this.messageBox = MessageBox;\n    gameBoard = document.querySelector('#board');\n\n    verticalInputField = document.querySelector('#vertical');\n    horizontalInputField = document.querySelector('#horizontal');\n    timeInputField = document.querySelector('#time');\n\n    $('form button#start').on('click', $.proxy(function () {\n        var gameData = getFormData();\n        if (isValidForm(gameData)) {\n            onGameStart(gameData.rows, gameData.columns, gameData.time);\n        } else {\n            document.querySelector('#message').innerHTML = '<h2 style=\"color:red\">Please enter a numeric values greater than 0<h2>';\n        }\n    }));\n\n    $('input').on('mouseup keyup', function (e) {\n        var id = $(e.target).attr('id');\n        if (id === 'vertical' || id === 'horizontal') {\n            var _gameData = getFormData();\n            if (isValidForm(_gameData)) {\n                document.querySelector('#message').innerHTML = '';\n                $(gameBoard).empty();\n                renderTable(_gameData.rows, _gameData.columns);\n            }\n        }\n    });\n\n    renderTable(5, 5);\n    getFormData();\n\n    // Dev tool buttons\n    $('button#test').on('click', $.proxy(function () {\n        assertInitialBoardState();\n    }));\n\n    $('button#stats').on('click', $.proxy(function () {\n        document.querySelector('#message').innerHTML = '';\n        tableCellIndex.forEach(function (item) {\n            document.querySelector('#message').innerHTML += '<p>Cell ' + String(item[0]) + ':' + String(item[1]) + ' clicked ' + String(item[2]) + ' times ';\n        });\n    }));\n};\n\nvar initApp = exports.initApp = function initApp() {\n    init();\n};\n\n//# sourceURL=webpack://app/./src/colorMatch.js?");

/***/ })

/******/ });