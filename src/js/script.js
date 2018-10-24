var guess = 10;

function takeWord() {

    var x = document.getElementById("wordtoguess");
    var word = "";
    var i;
    for (i = 0; i < x.length; i++) {
        word = word + x.elements[i].value;
    }
    //console.log(txt);
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
    localStorage.setItem("letter", letter);
    document.getElementById("typedletter").innerHTML = localStorage.getItem("letter");
}


function guessCount(){
  guess = guess - 1;
  if(guess<=0){console.log("game over")}
  else {
    console.log(guess);

  }
}

function letterCheck(){

}
