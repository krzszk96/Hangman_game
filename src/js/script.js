var guess = 10;
var sumletter = "";
var licz = 0;
var field = [];

function guessCount(){
  if(guess==1){alert("GAME OVER"); location.reload();}
  else {
    if(licz==2){guess--;}
    //console.log("zostalo prob -" + guess);
    document.getElementById("guess").innerHTML = guess;
  }
}

function takeWord() {
    var x = document.getElementById("wordtoguess");
    var word = "";
    var i;
    for (i = 0; i < x.length; i++) {
        word = word + x.elements[i].value;
        word = word.toLowerCase();
    }
    localStorage.setItem("word", word);
    document.getElementById("wordtoguess1").value='';
}
function checkWin(){
    var h = localStorage.getItem("word");
    var test = 0;

    for (i = 0; i < h.length; i++) {

      if((field[i])=='__'){
            test=1;
      }
    }
    if(test==0){alert("CONGRATULATIONS, YOU WON!!!!"); location.reload();}
}
function takeLetter() {
    var x = document.getElementById("lettertoguess");
    var letter = "";
    var i;
        for (i = 0; i < x.length; i++) {
            letter = letter + x.elements[i].value;
            letter = letter.toLowerCase();
        }

        if(letter.length==1){
          sumletter = sumletter + letter + " - ";
          localStorage.setItem("letter", letter);
          localStorage.setItem("sumletter", sumletter);
          document.getElementById("typedletter").innerHTML = localStorage.getItem("sumletter");
        }else{
          alert("Type only one letter -.-");
        }
        document.getElementById("lettertoguess1").value='';
}
function letterCheck(){
  var y = localStorage.getItem("word");
  var z = localStorage.getItem("letter");
  var howbig = y.length;

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
    }
  }
  guessCount();
  checkWin();

  localStorage.setItem("field", JSON.stringify(field));
  var storedfield = JSON.parse(localStorage.getItem("field"));
  document.getElementById("display").innerHTML = localStorage.getItem("field");
}
