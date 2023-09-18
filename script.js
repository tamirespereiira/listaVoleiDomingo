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
    salvarNomesNoArmazenamentoLocal();
  }
}

// Função para remover um nome
function removerNome(botao) {
  const itemParaRemover = botao.parentNode;
  itemParaRemover.remove();

  // Atualiza o armazenamento local após a remoção
  salvarNomesNoArmazenamentoLocal();
}

// Função para salvar os nomes no armazenamento local
function salvarNomesNoArmazenamentoLocal() {
  const lista = document.getElementById('nomeLista');
  const nomes = [];

  for (let i = 0; i < lista.children.length; i++) {
    const item = lista.children[i];
    const [nome] = item.textContent.split(' - ');
    const dataHora = item.textContent.match(/\d{1,2}\/\d{1,2}\/\d{4}, \d{2}:\d{2}:\d{2}/)[0];
    nomes.push({ nome, dataHora });
  }

  localStorage.setItem('nomes', JSON.stringify(nomes));
}

// Carrega os nomes do armazenamento local ao carregar a página
window.onload = function () {
  const nomesSalvos = JSON.parse(localStorage.getItem('nomes')) || [];

  if (nomesSalvos.length > 0) {
    const lista = document.getElementById('nomeLista');
    nomesSalvos.forEach(nomeSalvo => {
      const novoItem = document.createElement('li');
      novoItem.innerHTML = `${nomeSalvo.nome} - Inserido em: ${nomeSalvo.dataHora} <button onclick="removerNome(this)">Remover</button>`;
      lista.appendChild(novoItem);
    });
  }
};
