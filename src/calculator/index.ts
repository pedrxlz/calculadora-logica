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

      if (token === "(") {
        stack.push(token);
      }

      if (token === ")") {
        while (peek(stack) !== "(") output.push(stack.pop());
        stack.pop();
      }

      return output;
    }, [])
    .concat(stack.reverse())
    .join(" ");
};

export const solve = (a, b, c) => {
  let A = a === "T" ? true : false;
  let B = c === "T" ? true : false;
  if (b === "∧") {
    return A === B;
  }
};

export const rpn = (ts, s = []) => {
  ts.split(" ").forEach((t, i) =>
    s.push(t === "T" || t === "F" ? t : solve(s.splice(-2, 1)[0], t, s.pop()))
  );
  console.log(s);
  return s[0];
};
