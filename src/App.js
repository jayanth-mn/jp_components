// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar, { SidebarItem } from './components/sidebar';
import Header from './components/header/header';
import MainPage from './pages/Mainpage'; // Import MainPage
import { LayoutDashboard, BarChart3, UserCircle, Boxes, Package, Receipt, Settings, LifeBuoy } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
            <SidebarItem icon={<BarChart3 size={20} />} text="Users" />
            <SidebarItem icon={<UserCircle size={20} />} text="Profile" />
            <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
            <SidebarItem icon={<Package size={20} />} text="Orders" />
            <SidebarItem icon={<Receipt size={20} />} text="Billings" />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          </Sidebar>
          <main className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
