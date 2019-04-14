function show() {
  document.getElementById("switch").style.width = "33.33%";
  document.body.style.backgroundColor = "hsl(0, 0%, 12%)";
  document.getElementById("invisible").style.visibility = "hidden";
}

function hide() {
  document.getElementById("switch").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("invisible").style.visibility = "visible";
}