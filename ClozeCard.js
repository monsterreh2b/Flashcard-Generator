// constructor function for creating ClozeCard objects
var ClozeCard = function(text, cloze) {

    // Convert the incoming strings to lower case
	var textLowerCase = text.toLowerCase();
	var clozeLowerCase = cloze.toLowerCase();

    // Confirm that the cloze statement appears within the complete text
	if (!textLowerCase.includes(clozeLowerCase)) {
		console.log('Error - the ' +cloze+ ' cloze-deletion does not appear within the full text of: ' + text);
		return;
	}

if (this instanceof ClozeCard){
  this.cloze = cloze;
  this.partial = text.replace(cloze, '...');
  this.fullText = text;
}else {        
    return new ClozeCard(text, cloze);    
  } 
};


var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.cloze); // "George Washington"
console.log(firstPresidentCloze.partial); //" ... was the first president of the United States."
console.log(firstPresidentCloze.fullText); // "George Washington was the first president of the United States.""

var brokenCloze = new ClozeCard("This doesn't work", "oops"); // Should throw or log an error because "oops" doesn't appear in "This doesn't work"


// exporting our ClozeCard constructor
module.exports = ClozeCard;