async function carregarDados() {
  try {
    const response = await fetch('/api');
    const dados = await response.json();

    const lista = document.getElementById('lista-dados');
    lista.innerHTML = dados.map(item => `
      <li>
        <h2>${item.nome}</h2>
        <p><strong>ID:</strong> ${item.id}</p>
        <p><strong>Idade:</strong> ${item.idade}</p>
        <p><strong>Profissão:</strong> ${item.profissao}</p>
      </li>
    `).join('');
  } catch (error) {
    console.error('Erro:', error);
  }
}

window.addEventListener('DOMContentLoaded', carregarDados);
