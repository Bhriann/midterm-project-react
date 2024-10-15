// Function to validate that the given ID is unique among the provided items
const validateUniqueId = (id, items) => {

  // Check if any item in the items array has the same ID
  return !items.some(item => item.id === id);
};

// Export the validateUniqueId function for use in other modules
export { validateUniqueId };

// Function to validate that the quantity is a positive number
export const validateQuantity = (quantity) => {

  // Return true if the quantity is greater than zero; otherwise, return false
  return quantity > 0;
};

// Function to validate that the price is a positive number
export const validatePrice = (price) => {
  
  // Return true if the price is greater than zero; otherwise, return false
  return price > 0;
};

