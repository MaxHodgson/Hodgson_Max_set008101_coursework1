var morse = {
  a: ". ___",
  b: "___ . . .",
  c: "___ . ___ .",
  d: "___ . .",
  e: ".",
  f: ". . ___ .",
  g: "___ ___ .",
  h: ". . . .",
  i: ". .",
  j: ". ___ ___ ___ ___",
  k: "___ . ___",
  l: ". ___ . .",
  m: "___ ___",
  n: "___ .",
  o: "___ ___ ___",
  p: ". ___ ___ .",
  q: "___ ___ . ___",
  r: ". ___ .",
  s: ". . .",
  t: "___",
  u: ". . ___",
  v: ". . . ___",
  w: ". ___ ___",
  x: "___ . . ___",
  y: "___ . ___ ___",
  z: "___ ___ . .",
  1: ". ___ ___ ___",
  2: ". . ___ ___ ___",
  3: ". . . ___ ___",
  4: ". . . . ___",
  5: ". . . . .",
  6: "___ . . . .",
  7: "___ ___ . . .",
  8: "___ ___ ___ . .",
  9: "___ ___ ___ ___ .",
  0: "___ ___ ___ ___ ___",
  " ": "/"
};

var inp = document.getElementById("inputMorse");
var butt = document.getElementById("buttonMorse");
var out = document.getElementById("outputMorse");

butt.addEventListener("click", function() {
  var conv = inp.value;
  conv = conv.toLowerCase();
  conv = conv.split("");
  for (var i = 0; i < conv.length; i++) {
    conv[i] = morse[conv[i]];
  }
  conv = conv.join(" ");
  console.log(conv);
  out.innerHTML = conv;
});