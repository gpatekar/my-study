# ES6

##  let and const
- Eliminates Hoisting 
- They Have Block Scope
- Let can be reassigned but cant be redeclared in same scope
- Constant can't reassigned ore redecalred.

**Usage**
```
const freezing = 'Grab a jacket!';
let hot = 'Remove your clothes!';
```
## Template Literals
- Denoted with backticks (` `)
- Use ${expression} for dynamic value
- Drop string concatenation('hi'+'coder') operator and as well as the newline characters ( \n )

**Usage**
```
let name = Guru;
let place = Margao
`Hi, My name is ${name} and  am from ${place}`
```

## Destructuring
- Allows you to specify the elements you want to extract from an array or object on the left side of an assignment


**Usage**
```
const point = [10, 25, -34];

const [x, y, z] = point;
```
## Destructuring with default values
```
function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}
```

## Object literal shorthand

**Usage**
```
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};
```

## For...of loop
- The for...of loop is used to loop over any type of data that is iterable.

**Usage**
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```

## Spread operator
- Allows you to expand, or spread, iterable objects into multiple elements.

**Usage**
```
// Following code combines two arrays
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];
```

## Rest parameter
- Allows you shortcut way to combine arrays into one

**Usage**
```
// Use case 1
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;

// Use case 2
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```

## Arrow functions
- value of **this** depends on where the function is declared. Parent scope.

**Usage**
```
name => name.toUpperCase()
(name, School) => {
  return name + school
}
```


