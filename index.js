var http = require('http');
var url = require('url');
var request = require('request');

http.createServer(onRequest).listen(3000);

function onRequest(req, res) {


    var queryData = url.parse(req.url, true).query;
    if (queryData.url) {
        request({
            url: queryData.url
        }).on('error', function(e) {
            res.end(e);
        }).pipe(res);
        res.send({res})
    }
    else {
        res.end("no url found");
    }
}

// var http = require('http'),
//     httpProxy = require('http-proxy');

// //
// // Create a proxy server with custom application logic
// //
// var proxy = httpProxy.createProxyServer({});

// //
// // Create your custom server and just call `proxy.web()` to proxy
// // a web request to the target passed in the options
// // also you can use `proxy.ws()` to proxy a websockets request
// //
// var server = http.createServer(function(req, res) {
//   // You can define here your custom logic to handle the request
//   // and then proxy the request.
//   proxy.web(req, res, { target: 'http://127.0.0.1:5050' });
// });

// console.log("listening on port 5050")
// server.listen(5050);
// const {Router} =  require('express')
// const {createProxyMiddleware} = require('http-proxy-middleware')
// // import { Router } from 'express';
// // import { createProxyMiddleware } from 'http-proxy-middleware'

// const router = Router();

// const options = {
//     target: 'https://jsonplaceholder.typicode.com/users', // target host
//     changeOrigin: true, // needed for virtual hosted sites
//     pathRewrite: {
//        [`^/api/users/all`]: '',
//     }, // rewrites our endpoints to '' when forwarded to our target
// }
// router.get('/all', createProxyMiddleware(options));


// const app  = require('express')()

// app.get('/', (req,res) =>{
// console.log("🚀 ~ file: index.js ~ line 64 ~ app.get ~ req", req)
//     res.send('res')
// })
// app.listen(8080,()=> console.log("Proxy listening at 8080"))