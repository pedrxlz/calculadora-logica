// @ts-nocheck

export const yard = (infix) => {
  let ops = { "∧": 1, "∨": 1, "→": 1, "↔": 1 };
  let peek = (a) => a[a.length - 1];
  let stack = [];

  return infix
    .split("")
    .reduce((output, token) => {
      if (token === "T" || token === "F") {
        output.push(token);
      }

      if (token in ops) {
        while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
          output.push(stack.pop());
        stack.push(token);
      }

      if (token === "(" || token === "~") {
        stack.push(token);
      }

      if (token === ")") {
        if (stack.indexOf("(") === -1) {
          throw new Error("Parênteses não balanceados");
        }
        while (peek(stack) !== "(") output.push(stack.pop());
        stack.pop();
      }

      return output;
    }, [])
    .concat(stack.reverse())
    .join(" ");
};

const getValue = (token) => {
  if (token === "T") {
    return true;
  } else if (token === "F") {
    return false;
  } else {
    return token;
  }
};

export const solve = (a, b, c) => {
  if (b === "~") {
    return !a;
  }
  if (b === "∧") {
    if (getValue(a) && getValue(c)) return true;
    else return false;
  }
  if (b === "∨") {
    if (getValue(a) || getValue(c)) return true;
    else return false;
  }
  if (b === "→") {
    if (getValue(a) && !getValue(c)) return false;
    else return true;
  }
  if (b === "↔") {
    return getValue(a) === getValue(c);
  }
};

export const rpn = (ts, s = []) => {
  ts.split(" ").forEach((t) =>
    s.push(t === "T" || t === "F" ? t : solve(s.splice(-2, 1)[0], t, s.pop()))
  );
  return s[0];
};
