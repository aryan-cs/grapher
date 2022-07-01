// canvas
var canvas;
const SCALE = 1.6;
const VARIABLE_SCALING = false;

function limit (value, min, max) { return Math.min(Math.max(value, min), max); }

window.addEventListener("resize", function (ignored) {

  if (VARIABLE_SCALING) { resizeCanvas(Math.floor(limit(window.innerWidth / SCALE, 1000, 1200)), Math.floor(limit(window.innerWidth / SCALE, 580, 610))); }

}, true);

// site
var title = "grapher";
var version = "version 1.0.0";

window.onload = function () { document.title = title; document.getElementById("title").innerHTML = title + "  <span style=\"font-size: 30px;\"> " + version + "<\span>"; }

function createInputAndButton (buttonMessage, createMessage) {

  var input = document.createElement("input");
  input.type = "text";
  input.id = "inputField";
  input.className = "field";

  document.getElementById("main").appendChild(input);

  var button = document.createElement("button");
  button.className = "field_button";
  button.textContent = buttonMessage;
  button.id = "inputButton";
  button.onclick = function () { inputButtonClicked(); }

  document.getElementById("main").appendChild(button);

  if (createMessage) {

    var message = document.createElement("p");
    message.id = "result";
    message.className = "message";
    message.innerHTML = createMessage;

    document.getElementById("main").appendChild(message);

  }

}

function createCornerButton (buttonText) {

  var button = document.createElement("button");
  button.className = "corner_button";
  button.textContent = buttonText;
  button.addEventListener("click", cornerButtonClicked());

  document.getElementById("main").appendChild(button);

}

function inputButtonClicked () {

  var input = document.getElementById("inputField").value;
  var message = document.getElementById("result");

  if (message) { message.innerHTML = "y = " + graph(input); }

}

function cornerButtonClicked () {

  // start here...

}

// colors
const BACKGROUND_COLOR = getComputedStyle(document.querySelector(":root")).getPropertyValue("--background-color");
const ACCENT_1 = getComputedStyle(document.querySelector(":root")).getPropertyValue("--accent-1");
const ACCENT_2 = getComputedStyle(document.querySelector(":root")).getPropertyValue("--accent-2");