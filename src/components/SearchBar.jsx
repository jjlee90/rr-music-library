import { useState, useContext } from "react"
import SearchContext from "../context/SearchContext"

function SearchBar() {
  let { term, handleSearch } = useContext(SearchContext)

  return (
    <form>
      <input
        type="text"
        ref={term}
        placeholder="Enter a search term here"
        // onChange={(e) => {
        //   setSearchTerm(e.target.value)
        // }}
      />
      <input
        type="submit"
        onClick={(e) => handleSearch(e, term.current.value)}
      />
    </form>
  )
}

export default SearchBar
