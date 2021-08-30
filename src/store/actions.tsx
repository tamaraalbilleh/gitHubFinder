//imports 
import axios from 'axios'
import actions from './actionTypes'
// environment variables
const url = 'https://api.github.com/search/users?q='

// async functions 
export const getSearchUsers = ( query : string ) => (dispach : any , state : object) => {
    return axios.get(url + query).then((res) => {
        dispach(getUsers(res.data.items))
    }).catch((error) => {
        console.error(error)
    })
}

export const getProfileUser = (url : string)  => (dispach : any , state : object) => {
    return axios.get(url)
        .then((res) => {
            dispach(getUser(res.data))
        })
        .catch((error) => {
            console.error(error)
        })
}

export const getRepos = (name : string ) => (dispach : any , state : object) => {
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
export const getUsers = (payload : string[]) => ({
    type: actions.GET,
    payload,
})

export const resetUsers = () => ({
    type: actions.RESET,
})

export const getUser = (payload :object) => ({
    type: actions.GET_USER,
    payload: payload,
})

export const getRepo = (payload : string[]) => ({
    type: actions.REPOS,
    payload: payload,
})
