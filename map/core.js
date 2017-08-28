function multiplyBy10 (array) {
 return array.map(number=>number*10);
};

function shiftRight (array) {
 return array.map((item, index)=>{
   if(index === 0)return array[array.length-1];
   return array[index-1];
 });
};

function onlyVowels (array) {
 return array.map((word)=>{
   return word.split('').filter(letter=>letter.match(/[aeiou]/ig)).join('');
 });
};

function doubleMatrix (array) {
  return array.map((internalArray)=>{
    return internalArray.map(number=>number*2);
  });
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
