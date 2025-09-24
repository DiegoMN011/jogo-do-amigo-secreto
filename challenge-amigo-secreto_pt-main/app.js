// 1. Declarar o array para armazenar os amigos
let amigos = [];

// 2. Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validar entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nome);

    // Atualizar a lista exibida
    atualizarLista();

    // Limpar o campo de entrada
    input.value = "";
    input.focus();
}

// 3. Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array e criar os <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4. Função para sortear os amigos
function sortearAmigo() {
    // Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gerar índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

// Função para limpar toda a lista
function limparLista() {
    // Zerar o array
    amigos = [];

    // Limpar lista exibida
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    alert("A lista de amigos foi limpa!");
}