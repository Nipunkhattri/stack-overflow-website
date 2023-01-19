import * as api from '../api'
import { setcurrentUser } from './Currentuser';

export const signup = (authdata,navigate)=>async (dispatch)=>{
    // console.log(authdata);
    try {
        const {data} = await api.signup(authdata);
        // console.log(data);
        dispatch({type:'AUTH',data})
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}
export const login = (authdata,navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.login(authdata);
        dispatch({type:'AUTH',data})
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}
export const setotp = (authdata,navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.setotp(authdata);
        dispatch({type:'AUTH',data})
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

