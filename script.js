let lines = ["I", "am", "Ashish", "Welcome", "To", "My", "PortFolio"];
let count = 0;

setInterval(changeTagline, 700);

let str = "";
function changeTagline() {
  str += lines[count];
  str += " ";
  document.getElementById("about").innerHTML = str;
  if (count < lines.length) {
    count += 1;
  }
  if (count == lines.length) {
    //clearInterval(run);
    str = "";
    count = 0;
  }
}
