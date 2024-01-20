**Regular Expressions in JavaScript**

**Table of Contents**

- [What are Regular Expressions?](#what-are-regular-expressions)
- [Creating a RegEx in JavaScript](#creating-a-regex-in-javascript)
- [Regular Expressions Methods: `test`, `exec`](#regular-expressions-methods-test-exec)
- [String Methods that use Regular Expressions: `match`, `search`, `replace`, `split`](#string-methods-that-use-regular-expressions-match-search-replace-split)
- [Understanding Regular Expressions Flags](#understanding-regular-expressions-flags)
- [Metacharacters Overview](#metacharacters-overview)
- [The `.` Metacharacter (Wildcard)](#the--metacharacter-wildcard)
- [Escaping Metacharacters](#escaping-metacharacters)
- [Matching Control Characters](#matching-control-characters)
- [Using Character Sets to Find Matches (Overview)](#using-character-sets-to-find-matches-overview)
- [Specifying a Range in a Character Set](#specifying-a-range-in-a-character-set)
- [Excluding a Character Set (`^`)](#excluding-a-character-set-)
- [Shorthand for Character Sets: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](#shorthand-for-character-sets-d-d-w-w-s-s)
- [List of Exercises](#list-of-exercises)
  - [Exercise 1: Phone numbers with certain area code.](#exercise-1-phone-numbers-with-certain-area-code)
  - [Exercise 2:](#exercise-2)

### What are Regular Expressions?

Regular expressions, often abbreviated as regex or regexp, are **sequences of characters that define a search pattern**. They are used for pattern matching within strings, allowing for flexible and powerful search and manipulation of text.

Regular expressions can be used for tasks such as:

1. **Validation**: Checking if a string matches a certain pattern, such as validating email addresses, phone numbers, or dates.

2. **Search and Replace**: Finding and replacing specific patterns within a string, such as removing all occurrences of a certain word or formatting specific parts of a document.

3. **Parsing**: Extracting specific information from a string, such as extracting all the URLs from a block of text or parsing log files.

Regular expressions consist of a combination of literal characters and metacharacters, which have special meanings. For example, the metacharacter "." represents any single character, while "\d" represents any digit.

Here's a simple example of a regular expression in JavaScript that matches any sequence of three digits:

```js
const pattern = /\d{3}/;
```

In this example, the regular expression `"\d{3}"` matches any sequence of three digits in a string.

Regular expressions are supported in many programming languages and tools, including JavaScript, Python, Java, and various text editors and IDEs. They provide a powerful and flexible way to work with text patterns and are commonly used in tasks such as form validation, data extraction, and text processing.

### Creating a RegEx in JavaScript

- Regular Expressions are Objects.
- There are two ways to create RegEx Objects (constructor, literal):

```js
const regex1 = new RegExp("hello");
const regex2 = /world/;
```

- Once you have a regex object, you can use it with one of methods on RegExp Constructor or the String object wrapper.

```js
// for example,
const text = "some text goes here";

regex1.test(text); // true if text matches
```

### Regular Expressions Methods: `test`, `exec`

1. `test` method: is used to search for a match between regular expression and a specified string. It returns `true` if there is a match, and `false` if there is no match:

```js
const pattern = /\d{3}/;
const text = "The number is 123";
console.log(pattern.test(text)); // Output: true
```

2. `exec` method: is used to search for a match between regular expression and a specified string. It returns an **array of strings if there is a match**, and `null` if there is no match (`RegExpExecArray` with `index`, `input` and `groups` properties):

```js
const text = "Programming courses always starts with a hello world example.";
const regex1 = /*new RegExp("hello")*/ /hello/;

const regExArr: RegExpExecArray | null = regex1.exec(text);

if (regExArr) {
  for (const key in regExArr) {
    console.log(`${key}: ${regExArr[key]}`);
  }
}
```

outputs:

```sh
0: hello
index: 41
input: Programming courses always starts with a hello world example.
groups: undefined
```

3. `toString` method: returns a string representation of the regular expression (not useful at all)

### String Methods that use Regular Expressions: `match`, `search`, `replace`, `split`

1. `match`: The match method is a string method that is used to match a regular expression against a string. It returns an **array (`RegExpMatchArray`)** containing all the matches, or null if no match is found.

```js
const text = "Programming courses always starts with a hello world example.";
const regex1 = /*new RegExp("hello")*/ /hello/;

const regExArr2: RegExpMatchArray | null = text.match(regex1);

if (regExArr2) {
  for (const key in regExArr2) {
    console.log(`${key}: ${regExArr2[key]}`);
  }
}
```

2. `replace`: The replace method is a string method that is used to replace matches of a regular expression with a replacement string.

```js
const text = "The number is 123";
console.log(text.replace(/\d{3}/, "456")); // Output: "The number is 456"
```

3. `search`: The search method is a string method that is used to search for a specified value within a string. It returns the **index of the first match**, or -1 if no match is found.

```js
const text = "The number is 123";
console.log(text.search(/\d{3}/)); // Output: 13
```

4. `split`: The split method is a string method that uses a regular expression or a fixed string to break a string into an array of substrings. It returns an array of substrings.

```js
const text = "apple,banana,orange";
console.log(text.split(/,/)); // Output: ["apple", "banana", "orange"]
```

### Understanding Regular Expressions Flags

- syntax: `/pattern/flags;` or `new RegExp("pattern", "flags");`

In JavaScript, regular expressions can be accompanied by flags, which are special parameters that control the behavior of the regular expression. Here's an overview of the most commonly used flags in JavaScript for regular expressions:

1. `g` (**global search**): This flag makes the regular expression **search for all occurrences of the pattern within the input string**, rather than stopping after the first match.

```js
const pattern = /apples/g;
console.log("apples and oranges".match(pattern)); // Output: ["apples"]
```

**Note 1**:

The `match` method of a string returns an array of matches, called `RegExpMatchArray`, \*\*when the global flag (`g`) is used. If the global flag is not used, it returns a `RegExpMatchArray` for the overall match along with captured groups.

When the global flag is used, the match method returns an array of all matches. If there are no matches, it returns null. If there is at least one match, it returns an array containing all the matches.

**Note 2 - `g` and `exec`**:

When the exec method of a regular expression in JavaScript is used with the global (g) flag, it can be used to iterate through all the matches in a string. The exec method returns the next match in the string each time it is called, starting from the last match.

Here's an example:

```js
const text = "apple, banana, orange";
const pattern = /(\w+)/g;
let match;
while ((match = pattern.exec(text)) !== null) {
  console.log(match[1]);
}
```

2. `i` (**ignore case**): This flag makes the regular expression **case-insensitive**, meaning it will match both uppercase and lowercase letters interchangeably.

```js
const pattern = /hello/i;
console.log(pattern.test("Hello, world")); // Output: true
```

3. `m` (**multiline**): This flag changes the behavior of the `^` and `$` anchors to match the beginning and end of each line within a multi-line string, rather than just the beginning and end of the entire string.

```js
const pattern = /^start/m;
console.log("start\nmiddle\nend".match(pattern)); // Output: ["start"]
```

4. `s` (**dotAll**): This flag makes the `.` metacharacter match all characters, including line terminators (`\n`, `\r`, `\u2028`, `\u2029`).

```js
const pattern = /hello.world/s;
console.log(pattern.test("hello\nworld")); // Output: true
```

5. `u` (**unicode**): This flag enables full Unicode support for the regular expression, including support for Unicode code point escapes and supplementary Unicode code points in the input string.

```js
const pattern = /\p{Sc}/u;
console.log(pattern.test("$")); // Output: true (matches the Unicode currency symbol)
```

6. `y` (**sticky**): This flag indicates that the regular expression performs sticky matching in the target string by attempting to match starting at the current position in the target string.

```js
const pattern = /abc/y;
console.log("xabcabc".match(pattern)); // Output: null (no match at index 1)
```

### Metacharacters Overview

| Metacharacter | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| `.`           | Matches any single character except line terminators        |
| `\d`          | Matches any digit character (0-9)                           |
| `\D`          | Matches any non-digit character (0-9)                       |
| `\w`          | Matches any word character (alphanumeric + underscore)      |
| `\W`          | Matches any non-word character (alphanumeric + underscore)  |
| `\s`          | Matches any whitespace character (space, tab, newline)      |
| `\S`          | Matches any non-whitespace character (space, tab, newline)  |
| `^`           | Matches the beginning of the input string                   |
| `$`           | Matches the end of the input string                         |
| `[ ]`         | Matches any character inside the brackets                   |
| `( )`         | Creates a capturing group for extracting matched substrings |
| `*`           | Matches the preceding element zero or more times            |
| `+`           | Matches the preceding element one or more times             |
| `?`           | Matches the preceding element zero or one time              |
| `{ }`         | Matches the preceding element a specific number of times    |

**Quick Recap of how a regular expression engine typically works**:

1. **Parsing**: The regular expression string is parsed to identify the individual components, such as literal characters, metacharacters, quantifiers, and capturing groups.
2. **Conversion to NFA/DFA**: The parsed regular expression is converted into a **Non-deterministic Finite Automaton (NFA)** or **Deterministic Finite Automaton (DFA)**, which represents a state machine that can recognize the patterns described by the regular expression.
3. **Matching**: When the regular expression is used to search within a string, the engine starts at the beginning of the string and attempts to match the pattern described by the regular expression.
4. **Backtracking** (if needed): If the initial attempt to match the pattern fails, the engine may backtrack and try alternative paths in the NFA or DFA to find a successful match.
5. **Capturing groups**: As the engine matches the pattern, it keeps track of any capturing groups within the regular expression, so that the matched substrings can be extracted later if needed.
6. **Handling flags**: The engine takes into account any flags used with the regular expression, such as the global (g) or case-insensitive (i) flags, to modify the matching behavior.
7. **Returning matches**: Once the matching process is complete, the engine returns the matched substrings, along with any captured groups, as the result of the regular expression match.

### The `.` Metacharacter (Wildcard)

The `.` wildcard metacharacter in regular expressions **matches any single character except for line terminators** such as newline (`\n`). It is a versatile and powerful tool for matching a wide range of characters.

Here are some use case examples of the . wildcard metacharacter:

1. **Matching any single character**: The `.` metacharacter can be used to match any single character in a string. For example:

```js
const pattern = /a.c/;
console.log(pattern.test("abc")); // Output: true
console.log(pattern.test("axc")); // Output: true
console.log(pattern.test("a\nb")); // Output: false
```

2. **Matching a specific pattern with any character in the middle**: The `.` metacharacter can be used to match a specific pattern with any character in the middle. For example:

```js
const pattern = /a.c/;
console.log("abc".match(pattern)); // Output: ["abc"]
console.log("axc".match(pattern)); // Output: ["axc"]
```

3. **Matching repeated characters with a specific pattern**: The `.` metacharacter can be used to match repeated characters with a specific pattern in the middle. For example:

```js
const pattern = /a..c/;
console.log(pattern.test("abbc")); // Output: true
console.log(pattern.test("axc")); // Output: false
```

### Escaping Metacharacters

In regular expressions, escaping metacharacters involves using the backslash (`\`) to indicate that a metacharacter should be treated as a literal character instead of its special meaning. This allows you to search for actual occurrences of metacharacters within the input string.

Here are some key points about escaping metacharacters in regular expressions:

1. **Treating metacharacters as literal characters**: By preceding a metacharacter with a backslash, you can search for the actual occurrence of that metacharacter in the input string. For example, to search for a literal dot (`.`), you would use `\.` in the regular expression.
2. **Escaping special characters**: Some characters are both metacharacters and special escape characters, such as \ and ^. To match these characters literally, you would need to escape them. For example, to search for a literal backslash, you would use `\\` in the regular expression.
3. **Escaping for specific behavior**: Escaping can also be used to give a specific meaning to a metacharacter. For example, `\d` represents a digit character, but if you want to search for the literal characters `\d`, you would need to escape the backslash as `\\d`.

```js
const pattern = /\d\+\*/;
console.log(pattern.test("5+*")); // Output: true
console.log(pattern.test("5*+")); // Output: false
```

### Matching Control Characters

| Control Character | Description     |
| ----------------- | --------------- |
| `\n`              | Newline         |
| `\r`              | Carriage return |
| `\t`              | Tab             |
| `\v`              | Vertical tab    |
| `\f`              | Form feed       |
| `\b`              | Word boundary   |
| `\0`              | Null character  |

These control characters provide a way to represent specific non-printable characters and control the behavior of regular expressions when searching for patterns within text.

### Using Character Sets to Find Matches (Overview)

Character sets, also known as **character classes**, are used in regular expressions to **match any one character from a set of characters**. They provide a way to specify a range or a list of characters that you want to match at a particular position in the input string.

Here's an overview of the different types of character sets that can be used to find matches in regular expressions:

1. **Single character match**: You can specify a set of characters and the regular expression engine will match any single character from that set. For example, the pattern `[aeiou]` matches any vowel.

2. **Ranges**: You can specify a range of characters using a hyphen (`-`) inside square brackets. For example, the pattern `[a-z]` matches any lowercase letter from a to z.

3. **Negation**: You can use the caret (`^`) as the first character inside the square brackets to indicate negation, which means the pattern will match any character not in the set. For example, the pattern `[^0-9]` matches any character that is not a digit.

4. **Escape sequences**: Certain escape sequences can be used inside character sets to represent common character groups, such as `\d` for digits, `\w` for word characters, and `\s` for whitespace characters.

Here's an example of using a character set to find matches in a regular expression:

```js
const pattern = /[aeiou]/;
console.log(pattern.test("apple")); // Output: true
console.log(pattern.test("banana")); // Output: true
console.log(pattern.test("orange")); // Output: true
console.log(pattern.test("grape")); // Output: false
```

### Specifying a Range in a Character Set

Ranges in character sets allow you to specify a **continuous range of characters to be matched in a regular expression**. Here are some common use cases for using ranges in a character set:

1. **Matching alphabetic characters**: You can use ranges to match uppercase or lowercase alphabetic characters. For example:

`[a-z]` matches any lowercase letter from a to z.

`[A-Z]`matches any uppercase letter from A to Z.

`[a-zA-Z]` matches any lowercase or uppercase letter.

2. **Matching digits**: Ranges can be used to match digits in a range. For example:

`[0-9]` matches any digit from 0 to 9.

3. **Matching alphanumeric characters**: Ranges can be combined to match alphanumeric characters. For example:

`[a-zA-Z0-9]` matches any alphanumeric character.

4. **Matching specific subsets of characters**: Ranges can be used to match specific subsets of characters. For example:

`[A-F]` matches any uppercase letter from A to F, which is useful in hexadecimal color code matching.

5. **Matching specific punctuation or symbols**: Ranges can be used to match specific punctuation or symbols. For example:

`[\!-\#]` matches any character in the range from ! to #.

```js
const pattern = /[A-Za-z]/; // matches any alphabetic character
console.log(pattern.test("Hello")); // Output: true
console.log(pattern.test("123")); // Output: false
```

### Excluding a Character Set (`^`)

- Can be referred to as excluded or negated group of characters.

Examples:

1. **Matching non-alphabetic characters**:

`[^a-zA-Z]` matches any character that is not an uppercase or lowercase letter.

2. **Matching non-digit characters**:

[^0-9] matches any character that is not a digit.

3. **Matching non-alphanumeric characters**:

`[^a-zA-Z0-9]` matches any character that is not a letter or a digit.

4. **Excluding specific characters**:

`[^aeiou]` matches any character that is not a vowel.

```js
const pattern = /[^0-9]/; // matches any character that is not a digit
console.log(pattern.test("abc")); // Output: true
console.log(pattern.test("123")); // Output: false
```

### Shorthand for Character Sets: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`

1. `\d`: Matches any digit character. It is equivalent to the character set `[0-9]`.
2. `\D`: Matches any non-digit character. It is equivalent to the character set `[^0-9]`.
3. `\w`: Matches any word character (alphanumeric character plus underscore). It is equivalent to the character set `[a-zA-Z0-9_]`.
4. `\W`: Matches any non-word character. It is equivalent to the character set `[^a-zA-Z0-9_]`.
5. `\s`: Matches any whitespace character (space, tab, newline). It is equivalent to the character set `[\t\n\r\f\v]`.
6. `\S`: Matches any non-whitespace character. It is equivalent to the character set `[^\t\n\r\f\v]`.

### List of Exercises

#### Exercise 1: Phone numbers with certain area code.

Using the provided array, create a second array that only includes the numbers with the 801 area code.

Solution: [Phone numbers with area code](03-phone-numbers.ts)

#### Exercise 2:
