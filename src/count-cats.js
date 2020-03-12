module.exports = function countCats(matrix = []) {
  const result = matrix.reduce((acc, subArray) => {
    const c = subArray.filter(i => i == '^^').length;
    return acc + c;
  }, 0);

  return result;
};


// module.exports = function countCats(matrix = []) {
  
//   let count = [];
//   matrix.reduce(
//     (acc, curr) => (acc.concat([...curr])).map((i)=>{
//     return (i == "^^")
//       ? count.push(i)
//       : 0
//   }), [])
    
//   return (count.length != 0 )
//     ? count.length
//     : 0
// };
