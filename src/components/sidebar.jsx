import React, { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Default to expanded

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <ul className="sidebar-items">
        {/* Hamburger button as the first item */}
        <li className="sidebar-item" onClick={toggleSidebar}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="sidebar-item-text">{isOpen ? 'Close' : 'Open'}</span>
        </li>
        {children}
      </ul>
      <div className="sidebar-footer">
        <button className="sidebar-signout">
          <LogOut size={20} />
          {isOpen && <span className="ml-2">Sign Out</span>}
        </button>
      </div>
    </div>
  );
};

export const SidebarItem = ({ icon, text }) => {
  return (
    <li className="sidebar-item" data-text={text}>
      {icon}
      <span className="sidebar-item-text">{text}</span>
    </li>
  );
};

export default Sidebar;
