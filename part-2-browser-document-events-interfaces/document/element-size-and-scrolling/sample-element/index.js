const example = document.getElementById("example");
const styles = getComputedStyle(example);
const width = +styles.width.split("px")[0];
const padding = +styles.paddingLeft.split("px")[0];
const clientWidthExperimental = +styles.width.split("px")[0];
const clientWidth = "content width (width + padding - scrollbar)";

console.log(clientWidth, example.clientWidth, padding);
