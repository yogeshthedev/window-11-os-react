import React from "react";
import "./Edge.css";

const Edge = () => {
  return (
    <div className="edge-window">
      {/* Top Tab Bar */}
      <div className="tab-bar">
        <div className="tab active">New Tab</div>
        <div className="tab">+</div>
      </div>

      {/* Address Bar */}
      <div className="address-bar">
        <button className="nav-btn">⟵</button>
        <button className="nav-btn">⟶</button>
        <button className="nav-btn">⟳</button>
        <input
          type="text"
          className="url-input"
          placeholder="Search or enter web address"
        />
        <button className="nav-btn">★</button>
        <button className="nav-btn">⋮</button>
      </div>

      {/* Page Content */}
      <div className="window-content">
        <h2>Welcome to your Edge clone 🚀</h2>
        <p>This area is the browser content area.</p>
      </div>
    </div>
  );
};

export default Edge;
