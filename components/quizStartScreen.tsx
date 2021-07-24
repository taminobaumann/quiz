import React, {Dispatch, SetStateAction} from 'react';
import {Category, Difficulty} from "../lib/api";
import Select from 'react-select';

import styles from '../styles/QuizStartScreen.module.css';
import {CategoryForSelect} from "../lib/utils";

type props = {
    loading: boolean;
    startQuizHandler: () => void;
    difficultyLevel: Difficulty;
    difficultyChangeHandler: (difficulty: Difficulty) => void;
    categories: CategoryForSelect[];
    selectedCategory: CategoryForSelect | null;
    categoryChangeHandler: Dispatch<SetStateAction<CategoryForSelect | null>>;
}

const QuizStartScreen: React.FC<props> = ({loading, startQuizHandler, difficultyLevel, difficultyChangeHandler: handleChange, categories, selectedCategory, categoryChangeHandler}) => {
    if (loading) {
        return <p>Loading...</p>;
    } else {
        return (
            <React.Fragment>
                <form className={styles.form}>
                    <h2 className={styles.formTitle}>Difficulty Level:</h2>
                    <label className={styles.checkmarkContainer}>Easy
                        <input type="radio" id={Difficulty.EASY} onChange={handleChange.bind(null, Difficulty.EASY)}
                               checked={difficultyLevel === Difficulty.EASY}/>
                        <span className={styles.checkmark} />
                    </label>
                    <label className={styles.checkmarkContainer}>Medium
                        <input type="radio" id={Difficulty.MEDIUM} onChange={handleChange.bind(null, Difficulty.MEDIUM)}
                               checked={difficultyLevel === Difficulty.MEDIUM}/>
                        <span className={styles.checkmark} />
                    </label>
                    <label className={styles.checkmarkContainer}>Hard
                        <input type="radio" id={Difficulty.HARD} onChange={handleChange.bind(null, Difficulty.HARD)}
                               checked={difficultyLevel === Difficulty.HARD}/>
                        <span className={styles.checkmark} />
                    </label>
                    <div style={{marginTop: "1.5rem"}} />
                    <h2 className={styles.formTitle} style={{marginTop: "1rem"}}>Category:</h2>
                    <Select
                        defaultValue={selectedCategory}
                        onChange={categoryChangeHandler}
                        options={categories}
                    />
                </form>
                <button onClick={startQuizHandler} className="btn--primary" style={{marginTop: "2rem"}}>Start Quiz
                </button>
            </React.Fragment>
        )
    }
};

export default QuizStartScreen;