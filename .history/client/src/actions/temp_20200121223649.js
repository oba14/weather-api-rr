const axios = require('axios');

export const nearbyTemp= (lat, lon) => {
    fetch(`/weatherApi/nearby?lat=${latitudeD}&lon=${longitudeD}`)
        .then(response => response.json())
        .then(data => {
        getImage(data.name);
        putDataInDom(data);
        })
        .catch(e => {
        return e;
        });
}