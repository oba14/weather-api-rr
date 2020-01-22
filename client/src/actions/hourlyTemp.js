const axios = require('axios');

export const hourlyTemp = (citySearch) => dispatch  => {

    console.log('ACTIONS hOURLY TMEP', citySearch);
    
    
    axios.get(`http://localhost:5001/weatherApi/search/city/hourly?city=${citySearch}`)
        .then(data => {
            
            dispatch({
                type: 'HOURLY_TEMP',
                payload: data.data.list
            });
        })
        .catch(e => {
            dispatch({
                type: 'ERROR_FETCHING',
                payload: e
            })
        });
}