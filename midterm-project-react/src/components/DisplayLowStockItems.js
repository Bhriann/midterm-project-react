import React from 'react';

function DisplayLowStockItems({ items }) {
  const lowStockItems = items.filter(item => item.quantity <= 5); // Threshold for low stock

  return (
    <div>

      <h2>Display Low Stock Items</h2>

      {/* Table to display items */}
      <table>

        <thead> {/* Table Headings/Titles */}
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {lowStockItems.map(item => ( // Map through low stock items to display them
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      
    </div>
  );
}

export default DisplayLowStockItems;

