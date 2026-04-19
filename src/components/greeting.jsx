import { useThemeContext } from "../contexts/themeContext";
import { useUserContext } from "../contexts/userContext";

export default function Greeting() {
  const { theme } = useThemeContext();
  const { username } = useUserContext();
  return (
    <div className="card">
      <h2>{username ? `Welcome back, ${username}` : "Please login."}</h2>
      <p className="muted">Current theme: {theme}</p>
      <p className="muted">
        This component received <code>username</code> and <code>theme</code> as
        props, drilled down from <code>App → Layout → Page → Greeting</code>.
      </p>
    </div>
  );
}
