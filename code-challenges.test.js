// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("evenly divisible by three or not", () => {
  var num1 = 15;
  // Expected output: "15 is divisible by three"
  var num2 = 0;
  // Expected output: "0 is divisible by three"
  var num3 = -7;
  // Expected output: "-7 is not divisible by three"
  it("will use modulus to evaluate if the number has a remainder or not", () => {
    // adding variables into the parameter since they are declared up top
    expect(divisibleByThree(num1)).toEqual("15 is divisible by three");
    expect(divisibleByThree(num2)).toEqual("0 is divisible by three");
    expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three");
  });
});

// b) Create the function that makes the test pass.

// create a function that takes in a number as the argument √
// use modulus to see if it has a remainder √
// return a string literal √

const divisibleByThree = (num) => {
  return num % 3 !== 0
    ? `${num} is not divisible by three`
    : `${num} is divisible by three`;
}; // I have Prettier install and it's making it look like this, not sure if actually prettier...

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("return array with all words capitalized", () => {
  var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
  // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
  var randomNouns2 = [
    "temperature",
    "database",
    "chopsticks",
    "mango",
    "deduction",
  ];
  // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
  it("will use .map() and logic on all values in the array", () => {
    // adding variables into the parameter since they are declared up top
    expect(yelling(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
    expect(yelling(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
      "Deduction",
    ]);
  });
});

// b) Create the function that makes the test pass.

// create a function that takes an array as argument √
// use .map() to iterate over array and √
// use charAt(0), .toUpperCase(), and .slice() in the rest of the word to make each value capitalized √
// return array with a values capitalized √

const yelling = (array) => {
  return array.map((value) => value.charAt(0).toUpperCase() + value.slice(1));
};

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.
describe("index of first vowel", () => {
  var vowelTester1 = "learn";
  // Expected output: 1
  var vowelTester2 = "academy";
  // Expected output: 0
  var vowelTester3 = "challenges";
  // Expected output: 2
  it("will take in a string and log the index of the first vowel", () => {
    expect(firstVowel(vowelTester1)).toEqual(1);
    expect(firstVowel(vowelTester2)).toEqual(0);
    expect(firstVowel(vowelTester3)).toEqual(2);
  });
});

// b) Create the function that makes the test pass.

// create a function that takes in a string as the argument √
// create a list of vowels √
// turn string into an array with split and use forEach √ (kinda, ended up using for loop)
// use includes() to check if character is in vowels list, if so return index √
// return the index √

// const firstVowel = (string) => {
//   let vowels = ["a", "e", "i", "o", "u", "y"];
//   let splitString = string.split("");
//   for (let i = 0; i < splitString.length; i++) {
//     if (vowels.includes(splitString[i])) {
//       return i;
//     }
//   }
// };

// I tried refactoring but couldn't get it to really work that well, here's what I ended up with by using .forEach() instead of a for loop but not really sastified.

const firstVowel = (string) => {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let vowelIndexes = [];
  string
    .split("")
    .forEach((val, i) => (vowels.includes(val) ? vowelIndexes.push(i) : null));
  return vowelIndexes[0];
};
