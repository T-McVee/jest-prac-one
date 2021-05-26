
const analyze = array => {
  
  const findMin = () => {
    return array.reduce((lowest, current) => current < lowest ? current : lowest);
  }

  const findMax = () => {
    return array.reduce((highest, current) => current > highest ? current : highest);
  }
  
  const findLength = () => {
    return array.length;
  }

  const findAvg = () => {
    const sum = array.reduce((total, current) => total + current);
    const avg = sum / array.length;

    return parseFloat(avg.toFixed(2));
  }
  
  const result = {
    min: findMin(),
    max: findMax(),
    avg: findAvg(),
    len: findLength(),
  }

  return result;
}

module.exports = analyze;