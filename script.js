document.addEventListener("DOMContentLoaded", function () {
    const username = "admin"; // Benutzername
    const password = "admin"; // Passwort

    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;

        if (enteredUsername === username && enteredPassword === password) {
            // wenn alle informationen stimmen wird man weiter geleited zu protected.html
            window.location.href = "protected.html";
        } else {
            alert("Ungültiger Benutzername oder Passwort. Bitte erneut versuchen.");
        }
    });
});


// funktion für das burger menu wenn der bildschirm klein ist
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
});

var modal = document.getElementById("myModal");
    
var btn = document.getElementById("impressum-button");
    
var span = document.getElementsByClassName("close")[0];
     
btn.onclick = function() {
    modal.style.display = "block";
}
    
span.onclick = function() {
    modal.style.display = "none";
}



// uhr
var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

// zeiger
for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

// uhr und ihre funktionsweise
function clock() {
    var weekday = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

// aktualisierungsrate der uhr
setInterval("clock()", 100);

function suche() {
  var suchbegriff = document.getElementById("suchbegriff").value.toLowerCase(); // bei der suche sind gross und klein Buchstaben irrelevant

  // suchlogik (für ein inteligentes suchsystem fehlt die zeit)
  if (
    suchbegriff === "about me" ||
    suchbegriff === "über mich" ||
    suchbegriff === "meine geschichte" ||
    suchbegriff === "abuot me" ||
    suchbegriff === "abut me"
  ) {
    window.location.href = "about_me.html";
  } else if (
    suchbegriff === "projekte" ||
    suchbegriff === "meine arbeiten" ||
    suchbegriff === "projekts" ||
    suchbegriff === "projekct"
  ) {
    window.location.href = "projekte.html";
  } else if (
    suchbegriff === "privater bereich" ||
    suchbegriff === "private area" ||
    suchbegriff === "login" ||
    suchbegriff === "logn" ||
    suchbegriff === "private bereich"
  ) {
    window.location.href = "login.html";
  } else if (
    suchbegriff === "kontakt" ||
    suchbegriff === "kontact" ||
    suchbegriff === "kontkt" ||
    suchbegriff === "kotakt" ||
    suchbegriff === "kontackt"
  ) {
    window.location.href = "kontakt.html";
  } else {
    document.getElementById("suchergebnisse").innerHTML = "Keine Übereinstimmung gefunden.";
  }
}
