// Local progressive enhancement. No network calls, storage, or HTML injection.
const notes = [...document.querySelectorAll('[data-note]')];
const search = document.querySelector('[data-search-input]');
const buttons = [...document.querySelectorAll('[data-filter]')];
let topic = '';
function filterNotes() {
  const query = (search?.value ?? '').trim().toLocaleLowerCase();
  let visible = 0;
  for (const note of notes) {
    const text = note.dataset.search.toLocaleLowerCase();
    note.hidden = !(text.includes(query) && text.includes(topic));
    if (!note.hidden) visible++;
  }
  const empty = document.querySelector('[data-empty]');
  if (empty) empty.hidden = visible !== 0;
  const status = document.querySelector('[data-status]');
  if (status) status.textContent = `${visible} ${visible === 1 ? 'note' : 'notes'} shown`;
}
if (notes.length) {
  document.querySelectorAll('[data-filters], [data-search-control]').forEach(el => { el.hidden = false; });
  search?.addEventListener('input', filterNotes);
  for (const button of buttons) button.addEventListener('click', () => {
    topic = button.dataset.filter.toLocaleLowerCase();
    for (const other of buttons) {
      other.classList.toggle('active', other === button);
      other.setAttribute('aria-pressed', String(other === button));
    }
    filterNotes();
  });
}
