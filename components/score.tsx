import React from 'react';

import styles from "../styles/Home.module.css";

type Props = {
    score: number;
};

const Score: React.FC<Props> = ({score}) =>  <p className={styles.score}>Score: {score}</p>;

export default Score;