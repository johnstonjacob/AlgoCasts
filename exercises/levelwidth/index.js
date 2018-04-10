// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	var levels = [0 ]
	var arr = [root, 's']

	while ( arr.length > 1){
		var node = arr.shift()

		if ( node === 's' ){
			arr.push(node)
			levels.push(0)
		}else{
			levels[levels.length - 1]++
			arr.push(...node.children)
		}
	}
	return levels
}

module.exports = levelWidth;
