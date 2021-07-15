import React from 'react'

import { Button } from 'reactstrap'
import { faSort, faIdCard, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// custom carret to indicate sorting state
const sortCaret = (order, column) => {
  return (
    <>
      &nbsp;
      <FontAwesomeIcon icon={faSort} />
    </>
  )
}

const userFormatter = (cell, row) => {
  const handleRedirectToUserGithub = () => {
    window.open(row.html_url)
  }

  return (
    <div className="avatar-container" onMouseDown={() => handleRedirectToUserGithub()}>
      <img src={row.avatar_url} className="avatar" alt={row.login} /> {row.login}
    </div>
  )
}

const actionsFormatter = (cell, row) => {
  const handleRedirect = (url) => window.open(url)

  return (
    <>
      <Button color="info" outline size="sm" onClick={() => handleRedirect(row.html_url)}>
        <FontAwesomeIcon icon={faIdCard} /> Profile
      </Button>{' '}
      <Button
        color="info"
        outline
        size="sm"
        onClick={() => handleRedirect(`${row.html_url}?tab=repositories`)}
      >
        <FontAwesomeIcon icon={faClipboardList} /> Repositories
      </Button>
    </>
  )
}

// columns settings
const columns = [
  {
    dataField: 'login',
    text: 'User',
    sort: true,
    sortCaret: (order, column) => sortCaret(order, column),
    formatter: userFormatter,
  },
  {
    dataField: 'score',
    text: 'Score',
    sort: true,
    sortCaret: (order, column) => sortCaret(order, column),
  },
  {
    dataField: 'site_admin',
    text: 'Administrator',
    sort: true,
    sortCaret: (order, column) => sortCaret(order, column),
  },
  {
    dataField: 'type',
    text: 'Account Type',
    sort: true,
    sortCaret: (order, column) => sortCaret(order, column),
  },
  {
    dataField: '',
    text: 'Actions',
    formatter: actionsFormatter,
  },
]

// list columns sorted by default
const defaultSorted = [
  {
    dataField: 'login',
    order: 'desc',
  },
  {
    dataField: 'type',
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

const rowsPerPage = 5

const defaultPage = 1

export { columns, defaultSorted, noDataIndication, rowsPerPage, defaultPage }
