import { DOM } from "./DOM";

function random(item) {
  if (item[Math.floor(Math.random() * item.length)] === 0) {
    console.log("rock");
  }
  if (item[Math.floor(Math.random() * item.length)] === 1) {
    console.log("paper");
  }
  if (item[Math.floor(Math.random() * item.length)] === 2) {
    console.log("scissors");
  }
}
const item = [0, 1, 2];
DOM.rock.onclick = function () {
  if (outcome === "scissors") {
    console.log("You won against scissors");
  } else {
    console.log("you lost against scissors");
  }
};
console.log(DOM.rock);
random(item);
