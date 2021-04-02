const btn = document.getElementById("btn");
const text = document.querySelector("#text");
const mouseEvent = document.querySelector(".mouse-event");
const x = document.querySelector(".horizontal");
const y = document.querySelector(".vertical");
const inputQuestion = document.querySelector("#question");
const reponseDisplay = document.querySelector(".reponse");

// CLICK
// event listener : 1er param : événement(scroll, keyup) / 2ème : action
btn.addEventListener("click", () => {
  text.classList.toggle("show");
});

// MOUSEMOVE
mouseEvent.addEventListener("mousemove", (event) => {
  x.innerHTML = event.x;
  y.innerHTML = event.y;
  mouseEvent.style.left = event.x + "px";
  mouseEvent.style.top = event.y + "px";
});

// INPUT EVENT
inputQuestion.addEventListener("input", (event) => {
  reponseDisplay.innerHTML = event.target.value;
});
