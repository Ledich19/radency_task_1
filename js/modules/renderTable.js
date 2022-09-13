
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
  let countNotes = []
  for (const note of showCategories) {
    const checkCategory = countNotes.find((n) => n.category === note.category)
    if (checkCategory) {
      const newObject = {
        category: checkCategory.category,
        all: checkCategory.all + 1,
        archive: note.isArchive ? checkCategory.archive +1 : checkCategory.archive
      }
      countNotes = countNotes.map((c) => c.category ===  newObject.category ? newObject : c)
    } else {
      const newObject = {
        category: note.category,
        all: 1,
        archive: note.isArchive ? 1 : 0
      }
      countNotes.push(newObject)
    }
  }
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