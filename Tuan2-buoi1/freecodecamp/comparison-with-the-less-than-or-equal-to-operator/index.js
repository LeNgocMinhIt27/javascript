function testLessOrEqual(val) {
  if (val >= 0 && val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val >= 23 && val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  } else return "More Than 24";
}

testLessOrEqual(10);
