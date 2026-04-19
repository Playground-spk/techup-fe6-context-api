import ThemeToggle from "../themeToggle";
import UserMenu from "../userMenu";

export default function DefaultHeader({ setUsername, username }) {
  return (
    <div className="header">
      <div className="logo">Simple Demo</div>
      <div className="header-actions">
        <ThemeToggle />
        <UserMenu setUsername={setUsername} username={username}  />
      </div>
    </div>
  );
}
