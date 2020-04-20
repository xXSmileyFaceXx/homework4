window.onload = function() {

document.addEventListener('keyup', logKey);
var thing = document.getElementById('emoji');
var size = 30;

function logKey(e) {
  if (e.code === "KeyI" && size === 60){
    thing.innerHTML = "💥"
    document.removeEventListener('keyup', logKey);
  }
  else if(e.code === "KeyD" &&  size === 10) {
    thing.innerHTML = "Done"
    document.removeEventListener('keyup', logKey);
  }
  else if (e.code === "KeyI"){
    size = size + 10;
    thing.style.fontSize = size + "px";
}
  else if(e.code === "KeyD")
  {
    size = size - 10;
    thing.style.fontSize = size + "px";
  }
}
}