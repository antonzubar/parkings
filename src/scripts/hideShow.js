/**
 * Created by Anton.Zubar on 4/19/2019.
 */
function hideShow() {
  var x = document.getElementById("checkbox-holder");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  var y = document.getElementById("form-icon");
  if (y.style.transform === "") {
    y.style.transform = "rotate(180deg)";
  } else {
    y.style.transform = "";
  }
}