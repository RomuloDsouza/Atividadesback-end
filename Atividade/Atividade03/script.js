function cadastro() {

  
  let nome = document.getElementById("nome").value;
  let matricula = document.getElementById("matricula").value;
  let disciplina = document.getElementById("disciplina").value;
  let nota = document.getElementById("nota").value;

  let aluno;

  try {

    if (/^[a-zA-ZÀ-ÖØ-öØ-ÿ]/.test(nome)) {
      nome;
    } else {
      throw new Error("Favor coloque apenas letras no nome ");
    };

    if(matricula){
      matricula;
    }else{
      throw new Error("Favor coloque apenas numeros positivos ");
    };
          if(nota <=100){
            true
          }else{
            throw new Error("Favor coloque apenas numeros ate 100 ");
          };

     if(nota >=60 ){
        aluno= "Aprovado";
     } else if(nota<60 && nota>=50 ){
      aluno= "em recuperação";
     }else{
      aluno= "reprovado";
     };

    let resultado = document.getElementById("resultado");
    resultado.style.visibility = "visible";
    resultado.textContent = `Ola ${nome} da matricula ${matricula} da disciplina ${disciplina} a sua nota e ${nota} e voce esta ${aluno} ` ;
  } catch (error) {
    alert(error.message);
  }

  
}


