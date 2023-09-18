function adicionarNome() {
  const nome = document.getElementById('nomeInput').value;
  const lista = document.getElementById('nomeLista');

  if (nome !== '') {
    const dataHora = new Date().toLocaleString();
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `${nome} - Inserido em: ${dataHora} <button onclick="removerNome(this)">Remover</button>`;
    lista.appendChild(novoItem);
    document.getElementById('nomeInput').value = '';
  }
}

function removerNome(botao) {
  const itemParaRemover = botao.parentNode;
  itemParaRemover.remove();
}
