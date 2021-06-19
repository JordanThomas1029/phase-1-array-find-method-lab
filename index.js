//attempt #1

function superbowlWin(record) {
  const result = record.find((record) => record.result === 'W');
  {
    if (result === 'W') {
      console.log(record.year);
    }
  }
}

//attempt #2

function superbowlWin(record) {
  for (record of collection) {
    if (record.result === 'W') {
      console.log(record.year);
    }
  }
}
superbowlWin(record);

function superbowlWin(record) {
  const result = record.find((record) => record.result === 'W');
  return !!result ? result.year : undefined;
}
