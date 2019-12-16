const fs = require("fs");
const util = require("util");
const axios = require("axios");

const getUser = id => {
  const url = ` https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url);
};

const getAlbum = id => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
  return axios.get(url);
}

const setFilename = title => {
  title = title.replace(/\s+/g, '');
  title.length >10 ? fileName = title.slice(0,9) + '.txt' : fileName = title + '.txt';
}

const logAlbum = response => {
  const [{id, title}] = response.data;
  console.log(`Ilość albumów: ${response.data.length}, 
Tytuł pierwszego albumu: ${title}`);
  setFilename(title);
  return id;
}

const getPhotos = id => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
  return axios.get(url);
}

const writeToFile = ( fileName, data ) => {
  const writeFile = util.promisify(fs.writeFile);
  const jsonData = JSON.stringify(data);
  return writeFile(fileName, jsonData)
  .then( () => "Zapisano do pliku");
};

const errorHandler = err => console.log("ERROR:  " + err.message);

getUser(3)
  .then( response => {
    const {id, name} = response.data;
    console.log(name);
    return getAlbum(id);
  })
  .then( logAlbum )
  .then( id => getPhotos(id) )
  .then( response => {
    console.log(`Tytuły zdjęć:`);
    response.data.forEach( (photo, i) => console.log(`${i+1} - ${photo.title}`));
    return writeToFile(fileName, response.data);
  })
  .then(data => console.log(data))
  .catch( errorHandler );
