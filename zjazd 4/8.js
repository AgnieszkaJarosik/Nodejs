const axios = require('axios');
const fs = require('fs');

const getUser = id => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url);
};

const getWeather = (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return axios.get(url);
};

const writeToFile = weather => {
  const jsonWeather = JSON.stringify(weather);
  fs.writeFile('./weather.json', jsonWeather, (err)=> {
    if(err) {
      console.log(err);
    } else {
      console.log('Zapisano do pliku');
    }
  })
}

getUser(2)
  .then(response => {
    const geo = response.data.address.geo;
    return getWeather(geo.lat, geo.lng);
  })
  .then(response => {
    writeToFile(response.data);
  })
  .catch(error => {
    console.log(error);
  });
