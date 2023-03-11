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
