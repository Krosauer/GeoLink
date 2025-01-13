import React, { useState, useEffect } from "react";
import GuessedState from "./Components/CountryDisplays/GuessedState.jsx";
import BaseState from "./Components/CountryDisplays/BaseState.jsx";
import PendingState from "./Components/CountryDisplays/PendingState.jsx";
import GuessComparison from "./Components/GuessComparison/GuessComparison.jsx";
import "./index.css";
function App() {

  const cca3_to_name = {
    "GRD" : "Grenada",
    "CHE" : "Switzerland",
    "SLE" : "Sierra Leone",
    "HUN" : "Hungary",
    "BRB" : "Barbados",
    "TUN" : "Tunisia",
    "ITA" : "Italy",
    "BEN" : "Benin",
    "IDN" : "Indonesia",
    "KNA" : "Saint Kitts and Nevis",
    "LAO" : "Laos",
    "UGA" : "Uganda",
    "AND" : "Andorra",
    "BDI" : "Burundi",
    "ZAF" : "South Africa",
    "FRA" : "France",
    "LBY" : "Libya",
    "MEX" : "Mexico",
    "GAB" : "Gabon",
    "MKD" : "North Macedonia",
    "CHN" : "China",
    "YEM" : "Yemen",
    "SLB" : "Solomon Islands",
    "UZB" : "Uzbekistan",
    "EGY" : "Egypt",
    "SEN" : "Senegal",
    "LKA" : "Sri Lanka",
    "BGD" : "Bangladesh",
    "PER" : "Peru",
    "SGP" : "Singapore",
    "TUR" : "Turkey",
    "AFG" : "Afghanistan",
    "GBR" : "United Kingdom",
    "ZMB" : "Zambia",
    "FIN" : "Finland",
    "NER" : "Niger",
    "GNB" : "Guinea-Bissau",
    "AZE" : "Azerbaijan",
    "DJI" : "Djibouti",
    "PRK" : "North Korea",
    "MUS" : "Mauritius",
    "COL" : "Colombia",
    "GRC" : "Greece",
    "HRV" : "Croatia",
    "MAR" : "Morocco",
    "DZA" : "Algeria",
    "NLD" : "Netherlands",
    "SDN" : "Sudan",
    "FJI" : "Fiji",
    "LIE" : "Liechtenstein",
    "NPL" : "Nepal",
    "GEO" : "Georgia",
    "PAK" : "Pakistan",
    "MCO" : "Monaco",
    "BWA" : "Botswana",
    "LBN" : "Lebanon",
    "PNG" : "Papua New Guinea",
    "DOM" : "Dominican Republic",
    "QAT" : "Qatar",
    "MDG" : "Madagascar",
    "IND" : "India",
    "SYR" : "Syria",
    "MNE" : "Montenegro",
    "SWZ" : "Eswatini",
    "PRY" : "Paraguay",
    "SLV" : "El Salvador",
    "UKR" : "Ukraine",
    "NAM" : "Namibia",
    "ARE" : "United Arab Emirates",
    "BGR" : "Bulgaria",
    "DEU" : "Germany",
    "KHM" : "Cambodia",
    "IRQ" : "Iraq",
    "SWE" : "Sweden",
    "CUB" : "Cuba",
    "KGZ" : "Kyrgyzstan",
    "RUS" : "Russia",
    "MYS" : "Malaysia",
    "CYP" : "Cyprus",
    "CAN" : "Canada",
    "MWI" : "Malawi",
    "SAU" : "Saudi Arabia",
    "BIH" : "Bosnia and Herzegovina",
    "ETH" : "Ethiopia",
    "ESP" : "Spain",
    "SVN" : "Slovenia",
    "OMN" : "Oman",
    "SMR" : "San Marino",
    "LSO" : "Lesotho",
    "MHL" : "Marshall Islands",
    "ISL" : "Iceland",
    "LUX" : "Luxembourg",
    "ARG" : "Argentina",
    "NRU" : "Nauru",
    "DMA" : "Dominica",
    "CRI" : "Costa Rica",
    "AUS" : "Australia",
    "THA" : "Thailand",
    "HTI" : "Haiti",
    "TUV" : "Tuvalu",
    "HND" : "Honduras",
    "GNQ" : "Equatorial Guinea",
    "LCA" : "Saint Lucia",
    "BLR" : "Belarus",
    "LVA" : "Latvia",
    "PLW" : "Palau",
    "PHL" : "Philippines",
    "DNK" : "Denmark",
    "CMR" : "Cameroon",
    "GIN" : "Guinea",
    "BHR" : "Bahrain",
    "SUR" : "Suriname",
    "COD" : "DR Congo",
    "SOM" : "Somalia",
    "CZE" : "Czechia",
    "VUT" : "Vanuatu",
    "TGO" : "Togo",
    "KEN" : "Kenya",
    "RWA" : "Rwanda",
    "EST" : "Estonia",
    "ROU" : "Romania",
    "TTO" : "Trinidad and Tobago",
    "GUY" : "Guyana",
    "TLS" : "Timor-Leste",
    "VNM" : "Vietnam",
    "URY" : "Uruguay",
    "VAT" : "Vatican City",
    "AUT" : "Austria",
    "ATG" : "Antigua and Barbuda",
    "TKM" : "Turkmenistan",
    "MOZ" : "Mozambique",
    "PAN" : "Panama",
    "FSM" : "Micronesia",
    "IRL" : "Ireland",
    "NOR" : "Norway",
    "CAF" : "Central African Republic",
    "BFA" : "Burkina Faso",
    "ERI" : "Eritrea",
    "TZA" : "Tanzania",
    "KOR" : "South Korea",
    "JOR" : "Jordan",
    "MRT" : "Mauritania",
    "LTU" : "Lithuania",
    "SVK" : "Slovakia",
    "AGO" : "Angola",
    "KAZ" : "Kazakhstan",
    "MDA" : "Moldova",
    "MLI" : "Mali",
    "ARM" : "Armenia",
    "WSM" : "Samoa",
    "JPN" : "Japan",
    "BOL" : "Bolivia",
    "CHL" : "Chile",
    "USA" : "United States",
    "VCT" : "Saint Vincent and the Grenadines",
    "SYC" : "Seychelles",
    "GTM" : "Guatemala",
    "ECU" : "Ecuador",
    "TJK" : "Tajikistan",
    "MLT" : "Malta",
    "GMB" : "Gambia",
    "NGA" : "Nigeria",
    "BHS" : "Bahamas",
    "KWT" : "Kuwait",
    "MDV" : "Maldives",
    "SSD" : "South Sudan",
    "IRN" : "Iran",
    "ALB" : "Albania",
    "BRA" : "Brazil",
    "SRB" : "Serbia",
    "BLZ" : "Belize",
    "MMR" : "Myanmar",
    "BTN" : "Bhutan",
    "VEN" : "Venezuela",
    "LBR" : "Liberia",
    "JAM" : "Jamaica",
    "POL" : "Poland",
    "BRN" : "Brunei",
    "COM" : "Comoros",
    "TON" : "Tonga",
    "KIR" : "Kiribati",
    "GHA" : "Ghana",
    "TCD" : "Chad",
    "ZWE" : "Zimbabwe",
    "MNG" : "Mongolia",
    "PRT" : "Portugal",
    "BEL" : "Belgium",
    "ISR" : "Israel",
    "NZL" : "New Zealand",
    "NIC" : "Nicaragua",
    "UNK" : "Kosovo",
    "PSE" : "Palestine",
    "COG" : "Republic of the Congo",
    "CIV" : "Côte d'Ivoire",
    "CPV" : "Cape Verde",
    "TWN" : "Taiwan",
  }
  const [data, setData] = useState("")
  const [countries, setCountries] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/get_data')
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
  }, []);


  useEffect(() => {
    if (data && data.nodes) {
      const newCountries = {};
      for (const country of data.nodes) {
        newCountries[country.id] = {
          cca2: country.cca2,
          cca3: country.cca3,
          currencies: country.currencies ? country.currencies.split(";") : [],
          languages: country.languages ? country.languages.split(";") : [],
          landlocked: country.landlocked,
          borders: country.borders ? country.borders.split(";").map((code) => {return cca3_to_name[code]})
          : [],
          population: country.population,
          area: country.area,
          timezones: country.timezone ? country.timezone.split(";") : [],
          gdp_per_capita: country.gdp_per_capita,
          population_density: country.population_density,
          flag_colors: country.flag_colors ? country.flag_colors.split(";") : [],
          exports: country.exports ? country.exports.split(";") : [],
          imports: country.imports ? country.imports.split(";") : [],
          id: country.id,
        };
      }
      setCountries(newCountries);
    }
  }, [data]);

  useEffect(() => {
  }, [countries]);



  const compInfo = {
    from: "Meixco",
    to: "Spain",
    type: "bordering",
  }

  return (

    <>
      <div className="countryContainer">
        {countries["Mexico"] && <GuessedState attributes={countries['Mexico']} />} 
        <GuessComparison compInfo={compInfo}/>
        {countries["China"] && <GuessedState attributes={countries['China']} />}
      </div>
    </>

  );
}

export default App;
