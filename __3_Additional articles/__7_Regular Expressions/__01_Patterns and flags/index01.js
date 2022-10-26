// Regular Expressions

// 1. The “long” syntax:
label01: {
  const flags = "gmi";
  const pattern = "pattern";
  const regexp = new RegExp(pattern, flags);
  console.log(regexp);
}

// 2. And the “short” one, using slashes "/":
label02: {
  const regexp1 = /pattern/;        // no flags 
  const regexp2 = /pattern/gmi;     // with flags g, m and i
  console.log(regexp1, regexp2);
}