const welcome = document.querySelector("#welcomeMessage");
const name = localStorage.getItem("name");

if (name) {
  welcome.textContent = `Bienvenue ${name}`;
}

const form = document.querySelector("#nameForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  welcome.textContent = `Bienvenue ${event.target[0].value}`;

  localStorage.setItem("name", event.target[0].value);
});
