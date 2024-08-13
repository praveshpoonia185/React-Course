// WHAT IS REACT?
// React is an open source JavaScript library used to building frontend applications
// In simple words, with react we can create fast and better frontend application

// React was created by "Facebook" in 2011, and currently it is the most popular and most used JavaScript library

// Also, there are other JavaScript libraries like 'Angular' and 'Vue', but they are not as better as 'React'

// So with React, we don't need to worry about writing Vanilla JavaScript[Pure JavaScript] code Instead of that, we divide our application in small piece of code
// This small piece of code is called as "Components" and then "React" will take care about writing simple code for creating and updating "DOM"
// So Components is used to write reusable and better organized code 

// Also with "React", we can create "Single Page Application" which means our application loads only one time



// VIRTUAL DOM
// Another reason why "React" is so fast is "React" has Virtual DOM feature

// When we build a Web Page with React, it maintains a virtual representation of Web Page and and it is called as "Virtual DOM"
// whenever we want to update our Web Page, we describe the changes to the "Virtual DOM" instead of directly modifying the Real DOM 

// React's Virtual DOM compares the New Virtual DOM with the Previous one, after that React knows exactly which part of the Real DOM need to change to match the New Virtual DOM

// Virtual DOM makes updating the Real DOM smoother and more efficient and also it enhances the Performance and User Experience of Web Application



// SETUP DEV. ENVIRONMENT
// So, first of all we need NodeJS
// We are just using one part of NodeJS, which is NPM which is known as "Node Package Manager" 
// This NPM is used to install React Applications and some additional features



// CREATING REACT APPLICATION
// There are two ways to create React Applications:

// First, we can use "create react app" 
// Second, we can use "vite"

// "create react app" is the old and takes more time to create
// We will use "vite" for creating the new React Applications

// * npm create vite@latest   [Make sure we always write our Application Name in small case and without any underscore.] 
// * cd first-application
// * npm install [node version should be greater than or equal to 18]
// * npm run dev


// Here 'npm install' command will install all packages that are needed to create a React Application like Webpack[which is used to bundle different files in one file]
// Another important package is "Babel", This package is used to convert JSX, which is the modern JavaScript code into the HTML code 
// So "Babel" converts that JSX into simple JavaScript code which Browsers can undestand



// UNDERSTAND THE REACT TEMPLATE
// "node_modules" is the folder where all installed packages and library stay
// "public" folder contains static assets that is served directly to the client, For eg: vite.svg which is fav icon 
// 'src' means 'source' folder, this is the folder in which we spend our almost all time for writing code
// In 'src' folder, we have "assets" folder in which we put all our Images, icons, fonts, etc which we use in our 'Components'
// Next in 'src' folder, we have bunch of files:
// First one is App.jsx, which is the root component of our Application, which means This is the Starting Point of the Component chain 
// NOTE: '.jsx' stands for "JavaScript XML", this is the extension of React Component, it is almost similar to ".js"
// So using this ".jsx", we can write HTML and JavaScript code together and this is the Heart of React

// After that we have "App.css" file which is used to style the 'App.jsx' file markup
// Next we have "main.jsx" file, which is the most important file of React
// "main.jsx" is the file which connects our components with index.html file 

// "<div id="root"> (Div with ID root)" is the main Tag, in which all react components will display on Browser

// After "scr" folder, we have '.gitignore' file in which we can define which files or folders will not upload on Git  
// Next we have "package.json" file which has the all information about our Application like name, version, package versions, etc
// so if we lost our "node_modules" folder, then by using this "package.json" file we can recreate the "node_modules" folder

// "package-lock.json" is essentially used to lock dependencies to a specific version number
// "vite.config.js" file has the configuration object for our Application



// VAR, LET AND CONST

// var, let and const keywords are used to define variables in JavaScript
// "let" and "const" are new features in modern JavaScript
// Most of the Developers use "let" and "const" instead of using "var"

function printLoop() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }

  console.log("OUTSIDE", i);
}

printLoop();

// In Other Programming Languages, Variables should only accessible for the Block in which it defined and that is we called as "Scope"
// So "var" is not a Block Scope Variable, it is the Functional Scope Variable, which means we can access the "var" variable inside whole Function

// We use "var" when we want to access variable in full Function but that is Rare
// Most of the time we use "let" and "const" when we want to access that variable only inside the Block of code inwhich they defined 

// Difference between "let" and "const"
// Here this "const" means "Constant", "Constant" means we cannot change it 
let x = 10;
const y = 10;
// Now we can reassign the variable value which we declared with "let"
x = 20;
// but we can reassign the variable value which we declared with "const"
// y = 20; ==> we cannot write it will give us error

// So Don't use "var" keyword because it has Functional Scope and prefer to use "const" keyword before "let" 



// ARROW FUNCTION
// "Arrow Function" is another way to define "JavaScript Functions"
// In other words, we can write JavaScript Functions in simple and easy way
// This is very useful feature of JavaScript when we are working in advanced topics

const sayHello = (language) => {
  console.log("Hello JavaScript", language);
};

sayHello("REACT");



// ACCESSING THE OBJECTS:
// "Object" is a Key-Value Pair
// In other words, JavaScript Object is a collection of named value 

// const user = {
//   firstName: "Pravesh",
//   lastName: "Poonia",
//   address: "India",
// }

// console.log(user.address);
// console.log(user["firstName"]);



// OBJECT DESTRUCTURING:

const user = {
  firstName: "Pravesh",
  lastName: "Poonia",
  email: "abc@gmail.com",
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// console.log(firstName, lastName, email);


// Now, we can access these Objects in less lines by using "Object Destructuring"
// const { firstName, lastName, email } = user;   // This single line code works the same as three lines of code we wrote above
// console.log(firstName, lastName, email);

// Now what if we want to change this firstName variable, now let's say "userName", So for that we have to add colon here and after that we add userName
const { firstName: userName, email } = user;
console.log(userName, lastName, email);



// MAP ARRAY METHOD:
// This is one of the most used Array method in React application
// In React, we use "Map method" to "display the List of Data"

const products = ["Product1", "Product2", "Product3"];

const displayItems = products.map(function (product) {
  return `<li>${product}</li>`
});

console.log(displayItems);

// "Map Method" returns a New Array, it does not change the Orignal Array



// FILTER ARRAY METHOD:
// "Filter Method" is used to Filter Array
// In Simple words, Filter is used to remove items from orignal array
// "Filter Method" always returns a New Array

const ages = [5, 18, 22, 21, 33];

const filterAges = ages.filter((age) => {
  return age >= 18;
});

console.log(filterAges);



// SPREAD OPERATOR(...):
// Another useful feature of modern JavaScript is the "Spread Operator"

const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];
const arr3 = [5, 6];

// To Combine these two array in Single array, we use Spread Operator

// const numbers = arr1.concat(arr3, arr2); // This is "Concat Method" not "Spread Operator" method

const numbers = [...arr1, 5, 6, ...arr2];

// We can also use the "Spread Operator" with "Objects"

const obj1 = {
  name: "Rajiv",
};

const obj2 = {
  lastName: "Singh",
};

const userSpread = { ...obj1, ...obj2, hobby: [learning] };
console.log(userSpread);



// TERNARY OPERATORS:
// "Ternary Operator" is used for "adding condition"
// In simple words, "Ternary Operators" are the "shortcut way to write if-else condition"
// condition ? trueExpression : falseExpression, basically here "?" means true and ":" means false

// if condition is true, then First Expression will run, else Second Expression

const marks = 50;

const result = marks > 40 ? "Pass" : "Need to Improve";
console.log(result);



// MODULES IN JAVASCRIPT:
// "Modules" are one of the most important concepts of modern JavaScript used in React or we can say "React" work on "Modules"

// "Module" is a file that contains code to "perform specific task"
// It can contain variables, objects, functions etc...

// So as our Application grows, we have to write thousands line of code but instead of putting everything in single file, we can divide our code into seperate files by their functionality, which we can call as "Modules"
// And by using these Modules, we can make our code Organize and super easy to manage

import { feed } from "./Feed";

feed();



// EXPORT DEFAULT:

// Difference between "export" and "export default" ?
// The only difference is in the "import statement"

import feed, { anotherFunction } from "./Feed";
anotherFunction();

// At the place of curly brackets, we can directly add export default function with any name
// For eg, In place of "feed" function we can write feeded in import statement and it will work as feed function

import feeded, { anotherFunction } from "./Feed";
feeded();


// useEffect Hook:
// "useEffect" is used to perform Side Effects in our component

// What is Side Effects?
// "Side Effects" are actions which are performed with the "Outside world"
// For eg: Fetching Data from an API, Storing Data in the Local Storage, Directly Updating DOM and Timer functions like (setTimeout - setInterval)


// What is "COMPONENT MOUNT" in useEffect ?
// "Component Mount" --> when our component gets display first time on our Browser


// What is "Re-render" in useEffect ?
// Now after Component Mount on our Browser, if something change or update in Component, it will cause Re-render 