const helloFunc = async () => {
  return 'Hello world';
}

helloFunc()
  .then( result => console.log(result))
  .catch( err => console.log(err.message));