const fruits = [ 'rambutan', 'pitaya', 'guava', 'mango', 'guyabano', 'papaya'];

const getLength = (array) => {
  return array.length;
};

const reduceLength = (array, maxLength) => {
  const newArray = [...array];
  
  newArray.length = maxLength;

  return newArray;
};

const getIndex = (array, target) => {
  return array.indexOf(target);
};

console.log(reduceLength(fruits, getIndex(fruits, 'fig')));
