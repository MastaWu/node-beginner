/**
 * Created by mastawu on 3/7/15.
 */

//Dependencies
var http = require('http');
var url = require('url');

//Start Function
function start(route, handle) {

    //onRequest callback function
    function onRequest(req, res) {

        var path = url.parse(req.url).pathname;
        console.log("Request for " + path + " received.");

        route(handle, path, res);

        res.writeHead(200, {"Content-type": "text/plain"});
        res.write("Hello World");
        res.write("\n" + path + " was called.");
        res.end();


    }

    //http listen
    http.createServer(onRequest).listen(8000);

    console.log("Server started");

}

//Export function
exports.start = start;