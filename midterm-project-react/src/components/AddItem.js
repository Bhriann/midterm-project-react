import React, { useState } from 'react';
import './Inventory.css';

function AddItem({ addItem, validateUniqueId }) {
  const [id, setId] = useState(''); // State for Product ID
  const [name, setName] = useState(''); // State for Product Name
  const [quantity, setQuantity] = useState(''); // State for Product Quantity
  const [price, setPrice] = useState(''); // State for Product Price
  const [category, setCategory] = useState('Clothing'); // State for Product Category
  const [message, setMessage] = useState({ text: '', type: '' }); // State for feedback messages

  const handleAddItem = () => {
    if (!validateUniqueId(id)) { // Validate unique ID
      setMessage({ text: "Product ID must be unique", type: 'error' });
      return;
    }

    let negativeFields = []; // Array to track which fields are negative
    if (quantity < 0) negativeFields.push("Quantity");
    if (price < 0) negativeFields.push("Price");

    if (negativeFields.length > 0) { // If any negative fields are present
      setMessage({ text: `${negativeFields.join(" and ")} cannot be negative`, type: 'error' });
      return;
    }

    if (id && name && quantity && price && category) {
      addItem({ id, name, quantity: Number(quantity), price: Number(price), category }); // Add item
      setMessage({ text: `Item "${name}" added successfully!`, type: 'success' });
      // Reset fields after successful addition
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('Clothing');
    } else {
      setMessage({ text: "Please fill in all fields", type: 'error' });
    }
  };

  return (
    <div className="container">
      <div className="form-container">

        <h2>Add Item</h2>

        {/* Input field for entering product details */}
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Product ID" />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        {/* Button to initiate the addition */}
        <button onClick={handleAddItem}><b>Add</b></button>

        {/* Display feedback message */}
        {message.text && <p className={message.type === 'error' ? 'error-message' : 'success-message'}>{message.text}</p>}

      </div>
    </div>
  );
}

export default AddItem;





















