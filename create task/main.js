import { DOM } from "./DOM";

const item = ["rock", "paper", "scissors"];
let random;

function number() {
  random = item[Math.floor(Math.random() * item.length)];
}

DOM.rock.onclick = function () {
  let pick = "rock";
  number(item);
  dolose(pick);
};
DOM.paper.onclick = function () {
  let pick = "paper";
  number(item);
  dolose(pick);
};
DOM.scissors.onclick = function () {
  let pick = "scissors";
  number(item);
  dolose(pick);
};

const dolose = (pick) => {
  switch (true) {
    case pick == random:
      removebutton();
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You drawed against ${random}</h3><button id="restart">restart</button></div>`
      );
      addbutton();
      break;
    case pick == "rock" && random == "paper":
      removebutton();
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You lost against ${random}</h3><button id="restart">restart</button></div>`
      );
      addbutton();
      break;
    case pick == "rock" && random == "scissors":
      removebutton();
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You won against ${random}</h3><button id="restart">restart</button></div>`
      );
      addbutton();
      break;
    case pick == "paper" && random == "rock":
      removebutton();
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You won against ${random}</h3><button id="restart">restart</button></div>`
      );
      addbutton();
      break;
    case pick == "paper" && random == "scissors":
      removebutton();
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You lost against ${random}</h3><button id="restart">restart</button></div>`
      );
      addbutton();
      break;
    case pick == "scissors" && random == "rock":
      removebutton();
      remove();
      ``;
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You lost against ${random}</h3><button id="restart">restart</button></div>`
      );
      addbutton();
      break;
    case pick == "scissors" && random == "paper":
      remove("button");
      remove("#outcome");
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You won against ${random}</h3><button id="restart">restart</button></div>`
      );
      addbutton();
  }
};
function remove(item) {
  let outcome = document.querySelectorAll(item);
  outcome.forEach((outcome) => {
    outcome.remove();
  });
}

function removebutton() {
  let button = document.querySelectorAll("button");
  button.forEach((button) => {
    button.remove();
  });
}

function addbutton() {
  outcome = document.querySelectorAll("#outcome");
  outcome.forEach((button) => {
    button.addEventListener("click", function () {
      DOM.outcome.insertAdjacentHTML(
        "afterbegin",
        ` <button id="rock">
      rock
      <img
      src="https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg"
      width="300px"
      draggable="false"
      /><img />
      </button>
      <button id="paper">
      paper
      <img
      src="https://m.economictimes.com/thumb/msid-61941670,width-1200,height-900,resizemode-4,imgsize-25928/better-valuations-of-paper-companies-just-a-matter-of-time.jpg"
      width="300px"
      draggable="false"
      /><img />
      </button>
      <button id="scissors">
      scissors<img
      src="https://upload.wikimedia.org/wikipedia/commons/9/97/Standard_household_scissors.jpg"
      width="300px"
      draggable="false"
      /><img />
      </button>`
      );
    });
  });
}
