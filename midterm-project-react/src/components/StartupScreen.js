import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartupScreen.css'; 

const StartupScreen = () => {
  const navigate = useNavigate(); // Initializes navigation

  const handleStart = () => {
    navigate('/main'); // Switches to the main program (App.js)
  };

  return (
    <div className="startup-container">
      <h1><b>WELCOME TO</b></h1>

      <img src="/images/InventoryPro Logo.PNG" alt="Logo" className="logo-image" />
      
      <p className="description"> 
        An inventory management system where you can easily manage your products like a pro!
      </p>

      {/* Button to initiate the transition to the main program */}
      <button className="button" onClick={handleStart}><b>Get Started!</b></button>
    </div>
  );
};

export default StartupScreen;

