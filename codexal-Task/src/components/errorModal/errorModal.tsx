import React from "react";
import "./errorModal.css";

const ErrorModal = ({ message, onRetry }) => {
  return (
    <div className="error-modal-overlay">
      <div className="error-modal">
        <h2>error</h2>
        <p>{message}</p>
        <button onClick={onRetry}>🔁 try again</button>
      </div>
    </div>
  );
};

export default ErrorModal;