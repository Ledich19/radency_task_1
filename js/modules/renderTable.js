const { countNotesFoo } = require('../helper')
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
const tableInfo = document.querySelector('.table-info')

const renderTable = () => {
  let showNotes = getNotesStore()
  table.innerHTML = tableHeader()
  for (const note of showNotes) {
    const tr = tableRow(note)
    table.insertAdjacentElement('beforeend', tr)
  }
}

const renderTableInfo = () => {
  let showCategories = getNotesStore()
  tableInfo.innerHTML = tableInfoHeader()
  const countNotes = countNotesFoo(showCategories)
  for (const category of countNotes) {
    const tr = tableInfoRow(category)
    tableInfo.insertAdjacentElement('beforeend', tr)
  }
}

module.exports = { renderTable, renderTableInfo }