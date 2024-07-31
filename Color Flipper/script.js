"use script";

const textColor = document.getElementById("text-color");
const backgroundColors = [
  "red",
  "blue",
  "yellow",
  "pink",
  "green",
  "purple",
  "orange",
  "grey",
  "brown",
];

const ChangingBackgroundColor = function () {
  var color =
    backgroundColors[Math.floor(backgroundColors.length * Math.random())];
  document.body.style.backgroundColor = color;

  textColor.innerText = color;
};
