import { combineReducers } from 'redux'
import searchReducer from '../components/Search/reducer'

const allReducers = combineReducers({
  search: searchReducer,
})

const rootReducer = (state, action) => allReducers(state, action)

export default rootReducer
