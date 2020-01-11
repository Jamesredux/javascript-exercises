const reverseString = function(string) {
	let stringLength = string.length
	let newString = "" 
	for(let i = stringLength; i > 0; i--) {
		let j = i-1
		newString += string.slice(j, i)
	}
	return newString
}

module.exports = reverseString

