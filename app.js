let start = document.getElementById("start");
let animatsiya = document.querySelector(".chiziq");

start.addEventListener("click", (e) => {
  e.preventDefault();
  animatsiya.classList.add("animatsiya-chiziq");
});

let stop = document.getElementById("stop");

stop.addEventListener("click", (e) => {
  e.preventDefault();
  animatsiya.classList.remove("animatsiya-chiziq");
});

let chap = document.getElementById("chap");
let yasamaMashina = document.querySelector(".moshina");
chap.addEventListener("click", (e) => {
  e.preventDefault();
  yasamaMashina.style.left = "30rem";
  mashinaTayyor.style.left = "60rem";
});

let ong = document.getElementById("ong");

let mashinaTayyor = document.querySelector(".mashinaTayyor");
ong.addEventListener("click", (e) => {
  e.preventDefault();
  yasamaMashina.style.left = "0rem";
  mashinaTayyor.style.left = "30rem";
});

// let replace = document.getElementById("replace");
// replace.addEventListener("click", (e) => {
//   e.preventDefault();
//   yasamaMashina.style.display = "none";
//   mashinaTayyor.style.display = "block";

//   replace.addEventListener("click", (e) => {
//     e.preventDefault();
//     mashinaTayyor.style.display = "none";
//     yasamaMashina.style.display = "block";
//   });
// });

replace.addEventListener("input", (e) => {
  e.preventDefault();

  if (replace.checked === true) {
    yasamaMashina.style.display = "none";
    mashinaTayyor.style.display = "block";
    document.getElementById("replace").value = "active";
  } else {
    yasamaMashina.style.display = "block";
    mashinaTayyor.style.display = "none";
    document.getElementById("replace").value = "disable";
  }
});
