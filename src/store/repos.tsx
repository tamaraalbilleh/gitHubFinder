import actions from './actionTypes'
import {ActionObjects } from './actionTypes'

let initialState = {
    repos: [],
}

const repoReducer = (state = initialState, action : ActionObjects) => {
    
    let { type, payload } = action;

    switch (type) {
        case actions.REPOS:
            return { repos: payload };
        case actions.REPOS:
            let newState = {}
            return { repos: newState };
        default:
            return state
    }

}


export default repoReducer