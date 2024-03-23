import React, { useState, useEffect } from "react";

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
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("id");
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>{!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Profile />}</div>
  );
}

export default App;
