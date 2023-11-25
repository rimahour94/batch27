const promise = new Promise((resolve, reject) => {
  let obj = {};

  setTimeout(() => {
    obj.name = "Ritesh";
    resolve(obj);
  }, 2000);

  console.log(obj, "in line 8"); // expected output ::: {} in line 8
});

// console.log(promise, "line 11");

// promise
//   .then((res) => {
//     console.log(res, "success");
//   })
//   .catch((err) => {
//     console.log(err, "failure");
//   });

// await/async

const promiseHandling = async () => {
  try {
    const res = await promise;
    console.log(res, "success");
  } catch (err) {
    console.log(err, "failure");
  }
};

promiseHandling();
