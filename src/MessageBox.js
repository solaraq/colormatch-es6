
const template =  '<div id="messagebox">' +
    '<div class="header"><span>Color Match</span></div>' +
    '<div class="body"><span></span></div>' +
    '<div class="footer"><button>OK</button></div>' +
    '</div>';

var messageBoxBody;

var render = () => {
    $('body').prepend(template);
}

/**
 * Adds an event handler to an element
 *
 * @param {String} event The event to handle
 * @param {Object} el The element to attach a lister to
 * @param {Function} fn The callback function to execute
 */
var addEventListsners = (event, el, fn)  => {
    if (el.addEventListener) {
        el.addEventListener(event, fn, false);
    } else if (el.attachEvent)  {
        el.attachEvent('on' + event, fn);
    }
}

/**
 * Show popup and display message.
 *
 * @param {String} message The message to display
 */
export var show = (message) => {
    setTimeout(function() {
        $('.body span', messageBoxBody).text(message);
        messageBoxBody.css('visibility', 'visible');
    }, 0);
}

/**
 * Hide popup.
 */
export var hide = () => {
    messageBoxBody.css('visibility', 'hidden');
}

/**
 * Init.
 */
export var init = () => {
    render();

    messageBoxBody = $('#messagebox');

    addEventListsners('click', document.querySelector('#messagebox button'), function() {
        hide();
    });
}



