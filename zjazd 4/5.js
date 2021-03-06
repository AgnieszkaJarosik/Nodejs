var request = require("request");

const getUser = id => {
  return new Promise((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(url, { json: true }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
          resolve(body);
      } else {
          reject('User not found');
      }
  });
  });
};
const getWeather = (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return new Promise((resolve, reject) => {
    request(url, { json: true }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
          resolve(body);
      } else {
          reject('Weather not found');
      }
  });
  });
};

getUser(2)
  .then(user => {
    const geo = user.address.geo;
    return getWeather(geo.lat, geo.lng);
  })
  .then(weather => {
    console.log(weather.main.temp); 
  })
  .catch(error => {
    console.log(error);
  });
