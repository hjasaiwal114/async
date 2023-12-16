function asyncOperation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Asynchronous Operation 1');
            resolve();
        }, 1000);
    });
}

function asyncOperation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Asynchronous Operation2');
            resolve();
        }, 2000);
    });
}

function asyncOperation3() {
    return Promise((resolve) => {
        setTimeout(() => {
            console.log('Asynchronous Operation 3');
            resolve();
        }, 1500);
    });
}

async function performOperation() {
    try {
        await asyncOperation1();
        await asyncOperation2();
        await asyncOperation3();
        console.log('all operations completed');
    } catch (error) {
        console.log('Error:', error.message);
    }
}

performOperation();