var weather = document.getElementById("weather")
function generate(matLen, gr, grEat, pr, prEat, dn) {
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

    return matrix
}


var matrix = generate(30, 20, 30, 30, 30, 30)

let socket = io()
var side = 15;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let predatorEaterArr = []
let dangerArr = []

var grassButton = document.getElementById('grassButton');
var grassEaterButton = document.getElementById('grassEaterButton');
var predatorButton = document.getElementById('predatorButton');
var predatorEaterButton = document.getElementById('predatorEaterButton');
var dangerButton = document.getElementById('dangerButton');


function addGrass() {
    loop1: for (y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
                matrix[y][x] = 1
                break loop1
            }
        }
    }
}

function addGrassEater() {
    loop1: for (y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
                matrix[x][y] = 2
                break loop1
            }
        }
    }

}
function addPredator() {
    loop1: for (y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                let gr = new Predator(x, y)
                predatorArr.push(gr)
                matrix[x][y] = 3
                break loop1
            }
        }
    }
}
function addPredatorEater() {
    loop1: for (y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                let gr = new PredatorEater(x, y)
                predatorEaterArr.push(gr)
                matrix[x][y] = 4
                break loop1
            }
        }
    }

}
function addDanger() {
    loop1: for (y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                let gr = new Danger(x, y)
                dangerArr.push(gr)
                matrix[x][y] = 5
                break loop1
            }
        }
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
        }
    }

}

var idx = 0;
const seasons =
    [{ season: 'spring', grassColor: 'green', predatorColor: 'red', predatorEaterColor: 'blue', speed: 2 },
    { season: 'summer', grassColor: 'lightgreen', predatorColor: 'darkred', predatorEaterColor: 'blue', speed: 4 },
    { season: 'autumn', grassColor: 'green', predatorColor: 'red', predatorEaterColor: 'blue', speed: 2 },
    { season: 'winter', grassColor: 'white', predatorColor: 'violet', predatorEaterColor: 'blue', speed: 1 }];
// ['spring', 'summer', 'autumn', 'winter'];

function draw() {
    const { season, grassColor, predatorColor, predatorEaterColor, speed } = seasons[idx];
    frameRate(10);
    if (frameCount % 60 == 0)
        socket.emit('sned data', 'stat');
    if (frameCount % 32 === 0) {
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
                fill("grey");
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



            rect(x * side, y * side, side, side);


        }
    }


    // for (var i in grassArr) {
    //     grassArr[i].mul()
    // }
    // for (let i in grassEaterArr) (
    //     grassEaterArr[i].eat()
    // )
    // for (let i in predatorArr) (
    //     predatorArr[i].eat()
    // )
    // for (let i in predatorEaterArr) (
    //     predatorEaterArr[i].eat()
    // )
    // for (let i in dangerArr) (
    //     dangerArr[i].mul()
    // )



}
