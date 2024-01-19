function toggleMenu() {
  var menu = document.getElementById("menu");
  var toggleBtn = document.getElementById("toggle-btn");
  var exitBtn = document.getElementById("exit-btn");

  if (menu.style.display === "block") {
      menu.style.display = "none";
      toggleBtn.style.display = "block";
      exitBtn.style.display = "none";
  } else {
      menu.style.display = "block";
      toggleBtn.style.display = "none";
      exitBtn.style.display = "block";
  }
}