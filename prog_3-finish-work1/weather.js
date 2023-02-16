var Parent = require(".Parent")
module.exports = class Winter extends Parent  {
    constructor(x, y) {
        super(x,y)}
}
function update() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("white");
            }
            else if (matrix[y][x] == 0) {
                fill("lightblue");
            }
            else if (matrix[y][x] == 2) {
                fill("black");
            }
            else if (matrix[y][x] == 3){
                fill("red");
            }
            else if (matrix[y][x] == 4){
                fill("brown");
            }
            else if (matrix[y][x] == 5){
                fill("blue")
            }
            
            rect(x * side, y * side, side, side);


        }
    }
    

     }  
     module.exports = class Summer extends Parent  {
        constructor(x, y) {
            super(x,y)
        }
     }
    function draw() {
    
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
    
                if (matrix[y][x] == 1) {
                    fill("white");
                }
                else if (matrix[y][x] == 0) {
                    fill("lightblue");
                }
                else if (matrix[y][x] == 2) {
                    fill("black");
                }
                else if (matrix[y][x] == 3){
                    fill("red");
                }
                else if (matrix[y][x] == 4){
                    fill("brown");
                }
                else if (matrix[y][x] == 5){
                    fill("blue")
                }
                
                rect(x * side, y * side, side, side);
    
    
            }
        }
        
    }

         module.exports = class Autumn extends Parent  {
            constructor(x, y) {
                super(x,y)}
        }
        function draw() {
        
            for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
        
                    if (matrix[y][x] == 1) {
                        fill("white");
                    }
                    else if (matrix[y][x] == 0) {
                        fill("lightblue");
                    }
                    else if (matrix[y][x] == 2) {
                        fill("black");
                    }
                    else if (matrix[y][x] == 3){
                        fill("red");
                    }
                    else if (matrix[y][x] == 4){
                        fill("brown");
                    }
                    else if (matrix[y][x] == 5){
                        fill("blue")
                    }
                    
                    rect(x * side, y * side, side, side);
        
        
                }
            }
            
        
         
             module.exports = class Spring extends Parent  {
                constructor(x, y) {
                    super(x,y)}
            }
            function update() {
            
                for (var y = 0; y < matrix.length; y++) {
                    for (var x = 0; x < matrix[y].length; x++) {
            
                        if (matrix[y][x] == 1) {
                            fill("white");
                        }
                        else if (matrix[y][x] == 0) {
                            fill("lightblue");
                        }
                        else if (matrix[y][x] == 2) {
                            fill("black");
                        }
                        else if (matrix[y][x] == 3){
                            fill("red");
                        }
                        else if (matrix[y][x] == 4){
                            fill("brown");
                        }
                        else if (matrix[y][x] == 5){
                            fill("blue")
                        }
                        
                        rect(x * side, y * side, side, side);
            
            
                    }
                }
            
            }    
        }      