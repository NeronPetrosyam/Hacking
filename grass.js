var Parent = require("./parent")
module.exports = class Grass extends Parent{
    constructor(x, y) {
      super(x,y)
        this.multiply = 1
    }
    // chooseCell(ch) {
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
    //             if (matrix[y][x] == ch) {
    //                 found.push(this.directions[i]);
    //             }
    //         }   
    //     }
    //     return found;
    //  }
    
    mul() {
        this.multiply++;
        // var emptyCells = this.random(0);
        var newCell = this.random(0);

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
   
    
    
}
