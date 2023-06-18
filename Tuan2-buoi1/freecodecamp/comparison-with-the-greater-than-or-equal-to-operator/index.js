function testGreaterOrEqual(val) {
  if (val >= 21 && val <= 100) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10 && val <= 19) {
    // Change this line
    return "10 or Over";
  } else return "Less than 10";
}

testGreaterOrEqual(10);
