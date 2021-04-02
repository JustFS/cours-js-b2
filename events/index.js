const btn = document.getElementById("btn");
const text = document.querySelector("#text");
const mouseEvent = document.querySelector(".mouse-event");
const x = document.querySelector(".horizontal");
const y = document.querySelector(".vertical");
const inputQuestion = document.querySelector("#question");
const reponseDisplay = document.querySelector(".reponse");
const themeButtons = document.querySelectorAll(".theme");

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

  if (event.x < 200) {
    document.body.style.filter = "blur(2px)";
  } else {
    document.body.style.filter = "none";
  }
});

// INPUT EVENT
inputQuestion.addEventListener("input", (event) => {
  reponseDisplay.innerHTML = event.target.value;
});

// SWITCH
themeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.id);

    document.body.classList.remove("dark-theme", "salmon-theme", "teal-theme");

    switch (event.target.id) {
      case "dark":
        document.body.classList.add("dark-theme");
        break;
      case "salmon":
        document.body.classList.add("salmon-theme");
        break;
      case "teal":
        document.body.classList.add("teal-theme");
        break;

      // toujours finir le switch par un default case
      default:
        null;
    }
  });
});
