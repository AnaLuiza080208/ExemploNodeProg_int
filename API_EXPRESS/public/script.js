async function carregarDados() {
  try {
    const response = await fetch('/api');
    const dados = await response.json();

    const lista = document.getElementById('lista-dados');
    lista.innerHTML = dados.map(item =>
      `<li>ID: ${item.id} - Nome: ${item.nome} - Idade: ${item.idade} - Profissão: ${item.profissao}</li>`
    ).join('');
  } catch (error) {
    console.error('Erro:', error);
  }
}

window.addEventListener('DOMContentLoaded', carregarDados);
