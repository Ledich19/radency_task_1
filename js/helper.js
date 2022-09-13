const generateId = () => {
  return (Math.floor(Math.random() * (1000000 - 1 + 1)) + 1).toString()
}
const showElement = (e) => {
  e.classList.remove('hide')
  e.classList.add('show')
}
const hiddenElement = (e) => {
  e.classList.add('hide')
  e.classList.remove('show')
}

const countNotes = (showCategories) => {
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
}

module.exports = {
  generateId,
  showElement,
  hiddenElement,
  countNotes
}