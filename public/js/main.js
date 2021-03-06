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
form.addEventListener("submit", savedata);

var arrCitys = new Array();
var arrNames = new Array();
var arrAges = new Array();

function savedata() {
  const url = "/travel/api/country";
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  })
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  var name = document.getElementById("name").value;
  var city = document.getElementById("food").value;
  var age = document.getElementById("citySight").value;
  arrCitys[arrCitys.length] = city;
  arrNames[arrNames.length] = name;
  arrAges[arrAges.length] = age;
}
