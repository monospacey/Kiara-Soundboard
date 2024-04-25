import "./style.css";
import quaverLogo from "/kiara_quaver.svg";
import eggAudio from "/egg-oo.mp3";
import laughAudio from "/laugh.mp3";
import hiccupAudio from "/hiccup.mp3";
import fussyAudio from "/fussy.mp3";
import { playAudio } from "./playAudio.js";

document.querySelector("#app").innerHTML = `
  <div>
      <img src="${quaverLogo}" class="logo" alt="Kuaver1" />
    <h1>Kiara's Soundboard</h1>
    </div>
    <div class="card">
      <button id="egg" type="button">Egg-oo</button>
      <button id="laugh" type="button">Laugh</button>
    </div>
    <div class="card">
      <button id="hiccup" type="button">Hiccup</button>
      <button id="fussy" type="button">Fussy</button>
    </div>
`;


let eggButton = document.getElementById("egg");
eggButton.addEventListener("click", () => {
  playAudio(eggAudio);
});

let laughButton = document.getElementById("laugh");
laughButton.addEventListener("click", () => {
  playAudio(laughAudio);
});

let hiccupButton = document.getElementById("hiccup");
hiccupButton.addEventListener("click", () => {
  playAudio(hiccupAudio);
});

let fussyButton = document.getElementById("fussy");
fussyButton.addEventListener("click", () => {
  playAudio(fussyAudio);
});