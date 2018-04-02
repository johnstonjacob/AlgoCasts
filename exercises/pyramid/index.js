// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	for ( var i = 1; i <= n; i++){
		for (var j = 1; j <= i; j++){
			console.log('#')
		}
	}
}

pyramid(4)
console.log('SPLIT')
pyramid(5)

module.exports = pyramid;
