import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
    setLoading(false);
  };

  return (
    <div className="App">
      <nav>
        <h1>Facebook Employees List</h1>
        <button onClick={getUsers}>Get Users</button>
      </nav>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="users">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <div>
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
