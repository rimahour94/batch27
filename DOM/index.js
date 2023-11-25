console.log("External JS File Added");

const homeId = document.getElementById("home");
const menuCl = document.getElementsByClassName("menu-ul")[0];

const input1 = document.getElementById("input1");
console.log(input1, 777);
// console.log(homeId.innerText, "line 5");
console.log(menuCl.children.length);
// events

const homeClick = (e) => {
  //   console.log("Home");
  console.log(e);
  e.target.style.color = "darkblue";
  //   homeId.style.color = "red";
};

for (let i = 0; i < menuCl.children.length; i++) {
  console.log(menuCl.children[i]);
}

// event listeners
// onclick,onchange,mouseover,mouseleave,onblur

input1.addEventListener("change", (e) => {
  console.log(e.target.value);
});
