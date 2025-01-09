import React, {useState} from 'react';
import styles from './CountryDisplays.module.css';
function GuessedState(props) {

  const attributes = Object.entries(props.attributes);
  const visibleAttributes = attributes.slice(0, 2);
  const hiddenAttributes = attributes.slice(2);
  const [showMore, setShowMore] = useState(false);

  function getFlagEmoji(countryCode) {
    return String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((char) => 127397 + char.charCodeAt())
    );
  }

  return (
    <div className={styles.guessedContainer}>
      <h1 className={styles.countryName}>{props.name}</h1>
      <div className={styles.flag}>{getFlagEmoji(props.code)}</div>
      <ul>
        {visibleAttributes.map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
      <button className={styles.showMoreButton} onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>
      {showMore && (
        <ul>
          {hiddenAttributes.map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value}
            </li>
          ))}
        </ul>
      
      )}
    </div>
  );

}

export default GuessedState;
