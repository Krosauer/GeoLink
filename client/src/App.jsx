import React, { useState } from 'react'
import GuessedState from './Components/CountryDisplays/GuessedState.jsx'
import BaseState from './Components/CountryDisplays/BaseState.jsx'
import PendingState from './Components/CountryDisplays/PendingState.jsx'
import './index.css'
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

function App() {
  const name = 'United States'
  const code = 'us'

  const attributes = {
    Population: [331449281, <FaCity />],
    Area: [9833520, <FaExpand />],
    Currency: ['United States Dollar', <FaCoins />],
    Language: ['English', <FaComment />],
    Timezone: ['UTC-4 to UTC-12', <FaClock />],
    Landlocked: ['No', <FaLock />],
    Borders: ['Canada, Mexico', <FaLink />],
  }
  return (
    <>
      <GuessedState name={name} code={code} attributes={attributes} />
    </>
  )
}

export default App
