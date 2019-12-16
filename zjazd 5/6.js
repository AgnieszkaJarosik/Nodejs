const axios = require('axios');

const getUser = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await axios.get(url);
  return user.data;
}

( async () => {
  const userData = await getUser(1);
  console.log(userData);
})();