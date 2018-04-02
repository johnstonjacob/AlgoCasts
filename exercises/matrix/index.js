// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

	var results = []; //Create empty array called results
	var counter = 1; //Create a counter variable starting at 1

	var startColumn = 0
	var startRow = 0
	var endColumn = n - 1
	var endRow = n - 1

	for ( var i = 0; i < n; i++ ){
		results.push([])
	}

	while ( startColumn <= endColumn && startRow <= endRow){

		for ( let i = startColumn; i <= endColumn; i++){
			results[startRow][i] = counter
			counter++
		}

		startRow++

		//Right column

		for ( let i = startRow; i <= endRow; i++){
			results[i][endColumn]= counter;
			counter++
		}

		endColumn--

		//Bottom row
		for ( let i = endColumn; i >= startColumn; i--){
			results[endRow][i] = counter;
			counter++
		}

		endRow--

		for ( let i = endRow; i >= startRow; i-- ){
			results[i][startColumn] = counter;
			counter++
		}

		startColumn++


	}
	return results
}

module.exports = matrix;
