import React from 'react';
import styles from './CountryDisplays.module.css';

function BaseState(props) {
  return (
    <div className={styles.baseStateContainer}>
      <h1 className={styles.mustContainMessage}>Next Country Must Connect To:</h1>
      <div className={styles.countryCard}>
        <h1 className={styles.countryName}>{props?.attributes.id}</h1>
      </div>
    </div>
  );
}

export default BaseState;

