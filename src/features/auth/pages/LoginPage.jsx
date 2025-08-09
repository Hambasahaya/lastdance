import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    let hasError = false;
    if (email.trim() === "") {
      setErrorEmail("Email tidak boleh kosong");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEmail("Format email tidak valid");
      hasError = true;
    }
    if (password.trim() === "") {
      setErrorPassword("Password tidak boleh kosong");
      hasError = true;
    }

    if (hasError) return;
    if (email === "kelompokpenerbangrocket@gmail.com" && password === "budiarie") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/home");
    } else {
      if (email !== "kelompokpenerbangrocket@gmail.com") {
        setErrorEmail("Email tidak ditemukan");
      } else if (password !== "budiarie") {
        setErrorPassword("Password salah");
      }
    }
  };
  return (
    <div className="row box-login">
      <div className="imgpassword">
        <img src="/img/senyum.png" alt="" />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h5 className="text-center">LOGIN</h5>
          </div>
          <form
            className="d-flex flex-column gap-1"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Email */}
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <span className="icon">
                  <i className="bi bi-envelope"></i>
                </span>
              </div>
              {errorEmail && (
                <small className="text-danger">{errorEmail}</small>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <span className="icon">
                  <i className="bi bi-file-lock2-fill"></i>
                </span>
              </div>
              {errorPassword && (
                <small className="text-danger">{errorPassword}</small>
              )}
            </div>

            <div className="mb-5 d-flex">
              <a href="#" className="ms-auto">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
