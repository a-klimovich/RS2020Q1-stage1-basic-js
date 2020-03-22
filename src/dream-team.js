module.exports = function createDreamTeam(members) {
  // function stringSerch(value){
  //   return typeof(value) === 'string'
  // }
  // return members.filter(stringSerch).map((i => i[0])).sort().join('').toUpperCase()
  if (!Array.isArray(members)) {
    return false
  }

  return members.reduce((a, i) => {
      if (typeof i === 'string') {
        const k = i.replace(/\s/g, '');
        return a + k[0]
      }

      return a
    }, '').toUpperCase().split('').sort().join('')
};