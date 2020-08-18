https://codepen.io/katherine-fernandez/pen/oNxLqPp

var quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whet Whether cruising in a Sikhs cab, or Montero Jeep I cant call it, the beats make me falling asleep I keep falling, but never falling six feet deep Im out for presidents to represent me, Im out for presidents to represent me, Im out for dead presidents to represent me,";
var string = quote.split("");
var result = "";

for(let i = 0; i<string.length; i++){

if(string[i] == 's' || string[i] == "S"){
  result = result.concat('$');

}else{
    result = result.concat(string[i]);
}
}

console.log(result)
