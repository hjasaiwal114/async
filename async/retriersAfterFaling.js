function fetchDataWithRetry(url, maxretries) {
    return new Promise((resolve, reject) => {
        let retires = 0;
        const fetchData = () => {
            fetch(url) 
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => {
                    retries ++;
                    if (retries <= maxRetries) {
                        console.log(`Request failed. Retrying (${retiers}/${maxRetries})...`);
                        fetchData();
                    } else {
                        reject(new Error(`Failed after ${maxRetries} retries. Error: ${error.message}`));
                    }
                });
        };
        fetchData();
    });
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
console.log("URL->", apiUrl);
const maxRetries = 3;

fetchDataWithRetry(api, maxRetries)
    .then(data => {
        console.log('Fetched data', data);
    })
    .catch(error => {
        console.log('error:', error.message);
    });