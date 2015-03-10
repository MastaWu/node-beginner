
//Route function (passes in handle, pathname, and response)
function route(handle, pathname, res){

    console.log("You are about to request for " + pathname);

    if(typeof handle[pathname] === 'function'){

        //Calls function in routeHandler.js
        handle[pathname](res);

    }else{

        //if pathname cannot be found, display error
        console.log("Request handler for " + pathname + " not found.");
        res.writeHead(404, {"Content-type": "text/plain"});
        res.write("404 not found");
        res.end();

    }

}

//Export function
exports.route = route;