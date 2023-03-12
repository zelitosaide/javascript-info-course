const start = Date.now();

let timerId = setImmediate(function run() {
  console.log("ola");
  timerId = setImmediate(run);
});
