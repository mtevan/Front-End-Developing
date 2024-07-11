function resultXGrade(marks) {
    let grade;
  
    switch (true) {
        case (marks >= 80):
            grade = 'A+';
            break;
        case (marks >= 75):
            grade = 'A';
            break;
        case (marks >= 70):
            grade = 'A-';
            break;
        case (marks >= 65):
            grade = 'B+';
            break;
        case (marks >= 60):
            grade = 'B';
            break;
        case (marks >= 55):
            grade = 'B-';
            break;
        case (marks >= 50):
            grade = 'C';
            break;
        case (marks >= 45):
            grade = 'C-';
            break;
        case (marks >= 40):
            grade = 'D';
            break;
        default:
            grade = 'F';
        } //grading depends on how we count it. This one is a DEMO by Moshiur Tanvin
  
    console.log("Marks:", marks);
    console.log("Grade:", grade);
  }
  
  // Test the function
  resultXGrade(80);
  resultXGrade(76);
  resultXGrade(71);
  resultXGrade(67);
  resultXGrade(63);
  resultXGrade(58);
  resultXGrade(52);
  resultXGrade(48);
  resultXGrade(43);
  resultXGrade(39);

  