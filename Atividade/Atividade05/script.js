function calcTerreno() {

  let largura = document.getElementById("largura").value;
  let comprimento=document.getElementById("comprimento").value;
  let resultadoCalc=1;
 let resposta;

  try {
    if(largura !==0 &&  comprimento !==0){
      
    }else{
      throw new Error("Coloque apenas numeros positivo o sistema nao aceita zero")
    };


    if(/^[0-9]/.test(largura) &&  /^[0-9]/.test(comprimento) ){
      
    }else{
      throw new Error("Favor coloque um numero positivo")
    };


      resultadoCalc=largura*comprimento;
      

          if(resultadoCalc<100){
            resposta= "TERRENO POPULAR"
          }else if(resultadoCalc>=100&& resultadoCalc<=500){
            resposta =" TERRENO MASTER"
          }else{
            resposta= "TERRENO VIP"
          };

     let resultado = document.getElementById("resultado");
    resultado.style.visibility = "visible";
    resultado.textContent =`Ola a largura do terreno e ${largura} metros e o comprimento e ${comprimento} metros e a metragem e ${resultadoCalc}m² e o terreno e um  ${resposta} `;

    


  } catch (error) {
    alert(error.message);
  }

  
}


