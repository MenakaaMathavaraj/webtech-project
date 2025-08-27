import React, { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.username.trim()) err.username = "Username is required";
    else if (form.username.trim().length < 3)
      err.username = "Username must be at least 3 characters";

    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 6)
      err.password = "Password must be at least 6 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Login submitted:", form);    
    alert("Login submitted — check console for details.");
    setForm({ username: "", password: "" });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Enter username"
        autoComplete="username"
      />
      {errors.username && <div className="error">{errors.username}</div>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter password"
        autoComplete="current-password"
      />
      {errors.password && <div className="error">{errors.password}</div>}

      <button type="submit" className="btn">Submit</button>
    </form>
  );
}