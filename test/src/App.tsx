import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UseAPI from './views/UseAPI'
import store from './models/store';
import Index from './views/index'
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ padding: '50px' }}>
          <Link to='/' style={{ marginRight: '30px' }}>Home</Link>
          <Link to='/useAPI'>useAPI</Link>
        </div>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/useAPI' component={UseAPI} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
