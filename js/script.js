let notes = require('./dataNotes.js')
let createElement = require('./modules/createElement')
let noteChanger = require('./modules/noteChanger')


const table = document.querySelector('.table')
let filterIsArchive = false

const renderTable = () => {
  let showNotes = notes.filter((n) => n.isArchive === filterIsArchive)
  table.innerHTML = createElement.tableHeader()
  for ( n of showNotes) {
    const tr = createElement.tableRow(n)
    table.insertAdjacentElement('beforeend', tr )
  }
}
renderTable()

table.addEventListener('click', (event) => {
  const id = event.target.parentNode.id
  if(event.target.hasAttribute('data-update')){
    notes = noteChanger.updateNote(notes,id)
    renderTable()
  }
  if(event.target.hasAttribute('data-archive')){
    notes = noteChanger.archiveNote(notes,id)
    renderTable()
  }
  if(event.target.hasAttribute('data-delete')){
    notes = noteChanger.deleteNote(notes,id)
    renderTable()
  }
});

