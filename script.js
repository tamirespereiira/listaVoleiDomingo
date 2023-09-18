// Função para adicionar um nome
function adicionarNome() {
  const nome = document.getElementById('nomeInput').value;
  const lista = document.getElementById('nomeLista');

  if (nome !== '') {
    const dataHora = new Date().toLocaleString();
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `${nome} - Inserido em: ${dataHora} <button onclick="removerNome(this)">Remover</button>`;
    lista.appendChild(novoItem);
    document.getElementById('nomeInput').value = '';

    // Armazena o nome no armazenamento local
    salvarNomeNoArmazenamentoLocal(nome, dataHora);
  }
}

// Função para remover um nome
function removerNome(botao) {
  const itemParaRemover = botao.parentNode;
  itemParaRemover.remove();

  // Atualiza o armazenamento local após a remoção
  atualizarArmazenamentoLocal();
}

// Função para salvar um nome no armazenamento local
function salvarNomeNoArmazenamentoLocal(nome, dataHora) {
  let nomesSalvos = JSON.parse(localStorage.getItem('nomes')) || [];
  nomesSalvos.push({ nome, dataHora });
  localStorage.setItem('nomes', JSON.stringify(nomesSalvos));
}

// Função para atualizar o armazenamento local após a remoção de um nome
function atualizarArmazenamentoLocal() {
  const lista = document.getElementById('nomeLista');
  const nomesSalvos = [];
  for (let i = 0; i < lista.children.length; i++) {
    const item = lista.children[i];
    const [nome] = item.textContent.split(' - ');
    const dataHora = item.textContent.match(/\d{1,2}\/\d{1,2}\/\d{4}, \d{2}:\d{2}:\d{2}/)[0];
    nomesSalvos.push({ nome, dataHora });
  }
  localStorage.setItem('nomes', JSON.stringify(nomesSalvos));
}

// Carrega os nomes do armazenamento local ao carregar a página
window.onload = function () {
  const nomesSalvos = JSON.parse(localStorage.getItem('nomes')) || [];
  const lista = document.getElementById('nomeLista');
  for (const nomeSalvo of nomesSalvos) {
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `${nomeSalvo.nome} - Inserido em: ${nomeSalvo.dataHora} <button onclick="removerNome(this)">Remover</button>`;
    lista.appendChild(novoItem);
  }
};
