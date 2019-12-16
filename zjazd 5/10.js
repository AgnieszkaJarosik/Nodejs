const axios = require("axios");

const getUser = async id => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await axios.get(url);
  return user.data;
};

const getPosts = async id => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  const posts = await axios.get(url);
  return posts.data;
};

const getCommetns = async id => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  const comments = await axios.get(url);
  return comments.data;
};

(async () => {
  try {
    const userData = await getUser(2);
    const { id, name, email } = userData;
    console.log(`${name}, e-mail - ${email}`);
    const posts = await getPosts(id);
    console.log(`Ilość postów uzytkownika - ${posts.length}`);
    const promises = posts.map(post => getCommetns(post.id));
    const comments = await Promise.all(promises);
    let commentsSum = 0;
    comments.forEach(postComments => (commentsSum += postComments.length));
    console.log(`Łączna ilość komentarzy - ${commentsSum}`);
  } catch (err) {
    console.log(err.message);
  }
})();
