const http = require('https');

const options = {
    method: 'GET',
    hostname: 'weatherapi-com.p.rapidapi.com',
    port: null,
    path: '/current.json?q=53.1%2C-0.13',
    headers: {
        'X-RapidAPI-Key': 'f2121ae761msh6f27cfd1b1656dep1543d7jsn82105d964b14',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on('data', function (chunk) {
        chunks.push(chunk);
    });

    res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();