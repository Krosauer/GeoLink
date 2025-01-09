import React, {useState} from 'react';
import styles from './CountryDisplays.module.css';


function PendingState(props) {
 

  const possileAttributes = Object.entries(props.attributes);
  function getFlagEmoji(countryCode) {
    return String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((char) => 127397 + char.charCodeAt())
    );
  }

  return (
    <div className={styles.pendingContainer}>
      <h1 className={styles.countryName}>{props.name}</h1>
      <div className={styles.flag}>{getFlagEmoji(props.code)}</div>
      <h3>Valid Connections:</h3>
      <ul>
        {possileAttributes.map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </div>  

  );

}

export default PendingState;
