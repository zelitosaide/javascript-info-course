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

  // .then(function (todo) {
  //   return todo;
  // });

  print(todo);
}
