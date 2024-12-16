        document.getElementById("timeForm").addEventListener("submit", function(event){
            event.preventDefault()
            let startTime = document.getElementById("startTime").valueAsNumber
            let endTime = document.getElementById("endTime").valueAsNumber
            let lunchStart = document.getElementById("lunchStart").valueAsNumber
            let lunchEnd = document.getElementById("lunchEnd").valueAsNumber
            let result = endTime - startTime - (lunchEnd - lunchStart)
            let hours = Math.floor(result / 3600000)
            let minutes = Math.floor((result % 3600000) / 60000)
            if (hours >= 0) {
                document.getElementById("result").innerHTML = "Tempo total trabalhado: " + hours + " horas e " + minutes + " minutos."
            } else {
                document.getElementById("result").innerHTML = "Por favor, verifique se as horas inseridas estão corretas."
            }
        });