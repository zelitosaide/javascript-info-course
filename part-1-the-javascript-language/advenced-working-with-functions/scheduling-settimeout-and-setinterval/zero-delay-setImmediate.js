const start = Date.now();
let times = [];

let timerId = setImmediate(function run() {
  times.push(Date.now() - start);

  if (start + 1 < Date.now()) {
    console.log(times);
  } else {
    timerId = setImmediate(run);
  }
});
