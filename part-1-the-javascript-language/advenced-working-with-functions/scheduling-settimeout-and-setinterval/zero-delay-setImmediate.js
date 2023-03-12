let timerId = setImmediate(function run() {
  console.log("ola");
  timerId = setImmediate(run, 1000);
}, 1000);
