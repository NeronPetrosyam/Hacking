var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
PredatorEater = require("./predatorEater")
Danger = require("./danger")

matrix = []
 grassArr = []
 grassEaterArr = []
 predatorArr = []
 predatorEaterArr = []
 dangerArr = []

function generate(matLen,gr,grEat,pr,prEat,dn) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        console.log(x,y);
        if(matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < pr; i++){
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < prEat; i++){
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < dn; i++){
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    io.sockets.emit("send matrix", matrix)
    return matrix
}


matrix = generate(30,200,100,100,40,50)

function createObject(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            }else if (matrix[y][x] == 3){
                let gr = new Predator(x, y)
                predatorArr.push(gr)
            }
            else if (matrix[y][x] == 4){
                let gr = new PredatorEater(x,y)
                predatorEaterArr.push(gr)
           
            }
            else if (matrix[y][x] == 5){
                let gr = new Danger(x,y)
                dangerArr.push(gr)
            }
        }
    }
    io.sockets.emit("send matrix", matrix)
}

function game(){
    for(var i in grassArr){
        grassArr[i].mul()
     }
   
     for(let i in grassEaterArr) {
         grassEaterArr[i].eat()
     }
     for(let i in predatorArr)(
         predatorArr[i].eat()
     )
     for(let i in predatorEaterArr)(
         predatorEaterArr[i].eat()
     )
     for (let i in dangerArr)(
         dangerArr[i].mul()
     )
     io.sockets.emit("send matrix", matrix)
} 

setInterval(game, 300)
io.on('connection', function (socket) {
    createObject()
   
 });
 