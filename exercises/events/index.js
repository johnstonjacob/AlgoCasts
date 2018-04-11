// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

	constructor(){
		this.events = {}
	}

  // Register an event handler
  on(eventName, callback) {

  	if ( eventName in this.events ){
  		this.events[eventName].push(callback)
  	}else{
  		this.events[eventName] = [callback]
  	}

  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
  	if ( eventName in this.events){
  		for ( var func of this.events[eventName]){
  			func()
  		}
  	}
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
  	if ( eventName in this.events){
  		delete this.events[eventName]
  	}
  }
}

module.exports = Events;
