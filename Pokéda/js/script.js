function darkMode() {
    var body = document.getElementById("body");
    body.classList.toggle("dark-mode-body");
  
    var html = document.getElementById("html");
    html.classList.toggle("dark-mode-html");
  
    var retour = document.getElementById("retour");
    retour.classList.toggle("dark-mode-retour");

    var setButton = document.getElementById("setBtn");
    setButton.classList.toggle("dark-mode-setButton");
  }