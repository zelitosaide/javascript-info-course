const example = document.getElementById("example");
const styles = getComputedStyle(example);

console.log("offsetTop", example.offsetTop);
console.log("offsetLeft", example.offsetLeft);
console.log("clientLeft", example.clientLeft);
console.log("clientTop", example.clientTop);
console.log("offsetWidth", example.offsetWidth, 25 * 2 + 20 * 2 + 300);
console.log("clientWidth", example.clientWidth, 20 * 2 + 283);
console.log("clientHeight", example.clientHeight, 20 * 2 + 200);

console.log(styles.width);
