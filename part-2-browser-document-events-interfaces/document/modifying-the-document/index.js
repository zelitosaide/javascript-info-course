// 1. Create <div> element
const div = document.createElement("div");

// 2. Set its class to "alert"
div.className = "alert";

// 3. Fill it with the content
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div);

const textNode = document.createTextNode("Here I am");
