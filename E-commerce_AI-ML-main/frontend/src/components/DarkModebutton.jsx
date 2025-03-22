// import React, { useState } from 'react';

// const DarkModeButton = () => {
//   // State to track the current mode (light or dark)
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Function to toggle between light and dark mode
//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//     // You can also save the mode preference in localStorage or a state management tool
//     // localStorage.setItem('darkMode', !isDarkMode);
//   };

//   // Define styles for light and dark modes
//   const lightModeStyles = {
//     backgroundColor: '#ffffff', // Light background color
//     color: '#000000', // Light text color
//   };

//   const darkModeStyles = {
//     backgroundColor: '#333333', // Dark background color
//     color: '#ffffff', // Dark text color
//   };

//   // Apply the appropriate styles based on the current mode
//   const buttonStyles = isDarkMode ? darkModeStyles : lightModeStyles;

//   return (
//     <button style={buttonStyles} onClick={toggleDarkMode}>
//       ☀️
//     </button>
//   );
// };

// export default DarkModeButton;



import React, { useState, useEffect } from 'react';

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Update global styles when dark mode state changes
    const body = document.body;
    body.style.backgroundColor = isDarkMode ? '#333333' : '#ffffff';
    body.style.color = isDarkMode ? '#ffffff' : '#000000';
    // You can extend this to update more styles globally

    // Optionally, you can save the mode preference in localStorage
    // localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <button style={{ backgroundColor: isDarkMode ? '#333333' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000' , borderRadius:'12px', padding:'0px 20px'}} onClick={toggleDarkMode}>
      ☀️
    </button>
  );
};

export default DarkModeButton;
