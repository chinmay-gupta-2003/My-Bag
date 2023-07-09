import React from 'react';

function Item({ item }) {
  return (
    <li key={item.id}>
      <input type="checkbox" />
      <span className={item.packed ? 'packed' : ''}>
        {item.quantity}, {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
