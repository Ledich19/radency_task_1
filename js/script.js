let createElement = require('./modules/createElement')
const {
  generateId
} = require('./modules/helper')
let noteChanger = require('./modules/noteChanger')

const table = document.querySelector('.table-main')
let showArchive = false

const renderTable = () => {
  let showNotes = noteChanger.getNotes().filter((n) => n.isArchive === showArchive)
  table.innerHTML = createElement.tableHeader()
  for (n of showNotes) {
    const tr = createElement.tableRow(n)
    table.insertAdjacentElement('beforeend', tr)
  }
}
renderTable()

const toggleShowArchive = () => {
  const toggleBtn = document.querySelector('.toggle-archive')
  toggleBtn.addEventListener('click', (event) => {
    showArchive = !showArchive
    event.target.innerHTML = showArchive ? 'show notes' : 'show archive'
    renderTable()
  });
}
toggleShowArchive()

table.addEventListener('click', (event) => {
  const id = event.target.parentNode.id
  if (event.target.hasAttribute('data-update')) {
    noteChanger.updateNote(id)
    renderTable()
  }
  if (event.target.hasAttribute('data-archive')) {
    noteChanger.archiveNote(id)
    renderTable()
  }
  if (event.target.hasAttribute('data-delete')) {
    noteChanger.deleteNote(id)
    renderTable()
  }
});

const notaForm = document.querySelector('#note-form')
notaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(notaForm)
  const note = {
    id: generateId(),
    name: formData.get('name'),
    createAt: new Date(),
    category: formData.get('category'),
    content: formData.get('content'),
    date: [formData.get('date')],
    isArchive: false
  }
  noteChanger.addNote(note)
  renderTable()
})