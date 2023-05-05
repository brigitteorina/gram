import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Profile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers("https://my-json-server.typicode.com/brigitteorina/My-json-file/users").then((resp) => {
      setUsers(resp);
    });
    async function getUsers(url) {
      const promise = await fetch(url);
      const response = await promise.json();
      return response;
    }
    document.getElementById("searchBar").disabled = true;
  }, []);
  
    );
  });
  return (
    <>
      <Navbar />
      <div className="profile-section">{renderUsers}</div>
    </>
  );
}

export default Profile;
