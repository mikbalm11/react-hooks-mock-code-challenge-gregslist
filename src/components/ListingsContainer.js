import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

const LOCAL_URL = "http://localhost:6001/listings";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(LOCAL_URL)
      .then(result => result.json())
      .then(data => setListings(data));
  }, []);

  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }

  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <ul className="cards">
        {displayedListings.map(listing =>
          <ListingCard
            key={listing.id}
            listing={listing}
            onRemoveListing={handleRemoveListing}
          />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
