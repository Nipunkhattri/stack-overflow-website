import {combineReducers} from "redux";
import authreducers from "./auth";
import currentUserreducer from "./currentuser"
import questionReducer from "./Question"
import userreducer from "./user"

export default combineReducers({
    authreducers,currentUserreducer,questionReducer,userreducer
})