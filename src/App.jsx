import { useState } from "react";
import "./App.css";
import Greeting from "./components/greeting";
import DefaultLayout from "./components/layouts/defaultLayout";

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  return (
    <div className={`app ${theme}`}>
      <DefaultLayout
        theme={theme}
        setTheme={setTheme}
        setUsername={setUsername}
        username={username}
        contentRenderer={<Greeting theme={theme} username={username} />}
      />
    </div>
  );
}

export default App;
