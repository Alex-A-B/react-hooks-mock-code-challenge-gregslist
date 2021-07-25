import React, { useState } from "react";

function ListingCard( {id, name, image, location, onDeleteClick}) {

  const [favorite, setFavorite] = useState(false)

  function handleFavoriteClick() {
    setFavorite(!favorite)
  }

  function handleDeleteClick() {
    onDeleteClick(id)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={name} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{name}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
