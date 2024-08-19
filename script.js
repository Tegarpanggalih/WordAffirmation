function nonTo() {
  document.getElementById("tombo").style.display = "none";
}
function showTo() {
  document.getElementById("tombo").style.display = "block";
}
function nonFo() {
  document.getElementById("idfoto").style.display = "none";
}
function showFo() {
  document.getElementById("idfoto").style.display = "block";
}
function nonDiv() {
  document.getElementById("Content").style.display = "none";
}
function showDiv() {
  document.getElementById("Content").style.display = "block";
}
function iloveu() {
  if (u == text2.length) {
    document.getElementById("sp1").style.display = "none";
    document.getElementById("sp2").style.display = "block";
  }
}
function fotoKt() {
  document.getElementById("ftKm").style.opacity = "0";
  document.getElementById("ftAk").style.opacity = "1";
}

var i = 0,
  text;
text = "";
var u = 0,
  text2;
text2 = "";
var o = 0,
  text3;
text3 = "...                                 ";

function ketik() {
  let i = 0;
  let text = "Lamun aya masalah bebeja ka urang " + String.fromCodePoint(0x1F496);
  document.getElementById("text").innerHTML = "";

  function type() {
    if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      ketikk(); 
    }
  }
  type();
}

function ketikk() {
  let u = 0;
  let text2 = "Jaga diri baik-baik... Jangan sedih terus, tetap semangat ya "+ String.fromCodePoint(0x1F525);
  document.getElementById("text2").innerHTML = "";

  function type() {
    if (u < text2.length) {
      document.getElementById("text2").innerHTML += text2.charAt(u);
      u++;
      setTimeout(type, 200);
    } else {
      siap(); 
    }
  }
  type();
}

function siap() {
  let o = 0;
  let text3 = "Jangan makan pedes";
  document.getElementById("text3").innerHTML = "";

  function type() {
    if (o < text3.length) {
      document.getElementById("text3").innerHTML += text3.charAt(o);
      o++;
      setTimeout(type, 80);
    }
  }
  type();
}

function showDiv() {
  document.getElementById("Content").style.display = "block";
}
