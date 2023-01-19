import * as api from '../api'

export const getAllusers = () => async (dispatch)=>{
    try {
        const {data} = await api.getAlluser();
        console.log(data);
        dispatch({type:"FETCH_USER",payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updatedprofile = (id,updateddata) => async(dispatch)=>{
    try {
        const {data} = await api.updateprofile(id,updateddata);
        dispatch({type:"UPDATE_CURRENT_DATA",payload:data});
    } catch (error) {
        
    }
}