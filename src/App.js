// src/App.js
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

export default function App() {
  const [view, setView] = useState("login"); // "login" or "register"

  return (
    <div className="app-container">
      <header>
        <h1>React Forms</h1>
        <p>Login / Registration example</p>
      </header>

      <div className="switch-buttons">
        <button
          className={view === "login" ? "active" : ""}
          onClick={() => setView("login")}
        >
          Login
        </button>
        <button
          className={view === "register" ? "active" : ""}
          onClick={() => setView("register")}
        >
          Register
        </button>
      </div>

      <main>
        {view === "login" ? <LoginForm /> : <RegistrationForm />}
      </main>
    </div>
  );
}