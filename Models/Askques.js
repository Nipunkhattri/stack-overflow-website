import mongoose from "mongoose" 

const QuestionSchema = mongoose.Schema({
    questionTitle:{
        type:String,
        required:"Question must have title"
    },
    questionBody:{
        type:String,
        required:"Question must have Body"
    },
    questionTags:{
        type:[String],
        required:"Question must have tags"
    },
    noofAnswers:{
        type:Number,
        default:0
    },
    upvotes:{
        type:[String],
        default:[]
    },
    downvotes:{
        type:[String],
        default:[]
    },
    userPosted:{
        type:String,
        required:"Question asked by author"
    },
    userId:{
        type:String
    },
    askedOn:{
        type:Date,
        default:Date.now
    },
    answers:[{
        answersBody:String,
        userAnswered:String,
        userId:String,
        answeredOn:{ type:Date,
            default:Date.now}
    }]
})

export default mongoose.model("Questions",QuestionSchema);