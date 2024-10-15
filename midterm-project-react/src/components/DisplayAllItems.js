import React from 'react';

function DisplayAllItems({ items }) {
  return (
    <div>

      <h2>Display All Items</h2>

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
          {items.map(item => ( // Map through items to display them
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

export default DisplayAllItems;

