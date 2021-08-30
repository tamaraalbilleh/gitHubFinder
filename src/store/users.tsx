import {ActionObjects } from './actionTypes'
import actions from './actionTypes'

let initialState = {
    users: [],
}

const userReducer = (state = initialState, action : ActionObjects) => {

    let { type, payload } = action;

    switch (type) {
        case actions.GET:
            return { users: payload };
        case actions.RESET:
            let newState : string[] = []
            return { users: newState };
        default:
            return state
    }
    
}


export default userReducer