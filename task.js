// const data = [
//   {
//     id: 1,
//     name: "Aarav",
//     Department: "SDE1",
//     company: "Company A",
//     Address: "noida",
//   },
//   {
//     id: 2,
//     name: "Dhruv",
//     Department: "SDE2",
//     company: "Company B",
//     Address: "Pune",
//   },
//   {
//     id: 3,
//     name: "Diya",
//     Department: "SDE3",
//     company: "Company A",
//     Address: "Banglore",
//   },
//   {
//     id: 4,
//     name: "Siya",
//     Department: "SDE4",
//     company: "Company B",
//     Address: "Delhi",
//   },
//   {
//     id: 5,
//     name: "Bharat",
//     Department: "SDE1",
//     company: "Company A",
//     Address: "Haryana",
//   },
// ];

// Filter data for "Company A"
const companyAData = data.filter((data) => data.company === "Company A");
// console.log(companyAData);

// Use map to create a new array containing only the IDs
const ids = data.map((data) => data.id);
// console.log(ids);

// Use map to create a new array containing objects without the 'id' property
// const dataWithoutId = data.map((data) => {
//   //   const { id, ...dataWithoutId } = data;
//   delete data.id;
//   return data;
// });
// console.log(dataWithoutId);

// delete id 3

const filteredData = data.filter((user) => {
  return user.id == 3;
});

// console.log(filteredData, 611);

const sortedData = data.sort((a, b) => {
  return -a.name.localeCompare(b.name);
});

console.log(sortedData);

const data = [
  {
    id: 1,
    name: "Aarav",
    Department: "SDE1",
    company: "Company A",
    Address: "noida",
    salary: 300000,
  },
  {
    id: 2,
    name: "Dhruv",
    Department: "SDE2",
    company: "Company B",
    Address: "Pune",
    salary: 1000000,
  },
  {
    id: 3,
    name: "Diya",
    Department: "SDE3",
    company: "Company A",
    Address: "Banglore",
    salary: 800000,
  },
  {
    id: 4,
    name: "Siya",
    Department: "SDE4",
    company: "Company B",
    Address: "Delhi",
    salary: 500000,
  },
  {
    id: 5,
    name: "Bharat",
    Department: "SDE1",
    company: "Company A",
    Address: "Haryana",
    salary: 200000,
  },
];

//   const filteredData = data.filter(data => data.name !== 'Diya');
//   console.log(filteredData);

//   const sortedDataDescending = data.sort((a, b) => b.salary - a.salary);
//   console.log(sortedDataDescending);

//   const sortedData = data.sort((a, b) => a.salary - b.salary);
//   console.log(sortedData);
