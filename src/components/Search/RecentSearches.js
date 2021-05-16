import React from 'react'
import { useSelector } from 'react-redux'

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = ({ searches, handleClick }) => {
  const { loading } = useSelector((state) => state.search)
  const searchItem = searches
  searchItem.reverse()

  const listItems = () => {
    if (loading) {
      return <FontAwesomeIcon icon={faCircleNotch} pulse />
    }

    return searchItem.map((item, index) => (
      <div className="autocomplete__item" key={index} onMouseDown={() => handleClick(item)}>
        {item}
      </div>
    ))
  }

  return (
    <div className={searches.length === 0 ? 'd-none' : 'search__autocomplete'}>
      <div className="autocomplete">
        <div className="autocomplete__info">RECENT SEARCHES</div>
        {listItems()}
      </div>
    </div>
  )
}

export default Search
