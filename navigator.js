function showRoute() {
  let place = document.getElementById("location").value;
  let result = document.getElementById("result");

  if (place === "library") {
    result.innerText = "Go straight → Turn left";
  } else if (place === "canteen") {
    result.innerText = "Go right → Walk 50m";
  } else {
    result.innerText = "Select a location";
  }
}