import React, { useState } from 'react';
import './ItemStyles.css';

function DisplayByCategory({ items }) {
  const [category, setCategory] = useState('Clothing'); // State for selected category

  const filteredItems = items.filter(item => item.category === category); // Filter items by selected category

  return (
    <div>

      <h2>Display Items by Category</h2>

      {/* Dropdown Container */}
      <div className="dropdown-container"> 
        <select 
          className="dropdown" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
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
          {filteredItems.map(item => ( // Map through filtered items to display them
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

export default DisplayByCategory;





