import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [nameFilter, setNameFilter] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleNameChange(newNameFilter) {
    setNameFilter(newNameFilter);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    
    if (nameFilter && !item.name.toLowerCase().includes(nameFilter.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={nameFilter}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleNameChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
