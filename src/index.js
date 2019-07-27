import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import App from './components/App';
import {Provider} from 'react-redux'
import store from './redux/store'
import { getAllSpecialities } from './redux/acionCreators';

store.dispatch(getAllSpecialities())

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

