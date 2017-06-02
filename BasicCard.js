// constructor function for creating BasicCard objects
var BasicCard = function(front, back) {
    if (this instanceof BasicCard){
  this.front = front;
  this.back = back;
  }else {        
    return new BasicCard(front, back);    
  } 
};


var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front); // "Who was the first president of the United States?"
console.log(firstPresident.back);  // "George Washington"
// exporting our BasicCard constructor
module.exports = BasicCard;