    function gerarData() {
      var data = new Date();
      var anoAtual = data.getFullYear();
      var anoAleatorio = Math.floor(Math.random() * (anoAtual - 1950) + 1950); // Gera um ano entre 1950 e o ano atual

      while (anoAleatorio === 2023) {
        anoAleatorio = Math.floor(Math.random() * (anoAtual - 1950) + 1950);
      }
      var mesAleatorio = Math.floor(Math.random() * 12) + 1; // Gera um número de 1 a 12 para representar o mês
      var diaAleatorio = Math.floor(Math.random() * 31) + 1; // Gera um número de 1 a 31 para representar o dia
      var dataGerada = new Date(anoAleatorio, mesAleatorio - 1, diaAleatorio);
      document.getElementById("dataGerada").textContent = dataGerada.toLocaleDateString();
    }