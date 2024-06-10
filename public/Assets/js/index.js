const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var app = document.querySelector(".typeWriting");

var typewriter = new Typewriter(app, {
  loop: true,
  strings: ["The Designer", "The Develoer", "Freelancer"],
  autoStart: true,
  delay: 50,
  deleteSpeed: 50,
  pauseFor: 1000,
  loopCount: Infinity,
  cursor: "|",
});

let menu = document.querySelector(".menuBar");
let icon = document.querySelector(".material-symbols-outlined");
let movMenu = document.querySelector(".moheader");
menu.addEventListener("click", () => {
  icon.innerText == "menu_open"
    ? (icon.innerText = "close")
    : (icon.innerText = "menu_open");

  if (icon.innerText == "close") {
    movMenu.style.display = "block";
  } else {
    movMenu.style.display = "none";
  }
});

function weatherGit() {
  location.href = "https://github.com/SaradBhatta12/Animated-Weather-App";
}

function todoGit() {
  location.href = "https://github.com/SaradBhatta12/Full-Stack-ToDo-app";
}

const Projects = document.getElementById("Projects");
const yourCard = {
  weather: {
    title: "Full-Stack Weather App",
    desc: "Implemented dynamic weather animations using Framer Motion, integrated React Icons for a polished UI, utilized Axios for efficient data fetching from FreeWeather API, and optimized state management. Crafted a seamless ReactJS Weather Search App, delivering a visually stunning and user-friendly",
    imgurl:
      "https://cdn-images-1.medium.com/max/1101/1*z-QVV-B7C10P6TsfTWL6Fg.png",
  },
  todo: {
    title: "Full-Stack Todo App",
    desc: "Discover a powerful Full-Stack Todo App using Node.js, Express, and EJS. This open-source project offers a seamless task management experience with efficient back-end processing and dynamic front-end rendering. Enhance your productivity and organization",
    imgurl: "/Assets/image/weatherapp (1).jpg",
  },
  blog: {
    title: "Full-Stack Blog App",
    desc: "This Blog app is a full-stack app on Next.js, enabling easy sharing of daily life anecdotes, activities, and musings. Seamlessly create, edit, and delete posts for a hassle-free blogging experience. Join me in sharing experiences and reflections!",
    imgurl: "/Assets/image/blog.png",
  },
};

const cards = Object.entries(yourCard);
cards.forEach((item) => {
  Projects.innerHTML += ` 
  <div class="card">
<img src="${item[1].imgurl}" alt="todoapp">
<h3>${item[1].title}</h3>
<p class="desc">${item[1].desc}</p>
<div class="buttons">
   <button onclick="weatherGit()">code</button>
   <button>live</button>
</div>
</div>`;
});

function openresume() {
  location.href = "/Assets/image/SARAD.pdf";
}
