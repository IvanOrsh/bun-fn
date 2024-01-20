const text = "Programming courses always starts with a hello world example.";

const regex1 = /s\s/g;
const regex2 = /s\s/gi;
const regex3 = /world/;

// 1. g
const matchArr = text.match(regex1);
if (matchArr) {
  for (const key in matchArr) {
    console.log(key, matchArr[key]);
  }
}

console.log(text.match(regex1)); // [ 's ', 's ' ]

// with exec
let match;
while ((match = regex1.exec(text)) !== null) {
  console.log(match.index, match[0]);
}

// 2. i
console.log(text.match(regex2)); // [ 's ', 's ', "S " ]
