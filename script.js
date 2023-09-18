let listaPrincipal = JSON.parse(localStorage.getItem('listaPrincipal')) || [];
let listaEspera = JSON.parse(localStorage.getItem('listaEspera')) || [];

function adicionarNome() {
    const nome = document.getElementById("novo-nome").value;
    if (nome && listaPrincipal.length < 28) {
        listaPrincipal.push(nome);
        document.getElementById("novo-nome").value = ""; // Limpa o campo de entrada
        atualizarLista();
        registrarAcao("Adicionado: " + nome);
        salvarListaNoLocalStorage();
    }
}

function excluirNome(index) {
    const nomeExcluido = listaPrincipal.splice(index, 1)[0];
    atualizarLista();
    registrarAcao("Excluído: " + nomeExcluido);
    salvarListaNoLocalStorage();
}

function moverParaListaEspera(index) {
    const nome = listaPrincipal[index];
    listaEspera.push(nome);
    excluirNome(index);
    registrarAcao("Movido para Lista de Espera: " + nome);
    salvarListaNoLocalStorage();
}

function atualizarLista() {
    const listaNomes = document.getElementById("lista-nomes");
    listaNomes.innerHTML = "";
    listaPrincipal.forEach((nome, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${nome}`;
        listItem.appendChild(criarBotaoExcluir(index));
        listItem.appendChild(criarBotaoMover(index));
        listaNomes.appendChild(listItem);
    });
}

function criarBotaoExcluir(index) {
    const button = document.createElement("button");
    button.textContent = "Excluir";
    button.addEventListener("click", () => excluirNome(index));
    return button;
}

function criarBotaoMover(index) {
    const button = document.createElement("button");
    button.textContent = "Mover para Lista de Espera";
    button.addEventListener("click", () => moverParaListaEspera(index));
    return button;
}

function registrarAcao(acao) {
    const dataHora = new Date().toLocaleString();
    console.log(dataHora + " - " + acao);
}

function salvarListaNoLocalStorage() {
    localStorage.setItem('listaPrincipal', JSON.stringify(listaPrincipal));
    localStorage.setItem('listaEspera', JSON.stringify(listaEspera));
}

// Inicializa a lista ao carregar a página
window.onload = () => {
    atualizarLista();
};
