function imc() {

  let quilos = document.getElementById("quilos").value;
  let altura = document.getElementById("altura").value;
  document.getElementById("resultado").textContent = "";
  try {
    if (/^\d+(\.\d+)?$/.test(quilos)) {
      quilos;
    } else {
      throw new Error("Favor coloque apenas números positivos em quilos");
    }
    

    if (/^\d+(\.\d+)?$/.test(altura)) {
      altura;
    } else {
      throw new Error("Favor colocar apenas números positivos em altura");
    }
    
      
    let resultado = document.getElementById("resultado");
    resultado.style.visibility = "visible";

      let imc= quilos/(altura*altura)

      if(imc<18.5){
        resultado.textContent=`Ola o seu imc e  ${imc.toFixed(2)} e você  esta com  abaixo do Peso `;
      }else if(imc>=18.5  && imc <= 24.9 ){
        resultado.textContent=`Ola o seu imc e  ${imc.toFixed(2)} e você  esta com  peso Normal `;
      }else if(imc>=25 && imc  < 29.9){
        resultado.textContent=` Ola o seu imc e  ${imc.toFixed(2)} e você  esta com  sobrepeso `;
      }else if(imc>=30 && imc<34,9 ){
        resultado.textContent=` Ola o seu imc e  ${imc.toFixed(2)} e você  esta com  obesidade Grau I `;
      }else if(imc>= 35 && imc < 39.9){
        resultado.textContent=`Ola o seu imc e  ${imc.toFixed(2)} e você  esta com   obesidade Grau II `;
      }else{
        resultado.textContent=`Ola o seu imc e  ${imc.toFixed(2)} e você  esta com  obesidade Grau III  `;
      }
    

   
  } catch (error) {
    alert(error.message);
  }

  
}


