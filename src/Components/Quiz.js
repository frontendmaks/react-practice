import React, {useState, useContext} from 'react';
import {Questions} from "../Helpers/QuestionsList";
import {QuizContext} from "../Helpers/Contexts";
function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")

    const nextQustion = () => {
        console.log(optionChosen)
        if(Questions[currentQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const finishQuiz =() => {
        if(Questions[currentQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setGameState("endScreen")
    }

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => {setOptionChosen("A")}}>{Questions[currentQuestion].optionalA}</button>
                <button onClick={() => {setOptionChosen("B")}}>{Questions[currentQuestion].optionalB}</button>
                <button onClick={() => {setOptionChosen("C")}}>{Questions[currentQuestion].optionalC}</button>
                <button onClick={() => {setOptionChosen("D")}}>{Questions[currentQuestion].optionalD}</button>
            </div>

            {currentQuestion == Questions.length-1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQustion}>Next Question</button>
            )}
        </div>
    );
}

export default Quiz;