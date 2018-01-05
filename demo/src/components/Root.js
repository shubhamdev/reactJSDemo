/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */ 
import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import App from './App';
import Home from './Home';
import Cartitem from './Cartitem';
import reducer from '../reducers'

const store = createStore(reducer)

const Root = (props) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/cart" component={Cartitem} />
            <Route path="*" component={App} />
          </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
