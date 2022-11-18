
class Winter extends Parent  {
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
   
     }  
     class Summer extends Parent  {
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
       
         }  
         class Autumn extends Parent  {
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
           
             } 
             class Spring extends Parent  {
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
               
                 }   