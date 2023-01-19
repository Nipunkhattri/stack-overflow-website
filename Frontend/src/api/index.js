import axios from 'axios'
// ill-rose-drill-wear.cyclic.app
const api= axios.create({baseURL:"https://ill-rose-drill-wear.cyclic.app/"});
// https://stack-overflow-clone-website.herokuapp.com/
api.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req;
})

export const login = (authdata)=>api.post("/user/login",authdata);
export const signup = (authdata)=>api.post("/user/signup",authdata);

export const postquestion = (questiondata)=>api.post("/questions/Ask",questiondata);
export const Getquestions = ()=>api.get("/questions/get");

export const PostAnswer = (id,noofAnswers,answersBody,userAnswered,userId)=>api.patch(`/answer/post/${id}`,{noofAnswers,answersBody,userAnswered,userId});

export const deleteQuestion = (id) =>api.delete(`/questions/delete/${id}`)
export const deleteAnswer = (id,answerId,noofAnswers) => api.patch(`/answer/delete/${id}`,{id,answerId,noofAnswers})

export const voteQuestion =(id,value,userId)=>api.patch(`/questions/vote/${id}`,{value,userId})

export const getAlluser = ()=>api.get('/user/getAlluser')

export const updateprofile = (id,updateddata) =>api.patch(`/user/update/${id}`,updateddata)

export const setotp = (authdata)=>api.post("/user/setotp",authdata);
