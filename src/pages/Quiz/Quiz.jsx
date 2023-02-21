import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FinishAttempt from "../../components/FinishAttempt/FinishAttempt";
import Footer from "../../components/FormFooter/Footer";
import Question from "../../components/Question/question";

const Quiz = ({ loadQuestions, questions }) => {
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finalAnswers, setFinalAnswers] = useState([]);

  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((x) => x + 1);
      setFinalAnswers((x) => [
        ...x,
        { questionId: questions[currentQuestion].id, answers },
      ]);
    }
  };

  const submitFinalAnswer = () => {
    dispatch({
      type: "SUBMIT_ANSWERS_REQUEST",
      payload: finalAnswers,
    });
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <div style={{ height: "100%" }} className="flex flex-col">
      <div className="px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-between">
        {/* <div className="p-1" style={{ backgroundColor: "red" }}></div> */}
        <div>
          <p className="text-2xl font-semibold">Fantasy Quiz</p>
        </div>
        <Link to="/Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
      {questions && (
        <>
          {currentQuestion != questions.length ? (
            <Question
              question={questions[currentQuestion]}
              setAnswer={setAnswers}
            />
          ) : (
            <FinishAttempt />
          )}

          <Footer
            counter={currentQuestion}
            questions={questions}
            nextQuestion={nextQuestion}
            addFinalAnswer={submitFinalAnswer}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ questions, history }) => ({
  questions,
  history,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuestions: () =>
    dispatch({
      type: "LOAD_QUESTIONS_REQUEST",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
