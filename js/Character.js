// Iteration 2
class Character {
    constructor(initialCol,initalRow,imgPaths) {
      this.col = initialCol
      this.row = initalRow
      this.orientation = 'down'
      this.score = 0
  
      // Save all the images in the character 
      this.imgs = {}

      // Loop keys of object
      // We are assigning to this.imgs some keys in order to access them through the object
      for (let orientation in imgPaths) {
        this.imgs[orientation] = new Image()
        this.imgs[orientation].src = imgPaths[orientation]
      }
    }
    moveUp(){
      this.row--
      this.orientation = 'up'
    }
    moveDown(){
      this.row++
      this.orientation = 'down'
    }
    moveLeft(){
      this.col--
      this.orientation = 'left'
    }
    moveRight(){
      this.col++
      this.orientation = 'right'
    }
  }