/* SOM */
function tocarSom() {
  const som = document.getElementById("somClick");
  if (som) {
    som.currentTime = 0;
    som.play();
  }
}

/* TROCA DE TELAS */
function trocarTela(atual, proxima) {
  const telaAtual = document.getElementById(atual);
  const telaProxima = document.getElementById(proxima);

  telaAtual.classList.remove("ativa");

  setTimeout(() => {
    telaProxima.classList.add("ativa");
  }, 300);
}

/* TELA 1 */
function nomeSim() {
  trocarTela("tela1", "tela2");
}

/* BOTÃO NÃO FUGINDO */
function fugir() {
  const botao = event.target;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  botao.style.transform = `translate(${x}px, ${y}px)`;
}

/* TELA 2 */
function verificarData() {
  const data = document.getElementById("data").value.trim();
  const erro = document.getElementById("erroData");

  if (data === "23/05/2008") {
    erro.innerText = "";
    trocarTela("tela2", "tela3");
  } else {
    erro.innerText = "errado burrinha";
  }
}

/* TELA 3 */
function conheceJoao(resposta) {
  if (resposta) {
    trocarTela("tela3", "tela4");
  } else {
    alert("Tem certeza? 🤨");
  }
}

/* TELA 4 */
function gostaSim() {
  trocarTela("tela4", "telaFinal");
}
