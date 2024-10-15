import React, { useState } from 'react';
import './Inventory.css';

function RemoveItem({ items, removeItem }) {
 const [productId, setProductId] = useState(''); // State for Product ID
 const [message, setMessage] = useState({ text: '', type: '' }); // State for feedback messages

 const handleRemove = () => {
   if (!productId) { // Validate input field
     setMessage({ text: "Please enter Product ID", type: 'error' });
     return;
   }

   const product = items.find(item => item.id === productId); // Find the product
   if (!product) {
     setMessage({ text: "Item not found!", type: 'error' });
     return;
   }

   removeItem(productId); // Remove item from state
   setMessage({ text: `Item "${product.name}" removed successfully!`, type: 'success' });
   // Reset fields after successful removal
   setProductId('');
 };

 return (
   <div className="container">
     <div className="form-container">

       <h2>Remove Item</h2>

       {/* Input field for entering the Product ID */}
       <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
       
       {/* Button to initiate the removal */}
       <button onClick={handleRemove}><b>Remove</b></button>

       {/* Display feedback message */}
       {message.text && <p className={message.type === 'error' ? 'error-message' : 'success-message'}>{message.text}</p>} 
       
     </div>
   </div>
 );
}

export default RemoveItem;


