var matrix = generate(30, 20, 30, 30, 30, 30, 20)

let socket = io()
var side = 15;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let predatorEaterArr = []
let dangerArr = []
let stoneArr = []

var grassButton = document.getElementById('grassButton');
var grassEaterButton = document.getElementById('grassEaterButton');
var predatorButton = document.getElementById('predatorButton');
var predatorEaterButton = document.getElementById('predatorEaterButton');
var dangerButton = document.getElementById('dangerButton');
var stoneButton = document.getElementById('stoneButton');
var weather = document.getElementById("weather")

var idx = 0;
const seasons =
    [{ season: 'Spring', grassColor: 'green', predatorColor: 'red', predatorEaterColor: 'blue', speed: 2 },
    { season: 'Summer', grassColor: 'lightgreen', predatorColor: 'darkred', predatorEaterColor: 'blue', speed: 4 },
    { season: 'Autumn', grassColor: 'green', predatorColor: 'red', predatorEaterColor: 'blue', speed: 2 },
    { season: 'Winter', grassColor: 'white', predatorColor: 'violet', predatorEaterColor: 'blue', speed: 1 }];

function generate(matLen, gr, grEat, pr, prEat, dn, st) {
    let matrix = []

    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        // console.log(x,y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < prEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < dn; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let i = 0; i < st; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }

    return matrix
}




function addGrass() {
    const matrixLength = matrix.length;
    const randomX = Math.round(Math.random() * matrixLength);
    const randomY = Math.round(Math.random() * matrixLength);
    if (matrix[randomX][randomY] === 0) {
        let gr = new Grass(randomX, randomY)
        grassArr.push(gr)
        matrix[randomX][randomY] = 1
    } else {
        addGrass();
    }
}

function addGrassEater() {
    const matrixLength = matrix.length;
    const randomX = Math.round(Math.random() * matrixLength);
    const randomY = Math.round(Math.random() * matrixLength);
    if (matrix[randomX][randomY] === 0) {
        let gr = new GrassEater(randomX, randomY)
        grassEaterArr.push(gr)
        matrix[randomX][randomY] = 2
    } else {
        addGrassEater();
    }
}

function addPredator() {
    const matrixLength = matrix.length;
    const randomX = Math.round(Math.random() * matrixLength);
    const randomY = Math.round(Math.random() * matrixLength);
    if (matrix[randomX][randomY] === 0) {
        let gr = new Predator(randomX, randomY)
        predatorArr.push(gr)
        matrix[randomX][randomY] = 3
    } else {
        addPredator();
    }
}
function addPredatorEater() {
    const matrixLength = matrix.length;
    const randomX = Math.round(Math.random() * matrixLength);
    const randomY = Math.round(Math.random() * matrixLength);
    if (matrix[randomX][randomY] === 0) {
        let gr = new PredatorEater(randomX, randomY)
        predatorEaterArr.push(gr)
        matrix[randomX][randomY] = 4
    } else {
        addPredatorEater();
    }

}
function addDanger() {
    const matrixLength = matrix.length;
    const randomX = Math.round(Math.random() * matrixLength);
    const randomY = Math.round(Math.random() * matrixLength);
    if (matrix[randomX][randomY] === 0) {
        let gr = new Danger(randomX, randomY)
        dangerArr.push(gr)
        matrix[randomX][randomY] = 5
    } else {
        addDanger();
    }
}
function addStone() {
    const matrixLength = matrix.length;
    const randomX = Math.round(Math.random() * matrixLength);
    const randomY = Math.round(Math.random() * matrixLength);
    if (matrix[randomX][randomY] === 0) {
        let gr = new Stone(randomX, randomY)
        stoneArr.push(gr)
        matrix[randomX][randomY] = 6
    } else {
        addStone();
    }
}


function setup() {

    createCanvas(matrix[0].length * side, matrix.length * side);
    createCanvas(450, 450)
    background('grey');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)

            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)

            } else if (matrix[y][x] == 3) {
                let gr = new Predator(x, y)
                predatorArr.push(gr)
            }
            else if (matrix[y][x] == 4) {
                let gr = new PredatorEater(x, y)
                predatorEaterArr.push(gr)

            }
            else if (matrix[y][x] == 5) {
                let gr = new Danger(x, y)
                dangerArr.push(gr)
            }
            else if (matrix[y][x] == 6) {
                let gr = new Stone(x, y)
                stoneArr.push(gr)
            }
        }
    }

}




function draw() {
    const { season, grassColor, predatorColor, predatorEaterColor, speed } = seasons[idx];
    frameRate(speed);
    if (frameCount % 60 == 0)
        socket.emit('sned data', 'stat');
    if (frameCount % 328 === 0) {
        idx++;
        if (idx === 4) {
            idx = 0;
        }
    }
    weather.innerHTML = season;

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {



            if (matrix[y][x] == 1) {
                fill(grassColor);
            }
            else if (matrix[y][x] == 0) {
                fill("#9d6e5e");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill(predatorColor);
            }
            else if (matrix[y][x] == 4) {
                fill(predatorEaterColor);
            }
            else if (matrix[y][x] == 5) {
                fill("black")
            }
            else if (matrix[y][x] == 6) {
                fill("grey")
            }




            rect(x * side, y * side, side, side);


        }
    }


    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) (
        grassEaterArr[i].eat()
    )
    for (let i in predatorArr) (
        predatorArr[i].eat()
    )
    for (let i in predatorEaterArr) (
        predatorEaterArr[i].eat()
    )
    for (let i in dangerArr) (
        dangerArr[i].mul()
    )



}
