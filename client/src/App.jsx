import React, { useState, useEffect } from "react";
import GuessedState from "./Components/CountryDisplays/GuessedState.jsx";
import BaseState from "./Components/CountryDisplays/BaseState.jsx";
import PendingState from "./Components/CountryDisplays/PendingState.jsx";
import "./index.css";
import { FaCoins } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import axios from "axios";

function App() {
  const [graph, setGraph] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/graph")
      .then((response) => {
        setGraph(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <></>;
}

export default App;
