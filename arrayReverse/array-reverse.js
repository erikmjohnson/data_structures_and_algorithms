const arr = [1, 2, 3, 4, 5];

// const reverseArray = (array) => {
//   return array.reverse();
// }

// console.log(reverseArray(arr));

const longReverse = (array) => {
  const newArray = [];

  for (let i = array.length - 1;  i >= 0; i--) {
    newArray.push(array[i]);
  }
  
  return newArray;
};

console.log(longReverse(arr));
