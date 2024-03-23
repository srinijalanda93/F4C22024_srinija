import React, { useState, useEffect } from "react";
import "./profile.css";
import { Header } from "./headerPro";
import { PersonalData } from "./personaldata.js";
import { Address } from "./address.js";
import {Company} from "./company.js"
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
      {user && (
        <>
          {" "}
          <Header userData={user} />
          <PersonalData userData={user} />
          <Address userData={user} />
          < Company userData={user}/>
        </>
      )}
    </div>
  );
}

export default Profile;
