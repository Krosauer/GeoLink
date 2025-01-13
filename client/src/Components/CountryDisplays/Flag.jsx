import React, { useState, useEffect } from "react";
import axios from "axios";

function Flag(props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${props.code}`)
      .then((response) => {
        setUrl(response.data[0].flags.png);
      });
  }, [props.code]);

  return (
    <img
      style={{
        margin: "10px 10px 10px 10px",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
      }}
      src={url}
      alt="Flag"
    />
  );
}

export default Flag;
