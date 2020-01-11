const repeatString = function(string, multiplier) {
	 if (multiplier < 0) return "ERROR";
	let newString = ""
	for (let i = 0; i < multiplier; i++) {
		newString += string;
	}
	return newString
			
}

module.exports = repeatString
