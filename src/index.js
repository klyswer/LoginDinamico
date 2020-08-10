import React from 'react'
import ReactDOM from 'react-dom'
import App from './componentes/App'
import './styles/styles.scss'
import { Provider } from 'react-redux';
import store from './redux/store'
import {getAllSpecialities, getAllCurses} from './redux/actionCreators'

store.dispatch(getAllSpecialities())
store.dispatch(getAllCurses())

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
