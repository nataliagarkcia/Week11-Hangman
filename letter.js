

//this constructor will start as false (letter not show), if is guessed is true we will return a letter, else it will return a blank line 
var Letter = function (letter){
	this.isGuessed = false;
	this.letter = letter;

		this.display = function() {
			if(this.isGuessed = true)
				return this.letter;
			//display dash
			else return '_';

		};
};


//this will export the letter constructor
module.exports = Letter;