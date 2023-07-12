import React from 'react';

function BagSummary({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  if (numItems === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 😎</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `You have ${numItems} items in your list, and you already packed
      ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default BagSummary;
