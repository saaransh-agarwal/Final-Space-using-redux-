import { combineReducers } from 'redux'
import postReducer from './Posts/Postreducer'

const rootReducer = combineReducers({
    
    post: postReducer
})

export default rootReducer