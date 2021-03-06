import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import store from './Redux/Store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}

export default App;
