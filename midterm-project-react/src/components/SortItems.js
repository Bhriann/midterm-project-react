import React, { useState } from 'react';
import './ItemStyles.css'; 

function SortItems({ items }) {
  const [sortProperty, setSortProperty] = useState('price'); // State for Sort Property (Price or Quantity)
  const [sortOrder, setSortOrder] = useState('asc'); // State for Sort Order (Ascending or Descending)

  // Sort items based on selected property and order
  const sortedItems = [...items].sort((a, b) => {
    if (sortProperty === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price; // Sort by Price, ascending or descending based on Sort Order
    } else {
      return sortOrder === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity; // Sort by Quantity, ascending or descending based on Sort Order
    }
  });

  return (
    <div>

      <h2>Sort Items</h2>

      {/* Dropdown Containers */}
      <div className="dropdown-container"> 

        {/* Dropdown to select sorting property */}
        <select 
          className="dropdown" 
          value={sortProperty} 
          onChange={(e) => setSortProperty(e.target.value)}
        >
          <option value="price">Sort by Price</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
        
        {/* Dropdown to select sorting order */}
        <select 
          className="dropdown" 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Table to display items */}
      <table>

        <thead> {/* Table Headings/Titles */}
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {sortedItems.map(item => (
            // Map through sorted items to display them in the table
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>

      </table>
      
    </div>
  );
}

export default SortItems;