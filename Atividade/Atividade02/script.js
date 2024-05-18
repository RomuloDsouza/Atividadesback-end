function cadastro() {
  let pessoa = {};
  
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let cpf = document.getElementById("cpf").value;
  let select = document.getElementById("sexo");
  let telefone = document.getElementById("telefone").value;
  pessoa.sexo = select.options[select.selectedIndex].value;
  let dataNascimento = document.getElementById("dataNascimento").value;
  dataNascimento = formatarData(dataNascimento);

  let endereco = document.getElementById("endereco").value;


  try {

    if (/^[a-zA-ZÀ-ÖØ-öØ-ÿ]/.test(nome)) {
      pessoa.nome = nome;
    } else {
      throw new Error("Favor coloque apenas letras no nome ");
    }

    if (/^[a-zA-ZÀ-ÖØ-öØ-ÿ]/.test(sobrenome)) {
      pessoa.sobrenome = sobrenome;
    } else {
      throw new Error("Favor coloque apenas letras no sobrenome");
    }

    if (/\d{11}/.test(cpf)) {
      if (cpf.length === 11) {
        pessoa.cpf = cpf;
      } else {
        throw new Error("Por favor, digite 11 números.");
      }
    } else {
      throw new Error("Por favor, digite somente números e 11 digitos.");
    }

    if (/\(\d{2,3}\)\d{4,5}-\d{4}/.test(telefone)) {
      pessoa.telefone = telefone;
    } else {
      throw new Error("Telefone Inválido");
    }

    let resultado = document.getElementById("resultado");
    resultado.style.visibility = "visible";
    resultado.textContent = `Ola ${nome} ${sobrenome} portador do cpf: ${cpf} e do sexo ${pessoa.sexo} nascido em ${dataNascimento} do endereço ${endereco} e telefone ${telefone}  `;
  } catch (error) {
    alert(error.message);
  }

  
}

function formatarData(dataNascimento) {
  let partes = dataNascimento.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}
