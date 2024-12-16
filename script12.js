function getIP() {
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        document.getElementById("ip").textContent = data.ip;
      })
      .catch(error => {
        console.log(error);
      });
  }

  window.onload = function() {
    document.getElementById("ip").innerHTML = "Seu número de IP é: " + returnCitySN["cip"];
  }