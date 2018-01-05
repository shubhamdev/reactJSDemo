import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import Ordersummary from './OrderSummry';
import '../assets/stylesheets/base.scss';
class Cartitem extends Component {
		constructor() {
      super();
      
      this.state = {
      }
   };

   componentWillReceiveProps(nextProps){
      if(nextProps.items.length == 0){
         this.props.location.pathname = '/';
         this.props.history.push('/');
      }
   }

   addToCart(item){
      this.props.addToCart(item);
   }

   removeFromCart(id){
      this.props.removeFromCart(id);
   }
	render() {
      let totalPrice = 0;
      let totalItem = 0;
      let totaldiscount = 0;
      let typediscount = 0;
      this.props.items.forEach((item) => {
         totalPrice += item.price * item.count;
         totalItem += item.count;
         totaldiscount += item.price*item.discount/100;
         if(item.type=='fiction'){
            typediscount += item.price*15/100;
         }
      });

      return (
         <div>
         <h2>Order Summary</h2>
         <div id="maincontainer">
            <div id="leftcolumn" className="rTable">
               <div className="tbl">
                  <div className="rTableHead" ><strong>Items</strong></div>
                  <div className="rTableHeadq" ><span >Qty</span></div>
                  <div className="rTableHeadp" >Price</div>
               </div>
               <div className="rTableBody">
                  {this.props.items.map((item, index) => (
                    <div className="rTableRow" key={item.id}>
                     <div className="rTableCell">
                        <img className="imgbx1" src={item.img_url} alt={"logo"} /> {item.name} <span className="cross"> X </span>
                     </div>
                     <div className="rTableCell">
                        <button className="btn" onClick={this.removeFromCart.bind(this, item.id)}>-</button>
                          <span className="left"> {item.count}</span>  
                        <button className="btn left" onClick={this.addToCart.bind(this,item)}>+</button>
                     </div>
                     <div className="rTableCell">
                        {item.price * item.count}
                     </div>
                  </div>
                  ))}
               </div>
            </div>
            <div id="contentwrapper sticky">
               
               <div className="row bg">   
                  <div >
                     <div className="bx borderr">
                        <h4 > Total </h4>
                        <div className="bg1">
                           <div> Items ({totalItem}) : <span className="left1">{totalPrice}</span></div>
                           <div> Discount : <span className="left1">{totaldiscount}</span></div>
                           <div> Type discount : <span className="left1">{typediscount}</span></div>
                           
                        </div>
                        <div className="innerbx1">
                           <span className="left">Order total: <span className="left1">{totalPrice - totaldiscount- typediscount}</span></span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
	     </div>
        </div>
      );
   }
}

const mapStateToProps = state => {
  return {
    items: state.updateCart.cart
  }
}


const mapDispatchToProps = dispatch => {
   return {
  addToCart: (item) => dispatch(Actions.addToCart(item)),
  removeFromCart : (id) => dispatch(Actions.removeFromCart(id))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cartitem);
