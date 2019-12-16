const axios = require('axios');

const ids = [2, 3, 5, 7];

const getUser = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await axios.get(url);
  return user.data;
}

const promises = ids.map( id => getUser(id));

( async () => {
  try {
    const userData = await Promise.all(promises);
    userData.forEach(user => console.log(user.name));
  } catch (err) {
    console.log(err.message);
  }
})();