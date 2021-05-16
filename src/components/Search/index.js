import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Row, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import { faSearch, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'
import RecentSearches from './RecentSearches'

import { rowsPerPage, defaultPage } from '../Results/tableOptions'
import { searchActions } from './actions'

import './Search.scss'

const Search = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.search)

  const [login, setLogin] = useState('')
  const [inputError, setInputError] = useState(false)
  const [searches, setSearches] = useState([])

  useEffect(() => {
    login && setInputError(false)
  }, [login])

  const handleSearch = () => {
    if (!login) {
      setInputError(true)
      toast.error('Please type something to search')
      return
    }
    // add searched item to recent searches
    const updatedSearches = searches
    updatedSearches.push(login)
    setSearches(updatedSearches)

    dispatch(searchActions.getSearchResults({ login, page: defaultPage, rowsPerPage }))
  }

  const handleClickRecent = (item) => {
    dispatch(searchActions.getSearchResults({ login: item, page: defaultPage, rowsPerPage }))
    setLogin(item)
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
          <InputGroupAddon addonType="prepend">
            <Button onClick={() => handleSearch()} outline disabled={loading}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroupAddon>
          <Input
            className="form-control"
            name="login"
            placeholder="Type here..."
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            invalid={inputError}
            autoComplete="off"
          />
          <InputGroupAddon addonType="append">
            <Button onClick={() => handleSearch()} outline disabled={loading}>
              {loading ? <FontAwesomeIcon icon={faCircleNotch} pulse /> : 'Submit'}
            </Button>
          </InputGroupAddon>

          <RecentSearches searches={searches} handleClick={handleClickRecent} />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default Search
