import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import "../components/Sidebar.css";

function Sidebar() {
  // Using states to toogle sidebar when button is clicked
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar pt-5" style={{ width: isOpen ? "5vw" : "12vw" }}>
      {/* Button to toogle sidebar */}
      <span onClick={toggle} class="openCloseBtn" color="primary">
        <i className="fa-solid fa-bars fa-2xl"></i>
      </span>

      {/* mapping each menu item to the sidebar from SidebarData.js */}
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className="sidebar-menu-container mt-4 mb-3 p-3">
            <div className="icon">{item.icon}</div>
            <div
              className="title ps-3"
              style={{ display: isOpen ? "none" : "block" }}
            >
              {item.title}
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default Sidebar;
