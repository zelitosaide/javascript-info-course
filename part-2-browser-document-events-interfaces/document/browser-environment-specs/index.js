function sayHi() {
  alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();

// And we can use it as a browser window, to show the window height:
alert(window.innerHeight);

document.body.style.backgroundColor = "pink";

setTimeout(function () {
  document.body.style.backgroundColor = "brown";
}, 1000);

alert(location.href);

if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org";
}

// The functions alert/confirm/prompt are also a part of the BOM
