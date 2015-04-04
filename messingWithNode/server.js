// http://localhost:8888/
// Prints out "Hello world" in that particular font (I think)

var http = require("http"); // Requires the http module that ships with Node.js
							// and made accessible through var http


// http module has createServer function that returns an object 
http.createServer(function(request, response) { // Passing anonymous function into createServer
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888); // Object has method called listen and we give it a port number 

