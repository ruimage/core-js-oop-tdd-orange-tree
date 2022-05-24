const Orange = require("./orange");

class OrangeTree {
  constructor(age, height){
    this.age = age;
    this.height = height;
    this.orangesOnTree = [];
  }

  passGrowingSeason() {
    this.orangesOnTree.length = 0;
    if(this.isDead()){
      return "Tree is dead";
    }
    this.age += 1;
    if(this.height <= 25){
      this.height += 2.5;
    }
    if(this.isMature()){
      let count = Math.floor(100 + Math.random() * 200);
      while(count > 0){
        this.orangesOnTree.push(new Orange());
        count--;
      }
    }
  }


  isMature() {
    //  Returns true if the tree is old enough to bear fruit, false otherwise
    return this.age >= 6;
  }

  isDead(){
    return this.age >= 100;
  }

  hasOranges() {
    //  Returns true if there are any oranges on the tree, false otherwise
    return !!this.orangesOnTree.length;
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    else{
      return this.orangesOnTree.pop();
    }
    //  orange-picking logic goes here
  }
}

let tree = new OrangeTree(99, 10);
tree.passGrowingSeason();
// console.log(tree.orangesOnTree);
// console.log(tree.age);
// console.log(tree.height);
// console.log(tree.hasOranges());
console.log(tree);
console.log(tree.passGrowingSeason());
console.log(tree);

module.exports = OrangeTree;
