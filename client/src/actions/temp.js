const axios = require('axios');

export const nearbyTemp= (lat, lon) => dispatch  => {
        
    axios.get(`http://localhost:5001/weatherApi/nearby?lat=${lat}&lon=${lon}`)
        .then(data => {
            
            dispatch({
                type: 'NEARBY_TEMP',
                payload: data
            });
        })
        .catch(e => {
            dispatch({
                type: 'ERROR_FETCHING',
                payload: e
            })
        });
}

export const findCityTemp= (cityName) => dispatch  => {
        
    
    axios.get(`http://localhost:5001/weatherApi/search/${cityName}`)
        .then(data => {
            
            dispatch({
                type: 'CITY_SEARCHED',
                payload: data,
                citySearched: cityName
            });
        })
        .catch(e => {
            dispatch({
                type: 'ERROR_FETCHING',
                payload: e
            })
        });
}