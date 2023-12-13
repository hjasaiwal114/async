function make_Get_Request(url) {
    return new_Promise((resolve, reject) => {
        fetch(url) 
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error Status: ${response.status}');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
        
    });
}

make_Get_Request('https://example.com/data')
    .then(data => {
        console.log('Respnse data', data);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });