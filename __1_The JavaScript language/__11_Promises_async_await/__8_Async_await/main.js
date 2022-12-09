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
    const response = await fetch("user.json");
  };

  showAvatar();
}
