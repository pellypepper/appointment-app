import React from "react";

const Tile = ({ name, description }) => {
  return (
    <div className="tile">
      <h3>{name}</h3>
      <ul>
        {Object.entries(description).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tile;
