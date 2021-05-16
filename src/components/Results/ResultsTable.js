import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import Paginator from './Paginator'

import { columns, defaultSorted, noDataIndication, rowsPerPage, defaultPage } from './tableOptions'

import { searchActions } from '../Search/actions'

const ResultsTable = (props) => {
  const dispatch = useDispatch()
  const { results, totalCount, login } = useSelector((state) => state.search)

  const [page, setPage] = useState(defaultPage)

  useEffect(() => {
    // set pagination page to default when user searches for something different
    login && setPage(defaultPage)
  }, [login])

  const onPageChange = (newPage) => {
    // on clicking pagination buttons
    setPage(newPage)
    dispatch(searchActions.getSearchResults({ login, page: newPage, rowsPerPage }))
  }

  return (
    <Container>
      <BootstrapTable
        bootstrap4
        keyField="avatar_url"
        data={results}
        columns={columns}
        headerWrapperClasses="table-wrapper__custom"
        defaultSorted={defaultSorted}
        noDataIndication={noDataIndication}
        bordered={false}
        wrapperClasses="table-responsive table-hover"
      />
      <Paginator
        options={{
          onPageChange,
          rowsPerPage,
          totalCount,
          page,
        }}
      />
    </Container>
  )
}

export default ResultsTable
