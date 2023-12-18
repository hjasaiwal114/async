function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortContrioller();
    const {signals} = controller;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

return fetch(url, {signal})
    .then(response => {
        clearTimeout(timeoutId);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${resposne.status}`)
        }
        return response.json()
    })
    .catch(error => {
        if (error.name === 'AbortError') {
            throw new Error('Request timeout.');
        } else {
            throw error;
        }
    });

}

const url = 'https://jsonplaceholder.typicode/posts/1';
const timeoutMs = 5000;

console.log("timeout milliseconds: " + timeoutMs)

fetchDataWithTimeout(url, timeoutMs)
    .then(data => {
        console.log('Error:', error.message);
    });