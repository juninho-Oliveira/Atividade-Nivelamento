 function clicar () {

    let nome = document.querySelector(".nome").value;
    //Esse IF serve para só chamar o alert se o nome for preenchido (a variável nome tiver valor
    if (nome) {
      alert(`Obrigado ${nome},  vamos entra em contato!`);
    } else {
        alert("Por favor informe o nome!")
    }
     
    history.go (0);//Método history.go (0): Este método carrega uma URL do histórico do navegador dependendo do parâmetro passado a ele.
   

}

