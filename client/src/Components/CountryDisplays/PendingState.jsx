import React, {useState} from 'react';
import styles from './CountryDisplays.module.css';


function PendingState(props) {
 

  const possileAttributes = Object.entries(props?.attributes);
  function getFlagEmoji(countryCode) {
    return String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((char) => 127397 + char.charCodeAt())
    );
  }

  return (
    <div className={styles.guessedContainer}>
      <h1 className={styles.countryName}>{props?.attributes.id}</h1>
      <div className={styles.flag}>{getFlagEmoji(props?.attributes.code)}</div>
      <h3>Valid Connections:</h3>
      <div className={styles.listContainer}>
        <ul>
          {possileAttributes.map(([key, value]) => (
            <li key={key}>
                <span className={styles.attribute}>{key}</span>
                <span className={styles.icon}>{value[1]}</span>
                <span className={styles.value}>{value[0]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>  

  );

}

export default PendingState;
