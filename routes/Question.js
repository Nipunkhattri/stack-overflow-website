import  express  from "express";
import { voteQuestion } from "../Controllers/Questions.js";
import {AskQuestions} from '../Controllers/Questions.js'
import {Getquestions , deleteQuestion} from '../Controllers/Questions.js'
import auth from "../Middleware/auth.js";
const router = express.Router();

router.post("/Ask",auth,AskQuestions)
router.get("/get",Getquestions)
router.delete("/delete/:id",auth,deleteQuestion)

router.patch("/vote/:id",auth,voteQuestion)

export default router;