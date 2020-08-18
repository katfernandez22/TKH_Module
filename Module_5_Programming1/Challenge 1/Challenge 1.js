https://codepen.io/katherine-fernandez/pen/QWNEmVL

let fullNames = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs",
"Michael Jordan", "Patrick Ewing"];

let firstNames = [];

let lastNames = [];

for(let i = 0; i<fullNames.length; i++){
  let array = fullNames[i].split(" ");
  let first = array[0];
  let last = array[1];
  firstNames.push(first);
  lastNames.push(last);
}
console.log(firstNames);
console.log(lastNames);
