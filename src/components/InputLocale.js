import React from 'react';

const InputLocale = (props) => {

    const listenEnterKey = (e) => {
        if(e.code === 'Enter'){
            props.getWeather()
        }
    }

    return (
        <div id="div-input" className="flex-center-align">
            <div id="div-location" className="flex-wrap">
                <input id="input-location" className="dark-background" placeholder="Search location" onKeyPress={(e) => listenEnterKey(e)}></input>
            </div>
        </div>
    );
};

export default InputLocale;