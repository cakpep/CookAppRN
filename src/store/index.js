import { createStore,combineReducers } from 'redux'
import placesReducer from '../reducers/places'
import counterReducer from '../reducers/counter'

const rootReducer = combineReducers({
  places: placesReducer,
  counter: counterReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore