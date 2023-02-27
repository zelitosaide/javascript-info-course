document.body.myData = {
  name: "Caesar",
  title: "Imperator",
};

console.log(document.body.myData.title);

document.body.sayTagName = function () {
  console.log(this.tagName);
};
