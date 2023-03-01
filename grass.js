

class Grass extends Parent{
    constructor(x, y) {
      super(x,y)
        this.multiply = 1
    }
    
     
    
    
    mul() {
        this.multiply++;
        var newCell = this.random(0);

        if (newCell && this.multiply >= 7) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
  
   
    
    
}
