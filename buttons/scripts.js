function replaceFunction() {
  var textValue = document.getElementById("input").value;
  var textToChange = (document.getElementById(
    "changethis"
  ).innerText = textValue);
}

function addFunction() {
  var textValue = document.getElementById("input").value;
  var prevValue = document.getElementById("changethis").innerHTML;
  var textToChange = (document.getElementById("changethis").innerHTML =
    prevValue + "<div>" + textValue + "</div>");
}

function deleteFunction() {
  var textToChange = (document.getElementById("changethis").innerHTML = "");
}
