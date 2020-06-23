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
  if (names[name][0] === "j" || names[name][0] === "J") {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

// // Webpage Loop
// function namesLoop(names) {
//   setTimeout(() => {
//     if (names[i][0] === "j" || names[i][0] === "J") {
//       document.getElementById(i).innerHTML = `Goodbye ${names[i]}!`;
//       document.getElementById(i).style.color = "#C1C1C1";
//     } else {
//       document.getElementById(i).innerHTML = `Hello ${names[i]}!`;
//     }

//     i++;
//     if (i < names.length) {
//       namesLoop(names);
//     }
//   }, 500);
// }
// namesLoop(names);

//Webpages Loop 2
function namesLoop2(names) {
  setTimeout(() => {
    if (names[i][0] === "j" || names[i][0] === "J") {
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
      namesLoop2(names);
    }
  }, 500);
}
namesLoop2(names);
