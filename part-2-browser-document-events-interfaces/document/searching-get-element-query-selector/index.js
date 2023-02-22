// const elem = document.getElementById("elem");
// elem.style.backgroundColor = "red";
document.getElementById("elem").style.backgroundColor = "red";

// That’s unless we declare a JavaScript variable with the same name, then it takes precedence:
const elem = 5;
console.log(elem);

// or
if (elem instanceof Object) {
  elem.style.backgroundColor = "green";
}

const elemContent = window["elem-content"];
elemContent.style.color = "white";

document.getElementById("elem").style.backgroundColor = "yellow";

const elements = document.querySelectorAll("ul > li:last-child");

for (const el of elements) {
  console.log(el.innerHTML);
}
