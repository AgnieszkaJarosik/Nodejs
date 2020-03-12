const axios = require("axios");

const getUser = () => {
  const url = ` https://jsonplaceholder.typicode.com/users/1`;
  return axios.get(url);
};

const logUser = (response) => {
  console.log(response.data.name);
}

const getAlbum = () => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=1`;
  return axios.get(url);
}

const logAlbums = (response) => {
  console.log(`Ilość albumów: ${response.data.length}, 
Tytuł pierwszego albumu: ${response.data[0].title}`);
      return response.data[0].title;
}

const getPhoto = () => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=1`;
  return axios.get(url);
}

const logPhoto = (response) => {
  console.log(`Tytuły zdjęć:`);
  response.data.forEach( (photo, i) => {
    console.log(`${i+1} - ${photo.title}`);
  })
}

const errorHandler = (err) => {
  console.log("ERROR");
  console.log(err);
}

getUser()
  .then( logUser )
  .then( getAlbum )
  .then( logAlbums )
  .then( getPhoto )
  .then( logPhoto )
  .catch( errorHandler );