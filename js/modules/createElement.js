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