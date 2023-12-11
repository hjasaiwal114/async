function invokeAfteDelay(callback) {
    setTimeout(callback, 2000);
}

function display_message() {
    console.log('hello!');
}

invokeAfterDelay(display_message);