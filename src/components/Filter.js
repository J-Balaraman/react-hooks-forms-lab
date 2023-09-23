import React, { useState } from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  const [nameFilter, setNameFilter] = useState(search);

  function handleNameChange(event) {
    const newNameFilter = event.target.value;
    setNameFilter(newNameFilter);
    onSearchChange(newNameFilter);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={nameFilter}
        onChange={handleNameChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
