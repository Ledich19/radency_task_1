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

module.exports = {
  generateId,
  showElement,
  hiddenElement
}