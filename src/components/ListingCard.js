import React, {useState} from "react";

function ListingCard({ listing, onRemoveListing }) {
  const {description, id, image, location} = listing;
  const [favorited, setFavorited] = useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" >
        {favorited ? (
          <button className="emoji-button favorite active" onClick={() => setFavorited(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setFavorited(true)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
