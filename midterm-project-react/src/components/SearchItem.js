import React, { useState } from 'react';
import './Inventory.css';

function SearchItem({ items }) {
 const [id, setId] = useState(''); // State to hold the Product ID input
 const [result, setResult] = useState(null);  // State to hold the search result
 const [message, setMessage] = useState({ text: '', type: '' }); // State to hold feedback messages

 // Function to handle the search action
 const handleSearchItem = () => {
   if (!id) {
     setResult(null);
     setMessage({ text: "Please enter Product ID", type: 'error' });
     return;
   }

   // Search for the item with the specified ID
   const foundItem = items.find(item => item.id === id);
    if (foundItem) {
     setResult(foundItem);
     setMessage({ text: "Item has been found!", type: 'success' });
   } else {
     setResult(null);
     setMessage({ text: "Item not found!", type: 'error' });
   }

   setId('');
 };

 // Function to handle input changes
 const handleInputChange = (e) => {
   const inputValue = e.target.value;
   setId(inputValue);

   if (!inputValue) {
     setResult(null);
     setMessage({ text: '', type: '' });
   }
 };


 return (
   <div className="container">
     <div className="form-container">

       <h2>Search Item</h2>

       {/* Input field for entering the Product ID */}
       <input
         type="text"
         value={id}
         onChange={handleInputChange}
         placeholder="Product ID"
       />

       {/* Button to initiate the search */}
       <button onClick={handleSearchItem}><b>Search</b></button>

       {/* Display feedback message */}
       {message.text && <p className={message.type === 'error' ? 'error-message' : 'success-message'}>{message.text}</p>} 
       
       {/* Display the found item's details if available */}
       {result && ( 
         <div>
           <p>Product ID: {result.id}</p>
           <p>Name: {result.name}</p>
           <p>Quantity: {result.quantity}</p>
           <p>Price: {result.price}</p>
           <p>Category: {result.category}</p>
         </div>
       )}
       
     </div>
   </div>
 );
}

export default SearchItem;







