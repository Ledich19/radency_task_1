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