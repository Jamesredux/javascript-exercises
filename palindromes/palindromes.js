const reverseString = function(string) {
	let stringLength = string.length
	let newString = "" 
	for(let i = stringLength; i > 0; i--) {
		let j = i-1
		newString += string.slice(j, i)
	}
	return newString
}






const palindromes = function(string) {
	let stripString = string.toLowerCase()
													.replace(/[^\w]/g, "");	//regex function that removes everything that is not a-z
	let revString = reverseString(stripString);
	return revString == stripString;

}

module.exports = palindromes
console.log(palindromes("abba"))