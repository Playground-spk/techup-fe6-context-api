import { useState } from "react";

function Login({ setUsername }) {
  const [input, setInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("setUsername", setUsername);
    setUsername(input);
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

function Logout({ setUsername, username }) {
  return (
    <>
      <span>Hi, {username}</span>
      <button
        onClick={() => {
          setUsername("");
        }}
      >Logout</button>
    </>
  );
}

export default function UserMenu({ setUsername, username }) {
  return (
    <>
      {username ? (
        <Logout setUsername={setUsername} username={username} />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </>
  );
}
