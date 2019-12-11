const axios = require("axios");
const fs = require("fs");
const util = require("util");

const getUser = id => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url);
};

const getWeather = (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return axios.get(url);
};

const writeWeather = weather => {
  const writeFile = util.promisify(fs.writeFile);
  const jsonWeather = JSON.stringify(weather);
  writeFile("weather.json", jsonWeather);
};

getUser(2)
  .then(response => {
    const geo = response.data.address.geo;
    return getWeather(geo.lat, geo.lng);
  })
  .then(response => {
    return writeWeather(response.data);
  })
  .then((data) => {
    console.log("Zapisano do pliku");
  })
  .catch(error => {
    console.log(error);
  });
