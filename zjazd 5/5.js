const add = async (a, b) => {
  const result = a+b;
  if (result % 2 === 0){
    throw new Error('Wynik parzysty');
  }
  return result;
}

( async () => {
  try {
    const result = await add(4,8);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
})();