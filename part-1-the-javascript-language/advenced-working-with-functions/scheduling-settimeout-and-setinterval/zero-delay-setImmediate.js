const start = Date.now();
let times = [];

let timerId = setImmediate(function run() {
  times.push();

  if (start + 100 < Date.now()) {
    console.log(times);
  }

  timerId = setImmediate(run);
});
