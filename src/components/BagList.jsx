import React, { useState } from 'react';
import Item from './Item';

function BagList({ items, setItems }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'quantity')
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item setItems={setItems} key={item.id} item={item} />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input Items</option>
          <option value="quantity">Sort by Item Quantity</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="description">Sort by Description</option>
        </select>
        <button
          onClick={() => {
            setItems([]);
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}

export default BagList;
