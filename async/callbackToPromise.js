function callback_BasedFunction(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
            callback(null, result);
        } else {
            callback(new  Error(''))
        }
    }, 1000);
}

function promisifiedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        callback_BasedFunction(arg1, arg2, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

promisifiedFunction(2, 3)
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console('Error:', error.message);
    });

promisifiedFunction(2, 4)
    .then(result => {
        console.log('Resulte:', result);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });