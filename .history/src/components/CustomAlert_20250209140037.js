import React from "react";
import "./CustomAlert.css"; // Import CSS file


export const CustomAlert = ({ message }) => {
    if (!message) return null; // Don't render if no message
    return (  <div className="popup-alert">
        <p>{message}</p>
        <button className="close-btn" onClick={}>OK</button>
      </div>
    )
  }
  
