let input = document.getElementById("senha");
let cadiado = document.getElementById("cadiado");

function verificar() {
  let senha = document.getElementById("senha").value;
  let msg = document.getElementById("msg");

  if (senha === "4137") {
    msg.innerHTML = "Acesso concuido!";
    msg.style.color = "green";
    input.style.borderColor = "green";
    cadiado.style.color = "green";
      window.location.href = "telaDeVitoria.html";
  } else if (senha === "") {
    msg.innerHTML = "Digite a senha!";
    msg.style.color = "red";
    input.style.borderColor = "red";
    cadiado.style.color = "red";
  } else {
    msg.innerHTML = "Senha incorreta!";
    msg.style.color = "red";
    input.style.borderColor = "red";
    cadiado.style.color = "red";
  }
}