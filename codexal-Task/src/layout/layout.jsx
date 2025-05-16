import axios from "axios";
import "./layout.css";
import React, { useEffect, useState } from "react";

const Layout = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (users.data?.length > 0) {
        setUsers(users?.data);

        console.log(users.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Layout;
