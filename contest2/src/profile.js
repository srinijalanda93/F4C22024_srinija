import React, { useState, useEffect } from "react";
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
            <p>Name: {user.firstName}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            {/* Display other user information */}
          </div>
        )}
      </div>
    );
  }

  export default Profile;