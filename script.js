let canais = [];

document.getElementById("canal-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const url = document.getElementById("url").value.trim();

  if (!nome || !url) return;

  canais.push({ nome, url });
  atualizarTabela();
  document.getElementById("canal-form").reset();
});

function atualizarTabela() {
  const tbody = document.getElementById("canal-lista");
  tbody.innerHTML = "";

  canais.forEach((canal, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${canal.nome}</td>
      <td><a href="${canal.url}" target="_blank">${canal.url}</a></td>
      <td>
        <button class="edit" onclick="editarCanal(${index})">Editar</button>
        <button class="delete" onclick="removerCanal(${index})">Excluir</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  document.getElementById("total-canais").textContent = canais.length;
}

function removerCanal(index) {
  canais.splice(index, 1);
  atualizarTabela();
}

function editarCanal(index) {
  const canal = canais[index];
  document.getElementById("nome").value = canal.nome;
  document.getElementById("url").value = canal.url;
  canais.splice(index, 1); // Remove o antigo para poder salvar novo
  atualizarTabela();
}

