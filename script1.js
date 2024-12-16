function gerarCpf() {
			const quantidade = document.getElementById("gerarCpfQuantidade").value;
			let resultado = "";
			
			for (let i = 0; i < quantidade; i++) {
				// Gerar CPF
				const cpf = gerarCPF();
				resultado += `CPF: ${cpf}<br>`;			
				// Gerar PIS
				const pis = gerarPIS();
				resultado += `PIS: ${pis}<br><br>`;
			}
			document.getElementById("resultado").innerHTML = resultado;
		}
		function gerarCPF() {
    const cpfSemDigitos = gerarCPFBase();
    const primeiroDigito = calcularDigitoCPF(cpfSemDigitos);
    const segundoDigito = calcularDigitoCPF(cpfSemDigitos + primeiroDigito);
    return `${cpfSemDigitos}${primeiroDigito}${segundoDigito}`;
}
function gerarCPFBase() {
    let cpfSemDigitos = "";
    for (let i = 0; i < 9; i++) {
        cpfSemDigitos += Math.floor(Math.random() * 10);
    }
    return cpfSemDigitos;
}
function calcularDigitoCPF(cpf) {
    let soma = 0;
    for (let i = 0; i < cpf.length; i++) {
        soma += parseInt(cpf.charAt(i)) * (cpf.length + 1 - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}
function validateCpf(cpf) {
  // Remove all punctuation marks from the CPF code.
  cpf = cpf.replace(/\D/g, "");
    if (cpf === '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 || cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") {
        return false;
    }
    // Valida 1o digito
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    // Valida 2o digito
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
    return true;
}
function gerarPIS() {
    const pisSemDigitos = gerarPISBase();
    const digito = calcularDigitoPIS(pisSemDigitos);
    return `${pisSemDigitos}-${digito}`;
}
function gerarPISBase() {
    let pisSemDigitos = "";
    for (let i = 0; i < 10; i++) {
        pisSemDigitos += Math.floor(Math.random() * 10);
    }
    return pisSemDigitos;
}
function calcularDigitoPIS(pis) {
    const multiplicadores = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
    for (let i = 0; i < pis.length; i++) {
        soma += parseInt(pis.charAt(i)) * multiplicadores[i];
    }
   const resto = soma % 11;
const digito = 11 - resto;
return digito > 9 ? 0 : digito;
}
function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return false;
  }
  const cpfSemDigitos = cpf.slice(0, -2);
  const primeiroDigito = calcularDigitoCPF(cpfSemDigitos);
  const segundoDigito = calcularDigitoCPF(cpfSemDigitos + primeiroDigito);
  return cpf.slice(-2) === `${primeiroDigito}${segundoDigito}`;
}
function validarPIS(pis) {
  if (pis.length !== 11) {
    return false;
  }
  const pisSemDigitos = pis.slice(0, -1);
  const digito = calcularDigitoPIS(pisSemDigitos);
  return pis.slice(-1) === `${digito}`;
}
function validarCpfPis() {
  const cpfPis = document.getElementById("validarCpfPisInput").value;
  if (validarCPF(cpfPis)) {
    alert("CPF é válido!");
  } else {
    alert("CPF é inválido!");
  }
}