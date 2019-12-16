var request = require("request");
const fs = require("fs");

const getUser = id => {
  return new Promise((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(url, { json: true }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject("User not found");
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
        reject("Weather not found");
      }
    });
  });
};

const writeWeather = weather => {
  const jsonWeather = JSON.stringify(weather);
  return new Promise((res, rej) => {
    fs.writeFile("./weather.json", jsonWeather, err => {
      if (err) {
        rej(err);
      } else {
        res("Zapisano do pliku");
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
    return writeWeather(weather);
  })
  .then(text => console.log(text))
  .catch(error => {
    console.log(error);
  });
