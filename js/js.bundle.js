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
    "createAt": "2022-06-11T09:38:49 -03:00",
    "category": "Random Thought",
    "content": "Consequat pariatur ullamco velit est deserunt reprehenderit sit irure magna.",
    "date": [
      "2018-06-09T10:20:01 -03:00",
      "2020-01-17T05:50:27 -03:00"
    ],
    "isArchive": true
  },
  {
    "id": "222222",
    "name": "Catalina Horton",
    "createAt": "2015-07-27T10:52:10 -03:00",
    "category": "Random Thought",
    "content": "Adipisicing adipisicing nisi ut et qui nostrud.",
    "date": [
      "2020-08-18T02:32:47 -03:00",
    ],
    "isArchive": false
  },
  {
    "id": "333333",
    "name": "Jimenez Solis",
    "createAt": "2018-09-18T08:44:24 -03:00",
    "category": "Task",
    "content": "In Lorem consequat excepteur consequat sint nisi.",
    "date": [
      "2019-10-04T10:38:45 -03:00"
    ],
    "isArchive": false
  },
  {
    "id": "4444444",
    "name": "Cole Davenport",
    "createAt": "2015-01-12T05:42:23 -03:00",
    "category": "Idea",
    "content": "Proident Lorem in nulla nisi sunt veniam eiusmod fugiat enim sit.",
    "date": [
      "2017-04-07T03:05:57 -03:00",
      "2017-12-23T06:00:03 -03:00"
    ],
    "isArchive": false
  },
  {
    "id": "555555",
    "name": "Petty House",
    "createAt": "2018-03-15T03:43:09 -03:00",
    "category": "Idea",
    "content": "Lorem veniam tempor consequat dolor proident mollit culpa dolor eiusmod eiusmod magna.",
    "date": [
      "2021-05-18T08:10:35 -03:00",
      "2015-10-22T03:43:06 -03:00",
      "2018-11-11T12:26:48 -03:00"
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
      "2022-01-27T04:37:53 -03:00",
      "2022-07-24T10:37:11 -03:00"
    ],
    "isArchive": true
  },
  {
    "id": "777777",
    "name": "Holloway Barrett",
    "createAt": "2022-05-16T03:56:04 -03:00",
    "category": "Random Thought",
    "content": "Officia deserunt enim sit id quis laborum ipsum dolor aute irure.",
    "date": [
      "2019-12-01T02:35:36 -03:00",
      "2018-03-11T02:04:29 -03:00"
    ],
    "isArchive": false
  },
  {
    "id": "888888",
    "name": "Cervantes Hardin",
    "createAt": "2014-02-07T10:14:14 -04:00",
    "category": "Task",
    "content": "Cillum elit ullamco aliqua ad labore sit qui incididunt est.",
    "date": [
      "2022-08-01T03:51:13 -03:00"
      
    ],
    "isArchive": true
  },
  {
    "id": "999999",
    "name": "Vaughn Yates",
    "createAt": "2018-11-14T11:54:01 -03:00",
    "category": "Task",
    "content": "Labore cupidatat tempor est qui culpa nisi aute ad elit.",
    "date": [
      "2022-08-10T09:50:52 -03:00"
    ],
    "isArchive": true
  },
  {
    "id": "1010101010101",
    "name": "Briana Diaz",
    "createAt": "2020-11-13T09:41:41 -03:00",
    "category": "Idea",
    "content": "Ad nisi in reprehenderit nisi minim enim in do qui mollit ea et ut.",
    "date": [
      "2017-02-08T01:10:55 -03:00"
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

const tableRow = () => {
  const tr = document.createElement('tr')
        tr.className = "table__roe row"
        tr.innerHTML = `<td class="row__name">${n.name}</td>
                        <td class="row__created">${n.createAt}</td>
                        <td class="row__category">${n.category}</td>
                        <td class="row__content">${n.content}</td>
                        <td class="row__dates">${n.date}</td>
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

/***/ "./js/modules/noteChanger.js":
/*!***********************************!*\
  !*** ./js/modules/noteChanger.js ***!
  \***********************************/
/***/ ((module) => {




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
let notes = __webpack_require__(/*! ./dataNotes.js */ "./js/dataNotes.js")
let createElement = __webpack_require__(/*! ./modules/createElement */ "./js/modules/createElement.js")
let noteChanger = __webpack_require__(/*! ./modules/noteChanger */ "./js/modules/noteChanger.js")

const table = document.querySelector('.table-main')
let showArchive = false


const renderTable = () => {
  let showNotes = notes.filter((n) => n.isArchive === showArchive)
  table.innerHTML = createElement.tableHeader()
  for ( n of showNotes) {
    const tr = createElement.tableRow(n)
    table.insertAdjacentElement('beforeend', tr )
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
  if(event.target.hasAttribute('data-update')){
    notes = noteChanger.updateNote(notes,id)
    renderTable()
  }
  if(event.target.hasAttribute('data-archive')){
    notes = noteChanger.archiveNote(notes,id)
    renderTable()
  }
  if(event.target.hasAttribute('data-delete')){
    notes = noteChanger.deleteNote(notes,id)
    renderTable()
  }
});




})();

/******/ })()
;
//# sourceMappingURL=js.bundle.js.map