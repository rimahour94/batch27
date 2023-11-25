let student = {
  name: "Tushar",
  rollNo: 100,
  city: "Noida",
  addresses: ["Delhi", "Noida", "Pune", "Mumbai"],
  isPlaced: true,
  library: {
    bookName: "Reactjs",
    issueDate: "20/09/2023",
    innerObj: {
      id: 121,
      course: "Node",
    },
  },
  funReg: function () {
    console.log("Regular function called");
  },
  funArrow: () => {
    console.log("Arrow Function called!");
  },
};

let person = {
  firstName: "Hera",
  Gmail: "abc@gmail.com",
  funXYZ: () => {
    console.log(person.firstName);
  },
  funREG: function () {
    console.log(person);
  },
};
console.log(person.firstName);
person.funREG();
person.funXYZ();

// console.log(student.name);
// console.log(student.rollNo);
// console.log(student.city);

// console.log(
//   student.library.bookName,
//   student.library.issueDate,
//   student.library.innerObj.course
// );

// object destructuring
// const { name, rollNo, city, addresses, isPlaced, funArrow, funReg } = student;

// const { bookName, issueDate, innerObj } = student.library;

// console.log(name, rollNo, city, addresses, isPlaced);
// console.log(bookName, issueDate, innerObj);
// funReg();
// funArrow();

// get keys
let getKeys = Object.keys(student);
// console.log(getKeys);

// get values
let getValues = Object.values(student);
// console.log(getValues);

student = { ...student, companyAddress: "Hyderabad", companyId: "G131" };

// delete student.name;
// delete student.rollNo;
// console.log(student);

// get libraryData

const getLibrary = (obj, k) => {
  return obj[k]; //  obj.library
};

let v1 = getLibrary(student, "library");

let v2 = getLibrary(student, "name");

console.log(v1, v2);
