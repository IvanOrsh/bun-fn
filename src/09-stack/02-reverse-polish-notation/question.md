## Reverse Polish Notation

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are `+`, `-`, `*`, `/`.

Note, that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

The input is an array of strings where each element is either a valid operator or an integer.

**Example**:

```
["1", "2", "+"] = 1 + 2 + 3
["1", "2", "3", "+", "-"] = 1 - 5 = -4
```
