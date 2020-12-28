import React from 'react';


const Weather = (props) => {
    const weatherData = props.weatherData
    
    const displayLocation = weatherData.name
    const displayDesc = capitalizeFirstLetter(weatherData.weather[0].description)
    const displayHumidity = weatherData.main.humidity
    const displayWind = Math.round(weatherData.wind.speed)
    const displayWeatherIcon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"
    let displayTemp = Math.round(convertTemps(weatherData.main.temp))
    let displayFeelsLike = Math.round(convertTemps(weatherData.main.feels_like))

    let unitLetter
    if(props.units === "imperial"){
        unitLetter = "F"
    } else {
        unitLetter = "C"
    }

    function convertTemps(temp){
        if(props.units === "imperial"){
            return (temp - 273.15) * (9/5) + 32
        } else if (props.units === "metric"){
            return temp - 273.15
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="full-width dark-background flex-center-justify flex-center-align">
            <div className="div-weather flex-center-justify">
                <div id="current-location" className="flex-center-justify">
                    {displayLocation}
                </div>
                
                <div id="div-temp" className="flex-center-justify">
                    <div id="current-temp-display">
                        {displayTemp}
                    </div>
                    <div id="current-temp-text" className="flex-center-justify">
                        °{unitLetter} (Currently)
                    </div>
                </div>

                <div id="div-weather-details" className="flex-wrap">
                    <div id="current-desc" className="full-width flex-center-align">
                        <img src={displayWeatherIcon} alt=""></img>
                        {displayDesc}
                    </div>

                    <div>
                        <div id="current-feels-like" className="full-width">
                            Feels like: {displayFeelsLike}°
                        </div>
                        <div id="current-humidity" className="full-width">
                            Humidity: {displayHumidity}%
                        </div>
                        <div id="current-wind" className="full-width">
                            Wind: {displayWind} mph
                        </div>
                    </div>
                </div>


                <div className="toggle-switch">
                    <label htmlFor="toggleSwitch">
                        Display temps in Celsius?
                    </label>
                    <input
                        type="checkbox"
                        name="toggleSwitch"
                        id="toggleSwitch"
                        onChange={props.getUnit}
                    />
                </div>

            </div>
        </div>
    );
};

export default Weather;