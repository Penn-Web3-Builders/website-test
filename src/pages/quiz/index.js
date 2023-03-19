import React, { useState, useEffect } from 'react'
import "../../Web3Builders.css"

import { Web3Context } from '../../App'
import { Link, useParams } from 'react-router-dom';

import quizzes from './quizzes'

const Quiz = () => {
    const { activate, deactivate, active, account } = React.useContext(Web3Context)
    const params = useParams();
    return (
        <div className="wide-div mx-auto relative">
            <div className="section-14 wf-section">
                <div className="self-start align-text-top">
                    <h1 className="hero-header-new">Quizzes</h1>
                    <div className="flex overflow-x-auto space-x-4 items-start">
                        <div className="flex-col">
                            {quizzes.map((quiz, index) => {
                                return (
                                    <div key={index} className="w-64 h-48 bg-gray-100 p-4 shadow-lg rounded-lg">
                                        <h2 className="text-xl font-bold">{quiz.name}</h2>
                                        <p className="text-sm text-gray-700">{quiz.description}</p>
                                        <Link to={`/quiz/${index}`} className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Take Quiz</Link>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex-row">
                            {params.id && <IndividualQuiz quiz={quizzes[params.id]} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

function IndividualQuiz({ quiz }) { // also bing generated

    // State variable to keep track of the current question index
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // State variable to keep track of the user's score
    const [score, setScore] = useState(0);

    // State variable to keep track of the user's selected choice for each question
    const [selectedChoice, setSelectedChoice] = useState(null);

    // Function to handle the user's choice selection for a question
    function handleChoiceSelection(choiceIndex) {
        setSelectedChoice(choiceIndex);
    }

    // Function to handle the user's submission for a question
    function handleSubmit() {

        // Check if the user has selected a choice
        if (selectedChoice !== null) {

            // Check if the selected choice matches the correct answer and update score accordingly
            if (selectedChoice === quiz.questions[currentQuestion].answer) {
                setScore(score + 1);
            }

            // Reset the selected choice state variable to null for the next question
            setSelectedChoice(null);

            // Check if there are more questions left and update current question index accordingly or show final score message 
            if (currentQuestion < quiz.questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                alert(`You have completed the quiz. Your final score is ${score} out of ${quiz.questions.length}.`);
            }
        } else {

            // Alert the user to select a choice before submitting 
            alert("Please select a choice before submitting.");
        }
    }

    // useEffect hook that runs whenever the quiz object changes and resets the state variables 
    useEffect(() => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedChoice(null);
    }, [quiz]);

    return (
        <div className="quiz max-w-lg mx-auto bg-purple-100 p-4 shadow-lg rounded-lg">
            <h1 className="text-xl font-bold text-purple-900">{quiz.name}</h1>
            <p className="text-sm text-gray-700">{quiz.description}</p>
            <div className="question mt-4">
                <h2 className="text-lg font-semibold">{quiz.questions[currentQuestion].text}</h2>
                <ul className="choices mt-2 space-y-2">
                    {quiz.questions[currentQuestion].choices.map((choice, index) => (
                        <li key={index} className={`p-2 border rounded-md cursor-pointer hover:bg-gray-200 ${selectedChoice === index ? 'bg-blue-100' : ''}`} onClick={() => handleChoiceSelection(index)}>{choice}</li>
                    ))}
                </ul>
                <button onClick={handleSubmit} className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
            </div>
            <div className="score mt-4">
                <p>Your current score is {score} out of {quiz.questions.length}.</p>
            </div>
        </div>
    );
}

export default Quiz;