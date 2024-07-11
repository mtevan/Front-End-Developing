function checkNumber(number) {
    switch (true) {
      case (number > 0):
        console.log("Positive");
        break;
      case (number < 0):
        console.log("Negative");
        break;
      default:
        console.log("Zero"); 
    }
  }
  
  // Test the function
  checkNumber(5);
  checkNumber(-10);
  checkNumber(0);
  