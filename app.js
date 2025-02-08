let amigos = [];  // Lista de amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("nomeAmigo");
    const nome = input.value.trim();

    // Verifica se o nome não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Verifica se o amigo já foi adicionado
    if (amigos.includes(nome)) {
        alert("Este amigo já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpa a lista antes de adicionar os itens

    // Adiciona cada amigo como um item na lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

// Adiciona eventos de escuta para os botões
document.getElementById("adicionarAmigoBtn").addEventListener("click", adicionarAmigo);
document.getElementById("sortearAmigoBtn").addEventListener("click", sortearAmigo);
