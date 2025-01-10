import React, {useState} from 'react';
import styles from './CountryDisplays.module.css';

function BaseState(props) {

  return (
    <div className={styles.baseStateContainer}>
      <h1 className={styles.mustContainMessage}>Next Country Must Connect To:</h1>
      <h1 className={styles.baseCountryName}>{props.name}</h1>
    </div>
  );

}


export default BaseState;

