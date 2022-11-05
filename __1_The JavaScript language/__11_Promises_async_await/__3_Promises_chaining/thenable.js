label01: {
  const obj = {
    then(callback) {
      console.log("Inside theb method");
      console.log(callback.toString());
      callback("then method is done");
    },
  };

  (async function () {
    console.log("start");
    const result = await obj;
    console.log("end", result);
  })();
}

label02: {
  // Resolving a thenable object
  const p1 = Promise.resolve({
    then(onFulfill, onReject) {
      // onReject(new Error("Whoops!"));
      onFulfill("fulfilled!");
    },
  });

  console.log(p1 instanceof Promise);

  p1.then(
    function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error.message);
    }
  );
}

label03: {
  // Thenable throws before callback
  // Promise rejects
  const thenable = {
    then(onFulfilled) {
      throw new TypeError("Throwing");
      onFulfilled("Resolving");
    },
  };

  const p2 = Promise.resolve(thenable);

  p2.then(
    function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error.message);
    }
  );
}

label04: {
  // Thenable throws after callback
  // Promise resolves
  const thenable = {
    then(onFulfilled) {
      onFulfilled("Resolving");
      throw new TypeError("Throwing");
    },
  };

  const p3 = Promise.resolve(thenable);
  p3.then(
    function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error.message);
    }
  );
}

label05: {
  // Nested thenables will be "deeply flattened" to a single promise.
  const thenable = {
    then(onFulfilled, onRejected) {
      onFulfilled({
        // The thenable is fulfilled with another thenable
        then(onFulfilled, onRejected) {
          onFulfilled(42);
        },
      });
    },
  };

  Promise.resolve(thenable).then(function (result) {
    console.log(result);
  });
}

label06: {
  /**
   * Warning: Do not call Promise.resolve() on a thenable
   * that resolves to itself. That leads to infinite
   * recursion, because it attempts to flatten an
   * infinitely-nested promise.
   */
  const thenable = {
    then(onFulfilled, onRejected) {
      onFulfilled(thenable);
    },
  };

  // Promise.resolve(thenable); // Will lead to infinite recursion.
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
