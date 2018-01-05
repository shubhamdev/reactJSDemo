import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import App from './App';
import reducer from '../reducers'

const store = createStore(reducer)

const Root = (props) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="*" component={App} />
          </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
