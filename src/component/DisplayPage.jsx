import React from "react";
import { useLocation } from "react-router-dom";
function DisplayPage() {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div>
      <h2>Display Page</h2>
      <p><strong>Name:</strong>{name}</p>
      <p><strong>Email:</strong>{email}</p>
    </div>
  );
}

export default DisplayPage;