const defaultState = {
	cart: []
};

const updateData = (state = defaultState, action) => {
	const cart = state.cart.slice();
  switch (action.type) {
    case 'CAMPAIGS_DATA':
      if(action.payload && action.payload.campaigns && action.payload.campaigns.length >0){
        action.payload.campaigns.map( (item, index) => { 
            cart.push(item);
          });
        cart.next_page_no = action.payload.next_page_no;
      }else{
        cart.length =0;
      }
      return {
        cart: cart
      };
    case 'SEARCH_CAMPAIGS_DATA':
      return {
        cart: cart
      };
    default:
      return state
  }
}

export default updateData