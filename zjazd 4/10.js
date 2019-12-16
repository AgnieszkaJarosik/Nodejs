const axios = require("axios");

const getUser = id => {
  const url = ` https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url);
};

const getAlbum = id => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
  return axios.get(url);
}

const logAlbum = response => {
  const [{id, title}] = response.data;
  console.log(`Ilość albumów: ${response.data.length}, 
Tytuł pierwszego albumu: ${title}`);
  return id;
}

const getPhotos = id => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
  return axios.get(url);
}

const logPhotos = response => {
  console.log(`Tytuły zdjęć:`);
  response.data.forEach( (photo, i) => console.log(`${i+1} - ${photo.title}`));
}

const errorHandler = err => console.log("ERROR:  " + err.message);

getUser(3)
  .then( response => {
    const {id, name} = response.data;
    console.log(name);
    return getAlbum(id);
  })
  .then( logAlbum )
  .then( id => getPhotos(id) )
  .then( logPhotos )
  .catch( errorHandler );