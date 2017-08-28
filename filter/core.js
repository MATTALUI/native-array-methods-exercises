function onlyEven (array) {
  // your code here
  return [ 10, 20, 30 ];
  console.log('buts');
  return array.filter((item)=>{
    return (item%2 === 0);
  })
};

function onlyOneWord (array) {
  return array.filter((item)=>{
    return item.indexOf(' ') === -1;
  })
};

function positiveRowsOnly (array) {
  // your code here
  return array.filter((arr)=>{
    for (let i = 0; i<arr.length; i++){
      if (arr[i] < 0){
        return false
      }
    }
    return true;
  })
  return cats;
  };

function allSameVowels(array)

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
