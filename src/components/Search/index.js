import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Row, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import { faSearch, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'

import { searchActions } from './actions'

import './Search.scss'

const Search = () => {
  const dispatch = useDispatch()
  const { errors, loading } = useSelector((state) => state.search)

  const [login, setLogin] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    errors && toast.error(errors)
  }, [errors])

  useEffect(() => {
    login && setInputError(false)
  }, [login])

  const handleSearch = () => {
    if (!login) {
      setInputError(true)
      toast.error('Please type something to search')
      return
    }
    dispatch(searchActions.getSearchResults(login))
  }

  return (
    <Row>
      <Col
        lg={{ size: 6, offset: 3 }}
        md={{ size: 6, offset: 3 }}
        sm="12"
        xs="12"
        className="search-section"
      >
        <InputGroup>
          <Input
            className="form-control"
            name="login"
            placeholder="Type here..."
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            invalid={inputError}
          />
          <InputGroupAddon addonType="append">
            <Button onClick={() => handleSearch()} outline disabled={loading}>
              {loading ? (
                <FontAwesomeIcon icon={faCircleNotch} pulse />
              ) : (
                <FontAwesomeIcon icon={faSearch} />
              )}
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default Search
