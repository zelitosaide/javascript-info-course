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
