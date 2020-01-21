const axios = require('axios');

export const nearbyTemp= (lat, lon) => dispatch  => {

    console.log('ACTIONS LOGG', lon);
    console.log('ACTIONS LAT', lat);
    
    
    axios.get(`http://localhost:5001/weatherApi/nearby?lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => {
            console.log('ACTIONS DATA', data);
            
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