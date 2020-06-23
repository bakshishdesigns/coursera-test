// Initial + String Cats

var x = "hello",
  y = null,
  z;
x += " world!";

function say(a) {
  console.log(`${x} ${y}`);
}

if (z == undefined) {
  console.log(z);
}

say(x);

// Opeations

var e = 4,
  d = "4";
if (e == d) {
  console.log("They're equal (auto)");
}
if (e === d) {
  console.log("They're Scrictly Equal");
} else {
  console.log("But they're not STRICTLY equal");
}

// New Stuff

function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
    return multiplier * x;
  };

  return myFunFunc;
}

var operation = makeMultiplier(10);
console.log(`10 in multiplier is:  ${operation(10)}`);

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
