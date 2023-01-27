var xy = 1;
var act = 0;
//initialises xy at the start.

function Input(){
  var ang = parseFloat(prompt("What is the angle of launch\nInput in degrees only")); 
  var v = parseFloat(prompt("What is the inital velocity of the projectile\nInput in m/s"));
  var c = parseFloat(prompt("What is the inital height the projectile is thrown from\nInput in metres")); 
  
  if(isNaN(ang) || isNaN(v) || isNaN(c)) {
    location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }

  var g = 10; //Here the code sets acceleration due to gravity to 10, but it can be changed to 9.81
  var vy = v * Math.sin(ToRad(ang)); //Calculates the vertical velocity component
  var vx = v * Math.cos(ToRad(ang)); //Calculates the horizontal velocity component
  var tof = (vy + Math.sqrt(vy * vy + 2 * g * c)) / g; //time of flight
  var k = c + ((vy * vy) / (2 * g)); //maximum height (k)
  var ss = Math.pow(s, 2);
  var tt = (vy / g); //reaches maximum height at this time
  var h = vx * tt; //max height at x value
  var a = (c - k) / (h * h); 
  var s = Math.sqrt(-k / a) + h; 

  //e.g; this does the "carrying down" and filling of the list. each time this function is run 
  //xy will increment by 1. "v" + xy will return as v1 which corresponds to the id of the next graph.
  document.getElementById("v" + xy).innerHTML = v;
  document.getElementById("ang" + xy).innerHTML = ang;
  document.getElementById("c" + xy).innerHTML = c;
  document.getElementById("vx" + xy).innerHTML = vx;
  document.getElementById("vy" + xy).innerHTML = vy;
  document.getElementById("tof" + xy).innerHTML = tof;
  document.getElementById("s" + xy).innerHTML = s; 
  document.getElementById("k" + xy).innerHTML = k;
  document.getElementById("tt" + xy).innerHTML = tt;
  document.getElementById("h" + xy).innerHTML = h;

  switch(xy) {
    case 1:
      document.getElementById("eqc1").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 2:
      document.getElementById("eqc2").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 3:
      document.getElementById("eqc3").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 4:
      document.getElementById("eqc4").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 5:
      document.getElementById("eqc5").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 6:
      document.getElementById("eqc6").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 7:
      document.getElementById("eqc7").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 8:
      document.getElementById("eqc8").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 9:
      document.getElementById("eqc9").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 10:
      document.getElementById("eqc10").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 11:
      document.getElementById("eqc11").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 12:
      document.getElementById("eqc12").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 13:
      document.getElementById("eqc13").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 14:
      document.getElementById("eqc14").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 15:
      document.getElementById("eqc15").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 16:
      document.getElementById("eqc16").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 17:
      document.getElementById("eqc17").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
    case 18:
      document.getElementById("eqc18").innerHTML = "y=" + a + "(x-" + h + ")^2+" + k;
      break;
  }
  xy++;
}

function ToRad (ang) {
  return ang * (Math.PI / 180);
}

function generateGraph() {
  var response = prompt("WARNING:\nYOU CAN ONLY ACTIVATE THIS GRAPH GENERATOR ONCE PER WEB PAGE LOAD\nENSURE YOU HAVE ALL THE RELEVANT GRAPHS LOADED BEFORE PROCEEDING\nIF YOU WISH TO PROCEED TYPE 1 AND PRESS ENTER OTHERWISE PRESS CANCEL")
  if (response == 1 && act != 1) {
    var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt);

    var gr1 = document.getElementById("eqc1").textContent;
    var gr2 = document.getElementById("eqc2").textContent;
    var gr3 = document.getElementById("eqc3").textContent;
    var gr4 = document.getElementById("eqc4").textContent;
    var gr5 = document.getElementById("eqc5").textContent;
    var gr6 = document.getElementById("eqc6").textContent;
    var gr7 = document.getElementById("eqc7").textContent;
    var gr8 = document.getElementById("eqc8").textContent;
    var gr9 = document.getElementById("eqc9").textContent;
    var gr10 = document.getElementById("eqc10").textContent;
    var gr11 = document.getElementById("eqc11").textContent;
    var gr12 = document.getElementById("eqc12").textContent;
    var gr13 = document.getElementById("eqc13").textContent;
    var gr14 = document.getElementById("eqc14").textContent;
    var gr15 = document.getElementById("eqc15").textContent;
    var gr16 = document.getElementById("eqc16").textContent;
    var gr17 = document.getElementById("eqc17").textContent;
    var gr18 = document.getElementById("eqc18").textContent;

    calculator.setExpression({id: 'graph1', latex: gr1});
    calculator.setExpression({id: 'graph2', latex: gr2});
    calculator.setExpression({id: 'graph3', latex: gr3});
    calculator.setExpression({id: 'graph4', latex: gr4});
    calculator.setExpression({id: 'graph5', latex: gr5});
    calculator.setExpression({id: 'graph6', latex: gr6});
    calculator.setExpression({id: 'graph7', latex: gr7});
    calculator.setExpression({id: 'graph8', latex: gr8});
    calculator.setExpression({id: 'graph9', latex: gr9});
    calculator.setExpression({id: 'graph10', latex: gr10});
    calculator.setExpression({id: 'graph11', latex: gr11});
    calculator.setExpression({id: 'graph12', latex: gr12});
    calculator.setExpression({id: 'graph13', latex: gr13});
    calculator.setExpression({id: 'graph14', latex: gr14});
    calculator.setExpression({id: 'graph15', latex: gr15});
    calculator.setExpression({id: 'graph16', latex: gr16});
    calculator.setExpression({id: 'graph17', latex: gr17});
    calculator.setExpression({id: 'graph18', latex: gr18});
    act++;
  } else {
    alert("The graph generation has been cancelled. Feel free to add more graphs.")
  }
}
