import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {findCityTemp} from '../actions/temp';
import { hourlyTemp } from '../actions/hourlyTemp';

const CitySearch = () => {


    const [cityName, setCityName] = useState('');
    const dispatch = useDispatch();

    const onValueChange = (e) => {
        setCityName(e.target.value);
    }

    const onCityTempSubmit = () => {

        
        dispatch(findCityTemp(cityName))
    }
    return (
        <div className="search-city">
            <input id="search-city" onChange={onValueChange} type="search" placeholder="Enter City" name="q" required />
            <input className="btn1" id="search-city-button" type="submit" placeholder="Search City" name="q" onClick={onCityTempSubmit} />
            <input className="btn1" id="search-city-hourly-button" type="submit" placeholder="Search City" name="q"
                value="Hourly" />
            <input className="btn1 line-graph" type="submit" name="q" value="Graph" style={{visibility: 'hidden'}} />
            <a className="nav-item nav-link" href="#graphs">Graphs Div</a>
        </div>
    )
}

export default CitySearch;