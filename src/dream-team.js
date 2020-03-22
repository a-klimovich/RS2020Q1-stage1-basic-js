module.exports = function createDreamTeam(members) {
  function stringSerch(value){
    return typeof(value) === 'string'
  }
  
  return members.filter(stringSerch).map((i => i[0])).sort().join('').toUpperCase()
};