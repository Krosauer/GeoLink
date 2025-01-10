import React, {useState} from 'react';
import styles from './CountryDisplays.module.css';
import { FaCoins } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import {FaExpand} from 'react-icons/fa'
import {FaPeopleArrows} from 'react-icons/fa'
import { FaMoneyBill } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaPaintBrush } from 'react-icons/fa'
import { FaCity } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'
import { FaLayerGroup } from 'react-icons/fa'
import Flag from './Flag.jsx';

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


  const color_dict = {
    'Currency' : {icon: <FaCoins />, color: 'gold'},
    'Language' : {icon: <FaComment />, color: 'lightblue'},
    'Landlocked' : {icon: <FaLock />, color: 'gray'},
    'Borders' : {icon: <FaLink />, color: 'green'},
    'Population' : {icon: <FaCity />, color: 'cornflowerblue'},
    'Area' : {icon: <FaExpand />, color: 'orange'},
    'Timezone' : {icon: <FaClock />, color: 'pink'},
    'GDP' : {icon: <FaMoneyBill />, color: 'green'},
    'Population Density' : {icon: <FaLayerGroup />, color: 'pink'},
    'Flag Colors' : {icon: <FaPaintBrush />, color: 'orange'},
    'exports' : {icon: <FaPeopleArrows />, color: 'black'},
    'imports' : {icon: <FaPeopleArrows />, color: 'black'},
  }



  return (
    <div className={styles.guessedContainer}>
      <h1 className={styles.countryName}>{props.name}</h1>
      <Flag code={props.code} className={styles.flag} />
      <div className={styles.listContainer}>
        <ul>
          {visibleAttributes.map(([key, value]) => (
            <li key={key}>
                <span className={styles.attribute}>{key}</span>
                <span style={{color: color_dict[key].color}} className={styles.icon}>{value[1]}</span>
                <span className={styles.value}>{value[0]}</span>
            </li>
          ))}
        </ul>
        {showMore && (
          <ul>
            {hiddenAttributes.map(([key, value]) => (
              <li key={key}>
                <span className={styles.attribute}>{key}</span>
                <span style={{color: color_dict[key].color}} className={styles.icon}>{value[1]}</span>
                <span className={styles.value}>{value[0]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className={styles.showMoreButton} onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>
    </div>
  );

}

export default GuessedState;
