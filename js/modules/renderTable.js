
const {
  getNotesStore
} = require('../store')
const {
  tableHeader,
  tableInfoHeader,
  tableInfoRow,
  tableRow
} = require('./createElement')

const table = document.querySelector('.table-main')
const toggleBtn = document.querySelector('#toggle-archive')
const tableInfo = document.querySelector('.table-info')

let showArchive = false

const renderTable = () => {
  let showNotes = getNotesStore().filter((n) => n.isArchive === showArchive)
  table.innerHTML = tableHeader()
  for (const note of showNotes) {
    const tr = tableRow(note)
    table.insertAdjacentElement('beforeend', tr)
  }
}

const renderTableInfo = () => {
  let showCategories = getNotesStore()
  tableInfo.innerHTML = tableInfoHeader()
  const countNotes = countNotes(showCategories)
  for (const category of countNotes) {
    const tr = tableInfoRow(category)
    tableInfo.insertAdjacentElement('beforeend', tr)
  }
}

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault()
  showArchive = !showArchive
  e.target.innerHTML = showArchive ? 'show notes' : 'show archive'
  renderTable()
})

module.exports = { renderTable, renderTableInfo }