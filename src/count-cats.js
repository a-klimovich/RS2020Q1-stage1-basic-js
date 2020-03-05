module.exports = function countCats(matrix = []) {
  
  let count = [];
  matrix.reduce(
    (acc, curr) => (acc.concat([...curr])).map((i)=>{
    return (i == "^^")
      ? count.push(i)
      : 0
  }), [])
    
  return (count.length != 0 )
    ? count.length
    : 0
};
