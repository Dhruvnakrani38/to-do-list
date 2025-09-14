import React from 'react';

function Navbar({ onAddTodo }) {
  const navbarStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '10px 20px',
    fontFamily: 'Arial, sans-serif'
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '24px'
  };

  const menuStyle = {
    display: 'flex',
    gap: '15px',
    alignItems: 'center'
  };

  const menuItemStyle = {
    cursor: 'pointer',
    fontSize: '16px'
  };

  const addButtonStyle = {
    backgroundColor: '#28a745',  // Green color
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <>
    <div style={navbarStyle}>
      <div style={logoStyle}>📝 ToDo App</div>
      
      <div style={menuStyle}>
        <div style={menuItemStyle}>Home</div>
        <div style={menuItemStyle}>Tasks</div>
        <div style={menuItemStyle}>Completed</div>
        <div style={menuItemStyle}>Settings</div>

       
      </div>

    </div>
          <div>
         <button style={addButtonStyle} onClick={onAddTodo}>
          + Add To-Do
        </button>
      </div>
    </>
  );
}

export default Navbar;
