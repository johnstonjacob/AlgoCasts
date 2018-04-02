// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
//My first solution
	// var i = str.length - 1
	// for ( var char of str ){
	// 	if ( char !== str[i] ){
	// 		return false
	// 	}
	// 	i--
	// }

	// return true;

// Course first solution
	// let reversed = str.split('').reverse().join('')

	// return str === reversed


// Course second solution

	return str.split('').every( (char, index) =>{
		return char === str[str.length - 1 - index]
	})
}

module.exports = palindrome;
