import React, {Component, PropTypes } from 'react';
import { withRouter, Route } from 'react-router-dom'
import {Navigation} from 'react-router';
import '../assets/stylesheets/base.scss';


class Ordersummary extends Component {
		constructor() {
      super();
   };

	render() {
      return (
      	<div>
          <h1 >Order Summary</h1>
          <hr />
          </div>
      );
   }
}

export default Ordersummary;

