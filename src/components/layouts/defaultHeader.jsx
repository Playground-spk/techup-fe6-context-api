import ThemeToggle from "../themeToggle";
import UserMenu from "../userMenu";

export default function DefaultHeader({ theme, setTheme, setUsername, username }) {
  return (
    <div className="header">
      <div className="logo">Simple Demo</div>
      <div className="header-actions">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <UserMenu setUsername={setUsername} username={username}  />
      </div>
    </div>
  );
}
