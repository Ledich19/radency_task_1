/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/dataNotes.js":
/*!*************************!*\
  !*** ./js/dataNotes.js ***!
  \*************************/
/***/ ((module) => {

const notes = [
  {
    "id": "1111111",
    "name": "Dianna Rose",
    "createAt": "2022-06-11T09:38:49",
    "category": "Random Thought",
    "content": "Consequat pariatur ullamco velit est deserunt reprehenderit sit irure magna.",
    "date": [
      "2018-06-09",
      "2020-01-17"
    ],
    "isArchive": true
  },
  {
    "id": "222222",
    "name": "Catalina Horton",
    "createAt": "2015-07-27T10:52:10",
    "category": "Random Thought",
    "content": "Adipisicing adipisicing nisi ut et qui nostrud.",
    "date": [
      "2020-08-18",
    ],
    "isArchive": false
  },
  {
    "id": "333333",
    "name": "Jimenez Solis",
    "createAt": "2018-09-18T08:44:24",
    "category": "Task",
    "content": "In Lorem consequat excepteur consequat sint nisi.",
    "date": [
      "2019-10-04"
    ],
    "isArchive": false
  },
  {
    "id": "4444444",
    "name": "Cole Davenport",
    "createAt": "2015-01-12T05:42:23",
    "category": "Idea",
    "content": "Proident Lorem in nulla nisi sunt veniam eiusmod fugiat enim sit.",
    "date": [
      "2017-04-07",
      "2017-12-23"
    ],
    "isArchive": false
  },
  {
    "id": "555555",
    "name": "Petty House",
    "createAt": "2018-03-15T03:43:09",
    "category": "Idea",
    "content": "Lorem veniam tempor consequat dolor proident mollit culpa dolor eiusmod eiusmod magna.",
    "date": [
      "2021-05-18",
      "2015-10-22",
      "2018-11-11"
    ],
    "isArchive": false
  },
  {
    "id": "666666",
    "name": "Winifred Holt",
    "createAt": "2014-04-10T03:54:01 -04:00",
    "category": "Idea",
    "content": "Occaecat quis dolor do culpa.",
    "date": [
      "2022-01-27",
      "2022-07-24"
    ],
    "isArchive": true
  },
  {
    "id": "777777",
    "name": "Holloway Barrett",
    "createAt": "2022-05-16T03:56:04",
    "category": "Random Thought",
    "content": "Officia deserunt enim sit id quis laborum ipsum dolor aute irure.",
    "date": [
      "2019-12-01",
      "2018-03-11"
    ],
    "isArchive": false
  },
  {
    "id": "888888",
    "name": "Cervantes Hardin",
    "createAt": "2014-02-07T10:14:14",
    "category": "Task",
    "content": "Cillum elit ullamco aliqua ad labore sit qui incididunt est.",
    "date": [
      "2022-08-01"
      
    ],
    "isArchive": true
  },
  {
    "id": "999999",
    "name": "Vaughn Yates",
    "createAt": "2018-11-14T11:54:01",
    "category": "Task",
    "content": "Labore cupidatat tempor est qui culpa nisi aute ad elit.",
    "date": [
      "2022-08-10"
    ],
    "isArchive": true
  },
  {
    "id": "1010101010101",
    "name": "Briana Diaz",
    "createAt": "2020-11-13T09:41:41",
    "category": "Idea",
    "content": "Ad nisi in reprehenderit nisi minim enim in do qui mollit ea et ut.",
    "date": [
      "2017-02-08"
    ],
    "isArchive": true
  }
]

module.exports = notes

/***/ }),

/***/ "./js/modules/createElement.js":
/*!*************************************!*\
  !*** ./js/modules/createElement.js ***!
  \*************************************/
/***/ ((module) => {

const tableRow = (n) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const dates = n.date.map(d => d.replaceAll('-', '/'))
  const createDate = new Date(n.createAt).toLocaleString('en-US', options)
  const tr = document.createElement('div')
  tr.className = 'table-main__row row'
  tr.innerHTML = `
  <div class="table-main__name">${n.name}</div>
  <div class="table-main__created">${createDate}</div>
  <div class="table-main__category">${n.category}</div>
  <div class="table-main__content">${n.content}</div>
  <div class="table-main__dates">${dates}</div>
  <div id=${n.id} class="table-main__buttons">
    <button data-archive class="table-main__arh">A</button>
    <button data-delete class="table-main__del">D</button>
    <button data-update class="table-main__upd">U</button>
  </div>`
  return tr
}

const tableHeader = () => {
  return `<div class="table-head row">
  <div class="table-head__name">Name</div>
  <div class="table-head__created">Created</div>
  <div class="table-head__category">Category</div>
  <div class="table-head_content">Content</div>
  <div class="table-head__dates">dates</div>
  <div class="table-head__buttons">
    <button data-archive-all id="table__arhAll">A</button>
    <button data-delete-all id="table__delAll">D</button>
  </div>
  </div>`
}

const tableInfoHeader = () => {
  return `<div class="table-info__head table-info__row table-head row">
  <div class="table-info__title">Category</div>
  <div class="table-info__title">active</div>
  <div class="table-info__title">archived</div>
  </div>`
}

const tableInfoRow = (n) => {
  const tr = document.createElement('tr')
  tr.className = 'table-info__row row'
  tr.innerHTML = `
        <div class="able-info__category">${n.category}</div>
        <div class="able-info__active">${n.all - n.archive}</div>
        <div class="able-info__archived">${n.archive}</div>
        </div>`
  return tr
}

module.exports = {
  tableHeader,
  tableRow,
  tableInfoHeader,
  tableInfoRow
}

/***/ }),

/***/ "./js/modules/helper.js":
/*!******************************!*\
  !*** ./js/modules/helper.js ***!
  \******************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/noteForm.js":
/*!********************************!*\
  !*** ./js/modules/noteForm.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  hiddenElement,
  showElement,
  generateId
} = __webpack_require__(/*! ./helper */ "./js/modules/helper.js")
const {
  renderTable,
  renderTableInfo
} = __webpack_require__(/*! ./renderTable */ "./js/modules/renderTable.js")
const noteServices = __webpack_require__(/*! ./../services/noteServices */ "./js/services/noteServices.js")
const {
  setNotesToStore
} = __webpack_require__(/*! ../store */ "./js/store.js")

const saveNoteBtn = document.querySelector('#save-note')
const closeFormBtn = document.querySelector('#close-form')
const createNoteBtn = document.querySelector('#create-note')
const notaForm = document.querySelector('.form-wrapper')
const updateFormBtn = document.querySelector('#update-note')

const noteForm = () => {
  saveNoteBtn.addEventListener('click', (e) => {
    saveNoteHandler(e)
  })
  closeFormBtn.addEventListener('click', (e) => {
    closeFormHandler(e)
  })
  updateFormBtn.addEventListener('click', (e) => {
    updateFormHandler(e)
  })
  createNoteBtn.addEventListener('click', (e) => {
    createNoteHandler(e)
  })

  const getDataForm = () => {
    const notaForm = document.querySelector('#note-form')
    const formData = new FormData(notaForm)
    const note = {
      id:  formData.get('id') ? formData.get('id') : generateId(),
      name: formData.get('name'),
      createAt: new Date(),
      category: formData.get('category'),
      content: formData.get('content'),
      date: [formData.get('date')],
      isArchive: false
    }
    console.log('id', note.id)
    return note
  }

  const closeAll = () => {
    hiddenElement(saveNoteBtn)
    hiddenElement(updateFormBtn)
    hiddenElement(notaForm)
  }

  const saveNoteHandler = async (e) => {
    e.preventDefault()
    try {
      const data = getDataForm()
      let response = await noteServices.addNote(data)
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
      closeAll()
    } catch (err) {
      alert(err)
    }
  }
  const closeFormHandler = (e) => {
    e.preventDefault()
    closeAll()
  }
  const updateFormHandler = async (e) => {
    e.preventDefault()
    try {
      const data = getDataForm()
      let response = await noteServices.updateNote(data)
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
      closeAll()
    } catch (err) {
      alert(err)
    }
  }
  const createNoteHandler = (e) => {
    e.preventDefault()
    closeAll()
    showElement(saveNoteBtn)
    document.getElementById('note-form-name').value = ''
    document.getElementById('note-form-category').value = 'Random Thought'
    document.getElementById('note-form-date').value = ''
    document.getElementById('note-form-content').value = ''
    showElement(notaForm)
  }
}

module.exports = noteForm

/***/ }),

/***/ "./js/modules/renderTable.js":
/*!***********************************!*\
  !*** ./js/modules/renderTable.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const {
  getNotesStore
} = __webpack_require__(/*! ../store */ "./js/store.js")
const {
  tableHeader,
  tableInfoHeader,
  tableInfoRow,
  tableRow
} = __webpack_require__(/*! ./createElement */ "./js/modules/createElement.js")

const table = document.querySelector('.table-main')
const toggleBtn = document.querySelector('#toggle-archive')

let showArchive = false

const renderTable = () => {

  let showNotes = getNotesStore().filter((n) => n.isArchive === showArchive)
  table.innerHTML = tableHeader()

  for (const note of showNotes) {
    const tr = tableRow(note)
    table.insertAdjacentElement('beforeend', tr)
  }
}

const tableInfo = document.querySelector('.table-info')
const renderTableInfo = () => {
  let showCategories = getNotesStore()
  tableInfo.innerHTML = tableInfoHeader()
  let countNotes = []

  for (const note of showCategories) {
    const checkCategory = countNotes.find((n) => n.category === note.category)
    console.log('checkCategory',checkCategory)
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
renderTableInfo()

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault()
  showArchive = !showArchive
  e.target.innerHTML = showArchive ? 'show notes' : 'show archive'
  renderTable()
})

module.exports = { renderTable, renderTableInfo }

/***/ }),

/***/ "./js/modules/table.js":
/*!*****************************!*\
  !*** ./js/modules/table.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  deleteNote,
  updateNote,
  deleteNoteAll,
  updateAll
} = __webpack_require__(/*! ../services/noteServices */ "./js/services/noteServices.js")
const {
  getNoteById,
  setNotesToStore
} = __webpack_require__(/*! ../store */ "./js/store.js")
const {
  showElement,
  hiddenElement
} = __webpack_require__(/*! ./helper */ "./js/modules/helper.js")
const {
  renderTable,
  renderTableInfo
} = __webpack_require__(/*! ./renderTable */ "./js/modules/renderTable.js")

const table = document.querySelector('.table-main')
const saveNoteBtn = document.querySelector('#save-note')
const notaForm = document.querySelector('.form-wrapper')

const updateFormBtn = document.querySelector('#update-note')

const tableFoo = () => {
  table.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.parentNode.id
    if (e.target.hasAttribute('data-update')) {
      updateHandler(id)
    }
    if (e.target.hasAttribute('data-archive')) {
      archiveHandler(id)
    }
    if (e.target.hasAttribute('data-delete')) {
      deleteHandler(id)
    }
    if (e.target.hasAttribute('data-delete-all')) {
      deleteAllHandler()
    }
    if (e.target.hasAttribute('data-archive-all')) {
      archiveAllHandler()
    }
  })
}

const deleteHandler = async (id) => {
  try {
    let response = await deleteNote(id)
    setNotesToStore(response)
    renderTable()
    renderTableInfo()
  } catch (err) {
    alert(err)
  }
}

const updateHandler = async (id) => {
  showElement(notaForm)
  hiddenElement(saveNoteBtn)
  showElement(updateFormBtn)
  const note = getNoteById(id)
  document.getElementById('note-form-name').value = note.name
  document.getElementById('note-form-category').value = note.category
  document.getElementById('note-form-date').value = note.date[note.date.length - 1]
  document.getElementById('note-form-content').value = note.content
  document.getElementById('note-form-id').value = note.id
}

const archiveHandler = async (id) => {
  try {
    const note = getNoteById(id)
    const newNote = {
      ...note,
      isArchive: !note.isArchive
    }
    let response = await updateNote(newNote)
    setNotesToStore(response)
    renderTable()
    renderTableInfo()
  } catch (err) {
    alert(err)
  }
}

const archiveAllHandler = async () => {
  try {
    let response = await updateAll({
      isArchive: true
    })
    setNotesToStore(response)
    renderTable()
    renderTableInfo()
  } catch (err) {
    alert(err)
  }
}

const deleteAllHandler = async () => {
  const ask = confirm('you want to delete everything ?')
  if (ask) {
    try {
      let response = await deleteNoteAll()
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
    } catch (err) {
      alert(err)
    }
  }
}

module.exports = tableFoo

/***/ }),

/***/ "./js/services/noteServices.js":
/*!*************************************!*\
  !*** ./js/services/noteServices.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let notes = __webpack_require__(/*! ../dataNotes */ "./js/dataNotes.js")

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

/***/ }),

/***/ "./js/store.js":
/*!*********************!*\
  !*** ./js/store.js ***!
  \*********************/
/***/ ((module) => {


let notes = []

const getNotesStore = () => {
  return notes
}

const setNotesToStore = (note) => {
  notes = note
}

const clearNotesStore = () => {
  notes = []
}

const getNoteById = (id) => {
  return notes.find(n => n.id === id)
}

module.exports = {
  getNotesStore,
  setNotesToStore,
  clearNotesStore,
  getNoteById
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
let noteServices = __webpack_require__(/*! ./services/noteServices */ "./js/services/noteServices.js")

const { setNotesToStore } = __webpack_require__(/*! ./store */ "./js/store.js")
const { renderTable, renderTableInfo } = __webpack_require__(/*! ./modules/renderTable */ "./js/modules/renderTable.js")
const tableFoo = __webpack_require__(/*! ./modules/table */ "./js/modules/table.js")
const noteForm = __webpack_require__(/*! ./modules/noteForm */ "./js/modules/noteForm.js")

document.addEventListener('DOMContentLoaded', () => {
  async function start() {
    try {
      let response = await noteServices.getNotes()
      setNotesToStore(response)
      renderTable()
      renderTableInfo()
    } catch(err) {
      alert(err)
    }
  }
  start()
  tableFoo()
  noteForm()
})


})();

/******/ })()
;
//# sourceMappingURL=js.bundle.js.map