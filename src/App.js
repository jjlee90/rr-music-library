import React, { useEffect, useState, useRef, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Gallery from "./components/Gallery"
import SearchBar from "./components/SearchBar"
import { DataContext } from "./context/DataContext"
import SearchContext from "./context/SearchContext"
import ArtistView from "./components/ArtistView"
import AlbumView from "./components/AlbumView"
import { createResource as fetchData } from "./helper/helper"
import "./App.css"
import { Spinner } from "./components/Spinner"

const App = () => {
  let [message, setMessage] = useState("Search for Music!")
  let [data, setData] = useState(null)
  let searchInput = useRef("")

  const handleSearch = (e, term) => {
    e.preventDefault()
    if (searchInput) {
      setData(fetchData(term))
    }
  }

  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <SearchContext.Provider
                  value={{
                    term: searchInput,
                    handleSearch: handleSearch,
                  }}
                >
                  <SearchBar />
                </SearchContext.Provider>

                <DataContext.Provider value={data}>
                  <Suspense fallback={<Spinner />}>
                    {data && <Gallery />}
                  </Suspense>
                </DataContext.Provider>
              </React.Fragment>
            }
          />

          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
