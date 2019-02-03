// redux
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import authors from './authorReducer'

export default combineReducers({
  routing: routerReducer,
  authors,
})
