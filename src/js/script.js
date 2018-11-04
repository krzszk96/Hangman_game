var guess = 10; // ta zmienna nie zmienia wartości
var sumletter = "";
var licz = 0;
var field = [];

function guessCount(){ // tan funckja tez nie działa

  if(guess==1){console.log("game over")}
  else {
    if(licz==2){guess--;}
    console.log("zostalo prob-"+guess);
  }
}
function takeWord() {

    var x = document.getElementById("wordtoguess");
    var word = "";
    var i;
    for (i = 0; i < x.length; i++) {
        word = word + x.elements[i].value;
    }
    localStorage.setItem("word", word);
    //document.getElementById("typedword").innerHTML = localStorage.getItem("word");
}
function takeLetter() {
    var x = document.getElementById("lettertoguess");
    var letter = "";
    var i;
        for (i = 0; i < x.length; i++) {
            letter = letter + x.elements[i].value;
        }
        if(letter.length==1){
          sumletter = sumletter + letter + " - ";
          localStorage.setItem("letter", letter);
          localStorage.setItem("sumletter", sumletter);
          document.getElementById("typedletter").innerHTML = localStorage.getItem("sumletter");
        }else{
          guess++;
          alert("Type only one letter -.-");
        }
}
function letterCheck(){
  var y = localStorage.getItem("word");
  var z = localStorage.getItem("letter");
  var howbig = y.length;

  //console.log(licz+"licznik");
  if(licz==0){
    for(j=0;j<howbig;j++){
      field.splice( j, 0, "__" );
    }
  }
  licz=2;
  for (i = 0; i < y.length; i++) {

    if((y.charAt(i))==(z.charAt(0))){
        field.splice( i, 1, z );
        licz=1;
        //console.log(licz + "licznik");
        //guess++;
    }

  }
  guessCount();
  //if(licz==0){console.log("pudło!");}

  localStorage.setItem("field", JSON.stringify(field));
  var storedfield = JSON.parse(localStorage.getItem("field"));
  document.getElementById("display").innerHTML = localStorage.getItem("field");
}
