const listaAmigos = [];
const ulLista = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    listaAmigos.push(nome);
    input.value = "";

    atualizarLista();
}

function atualizarLista() {
    ulLista.innerHTML = "";
    listaAmigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nome}`;
        ulLista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceSorteado];

    ulResultado.innerHTML = `<li> O amigo secreto é: <strong>${nomeSorteado}</strong> 🎉</li>`;
}
