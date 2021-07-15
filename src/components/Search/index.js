import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import { useDebounce } from 'use-debounce'
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

  const [searchInput, setSearchInput] = useState('')
  const [login, setLogin] = useState('')
  const [debouncedText] = useDebounce(login, 2000)
  const [inputError, setInputError] = useState(false)
  const [searches, setSearches] = useState([])

  useEffect(() => {
    debouncedText && handleSearch(debouncedText)
  }, [debouncedText])

  const handleSearch = (input) => {
    if (!input) {
      setInputError(true)
      toast.error('Please type something to search')
      return
    }
    // add searched item to recent searches
    const updatedSearches = searches
    updatedSearches.push(input)
    setSearches(updatedSearches)

    dispatch(
      searchActions.getSearchResults({
        login: input,
        page: defaultPage,
        rowsPerPage,
      })
    )

    setInputError(false)
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
            {loading ? (
              <FontAwesomeIcon icon={faCircleNotch} pulse />
            ) : (
              <FontAwesomeIcon icon={faSearch} />
            )}
          </InputGroupAddon>
          <Input
            className="form-control"
            name="searchInput"
            placeholder="Type here..."
            value={searchInput}
            onChange={(e) => {
              setLogin(e.target.value)
              setSearchInput(e.target.value)
            }}
            invalid={inputError}
            autoComplete="off"
          />

          <RecentSearches searches={searches} handleClick={handleSearch} />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default Search
