let notes = require('./../dataNotes')

const getNotes = () => {
  return notes
}

const deleteNote = (id) => {
  console. log(id)
  notes = notes.filter((n) => n.id !== id )
}

const archiveNote = (id) => {
  notes = notes.map((n) =>{ 
    return n.id === id ? {...n, isArchive: !n.isArchive } : n
  })
}

const updateNote = (id) => {
  notes = notes.map((n) => n.id === id ? '': '')
}

const archiveNoteAll = (id) => {
  notes = notes.map((n) =>{ 
    return {...n, isArchive: true }
  })
}

const deleteNoteAll = (id) => {
  notes = []
}

module.exports = {
  getNotes,
  deleteNote,
  archiveNote,
  updateNote,
  deleteNoteAll,
  archiveNoteAll
}