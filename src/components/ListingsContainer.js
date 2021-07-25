import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteClick }) {

  const renderListings = listings.map( (listing) => {
      return (
          <ListingCard
            key={listing.id}
            id={listing.id}
            name={listing.description}
            image={listing.image}
            location={listing.location}
            onDeleteClick={handleDeleteClick}
          />      
      )
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
