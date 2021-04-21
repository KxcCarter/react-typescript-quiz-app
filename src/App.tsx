import { useState } from 'react';
import { fetchQuizQuestions } from './API';
import './index.css';

// components
import QuestionCard from './components/QuestionCard';

// types
import { Difficulty, QuestionState } from './API';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setQuestionNumber(0);
      setLoading(false);

      console.log(questions);
    } catch (error) {
      console.error(error);
    }
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // user answer
      const answer = event.currentTarget.value;
      // check answer
      const correct = questions[questionNumber].correct_answer === answer;
      // add score if correct answer
      if (correct) setScore((prev) => prev + 1);
      // save answer in user answer array
      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // go to next queston if not last question
    const nextQuestion = questionNumber + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestion);
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start Quiz!
        </button>
      ) : null}

      {!gameOver ? <p className="score">Score:</p> : null}

      {loading ? <p>Loading questions...</p> : null}

      {!loading && !gameOver && questions && (
        <QuestionCard
          questionNumber={questionNumber + 1}
          totalQuestions={TOTAL_QUESTIONS}
          callback={checkAnswer}
          question={questions[questionNumber]?.question}
          answers={questions[questionNumber]?.answers}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
        />
      )}

      {!gameOver &&
        !loading &&
        userAnswers.length === questionNumber + 1 &&
        questionNumber !== TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={nextQuestion}>
            Next
          </button>
        )}
    </div>
  );
};

export default App;
