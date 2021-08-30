interface StateTypes  {
    users :  string[] , 
    user: object, 
    repos: string[] ,
}


export const returnState = (state : any)  => {
    return {
        users :  state.users , 
        user: state.user, 
        repos: state.repos ,

    }
    

}


