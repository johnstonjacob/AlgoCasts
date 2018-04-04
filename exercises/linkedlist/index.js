// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next=null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
	}

	insertFirst(data){
		this.head = new Node(data, this.head)
	}

	size(){
	/*MY FIRST SOLUTION - EXTRA UNNEEDED STEP
		// var cnt = 0
		// if ( this.head ){
		// 	var nxt = this.head.next
		
		// 	while( nxt ){
		// 		console.log(nxt)
		// 		nxt = nxt.next 
		// 		cnt++
		// 	}
		// 	cnt++
		// }
		
		 return cnt */
	
		var cnt = 0
		var node = this.head

		while ( node ){
			node = node.next 
			cnt++
		}

		return cnt

	}

	getFirst(){
		return this.head
	}

	getLast(){
		var node = this.head

		if ( node ){
			while ( node.next ){
				node = node.next
			}
		}

		return node
	}

	clear(){
		this.head = null
	}

	removeFirst(){
		if ( this.head ){
			this.head = this.head.next
		}
	}

	removeLast() {
	    var node = this.head
	    var prev = null;

	    if ( node ){
	    	if ( node.next ){
	    		while( node.next ){
	    			prev = node;
	    			node = node.next;
	    		}
	    		prev.next = null
	    	}else{
	    		this.head = null
	    	}
	    }else{
	    	return;
	    }
	}

	insertLast(data){
		var last = this.getLast()

		if (last){
			last.next = new Node(data)
		}else{
			this.insertFirst(data)
		}
	}

	getAt(number){
		var node = this.head;
		var counter = 0;
		if ( node ){
			while( number !== counter ){
				node = node.next
				counter++
			}
			return node		
		}else{
			return null;
		}
	}

}

module.exports = { Node, LinkedList };
