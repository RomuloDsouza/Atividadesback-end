function calcularFatorial() { 

  let numero = document.getElementById("numero").value;

  //let numero=parseFloat(prompt("Digite"));
   let resultadoFinal = 1;
    let sequencia = `${numero}! = `;



  
  if (isNaN(numero) || numero < 0) {
      document.getElementById("resultado").innerText = "Por favor, insira um número válido e positivo.";
      return;
  }

  
     try {
    
         for (i = numero; i >= 1; i--) {
         if(i===1){
          sequencia+=`${i} = ${resultadoFinal}`
         } else{sequencia+=`${i} X `;
          resultadoFinal*=i;
        }
    }
        console.log(resultadoFinal)
      } catch (error) {
        alert(error.message);
      }
      let resultado = document.getElementById("resultado");
      resultado.style.visibility = "visible";
      resultado.textContent =`${sequencia}`;
      
     }
        
  





  
