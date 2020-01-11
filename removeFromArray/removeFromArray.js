const removeFromArray = function(array, ...args) {
 		
  let newArray = []
  
  for(let i= 0; i< array.length; i++) {
    if (!args.includes(array[i])) {
       newArray.push(array[i])
    }
  }
  return newArray
}

module.exports = removeFromArray
