// ************************************
// Creating RegEx
// 1. literal
// 2. RegExp constructor
// ************************************

const regex1 = /*new RegExp("hello")*/ /hello/;
const regex2 = /world/;

// ************************************
// RegExp methods
// ************************************
const text = "Programming courses always starts with a hello world example.";

// 1. test
console.log(regex2.test(text)); // true

// 2. exec
const regExArr: RegExpExecArray | null = regex1.exec(text);

if (regExArr) {
  for (const key in regExArr) {
    console.log(`${key}: ${regExArr[key]}`);
  }
}

// 3. toString
console.log(regex1.toString());

// ************************************
// String methods that uses RegEx:
// ************************************

// 1. match
const regExArr2: RegExpMatchArray | null = text.match(regex1);

if (regExArr2) {
  for (const key in regExArr2) {
    console.log(`${key}: ${regExArr2[key]}`);
  }
}

// 2. search
const res = text.search(regex1);
console.log(res);

// 3. replace
console.log(text.replace(regex1, "hi"));

// 4. split
console.log(text.split(/\s/));
