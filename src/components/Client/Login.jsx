import React, { useState } from "react";

export default function Login() {
  const [activeTab, setActiveTab] = useState("email"); // Tracks the active tab
  const [isFlipping, setIsFlipping] = useState(false); // Animation state
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const [errors, setErrors] = useState({}); // To store validation errors

  const handleTabSwitch = (tab) => {
    if (activeTab !== tab) {
      setIsFlipping(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsFlipping(false);
      }, 600); // Match the animation duration
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (activeTab === "email") {
      if (!email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    }

    // Phone validation
    if (activeTab === "phone") {
      if (!phone) newErrors.phone = "Phone number is required";
      else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone number must be 10 digits";
    }

    // Password validation
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (log the data to console)
      console.log("Form submitted!");
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Password:", password);
      console.log("Country Code:", countryCode);
    }
  };

  return (
    <div className="login-container mt-48">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "email" ? "active" : ""}`}
          onClick={() => handleTabSwitch("email")}
        >
          Login with Email
        </button>
        <button
          className={`tab ${activeTab === "phone" ? "active" : ""}`}
          onClick={() => handleTabSwitch("phone")}
        >
          Login with Phone
        </button>
      </div>
      <div className={`form-wrapper ${isFlipping ? "flipping" : ""}`}>
        <div className={`card ${activeTab === "phone" ? "flipped" : ""}`}>
          {/* Email Login Form */}
          {activeTab === "email" && (
            <div className="form-side front">
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email} // Retain the value even on tab switch
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                <div className="input-block">
                  <label htmlFor="password">Password</label>
                  <div className="password-input-container">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      value={password} // Retain the value even on tab switch
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </span>
                  </div>
                  {errors.password && <span className="error-text">{errors.password}</span>}
                </div>
                <button type="submit" className="submit-btn">
                  Login
                </button>
                <div className="extra-links">
                  <a href="/forgot-password" className="forgot-password-link">
                    Forgot Password?
                  </a>
                  <p>
                    New user? <a href="/signup" className="create-account-link">Create an account now</a>
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* Phone Number Login Form */}
          {activeTab === "phone" && (
            <div className="form-side back">
              <form onSubmit={handleSubmit}>
                <div className="input-block flex-row">
                  <div className="country-code">
                    <label htmlFor="country-code">Country Code</label>
                    <select
                      id="country-code"
                      value={countryCode} // Retain the value even on tab switch
                      onChange={(e) => setCountryCode(e.target.value)}
                      required
                    >
                      <option value="+1">+1 (USA)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (India)</option>
                      <option value="+61">+61 (Australia)</option>
                    </select>
                  </div>
                  <div className="phone-number">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone} // Retain the value even on tab switch
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>
                <div className="input-block">
                  <label htmlFor="password">Password</label>
                  <div className="password-input-container">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      value={password} // Retain the value even on tab switch
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </span>
                  </div>
                  {errors.password && <span className="error-text">{errors.password}</span>}
                </div>
                <button type="submit" className="submit-btn">
                  Login
                </button>
                <div className="extra-links">
                  <a href="/forgot-password" className="forgot-password-link">
                    Forgot Password?
                  </a>
                  <p>
                    New user? <a href="/signup" className="create-account-link">Create an account now</a>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}