## Strings

### Overview

In **JavaScript**, strings are a built-in data type that represents a sequence of characters.
Strings are immutable, meaning they cannot be modified once created. Any operation that seems to modify a string actually creates a new string.
JavaScript provides various methods to manipulate and work with strings, such as concatenation, slicing, searching, replacing, and more.

<br>

In **Go**, strings are also represented as a sequence of characters.
Like JavaScript, strings in Go are immutable. Operations that appear to modify strings actually create new strings.
Go provides a wide range of string manipulation functions and methods in the strings package, allowing operations like concatenation, splitting, searching, replacing, and more.

<br>

In **Rust**, strings are represented as UTF-8 encoded byte sequences.
Rust provides two main string types: String and &str. The String type allows for mutable, owned strings, while &str (string slice) is an immutable reference to a string or a sub-string.
Rust's string slices (&str) have a fixed size and can be seen as a lightweight data structure, while the String type provides more flexibility and ownership semantics.
Rust provides a rich set of methods and traits for working with strings, including concatenation, slicing, searching, replacing, parsing, and more.

<br>

In **Java**, strings are represented as objects of the String class.
Strings in Java are immutable, meaning they cannot be modified once created.
Java provides a comprehensive set of methods for string manipulation, including concatenation, substring extraction, searching, replacing, formatting, and more.
Java also supports string literals, allowing you to directly create strings without explicitly using the new keyword.

<br>

Regarding whether strings can be thought of as a data structure, it depends on the context. In some languages, like Go and Rust, strings can be seen as data structures with specific characteristics and operations. However, in languages like JavaScript and Java, strings are typically treated as primitive types and not explicitly referred to as data structures. Nonetheless, strings in all these languages have specific methods and operations associated with them, making them powerful tools for working with textual data.

### Big O of common operations

To simplify things, let's think of strings as an array of integers.

Also, let's think, that in our programming language strings are immutable.

Then:

| Operation           | Complexity         |
| :------------------ | :----------------- |
| read at given index | T, S = O(1)        |
| traverse            | T = O(n), S = O(1) |
| copy                | T, S = O(n)        |
| append              | T = O(n)           |
| concat              | T, S = O(n + M)    |

Note: If we have to do multiple (many) operation on strings, we might want to consider using an array (or slice, vector, whatever) of strings instead: `string -> array -> modify -> ... -> join to make a string`

### List of problems

1. [First Non Repeating Character](01-first-not-repeating-char/question.md), [Solution](01-first-not-repeating-char/first-non-repeating.ts)
2. [Is Palindrome](02-is-palindrome/question.md), [Solution](02-is-palindrome/is-palindrome.ts)
3. [Length of Longest Substring with Unique Characters](03-longest-substring-with-unique-chars/question.md), [Solution](03-longest-substring-with-unique-chars/longest-substring-with-unique.ts)
