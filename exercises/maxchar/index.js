// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

	let obj = {}
	for( var char of str ){
		char in obj ? obj[char]++ : obj[char] = 1
	}

	return Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)

}

module.exports = maxChar;
