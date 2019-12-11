const sub = (a, b) => {
  return new Promise( (resolve, reject) => {
  if (a-b > 0) {
      resolve('Dodatni wynik');
  } else {
      reject('Ujemny wynik');
  }
});
}

sub(3, 2)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });