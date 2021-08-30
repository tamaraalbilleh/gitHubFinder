import {ActionObjects } from './actionTypes'
import actions from './actionTypes'

let initialState = {
    user: {},
}

const useReducer = (state = initialState, action :ActionObjects ) => {

    let { type, payload } = action;

    switch (type) {
        case actions.GET_USER:
            return { user: payload };
        case actions.RESET:
            let newState = {}
            return { user: newState };
        default:
            return state
    }
    
}


export default useReducer