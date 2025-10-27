const gameWords = ["гачибас", "дум", "закрой"];

currentWord = 0;

function prepareScreen() {
  word = gameWords[currentWord];

  wDiv = document.createElement("div");
  wDiv.id = "Word";

  for (l of word) {
    lDiv = document.createElement("div");
    lDiv.classList.add("letter");
    lDiv.letter = l;
    lDiv.shown = false;
    lDiv.onmousedown = function () {
      if (this.shown) {
        return;
      }
      this.appendChild(document.createTextNode(this.letter));
      this.shown = true;
    };
    wDiv.appendChild(lDiv);
  }

  parentDiv = document.getElementById("WordDiv");
  parentDiv.appendChild(wDiv);
}

function nextWord() {
  ++currentWord;

  console.log("next");
  wDiv = document.getElementById("Word");
  wDiv.remove();

  prepareScreen();
}

window.onload = prepareScreen();
