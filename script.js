const circle = document.querySelector(".circle-1");

const colors = ["red", "green", "blue", "yellow"];
let i = 0;
let intervall = setInterval(() => {
  circle.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}, 2000);
let loopRun=true;
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  const key = event.key;
  let currentColor;

  if (i - 1 < 0) {
    currentColor = colors[colors.length - 1];
  } else {
    currentColor = colors[i - 1];
  }
  if (currentColor.charAt(0).toLowerCase() == key.toLowerCase()) {
    clearInterval(intervall);
    loopRun=false;
    
  }
  if (event.key == " " && !loopRun) {
      intervall = setInterval(() => {
        circle.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
        console.log(`no`+ i)
      }, 2000);
      loopRun=true;
    }

});
