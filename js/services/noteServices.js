let notes = require('../dataNotes')

const getNotes = () => {
  return notes
}
const deleteNote = (id) => {
  notes = notes.filter((n) => n.id !== id )
  return notes
}
const updateNote = (note) => {
  notes = notes.map((n) => {
    const dates = n.date.indexOf(...note.date) >= 0 ? n.date : n.date.concat(note.date)
    return n.id === note.id ? { ...note, date: dates } : n
  })
  return notes
}
const deleteNoteAll = () => {
  notes = []
  return notes
}
const updateAll = (param) => {
  notes = notes.map((n) => {
    return { ...n, ...param }
  } )
  return notes
}
const addNote = (note) => {
  notes = notes.concat(note)
  return notes
}

module.exports = {
  getNotes,
  deleteNote,
  updateNote,
  deleteNoteAll,
  addNote,
  updateAll
}