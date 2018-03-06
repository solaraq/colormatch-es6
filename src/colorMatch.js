/**
 *  Color match application.
 */

import * as MessageBox from './MessageBox.js';
import StopWatch from './StopWatch.js';

// Holds a reference to the game board dom element
var gameBoard = null;

// Holds the timer id for the current game
let gameTimer = null;

// Holds the timer id for the clock
let clockTimer = null;

// Holds timer id for automated test
let testTimer = null;

// Stores sequential index for table cells
let tableCellIndex = [];

// Holds a reference to the vertical cells input element
var verticalInputField = null;

// Holds a reference to the horizontal cells input element
let horizontalInputField = null;

// Holds a reference to the time input element
let timeInputField = null;

// Holds values entered for the game
let gameData = {
    rows: 0,
    columns: 0,
    time: 0
};

// Reference to the custom popup
//var messageBox = null;

// Messages to display in popup
let messages = {
    winner: 'Congratulations!, you\'re a winner!',
    loser: 'Sorry, you\'re out of time. Better luck next time!.'
};

/**
 * Simulate game by generating random cell clicks.
 */
var runTest = () => {
    testTimer = setInterval(() => {
        let index = getRandomIndex(1, gameData.rows * gameData.columns);
        let cell = tableCellIndex[index];
        tableCellIndex[index][2]++; // count of number of times cell clicked
        $('tr:nth-child(' + cell[0] + ') TD:nth-child(' + cell[1] + ')', gameBoard).trigger('click');
    }, 1);
}

/**
 *  Assert cell has expected class.
 */
var assertCellStateOn = (cell, expected) => {
    return cell.className === expected;
}

/**
 * assert initial cel state of game board.
 */
var assertInitialBoardState = () => {

    let board = document.querySelector('table#board');
    let rows = board.rows.length-1;
    let columns = board.rows[0].cells.length-1;

    document.querySelector('#message').innerHTML = '<p>Board state cell test results</p>';

    let failed = false;
    for (let i=0; i <= rows; i++) {
        let row = board.rows[i];
        for (let j=0; j <= columns; j++) {
            let expected = ((i + j) % 2 === 0) ? 'on'  : '';
            if (!assertCellStateOn(row.cells[j], expected)) {
                document.querySelector('#message').innerHTML += '<p>Incorrect cell state: ' + String(i) + ':' + String(j);
                failed = true;
            }
        }
    }

    if (!failed) {
        document.querySelector('#message').innerHTML += '<p>Passed all tests</p>';
    }
}

/**
 * Generate random number within a range.
 *
 * @param {Number} min Minumum number to generate
 * @param {Number} max Maximum number to generate
 * @return {Number}
 */
var getRandomIndex =  (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Create a table and attach to dom.
 *
 * @param {Number} rows Number of rows
 * @param {Number} cols Number of columns
 */
var renderTable = (rows, cols) => {

    let fragment = document.createDocumentFragment();
    let  index = 1;
    tableCellIndex.length = 0;

    for (let i=0; i < rows; i++) {
        let rowEl = document.createElement('tr');
        fragment.appendChild(rowEl);
        for (let j=0; j < cols; j++) {
            let cell = document.createElement('td');
            cell.className = ((i + j) % 2 === 0)  ? 'on' : '';
            rowEl.appendChild(cell);
            tableCellIndex[index] = [i+1,j+1, 0];
            index++;
        }
    }
    gameBoard.appendChild(fragment);
}

/**
 * Inverts cells for a particular row.
 *
 * @param {Number} row Row to invert
 * @param {Number} index Index of cell clicked
 * @param {Object} currentCell The cell clicked
 */
var setRowCells = (row, index, currentCell) => {
    let cell = currentCell || $('td:nth-child(' + index + ')', row);
    cell.toggleClass( "on" );
    if (cell.prev().prop("tagName") === 'TD') {
        cell.prev().toggleClass( "on" );
    }
    if (cell.next().prop("tagName") === 'TD') {
        cell.next().toggleClass( "on" );
    }
}

/**
 * Inverts adjacent cells.
 *
 * @param {Object} cell The cell clicked
 */
var setAdjacentCells = (cell) =>  {
    let cellIndex = cell.cellIndex + 1;
    let currentRow = $(cell).parent();
    setRowCells(currentRow, cellIndex, $(cell));
    if (currentRow.prev().prop("tagName") === 'TR') {
        setRowCells(currentRow.prev(), cellIndex);
    }
    if (currentRow.next().prop("tagName") === 'TR') {
        setRowCells(currentRow.next(), cellIndex);
    }
}

/**
 * Cell click handler
 *
 * @param {Object} cell The cell clicked
 */
var onCellClick = (cell) => {
    setAdjacentCells(cell);
    if (isWinner()) {
        clearTimeout(gameTimer);
        onGameEnd(this);
        MessageBox.show(messages.winner);
    }
}

/**
 * Calculates and displays time left.
 *
 * @param {Number} time The time in seconds
 */
var initTimer = (time) => {

    let clock = $('#clock');
    let stopWatch = new StopWatch({
        duration: time
    });

    stopWatch.start();

    clockTimer = setInterval(function() {
        var time = stopWatch.getTimeLeft();
        clock.text(`${time.minutes}:${time.seconds}`);
    }, 950);
}

/**
 *  Check if game is won.
 */
var isWinner = () => {
    let cellStateCount = $('td.on', gameBoard).length;
    return cellStateCount === 0 || cellStateCount === (tableCellIndex.length - 1);
}

/**
 * Check imput data is valid.
 */
var isValidForm = (gameData) => {
    return gameData.rows > 0 && gameData.columns > 0 && gameData.time > 0;
}

/**
 * Get input data.
 *
 * @return {Object} input data
 *  @config {Number} The number of rows
 *  @config {Number} The number of columns
 *  @config {Number} The time
 */
var getFormData = () => {
    gameData.rows = Math.round(Number(verticalInputField.value));
    gameData.columns = Math.round(Number(horizontalInputField.value));
    gameData.time = Math.round(Number(timeInputField.value)) * 1000;

    return gameData;
}

/**
 * On game start handler.
 *
 * @param {Number} rows The number of rows
 * @param {Number} cols The number of columns
 * @param {Number} time The time
 */
var onGameStart = (rows, cols, time) => {

    document.querySelector('#message').innerHTML = '';

    $(gameBoard).off();
    $(gameBoard).empty();

    clearTimeout(gameTimer);
    clearInterval(clockTimer);
    clearInterval(testTimer);

    renderTable(rows, cols);

    $(gameBoard).delegate( "td", "click", function() {
        onCellClick(this);
    });

    gameTimer = setTimeout(onGameEnd, time);
    initTimer(time);

    if (document.querySelector('#run').checked) {
        runTest();
    }
}

/**
 * On game end handler.
 */
var onGameEnd = () => {
    $(gameBoard).off();
    clearInterval(clockTimer);
    clearInterval(testTimer);
    if (!isWinner()) {
        MessageBox.show(messages.loser);
    }
}

/**
 * Initialise game app.
 */
var init = () => {

    MessageBox.init();
    //this.messageBox = MessageBox;
    gameBoard = document.querySelector('#board');

    verticalInputField = document.querySelector('#vertical');
    horizontalInputField = document.querySelector('#horizontal');
    timeInputField = document.querySelector('#time');

    $('form button#start').on('click', $.proxy(function() {
        let gameData = getFormData();
        if (isValidForm(gameData)) {
            onGameStart(gameData.rows, gameData.columns, gameData.time);
        } else {
            document.querySelector('#message').innerHTML = '<h2 style="color:red">Please enter a numeric values greater than 0<h2>';
        }
    }));

    $('input').on('mouseup keyup', function(e) {
        let id = $(e.target).attr('id');
        if (id === 'vertical' || id === 'horizontal') {
            let gameData = getFormData();
            if (isValidForm(gameData)) {
                document.querySelector('#message').innerHTML = '';
                $(gameBoard).empty();
                renderTable(gameData.rows, gameData.columns);
            }
        }
    });

    renderTable(5, 5);
    getFormData();

    // Dev tool buttons
    $('button#test').on('click', $.proxy(function() {
        assertInitialBoardState();
    }));

    $('button#stats').on('click', $.proxy(function() {
        document.querySelector('#message').innerHTML = '';
        tableCellIndex.forEach(function(item) {
            document.querySelector('#message').innerHTML += '<p>Cell ' + String(item[0]) + ':' + String(item[1]) + ' clicked ' + String(item[2]) + ' times ';
        });
    }));

}

export var initApp = () => {
    init();
};

