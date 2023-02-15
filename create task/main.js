import { DOM } from "./DOM";

const item = ["rock", "paper", "scissors"];
let random;

function number() {
  random = item[Math.floor(Math.random() * item.length)];
  dolose(random);
}

DOM.rock.onclick = function () {
  number(item);
  let pick = "rock";
  dolose(pick);
};
DOM.paper.onclick = function () {
  number(item);
  let pick = "paper";
  dolose(pick);
};
DOM.scissors.onclick = function () {
  number(item);
  let pick = "scissors";
  dolose(pick);
};

const dolose = (pick) => {
  switch (pick) {
    case pick == random:
      console.log("draw");
      break;
    case pick == "rock" && random == "paper":
      console.log("lose");
      break;
    case pick == "rock" && random == "scissors":
      console.log("win");
      break;
    case pick == "paper" && random == "rock":
      console.log("win");
      break;
    case pick == "paper" && random == "scissors":
      console.log("lose");
      break;
    case pick == "scissors" && random == "rock":
      console.log("lose");
      break;
    case pick == "scissors" && random == "paper":
      console.log("win");
  }
};
