const inner = document.querySelector(".inner");

let count = 1;

document.getElementById("radio1").checked = true;
setInterval(function () {
  inners();
}, 0);
function inners() {
  const checked = document.getElementById("radio1").checked;
  if (checked) {
    inner.textContent = "ngc 18";
  }
  const checked2 = document.getElementById("radio2").checked;
  if (checked2) {
    inner.textContent = "nuvem molecular";
  }
  const checked3 = document.getElementById("radio3").checked;
  if (checked3) {
    inner.textContent = "penhascos cósmicos";
  }
}
setInterval(function () {
  nextImage();
}, 7000);

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
