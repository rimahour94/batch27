// function funA(a, b) {
//   b.name = "TRISECT";
//   b.id = "T101";
//   console.log(b);
//   a(b); // callback function
// }

// funA(function (obj) {
//   obj.city = "Noida";
//   console.log("inner function", obj);
// }, {});

//

const funA = (obj) => {
  obj.id = "T101";
  console.log(obj);

  const funB = (obj1) => {
    obj1.name = "Trisect";
    console.log(obj1);

    const funC = (obj2) => {
      obj2.city = "Noida";
      console.log(obj2);
    };

    setTimeout(() => {
      funC(obj1);
    }, 2000);
  };

  setTimeout(() => {
    funB(obj);
  }, 2000);
};

funA({});
