const body = document.querySelector("body");
const colors = ["pink", "purple", "lightblue", "lightgreen"];
let colorIndex = 0;

setInterval(() => {
  body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 2000);

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * (window.innerWidth - 256) + "px"; //generuje pozycję serca w taki sposób, aby nie wychodziło poza ekran.
    heart.style.animationDelay = Math.random() + "s";
    heartContainer.appendChild(heart);
    hearts.push(heart);
  }
  
  
  setInterval(createHeart, 4000);

  const heartContainer = document.getElementById("heart-container");
const hearts = [];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDelay = Math.random() + "s";
  heartContainer.appendChild(heart);
  hearts.push(heart);
}

setInterval(() => {
  createHeart();

  for (let i = 0; i < hearts.length; i++) {
    if (hearts[i].getBoundingClientRect().bottom < 0) {
      heartContainer.removeChild(hearts[i]);
      hearts.splice(i, 1);
      i--;
    }
  }
}, 10000);


  