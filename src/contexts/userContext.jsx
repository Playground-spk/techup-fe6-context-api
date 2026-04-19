import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

// provider custom hook
export function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");

  const login = (name) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername("");
  };
  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
