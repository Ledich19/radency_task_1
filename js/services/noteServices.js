let notes = require('../dataNotes')

const getNotes = () => {
  return notes
}
const deleteNote = (id) => {
  notes = notes.filter((n) => n.id !== id )
  return notes
}


const updateNote = (note) => {
  notes = notes.map((n) => n.id === note.id ? note : n)
  return notes
}

const deleteNoteAll = () => {
  notes = []
  return notes
}
const updateAll = (param) => {
  notes = notes.map((n) => {
    return {...n, ...param }
  } )
  return notes
}


const addNote = (note) => {
  notes = notes.concat(note)
  return notes
}


const archiveNote = (id) => {
  notes = notes.map((n) =>{ 
    return n.id === id ? {...n, isArchive: !n.isArchive } : n
  })
}



const archiveNoteAll = () => {
  notes = notes.map((n) =>{ 
    return {...n, isArchive: true }
  })
}



module.exports = {
  getNotes,
  deleteNote,
  archiveNote,
  updateNote,
  deleteNoteAll,
  archiveNoteAll,
  addNote,
  updateAll
}