const div = (a, b) => {
  if(b===0) {throw new Error('divide by 0')}
  return a/b;
}

try {
  const result = div(2,2);
  console.log(result);
} catch (err) {
  console.log(err.message);
}