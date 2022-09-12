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
  };
  const dates = n.date.map(d => d.replaceAll('-','/') )
  const createDate = new Date(n.createAt).toLocaleString("en-US", options)

  const tr = document.createElement('tr')
        tr.className = "table__roe row"
        tr.innerHTML = `<td class="row__name">${n.name}</td>
                        <td class="row__created">${createDate}</td>
                        <td class="row__category">${n.category}</td>
                        <td class="row__content">${n.content}</td>
                        <td class="row__dates">${dates}</td>
                        <td id=${n.id} class="row__buttons">
                          <button data-archive class="row__arh">A</button>
                          <button data-delete class="row__del">D</button>
                          <button data-update class="row__upd">U</button>
                        </td>`
  return tr
}

const tableHeader = () => {
  return  `<tr class="table__roe row">
  <th class="row__name">Name</th>
  <th class="row__created">Created</th>
  <th class="row__category">Categoryf</th>
  <th class="row__content">Content</th>
  <th class="row__dates"></th>
  <th class="row__btns">
    <button class="row__arh">A</button>
    <button class="row__del">D</button>
  </th>
  </tr>`
}


const createElement = {
  tableRow,
  tableHeader
}

module.exports = createElement

/***/ }),

/***/ "./js/modules/helper.js":
/*!******************************!*\
  !*** ./js/modules/helper.js ***!
  \******************************/
/***/ ((module) => {

const generateId = () => {
  return (Math.floor(Math.random() * (1000000 - 1 + 1)) + 1).toString() ;
}

module.exports = {
  generateId, 
}

/***/ }),

/***/ "./js/modules/noteChanger.js":
/*!***********************************!*\
  !*** ./js/modules/noteChanger.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let notes = __webpack_require__(/*! ./../dataNotes */ "./js/dataNotes.js")

const getNotes = () => {
  return notes
}

const addNote = (note) => {
  notes = notes.concat(note)
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
  archiveNoteAll,
  addNote
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
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
let createElement = __webpack_require__(/*! ./modules/createElement */ "./js/modules/createElement.js")
const {
  generateId
} = __webpack_require__(/*! ./modules/helper */ "./js/modules/helper.js")
let noteChanger = __webpack_require__(/*! ./modules/noteChanger */ "./js/modules/noteChanger.js")

const table = document.querySelector('.table-main')
let showArchive = false

const renderTable = () => {
  let showNotes = noteChanger.getNotes().filter((n) => n.isArchive === showArchive)
  table.innerHTML = createElement.tableHeader()
  for (n of showNotes) {
    const tr = createElement.tableRow(n)
    table.insertAdjacentElement('beforeend', tr)
  }
}
renderTable()

const toggleShowArchive = () => {
  const toggleBtn = document.querySelector('.toggle-archive')
  toggleBtn.addEventListener('click', (event) => {
    showArchive = !showArchive
    event.target.innerHTML = showArchive ? 'show notes' : 'show archive'
    renderTable()
  });
}
toggleShowArchive()

table.addEventListener('click', (event) => {
  const id = event.target.parentNode.id
  if (event.target.hasAttribute('data-update')) {
    noteChanger.updateNote(id)
    renderTable()
  }
  if (event.target.hasAttribute('data-archive')) {
    noteChanger.archiveNote(id)
    renderTable()
  }
  if (event.target.hasAttribute('data-delete')) {
    noteChanger.deleteNote(id)
    renderTable()
  }
});

const notaForm = document.querySelector('#note-form')
notaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(notaForm)
  const note = {
    id: generateId(),
    name: formData.get('name'),
    createAt: new Date(),
    category: formData.get('category'),
    content: formData.get('content'),
    date: [formData.get('date')],
    isArchive: false
  }
  noteChanger.addNote(note)
  renderTable()
})
})();

/******/ })()
;
//# sourceMappingURL=js.bundle.js.map