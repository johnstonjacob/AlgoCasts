// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data){
		this.data = data
		this.children = []
	}

	add(data){
		this.children.push(new Node(data))
	}

	remove(data){
		//MY FIRST SOLUTION
		// this.children.splice(this.children.indexOf(data), 1)

		this.children = this.children.filter( item =>{
			return item.data !== data
		})
	}
}

class Tree {
	constructor(){
		this.root = null
	}

	traverseBF(func){
		//Create empty array
		//Take root node and add into array
		//While array has elements, take out first element, retrieve children, add into array

		var arr = [ this.root ];

		while( arr.length ){
			var node = arr.shift();
			arr.push(...node.children);
			func(node)
		}
	}

	traverseDF(func){
		var arr = [ this.root ];

		while( arr.length ){
			var node = arr.shift();
			arr.unshift(...node.children);
			func(node)
		}
	}
}

module.exports = { Tree, Node };
