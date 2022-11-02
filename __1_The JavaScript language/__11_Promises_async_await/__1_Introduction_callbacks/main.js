const { log: print } = console;

label01: {
  const loadScript = function (src) {
    const script = document.createElement("script");
    script.src = src;
    document.head.append(script);
  }
  // loadScript("./script1.js");
}

label02: {
  const loadScript = function (src) {
    const script = document.createElement("script");
    script.src = src;
    document.head.append(script);
  }
  // loadScript("./script1.js");
  // print("2. Something here...");
}

label03: {
  const loadScript = function (src) {
    const script = document.createElement("script");
    script.src = src;
    document.head.append(script);
  }
  // loadScript("./script2.js");

  // try {
  //   newFunction();  // no such function why????
  // } catch (error) {
  //   print(error.message);
  // }
}

label04: {
  const loadScript = function (src, callback) {
    const script = document.createElement("script");
    script.src = src;

    script.onload = function () {
      callback(script);
    }

    document.head.append(script);
  }

  // loadScript("script2.js", function () {
  //   // the callback runs after the script is loaded
  //   newFunction();  // so now it works
  // });
}

label05: {
  const loadScript = function (src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      callback(script);
    }
    document.head.append(script);
  }

  // loadScript("./script3.js", function (script) {
  //   print(`Cool, the script ${script.src} is loaded`);
  //   print(_.toString());
  // });
}

label06: {
  const loadScript = function (src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      callback(script);
    }
    document.head.append(script);
  }

  // loadScript("./script1.js", function (script) {
  //   print(`Cool, the ${script.src} is loaded, let's load one more`);

  //   loadScript("./script2.js", function () {
  //     print(`Cool, the second script is loaded`);
  //     newFunction();
  //   });
  // });
}

label07: {
  const loadScript = function (src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      callback(script);
    }
    document.head.append(script);
  }

  loadScript("./script1.js", function (script) {
    print(`Cool, the ${script.src} is loaded, let's load one more`);

    loadScript("./script2.js", function (script) {
      print(`Cool, the second script is loaded`);
      newFunction();

      loadScript("./script3.js", function (script) {
        print(`Cool, the third script is loaded`);
        print(firstName);
      });

    });

  });
}