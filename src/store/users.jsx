let initialState = {
    users: [],
}

const userReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'GET':
            return { users: payload };
        case 'RESET':
            let newState = []
            console.log('state in store', state)
            return { users: newState };
        default:
            return state
    }
}


export default userReducer