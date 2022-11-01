const { log: print } = console;

label01: {
  const loadScript = function (src) {
    const script = document.createElement("script");
    script.src = src;
    document.head.append(script);
  }
  // loadScript("./script_1.js");
}

label02: {
  const loadScript = function (src) {
    const script = document.createElement("script");
    script.src = src;
    document.head.append(script);
  }
  // loadScript("./script_1.js");
  // print("2. Something here...");
}

label03: {
  const loadScript = function (src) {
    const script = document.createElement("script");
    script.src = src;
    document.head.append(script);
  }
  loadScript("./script_2.js");

  try {
    newFunction();  // no such function why????
  } catch (error) {
    print(error.message);
  }
}