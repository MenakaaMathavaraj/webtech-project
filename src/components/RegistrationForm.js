import React, { useState } from "react";

export default function RegistrationForm() {
  const initial = {
    name: "",
    dob: "",
    email: "",
    phone: "",
    dept: ""
  };

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.dob) err.dob = "Date of birth is required";

    if (!form.email) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email";

    if (!form.phone) err.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone))
      err.phone = "Phone must be 10 digits (numbers only)";

    if (!form.dept) err.dept = "Please select a department";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Registration data:", form);
    alert("Registration submitted — check console for details.");
    setForm(initial);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h2>Registration</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full name"
      />
      {errors.name && <div className="error">{errors.name}</div>}

      <label htmlFor="dob">Date of Birth</label>
      <input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange} />
      {errors.dob && <div className="error">{errors.dob}</div>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="example@domain.com"
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <label htmlFor="phone">Phone number</label>
      <input
        id="phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="10 digit phone number"
        inputMode="numeric"
      />
      {errors.phone && <div className="error">{errors.phone}</div>}

      <label htmlFor="dept">Department</label>
      <select id="dept" name="dept" value={form.dept} onChange={handleChange}>
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="IT">IT</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="MECH">MECH</option>
      </select>
      {errors.dept && <div className="error">{errors.dept}</div>}

      <div className="form-actions">
        <button type="submit" className="btn">Submit</button>
        <button
          type="button"
          className="btn secondary"
          onClick={() => setForm(initial)}
        >
          Reset
        </button>
      </div>
    </form>
  );
}