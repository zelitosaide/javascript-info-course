const response = await fetch("user.json");
const user = await response.json();

const githubResponse = await fetch(
  `https://api.github.com/users/${user.username}`
);
const githubUser = await githubResponse.json();
const img = document.createElement("img");
img.src = githubUser.avatar_url;
img.style.width = "100px";
document.body.append(img);

await new Promise(function (resolve) {
  setTimeout(resolve, 3000);
});

img.remove();

// console.log(githubUser);
