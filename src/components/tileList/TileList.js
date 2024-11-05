import React from "react";
import Tile from '../tile/Tile';

export const TileList = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>; // Handle empty state
  }

  return (
    <div>
      {contacts.map((contact, index) => {
        const { name, id, ...rest } = contact; // Ensure there's an id field

        return (
          <Tile 
            key={id || index} // Use id if available, otherwise fallback to index
            name={name}
            description={rest}
          />
        );
      })}
    </div>
  );
};
