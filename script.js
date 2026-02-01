function startConfession() {
  document.getElementById("introMusic").play();
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
}

function yesClicked() {
  document.getElementById("introMusic").pause();
  document.getElementById("yesMusic").play();

  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
}