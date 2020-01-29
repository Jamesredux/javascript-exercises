	
const fibonacci = function(count) {
	  if (count < 1) {
	  	return "OOPS";
	  } else if (count == 1 || count == 2) {
		return 1
	} else {
		let tally = 2;
		let lowerNumber = 1;
		let upperNumber = 1;
		while (tally < count) {
			let tempNumber = upperNumber;
			upperNumber += lowerNumber;
			lowerNumber = tempNumber;
			tally += 1;
		}
		return upperNumber;
	}
}

module.exports = fibonacci
