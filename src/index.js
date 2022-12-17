//import "./style.css";

function create() {
  const div = document.createElement("div");
  div.textContent = "hello";
  div.classList.add("display");
  return div;
}
document.body.appendChild(create());
