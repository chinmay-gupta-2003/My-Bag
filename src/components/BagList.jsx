import React from 'react';
import Item from './Item';

function BagList({ items, setItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item setItems={setItems} key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default BagList;
