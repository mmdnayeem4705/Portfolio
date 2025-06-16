// Import necessary hooks and functions from React
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the possible theme types: 'light' or 'dark'
type Theme = 'light' | 'dark';

// Define the structure of the context value that will be shared throughout the app
interface ThemeContextType {
  theme: Theme;            // Current theme ('light' or 'dark')
  toggleTheme: () => void; // Function to toggle between 'light' and 'dark' themes
}

// Create a Context object for the theme, with an initial value of undefined
// The context will be used to pass theme-related data through the component tree
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define a ThemeProvider component that will manage and provide the current theme to child components
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use useState hook to initialize the theme state with the value from localStorage (if available)
  // If there's no theme saved in localStorage, default to 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme'); // Retrieve the saved theme from localStorage
    return (savedTheme as Theme) || 'light';          // Return saved theme or default to 'light'
  });

  // useEffect hook runs whenever the theme state changes
  useEffect(() => {
    localStorage.setItem('theme', theme); // Save the current theme to localStorage
    // Toggle the 'dark' class on the <html> element depending on the current theme
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]); // The effect runs only when the 'theme' state changes

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light')); // Toggle between 'light' and 'dark'
  };

  // The ThemeProvider component provides the current theme and the toggle function to its children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render the child components wrapped by the ThemeProvider */}
    </ThemeContext.Provider>
  );
}

// Custom hook to access the current theme and toggle function from the context
export function useTheme() {
  // useContext hook to consume the theme context value
  const context = useContext(ThemeContext);

  // If the context is undefined (meaning the component is not inside a ThemeProvider), throw an error
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  // Return the context value (theme and toggleTheme)
  return context;
}
