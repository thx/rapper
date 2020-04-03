import React from 'react';
import { Provider } from 'react-redux';
import store from './models/store';
import Request from './components/request';
import UseAPI from './components/useAPI';
import UseAPIRepeat from './components/useAPIRepeat';
import RequestPost from './components/request-post';
import RequestForm from './components/request-form';
import ClassComponent from './components/class-component';
import RequestNormal from './components/request-normal';
import RequestRestful from './components/request-restful';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="card">
          <Request />
        </div>
        <div className="card">
          <UseAPI />
        </div>
        <div className="card">
          <UseAPIRepeat />
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
        <div className="card">
          <RequestRestful />
        </div>
      </div>
    </Provider>
  );
};

export default App;
