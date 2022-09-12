let createElement = require('./modules/createElement')
let noteChanger = require('./modules/noteServices')
const { generateId, showElement, hiddenElement } = require('./modules/helper')

const saveNoteBtn = document.querySelector('#save-note')
const closeNoteBtn = document.querySelector('#close-form')
const table = document.querySelector('.table-main')
const createNoteBtn = document.querySelector('#create-note')
const notaForm = document.querySelector('#note-form')
const updateFormBtn = document.querySelector('#update-note')

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
    showElement(notaForm)
    showElement(updateFormBtn)
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

const getDataForm = () => {
  const notaForm = document.querySelector('#note-form')
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
  return note
}



saveNoteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  noteChanger.addNote(getDataForm())
  renderTable()
})

closeNoteBtn.addEventListener('click', (e) => {
  hiddenElement(saveNoteBtn)
  hiddenElement(updateFormBtn)
  hiddenElement(notaForm)
})

updateFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  noteChanger.updateNote(getDataForm())
  renderTable()
})

createNoteBtn.addEventListener('click', (e) => {
  showElement(saveNoteBtn)
  showElement(notaForm)
})

