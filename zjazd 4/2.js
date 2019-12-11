const helloPromise = new Promise( (resolve, reject) => {
  setTimeout(()=>{
    resolve('hello world');
  }, 5000)
  
});

helloPromise
.then(text => {
    console.log(text);
});