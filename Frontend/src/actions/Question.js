import * as api from '../api'
import { setcurrentUser } from './Currentuser';

export const askquestion = (questiondata,navigate)=>async(dispatch)=>{
    try {
        console.log(questiondata);
        const {data} = await api.postquestion(questiondata);
        console.log(data);
        dispatch({type:"POST_QUESTION",payload:data});
        dispatch(getAllQuestions())
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}
export const getAllQuestions = () =>async(dispatch)=>{
    try {
        const {data} = await api.Getquestions();
        dispatch({type:"FETCH_QUESTIONS",payload:data})
    } catch (error) {
        console.log(error); 
    }
}
export const PostAnswer = (answerdata) => async(dispatch)=>{
    try {
        // console.log({noofAnswers,answersBody,userAnswered});
        const {id,noofAnswers,answersBody,userAnswered,userId}=answerdata;
        const {data} = await api.PostAnswer(id,noofAnswers,answersBody,userAnswered,userId)
       dispatch({type:"POST_ANSWER",payload:data});
       dispatch(getAllQuestions())
    } catch (error) {
        console.log(error);
    }

}

export const deleteQuestion = (id,navigate)=>async (dispatch)=>{

    try {
        const {data} = api.deleteQuestion(id);
        dispatch(getAllQuestions());
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}
export const deleteAnswer = (id,answerId,noofAnswers) =>async(dispatch)=>{
    try {
        console.log(id,answerId,noofAnswers);
        const {data} = await api.deleteAnswer(id,answerId,noofAnswers);
        dispatch(getAllQuestions());
    } catch (error) {
        console.log(error)  
    }
}
export const voteQuestion = (id,value,userId)=>async(dispatch)=>{
    try {
        const {data} = await api.voteQuestion(id,value,userId);
        dispatch(getAllQuestions())
        } catch (error) {
        console.log(error);
    }
}