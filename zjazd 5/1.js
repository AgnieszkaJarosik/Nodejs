const fs = require('fs');

try{
  const userJson = fs.readFileSync('./user.json', 'utf-8');
  const user = JSON.parse(userJson);
  console.log(user);
} catch (err) {
  console.log(err.message);
}
