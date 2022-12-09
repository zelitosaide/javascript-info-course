import { user } from "./script.js";

label01: {
  const func = async function () {
    return 1;
  };
  func().then(console.log);
}

label02: {
  const func = async function () {
    return Promise.resolve(2);
  };
  func().then(console.log);
}

label03: {
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(3);
    }, 1000);
  });

  const func = async function () {
    const result = await promise;
    console.log(result);
  };

  func();
}

label04: {
  const showAvatar = async function () {
    // read our JSON
    const response = await fetch("user.json");
    const user = await response.json();

    // read github user
    const githubResponse = await fetch(
      `https://api.github.com/users/${user.username}`
    );
    const githubUser = await githubResponse.json();

    // show the avatar
    const img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.style.width = "100px";
    document.body.append(img);

    // wait 3 seconds
    await new Promise(function (resolve) {
      setTimeout(resolve, 3000);
    });

    img.remove();

    return showAvatar;
  };

  showAvatar();
}

label05: {
  console.log(user);
}

label06: {
  class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }

  new Waiter().wait().then(console.log);
  const waiter = await new Waiter().wait();
  console.log("waiter", waiter);
}

label07: {
  const func = async function () {
    await Promise.reject(new Error("Whoops!"));
  };

  // OR
  const func2 = async function () {
    throw new Error("Whoops!");
  };
}
