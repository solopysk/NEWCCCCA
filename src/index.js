function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  var kone = eval(vyraz);

  document.getElementById("vysledek").innerHTML = "Vgysledek je: " + kone;
}

var input = document.getElementById("vyraz");
input.addEventListener("keyUp", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    solveExpression();
  }
});
