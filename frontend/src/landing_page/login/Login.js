// import React, { useState } from "react";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       alert("Login successful");
//       window.location.href = "/dashboard";
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <input
//         name="email"
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//         required
//       />

//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;












































// import { useNavigate } from "react-router-dom";

// import React, { useState } from "react";
// import "../Auth.css";

// function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       alert("Login successful");
//       window.location.href = "/dashboard";
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">

//         <div className="auth-header">
//           <div className="lock-icon">🔒</div>
//           <div className="tabs">
//             <button className="active">SIGN IN</button>
//             <button onClick={() => navigate("/signup")}>
//               SIGN UP
//             </button>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit}>

//           <div className="form-group">
//             <input
//               name="email"
//               type="email"
//               required
//               onChange={handleChange}
//             />
//             <label>Email *</label>
//           </div>

//           <div className="form-group">
//             <input
//               name="password"
//               type="password"
//               required
//               onChange={handleChange}
//             />
//             <label>Password *</label>
//           </div>

//           <button type="submit" className="auth-btn">
//             LOGIN
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;





















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard"); // ✅ React navigation
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server not reachable");
    }
  };

  return (
    <div className="auth-wrapper">
      {/* LEFT SIDE – ANIMATION VIDEO */}
      <div className="auth-video">
        <video
          src="/Media/Animated.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* RIGHT SIDE – LOGIN CARD */}
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="lock-icon">🔒</div>

            <div className="tabs">
              <button className="active">SIGN IN</button>
              <button onClick={() => navigate("/signup")}>
                SIGN UP
              </button>
            </div>
          </div>

          {/* ERROR MESSAGE */}
          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
              <label>Email *</label>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
              <label>Password *</label>
            </div>

            <button type="submit" className="auth-btn">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

