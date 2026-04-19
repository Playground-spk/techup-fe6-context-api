import "./App.css";
import Greeting from "./components/greeting";
import DefaultLayout from "./components/layouts/defaultLayout";
import { ThemeContextProvider, useThemeContext } from "./contexts/themeContext";
import { UserContextProvider } from "./contexts/userContext";

function AppWrapper({children}) {
    const { theme } = useThemeContext();
  return (
  <div className={`app ${theme}`}>
    {children}
  </div>
  )
}

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
      <AppWrapper>
        <DefaultLayout
          contentRenderer={<Greeting />}
        />
      </AppWrapper>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
