// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var lesser = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for( var i = 0; i < arr.length; i++){
        var indexOfMin = i

        for( var j = i + 1; j < arr.length; j++ ){
            if ( arr[j] < arr[indexOfMin] ){
                indexOfMin = j
            }
        }
        if ( indexOfMin !== i ){
            var lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    return arr;
}

function mergeSort(arr) {

    if ( arr.length === 1 ){
        return arr
    }

    const center = Math.floor(arr.length / 2);

    const left = arr.slice(0, center);
    const right = arr.slice(center);


    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    var result = []

    while( left.length && right.length ){
        if ( left[0] < right[0]  ){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    return [...result, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
