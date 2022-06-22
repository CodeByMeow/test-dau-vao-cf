function adjacentElementsProduct(inputArray) {
  const maxValue = [];
  for (var i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[ i + 1];
    maxValue.push(product);
  }

  return Math.max(...maxValue);
}

// Test
const inputArray = [2, 3,-5, -2, 4];
const output = adjacentElementsProduct(inputArray);
console.log(output);
