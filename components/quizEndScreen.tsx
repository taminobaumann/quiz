import React from 'react';

import styles from '../styles/QuizEndScreen.module.css';

type Props = {
    score: number;
    numOfQuestions: number;
    newGameHandler: () => void;
}

const QuizEndScreen: React.FC<Props> = ({score, numOfQuestions, newGameHandler}) => {
    const percentageScore = Math.ceil(score / numOfQuestions * 100) + '%';
    return (
        <div className={styles.container}>
            <h1>🎉 You did it 🎉</h1>
            <p>{percentageScore} of all questions answered correctly!</p>
            <button onClick={newGameHandler} className="btn--primary" style={{marginTop: "1rem"}}>New Round</button>
        </div>
    )
};

export default QuizEndScreen;