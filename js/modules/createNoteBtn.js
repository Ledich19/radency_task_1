const { hiddenElement, showElement } = require('../helper')
const saveNoteBtn = document.querySelector('#save-note')
const notaForm = document.querySelector('.form-wrapper')
const updateFormBtn = document.querySelector('#update-note')

const createNoteBtn = () => {
  const toggleBtn = document.createElement('button')
  toggleBtn.id = 'create-note'
  toggleBtn.innerHTML = 'create note'

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault()
    hiddenElement(saveNoteBtn)
    hiddenElement(updateFormBtn)
    hiddenElement(notaForm)
    showElement(saveNoteBtn)
    document.getElementById('note-form-name').value = ''
    document.getElementById('note-form-category').value = 'Random Thought'
    document.getElementById('note-form-date').value = ''
    document.getElementById('note-form-content').value = ''
    showElement(notaForm)
  })
  return toggleBtn
}

module.exports = createNoteBtn