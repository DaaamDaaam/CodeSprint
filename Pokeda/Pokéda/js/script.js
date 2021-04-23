function darkMode() {
    var body = document.getElementById("body");
    body.classList.toggle("dark-mode-body");
  
    var html = document.getElementById("html");
    html.classList.toggle("dark-mode-html");
  
    var header = document.getElementById("headerMenu");
    header.classList.toggle("dark-mode-header");
    
    var retour = document.getElementById("retour");
    retour.classList.toggle("dark-mode-retour");

  }