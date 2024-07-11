function checkAlpha(char) {
    char = char.toLowerCase(); 
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        console.log("Vowel");
        break;
      default:
        console.log("Consonant");
    }
  }
  
  // Test the function
  checkAlpha('A');   
  checkAlpha('b');    
  checkAlpha('o');    
  