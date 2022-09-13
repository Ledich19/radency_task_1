const {
  hiddenElement,
  generateId
} = require('../helper')
const {
  renderTable,
  renderTableInfo
} = require('./renderTable')
const noteServices = require('./../services/noteServices')
const {
  setNotesToStore
} = require('../store')

const saveNoteBtn = document.querySelector('#save-note')
const closeFormBtn = document.querySelector('#close-form')
const notaForm = document.querySelector('.form-wrapper')
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
    return note
  }
  const closeAll = () => {
    hiddenElement(saveNoteBtn)
    hiddenElement(updateFormBtn)
    hiddenElement(notaForm)
  }
  const saveNoteHandler = async (e) => {
    e.preventDefault()
    try {
      const data = getDataForm()
      let response = await noteServices.addNote(data)
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
      closeAll()
    } catch (err) {
      alert(err)
    }
  }
  const closeFormHandler = (e) => {
    e.preventDefault()
    closeAll()
  }
  const updateFormHandler = async (e) => {
    e.preventDefault()
    try {
      const data = getDataForm()
      let response = await noteServices.updateNote(data)
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
      closeAll()
    } catch (err) {
      alert(err)
    }
  }
}

module.exports = noteForm