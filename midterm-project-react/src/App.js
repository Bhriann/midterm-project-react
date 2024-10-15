import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import StartupScreen from './components/StartupScreen'; 

import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayByCategory from './components/DisplayByCategory';
import DisplayAllItems from './components/DisplayAllItems';
import DisplayLowStockItems from './components/DisplayLowStockItems';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';

import NavBar from './components/NavBar'; 

import './App.css';

function App() {
  const [items, setItems] = useState([]); // State to manage inventory items

  // Validate that the ID is unique
  const validateUniqueId = (id) => {
    return !items.some(item => item.id === id);
  };

  // Adds a new item to the inventory
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Updates an existing item based on its ID
  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };
  
  // Removes an item from the inventory by ID
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<StartupScreen />} /> {/* Route to the startup screen */}
          <Route path="/main" element={<MainLayout />}>

          {/* Define routes for inventory management functionalities */}
            <Route path="add-item" element={<AddItem items={items} addItem={addItem} validateUniqueId={validateUniqueId} />} />
            <Route path="update-item" element={<UpdateItem items={items} updateItem={updateItem} />} />
            <Route path="remove-item" element={<RemoveItem items={items} removeItem={removeItem} />} />
            <Route path="display-all-items" element={<DisplayAllItems items={items} />} />
            <Route path="display-by-category" element={<DisplayByCategory items={items} />} />
            <Route path="display-low-stock-items" element={<DisplayLowStockItems items={items} />} />
            <Route path="sort-items" element={<SortItems items={items} />} />
            <Route path="search-item" element={<SearchItem items={items} />} />

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function MainLayout() {
  return (
    <div>
      <header className="header">
        <img src="/images/InventoryPro Logo.PNG" alt="Logo" className="logo" />
      </header>

      <NavBar /> {/* Navigation bar for routing between different functionalities */}
      
      <div className="background"></div>
      
      <Outlet /> {/* Renders the matching child route */}
    </div>
  );
}

export default App;





