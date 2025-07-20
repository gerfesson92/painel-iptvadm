document.getElementById("canal-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const url = document.getElementById("url").value;
  const lista = document.getElementById("canal-lista");
  const linha = document.createElement("tr");
  linha.innerHTML = `<td>${nome}</td><td>${url}</td><td><button onclick="this.closest('tr').remove()">Remover</button></td>`;
  lista.appendChild(linha);
  document.getElementById("total-canais").textContent = lista.children.length;
  this.reset();
});

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome-cliente").value.trim();
  const host = document.getElementById("host-cliente").value.trim();
  if (!nome || !host) return;

  const user = gerarUsuario(nome);
  const senha = gerarSenha();
  const m3uLink = `${host}/get.php?username=${user}&password=${senha}&type=m3u_plus`;

  const resultado = 
    `🔐 Aqui está seu acesso IPTV:\n\n` +
    `Host: ${host}\n` +
    `User: ${user}\n` +
    `Senha: ${senha}\n\n` +
    `🔗 Link M3U+: \n${m3uLink}`;

  document.getElementById("dados-acesso").textContent = resultado;
  document.getElementById("resultado-login").style.display = "block";
});

function gerarUsuario(nome) {
  const base = nome.toLowerCase().replace(/\s/g, "").slice(0, 8);
  return base + Math.floor(100 + Math.random() * 900);
}

function gerarSenha() {
  return Math.random().toString(36).slice(-8);
}

function copiarAcesso() {
  const texto = document.getElementById("dados-acesso").textContent;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Acesso copiado com sucesso!");
  });
}
