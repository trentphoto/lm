import { combineReducers } from 'redux'
import podcastReducer from './podcastReducer'

export default combineReducers({
  podcast: podcastReducer
})
