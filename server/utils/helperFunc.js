const isReqQuery = (req, res) => {
    if (!req.query) {
      res.status(404).json({
        message: 'Provide lat and lon'
      }).end();
    }
  };
  
  const ifLatLon = (latitude, longitude, res) => {
    if (latitude == undefined || longitude == undefined) {
      res.status(401).json({
        message: 'both latitude and longitude required'
      });
    }
  };
  
  const isCityUndefined = (city, response) => {
    if (city == undefined) {
      response.status(404).json({
        message: 'city not defined'
      }).end();
    }
  };
  
  const isCode404 = (data, response) => {
    if (data.cod == '404') {
      response.status(400).json({
          message: 'City not found'
        })
        .end();
    }
  };

  module.exports = {isReqQuery,
                    ifLatLon,
                    isCode404,
                    isCode404};