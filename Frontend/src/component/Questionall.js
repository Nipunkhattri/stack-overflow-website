  import React from "react";
import { Link } from "react-router-dom";
import "./Questionall.css";
import moment from "moment"

const Questionall = ({ questions }) => {
  return (
    <>
      <div className="displayanscontainer">
        <div className="ques-contain">
          {/* {console.log(questions.votes)} */}
          <p className="b7">{questions.upvotes.length-questions.downvotes.length}</p>
          <p className="b7">Votes</p>
        </div>
        <div className="noofanscontain">
          <p className="b7">{questions.noofAnswers}</p>
          <p className="b7">answers</p>
        </div>
        <div className="container-details">
          <Link className="detaillink" to={`/Question/${questions._id}`}>
            {questions.questionTitle}
          </Link>
          <div className="display-tag-time">
            <div className="display-tags">
              {questions.questionTags.map((tag) => (
                <p className="b7" key={tag}>{tag}</p>
              ))}
            </div>
            <div className="display-time">
            <p className="b7">
              asked {moment(questions.askedOn).fromNow()} {questions.userposted}
            </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Questionall;
