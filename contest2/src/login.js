import React, { useState } from "react";
import "./login.css";
function Login({ setLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Invalid username or password");
          }
        })
        .then((data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("id", data.id);
          setLoggedIn(true);
        })
        .catch((error) => {
          alert(error.message);
        });
    };
  
    return (
      <>
      <h2>Login</h2>
      <div className="loginPage">
        
        <div className='input'>
          <label>Enter the User Name</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input'>
          <label>Enter the password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <button onClick={handleLogin}>Login</button>
      </div>
      </>
    );
  }

  export default Login