const fs = require("fs");

var fullText = "";
let json_obj = {};

var foo = fs.readFile("gettysburg.txt", (err, data) => {
  //callback is here
  if (err) throw err;
  //console.log(data.toString());
  //fullText = data.toString();
  fullText = data.toString();
  return fullText;
});

console.log(foo);

//console.log(fullText);

// const makeItSo = () => {
//   readText();
//   console.log(fullText);
// };

// makeItSo();
