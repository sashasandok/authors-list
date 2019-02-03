// react
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// components
import App from './components/App'

// redux
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducers from './reducers/index'

// styles
import './index.css'
import 'semantic-ui-css/semantic.min.css'

const middleware = [thunk]
const devMiddleware = [logger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...[...middleware, ...devMiddleware])),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
