import React from 'react';

//types
import {AnswerObject} from "../pages";

//styles
import styles from '../styles/QuestionCard.module.css';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | null;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return (
        <div className={styles.container}>
            <p className={styles.questionCounter}>Question: {questionNr}/{totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div className={styles.question}>
                {answers.map(answer => (
                    <div key={answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}
                                className={userAnswer ? userAnswer.correctAnswer === answer ? styles.valid : styles.invalid : ''}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default QuestionCard;