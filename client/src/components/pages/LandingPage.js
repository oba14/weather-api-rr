import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import './LandingPage.css';

import { nearbyTemp } from '../../actions/temp';
import CitySearch from '../CitySearch';
import HourlyTemp from '../HourlyTemp';
 
const LandingPage = (props) => {

    const dispatch = useDispatch();
    
    const [nearByLat, setNearByLat] = useState(null);
    const [nearByLong, setNearByLong] = useState(null);
    const ENTER_KEY = 13;

    const data = useSelector(state => state.temp.nearbyTemp);
    
    useEffect(()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getNearbyCoordinates);
          } else {
            toast.error('Geolocation is not supported by this browser.');
          }

    }, [])

    useEffect(()=> {
        if(nearByLat && nearByLong) {
            dispatch(nearbyTemp(nearByLat, nearByLong));
        }
    },[nearByLong, nearByLat])

    useEffect(() => {
        if(data) {
            putDataInDom(data.data)
        }
    }, [data])

    const getNearbyData = () => {
        if(nearByLat && nearByLong) {
            dispatch(nearbyTemp(nearByLat, nearByLong));
        }
    }
    
    function getNearbyCoordinates(position) {

        setNearByLat(position.coords.latitude);
        setNearByLong(position.coords.longitude);  
    }

    const handleSubmit = event => {
        if (event.keyCode === ENTER_KEY) {
            getNearbyData();
        }
    };


    /**
     * add content to DOM
     * @param {*} data 
     */
    const putDataInDom = (data) => {
        document.querySelector('#nearby-city').innerHTML = data.name;
        document.querySelector('#nearby-temp').innerHTML = `${Math.floor(data.main.temp)} °C `;
        document.querySelector('#weather-icon').innerHTML = `<img src = "images/${data.weather[0].main}-256.png"
            alt = ${data.weather[0].main} > `;
        document.querySelector('#nearby-weather-type').innerHTML = data.weather[0].main;
    }

    return (
        <div>
            <div className='container' style={{marginTop: '3%'}} >
                <div className="row">
                    <div className="col-md-4 containers">
                        <div className="main-title">
                            <h1>Weather Api</h1>
                            <input className="btn1" onClick={getNearbyData} id="nearbydata-button" type="submit" name="q" value="Nearby" />
                            <span role="img" aria-label="Add">👍</span>
                        </div>
                        <div id="nearby-weather">
                            <span id="nearby-city"></span>
                            <p id="current-date"></p>
                            <p id="nearby-temp"></p>
                                <div id="weather-icon">
                                    <img src="/images/Clear-256.png" alt="rainbow" />
                                </div>
                            <p id="nearby-weather-type"></p>

                        </div>
                        <h3>Search City</h3>
                        <CitySearch />
                        <div>
                        <ul className="hourly-data"></ul>
                        </div>
                    </div>
                    <HourlyTemp />
      
                </div>
            </div>
        <div className="stats-btns" style={{visibility: 'hidden'}}>
            <input className="btn1 temperature" type="submit" name="q" value="Temparature" /> 
            <input className="btn1 wind-speed" type="submit" name="q" value="Wind Speed" /> 
            <input className="btn1 humidity" type="submit" name="q" value="Humidity" /> 
            <input className="btn1 pressure" type="submit" name="q" value="Pressure" /> 
            <input className="btn1 hide-table" type="submit" name="q" value="Hide" /> 
        </div>
        <div className="row graph-div" id="graphs">
            <canvas className="speed-chart" width="300" height="300"></canvas>
        </div>
    </div>
      
)
}

export default LandingPage;