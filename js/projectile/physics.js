var xy = 1;
var act = 0;

function Input(){
  var ang = parseFloat(prompt("What is the angle of launch\nInput in degrees only")); 
  var v = parseFloat(prompt("What is the inital velocity of the projectile\nInput in m/s"));
  var c = parseFloat(prompt("What is the inital height the projectile is thrown from\nInput in metres")); 

  var g = 9.81; //Here the code sets acceleration due to gravity to 9.81
  var vy = v * Math.sin(ToRad(ang)); //Calculates the vertical velocity component
  var vx = v * Math.cos(ToRad(ang)); //Calculates the horizontal velocity component
  var tof = (vy + Math.sqrt(vy * vy + 2 * g * c)) / g; //time of flight
  var k = c + ((vy * vy) / (2 * g)); //maximum height (k)
  var tt = (vy / g); //reaches maximum height at this time
  var h = vx * tt; //max height at x value
  var a = (c - k) / (h * h); 
  var s = Math.sqrt(-k / a) + h; 

  //this does the "carrying down" and filling of the list. each time this function is run. xy will increment by 1. "v" + xy will return as v1 which corresponds to the id of the next graph.
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

  document.getElementById("eqc" + xy).innerHTML = `y=${a}(x-${h})^2+${k}`;
  xy++;
}

function ToRad(ang) {
  return ang * (Math.PI / 180);
}

function removeCalculator() {
  const nodeList = document.querySelectorAll(".dcg-wrapper");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].remove();
  }
  document.getElementById("calculator").style.display = "none";
}

function generateGraph() {
  if (act == 0) {
    document.getElementById("calculator").style.display = "block"; 
    var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt);

    for(let xy = 1; xy < 21; xy++) {
      calculator.setExpression({id: `graph${xy}`, latex: document.getElementById(`eqc${xy}`).textContent});
    }
    act++;
  } else {
    removeCalculator();
    act--;
    generateGraph();
  }
}