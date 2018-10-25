var guess = 10;
var sumletter = "";

function takeWord() {

    var x = document.getElementById("wordtoguess");
    var word = "";
    var i;
    for (i = 0; i < x.length; i++) {
        word = word + x.elements[i].value;
    }
    localStorage.setItem("word", word);
    document.getElementById("typedword").innerHTML = localStorage.getItem("word");
}
function takeLetter() {
    var x = document.getElementById("lettertoguess");
    var letter = "";
    var i;
        for (i = 0; i < x.length; i++) {
            letter = letter + x.elements[i].value;
        }
        if(letter.length==1){
          sumletter = sumletter + letter;
          localStorage.setItem("sumletter", sumletter);
          console.log(sumletter);
          document.getElementById("typedletter").innerHTML = localStorage.getItem("sumletter");
        }else{
          guess++;
          alert("Type only one letter -.-");
        }
}
function letterCheck(){
  var y = localStorage.getItem("word");
  var z = localStorage.getItem("letter");
  var licz = 0;

  for (i = 0; i < y.length; i++) {
    if((y.charAt(i))==(z.charAt(0))){
      console.log("masz literke!" + (i+1));
      licz++;
    }
  }
  if(licz==0){console.log("pudło!");}
}

function guessCount(){
  guess = guess - 1;
  if(guess<=0){console.log("game over")}
  else {
    console.log(guess);
  }
}
