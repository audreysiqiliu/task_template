function cnt_consecutive_elements(array) {
  let result = [];
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      counter++;
    } else {
      result = result.concat(counter);
      counter = 1;
    }
  }
  return result;
}
