import "./style.css";
import { refreshData, saveScore } from "./modules/getElements.js";
import DisplayScores from "./modules/displayScores.js";
import AddScore from "./modules/addScore.js";

document.addEventListener("DOMContentLoaded", () => {
  refreshData.addEventListener("click", () => {
    const displayScore = new DisplayScores();
    displayScore.display();
  });

  saveScore.addEventListener("click", (e) => {
    const saveData = new AddScore();
    saveData.addScore(e);
  });
});
