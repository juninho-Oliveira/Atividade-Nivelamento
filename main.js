 function clicar() {

    let nomes = document.querySelector(".nome").value;
    let email = document.querySelector(".email").value;
    let mensagem = document.querySelector(".mensagem").value;
    //Esse IF serve para só chamar o alert se não for todos os dados preenchidos (a variável nome, email, mensagem tiver valor )
    if (nomes === "" || email === "" || mensagem === "") {
      alert("Por favor preencha todos os campos!")
    } else {
      alert(`Obrigado, ${nomes}, entraremos em contato com você!`)
    }
    history.go (0);//Método history.go (0): Este método carrega uma URL do histórico do navegador dependendo do parâmetro passado a ele.
}

