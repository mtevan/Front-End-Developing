function getDays(month, year) {
  const leapYear = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  //Leap Year Condition🤣

  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      console.log(31);
      break;
    case 2: // February
      console.log(leapYear ? 29 : 28);
      break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      console.log(30);
      break;
    default:
      console.log("Invalid month number");
  }
}

// Test the function
getDays(2, 2024);
getDays(2, 2021);
getDays(9, 2024);
getDays(7, 2023);

getDays(13, 2024); //invalid texting
