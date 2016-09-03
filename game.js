//select word()
var words = ['cat', 'dinousaur', ' dolphin', 'butterfly' ];
var choosenWord = [];

var SelectWord = function(words, choosenword, random ) {
	this.words = words;
			this.random = function () {
				chosenWord = words[Math.floor(Math.random() * words.length)];
				return this.choosenword;

			}
}

var cat = new SelectWord(cat)
console.log(SelectWord)

module.exports = SelectWord;