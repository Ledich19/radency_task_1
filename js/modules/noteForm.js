const {
  hiddenElement,
  showElement,
  generateId
} = require("./helper")
const {
  renderTable,
  renderTableInfo
} = require("./renderTable")
const noteServices = require('./../services/noteServices')
const {
  setNotesToStore
} = require("../store")

const saveNoteBtn = document.querySelector('#save-note')
const closeFormBtn = document.querySelector('#close-form')
const createNoteBtn = document.querySelector('#create-note')
const notaForm = document.querySelector('#note-form')
const updateFormBtn = document.querySelector('#update-note')

const noteForm = () => {
  saveNoteBtn.addEventListener('click', (e) => {
    saveNoteHandler(e)
  })
  closeFormBtn.addEventListener('click', (e) => {
    closeFormHandler(e)
  })
  updateFormBtn.addEventListener('click', (e) => {
    updateFormHandler(e)
  })
  createNoteBtn.addEventListener('click', (e) => {
    createNoteHandler(e)
  })

  const getDataForm = () => {
    const notaForm = document.querySelector('#note-form')
    const formData = new FormData(notaForm)
    const note = {
      id:  formData.get('id') ? formData.get('id') : generateId(),
      name: formData.get('name'),
      createAt: new Date(),
      category: formData.get('category'),
      content: formData.get('content'),
      date: [formData.get('date')],
      isArchive: false
    }
    console.log('id', note.id)
    return note
  }

  const saveNoteHandler = async (e) => {
    e.preventDefault()
    try {
      const data = getDataForm()
      let response = await noteServices.addNote(data)
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
    } catch (err) {
      alert(err);
    }
  }
  const closeFormHandler = (e) => {
    e.preventDefault()
    hiddenElement(saveNoteBtn)
    hiddenElement(updateFormBtn)
    hiddenElement(notaForm)
  }
  const updateFormHandler = async (e) => {
    e.preventDefault()
    try {
      const data = getDataForm()
      let response = await noteServices.updateNote(data)
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
    } catch (err) {
      alert(err);
    }
  }
  const createNoteHandler = (e) => {
    e.preventDefault()
    hiddenElement(updateFormBtn)
    showElement(saveNoteBtn)
    document.getElementById('note-form-name').value = ''
    document.getElementById('note-form-category').value = 'Random Thought'
    document.getElementById('note-form-date').value = ''
    document.getElementById('note-form-content').value = ''
    showElement(notaForm)
  }
}

module.exports = noteForm