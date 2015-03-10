/**
 * App: Node-beginner
 * Author: Stephen Wu
 */

//Dependencies
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./routeHandler');

//Instantiation
var handle = {}

//Defining requests
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

//Start server and routing
server.start(router.route, handle);