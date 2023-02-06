const finalAvgPrice = array => {
  const filteredArray = array.filter((x) => x !== 0);
  console.log(filteredArray)
  const sum = filteredArray.reduce((prev, acc) => prev + acc, 0);
  const average = sum / filteredArray.length;
  if (isNaN(average)) {
    return 0
  } 
  return average
};

console.log(finalAvgPrice([0, 2, 4, 0, 0, 8]));
