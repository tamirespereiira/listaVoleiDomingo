let contador = 1; // Inicializa o contador

// Função para adicionar um número à lista
function adicionarNumero() {
  const lista = document.getElementById('numeroLista');

  if (contador <= 28) {
    const novoItem = document.createElement('li');
    novoItem.textContent = contador;
    lista.appendChild(novoItem);
    contador++;
  } else {
    // Quando atingir 28, reinicie a contagem
    const novoTitulo = document.createElement('h2');
    novoTitulo.textContent = 'Lista de Espera';
    lista.appendChild(novoTitulo);
    contador = 1; // Reinicia o contador
  }
}

// Chama a função ao carregar a página
window.onload = adicionarNumero;
