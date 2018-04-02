// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// My first solution
	// var arr = str.split('')
	// var reversed = []

	// arr.forEach( (item) => {
	// 	reversed.unshift(item)
	// })
	 
	// return reversed.join('');

	// Course second solution
	// let reversed = '';

	// for( var char of str ){
	// 	reversed = char + reversed
	// }

	// return reversed

// course final solution
	return str.split('').reduce( (reduced, char) => char + reduced, '')
}

module.exports = reverse;

// COurse first solution
//return str.split('').reverse().join('')