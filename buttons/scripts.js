function replaceFunction() {
  var textValue = document.getElementById("input").value;
  var textToChange = (document.getElementById(
    "changethis"
  ).innerText = textValue);
}

function addFunction() {
  var textValue = document.getElementById("input").value;
  var selectedColor = document.getElementById("color").value;
  var prevValue = document.getElementById("changethis").innerHTML;
  var textToChange = (document.getElementById("changethis").innerHTML =
    prevValue +
    '<div style="' +
    "color: " +
    selectedColor +
    '">' +
    textValue +
    "</div>");
}

function deleteFunction() {
  var textToChange = (document.getElementById("changethis").innerHTML = "");
}

function addColorFunction() {
  var selectedColor = document.getElementById("color").value;
  console.log(selectedColor);
  var textToChange = (document.getElementById("changethis").style =
    "color: " + selectedColor);
}
