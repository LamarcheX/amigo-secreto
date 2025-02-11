let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let amigo = input.value.trim(); // Eliminamos espacios innecesarios

  if (!amigo) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(amigo);
  input.value = "";
  actualizarLista();
  input.focus();
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let amigo of amigos) {
    let item = document.createElement("li");
    item.textContent = amigo;

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.setAttribute("onclick", `eliminarAmigo('${amigo}')`);

    item.appendChild(btnEliminar);
    lista.appendChild(item);
  }
}

function eliminarAmigo(amigo) {
  amigos = amigos.filter((e) => e !== amigo);
  actualizarLista();
}

function sortearAmigo() {
  if (amigos.length < 3) {
    alert("Necesitas al menos 3 amigos para hacer el sorteo.");
    return;
  }
  let index = Math.floor(Math.random() * amigos.length);
  alert(`Tu amigo secreto es: ${amigos[index]}`);
}

let input = document.getElementById("amigo");
input.focus();

// Evento para agregar amigo al presionar Enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    adicionarAmigo();
  }
});
