let noteServices = require('./services/noteServices')

const { setNotesToStore } = require('./store')
const { renderTable, renderTableInfo } = require('./modules/renderTable')
const tableFoo = require('./modules/table')
const noteForm = require('./modules/noteForm')

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
})

