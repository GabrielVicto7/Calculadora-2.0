var VerificarParênteses = ")"

function DeleteALL(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value = ""
  VerificarParênteses = ")"
}

function Btn_7(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 7
}

function Btn_4(){
  var PainelInput = document.getElementById("InputVAL")
  Btn = document.getElementById("Btn_4")
  Btn.addEventListener("click", function() {
    if (isNaN(parseFloat(PainelInput.value))) { 
        PainelInput.value = "";
    }
  })
  PainelInput.value += 4
}

function Btn_1(){
  Btn = document.getElementById("Btn_1")
  Btn.addEventListener("click", function() {
    if (isNaN(parseFloat(PainelInput.value))) { 
        PainelInput.value = "";
    }
  })
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 1
}

function DeleteONE(){
  Btn = document.getElementById("DeleteONE")
  Btn.addEventListener("click", function() {
    if (isNaN(parseFloat(PainelInput.value))) { 
        PainelInput.value = "";
    }
  })
  var PainelInput = document.getElementById("InputVAL")
  var ValorAtual = PainelInput.value;
  var IndiceDEL = PainelInput.value.length - 1
  if (ValorAtual[IndiceDEL] === "(" || IndiceDEL === 0){
    VerificarParênteses = ")"
  }
  if(ValorAtual[IndiceDEL] === ")"){
    VerificarParênteses = "("
  }
  PainelInput.value = ValorAtual.substring(0, IndiceDEL);
}

function Parênteses(){
  var PainelInput = document.getElementById("InputVAL")
  if (VerificarParênteses === ")"){
    VerificarParênteses = "("
    PainelInput.value += "("
  } else{
    VerificarParênteses = ")"
    PainelInput.value += ")"
  }
}

function Porcentagem(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += "%"
}

function Divisão(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += "÷";
}

function Btn_8(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 8
}

function Btn_9(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 9
}

function Multiplicação(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += "x"
}

function Btn_5(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 5
}

function Btn_6(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 6
}

function Subtração(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += "-"
}

function Btn_2(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 2
}

function Btn_3(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 3
}

function Soma(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += "+"
}

function Btn_0(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += 0
}

function Virgula(){
  var PainelInput = document.getElementById("InputVAL")
  PainelInput.value += ","
}

function Igual(){
  var PainelInput = document.getElementById("InputVAL")
  var ValorIN = document.getElementById("InputVAL").value
  for(var i = 0;i < ValorIN.length; i++){
    if(ValorIN[i] === ","){
      ValorIN = ValorIN.substring(0, i) + "." + ValorIN.substring(i + 1);
    } else if(ValorIN[i] === "x"){
      ValorIN = ValorIN.substring(0, i) + "*" + ValorIN.substring(i + 1);
    } else if(ValorIN[i] === "÷"){
      ValorIN = ValorIN.substring(0, i) + "/" + ValorIN.substring(i + 1);
    }
  }

  try {
    var ValorRes = math.evaluate(ValorIN)
    PainelInput.value = ValorRes
} catch (error) {
  PainelInput.style.textAlign = "center"
  PainelInput.value = ("Sintaxe incorreta! ❌")
  var Btns = document.querySelectorAll(".Buttons")
  Btns.forEach(function(btn) {
    btn.disabled = true;
  });

  setTimeout(function() {
    PainelInput.style.textAlign = "left"
    PainelInput.value = ("")
    Btns.forEach(function(btn) {
      btn.disabled = false;
  });
}, 1500);
}
  
}