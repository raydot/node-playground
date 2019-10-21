// ACCIDENTAL GLOBAL
function foo() {
  let a = (b = 0);
  a++;
  return a;
}

foo();
console.log("a", typeof a);
console.log("b", typeof b);
console.log(b);

/** The line a = b = 0 declares b as a global.
 *
 * Same with
 * function foo { i = 0 }
 *
 * or
 *
 * function foo(count) {
 *  for (i = 0; i < count; i++)
 * }
 */

// ARRAY LENGTH
const clothes = ["pants", "jumper"];
clothes.length = 0;

// undefined because clothes.length = 0 wipes out the array.

// EAGLE EYE TEST
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);
{
  numbers.push(i + 1);
}

console.log(numbers); // == [5] because of the sneaky semicolon

// AUTOMATIC SEMICOLON INSERTION
function arrayFromValue(item) {
  return;
  [item];
}

console.log("afv:", arrayFromValue(10));

// Should return nothing because [item] code is unreachable.
// RETURNS UNDEFINED

// CLASSIC TRICKY CLOSURE:
let j;
for (j = 0; j < 3; j++) {
  const log = () => {
    console.log(j);
  };
  setTimeout(log, 100);
}

// FLOATING POINT MATH
console.log(0.1 + 0.2 === 0.3);

// HOISTING
myVar;
myConst;

var myVar = 'value'
const myConst

// Var will hoist.  Const will not!