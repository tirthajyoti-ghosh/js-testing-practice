const analyze = (array) => {
  const average = () => array.reduce((total, num) => total + num) / array.length;

  const min = () => Math.min(...array);

  const max = () => Math.max(...array);

  const length = () => array.length;
  
  return {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };
};

export default analyze;
