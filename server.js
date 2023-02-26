var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

io.on('connection', (socket)=>{
    socket.on('sned data', (data)=>{console.log(data)})
})

server.listen(3000);
