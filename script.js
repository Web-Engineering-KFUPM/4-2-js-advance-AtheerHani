/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/

const student = {
   firstName: "Atheer",
   lastName: "Almomtin",
   _gpa: 3.5,
   get fullName(){
      return this.firstName + " " + this.lastName;
   },
   set updateGPA(newGPA){
      if(newGPA >= 0.0 && newGPA <= 4.0){
         this._gpa = newGPA;
      }
   },
}
console.log(student.fullName);
student.updateGPA = 3.8;
console.log(student._gpa);




// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courseMap = {"ICS344" : "Information Security", "SWE363" : "Web Engineering & Development"}
for(const course in courseMap){
   console.log(`${course} : ${courseMap[course]}`);
}
// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const stringObj = new String("Hello World!");
console.log("The string is: " + stringObj)
console.log("The first character in the string is: " + stringObj.charAt(0));
console.log("The last character in the string is: "  + stringObj.charAt(11));
console.log("The length of the string is: " + stringObj.length);

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/

const date = new Date();
console.log("The current day of the month is: " + date.getDate());
console.log("The current month of the year is: " + date.getMonth());
console.log("The current year is: " + date.getFullYear());
// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const min = Math.min(...numbers)
const max = Math.max(...numbers)
console.log("The minimum number is: " + min);
console.log("The maximum number is: " + max);


// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
