import React from "react";
import "./CustomAlert.css"; // Add CSS styling

const CustomAlert = ({ message }) => {
  if (!message) return null;

  return (
    <div className="custom-alert">
      <p>{message}</p>
    </div>
  );
};

export default CustomAlert;
