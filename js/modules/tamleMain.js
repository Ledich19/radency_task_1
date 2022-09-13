const { showElement, hiddenElement } = require('../helper')
const { deleteNote, deleteNoteAll, updateAll, updateNote } = require('../services/noteServices')
const {
  getNotesStore, setNotesToStore, getNoteById
} = require('../store')
const {
  tableHeader,
  tableRow
} = require('./createElement')
const saveNoteBtn = document.querySelector('#save-note')
const notaForm = document.querySelector('.form-wrapper')
const updateFormBtn = document.querySelector('#update-note')
const main = document.getElementById('main')

const tableMainElement = () => {
  const tableMain = document.createElement('div')
  tableMain.className = 'table-main'
  tableMain.innerHTML = tableHeader()

  let showNotes = getNotesStore()
  console.log(showNotes)
  for (const note of showNotes) {
    const tr = tableRow(note)
    tableMain.insertAdjacentElement('beforeend', tr)
  }

  tableMain.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.parentNode.id
    if (e.target.hasAttribute('data-update')) {
      updateHandler(id)
    }
    if (e.target.hasAttribute('data-archive')) {
      archiveHandler(id)
    }
    if (e.target.hasAttribute('data-delete')) {
      deleteHandler(id)
    }
    if (e.target.hasAttribute('data-delete-all')) {
      deleteAllHandler()
    }
    if (e.target.hasAttribute('data-archive-all')) {
      archiveAllHandler()
    }
  })


  const deleteHandler = async (id) => {
    try {
      let response = await deleteNote(id)
      setNotesToStore(response)
    } catch (err) {
      alert(err)
    }
  }

  const updateHandler = async (id) => {
    showElement(notaForm)
    hiddenElement(saveNoteBtn)
    showElement(updateFormBtn)
    const note = getNoteById(id)
    document.getElementById('note-form-name').value = note.name
    document.getElementById('note-form-category').value = note.category
    document.getElementById('note-form-date').value = note.date[note.date.length - 1]
    document.getElementById('note-form-content').value = note.content
    document.getElementById('note-form-id').value = note.id
  }

  const archiveHandler = async (id) => {
    try {
      const note = getNoteById(id)
      const newNote = {
        ...note,
        isArchive: !note.isArchive
      }
      let response = await updateNote(newNote)
      setNotesToStore(response)
    } catch (err) {
      alert(err)
    }
  }

  const archiveAllHandler = async () => {
    try {
      let response = await updateAll({
        isArchive: true
      })
      setNotesToStore(response)
    } catch (err) {
      alert(err)
    }
  }

  const deleteAllHandler = async () => {
    const ask = confirm('you want to delete everything ?')
    if (ask) {
      try {
        let response = await deleteNoteAll()
        setNotesToStore(response)
      } catch (err) {
        alert(err)
      }
    }
  }

  return tableMain
}
const renderTableMainElement = () => {
  const table = document.querySelectorAll('.table-main')
  if (table) {
    main.parentNode.removeChild(table)
    table.remove()
  }
  main.insertAdjacentElement('afterbegin',tableMainElement())
}

module.exports = { tableMainElement, renderTableMainElement }