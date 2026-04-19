import { useThemeContext } from "../contexts/themeContext";


export default function ThemeToggle() {
  const { theme, toggle } = useThemeContext();
  return (
    <button
      onClick={toggle}
      className="icon"
      title="Toggle Theme"
    >
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}
