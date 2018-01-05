import React, { Component } from 'react';
import Search from './Search';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import '../assets/stylesheets/base.scss';
import $ from 'jquery'; 

class App extends Component {

	constructor(props) {
      super(props);
      
      this.state = {
         requestFailed: false,
         loadingFlag: false
      }
       const {dispatch} = props;
       this.boundActionCreators = bindActionCreators(Actions, dispatch);
       this.handleScroll = this.handleScroll.bind(this);
       console.log(this.boundActionCreators)

   	};

   	 componentDidMount() {
   	 	let url = 'https://dev-play.milaap.org/campaigns/filter.json';
    	this.getCampaigns(url);
	  }
	  getCampaigns(url) {
        fetch(url)
		.then(response => {

	        if (!response.ok) {
	          throw Error("Network request failed")
	        }
	        return response
	      })
	      .then(d => d.json())
	      .then(d => {
	      	this.setState({
	            loadingFlag:false
	          });
	      	this.props.addCampaigsData(d);
	      }, () => {
	        this.setState({
	          requestFailed: true
	        })
	      })
	  }	
	  handleScroll(e){
			    var windowHeight = $(window).height();
			    var inHeight = window.innerHeight;
			    var scrollT = $(window).scrollTop();
			    var totalScrolled = scrollT+inHeight;
			    if(totalScrolled+100>windowHeight){ 
				    const url ='https://dev-play.milaap.org/campaigns/filter.json?page=' + this.props.items.next_page_no;
				    this.getCampaigns(url);
			    }
	  	}

   	render() {
   		window.addEventListener("scroll", this.handleScroll);
   		{this.props.items.length}
      return (
      	<div>
      		<Search />
	      	<div className="row" >
	      		{this.props.items.map((person, index) => (
		        	<div className="col" key={index}>
		        	<div className="bx">
		        		<img className="imgbx" src={person.cover_image_url} alt={"logo"} />
				       	<div className="innerbx">
				       		<h2>{person.name}</h2>
					       	<span> By: </span>{person.user_full_name} 
				        </div>
			        </div>
		        	</div>
		    ))}
		    { this.props.items.length ? '' : <p>No result</p> }
		    </div>
        </div>
      );
   	}
}


const mapStateToProps = store => {
  return {
    items: store.updateData.cart
  }
}


const mapDispatchToProps = dispatch => {
	return {
  addCampaigsData: (campaigns) => dispatch(Actions.addCampaigsData(campaigns))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
