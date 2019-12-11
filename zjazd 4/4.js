var request = require('request');

const getUser = (id) => {
  return new Promise ((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(url, (error, response, body) => {
      if(error) {
        reject( 'Błąd');
      } else if(response.statusCode===200){
        resolve(body);
      } 
    });
})
}

getUser(2)
  .then(body => {console.log(body)})
  .catch(error => {console.log(error)});