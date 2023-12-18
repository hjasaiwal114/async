function repeat_Function(fn, interval) {
    fn();
    const intervalId = setInterval(fn, interval);
    return function stopExecution() {
        clearInterval(intervalId);
        console.log('Execution stopped.');
    };   
}

const intervalMs = 1000;

function printMessage() {
    function printMessage() {
        console.log('Executing the function .. ');
    };
}

const intervalMs = 1000;

function primtMessage() {
    console.log('Executing the function...');
}

const stopExecution = repeat_Function(printMessage, intervalMs);

setTimeout(() => {
    stopExecution();
}, 4000)