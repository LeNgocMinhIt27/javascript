function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10 && val <= 100) {
    // Change this line
    return "Over 10";
  } else return "10 or Under";
}

testGreaterThan(10);
