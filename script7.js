    if(document.getElementById("title") != "Gerador de AFD"){
    document.getElementById("GeradorAfd").getElementsByTagName("P")[0].style.color = "rgb(0, 131, 192)";
    document.getElementById("GeradorAfd").style.borderBottomWidth = "3px"
    }
    function ignoraweek(){
        document.getElementById("sabado").disabled = false;
        document.getElementById("domingo").disabled = false;
    }
    function closedSabado(){
        document.getElementById("msgs").style.visibility = "hidden"
    }
    function closedDomingo(){
        document.getElementById("msgd").style.visibility = "hidden"
    }
    ''
    function sabado() {
    var sabado = document.getElementById("sabado");
    var domingo = document.getElementById("domingo");
    var datainicial = document.getElementById("dataInicial").value;
    var newDateInicial = new Date(datainicial);
    var datafinal = document.getElementById("dataFinal").value;
    if(sabado.checked && newDateInicial.getDay() == 5){
        document.getElementById("msgs").style.visibility = "visible"
        document.getElementById("msgs").style.transitionDelay = "200ms"
        document.getElementById("dataInicial").value = "";
        sabado.checked = false;
}if(sabado.checked){
    document.getElementById("saturday").style.textDecoration = "line-through"
}else{
    document.getElementById("saturday").style.textDecoration = "none"
}
}
    function domingo() {
    var sabado = document.getElementById("sabado");
    var domingo = document.getElementById("domingo");
    var datainicial = document.getElementById("dataInicial").value;
    var newDateInicial = new Date(datainicial);
    var datafinal = document.getElementById("dataFinal").value
    if(domingo.checked && newDateInicial.getDay() == 6){
        document.getElementById("msgd").style.visibility = "visible";
        document.getElementById("msgd").style.transitionDelay = "200ms"
        document.getElementById("dataInicial").value = "";
        domingo.checked = false;
}if(domingo.checked){
    document.getElementById("sunday").style.textDecoration = "line-through"
}else{
    document.getElementById("sunday").style.textDecoration = "none"
}
}
    function datasif(startDate, endDate, steps = 1){
    const dateArray = [];
    let currentDate = new Date(startDate);
    let currentEndDate = new Date(endDate)
    currentEndDate.setHours(24)
    currentDate.setHours(24)
    console.log(currentDate)
    startDate = startDate.setUTCDate
    while (currentDate <= new Date(currentEndDate)) {
        dateArray.push(new Date(currentDate));
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);

    var sabado = document.getElementById("sabado");
    var domingo = document.getElementById("domingo");
    var datainicial = document.getElementById("dataInicial").value;
    var datafinal = document.getElementById("dataFinal").value

        if(sabado.checked && !domingo.checked){
            if(currentDate.getDay() == 5) {
                steps = 2
            }else {
                steps = 1
            }
        }
        if(domingo.checked && !sabado.checked){
            if(currentDate.getDay() == 6) {
                steps = 2
            }else {
                steps = 1
            }
        }
        if(domingo.checked && sabado.checked){
            if(currentDate.getDay() == 5) {
                steps = 3
            }else {
                steps = 1
            }
        }
        
    }

    return dateArray;
}


    setInterval(function(d){

        var resetTimeBatida1 = document.getElementById("batida1");
        clearTimeout( resetTimeBatida1);

        var resetTimeBatida2 = document.getElementById("batida2");
        clearTimeout( resetTimeBatida2);

        var resetTimeBatida3 = document.getElementById("batida3");
        clearTimeout( resetTimeBatida3);

        var resetTimeBatida4 = document.getElementById("batida4");
        clearTimeout( resetTimeBatida4);

        var batida1 = document.getElementById("batida1");
        var valueBatida1 = batida1.value;

        var batida2 = document.getElementById("batida2");
        var valueBatida2 = batida2.value;

        var batida3 = document.getElementById("batida3");
        var valueBatida3 = batida3.value;

        var batida4 = document.getElementById("batida4");
        var valueBatida4 = batida4.value;

        var gerarAfd = document.getElementById("gerarAfd");

        var aleatorio = document.getElementById("aleatorio");
        var sabado = document.getElementById("sabado");
        var sabado = document.getElementById("domingo");
        var sabadoValue = sabado.value;
        var domingoValue = domingo.value;
        var aleatorioValue = aleatorio.value;

        clearTimeout ( sabado );
        clearTimeout (sabadoValue );
        clearTimeout ( domingo );
        clearTimeout ( domingoValue );
        clearTimeout( aleatorio );
        clearTimeout( aleatorioValue );

},300)


    function valueNumber(e) {

        batidaErro1 = document.getElementById("batida1");
        batidaErro2 = document.getElementById("batida2");
        batidaErro3 = document.getElementById("batida3");
        batidaErro4 = document.getElementById("batida4");
        pisErro = document.getElementById("pisColaborador");

        if(document.getElementsByClassName("batidac").value = ""){
        document.getElementById("pisColaborador") = "";

    }if(!document.getElementById("aleatorio").checked && document.getElementById("batida1").value == ""){
        document.getElementById("batida1").style.border = "solid rgb(255, 0, 0)";
        document.getElementById("pisColaborador") = "";
        

    }   if(!document.getElementById("aleatorio").checked && document.getElementById("batida2").value == ""){
        document.getElementById("batida2").style.border = "solid rgb(255, 0, 0)";
        document.getElementById("pisColaborador") = "";


    }   if(!document.getElementById("aleatorio").checked && document.getElementById("batida3").value == ""){
        document.getElementById("batida3").style.border = "solid rgb(255, 0, 0)";
        document.getElementById("pisColaborador") = "";


    }   if(!document.getElementById("aleatorio").checked && document.getElementById("batida4").value == ""){
        document.getElementById("batida4").style.border = "solid rgb(255, 0, 0)";
        document.getElementById("pisColaborador") = "";

    } if(document.getElementById("pisColaborador").value == ""){
        document.getElementById("pisColaborador").style.border = "solid rgb(255, 0, 0)";

    }if(!document.getElementById("aleatorio").checked && document.getElementById("dataInicial").value == ""){
        document.getElementById("dataInicial").style.border = "solid rgb(255, 0, 0)";
    }if(!document.getElementById("aleatorio").checked && document.getElementById("dataFinal").value == ""){
        document.getElementById("dataFinal").style.border = "solid rgb(255, 0, 0)";
    }    
    else{
        document.getElementById("batida1").style.border = "solid 1px #ccc";
        document.getElementById("batida2").style.border = "solid 1px #ccc";
        document.getElementById("batida3").style.border = "solid 1px #ccc";
        document.getElementById("batida4").style.border = "solid 1px #ccc";
        document.getElementById("pisColaborador").style.border = "solid 1px #ccc";
        document.getElementById("dataInicial").style.border = "solid 1px #ccc";
        document.getElementById("dataFinal").style.border = "solid 1px #ccc";
      var aleatorio = document.getElementById("aleatorio");

      clear = document.querySelector("#resultado");
      document.querySelector("#resultado").innerHTML = "";
      
      var pis = document.querySelector("#pisColaborador");
      var valorpis = `${pis.value}`;
      var pisSplit = valorpis.split(',');

      //let pis0 = pisSplit[0]
      //let pis1 = pisSplit[1]
      //let pis2 = pisSplit[2]
      var batida1 = document.querySelector("#batida1");
      var marc1 = batida1.value;
      var replacePonto1 = (marc1).replaceAll(":", "");

      var batida2 = document.querySelector("#batida2");
      var marc2 = batida2.value;
      var replacePonto2 = (marc2).replaceAll(":", "");

      var batida3 = document.querySelector("#batida3");
      var marc3 = batida3.value;
      var replacePonto3 = (marc3).replaceAll(":", "");

      var batida4 = document.querySelector("#batida4");
      var marc4 = batida4.value;
      var replacePonto4 = (marc4).replaceAll(":", "");
      var periodoi = document.querySelector("#dataInicial");
      var datai = periodoi.value;
      let datas = datai.split('-');
      let anoi = datas[0]
      let mesi = datas[1]
      let diai = datas[2]
      let dataBraba = diai+mesi+anoi;     
      var periodof = document.querySelector("#dataFinal");
      var dataf = periodof.value;
      let datasf = dataf.split('-');
      let anof = datas[0]
      let mesf = datas[1]
      let diaf = datas[2]
      let dataBrabaf = diaf+mesf+anof ;
      let checkbox = document.getElementById("aleatorio");
      if(checkbox.checked){
      const dates = datasif(datai,  dataf).map(elem => elem.toLocaleDateString());
      console.log(dates);
      let periodos = dates.value;
            for (let i=0; i < pisSplit.length; i++){
                console.log(pisSplit[i]);
                var NSR = 100000000;

                for (let j=0; j < dates.length; j++){


                    for(let i=0; i < pisSplit.length; i++){
                        

batida1.value += Math.floor(Math.random() * (23 + 1))
batida1.value += Math.floor(Math.random() * (5 + 1))
batida1.value += Math.floor(Math.random() * (9 + 1))

batida2.value += Math.floor(Math.random() * (23 + 1));
batida2.value += Math.floor(Math.random() * (5 + 1));
batida2.value += Math.floor(Math.random() * (9 + 1));

batida3.value += Math.floor(Math.random() * (23 + 1));
batida3.value += Math.floor(Math.random() * (5 + 1));
batida3.value += Math.floor(Math.random() * (9 + 1));

batida4.value += Math.floor(Math.random() * (23 + 1));
batida4.value += Math.floor(Math.random() * (5 + 1));
batida4.value += Math.floor(Math.random() * (9 + 1));

while(batida1.value.length < 4){ 
    batida1.value = "0" + batida1.value;
    batida1.value.length++;
}
while(batida2.value.length < 4){
    batida2.value = "0" + batida2.value;
    batida2.value.length++;
}
while(batida3.value.length < 4){
    batida3.value = "0" + batida3.value;
    batida3.value.length++;
}
while(batida4.value.length < 4){
    batida4.value = "0" + batida4.value;
    batida4.value.length++;
}
var espaco = "  "
while(espaco.length < 150){
    espaco = espaco + " ";
}
       document.querySelector("#resultado").innerHTML +=
`0000000001156198340000123000000000000${espaco}00000000001075938${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}
${(NSR++)}${3}${dates[j].replaceAll("/", "")}${batida1.value}0${pisSplit[i]}
0000000001156198340000123000000000000${espaco}00000000001075938${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}
${(NSR++)}${3}${dates[j].replaceAll("/", "")}${batida2.value}0${pisSplit[i]}
0000000001156198340000123000000000000${espaco}00000000001075938${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}
${(NSR++)}${3}${dates[j].replaceAll("/", "")}${batida3.value}0${pisSplit[i]}
0000000001156198340000123000000000000${espaco}00000000001075938${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}
${(NSR++)}${3}${dates[j].replaceAll("/", "")}${batida4.value}0${pisSplit[i]}
`

      /*"0000000001156198340000123000000000000" + 
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "00000000001075938" + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + "<br>" + (NSR++) + "3" + dates[j].replaceAll("/", "") +
      batida1.value + "0" + pisSplit[i] + "<br>" + "<br>" + 
      "0000000001156198340000123000000000000" + 
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "00000000001075938" + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + "<br>" + (NSR++) + "3" + dates[j].replaceAll("/", "") +
      batida2.value + "0" + pisSplit[i] + "<br>" + "<br>" +
      "0000000001156198340000123000000000000" + 
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "00000000001075938" + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + "<br>" + (NSR++) + "3" + dates[j].replaceAll("/", "") +
      batida3.value + "0" + pisSplit[i] + "<br>" + "<br>" +
      "0000000001156198340000123000000000000" + 
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "00000000001075938" + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + "<br>" + (NSR++) + "3" + dates[j].replaceAll("/", "") +
      batida4.value + "0" + pisSplit[i] + "<br>" + "<br>";*/

            batida1.value = "";
            batida2.value = "";
            batida3.value = "";
            batida4.value = "";
   
        
    }
}

    }
      }else{
          
      for (let i=0; i < pisSplit.length; i++){
          console.log(pisSplit[i]);
          var NSR = 100000000;


          const dates = datasif(datai,  dataf).map(elem => elem.toLocaleDateString());
          for (let j=0; j < dates.length; j++){
            var espaco = "  "
while(espaco.length < 150){
    espaco = espaco + " ";
}


            document.querySelector("#resultado").innerHTML +=
`0000000001156198340000123000000000000${espaco}00000000001075938${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}
${(NSR++)}${3}${dates[j].replaceAll("/", "")}${batida1.value.replaceAll(":", "")}0${pisSplit[i]}
0000000001156198340000123000000000000${espaco}00000000001075938${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}
${(NSR++)}${3}${dates[j].replaceAll("/", "")}${batida2.value.replaceAll(":", "")}0${pisSplit[i]}
0000000001156198340000123000000000000${espaco}00000000001075938${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}
${(NSR++)}${3}${dates[j].replaceAll("/", "")}${batida3.value.replaceAll(":", "")}0${pisSplit[i]}
0000000001156198340000123000000000000${espaco}00000000001075938${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}${dates[j].replaceAll("/", "")}
${(NSR++)}${3}${dates[j].replaceAll("/", "")}${batida4.value.replaceAll(":", "")}0${pisSplit[i]}
`
      

          /*document.querySelector("#resultado").innerHTML +=
      "0000000001156198340000123000000000000" + 
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "00000000001075938" + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + "<br>" + (NSR++) + "3" + dates[j].replaceAll("/", "") +
      batida1.value.replaceAll(":", "") + "0" + pisSplit[i] + "<br>" + "<br>" + 
      "0000000001156198340000123000000000000" + 
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "00000000001075938" + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + "<br>" + (NSR++) + "3" + dates[j].replaceAll("/", "") +
      batida2.value.replaceAll(":", "") + "0" + pisSplit[i] + "<br>" + "<br>" +
      "0000000001156198340000123000000000000" + 
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "00000000001075938" + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + "<br>" + (NSR++) + "3" + dates[j].replaceAll("/", "") +
      batida3.value.replaceAll(":", "") + "0" + pisSplit[i] + "<br>" + "<br>" +
      "0000000001156198340000123000000000000" + 
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "00000000001075938" + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + dates[j].replaceAll("/", "") + "<br>" + (NSR++) + "3" + dates[j].replaceAll("/", "") +
      batida4.value.replaceAll(":", "") + "0" + pisSplit[i] + "<br>" + "<br>"; */

    }
}
    
}
    var textToSave = document.getElementById('resultado').innerHTML;
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'AfdFicticio.txt';
    hiddenElement.click();

    // document.getElementById("baixarAfd").addEventListener("click");


    }
}


    function checkValidacao(e){
        var checkbox = document.getElementById("aleatorio");
        let batida1 = document.getElementById("batida1")
        let batida2 = document.getElementById("batida2")
        let batida3 = document.getElementById("batida3")
        let batida4 = document.getElementById("batida4")

      
            if(checkbox.checked) {
            batida1.type = "text";
            batida2.type = "text";
            batida3.type = "text";
            batida4.type = "text";

           /* batida1.value += Math.floor(Math.random() * (23 + 1) + 1);
            batida1.value += Math.floor(Math.random() * (58 + 1) + 1);
            batida2.value += Math.floor(Math.random() * (23 + 1) + 1);
            batida2.value += Math.floor(Math.random() * (58 + 1) + 1);
            batida3.value += Math.floor(Math.random() * (23 + 1) + 1);
            batida3.value += Math.floor(Math.random() * (58 + 1) + 1);
            batida4.value += Math.floor(Math.random() * (23 + 1) + 1);
            batida4.value += Math.floor(Math.random() * (58 + 1) + 1);
            while(batida1.value.length < 4){ 
                batida1.value = "0" + batida1.value;
                batida1.value.length++;
            }
            while(batida2.value.length < 4){
                batida2.value = "0" + batida2.value;
                batida2.value.length++;
            }
            while(batida3.value.length < 4){
                batida3.value = "0" + batida3.value;
                batida3.value.length++;
            }
            while(batida4.value.length < 4){
                batida4.value = "0" + batida4.value;
                batida4.value.length++;
            }*/
            batida1.disabled = true;
            batida2.disabled = true;
            batida3.disabled = true;
            batida4.disabled = true;
        }

            else{
            batida1.type = "time";
            batida2.type = "time";
            batida3.type = "time";
            batida4.type = "time";
            batida1.disabled = false;
            batida2.disabled = false;
            batida3.disabled = false;
            batida4.disabled = false;
            }
            if(batida1.disabled){
                batida1.style.backgroundColor = "rgb(207, 207, 207)";
                batida2.style.backgroundColor = "rgb(207, 207, 207)";
                batida3.style.backgroundColor = "rgb(207, 207, 207)";
                batida4.style.backgroundColor = "rgb(207, 207, 207)";
            }else{
                batida1.style.backgroundColor = "rgb(255, 249, 249)";
                batida2.style.backgroundColor = "rgb(255, 249, 249)";
                batida3.style.backgroundColor = "rgb(255, 249, 249)";
                batida4.style.backgroundColor = "rgb(255, 249, 249)";
            }
        }
