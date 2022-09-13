
let notes = []

const getNotesStore = () => {
  return notes
}

const setNotesToStore = (note) => {
  notes = note
}

const getNoteById = (id) => {
  return notes.find(n => n.id === id)
}

module.exports = {
  getNotesStore,
  setNotesToStore,
  getNoteById
}
