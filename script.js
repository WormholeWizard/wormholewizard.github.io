const gameWords = ["гачибас"];

currentWord = 0;

function prepareScreen() {
  word = gameWords[currentWord];

  wDiv = document.createElement("div");
  wDiv.classList.add("word");

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
  document.body.appendChild(wDiv);
}

window.onload = prepareScreen();
