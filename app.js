let amigos = [];  // Adicione os amigos aqui

function adicionarAmigo() {
    const input = document.getElementById("nomeAmigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Adicione um evento de escuta para o botão de adicionar amigo
document.getElementById("adicionarAmigoBtn").addEventListener("click", adicionarAmigo);

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
