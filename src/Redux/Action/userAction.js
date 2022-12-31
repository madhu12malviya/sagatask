import { REGISTER,LOGIN } from "../actionType";

export const regiter_user = (data) =>{
    
    return{
        type:REGISTER,
        payload:data,
    }
}

export const login_user=(data)=>{
    return{
        type:LOGIN,
        payload:data,
    }
}