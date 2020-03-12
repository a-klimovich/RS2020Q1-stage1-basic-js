const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false
  }

  if (sampleActivity.split('.').length > 2) {
    const arr = sampleActivity.split('.')
    sampleActivity = `${arr[0]}.${arr[1]}`
  }
  
  const number = Number(sampleActivity)

  if (Number.isNaN(number) || number <= 0 || number > 15) {
    return false
  }

  const k = Math.log(2).toFixed(3) / HALF_LIFE_PERIOD
  const t = Math.log(MODERN_ACTIVITY / sampleActivity) / k

  return Math.ceil(t)
};
