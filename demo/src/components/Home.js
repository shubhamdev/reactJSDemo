import React, {Component, PropTypes } from 'react';
import { withRouter, Route, Link } from 'react-router-dom'
import {Navigation} from 'react-router';
import '../assets/stylesheets/base.scss';
import { connect } from 'react-redux';


class Home extends Component {
		constructor(props) {

      super(props);
      this.state = {

      }
   };

	render() {
    let count = 0;
     this.props.items.forEach((item) => count+= item.count);
      const route = count === 0 ? '#' : '/cart';
      return (
      	<div>
	    	 <span >All Items</span>
	        <Link to={route} className="btn btn-primarycart cart">Go to cart { count == 0 ? '' : count }  </Link>
	        <hr />
	    </div>
      );
   }
}


const mapStateToProps = state => {
  return {
    items: state.updateCart.cart
  }
}

export default connect(mapStateToProps)(Home);

