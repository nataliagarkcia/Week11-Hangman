

//display letter
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

module.exports = Letter;