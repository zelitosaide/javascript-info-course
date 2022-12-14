const { log: print } = console;

label01: {
  const promise = fetch("https://no-such-server.blabla")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      print(data);
    })
    .catch(function (error) {
      print(error);
    });
}

label02: {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    function (response) {
      return response.json();
    }
  );

  const todo = response.then(function (todo) {
    // print(todo);
  });

  print(todo instanceof Promise);
}

label03: {
  const myFunction = async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const todo = await response.json();
    // print(todo);
    return todo; // If need
  };

  myFunction().then(function (result) {
    // print(result);
  });
}

label04: {
  fetch("./user.json")
    .then(function (response) {
      // JSON.parse: unexpected non-whitespace character
      // after JSON data at line 9 column 1 of the JSON data
      return response.json();
    })
    .then(function (user) {
      return fetch(`https://api.github.com/users/${user.username}`);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (githubUser) {
      return {
        then(resolve, reject) {
          const img = document.createElement("img");
          img.src = githubUser.avatar_url;
          img.style.width = "100px";
          document.body.append(img);

          setTimeout(function () {
            img.remove();
            resolve(githubUser);
          }, 3000);
        },
      };
    })
    .then(function (githubUser) {
      print(githubUser.name);
    })
    .catch(function (error) {
      print(error.message);
    });
}

label05: {
  new Promise(function (resolve, reject) {
    throw new Error("Whoops!");
  })
    .catch(function (error) {
      print("The error is handled, continue normally");
    })
    .then(function (result) {
      console.log("Next successful handler runs", result);
    });
}

label06: {
  new Promise(function (resolve, reject) {
    throw new Error("Whoops!");
  })
    .catch(function (error) {
      if (error instanceof URIError) {
        // handle it
      } else {
        console.log("Can't handle such error");
        throw error; // throwing this or another error jumps to the next catch
      }
    })
    .then(function () {
      /* doesn't run here */
    })
    .catch(function (error) {
      console.log(`The unknown error has occurred: ${error}`);
    });
}

label07: {
  window.addEventListener("unhandledrejection", function (event) {
    console.log(event.promise);
    console.log(event.reason);
  });

  new Promise(function () {
    throw new Error("Opa...");
  });
}

label08: {
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      throw new Error("Whoops!...");
    }, 3000);
  }).catch(console.log);
}

label09: {
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        throw new Error("Whoops!...");
      } catch {
        console.log("Error inside asynchronous actions");
      }
    }, 3000);
  }).catch(console.log);
}
