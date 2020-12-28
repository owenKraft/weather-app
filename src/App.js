import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/Weather'
import InputLocale from './components/InputLocale'

function App() {
  const [weatherData,setWeatherData] = useState()
  const [units,setUnits] = useState('imperial')

  async function callWeatherAPI(location){
    try {  
      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=561d4ec8d003285db9993fd437a143d5', {mode: 'cors'})
      if (!response.ok) {
        throw new Error("bad network request");
      }
      
      let data = await response.json()
      console.log(data)
      setWeatherData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    callWeatherAPI('charlotte')
  },[])

  const getWeather = () => {
      const location = document.querySelector("#input-location").value
      const unit = getUnit()
      callWeatherAPI(location,unit)
  }

  console.log("rendered")

  const getUnit = () => {
    const unitCheckboxValue = (document.querySelector('#toggleSwitch:checked') !== null)

    if(unitCheckboxValue === false){
        setUnits("imperial")
    } else if (unitCheckboxValue === true){
        setUnits("metric")
    }
  }

  return (
    <div>
      <InputLocale 
        getWeather={getWeather}
      />
      <div className="container flex-center-align">
        {weatherData === undefined ? "" : 
          <Weather
            getUnit={getUnit}
            weatherData={weatherData}
            units = {units}
          />
        }
      </div>
    </div>
  );
}

export default App;
