import React, { useState} from "react";
import Login from "./login";
import Profile from "./profile";
import "./login.css";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>{!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Profile />}</div>
  );
}

export default App;
