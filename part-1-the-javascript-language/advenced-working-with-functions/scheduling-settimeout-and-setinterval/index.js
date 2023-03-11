// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

setTimeout(function () {
  alert("Hi");
}, 1000);

setTimeout(
  function (phrase, who) {
    console.log(phrase, who);
  },
  2000,
  "Hello",
  "Zelito"
);

setTimeout("console.log('From string!!')", 3000);

setTimeout(() => console.log("From arrow function!!"), 4000);

// wrong!
// setTimeout(sayHi(), 1000);

setTimeout(
  (function () {
    return () => console.log("Sei la!!");
  })(),
  5000
);

// Canceling with clearTimeout

/**
 * let timerId = setTimeout(...);
 * clearTimeout(timerId);
 */

const timerId = setTimeout(function () {
  console.log("never happens");
}, 6000);

console.log("Timer Identifier", timerId);

clearTimeout(timerId);

console.log("Timer Identifier after canceled", timerId);

// setInterval

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// repeat with the interval of 2 seconds

const timerIdentifier = setInterval(
  (function () {
    let number = 1;
    return () => console.log("tick", number++);
  })(),
  2000
);

// after 20 seconds stop
setTimeout(function () {
  clearInterval(timerIdentifier);
}, 20000);
