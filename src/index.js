import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import locationMiddleware from './middlewares/api'

import App from './containers/App/index.js'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(locationMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
)