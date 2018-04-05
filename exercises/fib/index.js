// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {

// 	var x = [0,1]

// 	for( var i = 0; i < n; i++ ){
// 		x.push(x[i] + x[i + 1])
// 	}

// 	console.log(x)

// 	return x[x.length - 2]

// }




// function fib(n){

// 	if ( n < 2){
// 		return n;
// 	}

// 	return fib( n -1) + fib(n-2)

// }

var memoize = function(func) {
    var result = {};

    return function(){
        var args = JSON.stringify(arguments)

        return result[args] = ( args in result ) ? result[args] : func.apply(this, arguments)

   }
}

function fib(n){

	if ( n < 2){
		return n;
	}

	return fib(n - 1) + fib( n - 2)

}

fib = memoize(fib)



module.exports = fib;
