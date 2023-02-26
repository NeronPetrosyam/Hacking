
class PredatorEater extends Parent{
    constructor(x, y) {
       super(x,y)
        this.energy = 8
       
    }
    

    mul() {
       
        var newCell = this.random(4);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newPredatorEater = new PredatorEater(newX, newY);
            predatorEaterArr.push(newPredatorEater);
            this.energy = 8
        }
    }

    move() {
        this.energy--
      
        var newCell = this.random(0);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }

    eat() {
       ;
        
        var newCell = this.random(3);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            

            if (this.energy >= 13) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
    
    die() {
        matrix[this.y][this.x] = 0
        for (var i in predatorEaterArr) {
            if (this.x == predatorEaterArr[i].x && this.y == predatorEaterArr[i].y) {
                predatorEaterArr.splice(i, 1);
                break;
            }
        }
    }
}