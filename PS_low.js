function PS_low(){
  //120 trials (plus one random start)
  //36 switches, 84 repeats

  let block_length = 121;
  let A_Repeat = 42;
  let B_Repeat = 42;

  //starting sequence with A or B; change length according to PS
  let ver1 = ['A','B','C','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A'];
  let ver2 = ['B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B','A','B'];

  let select = [ver1,ver2];
  shuffle(select)
  let switchlist = select[0];

  function getAllIndexes(arr, val) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
  }

  //randomly select locations to insert repeat trials
  for (let i = 0; i < A_Repeat; i++) {
    let A_index = getAllIndexes(switchlist,"A");
    let A_repeatloc = A_index[Math.floor(Math.random()*A_index.length)];
    switchlist.splice(A_repeatloc, 0, "A");
  }

  for (let i = 0; i < B_Repeat; i++) {
    let B_index = getAllIndexes(switchlist,"B");
    let B_repeatloc = B_index[Math.floor(Math.random()*B_index.length)];
    switchlist.splice(B_repeatloc, 0, "B");
  }

  return switchlist
}
