const weatherRoutes = require('express').Router();
const fetch = require('node-fetch');
const url = process.env.URL;
const appId = process.env.APPID;

const {
  isReqQuery,
  ifLatLon,
  isCode404,
isCityUndefined} = require('../utils/helperFunc');

  /**
   * Endpoint to Fetch data for nearby location
   */
  weatherRoutes.get('/nearby', (req, res) => {
  
    isReqQuery(req, res);
  
    const latitude = req.query.lat;
    const longitude = req.query.lon;
  
    ifLatLon(latitude, longitude, res);
  
    fetch(`${url}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${appId}`)
      .then(response => response.json())
      .then(data => {
        
        isCode404(data, res);
  
        res
          .status(200)
          .json(data);
      });
  });
  
  /**
   * Endpoint to Fetch data for given City
   */
  weatherRoutes.get('/search/:city', (request, response) => {
  
    if (!request.params) {
      response.status(404).json({
        message: 'Provide city name'
      }).end();
    }
    const city = request.params.city;
    isCityUndefined(city, response);
  
    fetch(`${url}weather?q=${city}&units=metric&APPID=${appId}`)
      .then(res => res.json())
      .then(data => {
  
        isCode404(data, response);
  
        response.status(200)
          .json(data);
      });
  });
  
  /**
   * Endpoint to Fetch hourly data from API
   */
  weatherRoutes.get('/search/city/hourly', (request, response) => {
  
    isReqQuery(request, response);
  
    const city = request.query.city;
    isCityUndefined(city, response);
  
    fetch(`${url}forecast?q=${city}&units=metric&APPID=${appId}`)
      .then(res => res.json())
      .then(data => {
        
        isCode404(data, response);
        
        response.status(200)
          .json(data);
      });
  });

  module.exports = weatherRoutes;