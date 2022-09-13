let noteServices = require('./services/noteServices')
const tableMain = document.querySelector('.table-main')
const { setNotesToStore } = require('./store')
const { renderTable, renderTableInfo } = require('./modules/renderTable')
const tableFoo = require('./modules/table')
const noteForm = require('./modules/noteForm')
const toggleArchiveBtn = require('./modules/toggleArchiveBtn')
const createNoteBtn = require('./modules/createNoteBtn')

document.addEventListener('DOMContentLoaded', () => {
  async function start() {
    try {
      let response = await noteServices.getNotes()
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
    } catch(err) {
      alert(err)
    }
  }
  start()
  tableFoo()
  noteForm()

  tableMain.insertAdjacentElement('afterend',createNoteBtn())
  tableMain.insertAdjacentElement('afterend',toggleArchiveBtn())
})

