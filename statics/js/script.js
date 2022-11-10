//alert("hello");

function ageInDays() {
  var birthyear = prompt("what your age year");
  var ageInDayss = (2022 - birthyear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "you are" + ageInDayss + "days old."
  );

  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
}
function generatorcat() {
  var image = document.createElement("img");
  //<img />
  var div = document.getElementById("flex-box-gen");
  // <div id="flex-box-gen"><div></div></div>
  image.src = "https://cdn2.thecatapi.com/images/dbc.gif";
  // <img src="https://cdn2.thecatapi.com/images/dbc.gif" />
  div.appendChild(image);
  // <div id="flex-box-gen">
  // <img src="https://cdn2.thecatapi.com/images/dbc.gif" />
  // </div>
}

//challenge 3 ,rock,paper,sessior
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanchoice, botchoice;
  //humanchoice = yourChoice.id;
  //botchoice=
  //result= decidewinner(humanchoice,botchoice);
  //message= finalmessage(result);
  rpsFrontEnd(yourChoice.id, botchoice, message);
}

//Challenge 4 change the color of button
let all_button = document.getElementsByTagName("button");
console.log(all_button);
let copyall_button = [];
for (let i = 0; i < all_button.length; i++) {
  copyall_button.push(all_button[i].classList[1]);
}
console.log(copyall_button);

function buttonColorChange(buttonthingy) {
  console.log(buttonthingy.value);
  if (buttonthingy.value === "Red") {
    buttonsred();
  } else if (buttonthingy.value === "Green") {
    buttonsGreen();
  } else if (buttonthingy.value === "reset") {
    buttonsColorreset();
  } else if (buttonthingy.value === "Random") {
    randomcolor();
  }
}
function buttonsred() {
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-danger");
  }
}
function buttonsGreen() {
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-success");
  }
}
function buttonsColorreset() {
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(copyall_button[i]);
  }
}
function randomcolor() {
  let choice = ["btn-primary", "btn-success", "btn-warning", "btn-danger"];
  for (let i = 0; i < all_button.length; i++) {
    let RandomNumber = Math.floor(Math.random() * 4);
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(choice[RandomNumber]);
  }
}
