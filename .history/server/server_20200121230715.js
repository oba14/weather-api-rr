const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const morgan = require('morgan');
const weatherRoutes = require('./routes/weatherRoutes');
const cors = require('cors');
const port = process.env.URL;

app.use(cors());
app.use(bodyParser.json());
// Setup morgan which gives us HTTP request logging.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/weatherApi', weatherRoutes);
  
// Setup a global error handler.
app.use((err, req, res, next) => {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  
    res.status(500).json({
      message: err.message,
      error: process.env.NODE_ENV === 'production' ? {} : err,
    });
  });

/**
 * if none of the routes match
 */
app.get('*', (req, res) => {
res
    .status(404)
    .send({
    message: 'page not found'
    });
});

app.listen(port, () => console.log('Server listening on port ' + port));
  
  module.exports.app = app;