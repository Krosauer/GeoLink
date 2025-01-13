import React, {useState} from 'react';
import styles from './GuessComparison.module.css';


function GuessComparison(props) {

  return (
    <>
      <div className={styles.guessComparisonContainer}>
        <div className={styles.guessContainer} />
        <div className={styles.arrowhead} />
      </div>

    </>
  );

}

export default GuessComparison;
