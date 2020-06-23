// Declarations
var names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];
var i = 0;
var list = document.getElementById("namesList");

// Actual Solution
for (name in names) {
  if (names[name][0].toLowerCase() === "j") {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

//Webpages Loop
function namesLoop(names) {
  setTimeout(() => {
    if (names[i][0].toLowerCase() === "j") {
      var showName = document.createElement("div");
      showName.innerHTML = `Goodbye ${names[i]}!`;
      showName.className = "output animate goodbye";
      list.appendChild(showName);
    } else {
      var showName = document.createElement("div");
      showName.innerHTML = `Hello ${names[i]}!`;
      showName.className = "output animate hello";
      list.appendChild(showName);
    }

    i++;
    if (i < names.length) {
      namesLoop(names);
    }
  }, 500);
}
namesLoop(names);
