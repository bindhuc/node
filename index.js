const http = require("http");  //es5

// create server
http.createServer(function(request, response){
 

    // only single api is 
    //used below and its route is default that is  /

    // response.write("Hello World");


// html response
    // response.write("<h1> hey</h1>");

// using string    
     let user = {name:"john",age:25};
     response.write(JSON.stringify(user));

// closing the server
    response.end();

    
}).listen(3001);

