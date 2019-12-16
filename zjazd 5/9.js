const axios = require('axios');

const getUser = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await axios.get(url);
  return user.data;
}

const getWeather = async (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  const weather = await axios.get(url);
  return weather.data;
}

( async () => {
  try {
    const userData = await getUser(1);
    console.log(userData.name);
    const {geo: {lat, lng}} = userData.address;
    const weather = await getWeather(lat, lng);
    console.log(weather.main.temp);
  } catch (err) {
    console.log(err.message);
  }
})();