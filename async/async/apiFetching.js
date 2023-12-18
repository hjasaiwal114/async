function fetchDataFromAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json();
        });

}

function fecthMultipleAPIs(apiUrls) {
    const promise = apiUrls.map(url => fetchDataFromAPI(url));
    return Promise.all(promise);
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];
  
fecthMultipleAPIs(apiUrls)
  .then(result => {
    console.log('Combine Result:' results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  })