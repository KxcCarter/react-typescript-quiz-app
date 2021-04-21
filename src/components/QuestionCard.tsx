import React from 'react';

import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}
        >
          <button
            disabled={userAnswer ? true : false}
            onClick={callback}
            value={answer}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
