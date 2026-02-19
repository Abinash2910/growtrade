// import React from 'react'

// function Signup() {
//     // return ( 
//     //     <h1>Signup</h1>
//     //  );
// }

// export default Signup;




















// // import React, { useState } from "react";

// // function Signup() {
// //   const [form, setForm] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) =>
// //     setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const res = await fetch("http://localhost:5000/api/auth/register", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(form),
// //     });

// //     const data = await res.json();
// //     alert(data.message);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Signup</h2>

// //       <input
// //         name="username"
// //         placeholder="Username"
// //         onChange={handleChange}
// //         required
// //       />

// //       <input
// //         name="email"
// //         type="email"
// //         placeholder="Email"
// //         onChange={handleChange}
// //         required
// //       />

// //       <input
// //         name="password"
// //         type="password"
// //         placeholder="Password"
// //         onChange={handleChange}
// //         required
// //       />

// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // }

// // export default Signup;











// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import "../Auth.css";

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/api/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (res.status === 201) {
//       alert("Registration successful");
//       window.location.href = "/login";
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
//             <button onClick={() =>navigate("/login")}>
//               SIGN IN
//             </button>
//             <button className="active">
//               SIGN UP
//             </button>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit}>

//           <div className="form-group">
//             <input
//               name="username"
//               type="text"
//               required
//               onChange={handleChange}
//             />
//             <label>Username *</label>
//           </div>

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
//             CREATE ACCOUNT
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 201) {
        navigate("/login"); // ✅ React navigation
      } else {
        setError(data.message || "Registration failed");
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

      {/* RIGHT SIDE – SIGNUP CARD */}
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="lock-icon">🔒</div>

            <div className="tabs">
              <button onClick={() => navigate("/login")}>
                SIGN IN
              </button>
              <button className="active">
                SIGN UP
              </button>
            </div>
          </div>

          {/* ERROR MESSAGE */}
          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="username"
                type="text"
                required
                onChange={handleChange}
              />
              <label>Username *</label>
            </div>

            <div className="form-group">
              <input
                name="email"
                type="email"
                required
                onChange={handleChange}
              />
              <label>Email *</label>
            </div>

            <div className="form-group">
              <input
                name="password"
                type="password"
                required
                onChange={handleChange}
              />
              <label>Password *</label>
            </div>

            <button type="submit" className="auth-btn">
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
