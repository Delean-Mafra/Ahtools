function validarData(data) {
    const dia = parseInt(data.substring(0, 2), 10);
    const mes = parseInt(data.substring(2, 4), 10);
    const ano = parseInt(data.substring(4), 10);

    if (ano < 1943) return "Data inválida (ano menor que 1943)";
    if (mes < 1 || mes > 12) return "Data inválida (mês inválido)";
    if (dia < 1 || dia > 31) return "Data inválida (dia inválido)";

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes === 2 && (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0))) {
        diasPorMes[1] = 29;
    }

    if (dia > diasPorMes[mes - 1]) return "Data inválida (dia excede limite do mês)";

    return `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}/${ano}`;
}

function validarHora(hora) {
    const horas = parseInt(hora.substring(0, 2), 10);
    const minutos = parseInt(hora.substring(2), 10);

    if (horas < 0 || horas > 23) return "Hora inválida (hora fora do intervalo)";
    if (minutos < 0 || minutos > 59) return "Hora inválida (minutos fora do intervalo)";

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
}

function processarLinha(linha, index) {
    // Ignora linhas que não têm "3" na 10ª posição
    if (linha[9] !== "3") return null;

    // Verifica se a linha tem 34 ou 38 caracteres
    if (linha.length !== 34 && linha.length !== 38) {
        return { erro: `Linha ${index + 1} inválida: tamanho deve ser 34 ou 38 caracteres.` };
    }

    // Extrai informações da linha
    const dataBruta = linha.substring(10, 18);
    const horaBruta = linha.substring(18, 22);
    const documento = linha.substring(23, 34);

    // Valida data e hora
    const dataValidada = validarData(dataBruta);
    const horaValidada = validarHora(horaBruta);

    if (dataValidada.includes("inválida")) {
        return { erro: `Linha ${index + 1} inválida: ${dataValidada}` };
    }

    if (horaValidada.includes("inválida")) {
        return { erro: `Linha ${index + 1} inválida: ${horaValidada}` };
    }

    return {
        documento,
        data: dataValidada,
        hora: horaValidada,
    };
}

function processarArquivo(conteudo) {
    const linhas = conteudo.split("\n");
    const registros = {};
    const erros = [];

    linhas.forEach((linha, index) => {
        linha = linha.trim();

        // Processa linha
        const resultado = processarLinha(linha, index);

        // Se houver erro, registra
        if (resultado?.erro) {
            erros.push(resultado.erro);
        }

        // Se for um registro válido, agrupa por documento e data
        if (resultado?.documento) {
            const { documento, data, hora } = resultado;

            if (!registros[documento]) registros[documento] = {};
            if (!registros[documento][data]) registros[documento][data] = [];
            registros[documento][data].push(hora);
        }
    });

    return { registros, erros };
}

document.getElementById("process-btn").addEventListener("click", () => {
    const fileInput = document.getElementById("file-input");
    const output = document.getElementById("output");

    if (!fileInput.files.length) {
        output.innerHTML = "<p class='erro'>Selecione um arquivo.</p>";
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const conteudo = event.target.result;
        const { registros, erros } = processarArquivo(conteudo);

        output.innerHTML = "";

        // Exibe os erros primeiro, se houver
        if (erros.length > 0) {
            erros.forEach((erro) => {
                const erroDiv = document.createElement("div");
                erroDiv.classList.add("erro");
                erroDiv.textContent = erro;
                output.appendChild(erroDiv);
            });
        }

        // Exibe os registros válidos
        Object.entries(registros).forEach(([documento, datas]) => {
            const registroDiv = document.createElement("div");
            registroDiv.classList.add("registro");

            registroDiv.innerHTML = `<h3>Documento: ${documento}</h3>`;

            Object.entries(datas).forEach(([data, horarios]) => {
                const dataDiv = document.createElement("div");
                dataDiv.classList.add("data-registro");
                dataDiv.textContent = `Data: ${data}`;

                const horariosDiv = document.createElement("div");
                horariosDiv.classList.add("horarios");

                horarios.forEach((horario) => {
                    const horarioSpan = document.createElement("span");
                    horarioSpan.classList.add("horario");
                    horarioSpan.textContent = horario;
                    horariosDiv.appendChild(horarioSpan);
                });

                registroDiv.appendChild(dataDiv);
                registroDiv.appendChild(horariosDiv);
            });

            output.appendChild(registroDiv);
        });
    };

    reader.readAsText(file);
});