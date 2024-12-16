 function gerarMatricula() {
      var matricula = "";
      var digitos = "0123456789";

      for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * digitos.length);
        matricula += digitos.charAt(randomIndex);
      }
      return matricula;
    }
    function exibirMatricula() {
      var numeroMatricula = gerarMatricula();
      document.getElementById("matricula").textContent = numeroMatricula;
    }