import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import './LandingPage.css';

import { nearbyTemp } from '../../actions/temp';
 
const LandingPage = (props) => {

    const dispatch = useDispatch();
    
    const [nearByLat, setNearByLat] = useState(null);
    const [nearByLong, setNearByLong] = useState(null);
    console.log('lat', nearByLat);
    console.log(('longitude', nearByLong));
    
    
    
    const ENTER_KEY = 13;

    const data = useSelector(state => state.temp.nearByTemp);
    console.log('DATA', data);
    

    useEffect(()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getNearbyCoordinates);
          } else {
            toast.error('Geolocation is not supported by this browser.');
          }

    }, [])

    const getNearbyData = () => {
        if(nearByLat && nearByLong) {
            dispatch(nearbyTemp(nearByLat, nearByLong));
            setTimeout(()=> {
                if(data) {
                    putDataInDom(data)
                }
            }, 0)  
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
            <div className='container'>
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
                        <div className="search-city">
                            <input id="search-city" type="search" placeholder="Enter City" name="q" required />
                            <input className="btn1" id="search-city-button" type="submit" placeholder="Search City" name="q" />
                            <input className="btn1" id="search-city-hourly-button" type="submit" placeholder="Search City" name="q"
                                value="Hourly" />
                            <input className="btn1 line-graph" type="submit" name="q" value="Graph" style={{visibility: 'hidden'}} />
                            <a className="nav-item nav-link" href="#graphs">Graphs Div</a>
                        </div>
                        <div>
                        <ul className="hourly-data"></ul>
                        </div>
                    </div>
                    <div className="col-md-6 table-div" style={{visibility: 'hidden'}}>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Temp</th>
                                    <th scope="col">Weather</th>
                                    <th scope="col">Wind m/s</th>
                                </tr>
                                </thead>
                                <tbody id="d1">
                                </tbody>
                            </table>
                        </div>
                    </div>
      
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