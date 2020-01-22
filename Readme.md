[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)  [![npm](https://img.shields.io/badge/react-16.12-blue)](https://nodejs.org/en/download/package-manager/) [![redux](https://img.shields.io/badge/redux-4.04-blue)](https://www.npmjs.com/package/redux) [![express](https://img.shields.io/badge/express-4.17.1-blue)](https://www.npmjs.com/package/express) 
# Weather API

Weather API built using React and redux for front end and an express server in the backend. 

## Getting Started

First time the page loads geo location will be used to get the nearby weather updates.
Search for a particular city to get weather updates.
Display the weather forecast for upcoming days as graphs.

### Prerequisites


```
node.js
npm
```

### Tools

```
"chart.js": "^2.9.2",
react
redux
react-thunk
"express": "^4.17.1",
```

### Installing

```
clone the repositry
npm install
npm start
```

### Example

### Search cities  

![alt text](https://github.com/oba14/weatherApi/blob/master/public/images/search-city.png )   

### Visualize data   

![alt text](https://github.com/oba14/weatherApi/blob/master/public/images/temp-graph.png )

## Running the tests

Supertest are used for testing endpoints.

```
npm run test
```

### Test example

```
describe('GET Nearby Weather', () => {
    it('returns 200 OK', (done) => {
      request(app)
        .get('/nearby?lat=50&lon=70')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
```

## Deployment


## Built With

* [Webpack](https://webpack.js.org/) - The web framework used


## Contributing

## Versioning

## Authors

* **Obaid** - *Initial work* - [Github](https://github.com/oba14)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* SALT
