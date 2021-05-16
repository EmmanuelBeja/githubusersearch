import React from 'react'

import { faSort, faSortAlphaUp, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// custom carret to indicate sorting state
const sortCaret = (order, column) => {
  if (!order)
    return (
      <>
        &nbsp;
        <FontAwesomeIcon icon={faSort} />
      </>
    )
  else if (order === 'asc')
    return (
      <>
        &nbsp;
        <FontAwesomeIcon icon={faSortAlphaUp} />
      </>
    )
  else if (order === 'desc')
    return (
      <>
        &nbsp;
        <FontAwesomeIcon icon={faSortAlphaDown} />
      </>
    )
  return null
}

// columns settings
const columns = [
  {
    dataField: 'avatar_url',
    text: 'Avatar URL',
    sort: true,
    sortCaret: (order, column) => sortCaret(order, column),
  },
  {
    dataField: 'login',
    text: 'Login',
    sort: true,
    sortCaret: (order, column) => sortCaret(order, column),
  },
  {
    dataField: 'type',
    text: 'Type',
    sort: true,
    sortCaret: (order, column) => sortCaret(order, column),
  },
]

// list columns sorted by default
const defaultSorted = [
  {
    dataField: 'login',
    order: 'desc',
  },
]

// component displayed when table has no data
const noDataIndication = () => {
  return (
    <div className="text-center">
      <img src="/images/empty-table.svg" className="table-empty" alt="table empty" />
      <p>Nothing to show</p>
    </div>
  )
}

const rowsPerPage = 9

const defaultPage = 1

export { columns, defaultSorted, noDataIndication, rowsPerPage, defaultPage }
