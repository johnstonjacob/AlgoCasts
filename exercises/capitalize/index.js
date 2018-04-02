// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	var arr = str.split(' ')

	arr.forEach( (item, index) => {
		arr[index] = item.charAt(0).toUpperCase() + item.substring(1)
	})

	return arr.join(' ')
}

module.exports = capitalize;
