function formatarHora(input) {
    const valor = input.value;
    const padrao = /^([0-9]{0,2})([0-9]{0,2})$/;
    const match = valor.match(padrao);

    if (match) {
      const hora = match[1] || "00";
      const minuto = match[2] || "00";

      input.value = `${hora.padStart(2, "0")}:${minuto.padStart(2, "0")}`;
    } else {
      input.value = "";
    }
  }

  function calcularDiferencaDeTempo(entrada, intervalo, retornoIntervalo, fimExpediente) {
    // Extrai as horas e minutos das strings de tempo
    const entradaSplit = entrada.split(":");
    const intervaloSplit = intervalo.split(":");
    const retornoIntervaloSplit = retornoIntervalo.split(":");
    const fimExpedienteSplit = fimExpediente.split(":");

    // Converte as horas e minutos para números inteiros
    const entradaHora = parseInt(entradaSplit[0], 10);
    const entradaMinuto = parseInt(entradaSplit[1], 10);
    const intervaloHora = parseInt(intervaloSplit[0], 10);
    const intervaloMinuto = parseInt(intervaloSplit[1], 10);
    const retornoHora = parseInt(retornoIntervaloSplit[0], 10);
    const retornoMinuto = parseInt(retornoIntervaloSplit[1], 10);
    const fimHora = parseInt(fimExpedienteSplit[0], 10);
    const fimMinuto = parseInt(fimExpedienteSplit[1], 10);

    // Calcula a diferença de tempo em minutos
    const diferencaMinutos =
      ((intervaloHora * 60 + intervaloMinuto) - (entradaHora * 60 + entradaMinuto)) +
      ((fimHora * 60 + fimMinuto) - (retornoHora * 60 + retornoMinuto));

    // Calcula a diferença de tempo em horas e minutos
    const diferencaHora = Math.floor(diferencaMinutos / 60);
    const diferencaMinutosRestantes = diferencaMinutos % 60;

    // Formata a diferença de tempo como uma string "HH:MM"
    const diferencaFormatada = `${diferencaHora.toString().padStart(2, "0")}:${diferencaMinutosRestantes
      .toString()
      .padStart(2, "0")}`;

    return diferencaFormatada;
  }
function calcular() {
  const entrada = document.getElementById("entrada").value;
  const intervalo = document.getElementById("intervalo").value;
  const retornoIntervalo = document.getElementById("retornoIntervalo").value;
  const fimExpediente = document.getElementById("fimExpediente").value;

  const horasEntrada = Number(entrada.split(":")[0]);
  const minutosEntrada = Number(entrada.split(":")[1]);
  const horasIntervalo = Number(intervalo.split(":")[0]);
  const minutosIntervalo = Number(intervalo.split(":")[1]);
  const horasRetornoIntervalo = Number(retornoIntervalo.split(":")[0]);
  const minutosRetornoIntervalo = Number(retornoIntervalo.split(":")[1]);
  const horasFimExpediente = Number(fimExpediente.split(":")[0]);
  const minutosFimExpediente = Number(fimExpediente.split(":")[1]);

  let totalHoras = 0;
  let totalMinutos = 0;

  if (horasEntrada > horasFimExpediente || (horasEntrada === horasFimExpediente && minutosEntrada > minutosFimExpediente)) {
    totalHoras += 24 - horasEntrada + horasFimExpediente;
    totalMinutos += minutosFimExpediente - minutosEntrada;
  } else {
    totalHoras += horasFimExpediente - horasEntrada;
    totalMinutos += minutosFimExpediente - minutosEntrada;
  }

  if (horasIntervalo > horasRetornoIntervalo || (horasIntervalo === horasRetornoIntervalo && minutosIntervalo > minutosRetornoIntervalo)) {
    totalHoras -= 24 - horasIntervalo + horasRetornoIntervalo;
    totalMinutos -= minutosRetornoIntervalo - minutosIntervalo;
  } else {
    totalHoras -= horasRetornoIntervalo - horasIntervalo;
    totalMinutos -= minutosRetornoIntervalo - minutosIntervalo;
  }

  if (totalMinutos < 0) {
    totalMinutos += 60;
    totalHoras--;
  }

  const totalFormatado = `${totalHoras.toString().padStart(2, "0")}:${totalMinutos.toString().padStart(2, "0")}`;

  document.getElementById("resultado").innerText = totalFormatado;
}

function formatarHora(hora) {
  if (hora.length === 4) {
    return hora.slice(0, 2) + ":" + hora.slice(2);
  } else {
    return hora;
  }
}

function atualizarCampo(event) {
  const campo = event.target;
  const valor = campo.value;
  campo.value = formatarHora(valor);
}

document.getElementById("entrada").addEventListener("blur", atualizarCampo);
document.getElementById("intervalo").addEventListener("blur", atualizarCampo);
document.getElementById("retornoIntervalo").addEventListener("blur", atualizarCampo);
document.getElementById("fimExpediente").addEventListener("blur", atualizarCampo);
