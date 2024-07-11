function checkNumber(number) {
    switch (number % 2) {
      case 0:
        console.log("Even");
        break;
      case 1:
        console.log("Odd");
        break;
    }
  }
  
  // Test the function
  checkNumber(12);
  checkNumber(7);
  