import { LOGIN, LOGIN_SUCCESS, REGISTER, REGISTER_SUCCESS } from "../actionType";
import { takeEvery , put  } from 'redux-saga/effects';

function * registerUser(action){
    yield put({
        type:REGISTER_SUCCESS,
        payload:action.payload
    })
}

function * loginUser(action){
    yield put({
        type:LOGIN_SUCCESS,
        payload:action.payload
    })
}



export default function * userSaga(){
    // userAction.js method here
    yield takeEvery(REGISTER,registerUser)
    yield takeEvery(LOGIN,loginUser)
}