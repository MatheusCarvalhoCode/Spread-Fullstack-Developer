function mapSemThis(array) {
   return array.map(function(numArray) {
    return numArray * 2
   })
}

const nums = [2,4,6,8,10];

console.log(mapSemThis(nums));