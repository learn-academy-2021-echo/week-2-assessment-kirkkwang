# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: In a function the parameter is what the function requires to run while the argument is what is given to satisfy the parameter. An example would be:

```javascript
const greeter = (name) => `Hi, ${name}!`;
```

The parameter to make this function run is `(name)` and the argument given can be someone's name.

Researched answer: A parameter is a named variable which is passed into a function while an argument is a value which is passed into a function as its input.

2. The JavaScript built in method `.map()` takes predefined parameters. What are they? Which are required and which are optional?

Your answer: `.map()` has three predefined parameters in this sequential order: value, index, and the array it's being called on. At least one of the parameters are required to run. If one needs to access the index, the value parameter must be declared. If the array is needed, then the first two (value and index) must be declared.

Researched answer: `.map()` actually has a fourth argument called thisArg which is optional as well as index and array. `.map()` will iterate over an array and return a new array with the specified modifications.

3. What is object destructuring?

Your answer: Object destructuring is creating a shortcuts to get to the element needed quicker. It eliminates repetitive typing by saving the object's path in a particular manner.

Researched answer: It is also apart of a greater concept referred to as destructuring assignment syntax which makes it possible to unpack values and properties from not just objects but also arrays into distinct variables.

4. What is the difference between a function and a method?

Your answer: A function is a reusable block of code that modifies data while a method is a kind of function that is used on the object it's being called upon. A method is an property of the object while a function is detached from objects.

Researched answer: Unlike a method, a function lives on its own and is not associated with an object property. Also, data passed into a function is explicit while a method implicitly passes data to the object it is being called on.

5. What is the difference between a class and an object?

Your answer: An object is a collection of data with key value pairs, it houses the data which can be retrieved and manipulated in various ways. A class is a template or blueprint in which the object is structured. It is a way to quickly create multiple objects with the same structure but not necessarily same data via constructors arguments. If a function is a way to reuse logic, a class is a way of reusing objects.

Researched answer: Objects can have properties and methods and the dot notations to access them and use the `this` keyword refer to itself. Classes can have sub classes which are created with the keyword `extends`. // really not sure what that last part means yet..

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting is when a function is declared somewhere down the line but can still be invoked prior at an earlier point.

Researched answer: Hoisting is JavaScript's default behavior of moving declarations to the top of the current script or current function

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: It is a way to extending a class and keeping previously established structors, for example if we have an Animal class, and we want to create a sub class of Cat, the Cat will have traits inherited from Animal.

2. React: It is a declarative, efficient, and flexible JavaScript library for building user interfaces. React is one of the (if not most) popular JavaScript frameworks. React was created by Facebook in 2013.

3. React state: It is an instance of a React Component Class which can be defined as an object that holds information that may change over its lifetime.

4. React lifecycle methods: A series of events that happen to a React Component throughout the birth, growth, and death stages.

5. DOM: The Document Object Model which is is an interface for web documents, it represents the page so other programs can interact, change, and restyle the content.
