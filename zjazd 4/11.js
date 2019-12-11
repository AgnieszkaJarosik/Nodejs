const axios = require("axios");
const fs = require("fs");
const util = require("util");

let fileName = '';

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

const setFilename = (title) => {
  title = title.replace(/\s+/g, ''); //RegExp
  title.length >10 ? fileName = title.slice(0,9) + '.txt' : fileName = title + '.txt';
}

const getPhoto = () => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=1`;
  return axios.get(url);
}

const logPhoto = (response) => {
  const photos = [];
  console.log(`Tytuły zdjęć:`);
  response.data.forEach( (photo, i) => {
    console.log(`${i+1} - ${photo.title}`);
    photos.push(photo.title);
  });
  return photos;
}

const writeToFile = ( fileName, data ) => {
  const writeFile = util.promisify(fs.writeFile);
  const jsonData = JSON.stringify(data);
  writeFile(fileName, jsonData);
  return fileName;
};

const logSaveInfo = (fileName) => {
  console.log(`Zapisano do pliku ${fileName}`)
}

const errorHandler = (err) => {
  console.log("ERROR");
  console.log(err);
}

getUser()
  .then( logUser )
  .then( getAlbum )
  .then( logAlbums )
  .then( setFilename )
  .then( getPhoto )
  .then( logPhoto )
  .then( photos => writeToFile(fileName, photos))
  .then( logSaveInfo )
  .catch( errorHandler );