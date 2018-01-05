import React, { Component } from 'react';
import Home from './Home';
import Popup from './Popup';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import '../assets/stylesheets/base.scss';

class App extends Component {

	constructor(props) {
      super(props);
      
      this.state = {
         data: [
				{
					"id": 9090,
					"name": "Item1",
					"price": 200,
					"discount": 10,
					"type": "fiction",
					"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
				},
				{
					"id": 9091,
					"name": "Item2",
					"price": 250,
					"discount": 15,
					"type": "literature",
					"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
				},
				{
					"id": 9092,
					"name": "Item3",
					"price": 320,
					"discount": 5,
					"type": "literature",
					"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
				},
				{
					"id": 9093,
					"name": "Item4",
					"price": 290,
					"discount": 0,
					"type": "thriller",
					"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
				},
				{
					"id": 9094,
					"name": "Item1",
					"price": 500,
					"discount": 25,
					"type": "thriller",
					"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
				},
				{
					"id": 9095,
					"name": "Item2",
					"price": 150,
					"discount": 5,
					"type": "literature",
					"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
				},
				{
					"id": 9096,
					"name": "Item3",
					"price": 700,
					"discount": 22,
					"type": "literature",
					"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
				},
				{
					"id": 9097,
					"name": "Item4",
					"price": 350,
					"discount": 18,
					"type": "fiction",
					"img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
				}
			],
		 showPopup: false
      }
       const {dispatch} = props;
       this.boundActionCreators = bindActionCreators(Actions, dispatch)
       console.log(this.boundActionCreators)

   	};

   	addToCart(person){
		this.props.addToCart(person);
	}

   	render() {
      return (
      	<div>
      		<Home />
	      	<div className="row">
		    	{this.state.data.map((person, index) => (
		        	<div className="col" key={index}>
		        	<div className="bx">
		        		<img className="imgbx" src={person.img_url} alt={"logo"} />
				       	<div className="innerbx">
				       		<h2>{person.name}</h2>
					       	<span>Price: </span>{person.price} 
					        <button className="btn btn-primary" onClick={this.addToCart.bind(this, person)}>Add to cart</button>
				        </div>
				        
			        </div>
		        	</div>
		    ))}
		    </div>
		    {this.state.showPopup ? 
	          <Popup 	            
	          />
	          : null
	        }
        </div>
      );
   	}
}

const mapStateToProps = store => {
  return {
    counter: store.counter
  }
}


const mapDispatchToProps = dispatch => {
	return {
  addToCart: (person) => dispatch(Actions.addToCart(person))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
