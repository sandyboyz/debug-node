const axios = require('axios');

async function fetchJSON(url){
    const request = await axios.get(url);
    const data = request.data;
}


fetchJSON('https://jsonplaceholder.typicode.com/posts');
fetchJSON('https://jsonplaceholder.typicode.com/posts/1');
fetchJSON('https://jsonplaceholder.typicode.com/posts/2');
