/*
["5", "6", "4", "/", "+", "1", "-"]

traverse array with tokens from left to right, till we reach an operator

stack: 
  [5, 6, 4]

  number 2 = stack.pop() = 4
  number 1 = stack.pop() = 6

  6 / 4 = 1.5 - truncate -> 1
  then push 1 to stack

  [5, 1]

  number 2 = stack.pop() = 5
  number 1 = stack.pop() = 1

  5 + 1 = 6
  then push 6 to stack

  [6, 1]
  number 2 = stack.pop() = 1
  number 1 = stack.pop() = 6

  6 - 1 - 5
  then push 5 to stack

  [5]

 the last element in our stack is the answer.

 T = O(n)
 S = O(n)
*/

type ValidOperator = "+" | "-" | "*" | "/";
export type ValidToken = number | ValidOperator;

export function rpn(tokens: ValidToken[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (typeof token === "number") {
      stack.push(token);
    } else {
      const right = stack.pop()!;
      const left = stack.pop()!;
      const res = evaluate(left, right, token);

      stack.push(res);
    }
  }

  return stack.pop()!;
}

function evaluate(
  left: number,
  right: number,
  operator: ValidOperator
): number {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return Math.trunc(left / right);
  }
}
