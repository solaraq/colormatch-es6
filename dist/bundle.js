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
/*! exports provided: show, hide, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hide\", function() { return hide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n\r\nconst template =  '<div id=\"messagebox\">' +\r\n    '<div class=\"header\"><span>Color Match</span></div>' +\r\n    '<div class=\"body\"><span></span></div>' +\r\n    '<div class=\"footer\"><button>OK</button></div>' +\r\n    '</div>';\r\n\r\nvar messageBoxBody;\r\n\r\nvar render = () => {\r\n    $('body').prepend(template);\r\n}\r\n\r\n/**\r\n * Adds an event handler to an element\r\n *\r\n * @param {String} event The event to handle\r\n * @param {Object} el The element to attach a lister to\r\n * @param {Function} fn The callback function to execute\r\n */\r\nvar addEventListsners = (event, el, fn)  => {\r\n    if (el.addEventListener) {\r\n        el.addEventListener(event, fn, false);\r\n    } else if (el.attachEvent)  {\r\n        el.attachEvent('on' + event, fn);\r\n    }\r\n}\r\n\r\n/**\r\n * Show popup and display message.\r\n *\r\n * @param {String} message The message to display\r\n */\r\nvar show = (message) => {\r\n    setTimeout(function() {\r\n        $('.body span', messageBoxBody).text(message);\r\n        messageBoxBody.css('visibility', 'visible');\r\n    }, 0);\r\n}\r\n\r\n/**\r\n * Hide popup.\r\n */\r\nvar hide = () => {\r\n    messageBoxBody.css('visibility', 'hidden');\r\n}\r\n\r\n/**\r\n * Init.\r\n */\r\nvar init = () => {\r\n    render();\r\n\r\n    messageBoxBody = $('#messagebox');\r\n\r\n    addEventListsners('click', document.querySelector('#messagebox button'), function() {\r\n        hide();\r\n    });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://app/./src/MessageBox.js?");

/***/ }),

/***/ "./src/StopWatch.js":
/*!**************************!*\
  !*** ./src/StopWatch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StopWatch; });\n\r\n\r\nclass StopWatch {\r\n\r\n\r\n    constructor(config = {duration : 5 * 60 * 1000}) {\r\n        this.duration = config.duration;\r\n        this.timeLeft = 0;\r\n        this.clockTimer = null;\r\n    }\r\n\r\n    start() {\r\n        let start = Date.now();\r\n\r\n        this.clockTimer = setInterval((StopWatch) => {\r\n            let current = Date.now();\r\n            StopWatch.timeLeft =  Math.round((StopWatch.duration - (current - start))/1000);\r\n            StopWatch.seconds = String(StopWatch.timeLeft%60).padStart(2,'0');\r\n            StopWatch.minutes = Math.floor(StopWatch.timeLeft/60);\r\n        }, 950, this);\r\n    }\r\n\r\n    end() {\r\n        clearInterval(this.clockTimer);\r\n        this.clockTimer = null;\r\n    };\r\n\r\n    reset() {\r\n        this.clockTimer = null;\r\n    };\r\n\r\n    getTimeLeft() {\r\n        return {\r\n            minutes: this.minutes,\r\n            seconds: this.seconds,\r\n            timeLeft: this.timeLeft\r\n        }\r\n    };\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://app/./src/StopWatch.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colorMatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorMatch.js */ \"./src/colorMatch.js\");\n\r\n\r\n$(function() {\r\n    _colorMatch_js__WEBPACK_IMPORTED_MODULE_0__[\"initApp\"]();\r\n});\n\n//# sourceURL=webpack://app/./src/app.js?");

/***/ }),

/***/ "./src/colorMatch.js":
/*!***************************!*\
  !*** ./src/colorMatch.js ***!
  \***************************/
/*! exports provided: initApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initApp\", function() { return initApp; });\n/* harmony import */ var _MessageBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageBox.js */ \"./src/MessageBox.js\");\n/* harmony import */ var _StopWatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StopWatch.js */ \"./src/StopWatch.js\");\n/**\r\n *  Color match application.\r\n */\r\n\r\n\r\n\r\n\r\n// Holds a reference to the game board dom element\r\nvar gameBoard = null;\r\n\r\n// Holds the timer id for the current game\r\nlet gameTimer = null;\r\n\r\n// Holds the timer id for the clock\r\nlet clockTimer = null;\r\n\r\n// Holds timer id for automated test\r\nlet testTimer = null;\r\n\r\n// Stores sequential index for table cells\r\nlet tableCellIndex = [];\r\n\r\n// Holds a reference to the vertical cells input element\r\nvar verticalInputField = null;\r\n\r\n// Holds a reference to the horizontal cells input element\r\nlet horizontalInputField = null;\r\n\r\n// Holds a reference to the time input element\r\nlet timeInputField = null;\r\n\r\n// Holds values entered for the game\r\nlet gameData = {\r\n    rows: 0,\r\n    columns: 0,\r\n    time: 0\r\n};\r\n\r\n// Reference to the custom popup\r\n//var messageBox = null;\r\n\r\n// Messages to display in popup\r\nlet messages = {\r\n    winner: 'Congratulations!, you\\'re a winner!',\r\n    loser: 'Sorry, you\\'re out of time. Better luck next time!.'\r\n};\r\n\r\n/**\r\n * Simulate game by generating random cell clicks.\r\n */\r\nvar runTest = () => {\r\n    testTimer = setInterval(() => {\r\n        let index = getRandomIndex(1, gameData.rows * gameData.columns);\r\n        let cell = tableCellIndex[index];\r\n        tableCellIndex[index][2]++; // count of number of times cell clicked\r\n        $('tr:nth-child(' + cell[0] + ') TD:nth-child(' + cell[1] + ')', gameBoard).trigger('click');\r\n    }, 1);\r\n}\r\n\r\n/**\r\n *  Assert cell has expected class.\r\n */\r\nvar assertCellStateOn = (cell, expected) => {\r\n    return cell.className === expected;\r\n}\r\n\r\n/**\r\n * assert initial cel state of game board.\r\n */\r\nvar assertInitialBoardState = () => {\r\n\r\n    let board = document.querySelector('table#board');\r\n    let rows = board.rows.length-1;\r\n    let columns = board.rows[0].cells.length-1;\r\n\r\n    document.querySelector('#message').innerHTML = '<p>Board state cell test results</p>';\r\n\r\n    let failed = false;\r\n    for (let i=0; i <= rows; i++) {\r\n        let row = board.rows[i];\r\n        for (let j=0; j <= columns; j++) {\r\n            let expected = ((i + j) % 2 === 0) ? 'on'  : '';\r\n            if (!assertCellStateOn(row.cells[j], expected)) {\r\n                document.querySelector('#message').innerHTML += '<p>Incorrect cell state: ' + String(i) + ':' + String(j);\r\n                failed = true;\r\n            }\r\n        }\r\n    }\r\n\r\n    if (!failed) {\r\n        document.querySelector('#message').innerHTML += '<p>Passed all tests</p>';\r\n    }\r\n}\r\n\r\n/**\r\n * Generate random number within a range.\r\n *\r\n * @param {Number} min Minumum number to generate\r\n * @param {Number} max Maximum number to generate\r\n * @return {Number}\r\n */\r\nvar getRandomIndex =  (min, max) => {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min + 1)) + min;\r\n}\r\n\r\n/**\r\n * Create a table and attach to dom.\r\n *\r\n * @param {Number} rows Number of rows\r\n * @param {Number} cols Number of columns\r\n */\r\nvar renderTable = (rows, cols) => {\r\n\r\n    let fragment = document.createDocumentFragment();\r\n    let  index = 1;\r\n    tableCellIndex.length = 0;\r\n\r\n    for (let i=0; i < rows; i++) {\r\n        let rowEl = document.createElement('tr');\r\n        fragment.appendChild(rowEl);\r\n        for (let j=0; j < cols; j++) {\r\n            let cell = document.createElement('td');\r\n            cell.className = ((i + j) % 2 === 0)  ? 'on' : '';\r\n            rowEl.appendChild(cell);\r\n            tableCellIndex[index] = [i+1,j+1, 0];\r\n            index++;\r\n        }\r\n    }\r\n    gameBoard.appendChild(fragment);\r\n}\r\n\r\n/**\r\n * Inverts cells for a particular row.\r\n *\r\n * @param {Number} row Row to invert\r\n * @param {Number} index Index of cell clicked\r\n * @param {Object} currentCell The cell clicked\r\n */\r\nvar setRowCells = (row, index, currentCell) => {\r\n    let cell = currentCell || $('td:nth-child(' + index + ')', row);\r\n    cell.toggleClass( \"on\" );\r\n    if (cell.prev().prop(\"tagName\") === 'TD') {\r\n        cell.prev().toggleClass( \"on\" );\r\n    }\r\n    if (cell.next().prop(\"tagName\") === 'TD') {\r\n        cell.next().toggleClass( \"on\" );\r\n    }\r\n}\r\n\r\n/**\r\n * Inverts adjacent cells.\r\n *\r\n * @param {Object} cell The cell clicked\r\n */\r\nvar setAdjacentCells = (cell) =>  {\r\n    let cellIndex = cell.cellIndex + 1;\r\n    let currentRow = $(cell).parent();\r\n    setRowCells(currentRow, cellIndex, $(cell));\r\n    if (currentRow.prev().prop(\"tagName\") === 'TR') {\r\n        setRowCells(currentRow.prev(), cellIndex);\r\n    }\r\n    if (currentRow.next().prop(\"tagName\") === 'TR') {\r\n        setRowCells(currentRow.next(), cellIndex);\r\n    }\r\n}\r\n\r\n/**\r\n * Cell click handler\r\n *\r\n * @param {Object} cell The cell clicked\r\n */\r\nvar onCellClick = (cell) => {\r\n    setAdjacentCells(cell);\r\n    if (isWinner()) {\r\n        clearTimeout(gameTimer);\r\n        onGameEnd(undefined);\r\n        _MessageBox_js__WEBPACK_IMPORTED_MODULE_0__[\"show\"](messages.winner);\r\n    }\r\n}\r\n\r\n/**\r\n * Calculates and displays time left.\r\n *\r\n * @param {Number} time The time in seconds\r\n */\r\nvar initTimer = (time) => {\r\n\r\n    let clock = $('#clock');\r\n    let stopWatch = new _StopWatch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n        duration: time\r\n    });\r\n\r\n    stopWatch.start();\r\n\r\n    clockTimer = setInterval(function() {\r\n        var time = stopWatch.getTimeLeft();\r\n        clock.text(`${time.minutes}:${time.seconds}`);\r\n    }, 950);\r\n}\r\n\r\n/**\r\n *  Check if game is won.\r\n */\r\nvar isWinner = () => {\r\n    let cellStateCount = $('td.on', gameBoard).length;\r\n    return cellStateCount === 0 || cellStateCount === (tableCellIndex.length - 1);\r\n}\r\n\r\n/**\r\n * Check imput data is valid.\r\n */\r\nvar isValidForm = (gameData) => {\r\n    return gameData.rows > 0 && gameData.columns > 0 && gameData.time > 0;\r\n}\r\n\r\n/**\r\n * Get input data.\r\n *\r\n * @return {Object} input data\r\n *  @config {Number} The number of rows\r\n *  @config {Number} The number of columns\r\n *  @config {Number} The time\r\n */\r\nvar getFormData = () => {\r\n    gameData.rows = Math.round(Number(verticalInputField.value));\r\n    gameData.columns = Math.round(Number(horizontalInputField.value));\r\n    gameData.time = Math.round(Number(timeInputField.value)) * 1000;\r\n\r\n    return gameData;\r\n}\r\n\r\n/**\r\n * On game start handler.\r\n *\r\n * @param {Number} rows The number of rows\r\n * @param {Number} cols The number of columns\r\n * @param {Number} time The time\r\n */\r\nvar onGameStart = (rows, cols, time) => {\r\n\r\n    document.querySelector('#message').innerHTML = '';\r\n\r\n    $(gameBoard).off();\r\n    $(gameBoard).empty();\r\n\r\n    clearTimeout(gameTimer);\r\n    clearInterval(clockTimer);\r\n    clearInterval(testTimer);\r\n\r\n    renderTable(rows, cols);\r\n\r\n    $(gameBoard).delegate( \"td\", \"click\", function() {\r\n        onCellClick(this);\r\n    });\r\n\r\n    gameTimer = setTimeout(onGameEnd, time);\r\n    initTimer(time);\r\n\r\n    if (document.querySelector('#run').checked) {\r\n        runTest();\r\n    }\r\n}\r\n\r\n/**\r\n * On game end handler.\r\n */\r\nvar onGameEnd = () => {\r\n    $(gameBoard).off();\r\n    clearInterval(clockTimer);\r\n    clearInterval(testTimer);\r\n    if (!isWinner()) {\r\n        _MessageBox_js__WEBPACK_IMPORTED_MODULE_0__[\"show\"](messages.loser);\r\n    }\r\n}\r\n\r\n/**\r\n * Initialise game app.\r\n */\r\nvar init = () => {\r\n\r\n    _MessageBox_js__WEBPACK_IMPORTED_MODULE_0__[\"init\"]();\r\n    //this.messageBox = MessageBox;\r\n    gameBoard = document.querySelector('#board');\r\n\r\n    verticalInputField = document.querySelector('#vertical');\r\n    horizontalInputField = document.querySelector('#horizontal');\r\n    timeInputField = document.querySelector('#time');\r\n\r\n    $('form button#start').on('click', $.proxy(function() {\r\n        let gameData = getFormData();\r\n        if (isValidForm(gameData)) {\r\n            onGameStart(gameData.rows, gameData.columns, gameData.time);\r\n        } else {\r\n            document.querySelector('#message').innerHTML = '<h2 style=\"color:red\">Please enter a numeric values greater than 0<h2>';\r\n        }\r\n    }));\r\n\r\n    $('input').on('mouseup keyup', function(e) {\r\n        let id = $(e.target).attr('id');\r\n        if (id === 'vertical' || id === 'horizontal') {\r\n            let gameData = getFormData();\r\n            if (isValidForm(gameData)) {\r\n                document.querySelector('#message').innerHTML = '';\r\n                $(gameBoard).empty();\r\n                renderTable(gameData.rows, gameData.columns);\r\n            }\r\n        }\r\n    });\r\n\r\n    renderTable(5, 5);\r\n    getFormData();\r\n\r\n    // Dev tool buttons\r\n    $('button#test').on('click', $.proxy(function() {\r\n        assertInitialBoardState();\r\n    }));\r\n\r\n    $('button#stats').on('click', $.proxy(function() {\r\n        document.querySelector('#message').innerHTML = '';\r\n        tableCellIndex.forEach(function(item) {\r\n            document.querySelector('#message').innerHTML += '<p>Cell ' + String(item[0]) + ':' + String(item[1]) + ' clicked ' + String(item[2]) + ' times ';\r\n        });\r\n    }));\r\n\r\n}\r\n\r\nvar initApp = () => {\r\n    init();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://app/./src/colorMatch.js?");

/***/ })

/******/ });