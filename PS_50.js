function PS_50(){
  let A_Repeat = 10;
  let B_Repeat = 10;

  //start from either A or B
  let ver1 = ['B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B'];
  let ver2 = ['A','B','A','B','A','B','A','B','A','B','A','A','B','A','B','A','B','A','B','A','B'];
  let select = [ver1,ver2];
  shuffle(select)
  let final_50switchlist = select[0];

  function getAllIndexes(arr, val) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
  }

  //randomly select locations to insert repeat trials
  for (let i = 0; i < A_Repeat; i++) {
    let A_index = getAllIndexes(final_50switchlist,"A");
    let A_repeatloc = A_index[Math.floor(Math.random()*A_index.length)];
    final_50switchlist.splice(A_repeatloc, 0, "A");
  }

  for (let i = 0; i < B_Repeat; i++) {
    let B_index = getAllIndexes(final_50switchlist,"B");
    let B_repeatloc = B_index[Math.floor(Math.random()*B_index.length)];
    final_50switchlist.splice(B_repeatloc, 0, "B");
  }

  return final_50switchlist
}
