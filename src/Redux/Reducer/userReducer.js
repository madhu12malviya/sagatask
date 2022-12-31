import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actionType"
const initialState = {
    data: [],
    login: []
}

const userReducer = (state = initialState, action) => {

    console.log(action)
    switch (action.type) {

        case REGISTER_SUCCESS:
            
            let registerData = state.data;
            console.log(11, registerData)
            registerData.push(action.payload);
            debugger
            localStorage.setItem("registerdata", JSON.stringify(registerData))
            return {
                ...state,
                data: [...registerData]
            }

        case LOGIN_SUCCESS:
            const login = (JSON.parse(localStorage.getItem("registerdata")))
            login?.map((logindata) => {
                if (
                    logindata.email === action.payload.email &&
                    logindata.password === action.payload.password
                ) {
                    let token = "HGAHG*&*&(GJHjshjsh8888"
                    localStorage.setItem("tokenData", JSON.stringify(token))

                }
                else{
                    localStorage.removeItem("tokenData")
                    console.log("incorrect credential")
                }
            })
            console.log(333, action.payload)

        default:
            return state
    }
}
export default userReducer;

