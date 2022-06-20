document.querySelector("h2").innerHTML = "hi from js";

function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  formJSON.city = data.getAll("city");
  const food = document.querySelector("#food").value;
  food.split(",");

  //   const results = document.querySelector(".results pre");
  JSON.stringify(food);
}

const form = document.querySelector(".trvel-form");
form.addEventListener("submit", handleFormSubmit);
