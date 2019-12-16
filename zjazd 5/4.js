const add = async (a, b) => {
  const result = a+b;
  if (result % 2 === 0){
    throw new Error('Wynik parzysty');
  }
  return result;
}

add(3,6)
  .then( result => console.log(result))
  .catch( err => console.log(err.message));