import { useState } from "react";
import "./FoodQuestions.css"; // Importing CSS file

const FoodQuestions = () => {
  const [choice, setChoice] = useState("");
  const [answers, setAnswers] = useState({});
  const [showQuestions, setShowQuestions] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isSubmitted, setIsSubmitted] = useState(false);

  const vegQuestions = [
    "What is your favorite vegetable?",
    "Do you prefer salads or cooked vegetables?",
    "How often do you eat green leafy vegetables?",
  ];

  const nonVegQuestions = [
    "What is your favorite non-veg dish?",
    "Do you prefer chicken or seafood?",
    "How often do you eat non-veg meals?",
  ];

  const handleChoice = (type) => {
    setChoice(type);
    setAnswers({});
    setIsSubmitted(false);
    setShowQuestions(true); // Trigger animation
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const dataToSend = {
        choice,       // Veg or Non-Veg choice
        answers,      // Answers to the questions
      };

      console.log(dataToSend);
  }

  const questions = choice === "veg" ? vegQuestions : nonVegQuestions;

  return (
    <>
      <div className="container">
        <h1 className="title">Are you Veg or Non-Veg?</h1>

        {/* Selection Buttons */}
        {!choice && (
          <div className="button-container">
            <button onClick={() => handleChoice("veg")} className="option-btn">
              Veg
            </button>
            <button
              onClick={() => handleChoice("nonVeg")}
              className="option-btn"
            >
              Non-Veg
            </button>
          </div>
        )}

        {/* Display Questions with animation */}
        {choice && showQuestions && (
          <div className="questions-container fade-in">
            <h2 className="subtitle">
              {choice === "veg" ? "Veg" : "Non-Veg"} Food Questions:
            </h2>
            <form onClick={handleSubmitForm}>
              {questions.map((question, index) => {
                return (
                  <>
                    <div key={index} className="question">
                      <label>{question}</label>
                      <input
                        type="text"
                        value={answers[index] || ""}
                        onChange={(e) => handleInputChange(index, e)}
                        className="input-field"
                        placeholder="Your answer"
                      />
                    </div>
                  </>
                );
              })}
              <button type="submit" className="submit-btn">
                Submit Answers
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default FoodQuestions;
