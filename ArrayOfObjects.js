// [{},{}]  JSON format
// const data = require("./fakeDB.json");

const data = [
  {
    _id: 100,
    fullname: "Tushar",
    department: "SDE1",
    company: "TRISECT",
    address: ["Noida", "Delhi", "Pune"],
    salary: 4000000,
  },
  {
    _id: 101,
    fullname: "Ajay",
    department: "SDE1",
    company: "TRISECT",
    address: ["Mumbai", "Delhi", "Pune"],
    salary: 3000000,
  },
  {
    _id: 102,
    fullname: "Hera",
    department: "SDE2",
    company: "GOOGLE",
    address: ["Mumbai", "Gurgaon", "Chandigarh"],
    salary: 3000000,
  },
  {
    _id: 103,
    fullname: "Khushboo",
    department: "SDE2",
    company: "FACEBOOK",
    address: ["Banglore", "Gurgaon", "Chandigarh"],
    salary: 2000000,
  },
  {
    _id: 104,
    fullname: "Himanshi",
    department: "SDE2",
    company: "GOOGLE",
    address: ["Noida", "Dehradoon", "Chandigarh"],
    salary: 7000000,
  },
];

const newArr = ["ritesh", "Kunal", "ABCDE", "Namit"];
// console.log(data[0].fullname);

newArr.map((student, i) => {
  if (i === 2) {
    console.log(newArr[i]);
  }
});
