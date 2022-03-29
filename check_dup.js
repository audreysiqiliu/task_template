function check_dup(array) {
  let value = false;
  let i;
  for (i = 0; i < array.length; i++) {
    if (array[i] == array[i-1]) {
      value = true}
  }
  return value
}
