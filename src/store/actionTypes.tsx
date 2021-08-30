
interface ActionTypes  {
    GET: string;
    RESET: string;
    GET_USER: string;
    REPOS: string;
}
   
const actions: ActionTypes = {
    GET: "GET",
    RESET : "RESET",
    GET_USER : "GET_USER",
    REPOS : "REPOS",
}

export interface ActionObjects {
    type : string , 
    payload : object | string[]
}
export default actions