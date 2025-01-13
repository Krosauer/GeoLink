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

  const attributes = Object.entries(props?.attributes);
  const visibleAttributes = attributes.slice(2, 4);
  const hiddenAttributes = attributes.slice(4,attributes.length - 1);
  const [showMore, setShowMore] = useState(false);


  const color_dict = {
    'currencies' : {icon: <FaCoins />, color: 'gold'},
    'languages' : {icon: <FaComment />, color: 'lightblue'},
    'landlocked' : {icon: <FaLock />, color: 'gray'},
    'borders' : {icon: <FaLink />, color: 'green'},
    'population' : {icon: <FaCity />, color: 'cornflowerblue'},
    'area' : {icon: <FaExpand />, color: 'orange'},
    'timezones' : {icon: <FaClock />, color: 'pink'},
    'gdp_per_capita' : {icon: <FaMoneyBill />, color: 'green'},
    'population_density' : {icon: <FaLayerGroup />, color: 'pink'},
    'flag_colors' : {icon: <FaPaintBrush />, color: 'orange'},
    'exports' : {icon: <FaPeopleArrows />, color: 'black'},
    'imports' : {icon: <FaPeopleArrows />, color: 'black'},
  }

  function renderAttributes(value) {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return value;
  }

  return (
    <div className={styles.guessedContainer}>
      <h1 className={styles.countryName}>{props?.attributes.id}</h1>
      <Flag code={props?.attributes.cca2} className={styles.flag} />
      <div className={styles.listContainer}>
        <ul>
          {visibleAttributes.map(([key, value]) => (
            <li key={key}>
                <span className={styles.attribute}>{key}</span>
                <span style={{color: color_dict[key]?.color || 'black'}}
                className={styles.icon}>{color_dict[key].icon}</span>
                <span className={styles.value}>{renderAttributes(value)}</span>
            </li>
          ))}
        </ul>
        {showMore && (
          <ul>
            {hiddenAttributes.map(([key, value]) => (
              <li key={key}>
                <span className={styles.attribute}>{key}</span>
                <span style={{color: color_dict[key]?.color || 'black'}}
                className={styles.icon}>{color_dict[key].icon}</span>
                <span className={styles.value}>{renderAttributes(value)}</span>
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
