const axios = require('axios');

const getUser = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await axios.get(url);
  return user.data;
}

( async () => {
  try {
    const userData = await getUser(133);
    console.log(userData);
  } catch (err) {
    console.log(err.message);
  }
})();