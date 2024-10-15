import React, { useState } from 'react';
import './Inventory.css';

function UpdateItem({ items, updateItem }) {
  const [productId, setProductId] = useState(''); // State for Product ID
  const [updateField, setUpdateField] = useState('quantity'); // State for the field to update
  const [newValue, setNewValue] = useState(''); // State for the New Value
  const [message, setMessage] = useState({ text: '', type: '' }); // State for feedback messages

  const handleUpdate = () => {
    if (!productId || !newValue) { // Validate input fields
      setMessage({ text: "Please fill in all fields", type: 'error' });
      return;
    }

    const product = items.find(item => item.id === productId); // Find the product
    if (!product) {
      setMessage({ text: "Item not found!", type: 'error' });
      return;
    }

    if (newValue < 0) { // Check for negative value
      const negativeField = updateField === 'quantity' ? 'Quantity' : 'Price';
      setMessage({ text: `${negativeField} cannot be negative`, type: 'error' });
      return;
    }

    const previousValue = product[updateField]; // Get the previous value of the field
    if (Number(newValue) === previousValue) { // Check if the new value is the same as the previous value
      setMessage({
        text: `The ${updateField.charAt(0).toUpperCase() + updateField.slice(1)} for "${product.name}" is already ${previousValue}`,
        type: 'error'
      });
      return;
    }

    const updatedItem = {
      ...product,
      [updateField]: Number(newValue), // Update the specified field
    };

    updateItem(updatedItem); // Update the item in state
    setMessage({
      text: `The ${updateField.charAt(0).toUpperCase() + updateField.slice(1)} for "${product.name}" is updated from ${previousValue} to ${newValue}!`,
      type: 'success'
    });

    // Reset fields after successful update
    setProductId('');
    setNewValue('');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Update Item</h2>

        {/* Input field for entering product details */}
        <input 
          type="text" 
          placeholder="Product ID" 
          value={productId} 
          onChange={(e) => setProductId(e.target.value)} 
        />
        <select 
          value={updateField} 
          onChange={(e) => setUpdateField(e.target.value)}
        >
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input 
          type="number" 
          placeholder="New Value" 
          value={newValue} 
          onChange={(e) => setNewValue(e.target.value)} 
        />

        {/* Button to initiate the update */}
        <button onClick={handleUpdate}><b>Update</b></button>

        {/* Display feedback message */}
        {message.text && (
          <p className={message.type === 'error' ? 'error-message' : 'success-message'}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default UpdateItem;




