import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/display", { state: { name, email } });
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input  type="text"  value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Email: </label>
          <input 
            type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;