import { SET_USER_ID, SET_USER_PASSWORD } from "./action";

const initialState = {
    userId:'',
    password:'',

}

function userReducer(state = initialState, action){
    switch(action.type){
        case SET_USER_ID:
            return {...state, userId: action.payload};
        case SET_USER_PASSWORD:
            return {...state, password:action.payload};
        default:
            return state;
    }
}

export default userReducer;