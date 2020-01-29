const caesar = function(string, shift) {
		let stg = [...string]; //converts string to array of characters;
		let newString = stg.map(char => changeChar(char, shift));
		return newString.join("");
		//console.log(newString);

}


const changeChar = function(char, shift) {
	let trueShift = shift%26;  //deals with shifts bigger than 26
	let code = char.charCodeAt(0); //convert letter to ascii code

	//upper case
	if (code > 64 && code < 91 )	{
		code += trueShift;
		code > 90 ? code -=26 : code;
		code < 65 ? code +=26 : code;
		return String.fromCharCode(code);
	} else if (code > 96 && code < 123 ) {
		//lower case
		code += trueShift;
		code > 122 ? code -=26 : code;
		code < 97 ? code +=26 : code;
		return String.fromCharCode(code);
	} else {
		//not a-z return untouched.
		return String.fromCharCode(code);
	}

};


module.exports = caesar
