function findMax(a, b, c) {

/*if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
  }
}  
  else {
  if (b > c) {
    return b;
  } else {
    return c;
  }
}*/

    return (a > b) ? (a > c ? a : c) : (b > c ? b : c);
  }
  
  // Test the function
  let maxNumber = findMax(10, 25, 27); 
  console.log(maxNumber); 
  