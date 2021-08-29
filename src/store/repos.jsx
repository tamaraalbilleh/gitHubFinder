let initialState = {
    repos: [],
}

const repoReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'REPOS':
            return { repos: payload };
        case 'RESET':
            let newState = {}
            return { repos: newState };
        default:
            return state
    }
}


export default repoReducer