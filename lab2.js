// Calculator with addition subtration multiplication division

var http = require('http');

//require node's url module to parse the url's query-string
var url = require('url');

//create the server
http.createServer(function (req, res) {

    
    //console.log("hii"); //test
    var qs = url.parse(req.url,true).query;
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);

    switch (method) {
        case "add":

            res.write(x + '+' + y + '=' + (x + y))
            break;

        case "subtraction":

            res.write(x + '-' + y + '=' + (x - y))
            break;

        case "multiplication":

            res.write(x + '*' + y + '=' + (x * y))
            break;

        case "division":
            res.write(x + '/' + y + '=' + (x / y))
            break;

        default:
            res.write("Invalid method");
    }
   
    res.end(); //serverend

}).listen(3000);

//page runs at http://localhost:3000/lab2.js?method=method&x=x&y=y

