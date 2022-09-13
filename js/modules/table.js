const {
  deleteNote,
  updateNote,
  deleteNoteAll,
  updateAll
} = require('../services/noteServices')
const {
  getNoteById,
  setNotesToStore
} = require('../store')
const {
  showElement,
  hiddenElement
} = require('../helper')
const {
  renderTable,
  renderTableInfo
} = require('./renderTable')

const table = document.querySelector('.table-main')
const saveNoteBtn = document.querySelector('#save-note')
const notaForm = document.querySelector('.form-wrapper')

const updateFormBtn = document.querySelector('#update-note')

const tableFoo = () => {
  table.addEventListener('click', (e) => {
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
}

const deleteHandler = async (id) => {
  try {
    let response = await deleteNote(id)
    setNotesToStore(response)
    renderTable()
    renderTableInfo()
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
    renderTable()
    renderTableInfo()
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
    renderTable()
    renderTableInfo()
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
      renderTable()
      renderTableInfo()
    } catch (err) {
      alert(err)
    }
  }
}

module.exports = tableFoo