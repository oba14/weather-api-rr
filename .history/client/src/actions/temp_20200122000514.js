const axios = require('axios');

export const nearbyTemp= (lat, lon) => dispatch  => {

    axios.get(`/weatherApi/nearby?lat=${lat}&lon=${lon}`)
        .then(response => response.json())
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