function loadWeather() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "5c954cdcd48eda7460ce808861e2b6c32", true);
    xhttp.send();
  }