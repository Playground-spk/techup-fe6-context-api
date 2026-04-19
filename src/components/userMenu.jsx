import { useState } from "react";
import { useUserContext } from "../contexts/userContext";

function Login() {
  const [input, setInput] = useState("");
  const { login } = useUserContext();
  const onSubmit = (e) => {
    e.preventDefault();
    login(input);
    setInput("");
  };

  return (
    <form onSubmit={onSubmit} action="" className="login-form">
      <input
        value={input}
        type="text"
        placeholder="Your name"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className="primary" type="submit">
        {" "}
        Login{" "}
      </button>
    </form>
  );
}

function Logout() {
  const { username, logout } = useUserContext();
  return (
    <>
      <span>Hi, {username}</span>
      <button
        onClick={logout}
      >Logout</button>
    </>
  );
}

export default function UserMenu() {
  const { username } = useUserContext();
  return (
    <>
      {username ? (
        <Logout  />
      ) : (
        <Login />
      )}
    </>
  );
}
