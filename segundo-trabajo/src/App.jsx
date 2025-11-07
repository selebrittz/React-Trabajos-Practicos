import { useEffect, useState } from "react";
import { Login } from "./components/Login.jsx";
import { Register } from "./components/Register.jsx";

export const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser("");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {user ? (
        <div>
          <h1> Hola de Nuevo {user} </h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <hr />
          <Register />
        </div>
      )}
    </>
  );
};
