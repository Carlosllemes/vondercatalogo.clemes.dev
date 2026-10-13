const grid = document.querySelector('#catalog-grid');
const search = document.querySelector('#search');
const empty = document.querySelector('#empty');

function render() {
  const term = search.value.trim().toLocaleLowerCase('pt-BR');
  const matches = window.CATALOGOS.filter(item => `${item.titulo} ${item.categoria} ${item.descricao}`.toLocaleLowerCase('pt-BR').includes(term));
  grid.innerHTML = matches.map(item => `
    <article class="link-card">
      <span class="link-thumb">${item.capa ? `<img src="${item.capa}" alt="Capa do catálogo ${item.titulo}" loading="lazy">` : '<span class="thumb-placeholder" aria-hidden="true">V</span>'}</span>
      <span class="link-text"><strong>${item.titulo}</strong><small>${item.categoria}</small></span>
      <span class="link-actions">
        <a class="action-open" href="${item.arquivo}" target="_blank" rel="noopener">Abrir</a>
        <a class="action-download" href="${item.arquivo}" download>Baixar</a>
      </span>
    </article>`).join('');
  empty.hidden = matches.length > 0;
}
search.addEventListener('input', render);
render();
