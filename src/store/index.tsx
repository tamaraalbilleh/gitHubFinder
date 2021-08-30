import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from './middleware/thunk'

import userReducer from './users'
import useReducer from './user'
import repoReducer from './repos'


let reducers = combineReducers({
    users: userReducer,
    user: useReducer,
    repos: repoReducer,
})


const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();