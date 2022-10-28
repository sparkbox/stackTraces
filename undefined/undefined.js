const myFunc = (a, b) => {
  return a[b][0];
};

console.log(myFunc({ a: 'test' }, [1]));
