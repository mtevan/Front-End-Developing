function getDays(weekNumber) {
  switch (weekNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: //(can be added upto 53 cases as 1 year contains 52/53 weeks)
      console.log("7 days");
      break;
    default:
      console.log("Invalid week number");
  }
}

// Test the function
getDays(3);
getDays(54);
