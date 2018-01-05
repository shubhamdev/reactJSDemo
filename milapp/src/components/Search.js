import React, {Component, PropTypes } from 'react';
import { withRouter, Route, Link } from 'react-router-dom'
import {Navigation} from 'react-router';
import * as Actions from '../actions'
import '../assets/stylesheets/base.scss';
import { connect } from 'react-redux';


class Search extends Component {
	constructor(props) {

    super(props);
    this.state = {
       search: ''
    }
    this.searchInCampaigns = this.searchInCampaigns.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
 };

  onInputChange(event) {
    this.setState({ search: event.target.value });
  }

  searchInCampaigns(){
    if(this.state.search){
      let api = 'https://dev-play.milaap.org/campaigns/filter.json?search=' + this.state.search;
      fetch(api)
        .then(response => {
            if (!response.ok) {
              throw Error("Network request failed")
            }
            return response
          })
          .then(d => d.json())
          .then(d => {
            debugger;
            this.props.addCampaigsData(d);
          }, () => {
            this.setState({
              requestFailed: true
            })
          })
    }
  }

	render() {
      return (
      	<div>
	    	 <span ></span>
         <input   className="form_control"
          placeholder = "Enter campaigns name..."
          onChange={this.onInputChange}
          value={this.state.search} />
          <button className="btn btn-secondary" onClick={this.searchInCampaigns}>Search</button>
	        <hr />
	    </div>
      );
   }
}


const mapStateToProps = state => {
  return {
    items: state.updateData.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
  addCampaigsData: (campaigns) => dispatch(Actions.addCampaigsData(campaigns))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

