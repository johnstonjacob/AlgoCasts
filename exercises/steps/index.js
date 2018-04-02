// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, i = 1) {
	// for ( var i = 1; i <= n; i++){
	// 	console.log('#'.repeat(i) + ' '.repeat(n-i))
	// }

	if ( i > n ){
		return;
	}

	console.log('#'.repeat(i) + ' '.repeat(n-i))

	steps(n, i + 1)
}

steps(15)

module.exports = steps;
