const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const arrayAges = [
  33,
  12,
  20,
  16,
  5,
  54,
  21,
  44,
  61,
  13,
  15,
  20,
  45,
  25,
  64,
  32
];
const stringAges = "33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32";
const es6String = "Hi, this is Manoz Kumar Jadala";

/*===============    let, var & const - Starts    ===============*/
// If we use "var" keyword while creating a variable, that variable can be accessible anywhere within the function that is created, As below
function usingVar(){
  for (var i = 0; i < 5; i++){
    console.log(i);
  }
    console.log("The value of i from outside of for loop is -> " + i);
}
// usingVar();

// If we use "var" keyword while creating a variable, that variable can be accessible within scope
function usingLet(){
  for (let i = 0; i < 5; i++){
    console.log(i);
  }
    console.log("The value of i from outside of for loop is -> " + i);
}
// usingLet();

// If we use "var" keyword while creating a variable, that variable can be accessible within scope only. But the difference B/W 'let' & 'const' is variables which are created with 'let' keywords can be modified while 'const' variables can not.
const const_1 = 'I am outside CONST 1';
function sayHelloConst(name = 'Manoj'){
  const const_1 = 1;
    console.log("Hello " + name);
console.log(const_1);
}
// const_1 = 'I am outside CONST 1 tried to update';
// sayHelloConst();
// console.log(const_1);


// Example for 'var' keyword
var var_1 = 'I am VAR';
function sayHelloVar(name = 'Manoj'){
  var var_1 = 1; // Try removing 'var' keyword
    console.log("Hello " + name);
console.log(var_1);
}
// sayHelloVar();
// console.log(var_1);


// Miscellaneous
miss = 'miss - 1';
function miss_1(){
    console.log(miss);
    miss = 'miss - 2';
    console.log("Hello I am miss");
}
// miss_1();
// console.log(miss);

// Note: If we create any variable without using any of [let, var, const] then by default it will be 'var' keyword only.

/*===============    let, var & const - Ends    ===============*/




/*===============    Higher order functions - Starts    ===============*/

/************   'for loop'   ***********/
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i].name);
// }

/************   'forEach' method   ***********/
// The above thing can also be achieved by ES6 'forEach' method
// companies.forEach(company => {
//   console.log(company.name);
// });

/************   'map' method   ***********/
// const modifiedCompanies = companies.map(company => {
//   return `Name is - ${company.name}`;
// });

// The above code can also be re-written as below
// const modifiedCompanies = companies.map(company => `Name is - ${company.name}`);
// console.log(modifiedCompanies);

// const arrayAgeSQRT = arrayAges.map(age => Math.sqrt(age));
// console.log(arrayAgeSQRT);

// const arrayAgeTimesTwo = arrayAges.map(age => age * 2);
// console.log(arrayAgeTimesTwo);

// We can combine one or more functions together as below
// const ageMap = arrayAges.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(ageMap);

/************   'filter' method   ***********/
// const canDrink = arrayAges.filter(age => age >= 18);
// console.log(canDrink);

/************   'reduce' method   ***********/
// Get the SUM of 'arrayAges'
// const totalarrayAges_1 = arrayAges.reduce((total, age) => {
//   return (total += age);
// }, 0);
// console.log("Sum of all arrayAges is => " + totalarrayAges_1);

// The above code can also be re-written as below
// const totalarrayAges_2 = arrayAges.reduce((total, age) => (total += age), 0);
// console.log("Sum of all arrayAges is => " + totalarrayAges_2);

// Get the Min of 'arrayAges'
// const minArrayAge = Math.min(...arrayAges);
// console.log("Min age is => " + minArrayAge);

// Get the Max of 'arrayAges'
// const maxArrayAge = Math.max(...arrayAges);
// console.log("Max age is => " + maxArrayAge);

// Get the Min of 'stringAges'
// const minStringAge = Math.min(1, 2, 3, 4);
// console.log("Min age is => " + minStringAge);
/*
As you can see, Math.min() only works when each number is input as a separate parameter.
Because of this, we need to make use of the …spread operator. The spread operator allows an expression to be expanded in places where multiple elements/variables/arguments are expected.
When we use the spread operator within Math.min() it will expand, or spread out, our array and insert each variable as a separate parameter into Math.min()!
In other words: Math.min(...[1,2,3,4]) is the same as Math.min(1,2,3,4)

FMD = https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332

*/

/************   'sort' method   ***********/
// const sortedCompanies_1 = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// The above code can also be re-written as below
// const sortedCompanies_2 = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );
// console.log(sortedCompanies_2);

// const sortedAges_1 = arrayAges.sort();
// console.log(sortedAges_1); // This will give wrong sorting order

// const sortedAges_2 = arrayAges.sort((a, b) => a - b);
// console.log(sortedAges_2); // Gives correct Ascending order

// const sortedAges_3 = arrayAges.sort((a, b) => b - a);
// console.log(sortedAges_3); // Gives correct Descending order
/************   'some' method   ***********/
// const es6some = arrayAges.some(age => age >= 30);
// console.log("es6some => " + es6some);

/************   'every' method   ***********/
// const es6every = arrayAges.every(age => age >= 10);
// console.log("es6every => " + es6every);

/*===============    Higher order functions - Ends    ===============*/

/************   ALL ABOUT ARRAYS - Starts   ***********/
// Converting an array to a string (Default is COMMA separation)
// const defaultArrayJoin = arrayAges.join();
// console.log("defaultArrayJoin => " + defaultArrayJoin);

// const toStringFunc = arrayAges.toString();
// console.log("toStringFunc => " + toStringFunc);

// Converting an array as a string with '-' separation
// const hyphenArrayJoin = arrayAges.join("-");
// console.log("hyphenArrayJoin => " + hyphenArrayJoin);

/*
Note: We can use 'join' function to specify the separator
*/
// Converting a string to an array
// const stringFromArray = stringAges.split(",");
// console.log("stringFromArray => " + stringFromArray);

// let tempArray_1 = ["Manoz", "Vinayak", "Hareesh"];
// Adding a new element to an array at the end - Using vanilla javascript
// tempArray_1.push("Last");
// console.log(tempArray_1);

// Adding a new element to an array at the begining - Using vanilla javascript
// tempArray_1.unshift("First");
// console.log(tempArray_1);

// Removing a new element to an array at the begining - Using vanilla javascript
// tempArray_1.shift();
// console.log(tempArray_1);

// Removing a new element to an array at the end - Using vanilla javascript
// tempArray_1.pop();
// console.log(tempArray_1);

// let tempArray_2 = ["Manoz", "Vinayak", "Hareesh"];
// Adding a new element to an array at the end - Using ES6
// tempArray_2 = [...tempArray_2, "Last"];
// console.log(tempArray_2);

// Adding a new element to an array at the begining - Using ES6
// tempArray_2 = ["First", ...tempArray_2];
// console.log(tempArray_2);

// Searching for an element in an array - First Occurence
// console.log(arrayAges.indexOf(10));

// Searching for an element in an array - Last Occurence
// console.log(arrayAges.indexOf(10));
// console.log(arrayAges.lastIndexOf(20));

// 'find' method
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
const foundElement = arrayAges.find(function(age) {
  return age > 10;
});
// console.log(foundElement);
// expected output: 12

/************   ALL ABOUT ARRAYS - Ends   ***********/

/************   ALL ABOUT OBJECTS - Starts   ***********/
// 'for...in' used to loop through an object
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  // console.log(`${property}: ${object[property]}`);
}
/*
expected output:
"a: 1"
"b: 2"
"c: 3"
*/

// Initialize gimli object
const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}...!`;
    },
};
// console.log(gimli.greet());
// console.log(gimli.name);
// console.log(gimli['weapon']);

// Add new age & degree properties to gimli
gimli.age = 28;
// console.log(gimli.age);

gimli['degree'] = 'B.Tech';
// console.log(gimli.degree);

// Add new fight method to gimli
gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}.`;
}
// console.log(gimli.fight());

// Update weapon from axe to battle axe
gimli.weapon = "battle axe";
// console.log(gimli);

// Remove weapon from gimli
delete gimli.weapon;
// console.log(gimli);


// Looping Through Object Properties
const gimli_1 = {
    name: "Gimli",
    race: "dwarf",
    weapon: "battle axe",
};
// Iterate through properties of gimli_1
for (let key in gimli_1) {
  // console.log(gimli_1[key]);
}

// Get keys and values of gimli_1 properties
for (let key in gimli_1) {
  // console.log(key.toUpperCase() + ':', gimli_1[key]);
}

// Initialize method on gimli object to return property keys
// console.log(Object.keys(gimli_1));

// Initialize method on gimli object to return property values
// console.log(Object.values(gimli_1));


// Object.entries() creates a nested array of the key/value pairs of an object.
// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};
// Get the object key/value pairs
const entries = Object.entries(operatingSystem);
// console.log(entries);

// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    // console.log(`${key}: ${value}`);
});

// Object.assign()
// Object.assign() is used to copy values from one object to another.
// We can create two objects, and merge them with Object.assign().
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
// const character = Object.assign(name, details);
// console.log(character);

// It is also possible to use the spread operator (...) to accomplish the same task. In the code below, we’ll modify how we declare character through merging the name and details objects.
// Merge the object with the spread operator
const character = {...name, ...details}
// console.log(character);


// Object.freeze()
// Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.
// Initialize an object
const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

// console.log(user);

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

// console.log(newUser);

// Object.isFrozen() is available to determine whether an object has been frozen or not, and returns a Boolean.
// console.log(Object.isFrozen(user));

// Object.seal()
// Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties.

const user_1 = {
    username: 'AzureDiamond',
    password: 'hunter2'
};
const newUser_1 = Object.seal(user_1);

newUser_1.password = '*******';
newUser_1.active = true;

// console.log(newUser_1);
// console.log(Object.isFrozen(user_1));

/* Object.getPrototypeOf()
Object.getPrototypeOf() is used to get the internal hidden [[Prototype]] of an object, also accessible through the __proto__ property.  */
const employees = ['Ron', 'April', 'Andy', 'Leslie'];

// Below thing is not working
// console.log(Object.getPrototypeOf(employees));

// The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// Note: By default, values added using Object.defineProperty() are immutable.
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

// console.log(object1.property1);

// FMD - https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript

/************   ALL ABOUT OBJECTS - Ends   ***********/

/************   ES6 String functions - Starts   ***********/
// startsWith:
const es6StartsWith_1 = es6String.startsWith("is");
// console.log("es6StartsWith_1 => " + es6StartsWith_1);

const es6StartsWith_2 = es6String.startsWith("h");
// console.log("es6StartsWith_2 => " + es6StartsWith_2);

const es6StartsWith_3 = es6String.startsWith("H");
// console.log("es6StartsWith_3 => " + es6StartsWith_3);

/*
The startsWith() method determines whether a string begins with the characters of a specified string.
This method returns true if the string begins with the characters, and false if not.
Note: The startsWith() method is case sensitive.
*/

// endsWith:
const es6EndsWith_1 = es6String.endsWith("Manoz");
// console.log("es6EndsWith_1 => " + es6EndsWith_1);

const es6EndsWith_2 = es6String.endsWith("jadala");
// console.log("es6EndsWith_2 => " + es6EndsWith_2);

const es6EndsWith_3 = es6String.endsWith("Jadala");
// console.log("es6EndsWith_3 => " + es6EndsWith_3);
/*
The endsWith() method determines whether a string ends with the characters of a specified string.
This method returns true if the string ends with the characters, and false if not.
Note: The endsWith() method is case sensitive.
*/

// includes:
const es6includes_1 = es6String.includes("manoz");
// console.log("es6includes_1 => " + es6includes_1);

const es6includes_2 = es6String.includes("MANOZ");
// console.log("es6includes_2 => " + es6includes_2);

const es6includes_3 = es6String.includes("Manoz");
// console.log("es6includes_3 => " + es6includes_3);
/*
The includes() method determines whether a string contains the characters of a specified string.
This method returns true if the string contains the characters, and false if not.
Note: The includes() method is case sensitive.
*/

/************   ES6 String functions - Ends   ***********/

/************   Recursion - Starts   ***********/
// Ex-1
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Hooray");
}
// countDown(3);

// The above code can also be re-written as below using 'Recursion'
function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Hooray");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}
// countDownRecursive(3);

// Ex-2
function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}
// console.log(sumRange(3));

// The above code can also be re-written as below using 'Recursion'
function sumRangeRecursive(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRangeRecursive(n - 1, total + n);
}
// console.log(sumRangeRecursive(3));

// Ex-3
function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach(child => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: []
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] }
      ]
    }
  ]
};
// printChildrenRecursive(tree);
/************   Recursion - Ends   ***********/

/************   Miscellaneous - Starts  ***********/
// Math.pow(2,3) is equivalant to 2 ** 3; // Both gives output as '8' (2*2*2)
// ** is called "Exponentiation" operator
// console.log(Math.pow(2,3));
// console.log(2 ** 3);


/************   Miscellaneous - Ends  ***********/


/************   INETRVIEW purpose   ***********/
//---> How to create a private variable in JS
function secretVariable() {
  let privateVariable = "Super secret variable";
  return function() {
    return privateVariable;
  };
}

const getSecretVariable = secretVariable();
// console.log(getSecretVariable());

// But if we call the function directly,
// console.log(secretVariable());

//---> What is the output of this?
var num = 1;
function outer() {
  var num = 2;
  function inner() {
    ++num;
    // console.log(num);
    var num = 3;
    console.log(num);
  }
  inner();
  // console.log(num);
}
// outer(); // Output will be '3'

//---> What is the output of this?
// console.log(typeof typeof 1); // Output will be 'String'
