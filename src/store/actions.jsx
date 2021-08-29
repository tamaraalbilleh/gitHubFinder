//imports 
import axios from 'axios'

// environment variables
const url = 'https://api.github.com/search/users?q='

// async functions 
export const getSearchUsers = query => (dispach, state) => {
    return axios.get(url + query).then((res) => {
        dispach(getUsers(res.data.items))
    }).catch((error) => {
        console.error(error)
    })
}

export const getProfileUser = (url) => (dispach, state) => {
    return axios.get(url)
        .then((res) => {
            dispach(getUser(res.data))
        })
        .catch((error) => {
            console.error(error)
        })
}

export const getRepos = (name) => (dispach, state) => {
    let url = `https://api.github.com/users/${name}/repos?per_page=5&sort=created:asc`;
    return axios.get(url)
        .then((res) => {
            dispach(getRepo(res.data))
        })
        .catch((error) => {
            console.error(error)
        })
}


// actions 
export const getUsers = payload => {
    return {
        type: 'GET',
        payload: payload,
    }
}

export const resetUsers = () => {
    return {
        type: 'RESET',

    }
}

export const getUser = payload => {
    return {
        type: 'GET_USER',
        payload: payload,
    }
}

export const getRepo = payload => {
    return {
        type: 'REPOS',
        payload: payload,
    }
}
