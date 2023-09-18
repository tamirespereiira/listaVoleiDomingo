function adicionarNome() {
    // Restante do código...

    if (nome && listaPrincipal.length < 28) {
        listaPrincipal.push(nome);
        document.getElementById("novo-nome").value = "";
        atualizarLista();
        registrarAcao("Adicionado: " + nome);
        salvarListaNoLocalStorage();  // Salva a lista no localStorage
    }
}

function excluirNome(index) {
    // Restante do código...

    atualizarLista();
    registrarAcao("Excluído: " + nomeExcluido);
    salvarListaNoLocalStorage();  // Salva a lista no localStorage
}

function moverParaListaEspera(index) {
    // Restante do código...

    registrarAcao("Movido para Lista de Espera: " + nome);
    salvarListaNoLocalStorage();  // Salva a lista no localStorage
}
