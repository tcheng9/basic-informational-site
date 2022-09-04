const http = require('http');
const port = 8080;
const fs = require('fs');
var url = require('url');

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = '.'+q.pathname;
    fs.readFile(filename, function(err, data){
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end('Page not found');
        }

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
        
        });
    }).listen(8080);

console.log("server running on port 8080");


// const server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type' : 'text/html' });
//     fs.readFile('index.html', function(error, data){
//         if (error){
//             res.writeHead(404);
//             res.write('Error: File Not Found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
    
// })

// server.listen(port, function(error) {
//     if (error) {
//         console.log('Something went wrong', error)
//     } else {
//         console.log('Server is listening on port ' + port)
//     }
// })