import React from "react";
import "./CustomAlert.css"; // Import CSS file


export const CustomAlert = ({ message, onClose }) => {
    if (!message) return null; // Don't render if no message
    return ( <div className="alert-overlay">
        <div className="custom-alert">
          <p>{message}</p>
          <button className="close-btn" onClick={onClose}>OK</button>
        </div>
      </div>
    )
  }
  
