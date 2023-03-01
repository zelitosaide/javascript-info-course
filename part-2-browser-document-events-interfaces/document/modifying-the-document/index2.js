// Creating an element
// document.createElement(tag)
// const div = document.createElement('div')
// document.createTextNode(text)
// const textNode = document.createTextNode('Here I am')

// 1. Create <div> element
const div = document.createElement("div");

// 1. Create <div> element
div.className = "alert";

// 3. Fill it with the content
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div);

setTimeout(function () {
  div.remove();
}, 2000);

// node.append(...nodes or strings)
// node.prepend(...nodes or strings)
// node.before(...nodes or strings)
// node.after(...nodes or strings)
// node.replaceWith(...nodes or strings)

// const node = document.body.append(div) ?? "Nao retorna nada";

const ol = document.getElementById("ol");

ol.before("Before"); // insert string "before" before <ol>
ol.after("After"); // insert string "after" after <ol>

const firstLi = document.createElement("li");
firstLi.textContent = "Prepend";
ol.prepend(firstLi); // insert liFirst at the beginning of <ol>
