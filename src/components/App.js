import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [fetchListings, setFetchListings] = useState([])
  const [search, setSearch] = useState("")

  const API = "http://localhost:6001/listings/"

  useEffect( () => {
    fetch(API)
    .then(response => response.json())
    .then(data => setFetchListings(data))
    .catch(error => console.log(error))
  }, [] )

  function handleDeleteClick(id) {
    console.log(id)
    fetch(`${API}${id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => {
    const updatedListings = fetchListings.filter( (listing) => listing.id !== id)
    setFetchListings(updatedListings)
    })
  }
  
  const listingsToDisplay = fetchListings
  .filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header searcg={search} onSearchChange={setSearch} />
      <ListingsContainer listings={listingsToDisplay} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
