let initialState = {
    user: {},
}

const useReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'GET_USER':
            return { user: payload };
        case 'RESET':
            let newState = {}
            return { user: newState };
        default:
            return state
    }
}


export default useReducer