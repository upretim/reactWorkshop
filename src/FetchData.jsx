import React, { useEffect, useState } from "react";

function FetchData() {
  const [users, setUsers] = useState([]);

  let url = "https://api.github.com/users";

  const getUserProfiles = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {}
  };

  useEffect(() => {
    getUserProfiles();
  }, []);
  return (
    <section>
      <h3>Git hub Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FetchData;
