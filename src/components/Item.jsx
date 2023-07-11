import React from 'react';

function Item({ item, setItems }) {
  function removeItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function updateItem(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            packed: !item.packed,
          };
        }
        return item;
      })
    );
  }

  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => {
          updateItem(item.id);
        }}
      />
      <span className={item.packed ? 'packed' : ''}>
        {item.quantity}, {item.description}
      </span>
      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
