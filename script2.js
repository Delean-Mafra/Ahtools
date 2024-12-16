		function validarPIS() {
			const pis = document.getElementById("pis").value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

			if (pis.length !== 11 || pis.match(/^(.)\1+$/)) { // Verifica se o PIS tem 11 dígitos e não é uma sequência repetida
				mostrarMensagem("PIS inválido");
				return;
			}
function limparPontuacao() {
  const input = document.getElementById("validarCpfPisInput");
  const cpf = input.value.replace(/\D/g, "");
  input.value = cpf;
}

			let soma = 0;
			let peso = 3;

			for (let i = 0; i < 10; i++) {
				soma += pis.charAt(i) * peso;
				peso--;
				if (peso < 2) peso = 9;
			}
			const digitoVerificador = 11 - (soma % 11);
			if (digitoVerificador === 10 || digitoVerificador === 11) { // Se o dígito verificador calculado for 10 ou 11, o dígito verificador válido é 0
				if (pis.charAt(10) == 0) {
					mostrarMensagem("PIS válido");
				} else {
					mostrarMensagem("PIS inválido");
				}
			} else { // Caso contrário, o dígito verificador válido é igual ao dígito calculado
				if (pis.charAt(10) == digitoVerificador) {
					mostrarMensagem("PIS válido");
				} else {
					mostrarMensagem("PIS inválido");
				}
			}
		}
		function mostrarMensagem(mensagem) {
			alert(mensagem);
		}