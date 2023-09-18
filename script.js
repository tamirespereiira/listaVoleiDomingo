let listaPrincipal = [];
let listaEspera = [];

function adicionarNome() {
    const nome = document.getElementById("novo-nome").value;
    if (nome && listaPrincipal.length < 28) {
        listaPrincipal.push(nome);
        document.getElementById("novo-nome").value = ""; // Limpa o campo de entrada
        atualizarLista();
        registrarAcao("Adicionado: " + nome);
    }
}

function excluirNome(index) {
    listaPrincipal.splice(index, 1);
    atualizarLista();
    registrarAcao("Excluído: " + listaPrincipal[index]);
}

function moverParaListaEspera(index) {
    const nome = listaPrincipal[index];
    listaEspera.push(nome);
    excluirNome(index);
    registrarAcao("Movido para Lista de Espera: " + nome);
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
    // Aqui você pode implementar a lógica para registrar no banco de dados.
}
