const {
  toggleShowArchive,
  getShowArchive
} = require('../store')
const {
  renderTable
} = require('./renderTable')

const toggleArchiveBtn = () => {
  const toggleBtn = document.createElement('button')
  toggleBtn.id = 'toggle-archive'
  toggleBtn.innerHTML = 'show archive'

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault()
    toggleShowArchive()
    e.target.innerHTML = getShowArchive() ? 'show notes' : 'show archive'
    renderTable()
  })
  return toggleBtn
}

module.exports = toggleArchiveBtn