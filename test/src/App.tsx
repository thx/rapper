import React from 'react';
import { Provider } from 'react-redux';
import store from './models/store';
import Request from './components/request';
import RequestPost from './components/request-post';
import RequestForm from './components/request-form';
import ClassComponent from './components/class-component';
import RequestNormal from './components/request-normal';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="card">
          <Request />
        </div>
        <div className="card">
          <RequestPost />
        </div>
        <div className="card">
          <RequestForm />
        </div>
        <div className="card">
          <ClassComponent />
        </div>
        <div className="card">
          <RequestNormal />
        </div>
      </div>
    </Provider>
  );
};

export default App;
