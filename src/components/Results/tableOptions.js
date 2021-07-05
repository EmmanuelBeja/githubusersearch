import React from 'react'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { faSort } from '@fortawesome/free-solid-svg-icons'
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

const avatarFormatter = (cell, row) => {
  const handleRedirectToUserGithub = () => {
    window.open(row.html_url)
  }

  return (
    <div className="avatar-container" onMouseDown={() => handleRedirectToUserGithub()}>
      <img src={cell} className="avatar" alt={row.login} />
    </div>
  )
}

const actionsFormatter = (cell, row) => {
  const handleRedirect = (url) => window.open(url)

  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>Actions</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onMouseDown={() => handleRedirect(row.html_url)}>Profile</DropdownItem>
        <DropdownItem onMouseDown={() => handleRedirect(`${row.html_url}?tab=repositories`)}>
          Repositories
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

// columns settings
const columns = [
  {
    dataField: 'avatar_url',
    text: 'Avatar',
    formatter: avatarFormatter,
  },
  {
    dataField: 'login',
    text: 'User Name',
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

const rowsPerPage = 9

const defaultPage = 1

export { columns, defaultSorted, noDataIndication, rowsPerPage, defaultPage }
