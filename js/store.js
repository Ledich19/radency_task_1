
let notes = []
let showArchive = false

const getNotesStore = () => {
  return notes.filter((n) => n.isArchive === showArchive)
}

const setNotesToStore = (note) => {
  notes = note
}

const getNoteById = (id) => {
  return notes.find(n => n.id === id)
}

const toggleShowArchive = () => {
  showArchive = !showArchive
}
const getShowArchive = () => {
  return showArchive
}

module.exports = {
  getNotesStore,
  setNotesToStore,
  getNoteById,
  toggleShowArchive,
  getShowArchive
}
