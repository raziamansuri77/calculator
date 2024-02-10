let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
let darkBtn = document.querySelector(".dark");
let lightBtn = document.querySelector(".light");
darkBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
});
lightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
});
