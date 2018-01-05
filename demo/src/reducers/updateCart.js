const defaultState = {
	cart: []
};

const updateCart = (state = defaultState, action) => {
	const cart = state.cart.slice();
  switch (action.type) {
    case 'ADD_TO_CART':
    	let exists = 0;
    	cart.map( (item, index) => { 
    		if(item.id === action.payload.id){
    			item.count += 1;
    			exists  =1;
    		}
    	}
    		);
    	if(!exists){
    		action.payload.count = 1;
    		cart.push(action.payload);
    	}
      return {
      	cart: cart
      };
    case 'REMOVE_FROM_CART':
    	let removed = -1;
    	cart.map( (item, index) => { 
    		if(item.id === action.payload){
    			item.count -= 1;
    			if(item.count === 0){
    			removed  = index;
    		}
    		}
    	}
    		);
    	if(removed != -1){
    		cart.splice(removed, 1);
    	}
      return {
      	cart: cart
      };
    default:
      return state
  }
}

export default updateCart