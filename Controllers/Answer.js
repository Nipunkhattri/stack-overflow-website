import mongoose from "mongoose";
import Questions from "../Models/Askques.js";

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  // console.log({noofAnswers,answersBody,userAnswered});
  const { noofAnswers, answersBody, userAnswered, userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable.....");
  }
  updateNoofQuestion(_id, noofAnswers);
  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(_id, {
      $addToSet: { answers: [{ answersBody, userAnswered, userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    console.log(error);
  }
};

const updateNoofQuestion = async (_id, noofAnswers) => {
  try {
    await Questions.findByIdAndUpdate(_id, {
      $set: { noofAnswers: noofAnswers },
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerId, noofAnswers } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("question unavailable.....");
    }
    if (!mongoose.Types.ObjectId.isValid(answerId)) {
        return res.status(404).send("Answer unavailable.....");
    }
    updateNoofQuestion(_id,noofAnswers);
    try {
        await Questions.updateOne(
            {_id},
            { $pull:{"answers":{_id:answerId}}}
            )
            res.status(200).json({Message:"successfully deleted ..."});
    } catch (error) {
        console.log(error) 
    }
};
