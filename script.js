function mostrar(tela) {
  document.querySelectorAll('.container > div').forEach(div => {
    div.classList.add('hidden');
  });
  document.getElementById(tela).classList.remove('hidden');
}

/* TELA 1 */
function nomeSim() {
  mostrar('tela2');
}

function nomeNao() {
  document.getElementById('erro1').classList.remove('hidden');
}

/* TELA 2 */
function formatarData(input) {
  let valor = input.value.replace(/\D/g, '');

  if (valor.length > 2) {
    valor = valor.slice(0, 2) + '/' + valor.slice(2);
  }
  if (valor.length > 5) {
    valor = valor.slice(0, 5) + '/' + valor.slice(5, 9);
  }

  input.value = valor;
}

function verificarData() {
  const data = document.getElementById('data').value;
  if (data === '23/05/2008') {
    mostrar('tela3');
  } else {
    document.getElementById('erro2').classList.remove('hidden');
  }
}

/* TELA 3 */
function conheceJoaoSim() {
  mostrar('tela4');
}

function conheceJoaoNao() {
  document.getElementById('erro3').classList.remove('hidden');
}

/* TELA 4 */
function gostaSim() {
  mostrar('telaFinal');
}

function gostaNao() {
  alert('Tudo bem… mas precisava tentar 🤍');
}
