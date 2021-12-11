// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021";
console.log(cohort.split(""));

// a) Your answer: --> ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '1']
// b) Verify and explain: .split() is a string method that creates an array with all characters as their own value

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`;
};
console.log(greeter("LEARN Student"));

// a) Your answer: --> Hello, LEARN Student
// b) Verify and explain: undefined because it did not have a return...

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map((value) => value * 2);
console.log(multBy2);

// a) Your answer: --> [8, 10, 12, 14, 16]
// b) Verify and explain: .map() iterates through the array and returns a new array with all the values multiplied by 2

// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter((value) => value % 2 !== 0);
console.log(onlyOdds);

// a) Your answer: --> [11, 13, 15]
// b) Verify and explain: .filter iterates through each value of the array and in this case evaluates if the value does not evenly divide by 2 and returns those values in a new array

// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
};
console.log(myCodingSkills.languages[0]);

// a) Your answer: --> JavaScript
// b) Verify and explain: the correct value is retrieved by using dot notation and indexing

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    (this.student = name), (this.cohort = "Delta"), (this.year = 2021);
  }
}
var learnStudent = new Learn("George");
console.log(learnStudent);

// a) Your answer: {"George", "Delta", 2021}
// b) Verify and explain: {student: 'George', cohort: 'Delta', year: 2021} when an object is returned, both the key and the values are returned, not just the values
