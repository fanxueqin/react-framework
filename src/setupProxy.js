const proxy = require('http-proxy-middleware');
const target = 'http://127.0.0.1:8080';  //你自己的ip
module.exports = function(app) {
    app.use(proxy('/show', { target }))
}; 