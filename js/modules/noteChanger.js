const deleteNote = (notes,id) => {
  return notes = notes.filter((n) => n.id !== id )
}

const archiveNote = (notes,id) => {
  return notes = notes.map((n) =>{ 
    return n.id === id ? {...n, isArchive: !n.isArchive } : n
  })
}

const updateNote = (notes,id) => {
  return notes.map((n) => n.id === id ? '': '')
}

module.exports = {
  deleteNote,
  archiveNote,
  updateNote
}