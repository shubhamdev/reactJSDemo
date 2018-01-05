import React, {Component} from 'react';
import '../assets/stylesheets/base.scss';


class Cart extends Component {
		constructor(props) {
      super(props);
      
      this.state = {
         data: [
            {
               "id": 9095,
               "name": "Item2",
               "price": 150,
               "discount": 5,
               "type": "literature",
               "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
            }
         ]
      }
   };

   gotocart(){

   }
	render() {
      return (
      	<div>
	    	All Items
	      <button className="btn btn-primarycart cart" onClick={this.gotocart.bind(this)}>Go to cart  </button>
	      <hr />
	    </div>
      );
   }
}


export default Cart;
