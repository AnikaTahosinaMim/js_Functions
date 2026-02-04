function analyzeMarks(marksObj) {
  //   console.log(marksObj);
  let total = 0;
  let hightest = -Infinity;
  let lowest = Infinity;
  let hightestSubject = null;
  let lowestSubject = null;
  for (const mark in marksObj) {
    const value = marksObj[mark];
    // console.log(mark,value);
    total = total + value;
    if (value > hightest) {
      hightest = value;
      hightestSubject = mark
    }
    else if(value < lowest){
        lowest = value
        lowestSubject = mark
    }
  }
  //   console.log("total :", total);
  const avarage = total / Object.keys(marksObj).length;
  //   console.log("ava", avarage);

  return {
    total: total,
    avarage: avarage,
    hightestSubject: hightestSubject,
    lowestSubject:lowestSubject
  };
}

const analyze = analyzeMarks({
  math: 78,
  english: 65,
  physics: 88,
  bangla: 55,
});
console.log(analyze);
