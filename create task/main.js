import { DOM } from "./DOM";

const item = ["rock", "paper", "scissors"];
let random;

function number() {
  random = item[Math.floor(Math.random() * item.length)];
  dolose(random);
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
  switch (pick) {
    case pick == random:
      console.log("draw");
      break;
    case pick == "rock" && random == "paper":
      console.log("You lost against paper");
      break;
    case pick == "rock" && random == "scissors":
      console.log("You won against scissors");
      break;
    case pick == "paper" && random == "rock":
      console.log("You won against rock");
      break;
    case pick == "paper" && random == "scissors":
      console.log("You lost against scissors");
      break;
    case pick == "scissors" && random == "rock":
      console.log("You lost against rock");
      break;
    case pick == "scissors" && random == "paper":
      console.log("You won against paper");
  }
};
