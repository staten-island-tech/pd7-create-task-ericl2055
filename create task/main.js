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
      console.log("draw");
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You drawed against ${random}</h3></div>`
      );
      break;
    case pick == "rock" && random == "paper":
      console.log("You lost against paper");
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You lost against ${random}</h3></div>`
      );
      break;
    case pick == "rock" && random == "scissors":
      console.log("You won against scissors");
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You won against ${random}</h3></div>`
      );
      break;
    case pick == "paper" && random == "rock":
      console.log("You won against rock");
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You won against ${random}</h3></div>`
      );
      break;
    case pick == "paper" && random == "scissors":
      console.log("You lost against scissors");
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You lost against ${random}</h3></div>`
      );
      break;
    case pick == "scissors" && random == "rock":
      console.log("You lost against rock");
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You lost against ${random}</h3></div>`
      );
      break;
    case pick == "scissors" && random == "paper":
      console.log("You won against paper");
      remove();
      DOM.outcome.insertAdjacentHTML(
        "afterend",
        `<div id ="outcome"><h3>You won against ${random}</h3></div>`
      );
  }
};
function remove() {
  let outcome = document.querySelectorAll("#outcome");
  outcome.forEach((outcome) => {
    outcome.remove();
  });
}
