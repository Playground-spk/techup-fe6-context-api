export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="icon"
      title="Toggle Theme"
    >
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}
