import React, { useState, useEffect } from 'react'

import { Row, Col, ButtonGroup, Button } from 'reactstrap'

const Paginator = ({ options }) => {
  const { onPageChange, rowsPerPage, totalCount, page } = options

  const [direction, setDirection] = useState('')
  const [buttonStack, setButtonStack] = useState([])

  useEffect(() => {
    if (page === 1) {
      // add first bunch of pagination buttons
      const buttons = []
      for (let i = 1; i < totalCount / rowsPerPage; i++) {
        buttons.push(i)
        if (i === 5) {
          break
        }
      }
      setButtonStack(buttons)
    }
  }, [rowsPerPage, totalCount])

  // change buttons in some cases when page changes
  useEffect(() => {
    if ((page - 1) % 5 === 0 && direction === 'Next') {
      // add next bunch of buttons
      const buttons = []
      for (let i = 1; i < totalCount / rowsPerPage; i++) {
        if (i >= page && i <= page + 4) {
          buttons.push(i)
        }
      }
      setButtonStack(buttons)
    } else if (page % 5 === 0 && direction === 'Previous') {
      // add previous bunch of buttons
      const buttons = []
      for (let i = 1; i < totalCount / rowsPerPage; i++) {
        if (i >= page - 4 && i <= page) {
          buttons.push(i)
        }
      }
      setButtonStack(buttons)
    }
  }, [page, totalCount])

  // dont show pagination when no data to paginate
  if (totalCount === 0) {
    return true
  }

  return (
    <Row>
      <Col lg="8" md="8" sm="12" xs="12" className="">
        Showing a maximum of {rowsPerPage} of {totalCount}
      </Col>
      <Col lg="4" md="4" sm="12" xs="12" className="pagination-buttons">
        <ButtonGroup>
          <Button
            color="primary"
            outline
            className={page === 1 ? 'd-none' : ''}
            onClick={() => {
              onPageChange(page - 1)
              setDirection('Previous')
            }}
          >
            Previous
          </Button>
          {buttonStack.map((item, index) => (
            <Button
              color="primary"
              outline={page !== item}
              onClick={() => {
                onPageChange(item)
                setDirection('')
              }}
              key={index}
            >
              {item}
            </Button>
          ))}
          <Button
            color="primary"
            outline
            className={page === 1 && totalCount < 9 ? 'd-none' : ''}
            onClick={() => {
              onPageChange(page + 1)
              setDirection('Next')
            }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
}

export default Paginator
