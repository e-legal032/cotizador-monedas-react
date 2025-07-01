import "./ThemeToggle.css";

export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  
  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <span className="slider" />
    </label>
  );
}
